/**
 * ═══════════════════════════════════════════════════════════
 *  بيان مقاطع صوت الاستماع لامتحان B2 (صوت بشري) — نفس بنية A1–B1
 *  ─ الملفات: public/audio/exam-b2/<النموذج a|b|c>/<اسم الملف>
 *  ─ إن غابت الملفات (جزء لم يُسجَّل بعد) يشغّل المشغّل النطق الآلي TTS
 *    بالنص نفسه — فلا ينكسر الامتحان بانتظار التسجيلات.
 *  ─ عدد مرات التشغيل يُقرأ من بيانات الامتحان (allowRepeat) لا من تقدير يدوي.
 * ═══════════════════════════════════════════════════════════
 */
import { B2_HOEREN_SETS } from "@/data/exams";
import type { ExamHoerenTeil } from "@/types/exam";

export interface ExamAudioSegment {
  /** اسم الملف داخل مجلد النموذج */
  file: string;
  /** النص المنطوق — يُستخدم احتياطاً عبر TTS إن غاب الملف */
  text: string;
}

export interface ExamAudioSpec {
  /** مجلد الملفات (مثال: /audio/exam-b2/a) */
  base: string;
  /** المقاطع بالترتيب المنطوق */
  segments: ExamAudioSegment[];
  /** عدد مرات التشغيل المسموح بها لهذا الجزء */
  maxPlays: number;
}

export const B2_EXAM_AUDIO_BASE = "/audio/exam-b2";

/** مفاتيح النماذج الثلاثة بترتيب `B2_HOEREN_SETS` */
export const B2_HOEREN_SET_KEYS = ["a", "b", "c"] as const;

/** فواصل المقاطع المنطوقة: «Gespräch 2.» (الجزء 1) و«Ansage 3:» (الجزء 3) */
const SEGMENT_MARKER = /(?:—\s*)?(?:Gespräch|Ansage)\s+\d+\s*[:.]/g;

/** أسماء الملفات المتوقعة لجزء بعدد مقاطع معلوم */
export function b2AudioFileNames(teil: number, count: number): string[] {
  if (teil === 1) return Array.from({ length: count }, (_, i) => `hoeren-t1-g${i + 1}.mp3`);
  if (teil === 3) return Array.from({ length: count }, (_, i) => `hoeren-t3-a${i + 1}.mp3`);
  return [`hoeren-t${teil}.mp3`];
}

/** عدد مرات التشغيل المسموح بها — من بيانات الامتحان (افتراضياً مرة واحدة) */
export function maxPlaysForTeil(teil: ExamHoerenTeil): number {
  return teil.allowRepeat === true ? 2 : 1;
}

/** تقسيم نص الجزء إلى مقاطع منطوقة (5 حوارات في الجزء 1، 7 إعلانات في الجزء 3) */
export function splitHoerenSegments(text: string): string[] {
  const marks: number[] = [];
  SEGMENT_MARKER.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = SEGMENT_MARKER.exec(text)) !== null) marks.push(m.index);
  if (marks.length < 2) return [text.trim()];
  return marks
    .map((start, i) => text.slice(start, i + 1 < marks.length ? marks[i + 1] : text.length).trim())
    .filter((s) => s.length > 0);
}

/** بيان صوت جزء واحد داخل نموذج محدد */
export function b2HoerenAudioSpec(setIndex: number, teil: ExamHoerenTeil): ExamAudioSpec {
  const key = B2_HOEREN_SET_KEYS[setIndex] ?? B2_HOEREN_SET_KEYS[0];
  const texts = splitHoerenSegments(teil.audioText);
  const files = b2AudioFileNames(teil.teil, texts.length);
  return {
    base: `${B2_EXAM_AUDIO_BASE}/${key}`,
    segments: texts.map((text, i) => ({
      file: files[i] ?? `hoeren-t${teil.teil}-${i + 1}.mp3`,
      text,
    })),
    maxPlays: maxPlaysForTeil(teil),
  };
}

/** البيان الكامل: [فهرس النموذج][فهرس الجزء] */
export const B2_HOEREN_AUDIO: ExamAudioSpec[][] = B2_HOEREN_SETS.map((set, si) =>
  set.map((teil) => b2HoerenAudioSpec(si, teil)),
);
