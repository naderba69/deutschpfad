import { describe, expect, it } from "vitest";
import { lessonB112 } from "./b1-12";

const allItems = () => [
  ...lessonB112.practiceBank,
  ...lessonB112.miniTest,
  ...lessonB112.writing,
  ...lessonB112.listening.questions,
];

describe("B1-12 audit", () => {
  it("keeps four goals, each with evidence on existing items", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB112.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB112.lernziele) {
      const ev = goal.evidence as { exerciseIds: string[]; taskIds: string[] };
      expect(ev.taskIds.length).toBe(ev.exerciseIds.length);
      for (const id of ev.exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("makes every word-ordering item solvable with all its tokens, including the final period", () => {
    const orderingItems = lessonB112.practiceBank.filter((x) => x.type === "word-ordering")
      .concat(lessonB112.miniTest.filter((x) => x.type === "word-ordering"));
    expect(orderingItems.length).toBeGreaterThan(0);
    for (const item of orderingItems as unknown as { tokens: string[]; correctSentence: string }[]) {
      const expected = item.correctSentence.match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...item.tokens].sort()).toEqual([...expected].sort());
    }
  });

  it("has error-correction items whose correct word is offered and whose wrong sentence contains the wrong word", () => {
    const items = (lessonB112.practiceBank as unknown as { type: string }[]).filter((x) => x.type === "error-correction") as unknown as {
      id: string; wrongSentence: string; wrongWord: string; correctWord: string; options: string[];
    }[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      expect(item.options, item.id).toContain(item.correctWord);
      expect(item.wrongSentence.split(/\s+|(?=[,.])/).includes(item.wrongWord) || item.wrongSentence.includes(item.wrongWord), item.id).toBe(true);
    }
  });

  it("fixes the Trotz and damit error-correction sentences so one error remains", () => {
    const e8 = lessonB112.practiceBank.find((x) => x.id === "e8") as unknown as { wrongSentence: string };
    expect(e8.wrongSentence).toBe("Trotz der Regens gehen wir spazieren.");
    const e5 = lessonB112.practiceBank.find((x) => x.id === "e5") as unknown as { wrongSentence: string };
    expect(e5.wrongSentence).toBe("Ich erkläre es langsam, um du mich verstehst.");
  });

  it("removes exam timing, exam-readiness and unsourced frequency claims", () => {
    const text = JSON.stringify(lessonB112);
    expect(text).not.toMatch(/Goethe|تُقيَّم|تُحسب خطأً|في امتحان B1|أشيع خطأ|مستوى A2\.|تُقاس عليه نصوص|ثقيلة أسلوبياً|دائماً «warum»/);
    expect(text).not.toMatch(/\d+\s*دقيق|\d+\s*Minuten/);
  });
});
