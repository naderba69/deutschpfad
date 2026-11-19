/**
 * a1-11 — ربطُ كل هدف تعلّمٍ بمهامٍ مُقيّمة حقيقية وعدُّ النتائج الصحيحة وحدها · وعدمُ استعمال حقل مدة الدرس وعدمُ ادّعاء مصادقة غوته أو الإطار الأوروبي (جزء من تدقيق الدرس)
 * فُصل من a1-11.test.ts في الدفعة 110 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { LESSON_META } from "@/data/lessons/meta";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import { lessonA111 } from "../a1-11";
import { validTaskIds } from "./fixtures";
import { allCorrectGoalEvents } from "./fixtures";
import { hasDurationField } from "./fixtures";

describe("A1-11 audited lesson content", () => {
  it("maps every learning goal to real assessed tasks and counts correct results only", () => {
    const actualIds = validTaskIds();
    expect(lessonA111.lernziele).toHaveLength(9);
    for (const goal of lessonA111.lernziele) {
      expect(goal.evidence, `${goal.id} evidence mapping`).toBeDefined();
      expect(goal.evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(goal.evidence?.taskIds?.length).toBeGreaterThan(0);
      expect(goal.evidence?.completion).toBe("all-correct");
      expect(goal.evidence?.labelAr.trim()).toBeTruthy();
      for (const exerciseId of goal.evidence?.exerciseIds ?? []) {
        expect(
          goal.evidence?.taskIds?.some((taskId) =>
            taskId.endsWith(`:${exerciseId}`),
          ),
          `${goal.id} maps ${exerciseId}`,
        ).toBe(true);
      }
      for (const taskId of goal.evidence?.taskIds ?? []) {
        expect(actualIds.has(taskId), `${goal.id} task ${taskId}`).toBe(true);
      }

      expect(getGoalEvidenceStatus(goal, lessonA111.id, [])).toBe("pending");
      const openedOnly: AnalyticsEvent = {
        type: "lesson-view",
        ts: 1,
        lessonId: lessonA111.id,
      };
      expect(getGoalEvidenceStatus(goal, lessonA111.id, [openedOnly])).toBe(
        "pending",
      );

      const events = allCorrectGoalEvents(goal.id);
      expect(getGoalEvidenceStatus(goal, lessonA111.id, events)).toBe(
        "evidenced",
      );
      if ((goal.evidence?.exerciseIds.length ?? 0) > 1) {
        expect(
          getGoalEvidenceStatus(goal, lessonA111.id, events.slice(0, 1)),
        ).toBe("pending");
      }
      const first = events[0];
      if (first?.type !== "exercise-result")
        throw new Error("Expected an exercise-result event");
      expect(
        getGoalEvidenceStatus(goal, lessonA111.id, [
          { ...first, correct: false },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA111.id, [
          { ...first, lessonId: "a1-10" },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA111.id, [
          { ...first, taskId: "flow-listening:a1-11:l1:q1" },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      if (goal.id === "z8") {
        const transcriptRevealedEvents = events.map((event) => {
          if (event.type !== "exercise-result") return event;
          const question = lessonA111.listening.questions.find(
            (candidate) => candidate.id === event.exerciseId,
          );
          if (!question)
            throw new Error(
              `A1-11 listening question ${event.exerciseId} is missing`,
            );
          return {
            ...event,
            taskId: getListeningQuestionTaskId(
              lessonA111.id,
              question.itemId,
              question.id,
              true,
            ),
          };
        });
        expect(
          getGoalEvidenceStatus(goal, lessonA111.id, transcriptRevealedEvents),
        ).toBe("pending");
      }
    }
  });

  it("uses no lesson-duration field and makes no Goethe/CEFR endorsement claim", () => {
    const metadata = LESSON_META.find((item) => item.id === lessonA111.id);
    expect(metadata).toBeDefined();
    expect(hasDurationField(lessonA111)).toBe(false);
    expect(hasDurationField(metadata)).toBe(false);
    expect(JSON.stringify(lessonA111)).not.toMatch(/Goethe|CEFR|63\s*Euro/i);
    expect(
      lessonA111.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((id) => id.startsWith("flow-listening:")),
      ),
    ).toBe(false);
  });
});
