/**
 * a2-03 — أسئلةُ القراءة ملتصقةٌ بفقراتها والقصةُ داخل نطاقها المُعلن · وتغطيةُ أسئلة الاستماع كاملةٌ وكشفُ النص المنطوق منفصل (جزء من تدقيق الدرس)
 * فُصل من a2-03.test.ts في الدفعة 109 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA203 } from "@/data/lessons/a2/a2-03";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { reading } from "./fixtures";

describe("A2-03 audited lesson", () => {
  it("keeps the reading questions attached to their paragraphs and the story within its stated scope", () => {
    const text = reading();
    expect(text.id).toBe("read-a2-03");
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphs[2]).toContain("zwei Apfelschorlen");
    expect(text.paragraphs[3]).toContain("an die Küche weitergeben");
    expect(text.paragraphs[3]).toContain("einen neuen Teller gebracht");
    expect(text.paragraphs[5]).toContain("Mein Anteil war 21,40 Euro");
    expect(text.paragraphs[5]).toContain("1,60 Euro Trinkgeld");
    expect(text.paragraphs[5]).not.toContain("das ist hier ganz normal");
    expect(text.paragraphsAr[5]).toContain("إكراميةً قدرها ١٫٦٠ يورو");

    expect(text.glossary.every((entry) => entry.de.trim() && entry.ar.trim())).toBe(true);
    expect(text.glossary.find((entry) => entry.de === "geschmeckt (schmecken)")?.noteAr).toContain(
      "Dativ الألمانية",
    );
    expect(text.glossary.find((entry) => entry.de === "die Vorspeise")?.noteAr).toContain("طبق جانبي");

    for (const question of text.questions) {
      expect(question.paragraph, question.id).toBeGreaterThanOrEqual(1);
      expect(question.paragraph, question.id).toBeLessThanOrEqual(text.paragraphs.length);
      expect(question.instructionAr.trim().length, question.id).toBeGreaterThan(0);
    }
    expect(text.questions.find((question) => question.id === "rq3")?.explanation).toContain(
      "لا يقرر ترتيباً عاماً",
    );
    expect(text.questions.find((question) => question.id === "rq4")?.options[1]).toContain(
      "beschimpft",
    );
    expect(text.questions.find((question) => question.id === "rq6")?.explanation).toContain(
      "في هذا المثال",
    );
  });

  it("keeps listening question coverage complete and the transcript reveal separate", () => {
    expect(lessonA203.listening.items.map((item) => item.id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA203.listening.items.map((item) => item.lines.length)).toEqual([7, 5, 6]);
    expect(
      lessonA203.listening.items.every((item) =>
        item.lines.every((line) => line.de.trim() && line.ar.trim() && line.speaker.trim()),
      ),
    ).toBe(true);
    const firstDialogue = lessonA203.listening.items[0].lines;
    expect(firstDialogue.find((line) => line.de === "Wie hat es Ihnen geschmeckt?")?.speaker).toContain(
      "nach dem Essen",
    );
    expect(firstDialogue.find((line) => line.de === "Wie hat es Ihnen geschmeckt?")?.de).toContain(
      "Ihnen",
    );
    const soupDialogue = lessonA203.listening.items.find(({ id }) => id === "l3");
    expect(soupDialogue?.lines.map(({ de }) => de)).toContain("Dann nehme ich die Suppe, bitte.");
    expect(soupDialogue?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(lessonA203.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"],
      ["q4", "l3"], ["q5", "l3"], ["q6", "l3"],
    ]);
    expect(
      lessonA203.listening.questions.every((question) =>
        question.instructionAr.includes("قبل فتح التفريغ"),
      ),
    ).toBe(true);
    expect(lessonA203.listening.items[0].lines.map((line) => line.de).join(" ")).toContain(
      "Ein Wasser, bitte.",
    );
    expect(lessonA203.listening.questions.find((question) => question.id === "q1")?.options[0]).toContain(
      "ein Wasser",
    );
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", true)).toBe(
      "listening-transcript:a2-03:l1:q1",
    );
  });
});
