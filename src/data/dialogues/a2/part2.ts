/**
 * a2 — الحوارات الخمسة الثانية — في مكتب البريد · في البنك · مشكلة في الهاتف · في الحافلة · استفسار عن وظيفة
 * فُصل من a2.ts في الدفعة 113 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../a2.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const A2_DIALOGUES_2: DailyDialogue[] = [
  {
    id: "a2-06-post",
    level: "A2",
    title: "في مكتب البريد",
    titleDe: "Auf der Post",
    emoji: "📦",
    situation: "محاكاة تدريبية لإرسال طرد إلى تونس؛ السعر المذكور افتراضي وليس تعرفة فعلية.",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich möchte ein Paket nach Tunesien schicken.", ar: "طاب يومك! أريد إرسال طرد إلى تونس." },
      { speaker: "الموظفة", role: "b", de: "Gut. Was ist im Paket?", ar: "جيد. ماذا يوجد في الطرد؟" },
      { speaker: "أنت", role: "a", de: "Kleidung und ein Buch.", ar: "ملابس وكتاب." },
      { speaker: "الموظفة", role: "b", de: "Wie schwer ist es?", ar: "كم وزنه؟" },
      { speaker: "أنت", role: "a", de: "Zwei Kilo, glaube ich.", ar: "كيلوان، أعتقد." },
      { speaker: "الموظفة", role: "b", de: "Im Übungsbeispiel kostet der Versand 20 Euro. Bitte füllen Sie das Formular aus.", ar: "في المثال التدريبي، تكلف عملية الإرسال 20 يورو. من فضلك املأ الاستمارة." },
    ],
    questions: [
      { de: "Was schickt die Person?", ar: "ماذا ترسل الشخص؟", options: [
        { text: "Ein Paket nach Tunesien", ar: "طرداً إلى تونس", correct: true, explanation: "نعم — الوجهة والغرض." },
        { text: "Einen Brief nach Berlin", ar: "رسالة إلى برلين", correct: false, explanation: "لا — لم تُرسل رسالة Brief ولا إلى برلين؛ بل «ein Paket nach Tunesien schicken»." },
        { text: "Ein Paket nach Frankreich", ar: "طرداً إلى فرنسا", correct: false, explanation: "لا — الوجهة تونس لا فرنسا Frankreich: «ein Paket nach Tunesien schicken»." },
      ]},
      { de: "Wie viel kostet das Paket?", ar: "كم يكلف الطرد؟", options: [
        { text: "20 Euro", ar: "20 يورو", correct: true, explanation: "صحيح — السعر المذكور في هذا المثال التدريبي هو 20 يورو، وليس تعرفة فعلية." },
        { text: "10 Euro", ar: "10 يورو", correct: false, explanation: "لا — السعر الافتراضي في المثال «20 Euro»." },
        { text: "30 Euro", ar: "30 يورو", correct: false, explanation: "لا — السعر الافتراضي المذكور «20 Euro»." },
      ]},
      { de: "Was ist im Paket?", ar: "ماذا في الطرد؟", options: [
        { text: "Essen und Wasser für die Reise", ar: "طعام وماء", correct: false, explanation: "لا — لم يُذكر طعام Essen ولا ماء؛ والمحتوى «Kleidung und ein Buch»." },
        { text: "Kleidung und ein Buch", ar: "ملابس وكتاب", correct: true, explanation: "نعم — «Kleidung und ein Buch»." },
        { text: "Elektronik und Zubehör", ar: "أجهزة إلكترونية", correct: false, explanation: "لا — لم تُذكر إلكترونيات Elektronik؛ وفي الطرد Kleidung und ein Buch." },
      ]},
    ],
    keyVocab: [
      { de: "das Paket schicken", ar: "إرسال الطرد" },
      { de: "das Formular ausfüllen", ar: "ملء الاستمارة" },
      { de: "Wie schwer ist es?", ar: "كم وزنه؟" },
      { de: "die Kleidung", ar: "الملابس" },
      { de: "glaube ich", ar: "أعتقد" },
    ],
  },
  {
    id: "a2-07-bank",
    level: "A2",
    title: "في البنك",
    titleDe: "In der Bank",
    emoji: "🏦",
    situation: "محاكاة افتراضية لفتح حساب؛ جواز السفر وعرض بطاقة الائتمان جزء من هذا الحوار، لا قائمة متطلبات مصرفية عامة. تختلف إجراءات البنك بحسب نوع الحساب والحالة.",
    turns: [
      { speaker: "الموظفة", role: "a", de: "Guten Tag! Was kann ich für Sie tun?", ar: "طاب يومك! ماذا أفعل لك؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte ein Konto eröffnen.", ar: "أريد فتح حساب." },
      { speaker: "الموظفة", role: "a", de: "Gerne. Haben Sie Ihren Pass dabei?", ar: "بكل سرور. هل معك جواز السفر؟" },
      { speaker: "أنت", role: "b", de: "Ja, hier ist mein Pass.", ar: "نعم، هذا جواز سفري." },
      { speaker: "الموظفة", role: "a", de: "Danke. Möchten Sie auch eine Kreditkarte?", ar: "شكراً. هل تريد بطاقة ائتمان أيضاً؟" },
      { speaker: "أنت", role: "b", de: "Ja, das wäre gut. Danke schön!", ar: "نعم، هذا سيكون جيداً. شكراً جزيلاً!" },
    ],
    questions: [
      { de: "Was möchte die Person in der Bank?", ar: "ماذا تريد الشخص في البنك؟", options: [
        { text: "Ein Konto eröffnen", ar: "فتح حساب", correct: true, explanation: "نعم — «ein Konto eröffnen»." },
        { text: "Geld in Euro wechseln", ar: "صرف عملة", correct: false, explanation: "لا — لم يُطلب صرف عملة wechseln؛ والغرض «ein Konto eröffnen»." },
        { text: "Ein Darlehen aufnehmen", ar: "قرضاً", correct: false, explanation: "لا — لم يُذكر قرض Darlehen؛ والطلب «Ich möchte ein Konto eröffnen»." },
      ]},
      { de: "Wonach fragt die Mitarbeiterin?", ar: "عمّ سألت الموظفة؟", options: [
        { text: "Nach dem Pass", ar: "عن جواز السفر", correct: true, explanation: "صحيح — سألت: «Haben Sie Ihren Pass dabei?». وهذا سؤال في المحاكاة، لا تقرير بأن كل بنك يشترطه." },
        { text: "Nach dem Ticket", ar: "عن التذكرة", correct: false, explanation: "لا — لم تسأل عن تذكرة Ticket؛ بل قالت «Haben Sie Ihren Pass dabei?»." },
        { text: "Nach dem Schlüssel", ar: "عن المفتاح", correct: false, explanation: "لا — لم تسأل عن مفتاح Schlüssel؛ بل عن den Pass." },
      ]},
      { de: "Welche zusätzliche Karte möchte die Person?", ar: "ما البطاقة الإضافية التي يريدها الشخص؟", options: [
        { text: "Eine Versicherungskarte", ar: "بطاقة تأمين", correct: false, explanation: "لا — لم تُذكر بطاقة تأمين Versicherungskarte؛ والعرض «Möchten Sie auch eine Kreditkarte?»." },
        { text: "Eine Kreditkarte", ar: "بطاقة ائتمان", correct: true, explanation: "نعم — عُرضت «eine Kreditkarte» وقال الشخص: «Ja, das wäre gut». لم يحدد الحوار حداً ائتمانياً." },
        { text: "Eine Bibliothekskarte", ar: "بطاقة مكتبة", correct: false, explanation: "لا — لم تُذكر بطاقة مكتبة Bibliothekskarte؛ والبطاقة المطلوبة Kreditkarte." },
      ]},
    ],
    keyVocab: [
      { de: "das Konto eröffnen", ar: "فتح حساب" },
      { de: "der Pass", ar: "جواز السفر" },
      { de: "dabei haben", ar: "يحمل معه" },
      { de: "die Kreditkarte", ar: "بطاقة الائتمان" },
      { de: "Das wäre gut", ar: "سيكون جيداً" },
    ],
  },
  {
    id: "a2-08-handy",
    level: "A2",
    title: "مشكلة في الهاتف",
    titleDe: "Handy-Problem",
    emoji: "📱",
    situation: "تتصل بشركة الاتصالات لأن الهاتف لا يعمل",
    turns: [
      { speaker: "الموظف", role: "a", de: "Service-Center, guten Tag! Wie kann ich helfen?", ar: "مركز الخدمة، طاب يومك! كيف أساعد؟" },
      { speaker: "أنت", role: "b", de: "Mein Handy funktioniert nicht. Es hat kein Internet.", ar: "هاتفي لا يعمل. لا يوجد إنترنت." },
      { speaker: "الموظف", role: "a", de: "Haben Sie es neu gestartet?", ar: "هل أعدت تشغيله؟" },
      { speaker: "أنت", role: "b", de: "Ja, aber es hilft nicht.", ar: "نعم، لكن لا ينفع." },
      { speaker: "الموظف", role: "a", de: "Okay. Warten Sie einen Moment, ich prüfe Ihre Leitung.", ar: "حسناً. انتظر لحظة، أفحص خطك." },
      { speaker: "الموظف", role: "a", de: "Es gibt ein Problem in Ihrer Gegend. In zwei Stunden ist es wieder da.", ar: "يوجد مشكلة في منطقتك. بعد ساعتين سيعود." },
    ],
    questions: [
      { de: "Was ist das Problem?", ar: "ما المشكلة؟", options: [
        { text: "Das Handy hat kein Internet", ar: "الهاتف بلا إنترنت", correct: true, explanation: "نعم — المشكلة في الاتصال." },
        { text: "Das Handy ist ganz kaputt", ar: "الهاتف مكسور", correct: false, explanation: "لا — العطل ليس في الجهاز؛ والسبب «Es gibt ein Problem in Ihrer Gegend»." },
        { text: "Das Handy ist weg seit gestern", ar: "الهاتف ضاع", correct: false, explanation: "لا — لم يَضِع الهاتف؛ والمشكلة «Es hat kein Internet»." },
      ]},
      { de: "Was hat der Kunde schon versucht?", ar: "ماذا جرب الزبون بالفعل؟", options: [
        { text: "Das Handy neu zu starten", ar: "إعادة تشغيل الهاتف", correct: true, explanation: "صحيح — «Haben Sie es neu gestartet?»." },
        { text: "Das Handy zu kaufen", ar: "شراء هاتف", correct: false, explanation: "لا — لم يُذكر شراء هاتف kaufen؛ والمحاولة «Haben Sie es neu gestartet?»." },
        { text: "Den Vertrag zu kündigen", ar: "إلغاء العقد", correct: false, explanation: "لا — لم يُذكر عقد Vertrag ولا إلغاء؛ والمجرَّب هو Neustart («Haben Sie es neu gestartet?»)." },
      ]},
      { de: "Wann funktioniert das Internet wieder?", ar: "متى يعود الإنترنت للعمل؟", options: [
        { text: "Sofort nach dem Neustart", ar: "فوراً", correct: false, explanation: "لا — إعادة التشغيل لم تنفع: «Ja, aber es hilft nicht»؛ والعودة «In zwei Stunden ist es wieder da»." },
        { text: "In zwei Stunden", ar: "بعد ساعتين", correct: true, explanation: "نعم — «In zwei Stunden ist es wieder da»." },
        { text: "Morgen in der Früh", ar: "غداً", correct: false, explanation: "لا — لم يُذكر الغد morgen؛ والمدة «In zwei Stunden ist es wieder da»." },
      ]},
    ],
    keyVocab: [
      { de: "funktioniert nicht", ar: "لا يعمل" },
      { de: "neu starten", ar: "إعادة تشغيل" },
      { de: "die Leitung prüfen", ar: "فحص الخط" },
      { de: "in Ihrer Gegend", ar: "في منطقتك" },
      { de: "das Service-Center", ar: "مركز الخدمة" },
    ],
  },
  {
    id: "a2-09-bus",
    level: "A2",
    title: "في الحافلة",
    titleDe: "Im Bus",
    emoji: "🚌",
    situation: "تشتري تذكرة وتطلب التوقف",
    turns: [
      { speaker: "أنت", role: "a", de: "Ein Ticket, bitte. Wie viel kostet es?", ar: "تذكرة من فضلك. كم تكلف؟" },
      { speaker: "السائق", role: "b", de: "2,50 Euro. Wohin möchten Sie?", ar: "2,50 يورو. إلى أين تريد؟" },
      { speaker: "أنت", role: "a", de: "Zum Stadtzentrum, bitte.", ar: "إلى وسط المدينة من فضلك." },
      { speaker: "السائق", role: "b", de: "Okay, das sind 2,50 Euro.", ar: "حسناً، هذا 2,50 يورو." },
      { speaker: "أنت", role: "a", de: "Können Sie mir sagen, wann wir ankommen?", ar: "هل تستطيع إخباري متى نصل؟" },
      { speaker: "السائق", role: "b", de: "In zehn Minuten. Ich sage Bescheid.", ar: "بعد عشر دقائق. سأخبرك." },
    ],
    questions: [
      { de: "Wie viel kostet das Ticket?", ar: "كم تكلف التذكرة؟", options: [
        { text: "2,50 Euro", ar: "2,50 يورو", correct: true, explanation: "نعم — سعر التذكرة." },
        { text: "1,50 Euro", ar: "1,50 يورو", correct: false, explanation: "لا — السعر «2,50 Euro» («das sind 2,50 Euro»)." },
        { text: "3,50 Euro", ar: "3,50 يورو", correct: false, explanation: "لا — لم يُذكر 3,50؛ والتذكرة «2,50 Euro»." },
      ]},
      { de: "Wann kommen sie an?", ar: "متى يصلون؟", options: [
        { text: "In zehn Minuten", ar: "بعد عشر دقائق", correct: true, explanation: "صحيح — «In zehn Minuten»." },
        { text: "In fünf Minuten", ar: "بعد خمس دقائق", correct: false, explanation: "لا — الوصول «In zehn Minuten» لا بعد خمس." },
        { text: "In dreißig Minuten", ar: "بعد ثلاثين دقيقة", correct: false, explanation: "لا — لم تُذكر ثلاثون دقيقة؛ والسائق قال «In zehn Minuten»." },
      ]},
      { de: "Wohin fährt die Person?", ar: "إلى أين يذهب الشخص؟", options: [
        { text: "Zum Flughafen", ar: "إلى المطار", correct: false, explanation: "لا — لم يُذكر مطار Flughafen؛ والوجهة «Zum Stadtzentrum, bitte»." },
        { text: "Zum Stadtzentrum", ar: "إلى وسط المدينة", correct: true, explanation: "نعم — «Zum Stadtzentrum, bitte»." },
        { text: "Zum Bahnhof", ar: "إلى المحطة", correct: false, explanation: "لا — لم تُذكر محطة Bahnhof؛ والطلب «Zum Stadtzentrum, bitte»." },
      ]},
    ],
    keyVocab: [
      { de: "das Ticket", ar: "التذكرة" },
      { de: "Bescheid sagen", ar: "يخبر" },
      { de: "in zehn Minuten", ar: "بعد عشر دقائق" },
      { de: "ankommen", ar: "يصل" },
      { de: "zum Stadtzentrum", ar: "إلى وسط المدينة" },
    ],
  },
  {
    id: "a2-10-bewerbung",
    level: "A2",
    title: "استفسار عن وظيفة",
    titleDe: "Job-Anfrage",
    emoji: "💼",
    situation: "تتصل بشركة تسأل عن وظيفة معلنة",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich rufe wegen der Stelle als Verkäufer an.", ar: "طاب يومك! أتصل بخصوص وظيفة البائع." },
      { speaker: "السكرتيرة", role: "b", de: "Guten Tag! Haben Sie Erfahrung im Verkauf?", ar: "طاب يومك! هل لديك خبرة في البيع؟" },
      { speaker: "أنت", role: "a", de: "Ja, ich habe zwei Jahre Erfahrung.", ar: "نعم، عندي سنتان خبرة." },
      { speaker: "السكرتيرة", role: "b", de: "Sehr gut. Können Sie am Montag zum Gespräch kommen?", ar: "ممتاز. هل تستطيع الحضور للمقابلة يوم الاثنين؟" },
      { speaker: "أنت", role: "a", de: "Ja, gerne. Um wie viel Uhr?", ar: "نعم بكل سرور. في أي ساعة؟" },
      { speaker: "السكرتيرة", role: "b", de: "Um zehn Uhr. Bringen Sie Ihren Lebenslauf mit.", ar: "في العاشرة. أحضر سيرتك الذاتية." },
    ],
    questions: [
      { de: "Welche Stelle sucht die Person?", ar: "أي وظيفة تبحث عنها الشخص؟", options: [
        { text: "Verkäufer im Laden", ar: "بائع", correct: true, explanation: "نعم — «der Stelle als Verkäufer»." },
        { text: "Koch in der Kantine", ar: "طباخ", correct: false, explanation: "لا — لم يُذكر طباخ Koch؛ والوظيفة «der Stelle als Verkäufer»." },
        { text: "Lehrer an der Schule", ar: "معلم", correct: false, explanation: "لا — لم يُذكر معلم Lehrer ولا مدرسة؛ والاتصال بشأن Verkäufer." },
      ]},
      { de: "Wann ist das Gespräch?", ar: "متى المقابلة؟", options: [
        { text: "Am Montag um zehn", ar: "الاثنين في العاشرة", correct: true, explanation: "صحيح — الموعد المتفق عليه." },
        { text: "Am Dienstag um zehn", ar: "الثلاثاء في العاشرة", correct: false, explanation: "لا — اليوم الاثنين لا الثلاثاء: «Können Sie am Montag zum Gespräch kommen?»." },
        { text: "Am Montag um acht", ar: "الاثنين في الثامنة", correct: false, explanation: "لا — الساعة العاشرة لا الثامنة: «Um zehn Uhr»." },
      ]},
      { de: "Was soll die Person mitbringen?", ar: "ماذا يجب أن يحضر الشخص؟", options: [
        { text: "Einen Regenschirm", ar: "مظلة", correct: false, explanation: "لا — لم تُذكر مظلة Regenschirm؛ والمطلوب «Bringen Sie Ihren Lebenslauf mit»." },
        { text: "Einen Lebenslauf", ar: "سيرة ذاتية", correct: true, explanation: "نعم — «Bringen Sie Ihren Lebenslauf mit»." },
        { text: "Einen Kassenzettel", ar: "إيصال الشراء", correct: false, explanation: "لا — لم يُطلب إيصال Kassenzettel؛ والسكرتيرة قالت «Bringen Sie Ihren Lebenslauf mit»." },
      ]},
    ],
    keyVocab: [
      { de: "die Stelle", ar: "الوظيفة" },
      { de: "die Erfahrung", ar: "الخبرة" },
      { de: "das Gespräch", ar: "المقابلة" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية" },
      { de: "anrufen wegen", ar: "الاتصال بخصوص" },
    ],
  },
];
