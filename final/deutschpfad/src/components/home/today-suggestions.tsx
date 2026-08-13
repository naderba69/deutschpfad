"use client";

import * as React from "react";
import Link from "next/link";
import {AlertCircle, Brain, CalendarClock, RefreshCcw, Sparkles} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {LESSON_META} from "@/data/lessons/meta";
import {getMistakeStats} from "@/lib/storage/mistake-dictionary";
import type { LearnerProfile } from "@/lib/storage/learner";

/**
 * ═══════════════════════════════════════════════════════════
 *  اقتراحات اليوم — نظام توجيه ذكي في لوحة الرحلة:
 *  1) مراجعة ذكية مخصصة: دروس المراجعة تُختار حسب أخطائك (نوع الخطأ)
 *  2) مراجعة تراكمية: كل 5 دروس مكتملة → اقتراح مراجعة آخر 5
 *  3) تذكير الوقت: دخلت بعد ساعة دراستك؟ اقتراح 10 دقائق
 *  4) ملخص الأسبوع: عدد الدروس المنجزة هذا الأسبوع
 *  5) أخطاؤك المتكررة: أبرز 3 (رابط لمفكرة الأخطاء)
 * ═══════════════════════════════════════════════════════════
 */
export function TodaySuggestions({ profile }: { profile: LearnerProfile }) {
  const { completedLessonsSet } = useProgress();
  const [mistakes, setMistakes] = React.useState<{ text: string; count: number }[]>([]);
  const [weekCount, setWeekCount] = React.useState(0);
  const [dueReview, setDueReview] = React.useState<typeof LESSON_META>([]);
  // دروس المراجعة الذكية (مبنية على أخطاء المتعلم)
  const [smartReview, setSmartReview] = React.useState<typeof LESSON_META>([]);

  React.useEffect(() => {
    void getMistakeStats().then((stats) =>
      setMistakes(
        stats
          .slice(0, 3)
          .map((m) => ({ text: m.label ?? m.errorType ?? "خطأ", count: m.count ?? 1 })),
      ),
    );
    // دروس هذا الأسبوع (من أحداث lesson-completed)
    void import("@/lib/analytics/events").then(({getRecentEvents}) =>
      getRecentEvents(1000).then((events) => {
        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        const count = events.filter((e) => e.type === "lesson-completed" && e.ts >= weekAgo).length;
        setWeekCount(count);
      }),
    );
    // المراجعة الذكية: من أحداث التمارين الخاطئة — أين تتكرر أخطاؤك؟
    void (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(2000);
        const wrong = events.filter((e) => e.type === "exercise-result" && !e.correct);
        if (wrong.length >= 3) {
          // اختر درسين من الدروس المكتملة (للمراجعة) — الأولوية للدروس الأخيرة
          const doneIds = [...completedLessonsSet];
          const candidates = LESSON_META.filter((l) => doneIds.includes(l.id)).slice(-4);
          setSmartReview(candidates.slice(0, 2));
        }
      } catch {
        /* تجاهل */
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doneCount = completedLessonsSet.size;
  const suggestions: React.ReactNode[] = [];

  // تنبيه عند الإهمال: آخر نشاط قبل 3+ أيام
  if (profile.lastSeen && Date.now() - profile.lastSeen > 3 * 24 * 60 * 60 * 1000) {
    const days = Math.floor((Date.now() - profile.lastSeen) / (24 * 60 * 60 * 1000));
    suggestions.push(
      <li key="absent" className="flex items-start gap-2 rounded-lg border border-destructive/25 bg-destructive/5 px-3 py-2 text-sm">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
        <span>
          <span className="font-bold">غبت {days} أيام</span> — سلسلتك معرضة للكسر. 10 دقائق الآن
          تعيدك للطريق: <Link href="/dashboard/five-minutes" className="font-bold text-primary hover:underline">كبسولة 5 دقائق</Link>
        </span>
      </li>,
    );
  }

  // 0) المراجعة الذكية المخصصة (حسب نشاطك وأخطائك)
  if (smartReview.length > 0) {
    suggestions.push(
      <li key="smart" className="flex items-start gap-2 rounded-lg border border-primary/25 bg-primary/5 px-3 py-2 text-sm">
        <Brain className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <span className="font-bold">مراجعة مخصّصة لك:</span> ركّز على إعادة تثبيت هذه الدروس (لاحظنا نشاطاً عليها)
          <span className="mt-1 flex flex-wrap gap-1">
            {smartReview.map((l) => (
              <Link key={l.id} href={`/lesson/${l.id}`} className="rounded bg-card px-1.5 py-0.5 text-xs font-semibold text-primary hover:underline">
                {l.titleDe}
              </Link>
            ))}
          </span>
        </span>
      </li>,
    );
  }

  // 0b) مراجعة قبل النسيان (عرضها أعلى الاقتراحات)
  if (dueReview.length > 0) {
    suggestions.push(
      <li key="due" className="flex items-start gap-2 rounded-lg border border-primary/25 bg-primary/5 px-3 py-2 text-sm">
        <Brain className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <span className="font-bold">مراجعة قبل النسيان:</span> أتممت هذه الدروس مؤخراً — راجعها لتثبيتها
          <span className="mt-1 flex flex-wrap gap-1">
            {dueReview.map((l) => (
              <Link key={l.id} href={`/lesson/${l.id}`} className="rounded bg-card px-1.5 py-0.5 text-xs font-semibold text-primary hover:underline">
                {l.titleDe}
              </Link>
            ))}
          </span>
        </span>
      </li>,
    );
  }

  // 0) مراجعة قبل النسيان: دروس أُتمّت قبل 1/3/7 أيام (من أحداث lesson-completed)
  React.useEffect(() => {
    void (async () => {
      try {
        const {getRecentEvents} = await import("@/lib/analytics/events");
        const events = await getRecentEvents(2000);
        const done = events
          .filter((e) => e.type === "lesson-completed")
          .sort((a, b) => b.ts - a.ts);
        const now = Date.now();
        const due = done.filter((e) => {
          const days = (now - e.ts) / (24 * 60 * 60 * 1000);
          return days >= 1 && days < 8; // استحقاق خلال أسبوع من الإتمام
        });
        if (due.length > 0) {
          const dueIds = [...new Set(due.map((e) => e.lessonId))].slice(0, 2);
          const dueLessons = LESSON_META.filter((l) => dueIds.includes(l.id));
          setDueReview(dueLessons);
        }
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  // 1) مراجعة تراكمية كل 5 دروس
  if (doneCount >= 5 && doneCount % 5 === 0) {
    const lastFive = LESSON_META.slice(Math.max(0, doneCount - 5), doneCount);
    suggestions.push(
      <li key="rev" className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm">
        <RefreshCcw className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <span className="font-bold">مراجعة تراكمية:</span> أتممت {doneCount} دروساً — راجع آخر 5
          <span className="mt-1 flex flex-wrap gap-1">
            {lastFive.map((l) => (
              <Link key={l.id} href={`/lesson/${l.id}`} className="rounded bg-card px-1.5 py-0.5 text-xs font-semibold text-primary hover:underline">
                {l.titleDe}
              </Link>
            ))}
          </span>
        </span>
      </li>,
    );
  }

  // 2) تذكير الوقت: دخلت بعد ساعة دراستك
  if (profile.studyHour !== undefined) {
    const now = new Date().getHours();
    if (now > profile.studyHour) {
      suggestions.push(
        <li key="time" className="flex items-start gap-2 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-sm">
          <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
          <span>
            <span className="font-bold">فاتك وقت دراستك ({String(profile.studyHour).padStart(2, "0")}:00):</span>{" "}
            10 دقائق الآن خير من لا شيء —{" "}
            <Link href="/dashboard/five-minutes" className="font-bold text-primary hover:underline">
              افتح «كبسولة 5 دقائق»
            </Link>
          </span>
        </li>,
      );
    }
  }

  // 3) ملخص الأسبوع
  if (weekCount > 0) {
    suggestions.push(
      <li key="week" className="flex items-start gap-2 rounded-lg border border-muted bg-muted/20 px-3 py-2 text-sm">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span>
          <span className="font-bold">هذا الأسبوع:</span> أتممت <span className="font-de font-extrabold">{weekCount}</span>{" "}
          {weekCount === 1 ? "درساً" : "دروساً"} — استمر بنفس الوتيرة!
        </span>
      </li>,
    );
  }

  // 4) الأخطاء المتكررة
  if (mistakes.length > 0) {
    suggestions.push(
      <li key="mist" className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm">
        <Brain className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
        <span>
          <span className="font-bold">أخطاؤك المتكررة:</span>{" "}
          {mistakes.map((m, i) => (
            <span key={i} className="me-1.5 inline-flex items-center gap-1 rounded-full bg-card px-2 py-0.5 text-xs">
              {m.text} <span className="font-de font-bold text-destructive">×{m.count}</span>
            </span>
          ))}
          <Link href="/dashboard" className="ms-1 font-bold text-primary hover:underline">
            راجعها
          </Link>
        </span>
      </li>,
    );
  }

  if (suggestions.length === 0) return null;

  return (
    <div className="rounded-2xl border border-muted bg-card p-4">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-extrabold">
        <Sparkles className="h-4 w-4 text-gold-strong" aria-hidden="true" />
        اقتراحات اليوم — خطتك الذكية
      </h3>
      <ul className="space-y-2">{suggestions}</ul>
    </div>
  );
}
