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

function refreshVoices(speechSynthesis?: SpeechSynthesis) {
  const synth = speechSynthesis ?? (
    typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null
  );
  if (!synth) return;
  cachedVoices = synth.getVoices();
}

/** تحميل الأصوات دون استبدال onvoiceschanged العام أو ترك مستمع دائم. */
export function initVoices(onReady?: () => void, speechSynthesis?: SpeechSynthesis): () => void {
  const synth = speechSynthesis ?? (
    typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null
  );
  if (!synth) return () => {};
  let active = true;
  const cleanup = () => {
    if (!active) return;
    active = false;
    synth.removeEventListener("voiceschanged", handleVoicesChanged);
  };
  const handleVoicesChanged = () => {
    refreshVoices(synth);
    if (cachedVoices.length > 0) {
      cleanup();
      onReady?.();
    }
  };

  refreshVoices(synth);
  if (cachedVoices.length > 0) {
    onReady?.();
    return cleanup;
  }
  synth.addEventListener("voiceschanged", handleVoicesChanged);
  // إعادة الفحص بعد التسجيل لمنع فقدان حدث متزامن مع getVoices().
  handleVoicesChanged();
  return cleanup;
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

/** يختار صوتاً ألمانياً فقط؛ لا يرجع لصوت افتراضي بلغة أخرى. */
export function selectGermanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const german = voices.filter((voice) => voice.lang.toLowerCase().startsWith("de"));
  return german.find((voice) => voice.lang.toLowerCase() === "de-de")
    ?? german.find((voice) => !voice.localService)
    ?? german[0]
    ?? null;
}

/** انتظار تحميل صوت ألماني؛ يدعم المتصفحات التي تملأ القائمة بعد voiceschanged. */
export function waitForGermanVoice(
  timeoutMs = 2_000,
  speechSynthesis?: SpeechSynthesis,
): Promise<SpeechSynthesisVoice | null> {
  const synth = speechSynthesis ?? (isSpeechSynthesisSupported() ? window.speechSynthesis : null);
  if (!synth) return Promise.resolve(null);
  const current = selectGermanVoice(synth.getVoices());
  if (current) return Promise.resolve(current);

  return new Promise((resolve) => {
    let done = false;
    let timer: ReturnType<typeof setTimeout>;
    const finish = (voice: SpeechSynthesisVoice | null) => {
      if (done) return;
      done = true;
      globalThis.clearTimeout(timer);
      synth.removeEventListener("voiceschanged", onVoicesChanged);
      resolve(voice);
    };
    const onVoicesChanged = () => {
      const voice = selectGermanVoice(synth.getVoices());
      if (voice) {
        cachedVoices = synth.getVoices();
        finish(voice);
      }
    };
    timer = globalThis.setTimeout(() => {
      cachedVoices = synth.getVoices();
      finish(selectGermanVoice(cachedVoices));
    }, timeoutMs);
    synth.addEventListener("voiceschanged", onVoicesChanged);
    onVoicesChanged();
  });
}

/** هل يدعم المتصفح النطق؟ */
function isSpeechSynthesisSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/**
 * نطق نص ألماني مع أفضل صوت متاح وسرعة محددة
 * — يعيد كائن التحكم لإمكانية الإيقاف —
 */
let speechGeneration = 0;

export async function speakGerman(
  text: string,
  opts: { rate?: number; pitch?: number; volume?: number; onEnd?: () => void; onError?: () => void } = {},
): Promise<SpeechSynthesisUtterance | null> {
  if (!isSpeechSynthesisSupported()) return null;

  const generation = ++speechGeneration;
  const { rate = 1, pitch = 1, volume = 1, onEnd, onError } = opts;
  window.speechSynthesis.cancel();
  const bestVoice = await waitForGermanVoice();
  if (generation !== speechGeneration) return null;
  if (!bestVoice) {
    onError?.();
    return null;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;
  try {
    utterance.voice = bestVoice;
  } catch {
    onError?.();
    return null;
  }

  if (onEnd) utterance.onend = onEnd;
  if (onError) utterance.onerror = onError;
  window.speechSynthesis.speak(utterance);
  return utterance;
}

/** إيقاف أي نطق جارٍ */
export function stopSpeaking(): void {
  speechGeneration += 1;
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
  const generation = speechGeneration;
  const { rate = 1, onEnd } = opts;

  // تسلسل الأصوات عبر onend لتفادي إسقاط الجمل في بعض المتصفحات.
  const speakNext = async (idx: number) => {
    if (generation !== speechGeneration) return;
    if (idx >= lines.length) {
      onEnd?.();
      return;
    }
    const line = lines[idx];
    const bestVoice = await waitForGermanVoice();
    if (generation !== speechGeneration) return;
    if (!bestVoice) {
      onEnd?.();
      return;
    }
    const u = new SpeechSynthesisUtterance(line.de);
    u.lang = "de-DE";
    u.rate = rate;
    try {
      u.voice = bestVoice;
    } catch {
      onEnd?.();
      return;
    }
    u.onend = () => {
      const pause = line.pauseMs ?? 0;
      if (pause > 0) window.setTimeout(() => void speakNext(idx + 1), pause);
      else void speakNext(idx + 1);
    };
    u.onerror = () => void speakNext(idx + 1);
    window.speechSynthesis.speak(u);
  };
  void speakNext(0);
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
