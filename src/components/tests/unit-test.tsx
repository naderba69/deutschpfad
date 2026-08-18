"use client";

import * as React from "react";

import {TestRunner} from "@/components/tests/test-runner";
import {shuffle} from "@/lib/lesson/shuffle";
import {getUnitVocab} from "@/data/vocabulary/a1";
import type { TestQuestion } from "@/types/test";
import type { Lesson, McqExercise } from "@/types/lesson";

/** تحويل تمارين الدرس إلى أسئلة اختبار */
function exerciseToTestQuestion(ex: McqExercise, level: "A1" | "A2" | "B1" | "B2", prefix: string): TestQuestion {
  return {
    id: `${prefix}-${ex.id}`,
    skill: "grammatik",
    level,
    kind: "mcq",
    questionDe: ex.questionDe,
    questionAr: ex.questionAr,
    options: ex.options,
    correctIndex: ex.correctIndex,
    explanation: ex.explanation,
  };
}

/**
 * اختبار نهاية الوحدة — أسئلة من دروس الوحدة نفسها
 * (قواعد من التدريبات + مفردات من بنك الوحدة)
 */
export function UnitTest({ unitId }: { unitId: string }) {
  // تحميل كسول: نستورد دروس الوحدة فقط عند الطلب (بدل جرّ كل الدروس الـ46 للحزمة)
  const [lessons, setLessons] = React.useState<Lesson[]>([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    void import("@/data/lessons").then(({getLessonsByUnit}) => {
      if (cancelled) return;
      setLessons(getLessonsByUnit(unitId));
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [unitId]);

  if (!ready) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center gap-4 rounded-2xl border bg-muted/20 p-12">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden="true" />
        <p className="text-sm text-muted-foreground">جارٍ تجهيز أسئلة الوحدة…</p>
      </div>
    );
  }

  const level = lessons[0]?.level ?? "A1";
  const vocab = getUnitVocab(unitId);

  const mcqFromLessons: McqExercise[] = lessons.flatMap((l) =>
    [...l.practiceBank, ...l.miniTest].filter(
      (e): e is McqExercise => e.type === "multiple-choice",
    ),
  );

  const testQuestions: TestQuestion[] = [
    ...shuffle(mcqFromLessons).slice(0, 6).map((e, i) => exerciseToTestQuestion(e, level, `unit-g${i}`)),
    // مفردات الوحدة: كلمة ألمانية + معناها الصحيح + 3 مشتتات حقيقية من نفس الوحدة
    ...shuffle(vocab)
      .slice(0, 4)
      .map((v, i) => {
        const distractors = shuffle(vocab.filter((x) => x.ar !== v.ar).map((x) => x.ar)).slice(0, 3);
        const options = shuffle([v.ar, ...distractors]);
        return {
          id: `unit-v${i}`,
          skill: "wortschatz" as const,
          level,
          kind: "mcq" as const,
          questionDe: v.de,
          options,
          correctIndex: options.indexOf(v.ar),
          explanation: `${v.de} = ${v.ar}`,
        };
      }),
  ].filter((q) => q.options && q.options.length >= 2);

  return (
    <TestRunner
      kind="unit"
      level={level}
      sections={[
        { skill: "grammatik", title: "قواعد ومفردات الوحدة", titleDe: "Grammatik & Wortschatz", minutes: 10 },
        { skill: "schreiben", title: "كتابة قصيرة", titleDe: "Schreiben", minutes: 5 },
      ]}
      questions={testQuestions}
      title={`اختبار الوحدة ${unitId}`}
    />
  );
}
