import type { ErrorTypeCode } from "@/types/lesson";

import { GRAMMAR_A1A2 } from "./reference-a1a2";
import { GRAMMAR_B1B2 } from "./reference-b1b2";
import type { GrammarCategory, GrammarTopic } from "./reference-types";

/**
 * ═══════════════════════════════════════════════════════════
 *  المرجع النحوي الشامل (Grammatik-Referenz) — كل قواعد A1→B2
 *  منظم حسب المستوى والفئة، كل قاعدة: شرح + لماذا + أمثلة + تريك
 *  + ربط بنوع الخطأ (لتغذية قاموس الأخطاء — المرحلة 12)
 *
 *  القوائم نفسها في: reference-a1a2.ts · reference-b1b2.ts
 *  (قُسِّم الملف بعد أن تجاوز سقف 600 سطر — حارس file-size-ratchet)
 * ═══════════════════════════════════════════════════════════
 */

export type { GrammarCategory, GrammarTopic } from "./reference-types";

export const GRAMMAR_REFERENCE: GrammarTopic[] = [...GRAMMAR_A1A2, ...GRAMMAR_B1B2];

/** الفئات بالعربية */
export const GRAMMAR_CATEGORIES: Record<GrammarCategory, string> = {
  verbs: "الأفعال",
  nouns: "الأسماء",
  articles: "الأدوات",
  pronouns: "الضمائر",
  adjectives: "الصفات",
  cases: "الحالات الإعرابية",
  prepositions: "حروف الجر",
  sentences: "الجمل",
  tenses: "الأزمنة",
  passive: "المبني للمجهول",
  modal: "أفعال الإمكان والوجوب والصيغ الشرطية",
  connectives: "الروابط",
  negation: "النفي",
  "word-order": "ترتيب الكلمات",
  particles: "الجسيمات المشدِّدة",
};

/** إيجاد قاعدة بالمعرّف (لربط قاموس الأخطاء) */
export function getGrammarTopicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_REFERENCE.find((t) => t.id === id);
}

/** قواعد نوع خطأ معين (لربط قاموس الأخطاء بالمرجع — اقتراح 1) */
export function getTopicsByMistakeType(type: ErrorTypeCode): GrammarTopic[] {
  return GRAMMAR_REFERENCE.filter((t) => t.mistakeLink === type);
}
