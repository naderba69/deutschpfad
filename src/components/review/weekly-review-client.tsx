"use client";

import * as React from "react";
import {
  BookCheck,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  Flame,
  Target,
  XCircle,
} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {addRefillReview} from "@/lib/gamification/hearts";
import {
  computeWeekSummary,
  computeMonthSummary,
  getActiveMistakes,
  getDueCardsForReview,
  getWeeklyQuizQuestions,
  weekEncouragement,
  type WeekSummary,
} from "@/lib/review/weekly-review";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {markMastered} from "@/lib/storage/error-notebook";
import {reviewCard} from "@/lib/srs/flashcard-service";
import {cn} from "@/lib/utils";

type SessionItem =
  | { kind: "quiz"; de: string; ar: string; options: { text: string; correct: boolean }[]; id: string }
  | { kind: "card"; id: string; de: string; ar: string }
  | { kind: "mistake"; id: string; de: string; explanation: string; correctAnswer?: string };

/**
 * ═══════════════════════════════════════════════════════════
 *  المراجعة الأسبوعية التراكمية — جلسة كاملة:
 *  1) ملخص أسبوعك (دروس، تمارين، دقائق، سلسلة)
 *  2) جلسة مراجعة: أسئلة الدروس المكتملة + البطاقات المستحقة + أخطاؤك
 *  3) كل إجابة تصحّح فوراً وتُحدّث تقدمك (أخطاء تُتقن، بطاقات تُراجع)
 * ═══════════════════════════════════════════════════════════
 */
export function WeeklyReviewClient({ range = "weekly" }: { range?: "weekly" | "monthly" }) {
  const [summary, setSummary] = React.useState<WeekSummary | null>(null);
  const [session, setSession] = React.useState<SessionItem[]>([]);
  const [idx, setIdx] = React.useState(0);
  const [answered, setAnswered] = React.useState<Record<string, boolean>>({});
  const [picked, setPicked] = React.useState<string | null>(null);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [finished, setFinished] = React.useState(false);
  const [gems, setGems] = React.useState(0);

  const buildSession = React.useCallback(async () => {
    // أولاً: ملخص الفترة (أسبوعية أو شهرية) — لنعرف الدروس المكتملة فعلاً
    const sum = (range === "monthly" ? await computeMonthSummary() : await computeWeekSummary()) as unknown as WeekSummary;
    setSummary(sum);
    const [mistakes, cards] = await Promise.all([getActiveMistakes(), getDueCardsForReview()]);
    // أسئلة من دروس الأسبوع الفعلية (لا [] ثابتة)
    const quiz = await getWeeklyQuizQuestions(sum.lessonsCompleted, 4);
    const items: SessionItem[] = [];
    // 1) أخطاء نشطة
    for (const m of mistakes.slice(0, 3)) {
      items.push({ kind: "mistake", id: m.id, de: m.correctAnswer ?? m.id, explanation: m.explanation, correctAnswer: m.correctAnswer });
    }
    // 2) بطاقات مستحقة
    for (const c of cards.slice(0, 4)) {
      items.push({ kind: "card", id: c.id, de: c.de, ar: c.ar });
    }
    // 3) أسئلة الدروس المكتملة هذا الأسبوع
    for (const q of quiz) {
      items.push({ kind: "quiz", id: `q-${items.length}`, de: q.de, ar: q.ar, options: q.options });
    }
    // لو لا أسئلة من دروس الأسبوع (لم يكتمل أي درس) → 4 أسئلة من أول دروس المستوى
    if (quiz.length === 0) {
      const fallback = await getWeeklyQuizQuestions(["a1-01", "a1-02", "a1-03", "a1-04"], 4);
      for (const q of fallback) {
        items.push({ kind: "quiz", id: `q-${items.length}`, de: q.de, ar: q.ar, options: q.options });
      }
    }
    setSession(items);
    setIdx(0);
    setLoading(false);
    setFinished(items.length === 0);
  }, [range]);

  React.useEffect(() => {
    void buildSession();
  }, [buildSession]);

  const current = session[idx];

  const answerQuiz = async (opt: { text: string; correct: boolean }, qId: string) => {
    if (answered[qId]) return;
    setAnswered((a) => ({ ...a, [qId]: true }));
    setPicked(opt.text);
    addRefillReview();
    if (opt.correct) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const rateCard = async (q: number) => {
    if (!current || current.kind !== "card") return;
    setAnswered((a) => ({ ...a, [current.id]: true }));
    await reviewCard(current.id, q as never);
    addRefillReview();
    if (q >= 3) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const rateMistake = async (mastered: boolean) => {
    if (!current || current.kind !== "mistake") return;
    setAnswered((a) => ({ ...a, [current.id]: true }));
    if (mastered) {
      await markMastered(current.id);
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    setPicked(null);
    if (idx + 1 >= session.length) {
      setFinished(true);
      const g = addGems(GEM_REWARDS.DAILY_CHALLENGE);
      setGems(g);
    } else {
      setIdx((i) => i + 1);
    }
  };

  if (loading) return <div className="h-64 animate-pulse rounded-2xl border bg-muted/30" />;

  if (finished) {
    return (
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-3xl" aria-hidden="true">🏆</span>
        <h2 className="text-xl font-extrabold">أتممت مراجعة أسبوعك!</h2>
        <p className="text-sm text-muted-foreground">
          راجعت {session.length} {session.length === 1 ? "عنصراً" : "عناصر"} {range === "monthly" ? "هذا الشهر" : "هذا الأسبوع"} — أجبت صحيحاً عن {correctCount} منها.
        </p>
        {summary && (
          <div className="mx-auto grid max-w-sm grid-cols-2 gap-2 text-center">
            <div className="rounded-xl border border-success/30 bg-success/10 px-3 py-2">
              <p className="font-de text-lg font-extrabold text-success">⚡ {summary.weekXp}</p>
              <p className="text-[11px] font-bold text-muted-foreground">XP هذا الأسبوع</p>
            </div>
            <div className="rounded-xl border border-gold/30 bg-gold/10 px-3 py-2">
              <p className="font-de text-lg font-extrabold text-gold-strong">💎 {gems}</p>
              <p className="text-[11px] font-bold text-muted-foreground">جواهرك</p>
            </div>
          </div>
        )}
        <Button onClick={() => void buildSession()}>مراجعة جديدة</Button>
      </div>
    );
  }

  if (!current) return null;

  const progress = (idx / Math.max(1, session.length)) * 100;

  return (
    <div className="space-y-4">
      {/* ملخص الأسبوع */}
      {summary && (
        <div className="rounded-2xl border bg-card p-4">
          <p className="flex items-center gap-1.5 text-sm font-extrabold">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            {range === "monthly" ? "ملخص شهرك" : "ملخص أسبوعك"}
            <span className="ms-auto text-[11px] font-bold text-muted-foreground">
              {range === "monthly" ? "من بداية الشهر" : "يبدأ كل إثنين"}
            </span>
          </p>
          <p className="mt-1.5 text-xs font-bold text-primary">{weekEncouragement(summary)}</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-lg border bg-muted/30 px-2 py-1.5 text-center">
              <p className="font-de text-sm font-extrabold">{summary.lessonsCompleted.length}</p>
              <p className="text-[9px] font-bold text-muted-foreground">دروس</p>
            </div>
            <div className="rounded-lg border bg-muted/30 px-2 py-1.5 text-center">
              <p className="font-de text-sm font-extrabold">{summary.exercisesAnswered}</p>
              <p className="text-[9px] font-bold text-muted-foreground">تمارين</p>
            </div>
            <div className="rounded-lg border bg-muted/30 px-2 py-1.5 text-center">
              <p className="font-de text-sm font-extrabold">{Math.round(summary.minutesStudied)}</p>
              <p className="text-[9px] font-bold text-muted-foreground">دقائق</p>
            </div>
            <div className="rounded-lg border bg-muted/30 px-2 py-1.5 text-center">
              <p className="font-de text-sm font-extrabold">{summary.daysActive.length}</p>
              <p className="text-[9px] font-bold text-muted-foreground">أيام نشطة</p>
            </div>
          </div>
        </div>
      )}

      {/* شريط التقدم */}
      <div className="flex items-center gap-3">
        <Progress value={progress} className="h-2.5" aria-label="التقدم في المراجعة" />
        <span className="font-de shrink-0 text-sm font-bold text-primary">{idx + 1}/{session.length}</span>
      </div>

      {/* العنصر الحالي */}
      <div className="rounded-2xl border bg-card p-5">
        {current.kind === "quiz" && (
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-bold text-primary">
              <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
              سؤال من دروسك
            </p>
            <p className="font-de mt-2 text-base font-bold" dir="ltr" lang="de">{current.de}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{current.ar}</p>
            <div className="mt-3 grid gap-2">
              {current.options.map((opt) => {
                const isPicked = picked === opt.text;
                const isAnswered = answered[current.id];
                return (
                  <button
                    key={opt.text}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => void answerQuiz(opt, current.id)}
                    className={cn(
                      "rounded-xl border px-3 py-2 text-start text-sm font-bold transition-colors",
                      !isAnswered && "border-muted bg-muted/20 hover:border-primary/50 hover:bg-primary/5",
                      isAnswered && opt.correct && "border-success bg-success/10 text-success",
                      isAnswered && isPicked && !opt.correct && "border-destructive bg-destructive/10 text-destructive",
                      isAnswered && !isPicked && !opt.correct && "border-muted bg-muted/30 opacity-60",
                    )}
                    dir="ltr"
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {current.kind === "card" && (
          <div className="text-center">
            <p className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-primary">
              <BrainCircuit className="h-3.5 w-3.5" aria-hidden="true" />
              بطاقة مراجعة ذكية (SM-2)
            </p>
            <p className="font-de mt-3 text-lg font-bold" dir="ltr" lang="de">{current.de}</p>
            <p className="mt-1 text-sm text-muted-foreground">{current.ar}</p>
            {!answered[current.id] ? (
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { q: 0, label: "نسيت", cls: "text-destructive border-destructive/40 hover:bg-destructive/10" },
                  { q: 1, label: "صعبة", cls: "text-gold-strong border-gold/40 hover:bg-gold/10" },
                  { q: 3, label: "حسنة", cls: "text-success border-success/40 hover:bg-success/10" },
                  { q: 4, label: "سهلة", cls: "text-primary border-primary/40 hover:bg-primary/10" },
                ].map((b) => (
                  <button
                    key={b.q}
                    type="button"
                    onClick={() => void rateCard(b.q)}
                    className={cn("rounded-xl border bg-muted/20 px-2 py-2 text-xs font-extrabold", b.cls)}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-xs font-bold text-success">تم تحديث موعد مراجعة البطاقة تلقائياً. ✓</p>
            )}
          </div>
        )}

        {current.kind === "mistake" && (
          <div className="text-center">
            <p className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-primary">
              <BookCheck className="h-3.5 w-3.5" aria-hidden="true" />
              خطأ من دفترك
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{current.explanation}</p>
            {current.correctAnswer && (
              <p className="font-de mt-2 text-sm font-bold text-success" dir="ltr">{current.correctAnswer}</p>
            )}
            {!answered[current.id] ? (
              <div className="mt-4 flex justify-center gap-2">
                <Button size="sm" variant="outline" onClick={() => void rateMistake(true)} className="gap-1.5 text-success">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> أتقنته الآن
                </Button>
                <Button size="sm" variant="outline" onClick={() => void rateMistake(false)} className="gap-1.5 text-destructive">
                  <XCircle className="h-3.5 w-3.5" aria-hidden="true" /> ما زال يحتاج تدريباً
                </Button>
              </div>
            ) : (
              <p className="mt-3 text-xs font-bold text-muted-foreground">حدّثنا دفتر أخطائك. ✓</p>
            )}
          </div>
        )}
      </div>

      {/* المتابعة — تُفعَّل بعد التفاعل مع العنصر */}
      {answered[current.id] && (
        <Button onClick={next} className="w-full">
          {idx + 1 >= session.length ? "إنهاء المراجعة" : "التالي"}
        </Button>
      )}
    </div>
  );
}
