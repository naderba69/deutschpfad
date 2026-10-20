"use client";

import * as React from "react";
import {ArrowLeft, CheckCircle2, ChevronLeft, Headphones, Star, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {SpeakButton} from "@/components/shared/speak-button";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {addGems, GEM_REWARDS} from "@/lib/gamification/gems";
import {markStoryCompleted} from "@/lib/storage/story-progress";
import {recordEvent} from "@/lib/analytics/events";
import {cn} from "@/lib/utils";
import type { InteractiveStory } from "@/data/stories";

/**
 * ═══════════════════════════════════════════════════════════
 *  مشغّل القصة التفاعلية — قراءة + استماع + فهم + اختيارات:
 *  1) اقرأ المقطع بالألمانية (والترجمة عند الحاجة)
 *  2) استمع للنطق الصحيح
 *  3) أجب عن أسئلة الفهم
 *  4) اختر كيف تستمر القصة (نهاية مفتوحة)
 *  — كل إجابة صحيحة تُكسب نقاطاً وجواهر، وكل خطأ يُشرَح —
 * ═══════════════════════════════════════════════════════════
 */
export function InteractiveStoryPlayer({ story, onExit }: { story: InteractiveStory; onExit: () => void }) {
  const [segmentIdx, setSegmentIdx] = React.useState(0);
  const [showTranslation, setShowTranslation] = React.useState(false);
  const [answered, setAnswered] = React.useState<Record<number, boolean>>({});
  const [selected, setSelected] = React.useState<Record<number, string>>({});
  const [correctCount, setCorrectCount] = React.useState(0);
  const [answeredCount, setAnsweredCount] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const [gemsEarned, setGemsEarned] = React.useState(0);

  const seg = story.segments[segmentIdx];
  const progress = (segmentIdx / story.segments.length) * 100;

  /** الذهاب لمقطع معيّن عبر الاختيارات */
  const choose = (choice: NonNullable<typeof seg.choices>[number]) => {
    const nextIdx = story.segments.findIndex((s) => s.id === choice.next);
    if (nextIdx >= 0) setSegmentIdx(nextIdx);
    else setFinished(true);
    setShowTranslation(false);
  };

  const answerQuestion = (opt: { text: string; correct: boolean }) => {
    if (answered[seg.id]) return;
    setAnswered((a) => ({ ...a, [seg.id]: true }));
    setSelected((s) => ({ ...s, [seg.id]: opt.text }));
    setAnsweredCount((c) => c + 1);
    // تسجيل مهارة القراءة (فهم القصة) في كفايات CEFR
    void recordEvent({ type: "skill-result", skill: "القراءة", correct: opt.correct });
    if (opt.correct) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (segmentIdx < story.segments.length - 1) {
      setSegmentIdx((i) => i + 1);
      setShowTranslation(false);
    } else {
      setFinished(true);
      // مكافأة إتمام القصة + تسجيلها كمنجزة
      markStoryCompleted(story.id);
      const g = addGems(GEM_REWARDS.LESSON_COMPLETED);
      setGemsEarned(g);
      playCorrect();
    }
  };

  // شاشة النهاية
  if (finished) {
    return (
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-3xl" aria-hidden="true">📚</span>
        <h2 className="text-xl font-extrabold">أتممت القصة!</h2>
        <p className="text-sm text-muted-foreground">
          {story.titleAr} — أجببت عن {correctCount} من {answeredCount} أسئلة فهماً.
        </p>
        <div className="mx-auto grid max-w-xs grid-cols-2 gap-2">
          <div className="rounded-xl border border-gold/30 bg-gold/10 px-3 py-2">
            <p className="font-de text-lg font-extrabold text-gold-strong">💎 {gemsEarned}</p>
            <p className="text-[11px] font-bold text-muted-foreground">جواهرك الآن</p>
          </div>
          <div className="rounded-xl border border-success/30 bg-success/10 px-3 py-2">
            <p className="font-de text-lg font-extrabold text-success">{correctCount}/{answeredCount}</p>
            <p className="text-[11px] font-bold text-muted-foreground">إجابات صحيحة</p>
          </div>
        </div>
        {correctCount < answeredCount && (
          <p className="rounded-lg bg-primary/5 px-3 py-2 text-xs font-bold text-primary">
            💡 أعد قراءة الأجزاء التي أخطأت فيها — الفهم يتكرس بالقراءة المتدرجة.
          </p>
        )}
        <Button onClick={onExit} className="gap-2">
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          العودة لمكتبة القصص
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      {/* الترويسة */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExit}
          className="rounded-full border border-muted px-2.5 py-1 text-[11px] font-bold text-muted-foreground hover:border-primary/40 hover:text-primary"
        >
          خروج
        </button>
        <p className="truncate text-xs font-extrabold text-primary">{story.emoji} {story.title}</p>
        <span className="font-de shrink-0 text-[11px] font-bold text-muted-foreground">
          {segmentIdx + 1}/{story.segments.length}
        </span>
      </div>
      <Progress value={progress} className="progress-gradient h-2" aria-label="تقدم القصة" />

      {/* المقطع */}
      <div className="rounded-2xl border bg-card p-6">
        <p className="font-de text-lg font-bold leading-relaxed" dir="ltr" lang="de">
          {seg.de}
        </p>
        {showTranslation && (
          <p className="mt-2 text-sm text-muted-foreground">{seg.ar}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <SpeakButton text={seg.speak ?? seg.de} rate={0.8} size="sm" label="استمع" />
          <Button
            size="sm"
            variant="outline"
            className="gap-1.5"
            onClick={() => setShowTranslation((t) => !t)}
          >
            <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
            {showTranslation ? "إخفاء الترجمة" : "أظهر الترجمة"}
          </Button>
        </div>
      </div>

      {/* سؤال الفهم (إن وُجد) */}
      {seg.question && (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="font-de text-sm font-extrabold" dir="ltr" lang="de">{seg.question.de}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{seg.question.ar}</p>
          <div className="mt-3 grid gap-2">
            {seg.question.options.map((opt) => {
              const isSelected = selected[seg.id] === opt.text;
              const showState = answered[seg.id];
              return (
                <button
                  key={opt.text}
                  type="button"
                  disabled={!!showState}
                  onClick={() => answerQuestion(opt)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-3 py-2 text-start text-sm font-bold transition-colors",
                    !showState && "border-muted bg-background hover:border-primary/50 hover:bg-primary/5",
                    showState && opt.correct && "border-success bg-success/10 text-success",
                    showState && isSelected && !opt.correct && "border-destructive bg-destructive/10 text-destructive",
                    showState && !isSelected && !opt.correct && "border-muted bg-muted/30 text-muted-foreground",
                  )}
                >
                  <span className="font-de" dir="ltr">{opt.text}</span>
                  {showState && opt.correct && <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />}
                  {showState && isSelected && !opt.correct && <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          {/* شرح الإجابة المختارة (تغذية راجعة تربوية) */}
          {answered[seg.id] && (
            <p
              className={cn(
                "mt-2 rounded-lg px-2.5 py-1.5 text-xs font-bold leading-relaxed",
                selected[seg.id] === seg.question.options.find((o) => o.correct)?.text
                  ? "bg-success/10 text-success"
                  : "bg-destructive/10 text-destructive",
              )}
            >
              {selected[seg.id] === seg.question.options.find((o) => o.correct)?.text
                ? "✓ " + (seg.question.options.find((o) => o.correct)?.explanation ?? "إجابة صحيحة!")
                : "✗ " +
                  (seg.question.options.find((o) => o.text === selected[seg.id])?.explanation ??
                    "استمع للقصة مجدداً وفكّر في السياق.")}
            </p>
          )}
        </div>
      )}

      {/* اختيارات المسار (إن وُجدت) */}
      {seg.choices && (
        <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4">
          <p className="mb-3 text-xs font-extrabold text-gold-strong">✨ اختر كيف تستمر القصة:</p>
          <div className="grid gap-2">
            {seg.choices.map((c) => (
              <button
                key={c.text}
                type="button"
                onClick={() => choose(c)}
                className="rounded-xl border border-gold/40 bg-background px-3 py-2.5 text-start transition-colors hover:border-gold hover:bg-gold/10"
              >
                <span className="font-de block text-sm font-bold" dir="ltr" lang="de">{c.text}</span>
                <span className="mt-0.5 block text-[11px] text-muted-foreground">{c.ar}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* زر المتابعة */}
      {!seg.choices && (
        <Button onClick={next} className="w-full gap-2">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          متابعة
        </Button>
      )}

      {/* نقاط الفهم */}
      {answeredCount > 0 && (
        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] font-bold text-muted-foreground">
          <Star className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          فهمك: {correctCount}/{answeredCount} صحيحة — {story.grammar}
        </p>
      )}
    </div>
  );
}
