/**
 * a2-06 — التمارين — الاختيارُ من متعدّد في المراجعة والتدريب والقراءة والاستماع · الفراغاتُ وبدائلُها · المطابقةُ ورموزُ الترتيب وبدائلُ التصحيح والتحويلُ والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-06.test.ts في الدفعة 105 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys } from "./fixtures";
import { expectedMultipleChoiceOptions } from "./fixtures";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";

describe("A2-06 audited lesson", () => {
  it("checks every multiple-choice key and every distractor in review, practice, reading, and listening", () => {
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
    expect(task("e2").instructionAr).toContain("لا سبباً أو شرطاً");
    expect(task("m2").instructionAr).toContain("لا سؤالاً غير مباشر أو سبباً");
  });

  it("checks every fill-blank key and rejects each offered alternative in its own blank", () => {
    const expectedKeys: Record<string, string[]> = {
      r3: ["Musik"],
      e6: ["glaube", "hoffe", "weiß"],
      e12: ["kannst"],
      w2: ["ist", "kommst"],
      m5: ["sind", "kommt"],
    };
    const expectedOptions: Record<string, string[][]> = {
      r3: [["Musik", "Zeitung", "Nachricht"]],
      e6: [
        ["glaube", "hoffe", "weiß"],
        ["glaube", "hoffe", "weiß"],
        ["glaube", "hoffe", "weiß"],
      ],
      e12: [["kannst", "kann", "können"]],
      w2: [
        ["ist", "sein", "sind"],
        ["kommst", "kommt", "kommen"],
      ],
      m5: [["sind", "ist", "sein"], ["kommt", "kommen", "kommst"]],
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
    const stanceExercise = task("e6");
    if (stanceExercise.type !== "fill-blank") throw new Error("e6 must be fill-blank");
    expect(stanceExercise.template).toContain("Ich möchte keinen Regen");
    expect(stanceExercise.template).toContain("Das ist mein Wunsch");
    expect(stanceExercise.template).toContain("in der Zeitung gelesen");
  });

  it("checks every match, ordering token set, correction option, transformation, and dictation", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id)).toEqual(["e3"]);
    const match = task("e3");
    if (match.type !== "matching") throw new Error("e3 must be matching");
    expect(match.pairs).toEqual([
      { left: "das Fernsehen", right: "التلفاز / وسيلة التلفزيون" },
      { left: "die Zeitung", right: "الصحيفة" },
      { left: "das Internet", right: "الإنترنت" },
      { left: "das Radio", right: "الراديو / الإذاعة" },
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
      e4: "Er glaubt, dass sie kommt.",
      e13: "Ich glaube, dass die Zeitung jeden Freitag erscheint.",
      m3: "Ich hoffe, dass du kommst.",
    };
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderings).sort());
    for (const [id, expected] of Object.entries(expectedOrderings)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      expect(exercise.correctSentence).toContain(", dass");
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

    const expectedCorrections: Record<string, { wrong: string; correct: string; answer: string; options: string[] }> = {
      e5: {
        wrong: "Ich glaube, dass er kommt heute.",
        correct: "heute kommt",
        answer: "Ich glaube, dass er heute kommt.",
        options: ["heute kommt", "kommt heute", "heute kommt heute", "kommst heute"],
      },
      e9: {
        wrong: "Ich finde, dass der Artikel ist interessant.",
        correct: "interessant ist",
        answer: "Ich finde, dass der Artikel interessant ist.",
        options: ["interessant ist", "ist interessant", "interessant sein", "interessant bist"],
      },
      e14: {
        wrong: "Ich denke, dass du kannst den Artikel lesen.",
        correct: "den Artikel lesen kannst",
        answer: "Ich denke, dass du den Artikel lesen kannst.",
        options: [
          "den Artikel lesen kannst",
          "kannst den Artikel lesen",
          "den Artikel kannst lesen",
          "den Artikel lesen kann",
        ],
      },
      m4: {
        wrong: "Ich weiß dass die Zeitung heute erscheint.",
        correct: "weiß, dass",
        answer: "Ich weiß, dass die Zeitung heute erscheint.",
        options: ["weiß, dass", "weiß dass", "weiß dass,", "weiß, dass,"],
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
      e7: ["Ich denke, dass der Film gut ist"],
      w1: [
        "Ich glaube, dass die Nachrichten wichtig sind",
        "Ich denke, dass die Nachrichten wichtig sind",
        "Ich finde, dass die Nachrichten wichtig sind",
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
      expect(answers).toContain(exercise.sampleAnswer.replace(/[.]$/, ""));
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Die Zeitung erscheint heute.",
      w3: "Die Nachrichten sind interessant.",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, "Das ist eine andere Antwort.").isCorrect, id).toBe(false);
    }
  });
});
