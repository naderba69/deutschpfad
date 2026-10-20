/**
 * a2-11 — التمارين — الاختيار من متعدّد والفراغات وتصحيحُ الأخطاء والمطابقة وترتيبُ الكلمات والتحويل والأمر والإملاء (جزء من تدقيق الدرس)
 * فُصل من a2-11.test.ts في الدفعة 104 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys } from "./fixtures";
import { expectedMultipleChoiceOptions } from "./fixtures";
import { expectedFillBlanks } from "./fixtures";
import { expectedErrorCorrections } from "./fixtures";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";
import { taskOfType } from "./fixtures";

describe("A2-11 lesson content audit", () => {
  it("audits every multiple-choice key and each individual distractor", () => {
    const allMcqIds = allTasks().filter((item) => item.type === "multiple-choice").map(({ id }) => id).sort();
    expect(Object.keys(expectedMultipleChoiceKeys).sort()).toEqual(allMcqIds);

    for (const [id, key] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      const options = expectedMultipleChoiceOptions[id];
      expect(exercise.options, `${id} options and distractors`).toEqual(options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(key);
      expect(new Set(exercise.options.map((option) => option.toLocaleLowerCase())).size, `${id} unique options`).toBe(
        exercise.options.length,
      );
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(option === key);
      }
      expect(exercise.explanation.trim().length, `${id} feedback`).toBeGreaterThan(10);
    }
  });

  it("checks every fill-blank key and tests every alternative against the engine", () => {
    expect(Object.keys(expectedFillBlanks).sort()).toEqual(
      allTasks().filter((item) => item.type === "fill-blank").map(({ id }) => id).sort(),
    );

    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options per blank`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect, `${id} all keys`).toBe(true);
      exercise.blanks.forEach((blank, index) => {
        expect(new Set(blank.options ?? []).size, `${id} blank ${index + 1} unique distractors`).toBe(
          blank.options?.length,
        );
        for (const option of blank.options ?? []) {
          const answers = [...expected.correct];
          answers[index] = option;
          expect(evaluateExercise(exercise, answers).isCorrect, `${id} blank ${index + 1}: ${option}`).toBe(
            option.toLowerCase() === expected.correct[index]?.toLowerCase(),
          );
        }
      });
    }
    expect(task("e12").hint).toContain("التسجيل/الالتحاق بحسب السياق");
    expect(taskOfType("m5", "fill-blank").template).toContain("Sie (هي)");
  });

  it("checks every error-correction span, intended context, and distractor", () => {
    expect(Object.keys(expectedErrorCorrections).sort()).toEqual(
      allTasks().filter((item) => item.type === "error-correction").map(({ id }) => id).sort(),
    );

    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} displayed sentence`).toBe(expected.sentence);
      expect(exercise.wrongWord, `${id} highlighted span`).toBe(expected.wrongWord);
      expect(exercise.wrongSentence.includes(expected.wrongWord), `${id} highlight exists in text`).toBe(true);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} distractors`).toEqual(expected.options);
      expect(exercise.isAlreadyCorrect).toBe(expected.alreadyCorrect);

      const correctAnswer = expected.alreadyCorrect ? NO_ERROR_OPTION : expected.correctWord;
      expect(evaluateExercise(exercise, correctAnswer).isCorrect, `${id} accepted answer`).toBe(true);
      for (const option of exercise.options) {
        const optionIsCorrection = !expected.alreadyCorrect && option === expected.correctWord;
        expect(evaluateExercise(exercise, option).isCorrect, `${id} offered option: ${option}`).toBe(optionIsCorrection);
      }
      if (!expected.alreadyCorrect) {
        expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect, `${id} must not allow no-error`).toBe(false);
      }
      if (expected.alreadyCorrect) {
        const visibleOptions = [ ...exercise.options.filter((option) => option !== NO_ERROR_OPTION && option !== exercise.correctWord), NO_ERROR_OPTION, ];
        expect(visibleOptions).not.toContain(expected.correctWord);
        expect(visibleOptions).toContain(NO_ERROR_OPTION);
        expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect).toBe(true);
      }
    }
    expect(task("e9").instructionAr).toContain("إذا كان هو نفسه يتطلع");
    expect(task("m4").explanation).toContain("freuen` هنا متعدٍّ");
  });

  it("reviews both matching exercises, including every field label and translation", () => {
    const expectedPairs: Record<string, { left: string; right: string }[]> = {
      e3: [
        { left: "sich freuen", right: "يكون مسروراً/يتطلع بحسب السياق" },
        { left: "sich ärgern", right: "ينزعج/يغضب بحسب السياق" },
        { left: "sich anmelden", right: "يسجّل/يلتحق بحسب السياق" },
        { left: "sich beeilen", right: "يسرع/يستعجل" },
      ],
      e11: [
        { left: "der Nachname", right: "اسم العائلة/اللقب" },
        { left: "der Vorname", right: "الاسم الأول" },
        { left: "das Geburtsdatum", right: "تاريخ الميلاد" },
        { left: "die Staatsangehörigkeit", right: "الجنسية" },
        { left: "die Anschrift", right: "العنوان" },
      ],
    };
    expect(Object.keys(expectedPairs).sort()).toEqual(
      allTasks().filter((item) => item.type === "matching").map(({ id }) => id).sort(),
    );

    for (const [id, pairs] of Object.entries(expectedPairs)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} every pair`).toEqual(pairs);
      expect(new Set(pairs.map(({ left }) => left)).size, `${id} unique German labels`).toBe(pairs.length);
      expect(new Set(pairs.map(({ right }) => right)).size, `${id} unique Arabic matches`).toBe(pairs.length);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} all pairs`).toBe(true);
      const oneWrong = pairs.map((pair, index) => index === 0 ? { ...pair, right: pairs[1]?.right ?? "" } : pair);
      expect(evaluateExercise(exercise, oneWrong).isCorrect, `${id} one mismatched pair`).toBe(false);
    }
  });

  it("checks the two word-order tasks token-for-token and against their unique target sentences", () => {
    const expected: Record<string, { tokens: string[]; sentence: string }> = {
      e4: {
        tokens: ["mich", "Ich", "auf", "Urlaub", "den", "freue", "."],
        sentence: "Ich freue mich auf den Urlaub.",
      },
      m3: {
        tokens: ["mich", "Ich", "ärgere", "nicht", "."],
        sentence: "Ich ärgere mich nicht.",
      },
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks().filter((item) => item.type === "word-ordering").map(({ id }) => id).sort(),
    );
    for (const [id, value] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens).toEqual(value.tokens);
      expect(exercise.correctSentence).toBe(value.sentence);
      expect([...exercise.tokens].sort()).toEqual([...value.tokens].sort());
      expect(evaluateExercise(exercise, value.sentence.split(" ")).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, [...value.sentence.split(" ")].reverse()).isCorrect).toBe(false);
    }
    expect(task("e4").instructionAr).toContain("جملة خبرية محايدة");
    expect(task("e4").instructionAr).toContain("يبدأ ترتيبها بالفاعل");
    expect(task("m3").instructionAr).toContain("أنا لا أغضب");
  });

  it("validates the exact accepted answers for both transformations and the imperative", () => {
    const expected: Record<string, { acceptedAnswers: string[]; sampleAnswer: string }> = {
      w1: {
        acceptedAnswers: ["Ich freue mich auf den Urlaub.", "Ich freue mich auf die Ferien."],
        sampleAnswer: "Ich freue mich auf den Urlaub.",
      },
      w4: {
        acceptedAnswers: ["Entschuldigung, ich möchte mich beschweren."],
        sampleAnswer: "Entschuldigung, ich möchte mich beschweren.",
      },
      w5: {
        acceptedAnswers: ["Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch"],
        sampleAnswer: "Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch",
      },
      e7: {
        acceptedAnswers: ["Beeil dich bitte!", "Beeil dich!", "Beeile dich bitte!", "Beeile dich!"],
        sampleAnswer: "Beeil dich bitte!",
      },
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "transformation")
        .map(({ id }) => id)
        .sort(),
    );
    for (const [id, value] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted answers`).toEqual(value.acceptedAnswers);
      expect(
        new Set(exercise.acceptedAnswers.map(normalizeText)).size,
        `${id} answers remain distinct after engine normalization`,
      ).toBe(exercise.acceptedAnswers.length);
      expect(exercise.sampleAnswer, `${id} sample`).toBe(value.sampleAnswer);
      for (const answer of value.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(exercise.acceptedAnswers.length).toBeGreaterThan(0);
      expect(exercise.prompt.trim().length).toBeGreaterThan(10);
    }
    expect(taskOfType("w1", "transformation").prompt).toContain("auf den Urlaub");
    expect(taskOfType("w1", "transformation").prompt).toContain("auf die Ferien");
    expect(taskOfType("w4", "transformation").prompt).toContain("استخدم Entschuldigung");
    expect(taskOfType("w4", "transformation").explanation).toContain("ليست افتتاحاً وحيداً");
    expect(taskOfType("w5", "transformation").explanation).toContain("بيانات افتراضية");
    expect(evaluateExercise(task("w5"), "Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: deutsch").isCorrect).toBe(false);
  });

  it("checks the two dictation keys without treating dictation as speech assessment", () => {
    const expected: Record<string, string> = {
      e10: "Ich muss mich erholen.",
      w3: "Ich möchte mich beschweren.",
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks().filter((item) => item.type === "dictation").map(({ id }) => id).sort(),
    );
    for (const [id, text] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText).toBe(text);
      expect(evaluateExercise(exercise, text).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, `${text} falsch`).isCorrect).toBe(false);
    }
    expect(task("e10").explanation).toContain("يجب أن أستريح");
    expect(task("w3").explanation).toContain("ليس تقويماً للنطق");
  });
});
