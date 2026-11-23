import {describe, expect, it} from "vitest";
import {A1_RAW_LESSONS} from "./a1-level";
import {A2_RAW_LESSONS} from "./a2-level";
import {B1_RAW_LESSONS} from "./b1-level";
import {B2_RAW_LESSONS} from "./b2-level";

/**
 * شكل اختبار الانتقال (Lernkontrolle) في كل درس.
 * الاختبار القصير بسؤالين أو بنوع واحد لا يقيس الإتقان: المتعلم يُخمّن أو يحفظ النمط.
 * القاعدة: 5 أسئلة على الأقل، ومن 3 أنواع تمارين مختلفة على الأقل، وبمعرّفات فريدة.
 */
const MIN_QUESTIONS = 5;
const MIN_TYPES = 3;

const all = [...A1_RAW_LESSONS, ...A2_RAW_LESSONS, ...B1_RAW_LESSONS, ...B2_RAW_LESSONS];

describe("شكل اختبار الانتقال في كل درس", () => {
  it("يغطي كل الدروس المحمّلة", () => {
    expect(all.length).toBeGreaterThanOrEqual(54);
  });

  it.each(all.map((l) => [l.id, l] as const))("%s: 5 أسئلة على الأقل من 3 أنواع على الأقل", (_id, lesson) => {
    const mini = lesson.miniTest ?? [];
    expect(mini.length).toBeGreaterThanOrEqual(MIN_QUESTIONS);
    expect(new Set(mini.map((e) => e.type)).size).toBeGreaterThanOrEqual(MIN_TYPES);
    expect(new Set(mini.map((e) => e.id)).size).toBe(mini.length);
  });
});
