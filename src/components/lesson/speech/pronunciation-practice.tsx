"use client";

import * as React from "react";
import {Loader2, Mic} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {recordEvent} from "@/lib/analytics/events";
import {createRecognitionEngine, isRecognitionSupported, unsupportedRecognitionNote, type RecognitionEngine} from "@/lib/speech/speech-recognition";
import {scoreLabel, scorePronunciation, type PronunciationScore} from "@/lib/speech/scoring";
import {stopSpeaking} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";
import {RecordAndCompare} from "./record-and-compare";

interface PronunciationPracticeProps {
  /** النص الألماني المستهدف */
  target: string;
  /** الترجمة العربية (اختياري) */
  targetAr?: string;
  /** يُستدعى عند انتهاء تقييم */
  onScored?: (score: number) => void;
  /** حجم الزر */
  compact?: boolean;
  className?: string;
}

/**
 * ممارسة النطق — استمع ثم سجّل نطقك، واحصل على تقييم فوري:
 * — درجة 0-100
 * — الكلمات التي نطقتها صحيحة / المفقودة / الزائدة
 * — ملاحظة لفظية بالعربية
 * (يعمل بـ Web Speech API: SpeechSynthesis للنطق + SpeechRecognition للاستماع)
 */
export function PronunciationPractice({
  target,
  targetAr,
  onScored,
  compact,
  className,
}: PronunciationPracticeProps) {
  const [recognition, setRecognition] = React.useState<RecognitionEngine | null>(null);
  const [supported, setSupported] = React.useState(true);
  const [listening, setListening] = React.useState(false);
  const [interim, setInterim] = React.useState("");
  const [result, setResult] = React.useState<PronunciationScore | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [scoredOnce, setScoredOnce] = React.useState(false);
  const [showFallback, setShowFallback] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const silentRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    if (!isRecognitionSupported()) {
      setSupported(false);
      setShowFallback(true);
      return;
    }
    let anyEvent = false;
    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        anyEvent = true;
        if (silentRef.current) { clearTimeout(silentRef.current); silentRef.current = null; }
        setInterim(isFinal ? "" : text);
        if (isFinal) {
          setError(null);
          const score = scorePronunciation(target, text);
          setResult(score);
          setScoredOnce(true);
          onScored?.(score.score);
          void recordEvent({ type: "pronunciation-score", target, score: score.score });
          stopSpeaking();
        }
      },
      onStart: () => {
        anyEvent = true;
        if (silentRef.current) { clearTimeout(silentRef.current); silentRef.current = null; }
        setListening(true);
      },
      onEnd: () => setListening(false),
      onError: (message) => {
        anyEvent = true;
        if (silentRef.current) { clearTimeout(silentRef.current); silentRef.current = null; }
        // إصلاح: الرسالة كانت تُبتلع — تُعرض الآن بوضوح
        setListening(false);
        setInterim("");
        setError(message);
        setResult(null);
        // فشل المحرك → البديل التفاعلي فوراً
        setShowFallback(true);
      },
    });
    // ═══ كشف «الدعم الوهمي»: إن لم يصدر أي حدث خلال 5 ثوانٍ
    // فالمحرك معطّل فعلياً رغم إعلان الدعم — ننتقل للبديل تلقائياً
    silentRef.current = setTimeout(() => {
      if (anyEvent) return;
      engine?.destroy();
      setSupported(false);
      setError("متصفحك يعلن دعم التعرف لكنه لا يستجيب — استخدم «سجّل واستمع لنفسك» أدناه (يعمل في كل المتصفحات).");
      setShowFallback(true);
    }, 5000);
    setRecognition(engine);
    return () => {
      engine?.destroy();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (silentRef.current) clearTimeout(silentRef.current);
    };
  }, [target, onScored]);

  const toggleListening = () => {
    if (!recognition) return;
    if (recognition.isListening) {
      recognition.stop();
    } else {
      setResult(null);
      setError(null);
      setInterim("");
      setShowFallback(false);
      recognition.start("de-DE");
      // مهلة أمان: لا صمت بلا تفسير
      timeoutRef.current = setTimeout(() => {
        recognition.stop();
        setListening(false);
        setError("لم نسمع صوتاً — انطق بوضوح، أو فعّل إذن الميكروفون ثم أعد المحاولة.");
        setShowFallback(true);
      }, 10000);
    }
  };

  const label = result ? scoreLabel(result.score) : null;

  return (
    <div className={cn("rounded-xl border bg-background p-4", className)}>
      {!supported ? (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">⚠️ {unsupportedRecognitionNote()}</p>
          <RecordAndCompare target={target} targetAr={targetAr} />
        </div>
      ) : (
        <div className="space-y-3">
          {/* النص المستهدف */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="font-de text-lg font-bold" dir="ltr" lang="de">
                {target}
              </p>
              {targetAr && <p className="text-sm text-muted-foreground">{targetAr}</p>}
            </div>
            <div className="flex items-center gap-1.5">
              <SpeakButton text={target} rate={0.75} variant="outline" size="sm" label="بطيء" />
              <SpeakButton text={target} rate={1} size="sm" />
            </div>
          </div>

          {/* زر التسجيل */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={listening ? "destructive" : "default"}
              onClick={toggleListening}
              className={cn("gap-2", listening && "animate-pulse")}
              aria-label={listening ? "إيقاف التسجيل" : "سجّل نطقك"}
            >
              {listening ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  استمع… (انطق الآن)
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4" aria-hidden="true" />
                  سجّل نطقك
                </>
              )}
            </Button>
            {interim && <span className="font-de text-sm italic text-muted-foreground" dir="ltr" lang="de">{interim}…</span>}
          </div>

          {/* رسالة الخطأ — كانت تُبتلع سابقاً */}
          {error && !listening && (
            <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs font-medium text-destructive" role="alert">
              ⚠️ {error}
            </p>
          )}

          {/* النتيجة */}
          {result && (
            <div
              className={cn(
                "space-y-2 rounded-xl border p-3 text-sm",
                result.score >= 75
                  ? "border-success/40 bg-success/10"
                  : result.score >= 55
                    ? "border-gold/40 bg-gold/10"
                    : "border-destructive/40 bg-destructive/10",
              )}
              role="status"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-de text-3xl font-extrabold text-foreground">
                  {result.score}
                </span>
                <span className="font-bold">
                  {label?.emoji} {label?.label}
                </span>
              </div>

              {/* الكلمات */}
              {!result.empty && (
                <div className="flex flex-wrap items-center gap-1.5">
                  {target.split(/\s+/).map((word, i) => {
                    const clean = word.replace(/[^a-zA-ZäöüßÄÖÜ]/g, "");
                    const matched = result.matchedWords.includes(clean.toLowerCase());
                    const missed = result.missedWords.includes(clean.toLowerCase());
                    return (
                      <span
                        key={i}
                        className={cn(
                          "font-de rounded-md px-1.5 py-0.5",
                          matched && "bg-success/20 text-success",
                          missed && "bg-destructive/15 text-destructive line-through",
                          !matched && !missed && "bg-muted text-muted-foreground",
                        )}
                        dir="ltr"
                        lang="de"
                        title={matched ? "نطقتها صحيحاً ✓" : missed ? "لم تُدرك بوضوح" : ""}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>
              )}

              <p className="text-xs text-muted-foreground">
                {result.empty
                  ? "لم يلتقط المتصفح كلاماً — تأكد من إذن الميكروفون وأعد المحاولة."
                  : `النص المعترف به: «${result.recognizedText}» — النطق يُقيَّم داخل متصفحك ولا يُرسل لأي خادم.`}
              </p>
            </div>
          )}

          {!result && scoredOnce && (
            <p className="text-xs text-muted-foreground">انتظر… جارٍ تحليل نطقك</p>
          )}

          {/* ═══ البديل الذي يعمل دائماً (سجّل واستمع لنفسك) ═══ */}
          {!showFallback && (
            <button
              type="button"
              onClick={() => setShowFallback(true)}
              className="text-xs font-bold text-muted-foreground underline decoration-dotted underline-offset-2 hover:text-primary"
            >
              + بديل: سجّل واستمع لنفسك (يعمل في كل المتصفحات)
            </button>
          )}
          {showFallback && (
            <div className="pt-1">
              <RecordAndCompare target={target} targetAr={targetAr} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
