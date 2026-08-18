"use client";

import * as React from "react";
import Link from "next/link";
import {ArrowLeft, ArrowRight, Award, CheckCircle2, Clock, ListChecks, Printer, Sparkles, TableProperties, Trophy} from "lucide-react";

import {LESSON_SECTIONS} from "@/components/lesson/lesson-sections";
import {LESSON_META} from "@/data/lessons/meta";
import {useProgress} from "@/components/providers/progress-provider";
import {isLevelLessonsDone, getLessonLevelCompletion} from "@/lib/progress-selectors";
import {InterleavingReview} from "@/components/lesson/sections/interleaving-review";
import {buildInterleavedReview, PREVIOUS_LEVEL_LABEL} from "@/lib/lesson/review-generator";
import {AusspracheSection} from "@/components/lesson/sections/aussprache";
import {EinfuehrungSection} from "@/components/lesson/sections/einfuehrung";
import {FehlerUndTippsSection} from "@/components/lesson/sections/fehler-und-tipps";
import {HoerverstehenSection} from "@/components/lesson/sections/hoerverstehen";
import {InteraktiveUebungenSection} from "@/components/lesson/sections/interaktive-uebungen";
import {InteractionSection, MediationSection} from "@/components/lesson/sections/mediation-interaction";
import {LernkartenSection} from "@/components/lesson/sections/lernkarten";
import {LernzieleSection} from "@/components/lesson/sections/lernziele";
import {MiniTestSection} from "@/components/lesson/sections/mini-test";
import {LessonSummary} from "@/components/lesson/sections/lesson-summary";
import {SchreibenSection} from "@/components/lesson/sections/schreiben";
import {TheorieSection} from "@/components/lesson/sections/theorie";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {StarkeVerbenTable} from "@/components/verbs/starke-verben-table";
import {cn} from "@/lib/utils";
import type { Exercise, Lesson } from "@/types/lesson";

const LEVEL_LABEL: Record<string, string> = {
  A1: "المبتدئ",
  A2: "ما قبل المتوسط",
  B1: "المتوسط",
  B2: "المتقدم",
};

/**
 * بطاقة إكمال الدرس — زر «أتممت هذا الدرس» (يُحفظ في التقدم)
 * + انتقال تلقائي للدرس التالي بعد 3 ثوانٍ (يمكن إلغاؤه)
 * + اقتراح امتحان الختم عند إتمام آخر درس في المستوى.
 */
function LessonCompletion({ lesson }: { lesson: Lesson }) {
  const { completedLessonsSet, completeLesson, uncompleteLesson } = useProgress();
  const [autoCount, setAutoCount] = React.useState<number | null>(null);
  const [teacherWord, setTeacherWord] = React.useState<string | null>(null);
  const done = completedLessonsSet.has(lesson.id);
  const level = lesson.level as "A1" | "A2" | "B1" | "B2";
  const index = LESSON_META.findIndex((l) => l.id === lesson.id);
  const next = index >= 0 && index < LESSON_META.length - 1 ? LESSON_META[index + 1] : undefined;

  // كلمة الأستاذ بعد الدرس (حسب شخصية المعلّم) — تُحمَّل عند الإتمام
  React.useEffect(() => {
    if (!done) return;
    void (async () => {
      try {
        const {getPersonality, motivationalByPersonality} = await import("@/lib/storage/teacher-personality");
        const p = await getPersonality();
        const core = motivationalByPersonality(p, "success");
        const nextPart = next ? ` \nالدرس القادم: «${next.titleAr}» — سنبني عليه مباشرة.` : " \nأتممت المسار الكامل — أنت جاهز لاختبار الختم! 🏆";
        setTeacherWord(`${core}${nextPart}`);
      } catch {
        setTeacherWord(next ? `أحسنت! الدرس القادم: «${next.titleAr}».` : "أحسنت! أتممت المسار الكامل!");
      }
    })();
  }, [done, next]);

  // عدّ تنازلي 3 ثوانٍ ثم انتقل للدرس التالي
  React.useEffect(() => {
    if (autoCount === null) return;
    if (autoCount <= 0) {
      setAutoCount(null);
      if (next) window.location.href = `/lesson/${next.id}`;
      return;
    }
    const t = window.setTimeout(() => setAutoCount((c) => (c === null ? null : c - 1)), 1000);
    return () => window.clearTimeout(t);
  }, [autoCount, next]);

  return (
    <div className="mt-10 rounded-2xl border bg-muted/10 p-5">
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-start">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
              done ? "bg-success/15 text-success" : "bg-primary/10 text-primary"
            }`}
          >
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold">
              {done ? "أتممت هذا الدرس — أحسنت! 🎉" : "هل أتممت هذا الدرس؟"}
            </p>
            <p className="text-xs text-muted-foreground">
              {done
                ? "يُحفظ إنجازك في مسارك، ويمضي «الدرس التالي» من حيث انتهيت."
                : "اضغط للإشارة إلى إتمامه — سيُحفظ في مسارك وتتقدّم السلسلة."}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-2 sm:items-end">
          {done ? (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button variant="outline" size="sm" onClick={() => uncompleteLesson(lesson.id)}>
                تراجع عن الإكمال
              </Button>
              {autoCount !== null ? (
                <Button size="sm" variant="secondary" onClick={() => setAutoCount(null)}>
                  إلغاء ({autoCount}…)
                </Button>
              ) : next ? (
                <Button size="sm" className="gap-1.5" onClick={() => setAutoCount(3)}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  الدرس التالي تلقائياً (3)
                </Button>
              ) : null}
            </div>
          ) : (
            <Button
              size="sm"
              className="gap-1.5"
              onClick={() => {
                completeLesson(lesson.id);
                void import("@/lib/analytics/events").then(({recordEvent}) =>
                  recordEvent({ type: "lesson-completed", lessonId: lesson.id, unitId: lesson.unitId, ts: Date.now() }),
                );
                // مكافأة إتمام الدرس: جواهر
                void import("@/lib/gamification/gems").then(({addGems, GEM_REWARDS}) =>
                  addGems(GEM_REWARDS.LESSON_COMPLETED),
                );
                // اقتراح الانتقال التلقائي
                if (next) setAutoCount(3);
              }}
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              أتممت هذا الدرس
            </Button>
          )}

          {done && teacherWord && (
            <div className="mt-3 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
              <span className="text-xl" aria-hidden="true">🎓</span>
              <div>
                <p className="text-[11px] font-bold text-primary">كلمة أستاذك بعد الدرس</p>
                <p className="mt-0.5 whitespace-pre-line text-sm leading-relaxed text-foreground">{teacherWord}</p>
              </div>
            </div>
          )}

          {done && (
            <div className="mt-3 grid grid-cols-1 w-full gap-2 rounded-xl bg-card/60 p-3 sm:grid-cols-3">
              <div className="text-center">
                <p className="font-de text-lg font-extrabold text-primary">{lesson.theory.length}</p>
                <p className="text-[11px] font-bold text-muted-foreground">كتل نظرية (قواعد + تريكات)</p>
              </div>
              <div className="text-center">
                <p className="font-de text-lg font-extrabold text-primary">{lesson.practiceBank.length + lesson.writing.length}</p>
                <p className="text-[11px] font-bold text-muted-foreground">تمريناً تفاعلياً</p>
              </div>
              <div className="text-center">
                <p className="font-de text-lg font-extrabold text-success">{lesson.flashcards.length}</p>
                <p className="text-[11px] font-bold text-muted-foreground">بطاقة مراجعة</p>
              </div>
            </div>
          )}

          {/* اقتراح امتحان الختم عند إتمام كل دروس المستوى */}
          {done && isLevelLessonsDone([...completedLessonsSet], level) && (
            <div className="mt-1 flex items-center gap-2 rounded-lg bg-gold/15 px-3 py-1.5 text-xs font-bold text-gold-strong">
              🏅 أتممت كل دروس {level}
              <Link href={`/tests/seal/${level.toLowerCase()}`} className="underline hover:opacity-80">
                امتحان الختم
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * مؤشر موضع الدرس في المسار الكامل: «الدرس 12 من 48».
 */
function LessonPosition({ lessonId }: { lessonId: string }) {
  const index = LESSON_META.findIndex((l) => l.id === lessonId);
  if (index === -1) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 font-de text-[11px] font-bold text-muted-foreground">
      {index + 1} / {LESSON_META.length}
    </span>
  );
}

/**
 * شريط هدف اليوم — يذكّر المتعلم بهدفه اليومي ويظهر تقدّم إكمال الدرس.
 */
function DailyGoalBar({ duration }: { duration: number }) {
  const [profile, setProfile] = React.useState<{ dailyGoalMinutes?: number; studyHour?: number } | null>(null);

  React.useEffect(() => {
    void import("@/lib/storage/learner").then(({getLearnerProfile}) => getLearnerProfile().then(setProfile));
  }, []);

  if (!profile) return null;
  const goal = profile.dailyGoalMinutes ?? 20;
  const studyHour = profile.studyHour;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2.5 text-sm">
      <span className="text-base" aria-hidden="true">🎯</span>
      <p className="text-sm font-semibold">
        هدف اليوم: <span className="font-de font-extrabold text-gold-strong">{goal} دقيقة</span>
        {studyHour !== undefined && (
          <span className="ms-2 text-muted-foreground">
            · وقتك المفضل: <span className="font-de font-bold">{String(studyHour).padStart(2, "0")}:00</span>
          </span>
        )}
        <span className="ms-2 text-muted-foreground">
          · هذا الدرس ≈ <span className="font-de font-bold">{duration} دقيقة</span>
        </span>
      </p>
    </div>
  );
}

/**
 * شريط التنقل بين الدروس — يجد الدرس الحالي في المسار الكامل
 * ويعرض «الدرس السابق / التالي» للانتقال المباشر (من a1-00 حتى b2-10).
 */
function LessonPrevNext({ lessonId }: { lessonId: string }) {
  const index = LESSON_META.findIndex((l) => l.id === lessonId);
  if (index === -1) return null;
  const prev = index > 0 ? LESSON_META[index - 1] : undefined;
  const next = index < LESSON_META.length - 1 ? LESSON_META[index + 1] : undefined;

  return (
    <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/lesson/${prev.id}`}
          className="group flex items-center gap-3 rounded-xl border border-muted bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
        >
          <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-muted-foreground">الدرس السابق</p>
            <p className="truncate text-sm font-bold">
              <LangDe className="font-bold">{prev.titleDe}</LangDe>
            </p>
            <p className="truncate text-xs text-muted-foreground">{prev.titleAr}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/lesson/${next.id}`}
          className="group flex items-center justify-end gap-3 rounded-xl border border-primary/25 bg-primary/[0.04] p-4 text-start transition-colors hover:bg-primary/[0.08]"
        >
          <div className="min-w-0 text-end">
            <p className="text-[11px] font-bold text-primary">الدرس التالي — تابع المسار</p>
            <p className="truncate text-sm font-bold">
              <LangDe className="font-bold">{next.titleDe}</LangDe>
            </p>
            <p className="truncate text-xs text-muted-foreground">{next.titleAr}</p>
          </div>
          <ArrowLeft className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        </Link>
      ) : (
        <div className="flex items-center justify-end">
          <Link
            href="/learning-path#path-b2"
            className="inline-flex items-center gap-1.5 rounded-xl border border-success/40 bg-success/10 px-4 py-3 text-sm font-bold text-success transition-colors hover:bg-success/15"
          >
            🎓 أتممت المسار الكامل — عد لخارطة الطريق
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}

/**
 * هيكل الدرس الموحد — يقدّم المكونات العشرة بالتسلسل البيداغوجي
 * مع متصفح أقسام علوي وشريط تقدم
 */
export function LessonClient({ lesson }: { lesson: Lesson }) {
  // سياق التقدم: لتصحيح الإكمال عند «أكمل الدرس» في وضع التدفق
  const { completedLessonsSet, completeLesson } = useProgress();
  const [visited, setVisited] = React.useState<Set<string>>(new Set(["lernziele"]));
  const [focusMode, setFocusMode] = React.useState(false);
  // إشعار الانتقال بعد إتمام الدرس (شريط لاصق أعلى الصفحة)
  const [completionNotice, setCompletionNotice] = React.useState<{ title: string; sub: string; href: string } | null>(null);

  // تتبع «آخر درس» تلقائياً — يعيدك إليه عند العودة (لوحة الرحلة)
  // + تسجيل نشاط اليوم (يُفعّل السلسلة اليومية 🔥)
  React.useEffect(() => {
    void import("@/lib/storage/learner").then(({saveLearnerProfile}) =>
      saveLearnerProfile({ lastLessonId: lesson.id }),
    );
    void import("@/lib/analytics/events").then(({recordEvent}) =>
      recordEvent({ type: "lesson-view", lessonId: lesson.id, ts: Date.now() }),
    );
  }, [lesson.id]);
  const [currentSection, setCurrentSection] = React.useState(0);
  // وضع الخطوات التفاعلي: قسم واحد في كل مرة (الافتراضي) أم عرض الكل
  const [stepMode, setStepMode] = React.useState<boolean>(true);

  // ═══ المراجعة التراكمية: يدوية أو مولّدة من الدروس السابقة (تغطي كل الدروس) ═══
  const [reviewQuestions, setReviewQuestions] = React.useState<Exercise[]>([]);
  const [reviewLoaded, setReviewLoaded] = React.useState(false);
  React.useEffect(() => {
    let cancelled = false;
    void buildInterleavedReview(lesson).then((q) => {
      if (cancelled) return;
      setReviewQuestions(q);
      setReviewLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [lesson]);

  // استرجاع الخطوة المحفوظة لكل درس (يستأنف من حيث توقف)
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(`lesson-step:${lesson.id}`);
      if (saved) {
        const n = Number(saved);
        if (Number.isFinite(n) && n > 0) setCurrentSection(Math.min(n, sectionDefs.length - 1));
      }
    } catch {
      /* تجاهل */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  // حفظ الخطوة الحالية
  React.useEffect(() => {
    try {
      window.localStorage.setItem(`lesson-step:${lesson.id}`, String(currentSection));
    } catch {
      /* تجاهل */
    }
  }, [currentSection, lesson.id]);

  const sectionDefs = LESSON_SECTIONS.filter(
    (def) =>
      (def.id !== "review" || (reviewLoaded && reviewQuestions.length > 0)) &&
      (def.id !== "verben" || lesson.level === "B1" || lesson.level === "B2") &&
      /* ═══ الوساطة والتفاعل: تُعرضان فقط إذا كان الدرس يحتويهما ═══ */
      (def.id !== "mediation" || (lesson.mediation && lesson.mediation.length > 0)) &&
      (def.id !== "interaction" || (lesson.interaction && lesson.interaction.length > 0)),
  );
  const total = sectionDefs.length;
  const progressPct = Math.round((visited.size / total) * 100);

  const markVisited = (id: string) => {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    const def = sectionDefs[clamped];
    // ═══ تسلسل صارم: في وضع «خطوة بخطوة» يُسمح بالخطوة التالية مباشرة،
    // ويمنع القفز لخطوتين أو أكثر للأمام (لا تخطي في المسار) ═══
    if (stepMode && clamped > currentSection + 1) return;
    setCurrentSection(clamped);
    markVisited(def.id);
    // التمرير لأول المحتوى يتم في useEffect أدناه (بعد اكتمال الرندر)
  };

  // ═══ إصلاح السكرول: عند تغيير القسم ننتقل تلقائياً «لأول المحتوى» ═══
  // يُنفَّذ بعد اكتمال الرندر (useEffect) لا قبله (requestAnimationFrame)
  // حتى يجد العنصر الجديد موجوداً فعلاً ويمرّر لأعلى بطاقته دائماً.
  const firstSectionRender = React.useRef(true);
  React.useEffect(() => {
    if (firstSectionRender.current) {
      firstSectionRender.current = false;
      return;
    }
    const targetId = stepMode
      ? "lesson-step-content"
      : `lesson-section-${sectionDefs[currentSection]?.id}`;
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection, stepMode]);

  /** ═══ إتمام الدرس: يسجّل الإنجاز + انتقال تلقائي للدرس التالي ═══
      (بعد إتمام كل المكونات الـ12 في وضع الخطوات) */
  const handleCompleteLesson = () => {
    if (!completedLessonsSet.has(lesson.id)) {
      completeLesson(lesson.id);
      void import("@/lib/analytics/events").then(({recordEvent}) =>
        recordEvent({ type: "lesson-completed", lessonId: lesson.id, unitId: lesson.unitId, ts: Date.now() }),
      );
      void import("@/lib/gamification/gems").then(({addGems, GEM_REWARDS}) =>
        addGems(GEM_REWARDS.LESSON_COMPLETED),
      );
    }
    // انتقال تسلسلي: الدرس التالي تلقائياً
    const idx = LESSON_META.findIndex((l) => l.id === lesson.id);
    const nextL = idx >= 0 && idx < LESSON_META.length - 1 ? LESSON_META[idx + 1] : undefined;
    if (nextL) {
      setCompletionNotice({
        title: "🎉 أُنجز الدرس بنجاح!",
        sub: `جارٍ الانتقال إلى الدرس التالي: «${nextL.titleAr}»…`,
        href: `/lesson/${nextL.id}`,
      });
      window.setTimeout(() => {
        window.location.href = `/lesson/${nextL.id}`;
      }, 2500);
    } else {
      setCompletionNotice({
        title: "🏆 أتممت المسار كاملاً!",
        sub: "أنت جاهز لامتحانات الختم ومحاكاة Goethe الكاملة.",
        href: "/tests/seal/b2",
      });
      document.getElementById("lesson-complete")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const renderSection = (id: string) => {
    switch (id) {
      case "lernziele":
        return <LernzieleSection lernziele={lesson.lernziele} />;
      case "einfuehrung":
        return <EinfuehrungSection einfuehrung={lesson.einfuehrung} />;
      case "review":
        return (
          <InterleavingReview
            review={reviewQuestions}
            levelLabel={PREVIOUS_LEVEL_LABEL[lesson.level] ?? "مستوى سابق"}
          />
        );
      case "theorie":
        return <TheorieSection blocks={lesson.theory} lessonId={lesson.id} />;
      case "verben":
        return (
          <Card className="overflow-hidden">
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TableProperties className="h-5 w-5 text-primary" aria-hidden="true" />
                جدول الأفعال الشاذة (مرجع سريع)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <StarkeVerbenTable compact />
            </CardContent>
          </Card>
        );
      case "hoerverstehen":
        return (
          <HoerverstehenSection
            items={lesson.listening.items}
            questions={lesson.listening.questions}
          />
        );
      case "aussprache":
        return <AusspracheSection focus={lesson.pronunciation} />;
      case "schreiben":
        return <SchreibenSection exercises={lesson.writing} lesson={lesson} />;
      case "uebungen":
        return <InteraktiveUebungenSection bank={lesson.practiceBank} />;
      case "fehler":
        return <FehlerUndTippsSection data={lesson.fehlerUndTipps} />;
      case "minitest":
        return (
          <MiniTestSection
            questions={lesson.miniTest}
            unitId={lesson.unitId}
            lessonId={lesson.id}
            flashcards={lesson.flashcards}
            lessonDone={completedLessonsSet.has(lesson.id)}
          />
        );
      case "lernkarten":
        return <LernkartenSection flashcards={lesson.flashcards} />;
      case "mediation":
        return <MediationSection tasks={lesson.mediation ?? []} />;
      case "interaction":
        return <InteractionSection tasks={lesson.interaction ?? []} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      {/* ترويسة الدرس */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/learning-path" className="rounded-lg py-1 text-sm text-muted-foreground hover:text-primary">
            ← مسار التعلم
          </Link>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline" className="font-de font-bold">
            {lesson.level}
          </Badge>
          <LessonPosition lessonId={lesson.id} />
          <Button
            variant={focusMode ? "default" : "ghost"}
            size="sm"
            onClick={() => setFocusMode((v) => !v)}
            className="gap-1.5 text-xs"
            aria-pressed={focusMode}
            aria-label="وضع التركيز: إخفاء التنقل الداخلي"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {focusMode ? "خروج من التركيز" : "وضع التركيز"}
          </Button>
          <Badge variant="secondary">
            {LEVEL_LABEL[lesson.level] ?? lesson.level}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            ~{lesson.duration} دقيقة
          </span>
        </div>

        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          <LangDe className="font-extrabold">{lesson.titleDe}</LangDe>
        </h1>
        <p className="text-base text-muted-foreground">{lesson.titleAr}</p>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{lesson.summary}</p>

        {/* ربط المعلّم الافتراضي بسياق الدرس */}
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="outline" size="sm" className="gap-1.5 text-primary">
            <Link href={`/assistant?lesson=${lesson.id}`}>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              اسأل المعلّم عن هذا الدرس
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 print:hidden"
            onClick={() => window.print()}
            title={'احفظ الدرس كملف PDF (اختر "حفظ كـ PDF" من نافذة الطباعة)'}
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            طباعة / PDF
          </Button>
        </div>

        {/* شريط التقدم */}
        <div className="flex items-center gap-3">
          <Progress value={progressPct} className="h-2" aria-label={`تقدم الدرس ${progressPct}%`} />
          <span className="font-de shrink-0 text-sm font-bold text-primary">{progressPct}%</span>
        </div>
      </div>

      {/* ═══ شريط الانتقال بعد الإتمام — يظهر عند ضغط «أكمل الدرس» ═══ */}
      {completionNotice && (
        <div className="sticky top-16 z-40 -mx-4 mb-4 border-y-2 border-success/40 bg-success/95 px-4 py-3 text-center shadow-lg backdrop-blur-md sm:mx-0 sm:rounded-2xl sm:border-2">
          <p className="text-base font-extrabold text-white">{completionNotice.title}</p>
          <p className="mt-0.5 text-sm font-semibold text-white/90">{completionNotice.sub}</p>
          <div className="mx-auto mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/25">
            <div className="h-full animate-[progressbar_2.5s_linear_forwards] rounded-full bg-white" />
          </div>
        </div>
      )}

      {/* متصفح الأقسام العشرة — شريط علوي (لاصق في وضع «عرض الكل» فقط؛
          في وضع «خطوة بخطوة» يبقى عادياً كي لا يتكدس فوق شريط التقدم اللاصق) */}
      {!focusMode && (
      <div
        className={`${
          stepMode ? "" : "sticky top-16 z-30"
        } -mx-4 mb-6 border-y bg-background/90 px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border`}
      >
        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap">
          {sectionDefs.map((def, i) => {
            const isVisited = visited.has(def.id);
            const isCurrent = i === currentSection;
            return (
              <button
                key={def.id}
                type="button"
                onClick={() => goTo(i)}
                disabled={stepMode && !isVisited && !isCurrent}
                aria-current={isCurrent ? "step" : undefined}
                title={
                  stepMode && !isVisited && !isCurrent
                    ? "أتمّ القسم الحالي لفتح هذا القسم — لا تخطي في المسار"
                    : undefined
                }
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors",
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground"
                    : isVisited
                      ? "border-success/40 bg-success/10 text-success hover:border-success/60"
                      : stepMode
                        ? "cursor-not-allowed bg-muted/20 text-muted-foreground/50"
                        : "bg-muted/40 text-muted-foreground hover:border-primary/40",
                )}
              >
                <def.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {def.short}
                {isVisited && !isCurrent && <CheckCircle2 className="h-3 w-3" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
      )}

      {/* ═══ هدف اليوم + مراجعة قبل النسيان ═══ */}
      <DailyGoalBar duration={lesson.duration} />

      {/* ═══ وضع العرض: خطوة بخطوة (تفاعلي) أم عرض الكل ═══ */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-bold text-muted-foreground">
          {stepMode
            ? `الخطوة ${currentSection + 1} من ${total} — ${sectionDefs[currentSection]?.label ?? ""}`
            : "جميع خطوات الدرس معاً"}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStepMode((v) => !v)}
          className="gap-1.5 text-xs"
          aria-pressed={stepMode}
        >
          <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
          {stepMode ? "عرض الكل" : "خطوة بخطوة"}
        </Button>
      </div>

      {stepMode ? (
        /* ═══ وضع «خطوة بخطوة» الكامل: كل الأقسام البيداغوجية بالترتيب ═══
           (الأهداف ← التمهيد ← المراجعة ← الشرح ← الاستماع ← النطق ←
            الكتابة ← التدريبات ← الأخطاء والحيل ← التقييم ← البطاقات) */
        <div className="space-y-4">
          {/* شريط التقدم اللاصق — يبقى مرئياً دائماً حتى في السكرول الطويل */}
          <div className="sticky top-16 z-30 flex items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
            <Progress value={progressPct} className="h-2.5 flex-1" aria-label={`الخطوة ${currentSection + 1} من ${total}`} />
            <span className="font-de shrink-0 text-sm font-extrabold text-primary">{currentSection + 1}/{total}</span>
            <span className="max-w-24 shrink-0 truncate rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
              {sectionDefs[currentSection].short}
            </span>
          </div>

          {/* القسم الحالي — كل مكوّن كامل لا مختصر */}
          <div key={currentSection} id="lesson-step-content" className="lesson-step-enter fade-up scroll-mt-32 rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
            <div className="mb-4 flex items-center gap-3 border-b pb-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-de text-sm font-extrabold text-primary">
                {currentSection + 1}
              </span>
              <div className="min-w-0">
                <h2 className="text-lg font-extrabold">{sectionDefs[currentSection].label}</h2>
                <p className="text-[11px] text-muted-foreground">
                  الخطوة {currentSection + 1} من {total} — أتمّها لتنتقل للتالية
                </p>
              </div>
              {completedLessonsSet.has(lesson.id) && (
                <CheckCircle2 className="ms-auto h-5 w-5 shrink-0 text-success" aria-hidden="true" />
              )}
            </div>
            {renderSection(sectionDefs[currentSection].id)}

            {/* زر «التالي» في نهاية القسم — لا حاجة للتمرير للأعلى بعد إنهاء قسم طويل */}
            <div className="mt-6 flex flex-wrap justify-end gap-2 border-t pt-4">
              {currentSection < total - 1 ? (
                <Button size="lg" className="btn-glow gap-2 px-6 whitespace-normal text-center leading-snug" onClick={() => goTo(currentSection + 1)}>
                  أتممت هذا القسم — التالي: {sectionDefs[currentSection + 1].short}
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </Button>
              ) : (
                <Button size="lg" variant="gold" className="btn-glow gap-2 px-6" onClick={handleCompleteLesson}>
                  <Trophy className="h-5 w-5" aria-hidden="true" />
                  إنهاء الدرس
                </Button>
              )}
            </div>
          </div>

          {/* أزرار التنقل السفلية اللاصقة — على الجوال ترتفع فوق شريط التنقل
              السفلي (MobileBottomNav) فلا يغطيها، وعلى الشاشات الكبيرة تلتصق بأسفل الشاشة */}
          <div className="sticky bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 -mx-4 border-t bg-background/95 px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-t-2xl sm:border md:bottom-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Button variant="outline" onClick={() => goTo(currentSection - 1)} disabled={currentSection === 0} className="gap-1.5">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                السابق
              </Button>
              {currentSection < total - 1 ? (
                <Button size="lg" className="btn-glow gap-2 px-6 whitespace-normal text-center leading-snug" onClick={() => goTo(currentSection + 1)}>
                  التالي: {sectionDefs[currentSection + 1].short}
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </Button>
              ) : (
                <Button size="lg" variant="gold" className="btn-glow gap-2 px-6" onClick={handleCompleteLesson}>
                  <Trophy className="h-5 w-5" aria-hidden="true" />
                  إنهاء الدرس
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ═══ الوضع البديل: عرض كل الخطوات معاً ═══ */
        <>
          <div className="space-y-8">
            {sectionDefs.map((def) => (
              <section
                key={def.id}
                id={`lesson-section-${def.id}`}
                className="scroll-mt-36"
                aria-label={def.label}
              >
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
                  <def.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  {def.label}
                </h2>
                {renderSection(def.id)}
              </section>
            ))}
          </div>

          {/* أزرار التنقل السفلية (وضع الكل) */}
          <div className="mt-10 flex items-center justify-between gap-3 border-t pt-6">
            <Button
              variant="outline"
              onClick={() => goTo(currentSection - 1)}
              disabled={currentSection === 0}
              className="gap-1.5"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              السابق
            </Button>
            {currentSection < total - 1 ? (
              <Button onClick={() => goTo(currentSection + 1)} className="gap-1.5">
                {sectionDefs[currentSection + 1].short}
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button asChild variant="gold">
                <Link href="/learning-path">
                  العودة لمسار التعلم
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
          </div>
        </>
      )}

      {/* ═══ ملخص الدرس (قابل للحفظ PDF) ═══ */}
      <div id="lesson-complete" className="scroll-mt-24">
        <LessonSummary lesson={lesson} />
      </div>

      {/* ═══ إكمال الدرس + اقتراح امتحان الختم ═══ */}
      <LessonCompletion lesson={lesson} />

      {/* ═══ التنقل بين الدروس: السابق / التالي (المسار المتسلسل) ═══ */}
      <LessonPrevNext lessonId={lesson.id} />
    </div>
  );
}
