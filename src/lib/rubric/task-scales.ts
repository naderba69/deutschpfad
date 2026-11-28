/**
 * ═══════════════════════════════════════════════════════════
 *  سلالم التدريب الذاتي حسب نوع المهمة (G-06 · البند 4)
 *
 *  كل سلم = المستوى × نوع المهمة × أربعة معايير. يضيف إلى التوقع العام للمستوى
 *  (`RUBRIC_EXPECTATIONS`) سؤال تحقّق خاصاً بنوع المهمة، ووصفاً لكل خيار من
 *  خيارات المراجعة الثلاثة نفسها المستعملة في المراجعة الذاتية للدروس:
 *  «نعم» · «جزئياً» · «ليس بعد».
 *
 *  ⚠️ هذه أداة تدريب يراجع بها المتعلم محاولته بنفسه. ليست سلّم تقدير معتمداً
 *     من Goethe أو telc، ولا تعطي درجة، ولا تُثبت مستوى CEFR، ولا تحل محل
 *     مراجعة معلّم. لا يُحسب منها أي رقم.
 * ═══════════════════════════════════════════════════════════
 */
import type {LevelCode} from "@/types/curriculum";

import {
  OPEN_PRODUCTION_RUBRIC,
  RUBRIC_DISCLAIMER,
  RUBRIC_EXPECTATIONS,
  type RubricCriterion,
  type RubricCriterionId,
} from "./open-production";

/** أنواع المهام الكتابية في مسار الكتابة (تطابق `WritingTask.taskType`) */
export type WritingTaskType = "Forumsbeitrag" | "formelle E-Mail" | "Meinung" | "Übersetzung";

/** نوع المهمة الشفهية: لا يحمل المسار شفهياً نوعاً مستقلاً، فكل درس له موضوعه */
export const SPEAKING_TASK = "Sprechen" as const;
export type SpeakingTaskType = typeof SPEAKING_TASK;
export type ScaleTaskType = WritingTaskType | SpeakingTaskType;

/** خيارات المراجعة الذاتية الثلاثة (تطابق `SelfReviewRating` في lib/lesson/self-review) */
export type ScaleBand = "yes" | "partly" | "not-yet";

export const SCALE_BANDS: readonly {value: ScaleBand; label: string}[] = [
  {value: "yes", label: "نعم"},
  {value: "partly", label: "جزئياً"},
  {value: "not-yet", label: "ليس بعد"},
];

/** سؤال التحقق الخاص بنوع المهمة لكل معيار (بالعربية) */
const TASK_CHECKS: Record<ScaleTaskType, Record<RubricCriterionId, string>> = {
  Forumsbeitrag: {
    erfuellung: "هل رددت على الموضوع المطروح وأجبت عن كل سؤال فيه؟",
    kohaerenz: "هل بدأت بجملة تعليق واضحة، وربطت حجتك بروابط مثل «außerdem» أو «deshalb»؟",
    wortschatz: "هل استخدمت عبارات النقاش المهذب مثل «Ich finde, dass …»؟",
    struktur: "هل جاء الفعل في آخر الجملة التابعة بعد «weil» و«dass»؟",
  },
  "formelle E-Mail": {
    erfuellung: "هل ذكرت سبب الرسالة وطلبك بوضوح في الفقرة الأولى؟",
    kohaerenz: "هل الافتتاح والخاتمة مناسبان للرسالة الرسمية، مثل «Sehr geehrte …» و«Mit freundlichen Grüßen»؟",
    wortschatz: "هل استخدمت «Sie» وصياغة رسمية بدل العامية؟",
    struktur: "هل استخدمت صيغاً مهذبة مثل «Ich würde mich freuen …» و«Könnten Sie …»؟",
  },
  Meinung: {
    erfuellung: "هل عبّرت عن رأيك بوضوح، وأجبت عن الموضوع المطروح؟",
    kohaerenz: "هل دعمت رأيك بسبب ومثال، ورتبتهما بروابط مثل «erstens» و«außerdem»؟",
    wortschatz: "هل استخدمت عبارات الرأي والاعتراض مثل «Meiner Meinung nach …»؟",
    struktur: "هل استخدمت جملاً سببية أو تقابلية مثل «weil» و«obwohl» بصيغة صحيحة؟",
  },
  Übersetzung: {
    erfuellung: "هل نقلت المعنى الكامل للنص العربي دون حذف أو إضافة؟",
    kohaerenz: "هل الجملة الألمانية طبيعية ومفهومة وحدها، دون أن تبدو ترجمة حرفية؟",
    wortschatz: "هل اخترت المقابل المناسب للسياق، لا أول كلمة تخطر على البال؟",
    struktur: "هل ترتيب الفعل وصيغته الزمنية وحالات الإعراب (Nominativ، Akkusativ، Dativ) صحيحة؟",
  },
  [SPEAKING_TASK]: {
    erfuellung: "هل أجبت عن كل نقطة في الطلب الشفهي؟",
    kohaerenz: "هل كانت جملك متتابعة، ويمكن للمستمع أن يتبعها دون توقف طويل؟",
    wortschatz: "هل استخدمت كلمات الموضوع الأساسية من الدرس؟",
    struktur: "هل استخدمت أفعال الدرس وصيغها الصحيحة في كلامك؟",
  },
};

/** وصف عام لكل خيار في كل معيار (ليس درجة، بل وصف لما تراه في المحاولة) */
const BAND_TEXT: Record<RubricCriterionId, Record<ScaleBand, string>> = {
  erfuellung: {
    yes: "غطّيت كل نقاط المهمة بما يكفي.",
    partly: "غطّيت أغلب النقاط، وبعضها قصير أو غير مكتمل.",
    "not-yet": "تركت نقطة أو أكثر من المهمة، أو لم تتأكد من المطلوب بعد.",
  },
  kohaerenz: {
    yes: "الأفكار مرتبة، والروابط تعمل بوضوح.",
    partly: "الترتيب واضح في الغالب، مع روابط قليلة أو متكررة.",
    "not-yet": "يصعب تتبع الفكرة من جملة إلى أخرى.",
  },
  wortschatz: {
    yes: "الكلمات مناسبة للموضوع ودقيقة في معناها.",
    partly: "المفردات مناسبة في معظمها، مع تكرار أو كلمات عامة.",
    "not-yet": "المفردات قليلة، أو بعضها يغيّر المعنى المقصود.",
  },
  struktur: {
    yes: "التراكيب صحيحة ومتنوعة بقدر المستوى.",
    partly: "أغلب الجمل صحيح، وتظهر أخطاء متكررة في الفعل أو الترتيب.",
    "not-yet": "أخطاء في التركيب تمنع فهم بعض الجمل.",
  },
};

export interface ScaleRow {
  id: RubricCriterionId;
  de: string;
  ar: string;
  /** التوقع العام للمستوى لهذا المعيار */
  levelExpectation: string;
  /** سؤال التحقق الخاص بنوع المهمة */
  taskCheck: string;
  /** وصف كل خيار من الخيارات الثلاثة */
  bands: Record<ScaleBand, string>;
}

export interface TaskScale {
  level: LevelCode;
  taskType: ScaleTaskType;
  rows: ScaleRow[];
  disclaimer: string;
}

/** يبني السلّم الكامل لمستوى ونوع مهمة. */
export function buildTaskScale(level: LevelCode, taskType: ScaleTaskType): TaskScale {
  const rows = OPEN_PRODUCTION_RUBRIC.map((criterion: RubricCriterion) => ({
    id: criterion.id,
    de: criterion.de,
    ar: criterion.ar,
    levelExpectation: RUBRIC_EXPECTATIONS[level][criterion.id],
    taskCheck: TASK_CHECKS[taskType][criterion.id],
    bands: BAND_TEXT[criterion.id],
  }));
  return {level, taskType, rows, disclaimer: RUBRIC_DISCLAIMER};
}

/** هل النوع من أنواع الكتابة المعروفة؟ يُستعمل لحماية الواجهة من قيم غير متوقعة. */
export function isWritingTaskType(value: string): value is WritingTaskType {
  return value === "Forumsbeitrag" || value === "formelle E-Mail" || value === "Meinung" || value === "Übersetzung";
}
