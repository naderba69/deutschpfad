import {describe, expect, it} from "vitest";
import {LESSON_SECTIONS} from "@/components/lesson/lesson-sections";
import {SECTION_PROOF, SESSION_STAGES, SESSION_TOTAL_MINUTES, sectionIdsOfStages} from "./stages";
import {stageBudgetMatches} from "./plan";

describe("مراحل الحصة — التغطية والتسلسل", () => {
  it("كل قسم من أقسام الدرس (17) ينتمي إلى مرحلة واحدة بالضبط", () => {
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

  it("التسلسل الأكاديمي: 10 مراحل بالترتيب المعتمد", () => {
    expect(SESSION_STAGES.map((s) => s.id)).toEqual([
      "ziele", "einstieg", "wortschatz", "grammatik", "hoeren-lesen",
      "gezielte-uebungen", "produktion", "landeskunde", "lernkontrolle", "sicherung",
    ]);
    expect(SESSION_STAGES).toHaveLength(10);
  });

  it("كل قسم له طريقة إثبات واحدة (تمرين أو إقرار)، ولا قسم زائداً", () => {
    const all = sectionIdsOfStages().sort();
    expect(Object.keys(SECTION_PROOF).sort()).toEqual(all);
  });
});
