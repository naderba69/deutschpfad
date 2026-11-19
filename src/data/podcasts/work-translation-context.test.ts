import {describe, expect, it} from "vitest";

import {PODCASTS} from "@/data/podcasts";

describe("ترجمة خيارات مفردات العمل في البودكاست", () => {
  it("لا يحذف العمل على البريد الإلكتروني من خيار المشتت", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-a2-sonnntag");
    const option = episode?.questions.flatMap(({ options }) => options)
      .find(({ text }) => text === "Gearbeitet und E-Mails beantwortet");

    expect(option?.ar).toBe("عملوا وأجابوا عن رسائل البريد الإلكتروني");
  });

  it("يصوغ سؤال العمر على أنه سؤال عن عمر إيما المتوقع", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-a1-geburstag");

    expect(episode?.questions.find(({ de }) => de === "Wie alt wird Emma?")?.ar).toBe("كم سيبلغ عمر إيما؟");
    expect(episode?.scriptAr).toContain("ستبلغ السابعة من عمرها");
  });

  it("ينقل شقّي الشكوى في خيار العمل المشتت", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-b2-work-life-balance");
    const option = episode?.questions.flatMap(({ options }) => options)
      .find(({ text }) => text === "Über zu wenig Arbeit und Langeweile");

    expect(option?.ar).toBe("من قلة العمل والملل");
  });
});
