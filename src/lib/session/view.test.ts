import {describe, expect, it} from "vitest";
import {buildSessionView, sectionHref} from "./view";

const AVAILABLE = ["lernziele", "einfuehrung", "theorie", "uebungen", "minitest", "fehler"];

describe("عرض الحصة", () => {
  it("الروابط تفتح القسم داخل صفحة الدرس", () => {
    expect(sectionHref("a1-01", "uebungen")).toBe("/lesson/a1-01?section=uebungen");
  });

  it("في البداية: المرحلة الأولى حالية، والمراحل الأخرى مقفلة أو متخطاة", () => {
    const v = buildSessionView("a1-01", {availableSectionIds: AVAILABLE, completedSectionIds: new Set()});
    expect(v.currentStageId).toBe("ziele");
    expect(v.complete).toBe(false);
    expect(v.totalMinutes).toBe(90);
    expect(v.stages).toHaveLength(10);
  });

  it("كل قسم يحمل طريقة إثباته الصحيحة", () => {
    const v = buildSessionView("a1-01", {availableSectionIds: AVAILABLE, completedSectionIds: new Set()});
    const uebungen = v.stages.flatMap((s) => s.sections).find((s) => s.sectionId === "uebungen");
    const theorie = v.stages.flatMap((s) => s.sections).find((s) => s.sectionId === "theorie");
    expect(uebungen?.proof).toBe("exercise");
    expect(theorie?.proof).toBe("acknowledge");
  });

  it("الإنجاز ينعكس على القسم والمرحلة", () => {
    const v = buildSessionView("a1-01", {
      availableSectionIds: AVAILABLE,
      completedSectionIds: new Set(["lernziele"]),
    });
    expect(v.currentStageId).toBe("einstieg");
    expect(v.stages[0].state).toBe("done");
    expect(v.stages[0].sections[0].completed).toBe(true);
  });

  it("إكمال كل المراحل المتوفرة يُعلن انتهاء الحصة", () => {
    const v = buildSessionView("a1-01", {
      availableSectionIds: AVAILABLE,
      completedSectionIds: new Set(AVAILABLE),
    });
    expect(v.complete).toBe(true);
    expect(v.currentStageId).toBeNull();
  });
});
