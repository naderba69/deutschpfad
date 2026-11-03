/**
 * a2-07 — التمارين: الاختيار من متعدّد والفراغات والمطابقة والترتيب والتصحيح والتحويل والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-07.test.ts في الدفعة 101 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys, expectedMultipleChoiceOptions, allTasks, task } from "./fixtures";

describe("A2-07 audited lesson", () => {
  it("checks every multiple-choice key and every offered distractor individually", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      expect(exercise.options, `${id} options and distractors`).toEqual(
        expectedMultipleChoiceOptions[id],
      );
      expect(exercise.options[exercise.correctIndex], id).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, id).toBe(exercise.options.length);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} option ${index + 1}: ${option}`,
        ).toBe(index === exercise.correctIndex);
      }
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
  });

  it("checks every fill-blank key and rejects every other offered answer in its own blank", () => {
    const expectedKeys: Record<string, string[]> = {
      r3: ["Euros"],
      e6: ["sie", "dir", "mich"],
      e14: ["einen"],
      w2: ["dich", "mir", "ihm"],
      m5: ["dich", "dir"],
    };
    const expectedOptions: Record<string, string[][]> = {
      r3: [["Euros", "Euro", "Euroen"]],
      e6: [
        ["sie", "ihr", "ihn"],
        ["dir", "dich", "mir"],
        ["mich", "mir", "dich"],
      ],
      e14: [["einen", "einem", "ein", "der"]],
      w2: [
        ["dich", "dir", "mich"],
        ["mir", "mich", "dir"],
        ["ihm", "ihn", "ihr"],
      ],
      m5: [
        ["dich", "dir", "mich"],
        ["dich", "dir", "mich"],
      ],
    };
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedKeys).sort());

    for (const [id, expected] of Object.entries(expectedKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} options`).toEqual(
        expectedOptions[id],
      );
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank count`).toBe(
        exercise.blanks.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        const options = blank.options ?? [];
        expect(new Set(options).size, `${id} blank ${blankIndex + 1}`).toBe(options.length);
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
    const pronounBlank = task("e6");
    if (pronounBlank.type !== "fill-blank") throw new Error("e6 must be fill-blank");
    expect(pronounBlank.caseSensitive).toBe(true);
    expect(evaluateExercise(pronounBlank, ["Sie", "dir", "mich"]).isCorrect).toBe(false);
    const euroReview = task("r3");
    if (euroReview.type !== "fill-blank") throw new Error("r3 must be fill-blank");
    expect(euroReview.template).toBe("der Euro → die ___");
  });

  it("checks every match, ordering token, correction option, transformation, and dictation", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id)).toEqual(["e3"]);
    const match = task("e3");
    if (match.type !== "matching") throw new Error("e3 must be matching");
    expect(match.pairs).toEqual([
      { left: "mich", right: "Er sieht mich. = هو يراني." },
      { left: "dich", right: "Ich sehe dich. = أراك." },
      { left: "mir", right: "Kannst du mir helfen? = هل تساعدني؟" },
      { left: "dir", right: "Ich helfe dir. = أساعدك." },
    ]);
    expect(evaluateExercise(match, match.pairs).isCorrect).toBe(true);
    for (let index = 0; index < match.pairs.length; index += 1) {
      const changed = match.pairs.map((pair, pairIndex) => ({
        left: pair.left,
        right: pairIndex === index ? `wrong-${index}` : pair.right,
      }));
      expect(evaluateExercise(match, changed).isCorrect, `e3 pair ${index + 1}`).toBe(false);
    }

    const expectedOrderings: Record<string, string> = {
      e4: "Kannst du mir helfen?",
      m3: "Gibt es hier einen Geldautomaten?",
    };
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderings).sort());
    for (const [id, expected] of Object.entries(expectedOrderings)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      const tokenUnits = exercise.tokens
        .flatMap((token) => normalizeText(token).split(" "))
        .filter(Boolean)
        .sort();
      const sentenceUnits = normalizeText(expected).split(" ").filter(Boolean).sort();
      expect(tokenUnits, `${id} token inventory`).toEqual(sentenceUnits);
      expect(evaluateExercise(exercise, expected.split(/\s+/)).isCorrect, id).toBe(true);
      const wrongOrder = expected.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} wrong order`).toBe(false);
    }

    const expectedCorrections: Record<
      string,
      { wrong: string; wrongWord: string; correct: string; answer: string; options: string[] }
    > = {
      e5: {
        wrong: "Kannst du mich helfen?",
        wrongWord: "mich",
        correct: "mir",
        answer: "Kannst du mir helfen?",
        options: ["mir", "mich", "dich", "ihn"],
      },
      e9: {
        wrong: "Das Buch gehört ihn.",
        wrongWord: "ihn",
        correct: "ihm",
        answer: "Das Buch gehört ihm.",
        options: ["ihm", "ihn", "ihr", "es"],
      },
      m4: {
        wrong: "Ich danke dich für alles.",
        wrongWord: "dich",
        correct: "dir",
        answer: "Ich danke dir für alles.",
        options: ["dir", "dich", "mich", "ihn"],
      },
    };
    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error correction`);
      expect(exercise.wrongSentence, id).toBe(expected.wrong);
      expect(exercise.wrongWord, id).toBe(expected.wrongWord);
      expect(exercise.correctWord, id).toBe(expected.correct);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options).toContain(expected.correct);
      expect(exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord)).toBe(
        expected.answer,
      );
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(
          option === expected.correct,
        );
      }
    }

    const expectedTransformations: Record<string, string[]> = {
      e7: ["Gibt es einen Geldautomaten?"],
      w1: [
        "Es gibt eine Bank in der Nähe.",
        "In der Nähe gibt es eine Bank.",
      ],
    };
    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedTransformations).sort(),
    );
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not a transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      expect(answers).toContain(exercise.sampleAnswer);
      expect(exercise.caseSensitive).toBe(true);
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, answers[0].toLowerCase()).isCorrect, `${id} capitalization`).toBe(
        false,
      );
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Ich überweise das Geld auf dein Konto.",
      w3: "Kannst du mir bitte helfen?",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(exercise.caseSensitive, id).toBe(true);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, expected.toLowerCase()).isCorrect, `${id} capitalization`).toBe(
        false,
      );
      for (const acceptedVariant of exercise.acceptedVariants ?? []) {
        expect(evaluateExercise(exercise, acceptedVariant).isCorrect, `${id} variant`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Das ist eine andere Antwort.").isCorrect, id).toBe(false);
    }
  });
});
