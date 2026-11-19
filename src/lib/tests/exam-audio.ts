/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج موحّد لمقطع صوت جزء استماع في امتحانات المحاكاة (A1–B2)
 *  كان لكل من A1–B1 وB2 منطق تشغيل مستقل: A1–B1 يشغّل mp3 فقط بلا بديل
 *  (فقدان محاولة بلا صوت عند فشل التحميل، واستمرار الصوت بعد مغادرة القسم)،
 *  وB2 يشغّل mp3 ثم ينتقل للنطق الآلي. الآن النموذج واحد والمشغّل واحد.
 *
 *  أنواع المصدر (ExamAudioSpec في B2) تُحوَّل بـ specToTrack، ومقاطع A1–B1
 *  تُبنى في src/data/exams/level-audio.ts.
 * ═══════════════════════════════════════════════════════════
 */

export interface ExamAudioTrack {
  /** مجلد الملفات (مثال: /audio/exam-a1) */
  base: string;
  /** ملفات mp3 المسجّلة بالترتيب — فارغة إن لم تُنتَج المقاطع بعد */
  files: string[];
  /**
   * نصوص المقاطع بالتوازي مع `files` (مستوى B2) — إن غابت، يُقرأ `fallbackText`
   * كاملاً في نطق آلي واحد (مستوى A1–B1 حيث التقسيم الصوتي غير معلوم نصّاً).
   */
  texts?: string[];
  /** النص الكامل للجزء — يُستخدم للنطق الآلي عند غياب الملفات أو فشلها */
  fallbackText: string;
  /** عدد مرات التشغيل المسموح بها لهذا الجزء (من بيانات الامتحان لا من تقدير) */
  maxPlays: number;
}

/** مواصفة B2 ← النموذج الموحّد (بلا فقدان نصوص المقاطع) */
export function specToTrack(spec: {
  base: string;
  segments: { file: string; text: string }[];
  maxPlays: number;
}): ExamAudioTrack {
  return {
    base: spec.base,
    files: spec.segments.map((s) => s.file),
    texts: spec.segments.map((s) => s.text),
    fallbackText: spec.segments.map((s) => s.text).join(" ").trim(),
    maxPlays: spec.maxPlays,
  };
}
