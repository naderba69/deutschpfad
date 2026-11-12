/**
 * a2-05 — التمارين — الاختيارُ من متعدّد ومشتّتاتُه · الفراغاتُ ورفضُ كل بديلٍ في فراغه · أزواجُ المطابقة ورفضُها معدَّلةً · الترتيبُ والتصحيحُ والتحويلُ والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-05.test.ts في الدفعة 107 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys } from "./fixtures";
import { expectedMultipleChoiceOptions } from "./fixtures";
import { expectedFillBlankOptions } from "./fixtures";
import { expectedFillBlankKeys } from "./fixtures";
import { expectedOrderingKeys } from "./fixtures";
import { expectedOrderingTokens } from "./fixtures";
import { expectedErrorCorrections } from "./fixtures";
import { expectedWrongSentences } from "./fixtures";
import { expectedCorrectionOptions } from "./fixtures";
import { expectedTransformations } from "./fixtures";
import { expectedDictations } from "./fixtures";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";

describe("A2-05 audited lesson", () => {
  it("checks every multiple-choice key and each distractor individually", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(Object.keys(expectedMultipleChoiceKeys).sort());
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      expect(exercise.options, `${id} options and individual distractors`).toEqual(expectedMultipleChoiceOptions[id]);
      expect(exercise.options[exercise.correctIndex], id).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, id).toBe(exercise.options.length);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option ${index + 1}`).toBe(index === exercise.correctIndex);
      }
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
    const readingQuestion = task("rq2");
    if (readingQuestion.type !== "multiple-choice") throw new Error("rq2 must remain multiple choice");
    expect(readingQuestion.instructionAr).toContain("أين ومتى");
    const listeningQuestion = task("q1");
    if (listeningQuestion.type !== "multiple-choice") throw new Error("q1 must remain multiple choice");
    expect(listeningQuestion.questionDe).toBe("Wer ist gerade in einer Besprechung?");
  });

  it("checks every fill-blank key and rejects each offered alternative in its own blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedFillBlankKeys).sort());
    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} options per blank`).toEqual(expectedFillBlankOptions[id]);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        const options = blank.options ?? [];
        expect(options, `${id} blank ${blankIndex + 1}`).toContain(blank.correct);
        expect(new Set(options).size, `${id} blank ${blankIndex + 1}`).toBe(options.length);
        for (const distractor of options.filter((option) => option !== blank.correct)) {
          const attempt = [...expected];
          attempt[blankIndex] = distractor;
          expect(evaluateExercise(exercise, attempt).isCorrect, `${id} blank ${blankIndex + 1}: ${distractor}`).toBe(false);
        }
      });
      if (id === "m5") {
        expect(exercise.template).toBe("___ bitte! · Ich ___ Sie. · Mit wem ___ ich, bitte?");
        expect((exercise.template.match(/___/g) ?? [])).toHaveLength(3);
      } else expect((exercise.template.match(/___/g) ?? [])).toHaveLength(exercise.blanks.length);
    }
    const pronounContext = task("w2");
    if (pronounContext.type !== "fill-blank") throw new Error("w2 must remain fill-blank");
    expect(pronounContext.template).toContain("Frau Weber");
    expect(pronounContext.template).not.toContain("Sie ___");
  });

  it("checks every matching pair and rejects each pair when altered", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id).sort()).toEqual(["e3"]);
    const exercise = task("e3");
    if (exercise.type !== "matching") throw new Error("e3 must remain matching");
    expect(exercise.pairs).toEqual([
      {left: "Mit wem spreche ich, bitte?", right: "مع من أتحدث، من فضلك؟"},
      {left: "Einen Moment bitte.", right: "لحظة، من فضلك."},
      {left: "Ich verbinde Sie.", right: "سأحوّلك إلى الجهة المطلوبة."},
      {left: "Sie sind falsch verbunden.", right: "يبدو أن الاتصال وصل إلى جهة غير مقصودة."},
    ]);
    expect(evaluateExercise(exercise, exercise.pairs).isCorrect).toBe(true);
    expect(new Set(exercise.pairs.map((pair) => normalizeText(pair.left))).size).toBe(exercise.pairs.length);
    expect(new Set(exercise.pairs.map((pair) => normalizeText(pair.right))).size).toBe(exercise.pairs.length);
    for (let index = 0; index < exercise.pairs.length; index += 1) {
      const altered = exercise.pairs.map((pair, pairIndex) => ({
        left: pair.left,
        right: pairIndex === index ? `incorrect-${index}` : pair.right,
      }));
      expect(evaluateExercise(exercise, altered).isCorrect, `e3 pair ${index + 1}`).toBe(false);
    }
  });

  it("checks every ordering, correction, transformation, and dictation key", () => {
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderingKeys).sort());
    for (const [id, expected] of Object.entries(expectedOrderingKeys)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} shuffled tokens`).toEqual(expectedOrderingTokens[id]);
      expect(exercise.correctSentence, id).toBe(expected);
      const tokens = exercise.tokens.flatMap((token) => normalizeText(token).split(" ")).filter(Boolean).sort();
      const sentenceTokens = normalizeText(expected).split(" ").filter(Boolean).sort();
      expect(tokens, `${id} token inventory`).toEqual(sentenceTokens);
      expect(evaluateExercise(exercise, expected.split(/\s+/)).isCorrect, id).toBe(true);
      const wrongOrder = expected.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} wrong order`).toBe(false);
    }

    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(Object.keys(expectedErrorCorrections).sort());
    const correctedSentences: Record<string, string> = {
      e5: "Wir waren gestern im Büro.",
      e9: "Mit freundlichen Grüßen",
      m4: "Ich hatte einen Termin.",
    };
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, id).toBe(expectedWrongSentences[id]);
      expect(exercise.options, `${id} correction options`).toEqual(expectedCorrectionOptions[id]);
      expect(exercise.wrongSentence).toContain(exercise.wrongWord);
      expect(exercise.wrongSentence.split(exercise.wrongWord)).toHaveLength(2);
      expect(exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord), id).toBe(correctedSentences[id]);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(option === expected);
      }
    }

    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(Object.keys(expectedTransformations).sort());
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      expect(answers).toContain(exercise.sampleAnswer);
      for (const answer of answers) expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      expect(evaluateExercise(exercise, "Das ist eine falsche Antwort.").isCorrect, id).toBe(false);
    }

    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, "Eine falsche Antwort.").isCorrect, id).toBe(false);
    }
  });
});
