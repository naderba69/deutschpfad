import {describe, expect, it} from "vitest";

import {lessonA203} from "@/data/lessons/a2/a2-03";
import {evaluateExercise, normalizeText} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {getListeningQuestionTaskId} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "einen",
  r2: "Kommen Sie bitte herein!",
  e1: "möchte",
  e2: "Können",
  e8: "كيف الطعم؟",
  e12: "مذاق الشوربة طيب جداً بالنسبة إليّ.",
  e13: "schmeckt",
  e16: "Ich hätte gern einen Kaffee, bitte.",
  e20: "heiß",
  e27: "passt",
  m1: "möchte",
  m2: "Kannst",
  rq1: "Weil das Gasthaus am Abend voll war",
  rq2: "Der Kellner zeigt Ihnen den Tisch",
  rq3: "Nur die Getränke",
  rq4: "Höflich: „Entschuldigung … Könnten Sie das bitte an die Küche weitergeben?“",
  rq5: "hat",
  rq6: "1,60 Euro",
  q1: "Spaghetti, einen Salat und ein Wasser",
  q2: "lecker",
  q3: "Fleisch",
};

const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["das", "die", "der"],
  e6: ["schmeckt", "schmeckt", "schmeckt"],
  e11: ["schmeckt", "schmecken", "schmeckt"],
  e18: ["schmeckt", "schmecken"],
  e21: ["Tassen", "Gläser"],
  e22: ["Warmes"],
  m5: ["Speisekarte", "schmeckt", "Rechnung"],
  w2: ["möchte", "möchtest", "möchten", "möchten"],
};

const expectedOrderingKeys: Record<string, string> = {
  e4: "Ich möchte die Suppe bestellen.",
  e14: "Die Nudeln schmecken mir nicht.",
  e23: "Als Vorspeise hätte ich gern die Suppe",
  m3: "Die Rechnung, bitte!",
};

const expectedErrorCorrections: Record<string, {wrong: string; correct: string}> = {
  e5: {wrong: "Ich möchte trinken einen Kaffee.", correct: "einen Kaffee trinken"},
  e9: {wrong: "Ich möchte zahlen die Rechnung.", correct: "die Rechnung zahlen"},
  e17: {wrong: "Ich hätte gern ein Salat.", correct: "einen"},
  e19: {wrong: "Das Essen schmeckt ich sehr gut.", correct: "mir"},
  m4: {wrong: "Die Suppe schmeckt gut nicht.", correct: "nicht gut"},
};

const expectedTransformations: Record<string, string[]> = {
  e7: [
    "Die Rechnung, bitte!",
    "Ich möchte zahlen, bitte!",
    "Ich möchte bitte zahlen.",
    "Ich hätte gern die Rechnung, bitte.",
    "Ich möchte bitte die Rechnung.",
    "Könnten Sie mir bitte die Rechnung bringen?",
    "Könnte ich bitte die Rechnung haben?",
  ],
  e15: ["Der Kuchen gefällt mir.", "Mir gefällt der Kuchen."],
  e26: ["Ich hätte gern eine Suppe.", "Ich hätte gern eine Suppe"],
  w1: [
    "Ich möchte eine Pizza.",
    "Ich möchte bitte eine Pizza.",
    "Ich möchte eine Pizza, bitte.",
    "Ich möchte einen Salat.",
    "Ich möchte bitte einen Salat.",
    "Ich möchte einen Salat, bitte.",
    "Ich möchte die Suppe.",
    "Ich möchte bitte die Suppe.",
    "Ich möchte die Suppe, bitte.",
    "Ich möchte Wasser.",
    "Ich möchte bitte Wasser.",
    "Ich möchte Wasser, bitte.",
  ],
};

const expectedAcceptedOrderings: Record<string, string[]> = {
  e14: ["Mir schmecken die Nudeln nicht."],
};

const expectedDictations: Record<string, string> = {
  e10: "Die Suppe schmeckt mir sehr gut.",
  w3: "Ich möchte bitte zahlen.",
};

function reading() {
  const value = lessonA203.reading;
  if (!value) throw new Error("A2-03 must keep its reviewed reading text");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA203.review ?? []),
    ...lessonA203.practiceBank,
    ...lessonA203.miniTest,
    ...lessonA203.writing,
    ...reading().questions,
    ...lessonA203.listening.questions,
  ];
}

function tasksById(): Map<string, Exercise> {
  return new Map(allTasks().map((item) => [item.id, item]));
}

function task(id: string): Exercise {
  const value = tasksById().get(id);
  if (!value) throw new Error(`A2-03 task ${id} is missing`);
  return value;
}

function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
  taskIdOverride?: string,
): AnalyticsEvent {
  const goal = lessonA203.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-03 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA203.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-03 audited lesson", () => {
  it("keeps the lesson order, inventory, and every objective tied to assessable tasks", () => {
    expect(lessonA203.order).toBe(1);
    expect(lessonA203.lernziele.map((goal) => goal.id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(ids(lessonA203.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA203.practiceBank)).toEqual(
      Array.from({length: 27}, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA203.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA203.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5", "rq6"]);
    expect(ids(lessonA203.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect("duration" in lessonA203).toBe(false);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA203.practiceBank) {
      validTaskIds.add(`practice:${lessonA203.id}:${exercise.id}`);
    }
    for (const exercise of lessonA203.practiceBank.slice(0, Math.min(4, lessonA203.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA203.id}:${exercise.id}`);
    }
    for (const exercise of lessonA203.writing) {
      validTaskIds.add(`writing:${lessonA203.id}:${exercise.id}`);
    }
    for (const question of reading().questions) {
      validTaskIds.add(`reading:${reading().id}:${question.id}`);
    }
    for (const question of lessonA203.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA203.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA203.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have evidence`).toBeDefined();
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.some((taskId) => taskId.startsWith("flow-practice:"))).toBe(false);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    const listeningGoal = lessonA203.lernziele.find((goal) => goal.id === "z3");
    expect(listeningGoal?.evidence?.taskIds).toContain("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", true)).toBe(
      "listening-transcript:a2-03:l1:q1",
    );

    const orderGoal = lessonA203.lernziele.find((goal) => goal.id === "z1");
    expect(orderGoal?.evidence?.taskIds).toContain("writing:a2-03:w1");
    expect(lessonA203.lernziele.map((goal) => goal.de).join(" ")).not.toMatch(/sprechen|auswendig|Meisterschaft/i);
    expect(lessonA203.summary).not.toMatch(/Goethe-Zertifikat|Akkreditierung|vollständig|garantiert/i);
  });

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
    expect(adjectiveQuestion.explanation).toContain("Ich möchte etwas warm essen سليمة");
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

  it("keeps the reading questions attached to their paragraphs and the story within its stated scope", () => {
    const text = reading();
    expect(text.id).toBe("read-a2-03");
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphs[2]).toContain("zwei Apfelschorlen");
    expect(text.paragraphs[3]).toContain("an die Küche weitergeben");
    expect(text.paragraphs[3]).toContain("einen neuen Teller gebracht");
    expect(text.paragraphs[5]).toContain("Mein Anteil war 21,40 Euro");
    expect(text.paragraphs[5]).toContain("1,60 Euro Trinkgeld");
    expect(text.paragraphs[5]).not.toContain("das ist hier ganz normal");
    expect(text.paragraphsAr[5]).toContain("إكراميةً قدرها ١٫٦٠ يورو");

    expect(text.glossary.every((entry) => entry.de.trim() && entry.ar.trim())).toBe(true);
    expect(text.glossary.find((entry) => entry.de === "geschmeckt (schmecken)")?.noteAr).toContain(
      "Dativ الألمانية",
    );
    expect(text.glossary.find((entry) => entry.de === "die Vorspeise")?.noteAr).toContain("طبق جانبي");

    for (const question of text.questions) {
      expect(question.paragraph, question.id).toBeGreaterThanOrEqual(1);
      expect(question.paragraph, question.id).toBeLessThanOrEqual(text.paragraphs.length);
      expect(question.instructionAr.trim().length, question.id).toBeGreaterThan(0);
    }
    expect(text.questions.find((question) => question.id === "rq3")?.explanation).toContain(
      "لا يقرر ترتيباً عاماً",
    );
    expect(text.questions.find((question) => question.id === "rq4")?.options[1]).toContain(
      "beschimpft",
    );
    expect(text.questions.find((question) => question.id === "rq6")?.explanation).toContain(
      "في هذا المثال",
    );
  });

  it("keeps listening question coverage complete and the transcript reveal separate", () => {
    expect(lessonA203.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA203.listening.items.map((item) => item.lines.length)).toEqual([7, 5]);
    expect(
      lessonA203.listening.items.every((item) =>
        item.lines.every((line) => line.de.trim() && line.ar.trim() && line.speaker.trim()),
      ),
    ).toBe(true);
    const firstDialogue = lessonA203.listening.items[0].lines;
    expect(firstDialogue.find((line) => line.de === "Wie hat es Ihnen geschmeckt?")?.speaker).toContain(
      "nach dem Essen",
    );
    expect(firstDialogue.find((line) => line.de === "Wie hat es Ihnen geschmeckt?")?.de).toContain(
      "Ihnen",
    );
    expect(lessonA203.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"],
      ["q2", "l1"],
      ["q3", "l2"],
    ]);
    expect(
      lessonA203.listening.questions.every((question) =>
        question.instructionAr.includes("قبل فتح التفريغ"),
      ),
    ).toBe(true);
    expect(lessonA203.listening.items[0].lines.map((line) => line.de).join(" ")).toContain(
      "Ein Wasser, bitte.",
    );
    expect(lessonA203.listening.questions.find((question) => question.id === "q1")?.options[0]).toContain(
      "ein Wasser",
    );
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", true)).toBe(
      "listening-transcript:a2-03:l1:q1",
    );
  });

  it("keeps pronunciation notes accurate and writing, mediation, interaction, and cards scoped", () => {
    expect(lessonA203.pronunciation.items).toHaveLength(6);
    expect(lessonA203.pronunciation.items.every((item) => item.de && item.ar && item.note)).toBe(true);
    expect(lessonA203.pronunciation.items.find((item) => item.de === "die Rechnung")?.note).toContain(
      "[ç]",
    );
    expect(lessonA203.pronunciation.items.find((item) => item.de === "die Küche")?.note).toContain(
      "[ʏ]",
    );
    expect(lessonA203.pronunciation.tip).toContain("[x]");
    expect(lessonA203.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA203.pronunciation.shadowing?.every((item) => item.de && item.ar && item.tip)).toBe(true);
    expect(
      lessonA203.pronunciation.shadowing?.some((item) =>
        /مُوخشـتِه|ريش-نونغ|خ حلقية/.test(item.tip ?? ""),
      ),
    ).toBe(false);

    expect(lessonA203.writing).toHaveLength(3);
    const writingRequest = lessonA203.writing.find((exercise) => exercise.id === "w1");
    if (writingRequest?.type !== "transformation") throw new Error("w1 must remain transformation");
    expect(writingRequest.acceptedAnswers).toContain(writingRequest.sampleAnswer);
    expect(evaluateExercise(writingRequest, writingRequest.sampleAnswer).isCorrect).toBe(true);
    expect(lessonA203.writing.find((exercise) => exercise.id === "w2")?.type).toBe("fill-blank");
    expect(lessonA203.writing.find((exercise) => exercise.id === "w3")?.type).toBe("dictation");

    const mediation = lessonA203.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe).toContain("Vorspeise");
    expect(mediation[0].sourceDe).toContain("Hauptgericht");
    expect(mediation[0].sourceDe).toContain("Dessert");
    expect(mediation[0].modelAnswerAr?.trim()).toBeTruthy();

    const interactions = lessonA203.interaction ?? [];
    expect(interactions).toHaveLength(1);
    expect(interactions[0].rounds).toHaveLength(2);
    for (const round of interactions[0].rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options).toHaveLength(2);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(
        true,
      );
    }
    expect(interactions[0].rounds[0].options.find((option) => !option.best)?.de).toContain(
      "die Rechnung",
    );
    expect(interactions[0].rounds[1].options.find((option) => !option.best)?.de).toContain(
      "Sie sind schrecklich",
    );
    expect(interactions[0].strategyAr).toContain("اربط الردّ بالسؤال");

    expect(ids(lessonA203.flashcards)).toEqual(
      Array.from({length: 26}, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(lessonA203.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(
      true,
    );
    expect(lessonA203.flashcards.find((card) => card.id === "fc11")?.ar).not.toContain("أرقى");
    expect(lessonA203.flashcards.find((card) => card.id === "fc26")?.ar).toContain("بحسب الموقف");
  });

  it("keeps the theory tables and classified corrections complete without overclaiming", () => {
    expect(ids(lessonA203.theory)).toEqual(["t1", "t2", "t3", "t4"]);
    expect(lessonA203.theory.map((theory) => theory.examples.length)).toEqual([8, 8, 8, 8]);
    expect(lessonA203.theory.map((theory) => theory.commonMistakes.length)).toEqual([5, 5, 5, 5]);
    for (const theory of lessonA203.theory) {
      expect(theory.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(
        theory.commonMistakes.every(
          (mistake) => mistake.wrong && mistake.right && mistake.whyAr && mistake.classification,
        ),
      ).toBe(true);
      if (theory.table) {
        expect(theory.table.rows.length).toBeGreaterThan(0);
        for (const row of theory.table.rows) {
          expect(row.cells).toHaveLength(theory.table.columns.length - 1);
        }
      }
    }

    expect(lessonA203.theory.find((theory) => theory.id === "t1")?.explanationAr).toContain(
      "لا على ترتيبها من الأكثر إلى الأقل",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.explanationAr).toContain(
      "Ich schmecke die Suppe",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison?.content).toContain(
      "A1-04",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison?.content).toContain(
      "A1-08",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison?.content).toContain(
      "A2-09",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t3")?.commonMistakes.every((mistake) =>
      mistake.classification === "unverified-claim",
    )).toBe(true);
    expect(lessonA203.theory.find((theory) => theory.id === "t4")?.explanationAr).toContain(
      "لا شرح كامل لتصريف الصفات",
    );
    expect(lessonA203.fehlerUndTipps?.culturalNote?.content).toContain("اختيارية");
    expect(lessonA203.fehlerUndTipps?.culturalNote?.content).toContain("برلين");
  });

  it("counts only correct exercise-result events in the mapped task context as objective evidence", () => {
    for (const goal of lessonA203.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA203.id, [])).toBe("pending");
      const openingEvent: AnalyticsEvent = {
        type: "lesson-view",
        ts: 1,
        lessonId: lessonA203.id,
      };
      expect(getGoalEvidenceStatus(goal, lessonA203.id, [openingEvent])).toBe("pending");

      const correctEvents = goal.evidence?.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      expect(getGoalEvidenceStatus(goal, lessonA203.id, correctEvents ?? [])).toBe("evidenced");
      const incorrectEvents = goal.evidence?.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, false),
      );
      expect(getGoalEvidenceStatus(goal, lessonA203.id, incorrectEvents ?? [])).toBe("pending");

      const oneWrong = (correctEvents ?? []).map((event, index) =>
        index === 0 && event.type === "exercise-result" ? {...event, correct: false} : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA203.id, oneWrong)).toBe("pending");
    }

    const requestGoal = lessonA203.lernziele.find((goal) => goal.id === "z1");
    if (!requestGoal?.evidence) throw new Error("z1 must keep its evidence mapping");
    const wrongContextEvents = requestGoal.evidence.exerciseIds.map((exerciseId) =>
      goalEvent(
        requestGoal.id,
        exerciseId,
        true,
        exerciseId === "e16" ? "writing:a2-03:e16" : undefined,
      ),
    );
    expect(getGoalEvidenceStatus(requestGoal, lessonA203.id, wrongContextEvents)).toBe("pending");

    const mismatchedExerciseEvent = goalEvent("z1", "e16", true);
    if (mismatchedExerciseEvent.type !== "exercise-result") throw new Error("expected exercise result");
    const mismatchedEvent: AnalyticsEvent = {...mismatchedExerciseEvent, exerciseId: "e26"};
    expect(getGoalEvidenceStatus(requestGoal, lessonA203.id, [mismatchedEvent])).toBe("pending");

    const listeningGoal = lessonA203.lernziele.find((goal) => goal.id === "z3");
    if (!listeningGoal?.evidence) throw new Error("z3 must keep its evidence mapping");
    const revealedTranscriptEvents = listeningGoal.evidence.exerciseIds.map((exerciseId) =>
      goalEvent(
        listeningGoal.id,
        exerciseId,
        true,
        exerciseId === "q1"
          ? getListeningQuestionTaskId(lessonA203.id, "l1", "q1", true)
          : undefined,
      ),
    );
    expect(getGoalEvidenceStatus(listeningGoal, lessonA203.id, revealedTranscriptEvents)).toBe(
      "pending",
    );

    const speakingGoal = lessonA203.lernziele.find((goal) => goal.id === "z2");
    const pronunciationOnly: AnalyticsEvent = {
      type: "pronunciation-score",
      ts: 1,
      target: "Ich möchte bitte einen Tee.",
      score: 100,
      lessonId: lessonA203.id,
      taskId: "pronunciation:a2-03:p1",
    };
    expect(getGoalEvidenceStatus(speakingGoal!, lessonA203.id, [pronunciationOnly])).toBe("pending");
  });
});
