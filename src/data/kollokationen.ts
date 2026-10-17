/**
 * ═══════════════════════════════════════════════════════════
 *  كولوكيشنات B2 (Kollokationen) — المصاحبات اللفظية
 *  تركيبات اسم-فعل شائعة يستخدمها الألمان المتحدثون —
 *  المصحح في B2 يقيس «الطلاقة» = معرفة هذه التركيبات.
 *  — أضيفت ضمن اقتراحات المرحلة النهائية —
 * ═══════════════════════════════════════════════════════════
 */

export interface Kollokation {
  id: string;
  /** التركيبة (اسم + فعل) */
  de: string;
  /** المعنى بالعربية */
  ar: string;
  /** مثال في جملة */
  example: string;
  exampleAr: string;
  /** ملاحظة */
  note?: string;
}

export const KOLLOKATIONEN: Kollokation[] = [
  { id: "ko-1", de: "eine Rolle spielen", ar: "يلعب دوراً", example: "Technologie spielt heute eine große Rolle.", exampleAr: "تلعب التقنية اليوم دوراً كبيراً.", note: "لعب دور — لا تُترجم حرفياً." },
  { id: "ko-2", de: "Maßnahmen ergreifen", ar: "يتخذ إجراءات", example: "Die Regierung ergriff sofort Maßnahmen.", exampleAr: "اتخذت الحكومة إجراءات فوراً.", note: "فعل ergreifen مع Maßnahmen." },
  { id: "ko-3", de: "eine Entscheidung treffen", ar: "يتخذ قراراً", example: "Wir müssen heute eine Entscheidung treffen.", exampleAr: "يجب أن نتخذ قراراً اليوم.", note: "لا تقل machen! الفعل treffen." },
  { id: "ko-4", de: "zur Verfügung stehen", ar: "يكون تحت التصرف", example: "Ich stehe Ihnen jederzeit zur Verfügung.", exampleAr: "أنا تحت تصرفكم في أي وقت." },
  { id: "ko-5", de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", example: "Man sollte alle Möglichkeiten in Betracht ziehen.", exampleAr: "ينبغي أخذ كل الاحتمالات بعين الاعتبار." },
  { id: "ko-6", de: "eine Frage stellen", ar: "يطرح سؤالاً", example: "Darf ich eine Frage stellen?", exampleAr: "هل أستطيع طرح سؤال؟", note: "طرح لا رفع!" },
  { id: "ko-7", de: "einen Einfluss ausüben", ar: "يمارس تأثيراً", example: "Die Medien üben einen großen Einfluss aus.", exampleAr: "تمارس وسائل الإعلام تأثيراً كبيراً." },
  { id: "ko-8", de: "eine Verabredung treffen", ar: "يرتب موعداً", example: "Ich habe eine Verabredung mit dem Arzt getroffen.", exampleAr: "رتبت موعداً مع الطبيب." },
  { id: "ko-9", de: "in Frage kommen", ar: "يصلح/يُحتمل", example: "Dieser Termin kommt nicht in Frage.", exampleAr: "هذا الموعد غير ممكن.", note: "لا يقبل التصريف العادي بمعنى المجاز." },
  { id: "ko-10", de: "auf den ersten Blick", ar: "من النظرة الأولى", example: "Auf den ersten Blick scheint die Lösung einfach.", exampleAr: "من النظرة الأولى يبدو الحل بسيطاً." },
  { id: "ko-11", de: "eine Ausnahme machen", ar: "يستثني", example: "Können Sie für mich eine Ausnahme machen?", exampleAr: "هل يمكنكم استثنائي؟" },
  { id: "ko-12", de: "Rücksicht nehmen auf", ar: "يراعي/يأخذ بعين الاعتبار", example: "Man sollte Rücksicht auf andere nehmen.", exampleAr: "ينبغي مراعاة الآخرين.", note: "Rücksicht + nehmen auf." },
  { id: "ko-13", de: "in Kauf nehmen", ar: "يتقبل (سلبياً)", example: "Dafür muss man Wartezeiten in Kauf nehmen.", exampleAr: "لهذا يجب تقبل أوقات الانتظار." },
  { id: "ko-14", de: "einen Vorschlag machen", ar: "يقدم اقتراحاً", example: "Darf ich einen Vorschlag machen?", exampleAr: "هل أستطيع تقديم اقتراح؟" },
  { id: "ko-15", de: "Bescheid geben", ar: "يُخبر/يعطي خبراً", example: "Gib mir bitte Bescheid, wenn du kommst.", exampleAr: "أخبرني من فضلك عندما تأتي." },
  { id: "ko-16", de: "Anforderungen erfüllen", ar: "يحقق المتطلبات", example: "Der Bewerber erfüllt alle Anforderungen.", exampleAr: "يحقق المتقدم كل المتطلبات." },
  { id: "ko-17", de: "eine Chance nutzen", ar: "يستغل فرصة", example: "Man sollte jede Chance nutzen.", exampleAr: "ينبغي استغلال كل فرصة." },
  { id: "ko-18", de: "zum Ausdruck bringen", ar: "يعبّر عن", example: "Sie brachte ihre Meinung deutlich zum Ausdruck.", exampleAr: "عبرت عن رأيها بوضوح." },
  { id: "ko-19", de: "Wert legen auf", ar: "يولي أهمية", example: "Wir legen großen Wert auf Qualität.", exampleAr: "نولي أهمية كبيرة للجودة." },
  { id: "ko-20", de: "einen Beitrag leisten zu", ar: "يساهم في", example: "Jeder kann einen Beitrag zum Umweltschutz leisten.", exampleAr: "يمكن لكل شخص أن يساهم في حماية البيئة." },
  { id: "ko-21", de: "eine Erfahrung sammeln", ar: "يكتسب خبرة", example: "Im Ausland habe ich wertvolle Erfahrungen gesammelt.", exampleAr: "اكتسبت في الخارج خبرات قيمة.", note: "يجمع خبرات لا يشربها!" },
  { id: "ko-22", de: "einen Vertrag abschließen", ar: "يبرم عقداً", example: "Die Firma schloss einen Vertrag mit dem Kunden ab.", exampleAr: "أبرمت الشركة عقداً مع الزبون." },
  { id: "ko-23", de: "zur Sprache bringen", ar: "يطرح للنقاش", example: "Er brachte das Problem zur Sprache.", exampleAr: "طرح المشكلة للنقاش." },
  { id: "ko-24", de: "Gefahr laufen", ar: "يخاطر/يتعرض لخطر", example: "Ohne Vorbereitung läuft man Gefahr zu scheitern.", exampleAr: "بدون استعداد يخاطر المرء بالفشل." },
  { id: "ko-25", de: "eine Lösung finden", ar: "يجد حلاً", example: "Wir müssen eine gemeinsame Lösung finden.", exampleAr: "يجب أن نجد حلاً مشتركاً." },
  { id: "ko-26", de: "den Anforderungen entsprechen", ar: "يطابق المتطلبات", example: "Das Produkt entspricht den Anforderungen.", exampleAr: "المنتج يطابق المتطلبات." },
  { id: "ko-27", de: "einen Termin vereinbaren", ar: "يحدد موعداً", example: "Ich möchte einen Termin vereinbaren.", exampleAr: "أريد تحديد موعد.", note: "تحديد موعد لا ترتيب!" },
  { id: "ko-28", de: "auf dem Laufenden bleiben", ar: "يبقى على اطلاع", example: "Bleiben Sie auf dem Laufenden!", exampleAr: "ابقَ على اطلاع دائم!" },
  { id: "ko-29", de: "einen Eindruck machen", ar: "يترك انطباعاً", example: "Der erste Eindruck ist sehr wichtig.", exampleAr: "الانطباع الأول مهم جداً." },
  { id: "ko-30", de: "ein Risiko eingehen", ar: "يخوض مخاطرة", example: "Man sollte kein unnötiges Risiko eingehen.", exampleAr: "لا ينبغي خوض مخاطرة غير ضرورية." },
];

export const TOTAL_KOLLOKATIONEN = KOLLOKATIONEN.length;
