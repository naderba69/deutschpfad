import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB205 } from "./b2-05";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string; isAlreadyCorrect?: boolean };
const allItems = () => [
  ...lessonB205.practiceBank,
  ...lessonB205.miniTest,
  ...lessonB205.writing,
  ...lessonB205.listening.questions,
];

describe("B2-05 audit", () => {
  it("keeps five goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB205.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    for (const goal of lessonB205.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable with punctuation as separate tokens", () => {
    const items = [...lessonB205.practiceBank, ...lessonB205.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong, except deliberate no-error items", () => {
    const items = [...lessonB205.practiceBank, ...lessonB205.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      if (item.isAlreadyCorrect) continue;
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
  });

  it("keeps writing item ids unique across the lesson", () => {
    const ids = [...lessonB205.practiceBank, ...lessonB205.miniTest, ...lessonB205.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("removes overclaims and exam claims, and keeps German sentences free of notes", () => {
    const text = JSON.stringify(lessonB205);
    expect(text).not.toMatch(/مطابقة!|تطابق تام|مطابقة تامة/);
    expect(text).not.toMatch(/امتحان B2|للامتحان|Goethe|علامة B2|أشهر 10/);
    expect(text).not.toContain("Die Geschichte zeigt das Gegenteil");
    expect(text).not.toContain("Wir treffen uns, ___ es sei denn regnet");
    expect((lessonB205.miniTest.find((x) => x.id === "m4") as unknown as Loose).wrongSentence).toBe("Anstatt er schläft, arbeitet er.");
    expect(text).not.toMatch(/\d+\s*%/);
  });
});
