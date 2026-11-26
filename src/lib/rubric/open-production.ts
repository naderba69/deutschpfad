/**
 * ═══════════════════════════════════════════════════════════
 *  سلّم موحّد للكتابة والكلام المفتوح (G-06)
 *
 *  مصدر واحد لأسماء المعايير الأربعة وما يُتوقَّع عند كل مستوى،
 *  يستعمله المقيّم المحلي (goethe-local) ومطالبة المقيّم الذكي (prompts).
 *
 *  ⚠️ هذه مؤشرات تعليمية داخلية للمراجعة، وليست سلّم تقدير رسمياً
 *     من Goethe أو telc، ولا تحسب درجة CEFR أو نتيجة امتحان.
 * ═══════════════════════════════════════════════════════════
 */
import type {LevelCode} from "@/types/curriculum";

export type RubricCriterionId = "erfuellung" | "kohaerenz" | "wortschatz" | "struktur";

export interface RubricCriterion {
  id: RubricCriterionId;
  /** الاسم الألماني المعروض للمتعلم */
  de: string;
  /** الاسم العربي */
  ar: string;
  /** السؤال الذي يطرحه المعيار على النص أو الكلام */
  question: string;
}

export const OPEN_PRODUCTION_RUBRIC: readonly RubricCriterion[] = [
  {id: "erfuellung", de: "Erfüllung", ar: "إنجاز المهمة", question: "هل غُطيت كل نقاط المهمة، ومناسبة النوع والأسلوب؟"},
  {id: "kohaerenz", de: "Kohärenz", ar: "البنية والترابط", question: "هل الأفكار مرتبة، وهل الروابط مناسبة؟"},
  {id: "wortschatz", de: "Wortschatz", ar: "المفردات", question: "هل الكلمات مناسبة للمستوى ودقيقة في معناها؟"},
  {id: "struktur", de: "Struktur", ar: "القواعد", question: "هل التراكيب صحيحة، ومتنوعة بقدر المستوى؟"},
];

/** ما يُتوقَّع تقريباً عند كل مستوى لكل معيار (وصف داخلي مختصر). */
export const RUBRIC_EXPECTATIONS: Record<LevelCode, Record<RubricCriterionId, string>> = {
  A1: {
    erfuellung: "جمل قصيرة تجيب عن كل نقطة في المهمة.",
    kohaerenz: "جمل متتابعة بروابط بسيطة مثل und وaber.",
    wortschatz: "كلمات يومية أساسية من الدروس.",
    struktur: "جمل بسيطة بترتيب صحيح، وأفعال الحاضر الشائعة.",
  },
  A2: {
    erfuellung: "تغطي المهمة وتراعي الجمهور: رسمي أو غير رسمي.",
    kohaerenz: "فقرات قصيرة بروابط مثل weil وdeshalb وdann.",
    wortschatz: "مفردات من موضوع المهمة مع قدر من التنويع.",
    struktur: "جمل ثانوية بسيطة مع weil وwenn، وPerfekt بصورة صحيحة.",
  },
  B1: {
    erfuellung: "تغطي كل النقاط بتفصيل كافٍ وتلتزم بنوع النص.",
    kohaerenz: "تسلسل منطقي، وروابط تعبّر عن السبب والتباين والنتيجة.",
    wortschatz: "تنوع في الكلمات وتجنّب التكرار الواضح.",
    struktur: "جمل موصولة ومتنوعة، وأزمنة صحيحة في الغالب.",
  },
  B2: {
    erfuellung: "تعالج المهمة بعمق، وتعرض رأياً مدعوماً بحجج.",
    kohaerenz: "نص متماسك بانتقالات سلسة بين الأفكار والفقرات.",
    wortschatz: "تعابير دقيقة وكولوكيشنات مناسبة للسياق.",
    struktur: "تنوع تركيبي واضح (Konjunktiv، المجهول، روابط مركبة) مع دقة نحوية عالية.",
  },
};

/** نص اسم المعيار كما يظهر في المخرجات: «Erfüllung — إنجاز المهمة». */
export function criterionLabel(c: RubricCriterion): string {
  return `${c.de} — ${c.ar}`;
}

/** التوقع لمعيار عند مستوى معيّن، أو undefined إن لم يكن المستوى معروفاً. */
export function expectationFor(level: string, id: RubricCriterionId): string | undefined {
  if (!(level in RUBRIC_EXPECTATIONS)) return undefined;
  return RUBRIC_EXPECTATIONS[level as LevelCode][id];
}

export const RUBRIC_DISCLAIMER =
  "مؤشرات تعليمية داخلية للمراجعة؛ ليست تصحيح Goethe الرسمي ولا درجة CEFR أو نتيجة امتحان.";
