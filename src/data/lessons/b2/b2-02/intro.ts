/**
 * b2-02 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann wichtige Informationen aus kurzen wirtschaftlichen Hörtexten entnehmen.",
      ar: "أن أستخرج معلومات أساسية من نصوص استماع اقتصادية تدريبية قصيرة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، وعن q4 بعد الاستماع إلى l3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann das Zustandspassiv bilden: ist geliefert.",
      ar: "أن أبني مجهول الحالة: مُسلَّم (sein + Partizip II).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e5", "w1", "w2", "m1", "m4"],
        taskIds: [
          "practice:b2-02:e1",
          "practice:b2-02:e5",
          "writing:b2-02:w1",
          "writing:b2-02:w2",
          "mini-test:b2-02:m1",
          "mini-test:b2-02:m4",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الحالة والتصحيح (e1 وe5 وw1 وw2 وm1 وm4)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Passiv mit Modalverben und Ersatzformen benutzen.",
      ar: "أن أستخدم المجهول مع الأفعال الناقصة وبدائله (sich lassen، -bar).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e6", "e7", "e9", "w3", "w4", "m2", "m3", "m5"],
        taskIds: [
          "practice:b2-02:e2",
          "practice:b2-02:e6",
          "practice:b2-02:e7",
          "practice:b2-02:e9",
          "writing:b2-02:w3",
          "writing:b2-02:w4",
          "mini-test:b2-02:m2",
          "mini-test:b2-02:m3",
          "mini-test:b2-02:m5",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الإمكانية والبدائل والترتيب (e2 وe6 وe7 وe9 وw3 وw4 وm2 وm3 وm5)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Fachwörter der Wirtschaft erkennen: Umsatz, Inflation, Konjunktur.",
      ar: "أن أتعرّف على مفردات اقتصادية أساسية: حجم المبيعات، والتضخم، والدورة الاقتصادية.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e3", "e8"],
        taskIds: ["practice:b2-02:e3", "practice:b2-02:e8"],
        labelAr: "أربط الكلمات بمعانيها (e3) وأختار معنى die Konjunktur (e8)، دون كشف الحل.",
      },
    },
    {
      id: "z5",
      de: "Ich kann Informationen und unterschiedliche Positionen in einem fiktiven Wirtschaftsbericht finden.",
      ar: "أن أستخرج معلومات صريحة وأميّز بين موقفين في تقرير اقتصادي تدريبي خيالي.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-b2-02:rq1",
          "reading:read-b2-02:rq2",
          "reading:read-b2-02:rq3",
          "reading:read-b2-02:rq4",
        ],
        labelAr: "أجيب عن أسئلة فهم التقرير التدريبي (rq1–rq4)؛ كشف النص لا يُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في B1 تعرّفت إلى Vorgangspassiv، مثل «Die Tür wird geschlossen» (يجري إغلاق الباب). وإذا أردت وصف الحالة الناتجة، تقول «Die Tür ist geschlossen» (الباب مغلق). السياق يوضّح هل نتحدث عن الحدث أم الحالة.",
    motivatingQuestionDe: "Wie entwickelt sich der Markt?",
    contextAr:
      "الاقتصاد: أخبار الأسواق والتقارير المالية. نضيف المجهول المتقدم: حالة (ist geliefert)، مع فعل ناقص (kann geliefert werden)، وبدائل (sich lassen, -bar).",
    contextDe: "Die Ware ist geliefert worden.",
    connectionToPreviousAr: "تتذكر Passiv الأساسي (wird/wurde gebaut) من B1. اليوم: التوسع الكامل — حالة + أفعال ناقصة + بدائل — مجموعة صيغ للمواقف المختلفة.",
    activateVocabulary: [
      { de: "die Wirtschaft", ar: "الاقتصاد" },
      { de: "der Markt", ar: "السوق" },
      { de: "die Firma", ar: "الشركة" },
      { de: "der Umsatz", ar: "حجم المبيعات/الإيرادات" },
      { de: "die Konjunktur", ar: "الدورة الاقتصادية" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): اختر المجهول:",
      questionDe: "Das Haus ___ gebaut. (يُبنى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "Passiv مضارع (درس البيئة B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wurde» صيغة الماضي، والجملة في المضارع (يُبنى الآن).",
        "«ist» مع المبني للمجهول تعطي حالة لا فعلاً، ولا تناسب الفعل الديناميكي.",
        "«war» صيغة الماضي للفعل sein، ولا تناسب المبني للمجهول.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): اختر المجهول:",
      questionDe: "Das Haus ___ 1900 gebaut. (بُني)",
      options: ["wurde", "wird", "ist", "war"],
      correctIndex: 0,
      explanation: "Passiv ماضٍ: wurde gebaut.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird» صيغة المضارع، ولا تناسب تاريخ البناء في الماضي.",
        "«ist» مع المبني للمجهول تعطي حالة، ولا تناسب تاريخاً ماضياً.",
        "«war» صيغة الماضي للفعل sein، ولا تناسب المبني للمجهول.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): أكمل:",
      template: "Man ___ die Umwelt schützen. (يمكن)",
      blanks: [
        { correct: "kann", options: ["kann", "könnte", "konnte"] },
      ],
      explanation: "man + kann (درس البيئة B1).",
      errorType: "grammar",
    },
  ];
