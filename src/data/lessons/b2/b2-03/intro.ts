/**
 * b2-03 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann rechtliche Grundbegriffe verstehen.",
      ar: "أن أفهم المفاهيم القانونية الأساسية في حوار قصير.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن q1 بعد الاستماع إلى l1، وعن q2 وq3 بعد الاستماع إلى l2، وعن q4 بعد الاستماع إلى l3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Relativsätze mit Präpositionen bilden.",
      ar: "أن أبني الجمل النسبية مع حروف الجر: auf den، mit dem.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e4", "e5", "m1", "w1", "w2"],
        taskIds: [
          "practice:b2-03:e1",
          "practice:b2-03:e4",
          "practice:b2-03:e5",
          "mini-test:b2-03:m1",
          "writing:b2-03:w1",
          "writing:b2-03:w2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين حرف الجر قبل الضمير النسبي (e1 وe4 وe5 وm1 وw1 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann was und wo als Relativpronomen benutzen.",
      ar: "أن أستخدم was وwo كضمائر وصل.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e7", "e9", "m2", "m3"],
        taskIds: [
          "practice:b2-03:e2",
          "practice:b2-03:e7",
          "practice:b2-03:e9",
          "mini-test:b2-03:m2",
          "mini-test:b2-03:m3",
        ],
        labelAr: "أجيب صحيحاً عن تمارين was وwo وترتيبهما (e2 وe7 وe9 وm2 وm3)، دون كشف الحل.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Fachwörter des Rechts erkennen: Recht, Gesetz, Vertrag, Gericht.",
      ar: "أن أتعرّف على مفردات قانونية أساسية: الحق والقانون والعقد والمحكمة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e3", "e8"],
        taskIds: ["practice:b2-03:e3", "practice:b2-03:e8"],
        labelAr: "أربط الكلمات بمعانيها (e3) وأختار معنى der Zeuge (e8)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في B1: Der Mann, der dort steht. اليوم نرقّي: الجملة النسبية مع حرف جر: Der Mann, auf den ich warte, ist mein Anwalt. (الرجل الذي أنتظره...). ولاحظ: حرف الجر يبقى والضمير يأخذ حالته: auf + den! وأيضاً wo/was للجمل الكاملة.",
    motivatingQuestionDe: "Was steht im Vertrag?",
    contextAr:
      "القانون يحيط بنا: عقود، شروط، حقوق. نتعلم مفرداته والجمل النسبية المتقدمة — أهم أداة لفهم النصوص القانونية.",
    contextDe: "Das Gesetz, auf das sich alle berufen, ist alt.",
    connectionToPreviousAr: "تتذكر Relativsätze الأساسية (der/die/das) من B1. اليوم: مع حروف الجر + wo/was — القفزة إلى B2.",
    activateVocabulary: [
      { de: "das Recht", ar: "القانون/الحق" },
      { de: "das Gesetz", ar: "القانون" },
      { de: "der Vertrag", ar: "العقد" },
      { de: "der Anwalt", ar: "المحامي" },
      { de: "das Gericht", ar: "المحكمة" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): اختر الضمير النسبي:",
      questionDe: "Der Mann, ___ dort steht, ist mein Chef.",
      options: ["der", "den", "dem", "dessen"],
      correctIndex: 0,
      explanation: "فاعل مذكر → der (درس التعليم B1).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«den» حالة مفعولية، والفاعل في الجملة الموصولة مذكّر في حالة الرفع.",
        "«dem» حالة جر، ولا تناسب فاعل الجملة.",
        "«dessen» تعني ملكية، ولا تناسب الجملة.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): اختر الضمير النسبي:",
      questionDe: "Das Buch, ___ ich lese, ist gut. (نصب)",
      options: ["das", "der", "die", "dem"],
      correctIndex: 0,
      explanation: "نصب محايد → das.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«der» مذكّر، والكلمة Buch محايدة.",
        "«die» مؤنث، والكلمة Buch محايدة.",
        "«dem» حالة جر، ولا تناسب مفعول الفعل lesen.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (المبني للمجهول — b1-03): أكمل:",
      template: "Das Problem ___ von der Regierung diskutiert.",
      blanks: [
        { correct: "wird", options: ["wird", "ist", "hat"] },
      ],
      explanation: "المبني للمجهول: werden + Partizip II ⇒ wird diskutiert (درس b1-03).",
      errorType: "grammar",
    },
  ];
