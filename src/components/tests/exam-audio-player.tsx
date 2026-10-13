"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  مشغّل صوت جزء الاستماع في امتحانات المحاكاة
 *  1) يحاول أولاً تشغيل مقاطع mp3 المسجّلة بالتسلسل (كما في A1–B1).
 *  2) إن غاب المقطع أو فشل تحميله → ينتقل تلقائياً إلى النطق الآلي TTS
 *     من موضع الفشل — فلا ينكسر الامتحان بانتظار المقاطع، ويعلن للمتعلم
 *     أن الصوت آلي. (لا فحص مسبق للملفات: فحص HEAD تبين أنه غير موثوق مع
 *     خادم الإنتاج في دقائق ما بعد التشغيل، والمحاولة الفعلية هي الحكم.)
 *  3) يفرض عدد مرات التشغيل الرسمي لكل جزء ويعرض المتبقي.
 *  4) يوقف أي صوت عند مغادرة الجزء (لا يتسرّب صوت إلى الجزء التالي).
 * ═══════════════════════════════════════════════════════════
 */

import * as React from "react";
import { Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ExamAudioSpec } from "@/data/exams/b2-hoeren-audio";
import { isSpeechSynthesisSupported, speakGerman, stopSpeaking } from "@/lib/speech/voices";

/** "files" = نجرّب المقاطع المسجّلة · "tts" = ثبت غيابها فانتقلنا للنطق الآلي */
type AudioMode = "files" | "tts";

export function ExamAudioPlayer({
  spec,
  label = "استمع إلى النص:",
  onPlayed,
}: {
  spec: ExamAudioSpec;
  label?: string;
  onPlayed?: () => void;
}) {
  const [mode, setMode] = React.useState<AudioMode>("files");
  const [plays, setPlays] = React.useState(0);
  const [busy, setBusy] = React.useState(false);
  const [segmentIdx, setSegmentIdx] = React.useState(-1);
  const [noVoice, setNoVoice] = React.useState(false);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const timerRef = React.useRef<number | null>(null);
  /** معرّف التشغيل الحالي — أي تشغيل جديد أو مغادرة تُبطِل ما قبله */
  const runIdRef = React.useRef(0);

  const max = spec.maxPlays;
  const left = max - plays;

  const stopAll = React.useCallback(() => {
    runIdRef.current += 1;
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const el = audioRef.current;
    if (el) {
      el.onended = null;
      el.onerror = null;
      el.pause();
      audioRef.current = null;
    }
    stopSpeaking();
  }, []);

  /* إيقاف الصوت عند مغادرة الجزء أو الصفحة */
  React.useEffect(() => () => stopAll(), [stopAll]);

  /* تشغيل ملفات mp3 بالتسلسل — أي فشل يُسقطنا إلى TTS لبقية المقاطع */
  const playFiles = (from: number, my: number, rate: number, done: () => void, toTts: (i: number) => void) => {
    let i = from;
    const next = () => {
      if (runIdRef.current !== my) return;
      if (i >= spec.segments.length) return done();
      const seg = spec.segments[i];
      const audio = new Audio(`${spec.base}/${seg.file}`);
      audioRef.current = audio;
      audio.playbackRate = rate;
      setSegmentIdx(i);
      audio.onended = () => {
        i += 1;
        next();
      };
      audio.onerror = () => toTts(i);
      void audio.play().catch(() => toTts(i));
    };
    next();
  };

  /* نطق آلي متسلسل للمقاطع (يُستخدم عند غياب الملفات أو بعد فشلها) */
  const playTts = (from: number, my: number, rate: number, done: () => void) => {
    let i = from;
    const next = () => {
      if (runIdRef.current !== my) return;
      if (i >= spec.segments.length) return done();
      const seg = spec.segments[i];
      setSegmentIdx(i);
      let advanced = false;
      const advance = () => {
        if (advanced) return;
        advanced = true;
        if (timerRef.current !== null) {
          window.clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        i += 1;
        next();
      };
      // مهلة أمان: بعض المتصفحات لا تُطلق onend إطلاقاً بلا أصوات مثبّتة
      timerRef.current = window.setTimeout(advance, Math.max(8000, seg.text.length * 130));
      const utterance = speakGerman(seg.text, { rate, onEnd: advance, onError: advance });
      if (!utterance) advance();
    };
    next();
  };

  const run = (rate: number, counted: boolean) => {
    if (busy) return;
    if (counted && left <= 0) return;
    if (!isSpeechSynthesisSupported() && mode !== "files") {
      setNoVoice(true);
      return;
    }
    setNoVoice(false);
    const my = runIdRef.current + 1;
    runIdRef.current = my;
    setBusy(true);
    if (counted) setPlays((p) => p + 1);
    const done = () => {
      if (runIdRef.current !== my) return;
      setBusy(false);
      setSegmentIdx(-1);
      if (counted) onPlayed?.();
    };
    if (mode === "files" && isSpeechSynthesisSupported()) {
      playFiles(0, my, rate, done, (i) => {
        if (runIdRef.current !== my) return;
        setMode("tts");
        playTts(i, my, rate, done);
      });
    } else if (mode === "files") {
      // بلا دعم نطق آلي: لا بديل عند فشل الملفات — نُعلن السبب بدل الصمت
      playFiles(0, my, rate, done, () => {
        setNoVoice(true);
        done();
      });
    } else {
      playTts(0, my, rate, done);
    }
  };

  const buttonLabel = busy ? "جارٍ التشغيل…" : "▶ استمع";

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-card p-3" data-audio-mode={mode}>
      <Volume2 className="h-4 w-4 text-primary" aria-hidden="true" />
      <p className="text-sm font-bold">{label}</p>
      <Button onClick={() => run(1, true)} disabled={left <= 0 || busy} data-testid="exam-audio-play">
        {buttonLabel}
      </Button>
      {mode === "tts" && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => run(0.75, false)}
          disabled={busy || left <= 0}
          data-testid="exam-audio-slow"
        >
          بطيء
        </Button>
      )}
      <span className="text-sm text-muted-foreground" data-testid="exam-audio-left">
        المتبقي من التشغيل: {left} {max === 2 ? "من 2" : "من 1"}
      </span>
      {busy && segmentIdx >= 0 && (
        <span className="text-xs text-muted-foreground">
          مقطع {segmentIdx + 1} من {spec.segments.length}
        </span>
      )}
      {mode === "tts" && (
        <p className="basis-full text-xs text-muted-foreground">
          مقاطع هذا الجزء غير متاحة بعد — يُقرأ النص بنطق آلي، وزر «بطيء» مساعد مؤقت لا يُحتسب من مرات التشغيل.
        </p>
      )}
      {noVoice && (
        <p className="basis-full text-xs font-bold text-destructive">
          متصفحك لا يدعم النطق الآلي — اقرأ نص الاستماع من النص المكتوب المرفق بالجزء.
        </p>
      )}
    </div>
  );
}
