"use client";

import * as React from "react";
import {Ear, RefreshCw, Shuffle, Timer, Trophy, Zap} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {shuffle} from "@/lib/lesson/shuffle";
import {cn} from "@/lib/utils";
import type { MinimalPair, MinimalPairGroup } from "@/types/lesson";

interface MinimalPairsGameProps {
  /** مجموعات الأزواج (نستخدم الأولى عادة، أو تُمرر من الدرس) */
  groups: MinimalPairGroup[];
  compact?: boolean;
}

const ROUNDS_PER_GAME = 6;
const CHALLENGE_SECONDS = 30;

interface Round {
  pair: MinimalPair;
  /** هل ننطق a أم b؟ */
  spokenIsA: boolean;
}

/**
 * لعبة الأزواج الصوتية (Minimal Pairs) — وضعان:
 * — تدريب: استمع واختر بدون ضغط زمني
 * — تحدي: 30 ثانية — أجب بأسرع ما يمكن واجمع النقاط
 */
export function MinimalPairsGame({ groups, compact }: MinimalPairsGameProps) {
  const [groupIndex, setGroupIndex] = React.useState(0);
  const [rounds, setRounds] = React.useState<Round[]>([]);
  const [roundIdx, setRoundIdx] = React.useState(0);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [lastCorrect, setLastCorrect] = React.useState<boolean | null>(null);
  const [finished, setFinished] = React.useState(false);
  const [gameKey, setGameKey] = React.useState(0);

  /* ── وضع التحدي ── */
  const [challenge, setChallenge] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(CHALLENGE_SECONDS);
  const [challengeScore, setChallengeScore] = React.useState(0);
  const [challengeEnded, setChallengeEnded] = React.useState(false);

  const group = groups[groupIndex] ?? groups[0];

  const makeRounds = React.useCallback(
    (g: MinimalPairGroup): Round[] =>
      shuffle(g.pairs)
        .slice(0, ROUNDS_PER_GAME)
        .map((pair) => ({ pair, spokenIsA: Math.random() < 0.5 })),
    [],
  );

  // إعادة بناء الجولة عند تغيير المجموعة أو البدء
  React.useEffect(() => {
    if (groups.length > 0) {
      setRounds(makeRounds(group));
      setRoundIdx(0);
      setCorrectCount(0);
      setLastCorrect(null);
      setFinished(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupIndex, gameKey]);

  // مؤقت التحدي
  React.useEffect(() => {
    if (!challenge || challengeEnded) return;
    const timer = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          setChallengeEnded(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [challenge, challengeEnded, gameKey]);

  if (groups.length === 0) return null;

  const current = rounds[roundIdx];
  const spokenText = current ? (current.spokenIsA ? current.pair.a : current.pair.b) : "";

  const advance = (nextRoundIdx: number) => {
    if (nextRoundIdx >= rounds.length) {
      if (challenge) {
        // في وضع التحدي: جولة جديدة فوراً (الوقت هو الحكم)
        setRounds(makeRounds(group));
        setRoundIdx(0);
      } else {
        setFinished(true);
      }
    } else {
      setRoundIdx(nextRoundIdx);
    }
    setLastCorrect(null);
  };

  const answer = (isA: boolean) => {
    if (!current) return;
    const correct = isA === current.spokenIsA;
    setLastCorrect(correct);
    if (correct) {
      setCorrectCount((c) => c + 1);
      setChallengeScore((s) => s + 1);
    }

    if (challenge) {
      // تقدّم فوري بلا انتظار
      advance(roundIdx + 1);
    } else {
      setTimeout(() => advance(roundIdx + 1), 1100);
    }
  };

  const startChallenge = () => {
    setChallenge(true);
    setChallengeEnded(false);
    setTimeLeft(CHALLENGE_SECONDS);
    setChallengeScore(0);
    setGameKey((k) => k + 1);
  };

  const exitChallenge = () => {
    setChallenge(false);
    setChallengeEnded(false);
    setGameKey((k) => k + 1);
  };

  /* ── نهاية التحدي ── */
  if (challenge && challengeEnded) {
    return (
      <div className="rounded-xl border bg-muted/20 p-6 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <Trophy className="h-7 w-7 text-gold-strong" aria-hidden="true" />
        </span>
        <p className="font-de mt-3 text-4xl font-extrabold text-primary">{challengeScore}</p>
        <p className="mt-1 font-bold">
          {challengeScore >= 15
            ? "أذن فولاذية! 🎉"
            : challengeScore >= 10
              ? "ممتاز — سرعة ودقة رائعة"
              : challengeScore >= 5
                ? "جيد — ركّز على المجموعات التي أخطأت فيها"
                : "ابدأ بالوضع العادي أولاً ثم عد للتحدي"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          أجبت صحيحاً {challengeScore} مرة في {CHALLENGE_SECONDS} ثانية
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Button size="sm" onClick={startChallenge} className="gap-1.5">
            <Timer className="h-4 w-4" aria-hidden="true" />
            تحدٍ جديد
          </Button>
          <Button size="sm" variant="outline" onClick={exitChallenge}>
            العودة للتدريب
          </Button>
        </div>
      </div>
    );
  }

  /* ── نهاية التدريب ── */
  if (finished && !challenge) {
    const pct = Math.round((correctCount / rounds.length) * 100);
    return (
      <div className="rounded-xl border bg-muted/20 p-5 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          {pct >= 80 ? <Ear className="h-7 w-7 text-success" /> : <RefreshCw className="h-7 w-7 text-muted-foreground" />}
        </span>
        <p className="font-de mt-3 text-3xl font-extrabold text-primary">{pct}%</p>
        <p className="mt-1 font-bold">
          {pct >= 80
            ? "أذن موسيقية ممتازة! 🎉"
            : pct >= 60
              ? "جيد — تحتاج المزيد من التدريب على هذا الفرق"
              : "لا بأس! استمع للأزواج مرة أخرى بتركيز وكرر"}
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Button size="sm" onClick={() => setGameKey((k) => k + 1)} className="gap-1.5">
            <Shuffle className="h-4 w-4" aria-hidden="true" />
            جولة جديدة
          </Button>
          <Button size="sm" variant="outline" onClick={startChallenge} className="gap-1.5">
            <Zap className="h-4 w-4" aria-hidden="true" />
            جرّب وضع التحدي ⏱
          </Button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  /* ── الجولة ── */
  return (
    <div className="space-y-4">
      {/* شريط التحكم: مجموعة + تحدٍ */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        {!compact && (
          <div className="flex flex-wrap gap-1.5">
            {groups.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setGroupIndex(i);
                  setGameKey((k) => k + 1);
                }}
                className={cn(
                  "rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors",
                  i === groupIndex
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-muted/40 hover:border-primary/50",
                )}
              >
                {g.title}
              </button>
            ))}
          </div>
        )}
        <Button
          variant={challenge ? "destructive" : "outline"}
          size="sm"
          onClick={challenge ? exitChallenge : startChallenge}
          className="gap-1.5"
        >
          <Timer className="h-4 w-4" aria-hidden="true" />
          {challenge ? "خروج من التحدي" : "تحدي 30 ثانية"}
        </Button>
      </div>

      {/* شرح المجموعة */}
      <div className="rounded-xl border bg-primary/5 p-3 text-sm leading-relaxed">
        <p className="font-bold">{group.title}</p>
        <p className="mt-1 text-muted-foreground">{group.explanationAr}</p>
      </div>

      {/* الشريط العلوي */}
      <div className="flex items-center gap-3">
        <Progress
          value={challenge ? (timeLeft / CHALLENGE_SECONDS) * 100 : (roundIdx / rounds.length) * 100}
          aria-label={challenge ? "الوقت المتبقي" : "التقدم في الجولة"}
        />
        {challenge ? (
          <>
            <span className="font-de shrink-0 text-sm font-extrabold text-destructive">
              ⏱ {timeLeft}s
            </span>
            <span className="font-de shrink-0 text-sm font-bold text-success">⭐ {challengeScore}</span>
          </>
        ) : (
          <>
            <span className="font-de shrink-0 text-xs font-bold text-muted-foreground">
              {roundIdx + 1}/{rounds.length}
            </span>
            <span className="font-de shrink-0 text-xs font-bold text-success">✓ {correctCount}</span>
          </>
        )}
      </div>

      {/* السؤال */}
      <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted/20 p-5 text-center">
        <p className="text-sm font-semibold text-muted-foreground">استمع جيداً…</p>
        <SpeakButton text={spokenText} rate={1} variant="gold" size="lg" label="🔊 استمع مرة أخرى" />
        {lastCorrect !== null && (
          <p className={cn("font-bold", lastCorrect ? "text-success" : "text-destructive")}>
            {lastCorrect ? "إجابة صحيحة! ✓" : "لا، انتبه للفرق!"}
          </p>
        )}
      </div>

      {/* الخياران */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: current.pair.a, ar: current.pair.aAr, isA: true },
          { label: current.pair.b, ar: current.pair.bAr, isA: false },
        ].map((opt) => (
          <button
            key={opt.label}
            type="button"
            disabled={!challenge && lastCorrect !== null}
            onClick={() => answer(opt.isA)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-2xl border bg-background p-4 transition-all",
              "hover:border-primary/60 hover:bg-primary/5 active:scale-[0.97]",
              lastCorrect !== null && opt.isA === current.spokenIsA && "border-success bg-success/10",
              lastCorrect !== null && opt.isA !== current.spokenIsA && "border-destructive/40 bg-destructive/5 opacity-60",
            )}
          >
            <span className="font-de text-xl font-bold" dir="ltr" lang="de">
              {opt.label}
            </span>
            <span className="text-sm text-muted-foreground">{opt.ar}</span>
          </button>
        ))}
      </div>

      {/* ملاحظة الزوج */}
      <p className="rounded-lg bg-muted/30 p-2.5 text-center text-xs text-muted-foreground">
        💡 {current.pair.note}
      </p>
    </div>
  );
}
