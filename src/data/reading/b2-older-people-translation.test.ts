import { describe, expect, it } from "vitest";

import { B2_READING_EXAM } from "@/data/reading/b2-exam-library";

describe("تمييز معنى alt في نص التركيبة السكانية B2", () => {
  it("يترجم ältere Menschen إلى كبار السن لا الكبار عموماً", () => {
    const text = B2_READING_EXAM.find(({ id }) => id === "b2x-8");
    expect(text?.text).toContain("Ältere Menschen verfügen über Erfahrung");
    expect(text?.text).toContain("damit Ältere länger arbeiten können");
    expect(text?.textAr).toContain("فكبار السن يملكون خبرة ومهارات");
    expect(text?.textAr).toContain("كي يتمكن كبار السن من مواصلة العمل مدة أطول");
  });
});
