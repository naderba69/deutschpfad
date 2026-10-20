/**
 * b2 — الحوارات الخمسة الأولى — مفاوضة الراتب · اجتماع فريق العمل · إدارة صراع مع زميل · الاتصال بالطوارئ · فقدان جواز السفر
 * فُصل من b2.ts في الدفعة 115 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../b2.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const B2_DIALOGUES_1: DailyDialogue[] = [
  {
    id: "b2-01-gehaltsverhandlung",
    level: "B2",
    title: "مفاوضة الراتب",
    titleDe: "Gehaltsverhandlung",
    emoji: "💶",
    situation: "تتفاوض مع مديرك على راتب أعلى",
    turns: [
      { speaker: "المدير", role: "a", de: "Sie haben um dieses Gespräch gebeten. Worum geht es?", ar: "طلبت هذا اللقاء. عن ماذا يدور الحديث؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte über mein Gehalt sprechen. Meine Leistungen haben sich deutlich verbessert.", ar: "أريد التحدث عن راتبي. أدائي تحسن بشكل ملحوظ." },
      { speaker: "المدير", role: "a", de: "Das sehe ich auch. Was schwebt Ihnen vor?", ar: "أرى ذلك أيضاً. ماذا تتخيل؟" },
      { speaker: "أنت", role: "b", de: "Ich würde eine Erhöhung von zehn Prozent vorschlagen.", ar: "أقترح زيادة بنسبة عشرة بالمئة." },
      { speaker: "المدير", role: "a", de: "Zehn Prozent sind viel. Wir können höchstens fünf anbieten.", ar: "عشرة بالمئة كثير. يمكننا عرض خمسة كحد أقصى." },
      { speaker: "أنت", role: "b", de: "Ich verstehe. Wie wäre es mit sieben Prozent und einer Zusatzleistung?", ar: "أفهم. ماذا عن سبعة بالمئة وميزة إضافية؟" },
    ],
    questions: [
      { de: "Worum geht es im Gespräch?", ar: "عن ماذا يدور الحديث؟", options: [
        { text: "Um eine Gehaltserhöhung", ar: "عن زيادة الراتب", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Um eine Kündigung", ar: "عن الاستقالة", correct: false, explanation: "لا — لم تُذكر استقالة Kündigung؛ والموضوع «Ich möchte über mein Gehalt sprechen»." },
        { text: "Um eine Versetzung ins Ausland", ar: "عن النقل إلى الخارج", correct: false, explanation: "لا — لم يُذكر نقلٌ إلى Ausland؛ والحديث عن Gehalt و«Meine Leistungen haben sich deutlich verbessert»." },
      ]},
      { de: "Welche Erhöhung schlägt der Mitarbeiter zuerst vor?", ar: "ما الزيادة التي يقترحها الموظف أولاً؟", options: [
        { text: "Zehn Prozent", ar: "عشرة بالمئة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Fünf Prozent", ar: "خمسة بالمئة", correct: false, explanation: "لا — الخمسة عرضُ صاحب العمل: «Wir können höchstens fünf anbieten»؛ أما اقتراح الموظف الأول فـ«eine Erhöhung von zehn Prozent»." },
        { text: "Zwanzig Prozent", ar: "عشرون بالمئة", correct: false, explanation: "لا — لم يُذكر عشرون Prozent؛ والاقتراح «Ich würde eine Erhöhung von zehn Prozent vorschlagen»." },
      ]},
      { de: "Was bietet der Arbeitgeber am Ende an?", ar: "ماذا يعرض صاحب العمل في النهاية؟", options: [
        { text: "Sieben Prozent und eine Zusatzleistung", ar: "سبعة بالمئة وميزة إضافية", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Zwölf Prozent ohne weitere Leistung", ar: "اثنا عشر بالمئة", correct: false, explanation: "لا — لم يُذكر اثنا عشر؛ والتسوية «sieben Prozent und einer Zusatzleistung»." },
        { text: "Gar nichts, das Gespräch endet", ar: "لا شيء", correct: false, explanation: "لا — لم ينتهِ الحوار بلا نتيجة؛ بل قُدِّم عرضٌ مضاد: «Wie wäre es mit sieben Prozent und einer Zusatzleistung?»." },
      ]},
    ],
    keyVocab: [
      { de: "das Gehalt", ar: "الراتب" },
      { de: "die Leistungen", ar: "الأداء/الإنجازات" },
      { de: "die Erhöhung", ar: "الزيادة" },
      { de: "vorschlagen", ar: "يقترح" },
      { de: "die Zusatzleistung", ar: "الميزة الإضافية" },
    ],
  },
  {
    id: "b2-02-teambesprechung",
    level: "B2",
    title: "اجتماع فريق العمل",
    titleDe: "Teambesprechung",
    emoji: "👥",
    situation: "تناقش مع فريقك موعد تسليم المشروع",
    turns: [
      { speaker: "الزميلة", role: "a", de: "Wir haben ein Problem mit der Deadline. Wir schaffen es nicht bis Freitag.", ar: "عندنا مشكلة مع الموعد النهائي. لن ننجز حتى الجمعة." },
      { speaker: "أنت", role: "b", de: "Das ist besorgniserregend. Was ist der aktuelle Stand?", ar: "هذا مقلق. ما الوضع الحالي؟" },
      { speaker: "الزميلة", role: "a", de: "Wir brauchen noch zwei Tage für die Tests.", ar: "نحتاج يومين إضافيين للاختبارات." },
      { speaker: "أنت", role: "b", de: "In Anbetracht der Umstände sollten wir den Kunden informieren.", ar: "بالنظر إلى الظروف، يجب إبلاغ العميل." },
      { speaker: "الزميلة", role: "a", de: "Einverstanden. Wer übernimmt die Kommunikation?", ar: "موافقة. من يتولى التواصل؟" },
      { speaker: "أنت", role: "b", de: "Ich kann das übernehmen und einen neuen Termin vorschlagen.", ar: "أستطيع تولي ذلك واقتراح موعد جديد." },
    ],
    questions: [
      { de: "Welches Problem gibt es?", ar: "ما المشكلة؟", options: [
        { text: "Die Deadline am Freitag wird nicht eingehalten", ar: "الموعد النهائي يوم الجمعة لن يُلتزم به", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Der Server ist am Morgen ausgefallen", ar: "الخادم تعطل", correct: false, explanation: "لا — لم يُذكر خادم Server؛ والمشكلة «Wir schaffen es nicht bis Freitag»." },
        { text: "Ein Kunde hat gestern gekündigt", ar: "أنهى عميل التعاقد", correct: false, explanation: "لا — لم يُذكر إنهاء تعاقد gekündigt؛ والمشكلة مع Deadline نفسها." },
      ]},
      { de: "Wie viele zusätzliche Tage braucht das Team für die Tests?", ar: "كم يوماً إضافياً يحتاج الفريق للاختبارات؟", options: [
        { text: "Zwei Tage", ar: "يومان", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Fünf Tage", ar: "خمسة أيام", correct: false, explanation: "لا — ليست خمسة أيام؛ بل «Wir brauchen noch zwei Tage für die Tests»." },
        { text: "Eine Woche", ar: "أسبوع", correct: false, explanation: "لا — لم يُذكر أسبوع Woche؛ والمطلوب «noch zwei Tage für die Tests»." },
      ]},
      { de: "Wer übernimmt die Kommunikation mit dem Kunden?", ar: "من يتولى التواصل مع العميل؟", options: [
        { text: "Die sprechende Person selbst, mit einem neuen Termin", ar: "الشخص المتحدث نفسه، مع موعد جديد", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Der Chef allein entscheidet das ohne das Team", ar: "المدير وحده", correct: false, explanation: "لا — لم يُذكر مدير Chef؛ والمتحدّث تولّى الأمر: «Ich kann das übernehmen und einen neuen Termin vorschlagen»." },
        { text: "Niemand kümmert sich darum im Büro", ar: "لا أحد", correct: false, explanation: "لا — هناك من يتولّى التواصل: «Ich kann das übernehmen»." },
      ]},
    ],
    keyVocab: [
      { de: "die Deadline", ar: "الموعد النهائي" },
      { de: "besorgniserregend", ar: "مقلق" },
      { de: "der aktuelle Stand", ar: "الوضع الحالي" },
      { de: "in Anbetracht", ar: "بالنظر إلى" },
      { de: "die Kommunikation übernehmen", ar: "تولي التواصل" },
    ],
  },
  {
    id: "b2-03-konflikt",
    level: "B2",
    title: "إدارة صراع مع زميل",
    titleDe: "Konflikt lösen",
    emoji: "⚖️",
    situation: "لديك خلاف مع زميل حول مشروع مشترك",
    turns: [
      { speaker: "الزميل", role: "a", de: "Ich bin enttäuscht. Du hast meine Ideen im Meeting nicht erwähnt.", ar: "أنا محبط. لم تذكر أفكاري في الاجتماع." },
      { speaker: "أنت", role: "b", de: "Das tut mir leid. Das war nicht meine Absicht.", ar: "آسف. لم يكن ذلك قصدي." },
      { speaker: "الزميل", role: "a", de: "Es hat sich so angefühlt, als ob meine Arbeit nichts wert wäre.", ar: "شعرت أن عملي بلا قيمة." },
      { speaker: "أنت", role: "b", de: "Ich verstehe deine Perspektive. Ich schlage vor, dass wir im nächsten Meeting gemeinsam präsentieren.", ar: "أفهم منظورك. أقترح أن نقدم معاً في الاجتماع القادم." },
      { speaker: "الزميل", role: "a", de: "Das wäre fair. Danke für das Angebot.", ar: "سيكون هذا عادلاً. شكراً للعرض." },
      { speaker: "أنت", role: "b", de: "Gern. Ich möchte, dass unsere Zusammenarbeit besser wird.", ar: "بكل سرور. أريد أن تتحسن تعاوننا." },
    ],
    questions: [
      { de: "Warum ist die Person enttäuscht?", ar: "لماذا الشخص محبط؟", options: [
        { text: "Ihre Ideen wurden im Meeting nicht erwähnt", ar: "لم تُذكر أفكاره في الاجتماع", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Das Gehalt ist zu niedrig für die Arbeit", ar: "الراتب منخفض", correct: false, explanation: "لا — لم يُذكر راتب Gehalt؛ والعتب «Du hast meine Ideen im Meeting nicht erwähnt»." },
        { text: "Der Kollege ist zu spät gekommen", ar: "الزميل تأخر", correct: false, explanation: "لا — لم يُذكر تأخّر zu spät؛ وسبب الخيبة Ideen nicht erwähnt." },
      ]},
      { de: "Warum fühlte sich die Person übergangen?", ar: "لماذا شعر الشخص بالتجاهل؟", options: [
        { text: "Es wirkte, als wäre ihre Arbeit nichts wert", ar: "بدا وكأن عمله بلا قيمة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Weil sie zu spät zum wichtigen Termin kam", ar: "لأنه تأخر", correct: false, explanation: "لا — لم يُذكر تأخّر عن موعد Termin؛ والشعور «als ob meine Arbeit nichts wert wäre»." },
        { text: "Weil sie krank war und deshalb fehlte", ar: "لأنه كان مريضاً", correct: false, explanation: "لا — لم يُذكر مرض krank؛ والإحساس بالتجاهل من عدم ذكر الأفكار («meine Ideen im Meeting nicht erwähnt»)." },
      ]},
      { de: "Was wird für das nächste Meeting vorgeschlagen?", ar: "ماذا يُقترح للاجتماع القادم؟", options: [
        { text: "Gemeinsam präsentieren", ar: "العرض معاً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Das Projekt abzusagen", ar: "إلغاء المشروع", correct: false, explanation: "لا — لم يُقترح إلغاء المشروع absagen؛ بل «dass wir im nächsten Meeting gemeinsam präsentieren»." },
        { text: "Allein zu arbeiten", ar: "العمل منفرداً", correct: false, explanation: "لا — العمل المنفرد allein عكسُ المقترح: «gemeinsam präsentieren»." },
      ]},
    ],
    keyVocab: [
      { de: "enttäuscht", ar: "محبط" },
      { de: "die Absicht", ar: "القصد" },
      { de: "die Perspektive", ar: "المنظور" },
      { de: "gemeinsam präsentieren", ar: "تقديم مشترك" },
      { de: "fair", ar: "عادل" },
    ],
  },
  {
    id: "b2-04-notfall",
    level: "B2",
    title: "الاتصال بالطوارئ",
    titleDe: "Notruf",
    emoji: "🚨",
    situation: "شاهدت حادثاً وتتصل بالطوارئ (112)",
    turns: [
      { speaker: "الموظف", role: "a", de: "Notruf 112. Was ist passiert?", ar: "الطوارئ 112. ماذا حدث؟" },
      { speaker: "أنت", role: "b", de: "Es gab einen Unfall auf der Kreuzung. Ein Fahrradfahrer ist gestürzt.", ar: "وقع حادث في التقاطع. سقط راكب دراجة." },
      { speaker: "الموظف", role: "a", de: "Ist er verletzt? Ist er bei Bewusstsein?", ar: "هل هو مصاب؟ هل هو واعٍ؟" },
      { speaker: "أنت", role: "b", de: "Er ist bei Bewusstsein, aber sein Bein blutet stark.", ar: "هو واعٍ لكن ساقه تنزف بشدة." },
      { speaker: "الموظف", role: "a", de: "Bleiben Sie bei ihm und üben Sie Druck auf die Wunde aus.", ar: "ابقَ معه واضغط على الجرح." },
      { speaker: "أنت", role: "b", de: "Verstanden. Der Rettungswagen kommt? Bitte schnell!", ar: "فهمت. هل تأتي الإسعاف؟ أرجوك بسرعة!" },
    ],
    questions: [
      { de: "Wo ist der Unfall passiert?", ar: "أين وقع الحادث؟", options: [
        { text: "An einer Kreuzung", ar: "عند تقاطع", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Auf einer Autobahn", ar: "على طريق سريع", correct: false, explanation: "لا — لم يُذكر طريق سريع Autobahn؛ والحادث «auf der Kreuzung»." },
        { text: "In einem Park", ar: "في حديقة", correct: false, explanation: "لا — لم تُذكر حديقة Park؛ والمكان «Es gab einen Unfall auf der Kreuzung»." },
      ]},
      { de: "Was ist mit dem Radfahrer passiert?", ar: "ماذا حدث لراكب الدراجة؟", options: [
        { text: "Er ist gestürzt und sein Bein blutet", ar: "سقط وساقه تنزف", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Er ist einfach weitergefahren", ar: "واصل طريقه", correct: false, explanation: "لا — لم يواصل طريقه؛ بل «Ein Fahrradfahrer ist gestürzt»." },
        { text: "Er hat ein parkendes Auto gerammt", ar: "صدم سيارة", correct: false, explanation: "لا — لم تُذكر سيارة Auto؛ والإصابة «sein Bein blutet stark» بعد السقوط." },
      ]},
      { de: "Was soll der Anrufer tun?", ar: "ماذا يجب أن يفعل المتصل؟", options: [
        { text: "Druck auf die Wunde ausüben", ar: "الضغط على الجرح", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Den Verletzten allein lassen", ar: "ترك المصاب وحده", correct: false, explanation: "لا — طُلب البقاء معه: «Bleiben Sie bei ihm»." },
        { text: "Ein Taxi rufen", ar: "طلب سيارة أجرة", correct: false, explanation: "لا — لم يُذكر Taxi؛ والتعليمات «üben Sie Druck auf die Wunde aus»." },
      ]},
    ],
    keyVocab: [
      { de: "der Notruf", ar: "الاتصال بالطوارئ" },
      { de: "der Unfall", ar: "الحادث" },
      { de: "verletzt", ar: "مصاب" },
      { de: "bei Bewusstsein", ar: "واعٍ" },
      { de: "der Rettungswagen", ar: "سيارة الإسعاف" },
    ],
  },
  {
    id: "b2-05-pass-verloren",
    level: "B2",
    title: "فقدان جواز السفر",
    titleDe: "Pass verloren",
    emoji: "🛂",
    situation: "فقدت جواز سفرك في الخارج وتذهب للسفارة",
    turns: [
      { speaker: "الموظف", role: "a", de: "Guten Tag! Wie kann ich Ihnen helfen?", ar: "طاب يومك! كيف أساعدك؟" },
      { speaker: "أنت", role: "b", de: "Ich habe meinen Pass verloren. Ich brauche einen Ersatz.", ar: "فقدت جواز سفري. أحتاج بديلاً." },
      { speaker: "الموظف", role: "a", de: "Das tut mir leid. Haben Sie eine Anzeige bei der Polizei gemacht?", ar: "يؤسفني. هل قدمت بلاغاً للشرطة؟" },
      { speaker: "أنت", role: "b", de: "Noch nicht. Was muss ich zuerst tun?", ar: "ليس بعد. ماذا أفعل أولاً؟" },
      { speaker: "الموظف", role: "a", de: "Zuerst zur Polizei gehen und den Verlust melden. Dann mit der Anzeige hierherkommen.", ar: "أولاً اذهب للشرطة وأبلغ عن الفقدان. ثم تعال بهذا البلاغ." },
      { speaker: "أنت", role: "b", de: "Alles klar. Wie lange dauert der Ersatzpass?", ar: "حسناً. كم يستغرق إصدار الجواز البديل؟" },
    ],
    questions: [
      { de: "Was ist passiert?", ar: "ماذا حدث؟", options: [
        { text: "Der Pass ist verloren gegangen", ar: "فقد جواز السفر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Der Pass ist abgelaufen", ar: "انتهت صلاحية الجواز", correct: false, explanation: "لا — ليست صلاحية منتهية abgelaufen؛ بل «Ich habe meinen Pass verloren»." },
        { text: "Der Ausweis wurde beschädigt", ar: "تضرّرت الهوية", correct: false, explanation: "لا — لم يُذكر تلف beschädigt؛ والفقدان «Ich brauche einen Ersatz»." },
      ]},
      { de: "Wohin muss die Person zuerst?", ar: "إلى أين يجب أن يذهب الشخص أولاً؟", options: [
        { text: "Zur Polizei", ar: "إلى الشرطة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Zur Bank", ar: "إلى البنك", correct: false, explanation: "لا — لم يُذكر بنك Bank؛ والخطوة الأولى «Zuerst zur Polizei gehen und den Verlust melden»." },
        { text: "Zum Flughafen", ar: "إلى المطار", correct: false, explanation: "لا — لم يُذكر مطار Flughafen؛ بل إلى Polizei أولاً." },
      ]},
      { de: "Was braucht die Person, um den Ersatzpass zu bekommen?", ar: "ماذا يحتاج الشخص للحصول على الجواز البديل؟", options: [
        { text: "Die Anzeige von der Polizei", ar: "بلاغ الشرطة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Einen Pass aus dem Ausland", ar: "جواز من الخارج", correct: false, explanation: "لا — لم يُذكر جوازٌ أجنبي Ausland؛ والمطلوب «Dann mit der Anzeige hierherkommen»." },
        { text: "Ein Foto allein", ar: "صورة فقط", correct: false, explanation: "لا — لم تُذكر صورة Foto؛ والشرط Anzeige من الشرطة («den Verlust melden»)." },
      ]},
    ],
    keyVocab: [
      { de: "verlieren", ar: "يفقد" },
      { de: "der Ersatzpass", ar: "الجواز البديل" },
      { de: "die Anzeige", ar: "البلاغ" },
      { de: "der Verlust melden", ar: "الإبلاغ عن الفقدان" },
      { de: "die Botschaft", ar: "السفارة" },
    ],
  },
];
