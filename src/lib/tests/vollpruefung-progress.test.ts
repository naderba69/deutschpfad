import { describe, expect, it } from "vitest";

import {
  canStart,
  markDone,
  nextStage,
  parseProgress,
  type VollStage,
  VOLL_STAGES,
} from "@/lib/tests/vollpruefung-progress";

describe("الامتحان الكامل بالترتيب — التقدم", () => {
  it("المرحلة التالية هي أول مرحلة غير مكتملة، وتنتهي عند اكتمال الكل", () => {
    expect(nextStage([])).toBe("A1");
    expect(nextStage(["A1"])).toBe("A2");
    expect(nextStage(["A1", "A2"])).toBe("B1");
    expect(nextStage([...VOLL_STAGES])).toBeNull();
  });

  it("لا تُفتح مرحلة قبل إكمال التي قبلها", () => {
    expect(canStart("A1", [])).toBe(true);
    expect(canStart("A2", [])).toBe(false);
    expect(canStart("B1", ["A1"])).toBe(false);
    expect(canStart("B1", ["A1", "A2"])).toBe(true);
    expect(canStart("B2", ["A1", "A2"])).toBe(false);
  });

  it("إكمال مرحلة يحافظ على الترتيب ولا يكرر", () => {
    expect(markDone(["A1"], "A2")).toEqual(["A1", "A2"]);
    expect(markDone(["A1", "A2"], "A2")).toEqual(["A1", "A2"]);
    expect(markDone([], "B1")).toEqual(["B1"]);
  });

  it("قراءة التخزين تتجاهل القيم المجهولة والتالفة وتُرتّب المراحل", () => {
    expect(parseProgress(null)).toEqual([]);
    expect(parseProgress("ليس JSON")).toEqual([]);
    expect(parseProgress('{"A1":true}')).toEqual([]);
    expect(parseProgress('["B1","A1","X",3]') as VollStage[]).toEqual(["A1", "B1"]);
  });
});
