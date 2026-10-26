/**
 * b2-09 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Anfang und Schluss eines Bewerbungsschreibens formulieren.",
      ar: "أن أكتب بداية خطاب التقديم وختامه بعبارات رسمية.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["w1", "w3", "e7"],
        taskIds: ["writing:b2-09:w1", "writing:b2-09:w3", "practice:b2-09:e7"],
        labelAr: "أكتب بداية خطاب التقديم وختامه (w1 وw3 وe7)، دون كشف الحل. لا يقيس هذا كتابة ملف تقديم كامل.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Nomen-Verb-Verbindungen richtig verwenden.",
      ar: "أن أستخدم الوصلات الاسمية-الفعلية المتقدمة استخداماً صحيحاً.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e3", "e4", "e5", "e6", "e9", "m1", "m2", "m4", "m5", "w2"],
        taskIds: [
          "practice:b2-09:e1",
          "practice:b2-09:e2",
          "practice:b2-09:e3",
          "practice:b2-09:e4",
          "practice:b2-09:e5",
          "practice:b2-09:e6",
          "practice:b2-09:e9",
          "mini-test:b2-09:m1",
          "mini-test:b2-09:m2",
          "mini-test:b2-09:m4",
          "mini-test:b2-09:m5",
          "writing:b2-09:w2",
        ],
        labelAr: "أختار الوصلة الصحيحة وأرتب الجملة وأصحح الحرف أو الصيغة (e1 إلى e6 وe9 وm1 وm2 وm4 وm5 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Aussagen in einem Vorstellungsgespräch verstehen.",
      ar: "أن أفهم حديثاً في مقابلة عمل.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 في q1 وq2، وإلى l2 في q3 وl3 في q4، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Wendungen wie „zur Verfügung stellen“ im Bewerbungskontext verwenden.",
      ar: "أن أستعمل عبارات مثل «zur Verfügung stellen» في سياق التقديم الوظيفي.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e8", "e10", "m4"],
        taskIds: [
          "practice:b2-09:e8",
          "practice:b2-09:e10",
          "mini-test:b2-09:m4",
        ],
        labelAr: "أعرف معنى das Anschreiben وأكتب جملة بـ zur Verfügung stellen وأصحح zur (e8 وe10 وm4)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في B1 تعلمت: eine Frage stellen. اليوم وصلات B2 الأرقى: in Betracht ziehen (يأخذ بعين الاعتبار)، zur Verfügung stellen (يضع تحت التصرف)، eine Rolle spielen (يلعب دوراً)، Wert legen auf (يولي أهمية). هذه لغة المقابلات والمراسلات الرسمية.",
    motivatingQuestionDe: "Wie schreibt man eine gute Bewerbung?",
    contextAr:
      "سوق العمل الألماني: خطاب التقديم والسيرة الذاتية بأسلوب رسمي كامل — وستتعلم الوصلات المتقدمة التي تميز خطابك.",
    contextDe: "Ich möchte mich um die Stelle als Projektmanager bewerben.",
    connectionToPreviousAr: "تتذكر الوصلات الأساسية (eine Frage stellen) من B1. اليوم: المستوى المتقدم — وصلات المقابلات والمراسلات.",
    activateVocabulary: [
      { de: "der Arbeitsmarkt", ar: "سوق العمل" },
      { de: "die Stelle", ar: "المنصب" },
      { de: "die Bewerbung", ar: "التقديم" },
      { de: "das Anschreiben", ar: "خطاب التقديم" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-09 — الوصلات الاسمية-الفعلية): اختر الفعل المناسب:",
      questionDe: "eine Frage ___",
      options: ["stellen", "treffen", "sagen", "nehmen"],
      correctIndex: 0,
      explanation: "السؤال يُطرح: eine Frage stellen.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«treffen» تعني يلتقي، ولا تناسب eine Frage.",
        "«sagen» تعني يقول، ولا تناسب eine Frage.",
        "«nehmen» لا تشكّل تعبيراً صحيحاً مع Frage؛ نقول eine Frage stellen.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-02 — عالم العمل): اختر الماضي:",
      questionDe: "Ich ___ drei Jahre in einer Firma.",
      options: ["arbeitete", "arbeite", "gearbeitet", "arbeitest"],
      correctIndex: 0,
      explanation: "Präteritum: arbeitete (درس العمل B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«arbeite» صيغة المضارع، ولا تناسب مدة ماضية محددة.",
        "«gearbeitet» Partizip II، ولا تناسب الجملة بدون فعل مساعد.",
        "«arbeitest» صيغة du، ولا تناسب ich.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B2 (درس b2-02 — الاقتصاد والمالية): أكمل:",
      template: "Die Bewerbung ist ___ worden. (أُرسلت)",
      blanks: [
        { correct: "geschickt", options: ["geschickt", "schickt", "schicken"] },
      ],
      explanation: "Passiv: geschickt worden (درس الاقتصاد B2).",
      errorType: "grammar",
    },
  ];
