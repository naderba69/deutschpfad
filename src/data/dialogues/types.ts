import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة حوارات الحياة اليومية — 60 حواراً (15 × 4 مستويات)
 *  بأسلوب يتفوق على كتاب Menschen:
 *  · محادثة كاملة (5-6 جولات) بنطق صوتي وسرعتين
 *  · ترجمة كل جولة · أسئلة فهم (3) · مفردات الحوار مظللة
 *  · وضع «دورك» 🎭: المتعلم يُكمل دور أحد المتحدثين
 * ═══════════════════════════════════════════════════════════
 */

export interface DialogueTurn {
  /** اسم المتحدث (بالعربية) */
  speaker: string;
  /** الدور: a أو b (لوضع «دورك») */
  role: "a" | "b";
  de: string;
  ar: string;
}

export interface DialogueQuestion {
  de: string;
  ar: string;
  options: { text: string; ar: string; correct: boolean; explanation?: string }[];
}

export interface DailyDialogue {
  id: string;
  level: LevelCode;
  title: string;
  titleDe: string;
  emoji: string;
  /** الموقف بالعربية */
  situation: string;
  turns: DialogueTurn[];
  questions: DialogueQuestion[];
  keyVocab: { de: string; ar: string }[];
}
