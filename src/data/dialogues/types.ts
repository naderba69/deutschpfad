import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة حوارات الحياة اليومية — 61 حواراً (16 في A1 و15 في كل مستوى آخر)
 *  بأسلوب يتفوق على كتاب Menschen:
 *  · محادثة كاملة (5-6 جولات) بنطق صوتي وسرعتين
 *  · ترجمة كل جولة · أسئلة فهم (سؤالان على الأقل) · مفردات الحوار مظللة
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
  /** إفصاح عن مصدر الصوت وحدود التحقق؛ قد يكون المصدر غير موثّق */
  audioNoteAr?: string;
  turns: DialogueTurn[];
  questions: DialogueQuestion[];
  keyVocab: { de: string; ar: string }[];
}
