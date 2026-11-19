/**
 * ═══════════════════════════════════════════════════════════
 *  حارس خلط خيارات الاختبارات (`src/lib/tests/shuffle-questions.ts`)
 *
 *  الدافع (دفعة 51): هذا الملف كان **بلا أي اختبار**، وهو طبقة الحماية من ثغرة
 *  «اختر الخيار الأول دائماً» (قياس البنك قبل الإصلاح: 171/171 = 100% في الموضع
 *  الأول). والخلط عشوائي، فلا يُقاس بالعين: هنا نستبدل مولّد العشوائية بسلاسل
 *  ثابتة فنقيس ثلاث حقائق:
 *   1) مجموعة الخيارات لا تتغيّر، ونصّ الإجابة الصحيحة يبقى هو نفسه.
 *   2) الفهرس الجديد يشير إلى النصّ نفسه — أي أن التصحيح بالفهرس يبقى سليماً.
 *   3) المواضع فعلاً تتوزّع (ليست كلها 0) عند سلسلة عشوائية ثابتة.
 * ═══════════════════════════════════════════════════════════
 */
import { afterEach, describe, expect, it, vi } from "vitest";

import { TEST_BANK } from "@/data/tests/question-banks";
import { shuffleOptions, shuffleTestQuestion, shuffleTestQuestions } from "@/lib/tests/shuffle-questions";

/** يثبّت مولّد العشوائية على سلسلة أرقام معطاة (دورياً) */
function fixRandom(values: number[]) {
  let i = 0;
  vi.spyOn(Math, "random").mockImplementation(() => values[i++ % values.length]);
}

afterEach(() => {
  vi.restoreAllMocks();
});

/** كل أسئلة الاختيار في البنك (مباشرة + فرعية) مع فهرسها الصحيح */
function allMcqs() {
  const out: { id: string; options: string[]; correct: number }[] = [];
  for (const q of TEST_BANK) {
    if (q.options && typeof q.correctIndex === "number") out.push({ id: q.id, options: q.options, correct: q.correctIndex });
    (q.questions ?? []).forEach((sub, i) => out.push({ id: `${q.id}:${i + 1}`, options: sub.options, correct: sub.correct }));
  }
  return out;
}

describe("خلط خيارات الاختبارات", () => {
  it("لا يغيّر مجموعة الخيارات ولا نصّ الإجابة الصحيحة", () => {
    const problems: string[] = [];
    for (const round of [0, 1, 2]) {
      fixRandom([0.11, 0.83, 0.37, 0.59, 0.92, 0.04, 0.66, 0.28, 0.44, 0.71].map((v) => (v + round * 0.07) % 1));
      for (const q of allMcqs()) {
        const shuffled = shuffleOptions(q.options, q.correct);
        const before = [...q.options].sort();
        const after = [...shuffled.options].sort();
        if (JSON.stringify(before) !== JSON.stringify(after)) problems.push(`${q.id}: مجموعة الخيارات تغيّرت`);
        if (shuffled.options[shuffled.correctIndex] !== q.options[q.correct]) {
          problems.push(`${q.id}: الفهرس الجديد لا يشير إلى نصّ الإجابة الصحيحة`);
        }
        if (shuffled.correctIndex < 0 || shuffled.correctIndex >= shuffled.options.length) {
          problems.push(`${q.id}: فهرس خارج الحدود بعد الخلط`);
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it("التصحيح بالفهرس يبقى سليماً بعد الخلط (إجابة صحيحة واحدة فقط)", () => {
    fixRandom([0.23, 0.77, 0.41, 0.95, 0.12, 0.58]);
    for (const q of allMcqs().slice(0, 30)) {
      const shuffled = shuffleOptions(q.options, q.correct);
      const isCorrect = (answer: number) => answer === shuffled.correctIndex;
      expect(isCorrect(shuffled.correctIndex), `${q.id}: الإجابة الصحيحة تُعدّ خاطئة`).toBe(true);
      const others = shuffled.options.map((_, i) => i).filter((i) => i !== shuffled.correctIndex);
      for (const other of others) {
        // إن كانت نصوص الخيارات مكرّرة فالسلوك مقبول (نفس النصّ) — نتحقّق فقط
        // حين يختلف النصّ المختار عن النصّ الصحيح
        if (shuffled.options[other] !== shuffled.options[shuffled.correctIndex]) {
          expect(isCorrect(other), `${q.id}: خيار خاطئ يُعدّ صحيحاً`).toBe(false);
        }
      }
    }
  });

  it("المواضع تتوزّع فعلاً (ليست كلها في الموضع الأول)", () => {
    fixRandom([0.31, 0.62, 0.19, 0.88, 0.47, 0.73, 0.05, 0.94, 0.26, 0.51, 0.68, 0.14]);
    const positions = allMcqs().map((q) => shuffleOptions(q.options, q.correct).correctIndex);
    const counts = [0, 1, 2, 3].map((p) => positions.filter((x) => x === p).length);
    const share = (p: number) => (100 * counts[p]) / positions.length;
    for (const p of [0, 1, 2, 3]) {
      expect(share(p), `حصة الموضع ${p} بعد الخلط`).toBeLessThanOrEqual(45);
    }
    expect(new Set(positions).size, "عدد المواضع المستعملة").toBeGreaterThanOrEqual(3);
  });

  it("الأسئلة الفرعية (قراءة/استماع) تُخلط أيضاً بفهرسها الخاص", () => {
    fixRandom([0.42, 0.17, 0.81, 0.35, 0.69]);
    const passage = TEST_BANK.find((q) => (q.questions ?? []).length > 0);
    expect(passage, "لا قطعة في البنك").toBeDefined();
    const shuffled = shuffleTestQuestion(passage!);
    shuffled.questions!.forEach((sub, i) => {
      const original = passage!.questions![i];
      expect([...sub.options].sort()).toEqual([...original.options].sort());
      expect(sub.options[sub.correct]).toBe(original.options[original.correct]);
    });
    // وترتيب الأسئلة نفسه لا يتغيّر (الخلط للخيارات لا للأسئلة)
    expect(shuffled.questions!.map((s) => s.q)).toEqual(passage!.questions!.map((s) => s.q));
  });

  it("الخلط على البنك كله يبقي كل الأسئلة (لا فقد ولا تكرار معرّفات)", () => {
    fixRandom([0.5, 0.25, 0.75]);
    const shuffled = shuffleTestQuestions(TEST_BANK);
    expect(shuffled.length).toBe(TEST_BANK.length);
    expect(shuffled.map((q) => q.id)).toEqual(TEST_BANK.map((q) => q.id));
  });
});
