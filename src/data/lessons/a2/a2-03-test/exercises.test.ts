/**
 * a2-03 — التمارين — مفاتيحُ الاختيار من متعدّد ومشتّتاتُه · أجوبةُ الفراغات ورفضُ كل بديلٍ في فراغه · الترتيبُ وبدائلُه المقبولة والتصحيحاتُ والتحويلاتُ والإملاء · أزواجُ المطابقة وبياناتُ الصواب والخطأ (جزء من تدقيق الدرس)
 * فُصل من a2-03.test.ts في الدفعة 109 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { expectedMultipleChoiceKeys } from "./fixtures";
import { expectedFillBlankKeys } from "./fixtures";
import { expectedOrderingKeys } from "./fixtures";
import { expectedErrorCorrections } from "./fixtures";
import { expectedTransformations } from "./fixtures";
import { expectedAcceptedOrderings } from "./fixtures";
import { expectedDictations } from "./fixtures";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";

describe("A2-03 audited lesson", () => {
  it("checks every multiple-choice key and each distractor individually", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      expect(exercise.options[exercise.correctIndex], id).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, id).toBe(exercise.options.length);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option ${index + 1}`).toBe(
          index === exercise.correctIndex,
        );
      }
    }

    const formalAddress = task("e2");
    if (formalAddress.type !== "multiple-choice") throw new Error("e2 must remain multiple choice");
    expect(formalAddress.explanation).toContain("شخصاً واحداً أو أكثر");
    expect(formalAddress.explanation).not.toContain("صيغة الاحترام = صيغة الجمع");

    const meaningQuestion = task("e12");
    if (meaningQuestion.type !== "multiple-choice") throw new Error("e12 must remain multiple choice");
    expect(meaningQuestion.questionDe).toBe("Die Suppe schmeckt mir sehr gut.");
    expect(meaningQuestion.explanation).toContain("Ich schmecke die Suppe");
    expect(meaningQuestion.explanation).toContain("جملة صحيحة بمعنى آخر");

    const requestQuestion = task("e16");
    if (requestQuestion.type !== "multiple-choice") throw new Error("e16 must remain multiple choice");
    expect(requestQuestion.instructionAr).toContain("لا ترتيب الصيغ على سلّم ثابت");
    expect(requestQuestion.explanation).toContain("بديلان صحيحان");

    const agreementQuestion = task("rq5");
    if (agreementQuestion.type !== "multiple-choice") throw new Error("rq5 must remain multiple choice");
    expect(agreementQuestion.questionDe).toContain("Das Essen ___ allen");
    expect(agreementQuestion.explanation).toContain("Alle haben das Essen geschmeckt");
    expect(agreementQuestion.explanation).toContain("تذوّق الجميع الطعام");
  });

  it("protects every fill-blank key and rejects each offered alternative in its own blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedFillBlankKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);

      exercise.blanks.forEach((blank, blankIndex) => {
        expect(blank.options, `${id} blank ${blankIndex + 1}`).toBeDefined();
        const options = blank.options ?? [];
        expect(options).toContain(blank.correct);
        expect(new Set(options).size).toBe(options.length);
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

    const countQuestion = task("e21");
    if (countQuestion.type !== "fill-blank") throw new Error("e21 must remain fill-blank");
    expect(countQuestion.template).toContain("drei leere ___");
    expect(countQuestion.blanks[1].correct).toBe("Gläser");
    expect(countQuestion.explanation).toContain("zwei Glas Wein");

    const adjectiveQuestion = task("e22");
    if (adjectiveQuestion.type !== "fill-blank") throw new Error("e22 must remain fill-blank");
    expect(adjectiveQuestion.template).toBe("Ich möchte etwas ___ essen.");
    expect(adjectiveQuestion.blanks[0].options).not.toContain("warm");
    expect(adjectiveQuestion.explanation).toContain("Ich möchte etwas warm essen صحيحة أيضاً وقريبة المعنى");
  });

  it("protects ordering, accepted alternatives, corrections, transformations, and dictation keys", () => {
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedOrderingKeys).sort(),
    );
    for (const [id, expected] of Object.entries(expectedOrderingKeys)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      expect(exercise.acceptedSentences ?? [], `${id} accepted sentences`).toEqual(
        expectedAcceptedOrderings[id] ?? [],
      );
      const normalizedSentenceWords = normalizeText(exercise.correctSentence).split(" ");
      const normalizedTokenWords = exercise.tokens
        .flatMap((token) => normalizeText(token).split(" "))
        .filter(Boolean);
      expect([...normalizedTokenWords].sort(), `${id} token inventory`).toEqual(
        [...normalizedSentenceWords].sort(),
      );
      expect(evaluateExercise(exercise, exercise.correctSentence.split(/\s+/)).isCorrect, id).toBe(true);
      for (const accepted of exercise.acceptedSentences ?? []) {
        expect(
          [...normalizedTokenWords].sort(),
          `${id} accepted alternative token inventory`,
        ).toEqual([...normalizeText(accepted).split(" ")].sort());
        expect(
          evaluateExercise(exercise, accepted.split(/\s+/)).isCorrect,
          `${id} accepted alternative`,
        ).toBe(true);
      }
      const wrongOrder = exercise.correctSentence.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} wrong order`).toBe(false);
    }

    const firstPersonOrdering = task("e4");
    if (firstPersonOrdering.type !== "word-ordering") throw new Error("e4 must remain word-ordering");
    expect(firstPersonOrdering.instructionAr).toContain("تبدأ بـ Ich");
    const preposedOrdering = task("e23");
    if (preposedOrdering.type !== "word-ordering") throw new Error("e23 must remain word-ordering");
    expect(preposedOrdering.instructionAr).toContain("hätte gern + المفعول");
    const billOrdering = task("m3");
    if (billOrdering.type !== "word-ordering") throw new Error("m3 must remain word-ordering");
    expect(billOrdering.instructionAr).toContain("ابدأ باسم المطلوب");

    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedErrorCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, id).toBe(expected.wrong);
      expect(exercise.wrongSentence).toContain(exercise.wrongWord);
      expect(exercise.options).toContain(expected.correct);
      expect(evaluateExercise(exercise, expected.correct).isCorrect, id).toBe(true);
      for (const distractor of exercise.options.filter((option) => option !== expected.correct)) {
        expect(evaluateExercise(exercise, distractor).isCorrect, `${id}: ${distractor}`).toBe(false);
      }
    }

    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedTransformations).sort(),
    );
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Das ist eine falsche Antwort.").isCorrect, id).toBe(false);
    }

    const writingRequest = task("w1");
    if (writingRequest.type !== "transformation") throw new Error("w1 must remain a transformation");
    expect(writingRequest.acceptedAnswers).toContain(writingRequest.sampleAnswer);
    expect(evaluateExercise(writingRequest, writingRequest.sampleAnswer).isCorrect).toBe(true);

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

  it("checks each matching pair and every true/false statement", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id).sort()).toEqual(["e24", "e3"]);
    for (const exercise of matching) {
      if (exercise.type !== "matching") throw new Error(`${exercise.id} is not matching`);
      expect(evaluateExercise(exercise, exercise.pairs).isCorrect, exercise.id).toBe(true);
      for (let pairIndex = 0; pairIndex < exercise.pairs.length; pairIndex += 1) {
        const wrongPairing = exercise.pairs.map((pair, index) => ({
          left: pair.left,
          right:
            index === pairIndex
              ? exercise.pairs[(index + 1) % exercise.pairs.length].right
              : pair.right,
        }));
        expect(
          evaluateExercise(exercise, wrongPairing).isCorrect,
          `${exercise.id} pair ${pairIndex + 1} incorrect`,
        ).toBe(false);
      }
    }

    const trueFalse = task("e25");
    if (trueFalse.type !== "true-false") throw new Error("e25 must remain true/false");
    expect(trueFalse.statements.map((statement) => [statement.id, statement.isTrue])).toEqual([
      ["s1", true],
      ["s2", true],
      ["s3", true],
      ["s4", false],
    ]);
    expect(trueFalse.statements[2].de).toContain("in diesem Beispiel");
    expect(trueFalse.statements[3].de).toContain("keinen neuen Teller");
    const answer = Object.fromEntries(
      trueFalse.statements.map((statement) => [statement.id, statement.isTrue]),
    );
    expect(evaluateExercise(trueFalse, answer).isCorrect).toBe(true);
    for (const statement of trueFalse.statements) {
      expect(
        evaluateExercise(trueFalse, {
          ...answer,
          [statement.id]: !statement.isTrue,
        }).isCorrect,
        `${statement.id} incorrect judgment`,
      ).toBe(false);
    }
  });
});
