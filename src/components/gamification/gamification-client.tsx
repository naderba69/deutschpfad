"use client";

import * as React from "react";
import Link from "next/link";
import {Gamepad2, Zap, BrainCircuit, Award, Sprout, GraduationCap} from "lucide-react";

import {BadgesGrid} from "@/components/gamification/badges-grid";
import {DailyQuests} from "@/components/gamification/daily-quests";
import {ChallengeMode} from "@/components/gamification/challenge-mode";
import {FocusMode} from "@/components/gamification/focus-mode";
import {LanguageTree} from "@/components/gamification/language-tree";
import {LevelCertificates} from "@/components/gamification/certificate";
import {MemoryChallenge} from "@/components/gamification/memory-challenge";
import {TeacherPersonalityCard} from "@/components/gamification/teacher-personality-card";
import {useProgress} from "@/components/providers/progress-provider";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {computeStreak, getActivityMap} from "@/lib/analytics/heatmap";
import {computeWeeklyStreak} from "@/lib/analytics/weekly-streak";
import {computeXpSummary, levelTitle} from "@/lib/gamification/xp";

/**
 * صفحة التحفيز — XP + شارات + شجرة + تحديات + شهادات + شخصية المعلّم
 */
export function GamificationClient() {
  const { completedUnits, isHydrated } = useProgress();
  const [xp, setXp] = React.useState({ xp: 0, level: 1, progressToNext: 0, streak: 0 });
  const [weeklyStreak, setWeeklyStreak] = React.useState(0);

  // احتفال ترقية المستوى — يحفظ آخر مستوى شاهده المستخدم
  const [levelUp, setLevelUp] = React.useState<{ from: number; to: number } | null>(null);

  React.useEffect(() => {
    void (async () => {
      const activity = await getActivityMap();
      const streak = computeStreak(activity);
      const summary = await computeXpSummary(streak);
      setXp(summary);
      setWeeklyStreak(await computeWeeklyStreak());
      // كشف الترقية: قارن مع المستوى المحفوظ
      try {
        const prev = Number(localStorage.getItem("dp:last-seen-level") ?? "0");
        if (prev > 0 && summary.level > prev) {
          setLevelUp({ from: prev, to: summary.level });
          void import("@/lib/audio/sfx").then(({playAchievement}) => playAchievement());
        }
        localStorage.setItem("dp:last-seen-level", String(summary.level));
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  return (
    <div className="space-y-6">
      {/* احتفال ترقية المستوى */}
      {levelUp && (
        <div className="animate-[fade-up_0.5s_ease] rounded-2xl border-2 border-gold/50 bg-gradient-to-l from-gold/20 via-card to-gold/10 p-6 text-center shadow-soft">
          <span className="text-4xl" aria-hidden="true">🎉</span>
          <h2 className="mt-2 text-xl font-extrabold text-gold-strong">
            ترقّيت إلى المستوى {levelUp.to}!
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            من المستوى {levelUp.from} → {levelUp.to} — {levelTitle(levelUp.to)}
          </p>
          <button
            type="button"
            onClick={() => setLevelUp(null)}
            className="mt-3 rounded-xl bg-gold px-5 py-2 text-sm font-extrabold text-gold-foreground transition-transform hover:scale-[1.02]"
          >
            رائع! 🏆
          </button>
        </div>
      )}

      {/* بطاقة المستوى */}
      <div className="rounded-2xl border bg-gradient-to-l from-primary/10 via-transparent to-gold/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-muted-foreground">
              المستوى {xp.level} · {levelTitle(xp.level)}
            </p>
            <p className="font-de mt-1 text-4xl font-extrabold text-primary">{xp.xp} XP</p>
            <p className="mt-1 text-sm text-muted-foreground">
              سلسلة أيامك: 🔥 {xp.streak} · أسابيعك المتتالية: 📅 {weeklyStreak}
            </p>
          </div>
          <div className="w-full max-w-xs">
            <div className="mb-1 flex justify-between text-xs text-muted-foreground">
              <span>التقدم للمستوى التالي</span>
              <span className="font-de font-bold">{xp.progressToNext}%</span>
            </div>
            <ProgressBar value={xp.progressToNext} />
          </div>
        </div>
      </div>

      {/* التحديات اليومية المتجددة */}
      <DailyQuests />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <LanguageTree completedUnits={isHydrated ? completedUnits : []} />
        <BadgesGrid />
      </div>

      {/* التحديات */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChallengeMode />
        <MemoryChallenge />
      </div>

      {/* وضع التركيز */}
      <FocusMode />

      {/* الشهادات */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <GraduationCap className="h-5 w-5 text-gold-strong" aria-hidden="true" />
            شهادات الإتمام
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <LevelCertificates completedUnits={isHydrated ? completedUnits : []} />
        </CardContent>
      </Card>

      {/* شخصية المعلّم */}
      <TeacherPersonalityCard />

      {/* روابط */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <QuickLink href="/dashboard/review" icon={<BrainCircuit className="h-5 w-5" aria-hidden="true" />} label="المراجعة اليومية" />
        <QuickLink href="/dashboard/five-minutes" icon={<Zap className="h-5 w-5" aria-hidden="true" />} label="وضع 5 دقائق" />
        <QuickLink href="/tests/weekly" icon={<Gamepad2 className="h-5 w-5" aria-hidden="true" />} label="الاختبار الأسبوعي" />
        <QuickLink href="/dashboard" icon={<Award className="h-5 w-5" aria-hidden="true" />} label="لوحة التحكم" />
      </div>

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Sprout className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
        أهداف SMART في لوحة التحكم: إكمال هدف يفتح شارة «صانع الأهداف» تلقائياً!
      </p>
    </div>
  );
}


function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
      <div className="h-full rounded-full bg-gradient-to-r from-primary to-gold transition-all duration-700" style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}

function QuickLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="group flex flex-col items-center gap-1.5 rounded-xl border bg-card p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
      <span className="text-primary">{icon}</span>
      <span className="text-xs font-semibold group-hover:text-primary">{label}</span>
    </Link>
  );
}
