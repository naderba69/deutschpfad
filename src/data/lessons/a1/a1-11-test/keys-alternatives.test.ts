/**
 * a1-11 — مفتاحُ جوابٍ لكل مهمة تدريب وفحصُ كل مشتّتٍ مُدرج · مفاتيحُ الاختبار القصير والكتابة والقراءة والاستماع · قبولُ كل صيغة تحويل منشورة وفرضُ أحكام الكتابة الألمانية (جزء من تدقيق الدرس)
 * فُصل من a1-11.test.ts في الدفعة 110 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonA111 } from "../a1-11";
import { practiceAnswers } from "./fixtures";
import { miniTestAnswers } from "./fixtures";
import { writingAnswers } from "./fixtures";
import { readingAnswers } from "./fixtures";
import { listeningAnswers } from "./fixtures";
import { reading } from "./fixtures";
import { allTasks } from "./fixtures";
import { findTask } from "./fixtures";
import { expectListedAlternativesRejected } from "./fixtures";

describe("A1-11 audited lesson content", () => {
  it("has an answer key for every practice task and checks each listed distractor", () => {
    const actualIds = lessonA111.practiceBank.map((task) => task.id).sort();
    expect(actualIds).toEqual(Object.keys(practiceAnswers).sort());
    expect(actualIds).toHaveLength(27);
    expect(new Set(actualIds).size).toBe(actualIds.length);
    expect(allTasks()).toHaveLength(43);
    expect(new Set(allTasks().map((task) => task.id)).size).toBe(43);

    for (const [id, answer] of Object.entries(practiceAnswers)) {
      const task = findTask(id);
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("checks every mini-test, writing, reading, and listening key", () => {
    expect(lessonA111.miniTest.map((task) => task.id).sort()).toEqual(
      Object.keys(miniTestAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(miniTestAnswers)) {
      const task = findTask(id);
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA111.writing.map((task) => task.id).sort()).toEqual(
      Object.keys(writingAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(writingAnswers)) {
      const task = findTask(id);
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }

    const readingText = reading();
    expect(readingText.questions.map((task) => task.id).sort()).toEqual(
      Object.keys(readingAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(readingAnswers)) {
      const task = readingText.questions.find(
        (candidate) => candidate.id === id,
      );
      if (!task) throw new Error(`A1-11 reading ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(
        answer,
      );
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(
      lessonA111.listening.questions.map((task) => task.id).sort(),
    ).toEqual(Object.keys(listeningAnswers).sort());
    for (const [id, answer] of Object.entries(listeningAnswers)) {
      const task = lessonA111.listening.questions.find(
        (candidate) => candidate.id === id,
      );
      if (!task) throw new Error(`A1-11 listening ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(
        answer,
      );
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts every published transformation variant and enforces selected German capitalization", () => {
    for (const task of allTasks()) {
      if (task.type !== "transformation") continue;
      expect(task.acceptedAnswers).toContain(task.sampleAnswer);
      for (const answer of task.acceptedAnswers) {
        expect(
          evaluateExercise(task, answer).isCorrect,
          `${task.id}: ${answer}`,
        ).toBe(true);
      }
      expect(
        evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      ).toBe(false);
    }

    expect(
      evaluateExercise(findTask("w1"), "ich gehe zur Apotheke.").isCorrect,
    ).toBe(false);
    expect(
      evaluateExercise(
        findTask("e10"),
        "der supermarket ist neben dem bahnhof.",
      ).isCorrect,
    ).toBe(false);
    expect(
      evaluateExercise(findTask("w3"), "die Apotheke ist um die Ecke.")
        .isCorrect,
    ).toBe(false);
  });
});
