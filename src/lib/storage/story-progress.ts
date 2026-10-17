/**
 * تقدم القصص 📚 — أي قصة أتممتها يُحفظ (LocalStorage)
 * — تقدم منفصل لكل متصفح — ويُعرض ✓ في المكتبة
 */

const KEY = "dp:stories:v1";

/** القصص المكتملة */
export function getCompletedStories(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? (JSON.parse(raw) as string[]) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

/** تسجيل إتمام قصة */
export function markStoryCompleted(id: string): void {
  try {
    const done = new Set(getCompletedStories());
    done.add(id);
    localStorage.setItem(KEY, JSON.stringify([...done]));
  } catch {
    /* تجاهل */
  }
}

/** إحصائيات لكل مستوى: كم أتممت من كم */
export function getStoryProgress(levelCounts: Record<string, number>): Record<string, { done: number; total: number }> {
  const done = getCompletedStories();
  const out: Record<string, { done: number; total: number }> = {};
  for (const [level, total] of Object.entries(levelCounts)) {
    const levelStories = done.filter((id) => id.startsWith(`${level.toLowerCase()}-`));
    out[level] = { done: levelStories.length, total };
  }
  return out;
}

/** إعادة تعيين تقدم القصص */
export function resetStoryProgress(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* تجاهل */
  }
}
