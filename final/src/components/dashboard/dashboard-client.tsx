"use client";

import * as React from "react";
import Link from "next/link";
import {ArrowDown, ArrowUp, BrainCircuit, CalendarClock, Clock, GraduationCap, Target, TrendingUp} from "lucide-react";

import {HeatmapChart} from "@/components/dashboard/heatmap-chart";
import {ExamReadinessCard} from "@/components/dashboard/exam-readiness-card";
import {MistakeDictionaryCard} from "@/components/dashboard/mistake-dictionary-card";
import {PreferencesCard} from "@/components/dashboard/preferences-card";
import {ReversePlanCard} from "@/components/dashboard/reverse-plan";
import {DailyVocabChallenge} from "@/components/dashboard/daily-vocab-challenge";
import {StudyStatsCard} from "@/components/dashboard/study-stats-card";
import {startSessionTracking} from "@/lib/analytics/session";
import {SmartGoalsCard} from "@/components/dashboard/smart-goals";
import {WeeklyReportCard} from "@/components/dashboard/weekly-report-card";
import {DailyDashboard} from "@/components/daily/daily-dashboard";
import {useProgress} from "@/components/providers/progress-provider";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getEventStats} from "@/lib/analytics/events";
import {getBeforeAfterComparison} from "@/lib/analytics/compare";
import {buildHeatmap, computeStreak, getActivityMap} from "@/lib/analytics/heatmap";
import {useLLM} from "@/components/providers/llm-provider";
import {getCardStats, computeForgettingCoefficient} from "@/lib/srs/flashcard-service";
import {forgettingCoefficientLabel} from "@/lib/srs/sm2";
import {getOverallProgress} from "@/lib/progress-selectors";
import {TOTAL_UNITS} from "@/lib/constants/curriculum";

/**
 * لوحة التحكم الشخصية — تجمع كل إحصائيات المتعلم
 * (التقدم + الإحصاء + الخريطة الحرارية + نقاط الضعف + المقارنة + التقرير + التفضيلات)
 */
export function DashboardClient() {
  const { completedUnits, isHydrated } = useProgress();
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

  return (
    <div className="space-y-6">
      {/* كبسولة اليوم (اقتراح المرحلة 14) */}
      <DailyDashboard />

      {/* بطاقات الإحصاء */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<Target className="h-5 w-5 text-primary" aria-hidden="true" />} label="التقدم في المنهج" value={`${progressPct}%`} sub={`${completedUnits.length} وحدة مكتملة`} />
        <StatCard icon={<TrendingUp className="h-5 w-5 text-success" aria-hidden="true" />} label="دقة التمارين" value={`${stats.accuracy}%`} sub={`${stats.answered} تمرين محلول`} />
        <StatCard icon={<BrainCircuit className="h-5 w-5 text-gold-strong" aria-hidden="true" />} label="نقاط الخبرة (XP)" value={`${stats.xp}`} sub={`${stats.lessons} دروس · ${stats.reviews} مراجعات`} />
        <StatCard icon={<CalendarClock className="h-5 w-5 text-indigo-500" aria-hidden="true" />} label="بطاقات مستحقة" value={`${cards.due}`} sub={`من أصل ${cards.total} بطاقة`} link="/flashcards" />
      </div>

      {/* مؤشر جاهزية الامتحان (اقتراح المرحلة النهائية) */}
      <ExamReadinessCard
        completedUnits={completedUnits.length}
        totalUnits={TOTAL_UNITS}
        reviewsCount={stats.reviews}
        goalLevel="B2"
      />

      {/* تحدّي المفردات اليومي + إحصائيات الدراسة */}
      <div className="grid gap-5 lg:grid-cols-2">
        <DailyVocabChallenge />
        <StudyStatsCard />
      </div>

      {/* منحنى النسيان + مقارنة قبل/بعد */}
      <div className="grid gap-5 lg:grid-cols-2">
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

      {/* الخريطة الحرارية */}
      <HeatmapChart cells={heat.cells} streak={heat.streak} />

      {/* نقاط الضعف + التقرير */}
      <div className="grid gap-5 lg:grid-cols-2">
        <MistakeDictionaryCard />
        <div className="space-y-5">
          <WeeklyReportCard />
        </div>
      </div>

      {/* أهداف SMART + الخطة العكسية */}
      <div className="grid gap-5 lg:grid-cols-2">
        <SmartGoalsCard />
        <ReversePlanCard />
      </div>

      {/* التفضيلات */}
      <PreferencesCard />

      {/* روابط سريعة */}
      <div className="grid gap-3 sm:grid-cols-3">
        <QuickLink href="/dashboard/review" icon={<CalendarClock className="h-5 w-5" aria-hidden="true" />} title="المراجعة اليومية" sub="بطاقات SM-2 المستحقة + تمارين سريعة" />
        <QuickLink href="/dashboard/five-minutes" icon={<Clock className="h-5 w-5" aria-hidden="true" />} title="وضع 5 دقائق" sub="كبسولة يومية سريعة للأيام المزدحمة" />
        <QuickLink href="/tests/weekly" icon={<GraduationCap className="h-5 w-5" aria-hidden="true" />} title="الاختبار الأسبوعي" sub="قس تقدمك التراكمي" />
      </div>

      {!isConfigured && (
        <p className="text-xs text-muted-foreground">
          💡 أضف مفاتيح LLM لتفعيل «تقرير أسبوعي ذكي» أعمق — التقرير المحلي يعمل دائماً.
        </p>
      )}
    </div>
  );
}

function StatCard({ icon, label, value, sub, link }: { icon: React.ReactNode; label: string; value: string; sub: string; link?: string }) {
  const inner = (
    <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-soft">
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
