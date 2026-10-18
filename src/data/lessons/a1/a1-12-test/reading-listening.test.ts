/**
 * a1-12 — نصُّ القراءة كاملٌ وفقراتُه العربية ومسردُه وتفاصيلُه المرجعية · نصّا الاستماع وأسطرُهما وأسئلتُهما بلا عدّ كشفِ النصّ أداءً (جزء من تدقيق الدرس)
 * فُصل من a1-12.test.ts في الدفعة 106 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { lessonA112 } from "../a1-12";
import { reading } from "./fixtures";

describe("A1-12 audited lesson content", () => {
  it("audits the whole reading passage, Arabic paragraphs, glossary, and referenced details", () => {
    const text = reading();
    expect(text.titleDe).toBe("Wetter in den vier Jahreszeiten");
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    for (const [index, paragraph] of text.paragraphs.entries()) {
      expect(paragraph.trim(), `reading paragraph ${index + 1}`).toBeTruthy();
      expect(text.paragraphsAr[index]?.trim(), `Arabic paragraph ${index + 1}`).toBeTruthy();
    }
    const joined = text.paragraphs.join(" ").toLowerCase();
    expect(joined).not.toContain(" soll ");
    expect(joined).not.toContain("habe ich nie eine dicke jacke gebraucht");
    expect(text.paragraphs[1]).toContain("Für mich ist der Sommer hier kurz");
    expect(text.paragraphs[3]).toContain("mir ist immer kalt");
    expect(text.paragraphs[5]).toContain("Morgen regnet es hier");

    expect(text.glossary).toHaveLength(12);
    for (const entry of text.glossary) {
      expect(entry.de.trim()).toBeTruthy();
      expect(entry.ar.trim()).toBeTruthy();
      expect(entry.noteAr?.trim()).toBeTruthy();
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(3, head.length - 2)).toLowerCase();
      if (stem.length >= 3) expect(joined, `${entry.de} appears in passage`).toContain(stem);
    }
    expect(text.glossary.find((entry) => entry.de === "in der Nacht")?.noteAr).toContain(
      "يُحفظ كما هو",
    );
    expect(text.glossary.find((entry) => entry.de === "mir ist kalt")?.noteAr).toContain(
      "لا يعني أن Ich bin kalt خطأ مطلق",
    );
    expect(text.glossary.find((entry) => entry.de === "die Lieblingsjahreszeit")?.noteAr).toContain(
      "مكوّن أول في مركّب",
    );

    expect(text.questions).toHaveLength(5);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(text.paragraphs.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
    }
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(6);
    expect(text.discussionAr).toContain("غير مسجّل كدليل");
  });

  it("checks every line and question in both listening texts without treating transcript reveal as performance", () => {
    expect(lessonA112.listening.items).toHaveLength(2);
    expect(lessonA112.listening.items.map((item) => item.lines.length)).toEqual([4, 4]);
    const itemsById = new Map(lessonA112.listening.items.map((item) => [item.id, item]));
    for (const item of lessonA112.listening.items) {
      expect(item.title.trim()).toBeTruthy();
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }
    expect(itemsById.get("l1")?.lines[0]?.de).toContain("heute in Berlin");
    expect(itemsById.get("l2")?.lines[1]?.de).toContain("Bei uns in Tunesien");
    expect(itemsById.get("l2")?.lines[1]?.de).toContain("oft sehr heiß");
    expect(lessonA112.listening.questions.find((question) => question.id === "q3")?.questionDe).toBe(
      "Wie ist das Wetter im Sommer in Tunesien?",
    );

    for (const question of lessonA112.listening.questions) {
      expect(itemsById.has(question.itemId)).toBe(true);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(getListeningQuestionTaskId(lessonA112.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      expect(getListeningQuestionTaskId(lessonA112.id, question.itemId, question.id, true)).toBe(
        `listening-transcript:${lessonA112.id}:${question.itemId}:${question.id}`,
      );
    }

    const listeningGoal = lessonA112.lernziele.find((goal) => goal.id === "z8");
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
    ]);
    expect(listeningGoal?.evidence?.labelAr).toContain("قبل كشف");
    expect(
      lessonA112.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((taskId) => taskId.startsWith("flow-listening:")),
      ),
    ).toBe(false);
  });
});
