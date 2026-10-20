/**
 * b2-08 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Aussagen über Sprachen und Kulturen verstehen.",
      ar: "أن أفهم حديثاً عن تعدد اللغات والثقافات.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 في q1 وq2، وإلى l2 في q3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Verben mit festen Präpositionen richtig verwenden.",
      ar: "أن أستخدم الأفعال مع حروف الجر الثابتة استخداماً صحيحاً.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e3", "e5", "e6", "e9", "m1", "m2", "m4", "w1", "w2"],
        taskIds: [
          "practice:b2-08:e1",
          "practice:b2-08:e2",
          "practice:b2-08:e3",
          "practice:b2-08:e5",
          "practice:b2-08:e6",
          "practice:b2-08:e9",
          "mini-test:b2-08:m1",
          "mini-test:b2-08:m2",
          "mini-test:b2-08:m4",
          "writing:b2-08:w1",
          "writing:b2-08:w2",
        ],
        labelAr: "أختار حرف الجر الصحيح وأصحح الخطأ فيه وأكمل الجمل بالحرف المناسب (e1 إلى e9 وm1 وm2 وm4 وw1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Aussagen über Gewohnheiten und Anpassung verstehen.",
      ar: "أن أفهم حديثاً عن الاعتياد والتأقلم مع عادات جديدة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q3", "e7"],
        taskIds: ["listening:l2:q3", "practice:b2-08:e7"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l2 في q3، وأكمل عبارة sich gewöhnen an في e7، دون كشف النص أو الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann kurze Sätze über Sprachen und Kultur schriftlich ergänzen.",
      ar: "أن أكمل جملاً قصيرة عن اللغات والثقافة كتابةً.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["w1", "w2"],
        taskIds: [
          "writing:b2-08:w1",
          "writing:b2-08:w2",
        ],
        labelAr: "أكمل جملة وأحوّلها (w1 وw2)، دون كشف الحل. لا يقيس هذا كتابة نص كامل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "كل فعل ألماني «يلتصق» بحرف جر ثابت: sich interessieren FÜR (يهتم بـ)، warten AUF (ينتظر)، sich freuen ÜBER/AUF (يفرح بـ/على). وحرف الجر يحدد الحالة: für + نصب، auf + نصب (مع هذه الأفعال). احفظ الفعل مع حرفه — مثل حفظ الكلمة مع جنسها!",
    motivatingQuestionDe: "Wie lernt man Sprachen am besten?",
    contextAr:
      "تعدد اللغات والثقافات: موضوع جميل. نضيف أهم قائمة في B2: الأفعال مع حروف الجر الثابتة — أكثر ما يخطئ فيه المتعلمون.",
    contextDe: "Ich interessiere mich sehr für andere Kulturen.",
    connectionToPreviousAr: "تتذكر حروف الجر المكانية (auf dem Tisch) والزمنية (am Montag). اليوم: حروف الجر «الملتصقة بالأفعال» — قائمة تحفظ مع كل فعل.",
    activateVocabulary: [
      { de: "die Sprache", ar: "اللغة" },
      { de: "die Kultur", ar: "الثقافة" },
      { de: "sich interessieren für", ar: "يهتم بـ" },
      { de: "warten auf", ar: "ينتظر" },
      { de: "interkulturell", ar: "بين الثقافات" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (الأفعال الانعكاسية — a2-11): اختر الضمير:",
      questionDe: "Ich wasche ___ jeden Morgen.",
      options: ["dich", "mir", "mich", "sich"],
      correctIndex: 2,
      explanation: "الفعل الانعكاسي بلا مفعول به آخر يأخذ Akkusativ: mich (درس a2-11).",
      errorType: "grammar",
      optionExplanations: [
        "«dich» ضمير للمخاطَب، ولا يناسب المتكلم ich.",
        "«mir» ضمير جر، ولا يناسب فعل waschen مع الجسم هنا.",
        undefined,
        "«sich» ضمير الغائب، ولا يناسب المتكلم ich.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (حالة النصب — a1-03): اختر الأداة:",
      questionDe: "Ich esse ___ Apfel.",
      options: ["ein", "einen", "einem", "eine"],
      correctIndex: 1,
      explanation: "المفعول به المذكر في Akkusativ: einen Apfel (درس a1-03).",
      errorType: "case",
      optionExplanations: [
        "«ein» بلا نهاية، ولا تناسب مفعولاً مذكراً بعد الفعل essen.",
        undefined,
        "«einem» حالة جر، ولا تناسب مفعول الفعل essen.",
        "«eine» مؤنث، والكلمة Apfel مذكرة.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B2 (درس b2-01 — العلوم والبحث): أكمل:",
      template: "Er sagt, er ___ Zeit. (Konjunktiv I)",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
      ],
      explanation: "Konjunktiv I: habe.",
      errorType: "grammar",
    },
  ];
