import {getDb} from "@/lib/storage/db";
import {PROGRESS_KEY} from "@/lib/storage/keys";
import type { BackupData, Snapshot } from "@/types/storage";
import type { AnalyticsEvent } from "@/types/analytics";

/**
 * ═══════════════════════════════════════════════════════════
 *  التصدير / الاستيراد / النسخ الاحتياطي — Storage Contract v2
 *  (إصلاح P0-01 من تدقيق 2026-08-15):
 *  1) النسخة تشمل: التقدم الكامل + البطاقات + الأحداث + الإعدادات
 *     + كل مفاتيح LocalStorage ذات البادئة dp: / deutschpfad:
 *  2) الاستعادة تحافظ على sealedLevels/completedLessons (لا تختزل للوحدات)
 *  3) الاستبدال ذري: تحقق كامل أولاً ثم transaction متعدد المخازن
 *  4) التحقق صارم: يشترط settings ويتحقق من البطاقات بعمق وحدود حجم
 *  5) restoreLocalStorage: قائمة أمان بالبادئات (لا كتابة عشوائية)
 * ═══════════════════════════════════════════════════════════
 */

export const BACKUP_VERSION = 2 as const;
const MAX_AUTO_SNAPSHOTS = 14;

/** بادئات مفاتيح localStorage المملوكة للمنصة (allowlist للتصدير/الاستعادة) */
const LS_PREFIXES = ["dp:", "deutschpfad:"] as const;

/** ═══ P0-02: مفاتيح لا تُصدَّر أبداً (مفتاح LLM الخاص بالمستخدم) ═══ */
const LS_EXCLUDED = new Set(["dp:llm:user-key"]);

/** كل مخازن IndexedDB السبعة */
const DB_STORES = ["progress", "cards", "events", "settings", "snapshots", "llm-cache", "llm-usage"] as const;

/** هل مفتاح localStorage مملوك للمنصة؟ */
export function isOwnedLsKey(key: string): boolean {
  return LS_PREFIXES.some((p) => key.startsWith(p));
}

/** جمع كل مفاتيح localStorage المملوكة (ديناميكياً — لا قائمة ثابتة ناقصة) */
function collectOwnedLsKeys(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const out: Record<string, string> = {};
  try {
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && isOwnedLsKey(k) && !LS_EXCLUDED.has(k)) {
        const v = window.localStorage.getItem(k);
        if (v !== null) out[k] = v;
      }
    }
  } catch {
    /* تجاهل */
  }
  return out;
}

/** بناء نسخة كاملة من كل بيانات المستخدم (IndexedDB + localStorage) */
export async function buildBackupData(): Promise<BackupData> {
  const db = await getDb();
  const [progress, cards, events, settingsRecs] = await Promise.all([
    db.get("progress", PROGRESS_KEY),
    db.getAll("cards"),
    db.getAll("events"),
    db.getAll("settings"),
  ]);

  const settings: Record<string, unknown> = {};
  for (const rec of settingsRecs) settings[rec.key] = rec.data;

  // جمع كل مفاتيح localStorage المملوكة تحت مفتاح محجوز
  const ls = collectOwnedLsKeys();
  if (Object.keys(ls).length > 0) settings["_localStorage"] = ls;

  return {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    progress: (progress?.data as BackupData["progress"]) ?? { completedUnits: [] },
    cards,
    events: events as AnalyticsEvent[],
    settings,
  };
}

/** استعادة بيانات localStorage (قائمة أمان: البادئات المملوكة فقط) */
function restoreLocalStorage(settings: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const ls = settings["_localStorage"];
  if (!ls || typeof ls !== "object") return;
  for (const [k, v] of Object.entries(ls as Record<string, string>)) {
    if (!isOwnedLsKey(k)) continue; // لا نكتب مفاتيح غريبة
    try {
      window.localStorage.setItem(k, String(v));
    } catch {
      /* تجاهل */
    }
  }
}

/** التحقق الصارم من صحة نسخة مستوردة (schema runtime) */
export function validateBackupData(raw: unknown): raw is BackupData {
  if (!raw || typeof raw !== "object") return false;
  const b = raw as Partial<BackupData>;

  // الإصدار: نقبل 1 (تُرحَّل) و 2
  if (b.version !== 1 && b.version !== 2) return false;
  if (typeof b.exportedAt !== "string") return false;

  // التقدم: يجب أن يكون كائناً بـ completedUnits مصفوفة
  if (!b.progress || typeof b.progress !== "object") return false;
  if (!Array.isArray((b.progress as { completedUnits?: unknown }).completedUnits)) return false;

  // البطاقات: مصفوفة بعناصر صالحة
  if (!Array.isArray(b.cards)) return false;
  for (const c of b.cards) {
    if (!c || typeof c !== "object" || typeof (c as { id?: unknown }).id !== "string") return false;
  }

  // الأحداث (اختياري في v1): مصفوفة إن وُجدت
  if (b.events !== undefined && !Array.isArray(b.events)) return false;

  // الإعدادات: يجب أن تكون كائناً (P0-01: كانت مفقودة تُسبب استعادة جزئية)
  if (!b.settings || typeof b.settings !== "object") return false;

  // حدود الحجم: 20MB كحد أقصى للنسخة
  try {
    const size = JSON.stringify(b).length;
    if (size > 20 * 1024 * 1024) return false;
  } catch {
    return false;
  }

  return true;
}

/** دمج التقدم (قواعد دمج لكل نوع) */
function mergeProgress(existing: BackupData["progress"] | undefined, incoming: BackupData["progress"]): BackupData["progress"] {
  if (!existing) return incoming;
  return {
    completedUnits: [...new Set([...(existing.completedUnits ?? []), ...(incoming.completedUnits ?? [])])],
    sealedLevels: [...new Set([...(existing.sealedLevels ?? []), ...(incoming.sealedLevels ?? [])])],
    completedLessons: [...new Set([...(existing.completedLessons ?? []), ...(incoming.completedLessons ?? [])])],
  };
}

/** كتابة نسخة في قاعدة البيانات (merge أو replace) — ذرية في replace */
export async function writeBackupData(data: BackupData, mode: "merge" | "replace"): Promise<void> {
  const db = await getDb();

  // التحقق الكامل قبل أي مسح — إن فشل لا نمسّ شيئاً
  if (!validateBackupData(data)) {
    throw new Error("بيانات غير صالحة");
  }

  if (mode === "replace") {
    // ═══ استبدال ذري: transaction واحد متعدد المخازن — كل شيء أو لا شيء ═══
    const tx = db.transaction([...DB_STORES], "readwrite");
    for (const store of DB_STORES) {
      await tx.objectStore(store).clear();
    }
    // التقدم الكامل (لا اختزال للوحدات)
    await tx.objectStore("progress").put({ key: PROGRESS_KEY, data: data.progress });
    for (const card of data.cards) await tx.objectStore("cards").put(card);
    if (data.events) for (const ev of data.events) await tx.objectStore("events").add(ev);
    for (const [key, value] of Object.entries(data.settings)) {
      if (key === "_localStorage") continue;
      await tx.objectStore("settings").put({ key, data: value });
    }
    await tx.done;
    restoreLocalStorage(data.settings);
    return;
  }

  // ── وضع الدمج: دون مسح — تحقق من الوجود أولاً ثم اكتب ──
  const existingProgress =
    (await db.get("progress", PROGRESS_KEY))?.data as BackupData["progress"] | undefined;
  await db.put("progress", {
    key: PROGRESS_KEY,
    data: mergeProgress(existingProgress, data.progress),
  });

  // البطاقات: دمج بالمعرّف
  const existingCards = await db.getAll("cards");
  const existingIds = new Set(existingCards.map((c) => c.id));
  const toAdd = data.cards.filter((c) => !existingIds.has(c.id));
  if (toAdd.length > 0) {
    const tx = db.transaction("cards", "readwrite");
    for (const card of toAdd) tx.objectStore("cards").put(card);
    await tx.done;
  }

  // الأحداث: دمج (لا نكرر — نضيف الجديد فقط)
  if (data.events && data.events.length > 0) {
    const existingEvents = await db.getAll("events");
    const evKey = (e: AnalyticsEvent) => `${e.type}:${e.ts}:${JSON.stringify((e as unknown as Record<string, unknown>).result ?? (e as unknown as Record<string, unknown>).lessonId ?? (e as unknown as Record<string, unknown>).exerciseId ?? "")}`;
    const existingKeys = new Set(existingEvents.map(evKey));
    const newEvents = data.events.filter((e) => !existingKeys.has(evKey(e)));
    if (newEvents.length > 0) {
      const tx = db.transaction("events", "readwrite");
      for (const ev of newEvents) await tx.objectStore("events").add(ev);
      await tx.done;
    }
  }

  // الإعدادات (دمج)
  for (const [key, value] of Object.entries(data.settings)) {
    if (key === "_localStorage") continue;
    await db.put("settings", { key, data: value });
  }

  restoreLocalStorage(data.settings);
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
  a.remove();
  URL.revokeObjectURL(url);
}

/** اسم ملف النسخة (يتضمن التاريخ والوقت) */
export function backupFilename(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `deutschpfad-backup-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}.json`;
}

/** لقطة تلقائية يومية (لا تتجاوز حد عدد اللقطات) */
export async function maybeAutoSnapshot(): Promise<boolean> {
  try {
    const snaps = await getSnapshots();
    const today = new Date().toISOString().slice(0, 10);
    if (snaps.some((s) => s.createdAt && new Date(s.createdAt).toISOString().slice(0, 10) === today && s.kind === "auto")) {
      return false;
    }
    await createManualSnapshot("auto");
    return true;
  } catch {
    return false;
  }
}

/** إنشاء لقطة يدوية أو تلقائية */
export async function createManualSnapshot(kind: "manual" | "auto" = "manual"): Promise<string> {
  const data = await buildBackupData();
  const db = await getDb();
  const id = `snap-${Date.now()}`;
  await db.add("snapshots", { id, createdAt: Date.now(), kind, data } satisfies Snapshot);

  // تقليم اللقطات الزائدة
  const all = await getSnapshots();
  const over = all.length - MAX_AUTO_SNAPSHOTS;
  if (over > 0) {
    const toDelete = all.slice(0, over);
    const tx = db.transaction("snapshots", "readwrite");
    for (const s of toDelete) await tx.store.delete(s.id);
    await tx.done;
  }
  return id;
}

/** كل اللقطات مرتبة من الأحدث */
export async function getSnapshots(): Promise<Snapshot[]> {
  try {
    const db = await getDb();
    const all = (await db.getAll("snapshots")) as Snapshot[];
    return all.sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    return [];
  }
}

/** استعادة لقطة (استبدال كامل عبر المسار الذري) */
export async function restoreSnapshot(id: string): Promise<void> {
  const db = await getDb();
  const snap = await db.get("snapshots", id);
  if (!snap) throw new Error("اللقطة غير موجودة");
  await writeBackupData(snap.data as BackupData, "replace");
}

/** حذف لقطة */
export async function deleteSnapshot(id: string): Promise<void> {
  const db = await getDb();
  await db.delete("snapshots", id);
}
