/**
 * a2-03 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a2-03.test.ts في الدفعة 109 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { lessonA203 } from "@/data/lessons/a2/a2-03";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
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

export const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["das", "die", "der"],
  e6: ["schmeckt", "schmeckt", "schmeckt"],
  e11: ["schmeckt", "schmecken", "schmeckt"],
  e18: ["schmeckt", "schmecken"],
  e21: ["Tassen", "Gläser"],
  e22: ["Warmes"],
  m5: ["Speisekarte", "schmeckt", "Rechnung"],
  w2: ["möchte", "möchtest", "möchten", "möchten"],
};

export const expectedOrderingKeys: Record<string, string> = {
  e4: "Ich möchte die Suppe bestellen.",
  e14: "Die Nudeln schmecken mir nicht.",
  e23: "Als Vorspeise hätte ich gern die Suppe",
  m3: "Die Rechnung, bitte!",
};

export const expectedErrorCorrections: Record<string, {wrong: string; correct: string}> = {
  e5: {wrong: "Ich möchte trinken einen Kaffee.", correct: "einen Kaffee trinken"},
  e9: {wrong: "Ich möchte zahlen die Rechnung.", correct: "die Rechnung zahlen"},
  e17: {wrong: "Ich hätte gern ein Salat.", correct: "einen"},
  e19: {wrong: "Das Essen schmeckt ich sehr gut.", correct: "mir"},
  m4: {wrong: "Die Suppe schmeckt gut nicht.", correct: "nicht gut"},
};

export const expectedTransformations: Record<string, string[]> = {
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

export const expectedAcceptedOrderings: Record<string, string[]> = {
  e14: ["Mir schmecken die Nudeln nicht."],
};

export const expectedDictations: Record<string, string> = {
  e10: "Die Suppe schmeckt mir sehr gut.",
  w3: "Ich möchte bitte zahlen.",
};

export function reading() {
  const value = lessonA203.reading;
  if (!value) throw new Error("A2-03 must keep its reviewed reading text");
  return value;
}

export function allTasks(): Exercise[] {
  return [
    ...(lessonA203.review ?? []),
    ...lessonA203.practiceBank,
    ...lessonA203.miniTest,
    ...lessonA203.writing,
    ...reading().questions,
    ...lessonA203.listening.questions,
  ];
}

export function tasksById(): Map<string, Exercise> {
  return new Map(allTasks().map((item) => [item.id, item]));
}

export function task(id: string): Exercise {
  const value = tasksById().get(id);
  if (!value) throw new Error(`A2-03 task ${id} is missing`);
  return value;
}

export function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

export function goalEvent(
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
