import {describe, expect, it} from "vitest";

import {countByLevel, countCategories, isMastered, categorize} from "./mastery";
import {DAY_MS, applyEbbinghausReview, NORMAL_POLICY} from "./ebbinghaus";
import {dayKey} from "@/lib/mastery/mastery";
import {createCard} from "./sm2";
import type {Sm2CardData} from "@/types/srs";

const NOW = Date.UTC(2026, 9, 13, 12);

function card(over: Partial<Sm2CardData> = {}): Sm2CardData {
  return {...createCard({id: "x", de: "die Zahl", ar: "الرقم", level: "A1", source: "lesson"}), ...over};
}

describe("قاعدة الإتقان: 3 متتالية على يومين", () => {
  it("3 نجاحات في يوم واحد لا تكفي", () => {
    expect(isMastered({repetitions: 3, successDays: ["2026-10-13", "2026-10-13", "2026-10-13"]})).toBe(false);
  });
  it("3 نجاحات على يومين مختلفين تكفي", () => {
    expect(isMastered({repetitions: 3, successDays: ["2026-10-12", "2026-10-13", "2026-10-13"]})).toBe(true);
  });
  it("نجاحان فقط لا يكفيان", () => {
    expect(isMastered({repetitions: 2, successDays: ["2026-10-12", "2026-10-13"]})).toBe(false);
  });
  it("بطاقة قديمة بلا أيام نجاح غير متقنة (لا ندّعي يومين لم نسجّلهما)", () => {
    expect(isMastered({repetitions: 5})).toBe(false);
  });
});

describe("تسجيل أيام النجاح عند المراجعة", () => {
  it("كل نجاح يضيف مفتاح اليوم، والفشل لا يضيفه", () => {
    let c = card();
    c = applyEbbinghausReview(c, 1, NOW, NORMAL_POLICY);
    expect(c.successDays).toEqual([dayKey(NOW)]);
    const failed = applyEbbinghausReview(c, 0.1, NOW + 60_000, NORMAL_POLICY);
    expect(failed.successDays).toEqual([dayKey(NOW)]);
  });
  it("يحتفظ بآخر 10 أيام فقط", () => {
    let c = card();
    for (let i = 0; i < 14; i++) c = applyEbbinghausReview(c, 1, NOW + i * DAY_MS, NORMAL_POLICY);
    expect(c.successDays!.length).toBe(10);
  });
});

describe("التصنيف والعدّ", () => {
  it("المتقنة لها الأولوية حتى لو كان موعدها حان", () => {
    const c = card({repetitions: 3, successDays: ["2026-10-12", "2026-10-13"], due: NOW - DAY_MS});
    expect(categorize(c, NOW)).toBe("mastered");
  });
  it("مستحقة إن حان موعدها، ومجدولة إن لم يحن", () => {
    expect(categorize(card({due: NOW - 1}), NOW)).toBe("due");
    expect(categorize(card({due: NOW + DAY_MS}), NOW)).toBe("scheduled");
  });
  it("مجموع الفئات يساوي عدد البطاقات", () => {
    const cards = [
      card({due: NOW - 1}),
      card({due: NOW + DAY_MS}),
      card({repetitions: 3, successDays: ["a", "b"], due: NOW + DAY_MS}),
    ];
    const t = countCategories(cards, NOW);
    expect(t).toEqual({mastered: 1, due: 1, scheduled: 1, total: 3});
  });
  it("العدّ حسب المستوى يشمل A1 إلى B2 حتى لو فارغة", () => {
    const rows = countByLevel([card({level: "B1", due: NOW - 1})], NOW);
    expect(rows.map((r) => r.level)).toEqual(["A1", "A2", "B1", "B2"]);
    expect(rows.find((r) => r.level === "B1")!.due).toBe(1);
    expect(rows.find((r) => r.level === "A1")!.due).toBe(0);
  });
});
