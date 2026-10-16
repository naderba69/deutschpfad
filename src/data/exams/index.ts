/**
 * ═══════════════════════════════════════════════════════════
 *  محرك امتحان Goethe-Zertifikat B2 — الكائن الموحد
 *  المدد والدرجات من وثائق Goethe-Institut الرسمية (2019+)
 *   Lesen: 65 دقيقة · 30 سؤالاً · Hören: ~40 دقيقة · 30 سؤالاً
 *   Schreiben: 75 دقيقة · مهمتان · Sprechen: ~15 دقيقة (زوجي)
 *  النجاح: ≥ 60 من 100 في كل مكوّن على حدة.
 * ═══════════════════════════════════════════════════════════
 */
import { balanceTeile } from "@/lib/tests/balance-options";
import type { GoetheB2Exam } from "@/types/exam";
import { B2_LESEN } from "@/data/exams/b2-lesen";
import { B2_LESEN_B } from "@/data/exams/b2-lesen-b";
import { B2_LESEN_C } from "@/data/exams/b2-lesen-c";
import { B2_HOEREN } from "@/data/exams/b2-hoeren";
import { B2_HOEREN_B } from "@/data/exams/b2-hoeren-b";
import { B2_HOEREN_C } from "@/data/exams/b2-hoeren-c";
import { B2_SCHREIBEN } from "@/data/exams/b2-schreiben";
import { B2_SPRECHEN } from "@/data/exams/b2-sprechen";
import { B2_GRAMMATIK } from "@/data/exams/b2-grammatik";

/**
 * ثلاث مجموعات كاملة للقراءة (30 سؤالاً لكل مجموعة)
 * موازنة موضع الإجابة الصحيحة تطبَّق هنا مرة واحدة على كل مجموعة —
 * قياس 2026-10-16: كانت 59% من الإجابات في الخيار الثاني، ومجموعتان
 * كاملتان إجاباتهما «B» في الجزء الخامس. الكائن المفرد يقرأ من المجموعة
 * الأولى الموازَنة حتى لا يختلف مسار `/tests/b2` عن مسار المجموعات.
 */
const BALANCED_LESEN_SETS = [B2_LESEN, B2_LESEN_B, B2_LESEN_C].map((set) => balanceTeile(set));
const BALANCED_HOEREN_SETS = [B2_HOEREN, B2_HOEREN_B, B2_HOEREN_C].map((set) => balanceTeile(set));

export const B2_LESEN_SETS = BALANCED_LESEN_SETS;
export const B2_HOEREN_SETS = BALANCED_HOEREN_SETS;

export const GOETHE_B2_EXAM: GoetheB2Exam = {
  id: "goethe-b2",
  title: "Goethe-Zertifikat B2",
  titleAr: "محاكاة امتحان غوته B2 الرسمية",
  lesenMinutes: 65,
  hoerenMinutes: 40,
  schreibenMinutes: 75,
  sprechenMinutes: 15,
  lesen: BALANCED_LESEN_SETS[0],
  hoeren: BALANCED_HOEREN_SETS[0],
  schreiben: B2_SCHREIBEN,
  sprechen: B2_SPRECHEN,
  passThreshold: 60,
};

/** عدد أسئلة القراءة (يجب أن يكون 30) */
export function countLesenQuestions(exam: GoetheB2Exam): number {
  let total = 0;
  for (const teil of exam.lesen) {
    if (teil.kind === "zuordnung") total += teil.items?.length ?? 0;
    else if (teil.kind === "mcq") total += teil.questions?.length ?? 0;
    else if (teil.kind === "gap") total += teil.gap?.gapOrder.length ?? 0;
    else if (teil.kind === "rf") total += teil.statements?.length ?? 0;
  }
  return total;
}

/** عدد أسئلة الاستماع (يجب أن يكون 30) */
export function countHoerenQuestions(exam: GoetheB2Exam): number {
  let total = 0;
  for (const teil of exam.hoeren) {
    if (teil.kind === "rf") total += teil.statements?.length ?? 0;
    else if (teil.kind === "mcq") total += teil.questions?.length ?? 0;
    else if (teil.kind === "zuordnung") total += teil.items?.length ?? 0;
  }
  return total;
}

export { B2_LESEN, B2_LESEN_B, B2_LESEN_C, B2_HOEREN, B2_HOEREN_B, B2_HOEREN_C, B2_SCHREIBEN, B2_SPRECHEN, B2_GRAMMATIK };
