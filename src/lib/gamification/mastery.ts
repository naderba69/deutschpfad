/**
 * نظام نجوم الإتقان ⭐⭐⭐ — لكل درس 3 نجوم:
 * ① أُنجز الدرس ② بلا أخطاء ③ بسرعة (تحدي الزمن)
 * يُخزَّن محلياً: dp:mastery:{lessonId} = عدد النجوم (0-3)
 */

const PREFIX = "dp:mastery:";

export function getLessonStars(lessonId: string): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(PREFIX + lessonId);
    const n = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(n) ? Math.min(3, Math.max(0, n)) : 0;
  } catch {
    return 0;
  }
}

export function setLessonStars(lessonId: string, stars: number): void {
  try {
    const current = getLessonStars(lessonId);
    const next = Math.max(current, Math.min(3, stars)); // لا تنقص أبداً
    localStorage.setItem(PREFIX + lessonId, String(next));
  } catch {
    /* تجاهل */
  }
}

/** نجوم كل مستوى (للعرض في مراكز المستويات) */
export function getLevelStars(levelLessonIds: string[]): { total: number; earned: number } {
  let total = levelLessonIds.length * 3;
  let earned = 0;
  for (const id of levelLessonIds) earned += getLessonStars(id);
  return { total, earned };
}

/** نسبة إتقان المستوى (0-100) */
export function getLevelMasteryPct(levelLessonIds: string[]): number {
  const { total, earned } = getLevelStars(levelLessonIds);
  if (total === 0) return 0;
  return Math.round((earned / total) * 100);
}
