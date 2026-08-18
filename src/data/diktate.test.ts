/**
 * اختبارات وحدة — بنك الإملاء
 */
import { describe, expect, it } from "vitest";

import { DIKTATE, DIKTAT_LEVELS, TOTAL_DIKTATE, getDiktateByLevel } from "@/data/diktate";

describe("DIKTATE — بنك الإملاء", () => {
  it("كل مستوى له جمل إملاء", () => {
    for (const lv of DIKTAT_LEVELS) {
      expect(getDiktateByLevel(lv).length).toBeGreaterThanOrEqual(3);
    }
  });

  it("كل جملة لها ترجمة وكلمات تركيز وملاحظة", () => {
    for (const d of DIKTATE) {
      expect(d.text.length).toBeGreaterThan(0);
      expect(d.ar.length).toBeGreaterThan(0);
      expect(d.focusWords.length).toBeGreaterThan(0);
      expect(d.note.length).toBeGreaterThan(0);
    }
  });

  it("المعرفات فريدة", () => {
    expect(new Set(DIKTATE.map((d) => d.id)).size).toBe(DIKTATE.length);
  });

  it("المستويات صالحة فقط", () => {
    for (const d of DIKTATE) {
      expect(["A1", "A2", "B1", "B2"]).toContain(d.level);
    }
  });

  it("العدد مطابق للعداد", () => {
    expect(TOTAL_DIKTATE).toBe(DIKTATE.length);
  });
});
