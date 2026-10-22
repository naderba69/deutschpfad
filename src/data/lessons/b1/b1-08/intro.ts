/**
 * b1-08 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann zwei Gespräche über Technik und technische Entscheidungen verstehen und die Fragen dazu beantworten.",
      ar: "أن أفهم حوارين عن التقنية والقرارات التقنية وأجيب عن تفاصيلهما.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن q1 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، وعن q4 بعد الاستماع إلى l3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann die Konnektoren nicht nur ... sondern auch, sowohl ... als auch, weder ... noch und entweder ... oder richtig verwenden.",
      ar: "أن أستخدم الروابط المزدوجة (ليس فقط... بل أيضاً، كلاهما... و، لا... ولا، إما... أو) في موضعها الصحيح.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e6", "e9", "m2", "m5", "w2"],
        taskIds: [
          "practice:b1-08:e2",
          "practice:b1-08:e6",
          "practice:b1-08:e9",
          "mini-test:b1-08:m2",
          "mini-test:b1-08:m5",
          "writing:b1-08:w2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الروابط المزدوجة (e2 وe6 وe9 وm2 وm5 وw2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann das Futur I mit werden und einem Infinitiv am Satzende bilden.",
      ar: "أن أكوّن المستقبل (Futur I) بـ werden والمصدر في آخر الجملة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e4", "e5", "e7", "m1", "m4", "w1"],
        taskIds: [
          "practice:b1-08:e1",
          "practice:b1-08:e4",
          "practice:b1-08:e5",
          "practice:b1-08:e7",
          "mini-test:b1-08:m1",
          "mini-test:b1-08:m4",
          "writing:b1-08:w1",
        ],
        labelAr: "أجيب صحيحاً عن تمارين المستقبل (e1 وe4 وe5 وe7 وm1 وm4 وw1)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
      {
      id: "z4",
      de: "Ich kann Vor- und Nachteile mit einerseits ... andererseits gegenüberstellen und eine Argumentation im Gespräch verstehen.",
      ar: "أن أفهم حجة في حوار عن مخاطر التقنية، وأوازن بين المزايا والمخاطر بـ einerseits... andererseits.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q2", "e11"],
        taskIds: ["listening:l1:q2", "practice:b1-08:e11"],
        labelAr: "أجيب صحيحاً عن q2 بعد الاستماع إلى l1، وأكمل e11 بالرابط الصحيح. كشف النص لا يُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في A1 تعلمت werden (يصبح) وفي B1 تعلمته (مجهول). واليوم الاستخدام الثالث: المستقبل! Ich werde lernen = سأتعلم. هل لاحظت؟ werden يتغير معناها حسب ما يليها: صفة (يصبح) / تصريف ثالث (مجهول) / مصدر (مستقبل)!",
    motivatingQuestionDe: "Wie wird die Zukunft aussehen?",
    contextAr:
      "نناقش التقنية: مزايا وعيوب، ثم نضيف الروابط المزدوجة للتعبير المتوازن، والمستقبل للتحدث عن الغد.",
    contextDe: "Die Technik wird sich weiter entwickeln.",
    connectionToPreviousAr: "تتذكر werden الثلاثية (يصبح/مجهول). اليوم: المستقبل — يكتمل مثلث werden. والروابط المزدوجة تضيف عمقاً لتعبيرك.",
    activateVocabulary: [
      { de: "die Technik", ar: "التقنية" },
      { de: "digital", ar: "رقمي" },
      { de: "der Computer", ar: "الحاسوب" },
      { de: "die Zukunft", ar: "المستقبل" },
      { de: "die Entwicklung", ar: "التطور" },
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
        "«werden» مع الجمع أو sie، ولا يناسب es.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): اختر المجهول:",
      questionDe: "Das Haus ___ gerade gebaut. (يُبنى الآن)",
      options: ["wird", "wurde", "wirst", "werde"],
      correctIndex: 0,
      explanation: "مجهول مضارع (درس البيئة).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wurde» صيغة الماضي، والجملة في المضارع (يُبنى الآن).",
        "«wirst» مع du، ولا يناسب الفاعل das Haus.",
        "«werde» مع ich، ولا يناسب الفاعل das Haus.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-10 — العمل والمهن): أكمل:",
      template: "Ich ___ am Computer. (أعمل)",
      blanks: [
        { correct: "arbeite", options: ["arbeite", "arbeitest", "arbeitet"] },
      ],
      explanation: "مع ich: arbeite (درس المهن).",
      errorType: "conjugation",
    },
  ];
