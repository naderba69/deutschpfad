/**
 * b1 — الحوارات الخمسة الثانية — نقاش عن البيئة · مقابلة عمل تفصيلية · إبلاغ العمل بالمرض · شراء تذاكر حفلة · طلب مساعدة دراسية
 * فُصل من b1.ts في الدفعة 114 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../b1.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const B1_DIALOGUES_2: DailyDialogue[] = [
  {
    id: "b1-06-umwelt",
    level: "B1",
    title: "نقاش عن البيئة",
    titleDe: "Über Umwelt diskutieren",
    emoji: "🌍",
    situation: "تناقش مع صديق مشكلة البلاستيك",
    turns: [
      { speaker: "الصديق", role: "a", de: "Wir benutzen zu viel Plastik, findest du nicht?", ar: "نستخدم بلاستيكاً كثيراً، ألا ترى؟" },
      { speaker: "أنت", role: "b", de: "Ja, das stimmt. Man sollte weniger Plastik kaufen.", ar: "نعم صحيح. يجب شراء بلاستيك أقل." },
      { speaker: "الصديق", role: "a", de: "Aber es ist schwer, Plastik zu vermeiden.", ar: "لكن من الصعب تجنب البلاستيك." },
      { speaker: "أنت", role: "b", de: "Man kann zum Beispiel eine eigene Tasche mitnehmen.", ar: "يمكن مثلاً حمل حقيبة خاصة." },
      { speaker: "الصديق", role: "a", de: "Das ist eine gute Idee. Und Glasflaschen statt Plastikflaschen!", ar: "فكرة جيدة. وزجاجات زجاجية بدل البلاستيكية!" },
      { speaker: "أنت", role: "b", de: "Genau. Jeder kleine Schritt zählt.", ar: "بالضبط. كل خطوة صغيرة مهمة." },
    ],
    questions: [
      { de: "Was ist das Thema der Diskussion?", ar: "ما موضوع النقاش؟", options: [
        { text: "Plastikverbrauch und Umwelt", ar: "استهلاك البلاستيك والبيئة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Reisen ins Ausland mit dem Flugzeug", ar: "السفر إلى الخارج بالطائرة", correct: false, explanation: "لا — لم يُذكر سفرٌ أو طيران Flugzeug؛ وافتتاحية النقاش «Wir benutzen zu viel Plastik, findest du nicht?»." },
        { text: "Sport im Verein am Wochenende", ar: "الرياضة في النادي", correct: false, explanation: "لا — لم تُذكر رياضة Sport ولا نادي Verein؛ والموضوع Plastik und Umwelt." },
      ]},
      { de: "Was schlägt die Person vor?", ar: "ماذا يقترح الشخص؟", options: [
        { text: "Eine eigene Tasche mitnehmen", ar: "حمل حقيبة خاصة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Mehr Plastiktüten kaufen", ar: "شراء أكياس بلاستيكية أكثر", correct: false, explanation: "لا — الاتجاه عكسي: «Man sollte weniger Plastik kaufen»؛ والاقتراح «eine eigene Tasche mitnehmen»." },
        { text: "Alles wegwerfen", ar: "رمي كل شيء", correct: false, explanation: "لا — لم يُدعَ إلى رمي الأشياء wegwerfen؛ بل إلى «eine eigene Tasche mitnehmen»." },
      ]},
      { de: "Welche Alternative zu Plastikflaschen wird genannt?", ar: "ما البديل المذكور لزجاجات البلاستيك؟", options: [
        { text: "Glasflaschen", ar: "زجاجات زجاجية", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Metalldosen", ar: "علب معدنية", correct: false, explanation: "لا — لم تُذكر علب معدنية Metalldosen؛ والبديل «Glasflaschen statt Plastikflaschen!»." },
        { text: "Papiertüten", ar: "أكياس ورقية", correct: false, explanation: "لا — لم تُذكر أكياس ورقية Papiertüten؛ والمذكور Glasflaschen statt Plastikflaschen." },
      ]},
    ],
    keyVocab: [
      { de: "das Plastik", ar: "البلاستيك" },
      { de: "vermeiden", ar: "يتجنب" },
      { de: "die eigene Tasche", ar: "الحقيبة الخاصة" },
      { de: "statt", ar: "بدلاً من" },
      { de: "Jeder kleine Schritt zählt", ar: "كل خطوة صغيرة مهمة" },
    ],
  },
  {
    id: "b1-07-interview",
    level: "B1",
    title: "مقابلة عمل (تفصيلية)",
    titleDe: "Vorstellungsgespräch (detailliert)",
    emoji: "🤝",
    situation: "محاكاة تدريبية لمقابلة عمل — والأجر المذكور مثال خيالي لا معيار للأجور",
    turns: [
      { speaker: "المدير", role: "a", de: "Erzählen Sie mir etwas über Ihre Erfahrung.", ar: "حدثني عن خبرتك." },
      { speaker: "أنت", role: "b", de: "Ich habe fünf Jahre als Projektassistent gearbeitet und viele Projekte organisiert.", ar: "عملت خمس سنوات كمساعد مشاريع ونظمت مشاريع كثيرة." },
      { speaker: "المدير", role: "a", de: "Warum möchten Sie die Stelle wechseln?", ar: "لماذا تريد تغيير الوظيفة؟" },
      { speaker: "أنت", role: "b", de: "Ich möchte mehr Verantwortung übernehmen und mich weiterentwickeln.", ar: "أريد تحمل مسؤولية أكبر والتطور." },
      { speaker: "المدير", role: "a", de: "Welche Gehaltsvorstellungen haben Sie?", ar: "ما توقعاتك المالية؟" },
      { speaker: "أنت", role: "b", de: "Meine Vorstellung liegt bei 3000 Euro brutto im Monat.", ar: "أتوقع راتباً إجمالياً قدره 3000 يورو شهرياً." },
    ],
    questions: [
      { de: "Wie lange hat die Person als Projektassistent gearbeitet?", ar: "كم سنة عمل الشخص مساعد مشاريع؟", options: [
        { text: "Fünf Jahre", ar: "خمس سنوات", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Drei Jahre", ar: "ثلاث سنوات", correct: false, explanation: "لا — المدة «Ich habe fünf Jahre als Projektassistent gearbeitet»." },
        { text: "Zehn Jahre", ar: "عشر سنوات", correct: false, explanation: "لا — لم تُذكر عشر Jahre؛ والخبرة «fünf Jahre als Projektassistent»." },
      ]},
      { de: "Warum möchte die Person die Stelle wechseln?", ar: "لماذا يريد الشخص تغيير الوظيفة؟", options: [
        { text: "Um mehr Verantwortung zu übernehmen", ar: "لتحمل مسؤولية أكبر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Weil das Gehalt zu hoch ist", ar: "لأن الراتب مرتفع جداً", correct: false, explanation: "لا — لم يُشكَ من ارتفاع الراتب Gehalt؛ والدافع «Ich möchte mehr Verantwortung übernehmen»." },
        { text: "Wegen des Wetters", ar: "بسبب الطقس", correct: false, explanation: "لا — لم يُذكر طقس Wetter؛ والسبب «mehr Verantwortung übernehmen und mich weiterentwickeln»." },
      ]},
      { de: "Welche Gehaltsvorstellung hat die Person?", ar: "ما توقع الشخص المالي؟", options: [
        { text: "3000 Euro im Monat", ar: "3000 يورو شهرياً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "300 Euro im Monat", ar: "300 يورو شهرياً", correct: false, explanation: "لا — الرقم «Meine Vorstellung liegt bei 3000 Euro brutto im Monat»." },
        { text: "30000 Euro im Monat", ar: "30000 يورو شهرياً", correct: false, explanation: "لا — لم يُذكر 30000؛ والتوقّع «3000 Euro brutto im Monat»." },
      ]},
    ],
    keyVocab: [
      { de: "die Erfahrung", ar: "الخبرة" },
      { de: "die Verantwortung übernehmen", ar: "تحمل المسؤولية" },
      { de: "sich weiterentwickeln", ar: "يتطور" },
      { de: "die Gehaltsvorstellung", ar: "التوقعات المالية" },
      { de: "angemessen", ar: "مناسب" },
    ],
  },
  {
    id: "b1-08-krankmeldung",
    level: "B1",
    title: "إبلاغ العمل بالمرض",
    titleDe: "Krankmeldung",
    emoji: "🤒",
    situation: "محاكاة افتراضية للتدرب على إبلاغ العمل بالمرض؛ الإجراءات قد تختلف حسب جهة العمل",
    turns: [
      { speaker: "السكرتيرة", role: "a", de: "Guten Morgen, Firma Schmidt. Was kann ich für Sie tun?", ar: "صباح الخير، شركة شميت. ماذا أفعل لك؟" },
      { speaker: "أنت", role: "b", de: "Guten Morgen! Ich bin heute krank und kann nicht zur Arbeit kommen.", ar: "صباح الخير! أنا مريض اليوم ولا أستطيع الحضور." },
      { speaker: "السكرتيرة", role: "a", de: "Oh, gute Besserung! Haben Sie einen Arzttermin?", ar: "أوه، الشفاء العاجل! هل لديك موعد طبيب؟" },
      { speaker: "أنت", role: "b", de: "Ja, ich gehe heute Nachmittag zum Arzt.", ar: "نعم، سأذهب للطبيب بعد الظهر." },
      { speaker: "السكرتيرة", role: "a", de: "Gut. Bitte melden Sie sich morgen noch einmal, falls Sie dann noch krank sind.", ar: "حسناً. يرجى الاتصال بنا غداً مجدداً إذا بقيت مريضاً." },
      { speaker: "أنت", role: "b", de: "Mache ich. Danke für Ihr Verständnis!", ar: "سأفعل. شكراً لتفهمك!" },
    ],
    questions: [
      { de: "Warum ruft die Person an?", ar: "لماذا يتصل الشخص؟", options: [
        { text: "Sie ist krank und kommt nicht zur Arbeit", ar: "هو مريض ولا يستطيع الحضور للعمل", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Sie möchte gern einen Urlaub buchen", ar: "تريد حجز إجازة", correct: false, explanation: "لا — لم يُطلب حجز إجازة Urlaub buchen؛ والسبب «Ich bin heute krank und kann nicht zur Arbeit kommen»." },
        { text: "Sie hat eine wichtige Frage zum Gehalt", ar: "لديها سؤال عن الراتب", correct: false, explanation: "لا — لم يُذكر راتب Gehalt؛ والاتصال للإبلاغ عن المرض («Ich bin heute krank»)." },
      ]},
      { de: "Wohin geht die Person am Nachmittag?", ar: "إلى أين يذهب الشخص بعد الظهر؟", options: [
        { text: "Zum Arzt", ar: "إلى الطبيب", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Ins Büro", ar: "إلى المكتب", correct: false, explanation: "لا — لا مكتب Büro اليوم؛ بل «ich gehe heute Nachmittag zum Arzt»." },
        { text: "Ins Kino", ar: "إلى السينما", correct: false, explanation: "لا — لم تُذكر سينما Kino؛ والموعد مع Arzt اليوم بعد الظهر." },
      ]},
      { de: "Was soll die Person morgen tun, falls sie noch krank ist?", ar: "ماذا ينبغي للشخص أن يفعل غداً إذا بقي مريضاً؟", options: [
        { text: "Sich noch einmal melden", ar: "الاتصال مجدداً", correct: true, explanation: "صحيح — طلبت السكرتيرة منها أن تبلغ الشركة مجدداً إذا بقيت مريضة." },
        { text: "Eine Krankmeldung auf Papier mitbringen", ar: "إحضار شهادة مرض ورقية", correct: false, explanation: "لا — لم يطلب الحوار إحضار شهادة أو مستند." },
        { text: "Den Laptop zur Arbeit bringen", ar: "إحضار الحاسوب المحمول إلى العمل", correct: false, explanation: "لا — لم يرد ذكر الحاسوب أو الحضور إلى العمل غداً." },
      ]},
    ],
    keyVocab: [
      { de: "krank sein", ar: "مريض" },
      { de: "die Krankmeldung", ar: "الإبلاغ عن المرض" },
      { de: "gute Besserung", ar: "الشفاء العاجل" },
      { de: "zur Arbeit kommen", ar: "الحضور للعمل" },
      { de: "das Verständnis", ar: "التفهم" },
    ],
  },
  {
    id: "b1-09-ticket-kaufen",
    level: "B1",
    title: "شراء تذاكر حفلة",
    titleDe: "Konzertkarten kaufen",
    emoji: "🎵",
    situation: "حوار تدريبي خيالي لشراء تذكرتين؛ الأسعار والخصم افتراضيان وليسا عرضاً حقيقياً.",
    audioNoteAr: "حوار تمثيلي؛ السعر وخصم الطلاب أرقام خيالية للتدريب، فتحقق من شروط الجهة المنظمة عند شراء تذكرة فعلية.",
    turns: [
      { speaker: "الموظفة", role: "a", de: "Guten Tag! Was möchten Sie bestellen?", ar: "طاب يومك! ماذا تريد أن تحجز؟" },
      { speaker: "أنت", role: "b", de: "Ich hätte gern zwei Karten für das Konzert am Freitag.", ar: "أود تذكرتين لحفلة يوم الجمعة." },
      { speaker: "الموظفة", role: "a", de: "Die Karten kosten 40 Euro pro Stück.", ar: "التذاكر تكلف 40 يورو للواحدة." },
      { speaker: "أنت", role: "b", de: "Okay, also 80 Euro insgesamt. Gibt es Studentenrabatt?", ar: "حسناً، إذن 80 إجمالاً. هل يوجد خصم طلاب؟" },
      { speaker: "الموظفة", role: "a", de: "Ja, mit Studentenausweis 30 Euro pro Karte.", ar: "نعم، ببطاقة الطالب 30 للواحدة." },
      { speaker: "أنت", role: "b", de: "Perfekt! Ich habe meinen Studentenausweis dabei.", ar: "ممتاز! معي بطاقة الطالب." },
    ],
    questions: [
      { de: "Wie viele Karten werden gekauft?", ar: "كم بطاقة تُشترى؟", options: [
        { text: "Zwei", ar: "اثنتان", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Drei", ar: "ثلاث", correct: false, explanation: "لا — العدد «Ich hätte gern zwei Karten für das Konzert am Freitag»." },
        { text: "Eine", ar: "واحدة", correct: false, explanation: "لا — ليست بطاقة واحدة؛ بل «zwei Karten für das Konzert»." },
      ]},
      { de: "Wie viel kostet eine Karte mit Studentenausweis?", ar: "كم تكلف البطاقة مع بطاقة الطالب؟", options: [
        { text: "30 Euro", ar: "30 يورو", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "40 Euro", ar: "40 يورو", correct: false, explanation: "لا — الأربعون السعر العادي «Die Karten kosten 40 Euro pro Stück»؛ ومع الخصم «mit Studentenausweis 30 Euro pro Karte»." },
        { text: "25 Euro", ar: "25 يورو", correct: false, explanation: "لا — لم يُذكر 25؛ وسعر الطالب «30 Euro pro Karte»." },
      ]},
      { de: "Was braucht man für den Studentenrabatt?", ar: "ماذا يحتاج المرء للحصول على خصم الطلاب؟", options: [
        { text: "Einen Studentenausweis", ar: "بطاقة طالب", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Eine gültige Kreditkarte", ar: "بطاقة ائتمان", correct: false, explanation: "لا — لم تُشترط بطاقة ائتمان Kreditkarte؛ والشرط «mit Studentenausweis»." },
        { text: "Einen Reisepass mit Foto", ar: "جواز سفر", correct: false, explanation: "لا — لم يُذكر جواز سفر Reisepass؛ والمطلوب Studentenausweis («Ich habe meinen Studentenausweis dabei»)." },
      ]},
    ],
    keyVocab: [
      { de: "die Konzertkarte", ar: "تذكرة الحفل" },
      { de: "pro Stück", ar: "للقطعة" },
      { de: "der Studentenrabatt", ar: "خصم الطلاب" },
      { de: "der Studentenausweis", ar: "بطاقة الطالب" },
      { de: "insgesamt", ar: "إجمالاً" },
    ],
  },
  {
    id: "b1-10-nachhilfe",
    level: "B1",
    title: "طلب مساعدة دراسية",
    titleDe: "Nachhilfe organisieren",
    emoji: "📚",
    situation: "حوار تدريبي خيالي للبحث عن مدرس خصوصي للرياضيات؛ سعر 25 يورو للساعة مثال افتراضي وليس سعراً مرجعياً.",
    turns: [
      { speaker: "أنت", role: "a", de: "Hallo! Ich suche Nachhilfe in Mathematik für meinen Sohn.", ar: "مرحباً! أبحث عن دروس خصوصية في الرياضيات لابني." },
      { speaker: "المدرسة", role: "b", de: "In welcher Klasse ist er?", ar: "في أي صف هو؟" },
      { speaker: "أنت", role: "a", de: "In der neunten Klasse. Er hat Probleme mit Algebra.", ar: "في الصف التاسع. عنده مشاكل في الجبر." },
      { speaker: "المدرسة", role: "b", de: "Wir haben einen Lehrer, der sich darauf spezialisiert hat.", ar: "عندنا معلم متخصص في هذا." },
      { speaker: "أنت", role: "a", de: "Wie viel kostet eine Stunde?", ar: "كم تكلف الساعة؟" },
      { speaker: "المدرسة", role: "b", de: "25 Euro pro Stunde. Soll ich einen Termin vereinbaren?", ar: "25 يورو للساعة. هل أحدد موعداً؟" },
    ],
    questions: [
      { de: "In welcher Klasse ist der Sohn?", ar: "في أي صف ابنه؟", options: [
        { text: "In der neunten Klasse", ar: "في الصف التاسع", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "In der fünften Klasse", ar: "في الصف الخامس", correct: false, explanation: "لا — الصف التاسع لا الخامس: «In der neunten Klasse»." },
        { text: "In der zwölften Klasse", ar: "في الصف الثاني عشر", correct: false, explanation: "لا — لم يُذكر الصف الثاني عشر zwölfte؛ والابن «In der neunten Klasse»." },
      ]},
      { de: "In welchem Fach braucht der Sohn Nachhilfe?", ar: "في أي مادة يحتاج ابنه المساعدة؟", options: [
        { text: "Mathematik", ar: "الرياضيات", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Deutsch", ar: "الألمانية", correct: false, explanation: "لا — ليست الألمانية Deutsch؛ بل «Ich suche Nachhilfe in Mathematik für meinen Sohn»." },
        { text: "Englisch", ar: "الإنجليزية", correct: false, explanation: "لا — لم تُذكر الإنجليزية Englisch؛ والمادة Mathematik (والمشكلة مع Algebra)." },
      ]},
      { de: "Wie viel kostet eine Stunde?", ar: "كم تكلف الساعة؟", options: [
        { text: "25 Euro", ar: "25 يورو", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "15 Euro", ar: "15 يورو", correct: false, explanation: "لا — السعر «25 Euro pro Stunde»." },
        { text: "50 Euro", ar: "50 يورو", correct: false, explanation: "لا — لم يُذكر 50؛ والساعة «25 Euro pro Stunde»." },
      ]},
    ],
    keyVocab: [
      { de: "die Nachhilfe", ar: "الدروس الخصوصية" },
      { de: "die Algebra", ar: "الجبر" },
      { de: "sich spezialisieren auf", ar: "يتخصص في" },
      { de: "pro Stunde", ar: "في الساعة" },
      { de: "einen Termin vereinbaren", ar: "تحديد موعد" },
    ],
  },
];
