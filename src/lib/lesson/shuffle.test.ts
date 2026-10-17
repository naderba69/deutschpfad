/**
 * اختبارات وحدة — الخلط وأخذ العينات (يُستخدم في كل التمارين)
 */
import {describe, expect, it} from "vitest";

import {pickRandom, sample, shuffle} from "@/lib/lesson/shuffle";

describe("shuffle", () => {
  it("يحافظ على نفس العناصر (تبديل فقط)", () => {
    const input = [1, 2, 3, 4, 5];
    const out = shuffle(input);
    expect([...out].sort()).toEqual([...input].sort());
  });

  it("لا يغيّر المصفوفة الأصلية", () => {
    const input = [1, 2, 3];
    shuffle(input);
    expect(input).toEqual([1, 2, 3]);
  });

  it("يعيد مصفوفة جديدة", () => {
    const input = [1, 2, 3];
    expect(shuffle(input)).not.toBe(input);
  });
});

describe("sample", () => {
  it("يأخذ العدد المطلوب", () => {
    const out = sample([1, 2, 3, 4, 5, 6], 3);
    expect(out).toHaveLength(3);
  });

  it("لا يكرر العناصر", () => {
    const out = sample([1, 2, 3, 4, 5, 6], 4);
    expect(new Set(out).size).toBe(4);
  });

  it("n أكبر من الطول → يعيد كل شيء", () => {
    expect(sample([1, 2], 5)).toHaveLength(2);
  });
});

describe("pickRandom", () => {
  it("يعيد عنصراً من المصفوفة", () => {
    const input = ["a", "b", "c"];
    expect(input).toContain(pickRandom(input));
  });

  it("فارغة → undefined", () => {
    expect(pickRandom([])).toBeUndefined();
  });
});
