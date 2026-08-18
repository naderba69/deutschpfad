"use client";

import * as React from "react";
import {CheckCircle2, Headphones, Play, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {recordEvent} from "@/lib/analytics/events";
import {speakGerman, speakSequence, stopSpeaking} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";
import type { PodcastEpisode } from "@/data/podcasts";

/**
 * ═══════════════════════════════════════════════════════════
 *  مشغّل البودكاست التعليمي — استماع ممتد:
 *  1) استمع للحلقة (TTS ألماني بسرعة مناسبة)
 *  2) اقرأ النص للفهم (مع الترجمة عند الحاجة)
 *  3) أجب عن أسئلة الفهم
 *  — تدريب الاستماع الممتد يبني الفهم الطبيعي للغة —
 * ═══════════════════════════════════════════════════════════
 */
export function PodcastPlayer({ episode, onBack }: { episode: PodcastEpisode; onBack: () => void }) {
  const [playing, setPlaying] = React.useState(false);
  const [showScriptAr, setShowScriptAr] = React.useState(false);
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [correct, setCorrect] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [gems, setGems] = React.useState(0);

  const play = () => {
    stopSpeaking();
    // تقطيع النص جملة جملة عبر التسلسل (onend) — النص الطويل المُلحق
    // دفعة واحدة بعد cancel يجعل المتصفح يبتلع أجزاء منه، فيُسمع
    // «أول جملة فقط ثم صمت». بالتسلسل تُنطق الحلقة كاملة حتماً.
    const sentences = episode.script
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (sentences.length <= 1) {
      speakGerman(episode.script, {
        rate: 0.85,
        onEnd: () => setPlaying(false),
        onError: () => setPlaying(false),
      });
    } else {
      speakSequence(
        sentences.map((s) => ({ de: s, pauseMs: 150 })),
        { rate: 0.85, onEnd: () => setPlaying(false) },
      );
    }
    setPlaying(true);
  };

  const stop = () => {
    stopSpeaking();
    setPlaying(false);
  };

  const answer = (qIdx: number, opt: { text: string; correct: boolean }) => {
    if (answers[qIdx]) return;
    setAnswers((a) => ({ ...a, [qIdx]: opt.text }));
    // تسجيل مهارة الاستماع في كفايات CEFR
    void recordEvent({ type: "skill-result", skill: "الاستماع", correct: opt.correct });
    if (opt.correct) {
      setCorrect((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const finish = () => {
    setDone(true);
    setGems(addGems(GEM_REWARDS.DAILY_CHALLENGE));
    stopSpeaking();
  };

  if (done) {
    return (
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-3xl" aria-hidden="true">🎧</span>
        <h2 className="text-xl font-extrabold">أتممت الاستماع!</h2>
        <p className="text-sm text-muted-foreground">
          أجبت صحيحاً عن {correct} من {episode.questions.length} أسئلة فهم.
        </p>
        <p className="font-de rounded-xl border bg-muted/20 px-3 py-2 text-xs" dir="ltr">{episode.title}</p>
        <Button onClick={onBack}>العودة للحلقات</Button>
      </div>
    );
  }

  const allAnswered = episode.questions.every((_, i) => answers[i]);
  const progress = (Object.keys(answers).length / episode.questions.length) * 100;

  return (
    <div className="mx-auto max-w-xl space-y-4">
      {/* ترويسة الحلقة */}
      <div className="flex items-center justify-between gap-2">
        <button type="button" onClick={onBack} className="rounded-full border px-2.5 py-1 text-[11px] font-bold text-muted-foreground hover:text-primary">
          خروج
        </button>
        <p className="truncate text-xs font-extrabold text-primary">{episode.emoji} {episode.titleAr}</p>
        <span className="font-de shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">{episode.level}</span>
      </div>

      {/* المشغّل */}
      <div className="rounded-2xl border bg-card p-5 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl" aria-hidden="true">{episode.emoji}</span>
        <p className="font-de mt-2 text-sm font-extrabold" dir="ltr">{episode.title}</p>
        <div className="mt-4 flex justify-center gap-2">
          {!playing ? (
            <Button onClick={play} className="gap-2">
              <Play className="h-4 w-4" aria-hidden="true" />
              استمع للحلقة
            </Button>
          ) : (
            <Button variant="outline" onClick={stop} className="gap-2">
              إيقاف
            </Button>
          )}
          <Button variant="outline" onClick={() => setShowScriptAr((s) => !s)}>
            {showScriptAr ? "إخفاء الترجمة" : "أظهر الترجمة"}
          </Button>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Headphones className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <p className="font-de text-start text-xs leading-relaxed text-muted-foreground" dir="ltr">
            {episode.script}
          </p>
        </div>
        {showScriptAr && (
          <p className="mt-2 rounded-lg bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            {episode.scriptAr}
          </p>
        )}
      </div>

      {/* الأسئلة */}
      <div className="space-y-3">
        {episode.questions.map((q, qIdx) => {
          const answered = answers[qIdx];
          return (
            <div key={qIdx} className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <p className="font-de text-sm font-extrabold" dir="ltr" lang="de">{q.de}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{q.ar}</p>
              <div className="mt-3 grid gap-2">
                {q.options.map((opt) => {
                  const isPicked = answers[qIdx] === opt.text;
                  return (
                    <button
                      key={opt.text}
                      type="button"
                      disabled={!!answered}
                      onClick={() => answer(qIdx, opt)}
                      className={cn(
                        "rounded-xl border px-3 py-2 text-start text-sm font-bold transition-colors",
                        !answered && "border-muted bg-background hover:border-primary/50 hover:bg-primary/5",
                        answered && opt.correct && "border-success bg-success/10 text-success",
                        answered && isPicked && !opt.correct && "border-destructive bg-destructive/10 text-destructive",
                        answered && !isPicked && !opt.correct && "border-muted bg-muted/30 opacity-60",
                      )}
                      dir="ltr"
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <p className={cn("mt-2 flex items-start gap-1 text-xs font-bold leading-relaxed", answers[qIdx] === q.options.find((o) => o.correct)?.text ? "text-success" : "text-destructive")}>
                  {answers[qIdx] === q.options.find((o) => o.correct)?.text ? (
                    <>
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>
                        صحيح!{" "}
                        <span className="font-normal">{q.options.find((o) => o.correct)?.explanation ?? ""}</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>
                        {q.options.find((o) => o.text === answers[qIdx])?.explanation ?? "أعد الاستماع — الإجابة الصحيحة ملوّنة."}
                      </span>
                    </>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* الإنهاء */}
      {allAnswered && (
        <Button onClick={finish} className="w-full">
          إنهاء — {correct}/{episode.questions.length} صحيحة
        </Button>
      )}

      <Progress value={progress} className="h-1.5" aria-label="التقدم في أسئلة الحلقة" />
    </div>
  );
}
