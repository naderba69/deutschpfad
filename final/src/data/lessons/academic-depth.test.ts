import { describe, expect, it } from "vitest";
import { lessonA206 } from "./a2/a2-06";
import { lessonA207 } from "./a2/a2-07";
import { lessonA208 } from "./a2/a2-08";
import { lessonA209 } from "./a2/a2-09";

/** الدروس التي خضعت لإعادة بناء أكاديمية عميقة. */
export const ACADEMIC_LESSONS = [lessonA206, lessonA207, lessonA208, lessonA209];

describe("academic depth lessons", () => {
  it("registers the rebuilt lessons with the required academic depth", () => {
    expect(ACADEMIC_LESSONS.map((lesson) => lesson.id)).toEqual(["a2-06", "a2-07", "a2-08", "a2-09"]);
    for (const lesson of ACADEMIC_LESSONS) {
      expect(lesson.theory.every((block) => block.explanationAr.length >= 900)).toBe(true);
      expect(lesson.reading?.paragraphs.join(" ").split(/\s+/).length).toBeGreaterThanOrEqual(150);
      expect(lesson.reading?.glossary.length).toBeGreaterThanOrEqual(8);
      expect(lesson.reading?.questions.length).toBeGreaterThanOrEqual(4);
      expect(lesson.practiceBank.length).toBeGreaterThanOrEqual(14);
      expect(new Set(lesson.practiceBank.map((exercise) => exercise.type)).size).toBeGreaterThanOrEqual(5);
      expect(lesson.flashcards.length).toBeGreaterThanOrEqual(12);
    }
  });
});
