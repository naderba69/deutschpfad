/**
 * b1-03 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Umweltprobleme und Maßnahmen aus einem kurzen Gespräch verstehen.",
      ar: "أن أفهم مشكلات البيئة والإجراءات المذكورة في حوار قصير.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، دون كشف التفريغ. كشف النص (listening-transcript) لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann das Passiv bilden: wird/wurde + Partizip II.",
      ar: "أن أبني المبني للمجهول: يُبنى / بُني.",
      evidence: {
        exerciseIds: ["e1", "e7", "m1"],
        taskIds: ["practice:b1-03:e1", "flow-practice:b1-03:e1", "practice:b1-03:e7", "mini-test:b1-03:m1"],
        labelAr: "أجب صحيحاً عن e1 (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وحوّل e7 من النشط إلى المجهول بصحة، وأجب عن m1 في الاختبار المصغّر. قراءة جدول t1 لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann man als Passiv-Ersatz benutzen.",
      ar: "أن أستخدم man كبديل للمجهول.",
      evidence: {
        exerciseIds: ["e6", "m5"],
        taskIds: ["practice:b1-03:e6", "mini-test:b1-03:m5"],
        labelAr: "أكمل e6 وm5 بالاختيار الصحيح بين man والمجهول. الأمثلة المعروضة في الشرح لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann den Infinitiv mit zu benutzen: Es ist wichtig, die Umwelt zu schützen.",
      ar: "أن أستخدم التركيب المصدري zu + مصدر في جمل النصح البيئي.",
      evidence: {
        exerciseIds: ["e11", "e12"],
        taskIds: ["practice:b1-03:e11", "practice:b1-03:e12"],
        labelAr: "أكمل e11 (zu schützen) وأجب صحيحاً عن ترتيب e12 (Ich versuche, das Fahrrad zu nehmen) ضمن تمارين practice. الجدول والشرح لا يُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في العربية نقول «يُبنى البيت» (مجهول) — نغير حركة الفعل. الألمانية تبني المجهول بفعلين: werden + تصريف ثالث: Das Haus wird gebaut (البيت يُبنى). ولاحظ: werden تعمل هنا «علامة المجهول» وليست «يصبح»!",
    motivatingQuestionDe: "Was kann man für die Umwelt tun?",
    contextAr:
      "البيئة موضوع نقاش دائم في ألمانيا: نتعلم مفرداتها، ثم نضيف المبني للمجهول — أداة النقاش الرسمي والنصوص الإخبارية. وبمناسبة B1 نربط المجهول بالتركيب المصدري (zu + مصدر).",
    contextDe: "Das Klima wird immer wärmer.",
    connectionToPreviousAr: "تتذكر werden (يصبح) من A1. اليوم: werden ثانية بمعنى آخر — علامة المجهول. نفس الفعل، وظيفة جديدة.",
    activateVocabulary: [
      { de: "die Umwelt", ar: "البيئة" },
      { de: "das Klima", ar: "المناخ" },
      { de: "der Müll", ar: "النفايات" },
      { de: "recyceln", ar: "يعيد التدوير" },
      { de: "die Energie", ar: "الطاقة" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-12 — الطقس والفصول): اختر تصريف werden:",
      questionDe: "Es ___ kalt. (يصبح)",
      options: ["wird", "werde", "wirst", "werden"],
      correctIndex: 0,
      explanation: "مع es: wird (درس الطقس).",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«werde» مع ich، ولا يناسب es.",
        "«wirst» مع du، ولا يناسب es.",
        "«werden» مع الجمع أو sie، ولا يناسب الفاعل es.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): اختر Genitiv:",
      questionDe: "Wegen ___ Regens bleiben wir.",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "wegen + Genitiv: des Regens (درس التعليم).",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«der» لا تناسب حالة الجر بعد wegen هنا؛ الصيغة الصحيحة des.",
        "«dem» جر، ولكن الاسم مذكّر في الملكية بعد wegen.",
        "«den» مفعول به، ولا تناسب wegen.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-01 — السفر والعطلات): أكمل:",
      template: "Ich habe eine Pizza ___. (essen)",
      blanks: [
        { correct: "gegessen", options: ["gegessen", "geessen", "gegesst"] },
      ],
      explanation: "essen → gegessen (Perfekt).",
      errorType: "grammar",
    },
  ];
