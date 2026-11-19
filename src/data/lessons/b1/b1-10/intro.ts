/**
 * b1-10 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ein Gespräch über Zukunftspläne verstehen und die Fragen dazu beantworten.",
      ar: "أن أفهم حواراً عن خطط المستقبل وأجيب عن أسئلته.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، وعن q4 بعد الاستماع إلى l3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann einen Satz mit Relativsatz und weil-Satz richtig bilden.",
      ar: "أن أكوّن جملة تجمع جملة نسبية وجملة بـ weil في موضعيهما.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e4", "e6", "e7", "e11", "m1", "m5", "w1"],
        taskIds: [
          "practice:b1-10:e4",
          "practice:b1-10:e6",
          "practice:b1-10:e7",
          "practice:b1-10:e11",
          "mini-test:b1-10:m1",
          "mini-test:b1-10:m5",
          "writing:b1-10:w1",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الجمل المركبة (e4 وe6 وe7 وe11 وm1 وm5 وw1)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann einen irrealen Bedingungssatz mit wenn und Konjunktiv II bilden.",
      ar: "أن أكوّن جملة شرطية غير واقعية بـ wenn وKonjunktiv II (hätte / würde).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e10", "m3", "w2"],
        taskIds: [
          "practice:b1-10:e2",
          "practice:b1-10:e10",
          "mini-test:b1-10:m3",
          "writing:b1-10:w2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الشرط غير الواقعي (e2 وe10 وm3 وw2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Zukunftspläne mit werden plus Infinitiv und weil schriftlich formulieren.",
      ar: "أن أكتب خطة مستقبلية بـ werden والمصدر في آخر الجملة، مع رابط weil.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["m2", "w1", "w3"],
        taskIds: ["mini-test:b1-10:m2", "writing:b1-10:w1", "writing:b1-10:w3"],
        labelAr: "أجيب صحيحاً عن m2، وأكتب w1 وw3 بالصيغة المقبولة. كشف الحل لا يُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في هذا الدرس نتحدث عن خطط المستقبل، ونعيد توظيف بعض التراكيب التي تعلمتها، مثل الجمل النسبية والشرطية وجمل التعليل. هل تستطيع جمع أكثر من تركيب في جملة واحدة؟",
    motivatingQuestionDe: "Was sind deine Pläne für die Zukunft?",
    contextAr:
      "نخطط للمستقبل ونتدرّب على ربط الأفكار بجمل أطول، مع الانتباه إلى موضع الفعل.",
    contextDe: "Ich werde in Deutschland studieren, was ich mir schon lange gewünscht habe.",
    connectionToPreviousAr: "يربط هذا الدرس بين موضوع الخطط المستقبلية وبعض التراكيب التي ظهرت في دروس سابقة، ولا يمثّل مراجعة شاملة لكل قواعد B1.",
    activateVocabulary: [
      { de: "die Zukunft", ar: "المستقبل" },
      { de: "der Plan", ar: "الخطة" },
      { de: "das Ziel", ar: "الهدف" },
      { de: "wünschen", ar: "يتمنى" },
      { de: "entscheiden", ar: "يقرر" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): اختر الصيغة الصحيحة:",
      questionDe: "Das Buch ___ Lehrers ist neu. (مضاف)",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "Genitiv: des Lehrers (درس التعليم).",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«der» لا تناسب المضاف إليه (Lehrers) في حالة الإضافة.",
        "«dem» حالة جر، ولا تناسب الإضافة هنا.",
        "«den» حالة مفعولية، ولا تناسب الإضافة هنا.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-04 — الإعلام والمجتمع): اختر الشرطية:",
      questionDe: "Wenn ich reich ___, würde ich reisen.",
      options: ["wäre", "bin", "war", "werde"],
      correctIndex: 0,
      explanation: "Konjunktiv II: wäre (درس الإعلام).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«bin» صيغة المضارع، ولا تناسب الشرط غير الواقعي.",
        "«war» صيغة الماضي، ولا تناسب الشرط غير الواقعي.",
        "«werde» صيغة المستقبل، ولا تناسب الشرط غير الواقعي.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): أكمل المجهول:",
      template: "Das Haus ___ 1990 gebaut. (بُني عام 1990)",
      blanks: [
        { correct: "wurde", options: ["wurde", "wird", "werde"] },
      ],
      explanation: "ماضٍ مجهول: wurde gebaut (درس البيئة).",
      errorType: "grammar",
    },
  ];
