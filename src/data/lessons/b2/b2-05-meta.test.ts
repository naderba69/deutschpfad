import { describe, expect, it } from "vitest";

import { lessonB205 } from "@/data/lessons/b2/b2-05";
import { LESSON_META } from "@/data/lessons/meta";

describe("B2-05 metadata alignment", () => {
  it("keeps the meta row aligned with the lesson title", () => {
    const meta = LESSON_META.find((candidate) => candidate.id === "b2-05");
    expect(meta?.titleAr).toBe(lessonB205.titleAr);
    expect(meta?.titleDe).toBe(lessonB205.titleDe);
  });
});
