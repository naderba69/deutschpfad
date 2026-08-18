/**
 * اختبارات وحدة — بنك تحويل الجمل (Umschreibungen)
 */
import { describe, expect, it } from "vitest";

import {
  TOTAL_UMSCHREIB,
  UMSCHREIB_EXERCISES,
  UMSCHREIB_TYPEN,
  getUmschreibByLevel,
  getUmschreibByTyp,
} from "@/data/umschreibungen";

describe("UMSCHREIB_TYPEN — الأنواع العشرة", () => {
  it("يحتوي 10 أنواع بالضبط (الأنواع الرسمية في غوته B2)", () => {
    expect(UMSCHREIB_TYPEN).toHaveLength(10);
  });

  it("كل نوع له معرّف فريد ورقم متسلسل", () => {
    const ids = new Set(UMSCHREIB_TYPEN.map((t) => t.id));
    expect(ids.size).toBe(10);
    const nums = UMSCHREIB_TYPEN.map((t) => t.num);
    expect([...nums].sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("كل نوع له شرح ومثال بالعربية والألمانية", () => {
    for (const t of UMSCHREIB_TYPEN) {
      expect(t.desc.length).toBeGreaterThan(0);
      expect(t.beispielDe.length).toBeGreaterThan(0);
      expect(t.beispielAr.length).toBeGreaterThan(0);
    }
  });
});

describe("UMSCHREIB_EXERCISES — جودة التمارين", () => {
  it("كل نوع له تمرينان على الأقل", () => {
    for (const t of UMSCHREIB_TYPEN) {
      expect(getUmschreibByTyp(t.id).length).toBeGreaterThanOrEqual(2);
    }
  });

  it("كل تمرين له: جملة أصلية + إجابات مقبولة + نموذج + شرح", () => {
    for (const e of UMSCHREIB_EXERCISES) {
      expect(e.prompt.length).toBeGreaterThan(0);
      expect(e.acceptedAnswers.length).toBeGreaterThanOrEqual(1);
      expect(e.sampleAnswer.length).toBeGreaterThan(0);
      expect(e.explanation.length).toBeGreaterThan(0);
    }
  });

  it("الإجابة النموذجية ضمن الإجابات المقبولة (اتساق)", () => {
    const norm = (s: string) => s.toLowerCase().replace(/[.,!?;:"«»„“]/g, "").replace(/\s+/g, " ").trim();
    for (const e of UMSCHREIB_EXERCISES) {
      const accepted = e.acceptedAnswers.map(norm);
      expect(accepted).toContain(norm(e.sampleAnswer));
    }
  });

  it("المعرفات فريدة", () => {
    const ids = new Set(UMSCHREIB_EXERCISES.map((e) => e.id));
    expect(ids.size).toBe(UMSCHREIB_EXERCISES.length);
  });

  it("نوع كل تمرين موجود في قائمة الأنواع", () => {
    const typIds = new Set(UMSCHREIB_TYPEN.map((t) => t.id));
    for (const e of UMSCHREIB_EXERCISES) {
      expect(typIds.has(e.typ)).toBe(true);
    }
  });
});

describe("التوزيع", () => {
  it("المجموع مطابق لعدّاد التصدير", () => {
    expect(TOTAL_UMSCHREIB).toBe(UMSCHREIB_EXERCISES.length);
  });

  it("يوجد تمارين B1 وB2 معاً (تدرج)", () => {
    expect(getUmschreibByLevel("B1").length).toBeGreaterThan(0);
    expect(getUmschreibByLevel("B2").length).toBeGreaterThan(0);
  });
});
