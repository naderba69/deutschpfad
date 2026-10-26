import { describe, expect, it } from "vitest";

import { lessonA104 } from "@/data/lessons/a1/a1-04";

describe("A1-04 listening content", () => {
  it("keeps the six listening questions attached to their intended scenes and keys", () => {
    expect(lessonA104.listening.items.map(({ id }) => id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA104.listening.questions.map(({ id, itemId }) => [id, itemId])).toEqual([
      ["q1", "l1"], ["q2", "l2"], ["q3", "l2"],
      ["q4", "l3"], ["q5", "l3"], ["q6", "l3"],
    ]);

    const expected = {
      q1: { options: ["vier", "drei", "fünf", "zwei"], answer: "zwei" },
      q2: { options: ["auf dem Tisch", "in der Küche", "im Bett", "unter dem Sofa"], answer: "auf dem Tisch" },
      q3: { options: ["in der Küche", "auf dem Tisch", "im Schlafzimmer", "unter dem Bett"], answer: "in der Küche" },
      q4: { options: ["Neben dem Bad", "Vor dem Balkon", "Im Wohnzimmer", "In der Küche"], answer: "Neben dem Bad" },
      q5: { options: ["Neben dem Wohnzimmer", "Vor dem Schlafzimmer", "Neben dem Balkon", "Im Erdgeschoss"], answer: "Neben dem Wohnzimmer" },
      q6: { options: ["Vor dem Wohnzimmer", "Hinter der Küche", "Neben dem Bad", "Auf dem Balkon"], answer: "Vor dem Wohnzimmer" },
    };
    for (const question of lessonA104.listening.questions) {
      const item = expected[question.id as keyof typeof expected];
      expect(question.options, question.id).toEqual(item.options);
      expect(question.options[question.correctIndex], question.id).toBe(item.answer);
      expect(new Set(question.options).size, question.id).toBe(question.options.length);
    }

    const addedScene = lessonA104.listening.items.find(({ id }) => id === "l3")!;
    expect(addedScene.lines.map(({ de }) => de)).toEqual([
      "Wo ist das Schlafzimmer?",
      "Das Schlafzimmer ist neben dem Bad.",
      "Und wo ist die Küche?",
      "Die Küche ist neben dem Wohnzimmer.",
      "Gibt es auch einen Balkon?",
      "Ja, der Balkon ist vor dem Wohnzimmer.",
    ]);
  });

  it("maps the listening goal to all six scored questions", () => {
    const goal = lessonA104.lernziele.find(({ id }) => id === "z5");
    expect(goal?.evidence).toMatchObject({
      exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
      taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
      completion: "all-correct",
    });
  });
});
