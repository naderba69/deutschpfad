/**
 * a2-03 — ترتيبُ الدرس والجردُ وربطُ كل هدفٍ بمهمةٍ قابلة للقياس · وعدُّ أحداث النتائج الصحيحة وحدها دليلاً في سياق المهمة المرسوم (جزء من تدقيق الدرس)
 * فُصل من a2-03.test.ts في الدفعة 109 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA203 } from "@/data/lessons/a2/a2-03";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import { reading } from "./fixtures";
import { task } from "./fixtures";
import { ids } from "./fixtures";
import { goalEvent } from "./fixtures";

describe("A2-03 audited lesson", () => {
  it("keeps the lesson order, inventory, and every objective tied to assessable tasks", () => {
    expect(lessonA203.order).toBe(1);
    expect(lessonA203.lernziele.map((goal) => goal.id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(ids(lessonA203.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA203.practiceBank)).toEqual(
      Array.from({length: 27}, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA203.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA203.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5", "rq6"]);
    expect(ids(lessonA203.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect("duration" in lessonA203).toBe(false);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA203.practiceBank) {
      validTaskIds.add(`practice:${lessonA203.id}:${exercise.id}`);
    }
    for (const exercise of lessonA203.practiceBank.slice(0, Math.min(4, lessonA203.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA203.id}:${exercise.id}`);
    }
    for (const exercise of lessonA203.writing) {
      validTaskIds.add(`writing:${lessonA203.id}:${exercise.id}`);
    }
    for (const question of reading().questions) {
      validTaskIds.add(`reading:${reading().id}:${question.id}`);
    }
    for (const question of lessonA203.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA203.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA203.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have evidence`).toBeDefined();
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.some((taskId) => taskId.startsWith("flow-practice:"))).toBe(false);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    const listeningGoal = lessonA203.lernziele.find((goal) => goal.id === "z3");
    expect(listeningGoal?.evidence?.taskIds).toContain("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId(lessonA203.id, "l1", "q1", true)).toBe(
      "listening-transcript:a2-03:l1:q1",
    );

    const orderGoal = lessonA203.lernziele.find((goal) => goal.id === "z1");
    expect(orderGoal?.evidence?.taskIds).toContain("writing:a2-03:w1");
    expect(lessonA203.lernziele.map((goal) => goal.de).join(" ")).not.toMatch(/sprechen|auswendig|Meisterschaft/i);
    expect(lessonA203.summary).not.toMatch(/Goethe-Zertifikat|Akkreditierung|vollständig|garantiert/i);
  });

  it("counts only correct exercise-result events in the mapped task context as objective evidence", () => {
    for (const goal of lessonA203.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA203.id, [])).toBe("pending");
      const openingEvent: AnalyticsEvent = {
        type: "lesson-view",
        ts: 1,
        lessonId: lessonA203.id,
      };
      expect(getGoalEvidenceStatus(goal, lessonA203.id, [openingEvent])).toBe("pending");

      const correctEvents = goal.evidence?.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      expect(getGoalEvidenceStatus(goal, lessonA203.id, correctEvents ?? [])).toBe("evidenced");
      const incorrectEvents = goal.evidence?.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, false),
      );
      expect(getGoalEvidenceStatus(goal, lessonA203.id, incorrectEvents ?? [])).toBe("pending");

      const oneWrong = (correctEvents ?? []).map((event, index) =>
        index === 0 && event.type === "exercise-result" ? {...event, correct: false} : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA203.id, oneWrong)).toBe("pending");
    }

    const requestGoal = lessonA203.lernziele.find((goal) => goal.id === "z1");
    if (!requestGoal?.evidence) throw new Error("z1 must keep its evidence mapping");
    const wrongContextEvents = requestGoal.evidence.exerciseIds.map((exerciseId) =>
      goalEvent(
        requestGoal.id,
        exerciseId,
        true,
        exerciseId === "e16" ? "writing:a2-03:e16" : undefined,
      ),
    );
    expect(getGoalEvidenceStatus(requestGoal, lessonA203.id, wrongContextEvents)).toBe("pending");

    const mismatchedExerciseEvent = goalEvent("z1", "e16", true);
    if (mismatchedExerciseEvent.type !== "exercise-result") throw new Error("expected exercise result");
    const mismatchedEvent: AnalyticsEvent = {...mismatchedExerciseEvent, exerciseId: "e26"};
    expect(getGoalEvidenceStatus(requestGoal, lessonA203.id, [mismatchedEvent])).toBe("pending");

    const listeningGoal = lessonA203.lernziele.find((goal) => goal.id === "z3");
    if (!listeningGoal?.evidence) throw new Error("z3 must keep its evidence mapping");
    const revealedTranscriptEvents = listeningGoal.evidence.exerciseIds.map((exerciseId) =>
      goalEvent(
        listeningGoal.id,
        exerciseId,
        true,
        exerciseId === "q1"
          ? getListeningQuestionTaskId(lessonA203.id, "l1", "q1", true)
          : undefined,
      ),
    );
    expect(getGoalEvidenceStatus(listeningGoal, lessonA203.id, revealedTranscriptEvents)).toBe(
      "pending",
    );

    const speakingGoal = lessonA203.lernziele.find((goal) => goal.id === "z2");
    const pronunciationOnly: AnalyticsEvent = {
      type: "pronunciation-score",
      ts: 1,
      target: "Ich möchte bitte einen Tee.",
      score: 100,
      lessonId: lessonA203.id,
      taskId: "pronunciation:a2-03:p1",
    };
    expect(getGoalEvidenceStatus(speakingGoal!, lessonA203.id, [pronunciationOnly])).toBe("pending");
  });
});
