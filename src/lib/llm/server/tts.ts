/**
 * تحويل النص إلى كلام عبر Gemini TTS — دوال نقية (تعمل على الخادم فقط).
 * الاستجابة الصوتية من Gemini خام PCM (16 بت، أحادية، 24 kHz غالباً)، نغلفها بترويسة WAV
 * ليشغّلها المتصفح مباشرة.
 */

export const TTS_VOICE = "Kore";
/** حد صارم لطول النص المرسل (جمل قصيرة فقط؛ الحوارات الطويلة تبقى على صوت المتصفح) */
export const TTS_MAX_CHARS = 300;
const DEFAULT_SAMPLE_RATE = 24000;

export function geminiTtsUrl(model: string): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
}

export function buildGeminiTtsBody(text: string, voice: string = TTS_VOICE): Record<string, unknown> {
  return {
    contents: [{ parts: [{ text }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
    },
  };
}

/** يستخرج بيانات PCM والمعدل من استجابة Gemini؛ يرمي خطأ إن لم تكن صوتاً صالحاً. */
export function extractPcm(json: unknown): { pcm: Uint8Array; sampleRate: number } {
  const candidates = (json as { candidates?: unknown })?.candidates;
  const parts = Array.isArray(candidates)
    ? ((candidates[0] as { content?: { parts?: unknown } })?.content?.parts as unknown[] | undefined)
    : undefined;
  if (!Array.isArray(parts)) throw new Error("استجابة الصوت فارغة");
  for (const part of parts) {
    const inline = (part as { inlineData?: { mimeType?: unknown; data?: unknown } })?.inlineData;
    if (!inline || typeof inline.data !== "string" || typeof inline.mimeType !== "string") continue;
    if (!inline.mimeType.startsWith("audio/")) continue;
    const rate = /rate=(\d+)/.exec(inline.mimeType);
    const sampleRate = rate ? Number(rate[1]) : DEFAULT_SAMPLE_RATE;
    if (!Number.isSafeInteger(sampleRate) || sampleRate < 8000 || sampleRate > 48000) {
      throw new Error("معدل عينات الصوت غير مدعوم");
    }
    const pcm = new Uint8Array(Buffer.from(inline.data, "base64"));
    if (pcm.length === 0 || pcm.length % 2 !== 0) throw new Error("بيانات الصوت غير صالحة");
    return { pcm, sampleRate };
  }
  throw new Error("لا يوجد مقطع صوتي في الاستجابة");
}

/** يغلف PCM 16 بت أحادي بترويسة WAV (44 بايت) */
export function pcm16ToWav(pcm: Uint8Array, sampleRate: number): Uint8Array<ArrayBuffer> {
  const channels = 1;
  const bitsPerSample = 16;
  const blockAlign = (channels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const out = new Uint8Array(new ArrayBuffer(44 + pcm.length));
  const view = new DataView(out.buffer);
  const writeAscii = (offset: number, text: string) => {
    for (let i = 0; i < text.length; i++) out[offset + i] = text.charCodeAt(i);
  };
  writeAscii(0, "RIFF");
  view.setUint32(4, 36 + pcm.length, true);
  writeAscii(8, "WAVE");
  writeAscii(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeAscii(36, "data");
  view.setUint32(40, pcm.length, true);
  out.set(pcm, 44);
  return out;
}

/** تحقق من النص قبل الإرسال للمزود: نص غير فارغ وبحد أقصى ثابت */
export function validateTtsText(value: unknown): { ok: true; text: string } | { ok: false; error: string } {
  if (typeof value !== "string") return { ok: false, error: "النص غير صالح" };
  const text = value.trim();
  if (text.length === 0) return { ok: false, error: "النص فارغ" };
  if (text.length > TTS_MAX_CHARS) return { ok: false, error: "النص طويل جداً للصوت الذكي" };
  return { ok: true, text };
}
