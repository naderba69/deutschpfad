/**
 * b2 — الحوارات الخمسة الثانية — نقاش أكاديمي · مراجعة عقد عمل · التحضير لعرض تقديمي · مشكلة في عقد الإيجار · اجتماع دولي
 * فُصل من b2.ts في الدفعة 115 (سقف الحجم: لا ملف فوق 600 سطراً).
 * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../b2.ts يبسطها.
 */

import type { DailyDialogue } from "../types";

export const B2_DIALOGUES_2: DailyDialogue[] = [
  {
    id: "b2-06-akademisch",
    level: "B2",
    title: "نقاش أكاديمي",
    titleDe: "Akademische Diskussion",
    emoji: "🎓",
    situation: "تناقش في ندوة موضوع الذكاء الاصطناعي",
    turns: [
      { speaker: "الأستاذة", role: "a", de: "Was denken Sie über die Rolle der KI in der Bildung?", ar: "ما رأيك في دور الذكاء الاصطناعي في التعليم؟" },
      { speaker: "أنت", role: "b", de: "Meiner Ansicht nach bietet KI enorme Chancen, birgt aber auch Risiken.", ar: "في رأيي أن الذكاء الاصطناعي يقدم فرصاً هائلة لكنه يحمل مخاطر." },
      { speaker: "الأستاذة", role: "a", de: "Welche Risiken genau?", ar: "أي مخاطر تحديداً؟" },
      { speaker: "أنت", role: "b", de: "Beispielsweise die Abhängigkeit von Technologie und Datenschutzfragen.", ar: "مثلاً الاعتماد على التقنية وقضايا حماية البيانات." },
      { speaker: "الأستاذة", role: "a", de: "Das ist ein relevanter Punkt. Wie könnten wir die Risiken minimieren?", ar: "نقطة ذات صلة. كيف نقلل المخاطر؟" },
      { speaker: "أنت", role: "b", de: "Durch klare Richtlinien und Medienkompetenz in den Lehrplänen.", ar: "عبر سياسات واضحة وثقافة إعلامية في المناهج." },
    ],
    questions: [
      { de: "Welche Chancen bietet KI laut der Person?", ar: "ما الفرص التي يقدمها الذكاء الاصطناعي؟", options: [
        { text: "Enorme Chancen", ar: "فرص هائلة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Keine Chancen", ar: "لا فرص", correct: false, explanation: "لا — لم يُنفَ وجود فرص؛ بل «bietet KI enorme Chancen»." },
        { text: "Nur Kosten", ar: "تكاليف فقط", correct: false, explanation: "لا — لم تُذكر تكاليف Kosten؛ والرأي «bietet KI enorme Chancen, birgt aber auch Risiken»." },
      ]},
      { de: "Welche Risiken werden genannt?", ar: "ما المخاطر المذكورة؟", options: [
        { text: "Abhängigkeit von Technologie und Datenschutzfragen", ar: "الاعتماد على التقنية وقضايا حماية البيانات", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Höhere Steuern und Mieten in den Städten", ar: "ارتفاع الضرائب والإيجارات", correct: false, explanation: "لا — لم تُذكر ضرائب Steuern ولا إيجارات؛ والمخاطر «die Abhängigkeit von Technologie und Datenschutzfragen»." },
        { text: "Lange Reisen ins Ausland mit dem Flugzeug", ar: "رحلات طويلة", correct: false, explanation: "لا — لم تُذكر رحلات Flugzeug؛ والمذكور Abhängigkeit von Technologie وDatenschutzfragen." },
      ]},
      { de: "Wie kann man die Risiken verringern?", ar: "كيف يمكن تقليل المخاطر؟", options: [
        { text: "Mit klaren Richtlinien und Medienkompetenz im Lehrplan", ar: "بسياسات واضحة وثقافة إعلامية في المناهج", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Indem man alle Schulen für immer schließt", ar: "بإغلاق المدارس", correct: false, explanation: "لا — لم يُقترح إغلاق مدارس Schulen؛ والعلاج «klare Richtlinien und Medienkompetenz in den Lehrplänen»." },
        { text: "Indem man das Internet komplett abschaltet", ar: "بقطع الإنترنت", correct: false, explanation: "لا — لم يُقترح قطع الإنترنت Internet؛ بل «Durch klare Richtlinien und Medienkompetenz»." },
      ]},
    ],
    keyVocab: [
      { de: "Meiner Ansicht nach", ar: "في رأيي" },
      { de: "enorme Chancen", ar: "فرص هائلة" },
      { de: "die Abhängigkeit", ar: "الاعتماد" },
      { de: "der Datenschutz", ar: "حماية البيانات" },
      { de: "die Richtlinien", ar: "السياسات" },
    ],
  },
  {
    id: "b2-07-bewerbung-vertrag",
    level: "B2",
    title: "مراجعة عقد عمل",
    titleDe: "Arbeitsvertrag prüfen",
    emoji: "📄",
    situation: "تستشير زميلاً حول بنود عقد عمل جديد",
    turns: [
      { speaker: "الصديق", role: "a", de: "Wie läuft die neue Stelle? Hast du den Vertrag unterschrieben?", ar: "كيف الوظيفة الجديدة؟ هل وقعت العقد؟" },
      { speaker: "أنت", role: "b", de: "Noch nicht. Ich möchte die Bedingungen genau prüfen.", ar: "ليس بعد. أريد فحص الشروط بدقة." },
      { speaker: "الصديق", role: "a", de: "Was steht denn drin?", ar: "ماذا يوجد فيه؟" },
      { speaker: "أنت", role: "b", de: "Sechs Monate Probezeit und eine Kündigungsfrist von drei Monaten.", ar: "فترة تجربة ستة أشهر ومهلة إنهاء ثلاثة أشهر." },
      { speaker: "الصديق", role: "a", de: "Die Probezeit ist üblich. Aber die Kündigungsfrist ist lang.", ar: "فترة التجربة معتادة. لكن مهلة الإنهاء طويلة." },
      { speaker: "أنت", role: "b", de: "Genau. Vielleicht sollte ich verhandeln oder einen Anwalt konsultieren.", ar: "بالضبط. ربما يجب التفاوض أو استشارة محامٍ." },
    ],
    questions: [
      { de: "Hat die Person den Vertrag unterschrieben?", ar: "هل وقّع الشخص العقد؟", options: [
        { text: "Noch nicht", ar: "ليس بعد", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Ja, gestern", ar: "نعم، أمس", correct: false, explanation: "لا — لم يُوقَّع أمس؛ والجواب «Noch nicht»." },
        { text: "Ja, vor einem Monat", ar: "نعم، قبل شهر", correct: false, explanation: "لا — لم يُذكر شهر Monat؛ والتوقيع لم يحدث: «Noch nicht. Ich möchte die Bedingungen genau prüfen»." },
      ]},
      { de: "Wie lange ist die Probezeit?", ar: "كم مدة فترة التجربة؟", options: [
        { text: "Sechs Monate", ar: "ستة أشهر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Drei Monate", ar: "ثلاثة أشهر", correct: false, explanation: "لا — الثلاثة أشهر مهلةُ الإنهاء لا التجربة: «Sechs Monate Probezeit und eine Kündigungsfrist von drei Monaten»." },
        { text: "Ein Jahr", ar: "سنة", correct: false, explanation: "لا — لم تُذكر سنة Jahr؛ والتجربة «Sechs Monate Probezeit»." },
      ]},
      { de: "Was wird als lang empfunden?", ar: "ما الذي يُعتبر طويلاً؟", options: [
        { text: "Die Kündigungsfrist von drei Monaten", ar: "مهلة الإنهاء وهي ثلاثة أشهر", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Die Probezeit von sechs Monaten", ar: "فترة التجربة", correct: false, explanation: "لا — التجربة اعتُبرت معتادة: «Die Probezeit ist üblich»؛ والطويل «die Kündigungsfrist ist lang»." },
        { text: "Das Gehalt im ersten Jahr", ar: "الراتب", correct: false, explanation: "لا — لم يُذكر راتب Gehalt؛ والملاحظة على Kündigungsfrist («Aber die Kündigungsfrist ist lang»)." },
      ]},
    ],
    keyVocab: [
      { de: "der Arbeitsvertrag", ar: "عقد العمل" },
      { de: "die Probezeit", ar: "فترة التجربة" },
      { de: "die Kündigungsfrist", ar: "مهلة الإنهاء" },
      { de: "verhandeln", ar: "يتفاوض" },
      { de: "konsultieren", ar: "يستشير" },
    ],
  },
  {
    id: "b2-08-praesentation",
    level: "B2",
    title: "التحضير لعرض تقديمي",
    titleDe: "Präsentation vorbereiten",
    emoji: "📊",
    situation: "تستعد مع زميلة لعرض أمام المديرية",
    turns: [
      { speaker: "الزميلة", role: "a", de: "Sind wir bereit für die Präsentation morgen?", ar: "هل نحن جاهزان للعرض غداً؟" },
      { speaker: "أنت", role: "b", de: "Fast. Ich habe die Folien fertig, aber ich bin beim Zeitplan unsicher.", ar: "تقريباً. أنهيت الشرائح لكني غير متأكد من خطة الوقت." },
      { speaker: "الزميلة", role: "a", de: "Wir haben 20 Minuten. Wir sollten die Einleitung kürzen.", ar: "لدينا 20 دقيقة. يجب تقصير المقدمة." },
      { speaker: "أنت", role: "b", de: "Guter Vorschlag. Und wir müssen die wichtigsten Ergebnisse betonen.", ar: "اقتراح جيد. ويجب التركيز على أهم النتائج." },
      { speaker: "الزميلة", role: "a", de: "Einverstanden. Sollen wir einmal proben?", ar: "موافقة. هل نتدرب مرة؟" },
      { speaker: "أنت", role: "b", de: "Unbedingt. Proben wir jetzt, dann sind wir morgen sicher.", ar: "بالتأكيد. لنتدرب الآن لنكون واثقين غداً." },
    ],
    questions: [
      { de: "Wann ist die Präsentation?", ar: "متى العرض؟", options: [
        { text: "Morgen", ar: "غداً", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Heute", ar: "اليوم", correct: false, explanation: "لا — ليس اليوم؛ بل «die Präsentation morgen»." },
        { text: "Nächste Woche", ar: "الأسبوع القادم", correct: false, explanation: "لا — لم يُذكر أسبوعٌ قادم Woche؛ والموعد «Sind wir bereit für die Präsentation morgen?»." },
      ]},
      { de: "Wie lange dauert die Präsentation?", ar: "كم تستغرق مدة العرض؟", options: [
        { text: "20 Minuten", ar: "20 دقيقة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "10 Minuten", ar: "10 دقائق", correct: false, explanation: "لا — ليست عشر دقائق؛ بل «Wir haben 20 Minuten»." },
        { text: "45 Minuten", ar: "45 دقيقة", correct: false, explanation: "لا — لم تُذكر 45 دقيقة؛ والمدة «20 Minuten»." },
      ]},
      { de: "Was soll man kürzen?", ar: "ماذا يجب تقصيره؟", options: [
        { text: "Die Einleitung", ar: "المقدمة", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Die Ergebnisse", ar: "النتائج", correct: false, explanation: "لا — النتائج تُبرز لا تُقصّر: «wir müssen die wichtigsten Ergebnisse betonen»؛ والتقصير للمقدمة." },
        { text: "Die Tests", ar: "الاختبارات", correct: false, explanation: "لا — لم تُذكر اختبارات Tests؛ والمطلوب تقصيره «die Einleitung kürzen»." },
      ]},
    ],
    keyVocab: [
      { de: "die Präsentation", ar: "العرض التقديمي" },
      { de: "die Folien", ar: "الشرائح" },
      { de: "der Zeitplan", ar: "خطة الوقت" },
      { de: "die Einleitung", ar: "المقدمة" },
      { de: "proben", ar: "يتدرب" },
    ],
  },
  {
    id: "b2-09-wohnungsvertrag",
    level: "B2",
    title: "مشكلة في عقد الإيجار",
    titleDe: "Mietvertrag-Problem",
    emoji: "🏠",
    situation: "تناقش مشكلة تدفئة مع المالك",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich muss mit Ihnen über die Heizung sprechen. Sie funktioniert seit zwei Wochen nicht.", ar: "طاب يومك! يجب التحدث عن التدفئة. لا تعمل منذ أسبوعين." },
      { speaker: "المالك", role: "b", de: "Das ist ärgerlich. Haben Sie den Handwerker angerufen?", ar: "هذا مزعج. هل اتصلت بالسباك؟" },
      { speaker: "أنت", role: "a", de: "Ja, aber er sagt, es braucht ein neues Teil und das dauert.", ar: "نعم، لكنه يقول إنه يحتاج قطعة جديدة ويستغرق ذلك وقتاً." },
      { speaker: "المالك", role: "b", de: "Ich werde mich darum kümmern. Können Sie bis nächste Woche warten?", ar: "سأتولى الأمر. هل تستطيع الانتظار حتى الأسبوع القادم؟" },
      { speaker: "أنت", role: "a", de: "Das ist zu lang. Ich verlange eine schnelle Lösung oder eine Mietminderung.", ar: "هذا طويل. أطالب بحل سريع أو تخفيض الإيجار." },
      { speaker: "المالك", role: "b", de: "Ich verstehe. Ich verspreche, dass der Handwerker übermorgen kommt.", ar: "أفهم. أعدك أن السباك سيأتي بعد غد." },
    ],
    questions: [
      { de: "Seit wann funktioniert die Heizung nicht?", ar: "منذ متى لا تعمل التدفئة؟", options: [
        { text: "Seit zwei Wochen", ar: "منذ أسبوعين", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Seit einem Tag", ar: "منذ يوم", correct: false, explanation: "لا — ليس يوماً واحداً؛ بل «seit zwei Wochen nicht»." },
        { text: "Seit einem Monat", ar: "منذ شهر", correct: false, explanation: "لا — لم يُذكر شهر Monat؛ والعطل «seit zwei Wochen»." },
      ]},
      { de: "Was verlangt der Mieter?", ar: "ماذا يطالب المستأجر؟", options: [
        { text: "Eine schnelle Lösung oder eine Mietminderung", ar: "حل سريع أو تخفيض الإيجار", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Einen Umzug in eine andere Stadt", ar: "الانتقال إلى مكان آخر", correct: false, explanation: "لا — لم يُذكر انتقال Stadt؛ والمطلب «Ich verlange eine schnelle Lösung oder eine Mietminderung»." },
        { text: "Eine Kündigung des Vertrags ohne Frist", ar: "إنهاء العقد", correct: false, explanation: "لا — لم يُطلب إنهاء عقد Kündigung؛ بل حلٌّ سريع أو Mietminderung." },
      ]},
      { de: "Wann soll der Handwerker kommen?", ar: "متى يجب أن يأتي الحرفي؟", options: [
        { text: "Übermorgen", ar: "بعد غد", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Heute", ar: "اليوم", correct: false, explanation: "لا — ليس اليوم؛ والوعد «dass der Handwerker übermorgen kommt»." },
        { text: "Nächste Woche", ar: "الأسبوع القادم", correct: false, explanation: "لا — الأسبوع القادم رفضه المستأجر «Das ist zu lang»؛ والموعد «übermorgen»." },
      ]},
    ],
    keyVocab: [
      { de: "die Heizung", ar: "التدفئة" },
      { de: "der Handwerker", ar: "السباك/الحرفي" },
      { de: "die Mietminderung", ar: "تخفيض الإيجار" },
      { de: "verlangen", ar: "يطالب" },
      { de: "versprechen", ar: "يعد" },
    ],
  },
  {
    id: "b2-10-international",
    level: "B2",
    title: "اجتماع دولي",
    titleDe: "Internationales Meeting",
    emoji: "🌐",
    situation: "في اجتماع عبر الفيديو مع شركاء دوليين",
    turns: [
      { speaker: "المديرة", role: "a", de: "Willkommen alle! Zunächst möchte ich die neue Kollegin aus Tunesien vorstellen.", ar: "مرحباً بالجميع! أريد أولاً تقديم الزميلة الجديدة من تونس." },
      { speaker: "أنت", role: "b", de: "Vielen Dank. Ich freue mich sehr auf die Zusammenarbeit mit dem internationalen Team.", ar: "شكراً جزيلاً. يسعدني جداً التعاون مع الفريق الدولي." },
      { speaker: "المديرة", role: "a", de: "Können Sie uns etwas über Ihren Hintergrund erzählen?", ar: "هل تستطيع إخبارنا عن خلفيتك؟" },
      { speaker: "أنت", role: "b", de: "Gerne. Ich habe fünf Jahre im Exportbereich gearbeitet und bin mit mehreren Kulturen vertraut.", ar: "بكل سرور. عملت خمس سنوات في قطاع التصدير وأنا ملم بثقافات متعددة." },
      { speaker: "المديرة", role: "a", de: "Ausgezeichnet. Das wird uns bei der Expansion helfen.", ar: "ممتاز. سيساعدنا هذا في التوسع." },
      { speaker: "أنت", role: "b", de: "Ich bin überzeugt, dass wir viel erreichen können.", ar: "أنا واثق أننا نستطيع تحقيق الكثير." },
    ],
    questions: [
      { de: "Woher kommt die neue Kollegin?", ar: "من أين تأتي الزميلة الجديدة؟", options: [
        { text: "Aus Tunesien", ar: "من تونس", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Aus Marokko", ar: "من المغرب", correct: false, explanation: "لا — لم يُذكر المغرب Marokko؛ والتعريف «die neue Kollegin aus Tunesien»." },
        { text: "Aus Ägypten", ar: "من مصر", correct: false, explanation: "لا — لم تُذكر مصر Ägypten؛ والزميلة «die neue Kollegin aus Tunesien vorstellen»." },
      ]},
      { de: "Wie lange hat sie im Exportbereich gearbeitet?", ar: "كم سنة عملت في قطاع التصدير؟", options: [
        { text: "Fünf Jahre", ar: "خمس سنوات", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Drei Jahre", ar: "ثلاث سنوات", correct: false, explanation: "لا — ليست ثلاث سنوات؛ بل «Ich habe fünf Jahre im Exportbereich gearbeitet»." },
        { text: "Zehn Jahre", ar: "عشر سنوات", correct: false, explanation: "لا — لم تُذكر عشر Jahre؛ والخبرة «fünf Jahre im Exportbereich»." },
      ]},
      { de: "Wobei wird ihre Erfahrung laut Team helfen?", ar: "في أي أمر ستساعد خبرتها الفريق حسب الحوار؟", options: [
        { text: "Bei der Expansion", ar: "في التوسع", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Bei der Buchhaltung", ar: "في المحاسبة", correct: false, explanation: "لا — لم تُذكر محاسبة Buchhaltung؛ والفائدة «bei der Expansion helfen»." },
        { text: "Bei der Reinigung", ar: "في التنظيف", correct: false, explanation: "لا — لم يُذكر تنظيف Reinigung؛ والمجال Expansion («Das wird uns bei der Expansion helfen»)." },
      ]},
    ],
    keyVocab: [
      { de: "die Zusammenarbeit", ar: "التعاون" },
      { de: "der Hintergrund", ar: "الخلفية" },
      { de: "der Exportbereich", ar: "قطاع التصدير" },
      { de: "vertraut sein mit", ar: "ملم بـ" },
      { de: "die Expansion", ar: "التوسع" },
    ],
  },
];
