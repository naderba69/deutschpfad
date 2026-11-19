import { describe, expect, it } from "vitest";

import { READING } from "@/data/exams/b2-simulation-data";
import { readingB106 } from "@/data/lessons/b1/b1-06/reading";
import { READING_LIBRARY } from "@/data/reading/library";

describe("تمييز صفة العمر في سياقات الأشخاص", () => {
  it("يحفظ دلالة كبار السن في دار الرعاية والمتحف والنص السكاني", () => {
    const volunteering = READING_LIBRARY.find(({ id }) => id === "rd-b1-3");
    expect(volunteering?.text).toContain("in einem Altenheim");
    expect(volunteering?.textAr).toContain("في دار مسنين");
    expect(volunteering?.textAr).toContain("امتنان كبار السن");

    expect(readingB106.paragraphs[3]).toContain("Ein älterer Besucher");
    expect(readingB106.paragraphsAr[3]).toContain("زائر أكبر سناً");
    expect(readingB106.paragraphsAr[3]).toContain("ولا يمثّل كبار السن عموماً");

    const demographics = READING.find(({ id }) => id === "r2");
    expect(demographics?.text).toContain("Besonders ältere Menschen");
    expect(demographics?.textAr).toContain("خصوصاً كبار السن");
  });
});
