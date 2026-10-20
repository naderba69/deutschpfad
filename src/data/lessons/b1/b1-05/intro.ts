/**
 * b1-05 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Wünsche, Reue und Ratschläge in einem kurzen Gespräch verstehen.",
      ar: "أن أفهم الأمنيات والندم والنصيحة في حوار قصير عن الصحة.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3"],
        labelAr: "أجب صحيحاً عن q1 بعد الاستماع إلى l1، وعن q2 وq3 بعد الاستماع إلى l2، دون كشف التفريغ. كشف النص لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann den Konjunktiv II in der Vergangenheit bilden: hätte/wäre + Partizip II.",
      ar: "أن أصوغ الشرطية في الماضي: كنت سأفعل (hätte/wäre + تصريف ثالث).",
      evidence: {
        exerciseIds: ["e1", "m2", "w1"],
        taskIds: ["practice:b1-05:e1", "mini-test:b1-05:m2", "writing:b1-05:w1"],
        labelAr: "أجب صحيحاً عن e1 (ويظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وعن m2، واكتب w1 بصيغة hätte + تصريف ثالث. الشرح لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann Wenn-Sätze in der Vergangenheit richtig bilden und ordnen.",
      ar: "أن أرتب الجمل الشرطية في الماضي بالشكل الصحيح: لو... لكنت...",
      evidence: {
        exerciseIds: ["e4", "e5", "m3"],
        taskIds: ["practice:b1-05:e4", "practice:b1-05:e5", "mini-test:b1-05:m3"],
        labelAr: "رتّب e4 بصحة، وصحّح ترتيب e5، ورتّب m3 بصحة. الأمثلة والشرح لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann in einem Bericht erkennen, was jemand gesagt hat: Konjunktiv I.",
      ar: "أن أختار صيغة النقل غير المباشر (Konjunktiv I) في جمل قصيرة.",
      evidence: {
        exerciseIds: ["e11", "e12"],
        taskIds: ["practice:b1-05:e11", "practice:b1-05:e12"],
        labelAr: "أجب صحيحاً عن e11 وe12 ضمن تمارين practice. الجدول والأمثلة لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في الدرس السابق: Ich würde reisen (كنت سأسافر — الآن). ماذا لو أردت الماضي: «كنت سأسافر أمس لو كان الطقس جيداً»؟ هنا نحتاج hätte/wäre + Partizip II! قارن: würde + Infinitiv (الآن) مقابل hätte + Partizip II (الماضي).",
    motivatingQuestionDe: "Was hättest du anders gemacht?",
    contextAr:
      "نستكمل صيغة الشرط ببعدها الزمني: الماضي الشرطي (كان قد كان سيفعل...). ونربطها بالجمل الشرطية الكاملة — بنية مهمة في B1.",
    contextDe: "Wenn ich früher Sport gemacht hätte, wäre ich jetzt fitter.",
    connectionToPreviousAr: "تتذكر würde/wäre/hätte من درس الإعلام. اليوم: بعد الماضي — hätte/wäre + Partizip II — ونظام الجمل الشرطية الكامل.",
    activateVocabulary: [
      { de: "die Gesundheit", ar: "الصحة" },
      { de: "die Prävention", ar: "الوقاية" },
      { de: "der Sport", ar: "الرياضة" },
      { de: "fit", ar: "لائق" },
      { de: "die Bewegung", ar: "الحركة/النشاط" },
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
      explanation: "الشرط: hätte (درس الإعلام).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«habe» مضارع، ولا يناسب الشرط غير الواقعي في الماضي.",
        "«hatte» ماضٍ، ولا يناسب الشرط غير الواقعي هنا.",
        "«haben» مصدر، ولا يناسب الجملة.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-06 — أوقات الفراغ والهوايات): اختر المعنى:",
      questionDe: "der Sport",
      options: ["الرياضة", "الصحة", "الغذاء", "النوم"],
      correctIndex: 0,
      explanation: "der Sport = الرياضة (درس الهوايات).",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«Gesundheit» تعني الصحة، وليس المعنى المطلوب لـSport.",
        "«Ernährung» تعني الغذاء، وليس Sport.",
        "«Schlaf» يعني النوم، وليس Sport.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-02 — الصحة والطبيب): أكمل:",
      template: "Ich habe ___. (صداع)",
      blanks: [
        { correct: "Kopfschmerzen", options: ["Kopfschmerzen", "Bauchschmerzen", "Halsschmerzen"] },
      ],
      explanation: "Kopfschmerzen = صداع (درس الصحة A2).",
      errorType: "vocabulary",
    },
  ];
