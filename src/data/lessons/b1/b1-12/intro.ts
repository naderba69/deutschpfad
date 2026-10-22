/**
 * b1-12 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ein Ziel mit „um … zu“ ausdrücken.",
      ar: "أن أعبّر عن هدفي بـ um … zu عندما يكون الفاعل واحداً.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e4", "e7", "e14", "m1", "m4", "w1"],
        taskIds: [
          "practice:b1-12:e1",
          "practice:b1-12:e4",
          "practice:b1-12:e7",
          "practice:b1-12:e14",
          "mini-test:b1-12:m1",
          "mini-test:b1-12:m4",
          "writing:b1-12:w1",
        ],
        labelAr: "أجيب صحيحاً عن تمارين um … zu واختبارات ترتيبها والتحويل المكتوب (e1 وe4 وe7 وe14 وm1 وm4 وw1)، دون كشف الحل.",
      },
    },
    {
      id: "z2",
      de: "Ich kann „damit“ benutzen, wenn zwei Personen beteiligt sind.",
      ar: "أن أستخدم damit عندما يختلف فاعل الجملتين.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e5", "e10", "e11", "m2"],
        taskIds: [
          "practice:b1-12:e2",
          "practice:b1-12:e5",
          "practice:b1-12:e10",
          "practice:b1-12:e11",
          "mini-test:b1-12:m2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين damit (e2 وe5 وe10 وe11 وm2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Gründe mit Präpositionen wie „wegen“ und „trotz“ nennen.",
      ar: "أن أذكر السبب والتنازل بحروف الجر wegen وtrotz مع المضاف إليه.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e3", "e6", "e9", "e12", "m3", "w3"],
        taskIds: [
          "practice:b1-12:e3",
          "practice:b1-12:e6",
          "practice:b1-12:e9",
          "practice:b1-12:e12",
          "mini-test:b1-12:m3",
          "writing:b1-12:w3",
        ],
        labelAr: "أجيب صحيحاً عن تمارين wegen وtrotz والمضاف إليه (e3 وe6 وe9 وe12 وm3 وw3)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Gründe und Ziele in einem kurzen Gespräch verstehen.",
      ar: "أن أفهم الأهداف والأسباب في حوار قصير.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن الأسئلة الأربعة بعد الاستماع إلى الحوارات الثلاثة، دون كشف النص.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "لماذا تتعلّم الألمانية؟ في العربية تقول «أتعلّم الألمانية لكي أدرس في ألمانيا» و«أتعلّمها لكي يفهمني الأطباء». الجملتان تبدأان بـ«لكي» — لكن الألمانية تفرّق بينهما تفريقاً صارماً: الأولى um … zu والثانية damit. الفرق كله في سؤال واحد: من يفعل الفعل الثاني؟",
    motivatingQuestionDe: "Warum lernen Sie Deutsch?",
    contextAr:
      "نتعلّم اليوم كيف نربط الفعل بهدفه، ثم كيف نذكر السبب باختصار عبر حرف جرّ واحد بدل جملة كاملة — وهما من أدوات الكتابة المترابطة في B1.",
    contextDe: "Wir sprechen über Ziele, Gründe und Absichten.",
    connectionToPreviousAr:
      "تعرف weil (لأنّ) من A2 وobwohl (رغم أنّ) من B1. اليوم نضيف الوجه الآخر: بدل جملة كاملة بـ weil، حرف جرّ واحد wegen. وبدل «لأنني أريد»، جملة غرض صريحة.",
    activateVocabulary: [
      { de: "das Ziel", ar: "الهدف" },
      { de: "der Grund", ar: "السبب" },
      { de: "die Absicht", ar: "النية" },
      { de: "der Zweck", ar: "الغرض" },
      { de: "die Voraussetzung", ar: "الشرط المسبق" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر أداة السبب:",
      questionDe: "___ ich in Deutschland studieren möchte, lerne ich Deutsch.",
      options: ["weil", "denn ich", "wegen", "damit"],
      correctIndex: 0,
      explanation: "weil ترسل الفعل إلى آخر الجملة التابعة: Weil ich in Deutschland studieren möchte, lerne ich Deutsch.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«denn ich» لا تبدأ الجملة التابعة في أول الجملة؛ denn تربط جملتين مستقلتين، والتمرين يطلب حرف الربط التابع weil.",
        "«wegen» حرف جر، ولا يُربط جملة كاملة بالفعل في آخرها.",
        "«damit» تعني لكي وتعبّر عن الغاية، لا عن السبب.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-07 — السياسة والمجتمع): اختر أداة التنازل:",
      questionDe: "___ es regnete, gingen wir spazieren.",
      options: ["Obwohl", "Weil", "Damit", "Trotz"],
      correctIndex: 0,
      explanation: "obwohl = رغم أنّ، وتبدأ جملة تابعة كاملة (فعل في النهاية).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Weil» تعبّر عن السبب، ولا تناسب الجملة التي تعبّر عن أمر رغم سببه.",
        "«Damit» تعبّر عن الغاية، ولا تناسب الجملة.",
        "«Trotz» حرف جر، ولا يربط جملة كاملة بالفعل.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): أكمل المصدر مع zu:",
      template: "Es ist wichtig, die Umwelt ___ schützen.",
      blanks: [
        { correct: "zu", options: ["zu", "um", "für"] },
      ],
      explanation: "Infinitiv mit zu: الفعل في النهاية مسبوقاً بـ zu.",
      errorType: "grammar",
    },
  ];
