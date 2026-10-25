/**
 * a1-12 — النطقُ والكتابةُ وأنشطةُ التحقّق الذاتي والبطاقاتُ الخمس والعشرون · ربطُ كل هدفٍ بمهامّ حقيقية واشتراطُ النتائج الصحيحة · غيابُ حقل مدة الدرس وادّعاءِ اعتماد Goethe أو CEFR (جزء من تدقيق الدرس)
 * فُصل من a1-12.test.ts في الدفعة 106 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { getLessonMeta, LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import { lessonA112 } from "../a1-12";
import { reading } from "./fixtures";
import { findTask } from "./fixtures";
import { validTaskIds } from "./fixtures";
import { allCorrectGoalEvents } from "./fixtures";
import { hasDurationField } from "./fixtures";

describe("A1-12 audited lesson content", () => {
  it("checks pronunciation practice, writing tasks, self-check activities, and all 25 flashcards", () => {
    expect(lessonA112.pronunciation.items).toHaveLength(6);
    expect(lessonA112.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA112.pronunciation.tip.trim()).toBeTruthy();
    for (const item of lessonA112.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const item of lessonA112.pronunciation.shadowing ?? []) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.tip?.trim()).toBeTruthy();
    }
    expect(
      lessonA112.pronunciation.items.find((item) => item.de === "die Sonne")?.note,
    ).toContain("[ˈzɔnə]");
    expect(
      lessonA112.pronunciation.items.find((item) => item.de === "der Regen")?.note,
    ).toContain("لا صوت غ /ɣ/");
    expect(
      lessonA112.pronunciation.items.find((item) => item.de === "der Wind")?.note,
    ).toContain("/v/");
    expect(lessonA112.pronunciation.shadowing?.[2]?.tip).toContain("/g/");
    expect(lessonA112.pronunciation.shadowing?.[0]?.tip).toContain("/kalt/");

    for (const id of ["e10", "w3"]) {
      const dictation = findTask(id);
      expect(dictation.type).toBe("dictation");
      if (dictation.type === "dictation") {
        expect(dictation.caseSensitive, `${id} preserves German capitalization`).toBe(true);
        expect(evaluateExercise(dictation, dictation.audioText.toLowerCase()).isCorrect).toBe(false);
      }
    }

    expect(lessonA112.writing).toHaveLength(3);
    expect(lessonA112.mediation).toHaveLength(1);
    expect(lessonA112.mediation?.[0].keyPointsAr).toHaveLength(3);
    expect(lessonA112.mediation?.[0].taskAr).toContain("ليست توقعاً حقيقياً");
    expect(lessonA112.mediation?.[0].taskAr).toContain("دليلاً مسجلاً");
    expect(lessonA112.mediation?.[0].sourceDe).toContain("Es sind 15 Grad.");
    const personalWarmth = findTask("e16");
    expect(personalWarmth.type).toBe("multiple-choice");
    if (personalWarmth.type === "multiple-choice") {
      expect(personalWarmth.questionDe).toContain("Ich bin gerade gelaufen");
      expect(personalWarmth.explanation).toContain("Mir ist warm");
    }
    expect(lessonA112.interaction).toHaveLength(1);
    expect(lessonA112.interaction?.[0].rounds).toHaveLength(2);
    expect(lessonA112.interaction?.[0].rounds[0]?.options[1]?.de).toBe(
      "Heute ist es kalt und regnerisch.",
    );
    expect(lessonA112.interaction?.[0].strategyAr).toContain("لا يقيس إنتاج كلام شفهي");
    for (const round of lessonA112.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options.length).toBeGreaterThanOrEqual(2);
    }
    expect(reading().discussionAr).toContain("غير مسجّل كدليل");

    expect(lessonA112.flashcards).toHaveLength(25);
    expect(new Set(lessonA112.flashcards.map((card) => card.id)).size).toBe(25);
    expect(new Set(lessonA112.flashcards.map((card) => card.de.trim().toLowerCase())).size).toBe(25);
    for (const card of lessonA112.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }
    expect(lessonA112.flashcards.find((card) => card.id === "fc3")?.example).toBe(
      "Der Regen beginnt.",
    );
    expect(lessonA112.flashcards.find((card) => card.id === "fc18")?.ar).toContain(
      "في هذا السياق",
    );
  });

  it("maps every goal to real tasks and requires correct results, never opening or revealed transcripts", () => {
    const actualTaskIds = validTaskIds();
    expect(lessonA112.lernziele).toHaveLength(9);
    for (const goal of lessonA112.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      expect(goal.evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(goal.evidence?.taskIds?.length).toBeGreaterThan(0);
      expect(goal.evidence?.completion).toBe("all-correct");
      expect(goal.evidence?.labelAr.trim()).toBeTruthy();
      expect(new Set(goal.evidence?.exerciseIds).size).toBe(goal.evidence?.exerciseIds.length);
      expect(new Set(goal.evidence?.taskIds).size).toBe(goal.evidence?.taskIds?.length);

      for (const exerciseId of goal.evidence?.exerciseIds ?? []) {
        expect(
          goal.evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`)),
          `${goal.id} maps ${exerciseId}`,
        ).toBe(true);
        expect(findTask(exerciseId), `${goal.id} task exists: ${exerciseId}`).toBeDefined();
      }
      for (const taskId of goal.evidence?.taskIds ?? [])
        expect(actualTaskIds.has(taskId), `${goal.id} real taskId ${taskId}`).toBe(true);

      expect(getGoalEvidenceStatus(goal, lessonA112.id, [])).toBe("pending");
      const openedOnly: AnalyticsEvent = {
        type: "lesson-view",
        ts: 1,
        lessonId: lessonA112.id,
      };
      expect(getGoalEvidenceStatus(goal, lessonA112.id, [openedOnly])).toBe("pending");

      const events = allCorrectGoalEvents(goal.id);
      expect(getGoalEvidenceStatus(goal, lessonA112.id, events)).toBe("evidenced");
      if ((goal.evidence?.exerciseIds.length ?? 0) > 1)
        expect(getGoalEvidenceStatus(goal, lessonA112.id, events.slice(0, 1))).toBe("pending");

      const first = events[0];
      if (first?.type !== "exercise-result") throw new Error("Expected exercise-result evidence");
      expect(
        getGoalEvidenceStatus(goal, lessonA112.id, [
          { ...first, correct: false },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA112.id, [
          { ...first, lessonId: "a1-11" },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA112.id, [
          { ...first, taskId: `flow-listening:${lessonA112.id}:unrelated:${first.exerciseId}` },
          ...events.slice(1),
        ]),
      ).toBe("pending");

      if (goal.id === "z8") {
        const revealed = events.map((event) => {
          if (event.type !== "exercise-result") return event;
          const question = lessonA112.listening.questions.find(
            (candidate) => candidate.id === event.exerciseId,
          );
          if (!question) throw new Error(`Missing A1-12 listening question ${event.exerciseId}`);
          return {
            ...event,
            taskId: getListeningQuestionTaskId(
              lessonA112.id,
              question.itemId,
              question.id,
              true,
            ),
          };
        });
        expect(getGoalEvidenceStatus(goal, lessonA112.id, revealed)).toBe("pending");
      }
    }

    expect(
      lessonA112.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((taskId) => /^(?:mediation|interaction|speaking|flow-listening):/.test(taskId)),
      ),
    ).toBe(false);
    expect(lessonA112.lernziele.find((goal) => goal.id === "z9")?.evidence?.taskIds).toEqual([
      "writing:a1-12:w1",
    ]);
  });

  it("has no lesson-duration field or Goethe/CEFR endorsement claim", () => {
    const metadata = getLessonMeta(lessonA112.id);
    expect(metadata).toBeDefined();
    expect(LESSON_META.some((item) => item.id === lessonA112.id)).toBe(true);
    expect(hasDurationField(lessonA112)).toBe(false);
    expect(hasDurationField(metadata)).toBe(false);
    expect(JSON.stringify(lessonA112)).not.toMatch(/Goethe|CEFR/i);
    expect(JSON.stringify(metadata)).not.toMatch(/Goethe|CEFR/i);
  });
});
