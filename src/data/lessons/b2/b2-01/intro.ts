/**
 * b2-01 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann die Aussagen eines Forschers in einem kurzen Gespräch verstehen.",
      ar: "أن أفهم ما يقوله باحث في حوار قصير.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، وعن q4 بعد الاستماع إلى l3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann die indirekte Rede mit Konjunktiv I bilden.",
      ar: "أن أبني نقل الكلام غير المباشر بـ Konjunktiv I.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e5", "e6", "e7", "m1", "m2", "m4", "m5"],
        taskIds: [
          "practice:b2-01:e1",
          "practice:b2-01:e2",
          "practice:b2-01:e5",
          "practice:b2-01:e6",
          "practice:b2-01:e7",
          "mini-test:b2-01:m1",
          "mini-test:b2-01:m2",
          "mini-test:b2-01:m4",
          "mini-test:b2-01:m5",
        ],
        labelAr: "أجيب صحيحاً عن تمارين Konjunktiv I (e1 وe2 وe5 وe6 وe7 وm1 وm2 وm4 وm5)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Aussagen anderer in kurzen Sätzen schriftlich wiedergeben.",
      ar: "أن أكتب أقوال الآخرين في جمل قصيرة بدقة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["w1", "w2"],
        taskIds: ["writing:b2-01:w1", "writing:b2-01:w2"],
        labelAr: "أكتب التحويل والإكمال بالصيغة المقبولة (w1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Modalverben subjektiv benutzen: Das dürfte stimmen.",
      ar: "أن أستخدم الأفعال الناقصة ذاتياً للتخمين: هذا على الأرجح صحيح.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e11", "e12"],
        taskIds: ["practice:b2-01:e11", "practice:b2-01:e12"],
        labelAr: "أجيب صحيحاً عن تمرين درجات الاحتمال وتمرين ترتيب dürfte (e11 وe12)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في الإخبار: «قال الباحث: النتيجة مهمة» (مباشر) مقابل «قال الباحث إن النتيجة مهمة» (غير مباشر). الألمانية تملك صيغة كاملة للنقل غير المباشر اسمها Konjunktiv I: Er sagt, die Forschung sei wichtig. لاحظ: sei بدل ist! هذا يبين أنك «تنقل» وليس «تؤكد».",
    motivatingQuestionDe: "Was hat der Forscher gesagt?",
    contextAr:
      "ندخل قمة المستويات: نتعلم كيف ننقل الأقوال في الأخبار والتقارير العلمية — بتمييز واضح بين «ما قاله» و«ما نقله هو». هذه مهارة الصحفيين والأكاديميين.",
    contextDe: "Der Wissenschaftler sagt, die Entdeckung sei revolutionär.",
    connectionToPreviousAr: "تتذكر Konjunktiv II (würde/hätte) من B1. اليوم: Konjunktiv I — صيغة النقل. نفس العائلة لكن وظيفة مختلفة تماماً.",
    activateVocabulary: [
      { de: "die Wissenschaft", ar: "العلم" },
      { de: "die Forschung", ar: "البحث العلمي" },
      { de: "die Entdeckung", ar: "الاكتشاف" },
      { de: "das Experiment", ar: "التجربة" },
      { de: "der Beweis", ar: "البرهان" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-04 — الإعلام والمجتمع): اختر الصيغة الصحيحة:",
      questionDe: "Wenn ich Zeit ___, würde ich kommen.",
      options: ["hätte", "habe", "hatte", "haben"],
      correctIndex: 0,
      explanation: "Konjunktiv II: hätte (درس الإعلام B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«habe» صيغة المضارع، ولا تناسب الشرط غير الواقعي.",
        "«hatte» صيغة الماضي، ولا تناسب الشرط غير الواقعي.",
        "«haben» مصدر أو جمع، ولا تناسب الفعل في الشرط.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): اختر المجهول:",
      questionDe: "Das Experiment ___ durchgeführt. (يُجرى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "Passiv مضارع: wird durchgeführt (درس البيئة B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wurde» صيغة الماضي، والجملة في المضارع (يُجرى الآن).",
        "«ist» مع المبني للمجهول تعطي حالة لا فعلاً، ولا تناسب الجملة.",
        "«war» صيغة الماضي للفعل sein، ولا تناسب المبني للمجهول.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): أكمل:",
      template: "Der Wissenschaftler, ___ forscht, ist berühmt. (الذي)",
      blanks: [
        { correct: "der", options: ["der", "den", "dem"] },
      ],
      explanation: "فاعل مذكر → der (درس التعليم B1).",
      errorType: "grammar",
    },
  ];
