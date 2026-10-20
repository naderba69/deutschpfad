/**
 * a2-06 — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من a2-06.test.ts في الدفعة 105 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { lessonA206 } from "@/data/lessons/a2/a2-06";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

export const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "finde",
  r2: "أحب مشاهدة التلفاز.",
  e1: "kommt",
  e2: "dass",
  e8: "الدعاية / الإعلان",
  e11: "فريق إعداد مواد الصحيفة ومراجعتها",
  m1: "ist",
  m2: "dass",
  rq1: "Jeden Freitag.",
  rq2: "Sie finden, dass der Weg sicher ist.",
  rq3: "Man kann sie kostenlos herunterladen.",
  rq4: "Sie prüft jede Nachricht genau.",
  q1: "Im Fernsehen läuft zu viel Werbung.",
  q2: "im Internet",
  q3: "interessant",
};

export const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["finde", "findest", "findet", "finden"],
  r2: [
    "أحب مشاهدة التلفاز.",
    "أحب قراءة الصحيفة.",
    "أحب الاستماع إلى الراديو.",
    "أحب كتابة رسالة إلكترونية.",
  ],
  e1: ["kommt", "kommen", "kommst", "komme"],
  e2: ["dass", "das", "weil", "wenn"],
  e8: ["الدعاية / الإعلان", "الأخبار اليومية", "الصحيفة الأسبوعية", "الرأي الشخصي"],
  e11: [
    "فريق إعداد مواد الصحيفة ومراجعتها",
    "جمهور القراء في المقهى",
    "المبنى الذي تجتمع فيه البلدية",
    "مسار مخصص للدراجات",
  ],
  m1: ["ist", "bin", "bist", "sind"],
  m2: ["dass", "das", "ob", "denn"],
  rq1: ["Jeden Montag.", "Jeden Freitag.", "Einmal im Monat.", "Nur im Sommer."],
  rq2: [
    "Sie finden, dass der Weg sicher ist.",
    "Sie finden, dass er zu teuer ist.",
    "Sie wollen, dass der Weg geschlossen wird.",
    "Sie möchten dort eine Zeitung verkaufen.",
  ],
  rq3: [
    "Man muss sie teuer kaufen.",
    "Man kann sie kostenlos herunterladen.",
    "Man muss Leyla anrufen.",
    "Sie ist nur im Café erhältlich.",
  ],
  rq4: [
    "Sie prüft jede Nachricht genau.",
    "Sie löscht jede Nachricht sofort.",
    "Sie schickt jede Nachricht an die Stadt.",
    "Sie liest jede Nachricht im Radio vor.",
  ],
  q1: [
    "Im Fernsehen läuft zu viel Werbung.",
    "Die Serien sind immer langweilig.",
    "Die Zeitung ist zu teuer.",
    "Das Internet ist zu langsam.",
  ],
  q2: ["im Internet", "in der Zeitung", "im Fernsehen", "im Radio"],
  q3: ["interessant", "langweilig", "kurz", "teuer"],
};

export function allTasks(): Exercise[] {
  const reading = lessonA206.reading;
  if (!reading) throw new Error("A2-06 must keep its reviewed reading text");
  return [
    ...(lessonA206.review ?? []),
    ...lessonA206.practiceBank,
    ...lessonA206.miniTest,
    ...lessonA206.writing,
    ...reading.questions,
    ...lessonA206.listening.questions,
  ];
}

export function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-06 task ${id} is missing`);
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
  const goal = lessonA206.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-06 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA206.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}
