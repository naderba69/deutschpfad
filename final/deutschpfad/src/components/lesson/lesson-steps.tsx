"use client";

import * as React from "react";
import {ArrowLeft, ArrowRight, CheckCircle2, Lock, Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  خطوات الدرس التفاعلية — المنهجية البيداغوجية العلمية:
 *  كل خطوة لها «هدف» وتُقفل حتى تصل إليها بالترتيب،
 *  وعند إتمام تفاعل (حل تمرين/استماع/اختبار) تُفتح التالية.
 *  — تقدّم خطوة بخطوة لا يقفز، كما في الصف الحقيقي —
 * ═══════════════════════════════════════════════════════════
 */

export interface LessonStepDef {
  id: string;
  label: string;
  short: string;
  /** هل هذه الخطوة تتطلب «تفاعلاً» لتُعتبر منجزة؟ (تمرين/استماع/اختبار) */
  requiresInteraction?: boolean;
  render: () => React.ReactNode;
}

interface LessonStepsProps {
  steps: LessonStepDef[];
  lessonId: string;
  /** يُستدعى عند إتمام آخر خطوة */
  onFinish?: () => void;
}

export function LessonSteps({ steps, lessonId, onFinish }: LessonStepsProps) {
  const [current, setCurrent] = React.useState(0);
  const [done, setDone] = React.useState<Set<number>>(new Set([0]));

  // استرجاع التقدم المحفوظ
  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`dp-steps:${lessonId}`);
      if (raw) {
        const parsed = JSON.parse(raw) as { current: number; done: number[] };
        setCurrent(Math.min(parsed.current, steps.length - 1));
        setDone(new Set(parsed.done));
      }
    } catch {
      /* تجاهل */
    }
  }, [lessonId, steps.length]);

  // حفظ التقدم
  React.useEffect(() => {
    try {
      window.localStorage.setItem(
        `dp-steps:${lessonId}`,
        JSON.stringify({ current, done: [...done] }),
      );
    } catch {
      /* تجاهل */
    }
  }, [current, done, lessonId]);

  // عدد التمارين المطلوب حلها في خطوة «تفاعلية» لفتح التالية
  const REQUIRED_SOLVED = 2;

  // الاستماع لحدث «حُلّ تمرين بنجاح» — يفتح الخطوة التالية تلقائياً
  React.useEffect(() => {
    let solvedInStep = 0;
    const handler = () => {
      const step = steps[current];
      if (!step?.requiresInteraction) return; // الخطوات غير التفاعلية تُفتح عادي
      solvedInStep += 1;
      if (solvedInStep >= REQUIRED_SOLVED && current < steps.length - 1) {
        goTo(current + 1);
        solvedInStep = 0;
      }
    };
    window.addEventListener("dp:exercise-solved", handler);
    return () => window.removeEventListener("dp:exercise-solved", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, steps]);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, i));
    setCurrent(clamped);
    setDone((prev) => {
      const next = new Set(prev);
      next.add(clamped);
      return next;
    });
  };

  const next = () => {
    if (current < steps.length - 1) {
      goTo(current + 1);
    } else {
      onFinish?.();
    }
  };

  const prev = () => goTo(current - 1);

  const step = steps[current];
  const isFirst = current === 0;
  const isLast = current === steps.length - 1;

  return (
    <div>
      {/* شريط المراحل */}
      <div className="mb-5 flex items-center gap-1.5 overflow-x-auto pb-1">
        {steps.map((s, i) => {
          const isDone = done.has(i) && i !== current;
          const isCurrent = i === current;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                // لا نقفز للأمام — المنهجية: فقط الخطوات المفتوحة
                if (done.has(i) || i === current) goTo(i);
              }}
              title={`${i + 1}. ${s.label}`}
              aria-label={`الخطوة ${i + 1}: ${s.label}`}
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-de text-xs font-extrabold transition-all",
                isCurrent
                  ? "scale-110 border-primary bg-primary text-primary-foreground shadow-soft"
                  : isDone
                    ? "border-success bg-success/15 text-success hover:border-success/60"
                    : "border-muted bg-card text-muted-foreground",
              )}
            >
              {isDone ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : i + 1}
            </button>
          );
        })}
      </div>

      {/* محتوى الخطوة الحالية */}
      <div key={step.id} className="lesson-step-enter rounded-2xl border bg-card p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-lg font-extrabold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {step.id === "lernziele" ? "🎯" : step.id === "theorie" ? "📘" : step.id === "hoerverstehen" ? "🎧" : step.id === "aussprache" ? "🗣️" : step.id === "uebungen" ? "💪" : step.id === "minitest" ? "📝" : step.id === "lernkarten" ? "🃏" : "✨"}
            </span>
            {step.label}
          </h2>
          <span className="font-de shrink-0 text-xs font-bold text-muted-foreground">
            {current + 1}/{steps.length}
          </span>
        </div>

        {step.render()}
      </div>

      {/* أزرار التنقل */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" onClick={prev} disabled={isFirst} className="gap-1.5">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          السابق
        </Button>

        <Button size="lg" onClick={next} className={cn("gap-2 text-base", isLast && "bg-gold text-gold-foreground hover:bg-gold/90")}>
          {isLast ? (
            <>
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              أنهيت الدرس — أكمل
            </>
          ) : (
            <>
              {steps[current + 1]?.short}
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>

      {/* رسالة تعليمية: لا قفز للأمام */}
      {!done.has(current + 1) && current < steps.length - 1 && (
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <Lock className="h-3 w-3" aria-hidden="true" />
          {steps[current]?.requiresInteraction
            ? "حُل تمرينين صحيحين على الأقل في هذه الخطوة — تُفتح الخطوة التالية تلقائياً."
            : "الخطوة التالية تُفتح بعد إتمام هذه الخطوة — منهجية الصف الحقيقي."}
        </p>
      )}
    </div>
  );
}
