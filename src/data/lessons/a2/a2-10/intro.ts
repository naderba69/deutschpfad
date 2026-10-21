/**
 * a2-10 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann weil, wenn und ob in kurzen Kontexten unterscheiden und die Verbendstellung im Nebensatz anwenden.",
      ar: "أميّز معنى weil وwenn وob في سياقات قصيرة، وأرتب الفعل في نهاية الجملة الثانوية في النمط المستهدف.",
      evidence: {
        exerciseIds: ["e1", "e2", "e4", "e7", "e9", "m1", "m3", "m5"],
        taskIds: [
          "practice:a2-10:e1",
          "practice:a2-10:e2",
          "practice:a2-10:e4",
          "practice:a2-10:e7", "practice:a2-10:e9",
          "mini-test:a2-10:m1", "flow-mini-test:a2-10:m1",
          "mini-test:a2-10:m3", "mini-test:a2-10:m5",
        ],
        labelAr: "أنجز اختيار الروابط وترتيبها في e1/e2/e4/e7/e9 وm1/m3/m5؛ لا يكفي فتح النشاط.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann ausgewählte Possessivbegleiter im Akkusativ und Dativ mit den geübten Nomen verwenden.",
      ar: "أستخدم صيغ ملكية منتقاة في Akkusativ وDativ مع الأسماء التي تدربت عليها، لا في كل الحالات.",
      evidence: {
        exerciseIds: ["e5", "e6", "m2", "m4"],
        taskIds: [
          "practice:a2-10:e5", "practice:a2-10:e6",
          "mini-test:a2-10:m2", "flow-mini-test:a2-10:m2", "mini-test:a2-10:m4",
        ],
        labelAr: "صحّح أو أكمل أدوات الملكية مع Bruder وVater وMutter في e5/e6/m2/m4.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann gezielte Informationen und einfache Gründe aus einem kurzen Text über Lernen entnehmen.",
      ar: "أستخرج معلومات محددة وسبباً بسيطاً من نص قصير عن التعلم.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-10:rq1", "reading:read-a2-10:rq2",
          "reading:read-a2-10:rq3", "reading:read-a2-10:rq4",
        ],
        labelAr: "أجب عن أسئلة موعد الدورة وسبب الدراسة ومعلومة المكتبة والاستعداد في rq1–rq4.",
        completion: "all-correct",
      },
    },
    {
      id: "z-listening",
      de: "Ich kann ausgewählte Gründe, Lernzeiten, indirekte Fragen, Gefühle und Kurszeiten aus drei kurzen Dialogen heraushören.",
      ar: "ألتقط أسباب التعلم وأوقاته، ومضمون سؤال غير مباشر، ومشاعر المتحدثين وموعد الدورة من ثلاثة حوارات قصيرة قبل كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l2:q4", "listening:l3:q5", "listening:l3:q6", "listening:l3:q7"],
        labelAr: "أجب عن أسئلة سبب التعلم ووقته، وشك Karim وشعوره، وموعد الدورة ووصول Amir وطريقة تعلمه؛ لا تُحتسب إجابة ما بعد كشف النص.",
        completion: "all-correct",
      },
    },
    {
      id: "z-writing",
      de: "Ich kann einen kurzen vorgegebenen Satz mit weil formulieren, Konnektoren ergänzen und einen Satz nach dem Hören notieren.",
      ar: "أصوغ جملة قصيرة من معطيات محددة بـweil، وأكمل روابط، وأدوّن جملة مسموعة؛ هذه مهام كتابة مضبوطة لا كتابة حرة.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: ["writing:a2-10:w1", "writing:a2-10:w2", "writing:a2-10:w3"],
        labelAr: "أنجز الصياغة الموجّهة في w1، وإكمال الروابط في w2، والإملاء في w3.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في الجملة التي تبدأ بـweil أو wenn أو ob، أين يأتي الفعل المصرف؟ وهل تؤدي هذه الروابط المعنى نفسه؟",
    motivatingQuestionDe: "Warum lernst du Deutsch?",
    contextAr:
      "تتحدث نورا عن دورة اللغة وخططها الدراسية. يتيح السياق مقارنة السبب والشرط أو الزمن والسؤال غير المباشر، ثم ملاحظة صيغ ملكية محددة.",
    contextDe: "Ich lerne Deutsch, weil ich in Deutschland studieren will.",
    connectionToPreviousAr:
      "يستند الدرس إلى أمثلة الجملة الثانوية التي ظهرت سابقاً مع dass، ثم يضيف استعمالات منتقاة لـweil وwenn وob. لا تعني هذه المراجعة أن جميع أشكال الجملة الثانوية قد دُرست.",
    activateVocabulary: [
      { de: "der Kurs", ar: "الدورة أو المساق، بحسب السياق" },
      { de: "lernen", ar: "يتعلم أو يدرس" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "der Unterricht", ar: "التعليم أو الحصة الدراسية" },
      { de: "studieren", ar: "يدرس في الجامعة" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-01 — التعارف والتحيات): اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ Deutsch. (أتعلم)",
      options: ["lerne", "lernst", "lernt", "lernen"],
      correctIndex: 0,
      explanation: "مع ich: lerne (درس التعارف).",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«lernst» تصريف du؛ والفاعل هنا «Ich» ⇒ «Ich lerne».",
        "«lernt» مع er/sie/es أو ihr، لا مع «Ich».",
        "«lernen» مصدر أو صيغة wir/sie؛ مع «Ich» نقول «lerne». ",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-06 — الإعلام والأخبار): اختر الرابط الذي يقدّم مضمون الاعتقاد بوصفه خبراً:",
      questionDe: "Ich glaube, ___ das stimmt.",
      options: ["dass", "weil", "wenn", "ob"],
      correctIndex: 0,
      explanation: "في هذا السياق، يقدّم dass مضمون الاعتقاد: «أعتقد أن ذلك صحيح». أما weil فيقدّم سبباً، وwenn شرطاً أو زمناً، وob سؤالاً غير مباشر بنعم/لا.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«weil» يقدّم سبباً ويصرف الفعل إلى آخر الجملة؛ هنا مضمون اعتقاد لا سبب.",
        "«wenn» شرط أو زمن متكرر؛ «Ich glaube, wenn das stimmt» يغيّر المعنى.",
        "«ob» سؤال غير مباشر بنعم/لا، و«glauben» يقرر مضموناً خبرياً لا يستفهم عنه. ",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-02 — العائلة والأصدقاء): أكمل الملكية:",
      template: "Das ist ___ Bruder. (أخي)",
      blanks: [
        { correct: "mein", options: ["mein", "meine", "meinen"] },
      ],
      explanation: "Bruder اسم مذكر، والأداة الملكية هنا في حالة Nominativ بعد das ist: mein Bruder. (درس العائلة).",
      errorType: "grammar",
    },
  ];
