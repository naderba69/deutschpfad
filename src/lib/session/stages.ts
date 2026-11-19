/**
 * ═══════════════════════════════════════════════════════════
 *  مراحل «حصة الدرس» — تعريف بيداغوجي خالص (بلا واجهة، بلا تخزين)
 *
 *  الحصة = عشر مراحل متسلسلة بوابة صارمة (hard gate):
 *  لا تُفتح المرحلة i إلا بعد إكمال كل مراحل ما قبلها.
 *  (التسلسل الأكاديمي المعتمد: أهداف ← تمهيد ← مفردات ← قواعد ← استقبال ←
 *   تطبيق موجّه ← إنتاج ← ثقافة ← تقييم ← تثبيت)
 *
 *  كل قسم من أقسام الدرس (LESSON_SECTIONS) ينتمي إلى مرحلة واحدة فقط —
 *  يحرسه اختبار `stages.test.ts`.
 *  المرحلة التي لا يملك الدرس أي قسم من أقسامها تُتخطّى تلقائياً (gate.ts).
 *
 *  ⚠️ «إكمال المرحلة» = جاهزية للانتقال، وليس شهادة مستوى CEFR،
 *     ولا يُعادل تقييم Can-Do الذاتي.
 * ═══════════════════════════════════════════════════════════
 */

export type SessionStageId =
  | "ziele"
  | "einstieg"
  | "wortschatz"
  | "grammatik"
  | "hoeren-lesen"
  | "gezielte-uebungen"
  | "produktion"
  | "landeskunde"
  | "lernkontrolle"
  | "sicherung";

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
  /**
   * أقسام الدرس المنتمية إلى هذه المرحلة (معرّفات LESSON_SECTIONS).
   * مرحلة بقائمة فارغة = لا يملك الدرس محتوى لها بعد، فتُتخطّى.
   */
  sectionIds: readonly string[];
}

/** مدة الحصة الكاملة بالدقائق (قرار المستخدم: 90 دقيقة) */
export const SESSION_TOTAL_MINUTES = 90;

export const SESSION_STAGES: readonly SessionStageDef[] = [
  {
    id: "ziele",
    labelAr: "أهداف الحصة",
    labelDe: "Ziele",
    purposeAr: "تعرف بالضبط ماذا ستستطيع بعد هذه الحصة، ولماذا يهمّ ذلك.",
    minutes: 5,
    sectionIds: ["lernziele"],
  },
  {
    id: "einstieg",
    labelAr: "التمهيد والاسترجاع",
    labelDe: "Einstieg",
    purposeAr: "نستحضر ما أخطأت فيه سابقاً ونربط الدرس بما تعرفه، فالاسترجاع يثبّت أكثر من إعادة القراءة.",
    minutes: 10,
    sectionIds: ["review", "einfuehrung"],
  },
  {
    id: "wortschatz",
    labelAr: "المفردات",
    labelDe: "Wortschatz",
    purposeAr: "كلمات الدرس الجديدة بالصوت والمثال قبل استعمالها.",
    minutes: 8,
    // لا قسم مستقل للمفردات بعد؛ تُضاف عند إنشاء المحتوى المخصص لها.
    sectionIds: [],
  },
  {
    id: "grammatik",
    labelAr: "القواعد",
    labelDe: "Grammatik",
    purposeAr: "القاعدة مع أمثلة محلولة قبل أن تطبّقها بنفسك.",
    minutes: 12,
    sectionIds: ["theorie", "verben"],
  },
  {
    id: "hoeren-lesen",
    labelAr: "الاستقبال: الاستماع والقراءة",
    labelDe: "Hören / Lesen",
    purposeAr: "نص مسموع أو مقروء يوظّف ما تعلمته للتو.",
    minutes: 12,
    sectionIds: ["hoerverstehen", "lesetext"],
  },
  {
    id: "gezielte-uebungen",
    labelAr: "التطبيق الموجَّه",
    labelDe: "Gezielte Übungen",
    purposeAr: "تطبّق القاعدة بتدرّج من الأسهل إلى الأصعب، ويصحّح النظام أخطاءك فوراً.",
    minutes: 12,
    sectionIds: ["uebungen"],
  },
  {
    id: "produktion",
    labelAr: "الإنتاج: النطق والكتابة والكلام",
    labelDe: "Produktion",
    purposeAr: "تحوّل ما تعلمته إلى نطق وجمل وكلام من إنتاجك أنت.",
    minutes: 14,
    sectionIds: ["aussprache", "schreiben", "oral-production", "mediation", "interaction"],
  },
  {
    id: "landeskunde",
    labelAr: "الثقافة والسياق",
    labelDe: "Landeskunde",
    purposeAr: "السياق الألماني الحقيقي للموضوع: عادات وحياة يومية.",
    minutes: 5,
    // لا قسم مستقل للثقافة بعد؛ تُضاف عند إنشاء المحتوى المخصص لها.
    sectionIds: [],
  },
  {
    id: "lernkontrolle",
    labelAr: "اختبار الانتقال",
    labelDe: "Lernkontrolle",
    purposeAr: "اختبار قصير يبيّن هل أنت جاهز للدرس التالي.",
    minutes: 6,
    sectionIds: ["minitest"],
  },
  {
    id: "sicherung",
    labelAr: "التثبيت والمراجعة",
    labelDe: "Sicherung",
    purposeAr: "نحوّل أخطاء اليوم إلى بطاقات تعود إليك لاحقاً، وتُراجَع بعد يوم وثلاثة وسبعة أيام.",
    minutes: 6,
    sectionIds: ["fehler", "lernkarten", "vertiefung"],
  },
];

/**
 * طريقة إثبات إنجاز القسم:
 * - "exercise": يُحسب الإنجاز من نتيجة تمرين فعلية (إجابة مُسجَّلة).
 * - "acknowledge": قسم شرح/قراءة، يُثبَت بإقرار صريح من المتعلم («أنهيت القسم»).
 * القرار حسب نوع القسم، لا حسب رغبة المتعلم.
 */
export type SectionProof = "exercise" | "acknowledge";

export const SECTION_PROOF: Readonly<Record<string, SectionProof>> = {
  review: "exercise",
  einfuehrung: "acknowledge",
  lernziele: "acknowledge",
  theorie: "acknowledge",
  verben: "acknowledge",
  aussprache: "acknowledge",
  hoerverstehen: "exercise",
  lesetext: "exercise",
  uebungen: "exercise",
  schreiben: "exercise",
  "oral-production": "exercise",
  mediation: "exercise",
  interaction: "exercise",
  minitest: "exercise",
  fehler: "acknowledge",
  lernkarten: "acknowledge",
  vertiefung: "acknowledge",
};

/** كل معرّفات الأقسام المنتمية إلى مرحلة ما، كمجموعة مرتبة */
export function sectionIdsOfStages(): string[] {
  return SESSION_STAGES.flatMap((s) => [...s.sectionIds]);
}
