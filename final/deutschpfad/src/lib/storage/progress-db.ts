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

/** تحميل التقدم من IndexedDB (مع ترحيل من LocalStorage القديم) */
export async function loadProgressFromDb(): Promise<ProgressState> {
  try {
    const stored = await getRecord<ProgressState>("progress", PROGRESS_KEY);
    if (stored) return sanitize(stored);

    // ترحيل من النسخة القديمة (LocalStorage v1) إن وُجدت
    const legacy = loadProgress();
    if (legacy.completedUnits.length > 0) {
      await saveProgressToDb(legacy);
      return legacy;
    }
    return EMPTY_PROGRESS;
  } catch {
    return loadProgress();
  }
}

/** حفظ التقدم في IndexedDB + مرآة LocalStorage */
export async function saveProgressToDb(state: ProgressState): Promise<void> {
  try {
    await putRecord("progress", PROGRESS_KEY, state);
  } catch {
    // تجاهل أخطاء IndexedDB (وضع خاص مثلاً)
  }
  saveProgress(state);
}
