"use client";

import * as React from "react";
import Link from "next/link";
import {Award, BookOpen, CheckCircle2, ChevronLeft, Dumbbell, Headphones, Lock, Mic, PenLine, PlayCircle, Target, Trophy} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Progress} from "@/components/ui/progress";
import type { LessonMeta } from "@/data/lessons/meta-types";
import type { LevelMeta } from "@/types/curriculum";
import {getLessonStars, getLevelMasteryPct} from "@/lib/gamification/mastery";
import {MasteryCertificate} from "@/components/level/mastery-certificate";

/**
 * ═══════════════════════════════════════════════════════════
 *  مركز المستوى (Level Hub) — الشكل المعاصر الاحترافي:
 *  · ترويسة متدرجة بألوان المستوى + تقدّم إجمالي
 *  · خريطة دروس منظمة: كل درس بطاقة (رقم، عنوان، مدة، حالة ✓/مقفل)
 *  · أزرار سريعة: اختبارات المستوى + امتحان الختم + مفردات
 *  · تصميم نظيف متجاوب (بطاقات شبكية)
 * ═══════════════════════════════════════════════════════════
 */
export function LevelHub({ level, lessons }: { level: LevelMeta; lessons: LessonMeta[] }) {
  const { completedLessonsSet, isHydrated } = useProgress();
  const [expanded, setExpanded] = React.useState<number | null>(0);

  const doneCount = completedLessonsSet.size > 0
    ? lessons.filter((l) => completedLessonsSet.has(l.id)).length
    : 0;
  const pct = lessons.length > 0 ? Math.round((doneCount / lessons.length) * 100) : 0;

  // أول درس غير مكتمل (نقطة الاستئناف)
  const nextLesson = lessons.find((l) => !completedLessonsSet.has(l.id)) ?? lessons[0];

  // القفل التسلسلي: الدرس يُفتح إذا أتممت السابق (أو كان الأول)
  const isLocked = (index: number): boolean => {
    if (index === 0) return false; // الأول مفتوح دائماً
    const prev = lessons[index - 1];
    return prev ? !completedLessonsSet.has(prev.id) : false;
  };

  // تقسيم الدروس لوحدات (حسب unitId)
  const grouped = React.useMemo(() => {
    const map = new Map<string, LessonMeta[]>();
    for (const l of lessons) {
      const arr = map.get(l.unitId) ?? [];
      arr.push(l);
      map.set(l.unitId, arr);
    }
    return [...map.entries()].map(([unitId, list]) => ({ unitId, lessons: list }));
  }, [lessons]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      {/* ═══ الترويسة المتدرجة ═══ */}
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-l ${level.gradient} p-6 text-white shadow-soft sm:p-8`}>
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" className="text-xs">{level.code}</Badge>
            <span className="text-sm font-bold opacity-90">{level.titleAr}</span>
            <span className="text-xs opacity-70" dir="ltr">{level.subtitleDe}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            رحلة مستوى <LangDe className="font-extrabold">{level.code}</LangDe>
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90">
            {level.description}
          </p>

          {/* شريط التقدم */}
          <div className="mt-5 flex items-center gap-3">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/25">
              <div className="progress-gradient h-full rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-de shrink-0 text-lg font-extrabold">{pct}%</span>
          </div>
          <p className="mt-1 text-xs font-bold text-white/80">
            {doneCount} من {lessons.length} دروس مكتملة · {level.units} وحدات
          </p>

          {/* بوابة المراجعة: كل 3 دروس تُذكر بمراجعة تراكمية */}
          {doneCount > 0 && doneCount % 3 === 0 && doneCount < lessons.length && (
            <Link
              href="/review/weekly"
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-xs font-extrabold backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <Target className="h-4 w-4" aria-hidden="true" />
              أنهيت {doneCount} دروس — راجعها تراكمياً قبل المتابعة (بوابة الإتقان)
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
          {doneCount >= lessons.length && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-xl bg-success/20 px-3 py-2 text-xs font-extrabold backdrop-blur-sm">
              <Award className="h-4 w-4" aria-hidden="true" />
              أتممت كل دروس هذا المستوى — أنت جاهز لامتحان الختم!
            </p>
          )}

          {/* زر الاستئناف */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={`/lesson/${nextLesson.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              {doneCount > 0 ? "استأنف" : "ابدأ"} الدرس: {nextLesson.titleAr}
            </Link>
            <Link
              href={`/tests/mock?level=${level.code.toLowerCase()}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-black/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/30"
            >
              <Trophy className="h-4 w-4" aria-hidden="true" />
              محاكاة امتحان {level.code}
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ أزرار سريعة ═══ */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <QuickLink href={`/tests/mock?level=${level.code.toLowerCase()}`} icon={<Target className="h-4 w-4" aria-hidden="true" />} label="امتحان المستوى" />
        <QuickLink href={`/tests/seal/${level.code.toLowerCase()}`} icon={<Award className="h-4 w-4" aria-hidden="true" />} label="امتحان الختم" />
        <QuickLink href="/glossar" icon={<BookOpen className="h-4 w-4" aria-hidden="true" />} label="المفردات" />
        <QuickLink href="/sound-check" icon={<Mic className="h-4 w-4" aria-hidden="true" />} label="فحص الصوت" />
      </div>

      {/* ═══ خريطة الدروس (مركز التعلم) ═══ */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-extrabold">
            <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
            دروس المستوى — بالترتيب
          </h2>
          <span className="flex items-center gap-2">
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
              {doneCount}/{lessons.length} مكتملة
            </span>
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-extrabold text-gold-strong">
              ⭐ {getLevelMasteryPct(lessons.map((l) => l.id))}% إتقان
            </span>
          </span>
        </div>

        {/* الدروس (شبكة بطاقات) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {lessons.map((lesson, i) => {
            const isDone = completedLessonsSet.has(lesson.id);
            const isNext = lesson.id === nextLesson.id;
            const locked = isLocked(i); // القفل التسلسلي
            return (
              <Link
                key={lesson.id}
                href={locked ? "#" : `/lesson/${lesson.id}`}
                onClick={locked ? (e) => e.preventDefault() : undefined}
                aria-disabled={locked}
                className={`group relative flex min-w-0 items-center gap-3 rounded-2xl border p-4 transition-all ${
                  isDone
                    ? "border-success/30 bg-success/[0.04]"
                    : isNext
                      ? "border-primary/40 bg-primary/[0.04] shadow-soft"
                      : locked
                        ? "cursor-not-allowed border-muted bg-muted/30 opacity-60"
                        : "border-muted bg-card hover:border-primary/30 hover:shadow-soft"
                }`}
              >
                {/* الرقم أو القفل */}
                <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-de text-sm font-extrabold ${
                  isDone
                    ? "bg-success/15 text-success"
                    : isNext
                      ? "bg-primary/10 text-primary"
                      : locked
                        ? "bg-muted text-muted-foreground"
                        : "bg-muted text-muted-foreground"
                }`}>
                  {isDone ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : locked ? <Lock className="h-4 w-4" aria-hidden="true" /> : String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">
                    <LangDe className="font-bold">{lesson.titleDe}</LangDe>
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {lesson.titleAr} · {lesson.duration} دقيقة
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                    {locked ? (
                      <span className="inline-flex items-center gap-1 font-bold text-muted-foreground/70">
                        <Lock className="h-3 w-3" aria-hidden="true" />
                        أتمّ الدرس السابق لفتحه
                      </span>
                    ) : (
                      <>
                        <Headphones className="h-3 w-3" aria-hidden="true" />
                        <PenLine className="h-3 w-3" aria-hidden="true" />
                        <Dumbbell className="h-3 w-3" aria-hidden="true" />
                        <span className="ms-1">تفاعلي كامل</span>
                      </>
                    )}
                  </div>
                </div>

                {isNext && !isDone && (
                  <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                    التالي
                  </span>
                )}
                {!locked && (
                  <span className="flex shrink-0 items-center gap-0.5 text-[11px]" aria-label={`إتقان الدرس ${getLessonStars(lesson.id)} من 3 نجوم`}>
                    {[0, 1, 2].map((si) => (
                      <span key={si} className={si < getLessonStars(lesson.id) ? "text-gold" : "opacity-20 grayscale"} aria-hidden="true">★</span>
                    ))}
                  </span>
                )}
                {!locked && <ChevronLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" aria-hidden="true" />}
              </Link>
            );
          })}
        </div>

        {/* امتحان الختم — يظهر آلياً عند إتمام كل الدروس */}
        {doneCount === lessons.length && lessons.length > 0 && (
          <div className="rounded-2xl border-2 border-gold/40 bg-gold/10 p-5 text-center">
            <p className="text-lg font-extrabold text-gold-strong">🏅 أتممت كل دروس {level.code}!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              أنت جاهز لامتحان الختم — اجتزه لفتح المستوى التالي.
            </p>
            <Link
              href={`/tests/seal/${level.code.toLowerCase()}`}
              className="btn-glow mt-3 inline-flex items-center gap-1.5 rounded-xl bg-gold px-5 py-2.5 text-sm font-extrabold text-gold-foreground transition-transform hover:scale-[1.02]"
            >
              <Trophy className="h-4 w-4" aria-hidden="true" />
              امتحان ختم {level.code}
            </Link>
          </div>
        )}

        {/* ═══ شهادة الإتقان — وظائف حقيقية (لغة مكتسبة) ═══ */}
        <div className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-extrabold">
            <Award className="h-5 w-5 text-gold-strong" aria-hidden="true" />
            شهادة إتقان {level.code} — هل تستطيع فعل هذا فعلاً؟
          </h2>
          <MasteryCertificate level={level.code} />
        </div>

        {/* ملاحظة */}
        <p className="rounded-xl bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
          💡 كل درس يدمج: <b>قواعد</b> + <b>تريكات</b> + <b>حوارات</b> + <b>تمارين تفاعلية</b> + <b>نطق مقيّم</b> + <b>كتابة مقيّمة</b> + <b>اختبار</b> — بمنهجية خطوة بخطوة. الدروس تُفتح بالترتيب: أتمّ درساً لفتح التالي.
        </p>
      </div>
    </div>
  );
}

/** زر سريع صغير */
function QuickLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center justify-center gap-1.5 rounded-xl border border-muted bg-card px-3 py-2.5 text-xs font-bold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.04]">
      <span className="text-primary">{icon}</span>
      {label}
    </Link>
  );
}
