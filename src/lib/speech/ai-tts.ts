/**
 * الصوت الذكي (اختياري): يطلب جملة من /api/tts ويعيد رابط WAV للتشغيل.
 * الافتراضي مغلق؛ أي فشل يعيد null فتستخدم الواجهة صوت المتصفح كما هو.
 */

const AI_VOICE_KEY = "dp:ai-voice-enabled";
const CACHE_LIMIT = 40;
const cache = new Map<string, string>();

/** هل فعّل المتعلم الصوت الذكي؟ الافتراضي: لا */
export function isAiVoiceEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(AI_VOICE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAiVoiceEnabled(enabled: boolean): void {
  try {
    window.localStorage.setItem(AI_VOICE_KEY, enabled ? "1" : "0");
  } catch {
    /* تجاهل */
  }
}

/** يعيد رابط blob لملف WAV، أو null عند أي فشل أو عدم تفعيل الخادم */
export async function fetchAiSpeechUrl(text: string): Promise<string | null> {
  const key = text.trim();
  if (!key) return null;
  const cached = cache.get(key);
  if (cached) return cached;
  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: key }),
    });
    if (!res.ok) return null;
    const type = res.headers.get("content-type") ?? "";
    if (!type.startsWith("audio/")) return null;
    const url = URL.createObjectURL(await res.blob());
    if (cache.size >= CACHE_LIMIT) {
      const oldest = cache.keys().next().value;
      if (oldest !== undefined) {
        const oldUrl = cache.get(oldest);
        if (oldUrl) URL.revokeObjectURL(oldUrl);
        cache.delete(oldest);
      }
    }
    cache.set(key, url);
    return url;
  } catch {
    return null;
  }
}
