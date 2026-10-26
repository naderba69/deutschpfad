/**
 * a2 — الحوارات الخمسة الأخيرة — عند الحلاق · الاعتذار عن التأخير · إرجاع ملابس · حديث مع الجيران · شراء هدية
 * فُصل من a2.ts في الدفعة 113 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../a2.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const A2_DIALOGUES_3: DailyDialogue[] = [
  {
    id: "a2-11-friseur",
    level: "A2",
    title: "عند الحلاق",
    titleDe: "Beim Friseur",
    emoji: "💇",
    situation: "تقص شعرك وتعبر عن رغبتك",
    turns: [
      { speaker: "الحلاق", role: "a", de: "Guten Tag! Was möchten Sie?", ar: "طاب يومك! ماذا تريد؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte meine Haare schneiden lassen.", ar: "أريد قص شعري." },
      { speaker: "الحلاق", role: "a", de: "Wie möchten Sie die Haare? Kürzer?", ar: "كيف تريد الشعر؟ أقصر؟" },
      { speaker: "أنت", role: "b", de: "Ja, ein bisschen kürzer, aber nicht zu kurz.", ar: "نعم، أقصر قليلاً لكن ليس قصيراً جداً." },
      { speaker: "الحلاق", role: "a", de: "Verstanden. Und die Seiten?", ar: "فهمت. والجوانب؟" },
      { speaker: "أنت", role: "b", de: "Ganz normal, bitte.", ar: "عادية تماماً من فضلك." },
    ],
    questions: [
      { de: "Was möchte der Kunde?", ar: "ماذا يريد الزبون؟", options: [
        { text: "Die Haare schneiden lassen", ar: "قص الشعر", correct: true, explanation: "نعم — «schneiden lassen»." },
        { text: "Die Haare blond färben lassen", ar: "صبغ الشعر", correct: false, explanation: "لا — لم يُذكر صبغ blond färben؛ والطلب «meine Haare schneiden lassen»." },
        { text: "Einen Bart trimmen lassen", ar: "لحية", correct: false, explanation: "لا — لم تُذكر لحية Bart؛ والزبون قال «Ich möchte meine Haare schneiden lassen»." },
      ]},
      { de: "Wie möchte der Kunde die Haare?", ar: "كيف يريد الشعر؟", options: [
        { text: "Ein bisschen kürzer", ar: "أقصر قليلاً", correct: true, explanation: "صحيح — «ein bisschen kürzer»." },
        { text: "Sehr kurz am Nacken", ar: "قصير جداً", correct: false, explanation: "لا — القصير جداً مرفوض صراحةً: «aber nicht zu kurz»." },
        { text: "Ganz lang wie vorher", ar: "طويل جداً", correct: false, explanation: "لا — لم يُطلب إبقاء الطول؛ بل «ein bisschen kürzer»." },
      ]},
      { de: "Wie kurz soll der Haarschnitt sein?", ar: "ما طول قصة الشعر المطلوبة؟", options: [
        { text: "Sehr kurz an den Seiten und hinten", ar: "قصير جداً", correct: false, explanation: "لا — قال «nicht zu kurz»." },
        { text: "Etwas kürzer, aber nicht zu kurz", ar: "أقصر قليلاً، لكن ليس قصيراً جداً", correct: true, explanation: "نعم — «ein bisschen kürzer, aber nicht zu kurz»." },
        { text: "Länger als jetzt", ar: "أطول", correct: false, explanation: "لا — الطلب أقصر لا أطول: «ein bisschen kürzer»." },
      ]},
    ],
    keyVocab: [
      { de: "schneiden lassen", ar: "يقصّ (بنيابة عن نفسه)" },
      { de: "ein bisschen kürzer", ar: "أقصر قليلاً" },
      { de: "nicht zu kurz", ar: "ليس قصيراً جداً" },
      { de: "die Seiten", ar: "الجوانب" },
      { de: "ganz normal", ar: "عادية تماماً" },
    ],
  },
  {
    id: "a2-12-verspaetet",
    level: "A2",
    title: "الاعتذار عن التأخير",
    titleDe: "Sich verspäten",
    emoji: "⏰",
    situation: "وصلت متأخراً إلى موعد مع صديق",
    turns: [
      { speaker: "أنت", role: "a", de: "Es tut mir leid! Ich bin zu spät.", ar: "آسف! لقد تأخرت." },
      { speaker: "الصديق", role: "b", de: "Kein Problem. Was ist passiert?", ar: "لا مشكلة. ماذا حدث؟" },
      { speaker: "أنت", role: "a", de: "Der Bus hatte Verspätung.", ar: "تأخرت الحافلة." },
      { speaker: "الصديق", role: "b", de: "Ach so, das ist nicht deine Schuld.", ar: "آه، إذن ليس خطؤك." },
      { speaker: "أنت", role: "a", de: "Danke für dein Verständnis. Ich lade dich zum Kaffee ein!", ar: "شكراً لتفهمك. أدعوك للقهوة!" },
      { speaker: "الصديق", role: "b", de: "Sehr nett! Einverstanden!", ar: "لطيف جداً! موافق!" },
    ],
    questions: [
      { de: "Warum war die Person zu spät?", ar: "لماذا تأخرت الشخص؟", options: [
        { text: "Der Bus hatte Verspätung", ar: "تأخرت الحافلة", correct: true, explanation: "نعم — سبب التأخير." },
        { text: "Sie hat verschlafen", ar: "نامت", correct: false, explanation: "لا — لم يُذكر نومٌ عن الموعد verschlafen؛ والسبب «Der Bus hatte Verspätung»." },
        { text: "Sie hat den Weg vergessen", ar: "نسيت الطريق", correct: false, explanation: "لا — لم يُذكر نسيان الطريق Weg vergessen؛ والتأخير من الحافلة («Der Bus hatte Verspätung»)." },
      ]},
      { de: "Was bietet die Person an?", ar: "ماذا تعرض الشخص؟", options: [
        { text: "Kaffee einladen", ar: "دعوة للقهوة", correct: true, explanation: "صحيح — «Ich lade dich zum Kaffee ein»." },
        { text: "Ein Geschenk", ar: "هدية", correct: false, explanation: "لا — لم تُذكر هدية Geschenk؛ والعرض «Ich lade dich zum Kaffee ein»." },
        { text: "Nach Hause fahren", ar: "توصيل للبيت", correct: false, explanation: "لا — لم يُعرض توصيلٌ إلى البيت nach Hause؛ بل دعوةٌ إلى القهوة («zum Kaffee ein»)." },
      ]},
      { de: "Wie reagiert der Freund?", ar: "كيف يتفاعل الصديق؟", options: [
        { text: "Er ist böse und geht.", ar: "يغضب ويذهب.", correct: false, explanation: "لا — قال «Kein Problem»." },
        { text: "Er sagt: Kein Problem.", ar: "يقول: لا مشكلة.", correct: true, explanation: "نعم — «Kein Problem. Was ist passiert?»." },
        { text: "Er bleibt nicht.", ar: "لا يبقى.", correct: false, explanation: "لا — بقي وقَبِل الدعوة: «Sehr nett! Einverstanden!»." },
      ]},
    ],
    keyVocab: [
      { de: "Es tut mir leid", ar: "آسف" },
      { de: "zu spät sein", ar: "متأخر" },
      { de: "die Verspätung", ar: "التأخير" },
      { de: "nicht deine Schuld", ar: "ليس خطؤك" },
      { de: "einladen", ar: "يدعو" },
    ],
  },
  {
    id: "a2-13-einkaufen-kleidung",
    level: "A2",
    title: "إرجاع ملابس",
    titleDe: "Kleidung zurückgeben",
    emoji: "👖",
    situation: "تعيد بنطالاً لا يناسبك إلى المتجر",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich möchte diese Hose zurückgeben.", ar: "طاب يومك! أريد إرجاع هذا البنطال." },
      { speaker: "البائعة", role: "b", de: "Ist etwas nicht in Ordnung?", ar: "هل هناك مشكلة؟" },
      { speaker: "أنت", role: "a", de: "Die Größe passt nicht. Sie ist zu klein.", ar: "المقاس غير مناسب. صغير جداً." },
      { speaker: "البائعة", role: "b", de: "Haben Sie den Kassenzettel?", ar: "هل لديك الإيصال؟" },
      { speaker: "أنت", role: "a", de: "Ja, hier ist er.", ar: "نعم، هذا هو." },
      { speaker: "البائعة", role: "b", de: "In Ordnung. Sie bekommen Ihr Geld zurück.", ar: "حسناً. سيعود إليك مالك." },
    ],
    questions: [
      { de: "Warum gibt die Person die Hose zurück?", ar: "لماذا تعيد البنطال؟", options: [
        { text: "Die Größe passt nicht", ar: "المقاس غير مناسب", correct: true, explanation: "نعم — «Die Größe passt nicht»." },
        { text: "Die Farbe gefällt nicht", ar: "اللون لا يعجب", correct: false, explanation: "لا — لم يُذكر لون Farbe؛ والسبب «Die Größe passt nicht»." },
        { text: "Sie ist kaputt", ar: "ممزق", correct: false, explanation: "لا — لم يُذكر تلف kaputt؛ والعيب في المقاس («Die Größe passt nicht»)." },
      ]},
      { de: "Was braucht man für die Rückgabe?", ar: "ماذا يحتاج المرء للإرجاع؟", options: [
        { text: "Den Kassenzettel", ar: "الإيصال", correct: true, explanation: "صحيح — «Haben Sie den Kassenzettel?»." },
        { text: "Den Pass", ar: "جواز السفر", correct: false, explanation: "لا — لم يُطلب جواز سفر Pass؛ والبائعة سألت «Haben Sie den Kassenzettel?»." },
        { text: "Die Kreditkarte", ar: "بطاقة الائتمان", correct: false, explanation: "لا — لم تُذكر بطاقة ائتمان Kreditkarte؛ والمطلوب der Kassenzettel." },
      ]},
      { de: "Was ist das Problem mit der Hose?", ar: "ما المشكلة في البنطال؟", options: [
        { text: "Sie ist zu lang.", ar: "إنه طويل جداً.", correct: false, explanation: "لا — الطول ليس المشكلة؛ بل «Sie ist zu klein»." },
        { text: "Sie ist zu klein.", ar: "إنه صغير جداً.", correct: true, explanation: "نعم — «Sie ist zu klein»." },
        { text: "Sie hat einen Fleck.", ar: "به بقعة.", correct: false, explanation: "لا — لم تُذكر بقعة Fleck؛ والعيب «Die Größe passt nicht»." },
      ]},
    ],
    keyVocab: [
      { de: "zurückgeben", ar: "يعيد (سلعة)" },
      { de: "der Kassenzettel", ar: "الإيصال" },
      { de: "zu klein", ar: "صغير جداً" },
      { de: "das Geld zurückbekommen", ar: "استعادة المال" },
      { de: "in Ordnung", ar: "حسناً" },
    ],
  },
  {
    id: "a2-14-nachbarn",
    level: "A2",
    title: "حديث مع الجيران",
    titleDe: "Gespräch mit Nachbarn",
    emoji: "🏘️",
    situation: "جديد في المبنى وتتعرف على جارك",
    turns: [
      { speaker: "الجار", role: "a", de: "Hallo! Sie sind neu hier, oder?", ar: "مرحباً! أنت جديد هنا، أليس كذلك؟" },
      { speaker: "أنت", role: "b", de: "Ja, ich bin gestern eingezogen.", ar: "نعم، انتقلت بالأمس." },
      { speaker: "الجار", role: "a", de: "Willkommen! Ich heiße Herr Weber.", ar: "مرحباً بك! اسمي السيد فيبر." },
      { speaker: "أنت", role: "b", de: "Freut mich! Ich bin Sami.", ar: "سعيد بلقائك! أنا سامي." },
      { speaker: "الجار", role: "a", de: "Wenn Sie Hilfe brauchen, klopfen Sie einfach.", ar: "إذا احتجت مساعدة، اطرق الباب ببساطة." },
      { speaker: "أنت", role: "b", de: "Das ist sehr nett. Vielen Dank!", ar: "هذا لطيف جداً. شكراً جزيلاً!" },
    ],
    questions: [
      { de: "Wann ist die Person eingezogen?", ar: "متى انتقلت الشخص؟", options: [
        { text: "Gestern am Abend", ar: "بالأمس", correct: true, explanation: "نعم — «gestern eingezogen»." },
        { text: "Vor einer Woche", ar: "قبل أسبوع", correct: false, explanation: "لا — لم يُذكر أسبوع Woche؛ والانتقال «ich bin gestern eingezogen»." },
        { text: "Vor einem Monat", ar: "قبل شهر", correct: false, explanation: "لا — لم يُذكر شهر Monat؛ والسكن بدأ أمس («gestern eingezogen»)." },
      ]},
      { de: "Wie heißt der Nachbar?", ar: "ما اسم الجار؟", options: [
        { text: "Herr Weber", ar: "السيد فيبر", correct: true, explanation: "صحيح — «Ich heiße Herr Weber»." },
        { text: "Herr Müller", ar: "السيد مولر", correct: false, explanation: "لا — لم يُذكر اسم مولر Müller؛ والجار قال «Ich heiße Herr Weber»." },
        { text: "Herr Schmidt", ar: "السيد شميت", correct: false, explanation: "لا — لم يُذكر اسم شميت Schmidt؛ والاسم Herr Weber." },
      ]},
      { de: "Was bietet der Nachbar an?", ar: "ماذا يقدم الجار؟", options: [
        { text: "Ein Auto zu leihen für den Umzug", ar: "إعارة سيارة", correct: false, explanation: "لا — لم تُذكر إعارة سيارة Auto leihen؛ والعرض «Wenn Sie Hilfe brauchen, klopfen Sie einfach»." },
        { text: "Hilfe: Man soll einfach klopfen.", ar: "مساعدة: يكفي أن تطرق بابه.", correct: true, explanation: "نعم — «Wenn Sie Hilfe brauchen, klopfen Sie einfach»." },
        { text: "Ein Abendessen am Wochenende", ar: "عشاء", correct: false, explanation: "لا — لم تُذكر دعوة عشاء Abendessen؛ والمساعدة مشروطة بالطرق («klopfen Sie einfach»)." },
      ]},
    ],
    keyVocab: [
      { de: "einziehen", ar: "ينتقل (يسكن)" },
      { de: "Willkommen!", ar: "مرحباً بك!" },
      { de: "klopfen", ar: "يطرق الباب" },
      { de: "einfach", ar: "ببساطة" },
      { de: "Hilfe brauchen", ar: "يحتاج مساعدة" },
    ],
  },
  {
    id: "a2-15-geschenk",
    level: "A2",
    title: "شراء هدية",
    titleDe: "Ein Geschenk kaufen",
    emoji: "🎁",
    situation: "تشتري هدية لصديق",
    turns: [
      { speaker: "البائعة", role: "a", de: "Kann ich Ihnen helfen?", ar: "هل أستطيع مساعدتك؟" },
      { speaker: "أنت", role: "b", de: "Ich suche ein Geschenk für einen Freund.", ar: "أبحث عن هدية لصديق." },
      { speaker: "البائعة", role: "a", de: "Was mag Ihr Freund?", ar: "ماذا يحب صديقك؟" },
      { speaker: "أنت", role: "b", de: "Er mag Musik und Bücher.", ar: "يحب الموسيقى والكتب." },
      { speaker: "البائعة", role: "a", de: "Wir haben schöne Bücher hier. Wie wäre es mit diesem?", ar: "عندنا كتب جميلة هنا. ماذا عن هذا؟" },
      { speaker: "أنت", role: "b", de: "Das ist perfekt! Ich nehme es. Können Sie es einpacken?", ar: "هذا مثالي! سآخذه. هل تستطيعين تغليفه؟" },
    ],
    questions: [
      { de: "Was sucht die Person?", ar: "ماذا يبحث الشخص؟", options: [
        { text: "Ein Geschenk für einen Freund", ar: "هدية لصديق", correct: true, explanation: "نعم — الغرض من الزيارة." },
        { text: "Ein Buch für sich selbst", ar: "كتاباً لنفسه", correct: false, explanation: "لا — الكتاب ليس لنفسه؛ بل «Ich suche ein Geschenk für einen Freund»." },
        { text: "Musik für sich zu Hause", ar: "موسيقى لنفسه", correct: false, explanation: "لا — الموسيقى ذوقُ الصديق لا طلبُ الزبون؛ والغرض «ein Geschenk für einen Freund»." },
      ]},
      { de: "Was mag der Freund?", ar: "ماذا يحب الصديق؟", options: [
        { text: "Musik und Bücher", ar: "الموسيقى والكتب", correct: true, explanation: "صحيح — الهوايتان." },
        { text: "Sport und Fußball", ar: "الرياضة وكرة القدم", correct: false, explanation: "لا — لم تُذكر رياضة Sport ولا كرة قدم؛ وذوق الصديق «Er mag Musik und Bücher»." },
        { text: "Kochen und Essen", ar: "الطبخ والأكل", correct: false, explanation: "لا — لم يُذكر طبخ Kochen؛ والصديق يحب Musik und Bücher («Er mag Musik und Bücher»)." },
      ]},
      { de: "Was macht die Person am Ende?", ar: "ماذا يفعل الشخص في النهاية؟", options: [
        { text: "Das Geschenk zurückgeben", ar: "يعيد الهدية", correct: false, explanation: "لا — لم يُرجع شيئاً؛ بل اشترى وطلب التغليف: «Ich nehme es. Können Sie es einpacken?»." },
        { text: "Das Buch einpacken lassen", ar: "يطلب تغليف الكتاب", correct: true, explanation: "نعم — «Können Sie es einpacken?»." },
        { text: "Ein anderes Geschenk suchen", ar: "يبحث عن هدية أخرى", correct: false, explanation: "لا — لم يبحث عن بديل؛ بل حسم أمره: «Das ist perfekt! Ich nehme es»." },
      ]},
    ],
    keyVocab: [
      { de: "das Geschenk", ar: "الهدية" },
      { de: "einpacken", ar: "يغلف" },
      { de: "Wie wäre es mit …?", ar: "ماذا عن …؟" },
      { de: "Das ist perfekt", ar: "هذا مثالي" },
      { de: "mögen", ar: "يحب" },
    ],
  },
];
