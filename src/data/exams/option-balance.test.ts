/**
 * ═══════════════════════════════════════════════════════════
 *  حارس موازنة موقع الإجابة الصحيحة — على كل امتحانات A1–B2
 *
 *  القياس الذي أنشأ هذا الحارس (2026-10-16، قبل الإصلاح):
 *    175 سؤال اختيار → A=38% · B=59% · C=3%، و12 جزءاً كل إجاباتها في
 *    الخيار نفسه (أحدها جزء B1 كامل إجاباته «A») — أي إمكان اجتياز جزء
 *    بحرف واحد بلا فهم النص.
 *
 *  يحرس الآن ثلاثة أشياء:
 *    1) الأمانة: الموازنة **لا تغيّر** مجموعة خيارات أي سؤال ولا نصّ إجابته
 *       الصحيحة — يُقارَن كل سؤال مُوازَن بنسخته الأصلية بالمعرّف نفسه.
 *    2) منع الغش بالحرف: لا جزء (3 أسئلة فأكثر) كل إجاباته في موضع واحد.
 *    3) توازن التوزيع: داخل كل مجموعة بحسب عدد الخيارات (3 أو 4)، حصة كل موضع ≥ 20%.
 *       التوسعة (الدفعة 135): شمل التدقيق النماذج الثالثة A1/A2/B1، فصار 228 سؤالاً.
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { A1_HOEREN } from "@/data/exams/a1-hoeren";
import { A1_LESEN } from "@/data/exams/a1-lesen";
import { A2_HOEREN } from "@/data/exams/a2-hoeren";
import { A2_LESEN } from "@/data/exams/a2-lesen";
import { B1_HOEREN } from "@/data/exams/b1-hoeren";
import { B1_LESEN } from "@/data/exams/b1-lesen";
import { A1_MODEL2_HOEREN } from "@/data/exams/a1-model2-hoeren";
import { A1_MODEL2_LESEN } from "@/data/exams/a1-model2-lesen";
import { A2_MODEL2_HOEREN } from "@/data/exams/a2-model2-hoeren";
import { A2_MODEL2_LESEN } from "@/data/exams/a2-model2-lesen";
import { B1_MODEL2_HOEREN } from "@/data/exams/b1-model2-hoeren";
import { B1_MODEL2_LESEN } from "@/data/exams/b1-model2-lesen";
import { A1_MODEL3_HOEREN } from "@/data/exams/a1-model3-hoeren";
import { A1_MODEL3_LESEN } from "@/data/exams/a1-model3-lesen";
import { A2_MODEL3_HOEREN } from "@/data/exams/a2-model3-hoeren";
import { A2_MODEL3_LESEN } from "@/data/exams/a2-model3-lesen";
import { B1_MODEL3_HOEREN } from "@/data/exams/b1-model3-hoeren";
import { B1_MODEL3_LESEN } from "@/data/exams/b1-model3-lesen";
import { B2_HOEREN, B2_HOEREN_B, B2_HOEREN_C, B2_HOEREN_SETS, B2_LESEN, B2_LESEN_B, B2_LESEN_C, B2_LESEN_SETS } from "@/data/exams";
import { LEVEL_MODELS } from "@/data/exams/level-models";
import type { ExamHoerenTeil, ExamLesenTeil } from "@/types/exam";

type Teil = Pick<ExamHoerenTeil, "teil" | "questions"> | Pick<ExamLesenTeil, "teil" | "questions">;

/** أزواج (أصلي ← مُوازَن) لكل مكوّن امتحاني */
const PAIRS: { name: string; raw: Teil[]; balanced: Teil[] }[] = [
  { name: "A1-1", raw: [...A1_HOEREN, ...A1_LESEN] as Teil[], balanced: [...LEVEL_MODELS.A1[0].hoeren, ...LEVEL_MODELS.A1[0].lesen] as Teil[] },
  { name: "A2-1", raw: [...A2_HOEREN, ...A2_LESEN] as Teil[], balanced: [...LEVEL_MODELS.A2[0].hoeren, ...LEVEL_MODELS.A2[0].lesen] as Teil[] },
  { name: "B1-1", raw: [...B1_HOEREN, ...B1_LESEN] as Teil[], balanced: [...LEVEL_MODELS.B1[0].hoeren, ...LEVEL_MODELS.B1[0].lesen] as Teil[] },
  { name: "A1-2", raw: [...A1_MODEL2_HOEREN, ...A1_MODEL2_LESEN] as Teil[], balanced: [...LEVEL_MODELS.A1[1].hoeren, ...LEVEL_MODELS.A1[1].lesen] as Teil[] },
  { name: "A2-2", raw: [...A2_MODEL2_HOEREN, ...A2_MODEL2_LESEN] as Teil[], balanced: [...LEVEL_MODELS.A2[1].hoeren, ...LEVEL_MODELS.A2[1].lesen] as Teil[] },
  { name: "B1-2", raw: [...B1_MODEL2_HOEREN, ...B1_MODEL2_LESEN] as Teil[], balanced: [...LEVEL_MODELS.B1[1].hoeren, ...LEVEL_MODELS.B1[1].lesen] as Teil[] },
  { name: "A1-3", raw: [...A1_MODEL3_HOEREN, ...A1_MODEL3_LESEN] as Teil[], balanced: [...LEVEL_MODELS.A1[2].hoeren, ...LEVEL_MODELS.A1[2].lesen] as Teil[] },
  { name: "A2-3", raw: [...A2_MODEL3_HOEREN, ...A2_MODEL3_LESEN] as Teil[], balanced: [...LEVEL_MODELS.A2[2].hoeren, ...LEVEL_MODELS.A2[2].lesen] as Teil[] },
  { name: "B1-3", raw: [...B1_MODEL3_HOEREN, ...B1_MODEL3_LESEN] as Teil[], balanced: [...LEVEL_MODELS.B1[2].hoeren, ...LEVEL_MODELS.B1[2].lesen] as Teil[] },
  { name: "B2-a", raw: [...B2_HOEREN, ...B2_LESEN] as Teil[], balanced: [...B2_HOEREN_SETS[0], ...B2_LESEN_SETS[0]] as Teil[] },
  { name: "B2-b", raw: [...B2_HOEREN_B, ...B2_LESEN_B] as Teil[], balanced: [...B2_HOEREN_SETS[1], ...B2_LESEN_SETS[1]] as Teil[] },
  { name: "B2-c", raw: [...B2_HOEREN_C, ...B2_LESEN_C] as Teil[], balanced: [...B2_HOEREN_SETS[2], ...B2_LESEN_SETS[2]] as Teil[] },
];

/** كل أسئلة الاختيار المُوازَنة مع نطاقها (المستوى + الجزء) */
const balancedRows: { scope: string; id: string; correct: number; options: string[] }[] = [];
for (const pair of PAIRS) {
  for (const teil of pair.balanced) {
    for (const q of teil.questions ?? []) {
      balancedRows.push({ scope: `${pair.name} T${teil.teil}`, id: q.id, correct: q.correct, options: q.options });
    }
  }
}

describe("موازنة موضع الإجابة — الأمانة", () => {
  it("يشمل التدقيق النماذج الثالثة المنشورة في A1 وA2 وB1", () => {
    const audited = new Set(PAIRS.map((pair) => pair.name));
    expect(audited.has("A1-3")).toBe(true);
    expect(audited.has("A2-3")).toBe(true);
    expect(audited.has("B1-3")).toBe(true);
  });

  it("لا سؤال تغيّرت خياراته أو نصّ إجابته الصحيحة", () => {
    const problems: string[] = [];
    for (const pair of PAIRS) {
      for (let i = 0; i < pair.raw.length; i += 1) {
        const raw = pair.raw[i];
        const balanced = pair.balanced[i];
        const rawById = new Map((raw.questions ?? []).map((q) => [q.id, q]));
        for (const q of balanced.questions ?? []) {
          const before = rawById.get(q.id);
          if (!before) { problems.push(`${pair.name}: سؤال مفقود ${q.id}`); continue; }
          const setOf = (xs: string[]) => [...xs].sort().join("\u0001");
          if (setOf(q.options) !== setOf(before.options)) problems.push(`${pair.name}/${q.id}: تغيّرت الخيارات`);
          if (q.options[q.correct] !== before.options[before.correct]) problems.push(`${pair.name}/${q.id}: تغيّر نصّ الإجابة الصحيحة`);
          if (q.options.length !== before.options.length) problems.push(`${pair.name}/${q.id}: تغيّر عدد الخيارات`);
        }
        if ((balanced.questions ?? []).length !== (raw.questions ?? []).length) problems.push(`${pair.name}/T${raw.teil}: تغيّر عدد الأسئلة`);
      }
    }
    expect(problems).toEqual([]);
  });

  it("كل سؤال: مؤشّر الإجابة يشير فعلاً إلى نصّ الإجابة الأصلية", () => {
    const problems: string[] = [];
    for (const pair of PAIRS) {
      for (let i = 0; i < pair.raw.length; i += 1) {
        const rawById = new Map((pair.raw[i].questions ?? []).map((q) => [q.id, q]));
        for (const q of pair.balanced[i].questions ?? []) {
          const before = rawById.get(q.id);
          if (!before) continue;
          const index = q.options.indexOf(before.options[before.correct]);
          if (index !== q.correct) problems.push(`${pair.name}/${q.id}: correct=${q.correct} والنصّ في ${index}`);
        }
      }
    }
    expect(problems).toEqual([]);
  });
});

describe("موازنة موضع الإجابة — منع الغش بالحرف", () => {
  it("لا جزء (3 أسئلة فأكثر) كل إجاباته في الموضع نفسه", () => {
    const byPart = new Map<string, number[]>();
    for (const r of balancedRows) {
      const list = byPart.get(r.scope) ?? [];
      list.push(r.correct);
      byPart.set(r.scope, list);
    }
    const degenerate = [...byPart.entries()]
      .filter(([, indexes]) => indexes.length >= 3 && new Set(indexes).size === 1)
      .map(([scope, indexes]) => `${scope}: كل ${indexes.length} في الموضع ${indexes[0] + 1}`);
    expect(degenerate).toEqual([]);
  });

  /**
   * الموازنة دورية، فجزء بـ11 سؤالاً و4 خيارات يوزّع بالضرورة 3/3/3/2 —
   * والمهم ألا يتمكن المتعلم من «حصد» أغلبية الجزء بموضع واحد. لذلك الحد:
   * أكثر موضع تكراراً < 70% من أسئلة الجزء (وهو الحد نفسه الذي استُعمل في
   * التدقيق الذي كشف العطب: كان جزء B1 100% في موضع واحد).
   */
  it("لا جزء تُحصَد فيه 70% من الإجابات أو أكثر بموضع واحد", () => {
    const byPart = new Map<string, number[]>();
    for (const r of balancedRows) {
      const list = byPart.get(r.scope) ?? [];
      list.push(r.correct);
      byPart.set(r.scope, list);
    }
    const skewed = [...byPart.entries()]
      .filter(([, indexes]) => indexes.length >= 3)
      .map(([scope, indexes]) => {
        const top = Math.max(...[0, 1, 2, 3].map((i) => indexes.filter((x) => x === i).length));
        return { scope, share: top / indexes.length, info: `${scope}: [${indexes.join("")}] ${Math.round((top / indexes.length) * 100)}%` };
      })
      .filter((x) => x.share >= 0.7)
      .map((x) => x.info);
    expect(skewed).toEqual([]);
  });

  it("كل جزء به 3 أسئلة فأكثر يستعمل موضعين مختلفين على الأقل", () => {
    const byPart = new Map<string, number[]>();
    for (const r of balancedRows) {
      const list = byPart.get(r.scope) ?? [];
      list.push(r.correct);
      byPart.set(r.scope, list);
    }
    const single = [...byPart.entries()]
      .filter(([, indexes]) => indexes.length >= 3 && new Set(indexes).size < 2)
      .map(([scope]) => scope);
    expect(single).toEqual([]);
  });
});

describe("موازنة موضع الإجابة — توازن التوزيع", () => {
  it("حجم العيّنة المفحوصة كامل (228 سؤال اختيار مع النماذج 3)", () => {
    expect(balancedRows.length).toBe(228);
  });

  it("يوزّع الإجابات داخل كل مجموعة بحسب عدد الخيارات (قياس 228 سؤالاً)", () => {
    const byArity = new Map<number, number[]>();
    for (const row of balancedRows) {
      const counts = byArity.get(row.options.length) ?? Array(row.options.length).fill(0);
      counts[row.correct] += 1;
      byArity.set(row.options.length, counts);
    }
    // جميع نماذج A1–B1 خياراتها ثلاثية، ونماذج B2 رباعية.
    expect(Object.fromEntries(byArity)).toEqual({
      3: [48, 57, 54],
      4: [15, 21, 18, 15],
    });
    for (const [arity, counts] of byArity) {
      const total = counts.reduce((sum, count) => sum + count, 0);
      for (const count of counts) {
        expect(count / total, `${arity} خيارات: ${counts.join("/")}`).toBeGreaterThanOrEqual(0.2);
      }
    }
  });

  it("كل نموذج يستخدم كل موضع إجابة ممكن وفق عدد خياراته", () => {
    const perModel = new Map<string, Map<number, Set<number>>>();
    for (const row of balancedRows) {
      const model = row.scope.split(" T")[0];
      const byArity = perModel.get(model) ?? new Map<number, Set<number>>();
      const positions = byArity.get(row.options.length) ?? new Set<number>();
      positions.add(row.correct);
      byArity.set(row.options.length, positions);
      perModel.set(model, byArity);
    }
    const missing: string[] = [];
    for (const [model, byArity] of perModel) {
      for (const [arity, positions] of byArity) {
        if (positions.size !== arity) missing.push(`${model}/${arity} خيارات: ${[...positions].join(",")}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
