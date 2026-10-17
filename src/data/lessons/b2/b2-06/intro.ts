/**
 * b2-06 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Aussagen über Karrierewege verstehen.",
      ar: "أن أفهم حديثاً عن المسارات المهنية والتفاوض على الراتب.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 وl2 وl3 في q1 إلى q4، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Verben nominalisieren: lesen → das Lesen.",
      ar: "أن أحوّل الأفعال إلى أسماء (القراءة، الكتابة، التحسين).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e5", "e6", "m5", "w1", "w2"],
        taskIds: [
          "practice:b2-06:e1",
          "practice:b2-06:e5",
          "practice:b2-06:e6",
          "mini-test:b2-06:m5",
          "writing:b2-06:w1",
          "writing:b2-06:w2",
        ],
        labelAr: "أختار الاسم المشتق وأصحح حرف البداية وأكمل الأسماء (e1 وe5 وe6 وm5 وw1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann formelle Sätze bilden: Beim Lesen lernt man.",
      ar: "أن أبني جملاً رسمية: بالقراءة يتعلم المرء.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e4", "m2", "m3", "w3"],
        taskIds: [
          "practice:b2-06:e2",
          "practice:b2-06:e4",
          "mini-test:b2-06:m2",
          "mini-test:b2-06:m3",
          "writing:b2-06:w3",
        ],
        labelAr: "أختار الصيغة الرسمية وأرتب الجملة وأكتبها بالإملاء (e2 وe4 وm2 وm3 وw3)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Wortschatz zu Homeoffice und Arbeitszeiten verwenden.",
      ar: "أن أستخدم مفردات العمل عن بعد وأوقات العمل المرنة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e11", "e12", "w4"],
        taskIds: ["practice:b2-06:e11", "practice:b2-06:e12", "writing:b2-06:w4"],
        labelAr: "أكمل مفردات العمل عن بعد وأرتب جملة عنه وأكمل الاشتقاق (e11 وe12 وw4)، دون كشف الحل.",
      },
    },
    {
      id: "z5",
      de: "Ich kann Gründe und Folgen mit passenden Konnektoren ausdrücken.",
      ar: "أن أعبّر عن الأسباب والنتائج بأدوات الربط المناسبة (da، denn، deshalb، so...dass).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e13-konn", "e14-konn", "e15-konn", "e16-konn"],
        taskIds: [
          "practice:b2-06:e13-konn",
          "practice:b2-06:e14-konn",
          "practice:b2-06:e15-konn",
          "practice:b2-06:e16-konn",
        ],
        labelAr: "أختار ترتيب الفعل بعد deshalb وأكمل الأدوات وأرتب جملة da وأصحح موضع الفعل (e13 إلى e16 بمعرّفاتها)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "قل: «أنا أتعلم بالقراءة» — لاحظت «بالقراءة» (اسم من فعل)! الألمانية تفعل هذا بكثرة في الرسمية: Beim Lesen lernt man. تحويل الفعل إلى اسم: lesen → das Lesen، lernen → das Lernen. هذا «الاشتقاق الاسمي» — أسلوب الإدارة والتقارير.",
    motivatingQuestionDe: "Wie sieht deine Karriere aus?",
    contextAr:
      "المسار المهني والتفاوض: نتعلم الاشتقاق الاسمي — أهم أداة للكتابة الرسمية والتقارير. وبه تتحول جملتك من عامية إلى رسمية.",
    contextDe: "Die Verbesserung der Arbeitsbedingungen ist wichtig.",
    connectionToPreviousAr: "تتذكر الأسماء المركبة والعمل. اليوم: تحويل الأفعال إلى أسماء — وتقصير الجمل الرسمية. أسلوب الإدارة الألمانية.",
    activateVocabulary: [
      { de: "die Karriere", ar: "المسار المهني" },
      { de: "verhandeln", ar: "يتفاوض" },
      { de: "die Führungskraft", ar: "القائد" },
      { de: "die Erfahrung", ar: "الخبرة" },
      { de: "der Erfolg", ar: "النجاح" },
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
