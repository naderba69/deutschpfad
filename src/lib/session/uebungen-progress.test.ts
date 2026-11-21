import {describe, expect, it} from "vitest";
import {A1_RAW_LESSONS} from "@/data/lessons/a1-level";
import {A2_RAW_LESSONS} from "@/data/lessons/a2-level";
import {B1_RAW_LESSONS} from "@/data/lessons/b1-level";
import {B2_RAW_LESSONS} from "@/data/lessons/b2-level";
import {
  BATCH_SIZE,
  applyBatchAnswer,
  startBatch,
} from "./uebungen-progress";

type Ex = {id: string};
const ex = (...ids: string[]): Ex[] => ids.map((id) => ({id}));
const identity = (input: readonly Ex[], n: number) => input.slice(0, n);

describe("قاعدة إجابة التمرين (الإجابة الخاطئة لا تُحسب)", () => {
  it("إجابة خاطئة لا تُسجَّل ولا تُكمل الدفعة", () => {
    const batch = ["a", "b", "c", "d", "e"];
    const step = applyBatchAnswer(batch, new Set(), "a", false);
    expect(step.solved.has("a")).toBe(false);
    expect(step.solved.size).toBe(0);
    expect(step.complete).toBe(false);
  });

  it("خطأ بعد صواب لا يمحو الصواب الأول", () => {
    const batch = ["a", "b"];
    const afterCorrect = applyBatchAnswer(batch, new Set(), "a", true);
    const afterWrong = applyBatchAnswer(batch, afterCorrect.solved, "a", false);
    expect(afterWrong.solved.has("a")).toBe(true);
    expect(afterWrong.solved).toBe(afterCorrect.solved);
  });

  it("إعادة الصواب على تمرين مُجاب لا تغيّر المجموعة", () => {
    const batch = ["a", "b"];
    const first = applyBatchAnswer(batch, new Set(), "a", true);
    const again = applyBatchAnswer(batch, first.solved, "a", true);
    expect(again.solved).toBe(first.solved);
    expect(again.complete).toBe(false);
  });

  it("الإكمال لا يحدث إلا حين تُجاب كل تمارين الدفعة صحيحاً", () => {
    const batch = ["a", "b", "c", "d", "e"];
    let solved: ReadonlySet<string> = new Set();
    for (const id of ["a", "b", "c", "d"]) {
      const step = applyBatchAnswer(batch, solved, id, true);
      expect(step.complete).toBe(false);
      solved = step.solved;
    }
    // خطأ على التمرين الأخير لا يكمل الدفعة
    expect(applyBatchAnswer(batch, solved, "e", false).complete).toBe(false);
    expect(applyBatchAnswer(batch, solved, "e", true).complete).toBe(true);
  });

  it("تمرين من خارج الدفعة لا يكمل الدفعة", () => {
    const batch = ["a", "b"];
    const step = applyBatchAnswer(batch, new Set(["a"]), "zz", true);
    expect(step.complete).toBe(false);
  });
});

describe("قاعدة الدفعة الجديدة (تُصفّر التقدم)", () => {
  it("الدفعة الجديدة تبدأ بتقدم فارغ دائماً", () => {
    const round = startBatch(ex("a", "b", "c", "d", "e", "f"), BATCH_SIZE, identity);
    expect(round.batch.map((e) => e.id)).toEqual(["a", "b", "c", "d", "e"]);
    expect(round.solved.size).toBe(0);
  });

  it("دفعة مُكتملة ثم دفعة جديدة: الاكتمال القديم لا يُعتمد في الجديدة", () => {
    const oldIds = ["a", "b", "c", "d", "e"];
    let solved: ReadonlySet<string> = new Set();
    for (const id of oldIds) solved = applyBatchAnswer(oldIds, solved, id, true).solved;
    expect(applyBatchAnswer(oldIds, solved, "a", true).complete).toBe(true);

    // الدفعة الجديدة (تمارين مختلفة) تبدأ من الصفر
    const next = startBatch(ex("f", "g", "h", "i", "j"), BATCH_SIZE, identity);
    const nextIds = next.batch.map((e) => e.id);
    expect(next.solved.size).toBe(0);
    expect(applyBatchAnswer(nextIds, next.solved, "f", true).complete).toBe(false);
  });

  it("دفعة جديدة تحتوي التمارين نفسها تبدأ أيضاً من الصفر", () => {
    const ids = ["a", "b", "c", "d", "e"];
    const fresh = startBatch(ex(...ids), BATCH_SIZE, identity);
    expect(fresh.solved.size).toBe(0);
    expect(applyBatchAnswer(ids, fresh.solved, "a", true).complete).toBe(false);
  });
});

describe("اختيار الدفعة من البنك", () => {
  it("بنك فارغ: دفعة فارغة، ولا تكتمل أبداً", () => {
    const round = startBatch<Ex>([], BATCH_SIZE, identity);
    expect(round.batch).toEqual([]);
    expect(applyBatchAnswer([], round.solved, "a", true).complete).toBe(false);
  });

  it("بنك أصغر من حجم الدفعة: تُعرض كل تمارينه", () => {
    const round = startBatch(ex("a", "b"), BATCH_SIZE, identity);
    expect(round.batch).toHaveLength(2);
  });
});

describe("بيانات البنوك تحرس شروط القاعدة في كل الدروس", () => {
  const all = [...A1_RAW_LESSONS, ...A2_RAW_LESSONS, ...B1_RAW_LESSONS, ...B2_RAW_LESSONS];

  it("كل درس فيه بنك تمارين بحجم دفعة كامل", () => {
    const short = all
      .filter((l) => (l.practiceBank ?? []).length < BATCH_SIZE)
      .map((l) => l.id);
    expect(short).toEqual([]);
  });

  it("معرّفات التمارين فريدة داخل كل بنك، لأن المعرّف المكرر يُحسب تمريناً آخر", () => {
    const dupes = all
      .filter((l) => {
        const ids = (l.practiceBank ?? []).map((e) => e.id);
        return new Set(ids).size !== ids.length;
      })
      .map((l) => l.id);
    expect(dupes).toEqual([]);
  });
});
