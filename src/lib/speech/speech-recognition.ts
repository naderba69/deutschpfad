/**
 * محرك التعرف على الكلام (Web Speech API — SpeechRecognition)
 * — الالتفاف الآمن حول webkitSpeechRecognition —
 * يعمل في Chrome / Edge (و Safari جزئياً).
 */

export interface RecognitionCallbacks {
  /** نص وسيط (interim) أو نهائي (final) */
  onResult: (transcript: string, isFinal: boolean) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (message: string) => void;
}

export interface RecognitionEngine {
  isSupported: boolean;
  isListening: boolean;
  start: (lang?: string) => void;
  stop: () => void;
  abort: () => void;
  destroy: () => void;
}

/** هل المتصفح يدعم التعرف على الكلام؟ */
export function isRecognitionSupported(): boolean {
  return getRecognitionCtor() !== null;
}

/** شكل مبسّط لكائن SpeechRecognition من Web Speech API */
interface SpeechRecognitionResultEvent {
  resultIndex: number;
  results: {
    length: number;
    [i: number]: { isFinal: boolean; 0: { transcript: string } };
  };
}

interface SpeechRecognitionErrorEvent {
  error?: string;
}

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

/** الوصول الآمن إلى مُنشئ SpeechRecognition عبر المتصفحات (webkit) */
function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/**
 * ═══ مدير مركزي لجلسات التعرف ═══
 * Web Speech API يسمح بجلسة SpeechRecognition واحدة نشطة عبر الصفحة كلها.
 * لو بدأ المستخدم «انطقها» في سطر ثم انتقل لسطر آخر بينما جلسة الأولى
 * لم تُدمَّر، يرفض المتصفح الجلسة الجديدة بصمت (لا onstart ولا onerror)
 * — فيبدو أن «أول جملة تتفاعل والبقية لا».
 * الحل: نتتبع المحرك النشط عالمياً ونوقفه/نُبطله قبل بدء أي محرك جديد.
 */
let activeEngine: { abort: () => void; destroy: () => void } | null = null;

/** إيقاف أي جلسة نشطة حالياً (يُستدعى قبل بدء جلسة جديدة) */
export function stopActiveRecognition(): void {
  if (activeEngine) {
    try {
      activeEngine.abort();
    } catch {
      /* تجاهل */
    }
    activeEngine = null;
  }
}

/** إنشاء محرك تعرف على الكلام (أو null عند عدم الدعم) */
export function createRecognitionEngine(callbacks: RecognitionCallbacks): RecognitionEngine | null {
  const Ctor = getRecognitionCtor();
  if (!Ctor) return null;

  // إيقاف أي جلسة سابقة في أي جزء من الصفحة — يضمن أن «انطقها» يعمل في كل سطر
  stopActiveRecognition();

  const recognition = new Ctor();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let listening = false;

  recognition.onstart = () => {
    listening = true;
    callbacks.onStart?.();
  };

  recognition.onresult = (event: SpeechRecognitionResultEvent) => {
    let finalTranscript = "";
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      const transcript = result[0]?.transcript ?? "";
      if (result.isFinal) finalTranscript += transcript;
      else interimTranscript += transcript;
    }
    if (finalTranscript) callbacks.onResult(finalTranscript, true);
    else if (interimTranscript) callbacks.onResult(interimTranscript, false);
  };

  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
    const code = event.error ?? "unknown";
    const messages: Record<string, string> = {
      "not-allowed": "لم يُسمح بالوصول إلى الميكروفون. فعّل الإذن من إعدادات المتصفح.",
      "service-not-allowed": "خدمة التعرف محظورة في هذا المتصفح.",
      "no-speech": "لم نسمع صوتاً — حاول مجدداً واقترب من الميكروفون.",
      "audio-capture": "لا يوجد ميكروفون متاح على هذا الجهاز.",
      network: "مشكلة شبكة — تأكد من اتصالك بالإنترنت وأعد المحاولة.",
      "language-not-supported": "هذه اللغة غير مدعومة في المتصفح.",
    };
    callbacks.onError?.(messages[code] ?? `حدث خطأ في التعرف (${code}).`);
  };

  recognition.onend = () => {
    listening = false;
    if (activeEngine) {
      activeEngine = null;
    }
    callbacks.onEnd?.();
  };

  // تسجيل هذا المحرك كمحرك نشط — يُوقف أي جلسة سابقة
  const engineObj = {
    isSupported: true,
    get isListening() {
      return listening;
    },
    start: (lang = "de-DE") => {
      try {
        recognition.lang = lang;
        recognition.start();
      } catch {
        // قد يُرمى خطأ إذا بدأنا أثناء تشغيل جلسة
      }
    },
    stop: () => {
      try {
        recognition.stop();
      } catch {
        /* تجاهل */
      }
    },
    abort: () => {
      try {
        recognition.abort();
      } catch {
        /* تجاهل */
      }
    },
    destroy: () => {
      if (activeEngine === engineObj) {
        activeEngine = null;
      }
      try {
        recognition.abort();
      } catch {
        /* تجاهل */
      }
    },
  };
  activeEngine = engineObj;
  return engineObj;
}

/** نص رسالة عدم الدعم مع اسم المتصفح الموصى به */
export function unsupportedRecognitionNote(): string {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isSafari = /Safari/i.test(ua) && !/Chrome/i.test(ua);
  if (isSafari) {
    return "متصفح Safari لا يدعم تقييم النطق الكامل. استخدم Chrome أو Edge على الجهاز نفسه للحصول على التقييم الصوتي.";
  }
  return "متصفحك الحالي لا يدعم التعرف على الكلام. استخدم Chrome أو Edge للحصول على تقييم النطق (المتصفح لا يرسل صوتك لأي خادم).";
}
