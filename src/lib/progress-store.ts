import type { ProgressState } from "@/types/curriculum";

/**
 * مخزن التقدم في LocalStorage
 * — نسخة المرحلة 1 (مؤقتة وبسيطة) —
 * سيتم استبدالها في المرحلة 4 بنظام IndexedDB + خوارزمية SM-2
 * مع الحفاظ على نفس الواجهة حتى لا تتأثر المكونات.
 */

const STORAGE_KEY = "deutschpfad:progress:v1";

export const EMPTY_PROGRESS: ProgressState = {
  completedUnits: [],
  sealedLevels: [],
  completedLessons: [],
};

/** قراءة التقدم المحفوظ (آمنة لبيئة المتصفح فقط) */
export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return EMPTY_PROGRESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (!Array.isArray(parsed.completedUnits)) return EMPTY_PROGRESS;
    return {
      completedUnits: parsed.completedUnits.filter((id) => typeof id === "string"),
      sealedLevels: Array.isArray(parsed.sealedLevels)
        ? (parsed.sealedLevels as string[]).filter((l) => ["A1", "A2", "B1", "B2"].includes(l)) as ProgressState["sealedLevels"]
        : [],
      completedLessons: Array.isArray(parsed.completedLessons)
        ? (parsed.completedLessons as string[]).filter((id) => typeof id === "string")
        : [],
    };
  } catch {
    return EMPTY_PROGRESS;
  }
}

/** حفظ التقدم */
export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // تجاهل أخطاء التخزين (وضع التصفح الخاص مثلاً)
  }
}

/** مسح كل التقدم */
export function clearProgress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // تجاهل
  }
}
