/**
 * ═══════════════════════════════════════════════════════════
 *  حكم الامتحان: سقف المستوى المستنتج + عتبة النجاح — دوال نقية
 *
 *  - المستوى المستنتج لا يتجاوز مستوى الامتحان نفسه. طالب A1 لا يُعطى B2 حتى لو
 *    أجاب إجابات صحيحة كلها (السقف يمنع استنتاجاً أعلى من الاختبار الذي أُجري).
 *  - في B1 وB2 كل وحدة تُقاس منفردة وتحتاج 60 نقطة (من 100). وحدة واحدة قوية
 *    لا تعوّض وحدة ضعيفة، وهذا ما يحدده نموذج Goethe الرسمي للوحدات.
 *  - في A1 وA2 النجاح على الإجمالي (المتوسط) كما كان.
 * ═══════════════════════════════════════════════════════════
 */

import type {TestLevel} from "@/types/test";

export const MODULE_PASS_PCT = 60;

const ORDER: readonly TestLevel[] = ["A1", "A2", "B1", "B2"];

/** المستوى المستنتج مقيّداً بمستوى الامتحان (لا أعلى منه أبداً) */
export function capToExamLevel(estimated: TestLevel, exam: TestLevel): TestLevel {
  return ORDER[Math.min(ORDER.indexOf(estimated), ORDER.indexOf(exam))];
}

/** هل مستوى الامتحان مُقسّم إلى وحدات تُنجح منفردة؟ */
export function isModularExam(exam: TestLevel): boolean {
  return exam === "B1" || exam === "B2";
}

/** الوحدات التي لم تبلغ 60 (في B1/B2 فقط) */
export function failingModules(exam: TestLevel, skills: readonly {skill: string; pct: number}[]): string[] {
  if (!isModularExam(exam)) return [];
  return skills.filter((s) => s.pct < MODULE_PASS_PCT).map((s) => s.skill);
}

/** النجاح: منفرداً لكل وحدة في B1/B2، وعلى المتوسط في A1/A2 */
export function examPassed(exam: TestLevel, skills: readonly {pct: number}[]): boolean {
  if (skills.length === 0) return false;
  if (isModularExam(exam)) return skills.every((s) => s.pct >= MODULE_PASS_PCT);
  const avg = skills.reduce((sum, s) => sum + s.pct, 0) / skills.length;
  return Math.round(avg) >= MODULE_PASS_PCT;
}
