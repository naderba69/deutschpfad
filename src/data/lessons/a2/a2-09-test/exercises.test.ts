/**
 * a2-09 — التمارين: الاختيار من متعدّد والفراغات والمطابقة وترتيب الكلمات وبدائلُ التصحيح والتحويل والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-09.test.ts في الدفعة 103 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys, expectedMultipleChoiceOptions, expectedFillBlankKeys, expectedFillBlankOptions, allTasks, task } from "./fixtures";

describe("A2-09 lesson audit", () => {
  it("checks every multiple-choice key and every offered distractor", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options/distractors`).toEqual(expectedMultipleChoiceOptions[id]);
      expect(exercise.options[exercise.correctIndex], `${id} answer key`).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, `${id} unique options`).toBe(
        exercise.options.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} correct key`).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} option ${index + 1}: ${option}`,
        ).toBe(index === exercise.correctIndex);
      }
      if (id === "e5") expect(exercise.instructionAr).toContain("المخاطَب (أنتَ)");
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
  });

  it("checks each fill-blank key and rejects every distractor in its own blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedFillBlankKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), `${id} keys`).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} options`).toEqual(
        expectedFillBlankOptions[id],
      );
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank count`).toBe(
        exercise.blanks.length,
      );
      if (id === "e14") {
        expect(exercise.template).toBe(
          "Die Gäste kommen von draußen und gehen ___ Innenhof. Danach feiern sie ___ Innenhof.",
        );
      }
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} complete key`).toBe(true);

      exercise.blanks.forEach((blank, blankIndex) => {
        const options = blank.options ?? [];
        expect(new Set(options.map(normalizeText)).size, `${id} blank ${blankIndex + 1} unique`).toBe(
          options.length,
        );
        for (const distractor of options.filter((option) => option !== blank.correct)) {
          const attempt = [...expected];
          attempt[blankIndex] = distractor;
          expect(
            evaluateExercise(exercise, attempt).isCorrect,
            `${id} blank ${blankIndex + 1}: ${distractor}`,
          ).toBe(false);
        }
      });
    }
  });

  it("checks all matching pairs, word-order tokens, and correction alternatives", () => {
    const matching = task("e3");
    if (matching.type !== "matching") throw new Error("e3 must be matching");
    expect(matching.pairs).toEqual([
      { left: "helfen", right: "يساعد" },
      { left: "gefallen", right: "يعجب" },
      { left: "gehören", right: "يخصّ / يكون ملكاً لـ" },
      { left: "gratulieren", right: "يهنئ" },
      { left: "danken", right: "يشكر" },
    ]);
    expect(evaluateExercise(matching, matching.pairs).isCorrect).toBe(true);
    expect(
      evaluateExercise(matching, [
        ...matching.pairs.slice(0, -1),
        { left: "danken", right: "يهنئ" },
      ]).isCorrect,
    ).toBe(false);

    const expectedOrders: Record<string, string> = {
      e4: "Ich helfe dem Vater im Garten.",
      m3: "Das Fotoalbum gefällt der Nachbarin.",
    };
    const ordering = allTasks().filter((item) => item.type === "word-ordering");
    expect(ordering.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrders).sort());
    for (const [id, sentence] of Object.entries(expectedOrders)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} must be word-ordering`);
      expect(exercise.correctSentence).toBe(sentence);
      expect(new Set(exercise.tokens).size).toBe(exercise.tokens.length);
      expect(evaluateExercise(exercise, sentence.split(" ")).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, [...sentence.split(" ")].reverse()).isCorrect).toBe(false);
    }

    const expectedCorrections: Record<string, { correct: string; options: string[] }> = {
      e5: { correct: "dir", options: ["dir", "dich", "mir", "ihn"] },
      e9: {
        correct: "den Kindern",
        options: ["den Kindern", "dem Kindern", "den Kinder", "der Kindern"],
      },
      m4: { correct: "der", options: ["der", "dem", "den", "das"] },
    };
    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} must be error-correction`);
      expect(exercise.correctWord).toBe(expected.correct);
      expect(exercise.options).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect).toBe(true);
      for (const option of expected.options.filter((candidate) => candidate !== expected.correct)) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(false);
      }
      expect(exercise.instructionAr).not.toContain("لا خطأ");
    }
  });

  it("checks every transformation and dictation answer, including rejection paths", () => {
    const accepted: Record<string, string[]> = {
      e7: ["Ich helfe dem Vater.", "Ich helfe dem Vater"],
      w1: [
        "Ich lade dich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich herzlich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich am Samstag um 18 Uhr zu meiner Geburtstagsfeier bei mir zu Hause ein.",
        "Am Samstag um 18 Uhr lade ich dich zu meiner Geburtstagsfeier bei mir zu Hause ein.",
      ],
      w4: [
        "Danke für die Einladung. Ich komme gern.",
        "Vielen Dank für die Einladung. Ich komme gern.",
        "Danke für die Einladung. Ich komme gerne.",
        "Vielen Dank für die Einladung. Ich komme gerne.",
      ],
    };
    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(Object.keys(accepted).sort());
    for (const [id, answers] of Object.entries(accepted)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} must be transformation`);
      expect(exercise.acceptedAnswers).toEqual(answers);
      if (id === "e7") expect(exercise.instructionAr).toContain("انتبه لتغير الحالة");
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "__not_an_accepted_answer__").isCorrect).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Wir gratulieren der Nachbarin zum neuen Job.",
      w3: "Das Geschenk gefällt mir sehr.",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, audioText] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} must be dictation`);
      expect(exercise.audioText).toBe(audioText);
      expect(evaluateExercise(exercise, audioText).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, "__not_the_audio_text__").isCorrect).toBe(false);
    }
  });
});
