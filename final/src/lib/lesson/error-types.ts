import type { ErrorTypeCode, ErrorTypeInfo } from "@/types/lesson";

/**
 * تصنيف نوع الخطأ — قاموس موحد لكل التمارين
 * يُستخدم في التصحيح الفوري لشرح «نوع الخطأ» للمتعلم
 */
export const ERROR_TYPES: Record<ErrorTypeCode, ErrorTypeInfo> = {
  grammar: { code: "grammar", ar: "خطأ نحوي", de: "Grammatik" },
  conjugation: { code: "conjugation", ar: "تصريف الفعل", de: "Konjugation" },
  case: { code: "case", ar: "الحالة الإعرابية", de: "Kasus" },
  article: { code: "article", ar: "أداة التعريف", de: "Artikel" },
  gender: { code: "gender", ar: "جنس الاسم", de: "Genus" },
  "word-order": { code: "word-order", ar: "ترتيب الكلمات", de: "Wortstellung" },
  vocabulary: { code: "vocabulary", ar: "المفردات", de: "Wortschatz" },
  spelling: { code: "spelling", ar: "الإملاء", de: "Rechtschreibung" },
  preposition: { code: "preposition", ar: "حرف الجر", de: "Präposition" },
  negation: { code: "negation", ar: "النفي", de: "Negation" },
  pronoun: { code: "pronoun", ar: "الضمير", de: "Pronomen" },
  plural: { code: "plural", ar: "الجمع", de: "Plural" },
  punctuation: { code: "punctuation", ar: "علامات الترقيم", de: "Zeichensetzung" },
};

/** الحصول على وصف نوع الخطأ (عربي) بأمان */
export function errorTypeLabel(code: ErrorTypeCode): string {
  return ERROR_TYPES[code]?.ar ?? "خطأ عام";
}

/** الحصول على المصطلح الألماني لنوع الخطأ */
export function errorTypeDe(code: ErrorTypeCode): string {
  return ERROR_TYPES[code]?.de ?? "Fehler";
}
