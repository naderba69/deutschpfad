/**
 * ═══════════════════════════════════════════════════════════
 *  صوت التحدث B2 — «اسمع الإجابة النموذجية كما تُقال»
 *
 *  الفكرة: الإجابة النموذجية في بيانات الامتحان تحمل توجيهاً عربياً
 *  والجمل الألمانية بين «...». هذه الجمل نفسها هي **النص المنطوق** —
 *  لا نصّ موازٍ يُكتب مرتين ويتباعد مع الزمن.
 *
 *  الملفات: public/audio/speaking-b2/<الطقم a|b>/<معرّف الموضوع>.mp3
 *  مثال: /audio/speaking-b2/a/v1.mp3 (عرض) · /audio/speaking-b2/b/b-d2.mp3 (مناقشة)
 *
 *  إن غاب ملف: `SpeakButton` يقرأ النصّ بصوت الجهاز ويعلن الحالة —
 *  فلا ينكسر العرض ولا يدّعي تسجيلاً غير موجود.
 * ═══════════════════════════════════════════════════════════
 */
import { B2_SPRECHEN_SETS } from "@/data/exams";

/** مجلد الملفات داخل public */
export const B2_SPRECHEN_AUDIO_BASE = "/audio/speaking-b2";

/** أقصى طول نصّ يضمنه مقطع صوتي واحد (نفس سقف مقاطع الاستماع) */
export const MAX_SPRECHEN_CLIP_CHARS = 1500;

/** الجمل الألمانية المقتبسة بين «...» بالترتيب — هي النص المنطوق */
export function modelSpeechParts(modelAr?: string): string[] {
  if (!modelAr) return [];
  return [...modelAr.matchAll(/«([^»]+)»/g)].map((m) => m[1].trim()).filter((s) => s.length > 0);
}

/** النص المنطوق كاملاً: الجمل المقتبسة موصولة بمسافة */
export function modelSpeechText(modelAr?: string): string {
  return modelSpeechParts(modelAr).join(" ");
}

export interface B2SprechenAudioClip {
  /** مفتاح الطقم في المسار: a = الطقم الأول · b = الطقم الثاني */
  setKey: "a" | "b";
  kind: "vortrag" | "diskussion";
  /** معرّف الموضوع كما في البيانات (v1 · b-v1 · d2 · b-d2) */
  topicId: string;
  /** المسار بلا امتداد — الاستعمال: `${path}.mp3` */
  path: string;
  /** ما يُشغَّل/يُقرأ — مشتقّ من `modelAr` نفسه */
  text: string;
}

/**
 * كل مقاطع التحدث B2 المطلوبة، مشتقّة من أطقم الامتحان نفسها.
 * مواضيع بلا `modelAr` لا تُنتج مقطعاً (لا نصّ لتسجيله).
 */
export function b2SprechenAudioClips(): B2SprechenAudioClip[] {
  const keys: ("a" | "b")[] = ["a", "b"];
  const clips: B2SprechenAudioClip[] = [];
  B2_SPRECHEN_SETS.forEach((set, si) => {
    const setKey = keys[si] ?? "a";
    const push = (kind: B2SprechenAudioClip["kind"], id: string, modelAr?: string) => {
      const text = modelSpeechText(modelAr);
      if (!text) return;
      clips.push({ setKey, kind, topicId: id, path: `${B2_SPRECHEN_AUDIO_BASE}/${setKey}/${id}`, text });
    };
    set.vortrag.forEach((v) => push("vortrag", v.id, v.modelAr));
    set.diskussion.forEach((d) => push("diskussion", d.id, d.modelAr));
  });
  return clips;
}

/**
 * مسار تسجيل موضوع بعينه (`/audio/speaking-b2/a/v1.mp3`) — أو `undefined`
 * إن لم يكن للموضوع إجابة نموذجية. مصدر واحد يستعمله المكوّن والحارس معاً،
 * فلا يتباعد مسار الواجهة عن البيان.
 */
export function b2SprechenAudioPath(topicId: string): string | undefined {
  const clip = b2SprechenAudioClips().find((c) => c.topicId === topicId);
  return clip ? `${clip.path}.mp3` : undefined;
}
