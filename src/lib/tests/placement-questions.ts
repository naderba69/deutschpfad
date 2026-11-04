import type { TestQuestion } from "@/types/test";

export type DiagnosticQuestion = TestQuestion & {
  sourceKind?: "mcq" | "reading" | "listening" | "writing";
};

/** Expand passage/audio containers into the individual answerable items used by the diagnostic UI. */
export function expandDiagnosticQuestion(question: TestQuestion): DiagnosticQuestion[] {
  if ((question.kind === "reading" || question.kind === "listening") && question.questions?.length) {
    return question.questions.map((sub, index) => ({
      id: `${question.id}:${index}`,
      skill: question.skill,
      level: question.level,
      kind: "mcq",
      sourceKind: question.kind,
      questionDe: sub.q,
      questionAr: sub.qAr,
      options: sub.options,
      correctIndex: sub.correct,
      explanation: sub.explanation,
      text: question.text,
      textAr: question.textAr,
    }));
  }
  return [{ ...question, sourceKind: question.kind }];
}

export function buildDiagnosticQuestionBank(bank: TestQuestion[]): DiagnosticQuestion[] {
  return bank.flatMap(expandDiagnosticQuestion);
}
