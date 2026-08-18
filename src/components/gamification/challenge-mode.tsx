"use client";

import * as React from "react";
import {Zap} from "lucide-react";

import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {Button} from "@/components/ui/button";
;
import {Progress} from "@/components/ui/progress";
import {recordEvent} from "@/lib/analytics/events";
import {sample} from "@/lib/lesson/shuffle";
import {useCountdown} from "@/lib/tests/use-countdown";
import {formatTime} from "@/lib/tests/test-engine";
import type { Exercise } from "@/types/lesson";

/** بنك أسئلة التحدي */
const CHALLENGE_BANK: Exercise[] = [
  {
    id: "ch-1", type: "multiple-choice",
    instructionAr: "تحدي!",
    questionDe: "Ich ___ aus Tunesien.",
    options: ["bin", "bist", "ist", "sind"],
    correctIndex: 0, explanation: "مع ich: bin.",
    errorType: "conjugation",
  },
  {
    id: "ch-2", type: "multiple-choice",
    instructionAr: "تحدي!",
    questionDe: "Das Buch liegt auf ___ Tisch.",
    options: ["dem", "den", "der", "das"],
    correctIndex: 0, explanation: "سكون مذكر: auf dem.",
    errorType: "case",
  },
  {
    id: "ch-3", type: "multiple-choice",
    instructionAr: "تحدي!",
    questionDe: "Ich habe gestern ein Buch ___.",
    options: ["gelesen", "lesen", "gelest", "liest"],
    correctIndex: 0, explanation: "lesen → gelesen.",
    errorType: "grammar",
  },
  {
    id: "ch-4", type: "multiple-choice",
    instructionAr: "تحدي!",
    questionDe: "Wenn ich Zeit ___, würde ich kommen.",
    options: ["hätte", "habe", "hatte", "haben"],
    correctIndex: 0, explanation: "Konjunktiv II: hätte.",
    errorType: "grammar",
  },
  {
    id: "ch-5", type: "multiple-choice",
    instructionAr: "تحدي!",
    questionDe: "Ich interessiere mich ___ Musik.",
    options: ["für", "auf", "von", "um"],
    correctIndex: 0, explanation: "sich interessieren für.",
    errorType: "preposition",
  },
  {
    id: "ch-6", type: "multiple-choice",
    instructionAr: "تحدي!",
    questionDe: "Der Zug ist ___ als der Bus.",
    options: ["schneller", "schnell", "am schnellsten", "schnelle"],
    correctIndex: 0, explanation: "مقارنة: schneller als.",
    errorType: "grammar",
  },
];

const QUESTIONS = 5;
const SECONDS_PER_QUESTION = 20;
const BONUS_PER_SECOND = 2;

/**
 * وضع التحدي الزمني — 5 أسئلة × 20 ثانية مع نقاط سرعة
 */
export function ChallengeMode() {
  const [phase, setPhase] = React.useState<"intro" | "running" | "done">("intro");
  const [questions, setQuestions] = React.useState<Exercise[]>([]);
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [round, setRound] = React.useState(0);

  const remaining = useCountdown(phase === "running" ? SECONDS_PER_QUESTION : 0, () => {
    // انتهاء وقت السؤال → التالي بلا نقاط — ونُسجّل خطأً صريحاً (P1-01)
    const currentQ = questions[index];
    if (currentQ) {
      void recordEvent({ type: "exercise-result", exerciseId: currentQ.id, exerciseType: currentQ.type, correct: false, points: 0, errorType: currentQ.errorType, timedOut: true } as never);
    }
    advance();
  });

  const advance = React.useCallback(() => {
    setIndex((i) => {
      if (i + 1 >= questions.length) {
        setPhase("done");
        return i;
      }
      return i + 1;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions.length, phase]);

  const start = () => {
    setQuestions(sample(CHALLENGE_BANK, QUESTIONS));
    setIndex(0);
    setScore(0);
    setPhase("running");
  };

  const onResult = (correct: boolean, ex: Exercise) => {
    if (correct) {
      const speedBonus = remaining; // كل ثانية متبقية = 2 نقطة
      const earned = 10 + speedBonus * BONUS_PER_SECOND;
      setScore((s) => s + earned);
      void recordEvent({ type: "exercise-result", exerciseId: ex.id, exerciseType: ex.type, correct, points: earned, errorType: ex.errorType });
    } else {
      // ═══ P1-01: الإجابة الخاطئة تُسجَّل صراحةً — كانت تُسقَط
      // فتظهر الدقة أعلى من الواقع ═══
      void recordEvent({ type: "exercise-result", exerciseId: ex.id, exerciseType: ex.type, correct: false, points: 0, errorType: ex.errorType });
    }
    setTimeout(() => advance(), 600);
  };

  if (phase === "intro") {
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <Zap className="mx-auto h-12 w-12 text-gold-strong" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-extrabold">وضع التحدي الزمني ⚡</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          {QUESTIONS} أسئلة × {SECONDS_PER_QUESTION} ثانية لكل سؤال —
          أجب بأسرع ما يمكن: كل ثانية متبقية = {BONUS_PER_SECOND} نقاط إضافية!
        </p>
        <Button size="lg" onClick={start} className="mt-6 gap-1.5">
          <Zap className="h-4 w-4" aria-hidden="true" />
          ابدأ التحدي
        </Button>
      </div>
    );
  }

  if (phase === "done") {
    const maxScore = QUESTIONS * 10 + QUESTIONS * SECONDS_PER_QUESTION * BONUS_PER_SECOND;
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <Zap className="h-8 w-8 text-gold-strong" aria-hidden="true" />
        </span>
        <p className="font-de mt-4 text-4xl font-extrabold text-primary">{score} نقطة</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {score >= maxScore * 0.7
            ? "أداء خارق في التحدي! 🏆"
            : score >= maxScore * 0.4
              ? "جيد! حاول أسرع في المرة القادمة"
              : "لا بأس — السرعة تأتي مع التدريب"}
        </p>
        <Button className="mt-6" onClick={start}>
          تحدٍّ جديد
        </Button>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div key={round} className="space-y-4">
      <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-3">
        <p className="text-sm font-bold">
          سؤال {index + 1}/{QUESTIONS}
        </p>
        <span className="font-de text-sm font-bold text-primary">⭐ {score}</span>
        <span className="font-de rounded-lg border border-gold/50 bg-gold/10 px-3 py-1 text-sm font-bold text-gold-strong-foreground tabular-nums">
          ⏱ {formatTime(remaining)}
        </span>
      </div>
      <Progress value={((index + 1) / QUESTIONS) * 100} aria-label="التقدم في التحدي" />
      {current && (
        <ExerciseRenderer
          key={`${current.id}-${index}`}
          exercise={current}
          onResult={(r) => onResult(r.isCorrect, current)}
        />
      )}
      <p className="text-center text-xs text-muted-foreground">
        ⚡ كلما أجبت أسرع، زادت نقاطك — التحدي يختبر سرعتك ودقتك معاً!
      </p>
    </div>
  );
}
