import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  أنواع القصص التفاعلية (Duolingo Stories style)
 *  — لكل قصة: نص متدرج + ترجمة + نطق + أسئلة فهم + اختيارات مسار —
 * ═══════════════════════════════════════════════════════════
 */

export interface StoryChoice {
  /** النص الألماني للاختيار */
  text: string;
  /** الترجمة العربية */
  ar: string;
  /** فهرس المقطع الذي تنتقل إليه */
  next: number;
  /** تعليق بيداغوجي على الاختيار */
  feedback?: string;
}

export interface StoryQuestion {
  de: string;
  ar: string;
  options: { text: string; ar: string; correct: boolean; explanation?: string }[];
}

export interface StorySegment {
  id: number;
  /** النص الألماني */
  de: string;
  /** الترجمة العربية */
  ar: string;
  /** كلمة/جملة للنطق (اختياري — أول جملة تلقائياً إن غاب) */
  speak?: string;
  /** أسئلة فهم — تظهر بين المقاطع */
  question?: StoryQuestion;
  /** اختيارات تفاعلية (نهاية مفتوحة) */
  choices?: StoryChoice[];
}

export interface InteractiveStory {
  id: string;
  level: LevelCode;
  title: string;
  titleAr: string;
  emoji: string;
  description: string;
  /** التركيز اللغوي (مفردات/قواعد) */
  grammar: string;
  segments: StorySegment[];
}
