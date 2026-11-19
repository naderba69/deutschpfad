/** A1-10 — checks new workplace dialogue, keyed questions, and learning evidence. */
import { describe, expect, it } from "vitest";
import { lessonA110 } from "@/data/lessons/a1/a1-10";

describe("A1-10 listening dialogue", () => {
  it("connects the job-search scene, questions, and goal evidence", () => {
    const item = lessonA110.listening.items.find(({ id }) => id === "l3");
    expect(item?.lines.map(({ de }) => de)).toEqual([
      "Guten Tag, ich suche eine Arbeit.", "Was sind Sie von Beruf?", "Ich bin Köchin und habe Erfahrung.",
      "Möchten Sie in einem Hotel arbeiten?", "Ja, gern. Wann kann ich anfangen?", "Am Montag um neun Uhr.",
    ]);
    expect(lessonA110.listening.questions.filter(({ itemId }) => itemId === "l3").map(({ id, options, correctIndex }) => [id, options[correctIndex]])).toEqual([
      ["q4", "Köchin"], ["q5", "In einem Hotel"], ["q6", "Am Montag um neun Uhr"],
    ]);
    expect(lessonA110.lernziele.find(({ id }) => id === "z8")?.evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4", "q5", "q6"]);
  });
});
