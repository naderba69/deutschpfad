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
        exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4", "listening:l4:q5", "listening:l4:q6", "listening:l4:q7"],
        labelAr: "أجب صحيحاً عن أسئلة النقاش البيئي والممارسات اليومية وتوفير الكهرباء وإعادة استخدام الأجهزة، دون كشف التفريغ. كشف النص لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann das Vorgangspassiv im Präsens und Präteritum bilden: wird/wurde + Partizip II.",
      ar: "أن أبني المبني للمجهول: يُبنى / بُني.",
      evidence: {
        exerciseIds: ["e1", "e2", "e7", "m1"],
        taskIds: ["practice:b1-03:e1", "practice:b1-03:e2", "practice:b1-03:e7", "mini-test:b1-03:m1"],
        labelAr: "أجب صحيحاً عن e1 (المضارع) وe2 (الماضي البسيط)، وحوّل e7 من النشط إلى المجهول، وأجب عن m1. هذه المهام تختبر صيغتي الحاضر والماضي البسيط؛ قراءة الجدول لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann mit man eine Alternative zum Passiv formulieren.",
      ar: "أن أصوغ بفاعل عام man بديلاً تعبيرياً عن المبني للمجهول.",
      evidence: {
        exerciseIds: ["e6", "m5"],
        taskIds: ["practice:b1-03:e6", "mini-test:b1-03:m5"],
        labelAr: "أكمل e6 وm5 بالاختيار الصحيح بين man والمجهول. الأمثلة المعروضة في الشرح لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann den Infinitiv mit zu in einfachen Sätzen benutzen.",
      ar: "أن أستخدم التركيب المصدري zu + مصدر في جمل النصح البيئي.",
      evidence: {
        exerciseIds: ["e11", "e12"],
        taskIds: ["practice:b1-03:e11", "practice:b1-03:e12"],
        labelAr: "أكمل e11 (zu schützen) ورتّب e12 (Ich versuche, mit dem Fahrrad zu fahren) ضمن تمارين practice. الجدول والشرح لا يُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في هذا الدرس نركّز على Vorgangspassiv: werden مصرّفاً + Partizip II، مثل Das Haus wird gebaut. أمّا werden مع صفة فيمكن أن تعني «يصبح» (Das Klima wird wärmer)، ومع المصدر تدخل في Futur (Das Klima wird sich verändern). يحدد التركيب المعنى.",
    motivatingQuestionDe: "Was kann man für die Umwelt tun?",
    contextAr:
      "نتدرب على مفردات البيئة، وVorgangspassiv في الحاضر والماضي البسيط، وعلى zu + مصدر في أمثلة قصيرة.",
    contextDe: "Die Temperaturen steigen.",
    connectionToPreviousAr: "تتذكر werden في معنى «يصبح»؛ هنا نميّز هذا الاستعمال عن Vorgangspassiv وFutur من بنية الجملة.",
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
