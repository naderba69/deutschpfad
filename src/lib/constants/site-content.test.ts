import { describe, expect, it } from "vitest";

import { FAQS, FEATURES, STATS, STEPS, TRUST_ITEMS } from "@/lib/constants/site-content";

describe("public claims about exam preparation and certificates", () => {
  it("does not promise an official certificate, exam readiness, or a complete Goethe simulation", () => {
    const certificateFaq = FAQS.find((item) => item.question === "هل أحصل على شهادة معترف بها؟");
    expect(certificateFaq).toBeDefined();
    expect(certificateFaq?.answer).toMatch(/لا تصدر المنصة شهادة/);
    expect(certificateFaq?.answer).toMatch(/لا تضمن الجاهزية/);
    expect(certificateFaq?.answer).toMatch(/لا تمثل اعتماداً/);
    expect(certificateFaq?.answer).not.toMatch(/محاكاة كاملة|تأكيد ذاتي على استعدادك/);
  });

  it("describes completion certificates as internal progress records", () => {
    const progressStep = STEPS.find((step) => step.title === "تابع تقدمك");
    expect(progressStep?.description).toMatch(/شهادة إتمام من المنصة/);
    expect(progressStep?.description).toMatch(/لا تمنح اعتماداً/);
    const gamification = FEATURES.find((feature) => feature.title === "تحفيز وألعاب");
    expect(gamification?.description).toMatch(/داخلية/);
    expect(gamification?.description).toMatch(/لا تثبت مستوى CEFR/);
  });

  it("describes the CEFR/Goethe relationship as inspiration, not completeness or official alignment", () => {
    const curriculum = FEATURES.find((feature) => feature.title === "محتوى تدريبي من A1 إلى B2");
    expect(curriculum?.description).toMatch(/ليس ادعاءً بتغطية كل واصفات CEFR أو مطابقة رسمية/);
    expect(STATS.find((stat) => stat.value === "4")?.label).toMatch(/نطاقات تدريبية/);
    expect(TRUST_ITEMS.find((item) => item.label.includes("CEFR وGoethe"))).toBeDefined();
    expect(curriculum?.description).not.toMatch(/منهجية معهد غوته/);
  });

  it("does not attribute a guaranteed B2 study timeline to Goethe", () => {
    const timelineFaq = FAQS.find((item) => item.question === "كم يستغرق الوصول إلى مستوى B2؟");
    expect(timelineFaq?.answer).toMatch(/لا يوجد جدول زمني واحد يضمن/);
    expect(timelineFaq?.answer).not.toMatch(/تقديرات معهد غوته الرسمية/);
  });
});
