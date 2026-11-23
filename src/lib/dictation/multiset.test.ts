import {describe, expect, it} from "vitest";
import {multisetMatch} from "./multiset";

const w = (s: string) => s.split(" ").filter(Boolean);

describe("مطابقة الإملاء بعدّاد التكرار", () => {
  it("الإجابة المطابقة كاملة نسبتها 1 بلا نقص ولا زيادة", () => {
    const r = multisetMatch(w("der Mann kommt"), w("der Mann kommt"));
    expect(r).toEqual({matched: 3, matchedWords: ["der", "Mann", "kommt"], missing: [], extra: [], ratio: 1});
  });

  it("الكلمة المكررة في الهدف تُحسب بعددها: نسخة ناقصة تظهر", () => {
    // الفحص السطحي كان يقبل هذه الإجابة لأن der موجودة
    const r = multisetMatch(w("der der Mann"), w("der Mann"));
    expect(r.missing).toEqual(["der"]);
    expect(r.matched).toBe(2);
  });

  it("إجابة بنسخة زائدة لا تُعد صحيحة كاملة", () => {
    const r = multisetMatch(w("die Frau"), w("die die Frau"));
    expect(r.extra).toEqual(["die"]);
    expect(r.missing).toEqual([]);
    expect(r.ratio).toBeLessThan(1);
  });

  it("الترتيب لا يؤثر على عدد المتطابق (الترتيب يُحكم في تمرين الترتيب)", () => {
    const r = multisetMatch(w("ich habe Hunger"), w("Hunger habe ich"));
    expect(r.matched).toBe(3);
    expect(r.missing).toEqual([]);
  });

  it("إجابة فارغة مقابل هدف غير فارغ: صفر، وكل الهدف ناقص", () => {
    const r = multisetMatch(w("ich bin hier"), []);
    expect(r.matched).toBe(0);
    expect(r.missing).toEqual(["ich", "bin", "hier"]);
    expect(r.ratio).toBe(0);
  });

  it("هدف وإجابة فارغان: نسبة صفر بلا قسمة على صفر", () => {
    expect(multisetMatch([], []).ratio).toBe(0);
  });
});
