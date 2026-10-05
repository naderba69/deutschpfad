import {describe, expect, it} from "vitest";

import {lessonA110} from "@/data/lessons/a1/a1-10";
import {getLessonMeta, LESSON_META} from "@/data/lessons/meta";
import {NO_ERROR_OPTION} from "@/lib/lesson/error-correction-highlight";
import {evaluateExercise} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const practiceAnswers: Record<string, unknown> = {
  e1: "Ärztin",
  e2: "kein",
  e3: [
    {left: "der Lehrer", right: "المعلم"},
    {left: "der Koch", right: "الطباخ"},
    {left: "der Fahrer", right: "السائق"},
    {left: "der Verkäufer", right: "البائع"},
  ],
  e4: ["Er", "arbeitet", "als", "Ingenieur", "."],
  e5: "keinen",
  e6: ["nicht", "keine", "kein", "keinen"],
  e7: "Ich habe keinen Bruder.",
  e8: "ما مهنتك؟",
  e9: "Köchin",
  e10: "Ich habe keinen Bruder, aber eine Schwester.",
  e11: ["einer", "einem", "einem"],
  e12: "einer",
  e13: "bei",
  e14: ["Ich", "arbeite", "als", "Ingenieur", "in", "einer", "Firma", "."],
  e15: "Ich arbeite in einem Krankenhaus.",
  e16: "bin",
  e17: "Ärztin",
  e18: ["unsere", "Ihr"],
  e19: "eure",
  e20: "bei",
  e21: "bei",
  e22: "den … nicht",
  e23: "Ich habe keinen Bruder.",
  e24: ["Wir", "arbeiten", "am", "Samstag", "nicht"],
  e25: [
    {left: "Ich arbeite heute ___.", right: "nicht في هذا المثال المحايد"},
    {left: "Ich habe ___ Zeit.", right: "keine قبل الاسم المؤنث هنا"},
    {left: "Das Büro ist ___ groß.", right: "nicht قبل الصفة في المثال"},
    {left: "Ich kenne den Chef ___.", right: "nicht مع المدير المحدد في هذا السياق"},
    {left: "Ich rufe heute ___ an.", right: "nicht قبل الجزء المنفصل هنا"},
  ],
  e26: ["einem", "einer"],
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "Verkäuferin",
  m2: "nicht",
  m3: ["Ich", "arbeite", "als", "Verkäufer", "."],
  m4: "kein Auto",
  m5: ["nicht", "keine", "keinen"],
};

const writingAnswers: Record<string, unknown> = {
  w1: "Ich bin Ingenieur.",
  w2: ["nicht", "keinen", "nicht"],
  w3: "Meine Schwester arbeitet als Lehrerin.",
};

const readingAnswers: Record<string, string> = {
  rq1: "Ingenieur",
  rq2: "Bei einer kleinen Firma für Solartechnik",
  rq3: "Sie ist krank.",
  rq4: "Nein, am Samstag arbeitet das Team nicht.",
  rq5: "Sehr gut",
};

const listeningAnswers: Record<string, string> = {
  q1: "Ärztin",
  q2: "Nein, sie arbeitet am Wochenende nicht.",
  q3: "Er ist Student.",
};

function reading() {
  const value = lessonA110.reading;
  if (!value) throw new Error("A1-10 reading passage is required");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...lessonA110.practiceBank,
    ...lessonA110.miniTest,
    ...lessonA110.writing,
    ...reading().questions,
    ...lessonA110.listening.questions,
  ];
}

function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-10 task ${id} is missing`);
  return task;
}

function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    if (task.optionExplanations) {
      expect(task.optionExplanations).toHaveLength(task.options.length);
      task.options.forEach((_, index) => {
        if (index !== task.correctIndex) {
          expect(task.optionExplanations?.[index]?.trim(), `${task.id} option explanation ${index}`).toBeTruthy();
        }
      });
    }
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${index}`).toBe(false);
      }
    });
  } else if (task.type === "error-correction") {
    expect(task.wrongSentence).toContain(task.wrongWord);
    expect(task.options.filter((option) => option === task.correctWord)).toHaveLength(1);
    for (const option of task.options) {
      if (task.isAlreadyCorrect || option !== task.correctWord) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${option}`).toBe(false);
      }
    }
    expect(evaluateExercise(task, NO_ERROR_OPTION).isCorrect, `${task.id} no-error option`).toBe(
      task.isAlreadyCorrect === true,
    );
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
      orderedTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
      expect(evaluateExercise(task, orderedTokens).isCorrect, `${task.id} accepted order: ${sentence}`).toBe(
        true,
      );
    }
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
    expect(task.acceptedAnswers).toContain(task.sampleAnswer);
    expect(
      evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      `${task.id} rejected answer`,
    ).toBe(false);
  }
}

function validTaskIds() {
  return new Set([
    ...lessonA110.practiceBank.flatMap((task) => [
      `practice:${lessonA110.id}:${task.id}`,
      `flow-practice:${lessonA110.id}:${task.id}`,
    ]),
    ...lessonA110.miniTest.map((task) => `mini-test:${lessonA110.id}:${task.id}`),
    ...lessonA110.writing.map((task) => `writing:${lessonA110.id}:${task.id}`),
    ...reading().questions.map((task) => `reading:${reading().id}:${task.id}`),
    ...lessonA110.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
  ]);
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA110.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-10 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-10 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA110.id,
    taskId,
  };
}

function hasDurationField(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasDurationField);
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(([key, nested]) =>
    /^(duration|durationMinutes|lessonMinutes|minutes)$/i.test(key) || hasDurationField(nested),
  );
}

describe("A1-10 audited lesson content", () => {
  it("has a keyed answer for every practice task and rejects every listed distractor", () => {
    const actualIds = lessonA110.practiceBank.map((task) => task.id).sort();
    expect(actualIds).toEqual(Object.keys(practiceAnswers).sort());
    expect(actualIds).toHaveLength(26);
    expect(new Set(actualIds).size).toBe(actualIds.length);

    for (const [id, answer] of Object.entries(practiceAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("checks all mini-test, writing, reading, and listening keys, including their alternatives", () => {
    expect(lessonA110.miniTest.map((task) => task.id).sort()).toEqual(
      Object.keys(miniTestAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(miniTestAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA110.writing.map((task) => task.id).sort()).toEqual(Object.keys(writingAnswers).sort());
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
      if (!task) throw new Error(`A1-10 reading ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(answer);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA110.listening.questions.map((task) => task.id).sort()).toEqual(
      Object.keys(listeningAnswers).sort(),
    );
    for (const [id, answer] of Object.entries(listeningAnswers)) {
      const task = lessonA110.listening.questions.find((candidate) => candidate.id === id);
      if (!task) throw new Error(`A1-10 listening ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(answer);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts every published transformation variant and rejects a near miss", () => {
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

  it("preserves German capitalization where an exercise explicitly assesses it", () => {
    expect(evaluateExercise(findTask("e18"), ["unsere", "ihr"]).isCorrect).toBe(false);
    expect(evaluateExercise(findTask("w1"), "ich bin Ingenieur.").isCorrect).toBe(false);
    expect(
      evaluateExercise(findTask("e10"), "ich habe keinen bruder, aber eine schwester.").isCorrect,
    ).toBe(false);
    expect(
      evaluateExercise(findTask("w3"), "Meine Schwester arbeitet als lehrerin.").isCorrect,
    ).toBe(false);
  });

  it("audits theory, reading, dialogues, pronunciation, cards, mediation, and interaction", () => {
    expect(lessonA110.lernziele).toHaveLength(9);
    expect(lessonA110.theory.map((block) => block.id)).toEqual(["t1", "t2", "t3", "t4"]);
    for (const block of lessonA110.theory) {
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
        for (const cell of row.cells) expect(cell.trim()).toBeTruthy();
      }
      for (const example of block.examples) {
        expect(example.de.trim()).toBeTruthy();
        expect(example.ar.trim()).toBeTruthy();
      }
      for (const mistake of block.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim()).toBeTruthy();
        expect(["error", "contextual-alternative", "pedagogical-simplification", "unverified-claim"]).toContain(
          mistake.classification,
        );
      }
    }

    const professionTheory = lessonA110.theory.find((block) => block.id === "t1");
    expect(professionTheory?.explanationAr).toContain("Ich bin ein Lehrer");
    expect(professionTheory?.explanationAr).toContain("لا نحسمه هنا بصحة أو خطأ مطلقين");
    expect(professionTheory?.commonMistakes.some((mistake) => mistake.wrong === "Ich bin ein Lehrer.")).toBe(
      false,
    );

    const negationTheory = lessonA110.theory.find((block) => block.id === "t2");
    expect(
      negationTheory?.commonMistakes.find((mistake) => mistake.wrong === "Ich arbeite nicht am Samstag.")
        ?.classification,
    ).toBe("contextual-alternative");
    expect(
      negationTheory?.commonMistakes.find((mistake) => mistake.wrong === "Ich kenne keinen Chef.")
        ?.classification,
    ).toBe("contextual-alternative");

    const workplaceTheory = lessonA110.theory.find((block) => block.id === "t3");
    expect(workplaceTheory?.explanationAr).toContain("in einer Firma");
    expect(workplaceTheory?.whyAr).toContain("Grammis");
    expect(
      workplaceTheory?.commonMistakes.find((mistake) => mistake.wrong === "Ich arbeite bei einer Firma.")
        ?.classification,
    ).toBe("contextual-alternative");

    const possessiveTheory = lessonA110.theory.find((block) => block.id === "t4");
    expect(
      possessiveTheory?.commonMistakes.find((mistake) => mistake.wrong === "Das ist euere Firma.")
        ?.classification,
    ).toBe("contextual-alternative");

    const readingText = reading();
    expect(readingText.paragraphs).toHaveLength(6);
    expect(readingText.paragraphsAr).toHaveLength(readingText.paragraphs.length);
    for (const [index, paragraph] of readingText.paragraphs.entries()) {
      expect(paragraph.trim(), `reading paragraph ${index + 1}`).toBeTruthy();
      expect(readingText.paragraphsAr[index]?.trim(), `Arabic paragraph ${index + 1}`).toBeTruthy();
    }
    expect(readingText.glossary.length).toBeGreaterThan(0);
    expect(readingText.glossary.some((entry) => entry.de === "die Solartechnik")).toBe(true);
    for (const entry of readingText.glossary) {
      expect(entry.de.trim()).toBeTruthy();
      expect(entry.ar.trim()).toBeTruthy();
      expect(entry.noteAr?.trim()).toBeTruthy();
    }
    expect(readingText.redemittel?.length).toBeGreaterThan(0);
    for (const phrase of readingText.redemittel ?? []) {
      expect(phrase.de.trim()).toBeTruthy();
      expect(phrase.ar.trim()).toBeTruthy();
    }
    for (const question of readingText.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(readingText.paragraphs.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }

    expect(lessonA110.listening.items).toHaveLength(2);
    expect(lessonA110.listening.items.map((item) => item.lines.length)).toEqual([6, 4]);
    const listeningIds = new Set(lessonA110.listening.items.map((item) => item.id));
    for (const item of lessonA110.listening.items) {
      expect(item.title.trim()).toBeTruthy();
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }
    for (const question of lessonA110.listening.questions) {
      expect(listeningIds.has(question.itemId)).toBe(true);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }

    expect(lessonA110.pronunciation.items).toHaveLength(7);
    expect(lessonA110.pronunciation.shadowing).toHaveLength(5);
    expect(lessonA110.pronunciation.tip.trim()).toBeTruthy();
    for (const item of lessonA110.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const item of lessonA110.pronunciation.shadowing ?? []) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.tip?.trim()).toBeTruthy();
    }

    expect(lessonA110.flashcards).toHaveLength(24);
    expect(new Set(lessonA110.flashcards.map((card) => card.id)).size).toBe(24);
    for (const card of lessonA110.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }

    expect(lessonA110.mediation).toHaveLength(1);
    const mediation = lessonA110.mediation?.[0];
    expect(mediation?.sourceDe?.trim()).toBeTruthy();
    expect(mediation?.taskAr.trim()).toBeTruthy();
    expect(mediation?.modelAnswerAr?.trim()).toBeTruthy();
    expect(mediation?.keyPointsAr.length).toBeGreaterThanOrEqual(3);

    expect(lessonA110.interaction).toHaveLength(1);
    const interaction = lessonA110.interaction?.[0];
    expect(interaction?.scenarioAr.trim()).toBeTruthy();
    expect(interaction?.scenarioDe?.trim()).toBeTruthy();
    expect(interaction?.strategyAr).toContain("لا يثبت أداءً شفهياً");
    expect(interaction?.rounds).toHaveLength(2);
    for (const round of interaction?.rounds ?? []) {
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

    expect(lessonA110.einfuehrung.motivatingQuestionAr.trim()).toBeTruthy();
    expect(lessonA110.einfuehrung.contextAr.trim()).toBeTruthy();
    expect(lessonA110.einfuehrung.activateVocabulary?.length).toBeGreaterThan(0);
    expect(lessonA110.fehlerUndTipps.mistakes).toHaveLength(3);
  });

  it("maps every stated goal to assessed tasks; opening or viewing alone is not evidence", () => {
    const taskIds = validTaskIds();
    expect(lessonA110.lernziele).toHaveLength(9);

    for (const goal of lessonA110.lernziele) {
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

      expect(getGoalEvidenceStatus(goal, lessonA110.id, [])).toBe("pending");
      const correctResults = evidence.exerciseIds.map((id) => goalEvent(goal.id, id, true));
      expect(getGoalEvidenceStatus(goal, lessonA110.id, correctResults.slice(0, -1))).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA110.id, correctResults)).toBe("evidenced");

      const lastExercise = evidence.exerciseIds[evidence.exerciseIds.length - 1];
      const oneIncorrect = [
        ...correctResults.slice(0, -1),
        goalEvent(goal.id, lastExercise, false),
      ];
      expect(getGoalEvidenceStatus(goal, lessonA110.id, oneIncorrect)).toBe("pending");
      expect(
        getGoalEvidenceStatus(
          goal,
          lessonA110.id,
          correctResults.map((event) => ({...event, lessonId: "a1-09"})),
        ),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(
          goal,
          lessonA110.id,
          correctResults.map((event) => ({
            ...event,
            taskId: `unmapped:${lessonA110.id}:${event.type === "exercise-result" ? event.exerciseId : "unknown"}`,
          })),
        ),
      ).toBe("pending");
    }

    const nonPerformanceEvents: AnalyticsEvent[] = [
      {type: "lesson-view", ts: 1, lessonId: lessonA110.id},
      {type: "lesson-completed", ts: 2, lessonId: lessonA110.id, unitId: lessonA110.unitId},
      {
        type: "pronunciation-score",
        ts: 3,
        target: "Ich bin Lehrer.",
        score: 100,
        lessonId: lessonA110.id,
        taskId: "pronunciation:a1-10:p1",
      },
      {
        type: "self-pronunciation-rating",
        ts: 4,
        target: "Ich bin Lehrer.",
        rating: 1,
        lessonId: lessonA110.id,
        taskId: "pronunciation:a1-10:p1",
      },
    ];
    for (const goal of lessonA110.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA110.id, nonPerformanceEvents)).toBe("pending");
    }
    expect(lessonA110.reading?.discussionAr).toContain("لا يسجل النظام دليلاً على أداء الكلام");
  });

  it("keeps A1-10 in the lesson index and exposes no lesson-duration field", () => {
    const meta = getLessonMeta(lessonA110.id);
    expect(meta?.titleDe).toBe("Arbeit und Berufe");
    expect(meta?.summary).toContain("الجمل المهنية بـsein وarbeiten als");
    expect(hasDurationField(lessonA110)).toBe(false);
    expect(LESSON_META.every((item) => !hasDurationField(item))).toBe(true);
  });
});
