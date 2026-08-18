"use client";

import * as React from "react";
import {Clock, Layers, Sparkles, Zap} from "lucide-react";

import {DailyWord} from "@/components/home/daily-word";
import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {useProgress} from "@/components/providers/progress-provider";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getFirstLessonMetaForUnit} from "@/data/lessons/meta";
import {getUnitsByLevel} from "@/lib/constants/curriculum";
import {getActiveLevel} from "@/lib/progress-selectors";
import {sample} from "@/lib/lesson/shuffle";
import {useCountdown} from "@/lib/tests/use-countdown";
import {formatTime} from "@/lib/tests/test-engine";
import type { Exercise } from "@/types/lesson";

/** تمارين كبسولة 5 دقائق */
const QUICK_EXERCISES: Exercise[] = [
  {
    id: "q1", type: "multiple-choice",
    instructionAr: "كبسولة سريعة:",
    questionDe: "Das ist ___ Mutter.",
    options: ["meine", "mein", "meinen", "meinem"],
    correctIndex: 0, explanation: "Mutter مؤنثة → meine.",
    errorType: "gender",
  },
  {
    id: "q2", type: "multiple-choice",
    instructionAr: "كبسولة سريعة:",
    questionDe: "Ich esse ___ Apfel.",
    options: ["einen", "ein", "eine", "der"],
    correctIndex: 0, explanation: "نصب مذكر: einen.",
    errorType: "case",
  },
  {
    id: "q3", type: "multiple-choice",
    instructionAr: "كبسولة سريعة:",
    questionDe: "Der Zug ist ___ als der Bus.",
    options: ["schneller", "schnell", "am schnellsten", "schnelle"],
    correctIndex: 0, explanation: "مقارنة: schneller als.",
    errorType: "grammar",
  },
  {
    id: "q4", type: "multiple-choice",
    instructionAr: "كبسولة سريعة:",
    questionDe: "Ich ___ gestern nach Berlin ___.",
    options: ["bin ... geflogen", "habe ... geflogen", "bin ... gefliegen", "habe ... gefliegen"],
    correctIndex: 0, explanation: "fliegen حركة → bin geflogen.",
    errorType: "grammar",
  },
  {
    id: "q5", type: "multiple-choice",
    instructionAr: "كبسولة سريعة:",
    questionDe: "Er sagt, er ___ Zeit.",
    options: ["habe", "hat", "hätte", "haben"],
    correctIndex: 0, explanation: "Konjunktiv I: habe.",
    errorType: "grammar",
  },
  {
    id: "q6", type: "multiple-choice",
    instructionAr: "كبسولة سريعة:",
    questionDe: "___ du Hunger? — Ja, ich habe Hunger.",
    options: ["Hast", "Habe", "Hat", "Habt"],
    correctIndex: 0, explanation: "مع du: Hast.",
    errorType: "conjugation",
  },
];

const TOTAL_SECONDS = 5 * 60;

/**
 * وضع «5 دقائق» — كبسولة يومية سريعة للأيام المزدحمة:
 * كلمة اليوم + 3 تمارين + رابط درس اليوم + مؤقت 5 دقائق
 */
export function FiveMinutes() {
  const { completedUnits, sealedLevels, isHydrated } = useProgress();
  // ═══ إصلاح hydration: sample عشوائي في أول رندر كان يكسر التطابق
  // (الخادم يختار عشوائياً مختلفاً عن العميل) — أُجّل إلى useEffect ═══
  const [batch, setBatch] = React.useState<typeof QUICK_EXERCISES>([]);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    setBatch(sample(QUICK_EXERCISES, 3));
  }, []);
  const remaining = useCountdown(TOTAL_SECONDS, () => setDone(true));

  const activeLevel = isHydrated ? getActiveLevel(completedUnits, sealedLevels) : "A1";
  const units = getUnitsByLevel(activeLevel);
  const nextUnit = units.find((u) => !completedUnits.includes(u.id)) ?? units[0];
  const lesson = nextUnit ? getFirstLessonMetaForUnit(nextUnit.id) : null;

  return (
    <div className="space-y-5">
      {/* المؤقت */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/30 p-4">
        <p className="inline-flex items-center gap-2 font-bold">
          <Zap className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          كبسولة 5 دقائق — للأيام المزدحمة
        </p>
        <span className="font-de rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-bold text-primary tabular-nums" role="timer">
          ⏱ {formatTime(remaining)}
        </span>
      </div>

      {done && (
        <div className="rounded-xl border border-success/40 bg-success/10 p-4 text-center">
          <p className="font-bold text-success">انتهت الكبسولة! 🎉</p>
          <p className="mt-1 text-sm text-muted-foreground">
            5 دقائق كافية يومياً — أنجزت جلستك، ارجع غداً للمزيد.
          </p>
        </div>
      )}

      {/* كلمة اليوم */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            كلمة اليوم
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <DailyWord />
        </CardContent>
      </Card>

      {/* تمارين سريعة */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
            3 تمارين سريعة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-5">
          {batch.map((ex, i) => (
            <div key={ex.id}>
              <p className="mb-2 text-xs font-bold text-muted-foreground">تمرين {i + 1}/3</p>
              <ExerciseRenderer exercise={ex} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* درس اليوم */}
      {lesson && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
          <div>
            <p className="inline-flex items-center gap-2 font-bold">
              <Clock className="h-4 w-4 text-gold-strong-foreground" aria-hidden="true" />
              درس اليوم المقترح
            </p>
            <p className="font-de mt-1 text-sm" dir="ltr" lang="de">
              {lesson.titleDe}
            </p>
          </div>
          <Button asChild size="sm" className="gap-1.5">
            <a href={`/lesson/${lesson.id}`}>ابدأ الدرس</a>
          </Button>
        </div>
      )}

      <Progress value={((TOTAL_SECONDS - remaining) / TOTAL_SECONDS) * 100} aria-label="التقدم في الكبسولة" />
    </div>
  );
}
