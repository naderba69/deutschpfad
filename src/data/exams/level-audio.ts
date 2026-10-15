/**
 * ═══════════════════════════════════════════════════════════
 *  صوت الاستماع لنماذج A1/A2/B1 التدريبية — مصدر واحد
 *  كان جدول أسماء الملفات وعدد مرات التشغيل مكتوبين داخل مكوّن الصفحة
 *  (`goethe-a1-exam.tsx`)، واختبار E2E يكرّر الجدول يدوياً. الآن الجدول هنا
 *  والمكوّن يستهلكه، والحارس `level-audio.test.ts` يتحقق من وجود كل ملف على
 *  القرص ومن أن عدد مرات التشغيل يطابق بيانات الجزء (`allowRepeat`).
 *
 *  التسمية مطابقة للمُنتَج في `public/audio/exam-{a1,a2,b1}`:
 *    الجزء 1 → مقطع واحد · الجزء 2 → 4 حوارات (لكل حوار a و b) ·
 *    الجزء 3 → مقطع واحد · الجزء 4 → أربعة مقاطع.
 * ═══════════════════════════════════════════════════════════
 */
import { A1_HOEREN } from "@/data/exams/a1-hoeren";
import { A2_HOEREN } from "@/data/exams/a2-hoeren";
import { B1_HOEREN } from "@/data/exams/b1-hoeren";
import type { ExamAudioTrack } from "@/lib/tests/exam-audio";
import type { ExamHoerenTeil } from "@/types/exam";

export type ExamLevel = "A1" | "A2" | "B1";

/** مجلد صوت كل مستوى */
export const LEVEL_AUDIO_BASE: Record<ExamLevel, string> = {
  A1: "/audio/exam-a1",
  A2: "/audio/exam-a2",
  B1: "/audio/exam-b1",
};

/** ملفات كل جزء — التسمية نفسها في المستويات الثلاثة (بنية الأجزاء واحدة) */
export const LEVEL_AUDIO_FILES: Record<number, string[]> = {
  1: ["hoeren-t1.mp3"],
  2: [
    "hoeren-t2-g1-a.mp3",
    "hoeren-t2-g1-b.mp3",
    "hoeren-t2-g2-a.mp3",
    "hoeren-t2-g2-b.mp3",
    "hoeren-t2-g3-a.mp3",
    "hoeren-t2-g3-b.mp3",
    "hoeren-t2-g4-a.mp3",
    "hoeren-t2-g4-b.mp3",
  ],
  3: ["hoeren-t3.mp3"],
  4: ["hoeren-t4-a.mp3", "hoeren-t4-b.mp3", "hoeren-t4-c.mp3", "hoeren-t4-d.mp3"],
};

/** عدد مرات التشغيل: من بيانات الجزء (`allowRepeat`) لا من رقم الجزء */
export function maxPlaysFor(part: ExamHoerenTeil): number {
  return part.allowRepeat ? 2 : 1;
}

/** مقاطع استماع مستوى كامل — بالترتيب نفسه لبيانات الجزء */
export function levelAudioTracks(level: ExamLevel, parts: ExamHoerenTeil[]): ExamAudioTrack[] {
  return parts.map((part) => ({
    base: LEVEL_AUDIO_BASE[level],
    files: LEVEL_AUDIO_FILES[part.teil] ?? [],
    fallbackText: part.audioText,
    maxPlays: maxPlaysFor(part),
  }));
}

/** مقاطع الاستماع الجاهزة للمستويات الثلاثة */
export const LEVEL_AUDIO: Record<ExamLevel, ExamAudioTrack[]> = {
  A1: levelAudioTracks("A1", A1_HOEREN),
  A2: levelAudioTracks("A2", A2_HOEREN),
  B1: levelAudioTracks("B1", B1_HOEREN),
};

/** المستويات وبياناتها — للمكوّن والحارس */
export const LEVEL_EXAM_DATA: Record<ExamLevel, ExamHoerenTeil[]> = {
  A1: A1_HOEREN,
  A2: A2_HOEREN,
  B1: B1_HOEREN,
};
