/**
 * a1-12 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a1-12.test.ts في الدفعة 106 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { expect } from "vitest";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";
import { lessonA112 } from "../a1-12";

export const reviewAnswers: Record<string, unknown> = {
  r1: "Zwei Euro fünfzig.",
  r2: ["bin kein", "kein"],
  r3: "zum Bahnhof",
};

export const practiceAnswers: Record<string, unknown> = {
  e1: "Es",
  e2: "wird",
  e3: [
    { left: "die Sonne", right: "الشمس" },
    { left: "der Regen", right: "المطر" },
    { left: "der Schnee", right: "الثلج" },
    { left: "der Wind", right: "الريح" },
  ],
  e4: ["Es", "regnet", "heute", "."],
  e5: "Mir ist",
  e6: ["ist", "wird"],
  e7: "Im Sommer wird es warm.",
  e8: "تثلج",
  e9: "Das",
  e10: "Die Sonne scheint und der Wind weht.",
  e11: ["Im", "Am", "Um"],
  e12: "Am",
  e13: "Morgen regnet es.",
  e14: ["Im", "Sommer", "ist", "es", "sehr", "heiß", "."],
  e15: "Im Winter ist es in Deutschland kalt.",
  e16: "Mir ist",
  e17: "regnet",
  e18: "wirst",
  e19: ["aber", "denn", "oder", "und"],
  e20: "die Sonne scheint",
  e21: "Im … am",
  e22: "In",
  e23: [
    "Ich",
    "nehme",
    "den",
    "Schirm",
    "mit",
    ",",
    "denn",
    "es",
    "regnet",
    ".",
  ],
  e24: "Es wird kalt.",
  e25: [
    { left: "es ist + صفة", right: "Es ist neblig." },
    { left: "فعل طقس مع es صوريّ", right: "Es schneit." },
    { left: "اسم + فعل", right: "Der Wind weht." },
    { left: "إحساس شخصيّ", right: "Mir ist kalt." },
    { left: "تحوّل", right: "Es wird kälter." },
  ],
  e26: ["seit", "in"],
};

export const miniTestAnswers: Record<string, unknown> = {
  m1: "Es",
  m2: "werden",
  m3: ["Im", "Winter", "wird", "es", "kalt", "."],
  m4: "Es wird kalt.",
  m5: ["werde", "wird", "werdet"],
};

export const writingAnswers: Record<string, unknown> = {
  w1: "Heute ist es sonnig und warm.",
  w2: ["werde", "wirst", "wird", "werden"],
  w3: "Im Winter wird es kalt.",
};

export const readingAnswers: Record<string, string> = {
  rq1: "Seit einem Jahr",
  rq2: "Er ist schön, aber kurz.",
  rq3: "Denn das Wetter ändert sich schnell.",
  rq4: "Minus fünf Grad",
  rq5: "Den Frühling",
};

export const listeningAnswers: Record<string, string> = {
  q1: "kalt und windig",
  q2: "Es regnet.",
  q3: "oft sehr heiß und sonnig",
};

export function reading() {
  const value = lessonA112.reading;
  if (!value) throw new Error("A1-12 reading passage is required");
  return value;
}

export function allTasks(): Exercise[] {
  return [
    ...(lessonA112.review ?? []),
    ...lessonA112.practiceBank,
    ...lessonA112.miniTest,
    ...lessonA112.writing,
    ...reading().questions,
    ...lessonA112.listening.questions,
  ];
}

export function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-12 task ${id} is missing`);
  return task;
}

export function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    expect(new Set(task.options.map((option) => option.trim().toLowerCase())).size).toBe(
      task.options.length,
    );
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(
          evaluateExercise(task, option).isCorrect,
          `${task.id} option ${index}: ${option}`,
        ).toBe(false);
      }
    });
  } else if (task.type === "error-correction") {
    expect(task.isAlreadyCorrect).not.toBe(true);
    expect(task.wrongSentence).toContain(task.wrongWord);
    expect(task.options.filter((option) => option === task.correctWord)).toHaveLength(1);
    for (const option of task.options) {
      if (option !== task.correctWord) {
        expect(
          evaluateExercise(task, option).isCorrect,
          `${task.id} correction option: ${option}`,
        ).toBe(false);
      }
    }
    expect(
      evaluateExercise(task, NO_ERROR_OPTION).isCorrect,
      `${task.id} no-error option`,
    ).toBe(false);
  } else if (task.type === "fill-blank") {
    const answers = task.blanks.map((blank) => blank.correct);
    task.blanks.forEach((blank, index) => {
      expect(blank.options).toContain(blank.correct);
      expect(new Set(blank.options).size).toBe(blank.options?.length);
      for (const option of blank.options ?? []) {
        if (option !== blank.correct) {
          const nearMiss = [...answers];
          nearMiss[index] = option;
          expect(
            evaluateExercise(task, nearMiss).isCorrect,
            `${task.id} blank ${index} option: ${option}`,
          ).toBe(false);
        }
      }
    });
  } else if (task.type === "word-ordering") {
    const canonicalTokens = task.correctSentence
      .replace(/[.!?]+$/, "")
      .split(/\s+/);
    canonicalTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
    expect(
      evaluateExercise(task, canonicalTokens).isCorrect,
      `${task.id} canonical ordering`,
    ).toBe(true);

    for (const sentence of task.acceptedSentences ?? []) {
      const orderedTokens = sentence.replace(/[.!?]+$/, "").split(/\s+/);
      orderedTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
      expect(
        evaluateExercise(task, orderedTokens).isCorrect,
        `${task.id} accepted order: ${sentence}`,
      ).toBe(true);
    }

    const wrongOrder = [...canonicalTokens];
    [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
    expect(
      evaluateExercise(task, wrongOrder).isCorrect,
      `${task.id} swapped first two words`,
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
    for (const answer of task.acceptedAnswers) {
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${task.id} accepted transformation: ${answer}`,
      ).toBe(true);
    }
    expect(
      evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      `${task.id} rejected transformation`,
    ).toBe(false);
  }
}

export function validTaskIds(): Set<string> {
  const practiceTaskIds = lessonA112.practiceBank.flatMap((task, index) => [
    `practice:${lessonA112.id}:${task.id}`,
    ...(index < 4 ? [`flow-practice:${lessonA112.id}:${task.id}`] : []),
  ]);
  return new Set([
    ...practiceTaskIds,
    ...lessonA112.miniTest.map((task) => `mini-test:${lessonA112.id}:${task.id}`),
    ...lessonA112.writing.map((task) => `writing:${lessonA112.id}:${task.id}`),
    ...reading().questions.map((task) => `reading:${reading().id}:${task.id}`),
    ...lessonA112.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
  ]);
}

export function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA112.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-12 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-12 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA112.id,
    taskId,
  };
}

export function allCorrectGoalEvents(goalId: string): AnalyticsEvent[] {
  const goal = lessonA112.lernziele.find((candidate) => candidate.id === goalId);
  if (!goal?.evidence) throw new Error(`A1-12 ${goalId} has no evidence mapping`);
  return goal.evidence.exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId, true));
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
