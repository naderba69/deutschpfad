"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  DatabaseBackup,
  FileText,
  Flame,
  GraduationCap,
  Mic,
  PlayCircle,
  Rocket,
  Sparkles,
  Target,
  Upload,
  UserPlus,
} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {TeacherMentor} from "@/components/home/teacher-mentor";
import {StudyPlan} from "@/components/home/study-plan";
import {TodaySuggestions} from "@/components/home/today-suggestions";
import {DailyChallengeCard} from "@/components/home/daily-challenge-card";
import {GrowthDashboard} from "@/components/home/growth-dashboard";
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
  getLevelCompletion,
  getOverallProgress,
} from "@/lib/progress-selectors";
import {getLearnerProfile, saveLearnerProfile, type LearnerProfile} from "@/lib/storage/learner";
import {LEVELS} from "@/lib/constants/curriculum";

const LEVEL_EMOJI: Record<string, string> = { A1: "🚀", A2: "🧭", B1: "🎓", B2: "🏆" };
const LEVEL_AR: Record<string, string> = { A1: "المبتدئ", A2: "ما قبل المتوسط", B1: "المتوسط", B2: "المتقدم" };

/**
 * ═══════════════════════════════════════════════════════════
 *  لوحة الرحلة (Learner Journey) — أول ما يراه المتعلم
 *  1) ترحيب باسمه في أول دخول
 *  2) إن كان له مكاسب سابقة: استئناف + ملخص التقدم
 *  3) تحديد المستوى إن لم يحدده بعد
 *  4) «الدرس التالي في مسارك» — نقطة الانطلاق الدائمة
 * ═══════════════════════════════════════════════════════════
 */
export function LearnerJourney() {
  const { completedUnits, completedLessonsSet, sealedLevels, isHydrated } = useProgress();
  const [profile, setProfile] = React.useState<LearnerProfile | null>(null);
  const [nameInput, setNameInput] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const [dailyStreak, setDailyStreak] = React.useState(0);
  const [skillStats, setSkillStats] = React.useState<{ correct: number; total: number } | null>(null);

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
        if (!cancelled) setDailyStreak(computeStreak(activity));
      } catch {
        /* تجاهل */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // مصفوفة الإتقان: دقة إجابات التمارين (قواعد/مفردات/استماع…)
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(500);
        const ex = events.filter((e) => e.type === "exercise-result");
        const correct = ex.filter((e) => e.correct).length;
        if (!cancelled) setSkillStats({ correct, total: ex.length });
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

  /* ═══ الحالة 1 — أول دخول: أستاذك يرحب من أول لحظة + إدخال الاسم ═══ */
  if (!profile.onboarded) {
    return (
      <div className="space-y-4">
        {/* أستاذك الخبير — حاضر من أول لحظة */}
        <TeacherMentor profile={profile} />

      <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-bl from-primary/10 via-card to-gold/10">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
        <CardContent className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
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
              46 درساً متسلسلاً بقواعدها وتريكاتها وتمارينها وحواراتها، بمنهجية معهد غوته.
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
                  autoFocus
                />
              </div>
              <Button type="submit" disabled={!nameInput.trim() || saving} className="gap-1.5">
                {saving ? "جارٍ…" : "ابدأ رحلتك"}
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          </div>
          <div className="hidden shrink-0 flex-col gap-2 sm:flex">
            {[["01", "درس الأبجدية والنطق"], ["46", "درس الدراسة في ألمانيا"], ["4", "مستويات معتمدة"]].map(([n, t]) => (
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
        {/* أستاذك الخبير — يوجّهك للاختيار */}
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

          <div className="grid gap-4 sm:grid-cols-2">
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

  /* ═══ الحالة 3 — عائد بمكاسب: أستاذك يقود جلستك ═══ */
  const level = profile.placementLevel;
  return (
    <div className="space-y-4">
      {/* أستاذك الخبير — يقود جلستك اليومية (راجع ← تعلّم ← درّب ← قيّم) */}
      <TeacherMentor profile={profile} />
      {/* بطاقة الاستئناف الرئيسية */}
      <Card className="overflow-hidden border-primary/25">
        <div className="h-1.5 w-full bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
        <CardContent className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold">
                أهلاً بعودتك <span className="text-primary">{firstName}</span> 👋
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                {LEVEL_EMOJI[level]} مستواك: {LEVEL_AR[level]}
              </span>
              {dailyStreak > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-xs font-extrabold text-gold-strong">
                  <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                  {dailyStreak} {dailyStreak === 1 ? "يوم" : "أيام"} متتالية
                </span>
              )}
            </div>

            {nextLesson && (
              <div className="flex flex-wrap items-center gap-3 rounded-xl border border-primary/20 bg-primary/[0.03] p-3.5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-de text-sm font-extrabold text-primary">
                  {String(nextIndex + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-muted-foreground">
                    {overallPct > 0 ? "استأنف من حيث توقفت — درسك التالي" : "نقطة بدايتك في السلسلة"}
                  </p>
                  <p className="truncate text-sm font-bold">
                    <LangDe className="font-bold">{nextLesson.titleDe}</LangDe>
                    <span className="ms-2 text-xs font-medium text-muted-foreground">{nextLesson.titleAr}</span>
                  </p>
                </div>
                <Button asChild size="sm" className="gap-1.5" onClick={handleStartLesson}>
                  <Link href={`/lesson/${nextLesson.id}`}>
                    <PlayCircle className="h-4 w-4" aria-hidden="true" />
                    تابع
                  </Link>
                </Button>
              </div>
            )}

            {/* شريط التقدم الإجمالي */}
            <div className="flex items-center gap-3 pt-1">
              <Progress value={overallPct} className="h-2.5" aria-label={`التقدم الإجمالي ${overallPct}%`} />
              <span className="font-de shrink-0 text-sm font-extrabold text-primary">{overallPct}%</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {completedUnits.length} وحدة مكتملة
              </span>
            </div>

            {/* رسالة تشجيع يومية */}
            <p className="flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-2 text-sm font-semibold text-gold-strong">
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
              {encouragement}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2">
            <Button asChild variant="outline" size="sm" className="justify-start text-primary">
              <Link href="/learning-path">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                خارطة المسار كاملة
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="justify-start text-primary">
              <Link href="/tests/level/a1">
                <Award className="h-4 w-4" aria-hidden="true" />
                اختبر تقدمك
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="justify-start text-primary">
              <Link href="/sound-check">
                <Mic className="h-4 w-4" aria-hidden="true" />
                فحص الصوت والميكروفون
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="justify-start text-primary">
              <Link href="/dashboard/report">
                <FileText className="h-4 w-4" aria-hidden="true" />
                تقرير تقدمك (PDF)
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="justify-start text-muted-foreground">
              <Link href="/dashboard">
                <Award className="h-4 w-4" aria-hidden="true" />
                لوحة التحكم والإحصائيات
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ملخص سريع: المستويات + ختم */}
      <div className="grid gap-2 sm:grid-cols-4">
        {LEVELS.map((l) => {
          const lessonComp = getLessonLevelCompletion([...completedLessonsSet], l.code);
          const sealed = (sealedLevels ?? []).includes(l.code);
          return (
            <div key={l.code} className="flex items-center gap-2 rounded-xl border border-muted bg-card px-3 py-2.5">
              <span className="text-lg" aria-hidden="true">{l.emoji}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <LangDe className="text-xs font-extrabold">{l.code}</LangDe>
                  {sealed && <CheckCircle2 className="h-3.5 w-3.5 text-success" aria-hidden="true" />}
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${lessonComp.pct}%`, backgroundColor: l.accent }}
                  />
                </div>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {lessonComp.completed}/{lessonComp.total} درس
                </p>
              </div>
              <span className="font-de shrink-0 text-[10px] font-bold text-muted-foreground">{lessonComp.pct}%</span>
            </div>
          );
        })}
      </div>

      {/* اقتراحات اليوم (مراجعة ذكية + تراكمية + تذكير + أسبوعي + أخطاء) */}
      <TodaySuggestions profile={profile} />

      {/* تحدي اليوم — 5 أسئلة سريعة */}
      <DailyChallengeCard />

      {/* تطورك — نمو مرئي (أشرطة + إحصاءات + شارات) */}
      <GrowthDashboard />

      {/* مصفوفة الإتقان (دقة التمارين) */}
      {skillStats && skillStats.total > 0 && (
        <div className="rounded-xl border border-muted bg-card px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-bold text-muted-foreground">مصفوفة إتقانك — دقة إجابات التمارين</p>
            <span className="font-de text-sm font-extrabold text-primary">
              {Math.round((skillStats.correct / skillStats.total) * 100)}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-l from-primary to-success"
              style={{ width: `${(skillStats.correct / skillStats.total) * 100}%` }}
            />
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {skillStats.correct} إجابة صحيحة من {skillStats.total} — تحسّن يتراكم مع كل تمرين.
          </p>
        </div>
      )}

      {/* خطة الدراسة + تخصيص الرحلة + حفظ/استعادة المستوى */}
      <div className="grid gap-4 lg:grid-cols-3">
        <StudyPlan profile={profile} onSaved={setProfile} />
        <JourneyPreferences />
        <BackupCard />
      </div>
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
