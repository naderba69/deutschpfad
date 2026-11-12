/**
 * integrity — ثوابت التدقيق المتوقَّعة ودواله المساعدة
 * فُصلت من integrity.test.ts في الدفعة 111 (سقف الحجم: لا ملف فوق 600 سطر).
 * القيم والأجسام منقولة حرفياً.
 */

import { LESSONS } from "@/data/lessons";
import type { Exercise } from "@/types/lesson";

/** كل التمارين في كل الدروس، مع معرّف يسهل تتبّعه */
export function allExercises(): { key: string; ex: Exercise }[] {
  const out: { key: string; ex: Exercise }[] = [];
  for (const lesson of LESSONS) {
    // lesson.writing نوعه WritingExercise، وهو مجموعة جزئية من Exercise
    // (transformation | dictation | fill-blank | ordering) فيدخل الفحوص بأمان.
    // يبقى lesson.listening خارجها لأن ListeningQuestion نوع مستقل.
    const buckets: (Exercise[] | undefined)[] = [
      lesson.practiceBank,
      lesson.miniTest,
      lesson.review,
      lesson.writing,
    ];
    for (const bucket of buckets) {
      for (const ex of bucket ?? []) out.push({ key: `${lesson.id}:${ex.id}`, ex });
    }
  }
  return out;
}
