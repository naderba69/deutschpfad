/**
 * تغطية مرحلتي المفردات والثقافة لكل دروس A1–B2.
 * يحرس:
 *  - قائمة `BANK_LESSON_IDS` مطابقةً لمفاتيح البنوك الفعلية.
 *  - كل درس له ملاحظة ثقافية.
 *  - كل درس له مفردات، إلا:
 *      • دروس المراجعة (kompakt) لا تقدّم كلمات جديدة بالتصميم؛
 *      • فجوات معروفة (KNOWN_GAPS) بلا بنك مفردات بعد. أي تغيير في هذه القائمة يكسر الاختبار
 *        عمداً حتى تُحدَّث الوثيقة.
 */
import {describe, expect, it} from "vitest";
import {LESSONS} from "@/data/lessons";
import {A1_VOCAB} from "@/data/vocabulary/a1";
import {A2_VOCAB} from "@/data/vocabulary/a2";
import {B1_VOCAB} from "@/data/vocabulary/b1";
import {B2_VOCAB} from "@/data/vocabulary/b2";
import {BANK_LESSON_IDS} from "@/data/vocabulary/bank-lesson-ids";
import {landeskundeFor, lessonHasWortschatz, loadBankWortschatz} from "./lesson-content";

const LEVEL_LESSONS = LESSONS.filter((l) => /^(a1|a2|b1|b2)-/.test(l.id));

/** دروس مراجعة ختامية (kompakt): لا كلمات جديدة فيها بالتصميم */
const REVIEW_LESSONS = new Set(["a1-13", "a2-13", "b1-11"]);
/** فجوات معروفة: دروس عادية بلا بنك مفردات بعد */
const KNOWN_GAPS = new Set(["b1-12", "b2-11", "b2-12", "b2-13"]);

describe("قائمة معرّفات البنك", () => {
  it("تطابق مفاتيح البنوك الأربعة تماماً", () => {
    const actual = [A1_VOCAB, A2_VOCAB, B1_VOCAB, B2_VOCAB].flatMap((b) => Object.keys(b));
    expect([...BANK_LESSON_IDS].sort()).toEqual([...actual].sort());
  });
});

describe("الثقافة", () => {
  for (const lesson of LEVEL_LESSONS) {
    it(`${lesson.id}: ملاحظة ثقافية واحدة على الأقل، وكل واحدة بعنوان ونص`, () => {
      const notes = landeskundeFor(lesson.id, lesson.landeskunde);
      expect(notes.length).toBeGreaterThanOrEqual(1);
      for (const n of notes) {
        expect(n.titleAr.trim()).not.toBe("");
        expect(n.bodyAr.trim().length).toBeGreaterThan(40);
      }
    });
  }
});

describe("المفردات", () => {
  for (const lesson of LEVEL_LESSONS) {
    if (REVIEW_LESSONS.has(lesson.id)) {
      it(`${lesson.id}: مراجعة ختامية بلا مفردات جديدة`, () => {
        expect(lessonHasWortschatz(lesson.id, lesson.wortschatz)).toBe(false);
      });
      continue;
    }
    if (KNOWN_GAPS.has(lesson.id)) {
      it(`${lesson.id}: فجوة معروفة (بلا بنك مفردات)`, () => {
        expect(lessonHasWortschatz(lesson.id, lesson.wortschatz)).toBe(false);
      });
      continue;
    }
    it(`${lesson.id}: له قسم مفردات`, () => {
      expect(lessonHasWortschatz(lesson.id, lesson.wortschatz)).toBe(true);
    });
  }

  it("الفجوات المعروفة فعلاً بلا بنك (لا تظهر في القائمة الثابتة)", () => {
    for (const id of KNOWN_GAPS) expect(BANK_LESSON_IDS.includes(id)).toBe(false);
  });

  it("كل بنك يُحمَّل ويعطي 5 مفردات على الأقل بمعنى عربي", async () => {
    for (const id of BANK_LESSON_IDS) {
      const entries = await loadBankWortschatz(id);
      expect(entries.length, id).toBeGreaterThanOrEqual(5);
      for (const e of entries) {
        expect(e.de.trim(), `de في ${id}`).not.toBe("");
        expect(e.ar.trim(), `ar لـ ${e.de} في ${id}`).not.toBe("");
      }
    }
  }, 60_000);

  it("درس بلا بنك ولا قائمة يعطي قائمة فارغة من التحميل", async () => {
    expect(await loadBankWortschatz("b2-13x")).toEqual([]);
  });
});
