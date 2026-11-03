import { describe, expect, it } from "vitest";

import { lessonA105 } from "@/data/lessons/a1/a1-05";

describe("A1-05 listening content", () => {
  it("keeps each listening question attached to the correct routine scene and key", () => {
    expect(lessonA105.listening.items.map(({ id }) => id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA105.listening.questions.map(({ id, itemId }) => [id, itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"],
      ["q4", "l3"], ["q5", "l3"], ["q6", "l3"],
    ]);

    const expected = {
      q1: { options: ["um sechs Uhr", "um sieben Uhr", "um acht Uhr", "um zwölf Uhr"], answer: "um sechs Uhr" },
      q2: { options: ["fernsehen oder lesen", "arbeiten", "frühstücken", "schlafen bis zum Mittag"], answer: "fernsehen oder lesen" },
      q3: { options: ["um sieben Uhr", "um sechs Uhr", "um neun Uhr", "um halb acht"], answer: "um sieben Uhr" },
      q4: { options: ["um acht Uhr", "um sieben Uhr", "um neun Uhr", "um halb acht"], answer: "um acht Uhr" },
      q5: { options: ["Er kauft ein und räumt sein Zimmer auf", "Er arbeitet und lernt heute Deutsch", "Er besucht seine Freunde und kocht", "Er schläft lange und sieht fern"], answer: "Er kauft ein und räumt sein Zimmer auf" },
      q6: { options: ["Er sieht am Abend fern", "Er liest lange ein Buch", "Er macht seine Hausaufgaben", "Er geht um sieben schlafen"], answer: "Er sieht am Abend fern" },
    };
    for (const question of lessonA105.listening.questions) {
      const item = expected[question.id as keyof typeof expected];
      expect(question.options, question.id).toEqual(item.options);
      expect(question.options[question.correctIndex], question.id).toBe(item.answer);
      expect(new Set(question.options).size, question.id).toBe(question.options.length);
    }

    const addedScene = lessonA105.listening.items.find(({ id }) => id === "l3")!;
    expect(addedScene.lines.map(({ de }) => de)).toEqual([
      "Wann stehst du am Samstag auf?",
      "Am Samstag stehe ich um acht Uhr auf.",
      "Was machst du am Vormittag?",
      "Ich kaufe ein und räume mein Zimmer auf.",
      "Und was machst du am Abend?",
      "Am Abend sehe ich fern.",
    ]);
  });

  it("maps the listening goal to every scored question across the three scenes", () => {
    const goal = lessonA105.lernziele.find(({ id }) => id === "z6");
    expect(goal?.evidence).toMatchObject({
      exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
      taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
      completion: "all-correct",
    });
  });
});
