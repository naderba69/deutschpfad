/**
 * b2-12 — المقدمة وأهداف التعلم (الجزء «intro»)
 * وحدة «المهن المتقدمة»: الترقية والتطوير المهني — Konjunktiv II للفرضيات
 * المهنية، والمبني للمجهول في الوثائق الرسمية.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
  {
    id: "z1",
    de: "Ich kann über Karriereziele und Entwicklungsmöglichkeiten sprechen.",
    ar: "أن أتحدث عن الأهداف المهنية وفرص التطوير (الترقية، التدريب المستمر، القيادة).",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["q1", "q2", "q3", "q4"],
      taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"],
      labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 و l2 و l3 في q1 إلى q4، دون كشف النص. كشف النص لا يُحتسب أداءً.",
    },
  },
  {
    id: "z2",
    de: "Ich kann Wünsche und höfliche Bitten mit Konjunktiv II ausdrücken.",
    ar: "أن أعبّر عن الرغبات والطلبات المهذبة بصيغة الشرط (würde، könnte، sollte).",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e1", "e2", "e5", "m1", "w1"],
      taskIds: [
        "practice:b2-12:e1",
        "practice:b2-12:e2",
        "practice:b2-12:e5",
        "mini-test:b2-12:m1",
        "writing:b2-12:w1",
      ],
      labelAr: "أختار صيغة الشرط الصحيحة وأكمل الفرضيات المهنية (e1 و e2 و e5 و m1 و w1)، دون كشف الحل.",
    },
  },
  {
    id: "z3",
    de: "Ich kann das Passiv in formalen Texten wie Lebenslauf und Zeugnis verwenden.",
    ar: "أن أستخدم المبني للمجهول في النصوص الرسمية مثل السيرة الذاتية والشهادة.",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e3", "e6", "e7", "m2", "w2"],
      taskIds: [
        "practice:b2-12:e3",
        "practice:b2-12:e6",
        "practice:b2-12:e7",
        "mini-test:b2-12:m2",
        "writing:b2-12:w2",
      ],
      labelAr: "أحوّل الجمل إلى المبني للمجهول وأصحح صيغه في الوثائق (e3 و e6 و e7 و m2 و w2)، دون كشف الحل.",
    },
  },
  {
    id: "z4",
    de: "Ich kann Wortschatz zur Karriereentwicklung korrekt verwenden.",
    ar: "أن أستخدم مفردات التطوير المهني (الترقية، المسؤولية، القيادة، التدريب) بدقة.",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e4", "e8", "w3"],
      taskIds: ["practice:b2-12:e4", "practice:b2-12:e8", "writing:b2-12:w3"],
      labelAr: "أصل مفردات التطوير المهني بمعانيها وأكمل جملاً بها (e4 و e8 و w3)، دون كشف الحل.",
    },
  },
  {
    id: "z5",
    de: "Ich kann berufliche Ziele mit passenden Konnektoren begründen.",
    ar: "أن أعلّل الأهداف المهنية بأدوات الربط المناسبة (weil، da، deshalb، sodass).",
    evidence: {
      completion: "all-correct",
      exerciseIds: ["e9", "e10", "e11", "e12"],
      taskIds: [
        "practice:b2-12:e9",
        "practice:b2-12:e10",
        "practice:b2-12:e11",
        "practice:b2-12:e12",
      ],
      labelAr: "أختار أداة الربط المناسبة وأرتب جمل التعليل المهني (e9 إلى e12)، دون كشف الحل.",
    },
  },
];

export const einfuehrung: Lesson["einfuehrung"] = {
  motivatingQuestionAr:
    "قل: «لو حصلت على الترقية، لتغيّرت حياتي المهنية» — لاحظت «لو حصلت»؟ هذه صيغة الشرط (Konjunktiv II) التي تُستعمل في الألمانية للفرضيات والرغبات: Wenn ich die Beförderung bekäme, würde ich mehr Verantwortung übernehmen. في سياق المهن المتقدمة، تُستخدم هذه الصيغة للتحدث عن الأهداف المستقبلية والطلبات المهذبة في المقابلات والمراسلات الرسمية.",
  motivatingQuestionDe: "Wie sieht deine Karriere in fünf Jahren aus?",
  contextAr:
    "التقدم المهني: نتعلم كيف نتحدث عن الترقية والتطوير والقيادة، وكيف نستخدم صيغة الشرط للفرضيات المهنية والمبني للمجهول في الوثائق الرسمية مثل السيرة الذاتية وشهادات العمل.",
  contextDe: "Die Beförderung zur Führungskraft ist ein wichtiger Schritt.",
  connectionToPreviousAr: "تتذكر المسار المهني والتفاوض (b2-06) والتقديم الوظيفي (b2-09). اليوم: نتعمق في الترقية والتطوير المهني، ونستخدم صيغة الشرط للفرضيات والمبني للمجهول في الوثائق الرسمية.",
  activateVocabulary: [
    { de: "die Beförderung", ar: "الترقية" },
    { de: "die Weiterbildung", ar: "التدريب المستمر" },
    { de: "die Führungskraft", ar: "القائد/المدير" },
    { de: "die Verantwortung", ar: "المسؤولية" },
    { de: "der Lebenslauf", ar: "السيرة الذاتية" },
  ],
};

export const review: NonNullable<Lesson["review"]> = [
  {
    id: "r1",
    type: "multiple-choice",
    instructionAr: "مراجعة من b2-11 (الضمير النسبي في المضاف إليه): اختر الصيغة:",
    questionDe: "Das ist die Studentin, ___ Eltern in Berlin wohnen.",
    options: ["deren", "dessen", "denen"],
    correctIndex: 0,
    explanation: "الضمير النسبي في المضاف إليه يطابق المرجع (Studentin مؤنثة مفرد): deren.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«dessen» للمرجع المذكر أو المحايد، والمرجع هنا مؤنث.",
      "«denen» جر (Dativ)، والمطلوب المضاف إليه (Genitiv).",
    ],
  },
  {
    id: "r2",
    type: "multiple-choice",
    instructionAr: "مراجعة من b2-11 (المصدر المزدوج مع المودالي): اختر الصيغة:",
    questionDe: "Ich habe gestern lange im Büro ___.",
    options: ["arbeiten müssen", "gearbeitet müssen", "gemusst arbeiten", "arbeiten gemusst"],
    correctIndex: 0,
    explanation: "في Perfekt مع مودالي يبقى الفعلان في صيغة المصدر: habe … arbeiten müssen.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«gearbeitet» (Partizip II) لا يستعمل مع المودالي في هذا التركيب.",
      "«gemusst» ليست صيغة صحيحة للمودالي هنا؛ يبقى müssen مصدراً.",
      "ترتيب المصدرين معكوس؛ الصيغة الصحيحة: arbeiten müssen.",
    ],
  },
  {
    id: "r3",
    type: "fill-blank",
    instructionAr: "مراجعة من b2-11 (lassen في Perfekt): أكمل:",
    template: "Ich habe das Auto ___ lassen.",
    blanks: [
      { correct: "reparieren", options: ["reparieren", "repariert", "zu reparieren"] },
    ],
    explanation: "lassen في Perfekt يأتي معه المصدر: habe … reparieren lassen.",
    errorType: "grammar",
  },
];
