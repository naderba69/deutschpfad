/**
 * a2-10 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * (مفاتيح الاختيار من متعدّد وخياراته · مفاتيح الفراغات وبدائلها · جملُ تصحيح الخطأ ·
 *  جدولُ الأدلة · جمعُ التمارين · إحضارُ تمرين · قائمةُ معرّفاته · الهدف · حدثُ الهدف)
 * فُصلت من a2-10.test.ts في الدفعة 102 (سقف الحجم). القيم والأجسام منقولة حرفياً.
 */

import { lessonA210 } from "@/data/lessons/a2/a2-10";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "lerne",
  r2: "dass",
  e1: "weil",
  e2: "ob",
  e8: "يجتاز الامتحان",
  m1: "Wenn",
  m2: "meinem",
  rq1: "Montags und mittwochs am Abend.",
  rq2: "Weil sie später an einer Universität studieren möchte.",
  rq3: "Die Öffnungszeiten der Bibliothek.",
  rq4: "Weil sie sich gut vorbereitet hat.",
  q1: "Weil er später in Deutschland studieren möchte.",
  q2: "Wenn er am Morgen Zeit hat.",
  q3: "Ob die Prüfung schwierig wird.",
  q4: "Ein bisschen nervös.",
  q5: "Um halb sieben.",
  q6: "Um sechs Uhr.",
  q7: "In einer kleinen Gruppe, weil wir zusammen sprechen können.",
  q8: "In der Bibliothek",
  q9: "Ob die Bibliothek am Samstag bis sechs geöffnet ist",
  q10: "Dass sie zusammen lernen können",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["lerne", "lernst", "lernt", "lernen"],
  r2: ["dass", "weil", "wenn", "ob"],
  e1: ["weil", "wenn", "ob", "dass"],
  e2: ["ob", "weil", "wenn", "dass"],
  e8: ["يجتاز الامتحان", "يرسب في الامتحان", "يستعد للامتحان", "يؤجل الامتحان"],
  m1: ["Wenn", "Weil", "Ob", "Dass"],
  m2: ["meinem", "meinen", "mein", "meine"],
  rq1: ["Montags und mittwochs am Abend.", "Jeden Morgen früh um sechs.", "Nur am Freitag am Nachmittag.", "Am Wochenende und an Feiertagen."],
  rq2: [
    "Weil sie später an einer Universität studieren möchte.",
    "Weil ihr Freund in Deutschland wohnt.",
    "Weil ihre Prüfung schon vorbei ist.",
    "Weil sie eine Sprachschule eröffnen möchte.",
  ],
  rq3: [
    "Die Öffnungszeiten der Bibliothek.",
    "Den Termin der Prüfung.",
    "Die Kursgebühr.",
    "Den Stundenplan der Sprachschule.",
  ],
  rq4: [
    "Weil sie sich gut vorbereitet hat.",
    "Weil die Prüfung abgesagt wurde.",
    "Weil sie keine Prüfung hat.",
    "Weil Sami die Prüfung für sie geschrieben hat.",
  ],
  q1: [
    "Weil er später in Deutschland studieren möchte.",
    "Weil er morgen eine Prüfung hat.",
    "Weil Anna in Deutschland wohnt.",
    "Weil er neue Wörter unterrichten möchte.",
  ],
  q2: [
    "Wenn er am Morgen Zeit hat.",
    "Jeden Abend nach dem Unterricht.",
    "Wenn Anna ihn anruft.",
    "Nur am Wochenende.",
  ],
  q3: [
    "Ob die Prüfung schwierig wird.",
    "Wann der Unterricht beginnt.",
    "Ob Mona Deutsch lernt.",
    "Wie viele Wörter er lernen muss.",
  ],
  q4: ["Ein bisschen nervös.", "Ganz ruhig und sicher.", "Wütend auf Mona.", "Müde und krank."],
  q5: ["Um sechs Uhr.", "Um halb sieben.", "Um acht Uhr.", "Am Morgen."],
  q6: ["Um halb sieben.", "Um sechs Uhr.", "Am Abend um acht.", "Nach dem Kurs."],
  q7: [
    "Allein, weil Amir zu Hause seine Ruhe hat.",
    "Mit Lisa, weil sie jeden Morgen zusammen lernt.",
    "In einem großen Kurs, weil viele Lehrer helfen.",
    "In einer kleinen Gruppe, weil wir zusammen sprechen können.",
  ],
  q8: ["In der Bibliothek", "Zu Hause", "Im Deutschkurs", "In einem Café"],
  q9: ["Ob die Bibliothek am Samstag bis sechs geöffnet ist", "Ob Nora die Prüfung am Samstag schreibt", "Ob der Kurs in der Bibliothek stattfindet", "Ob die Webseite einen neuen Deutschkurs zeigt"],
  q10: ["Dass sie zusammen lernen können", "Dass sie einen Kurs besuchen", "Dass sie am Samstag Prüfung schreiben", "Dass sie gemeinsam Bücher kaufen"],
};

export const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["mein"],
  e6: ["meinen", "meiner"],
  e13: ["seiner", "ihrem"],
  w2: ["weil", "Wenn", "ob"],
  m5: ["weil", "Wenn", "ob"],
};

export const expectedFillBlankOptions: Record<string, string[][]> = {
  r3: [["mein", "meine", "meinen"]],
  e6: [
    ["meinen", "meinem", "meine"],
    ["meiner", "meinen", "meine"],
  ],
  w2: [
    ["weil", "wenn", "ob"],
    ["Wenn", "Weil", "Ob"],
    ["ob", "weil", "wenn"],
  ],
  m5: [
    ["weil", "wenn", "ob"],
    ["Wenn", "Weil", "Ob"],
    ["ob", "weil", "wenn"],
  ],
  e13: [
    ["seiner", "seinem", "seine"],
    ["ihrem", "ihrer", "ihren"],
  ],
};

export const expectedErrorCorrections: Record<
  string,
  { sentence: string; wrongWord: string; correctWord: string; options: string[] }
> = {
  e5: {
    sentence: "Ich sehe mein Bruder.",
    wrongWord: "mein",
    correctWord: "meinen",
    options: ["meinen", "meinem", "meine", "mein"],
  },
  e9: {
    sentence: "Wenn es regnet, ich bleibe zu Hause.",
    wrongWord: "ich bleibe",
    correctWord: "bleibe ich",
    options: ["bleibe ich", "ich bleibe", "bleiben ich", "bleibst ich"],
  },
  e12: {
    sentence: "Ahmed hilft seinem Schwester.",
    wrongWord: "seinem",
    correctWord: "seiner",
    options: ["seiner", "seinem", "seine", "seinen"],
  },
  m4: {
    sentence: "Ich sehe meine Vater.",
    wrongWord: "meine",
    correctWord: "meinen",
    options: ["meinen", "meinem", "mein", "meiner"],
  },
};

export const expectedEvidence = {
  z1: {
    exerciseIds: ["e1", "e2", "e4", "e7", "e9", "m1", "m3", "m5"],
    taskIds: [
      "practice:a2-10:e1",
      "practice:a2-10:e2",
      "practice:a2-10:e4",
      "practice:a2-10:e7",
      "practice:a2-10:e9",
      "mini-test:a2-10:m1",
      "flow-mini-test:a2-10:m1",
      "mini-test:a2-10:m3",
      "mini-test:a2-10:m5",
    ],
  },
  z2: {
    exerciseIds: ["e5", "e6", "m2", "m4"],
    taskIds: [
      "practice:a2-10:e5",
      "practice:a2-10:e6",
      "mini-test:a2-10:m2",
      "flow-mini-test:a2-10:m2",
      "mini-test:a2-10:m4",
    ],
  },
  "z-reading": {
    exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
    taskIds: [
      "reading:read-a2-10:rq1",
      "reading:read-a2-10:rq2",
      "reading:read-a2-10:rq3",
      "reading:read-a2-10:rq4",
    ],
  },
  "z-listening": {
    exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"],
    taskIds: [
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
      "listening:l3:q5",
      "listening:l3:q6",
      "listening:l3:q7",
      "listening:l4:q8",
      "listening:l4:q9",
      "listening:l4:q10",
    ],
  },
  "z-writing": {
    exerciseIds: ["w1", "w2", "w3"],
    taskIds: ["writing:a2-10:w1", "writing:a2-10:w2", "writing:a2-10:w3"],
  },
} as const;

export function allTasks(): Exercise[] {
  const reading = lessonA210.reading;
  if (!reading) throw new Error("A2-10 must keep the reviewed reading text");
  return [
    ...(lessonA210.review ?? []),
    ...lessonA210.practiceBank,
    ...lessonA210.miniTest,
    ...lessonA210.writing,
    ...reading.questions,
    ...lessonA210.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-10 task ${id} is missing`);
  return value;
}

export function taskIds(values: { id: string }[]): string[] {
  return values.map((value) => value.id).sort();
}

export function goal(id: string) {
  const value = lessonA210.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`A2-10 goal ${id} is missing`);
  return value;
}

export function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
  taskIdOverride?: string,
  lessonId = lessonA210.id,
): AnalyticsEvent {
  const acceptedTaskId = goal(goalId).evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-10 ${goalId} has no taskId for ${exerciseId}`);
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
