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
    { id: "fc1", de: "der Arbeitsmarkt", ar: "سوق العمل", example: "Wir sprechen über den Arbeitsmarkt.", exampleAr: "نتحدث عن سوق العمل.", level: "B2" },
    { id: "fc2", de: "die Stelle", ar: "الوظيفة الشاغرة", example: "Die Stelle ist frei.", exampleAr: "الوظيفة شاغرة.", level: "B2" },
    { id: "fc3", de: "das Anschreiben", ar: "رسالة التقديم", example: "Ich schreibe mein Anschreiben.", exampleAr: "أكتب رسالة التقديم الخاصة بي.", level: "B2" },
    { id: "fc4", de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", example: "Ich ziehe die Stelle in Betracht.", exampleAr: "آخذ المنصب بعين الاعتبار.", level: "B2" },
    { id: "fc5", de: "zur Verfügung stellen", ar: "يضع تحت التصرف", example: "Ich stelle meine Erfahrung zur Verfügung.", exampleAr: "أضع خبرتي تحت التصرف.", level: "B2" },
    { id: "fc6", de: "Wert legen auf", ar: "يولي أهمية", example: "Ich lege Wert auf Qualität.", exampleAr: "أولي أهمية للجودة.", level: "B2" },
    { id: "fc7", de: "Anbei finden Sie ...", ar: "تجدون مرفقاً...", example: "Anbei finden Sie meinen Lebenslauf.", exampleAr: "تجدون سيرتي الذاتية مرفقة.", level: "B2" },
    { id: "fc8", de: "die Fähigkeit", ar: "المهارة", example: "Ich bringe meine Fähigkeiten ein.", exampleAr: "أوظف مهاراتي.", level: "B2" },
    { id: "fc9", de: "die Entscheidung", ar: "القرار", example: "Wir treffen eine Entscheidung.", exampleAr: "نتخذ قراراً.", level: "B2" },
    { id: "fc10", de: "die Kritik", ar: "النقد", example: "Im Beispiel übt die Personalabteilung Kritik.", exampleAr: "في المثال، توجّه إدارة الموارد البشرية نقداً.", level: "B2" },
    { id: "fc11", de: "die Frist", ar: "الموعد النهائي", example: "Später wurde eine Frist gesetzt.", exampleAr: "ثم حُدّد موعد نهائي.", level: "B2" },
    { id: "fc12", de: "der Vorschlag", ar: "الاقتراح", example: "Im Beispiel übte sie Kritik an einem Vorschlag.", exampleAr: "في المثال، وجّهت نقداً لاقتراح.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-09-1", type: "summarize-de-to-ar",
      titleAr: "لخّص بيانات افتراضية في تمرين وساطة بالعربية مع نقل الاتجاهات",
      sourceDe: "Im fiktiven Beispielszenario ist die Arbeitslosenquote auf 5,8 Prozent gesunken. In diesem Beispiel sind Fachkräfte im Gesundheitswesen und in der IT-Branche besonders gefragt. Die Digitalisierung verändert die Berufsbilder.",
      taskAr: "لخّص بيانات السيناريو الافتراضي: نسبة البطالة المذكورة، والقطاعان، وما يقوله النص عن الرقمنة.",
      modelAnswerAr: "«في السيناريو الافتراضي انخفضت البطالة إلى 5.8 في المئة. ويذكر النص ارتفاع الطلب على مختصين في الصحة وتقنية المعلومات، وأن الرقمنة تغيّر المهن.»",
      keyPointsAr: ["نقل النسبة المذكورة في المثال الافتراضي (5.8 في المئة)", "ذكر القطاعين في النص", "نقل فكرة تغيّر المهن في السيناريو"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-09-1",
      scenarioAr: "نقاش تدريبي عن مهارات قد تلائم وظيفة افتراضية في إدارة المشاريع، لا تقرير عن سوق العمل.",
      scenarioDe: "Diskussion über eine fiktive Projektmanagerstelle: Welche Fähigkeiten passen dazu?",
      strategyAr: "الاستراتيجية: عبّر عن رأيك، واربط المهارة بمتطلبات الوظيفة الافتراضية بدلاً من تعميمها على جميع الوظائف.",
      rounds: [
        {
          speakerDe: "Welche Fähigkeiten sind Ihrer Ansicht nach für unsere fiktive Projektmanagerstelle wichtig?",
          speakerAr: "ما المهارات التي تراها مهمة لوظيفتنا الافتراضية في إدارة المشاريع؟",
          options: [
            { de: "Meiner Ansicht nach sind neben fachlichen Qualifikationen auch Kommunikation und Teamfähigkeit wichtig. Je nach Stelle können digitale Kompetenzen ebenfalls eine Rolle spielen.", ar: "في رأيي، إلى جانب المؤهلات المهنية، يهمّ التواصل والعمل الجماعي أيضاً. وقد تؤدي المهارات الرقمية دوراً بحسب الوظيفة.", best: true, replyDe: "Das ist nachvollziehbar. Wie würden Sie sich selbst einschätzen?", replyAr: "هذا رأي مفهوم. كيف تقيّم نفسك؟" },
            { de: "Für diese Stelle sind nur technische Fähigkeiten wichtig; Teamarbeit spielt keine Rolle.", ar: "هذه الوظيفة تتطلب مهارات تقنية فقط؛ ولا دور للعمل الجماعي فيها.", best: false, replyDe: "Ich würde trotzdem die konkrete Ausschreibung prüfen; je nach Aufgabe kann Teamarbeit wichtig sein.", replyAr: "مع ذلك، سأراجع إعلان الوظيفة نفسه؛ فقد يكون العمل الجماعي مهماً بحسب المهام." },
          ],
        },
        {
          speakerDe: "Wie würden Sie sich selbst einschätzen?",
          speakerAr: "كيف تقيّم نفسك؟",
          options: [
            { de: "Ich kann gut kommunizieren und im Team arbeiten. Außerdem spreche ich mehrere Sprachen und könnte diese Stärke in internationalen Projekten einsetzen.", ar: "أستطيع التواصل والعمل ضمن فريق. كما أتحدث لغات عدة ويمكنني توظيف هذه المهارة في مشروعات دولية.", best: true, replyDe: "Können Sie ein Beispiel nennen, bei dem Ihnen Teamarbeit geholfen hat?", replyAr: "هل تذكر مثالاً ساعدك فيه العمل الجماعي؟" },
            { de: "Ich habe keine besonderen Fähigkeiten.", ar: "لا أملك مهارات خاصة.", best: false, replyDe: "Überlegen Sie, welche Aufgaben Sie schon übernommen haben, und nennen Sie ein konkretes Beispiel.", replyAr: "فكّر في المهام التي سبق أن توليتها، واذكر مثالاً محدداً." },
          ],
        },
      ],
    },
  ];
