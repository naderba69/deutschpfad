/**
 * b2-08 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Ich interessiere mich ___ Kunst.",
      options: ["für", "auf", "von", "um"],
      correctIndex: 0,
      explanation: "sich interessieren für.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«auf» لا تناسب sich interessieren.",
        "«von» لا تناسب sich interessieren.",
        "«um» لا تناسب sich interessieren.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Er träumt ___ einem Haus.",
      options: ["von", "für", "auf", "an"],
      correctIndex: 0,
      explanation: "träumen von.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«für» تعني لأجل، ولا تناسب träumen von.",
        "«auf» لا تناسب träumen.",
        "«an» لا تناسب träumen.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["auf", "Ich", "freue", "mich", "Urlaub", "den", "."],
      correctSentence: "Ich freue mich auf den Urlaub.",
      explanation: "أتطلع للعطلة — sich freuen auf.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich warte für dich.",
      wrongWord: "für",
      correctWord: "auf",
      options: ["auf", "für", "von", "an"],
      explanation: "warten auf.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر:",
      template: "Sie kümmert sich ___ die Kinder. (بـ) Wir diskutieren ___ das Thema. (عن)",
      blanks: [
        { correct: "um", options: ["um", "für", "auf"] },
        { correct: "über", options: ["über", "von", "an"] },
      ],
      explanation: "اعتناء → um. نقاش → über.",
      errorType: "preposition",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Sprache", ar: "اللغة", example: "Die Sprache verbindet.", exampleAr: "اللغة تربط.", level: "B2" },
    { id: "fc2", de: "die Kultur", ar: "الثقافة", example: "Jede Kultur ist einzigartig.", exampleAr: "كل ثقافة فريدة.", level: "B2" },
    { id: "fc3", de: "der Austausch", ar: "التبادل", example: "Der Austausch ist lehrreich.", exampleAr: "التبادل مفيد.", level: "B2" },
    { id: "fc4", de: "interkulturell", ar: "بين الثقافات", example: "Interkulturelles Lernen.", exampleAr: "تعلم بين الثقافات.", level: "B2" },
    { id: "fc5", de: "sich interessieren für", ar: "يهتم بـ", example: "Ich interessiere mich für Musik.", exampleAr: "أهتم بالموسيقى.", level: "B2" },
    { id: "fc6", de: "warten auf", ar: "ينتظر", example: "Ich warte auf dich.", exampleAr: "أنتظرك.", level: "B2" },
    { id: "fc7", de: "sich freuen auf/über", ar: "يتطلع لـ/يفرح بـ", example: "auf den Urlaub / über das Geschenk", exampleAr: "تطلع للعطلة / فرح بالهدية", level: "B2" },
    { id: "fc8", de: "abhängen von", ar: "يعتمد على", example: "Das hängt von dir ab.", exampleAr: "يعتمد عليك.", level: "B2" },
    { id: "fc9", de: "die Bereitschaft", ar: "الاستعداد", example: "Es hängt von der Bereitschaft ab, sich wirklich dafür zu interessieren.", exampleAr: "الأمر يتوقف على الاستعداد للاهتمام به فعلاً.", level: "B2" },
    { id: "fc10", de: "sich gewöhnen an", ar: "يعتاد على", example: "Über die Wochen gewöhnte sie sich an neue Rhythmen.", exampleAr: "وعلى مدى الأسابيع اعتادت إيقاعاً جديداً.", level: "B2" },
    { id: "fc11", de: "die Übersetzung", ar: "الترجمة", example: "Heute arbeitet Lena in einem Übersetzungsbüro.", exampleAr: "تعمل لينا اليوم في مكتب ترجمة.", level: "B2" },
    { id: "fc12", de: "die Reibung", ar: "الاحتكاك", example: "Natürlich gab es auch Reibung.", exampleAr: "وبالطبع كان هناك احتكاك أيضاً.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-08-1", type: "relay-instructions",
      titleAr: "اشرح سلوكاً ثقافياً ألمانياً لشخص عربي",
      sourceDe: "In Deutschland ist es üblich, bei Geschäftstreffen pünktlich zu erscheinen. Verspätungen gelten als unhöflich und werden selten entschuldigt.",
      taskAr: "اشرح بالعربية القاعدة الثقافية: الالتزام بالمواعيد، وكيف يُنظر إلى التأخير — مع مقارنة موجزة بعادات بلدك.",
      modelAnswerAr: "«في ألمانيا من المعتاد الحضور في الموعد في اللقاءات التجارية. يُعد التأخير غير مهذب ونادراً ما يُغتفر. في بلدنا الوضع مختلف غالباً.»",
      keyPointsAr: ["شرحت قاعدة الالتزام بالمواعيد", "نقلت نظرة التأخير", "أضفت مقارنة مع بلدك"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-08-1",
      scenarioAr: "موقف عمل بين الثقافات — سوء فهم ثقافي.",
      scenarioDe: "Interkulturelle Missverständnisse im Beruf.",
      strategyAr: "الاستراتيجية: التعامل بحساسية ثقافية وحل سوء الفهم.",
      rounds: [
        {
          speakerDe: "Warum bist du gestern zu spät zum Meeting gekommen?",
          speakerAr: "لماذا تأخرت أمس عن الاجتماع؟",
          options: [
            { de: "Es tut mir leid. In meiner Kultur ist zehn Minuten Verspätung normal. Ich wusste nicht, dass es hier so streng ist. Ich werde mich anpassen.", ar: "آسف. في ثقافتي التأخر عشر دقائق طبيعي. لم أعلم أنه صارم هنا. سأتأقلم.", best: true, replyDe: "Danke für die Erklärung. Verständnis ist der erste Schritt. Pünktlichkeit ist hier wirklich wichtig.", replyAr: "شكراً للتوضيح. الفهم أول خطوة. الالتزام بالمواعيد مهم حقاً هنا." },
            { de: "Zehn Minuten sind doch nichts! Ihr seid zu streng.", ar: "عشر دقائق ليست شيئاً! أنتم صارمون جداً.", best: false, replyDe: "Für uns ist Pünktlichkeit Respekt. Wir können einen Kompromiss finden.", replyAr: "بالنسبة لنا الالتزام احترام. يمكننا إيجاد حل وسط." },
          ],
        },
        {
          speakerDe: "Wie können wir einen Kompromiss finden?",
          speakerAr: "كيف يمكننا إيجاد حل وسط؟",
          options: [
            { de: "Ich verspreche, ab jetzt fünf Minuten früher zu kommen. Vielleicht könnt ihr mir bei dringenden Fällen etwas Toleranz geben.", ar: "أعدك بالحضور قبل الموعد بخمس دقائق من الآن. ربما تمنحونني بعض التسامح في الحالات العاجلة.", best: true, replyDe: "Das ist ein fairer Kompromiss. Willkommen im Team!", replyAr: "هذا حل وسط عادل. مرحباً بك في الفريق!" },
            { de: "Ich kann keine Kompromisse machen, ich komme wann ich will.", ar: "لا أستطيع تقديم تنازلات، سآتي متى شئت.", best: false, replyDe: "Dann wird die Zusammenarbeit schwierig. Pünktlichkeit ist nicht verhandelbar.", replyAr: "إذن سيصعب التعاون. الالتزام غير قابل للتفاوض." },
          ],
        },
      ],
    },
  ];
