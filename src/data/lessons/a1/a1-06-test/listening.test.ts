import { describe, expect, it } from "vitest";

import { lessonA106 } from "@/data/lessons/a1/a1-06";

describe("A1-06 listening content", () => {
  it("keeps the six listening questions attached to their intended hobby scenes and keys", () => {
    expect(lessonA106.listening.items.map(({ id }) => id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA106.listening.questions.map(({ id, itemId }) => [id, itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"],
      ["q4", "l3"], ["q5", "l3"], ["q6", "l3"],
    ]);

    const expected = {
      q1: { options: ["Fußball", "Tennis", "Basketball", "Schach"], answer: "Fußball" },
      q2: { options: ["um vier Uhr", "um fünf Uhr", "um drei Uhr", "am Abend"], answer: "um vier Uhr" },
      q3: { options: ["tanzen und fotografieren", "lesen und Musik hören", "Fußball spielen", "fernsehen"], answer: "tanzen und fotografieren" },
      q4: { options: ["Rad fahren und schwimmen", "tanzen und fotografieren", "Fußball spielen und lesen", "Musik hören und kochen"], answer: "Rad fahren und schwimmen" },
      q5: { options: ["In einem Park", "In einem Garten", "Auf dem Platz", "Beim Schwimmbad"], answer: "In einem Park" },
      q6: { options: ["Er spielt am Abend Gitarre", "Er hört am Abend Musik", "Er liest am Abend ein Buch", "Er sieht am Abend fern"], answer: "Er spielt am Abend Gitarre" },
    };
    for (const question of lessonA106.listening.questions) {
      const item = expected[question.id as keyof typeof expected];
      expect(question.options, question.id).toEqual(item.options);
      expect(question.options[question.correctIndex], question.id).toBe(item.answer);
      expect(new Set(question.options).size, question.id).toBe(question.options.length);
    }

    const addedScene = lessonA106.listening.items.find(({ id }) => id === "l3")!;
    expect(addedScene.lines.map(({ de }) => de)).toEqual([
      "Was machst du am Sonntag gern?",
      "Ich fahre gern Rad und gehe gern schwimmen.",
      "Wo fährst du gern Rad?",
      "Ich fahre gern im Park Rad.",
      "Und was machst du am Abend?",
      "Am Abend spiele ich Gitarre.",
    ]);
  });

  it("maps the listening goal to all six scored questions", () => {
    const goal = lessonA106.lernziele.find(({ id }) => id === "z8");
    expect(goal?.evidence).toMatchObject({
      exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
      taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
      completion: "all-correct",
    });
  });
});
