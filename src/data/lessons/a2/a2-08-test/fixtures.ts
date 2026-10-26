/**
 * a2-08 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a2-08.test.ts في الدفعة 108 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { lessonA208 } from "@/data/lessons/a2/a2-08";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "fünf",
  r2: "nach",
  e1: "schneller",
  e2: "am schnellsten",
  e8: "ذهاب وعودة",
  e11: "Um 11:00 Uhr.",
  e13: "wie",
  e14: "Die Busfahrt ist fünf Euro billiger als die Zugfahrt.",
  m1: "schwerer",
  m2: "am besten",
  rq1: "Der Zug ist schneller, und sie möchten früh am Strand sein.",
  rq2: "Fünf Euro.",
  rq3: "In Bremen.",
  rq4: "Mit dem letzten Bus.",
  rq5: "Sie wollen Fahrpläne vergleichen und dann gemeinsam entscheiden.",
  q1: "Eine Fahrkarte hin und zurück nach München.",
  q2: "Um 10:25 Uhr.",
  q3: "Das Motorrad.",
  q4: "Von Gleis fünf.",
  q5: "In Bonn.",
  q6: "Um 15:05 Uhr.",
  q7: "Um 15:15 Uhr.",
  q8: "Am Schalter",
  q9: "Links neben dem Fahrkartenautomaten",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["fünf", "vier", "sechs", "drei"],
  r2: ["nach", "zu", "in", "aus"],
  e1: ["schneller", "schnell", "am schnellsten", "schnellen"],
  e2: ["am schnellsten", "schneller", "schnell", "schnellste"],
  e8: ["ذهاب وعودة", "ذهاب فقط", "المسار الثالث", "موعد الوصول"],
  e11: ["Um 11:00 Uhr.", "Um 08:15 Uhr.", "Um 10:30 Uhr.", "Um 11:20 Uhr."],
  e13: ["wie", "als", "denn", "dann"],
  e14: [
    "Die Busfahrt ist fünf Euro billiger als die Zugfahrt.",
    "Die Busfahrt ist fünf Euro teurer als die Zugfahrt.",
    "Beide Fahrten kosten gleich viel.",
    "Die Zugfahrt ist zwölf Euro billiger als die Busfahrt.",
  ],
  m1: ["schwerer", "schwer", "am schwersten", "schwerste"],
  m2: ["am besten", "besser", "gut", "beste"],
  rq1: [
    "Der Zug ist schneller, und sie möchten früh am Strand sein.",
    "Die Zugfahrkarte ist für alle Studenten kostenlos.",
    "Der Bus fährt am ganzen Wochenende überhaupt nicht.",
    "Sie möchten lieber in Bremen bleiben und ausruhen.",
  ],
  rq2: ["Fünf Euro.", "Zwei Euro.", "Zehn Euro.", "Zwanzig Euro."],
  rq3: ["In Bremen.", "In Berlin.", "In Hamburg.", "In München."],
  rq4: ["Mit dem letzten Bus.", "Mit dem ersten Zug.", "Mit einem Taxi.", "Sie bleiben am Meer."],
  rq5: [
    "Sie wollen Fahrpläne vergleichen und dann gemeinsam entscheiden.",
    "Sie wollen sofort und ohne Nachdenken nur den Zug buchen.",
    "Sie wollen sofort buchen, ohne die Fahrpläne anzusehen.",
    "Sie wollen lieber mit dem Flugzeug in den Süden reisen.",
  ],
  q1: [
    "Eine Fahrkarte hin und zurück nach München.",
    "Eine einfache Fahrkarte nach München.",
    "Eine einfache Fahrkarte nach Berlin.",
    "Eine Fahrkarte hin und zurück nach Hamburg.",
  ],
  q2: ["Um 10:25 Uhr.", "Um 10:05 Uhr.", "Um 11:25 Uhr.", "Um 9:25 Uhr."],
  q3: ["Das Motorrad.", "Die U-Bahn.", "Das Fahrrad.", "Der Bus."],
  q4: ["Von Gleis drei.", "Von Gleis fünf.", "Von Gleis sieben.", "Von Gleis zwei."],
  q5: ["In Bonn.", "In Berlin.", "In Bremen.", "In Köln."],
  q6: ["Um 14:05 Uhr.", "Um 15:05 Uhr.", "Um 15:50 Uhr.", "Um 16:05 Uhr."],
  q7: ["Um 15:15 Uhr.", "Um 15:05 Uhr.", "Um 14:15 Uhr.", "Um 16:15 Uhr."],
  q8: ["Am Schalter", "Am Fahrkartenautomaten", "Auf Gleis fünf", "Im Zug nach Köln"],
  q9: ["Links neben dem Fahrkartenautomaten", "Rechts neben dem Eingang", "Gegenüber von Gleis drei", "Hinter dem Informationsbüro"],
};

export function allTasks(): Exercise[] {
  const reading = lessonA208.reading;
  if (!reading) throw new Error("A2-08 must keep its reviewed reading text");
  return [
    ...(lessonA208.review ?? []),
    ...lessonA208.practiceBank,
    ...lessonA208.miniTest,
    ...lessonA208.writing,
    ...reading.questions,
    ...lessonA208.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-08 task ${id} is missing`);
  return value;
}

export function ids(values: { id: string }[]): string[] {
  return values.map((value) => value.id).sort();
}

export function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
  taskIdOverride?: string,
  lessonId = lessonA208.id,
): AnalyticsEvent {
  const goal = lessonA208.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-08 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

export const expectedEvidence = {
  z1: {
    exerciseIds: ["e11", "e14", "q1", "q2", "q4", "q5", "q6", "q7", "q8", "q9"],
    taskIds: [
      "practice:a2-08:e11",
      "practice:a2-08:e14",
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l3:q4",
      "listening:l3:q5",
      "listening:l3:q6",
      "listening:l4:q7",
      "listening:l4:q8",
      "listening:l4:q9",
    ],
  },
  "z-reading": {
    exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
    taskIds: [
      "reading:read-a2-08:rq1",
      "reading:read-a2-08:rq2",
      "reading:read-a2-08:rq3",
      "reading:read-a2-08:rq4",
      "reading:read-a2-08:rq5",
    ],
  },
  z2: {
    exerciseIds: ["e1", "e4", "e5", "e12", "e13", "m1", "m3", "w1", "w2"],
    taskIds: [
      "practice:a2-08:e1",
      "practice:a2-08:e4",
      "practice:a2-08:e5",
      "practice:a2-08:e12",
      "practice:a2-08:e13",
      "mini-test:a2-08:m1",
      "flow-mini-test:a2-08:m1",
      "mini-test:a2-08:m3",
      "writing:a2-08:w1",
      "writing:a2-08:w2",
    ],
  },
  z3: {
    exerciseIds: ["e2", "e7", "m2", "q3"],
    taskIds: [
      "practice:a2-08:e2",
      "practice:a2-08:e7",
      "mini-test:a2-08:m2",
      "flow-mini-test:a2-08:m2",
      "listening:l2:q3",
    ],
  },
  z4: {
    exerciseIds: ["e6", "m2", "m5"],
    taskIds: [
      "practice:a2-08:e6",
      "mini-test:a2-08:m2",
      "flow-mini-test:a2-08:m2",
      "mini-test:a2-08:m5",
    ],
  },
  "z-travel": {
    exerciseIds: ["e3", "e8", "e10", "w4"],
    taskIds: [
      "practice:a2-08:e3",
      "practice:a2-08:e8",
      "practice:a2-08:e10",
      "writing:a2-08:w4",
    ],
  },
  "z-writing": {
    exerciseIds: ["w1", "w2", "w3", "w4"],
    taskIds: [
      "writing:a2-08:w1",
      "writing:a2-08:w2",
      "writing:a2-08:w3",
      "writing:a2-08:w4",
    ],
  },
} as const;
