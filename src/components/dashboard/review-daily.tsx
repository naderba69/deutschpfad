"use client";

import * as React from "react";
import {CalendarClock, Dumbbell, RefreshCw} from "lucide-react";

import {ReviewSession} from "@/components/flashcards/review-session";
import {ExerciseRenderer} from "@/components/lesson/exercises/exercise-renderer";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getDueCards} from "@/lib/srs/flashcard-service";
import {sample} from "@/lib/lesson/shuffle";
import type { Exercise } from "@/types/lesson";

/** بنك مراجعة سريع من تمارين المستويات (يُبنى من دروس المنصة) */
const REVIEW_EXERCISES: Exercise[] = [
  {
    id: "rev-1", type: "multiple-choice",
    instructionAr: "مراجعة سريعة:",
    questionDe: "Ich ___ aus Tunesien.",
    options: ["bin", "bist", "ist", "sind"],
    correctIndex: 0, explanation: "مع ich: bin.",
    errorType: "conjugation",
  },
  {
    id: "rev-2", type: "multiple-choice",
    instructionAr: "مراجعة سريعة:",
    questionDe: "Das Buch liegt auf ___ Tisch.",
    options: ["dem", "den", "der", "das"],
    correctIndex: 0, explanation: "سكون مذكر: auf dem.",
    errorType: "case",
  },
  {
    id: "rev-3", type: "multiple-choice",
    instructionAr: "مراجعة سريعة:",
    questionDe: "Ich habe gestern ein Buch ___.",
    options: ["gelesen", "lesen", "gelest", "liest"],
    correctIndex: 0, explanation: "lesen → gelesen (Perfekt).",
    errorType: "grammar",
  },
  {
    id: "rev-4", type: "multiple-choice",
    instructionAr: "مراجعة سريعة:",
    questionDe: "Wenn ich Zeit ___, würde ich kommen.",
    options: ["hätte", "habe", "hatte", "haben"],
    correctIndex: 0, explanation: "Konjunktiv II: hätte.",
    errorType: "grammar",
  },
  {
    id: "rev-5", type: "multiple-choice",
    instructionAr: "مراجعة سريعة:",
    questionDe: "Er sagt, er ___ Zeit. (نقل كلام)",
    options: ["habe", "hat", "hätte", "haben"],
    correctIndex: 0, explanation: "Konjunktiv I: habe.",
    errorType: "grammar",
  },
  {
    id: "rev-6", type: "multiple-choice",
    instructionAr: "مراجعة سريعة:",
    questionDe: "Ich interessiere mich ___ Musik.",
    options: ["für", "auf", "von", "um"],
    correctIndex: 0, explanation: "sich interessieren für.",
    errorType: "preposition",
  },
];

/**
 * المراجعة اليومية — بطاقات SM-2 المستحقة + 3 تمارين مراجعة سريعة
 */
export function ReviewDaily() {
  const [dueCount, setDueCount] = React.useState(0);
  const [refreshKey, setRefreshKey] = React.useState(0);
  // ═══ إصلاح hydration: sample عشوائي في أول رندر → أُجّل إلى useEffect ═══
  const [batch, setBatch] = React.useState<typeof REVIEW_EXERCISES>([]);

  React.useEffect(() => {
    void getDueCards().then((c) => setDueCount(c.length));
  }, [refreshKey]);

  React.useEffect(() => {
    setBatch(sample(REVIEW_EXERCISES, 3));
  }, []);

  return (
    <div className="space-y-6">
      {/* بطاقات SM-2 */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
            بطاقاتك المستحقة اليوم (SM-2)
            <span className="font-de ms-auto rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
              {dueCount} بطاقة
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <ReviewSession refreshKey={refreshKey} />
          {dueCount === 0 && (
            <Button variant="outline" size="sm" className="mt-3" onClick={() => setRefreshKey((k) => k + 1)}>
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              تحديث
            </Button>
          )}
        </CardContent>
      </Card>

      {/* تمارين مراجعة سريعة */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Dumbbell className="h-5 w-5 text-primary" aria-hidden="true" />
            مراجعة قواعد سريعة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 p-5">
          <p className="text-sm text-muted-foreground">
            ثلاثة أسئلة من مستويات مختلفة — خلط (Interleaving) يقوي الذاكرة.
          </p>
          {batch.map((ex) => (
            <ExerciseRenderer key={ex.id} exercise={ex} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
