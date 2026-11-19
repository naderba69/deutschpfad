import { describe, expect, it } from "vitest";

import { LESSONS, RAW_LESSONS, getLessonsByUnit } from "@/data/lessons";
import {
  GLOBAL_ORDER,
  levelKeyOf,
  loadLessonsByLevel,
  loadLessonsByUnit,
} from "@/data/lessons/level-loaders";

/**
 * حرّاس التحميل بالمستوى.
 *
 * الخطر الحقيقي هنا ليس الانهيار بل **الاختلاف الصامت**: لو تغيّر ترتيب درس
 * في `RAW_LESSONS` دون تحديث `GLOBAL_ORDER`، تتغيّر بذرة `balanceChoiceTree`
 * فيرى المتعلم موضع الإجابة الصحيحة في صفحة الاختبار مختلفاً عن صفحة الدرس —
 * بلا خطأ ولا استثناء. لذلك نطابق الناتج بـ `LESSONS` عنصراً بعنصر، لا بالعدد.
 */

describe("تحميل الدروس بالمستوى — تطابق تام مع السجل المركزي", () => {
  it("ترتيب GLOBAL_ORDER مطابق حرفياً لترتيب RAW_LESSONS", () => {
    expect([...GLOBAL_ORDER]).toEqual(RAW_LESSONS.map((lesson) => lesson.id));
  });

  it("لا معرّف مكرّر ولا ناقص في GLOBAL_ORDER", () => {
    expect(new Set(GLOBAL_ORDER).size).toBe(GLOBAL_ORDER.length);
    expect(GLOBAL_ORDER.length).toBe(RAW_LESSONS.length);
  });

  it("كل مستوى يُحمَّل بنفس محتوى LESSONS وترتيبه ومواضع إجاباته", async () => {
    for (const level of ["A1", "A2", "B1", "B2"] as const) {
      const loaded = await loadLessonsByLevel(level);
      const canonical = LESSONS.filter((lesson) => lesson.level === level);
      expect(loaded.length, `عدد ${level}`).toBe(canonical.length);
      expect(loaded.map((lesson) => lesson.id), `ترتيب ${level}`).toEqual(
        canonical.map((lesson) => lesson.id),
      );
      // المقارنة العميقة تشمل موضع الخيار الصحيح وشرحه بعد الموازنة
      expect(loaded, `محتوى ${level}`).toEqual(canonical);
    }
  });

  it("تحميل الوحدة يعطي نفس نتيجة getLessonsByUnit", async () => {
    const units = [...new Set(RAW_LESSONS.map((lesson) => lesson.unitId))];
    expect(units.length).toBeGreaterThan(40);
    for (const unitId of units) {
      const loaded = await loadLessonsByUnit(unitId);
      expect(loaded.map((lesson) => lesson.id), `وحدة ${unitId}`).toEqual(
        getLessonsByUnit(unitId).map((lesson) => lesson.id),
      );
    }
  });

  it("المستوى غير المعروف يعيد مصفوفة فارغة بدل الرمي", async () => {
    expect(await loadLessonsByLevel("C1")).toEqual([]);
    expect(await loadLessonsByUnit("zz-99")).toEqual([]);
    expect(levelKeyOf("b2-13")).toBe("B2");
    expect(levelKeyOf("nonsense")).toBeNull();
  });

  it("الحرفان الأولان يكفيان لتحديد المستوى (معرّفات صغيرة ومختلطة)", () => {
    expect(levelKeyOf("a1-02")).toBe("A1");
    expect(levelKeyOf("B1-08")).toBe("B1");
  });
});
