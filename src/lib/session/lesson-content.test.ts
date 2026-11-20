/**
 * تغطية مرحلتي المفردات والثقافة لدروس A1.
 * يحرس: كل درس A1 له محتوى في المرحلتين، إلا a1-13 (مراجعة ختامية بلا كلمات جديدة)،
 * وكل بطاقة ثقافية مُعاد استعمالها موجودة فعلاً في المشروع.
 */
import {describe, expect, it} from "vitest";
import {LESSONS} from "@/data/lessons";
import {landeskundeFor, wortschatzFor} from "./lesson-content";
import {A1_LESSON_CULTURE} from "@/data/landeskunde/a1-lesson-notes";

const A1_IDS = LESSONS.filter((l) => l.level === "A1").map((l) => l.id);
/** مراجعة ختامية: لا تُقدّم كلمات جديدة، فلا قسم مفردات لها (تُتخطّى مرحلتها بالتصميم) */
const REVIEW_WITHOUT_NEW_WORDS = new Set(["a1-13"]);

describe("محتوى A1 للمرحلتين", () => {
  it("يوجد درسا A1 على الأقل في الكتالوج", () => {
    expect(A1_IDS.length).toBeGreaterThanOrEqual(14);
  });

  for (const id of A1_IDS) {
    if (REVIEW_WITHOUT_NEW_WORDS.has(id)) continue;
    it(`${id}: مفردات (5 على الأقل)`, () => {
      const lesson = LESSONS.find((l) => l.id === id);
      expect(wortschatzFor(id, lesson?.wortschatz).length).toBeGreaterThanOrEqual(5);
    });
  }

  for (const id of A1_IDS) {
    it(`${id}: ملاحظة ثقافية واحدة على الأقل، وكل واحدة بعنوان ونص`, () => {
      const lesson = LESSONS.find((l) => l.id === id);
      const notes = landeskundeFor(id, lesson?.landeskunde);
      expect(notes.length).toBeGreaterThanOrEqual(1);
      for (const n of notes) {
        expect(n.titleAr.trim()).not.toBe("");
        expect(n.bodyAr.trim().length).toBeGreaterThan(40);
      }
    });
  }

  it("المراجعة الختامية a1-13 لها ملاحظة ثقافية (امتحان Start Deutsch 1)", () => {
    expect(A1_LESSON_CULTURE["a1-13"]?.length ?? 0).toBeGreaterThanOrEqual(1);
  });

  it("كل مفردة في قوائم A1 الإضافية لها معنى عربي", () => {
    for (const id of A1_IDS) {
      for (const e of wortschatzFor(id)) {
        expect(e.de.trim(), `de في ${id}`).not.toBe("");
        expect(e.ar.trim(), `ar لـ ${e.de} في ${id}`).not.toBe("");
      }
    }
  });
});
