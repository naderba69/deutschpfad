/**
 * a1-11 — تدقيقُ كتل النظرية الأربع والتمييزُ بين الأخطاء والبدائل والتبسيطات التعليمية · وفحصُ نص القراءة كاملاً والترجماتُ والمسردُ ومراجعُ الأسئلة (جزء من تدقيق الدرس)
 * فُصل من a1-11.test.ts في الدفعة 110 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonA111 } from "../a1-11";
import { reading } from "./fixtures";
import { findTask } from "./fixtures";

describe("A1-11 audited lesson content", () => {
  it("audits all four theory blocks and distinguishes errors from alternatives and teaching simplifications", () => {
    expect(lessonA111.lernziele).toHaveLength(9);
    expect(lessonA111.theory.map((block) => block.id)).toEqual([
      "t1",
      "t2",
      "t3",
      "t4",
    ]);
    for (const block of lessonA111.theory) {
      expect(block.titleAr.trim()).toBeTruthy();
      expect(block.titleDe.trim()).toBeTruthy();
      expect(block.explanationAr.trim()).toBeTruthy();
      expect(block.whyAr.trim()).toBeTruthy();
      expect(block.comparisonWithArabic.trim()).toBeTruthy();
      expect(block.eselsbruecke.trim()).toBeTruthy();
      expect(block.relatedRuleComparison?.title.trim()).toBeTruthy();
      expect(block.relatedRuleComparison?.content.trim()).toBeTruthy();
      expect(block.table?.columns.length).toBeGreaterThan(0);
      expect(block.table?.rows.length).toBeGreaterThan(0);
      for (const row of block.table?.rows ?? []) {
        expect(row.label.trim()).toBeTruthy();
        expect(row.cells).toHaveLength((block.table?.columns.length ?? 1) - 1);
        for (const cell of row.cells) expect(cell.trim()).toBeTruthy();
      }
      expect(block.examples.length).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(3);
      for (const example of block.examples) {
        expect(example.de.trim()).toBeTruthy();
        expect(example.ar.trim()).toBeTruthy();
      }
      for (const mistake of block.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim().length).toBeGreaterThanOrEqual(60);
        expect([
          "error",
          "contextual-alternative",
          "pedagogical-simplification",
          "unverified-claim",
        ]).toContain(mistake.classification);
      }
    }

    const destination = lessonA111.theory.find((block) => block.id === "t2");
    expect(destination?.explanationAr).toContain(
      "Ich gehe in der Stadt spazieren",
    );
    expect(
      destination?.commonMistakes.find((mistake) =>
        mistake.wrong.startsWith("Ich gehe in der Stadt"),
      )?.classification,
    ).toBe("contextual-alternative");
    expect(
      destination?.commonMistakes.find(
        (mistake) => mistake.wrong === "Wir gehen in das Kino.",
      )?.classification,
    ).toBe("pedagogical-simplification");

    const transport = lessonA111.theory.find((block) => block.id === "t3");
    expect(transport?.explanationAr).toContain("Ich gehe nach Berlin");
    expect(
      transport?.commonMistakes.find(
        (mistake) => mistake.wrong === "Ich gehe nach Berlin.",
      )?.classification,
    ).toBe("contextual-alternative");
    expect(
      transport?.commonMistakes.some(
        (mistake) => mistake.classification === "unverified-claim",
      ),
    ).toBe(false);
    expect(
      lessonA111.practiceBank.find((task) => task.id === "e20")?.type,
    ).toBe("transformation");
    expect(
      lessonA111.fehlerUndTipps.mistakes.map(
        (mistake) => mistake.classification,
      ),
    ).toEqual([
      "error",
      "contextual-alternative",
      "pedagogical-simplification",
    ]);
    expect(
      evaluateExercise(findTask("e27"), NO_ERROR_OPTION).isCorrect,
      "Ich gehe nach Berlin is not universally an error",
    ).toBe(true);
  });

  it("checks the full reading passage, translations, glossary, and question references", () => {
    const text = reading();
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    for (const [index, paragraph] of text.paragraphs.entries()) {
      expect(paragraph.trim(), `reading paragraph ${index + 1}`).toBeTruthy();
      expect(
        text.paragraphsAr[index]?.trim(),
        `Arabic paragraph ${index + 1}`,
      ).toBeTruthy();
    }
    expect(text.glossary.length).toBeGreaterThanOrEqual(8);
    const joined = text.paragraphs.join(" ").toLowerCase();
    for (const entry of text.glossary) {
      expect(entry.de.trim()).toBeTruthy();
      expect(entry.ar.trim()).toBeTruthy();
      expect(entry.noteAr?.trim()).toBeTruthy();
      const head = entry.de
        .replace(/^(der|die|das)\s+/i, "")
        .split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      if (stem.length >= 3)
        expect(joined, `${entry.de} occurs in reading`).toContain(stem);
    }
    expect(text.questions).toHaveLength(5);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(text.paragraphs.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
    }
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(text.discussionAr?.trim()).toBeTruthy();
  });
});
