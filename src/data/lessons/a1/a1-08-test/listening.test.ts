import { describe, expect, it } from "vitest";

import { lessonA108 } from "@/data/lessons/a1/a1-08";

describe("A1-08 listening content", () => {
  it("keeps the three clothing scenes, question mappings, and new dialogue keys aligned", () => {
    expect(lessonA108.listening.items.map(({ id }) => id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA108.listening.questions.map(({ id, itemId }) => [id, itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"],
      ["q4", "l3"], ["q5", "l3"], ["q6", "l3"],
    ]);

    const expected = {
      q4: { options: ["Er sucht ein T-Shirt", "Er sucht eine Jacke", "Er sucht ein Hemd", "Er sucht ein Kleid"], answer: "Er sucht ein T-Shirt" },
      q5: { options: ["Die Farbe ist schwarz", "Die Farbe ist blau", "Die Farbe ist rot", "Die Farbe ist grün"], answer: "Die Farbe ist schwarz" },
      q6: { options: ["fünfzehn Euro", "zwanzig Euro", "zwölf Euro", "fünf Euro"], answer: "fünfzehn Euro" },
    };
    for (const question of lessonA108.listening.questions.filter(({ id }) => ["q4", "q5", "q6"].includes(id))) {
      const item = expected[question.id as keyof typeof expected];
      expect(question.options, question.id).toEqual(item.options);
      expect(question.options[question.correctIndex], question.id).toBe(item.answer);
      expect(new Set(question.options).size, question.id).toBe(question.options.length);
    }

    const addedScene = lessonA108.listening.items.find(({ id }) => id === "l3")!;
    expect(addedScene.lines.map(({ de }) => de)).toEqual([
      "Guten Tag! Kann ich Ihnen helfen?",
      "Ja, ich suche ein T-Shirt.",
      "Welche Farbe möchten Sie?",
      "Ich möchte ein schwarzes T-Shirt, bitte.",
      "Hier ist ein schwarzes T-Shirt. Es kostet fünfzehn Euro.",
      "Das gefällt mir. Ich nehme es.",
    ]);
    expect(addedScene.audioNoteAr).toContain("بحسب بيانات المشروع");
    expect(addedScene.audioNoteAr).toContain("لا توجد بيانات موثقة عن هوية الأصوات");
    expect(addedScene.audioNoteAr).toContain("لم تُتحقق مطابقة المقاطع للنص");
    expect(addedScene.lines[3].de).toContain("ein schwarzes T-Shirt");
    expect(lessonA108.listening.questions.find(({ id }) => id === "q5")?.explanation).toContain(
      "Ich möchte ein schwarzes T-Shirt, bitte.",
    );
    expect(lessonA108.pronunciation.tip).toContain("TTS في المتصفح لا تسجيلاً بشرياً");

    for (const id of ["l1", "l2"]) {
      const item = lessonA108.listening.items.find(({ id: itemId }) => itemId === id);
      expect(item?.audioNoteAr).toContain("TTS المدمج في المتصفح");
      expect(item?.audioNoteAr).toContain("قد يختلف الصوت");
      expect(item?.lines.every(({ audioSrc }) => !audioSrc)).toBe(true);
    }

    const goal = lessonA108.lernziele.find(({ id }) => id === "z10");
    expect(goal?.evidence).toMatchObject({
      exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
      taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"],
      completion: "all-correct",
    });
  });
});
