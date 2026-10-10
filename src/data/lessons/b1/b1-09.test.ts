import { describe, expect, it } from "vitest";
import { lessonB109 } from "./b1-09";

type Loose = { options?: string[]; correctIndex?: number };
const exercise = (id: string): Loose => {
  const found = lessonB109.practiceBank.find((x) => x.id === id);
  if (!found) throw new Error(`missing ${id}`);
  return found as Loose;
};

describe("B1-09 audit", () => {
  it("keeps five evaluable goals, each mapped to existing items", () => {
    expect(lessonB109.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    const practiceIds = new Set(lessonB109.practiceBank.map((x) => x.id));
    const miniIds = new Set(lessonB109.miniTest.map((x) => x.id));
    const writingIds = new Set(lessonB109.writing.map((x) => x.id));
    const listeningIds = new Set(lessonB109.listening.questions.map((q) => q.id));
    for (const goal of lessonB109.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[] };
      for (const id of ev.exerciseIds) {
        const ok = practiceIds.has(id) || miniIds.has(id) || writingIds.has(id) || listeningIds.has(id);
        expect(ok, `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("removes the false 'no error' option from error-correction instructions", () => {
    for (const x of [...lessonB109.practiceBank, ...lessonB109.miniTest]) {
      expect((x as { instructionAr?: string }).instructionAr ?? "").not.toContain("لا خطأ");
    }
  });

  it("uses the correct n-declension forms", () => {
    expect(exercise("e2").correctIndex).toBe(0);
    expect(exercise("e5").options).toContain("Studenten");
    expect(exercise("e9").options).toContain("Kollegen");
    const m4 = lessonB109.miniTest.find((x) => x.id === "m4") as { options: string[] };
    expect(m4.options).toContain("Journalisten");
  });

  it("keeps the an-preposition rule for teilnehmen with Dativ", () => {
    const m6 = lessonB109.miniTest.find((x) => x.id === "m6") as { options: string[]; correctIndex: number };
    expect(m6.options[m6.correctIndex]).toBe("am");
  });

  it("keeps the culture note to a sourced survey statistic", () => {
    const note = lessonB109.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("39.7%");
    expect(note).toContain("Freiwilligensurvey 2019");
    expect(note).not.toContain("600");
  });
});
