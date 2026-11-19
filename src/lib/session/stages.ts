/**
 * ═══════════════════════════════════════════════════════════
 *  مراحل «حصة الدرس» — تعريف بيداغوجي خالص (بلا واجهة، بلا تخزين)
 *
 *  الحصة = سبع مراحل متسلسلة بوابة صارمة (hard gate):
 *  لا تُفتح المرحلة i إلا بعد إكمال كل مراحل ما قبلها.
 *
 *  كل قسم من أقسام الدرس (LESSON_SECTIONS) ينتمي إلى مرحلة واحدة فقط —
 *  يحرسه اختبار `stages.test.ts`. الأقسام الاختيارية تُدمج في مرحلتها
 *  الطبيعية، ولا تُضاف مراحل جديدة لأجلها.
 *
 *  ⚠️ «إكمال المرحلة» = جاهزية للانتقال، وليس شهادة مستوى CEFR،
 *     ولا يُعادل تقييم Can-Do الذاتي.
 * ═══════════════════════════════════════════════════════════
 */

export type SessionStageId =
  | "recall"
  | "objectives"
  | "activation"
  | "input"
  | "guided"
  | "production"
  | "consolidate";

export interface SessionStageDef {
  id: SessionStageId;
  /** العنوان بالعربية */
  labelAr: string;
  /** المصطلح الألماني المقابل */
  labelDe: string;
  /** الغرض البيداغوجي للمرحلة (يُعرض للمتعلم) */
  purposeAr: string;
  /** الميزانية الزمنية بالدقائق؛ مجموع المراحل = SESSION_TOTAL_MINUTES */
  minutes: number;
  /** أقسام الدرس المنتمية إلى هذه المرحلة (معرّفات LESSON_SECTIONS) */
  sectionIds: readonly string[];
}

/** مدة الحصة الكاملة بالدقائق (قرار المستخدم: 90 دقيقة) */
export const SESSION_TOTAL_MINUTES = 90;

/**
 * الترتيب هو التسلسل التعليمي:
 * استرجاع ← أهداف ← تمهيد ← مدخل ← تطبيق موجّه ← إنتاج ← تثبيت وتقييم.
 */
export const SESSION_STAGES: readonly SessionStageDef[] = [
  {
    id: "recall",
    labelAr: "استرجاع الأخطاء السابقة",
    labelDe: "Wiederholen",
    purposeAr: "نستحضر ما أخطأت فيه سابقاً قبل أن تتعلم جديداً — الاسترجاع النشط يثبّت أكثر من إعادة القراءة.",
    minutes: 10,
    sectionIds: ["review"],
  },
  {
    id: "objectives",
    labelAr: "أهداف الحصة",
    labelDe: "Ziele",
    purposeAr: "تعرف بالضبط ماذا ستستطيع بعد هذه الحصة، ولماذا يهمّ ذلك.",
    minutes: 5,
    sectionIds: ["lernziele"],
  },
  {
    id: "activation",
    labelAr: "تنشيط المعرفة السابقة",
    labelDe: "Aktivierung",
    purposeAr: "نربط الدرس بما تعرفه أصلاً، فيصبح الجديد أسهل حفظاً.",
    minutes: 5,
    sectionIds: ["einfuehrung"],
  },
  {
    id: "input",
    labelAr: "المدخل: الشرح والأمثلة",
    labelDe: "Input",
    purposeAr: "نعرض القاعدة مع أمثلة محلولة قبل أن تطبّقها بنفسك.",
    minutes: 20,
    sectionIds: ["theorie", "verben", "lesetext", "hoerverstehen", "aussprache"],
  },
  {
    id: "guided",
    labelAr: "التطبيق الموجَّه",
    labelDe: "Übung",
    purposeAr: "تطبّق القاعدة بتدرّج من الأسهل إلى الأصعب، ويصحّح النظام أخطاءك فوراً.",
    minutes: 20,
    sectionIds: ["uebungen"],
  },
  {
    id: "production",
    labelAr: "الإنتاج: الكتابة والكلام",
    labelDe: "Produktion",
    purposeAr: "تحوّل ما تعلمته إلى جمل وكلام من إنتاجك أنت.",
    minutes: 15,
    sectionIds: ["schreiben", "oral-production", "mediation", "interaction"],
  },
  {
    id: "consolidate",
    labelAr: "التثبيت والتقييم",
    labelDe: "Festigung",
    purposeAr: "نتحقق من الفهم، ونحوّل أخطاء اليوم إلى بطاقات تعود إليك لاحقاً.",
    minutes: 15,
    sectionIds: ["fehler", "minitest", "lernkarten", "vertiefung"],
  },
];

/** كل معرّفات الأقسام المنتمية إلى مرحلة ما، كمجموعة مرتبة */
export function sectionIdsOfStages(): string[] {
  return SESSION_STAGES.flatMap((s) => [...s.sectionIds]);
}
