/**
 * a1-02 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-02.ts في الدفعة 96 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 1) الأهداف التعليمية */
export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann häufige Familienwörter erkennen und passenden Bedeutungen zuordnen.",
      ar: "أن أتعرف على كلمات الأسرة الشائعة وأصلها بمعانيها المناسبة.",
      evidence: {
        exerciseIds: ["e5", "e17"],
        taskIds: ["practice:a1-02:e5", "practice:a1-02:e17"],
        labelAr: "مطابقة كلمات العائلة بمعانيها (e5) ومطابقة المفرد بجمعه (e17)، دون كشف الحل.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann im Nominativ zwischen mein und meine passend zum Nomen wählen.",
      ar: "أن أختار بين mein وmeine في حالة الرفع بحسب الاسم المملوك عند الحديث عن نفسي.",
      evidence: {
        exerciseIds: ["e7", "m4"],
        taskIds: ["practice:a1-02:e7", "mini-test:a1-02:m4"],
        labelAr: "ملء الفراغات بـ mein أو meine حسب جنس الاسم المملوك (e7 وm4).",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann vorgegebene einfache Sätze zur Vorstellung einer Familie ordnen und ergänzen.",
      ar: "أن أرتّب وأكمل جملاً بسيطة معطاة لتقديم أفراد الأسرة.",
      evidence: {
        exerciseIds: ["e3", "w2"],
        taskIds: ["practice:a1-02:e3", "writing:a1-02:w2"],
        labelAr: "ترتيب جملة تقديم الأب (e3) وملء الفراغات في تقديم العائلة كتابةً (w2).",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann eine Frage mit Hast du …? erkennen und aus vorgegebenen Wörtern bilden.",
      ar: "أن أتعرف على سؤال Hast du …? وأرتب كلماته المعطاة لتكوين السؤال.",
      evidence: {
        exerciseIds: ["e2", "e4"],
        taskIds: ["practice:a1-02:e2", "practice:a1-02:e4"],
        labelAr: "فهم سؤال «هل لديك إخوة؟» (e2) وترتيب صيغة السؤال (e4).",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann ausgewählte Possessivartikel im Nominativ nach Bezugsperson und Nomen wählen.",
      ar: "أن أختار بعض أدوات الملكية في الرفع بحسب الشخص المنسوبة إليه العلاقة والاسم الموصوف.",
      evidence: {
        exerciseIds: ["e9", "e10", "e11", "e13", "e14", "e15", "e18"],
        taskIds: [
          "practice:a1-02:e9",
          "practice:a1-02:e10",
          "practice:a1-02:e11",
          "practice:a1-02:e13",
          "practice:a1-02:e14",
          "practice:a1-02:e15",
          "practice:a1-02:e18",
        ],
        labelAr: "تمييز الجذر وفق الشخص أو المجموعة المنسوبة إليها العلاقة، والنهاية وفق الاسم المملوك في الأمثلة المختارة.",
        completion: "all-correct",
      },
    },
  ];

/* 2) التمهيد */
export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "في العربية يمكن أن نعبّر عن الملكية بضمير متصل بالاسم، مثل «أبي» و«أمي». كيف تعتقد أن الألمانية تعبّر عن هذه العلاقة؟ خمّن قبل أن نرى القاعدة!",
    motivatingQuestionDe: "Wie sagt man „mein Vater“ auf Arabisch?",
    contextAr:
      "في العربية كثيراً ما نعبّر عن الملكية بضمير متصل بالاسم، مثل أبي وأمي. وفي عبارة ألمانية مثل mein Vater تأتي أداة الملكية قبل الاسم. سنلاحظ متى نستخدم mein ومتى meine، مع أن الأداة قد تأخذ نهايات أخرى في حالات إعرابية مختلفة.",
    contextDe: "mein Vater, meine Mutter, mein Bruder, meine Schwester …",
    connectionToPreviousAr:
      "في الدرس السابق تعلمنا: Ich bin / Ich heiße / Woher kommst du? اليوم سنضيف العائلة لنتمكن من تقديم نفسنا بشكل أوسع.",
    activateVocabulary: [
      { de: "die Familie", ar: "العائلة" },
      { de: "der Vater", ar: "الأب" },
      { de: "die Mutter", ar: "الأم" },
      { de: "der Bruder", ar: "الأخ" },
      { de: "die Schwester", ar: "الأخت" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-01 — الفعل sein): اختر الشكل الصحيح.",
      questionDe: "Ich ___ aus Tunesien.",
      questionAr: "أنا من تونس.",
      options: ["bin", "bist", "ist", "sind"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «bist» للمخاطب «du bist»؛ والفاعل «ich» فيلزم «bin».", "لا — «ist» للغائب المفرد «er/sie ist»؛ ومع «ich» يلزم «Ich bin aus Tunesien».", "لا — «sind» للجمع أو للاحترام «Sie sind»؛ والفاعل «ich» فيلزم «bin»."],
      explanation: "مع ich يكون الفعل sein على شكل bin.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-01 — أسئلة W): أكمل سؤال المكان.",
      template: "___ wohnst du? — In Tunis.",
      blanks: [{ correct: "Wo", options: ["Wo", "Wer", "Was", "Woher"] }],
      hint: "Wo = أين (مكان الإقامة).",
      explanation: "Wo wohnst du? = أين تسكن؟",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-01 — الأفعال المنتظمة في المضارع): اختر التصحيح المناسب للكلمة الخاطئة.",
      wrongSentence: "Er lernen Deutsch.",
      wrongWord: "lernen",
      correctWord: "lernt",
      options: ["lernt", "lernen", "lerne", "lernst"],
      explanation: "مع er تأخذ الأفعال النهاية -t: er lernt.",
      errorType: "conjugation",
    },
  ];
