/**
 * a2-08 — التمارين — مفاتيحُ الاختيار من متعدّد ومشتّتاتُه · أجوبةُ الفراغات ورفضُ كل بديلٍ في فراغه · أزواجُ المطابقة ورموزُ الترتيب ومشتّتاتُ التصحيح والتحويلُ والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-08.test.ts في الدفعة 108 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys } from "./fixtures";
import { expectedMultipleChoiceOptions } from "./fixtures";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";

describe("A2-08 reviewed lesson", () => {
  it("checks every multiple-choice answer key and each offered distractor", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options/distractors`).toEqual(expectedMultipleChoiceOptions[id]);
      expect(exercise.options[exercise.correctIndex], `${id} answer key`).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, `${id} unique choices`).toBe(
        exercise.options.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} correct key`).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} choice ${index + 1}: ${option}`,
        ).toBe(index === exercise.correctIndex);
      }
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
  });

  it("checks every fill-blank answer and rejects each alternative in its own blank", () => {
    const expectedKeys: Record<string, string[]> = {
      r3: ["war"],
      e6: ["besser", "besten", "mehr", "meisten", "lieber", "liebsten"],
      e12: ["größer"],
      w2: ["schneller", "billiger"],
      m5: ["lieber", "liebsten"],
    };
    const expectedOptions: Record<string, string[][]> = {
      r3: [["war", "bin", "hatte"]],
      e6: [
        ["besser", "guter", "beste"],
        ["besten", "gutesten", "bessersten"],
        ["mehr", "vieler", "meisten"],
        ["meisten", "mehrsten", "vielsten"],
        ["lieber", "gern", "gerne"],
        ["liebsten", "liebersten", "meisten"],
      ],
      e12: [["größer", "großer", "größten"]],
      w2: [
        ["schneller", "schnell", "am schnellsten"],
        ["billiger", "billig", "am billigsten"],
      ],
      m5: [
        ["lieber", "besser", "mehr"],
        ["liebsten", "besten", "meisten"],
      ],
    };
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedKeys).sort());

    for (const [id, expected] of Object.entries(expectedKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} choices`).toEqual(
        expectedOptions[id],
      );
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank count`).toBe(
        exercise.blanks.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} answer key`).toBe(true);
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

  it("checks each matching pair, word-order token, correction distractor, transformation, and dictation", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id)).toEqual(["e3"]);
    const match = task("e3");
    if (match.type !== "matching") throw new Error("e3 must be matching");
    expect(match.pairs).toEqual([
      { left: "der Zug", right: "القطار" },
      { left: "die U-Bahn", right: "المترو" },
      { left: "das Fahrrad", right: "الدراجة الهوائية" },
      { left: "die Straßenbahn", right: "الترام" },
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
      e4: "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.",
      m3: "Die Taxifahrt ist im Beispiel teurer als die Autofahrt.",
    };
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderings).sort());
    for (const [id, expected] of Object.entries(expectedOrderings)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      const tokenUnits = exercise.tokens
        .flatMap((token) => normalizeText(token).split(" "))
        .filter(Boolean)
        .sort();
      const sentenceUnits = normalizeText(expected).split(" ").filter(Boolean).sort();
      expect(tokenUnits, `${id} token inventory`).toEqual(sentenceUnits);
      expect(evaluateExercise(exercise, expected.split(/\s+/)).isCorrect, `${id} answer key`).toBe(true);
      const wrongOrder = expected.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} changed order`).toBe(false);
    }

    const expectedCorrections: Record<
      string,
      { wrong: string; wrongWord: string; correct: string; answer: string; options: string[] }
    > = {
      e5: {
        wrong: "Auf dieser Strecke ist der Zug schneller wie der Bus.",
        wrongWord: "wie",
        correct: "als",
        answer: "Auf dieser Strecke ist der Zug schneller als der Bus.",
        options: ["als", "wie", "dann", "denn"],
      },
      e9: {
        wrong: "Der Zug abfährt um zehn Uhr.",
        wrongWord: "abfährt um zehn Uhr",
        correct: "fährt um zehn Uhr ab",
        answer: "Der Zug fährt um zehn Uhr ab.",
        options: ["fährt um zehn Uhr ab", "abfährt um zehn Uhr", "fährt ab um zehn Uhr", "fährt um ab zehn Uhr"],
      },
      m4: {
        wrong: "Ich fahre lieber mit dem Zug als mit der Bus.",
        wrongWord: "der Bus",
        correct: "dem Bus",
        answer: "Ich fahre lieber mit dem Zug als mit dem Bus.",
        options: ["dem Bus", "den Bus", "das Bus", "der Bus"],
      },
    };
    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} source`).toBe(expected.wrong);
      expect(exercise.wrongWord, `${id} target`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} key`).toBe(expected.correct);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
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
      e7: [
        "Von diesen drei Verkehrsmitteln ist das Taxi am teuersten.",
        "Von diesen drei Verkehrsmitteln ist das Taxi am teuersten",
      ],
      w1: [
        "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.",
        "Der Zug ist auf dieser Beispielstrecke schneller als der Bus.",
      ],
      w4: [
        "Eine einfache Fahrkarte nach München, bitte.",
        "Eine einfache Fahrkarte nach München, bitte",
      ],
    };
    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedTransformations).sort(),
    );
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      expect(answers).toContain(exercise.sampleAnswer);
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Wo muss ich umsteigen?",
      w3: "Muss ich in Bremen umsteigen?",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} exact transcription`).toBe(true);
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }
  });
});
