/**
 * a2-11 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a2-11.test.ts في الدفعة 104 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { lessonA211 } from "@/data/lessons/a2/a2-11";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "dich",
  r2: "إلى مكتب البريد",
  e1: "mich",
  e2: "sich",
  e8: "يقدم شكوى",
  m1: "uns",
  m2: "euch",
  e14: "mir",
  q1: "die Haare schneiden lassen",
  q2: "Das Handy funktioniert nicht",
  q3: "Wir reparieren es oder geben Ihnen ein neues",
  q4: "tunesisch",
  q5: "Nach Hamburg.",
  q6: "Zwei Tage.",
  q7: "Den Beleg.",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["dich", "dir", "mich", "mir"],
  r2: ["إلى مكتب البريد", "إلى البنك", "إلى المحطة", "إلى الصيدلية"],
  e1: ["mich", "dich", "sich", "mir"],
  e2: ["sich", "mich", "dich", "uns"],
  e8: ["يقدم شكوى", "يستعجل الأمر", "يسجل اسمه", "يغضب كثيراً"],
  m1: ["uns", "euch", "sich", "mich"],
  m2: ["euch", "uns", "sich", "dich"],
  e14: ["mir", "mich", "dich", "sich"],
  q1: ["die Haare schneiden lassen", "einen Termin beim Friseur absagen", "sich beschweren und gehen", "ein neues Handy kaufen"],
  q2: ["Das Handy funktioniert nicht", "Die Haare sind zu kurz", "Der Termin ist zu spät", "Die Post ist zu teuer"],
  q3: ["Wir reparieren es oder geben Ihnen ein neues", "Wir können Ihnen dabei leider nicht helfen", "Das ist leider nicht unser Problem.", "Kommen Sie bitte morgen noch einmal."],
  q4: ["tunesisch", "deutsch", "französisch", "nichts"],
  q5: ["Nach Hamburg.", "Nach Berlin.", "Nach Bremen.", "Nach Bonn."],
  q6: ["Einen Tag.", "Zwei Tage.", "Drei Tage.", "Eine Woche."],
  q7: ["Den Beleg.", "Das Paket.", "Die Verpackung.", "Die Briefmarke."],
};

export const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["einen"], options: [["einen", "ein", "eine"]] },
  e6: {
    correct: ["mich", "sich", "uns"],
    options: [ ["mich", "dich", "sich"], ["mich", "dich", "sich"], ["uns", "euch", "sich"], ],
  },
  e12: {
    correct: ["aus", "mich"],
    options: [ ["aus", "an", "auf", "mit"], ["mich", "mir", "dich", "sich"], ],
  },
  e13: {
    correct: ["mich", "dich", "uns"],
    options: [ ["mich", "mir", "dich"], ["dich", "dir", "sich"], ["uns", "euch", "sich"], ],
  },
  w2: {
    correct: ["mich", "dich", "sich", "uns", "euch", "sich"],
    options: [
      ["mich", "dich", "sich"],
      ["mich", "dich", "sich"],
      ["mich", "dich", "sich"],
      ["uns", "euch", "sich"],
      ["uns", "euch", "sich"],
      ["sich", "mich", "euch"],
    ],
  },
  m5: {
    correct: ["sich", "uns", "mich"],
    options: [ ["sich", "mich", "uns"], ["sich", "mich", "uns"], ["sich", "mich", "uns"], ],
  },
};

export const expectedErrorCorrections: Record<
  string,
  {
    sentence: string;
    wrongWord: string;
    correctWord: string;
    options: string[];
    alreadyCorrect?: boolean;
  }
> = {
  e5: {
    sentence: "Ich freue mir auf den Urlaub.",
    wrongWord: "mir",
    correctWord: "mich",
    options: ["mich", "dich", "sich", "mir"],
  },
  e9: {
    sentence: "Er freut mich auf das Wochenende.",
    wrongWord: "mich",
    correctWord: "sich",
    options: ["sich", "mich", "dich", "euch"],
  },
  m4: {
    sentence: "Das freut mich.",
    wrongWord: "freut mich",
    correctWord: "freut mich",
    options: ["freut mich", "freuen mich", "freut mir", "freue mich"],
    alreadyCorrect: true,
  },
};

export function allTasks(): Exercise[] {
  return [
    ...(lessonA211.review ?? []),
    ...lessonA211.practiceBank,
    ...lessonA211.miniTest,
    ...lessonA211.writing,
    ...lessonA211.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-11 task ${id} is missing`);
  return value;
}

export function taskOfType<T extends Exercise["type"]>(id: string, type: T): Extract<Exercise, { type: T }> {
  const value = task(id);
  if (value.type !== type) throw new Error(`A2-11 task ${id} is not ${type}`);
  return value as Extract<Exercise, { type: T }>;
}

export function goal(id: string) {
  const value = lessonA211.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`A2-11 goal ${id} is missing`);
  return value;
}

export function goalEvent(
  goalId: string,
  exerciseId: string,
  correct = true,
  taskIdOverride?: string,
  lessonId = lessonA211.id,
): AnalyticsEvent {
  const acceptedTaskId = goal(goalId).evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-11 ${goalId} has no taskId for ${exerciseId}`);
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
