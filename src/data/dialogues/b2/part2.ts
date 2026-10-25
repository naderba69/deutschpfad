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
    situation: "حوار تمثيلي في ندوة تدريبية عن الذكاء الاصطناعي؛ الآراء الواردة ليست نتائج بحث أو توصية",
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
    situation: "محاكاة تدريبية خيالية لمراجعة مسودة عقد عمل؛ الشروط والأرقام ليست قواعد عامة أو استشارة قانونية.",
    audioNoteAr: "ملفات MP3 لهذا الحوار موجودة، لكن مصدرها غير موثق؛ لا أجزم بأنها بشرية أو مولّدة، ولم تُتحقق مطابقتها للنص أو جودة النطق. شروط العقد في الحوار افتراضية وليست معياراً قانونياً.",
    turns: [
      { speaker: "الصديق", role: "a", de: "Wie läuft die neue Stelle? Hast du den Vertrag unterschrieben?", ar: "كيف الوظيفة الجديدة؟ هل وقعت العقد؟" },
      { speaker: "أنت", role: "b", de: "Noch nicht. Ich möchte die Bedingungen genau prüfen.", ar: "ليس بعد. أريد فحص الشروط بدقة." },
      { speaker: "الصديق", role: "a", de: "Was steht denn drin?", ar: "ماذا يوجد فيه؟" },
      { speaker: "أنت", role: "b", de: "Im Vertragsentwurf stehen sechs Monate Probezeit und eine Kündigungsfrist von drei Monaten.", ar: "ترد في مسودة العقد فترة تجربة ستة أشهر ومهلة إنهاء ثلاثة أشهر." },
      { speaker: "الصديق", role: "a", de: "Die Kündigungsfrist von drei Monaten kommt mir lang vor. Ob sie im konkreten Fall gilt, sollte man prüfen.", ar: "تبدو لي مهلة الإنهاء البالغة ثلاثة أشهر طويلة. وينبغي التحقق من انطباقها في الحالة المحددة." },
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
        { text: "Drei Monate", ar: "ثلاثة أشهر", correct: false, explanation: "لا — الثلاثة أشهر مهلةُ الإنهاء لا التجربة: «Im Vertragsentwurf stehen sechs Monate Probezeit und eine Kündigungsfrist von drei Monaten»." },
        { text: "Ein Jahr", ar: "سنة", correct: false, explanation: "لا — لم تُذكر سنة Jahr؛ والتجربة «sechs Monate Probezeit»." },
      ]},
      { de: "Was empfindet die Person als lang?", ar: "ما الذي تراه الشخصية طويلاً؟", options: [
        { text: "Die Kündigungsfrist von drei Monaten", ar: "مهلة الإنهاء وهي ثلاثة أشهر", correct: true, explanation: "صحيح — المتحدث يقول إنها تبدو له طويلة؛ هذا انطباع الشخصية لا قاعدة عامة." },
        { text: "Die Probezeit von sechs Monaten", ar: "فترة التجربة", correct: false, explanation: "لا — المتحدث لا يصف «sechs Monate Probezeit» بأنها معتادة؛ بل يقول «Die Kündigungsfrist von drei Monaten kommt mir lang vor» عن المسودة." },
        { text: "Das Gehalt im ersten Jahr", ar: "الراتب", correct: false, explanation: "لا — لم يُذكر راتب Gehalt؛ والملاحظة على Kündigungsfrist («Die Kündigungsfrist von drei Monaten kommt mir lang vor»)." },
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
    situation: "محاكاة تدريبية خيالية للتحضير لعرض أمام المديرية.",
    audioNoteAr: "ملفات MP3 لهذا الحوار موجودة، لكن مصدرها غير موثق؛ لا أجزم بأنها بشرية أو مولّدة، ولم تُتحقق مطابقتها للنص أو جودة النطق. الحوار محاكاة افتراضية.",
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
    situation: "محاكاة خيالية لعطل تدفئة؛ لا يحدد الحوار وحده استحقاق تخفيض الإيجار أو أي حق قانوني.",
    audioNoteAr: "ملفات MP3 لهذا الحوار موجودة، لكن مصدرها غير موثق؛ لا أجزم بأنها بشرية أو مولّدة، ولم تُتحقق مطابقتها للنص أو جودة النطق. السيناريو افتراضي وليس استشارة قانونية.",
    turns: [
      { speaker: "أنت", role: "a", de: "Guten Tag! Ich muss mit Ihnen über die Heizung sprechen. Sie funktioniert seit zwei Wochen nicht.", ar: "طاب يومك! يجب التحدث عن التدفئة. لا تعمل منذ أسبوعين." },
      { speaker: "المالك", role: "b", de: "Das ist ärgerlich. Haben Sie den Handwerker angerufen?", ar: "هذا مزعج. هل اتصلت بالسباك؟" },
      { speaker: "أنت", role: "a", de: "Ja, aber er sagt, dass ein neues Teil nötig ist und die Reparatur deshalb länger dauert.", ar: "نعم، لكنه يقول إنه يحتاج قطعة جديدة ويستغرق ذلك وقتاً." },
      { speaker: "المالك", role: "b", de: "Ich werde mich darum kümmern. Können Sie bis nächste Woche warten?", ar: "سأتولى الأمر. هل تستطيع الانتظار حتى الأسبوع القادم؟" },
      { speaker: "أنت", role: "a", de: "Das ist mir zu lang. Ich bitte um eine schnelle Reparatur. Ob eine Mietminderung in Betracht kommt, möchte ich für meinen Fall prüfen lassen.", ar: "هذا طويل بالنسبة إليّ. أطلب إصلاحاً سريعاً، وأريد التحقق مما إذا كان تخفيض الإيجار ينطبق على حالتي." },
      { speaker: "المالك", role: "b", de: "Ich verstehe. Ich verspreche, dass der Handwerker übermorgen kommt.", ar: "أفهم. أعدك أن السباك سيأتي بعد غد." },
    ],
    questions: [
      { de: "Seit wann funktioniert die Heizung nicht?", ar: "منذ متى لا تعمل التدفئة؟", options: [
        { text: "Seit zwei Wochen", ar: "منذ أسبوعين", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Seit einem Tag", ar: "منذ يوم", correct: false, explanation: "لا — ليس يوماً واحداً؛ بل «seit zwei Wochen nicht»." },
        { text: "Seit einem Monat", ar: "منذ شهر", correct: false, explanation: "لا — لم يُذكر شهر Monat؛ والعطل «seit zwei Wochen»." },
      ]},
      { de: "Was verlangt der Mieter?", ar: "ماذا يطالب المستأجر؟", options: [
        { text: "Schnelle Reparatur und Prüfung einer Mietminderung im Einzelfall", ar: "إصلاح سريع والتحقق من احتمال تخفيض الإيجار في حالته", correct: true, explanation: "صحيح — يطلب إصلاحاً سريعاً ويريد التحقق من انطباق تخفيض الإيجار على حالته." },
        { text: "Den Mietvertrag kündigen und in eine andere Stadt umziehen", ar: "إنهاء عقد الإيجار والانتقال إلى مدينة أخرى", correct: false, explanation: "لا — لم يُذكر انتقال Stadt؛ والمطلب «Ich bitte um eine schnelle Reparatur. Ob eine Mietminderung in Betracht kommt, möchte ich für meinen Fall prüfen lassen»." },
        { text: "Den Vertrag fristlos kündigen und sofort aus der Wohnung ausziehen", ar: "إنهاء العقد فوراً ومغادرة الشقة", correct: false, explanation: "لا — لم يُطلب إنهاء العقد؛ بل إصلاح سريع والتحقق من احتمال Mietminderung." },
      ]},
      { de: "Wann soll der Handwerker kommen?", ar: "متى يجب أن يأتي الحرفي؟", options: [
        { text: "Übermorgen", ar: "بعد غد", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Heute", ar: "اليوم", correct: false, explanation: "لا — ليس اليوم؛ والوعد «dass der Handwerker übermorgen kommt»." },
        { text: "Nächste Woche", ar: "الأسبوع القادم", correct: false, explanation: "لا — الأسبوع القادم رفضه المستأجر «Das ist mir zu lang»؛ والموعد «übermorgen»." },
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
    situation: "محاكاة خيالية لاجتماع عبر الفيديو مع فريق دولي.",
    turns: [
      { speaker: "المديرة", role: "a", de: "Willkommen im Team. Ich möchte unsere neue Kollegin vorstellen.", ar: "مرحباً بك في الفريق. أود أن أقدم زميلتنا الجديدة." },
      { speaker: "أنت", role: "b", de: "Vielen Dank. Ich freue mich auf die Zusammenarbeit mit dem Team.", ar: "شكراً جزيلاً. يسعدني التعاون مع الفريق." },
      { speaker: "المديرة", role: "a", de: "Können Sie uns etwas über Ihre Erfahrung im Export erzählen?", ar: "هل تخبريننا شيئاً عن خبرتك في التصدير؟" },
      { speaker: "أنت", role: "b", de: "Gerne. Ich habe fünf Jahre im Exportbereich gearbeitet und an Markteintritten in mehreren Ländern mitgewirkt.", ar: "بكل سرور. عملت خمس سنوات في قطاع التصدير وأسهمت في دخول أسواق عدة بلدان." },
      { speaker: "المديرة", role: "a", de: "Das passt zu unserem geplanten Markteintritt. Vielen Dank für den Einblick.", ar: "هذا مناسب لدخولنا المخطط إلى السوق. شكراً على هذه المعلومات." },
      { speaker: "أنت", role: "b", de: "Gern. Ich bin gespannt auf die nächsten Schritte.", ar: "بكل سرور. أتطلع إلى الخطوات التالية." },
    ],
    questions: [
      { de: "In welchem Bereich hat die Kollegin gearbeitet?", ar: "في أي مجال عملت الزميلة؟", options: [
        { text: "Im Exportbereich", ar: "في قطاع التصدير", correct: true, explanation: "صحيح — تذكر الزميلة أنها عملت خمس سنوات في قطاع التصدير." },
        { text: "Im Rechnungswesen", ar: "في المحاسبة والتخطيط المالي", correct: false, explanation: "لا — لم يرد ذكر المحاسبة؛ بل قطاع التصدير." },
        { text: "Im Personalwesen", ar: "في الموارد البشرية والتوظيف الدولي", correct: false, explanation: "لا — لم يرد ذكر الموارد البشرية؛ بل قطاع التصدير." },
      ]},
      { de: "Wie lange hat sie im Exportbereich gearbeitet?", ar: "كم سنة عملت في قطاع التصدير؟", options: [
        { text: "Fünf Jahre", ar: "خمس سنوات", correct: true, explanation: "صحيح — هذا ما يذكره الحوار." },
        { text: "Drei Jahre", ar: "ثلاث سنوات", correct: false, explanation: "لا — ليست ثلاث سنوات؛ بل «Ich habe fünf Jahre im Exportbereich gearbeitet»." },
        { text: "Zehn Jahre", ar: "عشر سنوات", correct: false, explanation: "لا — لم تُذكر عشر Jahre؛ والخبرة «fünf Jahre im Exportbereich»." },
      ]},
      { de: "Wozu passt ihre Erfahrung laut der Teamleiterin?", ar: "بمَ تتناسب خبرتها حسب مديرة الفريق؟", options: [
        { text: "Zur Vorbereitung des geplanten Eintritts in einen internationalen Markt", ar: "للتحضير لدخول سوق دولية مخططة", correct: true, explanation: "صحيح — تقول المديرة إن خبرتها تناسب دخول السوق المخطط للفريق." },
        { text: "Zu den Aufgaben der internationalen Buchhaltung und Finanzplanung", ar: "لمهام المحاسبة الدولية والتخطيط المالي", correct: false, explanation: "لا — لم يرد ذكر المحاسبة؛ بل دخول السوق المخطط." },
        { text: "Zu den Aufgaben der Gebäudereinigung im internationalen Büro", ar: "لمهام تنظيف المبنى في المكتب الدولي", correct: false, explanation: "لا — لم يرد ذكر التنظيف؛ بل دخول السوق المخطط." },
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
