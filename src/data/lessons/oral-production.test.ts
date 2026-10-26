import {describe, expect, it} from "vitest";

import {lessonA113} from "@/data/lessons/a1/a1-13";
import {lessonA213} from "@/data/lessons/a2/a2-13";
import {lessonB111} from "@/data/lessons/b1/b1-11";
import {lessonB210} from "@/data/lessons/b2/b2-10";
import {LESSON_META} from "@/data/lessons/meta";
import {buildDefaultOralProductionTask, ORAL_PROMPTS_BY_LESSON} from "@/lib/lesson/oral-production";
import type {Lesson} from "@/types/lesson";

const pilotLessons: Lesson[] = [lessonA113, lessonA213, lessonB111, lessonB210];

describe("open oral production pilot tasks", () => {
  it("provides a level-appropriate spoken prompt and self-review in each level", () => {
    expect(pilotLessons.map((lesson) => lesson.level)).toEqual(["A1", "A2", "B1", "B2"]);
    for (const lesson of pilotLessons) {
      expect(lesson.oralProduction, lesson.id).toHaveLength(1);
      const [task] = lesson.oralProduction!;
      expect(task.id).toMatch(/^oral-/);
      expect(task.promptAr.trim().length).toBeGreaterThan(20);
      expect(task.selfReview.length).toBeGreaterThanOrEqual(3);
      expect(task.selfReview.every((item) => item.trim().length > 0)).toBe(true);
    }
  });

  it("can build a level-scaled open-speaking task for every indexed lesson", () => {
    expect(LESSON_META).toHaveLength(52);
    expect(Object.keys(ORAL_PROMPTS_BY_LESSON).sort()).toEqual(LESSON_META.map((meta) => meta.id).sort());
    const generated = LESSON_META.map((meta) => buildDefaultOralProductionTask(meta));
    expect(new Set(generated.map((task) => task.id)).size).toBe(LESSON_META.length);
    for (const task of generated) {
      expect(task.promptAr.trim().length).toBeGreaterThan(20);
      expect(task.promptDe?.trim().length).toBeGreaterThan(20);
      expect(task.selfReview.length).toBeGreaterThanOrEqual(3);
      const lessonId = task.id.slice("oral-practice-".length);
      expect(task.promptAr).toBe(ORAL_PROMPTS_BY_LESSON[lessonId].promptAr);
      expect(task.promptDe).toBe(ORAL_PROMPTS_BY_LESSON[lessonId].promptDe);
      expect(task.prompts).toEqual(ORAL_PROMPTS_BY_LESSON[lessonId].prompts);
    }
  });

  it("does not attach the optional self-practice tasks to objective evidence", () => {
    for (const lesson of pilotLessons) {
      for (const goal of lesson.lernziele) {
        expect(goal.evidence?.taskIds ?? []).not.toContain(
          lesson.oralProduction![0].id,
        );
      }
    }
  });
});
