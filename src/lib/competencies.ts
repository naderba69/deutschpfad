/**
 * كفايات CEFR + مؤشر الإتقان النحوي 📊
 * — يحسب مستوى كل مهارة (استماع/قراءة/كتابة/تحدث/قواعد/مفردات)
 *   من نتائج التمارين والأحداث المخزنة، ويعرض «أنت هنا» مقابل مستويات CEFR —
 * — ويحسب إتقان كل مفهوم نحوي (أجناس، ترتيب، إملاء…) من نتائج التمارين —
 */

import type { AnalyticsEvent } from "@/types/analytics";
import type { ErrorTypeCode, ExerciseType } from "@/types/lesson";

/** ربط نوع التمرين بالمهارة */
export const EXERCISE_TO_SKILL: Record<string, string> = {
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

/** نطاقات CEFR حسب النسبة */
export function cefrFromPct(pct: number): { label: string; level: number } {
  if (pct >= 85) return { label: "B2", level: 3 };
  if (pct >= 65) return { label: "B1", level: 2 };
  if (pct >= 40) return { label: "A2", level: 1 };
  return { label: "A1", level: 0 };
}

export interface SkillStat {
  key: string;
  total: number;
  correct: number;
  pct: number;
  cefr: string;
}

/** حساب إحصاءات المهارات من الأحداث */
export async function computeSkillStats(): Promise<SkillStat[]> {
  const { getRecentEvents } = await import("@/lib/analytics/events");
  const events = await getRecentEvents(1500);
  const counts: Record<string, { total: number; correct: number }> = {};
  const init = () => {
    for (const s of SKILLS) counts[s.key] = { total: 0, correct: 0 };
  };
  init();

  for (const e of events) {
    if (e.type === "exercise-result") {
      const skill = EXERCISE_TO_SKILL[e.exerciseType] ?? "القواعد";
      if (!counts[skill]) counts[skill] = { total: 0, correct: 0 };
      counts[skill].total += 1;
      if (e.correct) counts[skill].correct += 1;
    } else if (e.type === "pronunciation-score") {
      counts["التحدث"].total += 1;
      counts["التحدث"].correct += e.score >= 75 ? 1 : 0;
    } else if (e.type === "review") {
      counts["المفردات"].total += 1;
      counts["المفردات"].correct += e.quality >= 3 ? 1 : 0;
    } else if (e.type === "skill-result") {
      // أحداث صريحة من أسئلة الفهم (الاستماع/القراءة) في القصص والبودكاست والاستماع
      const skill = e.skill && counts[e.skill] ? e.skill : "القواعد";
      if (!counts[skill]) counts[skill] = { total: 0, correct: 0 };
      counts[skill].total += 1;
      if (e.correct) counts[skill].correct += 1;
    }
  }

  return SKILLS.map((s) => {
    const c = counts[s.key];
    const pct = c.total > 0 ? Math.round((c.correct / c.total) * 100) : 0;
    return { key: s.key, total: c.total, correct: c.correct, pct, cefr: cefrFromPct(pct).label };
  });
}

/* ═══════════════ الإتقان النحوي ═══════════════ */

/** تصنيف نوع الخطأ ← مفهوم نحوي (بالعربية) */
export const ERROR_TYPE_TO_CONCEPT: Record<string, string> = {
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
  grammar: "القواعد العامة",
};

export interface ConceptMastery {
  concept: string;
  attempts: number;
  correct: number;
  pct: number;
  mastered: boolean;
}

/** حساب إتقان المفاهيم النحوية من نتائج التمارين (بتصنيف نوع الخطأ) */
export async function computeConceptMastery(): Promise<ConceptMastery[]> {
  const { getRecentEvents } = await import("@/lib/analytics/events");
  const events = await getRecentEvents(2000);
  const counts = new Map<string, { total: number; correct: number }>();

  for (const e of events) {
    if (e.type !== "exercise-result") continue;
    const key = e.errorType ?? ("grammar" as const);
    const concept = ERROR_TYPE_TO_CONCEPT[key] ?? "القواعد العامة";
    const c = counts.get(concept) ?? { total: 0, correct: 0 };
    c.total += 1;
    if (e.correct) c.correct += 1;
    counts.set(concept, c);
  }

  return [...counts.entries()]
    .map(([concept, c]) => ({
      concept,
      attempts: c.total,
      correct: c.correct,
      pct: Math.round((c.correct / c.total) * 100),
      mastered: c.correct / c.total >= 0.8,
    }))
    .sort((a, b) => a.pct - b.pct);
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
