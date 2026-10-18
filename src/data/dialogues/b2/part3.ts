/**
 * b2 — الحوارات الخمسة الأخيرة — التفاوض مع عميل · استشارة طبيب متخصص · مشكلة في المطار · نقاش عن الإعلام · تنظيم نقل الشركة
 * فُصل من b2.ts في الدفعة 115 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../b2.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const B2_DIALOGUES_3: DailyDialogue[] = [
  {
    id: "b2-11-verhandlung-kunde",
    level: "B2",
    title: "التفاوض مع عميل",
    titleDe: "Kundenverhandlung",
    emoji: "🤝",
    situation: "تتفاوض مع عميل حول شروط العقد",
    turns: [
      { speaker: "العميل", role: "a", de: "Wir sind mit dem Preis nicht zufrieden. Er ist zu hoch im Vergleich zum Markt.", ar: "لسنا راضين عن السعر. مرتفع مقارنة بالسوق." },
      { speaker: "أنت", role: "b", de: "Ich verstehe Ihre Bedenken. Der Preis spiegelt aber die Qualität und den Service wider.", ar: "أفهم مخاوفك. لكن السعر يعكس الجودة والخدمة." },
      { speaker: "العميل", role: "a", de: "Wir wären bereit, wenn Sie zehn Prozent nachlassen.", ar: "سنكون مستعدين إذا خفضت عشرة بالمئة." },
      { speaker: "أنت", role: "b", de: "Zehn Prozent sind nicht möglich. Wir könnten fünf Prozent anbieten, wenn Sie längerfristig bestellen.", ar: "عشرة بالمئة غير ممكنة. نستطيع عرض خمسة إذا طلبت على المدى الطويل." },
      { speaker: "العميل", role: "a", de: "Das klingt interessant. Wie wäre die Mindestmenge?", ar: "يبدو مثيراً. ما الحد الأدنى للكمية؟" },
      { speaker: "أنت", role: "b", de: "Mindestens 500 Einheiten pro Monat.", ar: "500 وحدة شهرياً كحد أدنى." },
    ],
    questions: [
      { de: "Warum ist der Kunde unzufrieden?", ar: "لماذا العميل غير راضٍ؟", options: [
        { text: "Der Preis ist im Vergleich zum Markt zu hoch", ar: "السعر مرتفع مقارنة بالسوق", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Die Lieferung ist deutlich zu spät gekommen", ar: "التوصيل متأخر", correct: false, explanation: "لا — لم يُذكر توصيل Lieferung؛ والشكوى «Er ist zu hoch im Vergleich zum Markt»." },
        { text: "Die Qualität ist schlecht und unzureichend", ar: "الجودة سيئة", correct: false, explanation: "لا — الجودة لم تُنتقد بل دُوفع عنها: «Der Preis spiegelt aber die Qualität und den Service wider»." },
      ]},
      { de: "Welchen Rabatt verlangt der Kunde zuerst?", ar: "ما الخصم الذي يطلبه العميل أولاً؟", options: [
        { text: "Zehn Prozent", ar: "عشرة بالمئة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Zwanzig Prozent", ar: "عشرون بالمئة", correct: false, explanation: "لا — لم يُذكر عشرون؛ وطلب العميل «wenn Sie zehn Prozent nachlassen»." },
        { text: "Drei Prozent", ar: "ثلاثة بالمئة", correct: false, explanation: "لا — لم تُذكر ثلاثة Prozent؛ والمساومة على «zehn Prozent» ثم عرض «fünf Prozent»." },
      ]},
      { de: "Wie hoch ist die Mindestmenge pro Monat?", ar: "ما الحد الأدنى للكمية شهرياً؟", options: [
        { text: "500 Einheiten", ar: "500 وحدة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "100 Einheiten", ar: "100 وحدة", correct: false, explanation: "لا — ليست مئة وحدة؛ بل «Mindestens 500 Einheiten pro Monat»." },
        { text: "1000 Einheiten", ar: "1000 وحدة", correct: false, explanation: "لا — لم يُذكر ألف Einheiten؛ والحدّ الأدنى «500 Einheiten pro Monat»." },
      ]},
    ],
    keyVocab: [
      { de: "die Bedenken", ar: "المخاوف" },
      { de: "widerspiegeln", ar: "يعكس" },
      { de: "nachlassen", ar: "يخفض السعر" },
      { de: "die Mindestmenge", ar: "الحد الأدنى للكمية" },
      { de: "längerfristig", ar: "على المدى الطويل" },
    ],
  },
  {
    id: "b2-12-arzt-spezialist",
    level: "B2",
    title: "استشارة طبيب متخصص",
    titleDe: "Facharztbesuch",
    emoji: "🩻",
    situation: "تشرح أعراضاً معقدة لطبيب متخصص",
    turns: [
      { speaker: "الطبيب", role: "a", de: "Guten Tag! Was führt Sie zu mir?", ar: "طاب يومك! ما الذي أتى بك؟" },
      { speaker: "أنت", role: "b", de: "Ich habe seit Monaten wiederkehrende Rückenschmerzen und weiß nicht, woran es liegt.", ar: "عندي منذ أشهر آلام ظهر متكررة ولا أعرف السبب." },
      { speaker: "الطبيب", role: "a", de: "Wann treten die Schmerzen auf?", ar: "متى تظهر الآلام؟" },
      { speaker: "أنت", role: "b", de: "Besonders nach langem Sitzen am Schreibtisch.", ar: "خصوصاً بعد الجلوس الطويل على المكتب." },
      { speaker: "الطبيب", role: "a", de: "Das deutet auf eine Fehlhaltung hin. Machen Sie regelmäßig Pausen?", ar: "هذا يشير إلى وضعية خاطئة. هل تأخذ فترات راحة؟" },
      { speaker: "أنت", role: "b", de: "Ehrlich gesagt, nein. Ich arbeite oft stundenlang ohne Unterbrechung.", ar: "بصراحة لا. أعمل غالباً ساعات دون انقطاع." },
    ],
    questions: [
      { de: "Wie lange hat die Person schon Rückenschmerzen?", ar: "منذ متى يعاني الشخص من آلام الظهر؟", options: [
        { text: "Seit Monaten", ar: "منذ أشهر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Seit einer Woche", ar: "منذ أسبوع", correct: false, explanation: "لا — ليس أسبوعاً؛ بل «seit Monaten wiederkehrende Rückenschmerzen»." },
        { text: "Seit Jahren", ar: "منذ سنوات", correct: false, explanation: "لا — لم تُذكر سنوات Jahre؛ والمدة «seit Monaten»." },
      ]},
      { de: "Wann treten die Schmerzen besonders auf?", ar: "متى تظهر الآلام خصوصاً؟", options: [
        { text: "Nach langem Sitzen am Schreibtisch", ar: "بعد الجلوس الطويل على المكتب", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Beim Schwimmen im kalten Wasser", ar: "أثناء السباحة", correct: false, explanation: "لا — لم تُذكر سباحة Schwimmen؛ والظرف «Besonders nach langem Sitzen am Schreibtisch»." },
        { text: "Beim Schlafen in der Nacht", ar: "أثناء النوم", correct: false, explanation: "لا — لم يُذكر نوم Schlafen؛ والألم بعد langem Sitzen am Schreibtisch." },
      ]},
      { de: "Was macht die Person laut eigener Aussage nicht?", ar: "ماذا لا يفعل الشخص حسب قوله؟", options: [
        { text: "Regelmäßig Pausen machen", ar: "أخذ فترات راحة منتظمة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Viel Wasser trinken", ar: "شرب الكثير من الماء", correct: false, explanation: "لا — لم يُذكر شرب ماء Wasser trinken؛ والإقرار «Ich arbeite oft stundenlang ohne Unterbrechung»." },
        { text: "Früh ins Bett gehen", ar: "النوم مبكراً", correct: false, explanation: "لا — لم يُذكر نومٌ مبكر Bett؛ وسؤال الطبيب كان عن Pausen («Machen Sie regelmäßig Pausen?»)." },
      ]},
    ],
    keyVocab: [
      { de: "wiederkehrend", ar: "متكرر" },
      { de: "die Rückenschmerzen", ar: "آلام الظهر" },
      { de: "die Fehlhaltung", ar: "الوضعية الخاطئة" },
      { de: "deuten auf … hin", ar: "يشير إلى …" },
      { de: "die Unterbrechung", ar: "الانقطاع" },
    ],
  },
  {
    id: "b2-13-flug",
    level: "B2",
    title: "مشكلة في المطار",
    titleDe: "Am Flughafen",
    emoji: "✈️",
    situation: "أُلغي رحلتك وتطالب بالتعويض",
    turns: [
      { speaker: "أنت", role: "a", de: "Entschuldigung, mein Flug nach Tunis wurde gestrichen. Was kann ich tun?", ar: "عذراً، أُلغيت رحلتي إلى تونس. ماذا أفعل؟" },
      { speaker: "الموظف", role: "b", de: "Das tut mir leid. Wir können Sie auf einen späteren Flug umbuchen.", ar: "يؤسفني. نستطيع تحويلك لرحلة لاحقة." },
      { speaker: "أنت", role: "a", de: "Wann ist der nächste Flug? Ich habe morgen einen wichtigen Termin.", ar: "متى الرحلة التالية؟ لدي موعد مهم غداً." },
      { speaker: "الموظف", role: "b", de: "Morgen früh um sieben Uhr. Außerdem haben Sie Anspruch auf Entschädigung.", ar: "غداً صباحاً في السابعة. كما يحق لك تعويض." },
      { speaker: "أنت", role: "a", de: "Gut. Wo kann ich den Antrag stellen?", ar: "جيد. أين أقدم الطلب؟" },
      { speaker: "الموظف", role: "b", de: "Am Serviceschalter rechts. Bringen Sie Ihre Bordkarte mit.", ar: "عند مكتب الخدمة يميناً. أحضر بطاقة الصعود." },
    ],
    questions: [
      { de: "Was ist mit dem Flug passiert?", ar: "ماذا حدث لرحلتها؟", options: [
        { text: "Er wurde gestrichen", ar: "أُلغيت", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Er ist verspätet", ar: "تأخرت", correct: false, explanation: "لا — ليس تأخيراً verspätet؛ بل «mein Flug nach Tunis wurde gestrichen»." },
        { text: "Er ist nach Paris umgeleitet worden", ar: "حُوّلت إلى باريس", correct: false, explanation: "لا — لم تُذكر باريس Paris ولا تحويل؛ والرحلة gestrichen." },
      ]},
      { de: "Wann ist der nächste Flug?", ar: "متى الرحلة التالية؟", options: [
        { text: "Morgen früh um sieben Uhr", ar: "غداً صباحاً في السابعة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Heute Abend um zehn Uhr", ar: "مساء اليوم في العاشرة", correct: false, explanation: "لا — ليس مساء اليوم؛ بل «Morgen früh um sieben Uhr»." },
        { text: "In einer Woche", ar: "بعد أسبوع", correct: false, explanation: "لا — لم يُذكر أسبوع Woche؛ والرحلة التالية «Morgen früh um sieben Uhr»." },
      ]},
      { de: "Was muss die Person am Serviceschalter mitbringen?", ar: "ماذا يجب أن يحضر الشخص عند مكتب الخدمة؟", options: [
        { text: "Die Bordkarte fürs Gate", ar: "بطاقة الصعود", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Den Personalausweis allein", ar: "الهوية وحدها", correct: false, explanation: "لا — لم تُذكر هوية Personalausweis؛ والمطلوب «Bringen Sie Ihre Bordkarte mit»." },
        { text: "Einen Reiseführer", ar: "دليل سياحي", correct: false, explanation: "لا — لم يُذكر دليل سياحي Reiseführer؛ والمكان «Am Serviceschalter rechts» مع Bordkarte." },
      ]},
    ],
    keyVocab: [
      { de: "streichen (Flug)", ar: "يلغي (رحلة)" },
      { de: "umbuchen", ar: "يحول الحجز" },
      { de: "der Anspruch", ar: "الحق" },
      { de: "die Entschädigung", ar: "التعويض" },
      { de: "der Antrag stellen", ar: "تقديم الطلب" },
    ],
  },
  {
    id: "b2-14-medien",
    level: "B2",
    title: "نقاش عن الإعلام",
    titleDe: "Über Medien diskutieren",
    emoji: "📰",
    situation: "تناقش مع زملاء موثوقية الأخبار",
    turns: [
      { speaker: "الزميل", role: "a", de: "Vertraust du den Nachrichten im Fernsehen?", ar: "هل تثق بأخبار التلفاز؟" },
      { speaker: "أنت", role: "b", de: "Zum Teil. Ich versuche, mehrere Quellen zu vergleichen.", ar: "جزئياً. أحاول مقارنة عدة مصادر." },
      { speaker: "الزميل", role: "a", de: "Das ist klug. Viele verbreiten nur noch Falschinformationen.", ar: "هذا ذكي. كثيرون ينشرون معلومات مضللة فقط." },
      { speaker: "أنت", role: "b", de: "Genau. Deshalb ist Medienkompetenz heutzutage unerlässlich.", ar: "بالضبط. لذلك الثقافة الإعلامية لا غنى عنها اليوم." },
      { speaker: "الزميل", role: "a", de: "Was können wir konkret tun?", ar: "ماذا نستطيع أن نفعل عملياً؟" },
      { speaker: "أنت", role: "b", de: "Wir sollten Fakten prüfen, bevor wir etwas teilen.", ar: "يجب التحقق من الحقائق قبل مشاركة أي شيء." },
    ],
    questions: [
      { de: "Vertraut die Person den Fernsehnachrichten?", ar: "هل يثق الشخص بأخبار التلفاز؟", options: [
        { text: "Teilweise", ar: "جزئياً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Vollständig", ar: "تماماً", correct: false, explanation: "لا — ليست ثقة كاملة؛ بل «Zum Teil»." },
        { text: "Überhaupt nicht", ar: "إطلاقاً", correct: false, explanation: "لا — ليست انعدام ثقة؛ بل «Zum Teil» مع «Ich versuche, mehrere Quellen zu vergleichen»." },
      ]},
      { de: "Was macht die Person, um sich zu informieren?", ar: "ماذا يفعل الشخص ليطلع على الأخبار؟", options: [
        { text: "Sie vergleicht mehrere Quellen", ar: "تقارن عدة مصادر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Sie schaut nur einen Sender", ar: "تشاهد قناة واحدة فقط", correct: false, explanation: "لا — ليست قناة واحدة Sender؛ بل «mehrere Quellen zu vergleichen»." },
        { text: "Sie liest keine Nachrichten", ar: "لا تقرأ أي أخبار", correct: false, explanation: "لا — لم يُقل إنها لا تقرأ أخباراً Nachrichten؛ والطريقة مقارنة Quellen («mehrere Quellen zu vergleichen»)." },
      ]},
      { de: "Was sollte man laut Gespräch tun, bevor man etwas teilt?", ar: "ماذا يجب فعله قبل مشاركة أي شيء حسب الحوار؟", options: [
        { text: "Fakten genau prüfen", ar: "التحقق من الحقائق", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Die Quelle löschen", ar: "حذف المصدر", correct: false, explanation: "لا — لم يُذكر حذف Quelle löschen؛ والتوصية «Wir sollten Fakten prüfen, bevor wir etwas teilen»." },
        { text: "Schnell reagieren", ar: "الرد بسرعة", correct: false, explanation: "لا — السرعة ليست مطلوبة؛ بل التحقق قبل المشاركة («Fakten prüfen, bevor wir etwas teilen»)." },
      ]},
    ],
    keyVocab: [
      { de: "die Quelle", ar: "المصدر" },
      { de: "die Falschinformation", ar: "المعلومة المضللة" },
      { de: "die Medienkompetenz", ar: "الثقافة الإعلامية" },
      { de: "unerlässlich", ar: "لا غنى عنه" },
      { de: "die Fakten prüfen", ar: "التحقق من الحقائق" },
    ],
  },
  {
    id: "b2-15-umzug-firma",
    level: "B2",
    title: "تنظيم نقل الشركة",
    titleDe: "Firmenumzug organisieren",
    emoji: "🏢",
    situation: "تنظم نقل مكتب شركتك إلى مبنى جديد",
    turns: [
      { speaker: "الزميل", role: "a", de: "Der Umzug ist in zwei Wochen. Sind alle Vorbereitungen getroffen?", ar: "النقل بعد أسبوعين. هل كل الاستعدادات تمت؟" },
      { speaker: "أنت", role: "b", de: "Fast. Die IT-Abteilung ist noch nicht fertig mit den Servern.", ar: "تقريباً. قسم التقنية لم ينتهِ من الخوادم بعد." },
      { speaker: "الزميل", role: "a", de: "Das ist kritisch. Wir brauchen die Server am ersten Tag.", ar: "هذا حرج. نحتاج الخوادم في اليوم الأول." },
      { speaker: "أنت", role: "b", de: "Ich habe mit dem Anbieter gesprochen. Sie installieren am Wochenende.", ar: "تحدثت مع المزود. سيثبتونها في نهاية الأسبوع." },
      { speaker: "الزميل", role: "a", de: "Perfekt. Und die Umzugsfirma?", ar: "ممتاز. وشركة النقل؟" },
      { speaker: "أنت", role: "b", de: "Alles bestätigt. Sie kommen am Freitag um acht Uhr.", ar: "كل شيء مؤكد. سيأتون الجمعة في الثامنة." },
    ],
    questions: [
      { de: "Wann ist der Umzug?", ar: "متى النقل؟", options: [
        { text: "In zwei Wochen", ar: "بعد أسبوعين", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Morgen", ar: "غداً", correct: false, explanation: "لا — ليس غداً؛ بل «Der Umzug ist in zwei Wochen»." },
        { text: "In einem Monat", ar: "بعد شهر", correct: false, explanation: "لا — لم يُذكر شهر Monat؛ والمدة «in zwei Wochen»." },
      ]},
      { de: "Was ist noch nicht fertig?", ar: "ما الذي لم يُنجز بعد؟", options: [
        { text: "Die Server der IT-Abteilung", ar: "خوادم قسم تقنية المعلومات", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Die Möbel aus den Büros", ar: "الأثاث", correct: false, explanation: "لا — لم يُذكر أثاث Möbel؛ والمتعثّر «Die IT-Abteilung ist noch nicht fertig mit den Servern»." },
        { text: "Die Verpackung der Geräte", ar: "التغليف", correct: false, explanation: "لا — لم يُذكر تغليف Verpackung؛ والناقصة هي Server der IT-Abteilung." },
      ]},
      { de: "Wann kommt die Umzugsfirma?", ar: "متى تأتي شركة النقل؟", options: [
        { text: "Freitag um acht Uhr", ar: "الجمعة في الثامنة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Montag um neun Uhr", ar: "الاثنين في التاسعة", correct: false, explanation: "لا — ليس الاثنين Montag؛ بل «Sie kommen am Freitag um acht Uhr»." },
        { text: "Sonntag um zehn Uhr", ar: "الأحد في العاشرة", correct: false, explanation: "لا — لم يُذكر الأحد Sonntag؛ والموعد «am Freitag um acht Uhr»." },
      ]},
    ],
    keyVocab: [
      { de: "die Vorbereitungen treffen", ar: "اتخاذ الاستعدادات" },
      { de: "die Server", ar: "الخوادم" },
      { de: "der Anbieter", ar: "المزود" },
      { de: "installieren", ar: "يثبت" },
      { de: "bestätigen", ar: "يؤكد" },
    ],
  },
];
