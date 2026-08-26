import { describe, expect, it } from "vitest";
import { lessonA206 } from "./a2/a2-06";

/** الدروس التي خضعت لإعادة بناء أكاديمية عميقة. */
export const ACADEMIC_LESSONS = [lessonA206];

describe("academic depth lessons", () => {
  it("registers a2-06 with the required academic depth", () => {
    expect(ACADEMIC_LESSONS.map((lesson) => lesson.id)).toContain("a2-06");
    expect(lessonA206.theory.every((block) => block.explanationAr.length >= 900)).toBe(true);
    expect(lessonA206.reading?.paragraphs.join(" ").split(/\s+/).length).toBeGreaterThanOrEqual(150);
    expect(lessonA206.reading?.glossary.length).toBeGreaterThanOrEqual(8);
    expect(lessonA206.reading?.questions.length).toBeGreaterThanOrEqual(4);
    expect(lessonA206.practiceBank.length).toBeGreaterThanOrEqual(14);
    expect(new Set(lessonA206.practiceBank.map((exercise) => exercise.type)).size).toBeGreaterThanOrEqual(5);
    expect(lessonA206.flashcards.length).toBeGreaterThanOrEqual(12);
  });
});
