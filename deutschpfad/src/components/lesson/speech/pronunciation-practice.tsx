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
  const [scoredOnce, setScoredOnce] = React.useState(false);

  React.useEffect(() => {
    if (!isRecognitionSupported()) {
      setSupported(false);
      return;
    }
    const engine = createRecognitionEngine({
      onResult: (text, isFinal) => {
        setInterim(isFinal ? "" : text);
        if (isFinal) {
          const score = scorePronunciation(target, text);
          setResult(score);
          setScoredOnce(true);
          onScored?.(score.score);
          void recordEvent({ type: "pronunciation-score", target, score: score.score });
          stopSpeaking();
        }
      },
      onStart: () => setListening(true),
      onEnd: () => setListening(false),
      onError: () => {
        setListening(false);
        setInterim("");
      },
    });
    setRecognition(engine);
    return () => {
      engine?.destroy();
    };
  }, [target, onScored]);

  const toggleListening = () => {
    if (!recognition) return;
    if (recognition.isListening) {
      recognition.stop();
    } else {
      setResult(null);
      recognition.start("de-DE");
    }
  };

  const label = result ? scoreLabel(result.score) : null;

  return (
    <div className={cn("rounded-xl border bg-background p-4", className)}>
      {!supported ? (
        <p className="text-sm text-muted-foreground">⚠️ {unsupportedRecognitionNote()}</p>
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
        </div>
      )}
    </div>
  );
}
