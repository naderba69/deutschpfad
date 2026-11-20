/**
 * تغطية الحصة لـ A1-01 (الدرس التجريبي): كل مراحل الحصة العشر لها محتوى، فلا تُتخطّى مرحلة.
 * يحرس: إضافة مفردات وثقافة إلى الدرس، وأن كل مرحلة تظهر فيه، وأن محتواهما ليس فارغاً.
 */
import {describe, expect, it} from "vitest";
import {LESSONS} from "@/data/lessons";
import {visibleSectionDefs} from "./visible-sections";
import {SESSION_STAGES} from "./stages";

const lesson = LESSONS.find((l) => l.id === "a1-01");

describe("الحصة التجريبية A1-01", () => {
  it("الدرس موجود", () => {
    expect(lesson).toBeDefined();
  });

  it("كل مرحلة من مراحل الحصة العشر فيها قسم ظاهر (لا تُتخطّى مرحلة)", () => {
    if (!lesson) return;
    const visible = new Set(
      visibleSectionDefs(lesson, !!lesson.review?.length, false).map((d) => d.id),
    );
    const empty = SESSION_STAGES.filter((stage) => !stage.sectionIds.some((id) => visible.has(id))).map(
      (s) => s.id,
    );
    expect(empty).toEqual([]);
  });

  it("المفردات: 12 كلمة على الأقل، وكل مفردة فيها مثال ومعنى", () => {
    if (!lesson) return;
    const entries = lesson.wortschatz ?? [];
    expect(entries.length).toBeGreaterThanOrEqual(12);
    for (const e of entries) {
      expect(e.de.trim(), `de في ${e.de}`).not.toBe("");
      expect(e.ar.trim(), `ar في ${e.de}`).not.toBe("");
      expect(e.exampleDe.trim(), `مثال ألماني لـ ${e.de}`).not.toBe("");
      expect(e.exampleAr.trim(), `مثال عربي لـ ${e.de}`).not.toBe("");
    }
  });

  it("الثقافة: ملاحظتان على الأقل، وكل واحدة فيها عنوان ونص", () => {
    if (!lesson) return;
    const notes = lesson.landeskunde ?? [];
    expect(notes.length).toBeGreaterThanOrEqual(2);
    for (const n of notes) {
      expect(n.titleAr.trim()).not.toBe("");
      expect(n.bodyAr.trim().length).toBeGreaterThan(40);
    }
  });
});
