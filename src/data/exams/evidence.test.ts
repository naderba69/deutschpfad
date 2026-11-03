/**
 * ═══════════════════════════════════════════════════════════
 *  حارس أدلة الامتحانات (Exam Evidence) — محور «تدقيق مقيس»
 *
 *  القياس الذي كشف الفجوة (الدفعة 117): 414 شاهد `whyAr` مكتوبةً في
 *  بيانات الامتحانات **لم تكن تُعرض في أي مسار امتحان** — واليوم شاشةُ
 *  المراجعة تعرضها، وهذا الحارس يمنع انحسارها:
 *
 *   · كل سؤال اختيار (ExamMcq · B2GrammarMcq) يحمل `whyAr` غير فارغ.
 *   · كل عبارة صحيح/خطأ (ExamStatement) تحمل `whyAr` غير فارغ.
 *   · كل شاهد يحوي اقتباساً ألمانياً حقيقياً `[A-Za-zÄÖÜäöüß]{3,}` —
 *     المعيار نفسه المستعمل في شروح مشتّتات الدروس (لا شاهدَ لفظيّ فارغ).
 *   · كل تمرين فخّ (FallstrickExercise) يحمل `whyTrap` و`whyCorrect`
 *     و`trapNameDe` غير فارغة وبالألمانية نفسها.
 *   · عتبةٌ مُقاسة: عدد الشواهد لا يقلّ عن أرضية الدفعة 117.
 *
 *  المصدر المُقاس: نفس البيانات التي تستهلكها الواجهة (LEVEL_MODELS) +
 *  مجموعات B2 الخام + مصنّف القواعد + فخاخ القراءة والاستماع.
 * ═══════════════════════════════════════════════════════════
 */
import { describe, expect, it } from "vitest";

import { LEVEL_MODELS } from "@/data/exams/level-models";
import { B2_LESEN } from "@/data/exams/b2-lesen";
import { B2_LESEN_B } from "@/data/exams/b2-lesen-b";
import { B2_LESEN_C } from "@/data/exams/b2-lesen-c";
import { B2_HOEREN } from "@/data/exams/b2-hoeren";
import { B2_HOEREN_B } from "@/data/exams/b2-hoeren-b";
import { B2_HOEREN_C } from "@/data/exams/b2-hoeren-c";
import { B2_GRAMMATIK } from "@/data/exams/b2-grammatik";
import { FALLSTRICKE } from "@/data/exams/fallstricke";
import { LISTENING, READING } from "@/data/exams/b2-simulation-data";
import type { ExamHoerenTeil, ExamLesenTeil, ExamMcq, ExamStatement } from "@/types/exam";

/** أرضية الدفعة 117 (414) + بنكا المحاكاة 18 (الدفعة 119) */
const EXAM_EVIDENCE_FLOOR = 432;
/** أرضية شواهد الفخاخ (12 تمريناً × 3 حقول ألمانية: الاسم · لماذا الفخ · لماذا الصحيح) */
const EXAM_TRAP_EVIDENCE_FLOOR = 12;

const GERMAN = /[A-Za-zÄÖÜäöüß]{3,}/;

interface WhyItem {
  id: string;
  source: string;
  whyAr: string;
}

function collectFromTeile(teile: (ExamHoerenTeil | ExamLesenTeil)[], source: string): WhyItem[] {
  const out: WhyItem[] = [];
  for (const t of teile) {
    if (t.kind === "mcq") {
      for (const q of (t.questions ?? []) as ExamMcq[]) {
        out.push({ id: q.id, source, whyAr: q.whyAr ?? "" });
      }
    } else if (t.kind === "rf") {
      for (const s of (t.statements ?? []) as ExamStatement[]) {
        out.push({ id: s.id, source, whyAr: s.whyAr ?? "" });
      }
    }
  }
  return out;
}

/** كل الشواهد من مسارات البيانات الحقيقية (أ1-ب1 النماذج الثلاثة + مجموعات ب2 + القواعد) */
function allEvidence(): WhyItem[] {
  const out: WhyItem[] = [];
  for (const level of ["A1", "A2", "B1"] as const) {
    for (const model of LEVEL_MODELS[level]) {
      out.push(...collectFromTeile(model.hoeren, `${level}/${model.id}/hoeren`));
      out.push(...collectFromTeile(model.lesen, `${level}/${model.id}/lesen`));
    }
  }
  const b2Sets: [string, (ExamHoerenTeil | ExamLesenTeil)[]][] = [
    ["b2/lesen", B2_LESEN], ["b2/lesen-b", B2_LESEN_B], ["b2/lesen-c", B2_LESEN_C],
    ["b2/hoeren", B2_HOEREN], ["b2/hoeren-b", B2_HOEREN_B], ["b2/hoeren-c", B2_HOEREN_C],
  ];
  for (const [source, teile] of b2Sets) {
    out.push(...collectFromTeile(teile, source));
  }
  for (const g of B2_GRAMMATIK) {
    out.push({ id: g.id, source: "b2/grammatik", whyAr: g.whyAr ?? "" });
  }
  // بنكا محاكاة B2 (الدفعة 119): 10 أسئلة قراءة + 8 استماع
  for (const t of READING) {
    for (const q of t.questions) out.push({ id: q.id, source: "b2-sim/lesen", whyAr: q.whyAr ?? "" });
  }
  for (const t of LISTENING) {
    for (const q of t.questions) out.push({ id: q.id, source: "b2-sim/hoeren", whyAr: q.whyAr ?? "" });
  }
  return out;
}

describe("أدلة الامتحانات — كل جوابٍ مصحوبٍ بشاهدٍ ألماني", () => {
  const items = allEvidence();

  it("القياس لا يبدأ من فراغ (حماية من فحصٍ فارغ)", () => {
    expect(items.length).toBeGreaterThanOrEqual(EXAM_EVIDENCE_FLOOR);
  });

  it("لا شاهد فارغ في أي سؤال اختيار أو عبارة صحيح/خطأ", () => {
    const empty = items.filter((x) => !x.whyAr.trim()).map((x) => `${x.source}:${x.id}`);
    expect(empty, "شواهد فارغة يجب ملؤها أو حذف السؤال").toEqual([]);
  });

  it("كل شاهد يحوي اقتباساً ألمانياً حقيقياً (لا شاهد لفظيّ)", () => {
    const weak = items
      .filter((x) => x.whyAr.trim() && !GERMAN.test(x.whyAr))
      .map((x) => `${x.source}:${x.id} → «${x.whyAr.slice(0, 40)}»`);
    expect(weak, "شواهد بلا لاتينية — القاعدة نفسها المستعملة في شروح الدروس").toEqual([]);
  });

  it("العتبة المُقاسة: عدد الشواهد لا ينحسر عن أرضية الدفعة 119", () => {
    expect(items.length, `شواهد=${items.length} · الأرضية=${EXAM_EVIDENCE_FLOOR}`)
      .toBeGreaterThanOrEqual(EXAM_EVIDENCE_FLOOR);
  });

  it("محاكاة B2: بنكا القراءة والاستماع (18 سؤالاً) كلها مشهودة", () => {
    const sim = items.filter((x) => x.source.startsWith("b2-sim/"));
    expect(sim.filter((x) => x.source === "b2-sim/lesen").length, "10 أسئلة قراءة").toBe(10);
    expect(sim.filter((x) => x.source === "b2-sim/hoeren").length, "8 أسئلة استماع").toBe(8);
  });

  it("كل تمرين فخّ يحمل الاسم الألماني ولماذا الفخ ولماذا الصحيح", () => {
    const broken = FALLSTRICKE.filter(
      (f) => !f.trapNameDe.trim() || !f.whyTrap.trim() || !f.whyCorrect.trim(),
    ).map((f) => f.id);
    expect(broken, "فخاخ بلا شواهد").toEqual([]);
  });

  it("شواهد الفخاخ كلها تحوي الألمانية (الاسم والعلّتان)", () => {
    const weak = FALLSTRICKE.filter(
      (f) => !GERMAN.test(f.trapNameDe) || !GERMAN.test(f.whyTrap) || !GERMAN.test(f.whyCorrect),
    ).map((f) => f.id);
    expect(weak, "شاهد فخٍّ بلا لاتينية").toEqual([]);
  });

  it("العتبة المُقاسة للفخاخ لا تنحسر", () => {
    expect(FALLSTRICKE.length).toBeGreaterThanOrEqual(EXAM_TRAP_EVIDENCE_FLOOR);
  });
});
