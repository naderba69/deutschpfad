import { describe, expect, it } from "vitest";

import { LESSON_META } from "@/data/lessons/meta";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";
import { lessonA111 } from "./a1-11";

const practiceAnswers: Record<string, unknown> = {
  e1: "nach",
  e2: "zum",
  e3: [
    { left: "der Bahnhof", right: "محطة القطار" },
    { left: "die Apotheke", right: "الصيدلية" },
    { left: "das Krankenhaus", right: "المستشفى" },
    { left: "die Bank", right: "البنك" },
  ],
  e4: ["Gehen", "Sie", "bitte", "geradeaus", "!"],
  e5: "nach",
  e6: ["geradeaus", "links", "um die"],
  e7: "Wo ist die Post?",
  e8: "إلى أين تذهب؟",
  e9: "nach Hause",
  e10: "Der Supermarkt ist neben dem Bahnhof.",
  e11: ["dem", "der", "dem"],
  e12: "zu Fuß",
  e13: "Mit der Bahn.",
  e14: ["Ich", "fahre", "mit", "dem", "Fahrrad", "zur", "Uni", "."],
  e15: "Mit dem Auto.",
  e16: "ihn",
  e17: "sie",
  e18: "ihn",
  e19: ["in der", "in die"],
  e20: "Ich fahre zum Bahnhof.",
  e21: "Ich fahre mit dem Zug nach Berlin.",
  e22: ["Entschuldigung", ",", "wie", "komme", "ich", "zum", "Bahnhof", "?"],
  e23: [
    {
      left: "Deutschland (وجهة إلى اسم بلد بلا أداة)",
      right: "nach Deutschland",
    },
    {
      left: "der Bahnhof (الذهاب إليه دون تأكيد الدخول)",
      right: "zum Bahnhof",
    },
    { left: "das Kino (الدخول إلى الداخل)", right: "ins Kino" },
    { left: "Hause (اتجاه إلى البيت في التعبير الثابت)", right: "nach Hause" },
    { left: "die Apotheke (الوجهة دون تأكيد الدخول)", right: "zur Apotheke" },
  ],
  e24: "Ich nehme ihn.",
  e25: "Mit dem Bus.",
  e26: ["es", "sie"],
  e27: NO_ERROR_OPTION,
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "zur",
  m2: "geradeaus",
  m3: ["Wo", "ist", "der", "Bahnhof", "?"],
  m4: "in die Stadt",
  m5: ["nach", "zur", "ins"],
};

const writingAnswers: Record<string, unknown> = {
  w1: "Ich gehe zur Apotheke.",
  w2: ["nach", "zum", "zur", "ins"],
  w3: "Die Apotheke ist um die Ecke.",
};

const readingAnswers: Record<string, string> = {
  rq1: "Mit der U-Bahn",
  rq2: "links",
  rq3: "Gegenüber der Apotheke",
  rq4: "Zu Fuß kommt sie eher an; der Bus fährt erst später.",
  rq5: "Nichts zu danken.",
};

const listeningAnswers: Record<string, string> = {
  q1: "neben dem Park",
  q2: "in die Stadt",
  q3: "um acht Uhr",
};

function reading() {
  const value = lessonA111.reading;
  if (!value) throw new Error("A1-11 reading passage is required");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...lessonA111.practiceBank,
    ...lessonA111.miniTest,
    ...lessonA111.writing,
    ...reading().questions,
    ...lessonA111.listening.questions,
  ];
}

function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-11 task ${id} is missing`);
  return task;
}

function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    if (task.optionExplanations) {
      expect(task.optionExplanations).toHaveLength(task.options.length);
      task.options.forEach((_, index) => {
        if (index !== task.correctIndex) {
          expect(
            task.optionExplanations?.[index]?.trim(),
            `${task.id} option explanation ${index}`,
          ).toBeTruthy();
        }
      });
    }
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(
          evaluateExercise(task, option).isCorrect,
          `${task.id} option ${index}`,
        ).toBe(false);
      }
    });
  } else if (task.type === "error-correction") {
    expect(task.options).toContain(task.correctWord);
    if (!task.isAlreadyCorrect)
      expect(task.wrongSentence).toContain(task.wrongWord);
    for (const option of task.options) {
      if (task.isAlreadyCorrect && option === task.correctWord) continue;
      if (option !== task.correctWord) {
        expect(
          evaluateExercise(task, option).isCorrect,
          `${task.id} option ${option}`,
        ).toBe(false);
      }
    }
    expect(
      evaluateExercise(task, NO_ERROR_OPTION).isCorrect,
      `${task.id} no-error option`,
    ).toBe(task.isAlreadyCorrect === true);
  } else if (task.type === "fill-blank") {
    const answers = task.blanks.map((blank) => blank.correct);
    task.blanks.forEach((blank, index) => {
      expect(blank.options).toContain(blank.correct);
      for (const option of blank.options ?? []) {
        if (option !== blank.correct) {
          const nearMiss = [...answers];
          nearMiss[index] = option;
          expect(
            evaluateExercise(task, nearMiss).isCorrect,
            `${task.id} blank ${index} option ${option}`,
          ).toBe(false);
        }
      }
    });
  } else if (task.type === "word-ordering") {
    for (const sentence of task.acceptedSentences ?? []) {
      const orderedTokens = sentence.replace(/[.!?]+$/, "").split(/\s+/);
      orderedTokens.push(
        ...task.tokens.filter((token) => /^[.!?]$/.test(token)),
      );
      expect(
        evaluateExercise(task, orderedTokens).isCorrect,
        `${task.id} accepted order: ${sentence}`,
      ).toBe(true);
    }
    const wrongOrder = task.correctSentence.split(/\s+/);
    [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
    expect(
      evaluateExercise(task, wrongOrder).isCorrect,
      `${task.id} swapped initial words`,
    ).toBe(false);
  } else if (task.type === "matching" && task.pairs.length > 1) {
    const wrongPairs = task.pairs.map((pair, index) => ({
      left: pair.left,
      right: task.pairs[(index + 1) % task.pairs.length].right,
    }));
    expect(
      evaluateExercise(task, wrongPairs).isCorrect,
      `${task.id} mismatched pairs`,
    ).toBe(false);
  } else if (task.type === "dictation") {
    expect(
      evaluateExercise(task, "__not_the_audio_text__").isCorrect,
      `${task.id} wrong dictation`,
    ).toBe(false);
  } else if (task.type === "transformation") {
    expect(task.acceptedAnswers).toContain(task.sampleAnswer);
    expect(
      evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      `${task.id} rejected answer`,
    ).toBe(false);
  }
}

function validTaskIds(): Set<string> {
  const renderedPractice = lessonA111.practiceBank.flatMap((task, index) => [
    `practice:${lessonA111.id}:${task.id}`,
    ...(index < 4 ? [`flow-practice:${lessonA111.id}:${task.id}`] : []),
  ]);
  return new Set([
    ...renderedPractice,
    ...lessonA111.miniTest.map(
      (task) => `mini-test:${lessonA111.id}:${task.id}`,
    ),
    ...lessonA111.writing.map((task) => `writing:${lessonA111.id}:${task.id}`),
    ...reading().questions.map((task) => `reading:${reading().id}:${task.id}`),
    ...lessonA111.listening.questions.map(
      (task) => `listening:${task.itemId}:${task.id}`,
    ),
  ]);
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
): AnalyticsEvent {
  const goal = lessonA111.lernziele.find(
    (candidate) => candidate.id === goalId,
  );
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-11 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!taskId)
    throw new Error(`A1-11 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA111.id,
    taskId,
  };
}

function allCorrectGoalEvents(goalId: string): AnalyticsEvent[] {
  const goal = lessonA111.lernziele.find(
    (candidate) => candidate.id === goalId,
  );
  if (!goal?.evidence)
    throw new Error(`A1-11 ${goalId} has no evidence mapping`);
  return goal.evidence.exerciseIds.map((exerciseId) =>
    goalEvent(goalId, exerciseId, true),
  );
}

function hasDurationField(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasDurationField);
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(
    ([key, nested]) =>
      /^(duration|durationMinutes|lessonMinutes|minutes)$/i.test(key) ||
      hasDurationField(nested),
  );
}

describe("A1-11 audited lesson content", () => {
  it("has an answer key for every practice task and checks each listed distractor", () => {
    const actualIds = lessonA111.practiceBank.map((task) => task.id).sort();
    expect(actualIds).toEqual(Object.keys(practiceAnswers).sort());
    expect(actualIds).toHaveLength(27);
    expect(new Set(actualIds).size).toBe(actualIds.length);
    expect(allTasks()).toHaveLength(43);
    expect(new Set(allTasks().map((task) => task.id)).size).toBe(43);

    for (const [id, answer] of Object.entries(practiceAnswers)) {
      const task = findTask(id);
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("checks every mini-test, writing, reading, and listening key", () => {
    expect(lessonA111.miniTest.map((task) => task.id).sort()).toEqual(
      Object.keys(miniTestAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(miniTestAnswers)) {
      const task = findTask(id);
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA111.writing.map((task) => task.id).sort()).toEqual(
      Object.keys(writingAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(writingAnswers)) {
      const task = findTask(id);
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }

    const readingText = reading();
    expect(readingText.questions.map((task) => task.id).sort()).toEqual(
      Object.keys(readingAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(readingAnswers)) {
      const task = readingText.questions.find(
        (candidate) => candidate.id === id,
      );
      if (!task) throw new Error(`A1-11 reading ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(
        answer,
      );
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(
      lessonA111.listening.questions.map((task) => task.id).sort(),
    ).toEqual(Object.keys(listeningAnswers).sort());
    for (const [id, answer] of Object.entries(listeningAnswers)) {
      const task = lessonA111.listening.questions.find(
        (candidate) => candidate.id === id,
      );
      if (!task) throw new Error(`A1-11 listening ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(
        answer,
      );
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${id} accepted answer`,
      ).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts every published transformation variant and enforces selected German capitalization", () => {
    for (const task of allTasks()) {
      if (task.type !== "transformation") continue;
      expect(task.acceptedAnswers).toContain(task.sampleAnswer);
      for (const answer of task.acceptedAnswers) {
        expect(
          evaluateExercise(task, answer).isCorrect,
          `${task.id}: ${answer}`,
        ).toBe(true);
      }
      expect(
        evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      ).toBe(false);
    }

    expect(
      evaluateExercise(findTask("w1"), "ich gehe zur Apotheke.").isCorrect,
    ).toBe(false);
    expect(
      evaluateExercise(
        findTask("e10"),
        "der supermarket ist neben dem bahnhof.",
      ).isCorrect,
    ).toBe(false);
    expect(
      evaluateExercise(findTask("w3"), "die Apotheke ist um die Ecke.")
        .isCorrect,
    ).toBe(false);
  });

  it("audits all four theory blocks and distinguishes errors from alternatives and teaching simplifications", () => {
    expect(lessonA111.lernziele).toHaveLength(9);
    expect(lessonA111.theory.map((block) => block.id)).toEqual([
      "t1",
      "t2",
      "t3",
      "t4",
    ]);
    for (const block of lessonA111.theory) {
      expect(block.titleAr.trim()).toBeTruthy();
      expect(block.titleDe.trim()).toBeTruthy();
      expect(block.explanationAr.trim()).toBeTruthy();
      expect(block.whyAr.trim()).toBeTruthy();
      expect(block.comparisonWithArabic.trim()).toBeTruthy();
      expect(block.eselsbruecke.trim()).toBeTruthy();
      expect(block.relatedRuleComparison?.title.trim()).toBeTruthy();
      expect(block.relatedRuleComparison?.content.trim()).toBeTruthy();
      expect(block.table?.columns.length).toBeGreaterThan(0);
      expect(block.table?.rows.length).toBeGreaterThan(0);
      for (const row of block.table?.rows ?? []) {
        expect(row.label.trim()).toBeTruthy();
        expect(row.cells).toHaveLength((block.table?.columns.length ?? 1) - 1);
        for (const cell of row.cells) expect(cell.trim()).toBeTruthy();
      }
      expect(block.examples.length).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(3);
      for (const example of block.examples) {
        expect(example.de.trim()).toBeTruthy();
        expect(example.ar.trim()).toBeTruthy();
      }
      for (const mistake of block.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim().length).toBeGreaterThanOrEqual(60);
        expect([
          "error",
          "contextual-alternative",
          "pedagogical-simplification",
          "unverified-claim",
        ]).toContain(mistake.classification);
      }
    }

    const destination = lessonA111.theory.find((block) => block.id === "t2");
    expect(destination?.explanationAr).toContain(
      "Ich gehe in der Stadt spazieren",
    );
    expect(
      destination?.commonMistakes.find((mistake) =>
        mistake.wrong.startsWith("Ich gehe in der Stadt"),
      )?.classification,
    ).toBe("contextual-alternative");
    expect(
      destination?.commonMistakes.find(
        (mistake) => mistake.wrong === "Wir gehen in das Kino.",
      )?.classification,
    ).toBe("pedagogical-simplification");

    const transport = lessonA111.theory.find((block) => block.id === "t3");
    expect(transport?.explanationAr).toContain("Ich gehe nach Berlin");
    expect(
      transport?.commonMistakes.find(
        (mistake) => mistake.wrong === "Ich gehe nach Berlin.",
      )?.classification,
    ).toBe("contextual-alternative");
    expect(
      transport?.commonMistakes.some(
        (mistake) => mistake.classification === "unverified-claim",
      ),
    ).toBe(false);
    expect(
      lessonA111.practiceBank.find((task) => task.id === "e20")?.type,
    ).toBe("transformation");
    expect(
      lessonA111.fehlerUndTipps.mistakes.map(
        (mistake) => mistake.classification,
      ),
    ).toEqual([
      "error",
      "contextual-alternative",
      "pedagogical-simplification",
    ]);
    expect(
      evaluateExercise(findTask("e27"), NO_ERROR_OPTION).isCorrect,
      "Ich gehe nach Berlin is not universally an error",
    ).toBe(true);
  });

  it("checks the full reading passage, translations, glossary, and question references", () => {
    const text = reading();
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    for (const [index, paragraph] of text.paragraphs.entries()) {
      expect(paragraph.trim(), `reading paragraph ${index + 1}`).toBeTruthy();
      expect(
        text.paragraphsAr[index]?.trim(),
        `Arabic paragraph ${index + 1}`,
      ).toBeTruthy();
    }
    expect(text.glossary.length).toBeGreaterThanOrEqual(8);
    const joined = text.paragraphs.join(" ").toLowerCase();
    for (const entry of text.glossary) {
      expect(entry.de.trim()).toBeTruthy();
      expect(entry.ar.trim()).toBeTruthy();
      expect(entry.noteAr?.trim()).toBeTruthy();
      const head = entry.de
        .replace(/^(der|die|das)\s+/i, "")
        .split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      if (stem.length >= 3)
        expect(joined, `${entry.de} occurs in reading`).toContain(stem);
    }
    expect(text.questions).toHaveLength(5);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(text.paragraphs.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
    }
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(text.discussionAr?.trim()).toBeTruthy();
  });

  it("checks both TTS dialogues, every listening question, and the optional interaction boundary", () => {
    expect(lessonA111.listening.items).toHaveLength(2);
    expect(lessonA111.listening.items.map((item) => item.lines.length)).toEqual(
      [5, 4],
    );
    const itemIds = new Set(lessonA111.listening.items.map((item) => item.id));
    for (const item of lessonA111.listening.items) {
      expect(item.title.trim()).toBeTruthy();
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }
    for (const question of lessonA111.listening.questions) {
      expect(itemIds.has(question.itemId)).toBe(true);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }
    expect(lessonA111.interaction?.[0].strategyAr).toContain(
      "لا تسجل كلاماً منطوقاً",
    );
    expect(
      lessonA111.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((id) => id.startsWith("flow-listening:")),
      ),
    ).toBe(false);
    const listeningGoal = lessonA111.lernziele.find((goal) => goal.id === "z8");
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l2:q2",
      "listening:l2:q3",
    ]);
    expect(listeningGoal?.evidence?.labelAr).toContain("قبل كشف النص");
  });

  it("checks pronunciation cues, writing, mediation, and unique anchored flashcards", () => {
    expect(lessonA111.pronunciation.items).toHaveLength(7);
    expect(lessonA111.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA111.pronunciation.tip.trim()).toBeTruthy();
    for (const item of lessonA111.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const item of lessonA111.pronunciation.shadowing ?? []) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.tip?.trim()).toBeTruthy();
    }

    expect(lessonA111.writing).toHaveLength(3);
    expect(lessonA111.mediation).toHaveLength(1);
    expect(lessonA111.mediation?.[0].keyPointsAr).toHaveLength(4);
    expect(lessonA111.interaction).toHaveLength(1);
    expect(lessonA111.interaction?.[0].rounds).toHaveLength(2);
    for (const round of lessonA111.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options.length).toBeGreaterThanOrEqual(2);
    }

    expect(lessonA111.flashcards).toHaveLength(25);
    expect(new Set(lessonA111.flashcards.map((card) => card.id)).size).toBe(25);
    expect(
      new Set(lessonA111.flashcards.map((card) => card.de.trim().toLowerCase()))
        .size,
    ).toBe(25);
    for (const card of lessonA111.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }
  });

  it("maps every learning goal to real assessed tasks and counts correct results only", () => {
    const actualIds = validTaskIds();
    expect(lessonA111.lernziele).toHaveLength(9);
    for (const goal of lessonA111.lernziele) {
      expect(goal.evidence, `${goal.id} evidence mapping`).toBeDefined();
      expect(goal.evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(goal.evidence?.taskIds?.length).toBeGreaterThan(0);
      expect(goal.evidence?.completion).toBe("all-correct");
      expect(goal.evidence?.labelAr.trim()).toBeTruthy();
      for (const exerciseId of goal.evidence?.exerciseIds ?? []) {
        expect(
          goal.evidence?.taskIds?.some((taskId) =>
            taskId.endsWith(`:${exerciseId}`),
          ),
          `${goal.id} maps ${exerciseId}`,
        ).toBe(true);
      }
      for (const taskId of goal.evidence?.taskIds ?? []) {
        expect(actualIds.has(taskId), `${goal.id} task ${taskId}`).toBe(true);
      }

      expect(getGoalEvidenceStatus(goal, lessonA111.id, [])).toBe("pending");
      const openedOnly: AnalyticsEvent = {
        type: "lesson-view",
        ts: 1,
        lessonId: lessonA111.id,
      };
      expect(getGoalEvidenceStatus(goal, lessonA111.id, [openedOnly])).toBe(
        "pending",
      );

      const events = allCorrectGoalEvents(goal.id);
      expect(getGoalEvidenceStatus(goal, lessonA111.id, events)).toBe(
        "evidenced",
      );
      if ((goal.evidence?.exerciseIds.length ?? 0) > 1) {
        expect(
          getGoalEvidenceStatus(goal, lessonA111.id, events.slice(0, 1)),
        ).toBe("pending");
      }
      const first = events[0];
      if (first?.type !== "exercise-result")
        throw new Error("Expected an exercise-result event");
      expect(
        getGoalEvidenceStatus(goal, lessonA111.id, [
          { ...first, correct: false },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA111.id, [
          { ...first, lessonId: "a1-10" },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA111.id, [
          { ...first, taskId: "flow-listening:a1-11:l1:q1" },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      if (goal.id === "z8") {
        const transcriptRevealedEvents = events.map((event) => {
          if (event.type !== "exercise-result") return event;
          const question = lessonA111.listening.questions.find(
            (candidate) => candidate.id === event.exerciseId,
          );
          if (!question)
            throw new Error(
              `A1-11 listening question ${event.exerciseId} is missing`,
            );
          return {
            ...event,
            taskId: getListeningQuestionTaskId(
              lessonA111.id,
              question.itemId,
              question.id,
              true,
            ),
          };
        });
        expect(
          getGoalEvidenceStatus(goal, lessonA111.id, transcriptRevealedEvents),
        ).toBe("pending");
      }
    }
  });

  it("uses no lesson-duration field and makes no Goethe/CEFR endorsement claim", () => {
    const metadata = LESSON_META.find((item) => item.id === lessonA111.id);
    expect(metadata).toBeDefined();
    expect(hasDurationField(lessonA111)).toBe(false);
    expect(hasDurationField(metadata)).toBe(false);
    expect(JSON.stringify(lessonA111)).not.toMatch(/Goethe|CEFR|63\s*Euro/i);
    expect(
      lessonA111.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((id) => id.startsWith("flow-listening:")),
      ),
    ).toBe(false);
  });
});
