/**
 * ═══════════════════════════════════════════════════════════
 *  بيان مقاطع صوت الاستماع لامتحان B2 — نفس بنية A1–B1 وتسميتها
 *  ─ الملفات: public/audio/exam-b2/<النموذج a|b|c>/<اسم الملف>
 *  ─ لكل نموذج 5 ملفات:  hoeren-t1 · hoeren-t2 · hoeren-t3 · hoeren-t4-a · hoeren-t4-b
 *    (الجزء 4 أطول من حدّ محرّك النطق الواحد، فيُقسم قسمين عند نهاية جملة).
 *  ─ عدد مرات التشغيل يُقرأ من بيانات الامتحان (allowRepeat) لا من تقدير يدوي.
 *  ─ إن غاب ملف غاب ملفٌ ما (نموذج لم يُنتَج بعد) انتقل المشغّل إلى النطق الآلي
 *    من موضع النقص — فلا ينكسر الامتحان.
 * ═══════════════════════════════════════════════════════════
 */
import { B2_HOEREN_SETS } from "@/data/exams";
import type { ExamHoerenTeil } from "@/types/exam";

/** أقصى طول نص لمقطع واحد يضمنه محرّك النطق (يُستخدم في الحارس أيضاً) */
export const MAX_SEGMENT_CHARS = 1500;

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

/** نهاية جملة: نقطة/استفهام/تعجّب/نقطتان مائلة متبوعة بمسافة */
const SENTENCE_END = /[.!?…]\s+/g;

/**
 * تقسيم نص طويل إلى قسمين عند أقرب نهاية جملة إلى المنتصف.
 * إن لم توجد جملة صالحة، يُعاد النص كما هو (قسم واحد) — لا قطع في وسط كلمة.
 */
export function splitLongText(text: string, parts = 2): string[] {
  if (parts < 2) return [text.trim()];
  const mid = text.length / 2;
  const cuts: number[] = [];
  SENTENCE_END.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = SENTENCE_END.exec(text)) !== null) cuts.push(m.index + 1);
  if (cuts.length === 0) return [text.trim()];
  const cut = cuts.reduce((best, c) => (Math.abs(c - mid) < Math.abs(best - mid) ? c : best), cuts[0]);
  return [text.slice(0, cut).trim(), text.slice(cut).trim()].filter((s) => s.length > 0);
}

/** أسماء ملفات جزء: الجزء 4 يُقسّم إلى a ثم b، وغيره ملف واحد tN */
export function b2AudioFileNames(teil: number, count: number): string[] {
  if (teil === 4) {
    return Array.from({ length: count }, (_, i) => `hoeren-t4-${String.fromCharCode(97 + i)}.mp3`);
  }
  return [`hoeren-t${teil}.mp3`];
}

/** المقاطع المنطوقة لجزء: قسمان في الجزء 4 (طويل)، وملف واحد فيما عداه */
export function b2HoerenSegments(teil: ExamHoerenTeil): string[] {
  if (teil.teil === 4) return splitLongText(teil.audioText, 2);
  return [teil.audioText.trim()];
}

/** عدد مرات التشغيل المسموح بها — من بيانات الامتحان (افتراضياً مرة واحدة) */
export function maxPlaysForTeil(teil: ExamHoerenTeil): number {
  return teil.allowRepeat === true ? 2 : 1;
}

/** بيان صوت جزء واحد داخل نموذج محدد */
export function b2HoerenAudioSpec(setIndex: number, teil: ExamHoerenTeil): ExamAudioSpec {
  const key = B2_HOEREN_SET_KEYS[setIndex] ?? B2_HOEREN_SET_KEYS[0];
  const texts = b2HoerenSegments(teil);
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

/** كل أسماء الملفات المتوقعة لنموذج واحد (بدون تكرار) */
export function expectedB2Files(setIndex: number): string[] {
  return [...new Set(B2_HOEREN_AUDIO[setIndex].flatMap((s) => s.segments.map((seg) => seg.file)))];
}
