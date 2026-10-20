/**
 * اختبارات وحدة — الأسئلة الشائعة (FAQ)
 */
import { describe, expect, it } from "vitest";

import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/data/faq";

describe("FAQ_ITEMS", () => {
  it("كل سؤال له إجابة غير فارغة", () => {
    for (const i of FAQ_ITEMS) {
      expect(i.q.length).toBeGreaterThan(5);
      expect(i.a.length).toBeGreaterThan(20);
      expect(i.category.length).toBeGreaterThan(0);
    }
  });

  it("يغطي مواضيع متعددة (منهج + تعلم + تقنية)", () => {
    expect(FAQ_CATEGORIES.length).toBeGreaterThanOrEqual(3);
  });

  it("إجابات تشير لميزات المنصة الفعلية", () => {
    const all = FAQ_ITEMS.map((i) => i.a).join(" ");
    expect(all).toContain("Goethe");
    expect(all).toContain("امتحان الختم");
    expect(all).toContain("IndexedDB");
  });
});
