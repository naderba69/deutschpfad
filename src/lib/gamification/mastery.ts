/**
 * نظام نجوم الإتقان ⭐⭐⭐ — لكل درس حتى 3 نجوم:
 * ① أُنجز الدرس ② بلا أخطاء مسجّلة في دفتر الأخطاء لهذا الدرس
 * ③ السرعة: غير مُقاسة بعد (لا توجد بيانات توقيت للدرس) — تُمنح النجمة الثالثة مستقبلاً عند توفرها.
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
  if (typeof window === "undefined") return;
  try {
    const clamped = Math.min(3, Math.max(0, Math.floor(stars)));
    localStorage.setItem(PREFIX + lessonId, String(clamped));
  } catch {
    /* التخزين غير متاح — تُتجاهل الكتابة بصمت */
  }
}


/** نجوم كل مستوى (للعرض في مراكز المستويات) */
function getLevelStars(levelLessonIds: string[]): { total: number; earned: number } {
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

/**
 * منح نجوم الدرس عند إتمامه (تُستدعى من مساري الإكمال في lesson-client):
 * نجمة للإتمام + نجمة إن لم تُسجَّل أخطاء لهذا الدرس في دفتر الأخطاء.
 * لا تنقص النجوم أبداً (setLessonStars يأخذ الأقصى).
 * يعيد عدد النجوم الممنوحة (1 أو 2).
 */
export async function awardLessonStars(lessonId: string): Promise<number> {
  let stars = 1;
  try {
    const { getNotebookResult } = await import("@/lib/storage/error-notebook");
    const result = await getNotebookResult();
    if (result.ok) {
      const mistakes = result.rows.filter((r) => r.lessonId === lessonId);
      if (mistakes.length === 0) stars = 2;
    }
  } catch {
    /* تعذر فحص الأخطاء — تُمنح نجمة الإتمام فقط */
  }
  setLessonStars(lessonId, stars);
  return stars;
}
