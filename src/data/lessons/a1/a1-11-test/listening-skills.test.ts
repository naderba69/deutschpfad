/**
 * a1-11 — فحصُ حواري النطق الاصطناعي وكل سؤال استماع وحدودُ التفاعل الاختياري · وإشاراتُ النطق والكتابةُ والوساطةُ وبطاقاتٌ فريدة مُرسّاة (جزء من تدقيق الدرس)
 * فُصل من a1-11.test.ts في الدفعة 110 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA111 } from "../a1-11";

describe("A1-11 audited lesson content", () => {
  it("checks both TTS dialogues, every listening question, and the optional interaction boundary", () => {
    expect(lessonA111.listening.items).toHaveLength(2);
    expect(lessonA111.listening.items.map((item) => item.lines.length)).toEqual(
      [5, 4],
    );
    const itemIds = new Set(lessonA111.listening.items.map((item) => item.id));
    for (const item of lessonA111.listening.items) {
      expect(item.title.trim()).toBeTruthy();
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }
    for (const question of lessonA111.listening.questions) {
      expect(itemIds.has(question.itemId)).toBe(true);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }
    expect(lessonA111.interaction?.[0].strategyAr).toContain(
      "لا تسجل كلاماً منطوقاً",
    );
    expect(
      lessonA111.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((id) => id.startsWith("flow-listening:")),
      ),
    ).toBe(false);
    const listeningGoal = lessonA111.lernziele.find((goal) => goal.id === "z8");
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l2:q2",
      "listening:l2:q3",
    ]);
    expect(listeningGoal?.evidence?.labelAr).toContain("قبل كشف النص");
  });

  it("checks pronunciation cues, writing, mediation, and unique anchored flashcards", () => {
    expect(lessonA111.pronunciation.items).toHaveLength(7);
    expect(lessonA111.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA111.pronunciation.tip.trim()).toBeTruthy();
    for (const item of lessonA111.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const item of lessonA111.pronunciation.shadowing ?? []) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.tip?.trim()).toBeTruthy();
    }

    expect(lessonA111.writing).toHaveLength(3);
    expect(lessonA111.mediation).toHaveLength(1);
    expect(lessonA111.mediation?.[0].keyPointsAr).toHaveLength(4);
    expect(lessonA111.interaction).toHaveLength(1);
    expect(lessonA111.interaction?.[0].rounds).toHaveLength(2);
    for (const round of lessonA111.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options.length).toBeGreaterThanOrEqual(2);
    }

    expect(lessonA111.flashcards).toHaveLength(25);
    expect(new Set(lessonA111.flashcards.map((card) => card.id)).size).toBe(25);
    expect(
      new Set(lessonA111.flashcards.map((card) => card.de.trim().toLowerCase()))
        .size,
    ).toBe(25);
    for (const card of lessonA111.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }
  });
});
