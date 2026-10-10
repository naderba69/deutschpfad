import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB110 } from "./b1-10";

type Loose = { id: string; type: string; tokens?: string[]; options?: string[]; correctIndex?: number; template?: string; blanks?: { correct: string; options: string[] }[] };
const find = (id: string) => {
  const found = [...lessonB110.practiceBank, ...lessonB110.miniTest].find((x) => x.id === id);
  if (!found) throw new Error(`missing ${id}`);
  return found as unknown as Loose;
};

describe("B1-10 audit", () => {
  it("keeps four goals, each mapped to existing items", () => {
    expect(lessonB110.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    const ids = new Set<string>([
      ...lessonB110.practiceBank.map((x) => x.id),
      ...lessonB110.miniTest.map((x) => x.id),
      ...lessonB110.writing.map((x) => x.id),
      ...lessonB110.listening.questions.map((x) => x.id),
    ]);
    for (const goal of lessonB110.lernziele) {
      for (const id of (goal.evidence as { exerciseIds: string[] }).exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes the Relativsatz word-ordering item solvable with its final comma and period", () => {
    const e4 = find("e4");
    expect(
      evaluateExercise(e4 as never, ["Der", "Student", ",", "der", "Deutsch", "lernt", ",", "möchte", "in", "Deutschland", "studieren", "."]).isCorrect,
    ).toBe(true);
  });

  it("disambiguates the e6 conjunction blank with an Arabic cue", () => {
    expect(find("e6").template).toContain("(لأن)");
  });

  it("uses a real German past-passive distractor set in review r3", () => {
    const r3 = (lessonB110.review ?? [])[2] as unknown as { template: string; blanks: { options: string[] }[] };
    expect(r3.template).toContain("1990");
    expect(r3.blanks[0].options).not.toContain("ist");
  });

  it("keeps the culture note to sourced B1 facts", () => {
    const note = lessonB110.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("Integrationskurs");
    expect(note).toContain("§ 10 StAG");
    expect(note).not.toContain("🎉");
  });

  it("does not claim exam readiness in the theory text", () => {
    expect(JSON.stringify(lessonB110)).not.toMatch(/Goethe|أنت الآن عند قمة|جاهزاً للمستوى المتقدم|Der B1-Test/);
  });
});
