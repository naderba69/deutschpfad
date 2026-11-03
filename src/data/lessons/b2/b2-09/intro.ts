/**
 * b2-09 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte formelle Sätze für eine Bewerbung formulieren.",
      ar: "أن أصوغ عبارات رسمية مختارة للتقديم الوظيفي.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["w1", "w3", "e7"],
        taskIds: ["writing:b2-09:w1", "writing:b2-09:w3", "practice:b2-09:e7"],
        labelAr: "أصوغ عبارة افتتاحية، وجملة رسمية، وختاماً مختاراً (w1 وw3 وe7)، دون كشف الحل. لا يقيس هذا كتابة ملف تقديم كامل.",
      },
    },
    {
      id: "z2",
      de: "Ich kann ausgewählte feste Verbverbindungen in vorgegebenen Sätzen erkennen und ergänzen.",
      ar: "أن أتعرف بعض التراكيب الفعلية الثابتة وأكمل بها جملاً معطاة.",
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
        labelAr: "أجيب عن أسئلة l1 وl2 قبل كشف النص؛ يعتمد الصوت فيهما على تحويل النص إلى كلام في المتصفح. يضم هذا الدليل q4 من l3؛ مقاطعه TTS مولّدة من نصها الحالي وطابقها ASR محلياً، وهذا لا يقيّم جودة النطق. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann ausgewählte Wendungen im Bewerbungskontext verstehen und in vorgegebenen Sätzen korrigieren.",
      ar: "أن أفهم وصلات مختارة في سياق التقديم الوظيفي وأصححها في جمل معطاة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e8", "e10", "m4"],
        taskIds: [
          "practice:b2-09:e8",
          "practice:b2-09:e10",
          "mini-test:b2-09:m4",
        ],
        labelAr: "أتعرف معنى das Anschreiben وأكتب ما أسمعه في مثال على zur Verfügung stellen وأصحح صيغة zur (e8 وe10 وm4)، دون كشف الحل. هذا لا يقيس استعمالاً حراً للوصلة.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "كيف نصف مؤهلاتنا ونردّ في مقابلة عمل؟ سنتدرب على تعبيرات منتقاة مثل in Betracht ziehen (يأخذ بعين الاعتبار)، zur Verfügung stellen (يضع تحت التصرف)، eine Rolle spielen (يلعب دوراً)، وWert auf etwas legen (يولي أهمية لشيء).",
    motivatingQuestionDe: "Wie bewerbe ich mich um eine Stelle und stelle meine Erfahrung vor?",
    contextAr:
      "مواقف تدريبية في التقديم الوظيفي: مفردات عن الوظيفة والسيرة الذاتية، وبعض عبارات الطلب والمقابلة. لا يغطي الدرس ملف تقديم كاملاً.",
    contextDe: "Ich bewerbe mich um die Stelle als Projektmanager.",
    connectionToPreviousAr: "تستعيد في المراجعة وصلة أساسية مثل eine Frage stellen، ثم تتدرب على وصلات أخرى في سياق الوظائف والمقابلات.",
    activateVocabulary: [
      { de: "der Arbeitsmarkt", ar: "سوق العمل" },
      { de: "die Stelle", ar: "الوظيفة الشاغرة" },
      { de: "die Bewerbung", ar: "طلب التوظيف" },
      { de: "das Anschreiben", ar: "رسالة التقديم" },
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
