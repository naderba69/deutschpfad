import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB108 } from "./b1-08";

const exercise = (id: string) => {
  const found = lessonB108.practiceBank.find((x) => x.id === id);
  if (!found) throw new Error(`missing ${id}`);
  return found;
};

describe("B1-08 audit", () => {
  it("keeps four goals, each mapped to existing exercises or mini-tests", () => {
    expect(lessonB108.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    const practiceIds = new Set(lessonB108.practiceBank.map((x) => x.id));
    const miniIds = new Set(lessonB108.miniTest.map((x) => x.id));
    const writingIds = new Set(lessonB108.writing.map((x) => x.id));
    for (const goal of lessonB108.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[] };
      for (const id of ev.exerciseIds) {
        expect(practiceIds.has(id) || miniIds.has(id) || writingIds.has(id) || lessonB108.listening.questions.some((q) => q.id === id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("expands the practice bank to 14 with validated double conjunction exercises", () => {
    expect(lessonB108.practiceBank).toHaveLength(14);
    const e12 = exercise("e12");
    expect(evaluateExercise(e12, "Sowohl das Tablet als auch der Laptop sind praktisch.").isCorrect).toBe(true);
    expect(evaluateExercise(e12, "Sowohl das Tablet oder der Laptop sind praktisch.").isCorrect).toBe(false);

    const e13 = exercise("e13");
    if (e13.type !== "word-ordering") throw new Error("e13 is not word-ordering");
    expect(evaluateExercise(e13, e13.correctSentence.split(/\s+/)).isCorrect).toBe(true);

    const e14 = exercise("e14");
    expect(evaluateExercise(e14, ["weder", "noch"]).isCorrect).toBe(true);
    expect(evaluateExercise(e14, ["entweder", "oder"]).isCorrect).toBe(false);
  });

  it("offers a correct word among the error-correction options (the no-error option is added by the interface)", () => {
    type EC = { type: string; options?: string[]; correctWord?: string; isAlreadyCorrect?: boolean };
    for (const x of [...lessonB108.practiceBank, ...lessonB108.miniTest] as unknown as EC[]) {
      if (x.type !== "error-correction" || x.isAlreadyCorrect) continue;
      expect(x.options ?? []).toContain(x.correctWord);
    }
  });

  it("requires morgen in the Futur I transformation", () => {
    const e7 = exercise("e7") as { acceptedAnswers: string[] };
    expect(e7.acceptedAnswers).toEqual(["Ich werde morgen Deutsch lernen"]);
  });

  it("uses the corrected weder-noch rule in e9", () => {
    const e9 = exercise("e9") as { explanation?: string };
    expect(e9.explanation).toContain("weder ... noch");
  });

  it("keeps the culture note to a sourced statement about GDPR and administrative digitalisation", () => {
    const note = lessonB108.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("DSGVO");
    expect(note).toContain("2022");
    expect(note).not.toContain("مقدسة");
  });
});
