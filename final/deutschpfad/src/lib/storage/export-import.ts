import {getDb} from "@/lib/storage/db";
import {PROGRESS_KEY} from "@/lib/storage/keys";
import type { BackupData, Snapshot } from "@/types/storage";

/**
 * التصدير / الاستيراد / النسخ الاحتياطي (JSON)
 */

const BACKUP_VERSION = 1 as const;
const MAX_AUTO_SNAPSHOTS = 14;

/** بناء نسخة كاملة من كل بيانات المستخدم */
export async function buildBackupData(): Promise<BackupData> {
  const db = await getDb();
  const [progress, cards, settingsRecs] = await Promise.all([
    db.get("progress", PROGRESS_KEY),
    db.getAll("cards"),
    db.getAll("settings"),
  ]);

  const settings: Record<string, unknown> = {};
  for (const rec of settingsRecs) settings[rec.key] = rec.data;

  return {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    progress: (progress?.data as BackupData["progress"]) ?? { completedUnits: [] },
    cards,
    settings,
  };
}

/** التحقق من صحة نسخة مستوردة */
export function validateBackupData(raw: unknown): raw is BackupData {
  if (!raw || typeof raw !== "object") return false;
  const b = raw as Partial<BackupData>;
  return (
    b.version === BACKUP_VERSION &&
    typeof b.exportedAt === "string" &&
    !!b.progress &&
    Array.isArray(b.progress.completedUnits) &&
    Array.isArray(b.cards)
  );
}

/** كتابة نسخة في قاعدة البيانات (merge أو replace) */
export async function writeBackupData(data: BackupData, mode: "merge" | "replace"): Promise<void> {
  const db = await getDb();

  if (mode === "replace") {
    await db.clear("progress");
    await db.clear("cards");
    await db.clear("settings");
  }

  // التقدم: دمج (اتحاد الوحدات) أو استبدال
  const existingProgress =
    (await db.get("progress", PROGRESS_KEY))?.data as BackupData["progress"] | undefined;
  const mergedUnits =
    mode === "merge" && existingProgress
      ? [...new Set([...(existingProgress.completedUnits ?? []), ...data.progress.completedUnits])]
      : data.progress.completedUnits;
  await db.put("progress", { key: PROGRESS_KEY, data: { completedUnits: mergedUnits } });

  // البطاقات: دمج بالمعرّف أو استبدال
  if (mode === "merge") {
    const existingCards = await db.getAll("cards");
    const existingIds = new Set(existingCards.map((c) => c.id));
    const toAdd = data.cards.filter((c) => !existingIds.has(c.id));
    const tx = db.transaction("cards", "readwrite");
    for (const card of toAdd) tx.store.put(card);
    await tx.done;
  } else {
    const tx = db.transaction("cards", "readwrite");
    for (const card of data.cards) tx.store.put(card);
    await tx.done;
  }

  // الإعدادات
  for (const [key, value] of Object.entries(data.settings)) {
    await db.put("settings", { key, data: value });
  }
}

/** تنزيل نص كملف */
export function downloadJson(data: unknown, filename: string): void {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** اسم ملف النسخة الافتراضي */
export function backupFilename(): string {
  const d = new Date().toISOString().slice(0, 10);
  return `deutschpfad-backup-${d}.json`;
}

/* ── اللقطات (Snapshots) ── */

/** لقطة تلقائية يومية (لا تنشئ مكرراً في نفس اليوم) */
export async function maybeAutoSnapshot(): Promise<boolean> {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const id = `auto-${today}`;
    const db = await getDb();
    const existing = await db.get("snapshots", id);
    if (existing) return false;

    const data = await buildBackupData();
    await db.put("snapshots", { id, createdAt: Date.now(), kind: "auto", data });

    // تقليم اللقطات التلقائية القديمة
    const all = await db.getAll("snapshots");
    const auto = all.filter((s) => s.kind === "auto").sort((a, b) => b.createdAt - a.createdAt);
    if (auto.length > MAX_AUTO_SNAPSHOTS) {
      const tx = db.transaction("snapshots", "readwrite");
      for (const s of auto.slice(MAX_AUTO_SNAPSHOTS)) tx.store.delete(s.id);
      await tx.done;
    }
    return true;
  } catch {
    return false;
  }
}

/** لقطة يدوية الآن */
export async function createManualSnapshot(): Promise<string> {
  const data = await buildBackupData();
  const id = `manual-${Date.now()}`;
  await (await getDb()).put("snapshots", { id, createdAt: Date.now(), kind: "manual", data });
  return id;
}

/** كل اللقطات (الأحدث أولاً) */
export async function getSnapshots(): Promise<Snapshot[]> {
  try {
    const all = await (await getDb()).getAll("snapshots");
    return all.sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    return [];
  }
}

/** استعادة لقطة */
export async function restoreSnapshot(id: string): Promise<void> {
  const snap = await (await getDb()).get("snapshots", id);
  if (!snap) throw new Error("اللقطة غير موجودة");
  await writeBackupData(snap.data, "replace");
}

/** حذف لقطة */
export async function deleteSnapshot(id: string): Promise<void> {
  await (await getDb()).delete("snapshots", id);
}
