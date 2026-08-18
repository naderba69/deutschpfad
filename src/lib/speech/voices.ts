/**
 * إدارة أصوات النطق (SpeechSynthesis) — تحميل الأصوات واختيار الأفضل للألمانية
 */

export interface GermanVoiceInfo {
  voice: SpeechSynthesisVoice;
  /** تقييم الجودة (تفضيل أصوات الإنترنت الجديدة) */
  quality: number;
}

/** قائمة الأصوات المخزنة مؤقتاً */
let cachedVoices: SpeechSynthesisVoice[] = [];

/** تسجيل مستمعي تغيّر الأصوات */
const listeners = new Set<() => void>();

function refreshVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
  listeners.forEach((fn) => fn());
}

/** تحميل الأصوات (يُستدعى مرة واحدة عند أول استخدام) */
export function initVoices(onReady?: () => void): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  refreshVoices();
  if (onReady) listeners.add(onReady);
  // بعض المتصفحات تُحمّل الأصوات بشكل غير متزامن
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
    if (onReady) onReady();
  };
  if (cachedVoices.length > 0 && onReady) onReady();
}

/** جميع الأصوات الألمانية المتاحة */
export function getGermanVoices(): GermanVoiceInfo[] {
  return cachedVoices
    .filter((v) => v.lang.toLowerCase().startsWith("de"))
    .map((voice) => ({
      voice,
      quality: voice.localService ? 1 : 2, // أصوات الإنترنت غالباً أفضل
    }))
    .sort((a, b) => b.quality - a.quality);
}

/** أفضل صوت ألماني (أو null) */
export function getBestGermanVoice(): SpeechSynthesisVoice | null {
  const german = getGermanVoices();
  if (german.length === 0) return null;
  return german[0].voice;
}

/** هل يوجد صوت ألماني مثبت؟ */
export function hasGermanVoice(): boolean {
  return getGermanVoices().length > 0;
}

/** هل يدعم المتصفح النطق؟ */
export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/**
 * نطق نص ألماني مع أفضل صوت متاح وسرعة محددة
 * — يعيد كائن التحكم لإمكانية الإيقاف —
 */
export function speakGerman(
  text: string,
  opts: { rate?: number; pitch?: number; volume?: number; onEnd?: () => void; onError?: () => void } = {},
): SpeechSynthesisUtterance | null {
  if (!isSpeechSynthesisSupported()) return null;

  const { rate = 1, pitch = 1, volume = 1, onEnd, onError } = opts;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;

  const bestVoice = getBestGermanVoice();
  if (bestVoice) {
    try {
      utterance.voice = bestVoice;
    } catch {
      /* صوت افتراضي — لا نكسر النطق إذا رفض المتصفح الكائن */
    }
  }

  if (onEnd) utterance.onend = onEnd;
  if (onError) utterance.onerror = onError;

  window.speechSynthesis.speak(utterance);
  return utterance;
}

/** إيقاف أي نطق جارٍ */
export function stopSpeaking(): void {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
  }
}

/** تشغيل نطق متسلسل لعدة جمل (طابور) مع فاصل بينها */
export function speakSequence(
  lines: { de: string; pauseMs?: number }[],
  opts: { rate?: number; onEnd?: () => void } = {},
): void {
  if (!isSpeechSynthesisSupported() || lines.length === 0) return;
  stopSpeaking();
  const { rate = 1, onEnd } = opts;

  // ═══ الإصلاح الجوهري: التسلسل عبر onend بدل إضافة كل الجمل دفعة واحدة ═══
  // إضافة عدة utterances فور cancel() معروفة بأنها تجعل Chrome يبتلع
  // بعضها — فيسمع المستخدم «أول جملة فقط» ثم صمت. بالتسلسل تُنطق كل
  // جملة بعد انتهاء سابقتها حتماً.
  const speakNext = (idx: number) => {
    if (idx >= lines.length) {
      onEnd?.();
      return;
    }
    const line = lines[idx];
    const u = new SpeechSynthesisUtterance(line.de);
    u.lang = "de-DE";
    u.rate = rate;
    const bestVoice = getBestGermanVoice();
    if (bestVoice) {
      try {
        u.voice = bestVoice;
      } catch {
        /* صوت افتراضي */
      }
    }
    u.onend = () => {
      const pause = line.pauseMs ?? 0;
      if (pause > 0) {
        window.setTimeout(() => speakNext(idx + 1), pause);
      } else {
        speakNext(idx + 1);
      }
    };
    u.onerror = () => speakNext(idx + 1);
    window.speechSynthesis.speak(u);
  };
  speakNext(0);
}

/** تشغيل حلقي: إعادة نطق نفس النص count مرات */
export function speakRepeated(text: string, count: number, opts: { rate?: number; onDone?: () => void } = {}): void {
  if (!isSpeechSynthesisSupported() || count <= 0) return;
  const { rate = 1, onDone } = opts;
  let remaining = count;

  const play = () => {
    if (remaining <= 0) {
      onDone?.();
      return;
    }
    remaining -= 1;
    speakGerman(text, { rate, onEnd: play, onError: onDone });
  };
  play();
}
