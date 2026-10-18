/**
 * a2-10 — الأدلة: معرّفاتُ المهام المسجّلة ورفضُ الأدلة الزائفة والثقافةُ والوساطة (جزء من تدقيق الدرس)
 * فُصل من a2-10.test.ts في الدفعة 102 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA210 } from "@/data/lessons/a2/a2-10";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { expectedEvidence, allTasks, task, taskIds, goal, goalEvent } from "./fixtures";

describe("A2-10 lesson content audit", () => {
  it("keeps objective evidence tied to the task IDs that the interface actually records", () => {
    const reading = lessonA210.reading;
    if (!reading) throw new Error("A2-10 reading is required");
    const validTaskIds = new Set<string>([
      ...lessonA210.practiceBank.map((item) => `practice:${lessonA210.id}:${item.id}`),
      ...lessonA210.practiceBank
        .slice(0, Math.min(4, lessonA210.practiceBank.length))
        .map((item) => `flow-practice:${lessonA210.id}:${item.id}`),
      ...lessonA210.miniTest.map((item) => `mini-test:${lessonA210.id}:${item.id}`),
      ...lessonA210.miniTest
        .filter((item) => item.type === "multiple-choice")
        .slice(0, 3)
        .map((item) => `flow-mini-test:${lessonA210.id}:${item.id}`),
      ...lessonA210.writing.map((item) => `writing:${lessonA210.id}:${item.id}`),
      ...reading.questions.map((item) => `reading:${reading.id}:${item.id}`),
      ...lessonA210.listening.questions.map((item) => `listening:${item.itemId}:${item.id}`),
    ]);
    expect(validTaskIds.has("flow-practice:a2-10:e4")).toBe(true);
    expect(validTaskIds.has("flow-practice:a2-10:e5")).toBe(false);
    expect(validTaskIds.has("flow-mini-test:a2-10:m1")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-10:m2")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-10:m3")).toBe(false);
    expect(validTaskIds.has("practice:a2-10:e10")).toBe(true);

    expect(lessonA210.lernziele.map((item) => item.id)).toEqual(Object.keys(expectedEvidence));
    for (const [goalId, expected] of Object.entries(expectedEvidence)) {
      const current = goal(goalId);
      expect(current.evidence?.exerciseIds, `${goalId} exercise IDs`).toEqual(expected.exerciseIds);
      expect(current.evidence?.taskIds, `${goalId} UI task IDs`).toEqual(expected.taskIds);
      expect(current.evidence?.completion, `${goalId} completion rule`).toBe("all-correct");
      expect(current.evidence?.labelAr.trim().length, `${goalId} evidence description`).toBeGreaterThan(15);
      for (const exerciseId of expected.exerciseIds) {
        expect(allTasks().some((item) => item.id === exerciseId), `${goalId} → ${exerciseId}`).toBe(true);
        expect(expected.taskIds.some((id) => id.endsWith(`:${exerciseId}`)), `${goalId} → ${exerciseId} task`).toBe(true);
      }
      for (const id of expected.taskIds) {
        expect(validTaskIds.has(id), `${goalId} → valid UI task ${id}`).toBe(true);
      }
    }

    expect(goal("z1").ar).not.toMatch(/كل دلالات|كل الحالات|أتقن|إتقان/);
    expect(goal("z2").ar).toContain("لا في كل الحالات");
    expect(goal("z-reading").evidence?.taskIds).toEqual([
      "reading:read-a2-10:rq1",
      "reading:read-a2-10:rq2",
      "reading:read-a2-10:rq3",
      "reading:read-a2-10:rq4",
    ]);
    expect(goal("z-listening").evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
    ]);
  });

  it("does not award evidence for opening a task, wrong results, wrong contexts, or revealed listening transcripts", () => {
    for (const current of lessonA210.lernziele) {
      expect(getGoalEvidenceStatus(current, lessonA210.id, []), `${current.id} before an answer`).toBe("pending");
    }

    const allCorrectFor = (goalId: string) =>
      goal(goalId).evidence?.exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId, true)) ?? [];
    for (const current of lessonA210.lernziele) {
      const events = allCorrectFor(current.id);
      expect(getGoalEvidenceStatus(current, lessonA210.id, events), `${current.id} completed`).toBe("evidenced");
      const firstExerciseId = current.evidence?.exerciseIds[0];
      if (!firstExerciseId) throw new Error(`${current.id} has no mapped exercise`);
      const withOneWrong = events.map((event) =>
        event.type === "exercise-result" && event.exerciseId === firstExerciseId
          ? { ...event, correct: false, points: 0 }
          : event,
      );
      expect(getGoalEvidenceStatus(current, lessonA210.id, withOneWrong), `${current.id} with an error`).toBe(
        "pending",
      );
      expect(getGoalEvidenceStatus(current, "a2-09", events), `${current.id} in another lesson`).toBe("pending");
    }

    const listeningGoal = goal("z-listening");
    const listeningEvents = allCorrectFor("z-listening");
    const afterTranscript = listeningEvents.map((event) =>
      event.type === "exercise-result" && event.exerciseId === "q1"
        ? { ...event, taskId: "listening-transcript:a2-10:l1:q1" }
        : event,
    );
    expect(getGoalEvidenceStatus(listeningGoal, lessonA210.id, afterTranscript)).toBe("pending");

    const wrongTaskContext = allCorrectFor("z1").map((event) =>
      event.type === "exercise-result" && event.exerciseId === "e1"
        ? { ...event, taskId: "flow-practice:a2-10:e5" }
        : event,
    );
    expect(getGoalEvidenceStatus(goal("z1"), lessonA210.id, wrongTaskContext)).toBe("pending");
  });

  it("keeps cultural and mediation notes qualified and the dialogue distractor context-sensitive", () => {
    expect(lessonA210.fehlerUndTipps.mistakes.map((mistake) => mistake.classification)).toEqual([
      "error",
      "error",
      "contextual-alternative",
    ]);
    const cultural = lessonA210.fehlerUndTipps.culturalNote.content;
    expect(cultural).toContain("تختلف الرسوم والتكاليف");
    expect(cultural).toContain("مساهمة الفصل");
    expect(cultural).toContain("لا يصح وصف Hauptschule وRealschule");
    expect(cultural).not.toMatch(/كل الجامعات.*مجانية تقريباً/);
    expect(cultural).toContain("بدلاً من تعميم أن جميع الجامعات");

    const mediation = lessonA210.mediation?.[0];
    expect(mediation).toMatchObject({
      id: "med-a2-10-1",
      type: "summarize-de-to-ar",
      titleAr: "انقل معلومات برنامج دورة افتراضية بالعربية",
      sourceDe:
        "Der Deutschkurs B1 beginnt im September. Er dauert acht Wochen und findet dreimal pro Woche statt. Am Ende gibt es eine Prüfung.",
      taskAr: "لخّص معلومات البرنامج الواردة فقط: موعد البداية، المدة، عدد اللقاءات الأسبوعية، والاختبار النهائي. هذا مثال تدريبي افتراضي، لا إعلان عن دورة حقيقية.",
      modelAnswerAr: "«تبدأ دورة الألمانية B1 في سبتمبر. تستمر ثمانية أسابيع، وتُعقد ثلاث مرات في الأسبوع. وفي نهايتها امتحان.»",
      keyPointsAr: [
        "نقلت موعد البداية (سبتمبر)",
        "ذكرت المدة (ثمانية أسابيع)",
        "ذكرت ثلاثة لقاءات في الأسبوع",
        "نقلت وجود امتحان في النهاية",
      ],
    });

    const interaction = lessonA210.interaction?.[0];
    expect(interaction).toMatchObject({
      id: "int-a2-10-1",
      scenarioAr: "تسجل في دورة لغة وتسأل عن التفاصيل؛ الموعد المذكور في الحوار جزء من سيناريو تدريبي.",
      scenarioDe: "Anmeldung für einen Sprachkurs.",
      strategyAr: "الاستراتيجية: الاستفسار عن الدورة ثم الإجابة عن المعرفة السابقة والموعد المقترح. الخيار الذي يقول «Ich starte, wenn ich will» صحيح نحوياً، لكنه لا يجيب عن الموعد الثابت في هذا الحوار.",
    });
    expect(interaction?.rounds.map((round) => ({
      speakerDe: round.speakerDe,
      speakerAr: round.speakerAr,
      options: round.options.map(({ de, ar, best, replyDe, replyAr }) => ({ de, ar, best, replyDe, replyAr })),
    }))).toEqual([
      {
        speakerDe: "Hallo, ich möchte mich für den Deutschkurs anmelden.",
        speakerAr: "مرحباً، أريد التسجيل في دورة الألمانية.",
        options: [
          {
            de: "Gerne. Der nächste B1-Kurs beginnt in zwei Wochen. Haben Sie schon Vorkenntnisse?",
            ar: "بكل سرور. تبدأ دورة B1 القادمة بعد أسبوعين. هل لديك معرفة سابقة؟",
            best: true,
            replyDe: "Ja, ich habe schon einen A2-Kurs besucht.",
            replyAr: "نعم، سبق أن التحقت بدورة A2.",
          },
          {
            de: "Ich möchte zuerst das Abendessen bestellen.",
            ar: "أريد أولاً طلب العشاء.",
            best: false,
            replyDe: "Hier geht es um die Anmeldung zum Sprachkurs. Möchten Sie fortfahren?",
            replyAr: "نحن نتحدث هنا عن التسجيل في دورة اللغة. هل تريد المتابعة؟",
          },
        ],
      },
      {
        speakerDe: "Sie haben schon einen A2-Kurs besucht. Das ist eine gute Vorbereitung für den B1-Kurs. Können Sie in zwei Wochen anfangen?",
        speakerAr: "سبق أن التحقت بدورة A2، وهذا إعداد جيد لدورة B1. هل تستطيع البدء بعد أسبوعين؟",
        options: [
          {
            de: "Ja, ich kann in zwei Wochen anfangen.",
            ar: "نعم، أستطيع البدء بعد أسبوعين.",
            best: true,
            replyDe: "Gut, dann notiere ich den Termin.",
            replyAr: "حسناً، سأدوّن الموعد إذن.",
          },
          {
            de: "Ich starte, wenn ich will.",
            ar: "سأبدأ عندما أريد.",
            best: false,
            replyDe: "Der Kurs hat einen festen Starttermin. Ich kann Ihnen die verfügbaren Termine nennen.",
            replyAr: "للدورة موعد بدء محدد. يمكنني إخبارك بالمواعيد المتاحة.",
          },
        ],
      },
    ]);
  });
});
