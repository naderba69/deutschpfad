import {describe, expect, it} from "vitest";

import {INTERACTIVE_STORIES} from "@/data/stories";

describe("ترجمة قصة مستقبل العمل", () => {
  it("يحفظ أن الذكاء الاصطناعي هو الذي قد يغيّر العمل", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b2-zukunft-arbeit");
    const opening = story?.segments.find(({ id }) => id === 1);

    expect(opening?.de).toContain("wie künstliche Intelligenz die Arbeit verändern könnte");
    expect(opening?.ar).toContain("الكيفية التي يمكن أن يغيّر بها الذكاء الاصطناعي العمل");
    expect(opening?.ar).not.toContain("كيفية إمكان تغيّر العمل بالذكاء الاصطناعي");
  });
});
