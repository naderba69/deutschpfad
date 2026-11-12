import type { Lesson } from "@/types/lesson";

/** مراجعة تراكمية من الدرس التأسيسي السابق A1-00: الأبجدية والأصوات. */
export const review: NonNullable<Lesson["review"]> = [
  {
    id: "r1",
    type: "multiple-choice",
    instructionAr: "مراجعة تراكمية من مستوى A1، الدرس a1-00 — اختر المجموعة التي تكتب صوت «ش» وحده في بداية كلمة «Schule».",
    questionDe: "Welche Buchstabenkombination schreibt den sch-Laut am Anfang von „Schule“?",
    questionAr: "أي مجموعة حروف تكتب صوت «ش» وحده في بداية «Schule»؟",
    options: ["sch", "ch", "st", "ei"],
    correctIndex: 0,
    optionExplanations: [
      undefined,
      "لا — «ch» صوت مختلف كما في «ich» أو «Buch»؛ صوت «ش» تكتبه «sch».",
      "لا — «st» في أول الكلمة تمثل المقطعين الصوتيين /ʃt/ (ش + ت)، لا صوت /ʃ/ وحده الذي يبدأ به «Schule».",
      "لا — «ei» تُنطق «آي» كما في «Zeit»؛ والصوت «ش» تكتبه «sch».",
    ],
    explanation: "المجموعة «sch» تُنطق شيناً واحدة، مثل «Schule».",
    errorType: "spelling",
  },
  {
    id: "r2",
    type: "fill-blank",
    instructionAr: "مراجعة تراكمية من مستوى A1، الدرس a1-00 — أكمل حركة الجمع المعلمة.",
    template: "M___tter (Plural von Mutter)",
    blanks: [{ correct: "ü", options: ["ü", "u", "o"] }],
    hint: "الجمع يغيّر u إلى الحرف المعلم ü.",
    explanation: "مفردها «Mutter»، وجمعها «Mütter» بحرف ü.",
    errorType: "spelling",
  },
  {
    id: "r3",
    type: "multiple-choice",
    instructionAr: "مراجعة تراكمية من مستوى A1، الدرس a1-00 — اختر التهجئة الصحيحة لكلمة «وقت».",
    questionDe: "Welche Schreibung ist richtig?",
    questionAr: "أي كتابة صحيحة لكلمة «Zeit» (وقت)؟",
    options: ["Zeit", "Ziet", "Zeid", "Zeitt"],
    correctIndex: 0,
    optionExplanations: [
      undefined,
      "لا — في «Zeit» يأتي «ei» بهذا الترتيب، لا «ie».",
      "لا — الكلمة تنتهي بحرف «t» مهموس، لا «d».",
      "لا — نهاية الكلمة حرف «t» واحد؛ والصحيح «Zeit».",
    ],
    explanation: "«Zeit» = وقت: Z + ei + t؛ و«ei» تُنطق آي.",
    errorType: "spelling",
  },
];
