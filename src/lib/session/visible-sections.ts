/**
 * ═══════════════════════════════════════════════════════════
 *  الأقسام المعروضة فعلاً لدرس — دالة نقية
 *
 *  هذه الشروط نفسها التي تستعملها صفحة الدرس (lesson-client) لتحديد
 *  الأقسام الظاهرة. يجب أن تبقى متطابقة معها؛ يحرسها `visible-sections.test.ts`.
 * ═══════════════════════════════════════════════════════════
 */

import {LESSON_SECTIONS, type LessonSectionDef} from "@/components/lesson/lesson-sections";

export interface VisibilityInput {
  level: string;
  /** هل للدرس مهام وساطة؟ (mediation.length > 0) */
  hasMediation: boolean;
  /** هل للدرس مهام تفاعل؟ (interaction.length > 0) */
  hasInteraction: boolean;
  /** هل توجد أسئلة مراجعة تراكمية؟ (يُحسب من المولّد أو المحمّل) */
  reviewAvailable: boolean;
  /** هل للدرس مفردات مكتوبة؟ (lesson.wortschatz) */
  hasWortschatz: boolean;
  /** هل للدرس ملاحظات ثقافية؟ (lesson.landeskunde) */
  hasLandeskunde: boolean;
  /** هل للدرس موارد رديفة مربوطة؟ */
  hasRelatedResources: boolean;
}

export function visibleSectionIds(input: VisibilityInput): string[] {
  return LESSON_SECTIONS.filter(
    (def) =>
      (def.id !== "review" || input.reviewAvailable) &&
      (def.id !== "verben" || input.level === "B1" || input.level === "B2") &&
      (def.id !== "mediation" || input.hasMediation) &&
      (def.id !== "interaction" || input.hasInteraction) &&
      (def.id !== "wortschatz" || input.hasWortschatz) &&
      (def.id !== "landeskunde" || input.hasLandeskunde) &&
      (def.id !== "vertiefung" || input.hasRelatedResources),
  ).map((def) => def.id);
}

/** فهرس القسم المطلوب من رابط `?section=<id>`، أو -1 إن لم يوجد في الأقسام المعروضة. */
export function sectionIndexFromUrl(search: string, sectionIds: readonly string[]): number {
  const wanted = new URLSearchParams(search).get("section");
  return wanted ? sectionIds.indexOf(wanted) : -1;
}

/** تعريفات الأقسام المعروضة لدرس (المصدر الوحيد لصفحة الدرس وصفحة الحصة). */
export function visibleSectionDefs(
  lesson: {
    level: string;
    mediation?: readonly unknown[];
    interaction?: readonly unknown[];
    wortschatz?: readonly unknown[];
    landeskunde?: readonly unknown[];
  },
  reviewAvailable: boolean,
  hasRelatedResources: boolean,
): LessonSectionDef[] {
  const ids = new Set(
    visibleSectionIds({
      level: lesson.level,
      hasMediation: !!lesson.mediation && lesson.mediation.length > 0,
      hasInteraction: !!lesson.interaction && lesson.interaction.length > 0,
      hasWortschatz: !!lesson.wortschatz && lesson.wortschatz.length > 0,
      hasLandeskunde: !!lesson.landeskunde && lesson.landeskunde.length > 0,
      reviewAvailable,
      hasRelatedResources,
    }),
  );
  return LESSON_SECTIONS.filter((def) => ids.has(def.id));
}
