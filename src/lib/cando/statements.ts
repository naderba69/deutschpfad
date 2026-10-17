import type { LevelCode } from "@/types/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  شهادة الإتقان (Can-Do) — لغة مكتسبة لا مُلقّنة
 *  كل مستوى له وظائف CEFR حقيقية (Can-Do Statements):
 *  · المتعلم يقيّم نفسه بصدق: «هل أستطيع فعل هذا فعلاً؟»
 *  · إتقان المستوى = أتقنت الوظائف + نجحت في الاختبار
 *  · تُحفظ التقييمات محلياً وتغذي مؤشر «جاهزية الشهادة»
 * ═══════════════════════════════════════════════════════════
 */

export interface CanDoItem {
  id: string;
  /** الوظيفة بالألمانية (ما أستطيع فعله) */
  de: string;
  /** بالعربية */
  ar: string;
  /** المهارة الرئيسية */
  skill: "الاستماع" | "القراءة" | "التحدث" | "الكتابة" | "التفاعل";
}

/** وظائف Can-Do لكل مستوى (مبنية على CEFR) */
export const CAN_DO_BY_LEVEL: Record<LevelCode, CanDoItem[]> = {
  A1: [
    { id: "a1-c1", de: "Ich kann mich vorstellen und andere begrüßen.", ar: "أستطيع تقديم نفسي وإلقاء التحية.", skill: "التحدث" },
    { id: "a1-c2", de: "Ich kann einfache Fragen stellen und beantworten.", ar: "أستطيع طرح أسئلة بسيطة والإجابة عنها.", skill: "التفاعل" },
    { id: "a1-c3", de: "Ich kann im Café oder Restaurant bestellen.", ar: "أستطيع الطلب في المقهى أو المطعم.", skill: "التحدث" },
    { id: "a1-c4", de: "Ich kann nach dem Weg fragen und ihn verstehen.", ar: "أستطيع السؤال عن الطريق وفهم الإجابة.", skill: "التفاعل" },
    { id: "a1-c5", de: "Ich kann Zahlen, Preise und Uhrzeiten verstehen.", ar: "أفهم الأرقام والأسعار والمواعيد.", skill: "الاستماع" },
    { id: "a1-c6", de: "Ich kann eine kurze Postkarte schreiben.", ar: "أستطيع كتابة بطاقة بريدية قصيرة.", skill: "الكتابة" },
    { id: "a1-c7", de: "Ich kann einfache Schilder und Formulare verstehen.", ar: "أفهم اللافتات والاستمارات البسيطة.", skill: "القراءة" },
  ],
  A2: [
    { id: "a2-c1", de: "Ich kann über meinen Alltag und meine Familie sprechen.", ar: "أستطيع الحديث عن يومي وعائلتي.", skill: "التحدث" },
    { id: "a2-c2", de: "Ich kann beim Arzt meine Symptome beschreiben.", ar: "أستطيع وصف أعراضي عند الطبيب.", skill: "التحدث" },
    { id: "a2-c3", de: "Ich kann im Restaurant oder Hotel Probleme lösen.", ar: "أستطيع حل مشكلات في المطعم أو الفندق.", skill: "التفاعل" },
    { id: "a2-c4", de: "Ich kann einfache Gespräche über Vergangenes führen.", ar: "أستطيع التحدث عن أحداث الماضي.", skill: "التحدث" },
    { id: "a2-c5", de: "Ich kann Anweisungen verstehen und befolgen.", ar: "أفهم التعليمات وأنفذها.", skill: "الاستماع" },
    { id: "a2-c6", de: "Ich kann eine kurze Nachricht oder E-Mail schreiben.", ar: "أستطيع كتابة رسالة قصيرة أو بريد.", skill: "الكتابة" },
    { id: "a2-c7", de: "Ich kann einfache Texte über bekannte Themen lesen.", ar: "أقرأ نصوصاً بسيطة عن مواضيع مألوفة.", skill: "القراءة" },
  ],
  B1: [
    { id: "b1-c1", de: "Ich kann meine Meinung begründen und Beispiele geben.", ar: "أستطيع تبرير رأيي وإعطاء أمثلة.", skill: "التحدث" },
    { id: "b1-c2", de: "Ich kann über Erfahrungen und Ereignisse berichten.", ar: "أستطيع سرد تجاربي وأحداث.", skill: "التحدث" },
    { id: "b1-c3", de: "Ich kann Pläne für die Zukunft erklären.", ar: "أستطيع شرح خططي المستقبلية.", skill: "التحدث" },
    { id: "b1-c4", de: "Ich kann an Diskussionen zu vertrauten Themen teilnehmen.", ar: "أشارك في نقاشات حول مواضيع مألوفة.", skill: "التفاعل" },
    { id: "b1-c5", de: "Ich kann die Hauptpunkte von Radiosendungen verstehen.", ar: "أفهم النقاط الرئيسية في البرامج الإذاعية.", skill: "الاستماع" },
    { id: "b1-c6", de: "Ich kann einen zusammenhängenden Text schreiben.", ar: "أستطيع كتابة نص مترابط.", skill: "الكتابة" },
    { id: "b1-c7", de: "Ich kann Artikel über aktuelle Themen verstehen.", ar: "أفهم مقالات عن مواضيع راهنة.", skill: "القراءة" },
  ],
  B2: [
    { id: "b2-c1", de: "Ich kann komplexe Themen klar und detailliert darstellen.", ar: "أستطيع عرض مواضيع معقدة بوضوح وتفصيل.", skill: "التحدث" },
    { id: "b2-c2", de: "Ich kann in Verhandlungen und Diskussionen argumentieren.", ar: "أستطيع المجادلة في المفاوضات والنقاشات.", skill: "التفاعل" },
    { id: "b2-c3", de: "Ich kann Standpunkte verteidigen und Einwände formulieren.", ar: "أدافع عن موقفي وأعترض بأدب.", skill: "التفاعل" },
    { id: "b2-c4", de: "Ich kann Vorträge und komplexe Gespräche verstehen.", ar: "أفهم المحاضرات والمحادثات المعقدة.", skill: "الاستماع" },
    { id: "b2-c5", de: "Ich kann einen strukturierten Aufsatz schreiben.", ar: "أستطيع كتابة مقال منظم.", skill: "الكتابة" },
    { id: "b2-c6", de: "Ich kann formelle Briefe und Berichte verfassen.", ar: "أكتب رسائل رسمية وتقارير.", skill: "الكتابة" },
    { id: "b2-c7", de: "Ich kann anspruchsvolle Texte verstehen und analysieren.", ar: "أفهم النصوص المتطلبة وأحللها.", skill: "القراءة" },
  ],
};

/** مفتاح التخزين: تقييمات المستخدم لكل وظيفة */
const KEY_PREFIX = "dp:cando:";

export type CanDoRating = 0 | 0.5 | 1; // 0=لا، 0.5=جزئياً، 1=نعم أستطيع

/** قراءة تقييم وظيفة */
export function getCanDoRating(level: LevelCode, id: string): CanDoRating {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(`${KEY_PREFIX}${level}:${id}`);
    const n = raw ? Number(raw) : 0;
    return n === 1 || n === 0.5 ? n : 0;
  } catch {
    return 0;
  }
}

/** حفظ تقييم وظيفة */
export function setCanDoRating(level: LevelCode, id: string, rating: CanDoRating): void {
  try {
    localStorage.setItem(`${KEY_PREFIX}${level}:${id}`, String(rating));
  } catch {
    /* تجاهل */
  }
}

/** إحصائيات إتقان مستوى: عدد الوظائف المتقنة (نعم = 1، جزئياً = 0.5) */
export function getLevelCanDoStats(level: LevelCode): { total: number; mastered: number; pct: number } {
  const items = CAN_DO_BY_LEVEL[level] ?? [];
  const total = items.length;
  let mastered = 0;
  for (const it of items) {
    const r = getCanDoRating(level, it.id);
    mastered += r;
  }
  return {
    total,
    mastered,
    pct: total > 0 ? Math.round((mastered / total) * 100) : 0,
  };
}

/** خريطة: وظائف كل المهارات لمستوى (للمراجع) */
export const ALL_SKILLS = ["الاستماع", "القراءة", "التحدث", "الكتابة", "التفاعل"] as const;
