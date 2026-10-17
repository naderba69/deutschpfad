import {describe, expect, it} from "vitest";

import {lessonA109} from "@/data/lessons/a1/a1-09";
import {NO_ERROR_OPTION} from "@/lib/lesson/error-correction-highlight";
import {evaluateExercise} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const practiceAnswers: Record<string, unknown> = {
  e1: "Am",
  e2: "dritte",
  e3: [
    {left: "Montag", right: "الاثنين"},
    {left: "Dienstag", right: "الثلاثاء"},
    {left: "Mittwoch", right: "الأربعاء"},
    {left: "Donnerstag", right: "الخميس"},
    {left: "Freitag", right: "الجمعة"},
    {left: "Samstag", right: "السبت"},
    {left: "Sonntag", right: "الأحد"},
  ],
  e4: ["Der", "Termin", "ist", "am", "Montag", "."],
  e5: "Am Montag",
  e6: [
    {left: "Januar", right: "يناير"},
    {left: "Februar", right: "فبراير"},
    {left: "März", right: "مارس"},
    {left: "April", right: "أبريل"},
    {left: "Mai", right: "مايو"},
    {left: "Juni", right: "يونيو"},
    {left: "Juli", right: "يوليو"},
    {left: "August", right: "أغسطس"},
    {left: "September", right: "سبتمبر"},
    {left: "Oktober", right: "أكتوبر"},
    {left: "November", right: "نوفمبر"},
    {left: "Dezember", right: "ديسمبر"},
  ],
  e7: "am dritten August",
  e8: "Winter",
  e9: NO_ERROR_OPTION,
  e10: "Wir treffen uns am Samstag um drei Uhr.",
  e11: ["der", "am"],
  e12: "dritten",
  e13: "الخامس من سبتمبر",
  e14: ["Der", "Wievielte", "ist", "heute", "?"],
  e15: "Ich habe am zehnten Mai einen Termin.",
  e16: "von … bis",
  e17: "Ab Montag habe ich Urlaub.",
  e18: ["dritten", "der"],
  e19: "gegen",
  e20: "da",
  e21: ["Ich", "hätte", "gern", "einen", "Termin", "am", "Donnerstag", "."],
  e22: [
    {left: "von … bis …", right: "يذكر بداية الفترة ونهايتها"},
    {left: "ab", right: "يذكر نقطة بداية ولا يحدد وحده النهاية"},
    {left: "gegen", right: "يدل هنا على وقت تقريبي"},
    {left: "montags", right: "يدل على تكرار أسبوعي"},
    {left: "vom … bis zum …", right: "مدى بين تاريخين بصيغة كاملة"},
  ],
  e23: "Montags habe ich Deutschunterricht.",
  e24: "1995",
  e25: ["vom", "bis"],
  e26: "Guten Tag, ich hätte gern einen Termin.",
  e27: "Ja, am Donnerstag um zehn Uhr passt es mir gut.",
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "Im",
  m2: "dritte",
  m3: ["Am", "Freitag", "habe", "ich", "Zeit", "."],
  m4: "im Mai",
  m5: ["der Frühling", "der Sommer", "der Herbst", "der Winter"],
};

const writingAnswers: Record<string, unknown> = {
  w1: "Am Montag um zehn Uhr habe ich Zeit.",
  w2: ["am", "im", "im", "am", "im"],
  w3: "Mein Geburtstag ist am zehnten März.",
};

const readingAnswers: Record<string, string> = {
  rq1: "Sie hat Zahnschmerzen.",
  rq2: "Von acht bis achtzehn Uhr",
  rq3: "Ein Techniker kommt zu ihr nach Hause.",
  rq4: "Am neunten April um vierzehn Uhr",
  rq5: "Einen Tag vorher anrufen",
};

const listeningAnswers: Record<string, string> = {
  q1: "am Montag um neun Uhr",
  q2: "am dritten August",
  q3: "am fünfzehnten Dezember",
};

function reading() {
  const value = lessonA109.reading;
  if (!value) throw new Error("A1-09 reading passage is required");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...lessonA109.practiceBank,
    ...lessonA109.miniTest,
    ...lessonA109.writing,
    ...reading().questions,
    ...lessonA109.listening.questions,
  ];
}

function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-09 task ${id} is missing`);
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
      if (task.isAlreadyCorrect || option !== task.correctWord) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${option}`).toBe(false);
      }
    }
    expect(evaluateExercise(task, NO_ERROR_OPTION).isCorrect, `${task.id} no-error option`).toBe(
      task.isAlreadyCorrect === true,
    );
    if (task.isAlreadyCorrect) {
      const displayedOptions = [
        ...task.options.filter(
          (option) => option !== NO_ERROR_OPTION && option !== task.correctWord,
        ),
        NO_ERROR_OPTION,
      ];
      expect(displayedOptions).not.toContain(task.correctWord);
    } else {
      expect(task.options.filter((option) => option === task.correctWord)).toHaveLength(1);
    }
  } else if (task.type === "fill-blank") {
    const answers = task.blanks.map((blank) => blank.correct);
    task.blanks.forEach((blank, index) => {
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
    expect(evaluateExercise(task, [...task.tokens].reverse()).isCorrect, `${task.id} reversed order`).toBe(
      false,
    );
  } else if (task.type === "matching" && task.pairs.length > 1) {
    const wrongPairs = task.pairs.map((pair, index) => ({
      left: pair.left,
      right: task.pairs[(index + 1) % task.pairs.length].right,
    }));
    expect(evaluateExercise(task, wrongPairs).isCorrect, `${task.id} mismatched pairs`).toBe(false);
  } else if (task.type === "dictation") {
    expect(evaluateExercise(task, "__not_the_audio_text__").isCorrect, `${task.id} wrong dictation`).toBe(
      false,
    );
  } else if (task.type === "transformation") {
    expect(
      evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      `${task.id} rejected answer`,
    ).toBe(false);
  }
}

function validTaskIds() {
  return new Set([
    ...lessonA109.practiceBank.flatMap((task) => [
      `practice:${lessonA109.id}:${task.id}`,
      `flow-practice:${lessonA109.id}:${task.id}`,
    ]),
    ...lessonA109.miniTest.map((task) => `mini-test:${lessonA109.id}:${task.id}`),
    ...lessonA109.writing.map((task) => `writing:${lessonA109.id}:${task.id}`),
    ...reading().questions.map((task) => `reading:${reading().id}:${task.id}`),
    ...lessonA109.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
  ]);
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA109.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-09 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-09 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA109.id,
    taskId,
  };
}

describe("A1-09 audited lesson content", () => {
  it("has one keyed answer per practice task and rejects every listed distractor", () => {
    const actualIds = lessonA109.practiceBank.map((task) => task.id).sort();
    expect(actualIds).toEqual(Object.keys(practiceAnswers).sort());
    expect(new Set(actualIds).size).toBe(actualIds.length);

    for (const [id, answer] of Object.entries(practiceAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("checks the mini-test, every writing task, all reading/listening keys, and their distractors", () => {
    expect(lessonA109.miniTest.map((task) => task.id).sort()).toEqual(
      Object.keys(miniTestAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(miniTestAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA109.writing.map((task) => task.id).sort()).toEqual(
      Object.keys(writingAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(writingAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    const readingText = reading();
    expect(readingText.questions.map((task) => task.id).sort()).toEqual(
      Object.keys(readingAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(readingAnswers)) {
      const task = readingText.questions.find((candidate) => candidate.id === id);
      if (!task) throw new Error(`A1-09 reading ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(answer);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA109.listening.questions.map((task) => task.id).sort()).toEqual(
      Object.keys(listeningAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(listeningAnswers)) {
      const task = lessonA109.listening.questions.find((candidate) => candidate.id === id);
      if (!task) throw new Error(`A1-09 listening ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(answer);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts every published transformation variant and rejects near misses", () => {
    for (const task of allTasks()) {
      if (task.type !== "transformation") continue;
      expect(task.acceptedAnswers.length, `${task.id} accepted variants`).toBeGreaterThan(0);
      expect(task.acceptedAnswers).toContain(task.sampleAnswer);
      for (const answer of task.acceptedAnswers) {
        expect(evaluateExercise(task, answer).isCorrect, `${task.id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(task, "__not_an_accepted_answer__").isCorrect).toBe(false);
    }
  });

  it("maps every stated learning goal to assessed tasks, not lesson views or opened activities", () => {
    const taskIds = validTaskIds();
    expect(lessonA109.lernziele).toHaveLength(10);
    for (const goal of lessonA109.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} evidence`).toBeDefined();
      if (!evidence) continue;
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence.taskIds?.length).toBeGreaterThan(0);
      expect(evidence.labelAr.trim()).toBeTruthy();
      for (const exerciseId of evidence.exerciseIds) {
        expect(findTask(exerciseId), `${goal.id} exercise ${exerciseId}`).toBeDefined();
        expect(evidence.taskIds?.some((id) => id.endsWith(`:${exerciseId}`))).toBe(true);
      }
      for (const taskId of evidence.taskIds ?? []) {
        expect(taskIds.has(taskId), `${goal.id} -> ${taskId}`).toBe(true);
        expect(evidence.exerciseIds.some((id) => taskId.endsWith(`:${id}`))).toBe(true);
      }

      expect(getGoalEvidenceStatus(goal, lessonA109.id, [])).toBe("pending");
      const correctResults = evidence.exerciseIds.map((id) => goalEvent(goal.id, id, true));
      expect(getGoalEvidenceStatus(goal, lessonA109.id, correctResults.slice(0, -1))).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA109.id, correctResults)).toBe("evidenced");
      const incorrectResults = [
        ...correctResults.slice(0, -1),
        goalEvent(goal.id, evidence.exerciseIds[evidence.exerciseIds.length - 1], false),
      ];
      expect(getGoalEvidenceStatus(goal, lessonA109.id, incorrectResults)).toBe("pending");
      const wrongLesson = correctResults.map((event) => ({...event, lessonId: "a1-08"}));
      expect(getGoalEvidenceStatus(goal, lessonA109.id, wrongLesson)).toBe("pending");
      const wrongContext = correctResults.map((event) => ({
        ...event,
        taskId: `unmapped:${lessonA109.id}:${event.type === "exercise-result" ? event.exerciseId : "unknown"}`,
      }));
      expect(getGoalEvidenceStatus(goal, lessonA109.id, wrongContext)).toBe("pending");
      const nonPerformanceEvents: AnalyticsEvent[] = [
        {type: "lesson-view", ts: 1, lessonId: lessonA109.id},
        {
          type: "pronunciation-score",
          ts: 2,
          target: "Der Termin ist am dritten Mai.",
          score: 100,
          lessonId: lessonA109.id,
        },
        {
          type: "self-pronunciation-rating",
          ts: 3,
          target: "Der Termin ist am dritten Mai.",
          rating: 1,
          lessonId: lessonA109.id,
        },
      ];
      expect(getGoalEvidenceStatus(goal, lessonA109.id, nonPerformanceEvents)).toBe("pending");
    }

    expect(lessonA109.lernziele.find((goal) => goal.id === "z4")?.evidence?.exerciseIds).toEqual([
      "e9",
      "e13",
      "e14",
    ]);
    expect(lessonA109.lernziele.find((goal) => goal.id === "z4")?.evidence?.exerciseIds).not.toContain(
      "e24",
    );
  });

  it("keeps each reading question attached to its one-based source paragraph", () => {
    const text = reading();
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    for (const question of text.questions) {
      expect(question.paragraph, `${question.id} paragraph`).toBeGreaterThan(0);
      expect(question.paragraph, `${question.id} paragraph`).toBeLessThanOrEqual(text.paragraphs.length);
      expect(text.paragraphs[question.paragraph! - 1], `${question.id} source`).toBeTruthy();
    }
  });

  it("checks theory, vocabulary cards, dates, dialogue consistency, and all displayed text fields", () => {
    const tasks = allTasks();
    expect(tasks).toHaveLength(43);
    expect(new Set(tasks.map((task) => task.id)).size).toBe(tasks.length);
    for (const task of tasks) {
      expect(task.instructionAr.trim(), `${task.id} instruction`).toBeTruthy();
      expect(task.explanation.trim(), `${task.id} explanation`).toBeTruthy();
      if (task.type === "multiple-choice") {
        expect(task.options.length, `${task.id} options`).toBeGreaterThan(1);
        expect(new Set(task.options).size, `${task.id} unique options`).toBe(task.options.length);
        expect(task.correctIndex).toBeGreaterThanOrEqual(0);
        expect(task.correctIndex).toBeLessThan(task.options.length);
        if (task.optionExplanations) {
          expect(task.optionExplanations).toHaveLength(task.options.length);
        }
      } else if (task.type === "fill-blank") {
        expect(task.blanks.length, `${task.id} blanks`).toBeGreaterThan(0);
        for (const blank of task.blanks) {
          expect(blank.options).toContain(blank.correct);
        }
      } else if (task.type === "matching") {
        expect(task.pairs.length, `${task.id} pairs`).toBeGreaterThan(1);
        expect(new Set(task.pairs.map((pair) => pair.left)).size).toBe(task.pairs.length);
        expect(new Set(task.pairs.map((pair) => pair.right)).size).toBe(task.pairs.length);
      } else if (task.type === "word-ordering") {
        expect(task.tokens.length, `${task.id} tokens`).toBeGreaterThan(1);
        expect(task.correctSentence.trim()).toBeTruthy();
      } else if (task.type === "dictation") {
        expect(task.audioText.trim(), `${task.id} audio text`).toBeTruthy();
      } else if (task.type === "transformation") {
        expect(task.prompt.trim(), `${task.id} prompt`).toBeTruthy();
      }
    }

    const theoryIds = lessonA109.theory.map((section) => section.id);
    expect(theoryIds).toEqual(["t1", "t2", "t3", "t4"]);
    for (const section of lessonA109.theory) {
      expect(section.explanationAr.length, `${section.id} explanation length`).toBeGreaterThanOrEqual(900);
      expect(section.explanationAr.length, `${section.id} explanation length`).toBeLessThanOrEqual(2800);
      expect(section.explanationAr.split(/\n\s*\n/).length, `${section.id} explanation paragraphs`).toBeGreaterThanOrEqual(2);
      expect(section.whyAr.length, `${section.id} rationale length`).toBeGreaterThanOrEqual(250);
      expect(section.comparisonWithArabic.length, `${section.id} Arabic comparison length`).toBeGreaterThanOrEqual(250);
      expect(section.whyAr.trim(), `${section.id} rationale`).toBeTruthy();
      expect(section.comparisonWithArabic.trim(), `${section.id} Arabic comparison`).toBeTruthy();
      expect(section.eselsbruecke.trim(), `${section.id} memory aid`).toBeTruthy();
      expect(section.table?.rows.length, `${section.id} table rows`).toBeGreaterThan(0);
      expect(section.examples.length, `${section.id} examples`).toBeGreaterThanOrEqual(6);
      expect(section.commonMistakes.length, `${section.id} classified mistakes`).toBeGreaterThanOrEqual(3);
      for (const example of section.examples) {
        expect(example.de.trim(), `${section.id} German example`).toBeTruthy();
        expect(example.ar.trim(), `${section.id} Arabic example`).toBeTruthy();
      }
      for (const mistake of section.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim().length).toBeGreaterThanOrEqual(60);
        expect(["error", "contextual-alternative"]).toContain(mistake.classification);
      }
    }

    const text = reading();
    expect(text.paragraphs.join(" ").split(/\s+/).filter(Boolean).length).toBeGreaterThan(160);
    expect(text.glossary.length).toBeGreaterThanOrEqual(10);
    for (const item of text.glossary) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.noteAr?.trim()).toBeTruthy();
    }
    expect(text.paragraphs[0]).toContain("Heute ist Dienstag, der siebte April 2026.");
    expect(text.paragraphs[3]).toContain("am neunten April um zehn Uhr");
    expect(text.paragraphs[4]).toContain("am neunten April um vierzehn Uhr");
    expect(text.paragraphsAr).toHaveLength(6);
    expect(text.questions).toHaveLength(5);
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(6);
    expect(text.discussionAr?.trim()).toBeTruthy();
    expect(new Date(Date.UTC(2026, 3, 7)).getUTCDay()).toBe(2); // Dienstag
    expect(new Date(Date.UTC(2026, 3, 9)).getUTCDay()).toBe(4); // Donnerstag

    expect(lessonA109.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA109.listening.items.map((item) => item.lines.length)).toEqual([6, 4]);
    const listeningLines = lessonA109.listening.items.flatMap((item) => item.lines);
    for (const line of listeningLines) {
      expect(line.speaker.trim()).toBeTruthy();
      expect(line.de.trim()).toBeTruthy();
      expect(line.ar.trim()).toBeTruthy();
    }
    for (const question of lessonA109.listening.questions) {
      expect(lessonA109.listening.items.some((item) => item.id === question.itemId), `${question.id} source`).toBe(
        true,
      );
    }

    expect(lessonA109.flashcards).toHaveLength(24);
    expect(new Set(lessonA109.flashcards.map((card) => card.id)).size).toBe(24);
    for (const card of lessonA109.flashcards) {
      expect(card.de.trim(), `${card.id} German`).toBeTruthy();
      expect(card.ar.trim(), `${card.id} Arabic`).toBeTruthy();
      expect(card.example?.trim(), `${card.id} German example`).toBeTruthy();
      expect(card.exampleAr?.trim(), `${card.id} Arabic example`).toBeTruthy();
    }

    const introduction = lessonA109.einfuehrung;
    expect(introduction.contextAr.trim()).toBeTruthy();
    expect(introduction.contextDe?.trim()).toBeTruthy();
    expect(introduction.motivatingQuestionAr.trim()).toBeTruthy();
    expect(introduction.motivatingQuestionDe?.trim()).toBeTruthy();
    const activatedVocabulary = introduction.activateVocabulary ?? [];
    expect(activatedVocabulary.length).toBeGreaterThan(0);
    expect(new Set(activatedVocabulary.map((item) => item.de)).size).toBe(
      activatedVocabulary.length,
    );
    for (const item of activatedVocabulary) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
    }

    expect(lessonA109.pronunciation.items).toHaveLength(6);
    const shadowingItems = lessonA109.pronunciation.shadowing ?? [];
    expect(shadowingItems).toHaveLength(4);
    for (const item of lessonA109.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const item of shadowingItems) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.tip?.trim()).toBeTruthy();
    }
    expect(lessonA109.pronunciation.tip.trim()).toBeTruthy();

    const mediation = lessonA109.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe?.trim()).toBeTruthy();
    expect(mediation[0].taskAr.trim()).toBeTruthy();
    expect(mediation[0].modelAnswerAr?.trim()).toBeTruthy();
    expect(mediation[0].keyPointsAr.length).toBeGreaterThanOrEqual(3);
    expect(lessonA109.fehlerUndTipps.mistakes).toHaveLength(3);
    for (const mistake of lessonA109.fehlerUndTipps.mistakes) {
      expect(mistake.wrong.trim()).toBeTruthy();
      expect(mistake.right.trim()).toBeTruthy();
      expect(mistake.whyAr.trim()).toBeTruthy();
    }
    expect(lessonA109.fehlerUndTipps.culturalNote.content).toContain("التأمين القانوني");

    const interactions = lessonA109.interaction ?? [];
    expect(interactions).toHaveLength(1);
    const interaction = interactions[0];
    if (!interaction) throw new Error("A1-09 appointment interaction is required");
    expect(interaction.rounds).toHaveLength(2);
    for (const round of interaction.rounds) {
      expect(round.speakerDe.trim()).toBeTruthy();
      expect(round.speakerAr.trim()).toBeTruthy();
      expect(round.options).toHaveLength(2);
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      for (const option of round.options) {
        expect(option.de.trim()).toBeTruthy();
        expect(option.ar.trim()).toBeTruthy();
        expect(option.replyDe.trim()).toBeTruthy();
        expect(option.replyAr.trim()).toBeTruthy();
      }
    }
    expect(interaction.rounds[1].speakerDe).toContain("Mittwoch um 10 Uhr");
    expect(interaction.rounds[1].options.find((option) => option.best)?.de).toContain(
      "Mittwoch um zehn Uhr",
    );
    expect(interaction.strategyAr).toContain("لا يقيّم نطقاً");

    const serializedLesson = JSON.stringify(lessonA109);
    expect(serializedLesson).not.toContain("Goethe-Zertifikat");
    expect(serializedLesson).not.toContain("CEFR");
    expect(serializedLesson).not.toMatch(/مدة الدرس|مدة الحصة|lesson duration|minutes per lesson/i);
    expect(Object.keys(lessonA109)).not.toContain("duration");
  });
});
