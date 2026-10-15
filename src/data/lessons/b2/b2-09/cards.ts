/**
 * b2-09 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "Ich ___ eine Entscheidung. (أتخذ قراراً)",
      options: ["treffe", "mache", "nehme", "gebe"],
      correctIndex: 0,
      explanation: "eine Entscheidung treffen هي الصيغة الثابتة، ولا تُستعمل machen مع Entscheidung بهذا المعنى.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«mache» لا تشكّل تعبيراً صحيحاً مع Entscheidung؛ نقول eine Entscheidung treffen.",
        "«nehme» لا تشكّل تعبيراً صحيحاً مع Entscheidung.",
        "«gebe» لا تشكّل تعبيراً صحيحاً مع Entscheidung.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "Ich ___ Wert auf Qualität.",
      options: ["lege", "stelle", "ziehe", "mache"],
      correctIndex: 0,
      explanation: "Wert legen auf.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«stelle» تعني يضع، ولا تناسب Wert legen auf.",
        "«ziehe» تعني يسحب، ولا تناسب Wert legen auf.",
        "«mache» تعني يصنع، ولا تناسب Wert legen auf.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Ich", "mich", "um", "Stelle", "bewerbe", "die", "als", "Ingenieur", "."],
      correctSentence: "Ich bewerbe mich um die Stelle als Ingenieur.",
      explanation: "أتقدم لمنصب مهندس.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stelle meine Erfahrung zu Verfügung.",
      wrongWord: "zu",
      correctWord: "zur",
      options: ["zur", "zu", "zum", "zur Verfügung"],
      explanation: "zur Verfügung = zu + der.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالوصلة:",
      template: "Anbei ___ Sie meinen Lebenslauf. (تجدون) Teamarbeit ___ eine Rolle. (تلعب)",
      blanks: [
        { correct: "finden", options: ["finden", "sehen", "lesen"] },
        { correct: "spielt", options: ["spielt", "macht", "hat"] },
      ],
      explanation: "Anbei finden Sie + eine Rolle spielen.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "der Arbeitsmarkt", ar: "سوق العمل", example: "Der Arbeitsmarkt ist dynamisch.", exampleAr: "سوق العمل ديناميكي.", level: "B2" },
    { id: "fc2", de: "die Stelle", ar: "المنصب", example: "Die Stelle ist frei.", exampleAr: "المنصب شاغر.", level: "B2" },
    { id: "fc3", de: "das Anschreiben", ar: "خطاب التقديم", example: "Das Anschreiben ist kurz.", exampleAr: "خطاب التقديم قصير.", level: "B2" },
    { id: "fc4", de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", example: "Ich ziehe die Stelle in Betracht.", exampleAr: "آخذ المنصب بعين الاعتبار.", level: "B2" },
    { id: "fc5", de: "zur Verfügung stellen", ar: "يضع تحت التصرف", example: "Ich stelle meine Erfahrung zur Verfügung.", exampleAr: "أضع خبرتي تحت التصرف.", level: "B2" },
    { id: "fc6", de: "Wert legen auf", ar: "يولي أهمية", example: "Ich lege Wert auf Qualität.", exampleAr: "أولي أهمية للجودة.", level: "B2" },
    { id: "fc7", de: "Anbei finden Sie ...", ar: "مرفقاً تجدون...", example: "Anbei finden Sie meinen Lebenslauf.", exampleAr: "مرفقاً سيرتي الذاتية.", level: "B2" },
    { id: "fc8", de: "die Fähigkeit", ar: "المهارة", example: "Meine Fähigkeiten sind vielfältig.", exampleAr: "مهاراتي متنوعة.", level: "B2" },
    { id: "fc9", de: "die Entscheidung", ar: "القرار", example: "Wir treffen die Entscheidung nicht im ersten Gespräch.", exampleAr: "لا نتخذ القرار في المقابلة الأولى.", level: "B2" },
    { id: "fc10", de: "die Kritik", ar: "النقد", example: "In der zweiten Runde übte die Personalabteilung offen Kritik.", exampleAr: "وفي الجولة الثانية وجّهت إدارة الموارد البشرية نقداً صريحاً.", level: "B2" },
    { id: "fc11", de: "die Frist", ar: "الموعد النهائي", example: "Später wurde eine Frist gesetzt.", exampleAr: "ثم حُدّد موعد نهائي.", level: "B2" },
    { id: "fc12", de: "der Vorschlag", ar: "الاقتراح", example: "Sie übte Kritik an einem Vorschlag, den Sara mitgebracht hatte.", exampleAr: "وجّهت نقداً لاقتراح قدّمته سارة.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-09-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً تدريبياً عن سوق العمل بالعربية مع نقل الاتجاهات",
      sourceDe: "Die Arbeitslosenquote ist auf 5,8 Prozent gesunken. Besonders gefragt sind Fachkräfte im Gesundheitswesen und in der IT-Branche. Die Digitalisierung schafft neue Berufsbilder.",
      taskAr: "لخّص البيانات: نسبة البطالة، القطاعات المطلوبة، وتأثير الرقمنة.",
      modelAnswerAr: "«انخفضت البطالة إلى 5.8 في المئة. الأكثر طلباً خبراء الصحة وتقنية المعلومات. والرقمنة تخلق مهناً جديدة.»",
      keyPointsAr: ["نقلت نسبة البطالة (5.8 في المئة)", "ذكرت القطاعين المطلوبين", "نقلت أثر الرقمنة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-09-1",
      scenarioAr: "نقاش عن التقدم لوظيفة — مهارات المستقبل.",
      scenarioDe: "Diskussion über Bewerbung und Zukunftskompetenzen.",
      strategyAr: "الاستراتيجية: تقديم نفسك مهنياً ومناقشة المهارات المطلوبة.",
      rounds: [
        {
          speakerDe: "Welche Fähigkeiten sind für den Arbeitsmarkt der Zukunft wichtig?",
          speakerAr: "ما المهارات المهمة لسوق عمل المستقبل؟",
          options: [
            { de: "Neben fachlichen Qualifikationen werden Soft Skills wie Kommunikation und Teamfähigkeit immer wichtiger. Außerdem sind digitale Kompetenzen unverzichtbar.", ar: "إلى جانب المؤهلات المهنية، تزداد أهمية المهارات الناعمة كالتواصل والعمل الجماعي. كما أن الكفاءات الرقمية لا غنى عنها.", best: true, replyDe: "Eine umfassende Antwort. Wie würden Sie sich selbst einschätzen?", replyAr: "إجابة شاملة. كيف تقيّم نفسك؟" },
            { de: "Nur die technischen Fähigkeiten zählen, der Rest ist unwichtig.", ar: "المهارات التقنية فقط تهم، والباقي غير مهم.", best: false, replyDe: "Viele Arbeitgeber legen auch Wert auf soziale Kompetenzen.", replyAr: "كثير من أصحاب العمل يولون أهمية أيضاً للكفاءات الاجتماعية." },
          ],
        },
        {
          speakerDe: "Wie würden Sie sich selbst einschätzen?",
          speakerAr: "كيف تقيّم نفسك؟",
          options: [
            { de: "Ich bin kommunikativ und teamfähig. Zudem beherrsche ich mehrere Sprachen, was in internationalen Unternehmen ein großer Vorteil ist.", ar: "أنا اجتماعي وأجيد العمل الجماعي. كما أتقن لغات عدة، وهي ميزة كبيرة في الشركات الدولية.", best: true, replyDe: "Das klingt überzeugend. Welche Sprachen sprechen Sie?", replyAr: "يبدو مقنعاً. أي لغات تتحدث؟" },
            { de: "Ich habe keine besonderen Fähigkeiten.", ar: "لا أملك مهارات خاصة.", best: false, replyDe: "Jeder hat Stärken. Analysieren Sie Ihre Qualifikationen genauer.", replyAr: "لكل شخص نقاط قوة. حلل مؤهلاتك بدقة أكبر." },
          ],
        },
      ],
    },
  ];
