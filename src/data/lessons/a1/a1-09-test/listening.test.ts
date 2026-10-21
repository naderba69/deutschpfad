/** A1-09 — kiểm tra مشهد الاستماع الإضافي ومفاتيح الإجابة. */
import { describe, expect, it } from "vitest";
import { lessonA109 } from "@/data/lessons/a1/a1-09";

describe("A1-09 listening dialogue", () => {
  it("adds a coherent appointment dialogue with three keyed questions", () => {
    const item = lessonA109.listening.items.find(({ id }) => id === "l3");
    expect(item?.lines.map(({ de }) => de)).toEqual([
      "Guten Morgen, ich habe Zahnschmerzen.",
      "Wann haben Sie Zeit?",
      "Am Donnerstag, bitte.",
      "Geht es um zehn Uhr?",
      "Nein, um vierzehn Uhr passt es mir besser.",
      "Gut, dann am Donnerstag um vierzehn Uhr.",
    ]);
    expect(lessonA109.listening.questions.filter(({ itemId }) => itemId === "l3").map(({ id, options, correctIndex }) => [id, options[correctIndex]])).toEqual([
      ["q4", "Sie hat Zahnschmerzen."],
      ["q5", "um vierzehn Uhr"],
      ["q6", "am Donnerstag"],
    ]);
    expect(lessonA109.lernziele.find(({ id }) => id === "z8")?.evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4", "q5", "q6"]);
  });
});
