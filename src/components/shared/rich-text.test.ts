import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

import { LESSONS } from "@/data/lessons";

/**
 * العطب الذي يحرسه هذا الملف: ترقية العمق الأكاديمي كتبت الشروح بفقرات
 * (\n\n) وبنقاط «•» وبتشديد **كذا** وبجداول Markdown، بينما كان العارض يضع
 * النصّ كلَّه داخل <p> واحدة. النتيجة على الشاشة — تحقّقتُ منها بلقطة فعلية —
 * نجماتٌ حرفية وجدولٌ منهار في كتلة نصّ واحدة.
 *
 * الحارس هنا بنيويّ لا بصريّ: يثبّت أنّ الحقول الطويلة تمرّ عبر <RichText>
 * في المكوّنين اللذين يعرضان الكتل النظرية. أي عودة إلى {block.explanationAr}
 * داخل <p> تُسقط الاختبار.
 */
const THEORY_VIEWS = [
  "src/components/lesson/sections/theorie.tsx",
  "src/components/lesson/lesson-flow.tsx",
];

describe("عرض النصّ الغنيّ في الكتل النظرية", () => {
  it("المكوّنان يستعملان RichText للشرح المطوّل", () => {
    for (const file of THEORY_VIEWS) {
      const src = readFileSync(file, "utf-8");
      expect(src, `${file} لا يستورد RichText`).toContain("@/components/shared/rich-text");
      expect(src, `${file} يعرض explanationAr نصّاً خاماً`).toContain(
        "<RichText text={block.explanationAr}",
      );
    }
  });

  it("لا يُعرض حقلٌ طويل داخل <p> خام في تبويبات النظرية", () => {
    const src = readFileSync(THEORY_VIEWS[0], "utf-8");
    for (const field of ["whyAr", "comparisonWithArabic", "eselsbruecke"]) {
      expect(src, `${field} معروض خاماً`).not.toMatch(
        new RegExp(`<p>[\\s\\S]{0,120}\\{block\\.${field}\\}`),
      );
    }
  });

  it("لا يبقى تشديد **كذا** في حقلٍ لا يمرّ عبر العارض الغنيّ", () => {
    // الحقول القصيرة (أمثلة، أخطاء، عناوين) تُعرض خاماً عن قصد،
    // فوجود ** فيها يعني نجمات ظاهرة على الشاشة.
    const raw: string[] = [];
    for (const lesson of LESSONS) {
      for (const t of lesson.theory) {
        for (const ex of t.examples) {
          if (ex.de.includes("**") || ex.ar.includes("**")) raw.push(`${lesson.id}:${t.id} مثال`);
        }
        for (const m of t.commonMistakes) {
          if (m.wrong.includes("**") || m.right.includes("**")) {
            raw.push(`${lesson.id}:${t.id} خطأ شائع`);
          }
        }
        if (t.titleAr.includes("**") || t.titleDe.includes("**")) {
          raw.push(`${lesson.id}:${t.id} عنوان`);
        }
      }
    }
    expect(raw).toEqual([]);
  });
});
