/**
 * مؤشرات نشاط وتغذية راجعة داخلية من أحداث التمارين والمراجعة.
 * النسب هنا معدلات صحة ضمن عينة الأحداث المسجلة، ولا تحدد مستوى CEFR أو الإتقان.
 */

import type { AnalyticsEvent } from "@/types/analytics";
import type { ErrorTypeCode, ExerciseType } from "@/types/lesson";

/** ربط نوع التمرين بالمهارة */
const EXERCISE_TO_SKILL: Record<string, string> = {
  "multiple-choice": "القواعد",
  "word-ordering": "القواعد",
  "fill-blank": "القواعد",
  matching: "المفردات",
  "error-correction": "القواعد",
  transformation: "القواعد",
  dictation: "الكتابة",
  "true-false": "القراءة",
  "sentence-gap": "القراءة",
  zuordnung: "القراءة",
};

export const SKILLS = [
  { key: "الاستماع", emoji: "🎧", color: "#3b82f6" },
  { key: "القراءة", emoji: "📖", color: "#8b5cf6" },
  { key: "الكتابة", emoji: "✍️", color: "#f59e0b" },
  { key: "التحدث", emoji: "🎤", color: "#ef4444" },
  { key: "القواعد", emoji: "🧩", color: "#10b981" },
  { key: "المفردات", emoji: "💬", color: "#14b8a6" },
];

export interface SkillStat {
  key: string;
  total: number;
  correct: number;
  pct: number;
}

/** تجميع نسب الإجابة من أحداث التمارين المصححة فقط؛ لا نحوّل المراجعة أو النطق إلى «إجابة صحيحة». */
export function aggregateSkillStats(events: AnalyticsEvent[]): SkillStat[] {
  const counts: Record<string, { total: number; correct: number }> = Object.fromEntries(
    SKILLS.map((skill) => [skill.key, {total: 0, correct: 0}]),
  );

  for (const event of events) {
    let skill: string | undefined;
    let isCorrect: boolean;
    if (event.type === "exercise-result") {
      skill = EXERCISE_TO_SKILL[event.exerciseType] ?? "القواعد";
      isCorrect = event.correct;
    } else if (event.type === "skill-result") {
      // نقبل المهارات المعروفة فقط؛ لا نصنف قيمة مجهولة على أنها قواعد.
      skill = SKILLS.some((item) => item.key === event.skill) ? event.skill : undefined;
      isCorrect = event.correct;
    } else {
      // المراجعات والتقييمات الصوتية ليست إجابات من النوع نفسه.
      continue;
    }
    if (!skill || !counts[skill]) continue;
    counts[skill].total += 1;
    if (isCorrect) counts[skill].correct += 1;
  }

  return SKILLS.map(({key}) => {
    const count = counts[key];
    return {
      key,
      total: count.total,
      correct: count.correct,
      pct: count.total > 0 ? Math.round((count.correct / count.total) * 100) : 0,
    };
  });
}

/** حساب إحصاءات المهارات من الأحداث الأخيرة */
export async function computeSkillStats(): Promise<SkillStat[]> {
  const { getRecentEventsResult } = await import("@/lib/analytics/events");
  const result = await getRecentEventsResult(1500);
  if (!result.ok) throw new Error("تعذرت قراءة أحداث المهارات");
  return aggregateSkillStats(result.events);
}

/* ═══════════════ الإتقان النحوي ═══════════════ */

/** تصنيف نوع الخطأ ← مفهوم نحوي (بالعربية) */
const ERROR_TYPE_TO_CONCEPT: Record<string, string> = {
  gender: "الجنس النحوي",
  article: "أدوات التعريف",
  spelling: "الإملاء",
  "word-order": "ترتيب الكلمات",
  conjugation: "تصريف الأفعال",
  vocabulary: "المفردات",
  case: "الحالات الإعرابية",
  preposition: "حروف الجر",
  negation: "النفي",
  pronoun: "الضمائر",
  plural: "صياغة الجمع",
  punctuation: "علامات الترقيم",
  comprehension: "الفهم القرائي/السمعي",
  grammar: "القواعد العامة",
};

export interface ConceptMastery {
  concept: string;
  attempts: number;
  correct: number;
  pct: number;
  aboveInternalThreshold: boolean;
}

/** حساب معدل الإجابات الصحيحة في عينات التمارين المصنفة حسب نوع الخطأ */
export function aggregateConceptMastery(events: AnalyticsEvent[]): ConceptMastery[] {
  const counts = new Map<string, { total: number; correct: number }>();

  for (const event of events) {
    if (event.type !== "exercise-result" || !event.errorType) continue;
    const concept = ERROR_TYPE_TO_CONCEPT[event.errorType];
    // لا نخمن المفهوم من غياب/جهالة الوسم؛ التخمين كان يضخم «القواعد العامة».
    if (!concept) continue;
    const count = counts.get(concept) ?? {total: 0, correct: 0};
    count.total += 1;
    if (event.correct) count.correct += 1;
    counts.set(concept, count);
  }

  return [...counts.entries()]
    .map(([concept, count]) => ({
      concept,
      attempts: count.total,
      correct: count.correct,
      pct: Math.round((count.correct / count.total) * 100),
      aboveInternalThreshold: count.correct / count.total >= 0.8,
    }))
    .sort((a, b) => a.pct - b.pct);
}

/** حساب معدلات التصنيفات من بيانات الأخطاء الصريحة فقط */
export async function computeConceptMastery(): Promise<ConceptMastery[]> {
  const { getRecentEventsResult } = await import("@/lib/analytics/events");
  const result = await getRecentEventsResult(2000);
  if (!result.ok) throw new Error("تعذرت قراءة أحداث المفاهيم");
  return aggregateConceptMastery(result.events);
}

/** المفاهيم النحوية الأساسية لكل مستوى (لعرضها حتى بلا بيانات) */
export const CONCEPTS_BY_LEVEL: Record<string, string[]> = {
  A1: ["الجنس النحوي", "أدوات التعريف", "تصريف الأفعال", "ترتيب الكلمات"],
  A2: ["الماضي المركب", "حالة الجر", "المقارنة", "الجمل الثانوية"],
  B1: ["الجمل النسبية", "المبني للمجهول", "Konjunktiv II", "الروابط المزدوجة"],
  B2: ["نقل الكلام", "الاشتقاق الاسمي", "حروف الجر مع Genitiv", "الروابط المتقدمة"],
};

/** خريطة: المفهوم النحوي ← الدرس الذي يُدرّسه (لزر «راجع المفهوم») */
export const CONCEPT_TO_LESSON: Record<string, string> = {
  "الجنس النحوي": "a1-00",
  "أدوات التعريف": "a1-03",
  "تصريف الأفعال": "a1-01",
  "ترتيب الكلمات": "a1-01",
  "الماضي المركب": "a2-01",
  "حالة الجر": "a2-09",
  "المقارنة": "a2-08",
  "الجمل الثانوية": "a2-10",
  "الجمل النسبية": "b1-01",
  "المبني للمجهول": "b1-03",
  "Konjunktiv II": "b1-04",
  "الروابط المزدوجة": "b1-08",
  "نقل الكلام": "b2-01",
  "الاشتقاق الاسمي": "b2-06",
  "حروف الجر مع Genitiv": "b1-01",
  "الروابط المتقدمة": "b2-05",
  "القواعد العامة": "a1-01",
  "المفردات": "a1-01",
  "النفي": "a1-10",
  "الضمائر": "a1-02",
  "الإملاء": "a1-00",
};
