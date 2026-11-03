"use client";

import * as React from "react";
import {Award, BookOpen, GraduationCap, RotateCcw} from "lucide-react";

import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {LESSON_META} from "@/data/lessons/meta";
import {sample} from "@/lib/lesson/shuffle";
import type { McqExercise } from "@/types/lesson";
import {PLACEMENT_BANK} from "@/data/tests/placement-questions";
import {ExamReviewList, type ExamReviewTeil} from "@/components/tests/exam-question-views";


const PER_LEVEL = 5;

function levelForScore(correct: number, total: number): { level: string; label: string; msg: string } {
  const pct = (correct / total) * 100;
  if (pct >= 80) return { level: "B1", label: "المتوسط (B1)", msg: "ممتاز! مستوى B1 — ابدأ من دروس B1 مباشرة." };
  if (pct >= 55) return { level: "A2", label: "ما قبل المتوسط (A2)", msg: "جيد جداً! مستواك A2 — ابدأ من الوحدة A2-01." };
  if (pct >= 30) return { level: "A1", label: "المبتدئ (A1)", msg: "مستواك A1 — ابدأ من وحدة A1-01 (أو الأبجدية إذا كانت صعبة)." };
  return { level: "A1", label: "مبتدئ تماماً (A1-00)", msg: "ابدأ من الصفر: درس الأبجدية والنطق أولاً." };
}

/**
 * اختبار تحديد المستوى المبسّط — 15 سؤالاً عشوائياً (5 A1 + 5 A2 + 5 B1)
 * — نواة نظام الاختبارات الكامل (المرحلة 10) —
 */
export function PlacementTest() {
  const [questions, setQuestions] = React.useState<McqExercise[]>([]);
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, { isCorrect: boolean; chosen?: string }>>({});
  const [finished, setFinished] = React.useState(false);
  const [round, setRound] = React.useState(0);

  React.useEffect(() => {
    const a1 = sample(PLACEMENT_BANK.filter((q) => q.id.startsWith("pl-a1")), PER_LEVEL);
    const a2 = sample(PLACEMENT_BANK.filter((q) => q.id.startsWith("pl-a2")), PER_LEVEL);
    const b1 = sample(PLACEMENT_BANK.filter((q) => q.id.startsWith("pl-b1")), PER_LEVEL);
    setQuestions([...a1, ...a2, ...b1]);
    setIndex(0);
    setScore(0);
    setAnswers({});
    setFinished(false);
  }, [round]);

  // حفظ مستوى المتعلم تلقائياً بعد إتمام التقييم — تغذّي «لوحة الرحلة»
  React.useEffect(() => {
    if (finished && questions.length > 0) {
      const result = levelForScore(score, questions.length);
      void import("@/lib/storage/learner").then(({saveLearnerProfile}) =>
        saveLearnerProfile({ placementLevel: result.level as "A1" | "A2" | "B1" | "B2" }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const current = questions[index];

  const handleResult = (isCorrect: boolean, id: string, chosen?: string) => {
    if (answers[id] !== undefined) return;
    const next = { ...answers, [id]: { isCorrect, chosen } };
    setAnswers(next);
    if (isCorrect) setScore((s) => s + 1);
    setTimeout(() => {
      setIndex((i) => {
        if (i + 1 >= questions.length) {
          setFinished(true);
          return i;
        }
        return i + 1;
      });
    }, 800);
  };

  if (questions.length === 0) {
    return <p className="text-sm text-muted-foreground">جارٍ تجهيز الاختبار…</p>;
  }

  if (finished) {
    const result = levelForScore(score, questions.length);
    // مراجعة الأدلة (الدفعة 122): جواب المتعلّم (بالفهرس الأصلي) والصحيح والشاهد
    const reviewAnswers: Record<string, number> = {};
    for (const q of questions) {
      const a = answers[q.id];
      if (a?.chosen != null) {
        const idx = q.options.indexOf(a.chosen);
        if (idx >= 0) reviewAnswers[q.id] = idx;
      }
    }
    const reviewTeile: ExamReviewTeil[] = [
      {
        teil: "placement",
        titleAr: "أسئلة التحديد وشروحها",
        kind: "mcq",
        questions: questions.map((q) => ({
          id: q.id,
          q: q.questionDe,
          qAr: q.questionAr,
          options: q.options,
          correct: q.correctIndex,
          whyAr: q.explanation,
        })),
      },
    ];
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {result.level === "B1" ? (
            <GraduationCap className="h-8 w-8 text-success" aria-hidden="true" />
          ) : (
            <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />
          )}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold">نتيجتك: مستوى {result.label}</h3>
        <p className="font-de mt-2 text-4xl font-extrabold text-primary">
          {Math.round((score / questions.length) * 100)}%
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          أجبت صحيحاً على {score} من {questions.length} — {result.msg}
        </p>
        {/* مراجعة الأدلة — لماذا هذا الجواب (الدفعة 122) */}
        <div className="mt-6 text-start" data-testid="exam-review">
          <h3 className="mb-3 text-lg font-extrabold">مراجعة الأدلة — لماذا هذا الجواب</h3>
          <ExamReviewList teile={reviewTeile} answers={reviewAnswers} label="placement" />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="gold" className="gap-1.5">
            <a href={`/learning-path#${result.level.toLowerCase()}`}>
              <Award className="h-4 w-4" aria-hidden="true" />
              ابدأ من مستوى {result.level}
            </a>
          </Button>
          <StartAtLevelButton level={result.level} />
          <Button variant="outline" onClick={() => setRound((r) => r + 1)} className="gap-1.5">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            إعادة الاختبار
          </Button>
        </div>
      </div>
    );
  }

  const currentLevel = current?.id.startsWith("pl-b1") ? "B1" : current?.id.startsWith("pl-a2") ? "A2" : "A1";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Progress value={(index / questions.length) * 100} aria-label="التقدم في اختبار التحديد" />
        <span className="font-de shrink-0 text-sm font-bold text-primary">
          {index + 1}/{questions.length}
        </span>
        <BadgeLevel level={currentLevel} />
      </div>
      {current && (
        <div key={`${current.id}-${round}`}>
          <MultipleChoiceExercise exercise={current} onResult={(r) => handleResult(r.isCorrect, current.id, r.chosen)} />
        </div>
      )}
    </div>
  );
}

function BadgeLevel({ level }: { level: string }) {
  const cls =
    level === "A1" ? "bg-sky-100 text-sky-700" : level === "A2" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700";
  return (
    <span className={`font-de rounded-full px-2.5 py-0.5 text-xs font-bold ${cls}`} dir="ltr">
      {level}
    </span>
  );
}

/**
 * زر «انطلق في المسار» — يجد أول درس في المستوى الناتج من التقييم
 * ويفتحه مباشرة (بدل مجرد القفز للخريطة).
 */
function StartAtLevelButton({ level }: { level: string }) {
  const firstLesson = React.useMemo(() => {
    return LESSON_META.find((l) => l.level === level);
  }, [level]);
  if (!firstLesson) return null;
  return (
    <Button asChild className="gap-1.5">
      <a href={`/lesson/${firstLesson.id}`}>
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        انطلق في المسار: {firstLesson.titleAr}
      </a>
    </Button>
  );
}
