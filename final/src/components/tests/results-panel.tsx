"use client";

import * as React from "react";
import {Award, BookOpen, GraduationCap, Lightbulb, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {saveTestResult} from "@/lib/storage/test-results-store";
import {levelFromPct} from "@/lib/tests/test-engine";
;
import type { TestAnswer, TestQuestion, TestResult, TestSkill } from "@/types/test";

const SKILL_LABEL: Record<string, string> = {
  grammatik: "القواعد",
  wortschatz: "المفردات",
  lesen: "القراءة",
  hören: "الاستماع",
  schreiben: "الكتابة",
  sprechen: "التحدث",
};

interface ResultsPanelProps {
  result: TestResult;
  onRetry?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  /** يُستدعى بعد حفظ النتيجة (لربط امتحان الختم بفتح المستويات) */
  onComplete?: (result: TestResult) => void;
}

/**
 * لوحة النتائج — النسب لكل مهارة + المستوى المقدر + اقتراحات التقوية
 */
export function ResultsPanel({ result, onRetry, onNext, nextLabel, onComplete }: ResultsPanelProps) {
  // حفظ النتيجة تلقائياً (لتغذية تحليل الأخطاء والتقرير الأسبوعي)
  React.useEffect(() => {
    void saveTestResult(result);
    onComplete?.(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <div className="space-y-6">
      {/* النتيجة الإجمالية */}
      <div className="rounded-2xl border bg-muted/20 p-6 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {result.passed ? (
            <GraduationCap className="h-8 w-8 text-success" aria-hidden="true" />
          ) : (
            <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />
          )}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold">
          {result.passed ? "أحسنت! اجتزت الاختبار 🎉" : "لا بأس — واصل التدريب"}
        </h3>
        <p className="font-de mt-2 text-4xl font-extrabold text-primary">{result.overallPct}%</p>
        <p className="mt-2 text-sm text-muted-foreground">
          المستوى المقدر:{" "}
          <span className="font-de font-bold text-primary">{result.estimatedLevel}</span> ·{" "}
          {result.kind === "level"
            ? `اختبار مستوى ${result.level}`
            : result.kind === "unit"
              ? "اختبار وحدة"
              : "تشخيصي"}
        </p>
        {result.secondsUsed > 0 && (
          <p className="mt-1 text-xs text-muted-foreground">
            الزمن المستخدم: {Math.floor(result.secondsUsed / 60)} دقيقة و{result.secondsUsed % 60} ثانية
          </p>
        )}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {onNext && (
            <Button onClick={onNext} className="gap-1.5">
              <Award className="h-4 w-4" aria-hidden="true" />
              {nextLabel ?? "المتابعة"}
            </Button>
          )}
          {onRetry && (
            <Button variant="outline" onClick={onRetry} className="gap-1.5">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              إعادة الاختبار
            </Button>
          )}
        </div>
      </div>

      {/* المهارات */}
      <div>
        <h4 className="mb-3 text-lg font-bold">النتائج حسب المهارة</h4>
        <div className="space-y-3">
          {result.skillResults.map((r) => (
            <div key={r.skill} className="rounded-xl border bg-card p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{SKILL_LABEL[r.skill] ?? r.skill}</span>
                <span className="font-de font-bold text-primary">
                  {r.pct}% · {r.level}
                </span>
              </div>
              <Progress value={r.pct} className="mt-2 h-2" aria-label={`${SKILL_LABEL[r.skill]}: ${r.pct}%`} />
              <p className="mt-1 text-xs text-muted-foreground">
                {r.correct} من {r.total} صحيحة
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* اقتراحات التقوية (تكيفي) */}
      {result.reinforcement.length > 0 && (
        <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
          <p className="inline-flex items-center gap-2 font-bold">
            <Lightbulb className="h-4 w-4 text-gold-foreground" aria-hidden="true" />
            اقتراحات تقوية (مبنية على أخطائك):
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {result.reinforcement.map((r, i) => (
              <li key={i} className="text-muted-foreground">
                • {r.reason}
              </li>
            ))}
          </ul>
          {/* ربط مباشر بالمسار: أول درس في المستوى */}
          <ReviewLessonsLink level={result.level} />
        </div>
      )}
    </div>
  );
}

/** رابط «راجع دروس هذا المستوى» — يقودك من النتيجة إلى المسار */
function ReviewLessonsLink({ level }: { level: string }) {
  const [firstLesson, setFirstLesson] = React.useState<string | null>(null);
  React.useEffect(() => {
    void import("@/data/lessons/meta").then(({LESSON_META}) => {
      const first = LESSON_META.find((l) => l.level === level);
      if (first) setFirstLesson(first.id);
    });
  }, [level]);
  if (!firstLesson) return null;
  return (
    <a
      href={`/lesson/${firstLesson}`}
      className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-card px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/5"
    >
      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
      راجع دروس مستوى {level} من جديد
    </a>
  );
}

/** شريط مهارة لطيف (للمعالجة البصرية) */
export function SkillBadge({ skill }: { skill: TestSkill }) {
  return (
    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
      {SKILL_LABEL[skill] ?? skill}
    </span>
  );
}

/** مساعد: مستوى من نسبة (للعرض السريع) */
export function levelFromPctLabel(pct: number) {
  return levelFromPct(pct);
}
