import {describe, expect, it} from "vitest";
import {LESSON_SECTIONS} from "@/components/lesson/lesson-sections";
import {SESSION_STAGES, SESSION_TOTAL_MINUTES, sectionIdsOfStages} from "./stages";
import {stageBudgetMatches} from "./plan";

describe("مراحل الحصة — التغطية والتسلسل", () => {
  it("كل قسم من أقسام الدرس ينتمي إلى مرحلة واحدة بالضبط", () => {
    const lessonIds = LESSON_SECTIONS.map((s) => s.id).sort();
    const stageIds = sectionIdsOfStages().sort();
    expect(stageIds).toEqual(lessonIds);
  });

  it("لا يتكرر قسم في أكثر من مرحلة", () => {
    const all = sectionIdsOfStages();
    expect(new Set(all).size).toBe(all.length);
  });

  it("كل معرّف مرحلة فريد", () => {
    const ids = SESSION_STAGES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("ميزانية المراحل = مدة الحصة (90 دقيقة)", () => {
    const sum = SESSION_STAGES.reduce((s, x) => s + x.minutes, 0);
    expect(sum).toBe(SESSION_TOTAL_MINUTES);
    expect(SESSION_TOTAL_MINUTES).toBe(90);
    expect(stageBudgetMatches()).toBe(true);
  });

  it("التسلسل التعليمي: استرجاع ← أهداف ← تمهيد ← مدخل ← تطبيق ← إنتاج ← تثبيت", () => {
    expect(SESSION_STAGES.map((s) => s.id)).toEqual([
      "recall", "objectives", "activation", "input", "guided", "production", "consolidate",
    ]);
  });
});
