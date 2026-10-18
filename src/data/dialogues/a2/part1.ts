/**
 * a2 — الحوارات الخمسة الأولى — زيارة الطبيب · في مطعم راقٍ · في القطار · البحث عن شقة · في مكتب السفر
 * فُصل من a2.ts في الدفعة 113 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../a2.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const A2_DIALOGUES_1: DailyDialogue[] = [
  {
    id: "a2-01-arzt",
    level: "A2",
    title: "زيارة الطبيب",
    titleDe: "Beim Arzt",
    emoji: "🩺",
    situation: "تزور الطبيب لأنك مريض",
    turns: [
      { speaker: "الطبيب", role: "a", de: "Guten Tag! Was fehlt Ihnen?", ar: "طاب يومك! ماذا تعاني؟" },
      { speaker: "أنت", role: "b", de: "Ich habe seit zwei Tagen Halsschmerzen und Husten.", ar: "عندي منذ يومين ألم في الحلق وسعال." },
      { speaker: "الطبيب", role: "a", de: "Haben Sie auch Fieber?", ar: "هل عندك حرارة أيضاً؟" },
      { speaker: "أنت", role: "b", de: "Ja, gestern hatte ich 38 Grad.", ar: "نعم، أمس كانت عندي 38 درجة." },
      { speaker: "الطبيب", role: "a", de: "Machen Sie den Mund auf. Ja, der Hals ist rot.", ar: "افتح فمك. نعم، الحلق محمر." },
      { speaker: "الطبيب", role: "b", de: "Ich verschreibe Ihnen Medikamente. Trinken Sie viel und ruhen Sie sich aus.", ar: "سأصف لك أدوية. اشرب كثيراً واسترح." },
    ],
    questions: [
      { de: "Was hat der Patient?", ar: "ماذا يعاني المريض؟", options: [
        { text: "Halsschmerzen und Husten", ar: "ألم حلق وسعال", correct: true, explanation: "نعم — العرَضان معاً." },
        { text: "Kopfschmerzen seit Montag", ar: "صداع", correct: false, explanation: "لا — لم يُذكر صداع Kopfschmerzen ولا يوم الاثنين؛ والعرَضان «Ich habe seit zwei Tagen Halsschmerzen und Husten»." },
        { text: "Bauchschmerzen nach dem Essen", ar: "ألم بطن", correct: false, explanation: "لا — لم يُذكر ألم بطن Bauchschmerzen ولا وجبة؛ والشكوى «Halsschmerzen und Husten» منذ يومين." },
      ]},
      { de: "Welches Fieber hatte der Patient gestern?", ar: "كم كانت حرارة المريض أمس؟", options: [
        { text: "38 Grad", ar: "38 درجة", correct: true, explanation: "صحيح — «gestern hatte ich 38 Grad»." },
        { text: "39 Grad", ar: "39 درجة", correct: false, explanation: "لا — الحرارة المنطوقة «gestern hatte ich 38 Grad» لا تسعٌ وثلاثون." },
        { text: "37 Grad", ar: "37 درجة", correct: false, explanation: "لا — الرقم في الحوار «38 Grad» («gestern hatte ich 38 Grad») لا سبعةٌ وثلاثون." },
      ]},
      { de: "Was soll der Patient tun?", ar: "ماذا يجب أن يفعل المريض؟", options: [
        { text: "Keine Medikamente nehmen", ar: "ألا يأخذ أدوية", correct: false, explanation: "لا — الطبيب وصف أدوية: «Ich verschreibe Ihnen Medikamente»." },
        { text: "Viel trinken und sich ausruhen", ar: "أن يشرب كثيراً ويرتاح", correct: true, explanation: "نعم — «Trinken Sie viel und ruhen Sie sich aus»." },
        { text: "Sport treiben", ar: "أن يمارس الرياضة", correct: false, explanation: "لا — لم تُطلب رياضة Sport؛ والتوجيه «Trinken Sie viel und ruhen Sie sich aus»." },
      ]},
    ],
    keyVocab: [
      { de: "Was fehlt Ihnen?", ar: "ماذا تعاني؟" },
      { de: "der Husten", ar: "السعال" },
      { de: "das Fieber", ar: "الحرارة" },
      { de: "verschreiben", ar: "يصف (دواء)" },
      { de: "sich ausruhen", ar: "يستريح" },
    ],
  },
  {
    id: "a2-02-restaurant",
    level: "A2",
    title: "في مطعم راقٍ",
    titleDe: "Im Restaurant",
    emoji: "🍷",
    situation: "تطلب عشاءً كاملاً في مطعم",
    turns: [
      { speaker: "النادل", role: "a", de: "Guten Abend! Möchten Sie etwas trinken?", ar: "مساء الخير! هل تريد شيئاً للشرب؟" },
      { speaker: "أنت", role: "b", de: "Ja, ein Glas Wasser, bitte. Und die Speisekarte, bitte.", ar: "نعم، كوب ماء من فضلك. وقائمة الطعام." },
      { speaker: "النادل", role: "a", de: "Gerne. Darf ich Ihre Bestellung aufnehmen?", ar: "بكل سرور. هل آخذ طلبك؟" },
      { speaker: "أنت", role: "b", de: "Ich nehme das Schnitzel mit Pommes.", ar: "سآخذ الشنيتزل مع البطاطس." },
      { speaker: "النادل", role: "a", de: "Sehr gut. Und als Nachtisch?", ar: "ممتاز. وللحلوى؟" },
      { speaker: "أنت", role: "b", de: "Einen Apfelstrudel, bitte. Und die Rechnung, bitte.", ar: "أبل شترودل من فضلك. والفاتورة." },
    ],
    questions: [
      { de: "Was bestellt der Gast?", ar: "ماذا يطلب الزبون؟", options: [
        { text: "Schnitzel mit Pommes", ar: "شنيتزل مع بطاطس", correct: true, explanation: "نعم — الطبق الرئيسي." },
        { text: "Eine Pizza mit Käse", ar: "بيتزا", correct: false, explanation: "لا — لم تُطلب بيتزا Pizza؛ والطلب «Ich nehme das Schnitzel mit Pommes»." },
        { text: "Einen großen Salat", ar: "سلطة", correct: false, explanation: "لا — لم تُذكر سلطة Salat؛ والطبق «das Schnitzel mit Pommes»." },
      ]},
      { de: "Was möchte der Gast als Nachtisch?", ar: "ماذا يريد الزبون للحلوى؟", options: [
        { text: "Einen Apfelstrudel", ar: "أبل شترودل", correct: true, explanation: "صحيح — الحلوى النمساوية الشهيرة." },
        { text: "Eis mit Sahne", ar: "آيس كريم", correct: false, explanation: "لا — لم يُطلب آيس كريم Eis؛ والحلوى «Einen Apfelstrudel, bitte»." },
        { text: "Kuchen und Kaffee", ar: "كعكة", correct: false, explanation: "لا — لم تُذكر كعكة Kuchen ولا قهوة؛ والحلوى «Einen Apfelstrudel, bitte»." },
      ]},
      { de: "Was trinkt der Gast?", ar: "ماذا يشرب الزبون؟", options: [
        { text: "Ein Bier", ar: "بيرة", correct: false, explanation: "لا — لم تُطلب بيرة Bier؛ والمشروب «ein Glas Wasser, bitte»." },
        { text: "Ein Glas Wasser", ar: "كوب ماء", correct: true, explanation: "نعم — «ein Glas Wasser, bitte»." },
        { text: "Einen Kaffee", ar: "قهوة", correct: false, explanation: "لا — لم تُطلب قهوة Kaffee؛ والزبون قال «ein Glas Wasser, bitte»." },
      ]},
    ],
    keyVocab: [
      { de: "die Speisekarte", ar: "قائمة الطعام" },
      { de: "die Bestellung aufnehmen", ar: "يأخذ الطلب" },
      { de: "das Schnitzel mit Pommes", ar: "الشنيتزل مع البطاطس" },
      { de: "der Nachtisch", ar: "الحلوى" },
      { de: "die Rechnung", ar: "الفاتورة" },
    ],
  },
  {
    id: "a2-03-zug",
    level: "A2",
    title: "في القطار",
    titleDe: "Im Zug",
    emoji: "🚆",
    situation: "تسأل عن مقعدك وتتحدث مع راكب",
    turns: [
      { speaker: "أنت", role: "a", de: "Entschuldigung, ist dieser Platz frei?", ar: "عذراً، هل هذا المقعد شاغر؟" },
      { speaker: "الراكب", role: "b", de: "Ja, natürlich. Bitte sehr.", ar: "نعم، طبعاً. تفضل." },
      { speaker: "أنت", role: "a", de: "Danke! Fährt dieser Zug nach München?", ar: "شكراً! هل يذهب هذا القطار إلى ميونخ؟" },
      { speaker: "الراكب", role: "b", de: "Ja, und er kommt in zwei Stunden an.", ar: "نعم، وسيصل بعد ساعتين." },
      { speaker: "أنت", role: "a", de: "Perfekt. Wo muss ich umsteigen?", ar: "ممتاز. أين يجب أن أنتقل؟" },
      { speaker: "الراكب", role: "b", de: "In Nürnberg müssen Sie umsteigen.", ar: "في نورنبرغ يجب أن تنتقل." },
    ],
    questions: [
      { de: "Ist der Platz frei?", ar: "هل المقعد شاغر؟", options: [
        { text: "Ja, natürlich", ar: "نعم طبعاً", correct: true, explanation: "نعم — «Ja, natürlich»." },
        { text: "Nein, besetzt", ar: "لا، مشغول", correct: false, explanation: "لا — المقعد شاغر: «Ja, natürlich»." },
        { text: "Ich weiß nicht", ar: "لا أعرف", correct: false, explanation: "لا — الجواب كان حاسماً لا متردداً: «Ja, natürlich»." },
      ]},
      { de: "Wo muss die Person umsteigen?", ar: "أين يجب أن تنتقل؟", options: [
        { text: "In Nürnberg", ar: "في نورنبرغ", correct: true, explanation: "صحيح — «In Nürnberg müssen Sie umsteigen»." },
        { text: "In Berlin", ar: "في برلين", correct: false, explanation: "لا — لم تُذكر برلين Berlin؛ والانتقال «In Nürnberg müssen Sie umsteigen»." },
        { text: "In Hamburg", ar: "في هامبورغ", correct: false, explanation: "لا — لم تُذكر هامبورغ Hamburg؛ ومحطة التبديل Nürnberg." },
      ]},
      { de: "Wie lange dauert die Fahrt?", ar: "كم تستغرق الرحلة؟", options: [
        { text: "Zehn Minuten", ar: "عشر دقائق", correct: false, explanation: "لا — عشر دقائق أقصر بكثير من «er kommt in zwei Stunden an»." },
        { text: "Zwei Stunden", ar: "ساعتان", correct: true, explanation: "نعم — «er kommt in zwei Stunden an»." },
        { text: "Drei Stunden", ar: "ثلاث ساعات", correct: false, explanation: "لا — المدة ساعتان: «er kommt in zwei Stunden an»." },
      ]},
    ],
    keyVocab: [
      { de: "der Platz ist frei", ar: "المقعد شاغر" },
      { de: "Bitte sehr", ar: "تفضل" },
      { de: "umsteigen", ar: "ينتقل (مواصلات)" },
      { de: "in zwei Stunden", ar: "بعد ساعتين" },
      { de: "ankommen", ar: "يصل" },
    ],
  },
  {
    id: "a2-04-wohnungssuche",
    level: "A2",
    title: "البحث عن شقة",
    titleDe: "Wohnungssuche",
    emoji: "🔑",
    situation: "تتصل بوكيل عقارات عن شقة معلنة",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich rufe wegen der Wohnung an.", ar: "طاب يومك! أتصل بخصوص الشقة." },
      { speaker: "الوكيل", role: "b", de: "Guten Tag! Welche Wohnung meinen Sie?", ar: "طاب يومك! أي شقة تقصد؟" },
      { speaker: "أنت", role: "a", de: "Die Zweizimmerwohnung in der Hauptstraße.", ar: "شقة الغرفتين في الشارع الرئيسي." },
      { speaker: "الوكيل", role: "b", de: "Ach ja. Sie kostet 700 Euro warm.", ar: "آه نعم. تكلف 700 يورو شامل." },
      { speaker: "أنت", role: "a", de: "Ist sie noch frei? Kann ich sie besichtigen?", ar: "هل ما زالت متاحة؟ هل أستطيع معاينتها؟" },
      { speaker: "الوكيل", role: "b", de: "Ja, sie ist frei. Morgen um 16 Uhr passt es?", ar: "نعم متاحة. غداً في الرابعة يناسب؟" },
    ],
    questions: [
      { de: "Wie viel kostet die Wohnung?", ar: "كم تكلف الشقة؟", options: [
        { text: "700 Euro warm", ar: "700 يورو شامل", correct: true, explanation: "نعم — «700 Euro warm»." },
        { text: "600 Euro warm", ar: "600 يورو شامل", correct: false, explanation: "لا — السعر المنطوق «Sie kostet 700 Euro warm»." },
        { text: "800 Euro warm", ar: "800 يورو شامل", correct: false, explanation: "لا — لم يُذكر 800؛ والإيجار «700 Euro warm»." },
      ]},
      { de: "Wann kann die Person die Wohnung besichtigen?", ar: "متى تستطيع معاينة الشقة؟", options: [
        { text: "Morgen um 16 Uhr", ar: "غداً في الرابعة", correct: true, explanation: "صحيح — الموعد المتفق عليه." },
        { text: "Heute um 16 Uhr", ar: "اليوم في الرابعة", correct: false, explanation: "لا — الموعد غداً لا اليوم: «Morgen um 16 Uhr passt es?»." },
        { text: "Morgen um 10 Uhr", ar: "غداً في العاشرة", correct: false, explanation: "لا — الساعة الرابعة لا العاشرة: «Morgen um 16 Uhr passt es?»." },
      ]},
      { de: "Wo liegt die Wohnung?", ar: "أين تقع الشقة؟", options: [
        { text: "In der Bahnhofstraße", ar: "في شارع المحطة", correct: false, explanation: "لا — الشارع المذكور هو Hauptstraße." },
        { text: "In der Hauptstraße", ar: "في الشارع الرئيسي", correct: true, explanation: "نعم — «in der Hauptstraße»." },
        { text: "Am Stadtrand", ar: "على أطراف المدينة", correct: false, explanation: "لا — لم تُذكر أطراف المدينة Stadtrand؛ والشقة «in der Hauptstraße»." },
      ]},
    ],
    keyVocab: [
      { de: "wegen der Wohnung anrufen", ar: "الاتصال بخصوص الشقة" },
      { de: "warm", ar: "شامل (إيجار + تدفئة)" },
      { de: "besichtigen", ar: "يعاين" },
      { de: "die Hauptstraße", ar: "الشارع الرئيسي" },
      { de: "Es passt", ar: "يناسب" },
    ],
  },
  {
    id: "a2-05-reisebuero",
    level: "A2",
    title: "في مكتب السفر",
    titleDe: "Im Reisebüro",
    emoji: "✈️",
    situation: "تحجز رحلة إلى ألمانيا",
    turns: [
      { speaker: "الموظفة", role: "a", de: "Guten Tag! Wie kann ich Ihnen helfen?", ar: "طاب يومك! كيف أساعدك؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte einen Flug nach Frankfurt buchen.", ar: "أريد حجز رحلة طيران إلى فرانكفورت." },
      { speaker: "الموظفة", role: "a", de: "Wann möchten Sie fliegen?", ar: "متى تريد السفر؟" },
      { speaker: "أنت", role: "b", de: "Am 15. August, am Morgen.", ar: "في 15 أغسطس، في الصباح." },
      { speaker: "الموظفة", role: "a", de: "Der Flug kostet 250 Euro hin und zurück.", ar: "الرحلة تكلف 250 يورو ذهاباً وإياباً." },
      { speaker: "أنت", role: "b", de: "Das ist okay. Ich buche den Flug.", ar: "هذا مقبول. سأحجز الرحلة." },
    ],
    questions: [
      { de: "Wohin möchte die Person fliegen?", ar: "إلى أين تريد السفر؟", options: [
        { text: "Nach Frankfurt", ar: "إلى فرانكفورت", correct: true, explanation: "نعم — الوجهة فرانكفورت." },
        { text: "Nach Berlin", ar: "إلى برلين", correct: false, explanation: "لا — لم تُذكر برلين Berlin؛ والوجهة «einen Flug nach Frankfurt buchen»." },
        { text: "Nach München", ar: "إلى ميونخ", correct: false, explanation: "لا — لم تُذكر ميونخ München؛ والحجز إلى Frankfurt." },
      ]},
      { de: "Wie viel kostet der Flug?", ar: "كم تكلف الرحلة؟", options: [
        { text: "250 Euro", ar: "250 يورو", correct: true, explanation: "صحيح — «250 Euro hin und zurück»." },
        { text: "150 Euro", ar: "150 يورو", correct: false, explanation: "لا — الثمن «Der Flug kostet 250 Euro hin und zurück»." },
        { text: "350 Euro", ar: "350 يورو", correct: false, explanation: "لا — لم يُذكر 350؛ والسعر «250 Euro hin und zurück»." },
      ]},
      { de: "Wann möchte die Person fliegen?", ar: "متى يريد الشخص أن يسافر؟", options: [
        { text: "Am 15. Mai am Nachmittag", ar: "في 15 مايو", correct: false, explanation: "لا — الشهر أغسطس لا مايو والوقت صباحاً: «Am 15. August, am Morgen»." },
        { text: "Am 15. August, am Morgen", ar: "في 15 أغسطس، صباحاً", correct: true, explanation: "نعم — «Am 15. August, am Morgen»." },
        { text: "Am Abend desselben Tages", ar: "في المساء", correct: false, explanation: "لا — لم يُطلب المساء Abend؛ بل «am Morgen»." },
      ]},
    ],
    keyVocab: [
      { de: "den Flug buchen", ar: "حجز الرحلة" },
      { de: "fliegen", ar: "يسافر جواً" },
      { de: "hin und zurück", ar: "ذهاب وإياب" },
      { de: "am Morgen", ar: "في الصباح" },
      { de: "Das ist okay", ar: "هذا مقبول" },
    ],
  },
];
