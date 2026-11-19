/**
 * a2-05 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a2-05.test.ts في الدفعة 107 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { lessonA205 } from "@/data/lessons/a2/a2-05";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "arbeite",
  r2: "nicht",
  e1: "war",
  e2: "hatten",
  e8: "السيد فيبر المحترم،",
  e11: "Die Kollegen waren gestern im Büro.",
  e12: "Mit freundlichen Grüßen",
  m1: "war",
  m2: "hattet",
  rq1: "Er war krank.",
  rq2: "Gestern um 10 Uhr im Raum 3.",
  rq3: "Die Notizen und die aktuelle Datei.",
  rq4: "Morgen um 11 Uhr.",
  q1: "Herr Schulz",
  q2: "Er ruft heute Nachmittag zurück.",
  q3: "Er war krank.",
  q4: "Eine E-Mail mit den Details.",
  q5: "Am Donnerstag um zehn",
  q6: "Im kleinen Konferenzraum",
  q7: "Seinen Laptop",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["arbeite", "arbeitest", "arbeitet", "arbeiten"],
  r2: ["nicht", "kein", "keine", "keinen"],
  e1: ["war", "warst", "waren", "wart"],
  e2: ["hatten", "hatte", "hattest", "hattet"],
  e8: ["السيد فيبر المحترم،", "مرحباً يا فيبر!", "إلى اللقاء، سيد فيبر.", "طاب يومك يا زميل."],
  e11: [
    "Die Kollegen waren gestern im Büro.",
    "Die Kollegen war gestern im Büro.",
    "Frau Weber hatten einen Termin.",
    "Ich waren gestern krank.",
  ],
  e12: ["Mit freundlichen Grüßen", "Tschüss", "Bis dann, dein Sami", "Mach's gut"],
  m1: ["war", "warst", "waren", "wart"],
  m2: ["hattet", "hatte", "hatten", "hattest"],
  rq1: ["Er war krank.", "Er hatte Urlaub.", "Er hatte einen Termin.", "Er war im Ausland."],
  rq2: [
    "Gestern um 10 Uhr im Raum 3.",
    "Heute um 16 Uhr im Büro.",
    "Morgen um 11 Uhr in Raum 1.",
    "Am Montag um 9 Uhr im Raum 2.",
  ],
  rq3: [
    "Die Notizen und die aktuelle Datei.",
    "Nur eine Telefonnummer des Teams.",
    "Die Präsentation für nächste Woche.",
    "Die Rechnung für das Projekt.",
  ],
  rq4: ["Morgen um 11 Uhr.", "Heute um 10 Uhr.", "Morgen um 16 Uhr.", "Am Freitag um 9 Uhr."],
  q1: ["Herr Schulz", "Frau Weber", "Sami", "Karim"],
  q2: ["Er ruft heute Nachmittag zurück.", "Er schickt sofort einen Bericht.", "Er kommt morgen ins Büro.", "Er spricht mit Karim."],
  q3: ["Er war krank.", "Er hatte Urlaub.", "Er hatte einen anderen Termin.", "Er musste länger arbeiten."],
  q4: [
    "Eine E-Mail mit den Details.",
    "Eine Liste mit den Teilnehmern.",
    "Ein Protokoll vom letzten Monat.",
    "Seinen Bericht für das Projekt.",
  ],
  q5: ["Am Donnerstag um zehn", "Am Mittwoch um neun", "Am Freitag um elf", "Am Donnerstag um zwölf"],
  q6: ["Im kleinen Konferenzraum", "Im großen Besprechungsraum", "Im Büro von Frau Weber", "Am Empfang im Erdgeschoss"],
  q7: ["Seinen Laptop", "Die Unterlagen", "Einen Bericht", "Eine Präsentation"],
};

export const expectedFillBlankOptions: Record<string, string[][]> = {
  r3: [["am", "um", "im"], ["um", "am", "im"]],
  e6: [["war", "hatte"], ["war", "hatte"], ["waren", "hatten"]],
  e14: [["war", "waren", "hatte"], ["hatte", "hatten", "war"]],
  w2: [["war", "waren", "hatte"], ["war", "hatten", "hatte"], ["war", "warst", "wart"], ["hatte", "hatten", "hattest"]],
  m5: [["Einen Moment", "Guten Tag", "Auf Wiedersehen"], ["verbinde", "verbinden", "verbindest"], ["spreche", "verbinde", "hatte"]],
};

export const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["am", "um"],
  e6: ["war", "hatte", "waren"],
  e14: ["war", "hatte"],
  w2: ["war", "hatten", "warst", "hatte"],
  m5: ["Einen Moment", "verbinde", "spreche"],
};

export const expectedOrderingKeys: Record<string, string> = {
  e4: "Ich war gestern krank.",
  m3: "Anna hatte einen Termin.",
};

export const expectedOrderingTokens: Record<string, string[]> = {
  e4: ["war", "Ich", "gestern", "krank", "."],
  m3: ["hatte", "einen", "Anna", "Termin", "."],
};

export const expectedErrorCorrections: Record<string, string> = {
  e5: "waren",
  e9: "freundlichen",
  m4: "einen",
};

export const expectedWrongSentences: Record<string, string> = {
  e5: "Wir war gestern im Büro.",
  e9: "Mit freundliche Grüßen",
  m4: "Ich hatte ein Termin.",
};

export const expectedCorrectionOptions: Record<string, string[]> = {
  e5: ["waren", "warst", "wart", "war"],
  e9: ["freundlichen", "freundlich", "freundliches", "freundlicher"],
  m4: ["einen", "einem", "einer", "ein"],
};

export const expectedTransformations: Record<string, string[]> = {
  e7: ["Ich war krank", "Ich war krank."],
  e13: ["Wir waren gestern im Büro.", "Wir waren gestern im Büro"],
  w1: ["Sehr geehrter Herr Ben Ali,"],
  w4: ["Mit freundlichen Grüßen"],
};

export const expectedDictations: Record<string, string> = {
  e10: "Wir hatten gestern eine wichtige Besprechung.",
  w3: "Einen Moment bitte. Ich verbinde Sie.",
};

export function reading() {
  const value = lessonA205.reading;
  if (!value) throw new Error("A2-05 must keep its reviewed reading text");
  return value;
}

export function allTasks(): Exercise[] {
  return [
    ...(lessonA205.review ?? []),
    ...lessonA205.practiceBank,
    ...lessonA205.miniTest,
    ...lessonA205.writing,
    ...reading().questions,
    ...lessonA205.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-05 task ${id} is missing`);
  return value;
}

export function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

export function goalEvent(goalId: string, exerciseId: string, correct: boolean, taskIdOverride?: string): AnalyticsEvent {
  const goal = lessonA205.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!acceptedTaskId) throw new Error(`A2-05 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA205.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}
