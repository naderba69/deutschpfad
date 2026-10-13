import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB202 } from "./b2-02";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string };
const allItems = () => [
  ...lessonB202.practiceBank,
  ...lessonB202.miniTest,
  ...lessonB202.writing,
  ...lessonB202.listening.questions,
];

describe("B2-02 audit", () => {
  it("keeps four goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB202.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB202.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("gives every writing item a unique id that cannot collide with a practice id", () => {
    const ids = [...lessonB202.practiceBank, ...lessonB202.miniTest, ...lessonB202.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("makes every word-ordering item solvable with its punctuation as separate tokens", () => {
    const items = [...lessonB202.practiceBank, ...lessonB202.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong", () => {
    const items = [...lessonB202.practiceBank, ...lessonB202.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    for (const item of items) {
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
    const e5 = items.find((x) => x.id === "e5");
    expect(e5?.wrongSentence).toBe("Die Tür ist öffnen.");
  });

  it("does not present correct passive sentences as mistakes, and spells -bar adjectives per the dictionary", () => {
    const t2 = lessonB202.theory.find((t) => t.id === "t1");
    const wrongs = (t2?.commonMistakes ?? []).map((m) => m.wrong);
    expect(wrongs).not.toContain("Die Tür ist geöffnet worden. (عملية بدل حالة)");
    const { mediation: _m, ...rest } = lessonB202;
    const text = JSON.stringify(rest);
    expect(text).not.toMatch(/öffnbar(?!")/);
    expect(text).not.toMatch(/\d+\s*%|99%|رابع أكبر/);
  });
});
