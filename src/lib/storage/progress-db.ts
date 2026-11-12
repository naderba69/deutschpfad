import {EMPTY_PROGRESS, loadProgress, saveProgress} from "@/lib/progress-store";
import {getRecord, putRecord} from "@/lib/storage/db";
import type { ProgressState } from "@/types/curriculum";

/**
 * تخزين التقدم — IndexedDB (الأساسي) + مرآة LocalStorage (للسرعة والتوافق)
 * — يهاجر تلقائياً من النسخة القديمة (LocalStorage v1) —
 */

const PROGRESS_KEY = "progress:v2";

function sanitize(raw: unknown): ProgressState {
  if (!raw || typeof raw !== "object") return EMPTY_PROGRESS;
  const p = raw as Partial<ProgressState>;
  if (!Array.isArray(p.completedUnits)) return EMPTY_PROGRESS;
  return {
    completedUnits: p.completedUnits.filter((id) => typeof id === "string"),
    sealedLevels: Array.isArray(p.sealedLevels)
      ? (p.sealedLevels as string[]).filter((l) => ["A1", "A2", "B1", "B2"].includes(l)) as ProgressState["sealedLevels"]
      : [],
    completedLessons: Array.isArray(p.completedLessons)
      ? (p.completedLessons as string[]).filter((id) => typeof id === "string")
      : [],
  };
}

export type ProgressLoadResult = {ok: true; state: ProgressState} | {ok: false; state: ProgressState};

/** تحميل التقدم وتمييز تعذر القراءة كي لا تُكتب المرآة القديمة فوق بيانات غير مقروءة. */
export async function loadProgressResult(): Promise<ProgressLoadResult> {
  try {
    const stored = await getRecord<ProgressState>("progress", PROGRESS_KEY);
    if (stored) return {ok: true, state: sanitize(stored)};

    // ترحيل من النسخة القديمة (LocalStorage v1) إن وُجدت؛ نجاح القراءة أثبت عدم وجود سجل أحدث.
    const legacy = loadProgress();
    if (legacy.completedUnits.length > 0) await saveProgressToDb(legacy);
    return {ok: true, state: legacy.completedUnits.length > 0 ? legacy : EMPTY_PROGRESS};
  } catch {
    return {ok: false, state: loadProgress()};
  }
}



/** حفظ التقدم في IndexedDB + مرآة LocalStorage */
export interface ProgressSaveResult {
  indexedDbSaved: boolean;
  localStorageSaved: boolean;
  persistedSomewhere: boolean;
}

let progressSaveQueue: Promise<void> = Promise.resolve();

/** يحفظ بالتتابع لمنع كتابة حالة قديمة بعد حالة أحدث، ويكشف نتيجة الوجهتين. */
export function saveProgressToDb(state: ProgressState): Promise<ProgressSaveResult> {
  const operation = progressSaveQueue.then(async () => {
    let indexedDbSaved = false;
    try {
      await putRecord("progress", PROGRESS_KEY, state);
      indexedDbSaved = true;
    } catch {
      // جرّب المرآة، لكن لا تخفِ النتيجة عن واجهة المستخدم.
    }
    const localStorageSaved = saveProgress(state);
    return {
      indexedDbSaved,
      localStorageSaved,
      persistedSomewhere: indexedDbSaved || localStorageSaved,
    };
  });
  progressSaveQueue = operation.then(() => undefined, () => undefined);
  return operation;
}
