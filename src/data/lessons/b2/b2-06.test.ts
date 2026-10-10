import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB206 } from "./b2-06";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string; isAlreadyCorrect?: boolean };
const allItems = () => [
  ...lessonB206.practiceBank,
  ...lessonB206.miniTest,
  ...lessonB206.writing,
  ...lessonB206.listening.questions,
];

describe("B2-06 audit", () => {
  it("keeps five goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB206.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    for (const goal of lessonB206.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable with punctuation as separate tokens", () => {
    const items = [...lessonB206.practiceBank, ...lessonB206.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong, except deliberate no-error items", () => {
    const items = [...lessonB206.practiceBank, ...lessonB206.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      if (item.isAlreadyCorrect) continue;
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
  });

  it("keeps writing item ids unique across the lesson", () => {
    const ids = [...lessonB206.practiceBank, ...lessonB206.miniTest, ...lessonB206.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("removes unverified lesson references, overclaims, and invented figures", () => {
    const text = JSON.stringify(lessonB206);
    expect(text).not.toMatch(/b1-08|b1-09/);
    expect(text).not.toMatch(/مطابقة تامة|علامة B2|35-40|20-30/);
    expect(text).not.toContain("weil ist");
    expect((lessonB206.practiceBank.find((x) => x.id === "e12") as unknown as Loose).tokens).not.toContain("Zeit.");
    expect(text).not.toMatch(/\d+\s*%/);
  });
});
