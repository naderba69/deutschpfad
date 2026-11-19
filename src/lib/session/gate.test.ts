import {describe, expect, it} from "vitest";
import {canEnterStage, computeStageStates, currentStage, isSessionComplete} from "./gate";

const ALL = [
  "review", "lernziele", "einfuehrung", "theorie", "lesetext", "uebungen",
  "schreiben", "fehler", "minitest", "lernkarten",
];

const states = (done: string[], available: string[] = ALL) =>
  computeStageStates({availableSectionIds: available, completedSectionIds: new Set(done)});

describe("بوابة الحصة الصارمة", () => {
  it("في البداية: المرحلة الأولى هي الحالية، وكل ما بعدها مقفل", () => {
    const s = states([]);
    expect(s[0].state).toBe("current");
    expect(s.slice(1).every((x) => x.state === "locked" || x.state === "skipped")).toBe(true);
    expect(canEnterStage("objectives", s)).toBe(false);
  });

  it("إكمال المرحلة الأولى يفتح الثانية فقط", () => {
    const s = states(["review"]);
    expect(s[0].state).toBe("done");
    expect(currentStage(s)?.stage.id).toBe("objectives");
    expect(canEnterStage("objectives", s)).toBe(true);
    expect(canEnterStage("activation", s)).toBe(false);
  });

  it("لا يُعتبر إكمال مرحلة لاحقة تجاوزاً للبوابة", () => {
    // المتعلم أنجز التطبيق الموجّه دون المرور بالاسترجاع: يبقى الاسترجاع حالياً
    const s = states(["uebungen"]);
    expect(currentStage(s)?.stage.id).toBe("recall");
    expect(s.find((x) => x.stage.id === "guided")?.state).toBe("locked");
    expect(canEnterStage("guided", s)).toBe(false);
  });

  it("المرحلة بلا أي قسم متوفر تُتخطّى تلقائياً (محتوى غير مكتوب، لا اختيار المتعلم)", () => {
    // لا يوجد "verben" ولا "mediation" ولا "interaction" في هذا الدرس
    const s = states(["review"]);
    expect(s.find((x) => x.stage.id === "input")?.presentSectionIds).toEqual(["theorie", "lesetext"]);
    // مرحلة الإنتاج: schreiben فقط متوفر
    const production = s.find((x) => x.stage.id === "production");
    expect(production?.presentSectionIds).toEqual(["schreiben"]);
  });

  it("مرحلة كاملة الاستبعاد لا تعيق الحصة", () => {
    const available = ALL.filter((id) => id !== "review" && id !== "lernziele" && id !== "einfuehrung");
    const s = computeStageStates({availableSectionIds: available, completedSectionIds: new Set()});
    expect(s[0].state).toBe("skipped");
    expect(s[1].state).toBe("skipped");
    expect(s[2].state).toBe("skipped");
    expect(s[3].state).toBe("current");
  });

  it("الحدث المسجَّل وحده يُكمل القسم (الزيارة لا تكفي)", () => {
    // الاختبار يتحقق من أن الدالة تعتمد على completedSectionIds فقط
    const s = states(["review", "lernziele"]);
    expect(currentStage(s)?.stage.id).toBe("activation");
  });

  it("إكمال كل المراحل المتوفرة ينهي الحصة", () => {
    const s = states(ALL);
    expect(isSessionComplete(s)).toBe(true);
    expect(currentStage(s)).toBeNull();
  });
});
