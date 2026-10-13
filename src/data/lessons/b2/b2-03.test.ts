import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB203 } from "./b2-03";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string };
const allItems = () => [
  ...lessonB203.practiceBank,
  ...lessonB203.miniTest,
  ...lessonB203.writing,
  ...lessonB203.listening.questions,
];

describe("B2-03 audit", () => {
  it("keeps four goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB203.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB203.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable with every comma and the final period as tokens", () => {
    const items = [...lessonB203.practiceBank, ...lessonB203.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong", () => {
    const items = [...lessonB203.practiceBank, ...lessonB203.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
  });

  it("keeps writing item ids unique across the lesson", () => {
    const ids = [...lessonB203.practiceBank, ...lessonB203.miniTest, ...lessonB203.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("removes the cross-reference to a lesson that does not teach prepositional verbs, and exam claims", () => {
    const text = JSON.stringify(lessonB203);
    expect(text).not.toContain("درس b1-09");
    expect(text).not.toMatch(/اختبار B2|اختبار الB2|جوهر اختبار/);
    expect(text).not.toMatch(/\d+\s*%/);
    expect(text).not.toContain("Ruhezeiten sind gesetzlich geschützt");
  });
});
