/**
 * ═══════════════════════════════════════════════════════════
 *  بيانات محاكاة Goethe-Zertifikat B2 الكاملة (الدفعة 119)
 *  — بنكا القراءة والاستماع اللذان كانا مضمّنين في مكوّن المحاكاة —
 *
 *  أُخرجا إلى هنا ليحمل كل سؤالٍ `whyAr` شاهدَه الألماني (قياس
 *  الدفعة 118: صفرَ شاهدٍ في المحاكاة بينما ٤١٤ شاهداً في المحركين)،
 *  وليحرسها `src/data/exams/evidence.test.ts` (أرضية 432)، ولينال
 *  المتعلّم مراجعةَ الأدلة في شاشة النتيجة (ExamReviewList).
 *
 *  كل الأسئلة مكتوبةٌ بالإجابة الصحيحة في الموضع 0 — ويخلطها
 *  `shuffleChoiceItems` مع إعادة ترقيم `correct` في كل جلسة؛
 *  و`whyAr` سؤاليّ لا يتأثر بالخلط.
 * ═══════════════════════════════════════════════════════════
 */

/** سؤال اختيار من متعدد — `whyAr` شاهدٌ ألماني إلزامي لكل جواب */
export interface B2SimQuestion {
  id: string;
  q: string;
  qAr: string;
  options: string[];
  correct: number;
  whyAr: string;
}

export interface B2SimReadingTask {
  id: string;
  title: string;
  text: string;
  textAr: string;
  questions: B2SimQuestion[];
}

export interface B2SimListeningTask {
  id: string;
  title: string;
  lines: { speaker: string; de: string; ar: string }[];
  questions: B2SimQuestion[];
}

/** بنك القراءة B2 (نماذج تدريبية بأسلوب Goethe) — 5 نصوص × سؤالان */
export const READING: B2SimReadingTask[] = [
  {
    id: "r1",
    title: "Arbeitszeit und Flexibilität",
    text: "Immer mehr Unternehmen bieten flexible Arbeitszeiten an. Während ältere Arbeitnehmer feste Zeiten bevorzugen, schätzen jüngere Kollegen die Freiheit. Allerdings zeigt eine Studie, dass die Produktivität sinkt, wenn es keine festen Kernzeiten gibt. Experten empfehlen daher eine Mischung aus Flexibilität und verbindlichen Besprechungen.",
    textAr: "المزيد من الشركات تقدم ساعات عمل مرنة. بينما يفضل الموظفون الأكبر سناً الأوقات الثابتة، يقدر الزملاء الأصغر الحرية. لكن دراسة تظهر أن الإنتاجية تنخفض عندما لا توجد أوقات أساسية ثابتة. لذلك يوصي الخبراء بمزيج من المرونة والاجتماعات الملزمة.",
    questions: [
      { id: "r1-q1", q: "Was empfehlen Experten?", qAr: "ماذا يوصي الخبراء؟", options: ["Eine Mischung aus Flexibilität und festen Zeiten", "Nur feste Arbeitszeiten", "Nur flexible Zeiten"], correct: 0, whyAr: "النص: Experten empfehlen daher eine Mischung aus Flexibilität und verbindlichen Besprechungen — الخبراء يوصون بمزيج من المرونة والاجتماعات الملزمة." },
      { id: "r1-q2", q: "Wer bevorzugt feste Zeiten?", qAr: "من يفضل الأوقات الثابتة؟", options: ["Ältere Arbeitnehmer", "Jüngere Kollegen", "Alle Mitarbeiter"], correct: 0, whyAr: "النص: Während ältere Arbeitnehmer feste Zeiten bevorzugen — كبار السن هم من يفضل الأوقات الثابتة لا الأصغر سناً." },
    ],
  },
  {
    id: "r2",
    title: "Digitalisierung im Alltag",
    text: "Die Digitalisierung hat den Alltag grundlegend verändert. Einerseits erleichtern Online-Dienste viele Aufgaben, andererseits steigt die Sorge um den Datenschutz. Besonders ältere Menschen fühlen sich oft überfordert. Politiker fordern daher mehr digitale Bildung und klare Regeln für den Umgang mit persönlichen Daten.",
    textAr: "الرقمنة غيرت الحياة اليومية جذرياً. من ناحية تسهل الخدمات عبر الإنترنت مهاماً كثيرة، ومن ناحية أخرى تزداد المخاوف بشأن حماية البيانات. خصوصاً كبار السن يشعرون أحياناً بالإرباك. لذلك يطالب السياسيون بمزيد من التعليم الرقمي وقواعد واضحة للتعامل مع البيانات الشخصية.",
    questions: [
      { id: "r2-q1", q: "Was fordern Politiker?", qAr: "ماذا يطالب السياسيون؟", options: ["Mehr digitale Bildung und klare Regeln", "Ein Verbot von Online-Diensten", "Mehr Daten sammeln"], correct: 0, whyAr: "النص: Politiker fordern daher mehr digitale Bildung und klare Regeln für den Umgang mit persönlichen Daten." },
      { id: "r2-q2", q: "Wer fühlt sich oft überfordert?", qAr: "من يشعر غالباً بالإرباك؟", options: ["Ältere Menschen", "Kinder", "Politiker"], correct: 0, whyAr: "النص: Besonders ältere Menschen fühlen sich oft überfordert — الاستثناء «besonders» يخصّ كبار السن." },
    ],
  },
  {
    id: "r3",
    title: "Umweltschutz im Alltag",
    text: "Umweltbewusstes Handeln beginnt im Alltag: weniger Plastik, mehr öffentliche Verkehrsmittel, regionale Produkte kaufen. Viele Menschen glauben jedoch, dass ihr persönlicher Beitrag keine Wirkung hat. Umweltorganisationen betonen dagegen, dass kollektives Handeln erst durch viele kleine Beiträge entsteht.",
    textAr: "السلوك البيئي يبدأ في الحياة اليومية: بلاستيك أقل، وسائل نقل عام أكثر، شراء منتجات محلية. لكن كثيرين يعتقدون أن مساهمتهم الشخصية بلا تأثير. تؤكد المنظمات البيئية أن العمل الجماعي ينشأ أولاً من مساهمات صغيرة كثيرة.",
    questions: [
      { id: "r3-q1", q: "Was glauben viele Menschen?", qAr: "ماذا يعتقد كثيرون؟", options: ["Ihr Beitrag hat keine Wirkung", "Ihr Beitrag ist sehr wichtig", "Umweltschutz ist teuer"], correct: 0, whyAr: "النص: Viele Menschen glauben jedoch, dass ihr persönlicher Beitrag keine Wirkung hat." },
      { id: "r3-q2", q: "Was betonen Umweltorganisationen?", qAr: "ماذا تؤكد المنظمات البيئية؟", options: ["Kollektives Handeln entsteht durch kleine Beiträge", "Man kann nichts tun", "Nur große Firmen helfen"], correct: 0, whyAr: "النص: kollektives Handeln erst durch viele kleine Beiträge entsteht — عكس ما يعتقده كثيرون." },
    ],
  },
  {
    id: "r4",
    title: "Sprachen lernen im digitalen Zeitalter",
    text: "Dank Apps und Online-Kursen ist Sprachenlernen heute einfacher als je zuvor. Trotzdem zeigen Studien, dass Lerner ohne echte Gespräche mit Muttersprachlern langsamer Fortschritte machen. Die Kombination aus digitalen Übungen und realer Kommunikation scheint am effektivsten zu sein.",
    textAr: "بفضل التطبيقات والدورات عبر الإنترنت أصبح تعلم اللغات أسهل من أي وقت مضى. رغم ذلك تظهر الدراسات أن المتعلمين بلا محادثات حقيقية مع الناطقين يتقدمون أبطأ. يبدو أن الجمع بين التمارين الرقمية والتواصل الحقيقي هو الأكثر فعالية.",
    questions: [
      { id: "r4-q1", q: "Was ist am effektivsten?", qAr: "ما الأكثر فعالية؟", options: ["Digitale Übungen + echte Kommunikation", "Nur Apps", "Nur Bücher"], correct: 0, whyAr: "النص: Die Kombination aus digitalen Übungen und realer Kommunikation scheint am effektivsten zu sein." },
      { id: "r4-q2", q: "Wer macht langsamere Fortschritte?", qAr: "من يتقدم ببطء أكبر؟", options: ["Lerner ohne echte Gespräche", "Lerner mit Muttersprachlern", "Kinder"], correct: 0, whyAr: "النص: Lerner ohne echte Gespräche mit Muttersprachlern langsamer Fortschritte machen." },
    ],
  },
  {
    id: "r5",
    title: "Gesundheit und Stress",
    text: "Stress am Arbeitsplatz ist ein wachsendes Problem. Betroffene klagen über Schlafstörungen und Erschöpfung. Experten raten zu regelmäßigen Pausen, Bewegung und einer klaren Trennung zwischen Arbeit und Freizeit. Unternehmen tragen Verantwortung, ein gesundes Arbeitsklima zu schaffen.",
    textAr: "الإجهاد في العمل مشكلة متنامية. يشكو المصابون من اضطرابات النوم والإرهاق. ينصح الخبراء بفواصل منتظمة وحركة وفصل واضح بين العمل والراحة. وتتحمل الشركات مسؤولية خلق مناخ عمل صحي.",
    questions: [
      { id: "r5-q1", q: "Was raten Experten?", qAr: "بماذا ينصح الخبراء؟", options: ["Pausen, Bewegung und klare Trennung", "Mehr Kaffee", "Weniger Schlaf"], correct: 0, whyAr: "النص: Experten raten zu regelmäßigen Pausen, Bewegung und einer klaren Trennung zwischen Arbeit und Freizeit." },
      { id: "r5-q2", q: "Worüber klagen Betroffene?", qAr: "بماذا يشكو المصابون؟", options: ["Schlafstörungen und Erschöpfung", "Zu viel Freizeit", "Zu wenig Arbeit"], correct: 0, whyAr: "النص: Betroffene klagen über Schlafstörungen und Erschöpfung — الشكوى المذكورة صراحة." },
    ],
  },
];

/** بنك الاستماع B2 — 4 نصوص × سؤالان */
export const LISTENING: B2SimListeningTask[] = [
  {
    id: "h1",
    title: "Radiobeitrag: Homeoffice",
    lines: [
      { speaker: "Moderatorin", de: "Viele Unternehmen führen Homeoffice-Regelungen ein. Eine Umfrage zeigt, dass 60 Prozent der Angestellten mindestens zwei Tage pro Woche von zu Hause arbeiten möchten.", ar: "العديد من الشركات تقدم قواعد العمل عن بُعد. يُظهر استطلاع أن 60% من الموظفين يريدون العمل من المنزل يومين أسبوعياً على الأقل." },
      { speaker: "Expertin", de: "Die Vorteile sind klar: weniger Fahrtzeit, mehr Flexibilität. Aber soziale Kontakte fehlen. Wichtig ist eine gute Kommunikationskultur.", ar: "المزايا واضحة: وقت تنقل أقل، مرونة أكثر. لكن التواصل الاجتماعي ينقص. المهم ثقافة تواصل جيدة." },
    ],
    questions: [
      { id: "h1-q1", q: "Wie viele Prozent möchten zwei Tage Homeoffice?", qAr: "كم بالمئة يريدون يومين عمل عن بُعد؟", options: ["60 Prozent", "40 Prozent", "80 Prozent"], correct: 0, whyAr: "التسجيل: Eine Umfrage zeigt, dass 60 Prozent der Angestellten mindestens zwei Tage pro Woche von zu Hause arbeiten möchten." },
      { id: "h1-q2", q: "Was fehlt laut Expertin?", qAr: "ماذا ينقص حسب الخبيرة؟", options: ["Soziale Kontakte", "Zeit", "Geld"], correct: 0, whyAr: "التسجيل: Aber soziale Kontakte fehlen — ما ينقص هو التواصل الاجتماعي لا الوقت ولا المال." },
    ],
  },
  {
    id: "h2",
    title: "Nachrichten: Umweltschutz",
    lines: [
      { speaker: "Sprecher", de: "Die Stadt Berlin plant, bis 2030 die Hälfte aller Autofahrten auf Fahrrad und öffentliche Verkehrsmittel zu verlagern. Kritiker warnen vor langen Bauzeiten.", ar: "تخطط مدينة برلين لنقل نصف رحلات السيارات إلى الدراجات والنقل العام بحلول 2030. يحذر النقاد من فترات بناء طويلة." },
    ],
    questions: [
      { id: "h2-q1", q: "Was plant Berlin bis 2030?", qAr: "ماذا تخطط برلين حتى 2030؟", options: ["Hälfte der Autofahrten verlagern", "Alle Autos verbieten", "Nur Fahrräder"], correct: 0, whyAr: "التسجيل: bis 2030 die Hälfte aller Autofahrten auf Fahrrad und öffentliche Verkehrsmittel zu verlagern — نصف الرحلات لا حظر كامل." },
      { id: "h2-q2", q: "Was kritisieren Kritiker?", qAr: "بماذا يحذر النقاد؟", options: ["Lange Bauzeiten", "Zu wenig Geld", "Zu viele Fahrräder"], correct: 0, whyAr: "التسجيل: Kritiker warnen vor langen Bauzeiten." },
    ],
  },
  {
    id: "h3",
    title: "Interview: Studium im Ausland",
    lines: [
      { speaker: "Reporter", de: "Immer mehr Studierende verbringen ein Semester im Ausland. Der Student Karim berichtet: Die Sprachkenntnisse verbessern sich schnell, und man lernt eine neue Kultur kennen.", ar: "المزيد من الطلاب يقضون فصلاً في الخارج. الطالب كريم يقول: تتحسن مهارات اللغة بسرعة ويتعرف المرء على ثقافة جديدة." },
      { speaker: "Karim", de: "Am Anfang war es schwierig, aber nach drei Monaten habe ich mich eingelebt. Ich empfehle jedem diese Erfahrung.", ar: "كان صعباً في البداية، لكن بعد ثلاثة أشهر تأقلمت. أنصح الجميع بهذه التجربة." },
    ],
    questions: [
      { id: "h3-q1", q: "Was verbessert sich laut Karim schnell?", qAr: "ماذا يتحسن سريعاً حسب كريم؟", options: ["Die Sprachkenntnisse", "Das Gehalt", "Die Prüfungen"], correct: 0, whyAr: "التسجيل: Die Sprachkenntnisse verbessern sich schnell, und man lernt eine neue Kultur kennen." },
      { id: "h3-q2", q: "Was empfiehlt Karim?", qAr: "بماذا ينصح كريم؟", options: ["Diese Erfahrung zu machen", "Im Ausland zu bleiben", "Nicht zu reisen"], correct: 0, whyAr: "التسجيل: Ich empfehle jedem diese Erfahrung — التوصية بالتجربة نفسها لا البقاء." },
    ],
  },
  {
    id: "h4",
    title: "Tipps: Bewerbungsgespräch",
    lines: [
      { speaker: "Beraterin", de: "Für ein erfolgreiches Bewerbungsgespräch sollten Sie sich gut vorbereiten: Informieren Sie sich über die Firma, bereiten Sie Beispiele für Ihre Stärken vor und stellen Sie eigene Fragen. Pünktlichkeit ist selbstverständlich.", ar: "لمقابلة عمل ناجحة يجب التحضير جيداً: تعرف على الشركة، جهّز أمثلة على نقاط قوتك، واطرح أسئلتك الخاصة. الالتزام بالمواعيد بديهي." },
    ],
    questions: [
      { id: "h4-q1", q: "Was sollte man über die Firma tun?", qAr: "ماذا يجب فعله حول الشركة؟", options: ["Sich informieren", "Nichts", "Vergessen"], correct: 0, whyAr: "التسجيل: Informieren Sie sich über die Firma — التعرف على الشركة أولى خطوات التحضير." },
      { id: "h4-q2", q: "Was ist selbstverständlich?", qAr: "ما البديهي؟", options: ["Pünktlichkeit", "Verspätung", "Fragen stellen"], correct: 0, whyAr: "التسجيل: Pünktlichkeit ist selbstverständlich." },
    ],
  },
];
