"use client";

import * as React from "react";
import {Check, Mic, Play, Square, Volume2, X, Minus} from "lucide-react";

import {recordEvent} from "@/lib/analytics/events";
import {stopSpeaking, speakGerman} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  سجّل واستمع لنفسك — مقارنة ذاتية بالنطق الهدف
 *  يعمل في كل المتصفحات (حتى بلا Web Speech API):
 *  1) استمع للهدف (TTS ألماني)
 *  2) سجّل نطقك (MediaRecorder)
 *  3) شغّل تسجيلك وقارن بنفسك
 *  4) قيّم نفسك: ✓ جيد / ≈ قريب / ✗ أعد المحاولة
 *  — لا يُرسل أي صوت لأي خادم: كله داخل المتصفح —
 * ═══════════════════════════════════════════════════════════
 */
export function RecordAndCompare({
  target,
  targetAr,
  onSelfScore,
  className,
}: {
  target: string;
  targetAr?: string;
  /** تُستدعى عند تقييم المستخدم الذاتي (1 = جيد، 0.5 = قريب، 0 = أعد) */
  onSelfScore?: (rating: 0 | 0.5 | 1) => void;
  className?: string;
}) {
  const [recording, setRecording] = React.useState(false);
  const [recordedUrl, setRecordedUrl] = React.useState<string | null>(null);
  const [playing, setPlaying] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [rated, setRated] = React.useState<0 | 0.5 | 1 | null>(null);

  const mediaRef = React.useRef<MediaRecorder | null>(null);
  const chunksRef = React.useRef<Blob[]>([]);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const cleanupObjectUrl = () => {
    if (recordedUrl) URL.revokeObjectURL(recordedUrl);
  };

  const playTarget = () => {
    stopSpeaking();
    speakGerman(target, { rate: 0.8 });
    setError(null);
  };

  const startRecording = async () => {
    setError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError("المتصفح لا يسمح بالتسجيل هنا. جرّب في Chrome أو Edge على جهازك.");
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunksRef.current = [];
      const rec = new MediaRecorder(stream);
      mediaRef.current = rec;
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        cleanupObjectUrl();
        setRecordedUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        setRecording(false);
      };
      rec.start();
      setRecording(true);
      setRated(null);
    } catch {
      setError("لم يُسمح بالوصول إلى الميكروفون. فعّل الإذن من إعدادات المتصفح ثم أعد المحاولة.");
    }
  };

  const stopRecording = () => {
    mediaRef.current?.stop();
  };

  const playMine = () => {
    if (!recordedUrl) return;
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
      return;
    }
    const audio = audioRef.current ?? new Audio();
    audio.src = recordedUrl;
    audio.onended = () => setPlaying(false);
    audio.onplay = () => setPlaying(true);
    audio.play().catch(() => setError("تعذّر تشغيل التسجيل."));
    setPlaying(true);
  };

  const rate = (r: 0 | 0.5 | 1) => {
    setRated(r);
    onSelfScore?.(r);
    void recordEvent({
      type: "self-pronunciation-rating",
      target,
      rating: r,
    } as never);
  };

  React.useEffect(() => {
    return () => {
      cleanupObjectUrl();
      stopSpeaking();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("rounded-xl border bg-background p-3", className)}>
      <p className="mb-2 text-xs font-bold text-muted-foreground">
        🎤 قارن نطقك بنفسك — استمع للهدف ثم سجّل صوتك وقارن
      </p>

      {/* الهدف */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-muted/60 px-3 py-2">
        <div className="min-w-0">
          <p className="font-de text-base font-bold" dir="ltr" lang="de">
            {target}
          </p>
          {targetAr && <p className="text-xs text-muted-foreground">{targetAr}</p>}
        </div>
        <button
          type="button"
          onClick={playTarget}
          className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary transition-colors hover:bg-primary/15"
        >
          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
          استمع للهدف
        </button>
      </div>

      {/* التسجيل */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {!recording ? (
          <button
            type="button"
            onClick={startRecording}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mic className="h-3.5 w-3.5" aria-hidden="true" />
            {recordedUrl ? "أعد التسجيل" : "سجّل نطقك"}
          </button>
        ) : (
          <button
            type="button"
            onClick={stopRecording}
            className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-destructive/90"
          >
            <Square className="h-3.5 w-3.5" aria-hidden="true" />
            إيقاف التسجيل…
          </button>
        )}

        {recording && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-destructive">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
            </span>
            سجّل الآن…
          </span>
        )}

        {recordedUrl && !recording && (
          <button
            type="button"
            onClick={playMine}
            className="inline-flex items-center gap-1.5 rounded-full border border-success/50 bg-success/10 px-3 py-1.5 text-xs font-bold text-success transition-colors hover:bg-success/15"
          >
            {playing ? <Square className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? "إيقاف" : "اسمع نطقك"}
          </button>
        )}
      </div>

      {/* الخطأ */}
      {error && (
        <p className="mt-2 rounded-lg border border-destructive/30 bg-destructive/5 px-2.5 py-1.5 text-xs font-medium text-destructive">
          ⚠️ {error}
        </p>
      )}

      {/* التقييم الذاتي — يظهر بعد التسجيل */}
      {recordedUrl && !recording && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-muted-foreground">كيف كان نطقك؟</span>
          <button
            type="button"
            onClick={() => rate(1)}
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors",
              rated === 1 ? "border-success bg-success text-white" : "border-success/40 bg-success/10 text-success hover:bg-success/15",
            )}
          >
            <Check className="h-3 w-3" aria-hidden="true" />
            جيد
          </button>
          <button
            type="button"
            onClick={() => rate(0.5)}
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors",
              rated === 0.5 ? "border-gold bg-gold text-white" : "border-gold/40 bg-gold/10 text-gold-strong hover:bg-gold/15",
            )}
          >
            <Minus className="h-3 w-3" aria-hidden="true" />
            قريب
          </button>
          <button
            type="button"
            onClick={() => rate(0)}
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors",
              rated === 0 ? "border-destructive bg-destructive text-white" : "border-destructive/40 bg-destructive/10 text-destructive hover:bg-destructive/15",
            )}
          >
            <X className="h-3 w-3" aria-hidden="true" />
            أعد المحاولة
          </button>
          {rated !== null && (
            <span className="text-[11px] font-bold text-muted-foreground">
              {rated === 1 ? "رائع! 🎉" : rated === 0.5 ? "واصل التدريب — ستتحسن 💪" : "استمع للهدف مرة أخرى وكرر — الممارسة تصنع الفرق ✨"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
