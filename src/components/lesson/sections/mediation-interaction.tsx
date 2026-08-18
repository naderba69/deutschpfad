"use client";

import * as React from "react";
import {CheckCircle2, Languages, Lightbulb, MessageSquareText, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {recordEvent} from "@/lib/analytics/events";
import {cn} from "@/lib/utils";
import type { MediationTask, InteractionTask } from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════════
 *  مكوّن الوساطة + التفاعل (CEFR Companion Volume 2020)
 *  — الفجوة الأساسية التي رصدها التدقيق الأكاديمي —
 *  الوساطة: تلخيص/نقل/تبسيط معلومات لجمهور آخر (نشاط ملاحظ وقابل للتقييم الذاتي)
 *  التفاعل: أدوار متفرعة محلية، طلب توضيح، إصلاح سوء الفهم (بلا خادم)
 * ═══════════════════════════════════════════════════════════
 */

/** ── الوساطة ── */
export function MediationSection({ tasks }: { tasks: MediationTask[] }) {
  const [checked, setChecked] = React.useState<Record<string, boolean[]>>({});

  if (!tasks || tasks.length === 0) return null;

  const toggle = (taskId: string, idx: number) => {
    setChecked((prev) => {
      const cur = prev[taskId] ?? [];
      const next = [...cur];
      next[idx] = !next[idx];
      return { ...prev, [taskId]: next };
    });
    void recordEvent({ type: "mediation-task", taskId } as never);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">
        <Languages className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <span className="font-bold">الوساطة اللغوية (Mediation): </span>
          نقل المعنى بين الألمانية والعربية — مهارة حقيقية من إطار CEFR 2020
          تختبرها امتحانات Goethe الحديثة. نفّذ المهمة ثم قيّم نفسك بالنقاط.
        </p>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="rounded-2xl border bg-card p-4">
          <p className="text-sm font-extrabold">{task.titleAr}</p>
          {task.sourceDe && (
            <div className="mt-2 rounded-lg bg-muted/30 p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="font-de text-sm font-semibold" dir="ltr" lang="de">
                  {task.sourceDe}
                </p>
                <SpeakButton text={task.sourceDe} rate={0.85} size="sm" />
              </div>
              {task.sourceAr && <p className="mt-1 text-xs text-muted-foreground">{task.sourceAr}</p>}
            </div>
          )}
          {!task.sourceDe && task.sourceAr && (
            <div className="mt-2 rounded-lg bg-muted/30 p-3">
              <p className="text-sm font-semibold">{task.sourceAr}</p>
            </div>
          )}

          <p className="mt-2 flex items-start gap-1.5 text-sm text-foreground">
            <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {task.taskAr}
          </p>

          {/* نقاط التحقق الذاتي */}
          <div className="mt-3 space-y-1.5">
            <p className="text-xs font-bold text-muted-foreground">تحقق: هل غطّيت النقاط التالية في إجابتك؟</p>
            {task.keyPointsAr.map((kp, i) => {
              const isOn = checked[task.id]?.[i] ?? false;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggle(task.id, i)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                    isOn ? "border-success/50 bg-success/10" : "bg-muted/20 hover:border-primary/40",
                  )}
                >
                  {isOn ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  ) : (
                    <span className="h-4 w-4 shrink-0 rounded-full border-2 border-muted-foreground/40" aria-hidden="true" />
                  )}
                  {kp}
                </button>
              );
            })}
          </div>

          {task.modelAnswerAr && (
            <details className="mt-2">
              <summary className="cursor-pointer text-xs font-bold text-primary">أظهر نموذج إجابة</summary>
              <p className="mt-1.5 rounded-lg bg-gold/10 px-3 py-2 text-xs leading-relaxed">{task.modelAnswerAr}</p>
            </details>
          )}
        </div>
      ))}
    </div>
  );
}

/** ── التفاعل ── */
export function InteractionSection({ tasks }: { tasks: InteractionTask[] }) {
  const [taskIdx, setTaskIdx] = React.useState(0);
  const [roundIdx, setRoundIdx] = React.useState(0);
  const [reply, setReply] = React.useState<{ de: string; ar: string; best: boolean } | null>(null);

  const task = tasks[taskIdx];
  const round = task?.rounds?.[roundIdx];

  if (!task || !round) return null;

  const choose = (opt: InteractionTask["rounds"][number]["options"][number]) => {
    if (reply) return;
    setReply(opt);
    if (opt.best) {
      playCorrect();
      void recordEvent({ type: "interaction-round", taskId: task.id, correct: true } as never);
    } else {
      playWrong();
      void recordEvent({ type: "interaction-round", taskId: task.id, correct: false } as never);
    }
  };

  const next = () => {
    if (roundIdx + 1 >= task.rounds.length) {
      // السيناريو التالي أو إعادة البدء
      if (taskIdx + 1 < tasks.length) {
        setTaskIdx((t) => t + 1);
        setRoundIdx(0);
      } else {
        setTaskIdx(0);
        setRoundIdx(0);
      }
      setReply(null);
      return;
    }
    setRoundIdx((r) => r + 1);
    setReply(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
        <p>
          <span className="font-bold">تفاعل حي (Interaction): </span>
          <span className="text-muted-foreground">{task.strategyAr}</span>
        </p>
      </div>

      {/* السيناريو */}
      <div className="rounded-2xl border bg-card p-4">
        <p className="text-xs font-bold text-primary">{task.scenarioAr}</p>
        {task.scenarioDe && (
          <div className="mt-1.5 flex items-center gap-2">
            <p className="font-de text-sm" dir="ltr" lang="de">{task.scenarioDe}</p>
            <SpeakButton text={task.scenarioDe} rate={0.85} size="sm" />
          </div>
        )}
      </div>

      {/* رسالة المحاور */}
      <div className="rounded-2xl border bg-muted/20 p-4">
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-primary">المحاور:</p>
          <div className="ms-auto flex items-center gap-1">
            <SpeakButton text={round.speakerDe} rate={0.85} size="sm" />
          </div>
        </div>
        <p className="font-de mt-2 text-lg font-bold" dir="ltr" lang="de">
          {round.speakerDe}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{round.speakerAr}</p>
      </div>

      {/* رد المحاور بعد الاختيار */}
      {reply && (
        <div
          className={cn(
            "rounded-2xl border p-4",
            reply.best ? "border-success/40 bg-success/10" : "border-destructive/30 bg-destructive/5",
          )}
        >
          <p className="text-xs font-bold text-muted-foreground">ردّ المحاور:</p>
          <div className="mt-1.5 flex items-center gap-2">
            <p className="font-de text-base font-bold" dir="ltr" lang="de">{reply.de}</p>
            <SpeakButton text={reply.de} rate={0.85} size="sm" />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{reply.ar}</p>
          <Button size="sm" className="mt-3" onClick={next}>
            {roundIdx + 1 >= task.rounds.length ? (taskIdx + 1 < tasks.length ? "السيناريو التالي ←" : "إعادة الجلسة") : "التالي ←"}
          </Button>
        </div>
      )}

      {/* الخيارات */}
      {!reply && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-muted-foreground">اختر ردّك الأنسب:</p>
          {round.options.map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => choose(opt)}
              className="w-full rounded-xl border bg-card p-3 text-start transition-all hover:border-primary/50 hover:bg-primary/5"
            >
              <span className="font-de block text-sm font-bold" dir="ltr" lang="de">{opt.de}</span>
              <span className="text-xs text-muted-foreground">{opt.ar}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
