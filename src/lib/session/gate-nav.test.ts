import {describe, expect, it} from "vitest";
import {canOpenSection, lastOpenIndex, lockMessageFor} from "./gate-nav";

const AVAILABLE = ["lernziele", "einfuehrung", "theorie", "verben", "uebungen", "minitest"];

describe("بوابة التنقّل بين المراحل", () => {
  it("في البداية: القسم الأول مفتوح، وكل مرحلة بعده مقفلة", () => {
    const done = new Set<string>();
    expect(canOpenSection(AVAILABLE, done, "lernziele")).toBe(true);
    expect(canOpenSection(AVAILABLE, done, "einfuehrung")).toBe(false);
    expect(canOpenSection(AVAILABLE, done, "theorie")).toBe(false);
  });

  it("التنقّل داخل المرحلة نفسها حرّ بعد فتحها", () => {
    // مرحلة التمهيد تصبح الحالية بعد إكمال الأهداف؛ قسماها مفتوحان معاً
    const done = new Set(["lernziele"]);
    expect(canOpenSection(["lernziele", "review", "einfuehrung", "theorie"], done, "review")).toBe(true);
    expect(canOpenSection(["lernziele", "review", "einfuehrung", "theorie"], done, "einfuehrung")).toBe(true);
    expect(canOpenSection(["lernziele", "review", "einfuehrung", "theorie"], done, "theorie")).toBe(false);
  });

  it("إكمال المرحلة السابقة يفتح المرحلة التالية", () => {
    expect(canOpenSection(AVAILABLE, new Set(["lernziele", "einfuehrung"]), "theorie")).toBe(true);
  });

  it("قسم غير معروف لا يُفتح", () => {
    expect(canOpenSection(AVAILABLE, new Set(), "unknown")).toBe(false);
  });

  it("رسالة القفل تسمّي المرحلة التي يجب إكمالها", () => {
    const msg = lockMessageFor(AVAILABLE, new Set(["lernziele"]), "theorie");
    expect(msg).toContain("التمهيد والاسترجاع");
    expect(lockMessageFor(AVAILABLE, new Set(["lernziele", "einfuehrung"]), "theorie")).toBeNull();
  });
});

describe("أقرب قسم مفتوح", () => {
  it("من قسم مقفول يرجع إلى آخر قسم مفتوح قبله", () => {
    const ids = ["lernziele", "einfuehrung", "theorie", "verben"];
    // الأهداف مكتملة (المرحلة 1)، والتمهيد غير مكتمل: الفهرس 2 (theorie) مقفول
    expect(lastOpenIndex(ids, new Set(["lernziele"]), 2)).toBe(1);
  });
  it("القسم المفتوح يبقى كما هو", () => {
    expect(lastOpenIndex(["lernziele", "einfuehrung"], new Set(), 0)).toBe(0);
  });
});
