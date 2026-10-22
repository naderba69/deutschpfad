/**
 * a2-05 — الجردُ ومراجعُ مراجعة A1 وأدلّةُ الأهداف الدقيقة · وعدُّ أحداثِ المهام المُقيَّمة الصحيحة وحدها دليلاً (جزء من تدقيق الدرس)
 * فُصل من a2-05.test.ts في الدفعة 107 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA205 } from "@/data/lessons/a2/a2-05";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import { reading } from "./fixtures";
import { allTasks } from "./fixtures";
import { ids } from "./fixtures";
import { goalEvent } from "./fixtures";

describe("A2-05 audited lesson", () => {
  it("keeps the lesson inventory, A1 review references, and precise assessable goal evidence", () => {
    expect(lessonA205.id).toBe("a2-05");
    expect(lessonA205.order).toBe(1);
    expect(lessonA205.lernziele.map((goal) => goal.id)).toEqual(["z1", "z2", "z3", "z-reading", "z5"]);
    expect(ids(lessonA205.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA205.practiceBank)).toEqual(Array.from({length: 14}, (_, i) => `e${i + 1}`).sort());
    expect(ids(lessonA205.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA205.writing)).toEqual(["w1", "w2", "w3", "w4"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA205.listening.questions)).toEqual(["q1", "q2", "q3", "q4", "q5", "q6", "q7"]);
    expect(allTasks()).toHaveLength(37);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(37);
    expect("duration" in lessonA205).toBe(false);

    const reviewInstructions = new Map((lessonA205.review ?? []).map((exercise) => [exercise.id, exercise.instructionAr]));
    expect(reviewInstructions.get("r1")).toContain("A1");
    expect(reviewInstructions.get("r1")).toContain("a1-10");
    expect(reviewInstructions.get("r2")).toContain("a1-10");
    expect(reviewInstructions.get("r3")).toContain("a1-09");
    expect(lessonA205.summary).not.toMatch(/Goethe-Zertifikat|Akkreditierung|vollständig|garantiert|\b\d+\s*Minuten/i);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA205.practiceBank) {
      validTaskIds.add(`practice:${lessonA205.id}:${exercise.id}`);
    }
    // ordinary practice takes a five-item random sample; the progressive reveal shows only its first min(4, bank size).
    for (const exercise of lessonA205.practiceBank.slice(0, Math.min(4, lessonA205.practiceBank.length))) {
      validTaskIds.add(`practice:${lessonA205.id}:${exercise.id}`);
    }
    for (const exercise of lessonA205.miniTest) validTaskIds.add(`mini-test:${lessonA205.id}:${exercise.id}`);
    for (const exercise of lessonA205.writing) validTaskIds.add(`writing:${lessonA205.id}:${exercise.id}`);
    for (const question of reading().questions) validTaskIds.add(`reading:${reading().id}:${question.id}`);
    for (const question of lessonA205.listening.questions) {
      validTaskIds.add(getListeningQuestionTaskId(lessonA205.id, question.itemId, question.id, false));
    }

    for (const goal of lessonA205.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have evidence`).toBeDefined();
      expect(evidence?.completion).toBe("all-correct");
      expect(evidence?.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    expect(lessonA205.lernziele.find((goal) => goal.id === "z1")?.evidence?.taskIds).toEqual([
      "practice:a2-05:e3",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z2")?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
      "listening:l3:q5",
      "listening:l3:q6",
      "listening:l3:q7",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z3")?.evidence?.taskIds).toEqual([
      "mini-test:a2-05:m1",
      "mini-test:a2-05:m2",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z-reading")?.evidence?.taskIds).toEqual([
      "reading:read-a2-05:rq1",
      "reading:read-a2-05:rq2",
      "reading:read-a2-05:rq3",
      "reading:read-a2-05:rq4",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z5")?.evidence?.taskIds).toEqual([
      "writing:a2-05:w1",
      "writing:a2-05:w4",
    ]);

    for (const question of lessonA205.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA205.id, question.itemId, question.id, false)).toBe(`listening:${question.itemId}:${question.id}`);
      expect(getListeningQuestionTaskId(lessonA205.id, question.itemId, question.id, true)).toBe(`listening-transcript:${lessonA205.id}:${question.itemId}:${question.id}`);
    }
    expect(lessonA205.lernziele.every((goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")))).toBe(true);
    expect(lessonA205.lernziele.flatMap((goal) => goal.evidence?.taskIds ?? []).join(" ")).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(lessonA205.lernziele.every((goal) => goal.evidence?.exerciseIds.length)).toBe(true);
  });

  it("counts only correct events from the exact assessed tasks as goal evidence", () => {
    const openingEvent: AnalyticsEvent = {type: "lesson-view", ts: 1, lessonId: lessonA205.id};
    for (const goal of lessonA205.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA205.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA205.id, [openingEvent])).toBe("pending");
      const correctEvents = goal.evidence?.exerciseIds.map((id) => goalEvent(goal.id, id, true)) ?? [];
      const wrongEvents = goal.evidence?.exerciseIds.map((id) => goalEvent(goal.id, id, false)) ?? [];
      expect(getGoalEvidenceStatus(goal, lessonA205.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA205.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) => index === 0 && event.type === "exercise-result" ? {...event, correct: false} : event);
      expect(getGoalEvidenceStatus(goal, lessonA205.id, partlyWrong)).toBe("pending");
    }

    const phoneGoal = lessonA205.lernziele.find((goal) => goal.id === "z1");
    if (!phoneGoal) throw new Error("z1 must be present");
    const flowEvent = goalEvent("z1", "e3", true, "practice:a2-05:e3");
    expect(getGoalEvidenceStatus(phoneGoal, lessonA205.id, [flowEvent])).toBe("evidenced");
    const wrongInterfaceEvent = goalEvent("z1", "e3", true, "mini-test:a2-05:e3");
    expect(getGoalEvidenceStatus(phoneGoal, lessonA205.id, [wrongInterfaceEvent])).toBe("pending");

    const listeningGoal = lessonA205.lernziele.find((goal) => goal.id === "z2");
    if (!listeningGoal) throw new Error("z2 must be present");
    const transcriptEvent = goalEvent("z2", "q1", true, getListeningQuestionTaskId(lessonA205.id, "l1", "q1", true));
    expect(getGoalEvidenceStatus(listeningGoal, lessonA205.id, [transcriptEvent])).toBe("pending");
  });
});
