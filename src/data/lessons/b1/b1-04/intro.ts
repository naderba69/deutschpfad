/**
 * b1-04 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Wirklichkeit und Annahme unterscheiden: ich habe / ich hätte.",
      ar: "أن أميّز بين الواقع والافتراض: habe (عندي) وhätte (لو كان عندي).",
      evidence: {
        exerciseIds: ["e1", "e5", "e7"],
        taskIds: ["practice:b1-04:e1", "practice:b1-04:e5", "practice:b1-04:e7"],
        labelAr: "أجب صحيحاً عن e1 (ويظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وصحّح e5، وحوّل e7 إلى جملة شرطية صحيحة. الشرح والأمثلة لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann würde + Infinitiv benutzen: Ich würde gern reisen.",
      ar: "أن أستخدم würde مع المصدر في آخر الجملة: كنت سأسافر.",
      evidence: {
        exerciseIds: ["e2", "m2", "w1"],
        taskIds: ["practice:b1-04:e2", "mini-test:b1-04:m2", "writing:b1-04:w1"],
        labelAr: "أجب صحيحاً عن e2 (ويظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وعن m2، واكتب w1 بصيغة würde + مصدر في آخر الجملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann wäre, hätte und könnte in Wünschen und Bitten benutzen.",
      ar: "أن أستخدم wäre وhätte وkönnte في الأماني والطلبات المهذبة.",
      evidence: {
        exerciseIds: ["e3", "m1", "w2"],
        taskIds: ["practice:b1-04:e3", "mini-test:b1-04:m1", "writing:b1-04:w2"],
        labelAr: "أطابق e3 بصحة (كل فعل بصيغته الشرطية)، وأجب عن m1، وأكمل جميع فراغات w2 بصحة. الترجمة والشرح لا تُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann Wünsche und Ratschläge in einem kurzen Gespräch verstehen.",
      ar: "أن أفهم الأمنيات والنصيحة في حوار قصير.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
        labelAr: "أجب صحيحاً عن أسئلة q1–q6 بعد الاستماع إلى حوارات l1–l3 دون كشف التفريغ. كشف النص لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "قل بالعربية: «لو كنت غنياً، لسافرت». لاحظت «لو... لـ»؟ الألمانية تملك صيغة كاملة لذلك اسمها Konjunktiv II. وأهم أداتها: würde (معناها «كنت سأ...») + المصدر. خمّن: كيف نقول «كنت سأسافر»؟",
    motivatingQuestionDe: "Was würdest du machen, wenn du reich wärst?",
    contextAr:
      "ندخل صيغة مهمة في B1: الشرطية. بها نعبر عن الأحلام والافتراضات والنصائح المهذبة — والطلبات المهذبة، بحسب السياق.",
    contextDe: "Ich würde gern mehr Nachrichten lesen, wenn ich Zeit hätte.",
    connectionToPreviousAr: "تتذكر werden (يصبح + مجهول). اليوم: würde — صيغة شرطية من werden: Ich würde = كنت سأفعل. ثلاثة استخدامات لwerden في مستوى واحد!",
    activateVocabulary: [
      { de: "die Gesellschaft", ar: "المجتمع" },
      { de: "die Meinung", ar: "الرأي" },
      { de: "kritisch", ar: "نقدي" },
      { de: "der Einfluss", ar: "التأثير" },
      { de: "glauben", ar: "يعتقد" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-12 — الطقس والفصول): اختر تصريف werden:",
      questionDe: "Ich ___ müde. (أصبح)",
      options: ["werde", "wirst", "wird", "werden"],
      correctIndex: 0,
      explanation: "مع ich: werde (درس الطقس).",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«wirst» مع du، ولا يناسب ich.",
        "«wird» مع er/sie/es، ولا يناسب ich.",
        "«werden» للجمع أو sie، ولا يناسب ich.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): اختر المجهول:",
      questionDe: "Das Haus ___ gebaut. (يُبنى)",
      options: ["wird", "wurde", "wirst", "werden"],
      correctIndex: 0,
      explanation: "مجهول مضارع: wird gebaut (درس البيئة).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wurde» صيغة الماضي، والجملة في المضارع (يُبنى).",
        "«wirst» مع du، ولا يناسب الفاعل das Haus.",
        "«werden» للجمع، والفاعل هنا مفرد.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-06 — الإعلام والأخبار): أكمل:",
      template: "Ich finde, dass der Film gut ___.",
      blanks: [
        { correct: "ist", options: ["ist", "sind", "bist"] },
      ],
      explanation: "dass + فعل في النهاية (درس الإعلام).",
      errorType: "grammar",
    },
  ];
