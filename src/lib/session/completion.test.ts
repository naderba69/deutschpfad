import {describe, expect, it} from "vitest";
import type {AnalyticsEvent} from "@/types/analytics";
import {completedSectionIds, decideSectionCompletion} from "./completion";

const sc = (lessonId: string, sectionId: string): AnalyticsEvent =>
  ({type: "section-completed", ts: 1, lessonId, sectionId});

describe("إنجاز الأقسام — الاشتقاق من الأحداث", () => {
  it("لا شيء مكتمل بلا أحداث", () => {
    expect(completedSectionIds([], "a1-01").size).toBe(0);
  });

  it("يقرأ الأحداث الخاصة بالدرس المطلوب فقط", () => {
    const events = [sc("a1-01", "uebungen"), sc("a1-02", "theorie")];
    expect([...completedSectionIds(events, "a1-01")]).toEqual(["uebungen"]);
  });

  it("يتجاهل أحداثاً من أنواع أخرى حتى لو حملت الحقول نفسها", () => {
    const events: AnalyticsEvent[] = [
      {type: "lesson-view", ts: 1, lessonId: "a1-01"},
      {type: "lesson-completed", ts: 1, lessonId: "a1-01", unitId: "a1-01"},
    ];
    expect(completedSectionIds(events, "a1-01").size).toBe(0);
  });

  it("يتجاهل معرّف قسم غير معروف للحصة", () => {
    expect(completedSectionIds([sc("a1-01", "gibts-nicht")], "a1-01").size).toBe(0);
  });

  it("التكرار لا يُضاعف المجموعة", () => {
    const events = [sc("a1-01", "minitest"), sc("a1-01", "minitest")];
    expect(completedSectionIds(events, "a1-01").size).toBe(1);
  });

  it("قرار التسجيل: يسجّل الجديد، ويمنع المكرر، ويرفض المجهول", () => {
    expect(decideSectionCompletion([], "a1-01", "uebungen")).toEqual({record: true});
    expect(decideSectionCompletion([sc("a1-01", "uebungen")], "a1-01", "uebungen")).toEqual({
      record: false,
      reason: "already-completed",
    });
    expect(decideSectionCompletion([], "a1-01", "xyz")).toEqual({
      record: false,
      reason: "unknown-section",
    });
  });

  it("إنجاز درس لا يمنع تسجيل القسم نفسه في درس آخر", () => {
    expect(decideSectionCompletion([sc("a1-02", "uebungen")], "a1-01", "uebungen")).toEqual({record: true});
  });
});
