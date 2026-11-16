import {describe, expect, it} from "vitest";
import {readFileSync} from "node:fs";

/**
 * حارس «اللغة والاتجاه» (الجولة العاشرة).
 *
 * العطب المحروس: `LangDe` كانت توسم دائماً `lang="de" dir="ltr"`، فحين يكون
 * محتواها عربياً (شرح نطق في حقل «الخطأ/الصواب»، أو خيار سؤال مترجم) ينطق
 * قارئ الشاشة العربية بصوت ألماني ويقلب اتجاهها — خرق WCAG 3.1.2.
 *
 * الاختبار بنيوي (بيئة vitest هنا node بلا DOM): يثبّت أن المكوّن يفحص محتواه
 * قبل ادّعاء اللغة، وأنه لا يترك سمة `lang` ثابتة في مسار العرض.
 */
const SRC = readFileSync("src/components/shared/lang-de.tsx", "utf-8");

describe("LangDe — لا تدّعي الألمانية على نص عربي", () => {
  it("تكتشف الحرف العربي", () => {
    expect(SRC).toMatch(/\\u0600-\\u06FF/);
  });

  it("تختار dir/lang بحسب المحتوى لا ثابتاً", () => {
    expect(SRC).toMatch(/containsArabic/);
    expect(SRC).toMatch(/dir:\s*"auto"/);
    expect(SRC).toMatch(/lang:\s*"de"/);
  });

  it("تقرأ النص من الأبناء المتداخلين (لا من سلسلة واحدة فقط)", () => {
    expect(SRC).toMatch(/Children\.toArray/);
    expect(SRC).toMatch(/isValidElement/);
  });

  it("الوصف يوثّق سبب القاعدة (WCAG 3.1.2) فيبقى القرار قابلاً للمراجعة", () => {
    expect(SRC).toMatch(/3\.1\.2/);
  });
});
