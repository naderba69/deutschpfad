/**
 * a1 — الحوارات الخمسة الأولى — التحية والتعارف · في المقهى · في السوبرماركت · حديث عن العائلة · السؤال عن الوقت
 * فُصل من a1.ts في الدفعة 112 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../a1.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const A1_DIALOGUES_1: DailyDialogue[] = [
  {
    id: "a1-01-begruessung",
    level: "A1",
    title: "التحية والتعارف",
    titleDe: "Begrüßung und Kennenlernen",
    emoji: "👋",
    situation: "تلتقي بشخص ألماني لأول مرة في حفلة",
    turns: [
      { speaker: "توماس", role: "a", de: "Hallo! Ich heiße Thomas. Und du?", ar: "مرحباً! اسمي توماس. وأنت؟" },
      { speaker: "سارة", role: "b", de: "Hallo Thomas! Ich heiße Sara. Freut mich!", ar: "مرحباً توماس! اسمي سارة. سعيدة بلقائك!" },
      { speaker: "توماس", role: "a", de: "Freut mich auch! Woher kommst du, Sara?", ar: "وأنا أيضاً! من أين أنت يا سارة؟" },
      { speaker: "سارة", role: "b", de: "Ich komme aus Tunesien. Und du?", ar: "أنا من تونس. وأنت؟" },
      { speaker: "توماس", role: "a", de: "Ich komme aus Deutschland, aus Berlin.", ar: "أنا من ألمانيا، من برلين." },
      { speaker: "سارة", role: "b", de: "Sehr schön! Auf Wiedersehen, Thomas!", ar: "جميل جداً! إلى اللقاء توماس!" },
    ],
    questions: [
      { de: "Wie heißt der Mann?", ar: "ما اسم الرجل؟", options: [
        { text: "Thomas", ar: "توماس", correct: true, explanation: "نعم — «Ich heiße Thomas»." },
        { text: "Sara", ar: "سارة", correct: false, explanation: "لا — «Sara» اسم الفتاة في الحوار: «Ich heiße Sara»." },
        { text: "Berlin", ar: "برلين", correct: false, explanation: "لا — «Berlin» مدينة لا اسم شخص: «Ich komme aus Deutschland, aus Berlin»." },
      ]},
      { de: "Woher kommt Sara?", ar: "من أين سارة؟", options: [
        { text: "Aus Tunesien", ar: "من تونس", correct: true, explanation: "صحيح — «Ich komme aus Tunesien»." },
        { text: "Aus Berlin", ar: "من برلين", correct: false, explanation: "لا — برلين مدينة توماس: «Ich komme aus Deutschland, aus Berlin»." },
        { text: "Aus Frankreich", ar: "من فرنسا", correct: false, explanation: "لا — لم تُذكر فرنسا Frankreich؛ وسارة قالت «Ich komme aus Tunesien»." },
      ]},
      { de: "Wer sagt „Freut mich auch“?", ar: "من يقول «وأنا أيضاً»؟", options: [
        { text: "Thomas", ar: "توماس", correct: true, explanation: "نعم — توماس يرد بالمجاملة." },
        { text: "Sara", ar: "سارة", correct: false, explanation: "لا — سارة قالت «Freut mich!» أولاً، وردّ توماس بـ«Freut mich auch»." },
        { text: "Der Kellner", ar: "النادل", correct: false, explanation: "لا نادل Der Kellner في هذا الحوار؛ والمتحدثان توماس وسارة." },
      ]},
      { de: "Woher kommt Thomas?", ar: "من أين توماس؟", options: [
        { text: "Aus Tunesien", ar: "من تونس", correct: false, explanation: "لا — تونس بلد سارة: «Ich komme aus Tunesien»." },
        { text: "Aus Berlin", ar: "من برلين", correct: true, explanation: "نعم — «Ich komme aus Deutschland, aus Berlin»." },
        { text: "Aus Wien", ar: "من فيينا", correct: false, explanation: "لا — لم تُذكر فيينا Wien؛ وتوماس قال «aus Berlin»." },
      ]},
    ],
    keyVocab: [
      { de: "ich heiße", ar: "اسمي" },
      { de: "Woher kommst du?", ar: "من أين أنت؟" },
      { de: "ich komme aus", ar: "أنا من" },
      { de: "Freut mich", ar: "سعيد بلقائك" },
      { de: "Auf Wiedersehen", ar: "إلى اللقاء" },
    ],
  },
  {
    id: "a1-02-cafe",
    level: "A1",
    title: "في المقهى",
    titleDe: "Im Café",
    emoji: "☕",
    situation: "تدخل مقهى وتطلب مشروباً وحلوى",
    turns: [
      { speaker: "النادل", role: "a", de: "Guten Tag! Was möchten Sie?", ar: "طاب يومك! ماذا تريد؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte einen Kaffee, bitte.", ar: "أريد قهوة من فضلك." },
      { speaker: "النادل", role: "a", de: "Mit Milch oder schwarz?", ar: "مع الحليب أم سوداء؟" },
      { speaker: "أنت", role: "b", de: "Mit Milch, bitte. Und ein Stück Kuchen.", ar: "مع الحليب من فضلك. وقطعة كعك." },
      { speaker: "النادل", role: "a", de: "Gerne. Das macht zusammen 5 Euro.", ar: "بكل سرور. المجموع 5 يورو." },
      { speaker: "أنت", role: "b", de: "Hier bitte. Danke schön!", ar: "تفضل. شكراً جزيلاً!" },
    ],
    questions: [
      { de: "Was bestellt der Gast zuerst?", ar: "ماذا يطلب الزبون أولاً؟", options: [
        { text: "Einen Kaffee", ar: "قهوة", correct: true, explanation: "نعم — «Ich möchte einen Kaffee»." },
        { text: "Einen Tee", ar: "شاياً", correct: false, explanation: "لا — لم يُطلب شاي Einen Tee؛ وأول الطلب «Ich möchte einen Kaffee, bitte»." },
        { text: "Einen Saft", ar: "عصيراً", correct: false, explanation: "لا — لم يُذكر عصير Einen Saft في الحوار." },
      ]},
      { de: "Wie viel kostet alles?", ar: "كم يكلف كل شيء؟", options: [
        { text: "5 Euro", ar: "5 يورو", correct: true, explanation: "صحيح — «Das macht zusammen 5 Euro»." },
        { text: "10 Euro", ar: "10 يورو", correct: false, explanation: "لا — المبلغ المنطوق «Das macht zusammen 5 Euro»." },
        { text: "3 Euro", ar: "3 يورو", correct: false, explanation: "لا — الحساب «5 Euro» لا ثلاثة." },
      ]},
      { de: "Was sagt der Gast am Ende?", ar: "ماذا يقول الزبون في النهاية؟", options: [
        { text: "Danke schön", ar: "شكراً جزيلاً", correct: true, explanation: "نعم — «Danke schön» شكر جميل." },
        { text: "Guten Morgen", ar: "صباح الخير", correct: false, explanation: "لا — Guten Morgen تحية صباحية؛ وخاتمة الزبون «Danke schön!»." },
        { text: "Auf Wiedersehen", ar: "إلى اللقاء", correct: false, explanation: "لا — لم يقل Auf Wiedersehen؛ بل شكر: «Danke schön!»." },
      ]},
      { de: "Was isst der Gast?", ar: "ماذا يأكل الزبون؟", options: [
        { text: "Eine Pizza Margherita", ar: "بيتزا", correct: false, explanation: "لا — لم تُطلب بيتزا Eine Pizza Margherita؛ بل «ein Stück Kuchen»." },
        { text: "Ein Brötchen mit Käse", ar: "لفافة خبز", correct: false, explanation: "لا — لم يُذكر لفّاف خبز Ein Brötchen؛ والمأكول «ein Stück Kuchen»." },
        { text: "Ein Stück Apfelkuchen", ar: "قطعة كعك", correct: true, explanation: "نعم — «ein Stück Kuchen»." },
      ]},
    ],
    keyVocab: [
      { de: "Ich möchte … bitte", ar: "أريد … من فضلك" },
      { de: "Mit Milch oder schwarz?", ar: "مع الحليب أم سوداء؟" },
      { de: "ein Stück Kuchen", ar: "قطعة كعك" },
      { de: "Das macht zusammen …", ar: "المجموع …" },
      { de: "Danke schön", ar: "شكراً جزيلاً" },
    ],
  },
  {
    id: "a1-03-supermarkt",
    level: "A1",
    title: "في السوبرماركت",
    titleDe: "Im Supermarkt",
    emoji: "🛒",
    situation: "تشتري الطعام وتسأل عن الأسعار",
    audioNoteAr: "ملفات MP3 المرتبطة بهذا الحوار موجودة، لكن مصدرها غير موثّق في بيانات المشروع؛ لذلك لا أوصفها بأنها تسجيل بشري أو صوت مولّد، ولم تُتحقق مطابقتها للنص. فُحصت تقنياً فقط.",
    turns: [
      { speaker: "البائعة", role: "a", de: "Kann ich Ihnen helfen?", ar: "هل أستطيع مساعدتك؟" },
      { speaker: "أنت", role: "b", de: "Ja, bitte. Was kostet das Brot?", ar: "نعم من فضلك. كم يكلف الخبز؟" },
      { speaker: "البائعة", role: "a", de: "Das Brot kostet 2 Euro.", ar: "الخبز يكلف 2 يورو." },
      { speaker: "أنت", role: "b", de: "Und die Milch?", ar: "والحليب؟" },
      { speaker: "البائعة", role: "a", de: "Die Milch kostet 1,50 Euro.", ar: "الحليب يكلف 1,50 يورو." },
      { speaker: "أنت", role: "b", de: "Ich nehme das Brot und die Milch. Danke!", ar: "سآخذ الخبز والحليب. شكراً!" },
    ],
    questions: [
      { de: "Was kostet das Brot?", ar: "كم يكلف الخبز؟", options: [
        { text: "2 Euro", ar: "2 يورو", correct: true, explanation: "نعم — «Das Brot kostet 2 Euro»." },
        { text: "1,50 Euro", ar: "1,50 يورو", correct: false, explanation: "لا — هذا سعر الحليب: «Die Milch kostet 1,50 Euro»." },
        { text: "5 Euro", ar: "5 يورو", correct: false, explanation: "لا — الخبز «Das Brot kostet 2 Euro»." },
      ]},
      { de: "Was kostet die Milch?", ar: "كم ثمن الحليب؟", options: [
        { text: "1,50 Euro", ar: "1,50 يورو", correct: true, explanation: "نعم — تقول البائعة: «Die Milch kostet 1,50 Euro»." },
        { text: "2,00 Euro", ar: "2,00 يورو", correct: false, explanation: "لا — هذا ليس السعر المذكور؛ تقول البائعة: «Die Milch kostet 1,50 Euro»." },
        { text: "5,00 Euro", ar: "5,00 يورو", correct: false, explanation: "لا — هذا المبلغ غير وارد؛ تقول البائعة: «Die Milch kostet 1,50 Euro»." },
      ]},
      { de: "Was nimmt der Kunde?", ar: "ماذا يأخذ الزبون؟", options: [
        { text: "Das Brot und die Milch", ar: "الخبز والحليب", correct: true, explanation: "نعم — «Ich nehme das Brot und die Milch»." },
        { text: "Nur die frische Milch", ar: "الحليب فقط", correct: false, explanation: "لا — أخذ الخبز أيضاً: «Ich nehme das Brot und die Milch»." },
        { text: "Ein Kilo rote Äpfel", ar: "كيلوغراماً من التفاح", correct: false, explanation: "لا — لم يُذكر تفاح Äpfel في هذا الحوار." },
      ]},
    ],
    keyVocab: [
      { de: "Kann ich Ihnen helfen?", ar: "هل أستطيع مساعدتك؟" },
      { de: "Was kostet …?", ar: "كم يكلف …؟" },
      { de: "Ich nehme …", ar: "سآخذ …" },
      { de: "das Brot", ar: "الخبز" },
      { de: "die Milch", ar: "الحليب" },
    ],
  },
  {
    id: "a1-04-familie",
    level: "A1",
    title: "حديث عن العائلة",
    titleDe: "Über die Familie sprechen",
    emoji: "👨‍👩‍👧‍👦",
    situation: "تسأل صديقاً جديداً عن عائلته",
    turns: [
      { speaker: "أنت", role: "a", de: "Hast du Geschwister?", ar: "هل لديك إخوة؟" },
      { speaker: "باول", role: "b", de: "Ja, ich habe einen Bruder und eine Schwester.", ar: "نعم، عندي أخ وأخت." },
      { speaker: "أنت", role: "a", de: "Und deine Eltern?", ar: "ووالداك؟" },
      { speaker: "باول", role: "b", de: "Mein Vater ist Lehrer. Meine Mutter ist Ärztin.", ar: "أبي معلم. أمي طبيبة." },
      { speaker: "أنت", role: "a", de: "Das ist interessant! Meine Mutter ist auch Ärztin.", ar: "هذا مثير! أمي طبيبة أيضاً." },
      { speaker: "باول", role: "b", de: "Wirklich? Wie schön!", ar: "حقاً؟ كم جميل!" },
    ],
    questions: [
      { de: "Wie viele Geschwister hat Paul?", ar: "كم أخاً لدى باول؟", options: [
        { text: "Einen Bruder und eine Schwester", ar: "أخاً وأختاً", correct: true, explanation: "نعم — «einen Bruder und eine Schwester»." },
        { text: "Nur einen älteren Bruder", ar: "أخوين", correct: false, explanation: "لا — الأخ الأكبر älter لم يُذكر؛ بل «einen Bruder und eine Schwester»." },
        { text: "Zwei Schwestern, keinen Bruder", ar: "لا أحد", correct: false, explanation: "لا — له أخٌ صراحةً: «ich habe einen Bruder und eine Schwester»." },
      ]},
      { de: "Was ist Pauls Mutter von Beruf?", ar: "ما مهنة أم باول؟", options: [
        { text: "Ärztin", ar: "طبيبة", correct: true, explanation: "صحيح — «Meine Mutter ist Ärztin»." },
        { text: "Lehrerin", ar: "معلمة", correct: false, explanation: "لا — التعليم مهنة الأب: «Mein Vater ist Lehrer»." },
        { text: "Köchin", ar: "لا، طباخة", correct: false, explanation: "لا — لم تُذكر طباخة Köchin؛ والأمّ «Meine Mutter ist Ärztin»." },
      ]},
      { de: "Wie viele Brüder hat Paul?", ar: "كم أخاً لبول؟", options: [
        { text: "Keinen Bruder", ar: "لا أخ", correct: false, explanation: "لا — قال إن له أخاً: «ich habe einen Bruder»." },
        { text: "Einen Bruder", ar: "أخ واحد", correct: true, explanation: "نعم — «einen Bruder und eine Schwester»." },
        { text: "Nur einen älteren Bruder", ar: "أخوان", correct: false, explanation: "لا — ذُكر أخٌ واحد بلا وصف älter؛ والصيغة «einen Bruder und eine Schwester»." },
      ]},
    ],
    keyVocab: [
      { de: "die Geschwister", ar: "الإخوة" },
      { de: "der Vater / die Mutter", ar: "الأب / الأم" },
      { de: "von Beruf", ar: "من حيث المهنة" },
      { de: "der Lehrer / die Ärztin", ar: "المعلم / الطبيبة" },
      { de: "Wie schön!", ar: "كم جميل!" },
    ],
  },
  {
    id: "a1-05-uhrzeit",
    level: "A1",
    title: "السؤال عن الوقت",
    titleDe: "Nach der Uhrzeit fragen",
    emoji: "🕐",
    situation: "تسأل أحد المارة عن الوقت",
    audioNoteAr: "الجولات ملفات MP3 مرفقة، لكن مصدر الصوت غير موثّق في بيانات هذا الحوار؛ لذلك لا نصفه كتسجيل بشري أو مولّد.",
    turns: [
      { speaker: "أنت", role: "a", de: "Entschuldigung, wie spät ist es?", ar: "عذراً، كم الساعة؟" },
      { speaker: "المرأة", role: "b", de: "Es ist halb drei.", ar: "إنها الثانية والنصف." },
      { speaker: "أنت", role: "a", de: "Danke schön! Und wann fährt der Bus?", ar: "شكراً! ومتى ينطلق الحافلة؟" },
      { speaker: "المرأة", role: "b", de: "Der Bus fährt um drei Uhr.", ar: "الحافلة تنطلق في الثالثة." },
      { speaker: "أنت", role: "a", de: "Perfekt, ich habe noch Zeit. Danke!", ar: "ممتاز، ما زال عندي وقت. شكراً!" },
      { speaker: "المرأة", role: "b", de: "Gern geschehen!", ar: "على الرحب والسعة!" },
    ],
    questions: [
      { de: "Wie spät ist es?", ar: "كم الساعة؟", options: [
        { text: "Halb drei", ar: "الثانية والنصف", correct: true, explanation: "نعم — «Es ist halb drei»." },
        { text: "Drei Uhr", ar: "الثالثة", correct: false, explanation: "لا — الثالثة موعد الحافلة: «Der Bus fährt um drei Uhr»." },
        { text: "Zwei Uhr", ar: "الثانية", correct: false, explanation: "لا — الساعة «Es ist halb drei» أي 2:30 لا 2:00." },
      ]},
      { de: "Wann fährt der Bus?", ar: "متى تنطلق الحافلة؟", options: [
        { text: "Um drei Uhr", ar: "في الثالثة", correct: true, explanation: "صحيح — «um drei Uhr»." },
        { text: "Um zwei Uhr", ar: "في الثانية", correct: false, explanation: "لا — الانطلاق «Der Bus fährt um drei Uhr» لا في الثانية." },
        { text: "Um vier Uhr", ar: "في الرابعة", correct: false, explanation: "لا — لم تُذكر الرابعة vier Uhr؛ والحافلة «fährt um drei Uhr»." },
      ]},
      { de: "Was sagt die Person, als sie noch Zeit hat?", ar: "ماذا يقول الشخص عندما يكون لديه وقت؟", options: [
        { text: "Ich habe keine Zeit.", ar: "ليس لدي وقت.", correct: false, explanation: "لا — قال العكس: «Perfekt, ich habe noch Zeit»." },
        { text: "Perfekt, ich habe noch Zeit.", ar: "ممتاز، ما زال لدي وقت.", correct: true, explanation: "نعم — هذه جملته." },
        { text: "Es ist schon drei Uhr.", ar: "الساعة الثالثة بالفعل.", correct: false, explanation: "لا — لم يقل Es ist schon drei Uhr؛ والساعة كانت «halb drei»." },
      ]},
    ],
    keyVocab: [
      { de: "Entschuldigung", ar: "عذراً" },
      { de: "Wie spät ist es?", ar: "كم الساعة؟" },
      { de: "halb drei", ar: "الثانية والنصف" },
      { de: "der Bus fährt um …", ar: "الحافلة تنطلق في …" },
      { de: "Gern geschehen", ar: "على الرحب والسعة" },
    ],
  },
];
