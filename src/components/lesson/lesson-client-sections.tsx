"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  أقسام صفحة الدرس — مُستخرَجة من lesson-client.tsx (المرحلة 4)
 *  بطاقة الإكمال (مع الانتقال التلقائي) + موضع الدرس + هدف اليوم + التنقل.
 *  النقل حرفيّ — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import * as React from "react";
import Link from "next/link";
import {ArrowLeft, ArrowRight, CheckCircle2} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {LangDe} from "@/components/shared/lang-de";
import {LESSON_META} from "@/data/lessons/meta";
import {isLevelLessonsDone} from "@/lib/progress-selectors";
import {Button} from "@/components/ui/button";
import type { Lesson } from "@/types/lesson";

/**
 * بطاقة إكمال الدرس — زر «أتممت هذا الدرس» (يُحفظ في التقدم)
 * + انتقال تلقائي للدرس التالي بعد 3 ثوانٍ (يمكن إلغاؤه)
 * + اقتراح امتحان الختم عند إتمام آخر درس في المستوى.
 */
export function LessonCompletion({ lesson }: { lesson: Lesson }) {
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
export function LessonPosition({ lessonId }: { lessonId: string }) {
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
export function DailyGoalBar() {
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
      </p>
    </div>
  );
}

/**
 * شريط التنقل بين الدروس — يجد الدرس الحالي في المسار الكامل
 * ويعرض «الدرس السابق / التالي» للانتقال المباشر (من a1-00 حتى b2-10).
 */
export function LessonPrevNext({ lessonId }: { lessonId: string }) {
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
