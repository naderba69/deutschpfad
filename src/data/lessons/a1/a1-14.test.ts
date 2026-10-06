import {describe, expect, it} from "vitest";

import {getLessonMeta, LESSON_META} from "@/data/lessons/meta";
import {NO_ERROR_OPTION} from "@/lib/lesson/error-correction-highlight";
import {evaluateExercise, normalizeText} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {getListeningQuestionTaskId} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";
import {lessonA114} from "./a1-14";

function reading() {
  const value = lessonA114.reading;
  if (!value) throw new Error("A1-14 reading passage is required");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA114.review ?? []),
    ...lessonA114.practiceBank,
    ...lessonA114.miniTest,
    ...lessonA114.writing,
    ...reading().questions,
    ...lessonA114.listening.questions,
  ];
}

function taskById(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-14 task ${id} is missing`);
  return task;
}

function canonicalAnswer(task: Exercise): unknown {
  switch (task.type) {
    case "multiple-choice":
      return task.options[task.correctIndex];
    case "fill-blank":
      return task.blanks.map((blank) => blank.correct);
    case "matching":
      return task.pairs.map((pair) => ({...pair}));
    case "word-ordering":
      return task.correctSentence.split(/\s+/);
    case "error-correction":
      return task.isAlreadyCorrect ? NO_ERROR_OPTION : task.correctWord;
    case "transformation":
      return task.sampleAnswer;
    case "true-false":
      return Object.fromEntries(task.statements.map((statement) => [statement.id, statement.isTrue]));
    case "dictation":
      return task.audioText;
    case "sentence-gap":
      return Object.fromEntries(task.gapOrder.map((id, index) => [index, id]));
    case "zuordnung":
      return task.correctMap;
    default: {
      const neverTask: never = task;
      return neverTask;
    }
  }
}

function expectEveryDistractorRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    const normalizedOptions = task.options.map(normalizeText);
    expect(new Set(normalizedOptions).size, `${task.id} duplicate choices`).toBe(task.options.length);
    expect(task.correctIndex).toBeGreaterThanOrEqual(0);
    expect(task.correctIndex).toBeLessThan(task.options.length);
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id}: distractor ${option}`).toBe(false);
      }
    });
  } else if (task.type === "fill-blank") {
    expect((task.template.match(/___/g) ?? []).length, `${task.id} blank count`).toBe(task.blanks.length);
    const allCorrect = task.blanks.map((blank) => blank.correct);
    for (const [index, blank] of task.blanks.entries()) {
      const options = blank.options ?? [];
      expect(options.length, `${task.id} blank ${index} options`).toBeGreaterThan(1);
      expect(options, `${task.id} blank ${index} options`).toContain(blank.correct);
      expect(new Set(options.map(normalizeText)).size, `${task.id} blank ${index} duplicate choices`).toBe(options.length);
      for (const distractor of options.filter((option) => option !== blank.correct)) {
        const oneWrongAnswer = [...allCorrect];
        oneWrongAnswer[index] = distractor;
        expect(evaluateExercise(task, oneWrongAnswer).isCorrect, `${task.id} blank ${index}: ${distractor}`).toBe(false);
      }
    }
    if (task.blanks.length > 1) {
      expect(evaluateExercise(task, allCorrect.slice(0, -1)).isCorrect, `${task.id} incomplete cloze`).toBe(false);
    }
  } else if (task.type === "error-correction") {
    expect(task.wrongSentence).toContain(task.wrongWord);
    if (task.isAlreadyCorrect) {
      expect(task.options).not.toContain(NO_ERROR_OPTION);
      expect(evaluateExercise(task, NO_ERROR_OPTION).isCorrect, `${task.id} no-error key`).toBe(true);
      expect(evaluateExercise(task, task.correctWord).isCorrect, `${task.id} must not key the marked word`).toBe(false);
      for (const option of task.options) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} distractor ${option}`).toBe(false);
      }
    } else {
      expect(task.options.filter((option) => option === task.correctWord)).toHaveLength(1);
      for (const option of task.options) {
        if (option !== task.correctWord) {
          expect(evaluateExercise(task, option).isCorrect, `${task.id} distractor ${option}`).toBe(false);
        }
      }
      expect(evaluateExercise(task, NO_ERROR_OPTION).isCorrect, `${task.id} false no-error`).toBe(false);
    }
  } else if (task.type === "matching") {
    expect(task.pairs.length).toBeGreaterThan(0);
    const leftOptions = task.pairs.map((pair) => pair.left);
    const rightOptions = task.pairs.map((pair) => pair.right);
    expect(new Set(leftOptions).size, `${task.id} duplicate left labels`).toBe(task.pairs.length);
    expect(new Set(rightOptions).size, `${task.id} duplicate right labels`).toBe(task.pairs.length);

    for (const [index, pair] of task.pairs.entries()) {
      for (const distractor of rightOptions.filter((option) => option !== pair.right)) {
        const oneWrongPair = task.pairs.map((candidate) => ({...candidate}));
        oneWrongPair[index] = {left: pair.left, right: distractor};
        expect(evaluateExercise(task, oneWrongPair).isCorrect, `${task.id}: ${pair.left} → ${distractor}`).toBe(false);
      }
    }

    const wrongPairs = task.pairs.map((pair) => ({left: pair.left, right: "__not_the_key__"}));
    expect(evaluateExercise(task, wrongPairs).isCorrect, `${task.id} mismatched pairs`).toBe(false);
  } else if (task.type === "word-ordering") {
    const canonical = task.correctSentence.split(/\s+/);
    expect(evaluateExercise(task, canonical).isCorrect, `${task.id} canonical order`).toBe(true);
    const reversed = [...canonical].reverse();
    expect(evaluateExercise(task, reversed).isCorrect, `${task.id} reversed order`).toBe(false);
    for (const accepted of task.acceptedSentences ?? []) {
      expect(evaluateExercise(task, accepted.split(/\s+/)).isCorrect, `${task.id} accepted order ${accepted}`).toBe(true);
    }
  } else if (task.type === "transformation") {
    const normalizedAccepted = task.acceptedAnswers.map(normalizeText);
    expect(new Set(normalizedAccepted).size, `${task.id} duplicate normalized answer variants`).toBe(normalizedAccepted.length);
    expect(task.acceptedAnswers).toContain(task.sampleAnswer);
    for (const answer of task.acceptedAnswers) {
      expect(evaluateExercise(task, answer).isCorrect, `${task.id} accepted answer ${answer}`).toBe(true);
    }
    expect(evaluateExercise(task, "__not_an_accepted_answer__").isCorrect, `${task.id} invalid answer`).toBe(false);
  } else if (task.type === "true-false") {
    expect(task.statements.length).toBeGreaterThan(0);
    for (const statement of task.statements) expect(statement.whyAr.trim()).toBeTruthy();
    const inverted = Object.fromEntries(task.statements.map((statement) => [statement.id, !statement.isTrue]));
    expect(evaluateExercise(task, inverted).isCorrect, `${task.id} inverted statements`).toBe(false);
  }
}

function recordedTaskIds(): Set<string> {
  return new Set([
    ...lessonA114.practiceBank.flatMap((task, index) => [
      `practice:${lessonA114.id}:${task.id}`,
      ...(index < Math.min(4, lessonA114.practiceBank.length)
        ? [`flow-practice:${lessonA114.id}:${task.id}`]
        : []),
    ]),
    ...lessonA114.miniTest.map((task) => `mini-test:${lessonA114.id}:${task.id}`),
    ...lessonA114.miniTest
      .filter((task) => task.type === "multiple-choice")
      .slice(0, 3)
      .map((task) => `flow-mini-test:${lessonA114.id}:${task.id}`),
    ...lessonA114.writing.map((task) => `writing:${lessonA114.id}:${task.id}`),
    ...reading().questions.map((question) => `reading:${reading().id}:${question.id}`),
    ...lessonA114.listening.questions.map((question) => `listening:${question.itemId}:${question.id}`),
  ]);
}

function eventFor(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA114.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-14 goal ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-14 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: taskById(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA114.id,
    taskId,
  };
}

function hasDurationField(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasDurationField);
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(
    ([key, nested]) =>
      /^(duration|durationMinutes|lessonMinutes|minutes)$/i.test(key) || hasDurationField(nested),
  );
}

describe("A1-14 audited lesson content", () => {
  it("keeps lesson and metadata scope free of A1-completion and exam-frequency claims", () => {
    expect(lessonA114.id).toBe("a1-14");
    expect(lessonA114.summary).toContain("قرينة مفيدة لا اختبار وحيد");
    expect(lessonA114.einfuehrung.motivatingQuestionAr).toContain("من دون افتراض أن هذا السؤال يظهر في كل لقاء أو امتحان");
    expect(lessonA114.einfuehrung.contextAr).toContain("Präteritum أيضاً في الحديث والكتابة");
    expect(lessonA114.einfuehrung.connectionToPreviousAr).toContain("لا تعني إتقان Perfekt");
    expect(lessonA114.lernziele).toHaveLength(7);
    expect(hasDurationField(lessonA114)).toBe(false);

    const meta = getLessonMeta("a1-14");
    expect(meta).toBeDefined();
    expect(meta?.summary).toContain("المفعول المباشر قرينة لا اختبار وحيد");
    expect(hasDurationField(meta)).toBe(false);
    expect(LESSON_META.find((candidate) => candidate.id === "a1-14")).toEqual(meta);
  });

  it("keeps every objective linked only to existing, correctly prefixed performance tasks", () => {
    const allExerciseIds = new Set(allTasks().map((task) => task.id));
    const validTaskIds = recordedTaskIds();

    for (const goal of lessonA114.lernziele) {
      expect(goal.evidence?.completion, `${goal.id} completion`).toBe("all-correct");
      expect(goal.evidence?.exerciseIds.length, `${goal.id} exerciseIds`).toBeGreaterThan(0);
      expect(goal.evidence?.taskIds?.length, `${goal.id} taskIds`).toBeGreaterThan(0);
      expect(new Set(goal.evidence?.exerciseIds).size, `${goal.id} duplicate exerciseIds`).toBe(goal.evidence?.exerciseIds.length);
      expect(new Set(goal.evidence?.taskIds).size, `${goal.id} duplicate taskIds`).toBe(goal.evidence?.taskIds?.length);
      expect(goal.evidence?.labelAr.trim(), `${goal.id} performance description`).toBeTruthy();
      for (const exerciseId of goal.evidence?.exerciseIds ?? []) {
        expect(allExerciseIds.has(exerciseId), `${goal.id} → exercise ${exerciseId}`).toBe(true);
        expect(
          goal.evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`)),
          `${goal.id} → taskId for ${exerciseId}`,
        ).toBe(true);
      }
      for (const taskId of goal.evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id} → recorded task ${taskId}`).toBe(true);
      }
    }

    expect(validTaskIds.has("flow-practice:a1-14:e4")).toBe(true);
    expect(validTaskIds.has("flow-practice:a1-14:e5")).toBe(false);
    expect(validTaskIds.has("practice:a1-14:e26")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a1-14:mt-a1-14-5")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a1-14:mt-a1-14-2")).toBe(false);
    expect(validTaskIds.has("flow-mini-test:a1-14:mt-a1-14-4")).toBe(false);
    expect(validTaskIds.has("interaction-round:a1-14:int-a1-14-1")).toBe(false);
  });

  it("requires correct performance for every task mapped to each all-correct objective", () => {
    for (const goal of lessonA114.lernziele) {
      const evidence = goal.evidence;
      if (!evidence) throw new Error(`${goal.id} evidence is required`);
      const correctEvents = evidence.exerciseIds.map((exerciseId) => eventFor(goal.id, exerciseId, true));

      expect(getGoalEvidenceStatus(goal, lessonA114.id, []), `${goal.id} before answering`).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA114.id, correctEvents.slice(0, -1)),
        `${goal.id} before the final task`,
      ).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA114.id, correctEvents), `${goal.id} completed`).toBe("evidenced");

      const oneIncorrect = [...correctEvents];
      oneIncorrect[0] = eventFor(goal.id, evidence.exerciseIds[0]!, false);
      expect(getGoalEvidenceStatus(goal, lessonA114.id, oneIncorrect), `${goal.id} with an incorrect answer`).toBe("pending");
      expect(getGoalEvidenceStatus(goal, "a1-13", correctEvents), `${goal.id} wrong lesson`).toBe("pending");
      const wrongTaskContext = [...correctEvents];
      const firstEvent = wrongTaskContext[0];
      if (!firstEvent || firstEvent.type !== "exercise-result") {
        throw new Error(`${goal.id} needs at least one recorded exercise result`);
      }
      wrongTaskContext[0] = {
        ...firstEvent,
        taskId: `practice:${lessonA114.id}:not-a-mapped-task`,
      };
      expect(
        getGoalEvidenceStatus(goal, lessonA114.id, wrongTaskContext),
        `${goal.id} wrong task context`,
      ).toBe("pending");
    }
  });

  it("uses transcript-free listening IDs only for the listening objective", () => {
    const goal = lessonA114.lernziele.find((candidate) => candidate.id === "z7");
    const evidence = goal?.evidence;
    if (!evidence) throw new Error("A1-14 z7 evidence is required");

    for (const questionId of ["lsq-a1-14-1", "lsq-a1-14-3"]) {
      expect(getListeningQuestionTaskId(lessonA114.id, "ls-a1-14-1", questionId, false)).toBe(
        `listening:ls-a1-14-1:${questionId}`,
      );
      expect(getListeningQuestionTaskId(lessonA114.id, "ls-a1-14-1", questionId, true)).toBe(
        `listening-transcript:${lessonA114.id}:ls-a1-14-1:${questionId}`,
      );
      expect(evidence.taskIds).toContain(`listening:ls-a1-14-1:${questionId}`);
      expect(evidence.taskIds).not.toContain(`listening-transcript:${lessonA114.id}:ls-a1-14-1:${questionId}`);
    }
    const interaction = lessonA114.interaction ?? [];
    expect(interaction).toHaveLength(1);
    expect(interaction[0]?.rounds).toHaveLength(4);
    expect(lessonA114.pronunciation.items).toHaveLength(8);
    expect(evidence.exerciseIds).not.toContain("int-a1-14-1");
  });

  it("keeps reading/audio references, flashcards, and open activities internally consistent", () => {
    const passage = reading();
    expect(passage.paragraphsAr).toHaveLength(passage.paragraphs.length);
    for (const question of passage.questions) {
      if (question.paragraph === undefined) throw new Error(`${question.id} needs a source paragraph`);
      expect(question.paragraph, `${question.id} source paragraph`).toBeGreaterThanOrEqual(1);
      expect(question.paragraph, `${question.id} source paragraph`).toBeLessThanOrEqual(passage.paragraphs.length);
    }

    const listeningItemIds = new Set((lessonA114.listening.items ?? []).map((item) => item.id));
    for (const question of lessonA114.listening.questions) {
      expect(listeningItemIds.has(question.itemId), `${question.id} audio item`).toBe(true);
    }

    expect(lessonA114.flashcards).toHaveLength(25);
    const flashcardIds = lessonA114.flashcards.map((card) => card.id);
    expect(new Set(flashcardIds).size).toBe(flashcardIds.length);
    expect(lessonA114.pronunciation.items).toHaveLength(8);

    const rounds = (lessonA114.interaction ?? []).flatMap((activity) => activity.rounds);
    expect(rounds).toHaveLength(4);
    const intendedResponses = [
      "Ich bin nach Hamburg gefahren und habe Freunde besucht.",
      "Am Samstag hat es geregnet, aber am Sonntag hat die Sonne geschienen.",
      "Wir sind in die Stadt gegangen und haben in einem Café gefrühstückt.",
      "Ja, ich will im Sommer wieder nach Hamburg fahren.",
    ];
    for (const [index, round] of rounds.entries()) {
      const bestOptions = round.options.filter((option) => option.best);
      expect(bestOptions, `speaking round ${index + 1} must have one intended response`).toHaveLength(1);
      expect(bestOptions[0]?.de).toBe(intendedResponses[index]);
      expect(round.options).toHaveLength(2);
      for (const option of round.options) {
        expect(option.de.trim()).toBeTruthy();
        expect(option.replyDe.trim()).toBeTruthy();
      }
    }

    const mappedIds = lessonA114.lernziele.flatMap((goal) => goal.evidence?.exerciseIds ?? []);
    expect(mappedIds).not.toContain("med-a1-14-1");
    expect(mappedIds).not.toContain("int-a1-14-1");
  });

  it("checks the key and every listed distractor for all 46 review, practice, mini-test, writing, reading, and listening tasks", () => {
    expect(lessonA114.review).toHaveLength(3);
    expect(lessonA114.practiceBank).toHaveLength(26);
    expect(lessonA114.miniTest).toHaveLength(5);
    expect(lessonA114.writing).toHaveLength(3);
    expect(reading().questions).toHaveLength(6);
    expect(lessonA114.listening.questions).toHaveLength(3);
    expect(allTasks()).toHaveLength(46);

    const ids = allTasks().map((task) => task.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const task of allTasks()) {
      expect(evaluateExercise(task, canonicalAnswer(task)).isCorrect, `${task.id} canonical answer`).toBe(true);
      expectEveryDistractorRejected(task);
    }
  });

  it("preserves explicit keys for previously ambiguous or easy-to-misread items", () => {
    const e4 = taskById("e4");
    const e12 = taskById("e12");
    const e14 = taskById("e14");
    const e16 = taskById("e16");
    const e17 = taskById("e17");
    const e23 = taskById("e23");
    const e5 = taskById("e5");
    const e19 = taskById("e19");
    const e22 = taskById("e22");
    const mt4 = taskById("mt-a1-14-4");
    const mt5 = taskById("mt-a1-14-5");
    const wr1 = lessonA114.writing.find((task) => task.id === "wr-a1-14-1");
    const wr2 = lessonA114.writing.find((task) => task.id === "wr-a1-14-2");
    const wr3 = lessonA114.writing.find((task) => task.id === "wr-a1-14-3");
    if (
      e4.type !== "multiple-choice" ||
      e12.type !== "error-correction" ||
      e14.type !== "transformation" ||
      e16.type !== "multiple-choice" ||
      e17.type !== "multiple-choice" ||
      e23.type !== "multiple-choice" ||
      e5.type !== "word-ordering" ||
      e19.type !== "word-ordering" ||
      e22.type !== "transformation" ||
      mt4.type !== "word-ordering" ||
      mt5.type !== "multiple-choice"
    ) {
      throw new Error("A1-14 contextual, modal, ordering, and transformation checks have changed exercise types");
    }
    if (!wr1 || wr1.type !== "transformation") throw new Error("A1-14 writing task 1 must be a transformation");
    if (!wr2 || wr2.type !== "transformation") throw new Error("A1-14 writing task 2 must be a transformation");
    if (!wr3 || wr3.type !== "fill-blank") throw new Error("A1-14 email task must be a guided cloze");

    expect(e4.questionDe).toContain("Meine Freundin");
    expect(e4.options[e4.correctIndex]).toBe("hat");
    expect(e12.options).not.toContain("war");
    expect(e16.options[e16.correctIndex]).toBe("sollst");
    expect(e17.options[e17.correctIndex]).toBe("Ich möchte bitte einen Kaffee.");
    expect(e17.options).toContain("Ich will einen Kaffee.");
    expect(e23.options[e23.correctIndex]).toBe("Ich fahre morgen nach Berlin.");
    expect(e5.instructionAr).toContain("gestern قبل المفعول");
    expect(e19.instructionAr).toContain("ضع heute Abend قبل ins Kino");
    expect(e22.acceptedAnswers).toContain("Am Wochenende bin ich ins Museum gegangen.");
    expect(e22.instructionAr).toContain("ابدأ بـIch أو بـam Wochenende");
    expect(e14.instructionAr).toContain("إبقاء الفاعل في بداية الجملة");
    expect(wr1.instructionAr).toContain("إبقاء الفاعل في بداية الجملة");
    expect(wr2.instructionAr).toContain("إبقاء الفاعل في بداية الجملة");
    expect(mt4.instructionAr).toContain("Meine Schwester");
    expect(mt5.options[mt5.correctIndex]).toBe("sollst");
    expect(wr3.blanks.map((blank) => blank.correct)).toEqual([
      "bin", "gefahren", "habe", "getroffen", "sind", "gelaufen", "haben", "gegessen",
    ]);

    const noError = taskById("e25");
    expect(noError.type).toBe("error-correction");
    if (noError.type !== "error-correction") throw new Error("e25 must be error-correction");
    expect(noError.isAlreadyCorrect).toBe(true);
    expect(evaluateExercise(noError, NO_ERROR_OPTION).isCorrect).toBe(true);
    expect(evaluateExercise(noError, noError.correctWord).isCorrect).toBe(false);
  });
});
