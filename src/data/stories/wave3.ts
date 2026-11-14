import type { InteractiveStory } from "./types";

/**
 * قصص العالم المهني — أربع قصص (واحدة لكل مستوى) في ملف مستقل احتراماً لسقف الحجم.
 * كل قصة: 5 مقاطع + سؤالا فهم + شرح لكل خيار + إفصاح «خيالية» في الوصف.
 */

const A1_ERSTER_ARBEITSTAG: InteractiveStory = {
  id: "a1-erster-arbeitstag",
  level: "A1",
  title: "Der erste Arbeitstag",
  titleAr: "أول يوم عمل",
  emoji: "🪪",
  description: "قصة تدريبية خيالية عن أول يوم عمل — جمل قصيرة في المضارع؛ ليست وصفاً لشركة أو عقد حقيقي.",
  grammar: "المضارع • sein/haben • أرقام الوقت • التحية في العمل",
  segments: [
    { id: 1, de: "Sami ist neu in der Firma. Heute ist sein erster Tag.", ar: "سامي جديد في الشركة. اليوم هو أول يوم له." },
    { id: 2, de: "Der Chef sagt: „Willkommen! Dein Platz ist neben der Küche.“", ar: "يقول المدير: «أهلاً بك! مكانك بجانب المطبخ.»" },
    {
      id: 3,
      de: "Sami trinkt einen Kaffee und lernt die Kollegen kennen.",
      ar: "يشرب سامي قهوة ويتعرّف على الزملاء.",
      question: {
        de: "Wo ist der Platz von Sami?",
        ar: "أين مكان سامي؟",
        options: [
          { text: "Neben der Küche", ar: "بجانب المطبخ", correct: true, explanation: "صحيح — المدير يقول «neben der Küche»." },
          { text: "Im ersten Stock", ar: "في الطابق الأول", correct: false, explanation: "لا — الطابق الأول غير مذكور في القصة." },
          { text: "Vor dem Haus", ar: "أمام البيت", correct: false, explanation: "لا — المكان داخل الشركة جانب المطبخ." },
        ],
      },
    },
    {
      id: 4,
      de: "Die Pause ist um zwölf Uhr. Sami isst mit zwei Kollegen.",
      ar: "الاستراحة في الثانية عشرة. يأكل سامي مع زميلين.",
      question: {
        de: "Wann ist die Pause?",
        ar: "متى الاستراحة؟",
        options: [
          { text: "Um zwölf Uhr", ar: "في الثانية عشرة", correct: true, explanation: "صحيح — «Die Pause ist um zwölf Uhr»." },
          { text: "Um halb eins", ar: "في الثانية عشرة والنصف", correct: false, explanation: "لا — الوقت المذكور هو الثانية عشرة تماماً." },
          { text: "Um zehn Uhr", ar: "في العاشرة", correct: false, explanation: "لا — العاشرة غير مذكورة في القصة." },
        ],
      },
    },
    { id: 5, de: "Am Abend ist Sami müde, aber glücklich.", ar: "في المساء يكون سامي متعباً لكنه سعيد." },
  ],
};

const A2_NEUER_JOB: InteractiveStory = {
  id: "a2-neuer-job",
  level: "A2",
  title: "Der neue Job im Laden",
  titleAr: "العمل الجديد في المتجر",
  emoji: "🛍️",
  description: "قصة تدريبية خيالية عن أول أسبوع في متجر صغير — Perfekt ومفردات العمل؛ لا تصف أجوراً أو شروط عمل حقيقية.",
  grammar: "Perfekt • ظروف الزمن • الحديث عن العمل",
  segments: [
    { id: 1, de: "Lina hat einen neuen Job in einem kleinen Laden.", ar: "لينا لديها عمل جديد في متجر صغير." },
    { id: 2, de: "Am Montag hat sie zum ersten Mal gearbeitet.", ar: "يوم الاثنين عملت للمرة الأولى." },
    {
      id: 3,
      de: "Ihre Chefin hat ihr die Kasse gezeigt und alles erklärt.",
      ar: "أرتْها مديرتها الصندوق وشرحت لها كل شيء.",
      question: {
        de: "Was hat die Chefin gezeigt?",
        ar: "ماذا أرتْها المديرة؟",
        options: [
          { text: "Die Kasse im Laden", ar: "الصندوق في المتجر", correct: true, explanation: "صحيح — «Ihre Chefin hat ihr die Kasse gezeigt»." },
          { text: "Den Lagerraum hinten", ar: "المخزن في الخلف", correct: false, explanation: "لا — المخزن غير مذكور في القصة." },
          { text: "Das Büro vom Chef", ar: "مكتب المدير", correct: false, explanation: "لا — القصة تتحدث عن الصندوق لا عن مكتب." },
        ],
      },
    },
    {
      id: 4,
      de: "Lina hat viele Kunden bedient. Am Abend war sie sehr müde.",
      ar: "خدمت لينا زبائن كثيرين. في المساء كانت متعبة جداً.",
      question: {
        de: "Wie war Lina am Abend?",
        ar: "كيف كانت لينا في المساء؟",
        options: [
          { text: "Müde, aber zufrieden", ar: "متعبة لكنها راضية", correct: true, explanation: "صحيح — القصة تقول إنها كانت متعبة جداً بعد يوم عمل ناجح." },
          { text: "Wütend auf die Chefin", ar: "غاضبة من المديرة", correct: false, explanation: "لا — لا غضب في القصة؛ المديرة شرحت لها كل شيء." },
          { text: "Krank und zu Hause", ar: "مريضة وفي البيت", correct: false, explanation: "لا — لم تُذكر Krankheit ولا بقاؤها في البيت." },
        ],
      },
    },
    { id: 5, de: "Sie sagt: „Morgen komme ich wieder.“", ar: "تقول: «سأعود غداً.»" },
  ],
};

const B1_ERSTE_WOCHE: InteractiveStory = {
  id: "b1-erste-woche-buero",
  level: "B1",
  title: "Die erste Woche im Büro",
  titleAr: "الأسبوع الأول في المكتب",
  emoji: "💼",
  description: "قصة تدريبية خيالية عن أسبوع أول في مكتب — جمل ثانوية وترتيب زمني؛ لا تُعمّم ثقافة عمل ولا شروط توظيف.",
  grammar: "الجمل الثانوية (weil, ob) • الأفعال الانفصالية • بيئة العمل",
  segments: [
    { id: 1, de: "Seit Montag arbeitet Nadia in einem Büro in Leipzig.", ar: "منذ الاثنين تعمل نادية في مكتب في لايبزيغ." },
    { id: 2, de: "Weil sie die Kollegen noch nicht kennt, isst sie mittags allein.", ar: "لأنها لا تعرف الزملاء بعد، تأكل وحدها عند الظهر." },
    {
      id: 3,
      de: "Am dritten Tag fragt sie eine Kollegin, ob sie zusammen essen wollen.",
      ar: "في اليوم الثالث تسأل زميلةً إن كانتا تريدان الأكل معاً.",
      question: {
        de: "Warum isst Nadia am Anfang allein?",
        ar: "لماذا تأكل نادية وحدها في البداية؟",
        options: [
          { text: "Weil sie die Kollegen nicht kennt", ar: "لأنها لا تعرف الزملاء", correct: true, explanation: "صحيح — «Weil sie die Kollegen noch nicht kennt»." },
          { text: "Weil sie noch keine Pause hat", ar: "لأنه ليس لديها وقت استراحة بعد", correct: false, explanation: "لا — الاستراحة غير مذكورة سبباً؛ السبب هو عدم معرفة الزملاء." },
          { text: "Weil das Büro weit weg ist", ar: "لأن المكتب بعيد", correct: false, explanation: "لا — بُعد المكتب غير مذكور في القصة." },
        ],
      },
    },
    {
      id: 4,
      de: "Am Freitag kennt sie schon die wichtigsten Abläufe im Büro.",
      ar: "يوم الجمعة تعرف بالفعل أهم إجراءات المكتب.",
      question: {
        de: "Was kennt Nadia am Freitag schon?",
        ar: "ماذا تعرف نادية يوم الجمعة؟",
        options: [
          { text: "Die wichtigsten Abläufe", ar: "أهم الإجراءات", correct: true, explanation: "صحيح — «kennt sie schon die wichtigsten Abläufe»." },
          { text: "Alle Namen der Kunden", ar: "كل أسماء الزبائن", correct: false, explanation: "لا — أسماء الزبائن غير مذكورة في القصة." },
          { text: "Den ganzen Firmenplan", ar: "خطة الشركة كاملة", correct: false, explanation: "لا — «Firmenplan» غير مذكور؛ المذكور هو Abläufe." },
        ],
      },
    },
    { id: 5, de: "Sie sagt: „Fragen zu stellen hat mir geholfen.“", ar: "تقول: «طرح الأسئلة ساعدني.»" },
  ],
};

const B2_ZWEITE_CHANCE: InteractiveStory = {
  id: "b2-zweite-chance",
  level: "B2",
  title: "Die zweite Chance",
  titleAr: "الفرصة الثانية",
  emoji: "📄",
  description: "قصة تدريبية خيالية عن ترشّح متأخر لوظيفة — Konjunktiv II وأسلوب رسمي؛ لا تصف مسار توظيف رسمي ولا شروط قبول حقيقية.",
  grammar: "Konjunktiv II • نقل الكلام (Konjunktiv I) • أسلوب رسمي",
  segments: [
    { id: 1, de: "Hätte Frau Weber die Stellenanzeige früher gelesen, hätte sie sich rechtzeitig beworben.", ar: "لو قرأت السيدة فيبر إعلان الوظيفة أبكر، لكانت تقدّمت في الوقت المناسب." },
    { id: 2, de: "Obwohl sie die Anforderungen fast vollständig erfüllt, fehlt ihr eine formale Zusatzqualifikation.", ar: "رغم أنها تستوفي المتطلبات تقريباً بالكامل، ينقصها مؤهل إضافي رسمي." },
    {
      id: 3,
      de: "Im Gespräch erklärt sie, sie sei bereit, eine Zusatzprüfung zu absolvieren.",
      ar: "في المقابلة تشرح أنها مستعدة لأداء امتحان إضافي.",
      question: {
        de: "Was fehlt Frau Weber?",
        ar: "ما الذي ينقص السيدة فيبر؟",
        options: [
          { text: "Eine formale Zusatzqualifikation", ar: "مؤهل إضافي رسمي", correct: true, explanation: "صحيح — «fehlt ihr eine formale Zusatzqualifikation»." },
          { text: "Berufserfahrung im Ausland", ar: "خبرة عملية في الخارج", correct: false, explanation: "لا — الخبرة الخارجية غير مذكورة في القصة." },
          { text: "Ein abgeschlossenes Hochschulstudium", ar: "شهادة جامعية مكتملة", correct: false, explanation: "لا — النقص المذكور مؤهل إضافي لا شهادة جامعية." },
        ],
      },
    },
    {
      id: 4,
      de: "Die Personalchefin sagt, man werde ihre Bewerbung dennoch prüfen.",
      ar: "تقول مديرة الموارد البشرية إنهم سيفحصون طلبها مع ذلك.",
      question: {
        de: "Wie reagiert die Personalchefin?",
        ar: "كيف تردّ مديرة الموارد البشرية؟",
        options: [
          { text: "Sie prüft die Bewerbung trotzdem", ar: "تفحص الطلب رغم ذلك", correct: true, explanation: "صحيح — «man werde ihre Bewerbung dennoch prüfen»." },
          { text: "Sie lehnt die Bewerbung sofort ab", ar: "ترفض الطلب فوراً", correct: false, explanation: "لا — القصة تقول إن الطلب سيُفحص، لا إنه رُفض." },
          { text: "Sie verschiebt das Gespräch auf Montag", ar: "تؤجل المقابلة إلى الاثنين", correct: false, explanation: "لا — التأجيل إلى الاثنين غير مذكور." },
        ],
      },
    },
    { id: 5, de: "Frau Weber verlässt das Büro mit gemischten Gefühlen.", ar: "تغادر السيدة فيبر المكتب بمشاعر متباينة." },
  ],
};

export const STORIES_WAVE3: InteractiveStory[] = [
  A1_ERSTER_ARBEITSTAG,
  A2_NEUER_JOB,
  B1_ERSTE_WOCHE,
  B2_ZWEITE_CHANCE,
];
