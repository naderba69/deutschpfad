"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  DatabaseBackup,
  FileText,
  Flame,
  GraduationCap,
  Images,
  MessagesSquare,
  Mic,
  PlayCircle,
  Rocket,
  ShoppingBag,
  Sparkles,
  Target,
  Upload,
  UserPlus,
  Wand2,
  Zap,
} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {TeacherMentor} from "@/components/home/teacher-mentor";
import {StudyPlan} from "@/components/home/study-plan";
import {TodaySuggestions} from "@/components/home/today-suggestions";
import {DailyChallengeCard} from "@/components/home/daily-challenge-card";
import {GrowthDashboard} from "@/components/home/growth-dashboard";
import {WeeklyLeague} from "@/components/home/weekly-league";
import {InviteCard} from "@/components/home/invite-card";
import {PredictivePath} from "@/components/home/predictive-path";
import {DailyPlanCard} from "@/components/home/daily-plan";
import {CertificatePath} from "@/components/home/certificate-path";
import {JourneyPreferences} from "@/components/home/journey-preferences";
import {LangDe} from "@/components/shared/lang-de";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {LESSON_META} from "@/data/lessons/meta";
import {
  firstIncompleteLesson,
  getLessonLevelCompletion,
  getOverallProgress,
} from "@/lib/progress-selectors";
import {getLearnerProfile, getLearnerProfileSync, saveLearnerProfile, type LearnerProfile} from "@/lib/storage/learner";
import {LEVELS} from "@/lib/constants/curriculum";
import {cn} from "@/lib/utils";

const LEVEL_EMOJI: Record<string, string> = { A1: "🚀", A2: "🧭", B1: "🎓", B2: "🏆" };
const LEVEL_AR: Record<string, string> = { A1: "المبتدئ", A2: "ما قبل المتوسط", B1: "المتوسط", B2: "المتقدم" };

/**
 * ═══════════════════════════════════════════════════════════
 *  لوحة الرحلة (Learner Journey) — النسخة الاحترافية المنظمة
 *  تسلسل أكاديمي صريح بستة أقسام:
 *  ① وضعك الآن (إحصاءات) ← ② خطوتك التالية (CTA) ← ③ مسارك
 *  ← ④ جلسة اليوم ← ⑤ تطورك ← ⑥ أدواتك وتخصيصك
 *  — لا توهان: كل قسم بعنوان رقمي ووظيفة واحدة واضحة —
 * ═══════════════════════════════════════════════════════════
 */

/** عنوان قسم رقمي: يوجّه المتعلم في التسلسل */
function JourneySection({
  step,
  title,
  subtitle,
  children,
  className,
}: {
  step: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-3", className)} aria-label={title}>
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

export function LearnerJourney() {
  const { completedUnits, completedLessonsSet, sealedLevels, isHydrated } = useProgress();
  // قراءة المرآة فوراً — لا يظهر نموذج الاسم بعد الريفريش أبداً
  const [profile, setProfile] = React.useState<LearnerProfile | null>(() => getLearnerProfileSync());
  const [nameInput, setNameInput] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const [dailyStreak, setDailyStreak] = React.useState(0);
  const [xp, setXp] = React.useState(0);
  const [levelNum, setLevelNum] = React.useState(1);
  const [weekDays, setWeekDays] = React.useState(0);

  React.useEffect(() => {
    getLearnerProfile().then(setProfile);
  }, []);

  // السلسلة اليومية (نشاط حقيقي من الأحداث)
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const {getActivityMap, computeStreak} = await import("@/lib/analytics/heatmap");
        const activity = await getActivityMap();
        if (!cancelled) {
          setDailyStreak(computeStreak(activity));
          // أيام النشاط هذا الأسبوع (الإثنين ← اليوم)
          const now = new Date();
          const day = (now.getDay() + 6) % 7;
          const start = new Date(now);
          start.setDate(now.getDate() - day);
          start.setHours(0, 0, 0, 0);
          let days = 0;
          for (const [k, v] of activity) {
            if (v > 0 && new Date(k + "T00:00:00") >= start) days += 1;
          }
          setWeekDays(days);
        }
      } catch {
        /* تجاهل */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // XP والمستوى من العدادات التراكمية (لا ينقص أبداً)
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const {computeXpSummary} = await import("@/lib/gamification/xp");
        const s = await computeXpSummary();
        if (!cancelled) {
          setXp(s.xp);
          setLevelNum(s.level);
        }
      } catch {
        /* تجاهل */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const firstName = (profile?.name ?? "").trim().split(/\s+/)[0] ?? "";
  const overallPct = isHydrated ? getOverallProgress(completedUnits) : 0;

  /** أول درس لم يُكتمل في المسار الكامل (الاستئناف الحقيقي) */
  const nextLesson = React.useMemo(() => {
    if (!profile) return undefined;
    const incomplete = firstIncompleteLesson([...completedLessonsSet]);
    if (incomplete) {
      return LESSON_META.find((l) => l.id === incomplete.id) ?? undefined;
    }
    // كل الدروس مكتملة → آخر درس
    return LESSON_META[LESSON_META.length - 1];
  }, [profile, completedLessonsSet]);

  /** رسالة تشجيعية حسب السلسلة اليومية */
  const encouragement = React.useMemo(() => {
    if (dailyStreak === 0) return "ابدأ اليوم بدرس واحد — الخطوة الأولى أهم خطوة.";
    if (dailyStreak === 1) return "يوم أول في السلسلة — عظّمها بعادة ثانية غداً!";
    if (dailyStreak === 2) return "يومان متتاليان — أنت تبني عادة حقيقية. 🔥";
    if (dailyStreak === 3) return "3 أيام! الأسبوع الأول في المتناول.";
    if (dailyStreak === 7) return "أسبوع كامل متتالٍ — هذا إنجاز كبير! 🏆";
    if (dailyStreak === 30) return "30 يوماً! أنت الآن في نادي الملتزمين. 🥇";
    if (dailyStreak >= 100) return `${dailyStreak} يوماً متتالياً — أنت أسطورة هذا الطريق! 👑`;
    return `${dailyStreak} أيام متتالية — استمر، العادة صارت أقوى منك.`;
  }, [dailyStreak]);

  const nextIndex = nextLesson ? LESSON_META.findIndex((l) => l.id === nextLesson.id) : -1;

  const handleSubmitName = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameInput.trim();
    if (!name) return;
    setSaving(true);
    const updated = await saveLearnerProfile({ name, onboarded: true });
    setProfile(updated);
    setSaving(false);
  };

  const handleStartLesson = async () => {
    if (nextLesson) await saveLearnerProfile({ lastLessonId: nextLesson.id });
  };

  if (!profile || !isHydrated) return null;

  /* ═══ الحالة 1 — أول دخول: أستاذك يرحب + إدخال الاسم ═══ */
  if (!profile.onboarded) {
    return (
      <div className="space-y-4">
        <TeacherMentor profile={profile} />

        <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-bl from-primary/10 via-card to-gold/10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
          <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                أهلاً بك في «درب الألمانية»
              </p>
              <h2 className="text-balance text-2xl font-extrabold sm:text-3xl">
                رحلتك من <LangDe className="font-extrabold">A1</LangDe> حتى{" "}
                <LangDe className="font-extrabold">B2</LangDe> تبدأ من هنا
              </h2>
              <p className="max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
                {LESSON_META.length} درساً متسلسلاً بقواعدها وتريكاتها وتمارينها وحواراتها، بمنهجية معهد غوته.
                أدخل اسمك لنخصّص رحلتك ونحفظ تقدمك.
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-success/10 px-3 py-1.5 text-xs font-bold text-success">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                مجانية 100% — مدى الحياة، بلا اشتراكات ولا مدفوعات أبداً
              </p>
              <form onSubmit={handleSubmitName} className="flex max-w-md flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <UserPlus className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <Input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="اكتب اسمك الأول… (مثال: نادر)"
                    className="pe-10"
                    aria-label="اسمك الأول"
                  />
                </div>
                <Button type="submit" disabled={!nameInput.trim() || saving} className="gap-1.5">
                  {saving ? "جارٍ…" : "ابدأ رحلتك"}
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            </div>
            <div className="hidden shrink-0 flex-col gap-2 sm:flex">
              {[["01", "درس الأبجدية والنطق"], [String(LESSON_META.length).padStart(2, "0"), "درس حتى شهادة B2"], ["4", "مستويات معتمدة"]].map(([n, t]) => (
                <div key={n} className="flex items-center gap-3 rounded-xl bg-card/60 px-4 py-2.5">
                  <span className="font-de text-lg font-extrabold text-primary">{n}</span>
                  <span className="text-xs font-semibold text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ═══ الحالة 2 — أستاذك حاضر + اختيار نقطة البداية ═══ */
  if (!profile.placementLevel) {
    return (
      <div className="space-y-4">
        <TeacherMentor profile={profile} />

        <Card className="overflow-hidden border-primary/25">
          <div className="h-1.5 w-full bg-gradient-to-l from-primary to-gold" aria-hidden="true" />
          <CardContent className="p-6">
            <div className="mb-5 text-center">
              <h2 className="text-xl font-extrabold">
                مرحباً <span className="text-primary">{firstName}</span> 👋 كيف تريد أن نبدأ؟
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                اختر الطريقة الأنسب لك — كلاهما يقودك لنفس المسار المتكامل.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* الخيار 1: تحديد المستوى */}
              <div className="hover-lift flex flex-col rounded-2xl border border-primary/30 bg-primary/[0.04] p-5 fade-up">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Target className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-center text-base font-extrabold">حدّد مستواك أولاً</h3>
                <p className="mt-1 text-center text-sm text-muted-foreground">
                  أجب عن 15 سؤالاً سريعاً — ونبدأ من أول درس يناسب مستواك الحقيقي.
                </p>
                <div className="mt-2 flex justify-center gap-2 text-[11px] font-semibold text-muted-foreground">
                  <span className="rounded-full bg-muted px-2 py-0.5">⏱ 5 دقائق</span>
                  <span className="rounded-full bg-muted px-2 py-0.5">🎯 نقطة بداية دقيقة</span>
                </div>
                <Button asChild className="btn-glow mt-4 w-full gap-1.5">
                  <Link href="/tests/placement?mode=quick">
                    ابدأ اختبار تحديد المستوى
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              {/* الخيار 2: البدء من الصفر */}
              <div className="hover-lift flex flex-col rounded-2xl border border-gold/30 bg-gold/[0.05] p-5 fade-up">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-strong">
                  <Rocket className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-center text-base font-extrabold">ابدأ من الصفر</h3>
                <p className="mt-1 text-center text-sm text-muted-foreground">
                  لا خبرة سابقة؟ نبدأ من الدرس الأول: الأبجدية والنطق — خطوة بخطوة.
                </p>
                <div className="mt-2 flex justify-center gap-2 text-[11px] font-semibold text-muted-foreground">
                  <span className="rounded-full bg-muted px-2 py-0.5">🚀 من A1 تماماً</span>
                  <span className="rounded-full bg-muted px-2 py-0.5">📚 المسار الكامل</span>
                </div>
                <Button
                  asChild
                  variant="gold"
                  className="btn-glow mt-4 w-full gap-1.5"
                  onClick={() => void saveLearnerProfile({ placementLevel: "A1" })}
                >
                  <Link href="/lesson/a1-00">
                    ابدأ من الدرس الأول
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ═══ الحالة 3 — عائد: لوحة الرحلة الاحترافية المنظمة ═══ */
  const level = profile.placementLevel;
  const allDone = nextLesson ? completedLessonsSet.has(nextLesson.id) : false;

  return (
    <div className="space-y-6">
      {/* أستاذك الخبير — يقود جلستك اليومية */}
      <TeacherMentor profile={profile} />

      {/* ⭐ معلّمك الخاص: خطة جلسة اليوم (درس ← مراجعة ← قصة/بودكاست — تتناوب يومياً) */}
      <DailyPlanCard />

      {/* ① وضعك الآن — إحصاءات فورية */}
      <JourneySection step="١" title="وضعك الآن" subtitle="أرقامك في لمحة">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {/* المستوى الحالي */}
          <div className="flex items-center gap-3 rounded-2xl border bg-card p-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl" aria-hidden="true">
              {LEVEL_EMOJI[level]}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-muted-foreground">مستواك</p>
              <p className="font-de truncate text-sm font-extrabold text-primary">{level} — {LEVEL_AR[level]}</p>
            </div>
          </div>
          {/* التقدم الإجمالي */}
          <div className="flex items-center gap-3 rounded-2xl border bg-card p-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-muted-foreground">تقدمك الكلي</p>
              <p className="font-de text-sm font-extrabold text-success">{overallPct}%</p>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-success" style={{ width: `${overallPct}%` }} />
              </div>
            </div>
          </div>
          {/* السلسلة */}
          <div className="flex items-center gap-3 rounded-2xl border bg-card p-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-strong">
              <Flame className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-muted-foreground">سلسلة أيامك</p>
              <p className="truncate text-sm font-extrabold text-gold-strong">
                {dailyStreak} {dailyStreak === 1 ? "يوم" : "أيام"} 🔥
              </p>
              {/* تقدم الأسبوع: درست X من 5 أيام */}
              <div className="mt-1.5 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((d) => (
                  <span
                    key={d}
                    className={`h-1.5 w-3 rounded-full ${d < weekDays ? "bg-gold" : "bg-muted"}`}
                    aria-hidden="true"
                  />
                ))}
                <span className="ms-1 text-[9px] font-bold text-muted-foreground">{weekDays}/5 أيام</span>
              </div>
            </div>
          </div>
          {/* النقاط */}
          <div className="flex items-center gap-3 rounded-2xl border bg-card p-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <Zap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-muted-foreground">نقاطك XP</p>
              <p className="font-de truncate text-sm font-extrabold text-blue-600">⚡ {xp.toLocaleString("ar-EG")}</p>
              <p className="text-[11px] text-muted-foreground">مستوى {levelNum}</p>
            </div>
          </div>
        </div>
      </JourneySection>

      {/* ② خطوتك التالية — CTA الرئيسي الوحيد */}
      <JourneySection step="٢" title="خطوتك التالية" subtitle="تابع مسارك من حيث انتهيت — بالترتيب">
        {nextLesson ? (
          <Card className="overflow-hidden border-primary/25 bg-gradient-to-l from-primary/[0.07] via-card to-gold/[0.06]">
            <div className="h-1.5 w-full bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* رقم الدرس */}
                <div className="flex shrink-0 items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 font-de text-xl font-extrabold text-primary">
                    {String(nextIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* معلومات الدرس */}
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-de rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">
                      الدرس {nextIndex + 1} من {LESSON_META.length} · {nextLesson.level}
                    </span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">
                      ⏱ {nextLesson.duration} دقيقة
                    </span>
                  </div>
                  <p className="text-lg font-extrabold leading-snug">
                    <LangDe className="font-extrabold">{nextLesson.titleDe}</LangDe>
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">{nextLesson.titleAr}</p>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {nextLesson.summary.split("—")[0]}
                  </p>
                </div>
                {/* زر التقدم */}
                <Button
                  asChild
                  size="lg"
                  className="btn-glow shrink-0 gap-2 px-6"
                  onClick={handleStartLesson}
                >
                  <Link href={`/lesson/${nextLesson.id}`}>
                    <PlayCircle className="h-5 w-5" aria-hidden="true" />
                    {allDone ? "أعد الدرس" : "تابع الدرس"}
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              {/* شريط التقدم الإجمالي */}
              <div className="mt-4 flex items-center gap-3">
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="progress-gradient h-full rounded-full transition-all duration-700" style={{ width: `${overallPct}%` }} />
                </div>
                <span className="font-de shrink-0 text-xs font-extrabold text-primary">{overallPct}%</span>
                <span className="shrink-0 text-[11px] text-muted-foreground">
                  {completedUnits.length} وحدة مكتملة
                </span>
              </div>

              {/* رسالة تشجيع */}
              <p className="mt-3 flex items-center gap-2 rounded-xl bg-gold/10 px-3 py-2 text-sm font-semibold text-gold-strong">
                <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
                {encouragement}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-success/30 bg-success/5 p-6 text-center">
            <span className="text-4xl" aria-hidden="true">🏆</span>
            <h3 className="mt-2 text-lg font-extrabold text-success">أتممت المسار كاملاً!</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              أنت جاهز لاختبارات الختم ومحاكاة Goethe الكاملة.
            </p>
            <Button asChild className="mt-4 gap-2">
              <Link href="/tests/seal/b2">
                <Award className="h-4 w-4" aria-hidden="true" />
                امتحان الختم B2
              </Link>
            </Button>
          </Card>
        )}
      </JourneySection>

      {/* ③ مسارك — المستويات الأربعة */}
      <JourneySection step="٣" title="مسارك" subtitle="أربعة مستويات متسلسلة — أتقن لتفتح التالي">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {LEVELS.map((l) => {
            const lessonComp = getLessonLevelCompletion([...completedLessonsSet], l.code);
            const sealed = (sealedLevels ?? []).includes(l.code);
            return (
              <Link
                key={l.code}
                href={`/level/${l.code.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl" aria-hidden="true">{l.emoji}</span>
                  {sealed && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-extrabold text-success">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                      ختم
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <LangDe className="text-sm font-extrabold group-hover:text-primary">{l.code}</LangDe>
                  <span className="truncate text-[11px] text-muted-foreground">{l.titleAr}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${lessonComp.pct}%`, backgroundColor: l.accent }}
                  />
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {lessonComp.completed}/{lessonComp.total} درس · {lessonComp.pct}%
                </p>
              </Link>
            );
          })}
        </div>
      </JourneySection>

      {/* ④ جلسة اليوم — ممارسة مركزة */}
      <JourneySection step="٤" title="جلسة اليوم" subtitle="اقتراحاتك الذكية + تحدي اليوم">
        <div className="space-y-3">
          <TodaySuggestions profile={profile} />
          <DailyChallengeCard />
        </div>
      </JourneySection>

      {/* ⑤ تطورك — نمو مرئي */}
      <JourneySection step="٥" title="تطورك" subtitle="رتبتك ونموك ومصفوفة إتقانك">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <WeeklyLeague />
          <PredictivePath />
        </div>
        <CertificatePath />
        <GrowthDashboard />
      </JourneySection>

      {/* ⑥ أدواتك وتخصيصك */}
      <JourneySection step="٦" title="أدواتك وتخصيصك" subtitle="خطط، خصّص، احفظ، وادعُ">
        {/* روابط سريعة */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/learning-path">
              <BookOpen className="h-4 w-4" aria-hidden="true" /> خارطة المسار
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/tests/level/a1">
              <Award className="h-4 w-4" aria-hidden="true" /> اختبر تقدمك
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/sound-check">
              <Mic className="h-4 w-4" aria-hidden="true" /> فحص الصوت
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/dashboard/report">
              <FileText className="h-4 w-4" aria-hidden="true" /> تقريرك (PDF)
            </Link>
          </Button>
        </div>

        {/* أدوات الإثراء الجديدة (Vercel مجاني 100% — بلا خادم) */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/picture-dictionary">
              <Images className="h-4 w-4 text-primary" aria-hidden="true" /> المعجم المصوّر
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/conversations">
              <MessagesSquare className="h-4 w-4 text-primary" aria-hidden="true" /> حوار تفاعلي
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/umformung">
              <Wand2 className="h-4 w-4 text-primary" aria-hidden="true" /> تحويل الأزمنة
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="justify-start">
            <Link href="/shop">
              <ShoppingBag className="h-4 w-4 text-gold-strong" aria-hidden="true" /> سوق الجواهر
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <StudyPlan profile={profile} onSaved={setProfile} />
          <JourneyPreferences />
          <BackupCard />
          <InviteCard />
        </div>
      </JourneySection>
    </div>
  );
}

/**
 * ═══════════════════════════════════════════════════════════
 *  حفظ واستعادة مستواك — عند تغيير المتصفح أو الهاتف
 *  يصدّر ملف نسخة (يشمل: اسمك + مستواك + الدروس المكتملة +
 *  البطاقات + الإعدادات) ويستعيده في الجهاز الجديد.
 * ═══════════════════════════════════════════════════════════
 */
function BackupCard() {
  const fileRef = React.useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = React.useState("");

  const exportBackup = async () => {
    try {
      const {buildBackupData, backupFilename, downloadJson} = await import("@/lib/storage/export-import");
      const data = await buildBackupData();
      downloadJson(data, backupFilename());
      setStatus("✅ نُزّل ملف نسختك — احتفظ به (يتضمن اسمك ومستواك وتقدمك)");
      setTimeout(() => setStatus(""), 5000);
    } catch {
      setStatus("⚠️ تعذّر إنشاء النسخة — جرّب من الإعدادات");
    }
  };

  const importBackup = async (file: File) => {
    try {
      const {validateBackupData, writeBackupData} = await import("@/lib/storage/export-import");
      const parsed = JSON.parse(await file.text());
      if (!validateBackupData(parsed)) {
        setStatus("⚠️ الملف غير صالح — تأكد أنه ملف نسخة DeutschPfad");
        setTimeout(() => setStatus(""), 5000);
        return;
      }
      const ok = window.confirm(
        "استعادة النسخة؟\n«موافق» = دمج مع بياناتك الحالية\n«إلغاء» = استبدال كامل",
      );
      await writeBackupData(parsed, ok ? "merge" : "replace");
      setStatus("✅ تمت الاستعادة — أعد تحميل الصفحة لترى مستواك");
      setTimeout(() => window.location.reload(), 1200);
    } catch {
      setStatus("⚠️ فشلت الاستعادة — تأكد من الملف");
    }
  };

  return (
    <Card className="overflow-hidden border-muted">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-success/15 text-success">
            <DatabaseBackup className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-extrabold">احفظ مستواك — وانتقل لأي جهاز</h3>
            <p className="text-xs text-muted-foreground">
              غيّرت المتصفح أو الهاتف؟ صدّر نسخة، واسترجعها في الجهاز الجديد بضغطة.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="outline" size="sm" onClick={exportBackup} className="justify-start text-primary">
            <DatabaseBackup className="h-4 w-4" aria-hidden="true" />
            صدّر نسخة (اسمك + مستواك + تقدمك)
          </Button>
          <Button variant="ghost" size="sm" onClick={() => fileRef.current?.click()} className="justify-start text-muted-foreground">
            <Upload className="h-4 w-4" aria-hidden="true" />
            استرجع نسخة محفوظة…
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void importBackup(f);
              e.target.value = "";
            }}
            aria-label="اختر ملف النسخة الاحتياطية"
          />
        </div>

        {status && <p className="rounded-lg bg-muted/30 px-3 py-2 text-xs font-semibold text-foreground">{status}</p>}
      </CardContent>
    </Card>
  );
}
