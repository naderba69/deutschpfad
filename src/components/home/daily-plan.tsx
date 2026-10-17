"use client";

import * as React from "react";
import Link from "next/link";
import {CheckCircle2, ChevronLeft, GraduationCap, Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {useProgress} from "@/components/providers/progress-provider";
import {buildDailyPlan, isPlanDone, markPlanDone, type DailyPlan} from "@/lib/planner/daily-plan";
import {LESSON_META} from "@/data/lessons/meta";
import {firstIncompleteLesson} from "@/lib/progress-selectors";
import {getLearnerProfile} from "@/lib/storage/learner";
import {getCardStats} from "@/lib/srs/flashcard-service";
import {getDueCardsForReview} from "@/lib/review/weekly-review";
import {playCorrect, playAchievement} from "@/lib/audio/sfx";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  معلّمك الخاص — خطة جلسة اليوم
 *  يخطّط لك يومياً: درس ← مراجعة ← قصة/بودكاست/تدريب (يتناوب)
 *  كل نشاط بزر انتقال مباشر — تعلّم بلا تفكير، فقط اتبع.
 *  عند إتمام كل الأنشطة تُعلَّم الخطة ✓ (تخزين محلي يومي)
 * ═══════════════════════════════════════════════════════════
 */
export function DailyPlanCard() {
  const { completedLessonsSet, isHydrated } = useProgress();
  const [plan, setPlan] = React.useState<DailyPlan | null>(null);
  const [done, setDone] = React.useState(false);
  const [completed, setCompleted] = React.useState<Record<number, boolean>>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    void (async () => {
      try {
        const profile = await getLearnerProfile();
        const level = (profile?.placementLevel as "A1" | "A2" | "B1" | "B2") ?? "A1";
        const doneLessons = [...completedLessonsSet].length;
        const incomplete = firstIncompleteLesson([...completedLessonsSet]);
        const nextLesson = incomplete
          ? LESSON_META.find((l) => l.id === incomplete.id)
          : LESSON_META[LESSON_META.length - 1];

        const [cards, dueCardsArr] = await Promise.all([getCardStats(), getDueCardsForReview()]);

        const p = await buildDailyPlan({
          level,
          completedLessons: doneLessons,
          nextLesson: nextLesson ? { id: nextLesson.id, titleDe: nextLesson.titleDe, titleAr: nextLesson.titleAr } : undefined,
          dueCards: Math.max(cards.due, dueCardsArr.length),
        });
        setPlan(p);
        setDone(isPlanDone());
        // استعادة ما أُنجز اليوم
        try {
          const saved = JSON.parse(localStorage.getItem(`dp:plan-completed:${p.dateKey}`) ?? "[]") as number[];
          const rec: Record<number, boolean> = {};
          for (const i of saved) rec[i] = true;
          setCompleted(rec);
        } catch {
          /* تجاهل */
        }
      } catch {
        /* تجاهل */
      } finally {
        setLoading(false);
      }
    })();
  }, [completedLessonsSet, isHydrated]);

  if (loading || !plan) return null;

  const doneCount = Object.keys(completed).length;
  const allDone = plan.activities.length > 0 && doneCount >= plan.activities.length;
  const pct = Math.round((doneCount / plan.activities.length) * 100);

  const markActivity = (idx: number) => {
    setCompleted((c) => {
      const next = { ...c, [idx]: true };
      try {
        localStorage.setItem(`dp:plan-completed:${plan.dateKey}`, JSON.stringify(Object.keys(next).map(Number)));
      } catch {}
      return next;
    });
    playCorrect();
  };

  const finishPlan = () => {
    markPlanDone();
    setDone(true);
    playAchievement();
  };

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-bl from-primary/[0.06] via-card to-success/[0.05]">
      {/* الترويسة */}
      <div className="border-b border-primary/20 bg-primary/5 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-extrabold">خطة معلّمك اليوم — اتبعها بلا تفكير</p>
            <p className="truncate text-[11px] text-muted-foreground">
              {plan.patternName} · ~{plan.totalMinutes} دقيقة · {new Date().toLocaleDateString("ar-TN", { weekday: "long", day: "numeric", month: "long" })}
            </p>
          </div>
          {done && (
            <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-extrabold text-success">
              <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
              أتممت خطة اليوم!
            </span>
          )}
        </div>
        <p className="mt-2 flex items-start gap-1.5 rounded-lg bg-card/60 px-3 py-2 text-xs font-semibold leading-relaxed text-foreground">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-strong" aria-hidden="true" />
          {plan.teacherIntro}
        </p>
      </div>

      {/* الأنشطة */}
      <div className="space-y-2 p-4">
        {plan.activities.map((act, i) => {
          const isDone = !!completed[i];
          return (
            <div
              key={i}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-3 transition-all",
                isDone ? "border-success/40 bg-success/5" : "border-muted bg-card hover:border-primary/40",
              )}
            >
              {/* رقم النشاط */}
              <span
                className={cn(
                  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-de text-sm font-extrabold",
                  isDone ? "bg-success/15 text-success" : "bg-primary/10 text-primary",
                )}
              >
                {isDone ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : i + 1}
              </span>
              {/* رمز النشاط */}
              <span className="text-2xl" aria-hidden="true">{act.emoji}</span>
              {/* التفاصيل */}
              <div className="min-w-0 flex-1">
                <p className={cn("truncate text-sm font-bold", isDone && "text-success line-through decoration-1")}>{act.title}</p>
                <p className="truncate text-[11px] text-muted-foreground">{act.sub}</p>
                <p className="text-[11px] font-bold text-muted-foreground">⏱ {act.minutes} دقيقة</p>
              </div>
              {/* الزر */}
              {!isDone ? (
                <Button asChild size="sm" className="shrink-0 gap-1">
                  <Link href={act.href} onClick={() => markActivity(i)}>
                    ابدأ
                    <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              ) : (
                <span className="shrink-0 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-extrabold text-success">تم ✓</span>
              )}
            </div>
          );
        })}
      </div>

      {/* شريط الإنجاز */}
      <div className="border-t border-muted/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div className={cn("h-full rounded-full transition-all", done ? "bg-success" : "progress-gradient")} style={{ width: `${done ? 100 : pct}%` }} />
          </div>
          <span className="font-de shrink-0 text-xs font-extrabold text-primary">{done ? "100%" : `${pct}%`}</span>
          {allDone && !done && (
            <Button size="sm" variant="gold" onClick={finishPlan} className="shrink-0 gap-1.5">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              أنهِ خطة اليوم
            </Button>
          )}
        </div>
        <p className="mt-1.5 text-center text-[11px] font-semibold text-muted-foreground">
          {done
            ? "غداً ستخطّط لك خطة جديدة حسب مسارك — نمط مختلف تلقائياً. 🎉"
            : allDone
              ? "أنجزت كل الأنشطة — اضغط «أنهِ خطة اليوم»!"
              : "اتبع الأنشطة بالترتيب — المعلّم يخطّط وأنت تنفّذ."}
        </p>
      </div>
    </div>
  );
}
