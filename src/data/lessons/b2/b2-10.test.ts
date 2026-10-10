import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonB210 } from "./b2-10";

type Loose = { id: string; type: string; tokens?: string[]; correctSentence?: string; wrongSentence?: string; wrongWord?: string; correctWord?: string; isAlreadyCorrect?: boolean };
const allItems = () => [
  ...lessonB210.practiceBank,
  ...lessonB210.miniTest,
  ...lessonB210.writing,
  ...lessonB210.listening.questions,
];

describe("B2-10 audit", () => {
  it("keeps four measurable goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB210.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB210.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable with punctuation as separate tokens", () => {
    const items = [...lessonB210.practiceBank, ...lessonB210.miniTest].filter((x) => x.type === "word-ordering") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      const correct = (item.correctSentence ?? "").match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...(item.tokens ?? [])].sort(), item.id).toEqual([...correct].sort());
      expect(evaluateExercise(item as never, correct).isCorrect, item.id).toBe(true);
    }
  });

  it("makes every error-correction sentence genuinely wrong, except deliberate no-error items", () => {
    const items = [...lessonB210.practiceBank, ...lessonB210.miniTest].filter((x) => x.type === "error-correction") as unknown as Loose[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      if (item.isAlreadyCorrect) continue;
      const fixed = (item.wrongSentence ?? "").replace(item.wrongWord ?? "", item.correctWord ?? "");
      expect(item.wrongSentence, item.id).not.toBe(fixed);
    }
  });

  it("keeps writing item ids unique across the lesson", () => {
    const ids = [...lessonB210.practiceBank, ...lessonB210.miniTest, ...lessonB210.writing].map((x) => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("removes unsourced figures, context-dependent false errors, and misleading translations", () => {
    const text = JSON.stringify(lessonB210);
    expect(text).not.toMatch(/\d+\s*%|~\d+/);
    expect(text).not.toContain("Sprich von Tag eins an");
    expect(text).not.toContain("الحروف العربية (بـ، عن، في) تطابق");
    expect(text).not.toContain("والقائمة الشهيرة");
    expect(text).not.toContain("Ich freue mich über den Urlaub. (مستقبل)");
    expect(text).not.toMatch(/على الأكثر/);
    expect(text).not.toContain("~300");
    expect(text).not.toContain("75 دقيقة");
    expect(text).not.toContain("ستُّ قواعد");
    expect(text).not.toContain("can itself");
    expect(text).not.toContain("سقف علامة");
    expect(text).not.toContain("جاهزاً للامتحانات");
    expect(text).not.toContain("تطابق عباراتنا");
    expect(text).not.toContain("gv");
    expect(text).not.toContain("عامية");
  });
});
