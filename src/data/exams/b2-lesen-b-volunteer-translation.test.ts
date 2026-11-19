import { describe, expect, it } from "vitest";

import { B2_LESEN_B } from "@/data/exams/b2-lesen-b";

describe("اكتمال ترجمة مقال التطوع في B2", () => {
  it("لا يحذف خلاصة أثر التطوع على مجالات الحياة العامة", () => {
    const article = B2_LESEN_B.find(({ text }) => text?.includes("Freiwilligenarbeit: Engagement mit Zukunft"));

    expect(article?.text).toContain("Ohne das Engagement Freiwilliger würden viele Bereiche des öffentlichen Lebens zusammenbrechen");
    expect(article?.textAr).toContain("ستنهار من دون جهود المتطوعين");
    expect(article?.textAr).toContain("من أنشطة الشباب إلى الرعاية");
  });
});
