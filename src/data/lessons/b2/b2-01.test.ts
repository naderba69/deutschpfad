import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB201 } from "./b2-01";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string };
const allItems = () => [
  ...lessonB201.practiceBank,
  ...lessonB201.miniTest,
  ...lessonB201.writing,
  ...lessonB201.listening.questions,
];

describe("B2-01 audit", () => {
  it("keeps four goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB201.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB201.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable with its punctuation as separate tokens", () => {
    const items = [...lessonB201.practiceBank, ...lessonB201.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("uses no invented probability percentages or unsourced statistics", () => {
    const text = JSON.stringify(lessonB201);
    expect(text).not.toMatch(/\d+\s*%/);
    expect(text).not.toMatch(/~80|جائزة نوبل|مجانية تقريباً/);
  });

  it("does not mark a correct past-probability sentence as a mistake", () => {
    const t2 = lessonB201.theory.find((t) => t.id === "t2");
    const bad = (t2?.commonMistakes ?? []).map((m) => m.wrong);
    expect(bad).not.toContain("Das dürfte gestimmt haben. (خلط زمني بلا حاجة)");
    expect(bad).toContain("Das dürfte gestimmt sein.");
  });

  it("does not claim presentation skills the lesson does not measure", () => {
    expect(JSON.stringify(lessonB201.lernziele)).not.toMatch(/عروض|Vortrag|Präsentation/);
    expect(lessonB201.summary).not.toMatch(/Präsentation|تقديم العروض/);
  });
});
