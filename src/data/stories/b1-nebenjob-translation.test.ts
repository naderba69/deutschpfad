import { describe, expect, it } from "vitest";

import { STORIES_WAVE2 } from "@/data/stories/wave2";

describe("ترجمة قصة العمل الإضافي", () => {
  it("يميز العمل الجانبي من العمل الإضافي ويحفظ مدة العمل دون اختلاق أجر", () => {
    const story = STORIES_WAVE2.find(({ id }) => id === "b1-nebenjob");
    const segment = story?.segments.find(({ id }) => id === 2);

    expect(story?.titleAr).toBe("العمل الجانبي");
    expect(story?.titleAr).not.toBe("العمل الإضافي");
    expect(segment?.de).toContain("acht Stunden am Wochenende");
    expect(segment?.de).toContain("verdient damit eigenes Geld");
    expect(segment?.ar).toContain("ثماني ساعات في عطلة نهاية الأسبوع");
    expect(segment?.ar).toContain("وتكسب مالها الخاص");
    expect(segment?.ar).not.toContain("12 يورو");
  });
});
