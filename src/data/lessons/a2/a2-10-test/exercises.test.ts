/**
 * a2-10 — التمارين: الاختيار من متعدّد والفراغات وتصحيح الأخطاء والمطابقة وترتيب الكلمات والتحويل والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-10.test.ts في الدفعة 102 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys, expectedMultipleChoiceOptions, expectedFillBlankKeys, expectedFillBlankOptions, expectedErrorCorrections, allTasks, task } from "./fixtures";

describe("A2-10 lesson content audit", () => {
  it("audits the key and every distractor for every multiple-choice item", () => {
    expect(Object.keys(expectedMultipleChoiceKeys).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "multiple-choice")
        .map((item) => item.id)
        .sort(),
    );

    for (const [id, expectedKey] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      const expectedOptions = expectedMultipleChoiceOptions[id];
      expect(expectedOptions, `${id} expected options`).toBeDefined();
      expect(exercise.options, `${id} option order and distractors`).toEqual(expectedOptions);
      expect(exercise.options[exercise.correctIndex], `${id} answer key`).toBe(expectedKey);
      expect(new Set(exercise.options.map((option) => option.toLowerCase())).size, `${id} unique options`).toBe(
        exercise.options.length,
      );
      expect(exercise.options.filter((option) => option === expectedKey)).toHaveLength(1);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option: ${option}`).toBe(
          option === expectedKey,
        );
      }
      expect(exercise.explanation.trim().length, `${id} Arabic feedback`).toBeGreaterThan(10);
    }
    expect(task("e2").explanation).toContain("يمكن أن تأتي dass بعد wissen في سياق يقرر مضموناً خبرياً بمعنى مختلف");
  });

  it("audits each fill-blank key and each offered alternative", () => {
    expect(Object.keys(expectedFillBlankKeys).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "fill-blank")
        .map((item) => item.id)
        .sort(),
    );

    for (const [id, expectedAnswers] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), `${id} answer key`).toEqual(expectedAnswers);
      expect(
        exercise.blanks.map((blank) => blank.options),
        `${id} options per blank`,
      ).toEqual(expectedFillBlankOptions[id]);
      expect(evaluateExercise(exercise, expectedAnswers).isCorrect, `${id} all correct`).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        expect(new Set(blank.options ?? []).size, `${id} blank ${blankIndex + 1} unique options`).toBe(
          blank.options?.length,
        );
        for (const option of blank.options ?? []) {
          const answer = [...expectedAnswers];
          answer[blankIndex] = option;
          expect(evaluateExercise(exercise, answer).isCorrect, `${id} blank ${blankIndex + 1}: ${option}`).toBe(
            option.toLowerCase() === expectedAnswers[blankIndex]?.toLowerCase(),
          );
        }
      });
    }
    expect(task("m5").explanation).toContain("لأنني نمت متأخراً أمس");
  });

  it("checks every error-correction sentence, highlighted span, key, and distractor", () => {
    expect(Object.keys(expectedErrorCorrections).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "error-correction")
        .map((item) => item.id)
        .sort(),
    );

    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} source sentence`).toBe(expected.sentence);
      expect(exercise.wrongWord, `${id} highlighted span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.isAlreadyCorrect).not.toBe(true);
      expect(exercise.instructionAr).not.toMatch(/لا خطأ|إن وجدت خطأ/);
      expect(exercise.options.filter((option) => option === expected.correctWord)).toHaveLength(1);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option: ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
  });

  it("checks the matching vocabulary, complete word-order tokens, and guided transformations", () => {
    const matching = task("e3");
    if (matching.type !== "matching") throw new Error("e3 must be matching");
    expect(matching.pairs).toEqual([
      { left: "der Kurs", right: "الدورة أو المساق" },
      { left: "die Prüfung", right: "الامتحان" },
      { left: "der Unterricht", right: "التعليم أو الحصة الدراسية" },
      { left: "studieren", right: "يدرس في الجامعة" },
    ]);
    expect(evaluateExercise(matching, matching.pairs).isCorrect).toBe(true);
    expect(evaluateExercise(matching, matching.pairs.slice(1)).isCorrect).toBe(false);

    const correctTokenOrders: Record<string, string[]> = {
      e4: ["Ich", "lerne", ",", "weil", "ich", "die", "Prüfung", "bestehen", "will", "."],
      e14: ["Wenn", "ich", "Zeit", "habe", ",", "lerne", "ich", "weiter", "."],
      m3: ["Ich", "weiß", "nicht", ",", "ob", "er", "kommt", "."],
    };
    expect(Object.keys(correctTokenOrders).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "word-ordering")
        .map((item) => item.id)
        .sort(),
    );
    for (const [id, answerTokens] of Object.entries(correctTokenOrders)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      const normalizedTokens = exercise.tokens.map((token) => token.replace(/[.,]/g, "")).filter(Boolean).sort();
      const normalizedAnswer = answerTokens.map((token) => token.replace(/[.,]/g, "")).filter(Boolean).sort();
      expect(normalizedTokens, `${id} contains each needed word exactly once`).toEqual(normalizedAnswer);
      expect(evaluateExercise(exercise, answerTokens).isCorrect, `${id} correct ordering`).toBe(true);
      expect(exercise.correctSentence.endsWith(".")).toBe(true);
    }
    expect(task("e4").instructionAr).toContain("Ich lerne");
    expect(task("m3").instructionAr).toContain("Ich weiß nicht");

    const transformations: Record<string, { accepted: string[]; sample: string }> = {
      w1: {
        accepted: ["Ich lerne Deutsch, weil es wichtig ist", "Ich lerne Deutsch, weil es wichtig ist."],
        sample: "Ich lerne Deutsch, weil es wichtig ist.",
      },
      e11: {
        accepted: [
          "Ich gehe heute nicht zum Kurs, weil ich krank bin.",
          "Ich gehe nicht zum Kurs, weil ich krank bin.",
        ],
        sample: "Ich gehe heute nicht zum Kurs, weil ich krank bin.",
      },
      e7: {
        accepted: ["Ich weiß nicht, ob er kommt", "Ich weiß nicht, ob er kommt."],
        sample: "Ich weiß nicht, ob er kommt.",
      },
    };
    expect(Object.keys(transformations).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "transformation")
        .map((item) => item.id)
        .sort(),
    );
    for (const [id, expected] of Object.entries(transformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers).toEqual(expected.accepted);
      expect(exercise.sampleAnswer).toBe(expected.sample);
      for (const answer of exercise.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id} accepted: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Ich weiß nicht, ob er ist kommt.").isCorrect).toBe(false);
    }
  });

  it("checks both dictations against their exact heard text", () => {
    const expected: Record<string, string> = {
      w3: "Ich weiß nicht, ob die Prüfung schwer ist.",
      e10: "Wenn ich Zeit habe, lerne ich Vokabeln.",
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "dictation")
        .map((item) => item.id)
        .sort(),
    );
    for (const [id, audioText] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText).toBe(audioText);
      expect(evaluateExercise(exercise, audioText).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, "Ich weiß nicht, die Prüfung ob schwer ist.").isCorrect).toBe(false);
    }
  });
});
