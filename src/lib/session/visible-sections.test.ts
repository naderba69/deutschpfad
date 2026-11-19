import {describe, expect, it} from "vitest";
import {sectionIndexFromUrl, visibleSectionDefs, visibleSectionIds, type VisibilityInput} from "./visible-sections";

const BASE: VisibilityInput = {
  level: "A1",
  hasMediation: false,
  hasInteraction: false,
  reviewAvailable: false,
  hasRelatedResources: false,
};

describe("الأقسام المعروضة لدرس", () => {
  it("درس A1 بلا شروط إضافية: لا verben ولا وساطة ولا تفاعل ولا تعمّق", () => {
    const ids = visibleSectionIds(BASE);
    expect(ids).not.toContain("verben");
    expect(ids).not.toContain("mediation");
    expect(ids).not.toContain("interaction");
    expect(ids).not.toContain("vertiefung");
    expect(ids).not.toContain("review");
    expect(ids).toContain("lernziele");
    expect(ids).toContain("uebungen");
    expect(ids).toContain("minitest");
  });

  it("verben يظهر فقط في B1 وB2", () => {
    expect(visibleSectionIds({...BASE, level: "A2"})).not.toContain("verben");
    expect(visibleSectionIds({...BASE, level: "B1"})).toContain("verben");
    expect(visibleSectionIds({...BASE, level: "B2"})).toContain("verben");
  });

  it("كل قسم شرطي يظهر حين يتحقق شرطه", () => {
    const ids = visibleSectionIds({
      level: "B2",
      hasMediation: true,
      hasInteraction: true,
      reviewAvailable: true,
      hasRelatedResources: true,
    });
    for (const id of ["verben", "mediation", "interaction", "vertiefung", "review"]) {
      expect(ids).toContain(id);
    }
  });

  it("الترتيب يتبع LESSON_SECTIONS", () => {
    const ids = visibleSectionIds({...BASE, level: "B2", hasMediation: true});
    const indexOf = (id: string) => ids.indexOf(id);
    expect(indexOf("lernziele")).toBeLessThan(indexOf("theorie"));
    expect(indexOf("theorie")).toBeLessThan(indexOf("uebungen"));
    expect(indexOf("uebungen")).toBeLessThan(indexOf("minitest"));
  });
});

describe("رابط الفتح المباشر ?section=", () => {
  const IDS = ["lernziele", "theorie", "uebungen"];
  it("يعيد فهرس القسم الموجود", () => {
    expect(sectionIndexFromUrl("?section=uebungen", IDS)).toBe(2);
  });
  it("يعيد -1 لقسم غير معروض أو لغياب المعامل", () => {
    expect(sectionIndexFromUrl("?section=mediation", IDS)).toBe(-1);
    expect(sectionIndexFromUrl("", IDS)).toBe(-1);
  });
});

describe("تعريفات الأقسام المعروضة", () => {
  it("تطابق الأسماء المعروضة في visibleSectionIds", () => {
    const lesson = {level: "B2", mediation: [{}], interaction: []};
    const defs = visibleSectionDefs(lesson, false, true).map((d) => d.id);
    expect(defs).toEqual(visibleSectionIds({
      level: "B2",
      hasMediation: true,
      hasInteraction: false,
      reviewAvailable: false,
      hasRelatedResources: true,
    }));
  });
});
