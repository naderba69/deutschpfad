"use client";

import * as React from "react";
import {Award, BarChart3, Flame, Target, Trophy} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {LESSON_META} from "@/data/lessons/meta";
import {getLessonLevelCompletion} from "@/lib/progress-selectors";
import {LEVELS} from "@/lib/constants/curriculum";

/**
 * ═══════════════════════════════════════════════════════════
 *  تطورك — لوحة نمو مرئية في لوحة الرحلة:
 *  · أشرطة إنجاز المستويات الأربعة (نسب ملونة)
 *  · إحصاءات سريعة: دروس مكتملة، دقة تمارين، سلسلة أيام
 *  · شارات مفتوحة (من نظام الشارات)
 * ═══════════════════════════════════════════════════════════
 */
export function GrowthDashboard() {
  const { completedLessonsSet, sealedLevels, isHydrated } = useProgress();
  const [accuracy, setAccuracy] = React.useState<number | null>(null);
  const [streak, setStreak] = React.useState(0);
  const [badges, setBadges] = React.useState<{ name: string; emoji: string }[]>([]);
  const [todayDone, setTodayDone] = React.useState(0);
  const [xp, setXp] = React.useState(0);

  // بطاقة الإنجاز اليومية + XP (بند 7 و9)
  React.useEffect(() => {
    void (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(2000);
        const today = new Date().toDateString();
        const doneToday = events.filter((e) => e.type === "lesson-completed" && new Date(e.ts).toDateString() === today).length;
        setTodayDone(doneToday);
        // XP من الأحداث
        let xpTotal = 0;
        for (const e of events) {
          if (e.type === "exercise-result") xpTotal += e.correct ? 10 : 2;
          if (e.type === "lesson-completed") xpTotal += 50;
        }
        setXp(xpTotal);
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  React.useEffect(() => {
    void (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(500);
        const ex = events.filter((e) => e.type === "exercise-result");
        if (ex.length > 0) {
          setAccuracy(Math.round((ex.filter((e) => e.correct).length / ex.length) * 100));
        }
      } catch {
        /* تجاهل */
      }
    })();
    void (async () => {
      try {
        const {getActivityMap, computeStreak} = await import("@/lib/analytics/heatmap");
        setStreak(computeStreak(await getActivityMap()));
      } catch {
        /* تجاهل */
      }
    })();
    void (async () => {
      try {
        const {getUnlockedBadges} = await import("@/lib/gamification/badges");
        const ids = await getUnlockedBadges();
        if (ids.length > 0) {
          const {BADGES} = await import("@/lib/gamification/badges");
          setBadges(ids.slice(0, 6).map((id) => {
            const d = BADGES.find((x) => x.id === id);
            return { name: d?.name ?? id, emoji: d?.emoji ?? "🏅" };
          }));
        }
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  const doneCount = completedLessonsSet.size;
  const totalCount = LESSON_META.length;
  const overallPct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div className="rounded-2xl border border-muted bg-card p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-sm font-extrabold">
          <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
          تطورك
        </h3>
        <span className="font-de text-lg font-extrabold text-primary">{overallPct}%</span>
      </div>

      {/* الأفاتار + الإنجاز اليومي + XP */}
      <div className="mb-4 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
        <span className="text-3xl" aria-hidden="true">
          {overallPct >= 75 ? "🏆" : overallPct >= 40 ? "🚀" : overallPct >= 10 ? "🌱" : "🐣"}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-extrabold">
            {overallPct >= 75 ? "خبير الطريق" : overallPct >= 40 ? "متقدم واثق" : overallPct >= 10 ? "متعلم نشط" : "باحث جديد"}
          </p>
          <p className="text-[11px] text-muted-foreground">
            إنجاز اليوم: <span className="font-de font-bold">{todayDone}</span> درس · إجمالي XP:{" "}
            <span className="font-de font-bold text-gold-strong">⚡{xp}</span>
          </p>
        </div>
        {todayDone > 0 && <span className="shrink-0 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-bold text-success">يوم نشط ✓</span>}
      </div>

      {/* أشرطة المستويات الأربعة */}
      <div className="space-y-2.5">
        {LEVELS.map((l) => {
          const comp = getLessonLevelCompletion([...completedLessonsSet], l.code);
          const sealed = (sealedLevels ?? []).includes(l.code);
          return (
            <div key={l.code} className="flex items-center gap-3">
              <span className="w-9 shrink-0 font-de text-xs font-extrabold" style={{ color: l.accent }}>
                {l.code}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${comp.pct}%`, backgroundColor: l.accent }}
                />
              </div>
              <span className="w-14 shrink-0 text-end font-de text-xs font-bold text-muted-foreground">
                {comp.completed}/{comp.total}
              </span>
              {sealed && <Award className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      {/* إحصاءات سريعة */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <StatBox icon={<Target className="h-3.5 w-3.5" aria-hidden="true" />} value={`${doneCount}`} label="درس مكتمل" />
        <StatBox
          icon={<Flame className="h-3.5 w-3.5" aria-hidden="true" />}
          value={streak > 0 ? `${streak}` : "—"}
          label="أيام متتالية"
        />
        <StatBox
          icon={<Award className="h-3.5 w-3.5" aria-hidden="true" />}
          value={accuracy !== null ? `${accuracy}%` : "—"}
          label="دقة التمارين"
        />
      </div>

      {/* الشارات */}
      {badges.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
            <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
            شاراتك:
          </span>
          {badges.map((b) => (
            <span key={b.name} title={b.name} className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs">
              {b.emoji} {b.name}
            </span>
          ))}
        </div>
      )}

      {isHydrated && doneCount === 0 && (
        <p className="mt-4 rounded-lg bg-muted/30 px-3 py-2 text-center text-xs text-muted-foreground">
          أتمّ أول درس وستُضاء أشرطة تطورك هنا.
        </p>
      )}
    </div>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-muted bg-muted/20 px-2 py-2 text-center">
      <span className="inline-flex items-center justify-center text-primary">{icon}</span>
      <p className="font-de mt-0.5 text-base font-extrabold text-foreground">{value}</p>
      <p className="text-[11px] font-bold text-muted-foreground">{label}</p>
    </div>
  );
}
