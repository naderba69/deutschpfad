import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB204 } from "./b2-04";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string };
const allItems = () => [
  ...lessonB204.practiceBank,
  ...lessonB204.miniTest,
  ...lessonB204.writing,
  ...lessonB204.listening.questions,
];

describe("B2-04 audit", () => {
  it("keeps four goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB204.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB204.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable", () => {
    const items = [...lessonB204.practiceBank, ...lessonB204.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong", () => {
    const items = [...lessonB204.practiceBank, ...lessonB204.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
  });

  it("keeps writing item ids unique across the lesson", () => {
    const ids = [...lessonB204.practiceBank, ...lessonB204.miniTest, ...lessonB204.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("removes ungrammatical listening lines and overclaims", () => {
    const text = JSON.stringify(lessonB204);
    expect(text).not.toContain("der geschriebene in drei Jahren");
    expect(text).not.toContain("der erwartete Autor");
    expect(text).not.toContain("مطابقة تامة");
    expect(text).not.toMatch(/امتحان B2|أكبر معرض/);
    expect(text).not.toContain("Lesen ist wichtig");
    expect(text).not.toContain("sch مرتين");
    expect(text).not.toMatch(/\d+\s*%/);
    expect(text).not.toMatch(/\u200e/);
  });
});
