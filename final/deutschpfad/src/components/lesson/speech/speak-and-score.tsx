"use client";

import * as React from "react";
import {CheckCircle2, Loader2, Mic, XCircle} from "lucide-react";

import {createRecognitionEngine, isRecognitionSupported, type RecognitionEngine} from "@/lib/speech/speech-recognition";
import {scorePronunciation, type PronunciationScore} from "@/lib/speech/scoring";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  انطق واحصل على تقييمك (تقييم النطق الفوري)
 *  زر ميكروفون بجانب أي كلمة/جملة ألمانية:
 *  المستخدم ينطق → يُقارن بالهدف → تظهر فوراً:
 *  · الدرجة 0-100
 *  · ✓ كلمات صحيحة / ✗ مفقودة أو خاطئة
 *  (Web Speech API — SpeechRecognition + Levenshtein — بلا أي مفتاح LLM)
 * ═══════════════════════════════════════════════════════════
 */
export function SpeakAndScore({ target, compact }: { target: string; compact?: boolean }) {
  const [supported, setSupported] = React.useState<boolean | null>(null);
  const [listening, setListening] = React.useState(false);
  const [interim, setInterim] = React.useState("");
  const [result, setResult] = React.useState<PronunciationScore | null>(null);
  const recRef = React.useRef<RecognitionEngine | null>(null);

  React.useEffect(() => {
    setSupported(isRecognitionSupported());
    return () => recRef.current?.abort();
  }, []);

  const start = () => {
    if (listening) return;
    setResult(null);
    setInterim("");
    setListening(true);
    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        if (isFinal) {
          setListening(false);
          const scored = scorePronunciation(target, text);
          setResult(scored);
          // إيقاف بعد النتيجة
          engine?.stop();
        } else {
          setInterim(text);
        }
      },
      onError: () => {
        setListening(false);
        setResult(null);
      },
      onEnd: () => {
        setListening(false);
      },
    });
    if (!engine) {
      setListening(false);
      return;
    }
    recRef.current = engine;
    engine.start("de-DE");
    // مهلة أمان 10 ثوانٍ
    setTimeout(() => {
      setListening((l) => {
        if (l) engine.stop();
        return false;
      });
    }, 10000);
  };

  if (supported === false) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive">
        <XCircle className="h-3 w-3" aria-hidden="true" />
        المتصفح لا يدعم التسجيل
      </span>
    );
  }

  const score = result?.score ?? 0;

  return (
    <div className={cn("inline-flex flex-col items-end gap-1", compact && "scale-95 origin-end")}>
      {/* زر التسجيل */}
      <button
        type="button"
        onClick={start}
        disabled={listening}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors",
          listening
            ? "border-red-400 bg-red-500/15 text-red-600"
            : result
              ? score >= 80
                ? "border-success bg-success/15 text-success"
                : score >= 50
                  ? "border-gold bg-gold/15 text-gold-strong"
                  : "border-destructive bg-destructive/10 text-destructive"
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
        ) : (
          <>
            <Mic className="h-3.5 w-3.5" aria-hidden="true" />
            انطقها
          </>
        )}
      </button>

      {/* النص المؤقت (أثناء الاستماع) */}
      {listening && interim && (
        <span className="font-de rounded-full bg-muted px-2 py-0.5 text-[10px]" dir="ltr">
          {interim}
        </span>
      )}

      {/* النتيجة التفصيلية */}
      {result && (
        <div
          className={cn(
            "mt-0.5 rounded-lg border px-2 py-1 text-[10px] leading-relaxed",
            score >= 80
              ? "border-success/40 bg-success/10 text-success"
              : score >= 50
                ? "border-gold/40 bg-gold/10 text-gold-strong"
                : "border-destructive/30 bg-destructive/5 text-destructive",
          )}
        >
          <p className="font-de" dir="ltr">
            «{result.recognizedText || "…"}»
          </p>
          {result.score >= 80 ? (
            <p className="mt-0.5 font-bold">✓ نطق ممتاز — مطابق!</p>
          ) : result.score >= 50 ? (
            <p className="mt-0.5 font-bold">≈ قريب جداً — حاول مرة أخرى</p>
          ) : (
            <p className="mt-0.5 font-bold">✗ استمع للكلمة ثم أعد النطق</p>
          )}
          {result.missedWords.length > 0 && (
            <p className="mt-0.5 text-muted-foreground">
              لم تُدرك: {result.missedWords.join("، ")}
            </p>
          )}
          {result.wrongWords.length > 0 && (
            <p className="mt-0.5 text-muted-foreground">
              سُمعت بدلاً منها: {result.wrongWords.join("، ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
