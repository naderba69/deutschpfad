import {describe, expect, it} from "vitest";
import {canEnterStage, computeStageStates, currentStage, isSessionComplete} from "./gate";

const ALL = [
  "lernziele", "review", "einfuehrung", "theorie", "lesetext", "uebungen",
  "schreiben", "fehler", "minitest", "lernkarten",
];

const states = (done: string[], available: string[] = ALL) =>
  computeStageStates({availableSectionIds: available, completedSectionIds: new Set(done)});

describe("بوابة الحصة الصارمة", () => {
  it("في البداية: مرحلة الأهداف هي الحالية، وما بعدها مقفل", () => {
    const s = states([]);
    expect(s[0].stage.id).toBe("ziele");
    expect(s[0].state).toBe("current");
    expect(canEnterStage("einstieg", s)).toBe(false);
  });

  it("إكمال الأهداف يفتح التمهيد فقط", () => {
    const s = states(["lernziele"]);
    expect(s[0].state).toBe("done");
    expect(currentStage(s)?.stage.id).toBe("einstieg");
    expect(canEnterStage("einstieg", s)).toBe(true);
    expect(canEnterStage("grammatik", s)).toBe(false);
  });

  it("لا يُعتبر إكمال مرحلة لاحقة تجاوزاً للبوابة", () => {
    const s = states(["uebungen"]);
    expect(currentStage(s)?.stage.id).toBe("ziele");
    expect(s.find((x) => x.stage.id === "gezielte-uebungen")?.state).toBe("locked");
    expect(canEnterStage("gezielte-uebungen", s)).toBe(false);
  });

  it("المرحلة بلا أي قسم متوفر تُتخطّى تلقائياً ولا تعيق الحصة", () => {
    // المفردات والثقافة لا توجد لهما أقسام بعد: تُتخطّيان دائماً
    const s = states(["lernziele"]);
    expect(s.find((x) => x.stage.id === "wortschatz")?.state).toBe("skipped");
    expect(s.find((x) => x.stage.id === "landeskunde")?.state).toBe("skipped");
  });

  it("مرحلة بأقسام جزئية تُحسب بما هو متوفر فقط", () => {
    const s = states([]);
    // القواعد: theorie متوفر و verben غير متوفر
    expect(s.find((x) => x.stage.id === "grammatik")?.presentSectionIds).toEqual(["theorie"]);
  });

  it("الزيارة لا تكفي: الحدث المسجَّل وحده يُكمل القسم", () => {
    const s = states(["lernziele", "review"]);
    expect(currentStage(s)?.stage.id).toBe("einstieg");
  });

  it("إكمال كل المراحل المتوفرة ينهي الحصة", () => {
    const s = states(ALL);
    expect(isSessionComplete(s)).toBe(true);
    expect(currentStage(s)).toBeNull();
  });

  it("أقسام غير متوفرة في الدرس لا تؤثر على البوابة حتى لو سُجّل لها إنجاز", () => {
    // الدرس فيه قسم واحد فقط (الأهداف) وقد أُنجز: لا مرحلة متبقية، فالحصة منتهية
    const s = computeStageStates({
      availableSectionIds: ["lernziele"],
      completedSectionIds: new Set(["verben", "lernziele"]),
    });
    expect(currentStage(s)).toBeNull();
    expect(isSessionComplete(s)).toBe(true);
  });
});
