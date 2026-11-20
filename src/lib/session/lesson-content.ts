/**
 * ═══════════════════════════════════════════════════════════
 *  محتوى مرحلتي المفردات والثقافة لدرس — دالة نقية
 *  الأولوية: محتوى الدرس نفسه ← قوائم A1 الإضافية ← بنك المفردات (A1_VOCAB).
 *  الثقافة: محتوى الدرس ← ملاحظات A1 لكل درس.
 *  المستوى التجريبي الحالي: A1 فقط. تُوسَّع القوائم عند تغطية المستويات الأخرى.
 * ═══════════════════════════════════════════════════════════
 */

import {A1_VOCAB, type VocabEntry as BankEntry} from "@/data/vocabulary/a1";
import {A1_EXTRA_LESSON_VOCAB} from "@/data/lessons/a1/vocab-extra";
import {A1_LESSON_CULTURE} from "@/data/landeskunde/a1-lesson-notes";
import type {CultureNote, VocabEntry} from "@/types/lesson";

export function wortschatzFor(lessonId: string, explicit?: readonly VocabEntry[]): VocabEntry[] {
  if (explicit && explicit.length > 0) return [...explicit];
  const extra = A1_EXTRA_LESSON_VOCAB[lessonId];
  if (extra) return [...extra];
  const bank: BankEntry[] = A1_VOCAB[lessonId] ?? [];
  return bank.map((e) => ({de: e.de, ar: e.ar, exampleDe: e.ex}));
}

export function landeskundeFor(lessonId: string, explicit?: readonly CultureNote[]): CultureNote[] {
  if (explicit && explicit.length > 0) return [...explicit];
  return A1_LESSON_CULTURE[lessonId] ?? [];
}
