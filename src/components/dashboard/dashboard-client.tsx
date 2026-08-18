"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  BrainCircuit,
  CalendarClock,
  Clock,
  GraduationCap,
  PlayCircle,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";

import {HeatmapChart} from "@/components/dashboard/heatmap-chart";
import {ExamReadinessCard} from "@/components/dashboard/exam-readiness-card";
import {MistakeDictionaryCard} from "@/components/dashboard/mistake-dictionary-card";
import {PreferencesCard} from "@/components/dashboard/preferences-card";
import {ReversePlanCard} from "@/components/dashboard/reverse-plan";
import {DailyVocabChallenge} from "@/components/dashboard/daily-vocab-challenge";
import {StudyStatsCard} from "@/components/dashboard/study-stats-card";
import {RecentActivity} from "@/components/dashboard/recent-activity";
import {startSessionTracking} from "@/lib/analytics/session";
import {SmartGoalsCard} from "@/components/dashboard/smart-goals";
import {WeeklyReportCard} from "@/components/dashboard/weekly-report-card";
import {DailyDashboard} from "@/components/daily/daily-dashboard";
import {useProgress} from "@/components/providers/progress-provider";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {getEventStats} from "@/lib/analytics/events";
import {getBeforeAfterComparison} from "@/lib/analytics/compare";
import {buildHeatmap, computeStreak, getActivityMap} from "@/lib/analytics/heatmap";
import {useLLM} from "@/components/providers/llm-provider";
import {getCardStats, computeForgettingCoefficient} from "@/lib/srs/flashcard-service";
import {forgettingCoefficientLabel} from "@/lib/srs/sm2";
import {getOverallProgress, firstIncompleteLesson} from "@/lib/progress-selectors";
import {TOTAL_UNITS} from "@/lib/constants/curriculum";
import {LESSON_META} from "@/data/lessons/meta";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  لوحة التحكم الأكاديمية — نسخة إنتاجية متسلسلة ومترابطة
 *  سبعة أقسام مرقمة تحاكي دورة الفصل الدراسي:
 *  ① نبض اليوم (ماذا أفعل الآن؟) ← ② أرقامك ← ③ جاهزيتك
 *  ← ④ تدريبك اليومي ← ⑤ ذاكرتك وتطورك ← ⑥ نقاط ضعفك وأهدافك
 *  ← ⑦ أدواتك
 *  كل قسم وظيفته واحدة واضحة — لا توهان، تسلسل صريح.
 * ═══════════════════════════════════════════════════════════
 */

function DashSection({
  step,
  title,
  subtitle,
  children,
}: {
  step: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3" aria-label={title}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-de text-sm font-extrabold text-primary">
          {step}
        </span>
        <div className="min-w-0">
          <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>
          {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-muted to-transparent" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}

export function DashboardClient() {
  const { completedUnits, completedLessonsSet, isHydrated } = useProgress();
  const { isConfigured } = useLLM();

  const [stats, setStats] = React.useState({
    xp: 0,
    accuracy: 0,
    answered: 0,
    reviews: 0,
    lessons: 0,
    pronunciationAvg: null as number | null,
  });
  const [cards, setCards] = React.useState({ due: 0, total: 0 });
  const [coefficient, setCoefficient] = React.useState(1);
  const [heat, setHeat] = React.useState({ cells: [] as Awaited<ReturnType<typeof buildHeatmap>>, streak: 0 });
  const [comparison, setComparison] = React.useState<Awaited<ReturnType<typeof getBeforeAfterComparison>>>(null);

  React.useEffect(() => {
    const stop = startSessionTracking();
    void (async () => {
      const [s, cs, fc, activity, cmp] = await Promise.all([
        getEventStats(),
        getCardStats(),
        computeForgettingCoefficient(),
        getActivityMap(),
        getBeforeAfterComparison(),
      ]);
      setStats({
        xp: s.xp,
        accuracy: s.accuracyPct,
        answered: s.exercisesAnswered,
        reviews: s.reviewsCount,
        lessons: s.lessonsCompleted,
        pronunciationAvg: s.pronunciationAvg,
      });
      setCards({ due: cs.due, total: cs.total });
      setCoefficient(fc);
      setHeat({ cells: buildHeatmap(activity), streak: computeStreak(activity) });
      setComparison(cmp);
    })();
    return () => stop();
  }, []);

  const progressPct = isHydrated ? getOverallProgress(completedUnits) : 0;

  /** الدرس التالي في المسار (الترابط مع المسار الأكاديمي) */
  const nextLesson = React.useMemo(() => {
    const incomplete = firstIncompleteLesson([...completedLessonsSet]);
    if (incomplete) return LESSON_META.find((l) => l.id === incomplete.id);
    return LESSON_META[LESSON_META.length - 1];
  }, [completedLessonsSet]);
  const nextIdx = nextLesson ? LESSON_META.findIndex((l) => l.id === nextLesson.id) : -1;

  return (
    <div className="space-y-8">
      {/* ① نبض اليوم — ماذا أفعل الآن؟ (الترابط مع المسار) */}
      <DashSection step="١" title="نبض اليوم" subtitle="خطوتك التالية في المسار — ماذا تفعل الآن؟">
        <DailyDashboard />
        {nextLesson && (
          <Card className="overflow-hidden border-primary/25 bg-gradient-to-l from-primary/[0.06] via-card to-gold/[0.05]">
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
              <div className="flex shrink-0 items-center justify-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 font-de text-lg font-extrabold text-primary">
                  {String(nextIdx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-[11px] font-bold text-muted-foreground">
                  درسك التالي في التسلسل · {nextLesson.level} · ⏱ {nextLesson.duration} دقيقة
                </p>
                <p className="truncate text-lg font-extrabold">
                  <span dir="ltr">{nextLesson.titleDe}</span>
                  <span className="ms-2 text-sm font-medium text-muted-foreground">{nextLesson.titleAr}</span>
                </p>
              </div>
              <Button asChild size="lg" className="btn-glow shrink-0 gap-2">
                <Link href={`/lesson/${nextLesson.id}`}>
                  <PlayCircle className="h-5 w-5" aria-hidden="true" />
                  تابع الدرس
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </DashSection>

      {/* ② أرقامك — إحصاءات فورية */}
      <DashSection step="٢" title="أرقامك" subtitle="ملخص تقدمك في لمحة">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={<Target className="h-5 w-5 text-primary" aria-hidden="true" />} label="التقدم في المنهج" value={`${progressPct}%`} sub={`${completedUnits.length} وحدة مكتملة`} />
          <StatCard icon={<TrendingUp className="h-5 w-5 text-success" aria-hidden="true" />} label="دقة التمارين" value={`${stats.accuracy}%`} sub={`${stats.answered} تمرين محلول`} />
          <StatCard icon={<BrainCircuit className="h-5 w-5 text-gold-strong" aria-hidden="true" />} label="نقاط الخبرة (XP)" value={`${stats.xp}`} sub={`${stats.lessons} دروس · ${stats.reviews} مراجعات`} />
          <StatCard icon={<CalendarClock className="h-5 w-5 text-indigo-500" aria-hidden="true" />} label="بطاقات مستحقة" value={`${cards.due}`} sub={`من أصل ${cards.total} بطاقة`} link="/flashcards" />
        </div>
      </DashSection>

      {/* ③ جاهزيتك للامتحان */}
      <DashSection step="٣" title="جاهزيتك للامتحان" subtitle="هل أنت مستعد للمستوى التالي؟">
        <ExamReadinessCard
          completedUnits={completedUnits.length}
          totalUnits={TOTAL_UNITS}
          reviewsCount={stats.reviews}
          goalLevel="B2"
        />
      </DashSection>

      {/* ④ تدريبك اليومي */}
      <DashSection step="٤" title="تدريبك اليومي" subtitle="مارس الآن: مفردات + إحصاءات دراسة">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <DailyVocabChallenge />
          <StudyStatsCard />
        </div>
      </DashSection>

      {/* ⑤ ذاكرتك وتطورك */}
      <DashSection step="٥" title="ذاكرتك وتطورك" subtitle="منحنى النسيان + مقارنة قبل/بعد + خريطة نشاطك">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BrainCircuit className="h-5 w-5 text-primary" aria-hidden="true" />
                منحنى النسيان الشخصي
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <p className="font-de text-4xl font-extrabold text-primary">{coefficient.toFixed(2)}</p>
              <p className="mt-1 text-sm text-muted-foreground">{forgettingCoefficientLabel(coefficient)}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                يُحسب من متوسط تقييماتك في المراجعات ويضبط فترات SM-2 تلقائياً — ذاكرة أقوى =
                فترات أطول.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-center gap-2 text-lg">
                <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                مقارنة «قبل وبعد»
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              {comparison ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">أول الفترة</span>
                    <span className="font-de font-bold text-primary">{comparison.beforePct}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">آخر الفترة</span>
                    <span className="font-de font-bold text-primary">{comparison.afterPct}%</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-bold ${
                      comparison.improved ? "border-success/40 bg-success/10 text-success" : "border-destructive/40 bg-destructive/10 text-destructive"
                    }`}
                  >
                    {comparison.improved ? <ArrowUp className="h-4 w-4" aria-hidden="true" /> : <ArrowDown className="h-4 w-4" aria-hidden="true" />}
                    {comparison.improved ? "تحسّنت" : "تراجعت"} بنسبة {Math.abs(comparison.delta)}% ({comparison.beforeCount} → {comparison.afterCount} تمرين)
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  أجب عن 20 تمريناً على الأقل لتفعيل مقارنة «قبل وبعد» — تقارن دقة بدايتك بنهايتك.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <HeatmapChart cells={heat.cells} streak={heat.streak} />
      </DashSection>

      {/* ⑥ نقاط ضعفك وأهدافك */}
      <DashSection step="٦" title="نقاط ضعفك وأهدافك" subtitle="قوِّ ضعفك، حدّد هدفك، خطّط عكسياً">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <MistakeDictionaryCard />
          <div className="space-y-5">
            <WeeklyReportCard />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <SmartGoalsCard />
          <ReversePlanCard />
        </div>
      </DashSection>

      {/* ⑦ أدواتك وتخصيصك */}
      <DashSection step="٧" title="أدواتك وتخصيصك" subtitle="مراجعة يومية، وضع 5 دقائق، اختبار أسبوعي، تفضيلاتك">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <QuickLink href="/dashboard/review" icon={<CalendarClock className="h-5 w-5" aria-hidden="true" />} title="المراجعة اليومية" sub="بطاقات SM-2 المستحقة + تمارين سريعة" />
          <QuickLink href="/dashboard/five-minutes" icon={<Clock className="h-5 w-5" aria-hidden="true" />} title="وضع 5 دقائق" sub="كبسولة يومية سريعة للأيام المزدحمة" />
          <QuickLink href="/tests/weekly" icon={<Trophy className="h-5 w-5" aria-hidden="true" />} title="الاختبار الأسبوعي" sub="قس تقدمك التراكمي" />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <RecentActivity />
          <PreferencesCard />
        </div>
      </DashSection>

      {!isConfigured && (
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          أضف مفاتيح LLM لتفعيل «تقرير أسبوعي ذكي» أعمق — التقرير المحلي يعمل دائماً.
        </p>
      )}
    </div>
  );
}

function StatCard({ icon, label, value, sub, link }: { icon: React.ReactNode; label: string; value: string; sub: string; link?: string }) {
  const inner = (
    <Card className={cn("h-full transition-all hover:-translate-y-0.5 hover:shadow-soft")}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          {icon}
          <span className="text-xs font-semibold">{label}</span>
        </div>
        <p className="font-de mt-2 text-3xl font-extrabold text-foreground">{value}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
  return link ? <Link href={link} className="block">{inner}</Link> : inner;
}

function QuickLink({ href, icon, title, sub }: { href: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <Link href={href} className="group rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
      <div className="flex items-center gap-2 text-primary">{icon}</div>
      <p className="mt-2 font-bold group-hover:text-primary">{title}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
    </Link>
  );
}
