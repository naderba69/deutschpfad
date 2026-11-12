/** A1-09 — kiểm tra مشهد الاستماع الإضافي ومفاتيح الإجابة. */
import { describe, expect, it } from "vitest";
import { lessonA109 } from "@/data/lessons/a1/a1-09";

describe("A1-09 listening dialogue", () => {
  it("adds a coherent appointment dialogue with three keyed questions", () => {
    const browserItems = lessonA109.listening.items.filter(({ id }) => id === "l1" || id === "l2");
    expect(browserItems).toHaveLength(2);
    for (const browserItem of browserItems) {
      expect(browserItem.audioNoteAr).toContain("SpeechSynthesis");
      expect(browserItem.audioNoteAr).toContain("لا بملف تسجيل ثابت");
      expect(browserItem.lines.every(({ audioSrc }) => !audioSrc)).toBe(true);
    }

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
    const listeningGoal = lessonA109.lernziele.find(({ id }) => id === "z8");
    expect(listeningGoal?.de).toContain("drei kurzen Dialogen");
    expect(listeningGoal?.ar).toContain("ثلاثة حوارات قصيرة");
    expect(listeningGoal?.ar).not.toContain("حوارين");
    expect(listeningGoal?.evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4", "q5", "q6"]);
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l2:q2",
      "listening:l2:q3",
      "listening:l3:q4",
      "listening:l3:q5",
      "listening:l3:q6",
    ]);
  });
});
