/**
 * a2-07 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-07.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann „es gibt“ in einfachen bejahenden und verneinenden Aussagen sowie in Fragen verwenden und häufige Zeitformen wiedererkennen.",
      ar: "أستخدم es gibt في الإثبات والنفي والسؤال البسيط، وأتعرّف إلى صيغته الشائعة في الماضي وأداة الاسم المناسبة.",
      evidence: {
        exerciseIds: ["e1", "e2", "e7", "e13", "e14", "m1", "m3", "w1"],
        taskIds: [
          "practice:a2-07:e1",
          "flow-practice:a2-07:e1",
          "practice:a2-07:e2",
          "flow-practice:a2-07:e2",
          "practice:a2-07:e7",
          "practice:a2-07:e13",
          "practice:a2-07:e14",
          "mini-test:a2-07:m1",
          "mini-test:a2-07:m3",
          "writing:a2-07:w1",
        ],
        labelAr:
          "أجب إجابة صحيحة عن e1 وe2 وe7 وe13 وe14 وm1 وm3، ثم أنجز w1؛ تختبر المهام الإثبات والنفي والسؤال وأداة الاسم وصيغة الماضي المحددة، لا مجرد فتحها.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann häufige Personalpronomen mit passenden Verben verwenden.",
      ar: "أختار صيغة الضمير الألماني المناسبة في تراكيب مثل sehen وhelfen وgehören.",
      evidence: {
        exerciseIds: ["e3", "e5", "e6", "e9", "m2", "m4", "m5", "w2", "w3"],
        taskIds: [
          "practice:a2-07:e3",
          "flow-practice:a2-07:e3",
          "practice:a2-07:e5",
          "practice:a2-07:e6",
          "practice:a2-07:e9",
          "mini-test:a2-07:m2",
          "mini-test:a2-07:m4",
          "mini-test:a2-07:m5",
          "writing:a2-07:w2",
          "writing:a2-07:w3",
        ],
        labelAr:
          "أنجز مهام المطابقة والتصحيح والاختيار والإملاء e3 وe5 وe6 وe9 وm2 وm4 وm5 وw2 وw3 إجابةً صحيحة؛ لا تُعد الترجمة وحدها دليلاً على إتقان صيغ الحالات.",
        completion: "all-correct",
      },
    },
    {
      id: "z-bank",
      de: "Ich kann zentrale Ausdrücke für Barzahlung, Überweisung und Bargeldabhebung verstehen und einfache Formen verwenden.",
      ar: "أميّز معنى bar zahlen وüberweisen، وأختار صيغة abheben المناسبة وأكتب جملة قصيرة فيها تحويل.",
      evidence: {
        exerciseIds: ["e8", "e10", "e11", "e12"],
        taskIds: [
          "practice:a2-07:e8",
          "practice:a2-07:e10",
          "practice:a2-07:e11",
          "practice:a2-07:e12",
        ],
        labelAr:
          "أجب عن e8 وe11، واكتب جملة التحويل في e10، واختر تصريف abheben في e12؛ تُحتسب الإجابات المنفذة فقط.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann wichtige Einzelheiten aus kurzen Gesprächen über Konten und Geldautomaten heraushören.",
      ar: "أستخرج معلومات محددة من الحوارين القصيرين قبل إظهار نصيهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: [
          "listening:l1:q1",
          "listening:l1:q2",
          "listening:l2:q3",
          "listening:l2:q4",
        ],
        labelAr:
          "أجب عن أسئلة الاستماع q1–q4 قبل كشف التفريغ. فتح الحوار أو الإجابة بعد ظهور النص لا يثبت فهم المسموع.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann wichtige Informationen aus einer kurzen Geschichte über ein Konto entnehmen.",
      ar: "أستخرج الغرض والتفاصيل من قصة لينا وأجيب عن أسئلة القراءة الأربعة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-07:rq1",
          "reading:read-a2-07:rq2",
          "reading:read-a2-07:rq3",
          "reading:read-a2-07:rq4",
        ],
        labelAr:
          "اقرأ القصة ثم أجب عن rq1–rq4؛ إظهار النص أو المفردات وحده لا يُسجّل دليلاً على الفهم.",
        completion: "all-correct",
      },
    },
    {
      id: "z-writing",
      de: "Ich kann kurze Sätze über ein Konto und Personen schriftlich ergänzen oder formulieren.",
      ar: "أكتب جملة وجود، وأكمل ضمائر في سياق، وأدوّن جملة مسموعة في w1–w3.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: [
          "writing:a2-07:w1",
          "writing:a2-07:w2",
          "writing:a2-07:w3",
        ],
        labelAr:
          "أنجز مهام الكتابة الثلاث w1–w3 إجابةً صحيحة؛ لا تُحتسب مشاهدة المطلوب أو تشغيل الصوت وحدهما.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "كيف تقول بالألمانية إن قربك فرعاً مصرفياً أو جهاز صراف؟ لاحظ أداة الاسم في Es gibt einen Geldautomaten، ثم قارنها بصيغة السؤال Gibt es einen Geldautomaten?",
    motivatingQuestionDe: "Gibt es hier einen Geldautomaten?",
    contextAr:
      "نستخدم قصة وحوارين تعليميين متخيّلين للتدرّب على كلمات الحساب والبطاقة والسحب والتحويل. أسماء العروض والأسعار فيها أمثلة مختلقة وليست معلومات عن شروط بنك حقيقي.",
    contextDe: "Ich möchte ein Konto eröffnen und die Informationen verstehen.",
    connectionToPreviousAr:
      "هذه ليست أول مرة ترى فيها Dativ: ظهرت تراكيب مثل gefallen وpassen في A1-04 وA1-08، وhelfen في A1-06. نراجع الآن صيغ الضمائر ضمن أمثلة كاملة، ونميّز حالة الاسم الألمانية من الترجمة العربية؛ فلا نساوي Dativ مباشرةً بالجر العربي.",
    activateVocabulary: [
      { de: "das Konto", ar: "الحساب المصرفي" },
      { de: "die Bankkarte", ar: "البطاقة المصرفية" },
      { de: "Geld abheben", ar: "يسحب نقوداً" },
      { de: "Geld überweisen", ar: "يحوّل المال إلى حساب" },
      { de: "bar bezahlen", ar: "يدفع نقداً" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة مستوى A1 من الدرس a1-07: اختر أداة الاسم المناسبة بعد الفعل kaufen:",
      questionDe: "Ich kaufe ___ Kaffee.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation:
        "Kaffee مذكر هنا، وkaufen يأخذ مفعولاً في Akkusativ: einen Kaffee. لا تصلح ein أو eine لمطابقة الجنس، وder صيغة Nominativ.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«ein» صيغة المرفوع أو المحايد؛ و«kaufen» ينصب المذكر ⇒ «einen Kaffee».",
        "«eine» للمؤنث؛ و«der Kaffee» مذكر.",
        "«der» أداة تعريف مرفوعة؛ والمطلوب تنكيرٌ في Akkusativ. ",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة مفردات مستوى A1 من الدرس a1-07: اختر المعنى الصحيح:",
      questionDe: "das Geld",
      options: ["المال", "الذهب", "البطاقة", "الحساب"],
      correctIndex: 0,
      explanation:
        "das Geld تعني المال. الذهب هو Gold، والبطاقة Karte، والحساب Konto.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "الذهب «das Gold» بحرف G، وهو كلمةٌ أخرى.",
        "البطاقة «die Karte»، لا «das Geld».",
        "الحساب «das Konto»، لا المال نفسه. ",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة مستوى A1 من الدرس a1-07: أكمل جمع الاسم مع أداة التعريف، لا عبارة مبلغ مالي:",
      template: "der Euro → die ___",
      blanks: [{ correct: "Euros", options: ["Euros", "Euro", "Euroen"] }],
      explanation:
        "في جمع الاسم مع أداة التعريف يورد Duden الصيغة die Euros. لكن عند ذكر مبلغ مالي يقال عادةً 10 Euro من دون s؛ فالاختيار يتبع السياق.",
      errorType: "plural",
    },
  ];
