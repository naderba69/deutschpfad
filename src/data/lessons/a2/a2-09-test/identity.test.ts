/**
 * a2-09 — الهوية والجرد ومطابقةُ الأهداف لمهامّ قابلة للإجابة في سياقات الواجهة (جزء من تدقيق الدرس)
 * فُصل من a2-09.test.ts في الدفعة 103 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA209 } from "@/data/lessons/a2/a2-09";
import { LESSON_META } from "@/data/lessons/meta";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { expectedEvidence, allTasks, task, ids, goalEvent } from "./fixtures";

describe("A2-09 lesson audit", () => {
  it("keeps the lesson identity and reviewed task inventory without a duration claim", () => {
    expect(lessonA209.id).toBe("a2-09");
    expect(lessonA209.unitId).toBe("a2-09");
    expect(lessonA209.level).toBe("A2");
    expect(lessonA209.order).toBe(1);
    expect("duration" in lessonA209).toBe(false);
    expect(lessonA209.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|إتقان|\b\d+\s*دقيقة/i);
    expect(lessonA209.einfuehrung.contextAr).toContain("خيالي");
    expect(lessonA209.einfuehrung.connectionToPreviousAr).toContain("لا أول لقاء");

    expect(LESSON_META.find((item) => item.id === "a2-09")).toMatchObject({
      id: "a2-09",
      unitId: "a2-09",
      level: "A2",
      order: 1,
      titleDe: "Feste und Feiern",
    });
    expect(lessonA209.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z-reading",
      "z2",
      "z3",
      "z4",
      "z-listening",
      "z-writing",
    ]);
    expect(ids(lessonA209.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA209.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA209.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA209.writing)).toEqual(["w1", "w2", "w3", "w4"]);
    expect(ids(lessonA209.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA209.listening.questions)).toEqual(["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"]);
    expect(allTasks()).toHaveLength(39);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(39);
    expect(lessonA209.flashcards).toHaveLength(15);
    expect(lessonA209.pronunciation.items).toHaveLength(6);
    expect(lessonA209.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA209.mediation).toHaveLength(1);
    expect(lessonA209.interaction?.[0]?.rounds).toHaveLength(2);
  });

  it("maps all stated goals to answerable tasks in the UI's actual task contexts", () => {
    const validTaskIds = new Set<string>();
    for (const exercise of lessonA209.practiceBank) {
      validTaskIds.add(`practice:${lessonA209.id}:${exercise.id}`);
    }
    // The practice flow reveals only the first min(4, practiceBank.length) tasks.
    for (const exercise of lessonA209.practiceBank.slice(0, Math.min(4, lessonA209.practiceBank.length))) {
      validTaskIds.add(`practice:${lessonA209.id}:${exercise.id}`);
    }
    for (const exercise of lessonA209.miniTest) {
      validTaskIds.add(`mini-test:${lessonA209.id}:${exercise.id}`);
    }
    // The mini-test shows at most the first three multiple-choice tasks (progressive reveal).
    for (const exercise of lessonA209.miniTest
      .filter((item) => item.type === "multiple-choice")
      .slice(0, 3)) {
      validTaskIds.add(`flow-mini-test:${lessonA209.id}:${exercise.id}`);
    }
    for (const exercise of lessonA209.writing) {
      validTaskIds.add(`writing:${lessonA209.id}:${exercise.id}`);
    }
    for (const question of lessonA209.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA209.reading?.id}:${question.id}`);
    }
    for (const question of lessonA209.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA209.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA209.lernziele) {
      const evidence = goal.evidence;
      const expected = expectedEvidence[goal.id as keyof typeof expectedEvidence];
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      if (!evidence) throw new Error(`${goal.id} must have performance evidence`);
      if (!expected) throw new Error(`Unexpected A2-09 goal ${goal.id}`);
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence.exerciseIds).toEqual(expected.exerciseIds);
      expect(evidence.taskIds).toEqual(expected.taskIds);
      if (goal.id === "z3") {
        for (const exerciseId of ["e2", "e5", "e7", "e11", "e13", "m2", "m4"]) {
          expect(evidence.labelAr).toContain(exerciseId);
        }
      }
      const taskIds = evidence.taskIds ?? [];
      expect(new Set(evidence.exerciseIds).size).toBe(evidence.exerciseIds.length);
      expect(new Set(taskIds).size).toBe(taskIds.length);
      for (const taskId of taskIds) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence.exerciseIds).toContain(exerciseId);
      }
      for (const exerciseId of evidence.exerciseIds) {
        expect(taskIds.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      expect(taskIds.join(" ")).not.toMatch(/flow-listening|listening-transcript/);

      const allCorrectEvents = evidence.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      expect(getGoalEvidenceStatus(goal, lessonA209.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA209.id, allCorrectEvents)).toBe("evidenced");
      expect(
        getGoalEvidenceStatus(goal, lessonA209.id, [
          ...allCorrectEvents.slice(1),
          goalEvent(goal.id, evidence.exerciseIds[0], false),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA209.id, [
          ...allCorrectEvents,
          goalEvent(goal.id, evidence.exerciseIds[0], true, undefined, "a2-08"),
        ]),
      ).toBe("evidenced");
    }

    expect(validTaskIds.has("flow-mini-test:a2-09:m1")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-09:m2")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-09:m4")).toBe(false);

    for (const question of lessonA209.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA209.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA209.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA209.id}:${question.itemId}:${question.id}`);
    }
    const listeningGoal = lessonA209.lernziele.find((goal) => goal.id === "z-listening");
    if (!listeningGoal) throw new Error("A2-09 z-listening is required");
    const listeningEvents = ["q1", "q2", "q3"].map((exerciseId) =>
      goalEvent("z-listening", exerciseId, true),
    );
    expect(
      getGoalEvidenceStatus(listeningGoal, lessonA209.id, [
        listeningEvents[1],
        listeningEvents[2],
        goalEvent("z-listening", "q1", true, "listening-transcript:a2-09:l1:q1"),
      ]),
    ).toBe("pending");
  });
});
