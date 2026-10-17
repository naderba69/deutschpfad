"use client";

import * as React from "react";
import {Crown, Flame, Medal, Rocket, TrendingUp, Trophy} from "lucide-react";

import {getRecentEvents} from "@/lib/analytics/events";
import {XP_RULES} from "@/lib/gamification/xp";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  الدوري الأسبوعي 🏆 — رتبتك تُحسب محلياً من نشاطك هذا الأسبوع
 *  كل XP تجمعه خلال الأسبوع (الإثنين←الأحد) يقرّبك من الرتبة التالية:
 *  متدرج ← واعد ← منافس ← بطل الدوري
 *  — بلا خادم: كل مستخدم يرى دوريه الخاص على متصفحه —
 * ═══════════════════════════════════════════════════════════
 */

interface WeeklyStats {
  weekXp: number;
  weekStartLabel: string;
  rankIndex: number; // 0..3
  rankName: string;
  rankEmoji: string;
  target: number;
  progressPct: number;
}

/** بداية الأسبوع (الإثنين) */
function weekStart(): { label: string; ts: number } {
  const now = new Date();
  const day = (now.getDay() + 6) % 7; // 0=الإثنين
  const start = new Date(now);
  start.setDate(now.getDate() - day);
  start.setHours(0, 0, 0, 0);
  const label = new Intl.DateTimeFormat("ar-TN", { weekday: "long", day: "numeric", month: "long" }).format(start);
  return { label, ts: start.getTime() };
}

const RANKS = [
  { name: "متدرّج", emoji: "🌱", min: 0 },
  { name: "واعد", emoji: "🚀", min: 100 },
  { name: "منافس", emoji: "⚔️", min: 300 },
  { name: "بطل الدوري", emoji: "👑", min: 600 },
];

/** حساب XP هذا الأسبوع من الأحداث */
async function computeWeeklyStats(): Promise<WeeklyStats> {
  const { ts } = weekStart();
  const events = await getRecentEvents(5000);
  let weekXp = 0;
  for (const e of events) {
    if (e.ts < ts) continue;
    if (e.type === "exercise-result") {
      weekXp += e.correct ? XP_RULES.exerciseCorrect : XP_RULES.exerciseWrong;
    } else if (e.type === "pronunciation-score") {
      weekXp += XP_RULES.pronunciationScore(e.score);
    } else if (e.type === "review") {
      weekXp += XP_RULES.review;
    } else if (e.type === "lesson-completed") {
      weekXp += XP_RULES.lessonCompleted;
    } else if (e.type === "test-result") {
      weekXp += e.result.passed ? XP_RULES.testPassed : XP_RULES.testCompleted;
    }
  }
  let rankIndex = 0;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (weekXp >= RANKS[i].min) {
      rankIndex = i;
      break;
    }
  }
  const target = RANKS[Math.min(rankIndex + 1, RANKS.length - 1)].min;
  return {
    weekXp,
    weekStartLabel: weekStart().label,
    rankIndex,
    rankName: RANKS[rankIndex].name,
    rankEmoji: RANKS[rankIndex].emoji,
    target,
    progressPct: Math.min(100, Math.round((weekXp / Math.max(1, target)) * 100)),
  };
}

export function WeeklyLeague() {
  const [stats, setStats] = React.useState<WeeklyStats | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    void computeWeeklyStats().then((s) => {
      if (!cancelled) setStats(s);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!stats) return null;

  const nextRank = RANKS[Math.min(stats.rankIndex + 1, RANKS.length - 1)];
  const isTop = stats.rankIndex === RANKS.length - 1;

  return (
    <div className="rounded-xl border border-gold/30 bg-gradient-to-bl from-gold/10 via-background to-primary/5 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-xs font-extrabold text-foreground">
          <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
          دوري هذا الأسبوع
          <span className="text-[11px] font-bold text-muted-foreground">(من {stats.weekStartLabel})</span>
        </p>
        <span className="font-de inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-sm font-extrabold text-gold-strong">
          {stats.rankEmoji} {stats.rankName}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-4">
        {/* التقدم نحو الرتبة التالية */}
        <div className="flex-1">
          <div className="mb-1 flex items-center justify-between text-[11px] font-bold text-muted-foreground">
            <span className="font-de">⚡ {stats.weekXp} XP هذا الأسبوع</span>
            {!isTop && <span>التالية: {nextRank.emoji} {nextRank.name} ({stats.target} XP)</span>}
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                isTop ? "bg-gradient-to-l from-gold to-amber-500" : "bg-gradient-to-l from-primary to-success",
              )}
              style={{ width: `${stats.progressPct}%` }}
            />
          </div>
          {isTop && (
            <p className="mt-1 flex items-center gap-1 text-[11px] font-extrabold text-gold-strong">
              <Crown className="h-3.5 w-3.5" aria-hidden="true" />
              أنت بطل الدوري هذا الأسبوع — واصل!
            </p>
          )}
        </div>
      </div>

      {/* صف الرتب (شريط تقدم بصري للرتب) */}
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {RANKS.map((r, i) => (
          <div
            key={r.name}
            className={cn(
              "rounded-lg border px-1 py-1.5 text-center transition-colors",
              i === stats.rankIndex
                ? "border-gold/60 bg-gold/15"
                : i < stats.rankIndex
                  ? "border-success/30 bg-success/10"
                  : "border-muted bg-muted/30 opacity-60",
            )}
          >
            <span className="block text-sm" aria-hidden="true">{r.emoji}</span>
            <span className="block text-[9px] font-extrabold">{r.name}</span>
          </div>
        ))}
      </div>

      <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
        <Rocket className="h-3 w-3" aria-hidden="true" />
        أكمِل الدروس والمراجعات اليومية لتتقدم في الدوري — تُحسب نقاطك تلقائياً.
      </p>
    </div>
  );
}

/** شارة أسبوعية صغيرة (تُعرض في لوحة التقدم) */
export function WeeklyStreakChip({ streak }: { streak: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-extrabold text-primary">
      <Flame className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
      {streak} يوم
      <Medal className="ms-1 h-3.5 w-3.5 text-gold" aria-hidden="true" />
      <TrendingUp className="h-3.5 w-3.5 text-success" aria-hidden="true" />
    </span>
  );
}
