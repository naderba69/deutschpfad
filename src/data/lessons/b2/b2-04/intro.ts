/**
 * b2-04 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann literarische Texte verstehen.",
      ar: "أن أفهم حوارات وتعليقات أدبية قصيرة عن كتاب أو كاتب.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4", "q5"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l1:q4", "listening:l3:q5"],
        labelAr: "أجيب صحيحاً بعد الاستماع إلى l1 وl2 في q1 إلى q5، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Partizip I und II als Adjektive benutzen.",
      ar: "أن أستخدم Partizip I/II كصفات: الطفل اللاعب، الرسالة المكتوبة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e6", "m1", "m2", "w1", "w2"],
        taskIds: [
          "practice:b2-04:e1",
          "practice:b2-04:e2",
          "practice:b2-04:e6",
          "mini-test:b2-04:m1",
          "mini-test:b2-04:m2",
          "writing:b2-04:w1",
          "writing:b2-04:w2",
        ],
        labelAr: "أختار المشارك الصحيح وأكمل نهاياته (e1 وe2 وe6 وm1 وm2 وw1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Relativsätze durch Partizipien verkürzen.",
      ar: "أن أختصر الجمل النسبية بالمشاركات.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e7", "w3"],
        taskIds: ["practice:b2-04:e7", "writing:b2-04:w3"],
        labelAr: "أحوّل الجملة النسبية إلى صفة مشتقة صحيحة (e7 وw3)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Partizipialkonstruktionen in kurzen Texten erkennen und korrigieren.",
      ar: "أن أتعرّف على الصفات المشتقة في جملة وأصحح نهايتها عند الخطأ.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e5", "e9", "m4"],
        taskIds: ["practice:b2-04:e5", "practice:b2-04:e9", "mini-test:b2-04:m4"],
        labelAr: "أصحح نهاية المشارك في الجملة الخاطئة (e5 وe9 وm4)، دون كشف الحل.",
      },
    },
    {
      id: "z5",
      de: "Ich kann zentrale Informationen aus einem kurzen literarischen Text entnehmen.",
      ar: "أن أستخرج المعلومات الأساسية من نص أدبي قصير.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: ["reading:read-b2-04:rq1", "reading:read-b2-04:rq2", "reading:read-b2-04:rq3", "reading:read-b2-04:rq4"],
        labelAr: "أجيب صحيحاً عن أسئلة فهم نص القراءة الأربعة، دون كشف الإجابة.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "قل: «الطفل الذي يلعب» — والعربية تعبّر أحياناً بالوصف: «الطفل اللاعب». الألمانية تفعل هذا بانتظام: das Kind, das spielt → das spielende Kind (الطفل اللاعب). وللماضي: der Brief, der geschrieben wurde → der geschriebene Brief (الرسالة المكتوبة). هذا أسلوب شائع في الكتابة الأدبية والصحفية.",
    motivatingQuestionDe: "Was liest du gern?",
    contextAr:
      "ندخل عالم الأدب والصحافة: نتعلم المشاركات الصفية، وهي من أساليب النص الألماني الراقية. تساعدك على فهم الروايات والمقالات.",
    contextDe: "Der berühmte, viel gelesene Roman.",
    connectionToPreviousAr: "تتذكر الصفات (ein gutes Buch) والنسبية (der Mann, der...) من B1. اليوم: المشاركات — الجمع بينهما: صفة من فعل تعوض الجملة النسبية.",
    activateVocabulary: [
      { de: "die Literatur", ar: "الأدب" },
      { de: "der Roman", ar: "الرواية" },
      { de: "der Beitrag", ar: "المقال/المساهمة" },
      { de: "der Autor", ar: "الكاتب" },
      { de: "lesen", ar: "يقرأ" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-06 — الثقافة والفن): اختر نهاية الصفة:",
      questionDe: "ein ___ (gut) Buch",
      options: ["gutes", "gute", "guten", "guter"],
      correctIndex: 0,
      explanation: "محايد مع ein: gutes (درس الثقافة B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«gute» تستعمل مع المؤنث بعد ein، والكلمة Buch محايدة.",
        "«guten» نهاية الجمع أو الجر، ولا تناسب ein مع Buch.",
        "«guter» نهاية المذكر، والكلمة Buch محايدة.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): اختر النسبية:",
      questionDe: "Der Mann, ___ dort steht.",
      options: ["der", "den", "dem", "dessen"],
      correctIndex: 0,
      explanation: "فاعل مذكر → der.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«den» حالة مفعولية، والفاعل في الجملة الموصولة مذكّر في حالة الرفع.",
        "«dem» حالة جر، ولا تناسب فاعل الجملة.",
        "«dessen» تعني ملكية، ولا تناسب الجملة.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-01 — السفر والعطلات): أكمل:",
      template: "Ich habe ein Buch ___. (قراءة)",
      blanks: [
        { correct: "gelesen", options: ["gelesen", "gelest", "lesen"] },
      ],
      explanation: "lesen → gelesen (Perfekt).",
      errorType: "grammar",
    },
  ];
