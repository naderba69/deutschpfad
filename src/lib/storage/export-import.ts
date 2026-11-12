import {getDb} from "@/lib/storage/db";
import {PROGRESS_KEY} from "@/lib/storage/keys";
import type { BackupData, Snapshot } from "@/types/storage";
import type { Sm2CardData } from "@/types/srs";
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
export const MAX_BACKUP_BYTES = 20 * 1024 * 1024;
const MAX_AUTO_SNAPSHOTS = 14;

/** بادئات مفاتيح localStorage المملوكة للمنصة (allowlist للتصدير/الاستعادة) */
const LS_PREFIXES = [
  "dp:",
  "deutschpfad:",
  // تقدم الدروس (موضع الخطوة/الأقسام): مفاتيح بصيغ أخرى غير dp: — كانت تُفقد عند النسخ
  // lesson-step: هو المفتاح الحي الوحيد (lesson-client)؛ dp-flow:/dp-steps: إرث من
  // مكونات محذوفة — تُبقى في القائمة لاستعادة النسخ القديمة فقط.
  "lesson-step:",
  "dp-flow:",
  "dp-steps:",
] as const;

/** ═══ P0-02: مفاتيح لا تُصدَّر أبداً (مفتاح LLM الخاص بالمستخدم) ═══ */
const LS_EXCLUDED = new Set(["dp:llm:user-key"]);

/** كل مخازن IndexedDB السبعة */
const DB_STORES = ["progress", "cards", "events", "settings", "snapshots", "llm-cache", "llm-usage"] as const;

/** هل مفتاح localStorage مملوك للمنصة؟ */
export function isOwnedLsKey(key: string): boolean {
  return LS_PREFIXES.some((p) => key.startsWith(p));
}

/** المفاتيح التي يجوز للنسخ الاحتياطي استعادتها؛ الأسرار المستثناة لا تُكتب حتى لو وردت في ملف مستورد. */
export function isRestorableLsKey(key: string): boolean {
  return isOwnedLsKey(key) && !LS_EXCLUDED.has(key);
}

/** جمع كل مفاتيح localStorage المملوكة (ديناميكياً — لا قائمة ثابتة ناقصة) */
export function collectOwnedLsKeys(): Record<string, string> {
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
    throw new Error("تعذر قراءة مفاتيح التخزين المحلي؛ أُوقف التصدير لتجنب إنشاء نسخة ناقصة.");
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

/** مسح مفاتيح التطبيق القابلة للاستعادة قبل وضع الاستبدال؛ تُبقى أسرار BYOK المستثناة محلياً. */
export function clearRestorableLocalStorage(): void {
  if (typeof window === "undefined") return;
  try {
    const keys: string[] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key && isRestorableLsKey(key)) keys.push(key);
    }
    for (const key of keys) window.localStorage.removeItem(key);
  } catch {
    throw new Error("تعذر مسح مفاتيح التطبيق من التخزين المحلي؛ قد تكون استعادة قاعدة البيانات قد تمت وحدها.");
  }
}

/** استعادة بيانات localStorage (قائمة أمان: البادئات المملوكة فقط) */
export function restoreLocalStorage(settings: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const ls = settings["_localStorage"];
  if (!ls || typeof ls !== "object") return;
  for (const [k, v] of Object.entries(ls as Record<string, string>)) {
    if (!isRestorableLsKey(k)) continue; // لا نكتب مفاتيح غريبة أو أسراراً مستثناة
    try {
      window.localStorage.setItem(k, String(v));
    } catch {
      throw new Error("تم تحديث قاعدة البيانات، لكن تعذر استعادة بعض مفاتيح التخزين المحلي. قد تكون العملية جزئية.");
    }
  }
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function withoutAnalyticsEventId(event: AnalyticsEvent): AnalyticsEvent {
  const {id: _storedId, ...importedEvent} = event;
  return importedEvent;
}

export function deduplicateAnalyticsEvents(
  existingEvents: AnalyticsEvent[],
  incomingEvents: AnalyticsEvent[],
): AnalyticsEvent[] {
  const eventKey = (event: AnalyticsEvent) => {
    const fields = Object.entries(event as unknown as Record<string, unknown>)
      .filter(([key]) => key !== "id")
      .sort(([a], [b]) => a.localeCompare(b));
    return JSON.stringify(fields);
  };
  const seen = new Set(existingEvents.map(eventKey));
  return incomingEvents.filter((event) => {
    const key = eventKey(event);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isValidAnalyticsEvent(value: unknown): value is AnalyticsEvent {
  if (!isPlainRecord(value) || !isFiniteNumber(value.ts)) return false;
  if (value.id !== undefined && !isFiniteNumber(value.id)) return false;
  switch (value.type) {
    case "exercise-result":
      return typeof value.exerciseId === "string" && typeof value.exerciseType === "string" &&
        typeof value.correct === "boolean" && isFiniteNumber(value.points);
    case "pronunciation-score":
      return typeof value.target === "string" && isFiniteNumber(value.score);
    case "self-pronunciation-rating":
      return typeof value.target === "string" && [0, 0.5, 1].includes(value.rating as number);
    case "skill-result":
      return typeof value.skill === "string" && typeof value.correct === "boolean";
    case "lesson-completed":
      return typeof value.lessonId === "string" && typeof value.unitId === "string";
    case "lesson-view":
      return typeof value.lessonId === "string";
    case "review":
      return typeof value.cardId === "string" && isFiniteNumber(value.quality);
    case "test-result":
      return isPlainRecord(value.result);
    case "session-minute":
      return isFiniteNumber(value.minutes);
    default:
      return false;
  }
}

function isValidCard(value: unknown): value is Sm2CardData {
  if (!isPlainRecord(value)) return false;
  return typeof value.id === "string" && typeof value.de === "string" && typeof value.ar === "string" &&
    ["A1", "A2", "B1", "B2"].includes(String(value.level)) &&
    ["lesson", "manual", "sentence"].includes(String(value.source)) &&
    isFiniteNumber(value.createdAt) && isFiniteNumber(value.repetitions) &&
    isFiniteNumber(value.interval) && isFiniteNumber(value.ease) && isFiniteNumber(value.due) &&
    (value.lastReview === null || value.lastReview === undefined || isFiniteNumber(value.lastReview)) &&
    isFiniteNumber(value.lapses) && isFiniteNumber(value.qualitySum) && isFiniteNumber(value.qualityCount) &&
    (value.example === undefined || typeof value.example === "string") &&
    (value.exampleAr === undefined || typeof value.exampleAr === "string");
}

/** التحقق من بنية النسخة المستوردة قبل لمس IndexedDB */
export function validateBackupData(raw: unknown): raw is BackupData {
  if (!isPlainRecord(raw)) return false;
  const b = raw;

  if (b.version !== 1 && b.version !== 2) return false;
  if (typeof b.exportedAt !== "string" || !Number.isFinite(Date.parse(b.exportedAt))) return false;

  if (!isPlainRecord(b.progress) || !Array.isArray(b.progress.completedUnits) ||
    !b.progress.completedUnits.every((value) => typeof value === "string")) return false;
  if (b.progress.sealedLevels !== undefined &&
    (!Array.isArray(b.progress.sealedLevels) || !b.progress.sealedLevels.every((value) => ["A1", "A2", "B1", "B2"].includes(String(value))))) return false;
  if (b.progress.completedLessons !== undefined &&
    (!Array.isArray(b.progress.completedLessons) || !b.progress.completedLessons.every((value) => typeof value === "string"))) return false;

  if (!Array.isArray(b.cards) || !b.cards.every(isValidCard)) return false;
  if (b.events !== undefined && (!Array.isArray(b.events) || !b.events.every(isValidAnalyticsEvent))) return false;
  if (!isPlainRecord(b.settings)) return false;

  const localStorageBackup = b.settings["_localStorage"];
  if (localStorageBackup !== undefined &&
    (!isPlainRecord(localStorageBackup) || !Object.entries(localStorageBackup).every(([key, value]) =>
      typeof key === "string" && typeof value === "string"))) return false;

  // حد الحجم يُحسب ببايتات UTF-8 لا بعدد وحدات UTF-16.
  try {
    const serialized = JSON.stringify(b);
    if (new TextEncoder().encode(serialized).byteLength > MAX_BACKUP_BYTES) return false;
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
    if (data.events) for (const ev of data.events) await tx.objectStore("events").add(withoutAnalyticsEventId(ev));
    for (const [key, value] of Object.entries(data.settings)) {
      if (key === "_localStorage") continue;
      await tx.objectStore("settings").put({ key, data: value });
    }
    await tx.done;
    clearRestorableLocalStorage();
    restoreLocalStorage(data.settings);
    return;
  }

  // ── وضع الدمج: اقرأ/تحقق أولاً، ثم اكتب كل مخازن IndexedDB في معاملة واحدة ──
  const [existingProgressRecord, existingCards, existingEvents] = await Promise.all([
    db.get("progress", PROGRESS_KEY),
    db.getAll("cards"),
    db.getAll("events"),
  ]);
  const existingProgress = existingProgressRecord?.data as BackupData["progress"] | undefined;
  const existingIds = new Set(existingCards.map((card) => card.id));
  const cardsToAdd = data.cards.filter((card) => !existingIds.has(card.id));
  const eventsToAdd = deduplicateAnalyticsEvents(existingEvents, data.events ?? []);
  const settingsToWrite = Object.entries(data.settings).filter(([key]) => key !== "_localStorage");

  const tx = db.transaction(["progress", "cards", "events", "settings"], "readwrite");
  const writes: Promise<unknown>[] = [
    tx.objectStore("progress").put({
      key: PROGRESS_KEY,
      data: mergeProgress(existingProgress, data.progress),
    }),
  ];
  for (const card of cardsToAdd) writes.push(tx.objectStore("cards").put(card));
  for (const event of eventsToAdd) writes.push(tx.objectStore("events").add(withoutAnalyticsEventId(event)));
  for (const [key, value] of settingsToWrite) {
    writes.push(tx.objectStore("settings").put({key, data: value}));
  }
  await Promise.all([...writes, tx.done]);

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
export type AutoSnapshotResult = "created" | "already-exists" | "error";

export async function maybeAutoSnapshot(): Promise<AutoSnapshotResult> {
  try {
    const result = await getSnapshotsResult();
    if (!result.ok) return "error";
    const today = new Date().toISOString().slice(0, 10);
    if (result.rows.some((s) => s.createdAt && new Date(s.createdAt).toISOString().slice(0, 10) === today && s.kind === "auto")) {
      return "already-exists";
    }
    await createManualSnapshot("auto");
    return "created";
  } catch {
    return "error";
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
export type SnapshotReadResult = {ok: true; rows: Snapshot[]} | {ok: false; rows: []};

/** قراءة اللقطات مع التمييز بين القائمة الفارغة وفشل التخزين. */
export async function getSnapshotsResult(): Promise<SnapshotReadResult> {
  try {
    const db = await getDb();
    const all = (await db.getAll("snapshots")) as Snapshot[];
    return {ok: true, rows: all.sort((a, b) => b.createdAt - a.createdAt)};
  } catch {
    return {ok: false, rows: []};
  }
}

/** كل اللقطات مرتبة من الأحدث؛ للاستخدامات التي لا تعرض حالة التخزين. */
async function getSnapshots(): Promise<Snapshot[]> {
  return (await getSnapshotsResult()).rows;
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
