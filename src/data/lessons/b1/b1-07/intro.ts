/**
 * b1-07 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ein Gespräch über Politik und Wahlen verstehen und Fragen dazu richtig beantworten.",
      ar: "أن أفهم حواراً عن السياسة والانتخابات وأجيب عن تفاصيله بدقة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3"],
        labelAr: "أجيب صحيحاً عن q1 بعد الاستماع إلى l1، وعن q2 وq3 بعد الاستماع إلى l2، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann temporale Nebensätze mit als, wenn, während, bevor und nachdem richtig bilden.",
      ar: "أن أستخدم الجمل الزمنية als وwenn وwährend وbevor وnachdem بالأداة المناسبة للمعنى وترتيب الفعل الصحيح.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e7", "m1", "m3", "m5", "w2"],
        taskIds: [
          "practice:b1-07:e1",
          "practice:b1-07:e2",
          "practice:b1-07:e7",
          "mini-test:b1-07:m1",
          "mini-test:b1-07:m3",
          "mini-test:b1-07:m5",
          "writing:b1-07:w2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الجمل الزمنية (e1 وe2 وe7 وm1 وm3 وm5 وw2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Sätze mit weil oder da bilden, in denen das Verb am Ende steht.",
      ar: "أن أكوّن جملة سببية بـ weil أو da بترتيب الفعل الصحيح.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e13", "e14"],
        taskIds: ["practice:b1-07:e13", "practice:b1-07:e14"],
        labelAr: "أجيب صحيحاً عن e13 وe14 دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann mit obwohl einen Gegensatz ausdrücken und das Verb richtig an das Satzende setzen.",
      ar: "أن أكوّن جملة تخالفية بـ obwohl (رغم أن) وأضع فعلها في آخر الجملة الثانوية.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e11", "e12", "w3"],
        taskIds: ["practice:b1-07:e11", "practice:b1-07:e12", "writing:b1-07:w3"],
        labelAr: "أكمل e11 بصحة، وأرتب e12 بصحة، وأعيد صياغة w3 بـ obwohl. كشف الحل لا يُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في A2 تعلمت weil وwenn. اليوم نكمل الخريطة: als (عندما — لماضٍ مرة واحدة)، während (بينما)، bevor (قبل أن)، nachdem (بعد أن)، bis (حتى). وجميعها ترسل الفعل للنهاية — لكن الفرق بين als وwenn دقيق جداً!",
    motivatingQuestionDe: "Was denkst du über Politik?",
    contextAr:
      "المجتمع والسياسة: مفردات أساسية + الجمل الزمنية والسببية والتخالفية — مهمة لفهم النصوص الإخبارية والرأي.",
    contextDe: "Als ich jung war, war die Politik anders.",
    connectionToPreviousAr: "تتذكر weil/wenn/ob من A2 وdass من درس الإعلام. اليوم: بقية الجمل الثانوية — وخاصة التمييز الصعب: als (ماضٍ مرة) مقابل wenn (متكرر/مضارع).",
    activateVocabulary: [
      { de: "die Politik", ar: "السياسة" },
      { de: "die Gesellschaft", ar: "المجتمع" },
      { de: "das Gesetz", ar: "القانون" },
      { de: "die Wahl", ar: "الانتخاب" },
      { de: "der Bürger", ar: "المواطن" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر حرف الربط (لأنّ):",
      questionDe: "Ich lerne, ___ ich will.",
      options: ["weil", "wenn", "ob", "dass"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة A2).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wenn» شرط، والجملة تحتاج سبباً أو إرادة، لذلك weil.",
        "لا — «ob» تصلح لسؤالٍ غير مباشر («Ich frage mich, ob …»)؛ والجملة «Ich lerne, … ich will» تعلّل فتحتاج «weil».",
        "«dass» تقدّم مضموناً، ولا تعبّر عن السبب.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر حرف الربط (إن كان عندك وقت):",
      questionDe: "___ du Zeit hast, hilf mir.",
      options: ["Wenn", "Weil", "Ob", "Dass"],
      correctIndex: 0,
      explanation: "شرط/زمن → wenn.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Weil» تعبّر عن السبب، ولا يناسب الشرط هنا.",
        "لا — «Ob» تبدأ سؤالاً غير مباشر («Ob er Zeit hat, weiß ich nicht»)؛ والجملة شرطيةٌ بـ«Wenn du Zeit hast, hilf mir».",
        "«Dass» تقدّم مضموناً، ولا تناسب بداية الجملة الشرطية.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): أكمل:",
      template: "Das Haus ___ gerade gebaut. (يُبنى الآن)",
      blanks: [
        { correct: "wird", options: ["wird", "wurde", "wirst"] },
      ],
      explanation: "مجهول مضارع: wird gebaut (درس البيئة).",
      errorType: "grammar",
    },
  ];
