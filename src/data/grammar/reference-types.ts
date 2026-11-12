import type { ErrorTypeCode } from "@/types/lesson";

/**
 * أنواع المرجع النحوي (Grammatik-Referenz) — تُستورد من قوائم المستويات
 * ومن المُجمِّع `reference.ts` ومن الواجهات.
 */
export type GrammarCategory =
  | "verbs" | "nouns" | "articles" | "pronouns" | "adjectives"
  | "cases" | "prepositions" | "sentences" | "tenses" | "passive"
  | "modal" | "connectives" | "negation" | "word-order" | "particles";

export interface GrammarTopic {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  category: GrammarCategory;
  titleAr: string;
  titleDe: string;
  /** شرح مختصر واضح */
  summary: string;
  /** لماذا؟ المنطق */
  why?: string;
  examples: { de: string; ar: string }[];
  eselsbruecke?: string;
  /** نوع الخطأ المرتبط (لربط قاموس الأخطاء بالمرجع — اقتراح 1) */
  mistakeLink?: ErrorTypeCode;
}
