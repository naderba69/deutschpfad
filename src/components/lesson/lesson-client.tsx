"use client";

import {LessonSectionBody} from "@/components/lesson/lesson-section-body";
import {lastOpenIndex} from "@/lib/session/gate-nav";
import * as React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ArrowLeft, ArrowRight, CheckCircle2, Clock, ListChecks, Printer, Sparkles, Trophy} from "lucide-react";

import {FavoriteButton} from "@/components/shared/favorite-button";
import {LESSON_META} from "@/data/lessons/meta";
import {getRelatedResources} from "@/data/lessons/related-resources";
import {useProgress} from "@/components/providers/progress-provider";
import {isLevelLessonsDone} from "@/lib/progress-selectors";
import {buildInterleavedReview, likelyHasInterleavedReview} from "@/lib/lesson/review-generator";
import {sectionIndexFromUrl, visibleSectionDefs} from "@/lib/session/visible-sections";
import {acknowledgeOnAdvance} from "@/lib/session/section-completion";
import {useSessionGate} from "@/components/session/use-session-gate";
import {LessonSummary} from "@/components/lesson/sections/lesson-summary";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {SectionStrip} from "@/components/lesson/section-strip";
import {scrollToLessonTarget} from "./lesson-scroll";
import type {Exercise, Lesson} from "@/types/lesson";

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
  const router = useRouter();
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
        const nextPart = next ? ` \nالدرس القادم: «${next.titleAr}» — سنبني عليه مباشرة.` : " \nأتممت وحدات المسار. يمكنك تجربة اختبار التقدم الداخلي لمراجعة أدائك؛ لا يثبت ذلك مستوى CEFR أو الجاهزية الرسمية. 🏆";
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
      if (next) router.push(`/lesson/${next.id}`);
      return;
    }
    const t = window.setTimeout(() => setAutoCount((c) => (c === null ? null : c - 1)), 1000);
    return () => window.clearTimeout(t);
  }, [autoCount, next, router]);

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
                // نجوم الإتقان: نجمة للإتمام + نجمة إن بلا أخطاء في هذا الدرس
                void import("@/lib/gamification/mastery").then(({awardLessonStars}) =>
                  awardLessonStars(lesson.id),
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
 * مؤشر موضع الدرس في المسار الكامل؛ العدد مشتق من فهرس الدروس الحالي.
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
function DailyGoalBar() {
  // القيم الافتراضية تُرسَم في HTML الخادمي أيضاً: كان الشريط يُضاف بعد التحميل فيدفع الدرس 62px (CLS 0.17).
  const [profile, setProfile] = React.useState<{ dailyGoalMinutes?: number; studyHour?: number }>({dailyGoalMinutes: 20});

  React.useEffect(() => {
    void import("@/lib/storage/learner").then(({getLearnerProfile}) => getLearnerProfile().then(setProfile));
  }, []);

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
            <p className="break-words text-sm font-bold [overflow-wrap:anywhere]">
              <LangDe className="font-bold">{prev.titleDe}</LangDe>
            </p>
            <p className="break-words text-xs text-muted-foreground [overflow-wrap:anywhere]">{prev.titleAr}</p>
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
            <p className="break-words text-sm font-bold [overflow-wrap:anywhere]">
              <LangDe className="font-bold">{next.titleDe}</LangDe>
            </p>
            <p className="break-words text-xs text-muted-foreground [overflow-wrap:anywhere]">{next.titleAr}</p>
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
  const router = useRouter();
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
  // على الجوال: تفاصيل سبب القفل تظهر عند الضغط على «لماذا؟» فقط
  const [showLockDetails, setShowLockDetails] = React.useState(false);

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
      // رابط من صفحة الحصة ?section=<id> يفتح ذلك القسم مباشرة
      const linked = sectionIndexFromUrl(window.location.search, sectionDefs.map((d) => d.id));
      if (linked >= 0) { setCurrentSection(linked); setVisited((prev) => new Set([...prev, sectionDefs[linked].id])); return; }
      const saved = window.localStorage.getItem(`lesson-step:${lesson.id}`);
      if (saved) {
        const n = Number(saved);
        if (Number.isFinite(n) && n > 0) {
          const restored = Math.min(n, sectionDefs.length - 1);
          setCurrentSection(restored);
          const restoredId = sectionDefs[restored]?.id;
          if (restoredId) setVisited((prev) => new Set([...prev, restoredId]));
        }
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

  // هل لهذا الدرس موارد رديفة مربوطة؟ (يحدد ظهور قسم «التعمّق»)
  const hasRelatedResources = React.useMemo(
    () => getRelatedResources(lesson.id).length > 0,
    [lesson.id],
  );

  const reviewAvailable = reviewLoaded ? reviewQuestions.length > 0 : likelyHasInterleavedReview(lesson);
  const sectionDefs = visibleSectionDefs(lesson, reviewAvailable, hasRelatedResources);
  const gate = useSessionGate(lesson.id, sectionDefs.map((d) => d.id));
  // بعد تحميل الإنجازات: الفهرس المحفوظ أو المقصود من رابط إن كان مقفولاً يُعاد لآخر قسم مفتوح
  React.useEffect(() => {
    const ids = sectionDefs.map((d) => d.id);
    if (gate.loaded && !gate.canOpen(currentSection)) setCurrentSection(lastOpenIndex(ids, gate.completed, currentSection));
  }, [gate, sectionDefs, currentSection]);
  const total = sectionDefs.length;
  const progressPct = Math.round((visited.size / total) * 100);
  // سبب قفل القسم التالي في وضع الخطوات (null إن لم يكن مقفلاً)
  const lockMessageNext = gate.lockMessage(currentSection + 1);

  const markVisited = (id: string) => {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const goTo = (index: number, done: ReadonlySet<string> = gate.completed) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    const def = sectionDefs[clamped];
    // بوابة المراحل تُطبَّق في الوضعين؛ وفي «خطوة بخطوة» يُمنع أيضاً القفز لخطوتين
    if ((stepMode && clamped > currentSection + 1) || !gate.canOpen(clamped, done)) return;
    setCurrentSection(clamped);
    markVisited(def.id);
    // التمرير لأول المحتوى يتم في useEffect أدناه (بعد اكتمال الرندر)
  };

  /** «التالي» من قسم شرح/قراءة يُسجَّل إنجازه بالتأكيد؛ أقسام التمارين تسجّل نفسها */
  // إنهاء الدرس من آخر قسم: قسم الإقرار الأخير يُثبت إنجازه قبل الانتقال (وإلا بقي معلّقاً في تقدّم المراحل)
  const finishLesson = () => { const id = sectionDefs[currentSection]?.id; if (id) acknowledgeOnAdvance(lesson.id, id); handleCompleteLesson(); };
  const advanceFrom = (index: number) => { const id = sectionDefs[index]?.id; if (!id) return; const acked = acknowledgeOnAdvance(lesson.id, id); if (acked) gate.markLocal(id); goTo(index + 1, acked ? new Set([...gate.completed, id]) : gate.completed); };

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
    return scrollToLessonTarget(targetId);
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
      void import("@/lib/gamification/mastery").then(({awardLessonStars}) =>
        awardLessonStars(lesson.id),
      );
    }
    // انتقال تسلسلي: الدرس التالي تلقائياً
    const idx = LESSON_META.findIndex((l) => l.id === lesson.id);
    const nextL = idx >= 0 && idx < LESSON_META.length - 1 ? LESSON_META[idx + 1] : undefined;
    if (nextL) {
      setCompletionNotice({
        title: "أتممت هذا الدرس!",
        sub: `جارٍ الانتقال إلى الدرس التالي: «${nextL.titleAr}»…`,
        href: `/lesson/${nextL.id}`,
      });
      window.setTimeout(() => {
        router.push(`/lesson/${nextL.id}`);
      }, 2500);
    } else {
      setCompletionNotice({
        title: "أتممت وحدات المسار!",
        sub: "يمكنك استخدام اختبار التقدم الداخلي وعينة التدريب لمراجعة أدائك فقط؛ إكمال الوحدات وحده لا يثبت الإتقان أو الجاهزية الرسمية.",
        href: "/tests/seal/b2",
      });
      document.getElementById("lesson-complete")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      {/* ترويسة الدرس */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/learning-path" className="rounded-lg py-2 text-sm text-muted-foreground hover:text-primary">
            ← مسار التعلم
          </Link>
          <span className="text-muted-foreground">/</span>
          <LessonPosition lessonId={lesson.id} />
          {/* مستوى واحد يظهر مرة واحدة: الرمز مع الاسم معاً */}
          <Badge variant="secondary" className="font-de font-bold">
            {lesson.level} · {LEVEL_LABEL[lesson.level] ?? lesson.level}
          </Badge>
          {LESSON_META.find((m) => m.id === lesson.id)?.estimatedMinutes && (
            <Badge variant="outline" title="تقدير تقريبي للمتعلم الذاتي، وليس قياساً فعلياً">
              <Clock className="me-1 inline h-3.5 w-3.5" aria-hidden="true" />
              حوالي {LESSON_META.find((m) => m.id === lesson.id)?.estimatedMinutes} دقيقة (تقدير)
            </Badge>
          )}
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
          <FavoriteButton kind="lesson" id={lesson.id} label={lesson.titleAr} size="sm" />
          <Button
            variant={focusMode ? "default" : "outline"}
            size="sm"
            onClick={() => setFocusMode((v) => !v)}
            className="gap-1.5 print:hidden"
            aria-pressed={focusMode}
            aria-label="وضع التركيز: إخفاء التنقل الداخلي"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {focusMode ? "خروج من التركيز" : "وضع التركيز"}
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

      {/* متصفح الأقسام العشرة — يستبقي القسم النشط مرئياً على الجوال */}
      {!focusMode && (
        <SectionStrip
          sectionDefs={sectionDefs}
          currentSection={currentSection}
          visited={visited}
          stepMode={stepMode}
          sticky={!stepMode}
          onSelect={goTo}
        />
      )}

      {/* ═══ هدف اليوم + مراجعة قبل النسيان ═══ */}
      <DailyGoalBar />

      {/* ═══ وضع العرض: خطوة بخطوة (تفاعلي) أم عرض الكل ═══ */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-bold text-muted-foreground" aria-live="polite" aria-atomic="true">
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
           (الأهداف ← المراجعة ← التمهيد ← المفردات ← الشرح ← الأفعال ← القراءة ← الاستماع ←
            التدريبات ← النطق ← الكتابة ← الوساطة ← الكلام ← الثقافة ← التقييم ← الأخطاء ← البطاقات) */
        <div className="space-y-4">
          {/* شريط التقدم اللاصق — يبقى مرئياً دائماً حتى في السكرول الطويل */}
          <div data-lesson-sticky-strip className="sticky top-16 z-30 flex items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
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
            {gate.loaded ? (
              <LessonSectionBody id={sectionDefs[currentSection].id} lesson={lesson} reviewQuestions={reviewQuestions} />
            ) : (
              <p className="text-sm text-muted-foreground">جارٍ التحقق من تقدّمك…</p>
            )}

            {/* زر «التالي» في نهاية القسم — لا حاجة للتمرير للأعلى بعد إنهاء قسم طويل */}
            <div className="mt-6 flex flex-wrap justify-end gap-2 border-t pt-4">
              {currentSection < total - 1 ? (
                <Button size="lg" className="btn-glow gap-2 px-6 whitespace-normal text-center leading-snug" onClick={() => advanceFrom(currentSection)}>
                  أتممت هذا القسم — التالي: {sectionDefs[currentSection + 1].short}
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </Button>
              ) : (
                <Button size="lg" variant="gold" className="btn-glow gap-2 px-6" onClick={finishLesson}>
                  <Trophy className="h-5 w-5" aria-hidden="true" />
                  إنهاء الدرس
                </Button>
              )}
            </div>
          </div>

          {/* أزرار التنقل السفلية اللاصقة — على الجوال ترتفع فوق شريط التنقل
              السفلي (MobileBottomNav) فلا يغطيها، وعلى الشاشات الكبيرة تلتصق بأسفل الشاشة */}
          <div className="sticky bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 -mx-4 border-t bg-background/95 px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-t-2xl sm:border sm:py-3 md:bottom-0">
            {stepMode && lockMessageNext ? (
              <div className="mb-2">
                {/* الجوال: سطر قصير + زر «لماذا؟» */}
                <p role="status" className="text-xs font-bold text-warning md:hidden">
                  التالي مقفل.{" "}
                  <button
                    type="button"
                    className="underline underline-offset-2"
                    aria-expanded={showLockDetails}
                    onClick={() => setShowLockDetails((v) => !v)}
                  >
                    {showLockDetails ? "إخفاء" : "لماذا؟"}
                  </button>
                </p>
                {showLockDetails ? <p className="mt-1 text-xs font-bold text-warning md:hidden">{lockMessageNext}</p> : null}
                {/* الشاشات الكبيرة: الرسالة الكاملة دائماً */}
                <p className="hidden text-xs font-bold text-warning md:block">{lockMessageNext}</p>
              </div>
            ) : null}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* على الجوال يبقى زر واحد ظاهر (التالي)؛ الرجوع متاح من شريط الأقسام */}
              <Button variant="outline" onClick={() => goTo(currentSection - 1)} disabled={currentSection === 0} className="hidden gap-1.5 md:inline-flex">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                السابق
              </Button>
              {currentSection < total - 1 ? (
                <Button className="btn-glow h-11 w-full gap-2 px-6 whitespace-normal text-center leading-snug md:h-12 md:w-auto md:text-base" onClick={() => advanceFrom(currentSection)}>
                  التالي: {sectionDefs[currentSection + 1].short}
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </Button>
              ) : (
                <Button size="lg" variant="gold" className="btn-glow w-full gap-2 px-6 md:w-auto" onClick={finishLesson}>
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
            {gate.loaded && sectionDefs.some((_, i) => !gate.canOpen(i)) ? (
              <p role="status" className="rounded-xl border border-warning/40 bg-warning/10 p-3 text-sm font-bold">
                {gate.lockMessage(sectionDefs.findIndex((_, i) => !gate.canOpen(i)))}
              </p>
            ) : null}
            {sectionDefs.map((def, i) => (gate.loaded && gate.canOpen(i) ? (
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
                <LessonSectionBody id={def.id} lesson={lesson} reviewQuestions={reviewQuestions} />
              </section>
            ) : null))}
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
              <Button onClick={() => advanceFrom(currentSection)} className="gap-1.5">
                {sectionDefs[currentSection + 1].short}
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button asChild variant="gold">
                <Link href="/learning-path">
                  العودة لمسار التعلم
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
