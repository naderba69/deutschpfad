/**
 * اختبارات وحدة — منطق الختم وفتح المستويات (الحرج الأهم)
 */
import {describe, expect, it} from "vitest";

import {canTakeSealExam, getActiveLevel, getLevelCompletion, getOverallProgress, getUnitStatus, isLevelSealed, isUnitUnlocked} from "@/lib/progress-selectors";
import {getUnitsByLevel} from "@/lib/constants/curriculum";

const a1Units = getUnitsByLevel("A1");
const a2Units = getUnitsByLevel("A2");
const a1First = a1Units[0];
const a1Second = a1Units[1];
const a2First = a2Units[0];

/** كل وحدات A1 مكتملة */
const allA1 = a1Units.map((u) => u.id);

describe("getLevelCompletion", () => {
  it("يحسب النسبة المئوية بشكل صحيح", () => {
    const half = a1Units.slice(0, Math.floor(a1Units.length / 2)).map((u) => u.id);
    const completion = getLevelCompletion(half, "A1");
    expect(completion.completed).toBe(half.length);
    expect(completion.pct).toBe(Math.round((half.length / a1Units.length) * 100));
  });

  it("يعطي 0% للمستخدم الجديد", () => {
    expect(getLevelCompletion([], "A1").pct).toBe(0);
  });
});

describe("isLevelSealed — امتحان الختم", () => {
  it("مختوم إذا مر في sealedLevels", () => {
    expect(isLevelSealed([], "A1", ["A1"])).toBe(true);
  });

  it("مختوم تلقائياً عند إكمال 100% من الوحدات (توافق قديم)", () => {
    expect(isLevelSealed(allA1, "A1", [])).toBe(true);
  });

  it("غير مختوم عند 80% دون اجتياز الامتحان", () => {
    const eighty = a1Units.slice(0, Math.ceil(a1Units.length * 0.8)).map((u) => u.id);
    expect(isLevelSealed(eighty, "A1", [])).toBe(false);
  });
});

describe("canTakeSealExam — الأهلية", () => {
  it("لا يستطيع المستخدم الجديد", () => {
    expect(canTakeSealExam([], "A1")).toBe(false);
  });

  it("يستطيع عند بلوغ عتبة 80%", () => {
    const eighty = a1Units.slice(0, Math.ceil(a1Units.length * 0.8)).map((u) => u.id);
    expect(canTakeSealExam(eighty, "A1")).toBe(true);
  });
});

describe("getActiveLevel — المستوى النشط", () => {
  it("مستخدم جديد → A1", () => {
    expect(getActiveLevel([])).toBe("A1");
  });

  it("A1 مختوم → A2 نشط", () => {
    expect(getActiveLevel(allA1, ["A1"])).toBe("A2");
  });

  it("A1+A2 مختومان → B1 نشط", () => {
    const allA2 = a2Units.map((u) => u.id);
    expect(getActiveLevel([...allA1, ...allA2], ["A1", "A2"])).toBe("B1");
  });
});

describe("isUnitUnlocked — فتح الوحدات", () => {
  it("أول وحدة A1 مفتوحة دائماً لمستخدم جديد", () => {
    expect(isUnitUnlocked([], a1First)).toBe(true);
  });

  it("الوحدة الثانية A1 مقفلة قبل إكمال الأولى", () => {
    expect(isUnitUnlocked([], a1Second)).toBe(false);
  });

  it("الوحدة الثانية A1 مفتوحة بعد إكمال الأولى", () => {
    expect(isUnitUnlocked([a1First.id], a1Second)).toBe(true);
  });

  it("أول وحدة A2 مقفلة قبل ختم A1", () => {
    // 85% من A1 دون امتحان ختم
    const eighty = a1Units.slice(0, Math.ceil(a1Units.length * 0.85)).map((u) => u.id);
    expect(isUnitUnlocked(eighty, a2First, [])).toBe(false);
  });

  it("أول وحدة A2 مفتوحة بعد ختم A1", () => {
    expect(isUnitUnlocked(allA1, a2First, ["A1"])).toBe(true);
  });

  it("وحدات A2 تسلسلية بعد الفتح", () => {
    const a2Second = a2Units[1];
    expect(isUnitUnlocked([...allA1, a2First.id], a2Second, ["A1"])).toBe(true);
    expect(isUnitUnlocked([...allA1], a2Second, ["A1"])).toBe(false);
  });
});

describe("getUnitStatus", () => {
  it("مكتملة / حالية / مقفلة", () => {
    expect(getUnitStatus([a1First.id], a1First, [])).toBe("completed");
    expect(getUnitStatus([], a1First, [])).toBe("current");
    expect(getUnitStatus([], a1Second, [])).toBe("locked");
  });
});

describe("getOverallProgress", () => {
  it("صفر لمستخدم جديد", () => {
    expect(getOverallProgress([])).toBe(0);
  });
});
