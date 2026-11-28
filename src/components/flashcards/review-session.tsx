"use client";

import * as React from "react";

import {LangDe} from "@/components/shared/lang-de";
import {BrainCircuit, CheckCircle2, RotateCcw, Star} from "lucide-react";

import {QUALITY_BUTTONS} from "@/lib/srs/sm2";
import {getCardStats, getDueCards, reviewCard} from "@/lib/srs/flashcard-service";
import {TypedAnswerPanel} from "@/components/flashcards/typed-answer-panel";
import {addRefillReview, getRefillCount, REFILLS_PER_HEART} from "@/lib/gamification/hearts";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "@/lib/utils";
import type { ReviewQuality, Sm2CardData } from "@/types/srs";

interface ReviewSessionProps {
  /** مفتاح إعادة التحميل (عند تغيّر البطاقات) */
  refreshKey?: number;
}

/**
 * جلسة المراجعة (إبنغهاوس) — وضعان:
 *  · الكتابة (افتراضي): تكتب الكلمة الألمانية مع مادتها، فتُحسب الدقة تلقائياً
 *  · التقييم الذاتي: نسيت / صعب / حسن / سهل
 */
export function ReviewSession({ refreshKey }: ReviewSessionProps) {
  const [loading, setLoading] = React.useState(true);
  const [cards, setCards] = React.useState<Sm2CardData[]>([]);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [reviewedCount, setReviewedCount] = React.useState(0);
  const [lapses, setLapses] = React.useState(0);
  const [stats, setStats] = React.useState<{ total: number; due: number }>({ total: 0, due: 0 });
  const [finished, setFinished] = React.useState(false);
  const [sessionKey, setSessionKey] = React.useState(0);
  const [mode, setMode] = React.useState<"typed" | "self">("typed");

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const [due, cardStats] = await Promise.all([getDueCards(), getCardStats()]);
      if (cancelled) return;
      setCards(due);
      setStats({ total: cardStats.total, due: cardStats.due });
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionKey, refreshKey]);

  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-40 w-full rounded-2xl" />
        <div className="flex justify-center gap-2">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    );
  }

  /* ── لا توجد بطاقات مستحقة ── */
  if (cards.length === 0) {
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-8 w-8 text-success" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-extrabold">لا توجد بطاقات مستحقة اليوم</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          راجعت كل ما هو مستحق! عد غداً، أو أضف بطاقات من الدروس أو يدوياً.
        </p>
        {stats.due === 0 && stats.total > 0 && (
          <p className="mt-1 text-xs text-muted-foreground">
            إجمالي بطاقاتك: {stats.total} — كلها في فترات راحة (SM-2 يقرر مواعيدها).
          </p>
        )}
      </div>
    );
  }

  /* ── نهاية الجلسة ── */
  if (finished || index >= cards.length) {
    const accuracy = reviewedCount > 0 ? Math.round(((reviewedCount - lapses) / reviewedCount) * 100) : 100;
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <BrainCircuit className="h-8 w-8 text-primary" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-extrabold">أحسنت — أنهيت جلسة المراجعة!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          راجعت <span className="font-de font-bold text-foreground">{reviewedCount}</span> بطاقة —
          دقة التذكر <span className="font-de font-bold text-primary">{accuracy}%</span>
          {lapses > 0 && <span> (أعِدت {lapses} بطاقة)</span>}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          نموذج إبنغهاوس جدوَل مواعيد المراجعة التالية لكل بطاقة حسب دقتك.
        </p>
        <Button className="mt-5 gap-1.5" onClick={() => setSessionKey((k) => k + 1)}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          جلسة جديدة
        </Button>
      </div>
    );
  }

  const card = cards[index];

  const advance = (failed: boolean) => {
    if (failed) setLapses((l) => l + 1);
    setReviewedCount((c) => c + 1);
    setFlipped(false);
    // كل بطاقة مراجعة تُحتسب لإعادة شحن القلوب (كل 3 = قلب)
    addRefillReview();
    setIndex((i) => {
      if (i + 1 >= cards.length) {
        setFinished(true);
        return i;
      }
      return i + 1;
    });
  };

  const handleRate = async (q: ReviewQuality) => {
    await reviewCard(card.id, q);
    advance(q < 3);
  };

  return (
    <div className="space-y-4">
      {/* مؤشر شحن القلوب */}
      <p className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-bold text-primary">
كل {REFILLS_PER_HEART} مراجعات تعيد قلباً في الدروس — عدد مراجعاتك المتراكمة: {getRefillCount()}
      </p>

      {/* شريط التقدم */}
      <div className="flex items-center gap-3">
        <Progress
          value={(index / cards.length) * 100}
          aria-label={`التقدم في المراجعة: ${index}/${cards.length}`}
        />
        <span className="font-de shrink-0 text-sm font-bold text-primary">
          {index + 1}/{cards.length}
        </span>
      </div>

      {/* اختيار الوضع */}
      <div className="flex justify-center gap-2" role="group" aria-label="وضع المراجعة">
        <Button
          size="sm"
          variant={mode === "typed" ? "default" : "outline"}
          aria-pressed={mode === "typed"}
          onClick={() => setMode("typed")}
        >
          الكتابة
        </Button>
        <Button
          size="sm"
          variant={mode === "self" ? "default" : "outline"}
          aria-pressed={mode === "self"}
          onClick={() => setMode("self")}
        >
          التقييم الذاتي
        </Button>
      </div>

      {mode === "typed" ? (
        <div className="space-y-4 rounded-2xl border bg-card p-6">
          <div className="space-y-1 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">المعنى:</span>
            <p className="text-2xl font-bold">{card.ar}</p>
          </div>
          <TypedAnswerPanel
            key={`${card.id}-${index}`}
            card={card}
            onDone={(lapse) => advance(lapse)}
          />
        </div>
      ) : (
      /* البطاقة */
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "أظهر الوجه الأمامي" : "أظهر الترجمة"}
        className={cn(
          "block w-full rounded-2xl border p-8 text-center transition-all duration-300",
          flipped
            ? "border-primary/60 bg-primary/5 shadow-soft"
            : "border bg-card hover:-translate-y-0.5 hover:shadow-soft",
        )}
      >
        {!flipped ? (
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              تذكّر المعنى أولاً…
            </span>
            <p className="text-3xl font-extrabold">
              <LangDe>{card.de}</LangDe>
            </p>
            <span className="text-xs text-muted-foreground">اضغط للكشف عن الترجمة</span>
          </div>
        ) : (
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              المعنى:
            </span>
            <p className="text-2xl font-bold">{card.ar}</p>
            {card.example && (
              <div className="mx-auto max-w-md rounded-xl bg-muted/40 p-3 text-sm">
                <LangDe>
                  {card.example}
                </LangDe>
                {card.exampleAr && (
                  <p className="mt-1 text-muted-foreground">{card.exampleAr}</p>
                )}
              </div>
            )}
            <div className="flex items-center justify-center gap-2">
              <SpeakButton text={card.de} variant="outline" size="sm" />
              <span className="text-xs text-muted-foreground">
                كيف كان تذكّرك؟
              </span>
            </div>
          </div>
        )}
      </button>
      )}

      {/* أزرار التقييم (تظهر بعد الكشف) */}
      {mode === "self" && flipped && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {QUALITY_BUTTONS.map(({ q, label, emoji, hint }) => (
            <Button
              key={q}
              variant={q < 3 ? "destructive" : q === 3 ? "outline" : q === 4 ? "secondary" : "gold"}
              onClick={() => void handleRate(q)}
              className="flex-col gap-0.5 py-3"
              title={hint}
            >
              <span className="text-base leading-none">{emoji}</span>
              <span className="text-xs font-semibold">{label}</span>
            </Button>
          ))}
        </div>
      )}

      {mode === "self" && (
        <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 text-gold-strong" aria-hidden="true" />
          تقييمك الذاتي يضبط فترات المراجعة — «سهل» يباعد، «نسيت» يقرب
        </p>
      )}
    </div>
  );
}
