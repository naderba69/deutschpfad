/**
 * الأنواع الأساسية لنظام الدروس — الدرس الموحد (10 مكونات)
 * والتمارين التفاعلية السبعة مع تصنيف الأخطاء
 */
import type { LevelCode } from "@/types/curriculum";

/* ═══════════════ تصنيف نوع الخطأ ═══════════════ */

export type ErrorTypeCode =
  | "grammar"
  | "conjugation"
  | "case"
  | "article"
  | "gender"
  | "word-order"
  | "vocabulary"
  | "spelling"
  | "preposition"
  | "negation"
  | "pronoun"
  | "plural"
  | "punctuation";

export interface ErrorTypeInfo {
  code: ErrorTypeCode;
  /** اسم النوع بالعربية */
  ar: string;
  /** المصطلح الألماني */
  de: string;
}

/* ═══════════════ التمارين ═══════════════ */

export type ExerciseType =
  | "multiple-choice"
  | "word-ordering"
  | "fill-blank"
  | "matching"
  | "error-correction"
  | "transformation"
  | "dictation";

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  /** تعليمة التمرين بالعربية */
  instructionAr: string;
  /** تعليمة ألمانية (اختياري) */
  instructionDe?: string;
  /** تلميح إضافي */
  hint?: string;
  /** شرح «لماذا» عند التصحيح */
  explanation: string;
  /** تصنيف نوع الخطأ المتوقع */
  errorType: ErrorTypeCode;
  points?: number;
  tags?: string[];
}

export interface McqExercise extends BaseExercise {
  type: "multiple-choice";
  /** الجملة/السؤال بالألمانية */
  questionDe: string;
  questionAr?: string;
  /** الخيارات (تُخلط عند العرض) */
  options: string[];
  /** فهرس الخيار الصحيح في المصفوفة الأصلية */
  correctIndex: number;
  /** شرح لكل خيار (اختياري) — يظهر عند اختياره خطأً */
  optionExplanations?: (string | undefined)[];
}

export interface OrderingExercise extends BaseExercise {
  type: "word-ordering";
  /** الكلمات المعروضة (تُخلط عند العرض) */
  tokens: string[];
  /** الجملة الصحيحة مفصولة بمسافات */
  correctSentence: string;
}

export interface FillBlankExercise extends BaseExercise {
  type: "fill-blank";
  /** الجملة مع ___ لكل فراغ */
  template: string;
  blanks: { correct: string; options?: string[]; errorType?: ErrorTypeCode }[];
}

export interface MatchingExercise extends BaseExercise {
  type: "matching";
  /** أزواج الوصل: يسار ألماني / يمين عربي */
  pairs: { left: string; right: string }[];
}

export interface ErrorCorrectionExercise extends BaseExercise {
  type: "error-correction";
  /** الجملة الخاطئة كاملة */
  wrongSentence: string;
  /** الكلمة الخاطئة (تُميَّز بصرياً) */
  wrongWord: string;
  /** الكلمة الصحيحة */
  correctWord: string;
  /** خيارات الإصلاح (تشمل الصواب) */
  options: string[];
}

export interface TransformationExercise extends BaseExercise {
  type: "transformation";
  /** الجملة الأصلية أو التعليمة */
  prompt: string;
  /** إجابات مقبولة (للتسامح في الصياغة) */
  acceptedAnswers: string[];
  /** إجابة نموذجية تُعرض عند الاستسلام */
  sampleAnswer: string;
}

export interface DictationExercise extends BaseExercise {
  type: "dictation";
  /** النص الذي يُسمع ويُكتب */
  audioText: string;
  /** اختلافات إملائية مقبولة */
  acceptedVariants?: string[];
}

export type Exercise =
  | McqExercise
  | OrderingExercise
  | FillBlankExercise
  | MatchingExercise
  | ErrorCorrectionExercise
  | TransformationExercise
  | DictationExercise;

/* ═══════════════ نتيجة التصحيح ═══════════════ */

export interface FeedbackResult {
  isCorrect: boolean;
  /** هل كانت الإجابة صحيحة جزئياً؟ (مثل ترتيب الكلمات صحيح لكن نقص) */
  partial?: boolean;
  pointsEarned: number;
  /** شرح «لماذا» بالعربية */
  explanation: string;
  /** تصنيف نوع الخطأ */
  errorType: ErrorTypeCode;
  /** الجواب الصحيح للعرض */
  correctAnswer?: string;
}

/* ═══════════════ مكونات الدرس العشرة ═══════════════ */

/** 1) الأهداف التعليمية */
export interface Lernziel {
  id: string;
  de: string;
  ar: string;
}

/** 2) التمهيد وتنشيط المعرفة السابقة */
export interface Einfuehrung {
  /** السؤال التحفيزي قبل عرض القاعدة */
  motivatingQuestionAr: string;
  motivatingQuestionDe?: string;
  /** سياق/حكاية قصيرة */
  contextAr: string;
  contextDe?: string;
  /** ربط بالدرس السابق */
  connectionToPreviousAr?: string;
  /** الكلمات المفتاحية لتنشيط الذاكرة */
  activateVocabulary?: { de: string; ar: string }[];
}

/** جدول داخل الشرح */
export interface ConjugationRow {
  label: string;
  cells: string[];
}

export interface ConjugationTable {
  title: string;
  columns: string[];
  rows: ConjugationRow[];
}

export interface GermanExample {
  de: string;
  ar: string;
}

export interface CommonMistake {
  wrong: string;
  right: string;
  whyAr: string;
}

/** 3) كتلة شرح نظرية (تتبع النمط الإلزامي ذي 9 نقاط) */
export interface TheoryBlock {
  id: string;
  /** 1. عنوان القاعدة بالعربية والألمانية */
  titleAr: string;
  titleDe: string;
  /** 2. الشرح بالعربية + لماذا المنطق وراءها */
  explanationAr: string;
  whyAr: string;
  /** 3. جدول تصريف/تطبيق */
  table?: ConjugationTable;
  /** 4. أمثلة ألمانية مترجمة (5+) */
  examples: GermanExample[];
  /** 5. مقارنة مع العربية */
  comparisonWithArabic: string;
  /** 6. تريك حفظ (Eselsbrücke) */
  eselsbruecke: string;
  /** 7. أخطاء شائعة للمتعلم العربي */
  commonMistakes: CommonMistake[];
  /** 8. مقارنة مع قاعدة مشابهة */
  relatedRuleComparison?: { title: string; content: string };
}

/** 4) الاستماع */
export interface ListeningLine {
  speaker: string;
  de: string;
  ar: string;
}

export interface ListeningItem {
  id: string;
  title: string;
  lines: ListeningLine[];
}

export interface ListeningQuestion extends McqExercise {
  /** المعرّف المقابل لـ ListeningItem */
  itemId: string;
}

/** 5) النطق (النسخة الأساسية — التقييم الكامل في المرحلة 3) */
export interface MinimalPair {
  a: string;
  aAr: string;
  b: string;
  bAr: string;
  note: string;
}

export interface MinimalPairGroup {
  id: string;
  title: string;
  titleDe: string;
  explanationAr: string;
  pairs: MinimalPair[];
}

export interface ShadowingLine {
  de: string;
  ar: string;
  tip?: string;
}

export interface PronunciationFocus {
  id: string;
  title: string;
  items: { de: string; ar: string; note: string }[];
  tip: string;
  /** مجموعات الأزواج الصوتية (اختياري — يُستخدم منها مجموعة افتراضية عند الغياب) */
  minimalPairs?: MinimalPairGroup[];
  /** سطور تدريب الظل (اختياري) */
  shadowing?: ShadowingLine[];
}

/** 6) الكتابة */
export type WritingExercise = TransformationExercise | DictationExercise | FillBlankExercise | OrderingExercise;

/** 8) الأخطاء الشائعة + التريكات + لقطة ثقافية */
export interface FehlerUndTipps {
  mistakes: CommonMistake[];
  eselsbruecken: string[];
  culturalNote: { title: string; content: string };
}

/** 10) بطاقات المراجعة */
export interface Flashcard {
  id: string;
  de: string;
  ar: string;
  example?: string;
  exampleAr?: string;
  level: LevelCode;
}

/** نص قراءة ممتد للدرس الأكاديمي */
export interface ReadingText {
  titleDe: string;
  titleAr: string;
  paragraphs: string[];
  paragraphsAr: string[];
  glossary: { de: string; ar: string; example?: string }[];
  questions: McqExercise[];
  redemittel: { de: string; ar: string }[];
  discussionAr: string;
}

/** الدرس الكامل */
export interface Lesson {
  id: string;
  unitId: string;
  level: LevelCode;
  order: number;
  titleDe: string;
  titleAr: string;
  duration: number;
  summary: string;
  /** 1 */
  lernziele: Lernziel[];
  /** 2 */
  einfuehrung: Einfuehrung;
  /** مراجعة تراكمية (Interleaving) — أسئلة من المستوى السابق */
  review?: Exercise[];
  /** قراءة أكاديمية ممتدة (اختيارية، مطلوبة في الدروس الأكاديمية A2+) */
  reading?: ReadingText;
  /** 3 */
  theory: TheoryBlock[];
  /** 4 */
  listening: { items: ListeningItem[]; questions: ListeningQuestion[] };
  /** 5 */
  pronunciation: PronunciationFocus;
  /** 6 */
  writing: WritingExercise[];
  /** 7 — بنك تدريبات تفاعلية واسع */
  practiceBank: Exercise[];
  /** 8 */
  fehlerUndTipps: FehlerUndTipps;
  /** 9 */
  miniTest: Exercise[];
  /** 10 */
  flashcards: Flashcard[];
}
