"use client";

import * as React from "react";
import {CheckCircle2, CircleAlert, Loader2, Mic, Volume2, XCircle} from "lucide-react";

import {
  createRecognitionEngine,
  isRecognitionSupported,
  unsupportedRecognitionNote,
  type RecognitionEngine,
} from "@/lib/speech/speech-recognition";
import {charDiff, scorePronunciation, type PronunciationScore} from "@/lib/speech/scoring";
import {speakGerman, stopSpeaking} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";
import {RecordAndCompare} from "./record-and-compare";

/**
 * ═══════════════════════════════════════════════════════════
 *  انطق واحصل على تقييمك (تقييم النطق الفوري)
 *  زر ميكروفون بجانب أي كلمة/جملة ألمانية:
 *  المستخدم ينطق → يُقارن بالهدف → تظهر فوراً:
 *  · الدرجة 0-100
 *  · ✓ كلمات صحيحة / ✗ مفقودة أو خاطئة
 *  · أين أخطأت بالضبط (مقارنة حرفية ملوّنة)
 *  (Web Speech API — SpeechRecognition + Levenshtein — بلا أي مفتاح LLM)
 *
 *  ── لماذا لا يتجمد أبداً؟ ──
 *  · كل أخطاء المتصفح تظهر برسالة واضحة (إذن الميكروفون، الصمت، الشبكة…)
 *  · عند غياب الدعم يظهر بديل «سجّل واستمع لنفسك» يعمل في كل المتصفحات
 * ═══════════════════════════════════════════════════════════
 */
export function SpeakAndScore({ target, compact }: { target: string; compact?: boolean }) {
  const [supported, setSupported] = React.useState<boolean | null>(null);
  const [listening, setListening] = React.useState(false);
  const [interim, setInterim] = React.useState("");
  const [result, setResult] = React.useState<PronunciationScore | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [showFallback, setShowFallback] = React.useState(false);
  const [openFallback, setOpenFallback] = React.useState(false);
  const recRef = React.useRef<RecognitionEngine | null>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const silentRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    setSupported(isRecognitionSupported());
    return () => {
      recRef.current?.abort();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (silentRef.current) clearTimeout(silentRef.current);
    };
  }, []);

  const stopWithCleanup = React.useCallback(() => {
    setListening(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (silentRef.current) {
      clearTimeout(silentRef.current);
      silentRef.current = null;
    }
  }, []);

  const start = () => {
    if (listening) return;
    setResult(null);
    setInterim("");
    setError(null);
    setShowFallback(false);
    setListening(true);

    // ═══ كشف «الدعم الوهمي» ═══
    // بعض المتصفحات تعرّف webkitSpeechRecognition لكنه لا يستجيب إطلاقاً
    // (يبقى معلقاً بلا onstart ولا onerror ولا نتيجة). مهلة 5 ثوانٍ:
    // إن لم يصدر أي حدث خلالها نعتبر المحرك معطلاً ونعرض البديل فوراً.
    let anyEvent = false;
    const clearSilentTimer = () => {
      if (silentRef.current) {
        clearTimeout(silentRef.current);
        silentRef.current = null;
      }
    };

    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        anyEvent = true;
        clearSilentTimer();
        if (isFinal) {
          stopWithCleanup();
          const scored = scorePronunciation(target, text);
          setResult(scored);
          engine?.stop();
        } else {
          setInterim(text);
        }
      },
      onError: (message) => {
        anyEvent = true;
        clearSilentTimer();
        // ⚠️ الإصلاح الجوهري: رسالة الخطأ تُعرض الآن بدل ابتلاعها بصمت
        stopWithCleanup();
        setError(message);
        setResult(null);
        // عند فشل المحرك نعرض التسجيل البديل — طريق يعمل دائماً
        setShowFallback(true);
      },
      onStart: () => {
        anyEvent = true;
        clearSilentTimer();
      },
      onEnd: () => {
        clearSilentTimer();
        stopWithCleanup();
      },
    });
    if (!engine) {
      setListening(false);
      setError("محرك التعرف غير متاح الآن — استخدم «سجّل واستمع لنفسك» أدناه.");
      setShowFallback(true);
      return;
    }
    recRef.current = engine;
    engine.start("de-DE");

    // مهلة «الدعم الوهمي» — لا صمت بلا تفسير
    silentRef.current = setTimeout(() => {
      if (anyEvent) return;
      stopWithCleanup();
      engine.abort();
      setError("متصفحك يعلن دعم التعرف على الكلام لكنه لا يستجيب للميكروفون. استخدم «سجّل واستمع لنفسك» أدناه — يعمل في كل المتصفحات.");
      setShowFallback(true);
    }, 5000);

    // مهلة أمان: لو لم يسمع صوتاً خلال 10 ثوانٍ يخبر المستخدم بدل الصمت
    timeoutRef.current = setTimeout(() => {
      stopWithCleanup();
      engine.stop();
      setError("لم نسمع صوتاً — اضغط «انطقها» وتحدث بوضوح، أو فعّل إذن الميكروفون ثم أعد المحاولة.");
      setShowFallback(true);
    }, 10000);
  };

  const listenTarget = () => {
    stopSpeaking();
    speakGerman(target, { rate: 0.75 });
    setError(null);
  };

  // متصفح لا يدعم التعرف → بديل تفاعلي يعمل دائماً
  if (supported === false) {
    return (
      <div className="inline-flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-[11px] font-bold text-destructive">
          <XCircle className="h-3 w-3" aria-hidden="true" />
          {unsupportedRecognitionNote()}
        </span>
        <RecordAndCompare target={target} className="w-72 max-w-full" />
      </div>
    );
  }

  const score = result?.score ?? 0;

  return (
    <div className={cn("inline-flex max-w-full flex-col items-end gap-1.5", compact && "min-w-0")}>
      <div className={cn("inline-flex items-center gap-1.5", compact && "w-full")}>
        {/* زر استماع للهدف — دائماً متاح */}
        <button
          type="button"
          onClick={listenTarget}
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-1 rounded-full border border-muted-foreground/30 bg-muted/50 text-[11px] font-bold text-muted-foreground transition-colors hover:bg-muted",
            compact ? "h-7 px-2.5" : "px-2.5 py-1",
          )}
          aria-label={`استمع إلى: ${target}`}
          title="استمع إلى النطق الصحيح"
        >
          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
          استمع
        </button>

        {/* زر التسجيل */}
        <button
          type="button"
          onClick={start}
          disabled={listening}
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-1 rounded-full border text-[11px] font-bold transition-colors",
            compact ? "h-7 px-2.5" : "px-2.5 py-1",
            listening
              ? "border-red-400 bg-red-500/15 text-red-600"
              : result
                ? score >= 80
                  ? "border-success bg-success/15 text-success"
                  : score >= 50
                    ? "border-gold bg-gold/15 text-gold-strong"
                    : "border-destructive bg-destructive/10 text-destructive"
                : error
                  ? "border-destructive bg-destructive/10 text-destructive"
                  : "border-primary/40 bg-primary/10 text-primary hover:bg-primary/15",
          )}
          aria-label={`سجّل نطقك: ${target}`}
          title="اضغط وتحدث بالكلمة — ستحصل على تقييم فوري"
        >
          {listening ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              استمع… تحدث الآن
            </>
          ) : result ? (
            <>
              <Mic className="h-3.5 w-3.5" aria-hidden="true" />
              {score}% — أعد
            </>
          ) : error ? (
            <>
              <Mic className="h-3.5 w-3.5" aria-hidden="true" />
              أعد المحاولة
            </>
          ) : (
            <>
              <Mic className="h-3.5 w-3.5" aria-hidden="true" />
              انطقها
            </>
          )}
        </button>
      </div>

      {/* مؤشر تسجيل مرئي — يعرف المستخدم أنه يُستمع إليه */}
      {listening && (
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
          </span>
          يُستمع إليك… تحدث الآن
        </span>
      )}

      {/* النص المؤقت (أثناء الاستماع) */}
      {listening && interim && (
        <span className="font-de rounded-full bg-muted px-2 py-0.5 text-[11px]" dir="ltr">
          {interim}
        </span>
      )}

      {/* رسالة الخطأ — كانت تُبتلع سابقاً، الآن تظهر بوضوح */}
      {error && !listening && !result && (
        <span className="inline-flex max-w-72 items-start gap-1 rounded-lg border border-destructive/30 bg-destructive/5 px-2 py-1 text-[11px] font-medium leading-snug text-destructive">
          <CircleAlert className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
          {error}
        </span>
      )}

      {/* النتيجة التفصيلية */}
      {result && (
        <div
          className={cn(
            "mt-0.5 max-w-80 rounded-lg border px-2 py-1.5 text-[11px] leading-relaxed",
            score >= 80
              ? "border-success/40 bg-success/10 text-success"
              : score >= 50
                ? "border-gold/40 bg-gold/10 text-gold-strong"
                : "border-destructive/30 bg-destructive/5 text-destructive",
          )}
        >
          <div className="flex items-center gap-2">
            <span className="font-de text-base font-extrabold" dir="ltr">
              {result.score}%
            </span>
            {result.score >= 80 ? (
              <span className="inline-flex items-center gap-1 font-bold"><CheckCircle2 className="h-3 w-3" /> نطق ممتاز — مطابق!</span>
            ) : result.score >= 50 ? (
              <span className="inline-flex items-center gap-1 font-bold"><CircleAlert className="h-3 w-3" /> قريب جداً — حاول مرة أخرى</span>
            ) : (
              <span className="inline-flex items-center gap-1 font-bold"><XCircle className="h-3 w-3" /> استمع ثم أعد النطق</span>
            )}
          </div>

          {/* مقارنة حرفية — أين أخطأت بالضبط */}
          {!result.empty && result.score < 100 && (
            <p className="mt-1 font-de rounded bg-background/70 px-1.5 py-1 text-[11px]" dir="ltr" lang="de">
              {charDiff(target, result.recognizedText).map((seg, i) => (
                <span key={i} className={cn(seg.matched ? "text-success" : "text-destructive font-bold underline decoration-wavy")}>
                  {seg.text}
                </span>
              ))}
              <span className="ms-1.5 text-[9px] text-muted-foreground">
                <span className="text-success">■ مطابق</span> <span className="text-destructive">■ اختلف</span>
              </span>
            </p>
          )}

          {result.missedWords.length > 0 && (
            <p className="mt-0.5 text-muted-foreground">
              لم تُدرك: <span className="font-de" dir="ltr">{result.missedWords.join("، ")}</span>
            </p>
          )}
          {result.wrongWords.length > 0 && (
            <p className="mt-0.5 text-muted-foreground">
              سُمعت بدلاً منها: <span className="font-de" dir="ltr">{result.wrongWords.join("، ")}</span>
            </p>
          )}
        </div>
      )}

      {/* ═══ البديل الذي يعمل دائماً (سجّل واستمع لنفسك) ═══
          يظهر تلقائياً عند فشل/تعطل محرك التعرف فقط.
          في الوضع المضغوط (داخل سطور الكلمات) يُعرض زر صغير يفتح
          البديل عند الطلب — لا يزحم صناديق الجمل أبداً */}
      {showFallback && (
        <div className="mt-1.5 w-full">
          {compact ? (
            <button
              type="button"
              onClick={() => setOpenFallback((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2 py-1 text-[11px] font-bold text-gold-strong transition-colors hover:bg-gold/15"
            >
              {openFallback ? "− إخفاء التسجيل البديل" : "🎤 التسجيل البديل (يعمل دائماً)"}
            </button>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setShowFallback(false)}
                className="text-[11px] font-bold text-muted-foreground underline decoration-dotted underline-offset-2 hover:text-primary"
              >
                − إخفاء التسجيل البديل
              </button>
            </div>
          )}
          {(!compact || openFallback) && (
            <div className="mt-1.5">
              <RecordAndCompare target={target} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
