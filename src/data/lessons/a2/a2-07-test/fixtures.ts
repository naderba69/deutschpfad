/**
 * a2-07 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * (مفاتيح الاختيار من متعدّد وخياراته · جمعُ التمارين · إحضارُ تمرين · قائمةُ المعرّفات · حدثُ الهدف)
 * فُصلت من a2-07.test.ts في الدفعة 101 (سقف الحجم). القيم والأجسام منقولة حرفياً.
 */

import { lessonA207 } from "@/data/lessons/a2/a2-07";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "einen",
  r2: "المال",
  e1: "eine",
  e2: "keinen",
  e8: "يدفع نقداً",
  e11: "Einen Geldbetrag von einem Konto auf ein anderes Konto übertragen.",
  e12: "hebe",
  e13: "gab",
  m1: "einen",
  m2: "mir",
  rq1: "Sie möchte ihre Miete regelmäßig per Überweisung bezahlen.",
  rq2: "Es hat eine Bankkarte und kostet im Beispiel drei Euro pro Monat.",
  rq3: "Der genaue Betrag ist auf dem Blatt nicht angegeben.",
  rq4: "Sie vergleicht die Angaben und wählt erst später ein Modell.",
  q1: "ein Konto eröffnen",
  q2: "in der Übersicht",
  q3: "neben dem Eingang",
  q4: "Er versteht die Anzeige am Automaten nicht.",
  q5: "Fünfzig Euro.",
  q6: "Sie soll das Tastenfeld mit der Hand abdecken.",
  q7: "Wenn sie den Betrag kontrollieren möchte.",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["einen", "ein", "eine", "der"],
  r2: ["المال", "الذهب", "البطاقة", "الحساب"],
  e1: ["eine", "ein", "einen", "der"],
  e2: ["keinen", "kein", "keine", "nicht"],
  e8: ["يدفع نقداً", "يدفع بالبطاقة", "يحوّل مالاً", "يسحب نقوداً"],
  e11: [
    "Einen Geldbetrag von einem Konto auf ein anderes Konto übertragen.",
    "Am Automaten Bargeld aus dem eigenen Konto holen und einzahlen.",
    "Eine Karte an der Kasse zum Bezahlen von Waren benutzen.",
    "Münzen in einen Briefumschlag legen und per Post schicken.",
  ],
  e12: ["hebe", "abhebe", "hebst", "heben"],
  e13: ["gab", "gibt", "geben", "gebe"],
  m1: ["einen", "ein", "eine", "der"],
  m2: ["mir", "mich", "dich", "dir"],
  rq1: [
    "Sie möchte ihre Miete regelmäßig per Überweisung bezahlen.",
    "Sie möchte bei der Bank als Mitarbeiterin arbeiten.",
    "Sie möchte jeden Tag Geld am Automaten wechseln.",
    "Sie möchte Bankkarten an andere Personen verkaufen.",
  ],
  rq2: [
    "Es hat eine Bankkarte und kostet im Beispiel drei Euro pro Monat.",
    "Es ist ohne Karte und kostet im Beispiel drei Euro pro Jahr.",
    "Es hat eine Kreditkarte und ist in jeder Bank kostenlos.",
    "Es enthält zwei Karten, aber der Preis steht nicht im Text.",
  ],
  rq3: [
    "Der genaue Betrag ist auf dem Blatt nicht angegeben.",
    "Die Mitarbeiterin hat ihr die Übersicht weggenommen.",
    "Das Konto ist schon geschlossen und nicht mehr verfügbar.",
    "Sie hat die Bankkarte im Geldautomaten vergessen.",
  ],
  rq4: [
    "Sie vergleicht die Angaben und wählt erst später ein Modell.",
    "Sie eröffnet sofort beide Konten zusammen.",
    "Sie wählt Modell B, weil es überall kostenlos ist.",
    "Sie bittet ihren Bruder, das Konto für sie zu schließen.",
  ],
  q1: [
    "ein Konto eröffnen",
    "ein Haus kaufen",
    "eine Rechnung bar bezahlen",
    "Geld am Automaten abheben",
  ],
  q2: ["in der Übersicht", "auf seiner Bankkarte", "auf seinem Pass", "am Geldautomaten"],
  q3: ["neben dem Eingang", "im Bahnhof", "hinter dem Café", "im Büro von Karim"],
  q4: [
    "Er versteht die Anzeige am Automaten nicht.",
    "Er hat seine Bankkarte am Schalter verloren.",
    "Er möchte sein Konto ganz schließen.",
    "Er findet den Eingang zur Bank nicht.",
  ],
  q5: ["Zwanzig Euro.", "Fünfzig Euro.", "Hundert Euro.", "Zehn Euro."],
  q6: [
    "Sie soll die Karte aus dem Automaten nehmen.",
    "Sie soll die PIN auf den Bildschirm schreiben.",
    "Sie soll das Tastenfeld mit der Hand abdecken.",
    "Sie soll die Quittung gleich wegwerfen.",
  ],
  q7: [
    "Wenn sie später ein Konto eröffnen möchte.",
    "Wenn sie ihr Passwort am Schalter ändern möchte.",
    "Wenn sie eine neue Karte bestellen möchte.",
    "Wenn sie den Betrag kontrollieren möchte.",
  ],
};

export function allTasks(): Exercise[] {
  const reading = lessonA207.reading;
  if (!reading) throw new Error("A2-07 must keep its reviewed reading text");
  return [
    ...(lessonA207.review ?? []),
    ...lessonA207.practiceBank,
    ...lessonA207.miniTest,
    ...lessonA207.writing,
    ...reading.questions,
    ...lessonA207.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-07 task ${id} is missing`);
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
): AnalyticsEvent {
  const goal = lessonA207.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-07 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA207.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}
