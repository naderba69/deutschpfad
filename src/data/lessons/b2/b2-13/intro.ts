/**
 * b2-13 — المقدمة وأهداف التعلم (الجزء «intro»)
 * وحدة «التكنولوجيا والذكاء الاصطناعي»: الاشتقاق التقني (السوابق والمركبات)
 * والروابط الاستدراكية في النقاش التقني.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
  {
    id: "z1",
    de: "Ich kann Texte über Technik und künstliche Intelligenz verstehen.",
    ar: "أن أفهم نصوصاً عن التقنية والذكاء الاصطناعي والرقمنة.",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["q1", "q2", "q3", "q4"],
      taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"],
      labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 وl2 وl3 في q1 إلى q4، دون كشف النص. كشف النص لا يُحتسب أداءً.",
    },
  },
  {
    id: "z2",
    de: "Ich kann technische Begriffe aus Präfixen und Komposita erschließen.",
    ar: "أن أستنتج معنى المصطلح التقني من السابقة أو التركيب.",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e1", "e2", "e5", "m1", "w1"],
      taskIds: [
        "practice:b2-13:e1",
        "practice:b2-13:e2",
        "practice:b2-13:e5",
        "mini-test:b2-13:m1",
        "writing:b2-13:w1",
      ],
      labelAr: "أختار السابقة الصحيحة وأحلّل المركبات وأكمل المشتقات (e1 وe2 وe5 وm1 وw1)، دون كشف الحل.",
    },
  },
  {
    id: "z3",
    de: "Ich kann Einwände und Gegensätze mit konzessiven Konnektoren formulieren.",
    ar: "أن أصوغ الاعتراضات والمفارقات بأدوات الاستدراك (obwohl، dennoch، zwar ... aber).",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e3", "e6", "e7", "m2", "w2"],
      taskIds: [
        "practice:b2-13:e3",
        "practice:b2-13:e6",
        "practice:b2-13:e7",
        "mini-test:b2-13:m2",
        "writing:b2-13:w2",
      ],
      labelAr: "أختار الأداة الاستدراكية المناسبة وأصحح ترتيب الفعل وأكمل الجمل (e3 وe6 وe7 وm2 وw2)، دون كشف الحل.",
    },
  },
  {
    id: "z4",
    de: "Ich kann Wortschatz zu Digitalisierung und Datenschutz verwenden.",
    ar: "أن أستخدم مفردات الرقمنة وحماية البيانات والأمن السيبراني بدقة.",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e4", "e8", "w3"],
      taskIds: ["practice:b2-13:e4", "practice:b2-13:e8", "writing:b2-13:w3"],
      labelAr: "أصل المصطلحات التقنية بمعانيها وأكمل جملاً بها (e4 وe8 وw3)، دون كشف الحل.",
    },
  },
  {
    id: "z5",
    de: "Ich kann Vor- und Nachteile einer Technologie abwägen.",
    ar: "أن أوازن بين فوائد تقنية ومساوئها باستخدام أدوات الربط المناسبة.",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e9", "e10", "e11", "e12"],
      taskIds: [
        "practice:b2-13:e9",
        "practice:b2-13:e10",
        "practice:b2-13:e11",
        "practice:b2-13:e12",
      ],
      labelAr: "أوازن بين الفوائد والمساوئ وأرتب جمل النقاش (e9 إلى e12)، دون كشف الحل.",
    },
  },
];

export const einfuehrung: Lesson["einfuehrung"] = {
  motivatingQuestionAr:
    "اقرأ: «الرقمنة» Digitalisierung، «حماية البيانات» Datenschutz، «الذكاء الاصطناعي» künstliche Intelligenz — لاحظت أن كل مصطلح تقني تقريباً مبنيّ من أجزاء تعرفها؟ Digital-is-ierung (رقمي + لاحقة المصدر)، Daten-schutz (بيانات + حماية). في هذه الوحدة تتعلم كيف تفكّك المصطلح التقني إلى أجزائه لتستنتج معناه دون قاموس، وكيف تناقش فوائد التقنية ومساوئها بأدوات استدراكية دقيقة (obwohl، dennoch، zwar ... aber).",
  motivatingQuestionDe: "Wie verändert künstliche Intelligenz unseren Alltag?",
  contextAr:
    "التقنية والذكاء الاصطناعي: نتعلم الاشتقاق التقني (السوابق والمركبات) لفهم المصطلحات الجديدة، والروابط الاستدراكية لمناقشة الفوائد والمخاطر بأسلوب متوازن.",
  contextDe: "Die Digitalisierung bietet Chancen und Risiken zugleich.",
  connectionToPreviousAr:
    "تتذكر مفردات التقنية في المستويات السابقة والاشتقاق الاسمي (b2-06). اليوم: ننتقل من الاشتقاق العام إلى الاشتقاق التقني المنتج، ومن الربط السببي إلى الربط الاستدراكي الذي تحتاجه كل مناقشة تقنية.",
  activateVocabulary: [
    { de: "die Digitalisierung", ar: "الرقمنة" },
    { de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي" },
    { de: "der Datenschutz", ar: "حماية البيانات" },
    { de: "die Cybersicherheit", ar: "الأمن السيبراني" },
    { de: "die Automatisierung", ar: "الأتمتة" },
  ],
};

export const review: NonNullable<Lesson["review"]> = [
  {
    id: "r1",
    type: "multiple-choice",
    instructionAr: "مراجعة من B1 (درس b1-10 — المستقبل والخطط): اختر الصيغة:",
    questionDe: "Ich werde nächstes Jahr in Deutschland ___.",
    options: ["studieren", "studiere", "studiert", "studiert haben"],
    correctIndex: 0,
    explanation: "Futur: werde + Infinitiv.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«studiere» مع ich، ولا تناسب الفعل بعد werde.",
      "«studiert» تستعمل Partizip II، والفعل بعد werde يكون مصدراً.",
      "«studiert haben» زمن الماضي التام، ولا يناسب المستقبل هنا.",
    ],
  },
  {
    id: "r2",
    type: "multiple-choice",
    instructionAr: "مراجعة من B1 (درس b1-09 — الوصلات الاسمية-الفعلية): اختر الفعل المناسب:",
    questionDe: "eine Entscheidung ___",
    options: ["treffen", "stellen", "sagen", "machen"],
    correctIndex: 0,
    explanation: "القرار يُتخذ: eine Entscheidung treffen.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«stellen» تعني يطرح، ولا تناسب eine Entscheidung.",
      "«sagen» تعني يقول، ولا تناسب Entscheidung.",
      "«machen» لا تشكّل تعبيراً صحيحاً مع Entscheidung؛ نقول eine Entscheidung treffen.",
    ],
  },
  {
    id: "r3",
    type: "fill-blank",
    instructionAr: "مراجعة من B1 (صيغة الشرط — b1-04): أكمل:",
    template: "Wenn ich mehr Zeit ___, würde ich eine Weiterbildung machen.",
    blanks: [
      { correct: "hätte", options: ["hätte", "habe", "hatte"] },
    ],
    explanation: "Konjunktiv II: hätte (لا hatte الماضي ولا habe المضارع) — درس b1-04.",
    errorType: "grammar",
  },
];
