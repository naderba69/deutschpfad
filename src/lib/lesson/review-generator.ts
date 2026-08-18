import type { Exercise, Lesson } from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════════
 *  مولّد المراجعة التراكمية (Interleaving Review Generator)
 *  — يضمن أن كل درس يملك مراجعة تراكمية —
 *  · إن كان الدرس يملك review محدداً → يستخدمه
 *  · وإلا يولّد 3 أسئلة MCQ من الدروس السابقة (نفس المستوى
 *    بترتيب أدنى + كل دروس المستويات السابقة) — تطبيق حقيقي
 *    لمبدأ «التكرار المتداخل»: إعادة تنشيط القديم قبل الجديد.
 * ═══════════════════════════════════════════════════════════
 */

const LEVEL_ORDER: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

/** ترتيب المستويات كسلسلة تقدم (لكل مستوى ما قبله) */
export const PREVIOUS_LEVEL_LABEL: Record<string, string> = {
  A1: "المستوى",
  A2: "A1",
  B1: "A2",
  B2: "B1",
};

/** هل يملك الدرس مراجعة مكتوبة يدوياً؟ */
export function hasManualReview(lesson: Lesson): boolean {
  return Array.isArray(lesson.review) && lesson.review.length > 0;
}

/** بناء مراجعة تراكمية للدرس (يدوية أو مولّدة) */
export async function buildInterleavedReview(lesson: Lesson): Promise<Exercise[]> {
  // 1) مراجعة يدوية إن وُجدت
  if (hasManualReview(lesson)) return lesson.review as Exercise[];

  // 2) توليد من الدروس السابقة (تحميل كسول حتى لا يثقل الحزمة)
  try {
    const { LESSONS } = await import("@/data/lessons");
    const currentLevelIdx = LEVEL_ORDER[lesson.level] ?? 0;
    const previousLessons = LESSONS.filter((l) => {
      const lIdx = LEVEL_ORDER[l.level] ?? 0;
      return lIdx < currentLevelIdx || (lIdx === currentLevelIdx && l.order < lesson.order);
    });

    // نجمع أسئلة MCQ من الدروس السابقة (اختيار متنوع)
    const mcqs = previousLessons.flatMap((l) =>
      l.miniTest.filter((q): q is Extract<Exercise, { type: "multiple-choice" }> => q.type === "multiple-choice"),
    );

    // خلط بسيط واختيار 3 (أو كل ما توفر)
    const shuffled = [...mcqs].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 3);

    if (picked.length === 0) return [];

    // نعيد تأطيرها كمراجعة بمعرّفات فريدة (لا تتعارض مع تمارين الدرس)
    return picked.map((q, i) => ({
      ...q,
      id: `review-${lesson.id}-${i}`,
      instructionAr: `مراجعة تراكمية من مستوى سابق: ${q.questionAr ?? q.instructionAr ?? ""}`,
    }));
  } catch {
    return [];
  }
}
