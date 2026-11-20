/**
 * ═══════════════════════════════════════════════════════════
 *  محتوى مرحلتي المفردات والثقافة لدرس
 *
 *  المفردات — ثلاثة مصادر بالأولوية:
 *   1) محتوى الدرس نفسه (lesson.wortschatz)            ← متزامن، خفيف
 *   2) قوائم إضافية صغيرة (vocab-extra.ts)              ← متزامن، خفيف
 *   3) بنك المستوى (A1_VOCAB … B2_VOCAB)                ← يُحمَّل عند فتح القسم فقط
 *
 *  البنوك كبيرة (B2 وحده ~240KB مصدراً)، لذلك لا تُستورد مع صفحة الدرس؛
 *  يعرف الدرس وجود القسم من قائمة المعرّفات `BANK_LESSON_IDS`.
 *
 *  الثقافة: متزامنة (ملاحظات خفيفة لكل درس).
 * ═══════════════════════════════════════════════════════════
 */

import {BANK_LESSON_IDS} from "@/data/vocabulary/bank-lesson-ids";
import {A1_EXTRA_LESSON_VOCAB} from "@/data/lessons/a1/vocab-extra";
import {LESSON_CULTURE} from "@/data/landeskunde/lesson-notes";
import type {CultureNote, VocabEntry} from "@/types/lesson";

type BankEntry = {de: string; ar: string; ex?: string};

/** المفردات المتزامنة فقط (محتوى الدرس أو القوائم الإضافية) */
export function ownWortschatz(lessonId: string, explicit?: readonly VocabEntry[]): VocabEntry[] {
  if (explicit && explicit.length > 0) return [...explicit];
  const extra = A1_EXTRA_LESSON_VOCAB[lessonId];
  return extra ? [...extra] : [];
}

/** هل للدرس قسم مفردات؟ (محتواه المتزامن أو وجوده في بنك المستوى) */
export function lessonHasWortschatz(lessonId: string, explicit?: readonly VocabEntry[]): boolean {
  return ownWortschatz(lessonId, explicit).length > 0 || BANK_LESSON_IDS.includes(lessonId);
}

/**
 * تحميل مفردات الدرس من بنك مستواه عند الحاجة فقط.
 * يعيد [] إن لم يوجد الدرس في البنك.
 */
export async function loadBankWortschatz(lessonId: string): Promise<VocabEntry[]> {
  const level = lessonId.slice(0, 2).toLowerCase();
  let bank: Record<string, BankEntry[]> | undefined;
  if (level === "a1") bank = (await import("@/data/vocabulary/a1")).A1_VOCAB;
  else if (level === "a2") bank = (await import("@/data/vocabulary/a2")).A2_VOCAB;
  else if (level === "b1") bank = (await import("@/data/vocabulary/b1")).B1_VOCAB;
  else if (level === "b2") bank = (await import("@/data/vocabulary/b2")).B2_VOCAB;
  const entries = bank?.[lessonId] ?? [];
  return entries.map((e) => ({de: e.de, ar: e.ar, exampleDe: e.ex}));
}

export function landeskundeFor(lessonId: string, explicit?: readonly CultureNote[]): CultureNote[] {
  if (explicit && explicit.length > 0) return [...explicit];
  return LESSON_CULTURE[lessonId] ?? [];
}
