import {describe, expect, it} from "vitest";

import {lessonA107} from "@/data/lessons/a1/a1-07";
import {evaluateExercise} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const practiceAnswers: Record<string, unknown> = {
  e1: "einundzwanzig",
  e2: "Bananen",
  e3: [
    {left: "zwei Äpfel", right: "تفاحتان"},
    {left: "zwei Bananen", right: "موزتان"},
    {left: "zwei Brötchen", right: "لفافتان صغيرتان من الخبز"},
    {left: "zwei Flaschen Wasser", right: "قارورتان من الماء"},
  ],
  e4: ["Was", "kostet", "ein", "Kilo", "Äpfel", "?"],
  e5: "kostet",
  e6: ["kosten"],
  e7: ["Wie", "viel", "kostet", "das", "Brot", "?"],
  e8: "العرض سعره مناسب أو منخفض",
  e9: "kosten",
  e10: "Ich nehme ein Kilo Tomaten und eine Flasche Wasser.",
  e11: "kosten",
  e12: "drei Euro fünfzig",
  e13: "zwei Kilo",
  e14: "Flaschen",
  e15: ["den", "eine"],
  e16: ["Ich", "hätte", "gern", "zweihundert", "Gramm", "Käse", "."],
  e17: [
    {left: "ein Kilo", right: "كيلوغرام واحد"},
    {left: "eine Flasche", right: "قارورة واحدة"},
    {left: "zweihundert Gramm", right: "مئتا غرام"},
    {left: "ein Stück", right: "قطعة واحدة"},
  ],
  e18: "Ich hätte gerne zwei Äpfel.",
  e19: "dreihundertfünfundsechzig",
  e20: {s1: true, s2: false, s3: true, s4: true},
  e21: "Musterstraße 12, 12345 Musterstadt",
  e22: "eintausend",
  e23: "der",
  e24: "Können Sie den Namen bitte buchstabieren?",
  e25: ["Wie", "ist", "Ihre", "Telefonnummer", "?"],
  e26: "dreiundzwanzig Euro",
  e27: "acht null drei drei eins",
  e28: ["null"],
  e29: "Ich hätte gern zwei Äpfel, bitte.",
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "achtundvierzig",
  m2: "Flaschen",
  m3: ["zwei"],
  m4: "kosten",
  m5: "drei Euro fünfzig",
};

const readingAnswers: Record<string, string> = {
  rd1: "Äpfel, Tomaten und Wasser",
  rd2: "2,40 Euro",
  rd3: "6,40 Euro",
  rd4: "Tomaten",
};

const listeningAnswers: Record<string, string> = {
  q1: "2,40 Euro",
  q2: "zwei",
  q3: "0176 24 83 591",
  q4: "Die Nummer zu wiederholen",
};

function allTasks() {
  return [
    ...(lessonA107.review ?? []),
    ...lessonA107.practiceBank,
    ...lessonA107.miniTest,
    ...lessonA107.writing,
    ...(lessonA107.reading?.questions ?? []),
    ...lessonA107.listening.questions,
  ];
}

function findTask(id: string) {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-07 task ${id} is missing`);
  return task;
}

function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${index}`).toBe(false);
      }
    });
  } else if (task.type === "error-correction") {
    for (const option of task.options) {
      if (option !== task.correctWord) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${option}`).toBe(false);
      }
    }
  } else if (task.type === "fill-blank") {
    const answers = task.blanks.map((blank) => blank.correct);
    task.blanks.forEach((blank, index) => {
      for (const option of blank.options ?? []) {
        if (option !== blank.correct) {
          const nearMiss = [...answers];
          nearMiss[index] = option;
          expect(evaluateExercise(task, nearMiss).isCorrect, `${task.id} blank ${index} option ${option}`).toBe(false);
        }
      }
    });
  } else if (task.type === "word-ordering") {
    expect(evaluateExercise(task, [...task.tokens].reverse()).isCorrect, `${task.id} reversed order`).toBe(false);
  } else if (task.type === "matching" && task.pairs.length > 1) {
    const wrongPairs = task.pairs.map((pair, index) => ({
      left: pair.left,
      right: task.pairs[(index + 1) % task.pairs.length].right,
    }));
    expect(evaluateExercise(task, wrongPairs).isCorrect, `${task.id} mismatched pairs`).toBe(false);
  } else if (task.type === "dictation") {
    expect(evaluateExercise(task, "__not_the_audio_text__").isCorrect, `${task.id} wrong dictation`).toBe(false);
  } else if (task.type === "true-false") {
    const correctAnswers = Object.fromEntries(task.statements.map((statement) => [statement.id, statement.isTrue]));
    for (const statement of task.statements) {
      expect(
        evaluateExercise(task, {...correctAnswers, [statement.id]: !statement.isTrue}).isCorrect,
        `${task.id} flipped ${statement.id}`,
      ).toBe(false);
    }
  } else if (task.type === "transformation") {
    expect(evaluateExercise(task, "__not_an_accepted_answer__").isCorrect, `${task.id} rejected answer`).toBe(false);
  }
}

function evidenceEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const goal = lessonA107.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-07 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-07 ${goalId} has no taskId for ${exerciseId}`);
  const task = findTask(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA107.id,
    taskId,
  };
}

describe("A1-07 reviewed lesson content", () => {
  it("checks each cumulative-review prompt and answer key", () => {
    const review = lessonA107.review ?? [];
    expect(review.map((task) => task.id).sort()).toEqual(["r1", "r2", "r3"]);
    expect(evaluateExercise(findTask("r1"), "höre").isCorrect).toBe(true);
    expect(evaluateExercise(findTask("r1"), "sehe").isCorrect).toBe(false);
    expect(evaluateExercise(findTask("r2"), ["Ich", "kann", "gut", "schwimmen", "."]).isCorrect).toBe(true);
    expect(evaluateExercise(findTask("r2"), ["Ich", "gut", "kann", "schwimmen", "."]).isCorrect).toBe(false);
    expect(evaluateExercise(findTask("r3"), "spiele").isCorrect).toBe(true);
    expect(evaluateExercise(findTask("r3"), "spielen").isCorrect).toBe(false);
    for (const task of review) expectListedAlternativesRejected(task);
  });

  it("has a unique, explicit answer key for every practice-bank task", () => {
    const actualIds = lessonA107.practiceBank.map((task) => task.id).sort();
    const keyedIds = Object.keys(practiceAnswers).sort();
    expect(actualIds).toEqual(keyedIds);
    expect(new Set(actualIds).size).toBe(actualIds.length);

    for (const [id, answer] of Object.entries(practiceAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts every published answer variant and preserves context-dependent alternatives", () => {
    for (const id of ["e18", "w1", "w4"]) {
      const task = findTask(id);
      if (task.type !== "transformation") throw new Error(`${id} must be a transformation task`);
      expect(task.acceptedAnswers.length, `${id} accepted variants`).toBeGreaterThan(0);
      for (const answer of task.acceptedAnswers) {
        expect(evaluateExercise(task, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
    }

    const mistakes = lessonA107.theory.flatMap((section) => section.commonMistakes ?? []);
    for (const phrase of [
      "zwei Kilos Tomaten",
      "drei Euros (in jeder Preisangabe)",
      "Ich hätte gerne zwei Äpfel.",
      "Ich will ein Kilo Trauben. (immer unhöflich)",
    ]) {
      expect(mistakes.find((mistake) => mistake.wrong === phrase)?.classification, phrase).toBe("contextual-alternative");
    }
  });

  it("verifies each reading and listening option key against its text or transcript", () => {
    const reading = lessonA107.reading;
    if (!reading) throw new Error("A1-07 reading passage is required");
    expect(reading.questions.map((question) => question.id).sort()).toEqual(Object.keys(readingAnswers).sort());
    for (const [id, answer] of Object.entries(readingAnswers)) {
      const question = reading.questions.find((candidate) => candidate.id === id);
      if (!question) throw new Error(`A1-07 reading ${id} is missing`);
      expect(question.options[question.correctIndex], `${id} key`).toBe(answer);
      expect(evaluateExercise(question, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(question);
    }

    expect(lessonA107.listening.questions.map((question) => question.id).sort()).toEqual(Object.keys(listeningAnswers).sort());
    for (const [id, answer] of Object.entries(listeningAnswers)) {
      const question = lessonA107.listening.questions.find((candidate) => candidate.id === id);
      if (!question) throw new Error(`A1-07 listening ${id} is missing`);
      expect(question.options[question.correctIndex], `${id} key`).toBe(answer);
      expect(evaluateExercise(question, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(question);
    }
  });

  it("checks every writing task against an accepted answer and a rejected near miss", () => {
    const writingAnswers: Record<string, unknown> = {
      w1: "fünfzehn Euro",
      w2: ["zwei", "eine"],
      w3: "Ich nehme ein Kilo Tomaten und zwei Flaschen Wasser.",
      w4: "Ich hätte gern zweihundert Gramm Käse und eine Flasche Wasser.",
    };
    expect(lessonA107.writing.map((task) => task.id).sort()).toEqual(Object.keys(writingAnswers).sort());
    for (const [id, answer] of Object.entries(writingAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
    expect(evaluateExercise(findTask("w1"), "fünfzig Euro").isCorrect).toBe(false);
    expect(evaluateExercise(findTask("w2"), ["zwei", "ein"]).isCorrect).toBe(false);
    expect(evaluateExercise(findTask("w3"), "Ich nehme ein Kilo Tomaten und eine Flasche Wasser.").isCorrect).toBe(false);
    expect(evaluateExercise(findTask("w4"), "Ich hätte gern Käse und Wasser.").isCorrect).toBe(false);
  });

  it("checks every mini-test answer key and rejects a neighboring distractor", () => {
    expect(lessonA107.miniTest.map((task) => task.id).sort()).toEqual(Object.keys(miniTestAnswers).sort());
    for (const [id, answer] of Object.entries(miniTestAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("maps every learning goal to existing, exact tasks that record results", () => {
    const reading = lessonA107.reading;
    if (!reading) throw new Error("A1-07 reading passage is required");
    const exerciseIds = new Set(allTasks().map((task) => task.id));
    const taskIds = new Set([
      ...lessonA107.practiceBank.flatMap((task) => [
        `practice:${lessonA107.id}:${task.id}`,
        `flow-practice:${lessonA107.id}:${task.id}`,
      ]),
      ...lessonA107.writing.map((task) => `writing:${lessonA107.id}:${task.id}`),
      ...reading.questions.map((task) => `reading:${reading.id}:${task.id}`),
      ...lessonA107.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
    ]);

    expect(lessonA107.lernziele).toHaveLength(8);
    for (const goal of lessonA107.lernziele) {
      const evidence = goal.evidence;
      expect(evidence?.exerciseIds.length, `${goal.id} exerciseIds`).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length, `${goal.id} taskIds`).toBeGreaterThan(0);
      expect(evidence?.labelAr.trim(), `${goal.id} evidence label`).toBeTruthy();
      expect(evidence?.completion, `${goal.id} completion policy`).toBe("all-correct");
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(exerciseIds.has(exerciseId), `${goal.id} → ${exerciseId}`).toBe(true);
        expect(
          evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`)),
          `${goal.id} → exact task context for ${exerciseId}`,
        ).toBe(true);
      }
      for (const taskId of evidence?.taskIds ?? []) {
        expect(taskIds.has(taskId), `${goal.id} → ${taskId}`).toBe(true);
        expect(
          evidence?.exerciseIds.some((id) => taskId.endsWith(`:${id}`)),
          `${goal.id} → task/exercise agreement for ${taskId}`,
        ).toBe(true);
      }
    }
  });

  it("marks each A1-07 goal only after all listed tasks have correct results in the lesson", () => {
    for (const goal of lessonA107.lernziele) {
      const evidence = goal.evidence;
      if (!evidence) throw new Error(`${goal.id} has no evidence`);
      const correctEvents = evidence.exerciseIds.map((id) => evidenceEvent(goal.id, id, true));
      expect(getGoalEvidenceStatus(goal, lessonA107.id, []), `${goal.id} unopened`).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA107.id, correctEvents.slice(0, -1)),
        `${goal.id} incomplete`,
      ).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA107.id, correctEvents), `${goal.id} complete`).toBe("evidenced");

      const oneIncorrect = [
        ...correctEvents.slice(0, -1),
        evidenceEvent(goal.id, evidence.exerciseIds[evidence.exerciseIds.length - 1], false),
      ];
      expect(getGoalEvidenceStatus(goal, lessonA107.id, oneIncorrect), `${goal.id} incorrect result`).toBe("pending");

      const wrongLesson = correctEvents.map((event) => ({...event, lessonId: "a1-06"}));
      expect(getGoalEvidenceStatus(goal, lessonA107.id, wrongLesson), `${goal.id} other lesson`).toBe("pending");
      const wrongContext = correctEvents.map((event) => ({
        ...event,
        taskId: `unmapped:${lessonA107.id}:${event.type === "exercise-result" ? event.exerciseId : "unknown"}`,
      }));
      expect(getGoalEvidenceStatus(goal, lessonA107.id, wrongContext), `${goal.id} other task`).toBe("pending");
    }
  });

  it("meets the A1-07 depth and reading-content checks directly", () => {
    for (const theory of lessonA107.theory) {
      expect(theory.explanationAr.length, `${theory.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(theory.explanationAr.length, `${theory.id} explanation upper bound`).toBeLessThanOrEqual(2800);
      expect(theory.explanationAr.split("\n").filter((part) => part.trim()).length, `${theory.id} paragraphs`).toBeGreaterThanOrEqual(2);
      expect(theory.whyAr.length, `${theory.id} whyAr`).toBeGreaterThanOrEqual(250);
      expect(theory.comparisonWithArabic.length, `${theory.id} comparison`).toBeGreaterThanOrEqual(250);
      expect(theory.examples.length, `${theory.id} examples`).toBeGreaterThanOrEqual(6);
      expect(theory.commonMistakes.length, `${theory.id} mistakes`).toBeGreaterThanOrEqual(3);
      for (const mistake of theory.commonMistakes) {
        expect(mistake.whyAr.length, `${theory.id} mistake explanation`).toBeGreaterThanOrEqual(60);
      }
    }

    const reading = lessonA107.reading;
    if (!reading) throw new Error("A1-07 reading passage is required");
    expect(reading.paragraphs).toHaveLength(3);
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    expect(reading.paragraphs.join(" ").split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(90);
    expect(reading.glossary.length).toBeGreaterThanOrEqual(8);
    const text = reading.paragraphs.join(" ").toLowerCase();
    for (const item of reading.glossary) {
      const head = item.de.replace(/^(der|die|das)\s+/i, "").split(/[\\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(text, `${item.de} occurs in the text`).toContain(stem);
    }
    expect(reading.questions).toHaveLength(4);
    expect(reading.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading.discussionAr?.length).toBeGreaterThanOrEqual(40);
    expect(new Set(lessonA107.practiceBank.map((task) => task.type)).size).toBeGreaterThanOrEqual(5);
    expect(lessonA107.practiceBank.length).toBeGreaterThanOrEqual(14);
    expect(lessonA107.flashcards.length).toBeGreaterThanOrEqual(12);
    expect("duration" in lessonA107).toBe(false);
  });

  it("checks all branching-dialogue choices and their contextual answer keys", () => {
    const interaction = lessonA107.interaction?.[0];
    if (!interaction) throw new Error("A1-07 interaction task is required");
    expect(interaction.rounds).toHaveLength(2);
    expect(interaction.rounds.map((round) => round.options.map((option) => option.best))).toEqual([
      [true, true, false],
      [true, true, false],
    ]);
    for (const round of interaction.rounds) {
      expect(round.speakerDe.trim()).toBeTruthy();
      expect(round.speakerAr.trim()).toBeTruthy();
      for (const option of round.options) {
        expect(option.de.trim()).toBeTruthy();
        expect(option.ar.trim()).toBeTruthy();
        expect(option.replyDe.trim()).toBeTruthy();
        expect(option.replyAr.trim()).toBeTruthy();
      }
    }
    expect(interaction.strategyAr).toContain("لا يُسجّل دليلاً");

    const mediation = lessonA107.mediation?.[0];
    if (!mediation) throw new Error("A1-07 mediation task is required");
    expect(mediation.keyPointsAr).toEqual([
      "كيلوغرام تفاح: 2,40 يورو",
      "كيلوغرام طماطم: 3,20 يورو",
      "قارورة ماء: 0,80 يورو",
      "المجموع: 6,40 يورو",
    ]);
    expect(mediation.modelAnswerAr).toContain("6,40 يورو");
    expect(2.4 + 3.2 + 0.8).toBeCloseTo(6.4);
  });

  it("does not treat a lesson view or pronunciation transcript score as evidence", () => {
    const goal = lessonA107.lernziele.find((candidate) => candidate.id === "z7");
    if (!goal) throw new Error("A1-07 z7 is required");
    const nonPerformanceEvents: AnalyticsEvent[] = [
      {type: "lesson-view", ts: 1, lessonId: lessonA107.id},
      {type: "pronunciation-score", ts: 2, target: "Ich hätte gern Äpfel.", score: 100, lessonId: lessonA107.id},
    ];
    expect(getGoalEvidenceStatus(goal, lessonA107.id, nonPerformanceEvents)).toBe("pending");
  });
});
