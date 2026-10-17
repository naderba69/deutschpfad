/**
 * b1-06 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ein Kunstwerk mit einem Adjektiv beschreiben.",
      ar: "أن أكتب وصفاً قصيراً لعمل فني بصفة نعتية صحيحة النهاية.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["w1", "e7"],
        taskIds: ["writing:b1-06:w1", "practice:b1-06:e7"],
        labelAr: "أكتب الجملة الوصفية الصحيحة (w1)، وأحوّل الخبرية إلى النعتية (e7). كشف الحل أو قراءة الأمثلة لا تُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Adjektive nach der, ein und ohne Artikel richtig deklinieren.",
      ar: "أن أصرف الصفة النعتية بعد der وein وبلا أداة في الرفع والنصب والجر.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e6", "e9", "m2", "m4", "m6", "w2"],
        taskIds: [
          "practice:b1-06:e1",
          "practice:b1-06:e6",
          "practice:b1-06:e9",
          "mini-test:b1-06:m2",
          "mini-test:b1-06:m4",
          "mini-test:b1-06:m6",
          "writing:b1-06:w2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين نهايات الصفة بعد der وein وبلا أداة (e1 وe6 وe9 وm2 وm4 وm6 وw2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann einen kulturellen Vergleich in einem kurzen Gespräch verstehen und einen Satz dazu ergänzen.",
      ar: "أن أفهم مقارنة ثقافية قصيرة في حوار، وأكمل جملة مقارنة بين تونس وألمانيا بصفة صحيحة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q2", "q3", "w4"],
        taskIds: ["listening:l2:q2", "listening:l2:q3", "writing:b1-06:w4"],
        labelAr: "أجيب صحيحاً عن q2 وq3 بعد الاستماع إلى l2، وأكمل w4 بالنهاية الصحيحة. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Gespräche über Heimat, Heimweh und Kulturschock verstehen und die Ausdrücke richtig verwenden.",
      ar: "أن أفهم حديثاً عن الوطن والحنين وصدمة الثقافة، وأستخدم عباراتها في جمل مرتبة وصحيحة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q4", "q5", "e11", "e12", "e13"],
        taskIds: [
          "listening:l3:q4",
          "listening:l3:q5",
          "practice:b1-06:e11",
          "practice:b1-06:e12",
          "practice:b1-06:e13",
        ],
        labelAr: "أجيب صحيحاً عن q4 وq5 بعد الاستماع إلى l3، وأرتب وأكمل e11 وe12 وe13 بالفعل والكلمات الصحيحة. كشف النص لا يُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في A1 تعلمت: Das Hemd ist rot (الصفة الخبرية لا تتغير). ماذا لو أردت «قميص أحمر»؟ هنا تتغير الصفة: ein rotes Hemd! هذه نهاية الصفات (Adjektivdeklination) — أشهر «كابوس» في الألمانية. لكن القاعدة أجمل مما تظن!",
    motivatingQuestionDe: "Wie beschreibst du dieses Bild?",
    contextAr:
      "نزور المتحف ونصف الفنون — ونحل لغز نهايات الصفات: متى -e؟ متى -en؟ متى -es؟ بثلاثة أنماط واضحة.",
    contextDe: "Das ist ein wunderschönes Gemälde.",
    connectionToPreviousAr: "تتذكر أداة التعريف (der/die/das) والتنكير (ein/eine) والحالات الثلاث. اليوم: نهاية الصفة بعد الأداة — نظام يعتمد على كل ما تعلمته.",
    activateVocabulary: [
      { de: "die Kultur", ar: "الثقافة" },
      { de: "die Kunst", ar: "الفن" },
      { de: "das Museum", ar: "المتحف" },
      { de: "das Gemälde", ar: "اللوحة" },
      { de: "beschreiben", ar: "يصف" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-08 — الملابس والألوان): اختر الصيغة الصحيحة:",
      questionDe: "Das Hemd ist ___. (أحمر)",
      options: ["rot", "rote", "rotes", "roten"],
      correctIndex: 0,
      explanation: "الصفة الخبرية لا تتغير: ist rot (درس الملابس).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«rote» صفة بنهاية مؤنث/جمع، وبعد sein تبقى بلا نهاية.",
        "«rotes» نهاية محايد، والاسم Hemd مذكّر.",
        "«roten» نهاية جر أو جمع، لا تناسب الصفة الخبرية بعد sein.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر الأداة:",
      questionDe: "___ Museum ist groß.",
      options: ["Das", "Der", "Die", "Ein"],
      correctIndex: 0,
      explanation: "Museum محايد → Das (درس المدينة).",
      errorType: "gender",
      optionExplanations: [
        undefined,
        "«Der» أداة المذكر، وMuseum محايد، لذلك لا تصح.",
        "«Die» أداة المؤنث أو الجمع، ولا تناسب Museum المحايد.",
        "«Ein» أداة غير معرّفة، والسياق يتحدث عن متحف معروف.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-06 — الإعلام والأخبار): أكمل:",
      template: "Ich finde, dass der Film gut ___.",
      blanks: [
        { correct: "ist", options: ["ist", "sein", "hat"] },
      ],
      explanation: "dass + فعل في النهاية (درس الإعلام A2).",
      errorType: "grammar",
    },
  ];
