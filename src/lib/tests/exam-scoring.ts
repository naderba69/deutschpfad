/**
 * ═══════════════════════════════════════════════════════════
 *  تصحيح أسئلة الامتحانات — مصدر واحد لكل المحرّكات
 *
 *  قبل هذا الملف كان كل محرّك يعيد كتابة منطق التصحيح:
 *  محرّك B2 وحده كرّره مرتين (في `finishLesen` و`finishHoeren`)، ومحرّك
 *  A1 كتب منطقاً ثالثاً (`toItems` + `grade`). الآن تُستدعى هذه الدوال
 *  من كل المحرّكات — أي تعديل في قاعدة التصحيح يقع في مكان واحد.
 *
 *  أنواع الأجزاء مدعومة كلها: mcq · rf · zuordnung · gap
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil, ExamLesenTeil } from "@/types/exam";

/** جزء قابل للتصحيح (استماع أو قراءة) */
export type GradableTeil = ExamHoerenTeil | ExamLesenTeil;

/** نتيجة تصحيح جزء واحد */
export interface TeilGrade {
  correct: number;
  total: number;
}

/** نتيجة مكوّن كامل (استماع/قراءة...) بنسبة ونجاح/رسوب */
export interface ModuleScore extends TeilGrade {
  pct: number;
  passed: boolean;
}

/** الإجابات قد تكون منطقية (rf) أو رقمية (mcq) أو نصية (zuordnung) أو فراغات */
export type ExamAnswers = Record<string, unknown>;

/**
 * تصحيح جزء واحد وفق نوعه.
 * `gapAnswers` مفتاحها رقم الفراغ وقيمتها معرّف الجملة المختارة.
 */
export function gradeTeil(teil: GradableTeil, answers: ExamAnswers, gapAnswers: Record<number, string> = {}): TeilGrade {
  let correct = 0;
  let total = 0;

  if (teil.kind === "zuordnung") {
    for (const it of teil.items ?? []) {
      total += 1;
      if (answers[it.id] === it.categoryId) correct += 1;
    }
  } else if (teil.kind === "mcq") {
    for (const q of teil.questions ?? []) {
      total += 1;
      if (answers[q.id] === q.correct) correct += 1;
    }
  } else if (teil.kind === "rf") {
    for (const s of teil.statements ?? []) {
      total += 1;
      if (answers[s.id] === s.isTrue) correct += 1;
    }
  } else if (teil.kind === "gap") {
    const gap = (teil as ExamLesenTeil).gap;
    if (gap) {
      for (let i = 0; i < gap.gapOrder.length; i += 1) {
        total += 1;
        if (gapAnswers[i] === gap.gapOrder[i]) correct += 1;
      }
    }
  }

  return { correct, total };
}

/**
 * تصحيح مجموعة أجزاء (مكوّن كامل) — يجمع نتائج الأجزاء.
 * الفراغات تُقرأ من `answers.gap` كما تُخزّنها واجهات الامتحان.
 */
export function gradeTeile(teile: GradableTeil[], answers: ExamAnswers): TeilGrade {
  const gapAnswers = (answers["gap"] as Record<number, string>) ?? {};
  let correct = 0;
  let total = 0;
  for (const teil of teile) {
    const g = gradeTeil(teil, answers, gapAnswers);
    correct += g.correct;
    total += g.total;
  }
  return { correct, total };
}

/** نسبة مئوية مقرّبة (0 إن كان المجموع صفراً) */
export function percent(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

/**
 * نتيجة مكوّن مع حدّ النجاح.
 * درجة امتحانات Goethe: من 100، والنجاح من 60 في كل مكوّن على حدة.
 */
export function scoreModule(correct: number, total: number, passThreshold = 60): ModuleScore {
  const pct = percent(correct, total);
  return { correct, total, pct, passed: pct >= passThreshold };
}
