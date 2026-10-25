/**
 * a2-09 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * (مفاتيح الاختيار من متعدّد وخياراته · النطق بـIPA · مفاتيح الفراغات وبدائلها ·
 *  جدولُ الأدلة · جمعُ التمارين · إحضارُ تمرين · قائمةُ المعرّفات · حدثُ الهدف)
 * فُصلت من a2-09.test.ts في الدفعة 103 (سقف الحجم). القيم والأجسام منقولة حرفياً.
 */

import { lessonA209 } from "@/data/lessons/a2/a2-09";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "meinem",
  r2: "عيد ميلاد شخص",
  e1: "dem",
  e2: "der",
  e8: "الدعوة",
  e12: "mit",
  m1: "dem",
  m2: "dir",
  rq1: "In den Innenhof.",
  rq2: "Ein großes Fotoalbum.",
  rq3: "Sie helfen beim Aufräumen.",
  rq4: "Ihre Nachbarn haben ihr geholfen.",
  q1: "am Samstag",
  q2: "um sieben Uhr",
  q3: "Karims Mutter",
  q4: "Im Innenhof.",
  q5: "Einen Salat.",
  q6: "Die Getränke.",
  q7: "Ein Kochbuch",
  q8: "Sie probiert neue Rezepte aus",
  q9: "Am Samstag",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["meinem", "meinen", "mein", "meine"],
  r2: ["عيد ميلاد شخص", "رأس السنة الميلادية", "عيد زواج والديها", "عطلة رسمية في البلد"],
  e1: ["dem", "den", "der", "das"],
  e2: ["der", "dem", "den", "die"],
  e8: ["الدعوة", "الهدية", "المناسبة", "التهنئة"],
  e12: ["mit", "für", "ohne", "gegen"],
  m1: ["dem", "den", "der", "die"],
  m2: ["dir", "dich", "mir", "mich"],
  rq1: ["In den Innenhof.", "In ein Café.", "In ihr Büro.", "In eine Turnhalle."],
  rq2: ["Ein großes Fotoalbum.", "Ein Blumenstrauß.", "Ein Kuchen mit Schokolade.", "Ein neues Kleid."],
  rq3: [
    "Sie helfen beim Aufräumen.",
    "Sie beginnen einen Ausflug.",
    "Sie holen noch einen Kuchen.",
    "Sie gehen früher am Nachmittag nach Hause.",
  ],
  rq4: [
    "Ihre Nachbarn haben ihr geholfen.",
    "Die Feier fand nicht statt.",
    "Ihr Bruder hat die Feier abgesagt.",
    "Sie hat alles allein vorbereitet.",
  ],
  q1: ["am Samstag", "am Sonntag", "am Freitag", "am Montag"],
  q2: ["um sieben Uhr", "um acht Uhr", "um sechs Uhr", "um neun Uhr"],
  q3: ["Karims Mutter", "Anna", "Karim", "Monas Mutter"],
  q4: ["Im Innenhof.", "In einem Café.", "In ihrer Wohnung.", "Im Büro."],
  q5: ["Einen Salat.", "Eine Torte.", "Blumen.", "Ein Fotoalbum."],
  q6: ["Die Getränke.", "Einen Salat.", "Die Einladung.", "Das Geschenk."],
  q7: ["Ein Kochbuch", "Eine Torte", "Blumen", "Ein Fotoalbum"],
  q8: ["Sie probiert neue Rezepte aus", "Sie backt jeden Tag eine Torte", "Sie liest die Zeitung im Café", "Sie kauft Blumen für die Gäste"],
  q9: ["Am Samstag", "Am Freitag", "Am Sonntag", "Am Montag"],
};

export const expectedPronunciationIpa: Record<string, string> = {
  "das Geschenk": "[ɡəˈʃɛŋk]",
  feiern: "[ˈfaɪ̯ɐn]",
  "die Torte": "[ˈtɔʁtə]",
  gratulieren: "[ɡʁatuˈliːʁən]",
  "die Einladung": "[ˈaɪ̯nˌlaːdʊŋ]",
  "der Glückwunsch": "[ˈɡlʏkˌvʊnʃ]",
};

export const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["dich"],
  e6: ["dem", "der", "dem"],
  e11: ["gefällt", "gefallen"],
  e13: ["meiner", "zum"],
  e14: ["in den", "im"],
  w2: ["ihr", "mir", "dir"],
  m5: ["mir", "ihr"],
};

export const expectedFillBlankOptions: Record<string, string[][]> = {
  r3: [["dich", "dir", "mich"]],
  e6: [
    ["dem", "der", "den"],
    ["dem", "der", "den"],
    ["dem", "der", "den"],
  ],
  e11: [
    ["gefällt", "gefallen", "gefällst"],
    ["gefallen", "gefällt", "gefällst"],
  ],
  e13: [
    ["meiner", "meine", "meinen"],
    ["zum", "zur", "von"],
  ],
  e14: [
    ["in den", "im", "in der"],
    ["im", "in den", "in der"],
  ],
  w2: [
    ["ihr", "sie", "ihm"],
    ["mir", "mich", "dir"],
    ["dir", "dich", "mir"],
  ],
  m5: [
    ["mir", "mich", "dir"],
    ["ihr", "sie", "ihm"],
  ],
};

export const expectedEvidence = {
  z1: {
    exerciseIds: ["w1", "w4"],
    taskIds: ["writing:a2-09:w1", "writing:a2-09:w4"],
  },
  "z-reading": {
    exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
    taskIds: [
      "reading:read-a2-09:rq1",
      "reading:read-a2-09:rq2",
      "reading:read-a2-09:rq3",
      "reading:read-a2-09:rq4",
    ],
  },
  z2: {
    exerciseIds: ["e1", "e2", "e6", "w2", "m1", "m5"],
    taskIds: [
      "practice:a2-09:e1",
      "practice:a2-09:e2",
      "practice:a2-09:e6",
      "writing:a2-09:w2",
      "mini-test:a2-09:m1",
      "flow-mini-test:a2-09:m1",
      "mini-test:a2-09:m5",
    ],
  },
  z3: {
    exerciseIds: ["e2", "e5", "e7", "e11", "e13", "m2", "m4"],
    taskIds: [
      "practice:a2-09:e2",
      "practice:a2-09:e5",
      "practice:a2-09:e7",
      "practice:a2-09:e11",
      "practice:a2-09:e13",
      "mini-test:a2-09:m2",
      "flow-mini-test:a2-09:m2",
      "mini-test:a2-09:m4",
    ],
  },
  z4: {
    exerciseIds: ["e12", "e14"],
    taskIds: ["practice:a2-09:e12", "practice:a2-09:e14"],
  },
  "z-listening": {
    exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"],
    taskIds: [
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l3:q4",
      "listening:l3:q5",
      "listening:l3:q6",
      "listening:l4:q7",
      "listening:l4:q8",
      "listening:l4:q9",
    ],
  },
  "z-writing": {
    exerciseIds: ["w1", "w2", "w3", "w4"],
    taskIds: [
      "writing:a2-09:w1",
      "writing:a2-09:w2",
      "writing:a2-09:w3",
      "writing:a2-09:w4",
    ],
  },
} as const;

export function allTasks(): Exercise[] {
  const reading = lessonA209.reading;
  if (!reading) throw new Error("A2-09 must keep its reviewed reading");
  return [
    ...(lessonA209.review ?? []),
    ...lessonA209.practiceBank,
    ...lessonA209.miniTest,
    ...lessonA209.writing,
    ...reading.questions,
    ...lessonA209.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-09 task ${id} is missing`);
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
  lessonId = lessonA209.id,
): AnalyticsEvent {
  const goal = lessonA209.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-09 ${goalId} has no taskId for ${exerciseId}`);
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
