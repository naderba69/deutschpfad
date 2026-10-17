/**
 * مؤثرات صوتية خفيفة (WebAudio) — بلا أي ملفات صوتية
 * أصوات قصيرة مولّدة برمجياً: نجاح، خطأ، إنجاز، نقرة، فوز
 * — تعمل حتى بدون إنترنت (كل شيء داخل المتصفح) —
 */
let ctx: AudioContext | null = null;
let enabled = true;

/** هل المؤثرات مفعّلة؟ */
export function isSfxEnabled(): boolean {
  return enabled;
}

/** تفعيل/إيقاف المؤثرات (يُحفظ في localStorage) */
export function setSfxEnabled(value: boolean): void {
  enabled = value;
  try {
    localStorage.setItem("dp:sfx-enabled", value ? "1" : "0");
  } catch {
    /* تجاهل */
  }
}

/** تهيئة: قراءة التفضيل المحفوظ + إنشاء سياق الصوت عند أول تفاعل */
export function initSfx(): void {
  try {
    const stored = localStorage.getItem("dp:sfx-enabled");
    if (stored !== null) enabled = stored === "1";
  } catch {
    /* تجاهل */
  }
}

function ensureCtx(): AudioContext | null {
  if (!enabled) return null;
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** نغمة قصيرة بتردد ومدة محددين */
function tone(freq: number, start: number, duration: number, type: OscillatorType = "sine", volume = 0.15): void {
  const c = ensureCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const t0 = c.currentTime + start;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(volume, t0 + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain);
  gain.connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.05);
}

/** ✅ إجابة صحيحة — نغمة صاعدة مشرقة */
export function playCorrect(): void {
  tone(523.25, 0, 0.18, "triangle"); // C5
  tone(783.99, 0.09, 0.22, "triangle"); // G5
}

/** ❌ إجابة خاطئة — نغمة هابطة قصيرة */
export function playWrong(): void {
  tone(233.08, 0, 0.2, "sawtooth", 0.08); // A#3
  tone(174.61, 0.12, 0.25, "sawtooth", 0.08); // F3
}

/** 🎉 إنجاز/فوز — سلسلة صاعدة (fanfare قصيرة) */
export function playAchievement(): void {
  tone(523.25, 0, 0.15, "triangle");
  tone(659.25, 0.1, 0.15, "triangle");
  tone(783.99, 0.2, 0.2, "triangle");
  tone(1046.5, 0.32, 0.35, "triangle", 0.18);
}

/** 👆 نقرة خفيفة */
export function playClick(): void {
  tone(880, 0, 0.05, "sine", 0.06);
}

/** ⏱️ تكتكة العد التنازلي (آخر 3 ثوانٍ) */
export function playTick(final = false): void {
  tone(final ? 1046.5 : 660, 0, final ? 0.25 : 0.08, "square", 0.07);
}
