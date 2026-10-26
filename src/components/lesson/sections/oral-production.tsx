"use client";

import * as React from "react";
import {Mic, Square, Volume2} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {SelfReviewRatings} from "@/components/lesson/sections/self-review-ratings";
import type {OralProductionTask} from "@/types/lesson";

function OralPromptCard({task}: {task: OralProductionTask}) {
  const [recording, setRecording] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const recorderRef = React.useRef<MediaRecorder | null>(null);
  const streamRef = React.useRef<MediaStream | null>(null);
  const chunksRef = React.useRef<Blob[]>([]);
  const audioUrlRef = React.useRef<string | null>(null);

  const replaceAudioUrl = (url: string | null) => {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = url;
    setAudioUrl(url);
  };

  React.useEffect(() => () => {
    const recorder = recorderRef.current;
    if (recorder) {
      recorder.ondataavailable = null;
      recorder.onstop = null;
      recorder.onerror = null;
      if (recorder.state === "recording") recorder.stop();
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
  }, []);

  const start = async () => {
    setError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
        setError("التسجيل غير متاح في هذا المتصفح. يمكنك تنفيذ المهمة شفهياً من دون تسجيل.");
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({audio: true});
      streamRef.current = stream;
      chunksRef.current = [];
      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : undefined;
      const recorder = new MediaRecorder(stream, mimeType ? {mimeType} : undefined);
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onerror = () => {
        setError("تعذّر إكمال التسجيل. جرّب مرة أخرى أو نفّذ المهمة من دون تسجيل.");
        setRecording(false);
        stream.getTracks().forEach((track) => track.stop());
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {type: recorder.mimeType || "audio/webm"});
        replaceAudioUrl(blob.size ? URL.createObjectURL(blob) : null);
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setRecording(false);
      };
      recorder.start();
      setRecording(true);
      replaceAudioUrl(null);
    } catch {
      setError("لم يُسمح باستخدام الميكروفون. افحص إذن المتصفح، أو نفّذ المهمة شفهياً من دونه.");
    }
  };

  const stop = () => {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
  };

  return (
    <article className="rounded-2xl border bg-card p-4" aria-labelledby={`oral-${task.id}`}>
      <h3 id={`oral-${task.id}`} className="font-bold">{task.titleAr}</h3>
      <p className="mt-2 text-sm leading-relaxed">{task.promptAr}</p>
      {task.promptDe && (
        <div className="mt-2 flex items-start gap-2 rounded-lg bg-muted/40 p-3">
          <p className="font-de text-sm font-semibold" dir="ltr" lang="de">{task.promptDe}</p>
          <SpeakButton text={task.promptDe} size="sm" />
        </div>
      )}
      {task.prompts?.length ? (
        <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          {task.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {!recording ? (
          <button type="button" onClick={() => void start()} className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90">
            <Mic className="h-4 w-4" aria-hidden="true" />
            {audioUrl ? "أعد التسجيل" : "ابدأ التسجيل"}
          </button>
        ) : (
          <button type="button" onClick={stop} className="inline-flex items-center gap-2 rounded-full bg-destructive px-3 py-2 text-sm font-bold text-white hover:bg-destructive/90">
            <Square className="h-4 w-4" aria-hidden="true" />
            أوقف التسجيل
          </button>
        )}
        {recording && <span className="text-sm font-semibold text-destructive" role="status">التسجيل جارٍ…</span>}
      </div>
      {error && <p className="mt-2 text-sm text-destructive" role="alert">{error}</p>}
      {audioUrl && !recording && (
        <div className="mt-3 rounded-lg border bg-muted/20 p-3">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold"><Volume2 className="h-4 w-4" aria-hidden="true" /> استمع إلى تسجيلك وراجعه بنفسك</p>
          <audio controls preload="metadata" src={audioUrl} className="w-full" aria-label={`تسجيلك لمهمة ${task.titleAr}`} />
          <p className="mt-2 text-xs text-muted-foreground">التسجيل محلي داخل هذه الصفحة ولا يُرسل إلى خادم. لا يجري تحليل الصوت أو إعطاء درجة آلية.</p>
        </div>
      )}
      <SelfReviewRatings
        id={`oral-review-${task.id}`}
        title="مراجعة ذاتية — بعد أن تتحدث"
        items={task.selfReview}
      />
    </article>
  );
}

export function OralProductionSection({tasks}: {tasks: OralProductionTask[]}) {
  if (!tasks.length) return null;
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm leading-relaxed">
        <strong>تدريب على الإنتاج الشفهي:</strong> حضّر إجابتك ثم قلها بصوتك. يمكنك تسجيلها والاستماع إليها ومراجعتها بنفسك. لا يصحح التطبيق المحتوى أو النطق، ولا تُحتسب هذه المهمة دليلاً على إتقان المستوى.
      </div>
      {tasks.map((task) => <OralPromptCard key={task.id} task={task} />)}
    </div>
  );
}
