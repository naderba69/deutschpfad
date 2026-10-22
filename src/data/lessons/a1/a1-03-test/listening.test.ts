import { describe, expect, it } from "vitest";

import { lessonA103 } from "@/data/lessons/a1/a1-03";

describe("A1-03 listening content", () => {
  it("keeps each question attached to its intended shopping or ordering scene", () => {
    expect(lessonA103.listening.items.map(({ id }) => id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA103.listening.questions.map(({ id, itemId }) => [id, itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"],
      ["q4", "l3"], ["q5", "l3"], ["q6", "l3"],
    ]);

    const expected = {
      q1: { options: ["einen Kaffee und ein Brötchen", "eine Milch und einen Kuchen", "einen Tee und ein Brötchen", "einen Kaffee und eine Banane"], answer: "einen Kaffee und ein Brötchen" },
      q2: { options: ["fünf Euro", "vier Euro", "zehn Euro", "drei Euro"], answer: "fünf Euro" },
      q3: { options: ["einen Apfel und eine Banane", "ein Brot und die Milch", "einen Kaffee", "ein Brot"], answer: "einen Apfel und eine Banane" },
      q4: { options: ["Zwei Brötchen und einen Apfel", "Ein Brot und eine Banane", "Einen Kaffee und Milch", "Zwei Äpfel und ein Brötchen"], answer: "Zwei Brötchen und einen Apfel" },
      q5: { options: ["Nein, er sagt Nein, danke", "Ja, zwei Bananen", "Ja, eine Banane", "Das Gespräch sagt es nicht"], answer: "Nein, er sagt Nein, danke" },
      q6: { options: ["Zwei Euro", "Drei Euro", "Ein Euro fünfzig", "Fünf Euro"], answer: "Zwei Euro" },
    };
    for (const question of lessonA103.listening.questions) {
      const item = expected[question.id as keyof typeof expected];
      expect(question.options, question.id).toEqual(item.options);
      expect(question.options[question.correctIndex], question.id).toBe(item.answer);
      expect(new Set(question.options).size, question.id).toBe(question.options.length);
    }

    const addedScene = lessonA103.listening.items.find(({ id }) => id === "l3")!;
    expect(addedScene.lines.map(({ de }) => de)).toEqual([
      "Guten Morgen! Was möchten Sie?",
      "Ich möchte zwei Brötchen und einen Apfel, bitte.",
      "Möchten Sie noch eine Banane?",
      "Nein, danke. Haben Sie Milch?",
      "Ja. Eine Flasche Milch kostet zwei Euro.",
      "Dann nehme ich die Milch auch.",
    ]);
  });

  it("maps the listening goal to every correct-answer task in all three scenes", () => {
    const goal = lessonA103.lernziele.find(({ id }) => id === "z6");
    expect(goal?.evidence).toMatchObject({
      exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
      taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
      completion: "all-correct",
    });
  });
});
