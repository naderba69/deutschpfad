/**
 * ═══════════════════════════════════════════════════════════
 *  بنك أسئلة تحديد المستوى السريع (15 سؤالاً: 5 A1 + 5 A2 + 5 B1)
 *  — أُخرج من `placement-test.tsx` (الدفعة 122) ليُصرَّح ويُحرس:
 *  كل `explanation` شاهدٌ بألمانية `[A-Za-zÄÖÜäöüß]{3,}`، وشاشة
 *  النتيجة تعرض المراجعة (جوابك · الصحيح · الشاهد).
 * ═══════════════════════════════════════════════════════════
 */
import type { McqExercise } from "@/types/lesson";

/** بنك أسئلة التحديد — A1 ثم A2 ثم B1 (المبسط) — 5 أسئلة لكل مستوى */
export const PLACEMENT_BANK: McqExercise[] = [
  /* ── A1 (مستوى 1-5) ── */
  {
    id: "pl-a1-1", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1) — اختر الإجابة الصحيحة:",
    questionDe: "Ich ___ Anna.",
    options: ["bin", "bist", "ist", "sind"],
    correctIndex: 0, explanation: "مع ich: bin. (أساسيات A1)",
    errorType: "conjugation",
  },
  {
    id: "pl-a1-2", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "Ich esse ___ Apfel.",
    options: ["einen", "ein", "eine", "der"],
    correctIndex: 0, explanation: "النصب المذكر بعد essen: einen. (A1)",
    errorType: "case",
  },
  {
    id: "pl-a1-3", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "Das Buch ist ___ Tisch. (على)",
    options: ["auf dem", "auf den", "auf der", "auf das"],
    correctIndex: 0, explanation: "السكون مع المذكر: auf dem. (A1)",
    errorType: "preposition",
  },
  {
    id: "pl-a1-4", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "Wie heißt du? — Ich ___ Karim.",
    options: ["heiße", "heißt", "heiß", "heißen"],
    correctIndex: 0, explanation: "مع ich: heiße. (A1)",
    errorType: "conjugation",
  },
  {
    id: "pl-a1-5", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "___ du Hunger? — Ja, ich habe Hunger.",
    options: ["Hast", "Habe", "Hat", "Habt"],
    correctIndex: 0, explanation: "السؤال عن du: Hast du Hunger? (A1)",
    errorType: "conjugation",
  },
  /* ── A2 (مستوى 6-10) ── */
  {
    id: "pl-a2-1", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2) — اختر الإجابة الصحيحة:",
    questionDe: "Ich ___ gestern nach Berlin ___.",
    options: ["bin ... geflogen", "habe ... geflogen", "bin ... gefliegen", "habe ... gefliegen"],
    correctIndex: 0, explanation: "fliegen حركة → sein + geflogen. (A2)",
    errorType: "grammar",
  },
  {
    id: "pl-a2-2", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Ich glaube, dass er heute ___.",
    options: ["kommt", "kommen", "kommst", "komme"],
    correctIndex: 0, explanation: "الفعل يقع في نهاية الجملة الثانوية بعد dass: er heute kommt. (A2)",
    errorType: "grammar",
  },
  {
    id: "pl-a2-3", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Kannst du ___ helfen? (أنا)",
    options: ["mir", "mich", "dich", "dir"],
    correctIndex: 0, explanation: "helfen يأخذ Dativ: mir. (A2)",
    errorType: "case",
  },
  {
    id: "pl-a2-4", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Es gibt ___ Park in der Stadt.",
    options: ["einen", "ein", "eine", "der"],
    correctIndex: 0, explanation: "es gibt + نصب مذكر: einen. (A2)",
    errorType: "case",
  },
  {
    id: "pl-a2-5", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Der Zug ist ___ als der Bus.",
    options: ["schneller", "schnell", "am schnellsten", "schnelle"],
    correctIndex: 0, explanation: "المقارنة: schneller als. (A2)",
    errorType: "grammar",
  },
  /* ── B1 (مستوى 11-15) ── */
  {
    id: "pl-b1-1", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1) — اختر الإجابة الصحيحة:",
    questionDe: "Wenn ich Zeit habe, ___ ich ein Buch.",
    options: ["lese", "ich lese", "lesen", "gelesen"],
    correctIndex: 0, explanation: "بعد الجملة الثانوية Wenn ich Zeit habe يأتي الفعل الرئيسي مباشرة: lese ich. (B1)",
    errorType: "word-order",
  },
  {
    id: "pl-b1-2", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Ich lerne Deutsch, ___ ich in Deutschland studieren will.",
    options: ["weil", "dass", "wenn", "ob"],
    correctIndex: 0, explanation: "سبب → weil. (B1)",
    errorType: "grammar",
  },
  {
    id: "pl-b1-3", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Das Buch, ___ ich lese, ist interessant.",
    options: ["das", "der", "die", "den"],
    correctIndex: 0, explanation: "الجملة النسبية: das Buch → das. (B1)",
    errorType: "grammar",
  },
  {
    id: "pl-b1-4", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Wenn ich reich wäre, ___ ich um die Welt.",
    options: ["reiste", "reisen", "gereist", "reisen würde"],
    correctIndex: 0, explanation: "Konjunktiv II: würde/reiste. (B1)",
    errorType: "grammar",
  },
  {
    id: "pl-b1-5", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Das Haus ___ 1900 gebaut.",
    options: ["wurde", "wird", "worden", "geworden"],
    correctIndex: 0, explanation: "المبني للمجهول في الماضي: wurde gebaut. (B1)",
    errorType: "grammar",
  },
];
