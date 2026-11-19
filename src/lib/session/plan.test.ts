import {describe, expect, it} from "vitest";
import type {NotebookEntry} from "@/lib/storage/error-notebook";
import {buildSessionPlan, selectWarmupItems, WARMUP_MAX_ITEMS} from "./plan";

const e = (id: string, over: Partial<NotebookEntry> = {}): NotebookEntry => ({
  id, errorType: "article", explanation: "", count: 1, lastAt: 1000, firstAt: 1000, ...over,
});

describe("مُخطِّط الاسترجاع", () => {
  it("الأخطاء المتكررة تسبق غير المتكررة", () => {
    const out = selectWarmupItems([e("a", {count: 1}), e("b", {count: 4})]);
    expect(out.map((x) => x.id)).toEqual(["b", "a"]);
  });

  it("عند التعادل في التكرار: الأقدم أولاً", () => {
    const out = selectWarmupItems([e("new", {lastAt: 5000}), e("old", {lastAt: 100})]);
    expect(out.map((x) => x.id)).toEqual(["old", "new"]);
  });

  it("الوسم mastered ينزل الترتيب ولا يستبعد الخطأ", () => {
    const out = selectWarmupItems([e("m", {mastered: true, count: 9}), e("x", {count: 1})]);
    expect(out.map((x) => x.id)).toEqual(["x", "m"]);
    expect(out).toHaveLength(2);
  });

  it("يقتصر على السقف المحدد", () => {
    const many = Array.from({length: 20}, (_, i) => e(`id${i}`, {count: i}));
    expect(selectWarmupItems(many)).toHaveLength(WARMUP_MAX_ITEMS);
  });

  it("حتمية: المدخلات نفسها تعطي الترتيب نفسه مهما كان ترتيب الإدخال", () => {
    const a = [e("p", {count: 2, lastAt: 7}), e("q", {count: 2, lastAt: 7})];
    expect(selectWarmupItems(a).map((x) => x.id)).toEqual(selectWarmupItems([...a].reverse()).map((x) => x.id));
  });

  it("الخطة تحوي المراحل السبع ومجموع دقائقها 90", () => {
    const plan = buildSessionPlan([]);
    expect(plan.stages).toHaveLength(7);
    expect(plan.totalMinutes).toBe(90);
    expect(plan.warmupItems).toEqual([]);
  });
});
