import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB208 } from "./b2-08";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string; isAlreadyCorrect?: boolean };
const allItems = () => [
  ...lessonB208.practiceBank,
  ...lessonB208.miniTest,
  ...lessonB208.writing,
  ...lessonB208.listening.questions,
];

describe("B2-08 audit", () => {
  it("keeps four measurable goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB208.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB208.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("expands the practice bank to 14 with validated intercultural communication tasks", () => {
    expect(lessonB208.practiceBank).toHaveLength(14);
    const byId = (id: string) => {
      const item = lessonB208.practiceBank.find((candidate) => candidate.id === id);
      if (!item) throw new Error(`missing ${id}`);
      return item;
    };
    expect(evaluateExercise(byId("e11"), "über").isCorrect).toBe(true);
    expect(evaluateExercise(byId("e11"), "an").isCorrect).toBe(false);
    expect(evaluateExercise(byId("e12"), ["verständigen"]).isCorrect).toBe(true);
    expect(evaluateExercise(byId("e12"), ["verständigt"]).isCorrect).toBe(false);
    expect(evaluateExercise(byId("e13"), "Der Erfolg hängt von der Kommunikation ab.").isCorrect).toBe(true);
    const e14 = byId("e14");
    if (e14.type !== "word-ordering") throw new Error("e14 is not word-ordering");
    expect(evaluateExercise(e14, e14.correctSentence.match(/[^\s,.]+|[,.]/g) ?? []).isCorrect).toBe(true);
  });

  it("makes every word-ordering item solvable with punctuation as separate tokens", () => {
    const items = [...lessonB208.practiceBank, ...lessonB208.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong, except deliberate no-error items", () => {
    const items = [...lessonB208.practiceBank, ...lessonB208.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      if (item.isAlreadyCorrect) continue;
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
  });

  it("keeps writing item ids unique across the lesson", () => {
    const ids = [...lessonB208.practiceBank, ...lessonB208.miniTest, ...lessonB208.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("removes unsourced figures, context-dependent false errors, and misleading translations", () => {
    const text = JSON.stringify(lessonB208);
    expect(text).not.toMatch(/\d+\s*%|~\d+/);
    expect(text).not.toContain("Sprich von Tag eins an");
    expect(text).not.toContain("الحروف العربية (بـ، عن، في) تطابق");
    expect(text).not.toContain("والقائمة الشهيرة");
    expect(text).not.toContain("Ich freue mich über den Urlaub. (مستقبل)");
    expect(text).not.toMatch(/على الأكثر/);
  });
});
