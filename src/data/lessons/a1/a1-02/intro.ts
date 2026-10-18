/**
 * a1-02 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-02.ts في الدفعة 96 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 1) الأهداف التعليمية */
export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Familienmitglieder nennen.",
      ar: "أن أسمّي أفراد العائلة بالألمانية (Vater, Mutter, Bruder...).",
      evidence: {
        exerciseIds: ["e5", "e17"],
        taskIds: ["practice:a1-02:e5", "practice:a1-02:e17"],
        labelAr: "مطابقة كلمات العائلة بمعانيها (e5) ومطابقة المفرد بجمعه (e17)، دون كشف الحل.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann mein/meine im Nominativ passend zum Besitzer und zum Nomen verwenden.",
      ar: "أن أختار جذر أداة الملكية بحسب المالك، وصيغتها بحسب الاسم المملوك في حالة الرفع.",
      evidence: {
        exerciseIds: ["e7", "m4"],
        taskIds: ["practice:a1-02:e7", "mini-test:a1-02:m4"],
        labelAr: "ملء الفراغات بـ mein أو meine حسب جنس الاسم المملوك (e7 وm4).",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann meine Familie vorstellen.",
      ar: "أن أقدّم عائلتي بجمل بسيطة (Das ist mein Vater...).",
      evidence: {
        exerciseIds: ["e3", "w2"],
        taskIds: ["practice:a1-02:e3", "writing:a1-02:w2"],
        labelAr: "ترتيب جملة تقديم الأب (e3) وملء الفراغات في تقديم العائلة كتابةً (w2).",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann fragen: Hast du Geschwister?",
      ar: "أن أسأل عن الإخوة والأخوات: هل لديك إخوة أو أخوات؟",
      evidence: {
        exerciseIds: ["e2", "e4"],
        taskIds: ["practice:a1-02:e2", "practice:a1-02:e4"],
        labelAr: "فهم سؤال «هل لديك إخوة؟» (e2) وترتيب صيغة السؤال (e4).",
        completion: "all-correct",
      },
    },
  ];

/* 2) التمهيد */
export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "قل «أبي» و«أمي» بالعربية... هل لاحظت أن العربية تضيف حرف الياء لنهاية الكلمة (أب + ي)? كيف تعتقد أن الألمانية تعبّر عن الملكية؟ قبل أن نرى القاعدة، خمّن!",
    motivatingQuestionDe: "Wie sagt man „mein Vater“ auf Arabisch?",
    contextAr:
      "في العربية نقول: أبي، أمّي، أخي — الملكية تُلحق بنهاية الاسم. في الألمانية الأمر مختلف تماماً: نضع كلمة مستقلة قبل الاسم (mein Vater). وسنكتشف معاً متى تكون mein ومتى meine.",
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
      instructionAr: "مراجعة منتقاة من A1 (درس a1-01 — الأفعال المنتظمة في المضارع): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Er lernen Deutsch.",
      wrongWord: "lernen",
      correctWord: "lernt",
      options: ["lernt", "lernen", "lerne", "lernst"],
      explanation: "مع er تأخذ الأفعال النهاية -t: er lernt.",
      errorType: "conjugation",
    },
  ];
