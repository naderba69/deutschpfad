import { describe, expect, it } from "vitest";

import { buildDiagnosticQuestionBank } from "@/lib/tests/placement-questions";
import type { TestQuestion } from "@/types/test";

const sampleBank: TestQuestion[] = [
  {
    id: "read-1",
    skill: "lesen",
    level: "A1",
    kind: "reading",
    text: "Ein kurzer Text.",
    textAr: "نص قصير.",
    questions: [
      { q: "Wer?", qAr: "من؟", options: ["Mia", "Ali"], correct: 0 },
      { q: "Wo?", qAr: "أين؟", options: ["Berlin", "Tunis"], correct: 1 },
    ],
  },
  {
    id: "listen-1",
    skill: "hören",
    level: "A2",
    kind: "listening",
    text: "Guten Morgen.",
    questions: [{ q: "Was?", qAr: "ماذا؟", options: ["A", "B"], correct: 1 }],
  },
  {
    id: "grammar-1",
    skill: "grammatik",
    level: "A1",
    kind: "mcq",
    questionDe: "Ich ___ hier.",
    options: ["wohne", "wohnt"],
    correctIndex: 0,
  },
];

describe("placement diagnostic question preparation", () => {
  it("expands reading and listening passages into answerable MCQs with stable keys", () => {
    const questions = buildDiagnosticQuestionBank(sampleBank);
    expect(questions.map(({ id }) => id)).toEqual(["read-1:0", "read-1:1", "listen-1:0", "grammar-1"]);
    expect(questions.slice(0, 3).every((question) => question.kind === "mcq")).toBe(true);
    expect(questions[0]).toMatchObject({
      sourceKind: "reading",
      questionDe: "Wer?",
      questionAr: "من؟",
      correctIndex: 0,
      text: "Ein kurzer Text.",
    });
    expect(questions[2]).toMatchObject({ sourceKind: "listening", correctIndex: 1 });
  });
});
