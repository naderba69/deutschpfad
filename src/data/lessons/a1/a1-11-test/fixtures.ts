/**
 * a1-11 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a1-11.test.ts في الدفعة 110 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { expect } from "vitest";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";
import { lessonA111 } from "../a1-11";

export const practiceAnswers: Record<string, unknown> = {
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

export const miniTestAnswers: Record<string, unknown> = {
  m1: "zur",
  m2: "geradeaus",
  m3: ["Wo", "ist", "der", "Bahnhof", "?"],
  m4: "in die Stadt",
  m5: ["nach", "zur", "ins"],
};

export const writingAnswers: Record<string, unknown> = {
  w1: "Ich gehe zur Apotheke.",
  w2: ["nach", "zum", "zur", "ins"],
  w3: "Die Apotheke ist um die Ecke.",
};

export const readingAnswers: Record<string, string> = {
  rq1: "Mit der U-Bahn",
  rq2: "links",
  rq3: "Gegenüber der Apotheke",
  rq4: "Zu Fuß kommt sie eher an; der Bus fährt erst später.",
  rq5: "Nichts zu danken.",
};

export const listeningAnswers: Record<string, string> = {
  q1: "neben dem Park",
  q2: "in die Stadt",
  q3: "um acht Uhr",
  q4: "zum Museum",
  q5: "vor der Apotheke",
  q6: "an der dritten Haltestelle",
};

export function reading() {
  const value = lessonA111.reading;
  if (!value) throw new Error("A1-11 reading passage is required");
  return value;
}

export function allTasks(): Exercise[] {
  return [
    ...lessonA111.practiceBank,
    ...lessonA111.miniTest,
    ...lessonA111.writing,
    ...reading().questions,
    ...lessonA111.listening.questions,
  ];
}

export function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-11 task ${id} is missing`);
  return task;
}

export function expectListedAlternativesRejected(task: Exercise) {
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

export function validTaskIds(): Set<string> {
  const renderedPractice = lessonA111.practiceBank.flatMap((task, index) => [
    `practice:${lessonA111.id}:${task.id}`,
    ...(index < 4 ? [`practice:${lessonA111.id}:${task.id}`] : []),
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

export function goalEvent(
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

export function allCorrectGoalEvents(goalId: string): AnalyticsEvent[] {
  const goal = lessonA111.lernziele.find(
    (candidate) => candidate.id === goalId,
  );
  if (!goal?.evidence)
    throw new Error(`A1-11 ${goalId} has no evidence mapping`);
  return goal.evidence.exerciseIds.map((exerciseId) =>
    goalEvent(goalId, exerciseId, true),
  );
}

export function hasDurationField(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasDurationField);
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(
    ([key, nested]) =>
      /^(duration|durationMinutes|lessonMinutes|minutes)$/i.test(key) ||
      hasDurationField(nested),
  );
}
