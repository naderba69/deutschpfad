/**
 * b1 — الحوارات الخمسة الأولى — التعبير عن الرأي · التخطيط للإجازة · تقديم شكوى رسمية · تأكيد موعد · حل مشكلة في العمل
 * فُصل من b1.ts في الدفعة 114 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../b1.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const B1_DIALOGUES_1: DailyDialogue[] = [
  {
    id: "b1-01-meinung",
    level: "B1",
    title: "التعبير عن الرأي",
    titleDe: "Die eigene Meinung sagen",
    emoji: "💬",
    situation: "تتحدث مع زميل عن العمل عن بُعد",
    turns: [
      { speaker: "الزميل", role: "a", de: "Was denkst du über Homeoffice?", ar: "ما رأيك في العمل عن بُعد؟" },
      { speaker: "أنت", role: "b", de: "Meiner Meinung nach ist es praktisch, aber nicht für jeden.", ar: "في رأيي أنه عملي، لكن ليس للجميع." },
      { speaker: "الزميل", role: "a", de: "Warum nicht für jeden?", ar: "لماذا ليس للجميع؟" },
      { speaker: "أنت", role: "b", de: "Weil manche Leute die Trennung zwischen Arbeit und Freizeit brauchen.", ar: "لأن بعض الناس يحتاجون الفصل بين العمل والفراغ." },
      { speaker: "الزميل", role: "a", de: "Das stimmt. Ich finde es auch schwer, motiviert zu bleiben.", ar: "هذا صحيح. أجد صعوبة أيضاً في البقاء متحفزاً." },
      { speaker: "أنت", role: "b", de: "Genau. Deshalb ist ein hybrides Modell vielleicht die beste Lösung.", ar: "بالضبط. لذلك النموذج الهجين ربما أفضل حل." },
    ],
    questions: [
      { de: "Was ist die Meinung der Person über Homeoffice?", ar: "ما رأي الشخص في العمل عن بُعد؟", options: [
        { text: "Praktisch, aber nicht für jeden", ar: "عملي لكن ليس للجميع", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Völlig nutzlos und überflüssig", ar: "عديم الفائدة تماماً", correct: false, explanation: "لا — لم يُقل إنه عديم الفائدة؛ بل «Meiner Meinung nach ist es praktisch, aber nicht für jeden»." },
        { text: "Perfekt für alle ohne Ausnahme", ar: "مثالي للجميع", correct: false, explanation: "لا — استثناءٌ مذكور صراحةً: «aber nicht für jeden»." },
      ]},
      { de: "Was ist vielleicht die beste Lösung?", ar: "ما الحل الأفضل ربما؟", options: [
        { text: "Ein hybrides Modell", ar: "نموذج هجين", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Nur im Büro arbeiten", ar: "في المكتب فقط", correct: false, explanation: "لا — الحل المقترح مختلط: «ein hybrides Modell vielleicht die beste Lösung»." },
        { text: "Nur zu Hause bleiben", ar: "في البيت فقط", correct: false, explanation: "لا — لم يُقترح البقاء في البيت وحده؛ والخلاصة «Deshalb ist ein hybrides Modell vielleicht die beste Lösung»." },
      ]},
      { de: "Warum ist Homeoffice nicht für jeden gut?", ar: "لماذا ليس العمل عن بُعد جيداً للجميع؟", options: [
        { text: "Manche brauchen die Trennung zwischen Arbeit und Freizeit", ar: "بعض الناس يحتاجون الفصل بين العمل والفراغ", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Das Internet ist immer teuer und deshalb unbrauchbar", ar: "الإنترنت دائماً غالٍ", correct: false, explanation: "لا — لم يُذكر ثمن الإنترنت Internet؛ والسبب «Weil manche Leute die Trennung zwischen Arbeit und Freizeit brauchen»." },
        { text: "Im Büro kann man nichts lernen und nichts erreichen", ar: "في المكتب لا يمكن التعلم", correct: false, explanation: "لا — لم يُقل ذلك عن المكتب Büro؛ والحاجة المذكورة «die Trennung zwischen Arbeit und Freizeit»." },
      ]},
    ],
    keyVocab: [
      { de: "Meiner Meinung nach", ar: "في رأيي" },
      { de: "die Trennung", ar: "الفصل" },
      { de: "motiviert bleiben", ar: "يبقى متحفزاً" },
      { de: "das hybride Modell", ar: "النموذج الهجين" },
      { de: "Deshalb", ar: "لذلك" },
    ],
  },
  {
    id: "b1-02-urlaub-planen",
    level: "B1",
    title: "التخطيط للإجازة",
    titleDe: "Den Urlaub planen",
    emoji: "🏖️",
    situation: "تخطط مع شريكك لإجازة الصيف",
    turns: [
      { speaker: "الشريك", role: "a", de: "Wo sollen wir diesen Sommer Urlaub machen?", ar: "أين يجب أن نقضي إجازة هذا الصيف؟" },
      { speaker: "أنت", role: "b", de: "Ich würde gern nach Österreich fahren. Die Berge sind wunderschön.", ar: "أود السفر إلى النمسا. الجبال رائعة." },
      { speaker: "الشريك", role: "a", de: "Aber ich möchte lieber ans Meer.", ar: "لكنني أفضل البحر." },
      { speaker: "أنت", role: "b", de: "Wie wäre es mit zwei Wochen? Eine in den Bergen, eine am Meer.", ar: "ماذا عن أسبوعين؟ واحد في الجبال وواحد في البحر." },
      { speaker: "الشريك", role: "a", de: "Das klingt gut! Und wie viel kostet das?", ar: "يبدو جيداً! وكم يكلف؟" },
      { speaker: "أنت", role: "b", de: "Wenn wir früh buchen, bekommen wir einen Rabatt.", ar: "إذا حجزنا مبكراً نحصل على خصم." },
    ],
    questions: [
      { de: "Wohin möchte der Partner im Sommer am liebsten?", ar: "إلى أين يفضل الشريك السفر في الصيف؟", options: [
        { text: "Ans Meer", ar: "إلى البحر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Nach Japan", ar: "إلى اليابان", correct: false, explanation: "لا — لم تُذكر اليابان Japan؛ والشريك قال «Aber ich möchte lieber ans Meer»." },
        { text: "In die Stadt", ar: "إلى المدينة", correct: false, explanation: "لا — لم تُذكر المدينة Stadt؛ والرغبة «ans Meer»." },
      ]},
      { de: "Was schlägt die Person für den Urlaub vor?", ar: "ماذا يقترح الشخص للإجازة؟", options: [
        { text: "Zwei Wochen: eine in den Bergen, eine am Meer", ar: "أسبوعان: واحد في الجبال وواحد في البحر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Nur einen Tag am Wochenende", ar: "يوم واحد فقط", correct: false, explanation: "لا — الاقتراح أسبوعان: «Wie wäre es mit zwei Wochen?»." },
        { text: "Drei Monate im Winter, weit weg in den Bergen", ar: "ثلاثة أشهر في الشتاء", correct: false, explanation: "لا — لم يُذكر شتاء Winter ولا ثلاثة أشهر؛ والخطة «Eine in den Bergen, eine am Meer»." },
      ]},
      { de: "Wie kann man beim Buchen sparen?", ar: "كيف يمكن التوفير عند الحجز؟", options: [
        { text: "Früh buchen", ar: "الحجز مبكراً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Spät buchen", ar: "الحجز متأخراً", correct: false, explanation: "لا — التوفير بالحجز المبكر: «Wenn wir früh buchen, bekommen wir einen Rabatt»." },
        { text: "Gar nicht buchen", ar: "عدم الحجز نهائياً", correct: false, explanation: "لا — لم يُقترح ترك الحجز؛ والخصم مشروط به: «Wenn wir früh buchen»." },
      ]},
    ],
    keyVocab: [
      { de: "Urlaub machen", ar: "يقضي إجازة" },
      { de: "Ich würde gern …", ar: "أود …" },
      { de: "die Berge", ar: "الجبال" },
      { de: "der Rabatt", ar: "الخصم" },
      { de: "Wie wäre es mit …?", ar: "ماذا عن …؟" },
    ],
  },
  {
    id: "b1-03-beschwerde",
    level: "B1",
    title: "تقديم شكوى رسمية",
    titleDe: "Eine Beschwerde schreiben",
    emoji: "📝",
    situation: "تشتكي من فندق لخدمة العملاء",
    turns: [
      { speaker: "الموظف", role: "a", de: "Guten Tag, Service. Wie kann ich helfen?", ar: "طاب يومك، الخدمة. كيف أساعد؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte mich über das Hotel beschweren. Das Zimmer war schmutzig.", ar: "أريد تقديم شكوى عن الفندق. الغرفة كانت متسخة." },
      { speaker: "الموظف", role: "a", de: "Das tut mir sehr leid. Wann waren Sie dort?", ar: "يؤسفني جداً. متى كنت هناك؟" },
      { speaker: "أنت", role: "b", de: "Letzte Woche, vom 3. bis 5. August.", ar: "الأسبوع الماضي، من 3 إلى 5 أغسطس." },
      { speaker: "الموظف", role: "a", de: "Ich werde den Fall prüfen. Was erwarten Sie?", ar: "سأفحص القضية. ماذا تتوقع؟" },
      { speaker: "أنت", role: "b", de: "Ich erwarte eine Entschädigung, zum Beispiel eine Rückerstattung.", ar: "أتوقع تعويضاً، مثلاً استرداد المال." },
    ],
    questions: [
      { de: "Worüber beschwert sich die Person?", ar: "ممَّ يشتكي الشخص؟", options: [
        { text: "Über ein schmutziges Zimmer", ar: "من غرفة متسخة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Über das Essen im Restaurant", ar: "من الطعام", correct: false, explanation: "لا — لم يُذكر طعام Restaurant؛ والشكوى «Das Zimmer war schmutzig»." },
        { text: "Über die Parkplätze vor dem Haus", ar: "من مواقف السيارات", correct: false, explanation: "لا — لم تُذكر مواقف سيارات Parkplätze؛ والمشتكى منه Zimmer schmutzig." },
      ]},
      { de: "Wann war die Person im Hotel?", ar: "متى كان الشخص في الفندق؟", options: [
        { text: "Vom 3. bis 5. August", ar: "من 3 إلى 5 أغسطس", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Im Mai vergangenen Jahres", ar: "في مايو", correct: false, explanation: "لا — لم يُذكر مايو Mai؛ والإقامة «Letzte Woche, vom 3. bis 5. August»." },
        { text: "Im Winter vor Weihnachten", ar: "في الشتاء", correct: false, explanation: "لا — لم يُذكر شتاء Winter؛ والتاريخ «vom 3. bis 5. August»." },
      ]},
      { de: "Was erwartet die Person?", ar: "ماذا يتوقع الشخص؟", options: [
        { text: "Eine Entschädigung, zum Beispiel Geld zurück", ar: "تعويضاً، مثلاً استرداد المال", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Nichts, sie erwartet gar keine Reaktion", ar: "لا شيء", correct: false, explanation: "لا — هناك توقّع صريح: «Ich erwarte eine Entschädigung»." },
        { text: "Ein neues Hotelzimmer komplett gratis", ar: "فندقاً جديداً مجاناً", correct: false, explanation: "لا — لم تُطلب غرفة مجانية gratis؛ بل تعويضٌ مثل «eine Rückerstattung»." },
      ]},
    ],
    keyVocab: [
      { de: "sich beschweren über", ar: "يشتكي من" },
      { de: "schmutzig", ar: "متسخ" },
      { de: "der Fall", ar: "القضية" },
      { de: "die Entschädigung", ar: "التعويض" },
      { de: "die Rückerstattung", ar: "استرداد المال" },
    ],
  },
  {
    id: "b1-04-terminal",
    level: "B1",
    title: "تأكيد موعد",
    titleDe: "Einen Termin bestätigen",
    emoji: "📅",
    situation: "تتصل لتأكيد موعد طبيب",
    turns: [
      { speaker: "السكرتيرة", role: "a", de: "Praxis Dr. Müller, guten Tag!", ar: "عيادة الدكتور مولر، طاب يومك!" },
      { speaker: "أنت", role: "b", de: "Guten Tag! Ich möchte meinen Termin am Donnerstag bestätigen.", ar: "طاب يومك! أريد تأكيد موعدي يوم الخميس." },
      { speaker: "السكرتيرة", role: "a", de: "Einen Moment, bitte. Ja, Donnerstag um 14 Uhr. Stimmt das?", ar: "لحظة من فضلك. نعم، الخميس في الثانية. صحيح؟" },
      { speaker: "أنت", role: "b", de: "Ja, genau. Muss ich etwas vorbereiten?", ar: "نعم بالضبط. هل يجب أن أحضر شيئاً؟" },
      { speaker: "السكرتيرة", role: "a", de: "Bitte bringen Sie Ihre Versicherungskarte mit.", ar: "من فضلك أحضر بطاقة التأمين." },
      { speaker: "أنت", role: "b", de: "Alles klar. Vielen Dank und auf Wiederhören!", ar: "حسناً. شكراً جزيلاً وإلى المزيد!" },
    ],
    questions: [
      { de: "Wann ist der Termin?", ar: "متى الموعد؟", options: [
        { text: "Donnerstag um 14 Uhr", ar: "الخميس في الثانية ظهراً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Mittwoch um 14 Uhr", ar: "الأربعاء في الثانية ظهراً", correct: false, explanation: "لا — اليوم الخميس لا الأربعاء: «Donnerstag um 14 Uhr»." },
        { text: "Donnerstag um 16 Uhr", ar: "الخميس في الرابعة مساءً", correct: false, explanation: "لا — الساعة الثانية لا الرابعة: «Donnerstag um 14 Uhr»." },
      ]},
      { de: "Was muss die Person mitbringen?", ar: "ماذا يجب أن يحضر الشخص؟", options: [
        { text: "Die Versicherungskarte", ar: "بطاقة التأمين", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Einen Reisepass", ar: "جواز السفر", correct: false, explanation: "لا — لم يُطلب جواز سفر Reisepass؛ بل «Bitte bringen Sie Ihre Versicherungskarte mit»." },
        { text: "Eine Krankmeldung", ar: "شهادة مرض", correct: false, explanation: "لا — لم تُطلب شهادة مرض Krankmeldung؛ والمطلوب die Versicherungskarte." },
      ]},
      { de: "Wo ruft die Person an?", ar: "أين يتصل الشخص؟", options: [
        { text: "Bei einer Arztpraxis", ar: "بعيادة طبيب", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Bei einer großen Bank", ar: "ببنك", correct: false, explanation: "لا — لم يُذكر بنك Bank؛ والمستقبِلة «Praxis Dr. Müller, guten Tag!»." },
        { text: "Bei einem Hotel am Platz", ar: "بفندق", correct: false, explanation: "لا — لم يُذكر فندق Hotel؛ والاتصال بعيادة Praxis Dr. Müller." },
      ]},
    ],
    keyVocab: [
      { de: "der Termin", ar: "الموعد" },
      { de: "bestätigen", ar: "يؤكد" },
      { de: "die Versicherungskarte", ar: "بطاقة التأمين" },
      { de: "mitbringen", ar: "يحضر معه" },
      { de: "auf Wiederhören", ar: "إلى المزيد (هاتفياً)" },
    ],
  },
  {
    id: "b1-05-probleme-loesen",
    level: "B1",
    title: "حل مشكلة في العمل",
    titleDe: "Ein Problem lösen",
    emoji: "🔧",
    situation: "تناقش مشكلة مع زميل في العمل",
    turns: [
      { speaker: "الزميل", role: "a", de: "Wir haben ein Problem mit dem neuen System.", ar: "عندنا مشكلة مع النظام الجديد." },
      { speaker: "أنت", role: "b", de: "Was ist passiert? Funktioniert es nicht?", ar: "ماذا حدث؟ ألا يعمل؟" },
      { speaker: "الزميل", role: "a", de: "Doch, aber es ist sehr langsam und die Daten fehlen.", ar: "يعمل لكنه بطيء جداً والبيانات ناقصة." },
      { speaker: "أنت", role: "b", de: "Ich schlage vor, den Support anzurufen und das Problem zu melden.", ar: "أقترح الاتصال بالدعم والإبلاغ عن المشكلة." },
      { speaker: "الزميل", role: "a", de: "Gute Idee. Kannst du das übernehmen?", ar: "فكرة جيدة. هل تستطيع توليها؟" },
      { speaker: "أنت", role: "b", de: "Ja, ich kümmere mich darum. Ich melde mich später.", ar: "نعم، سأتولى الأمر. سأتصل بك لاحقاً." },
    ],
    questions: [
      { de: "Was ist das Problem?", ar: "ما المشكلة؟", options: [
        { text: "Das System ist langsam und Daten fehlen", ar: "النظام بطيء والبيانات ناقصة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Das System funktioniert gar nicht", ar: "النظام لا يعمل إطلاقاً", correct: false, explanation: "لا — النظام يعمل: «Doch, aber es ist sehr langsam und die Daten fehlen»." },
        { text: "Der Chef ist krank", ar: "المدير مريض", correct: false, explanation: "لا — لم يُذكر مدير Chef ولا مرض؛ والمشكلة «es ist sehr langsam und die Daten fehlen»." },
      ]},
      { de: "Was schlägt die Person vor?", ar: "ماذا يقترح الشخص؟", options: [
        { text: "Den Support anrufen und das Problem melden", ar: "الاتصال بالدعم والإبلاغ عن المشكلة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Das System ganz abschaffen und ersetzen", ar: "إلغاء النظام", correct: false, explanation: "لا — لم يُقترح إلغاء النظام abschaffen؛ والاقتراح «den Support anzurufen und das Problem zu melden»." },
        { text: "Nichts tun und einfach abwarten", ar: "عدم فعل أي شيء", correct: false, explanation: "لا — هناك فعلٌ مقترح لا انتظار: «Ich schlage vor, den Support anzurufen»." },
      ]},
      { de: "Was macht die Person am Ende?", ar: "ماذا سيفعل الشخص في النهاية؟", options: [
        { text: "Sie kümmert sich um das Problem und meldet sich später", ar: "سيتولى الأمر ويتصل لاحقاً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Sie fährt nach Hause und ruht sich erst einmal aus", ar: "ستعود إلى البيت", correct: false, explanation: "لا — لم يُذكر بيتٌ أو راحة nach Hause؛ والتعهّد «Ja, ich kümmere mich darum»." },
        { text: "Sie kündigt noch am selben Tag fristlos", ar: "ستستقيل", correct: false, explanation: "لا — لم تُذكر استقالة kündigen؛ والوعد «Ich melde mich später»." },
      ]},
    ],
    keyVocab: [
      { de: "das System", ar: "النظام" },
      { de: "die Daten fehlen", ar: "البيانات ناقصة" },
      { de: "vorschlagen", ar: "يقترح" },
      { de: "übernehmen", ar: "يتولى" },
      { de: "sich kümmern um", ar: "يعتني بـ" },
    ],
  },
];
