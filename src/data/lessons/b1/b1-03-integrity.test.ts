import { describe, expect, it } from "vitest";
import { lessonB103 } from "./b1-03";

// حارس سلامة المحتوى (المرحلة 5): نصّ القراءة والوسوم الحوارية والادّعاءات
// المثبَّتة التي كانت في الحارس الأصلي. فُصل هنا ليبقى كل ملف تحت سقف 600 سطر.
describe("b1-03 — سلامة القراءة والادّعاءات المثبَّتة", () => {
  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB103.reading;
    expect(reading?.id).toBe("read-b1-03");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Ein Dorf ohne Müll");
    expect(reading?.titleAr).toBe("قرية بلا نفايات");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const head = item.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(text.includes(stem), `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
    }

    expect(reading?.questions.map(({ id }) => id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    for (const question of reading!.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(text.includes(answer.toLowerCase()) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(false);
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);

    for (const anchor of ["müll", "verpackung", "gemeinde"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("removes the false table claim and the wrong pronunciation note", () => {
    const text = JSON.stringify(lessonB103);
    expect(text).not.toMatch(/الجدول التفاعلي|جدول الأفعال الشاذة/);
    expect(text).not.toContain("cy = سي");
    // الشرح المُرقّى (المرحلة 5) يثبّت الصيغ الثلاث بدل صيغة واحدة قديمة،
    // ويُبقي الفروق التي كانت مثبّتة: von + Dativ · worden بلا ge.
    for (const claim of ["wird/werden", "worden", "von + Dativ", "durch + Akkusativ"]) {
      expect(text, `الادّعاء المثبَّت: ${claim}`).toContain(claim);
    }
    expect(text).toContain("ماضٍ مركب (Perfekt)");
    expect(text).toContain("Kreislaufwirtschaftsgesetz");
  });

});
