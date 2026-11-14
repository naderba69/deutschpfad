/**
 * تحميل الدروس مستوىً واحداً في المرة — بدل حزمة المنهاج كاملاً (3.8MB خام).
 *
 * المشكلة المقيسة: `import("@/data/lessons")` يسحب كل الدروس التسعة والأربعين
 * في حزمة واحدة؛ وكل «اختبار وحدة» يحتاج درساً أو درسين. لذلك كانت صفحة
 * الاختبار تجلب ~1MB مضغوطة لتوليد عشرة أسئلة.
 *
 * الحل: مجمِّعات لكل مستوى (a1-level.ts … b2-level.ts) + خريطة تحميل صريحة
 * (لا سياق ديناميكي، كي يستطيع المُجمِّع إنتاج حزمة لكل مستوى).
 *
 * **شرط التطابق:** `balanceChoiceTree` يعتمد على ترتيب الدرس في `RAW_LESSONS`
 * (البذرة = الفهرس + 1). لذلك تبقى خريطة `GLOBAL_ORDER` نسخة من ترتيب المعرّفات
 * نفسها، ويحرس اختبارٌ التطابقَ الكامل: الناتج هنا يجب أن يطابق `LESSONS`
 * عنصراً بعنصر — الخيارات ومواضعها وتفسيراتها.
 */
import type { Lesson } from "@/types/lesson";
import { balanceChoiceTree } from "@/lib/tests/balance-options";

/** ترتيب معرّفات RAW_LESSONS حرفياً (يحرسه level-loaders.test.ts) */
export const GLOBAL_ORDER: readonly string[] = [
  "a1-00", "a1-01", "a1-01b", "a1-02", "a1-03", "a1-04", "a1-05", "a1-06", "a1-07", "a1-08",
  "a1-09", "a1-10", "a1-11", "a1-12", "a1-14", "a1-13", "a2-01", "a2-02", "a2-03", "a2-04",
  "a2-05", "a2-06", "a2-07", "a2-08", "a2-09", "a2-10", "a2-11", "a2-12", "a2-13", "b1-01",
  "b1-02", "b1-03", "b1-04", "b1-05", "b1-06", "b1-07", "b1-08", "b1-09", "b1-10", "b1-12",
  "b1-11", "b2-01", "b2-02", "b2-03", "b2-04", "b2-11", "b2-05", "b2-06", "b2-07", "b2-08",
  "b2-09", "b2-10", "b2-12", "b2-13",
];

const LOADERS: Record<string, () => Promise<{ RAW: Lesson[] }>> = {
  A1: () => import("./a1-level").then((m) => ({ RAW: m.A1_RAW_LESSONS })),
  A2: () => import("./a2-level").then((m) => ({ RAW: m.A2_RAW_LESSONS })),
  B1: () => import("./b1-level").then((m) => ({ RAW: m.B1_RAW_LESSONS })),
  B2: () => import("./b2-level").then((m) => ({ RAW: m.B2_RAW_LESSONS })),
};

export type LessonLevelKey = keyof typeof LOADERS;

/** المستوى من معرّف وحدة/درس: "b2-13" أو "A2" → "B2"/"A2" */
export function levelKeyOf(unitOrLessonId: string): string | null {
  const prefix = unitOrLessonId.slice(0, 2).toUpperCase();
  return prefix in LOADERS ? prefix : null;
}

/**
 * دروس مستوى واحد **بعد الموازنة**، مطابقة تماماً لعناصر `LESSONS`.
 * تُعيد [] لمستوى غير معروف بدل الرمي — المستدعي يقرر كيف يعرض الغياب.
 */
export async function loadLessonsByLevel(level: string): Promise<Lesson[]> {
  const key = level.slice(0, 2).toUpperCase();
  const loader = LOADERS[key];
  if (!loader) return [];
  const { RAW } = await loader();
  return RAW.map((lesson) => {
    const globalIndex = GLOBAL_ORDER.indexOf(lesson.id);
    // بذرة الموازنة = الموضع العالمي + 1 (كما في RAW_LESSONS.map((item, i) => … i + 1))
    return balanceChoiceTree(lesson, globalIndex >= 0 ? globalIndex + 1 : 0);
  });
}

/** دروس وحدة معيّنة عبر تحميل مستواها فقط — نفس ترتيب getLessonsByUnit */
export async function loadLessonsByUnit(unitId: string): Promise<Lesson[]> {
  const level = levelKeyOf(unitId);
  if (!level) return [];
  const lessons = await loadLessonsByLevel(level);
  return lessons.filter((lesson) => lesson.unitId === unitId).sort((a, b) => a.order - b.order);
}
