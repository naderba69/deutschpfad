/**
 * أنظمة الاختبارات — الأنواع (المرحلة 10)
 * — اختبار تحديد تشخيصي لكل مهارة + اختبارات وحدات + اختبارات مستويات بصيغة Goethe —
 */

export type TestSkill = "grammatik" | "wortschatz" | "lesen" | "hören" | "schreiben" | "sprechen";
export type TestLevel = "A1" | "A2" | "B1" | "B2";
export type TestKind = "diagnostic" | "unit" | "level" | "speaking";

/** سؤال اختبار موحد */
export interface TestQuestion {
  id: string;
  skill: TestSkill;
  level: TestLevel;
  kind: "mcq" | "reading" | "listening" | "writing";
  /** MCQ */
  questionDe?: string;
  questionAr?: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
  /** Reading/Listening */
  text?: string;
  textAr?: string;
  questions?: { q: string; qAr: string; options: string[]; correct: number; explanation?: string }[];
  /** Writing */
  prompt?: string;
  promptAr?: string;
  rubric?: string;
  sampleAnswer?: string;
  points?: number;
}

/** إجابة متعلم */
export interface TestAnswer {
  questionId: string;
  /** MCQ: فهرس مختار. Writing: نص. */
  value: string | number | null;
  correct?: boolean;
}

/** نتيجة مهارة */
export interface SkillResult {
  skill: TestSkill;
  total: number;
  correct: number;
  pct: number;
  /** مستوى CEFR المقدر لهذه المهارة */
  level: TestLevel;
}

/** نتيجة اختبار كاملة */
/** عنصر مراجعة الأدلة (الدفعة 122) — سؤالٌ بجواب المتعلّم وشاهده */
export interface TestReviewItem {
  id: string;
  questionDe: string;
  questionAr?: string;
  options: string[];
  correct: number;
  /** ما اختاره المتعلّم — null: لم يُجب */
  chosen: number | null;
  explanation?: string;
  /** أسئلة الكتابة: إجابة المتعلّم النصية والنموذج المقترح */
  answerText?: string;
  sampleAnswer?: string;
}

export interface TestResult {
  kind: TestKind;
  level: TestLevel;
  startedAt: number;
  finishedAt: number;
  secondsUsed: number;
  skillResults: SkillResult[];
  overallPct: number;
  /** مستوى CEFR المقدر */
  estimatedLevel: TestLevel;
  /** اقتراحات تقوية (معرفات دروس) */
  reinforcement: { lessonId: string; reason: string }[];
  /** مراجعة الأدلة — كل سؤالٍ بشاهده (كانت 171 شرحاً لا تُعرض) */
  review: TestReviewItem[];
  passed: boolean;
}

/** إعدادات اختبار مستوى (بصيغة Goethe) */
export interface LevelTestConfig {
  level: TestLevel;
  sections: {
    skill: TestSkill;
    title: string;
    titleDe: string;
    minutes: number;
    passPct: number;
  }[];
}
