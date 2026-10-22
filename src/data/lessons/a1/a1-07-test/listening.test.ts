import { describe, expect, it } from "vitest";

import { lessonA107 } from "@/data/lessons/a1/a1-07";

describe("A1-07 listening content", () => {
  it("keeps the three listening scenes and their scored-question mappings", () => {
    expect(lessonA107.listening.items.map(({ id }) => id)).toEqual([
      "listen-a1-07-market", "listen-a1-07-phone", "listen-a1-07-kiosk",
    ]);
    expect(lessonA107.listening.questions.map(({ id, itemId }) => [id, itemId])).toEqual([
      ["q1", "listen-a1-07-market"], ["q2", "listen-a1-07-market"],
      ["q3", "listen-a1-07-phone"], ["q4", "listen-a1-07-phone"],
      ["q5", "listen-a1-07-kiosk"], ["q6", "listen-a1-07-kiosk"], ["q7", "listen-a1-07-kiosk"],
    ]);

    const expected = {
      q5: { options: ["einen Euro", "zwei Euro", "drei Euro", "fünf Euro"], answer: "einen Euro" },
      q6: { options: ["zwei Flaschen", "drei Flaschen", "eine Flasche", "vier Flaschen"], answer: "zwei Flaschen" },
      q7: { options: ["drei Euro", "zwei Euro", "fünf Euro", "vier Euro"], answer: "drei Euro" },
    };
    for (const question of lessonA107.listening.questions.filter(({ id }) => ["q5", "q6", "q7"].includes(id))) {
      const item = expected[question.id as keyof typeof expected];
      expect(question.options, question.id).toEqual(item.options);
      expect(question.options[question.correctIndex], question.id).toBe(item.answer);
    }

    const kiosk = lessonA107.listening.items.find(({ id }) => id === "listen-a1-07-kiosk")!;
    expect(kiosk.lines.map(({ de }) => de)).toEqual([
      "Guten Tag. Was kostet eine Flasche Wasser?",
      "Eine Flasche kostet einen Euro.",
      "Dann nehme ich zwei Flaschen, bitte.",
      "Das macht zwei Euro.",
      "Hier sind fünf Euro.",
      "Danke. Sie bekommen drei Euro zurück.",
    ]);
    expect(kiosk.audioNoteAr).toContain("أصوات نسائية ورجالية ثابتة ومتكررة بين الدروس");

    const goal = lessonA107.lernziele.find(({ id }) => id === "z5");
    expect(goal?.evidence).toMatchObject({
      exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7"],
      taskIds: [
        "listening:listen-a1-07-market:q1", "listening:listen-a1-07-market:q2",
        "listening:listen-a1-07-phone:q3", "listening:listen-a1-07-phone:q4",
        "listening:listen-a1-07-kiosk:q5", "listening:listen-a1-07-kiosk:q6", "listening:listen-a1-07-kiosk:q7",
      ],
      completion: "all-correct",
    });
  });
});
