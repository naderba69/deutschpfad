import {describe, expect, it} from "vitest";

import {lessonA202} from "@/data/lessons/a2/a2-02";
import {evaluateExercise, normalizeText} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {getListeningQuestionTaskId} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "Hunger",
  r2: "Ärztin",
  e1: "Kopfschmerzen",
  e2: "sollst",
  e8: "ما شكواك؟",
  e11: "Mir ist schlecht.",
  e13: "Sie dürfen nicht rauchen.",
  e14: "ليس ضرورياً أن تعود (لكن يجوز)",
  e17: "Du solltest mal zum Arzt gehen.",
  e24: "Gute Besserung!",
  m1: "Husten",
  m2: "soll",
  rq1: "Die Person hatte Halsschmerzen und Fieber, ihr war heiß und kalt, und sie fühlte sich sehr schwach.",
  rq2: "Zum Arzt gehen; bei Bedarf nach einer Krankschreibung fragen und den Chef informieren",
  rq3: "Es ist nicht nötig, zurückzukommen",
  rq4: "Sport machen, solange die Person Fieber hat",
  rq5: "In die Apotheke",
  rq6: "Am Freitag",
  q1: "Kopfschmerzen und Fieber",
  q2: "sich ausruhen und zu Hause bleiben",
  q3: "Er hat zu viel gearbeitet.",
};

const expectedFillBlankKeys: Record<string, string[]> = {
  e6: ["Auge", "Ohr", "Hand"],
  e12: ["tut", "tun"],
  e15: ["mich", "sich", "uns"],
  e21: ["soll", "sollten", "dürfen"],
  m5: ["soll", "sollen", "sollt"],
  w2: ["soll", "sollst", "soll", "sollen"],
};

const expectedOrderingKeys: Record<string, string> = {
  r3: "Der Termin ist am Montag.",
  e4: "Du sollst dich ausruhen.",
  e18: "Ich habe seit drei Tagen starke Halsschmerzen.",
  m3: "Er soll sich ausruhen.",
};

const expectedErrorCorrections: Record<string, {wrong: string; correct: string}> = {
  e5: {wrong: "Ich bin Kopfschmerzen.", correct: "habe"},
  e9: {wrong: "Ich sollst im Bett bleiben.", correct: "soll"},
  e16: {wrong: "Ich wasche mich die Hände.", correct: "mir"},
  e20: {wrong: "Was fehlt Sie denn?", correct: "Ihnen"},
  m4: {wrong: "Mein Kopf tut weht.", correct: "weh"},
};

const expectedTransformations: Record<string, string[]> = {
  e7: ["Er soll sich ausruhen", "Er soll sich ausruhen."],
  e22: ["Sie sollten mehr schlafen.", "Sie sollten mehr schlafen"],
  w1: ["Ich habe seit gestern Kopfschmerzen."],
};

const expectedDictations: Record<string, string> = {
  e10: "Du sollst nicht so viel arbeiten.",
  w3: "Sie sollen sich ausruhen und zu Hause bleiben.",
};

function reading() {
  const value = lessonA202.reading;
  if (!value) throw new Error("A2-02 must keep its reviewed reading text");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA202.review ?? []),
    ...lessonA202.practiceBank,
    ...lessonA202.miniTest,
    ...lessonA202.writing,
    ...reading().questions,
    ...lessonA202.listening.questions,
  ];
}

function tasksById(): Map<string, Exercise> {
  return new Map(allTasks().map((item) => [item.id, item]));
}

function task(id: string): Exercise {
  const value = tasksById().get(id);
  if (!value) throw new Error(`A2-02 task ${id} is missing`);
  return value;
}

function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

function orderedTokens(sentence: string): string[] {
  return sentence.replace(/([.,!?;:])/g, " $1").trim().split(/\s+/);
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
  taskIdOverride?: string,
): AnalyticsEvent {
  const goal = lessonA202.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A2-02 ${goalId} has no evidence mapping`);
  const acceptedTaskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!acceptedTaskId) throw new Error(`A2-02 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA202.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-02 audited lesson", () => {
  it("keeps the lesson inventory and every objective points to an assessable task", () => {
    expect(lessonA202.lernziele.map((goal) => goal.id)).toEqual([
      "z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8",
    ]);
    expect(ids(lessonA202.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA202.practiceBank)).toEqual(
      Array.from({length: 24}, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA202.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA202.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5", "rq6"]);
    expect(ids(lessonA202.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect("duration" in lessonA202).toBe(false);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA202.practiceBank) {
      validTaskIds.add(`practice:${lessonA202.id}:${exercise.id}`);
    }
    for (const exercise of lessonA202.practiceBank.slice(0, Math.min(4, lessonA202.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA202.id}:${exercise.id}`);
    }
    for (const exercise of lessonA202.writing) {
      validTaskIds.add(`writing:${lessonA202.id}:${exercise.id}`);
    }
    for (const question of reading().questions) {
      validTaskIds.add(`reading:${reading().id}:${question.id}`);
    }
    for (const question of lessonA202.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA202.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA202.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have evidence`).toBeDefined();
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    const documentGoal = lessonA202.lernziele.find((goal) => goal.id === "z6");
    expect(documentGoal?.ar).toContain("بطاقة التأمين");
    const documentMatch = task("e19");
    if (documentMatch.type !== "matching") throw new Error("e19 must remain a matching task");
    expect(documentMatch.pairs).toHaveLength(4);
  });

  it("checks every multiple-choice answer key and every distractor individually", () => {
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

    const adviceQuestion = task("e17");
    if (adviceQuestion.type !== "multiple-choice") throw new Error("e17 must remain multiple choice");
    expect(adviceQuestion.questionDe).toContain("weniger direkten Rat");

    const headacheQuestion = task("e1");
    expect(headacheQuestion.type).toBe("multiple-choice");
    if (headacheQuestion.type === "multiple-choice") {
      expect(headacheQuestion.options).not.toContain("Kopfschmerz");
      expect(headacheQuestion.explanation).toContain("المفرد Kopfschmerz موجود أيضاً");
    }
    expect(reading().questions.find((question) => question.id === "rq5")?.paragraph).toBe(5);
  });

  it("protects every fill-blank key and rejects each offered alternative in its target blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedFillBlankKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      const answers = exercise.blanks.map((blank) => blank.correct);
      expect(evaluateExercise(exercise, answers).isCorrect, id).toBe(true);

      exercise.blanks.forEach((blank, blankIndex) => {
        expect(blank.options).toBeDefined();
        const options = blank.options ?? [];
        expect(options).toContain(blank.correct);
        expect(new Set(options).size).toBe(options.length);
        for (const distractor of options.filter((option) => option !== blank.correct)) {
          const attempt = [...answers];
          attempt[blankIndex] = distractor;
          expect(
            evaluateExercise(exercise, attempt).isCorrect,
            `${id} blank ${blankIndex + 1}: ${distractor}`,
          ).toBe(false);
        }
      });
    }

    const modalExercise = task("e21");
    if (modalExercise.type !== "fill-blank") throw new Error("e21 must remain fill-blank");
    expect(modalExercise.explanation).toContain("keinen Sport");
  });

  it("protects ordering, alternative word order, correction, transformation, and dictation keys", () => {
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedOrderingKeys).sort(),
    );
    for (const [id, expected] of Object.entries(expectedOrderingKeys)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      const answer = orderedTokens(exercise.correctSentence);
      expect([...answer].sort()).toEqual([...exercise.tokens].sort());
      expect(evaluateExercise(exercise, answer).isCorrect, id).toBe(true);
      for (const accepted of exercise.acceptedSentences ?? []) {
        expect(evaluateExercise(exercise, orderedTokens(accepted)).isCorrect, `${id} alternative`).toBe(
          true,
        );
      }
      const wrongOrder = orderedTokens(exercise.correctSentence);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} wrong order`).toBe(false);
    }

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
      for (const answer of answers) expect(evaluateExercise(exercise, answer).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, "Das ist eine falsche Antwort.").isCorrect, id).toBe(false);
    }

    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, "Das ist eine falsche Antwort.").isCorrect, id).toBe(false);
    }
  });

  it("protects matching pairs and all four true/false statements", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id).sort()).toEqual(["e19", "e3"]);
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

    const trueFalse = task("e23");
    if (trueFalse.type !== "true-false") throw new Error("e23 must remain a true/false task");
    expect(trueFalse.statements.map((statement) => [statement.id, statement.isTrue])).toEqual([
      ["s1", true],
      ["s2", false],
      ["s3", true],
      ["s4", false],
    ]);
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

  it("keeps the reading questions grounded in their paragraphs and Arabic translations aligned", () => {
    const text = reading();
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphs[0]).toContain("ich hatte Fieber");
    expect(text.paragraphs[1]).toContain("Wenn du nicht arbeiten kannst");
    expect(text.paragraphs[2]).toContain("Sie haben eine Erkältung");
    expect(text.paragraphs[3]).toContain("Solange Sie Fieber haben");
    expect(text.paragraphs[4]).toContain("in die Apotheke gegangen");
    expect(text.paragraphs[5]).toContain("am Freitag wieder zur Arbeit gegangen");
    expect(text.glossary.map((entry) => entry.de)).toEqual([
      "aufgewacht (aufwachen)",
      "hinlegen (sich hinlegen)",
      "krankschreiben lassen",
      "das Wartezimmer",
      "dran sein",
      "untersuchen",
      "die Erkältung",
      "stark",
      "die Ruhe",
      "das Rezept",
      "die Krankschreibung",
      "der Apotheker",
      "erholt (sich erholen)",
      "auf den Körper hören",
    ]);
    expect(text.glossary.every((entry) => entry.de.trim() && entry.ar.trim())).toBe(true);
    expect(text.glossary.find((entry) => entry.de === "die Erkältung")?.ar).toContain("ليست مرادفاً للإنفلونزا");

    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(text.paragraphs.length);
      expect(question.instructionAr.trim().length).toBeGreaterThan(0);
    }
    expect(text.questions.find((question) => question.id === "rq3")?.paragraph).toBe(4);
    expect(text.questions.find((question) => question.id === "rq4")?.explanation).toContain("شرط الحمى");
    expect(text.questions.find((question) => question.id === "rq5")?.paragraph).toBe(5);
    expect(text.questions.find((question) => question.id === "rq6")?.paragraph).toBe(6);
    expect(text.questions.find((question) => question.id === "rq6")?.explanation).toContain(
      "zur Arbeit gegangen",
    );
    const redemittel = text.redemittel ?? [];
    expect(redemittel.map((item) => item.de)).toEqual([
      "Heute stimmt etwas nicht.",
      "Du solltest zum Arzt gehen.",
      "Was fehlt Ihnen denn?",
      "Das ist nicht schlimm, aber Sie brauchen Ruhe.",
      "Nach drei Tagen zu Hause ging es mir viel besser.",
      "Ich habe mich gut erholt.",
    ]);
    expect(redemittel.find((item) => item.de.startsWith("Das ist nicht schlimm"))?.ar).toContain(
      "ليس شديداً",
    );
  });

  it("keeps the two listening dialogs distinct and asks for answers before transcript reveal", () => {
    expect(lessonA202.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA202.listening.items.map((item) => item.lines.length)).toEqual([7, 4]);
    expect(lessonA202.listening.items[0].lines[0].ar).toBe("نهارك سعيد! ما شكواك؟");
    expect(
      lessonA202.listening.items.every((item) =>
        item.lines.every((line) => line.de.trim() && line.ar.trim() && line.speaker.trim()),
      ),
    ).toBe(true);
    expect(lessonA202.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"],
      ["q2", "l1"],
      ["q3", "l2"],
    ]);
    expect(
      lessonA202.listening.questions.every(
        (question) => question.instructionAr.includes("قبل فتح التفريغ"),
      ),
    ).toBe(true);
    expect(lessonA202.listening.items.flatMap((item) => item.lines).join(" ")).not.toMatch(
      /dreimal täglich|viel trinken|viel Wasser/i,
    );
    expect(getListeningQuestionTaskId(lessonA202.id, "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA202.id, "l1", "q1", true)).toBe(
      "listening-transcript:a2-02:l1:q1",
    );
  });

  it("keeps pronunciation, writing, mediation, interaction, and flashcards within their demonstrated scope", () => {
    expect(lessonA202.pronunciation.items).toHaveLength(6);
    expect(lessonA202.pronunciation.items.every((item) => item.de && item.ar && item.note)).toBe(true);
    expect(lessonA202.pronunciation.items.find((item) => item.de === "der Husten")?.note).toContain(
      "u طويلة /uː/",
    );
    expect(lessonA202.pronunciation.items.find((item) => item.de === "das Auge")?.note).toContain(
      "لا /ɣ/ العربية",
    );
    const shadowing = lessonA202.pronunciation.shadowing ?? [];
    expect(shadowing).toHaveLength(4);
    expect(shadowing.every((item) => item.de && item.ar && item.tip)).toBe(true);
    expect(lessonA202.pronunciation.tip).toContain("لا يقيسان وحدهما مخارج الأصوات والنبر");

    expect(lessonA202.writing).toHaveLength(3);
    expect(lessonA202.writing.find((exercise) => exercise.id === "w1")?.type).toBe("transformation");
    expect(lessonA202.writing.find((exercise) => exercise.id === "w2")?.type).toBe("fill-blank");
    expect(lessonA202.writing.find((exercise) => exercise.id === "w3")?.type).toBe("dictation");
    const mediation = lessonA202.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe).not.toMatch(/zweimal|dreimal|täglich|morgens|abends/i);
    expect(mediation[0].taskAr).toContain("لا تضف جرعة أو توقيتاً");
    const interactions = lessonA202.interaction ?? [];
    expect(interactions).toHaveLength(1);
    expect(
      interactions[0].rounds.map((round) =>
        round.options.filter((option) => option.best).map((option) => option.de),
      ),
    ).toEqual([
      ["Ich habe seit zwei Tagen Kopfschmerzen und Fieber."],
      ["Ja, ein bisschen. Besonders nachts."],
    ]);
    expect(
      interactions[0].rounds.map((round) =>
        round.options.filter((option) => !option.best).map((option) => option.de),
      ),
    ).toEqual([
      ["Ich habe morgen einen Termin."],
      ["Ich habe seit gestern Fieber."],
    ]);
    for (const round of interactions[0].rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options).toHaveLength(2);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(interactions[0].strategyAr).toContain("لا يسجل إنتاجاً شفهياً أو نطقاً");

    expect(ids(lessonA202.flashcards)).toEqual(
      Array.from({length: 24}, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(
      lessonA202.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr),
    ).toBe(true);
    expect(lessonA202.flashcards.find((card) => card.id === "fc20")?.de).toBe("die Erkältung");
    expect(lessonA202.flashcards.find((card) => card.id === "fc20")?.ar).toContain("ليست مرادفاً للإنفلونزا");
  });

  it("keeps theory tables and classified mistakes structurally complete without overclaiming", () => {
    expect(ids(lessonA202.theory)).toEqual(["t1", "t2", "t3", "t4"]);
    expect(lessonA202.theory.map((theory) => theory.examples.length)).toEqual([8, 8, 8, 8]);
    expect(lessonA202.theory.map((theory) => theory.table?.rows.length)).toEqual([7, 7, 8, 7]);
    for (const theory of lessonA202.theory) {
      expect(theory.examples).toHaveLength(8);
      expect(theory.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(theory.commonMistakes).toHaveLength(5);
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

    const handwashingPerfect = lessonA202.theory
      .find((theory) => theory.id === "t4")
      ?.table?.rows.find((row) => row.label === "sich … waschen")?.cells[2];
    expect(handwashingPerfect).toContain("hat sich die Hände gewaschen");
    expect(
      lessonA202.theory.find((theory) => theory.id === "t4")?.examples.find((example) =>
        example.de.startsWith("Waschen Sie sich"),
      )?.ar,
    ).toContain("sich هنا في Dativ");
    expect(
      lessonA202.theory.find((theory) => theory.id === "t3")?.commonMistakes.at(-1)?.classification,
    ).toBe("contextual-alternative");

    const modalComparison = lessonA202.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison;
    expect(modalComparison?.content).toContain("A1-04");
    expect(modalComparison?.content).toContain("A1-06");
    expect(modalComparison?.content).toContain("A1-14 وحده");
    expect(modalComparison?.content).not.toContain("أتممتَ الستّة");
    expect(lessonA202.summary).not.toMatch(/اعتماد Goethe|اكتمال المنهج|جاهزية/);
    expect(lessonA202.fehlerUndTipps).toBeDefined();
  });

  it("does not count opening an activity or revealing a listening transcript as objective evidence", () => {
    for (const goal of lessonA202.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA202.id, [])).toBe("pending");
      const correctEvents = goal.evidence?.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      expect(getGoalEvidenceStatus(goal, lessonA202.id, correctEvents ?? [])).toBe("evidenced");
      const incorrectEvents = goal.evidence?.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, false),
      );
      expect(getGoalEvidenceStatus(goal, lessonA202.id, incorrectEvents ?? [])).toBe("pending");
    }

    const firstGoal = lessonA202.lernziele.find((goal) => goal.id === "z1");
    if (!firstGoal?.evidence) throw new Error("z1 must keep its evidence mapping");
    const flowEvents = firstGoal.evidence.exerciseIds.map((exerciseId) =>
      goalEvent(
        firstGoal.id,
        exerciseId,
        true,
        exerciseId === "e1" ? "flow-practice:a2-02:e1" : undefined,
      ),
    );
    expect(getGoalEvidenceStatus(firstGoal, lessonA202.id, flowEvents)).toBe("evidenced");

    const wrongContextEvents = firstGoal.evidence.exerciseIds.map((exerciseId) =>
      goalEvent(
        firstGoal.id,
        exerciseId,
        true,
        exerciseId === "e1" ? "writing:a2-02:e1" : undefined,
      ),
    );
    expect(getGoalEvidenceStatus(firstGoal, lessonA202.id, wrongContextEvents)).toBe("pending");

    const listeningGoal = lessonA202.lernziele.find((goal) => goal.id === "z5");
    const firstTask = task("q1");
    const revealedTranscriptEvent: AnalyticsEvent = {
      type: "exercise-result",
      ts: 1,
      exerciseId: "q1",
      exerciseType: firstTask.type,
      correct: true,
      points: 10,
      lessonId: lessonA202.id,
      taskId: getListeningQuestionTaskId(lessonA202.id, "l1", "q1", true),
    };
    expect(getGoalEvidenceStatus(listeningGoal!, lessonA202.id, [revealedTranscriptEvent])).toBe(
      "pending",
    );
  });
});
