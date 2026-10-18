/**
 * a2-07 — الجرد والموضع وأدلّة الأهداف (جزء من تدقيق الدرس)
 * فُصل من a2-07.test.ts في الدفعة 101 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA207 } from "@/data/lessons/a2/a2-07";
import { LESSON_META } from "@/data/lessons/meta";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { allTasks, ids } from "./fixtures";

describe("A2-07 audited lesson", () => {
  it("keeps the lesson position, complete inventory, and exact assessable objective evidence", () => {
    expect(lessonA207.id).toBe("a2-07");
    expect(lessonA207.unitId).toBe("a2-07");
    expect(lessonA207.level).toBe("A2");
    expect(lessonA207.order).toBe(1);
    expect(LESSON_META.find((item) => item.id === "a2-07")).toMatchObject({
      id: "a2-07",
      unitId: "a2-07",
      order: 1,
    });
    expect(lessonA207.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z2",
      "z-bank",
      "z3",
      "z-reading",
      "z-writing",
    ]);
    expect(ids(lessonA207.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(lessonA207.review?.map((exercise) => exercise.instructionAr)).toEqual([
      "مراجعة مستوى A1 من الدرس a1-07: اختر أداة الاسم المناسبة بعد الفعل kaufen:",
      "مراجعة مفردات مستوى A1 من الدرس a1-07: اختر المعنى الصحيح:",
      "مراجعة مستوى A1 من الدرس a1-07: أكمل جمع الاسم مع أداة التعريف، لا عبارة مبلغ مالي:",
    ]);
    expect(ids(lessonA207.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA207.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA207.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(lessonA207.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA207.listening.questions)).toEqual(["q1", "q2", "q3", "q4"]);
    expect(allTasks()).toHaveLength(33);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(33);
    expect("duration" in lessonA207).toBe(false);
    expect(lessonA207.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|\b\d+\s*دقيقة/i);

    const expectedEvidence = {
      z1: {
        exerciseIds: ["e1", "e2", "e7", "e13", "e14", "m1", "m3", "w1"],
        taskIds: [
          "practice:a2-07:e1",
          "flow-practice:a2-07:e1",
          "practice:a2-07:e2",
          "flow-practice:a2-07:e2",
          "practice:a2-07:e7",
          "practice:a2-07:e13",
          "practice:a2-07:e14",
          "mini-test:a2-07:m1",
          "mini-test:a2-07:m3",
          "writing:a2-07:w1",
        ],
      },
      z2: {
        exerciseIds: ["e3", "e5", "e6", "e9", "m2", "m4", "m5", "w2", "w3"],
        taskIds: [
          "practice:a2-07:e3",
          "flow-practice:a2-07:e3",
          "practice:a2-07:e5",
          "practice:a2-07:e6",
          "practice:a2-07:e9",
          "mini-test:a2-07:m2",
          "mini-test:a2-07:m4",
          "mini-test:a2-07:m5",
          "writing:a2-07:w2",
          "writing:a2-07:w3",
        ],
      },
      "z-bank": {
        exerciseIds: ["e8", "e10", "e11", "e12"],
        taskIds: [
          "practice:a2-07:e8",
          "practice:a2-07:e10",
          "practice:a2-07:e11",
          "practice:a2-07:e12",
        ],
      },
      z3: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l2:q4"],
      },
      "z-reading": {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-07:rq1",
          "reading:read-a2-07:rq2",
          "reading:read-a2-07:rq3",
          "reading:read-a2-07:rq4",
        ],
      },
      "z-writing": {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: ["writing:a2-07:w1", "writing:a2-07:w2", "writing:a2-07:w3"],
      },
    };

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA207.practiceBank) {
      validTaskIds.add(`practice:${lessonA207.id}:${exercise.id}`);
    }
    // ordinary practice samples five random items; lesson-flow reveals only its first min(4, bank size).
    for (const exercise of lessonA207.practiceBank.slice(
      0,
      Math.min(4, lessonA207.practiceBank.length),
    )) {
      validTaskIds.add(`flow-practice:${lessonA207.id}:${exercise.id}`);
    }
    for (const exercise of lessonA207.miniTest) {
      validTaskIds.add(`mini-test:${lessonA207.id}:${exercise.id}`);
    }
    for (const exercise of lessonA207.writing) {
      validTaskIds.add(`writing:${lessonA207.id}:${exercise.id}`);
    }
    for (const question of lessonA207.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA207.reading?.id}:${question.id}`);
    }
    for (const question of lessonA207.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA207.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      expect(evidence?.completion).toBe("all-correct");
      expect(evidence?.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence?.exerciseIds).toEqual(expectedEvidence[goal.id as keyof typeof expectedEvidence].exerciseIds);
      expect(evidence?.taskIds).toEqual(expectedEvidence[goal.id as keyof typeof expectedEvidence].taskIds);
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(
            lessonA207.practiceBank
              .slice(0, Math.min(4, lessonA207.practiceBank.length))
              .some((exercise) => exercise.id === exerciseId),
          ).toBe(true);
        }
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    for (const question of lessonA207.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA207.id}:${question.itemId}:${question.id}`);
    }
    expect(
      lessonA207.lernziele.every(
        (goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")),
      ),
    ).toBe(true);
    expect(
      lessonA207.lernziele
        .flatMap((goal) => goal.evidence?.taskIds ?? [])
        .join(" "),
    ).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(lessonA207.lernziele.some((goal) => /sprechen|aussprechen|telefonieren/i.test(goal.de))).toBe(
      false,
    );
  });
});
