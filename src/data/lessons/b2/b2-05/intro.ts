/**
 * b2-05 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Aussagen über Kommunikation verstehen.",
      ar: "أن أفهم حديثاً عن الإنصات والتواصل ونماذجه.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1"],
        taskIds: ["listening:l1:q1"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 في q1، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann die fortgeschrittenen Konnektoren benutzen.",
      ar: "أن أستخدم الروابط المتقدمة: indem, anstatt...zu, ohne...zu, es sei denn.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e4", "e7", "m1", "m3", "w1", "w2"],
        taskIds: [
          "practice:b2-05:e1",
          "practice:b2-05:e2",
          "practice:b2-05:e4",
          "practice:b2-05:e7",
          "mini-test:b2-05:m1",
          "mini-test:b2-05:m3",
          "writing:b2-05:w1",
          "writing:b2-05:w2",
        ],
        labelAr: "أختار الرابط الصحيح وأرتب الجملة وأكمل بـ anstatt/ohne (e1 وe2 وe4 وe7 وm1 وm3 وw1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Bedingungen und Vorbehalte ausdrücken.",
      ar: "أن أعبّر عن الشروط والتحفظات بـ es sei denn وje nachdem.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e6", "m2", "q2", "q3"],
        taskIds: ["practice:b2-05:e6", "mini-test:b2-05:m2", "listening:l2:q2", "listening:l2:q3"],
        labelAr: "أكمل جمل es sei denn (e6 وm2) وأفهم الشرط والاختيار بالاستماع إلى l2 (q2 وq3)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Modalpartikeln natürlich benutzen.",
      ar: "أن أستخدم الجسيمات المشدِّدة (doch, ja, mal, denn, eigentlich) لنطق ألماني طبيعي.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e11", "e12", "e13", "m6", "m7"],
        taskIds: [
          "practice:b2-05:e11",
          "practice:b2-05:e12",
          "practice:b2-05:e13",
          "mini-test:b2-05:m6",
          "mini-test:b2-05:m7",
        ],
        labelAr: "أربط الجسيم بوظيفته وأختاره في الجملة (e11 وe12 وe13 وm6 وm7)، دون كشف الحل.",
      },
    },
    {
      id: "z5",
      de: "Ich kann folglich und demnach als Folge-Konnektoren benutzen.",
      ar: "أن أستخدم folglich/demnach (وبالتالي/وفقاً لذلك) لربط النتائج.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e14", "e15"],
        taskIds: ["practice:b2-05:e14", "practice:b2-05:e15"],
        labelAr: "أكمل جملة النتيجة بـ folglich/demnach وأرتب الفعل بعدهما (e14 وe15)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في B1 تعلمت weil/obwohl. اليوم روابط B2 الدقيقة: indem (بأن/بواسطة)، anstatt...zu (بدلاً من أن)، ohne...zu (دون أن)، es sei denn (إلا إذا)، je nachdem (حسبما). لاحظ: anstatt...zu وohne...zu تبنيان بلا فاعل: «بدلاً من أن أنام، عملت» = Anstatt zu schlafen, arbeitete ich.",
    motivatingQuestionDe: "Wie kommunizieren wir besser?",
    contextAr:
      "علم النفس والتواصل: كيف نفهم بعضنا؟ نضيف الروابط المتقدمة — أدوات التعبير الدقيق عن النوايا والتحفظات.",
    contextDe: "Man kann Missverständnisse vermeiden, indem man aktiv zuhört.",
    connectionToPreviousAr: "تتذكر الروابط المزدوجة (nicht nur...) من B1. اليوم: جيل جديد من الروابط — بلا فاعل (zu + مصدر) وشرطية (es sei denn).",
    activateVocabulary: [
      { de: "die Psychologie", ar: "علم النفس" },
      { de: "die Kommunikation", ar: "التواصل" },
      { de: "das Missverständnis", ar: "سوء الفهم" },
      { de: "zuhören", ar: "يصغي" },
      { de: "das Verhalten", ar: "السلوك" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر الرابط:",
      questionDe: "Ich lerne, ___ ich will.",
      options: ["weil", "dass", "wenn", "ob"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة A2/B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«dass» تقدّم مضموناً، ولا تعبّر عن السبب هنا.",
        "«wenn» شرط، ولا تعبّر عن السبب.",
        "«ob» تقدّم سؤالاً غير مباشر، ولا تناسب الجملة.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-12 — العلاقات بين الناس): اختر الرابط:",
      questionDe: "Es regnet, ___ bleibe ich.",
      options: ["deshalb", "aber", "und", "oder"],
      correctIndex: 0,
      explanation: "لذلك → deshalb (درس العلاقات A2).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«aber» تعبّر عن التعارض، ولا تعطي النتيجة المطلوبة.",
        "«und» تربط فكرتين دون نتيجة، ولا تناسب الجملة.",
        "«oder» تعبّر عن الاختيار، ولا تناسب الجملة.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-07 — السياسة والمجتمع): أكمل:",
      template: "Er hört Musik, ___ er arbeitet. (بينما)",
      blanks: [
        { correct: "während", options: ["während", "als", "bevor"] },
      ],
      explanation: "متزامن → während (درس السياسة B1).",
      errorType: "grammar",
    },
  ];
