/**
 * a2-06 — الترتيبُ والجردُ الكامل وأدلّةُ الأهداف القابلة للقياس · وعدُّ أحداثِ الواجهة المُقيَّمة وحدها دليلاً (جزء من تدقيق الدرس)
 * فُصل من a2-06.test.ts في الدفعة 105 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA206 } from "@/data/lessons/a2/a2-06";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";
import { ids } from "./fixtures";
import { goalEvent } from "./fixtures";

describe("A2-06 audited lesson", () => {
  it("keeps lesson order, a complete task inventory, and exact assessable goal evidence", () => {
    expect(lessonA206.id).toBe("a2-06");
    expect(lessonA206.unitId).toBe("a2-06");
    expect(lessonA206.order).toBe(1);
    expect(lessonA206.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z2",
      "z3",
      "z4",
      "z-reading",
    ]);
    expect(ids(lessonA206.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA206.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA206.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA206.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(lessonA206.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA206.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect(allTasks()).toHaveLength(32);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(32);
    expect("duration" in lessonA206).toBe(false);
    expect(lessonA206.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|\b\d+\s*دقيقة/i);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA206.practiceBank) {
      validTaskIds.add(`practice:${lessonA206.id}:${exercise.id}`);
    }
    // ordinary practice samples five random items; the progressive reveal shows only its first min(4, bank size).
    for (const exercise of lessonA206.practiceBank.slice(
      0,
      Math.min(4, lessonA206.practiceBank.length),
    )) {
      validTaskIds.add(`practice:${lessonA206.id}:${exercise.id}`);
    }
    for (const exercise of lessonA206.miniTest) {
      validTaskIds.add(`mini-test:${lessonA206.id}:${exercise.id}`);
    }
    for (const exercise of lessonA206.writing) {
      validTaskIds.add(`writing:${lessonA206.id}:${exercise.id}`);
    }
    for (const question of lessonA206.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA206.reading?.id}:${question.id}`);
    }
    for (const question of lessonA206.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA206.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA206.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
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
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(
          true,
        );
      }
    }

    expect(lessonA206.lernziele.find((goal) => goal.id === "z1")?.evidence?.taskIds).toEqual([
      "practice:a2-06:e3",
    ]);
    expect(lessonA206.lernziele.find((goal) => goal.id === "z3")?.evidence?.taskIds).toEqual([
      "mini-test:a2-06:m1",
      "mini-test:a2-06:m2",
      "mini-test:a2-06:m3",
      "mini-test:a2-06:m4",
      "mini-test:a2-06:m5",
    ]);
    expect(lessonA206.lernziele.find((goal) => goal.id === "z4")?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
    ]);
    expect(
      lessonA206.lernziele.find((goal) => goal.id === "z-reading")?.evidence?.taskIds,
    ).toEqual([
      "reading:read-a2-06:rq1",
      "reading:read-a2-06:rq2",
      "reading:read-a2-06:rq3",
      "reading:read-a2-06:rq4",
    ]);

    for (const question of lessonA206.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA206.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA206.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA206.id}:${question.itemId}:${question.id}`);
    }
    expect(
      lessonA206.lernziele.every(
        (goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")),
      ),
    ).toBe(true);
    expect(
      lessonA206.lernziele
        .flatMap((goal) => goal.evidence?.taskIds ?? [])
        .join(" "),
    ).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(
      lessonA206.lernziele.every((goal) => goal.evidence?.exerciseIds.length),
    ).toBe(true);
  });

  it("counts only correct events from the exact assessed task interface as evidence", () => {
    const openingEvent: AnalyticsEvent = {
      type: "lesson-view",
      ts: 1,
      lessonId: lessonA206.id,
    };
    for (const goal of lessonA206.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA206.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA206.id, [openingEvent])).toBe("pending");
      const exerciseIds = goal.evidence?.exerciseIds ?? [];
      const correctEvents = exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      const wrongEvents = correctEvents.map((event) =>
        event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA206.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA206.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) =>
        index === 0 && event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA206.id, partlyWrong)).toBe("pending");
    }

    const vocabularyGoal = lessonA206.lernziele.find((goal) => goal.id === "z1");
    if (!vocabularyGoal) throw new Error("z1 must exist");
    expect(
      getGoalEvidenceStatus(
        vocabularyGoal,
        lessonA206.id,
        [goalEvent("z1", "e3", true, "practice:a2-06:e3")],
      ),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(
        vocabularyGoal,
        lessonA206.id,
        [goalEvent("z1", "e3", true, "mini-test:a2-06:e3")],
      ),
    ).toBe("pending");

    const listeningGoal = lessonA206.lernziele.find((goal) => goal.id === "z4");
    if (!listeningGoal) throw new Error("z4 must exist");
    expect(
      getGoalEvidenceStatus(
        listeningGoal,
        lessonA206.id,
        [
          goalEvent(
            "z4",
            "q1",
            true,
            getListeningQuestionTaskId(lessonA206.id, "l1", "q1", true),
          ),
        ],
      ),
    ).toBe("pending");
  });
});
