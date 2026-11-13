"use client";

import Link from "next/link";
import * as React from "react";
import {Award, BookOpen, GraduationCap, RotateCcw} from "lucide-react";

import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {LESSON_META} from "@/data/lessons/meta";
import {sample} from "@/lib/lesson/shuffle";
import {getQuickPlacementSuggestion} from "@/lib/tests/quick-placement";
import type { McqExercise } from "@/types/lesson";

/** بنك أسئلة التحديد — A1 ثم A2 ثم B1 (المبسط) — 5 أسئلة لكل مستوى */
const PLACEMENT_BANK: McqExercise[] = [
  /* ── A1 (مستوى 1-5) ── */
  {
    id: "pl-a1-1", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1) — اختر الإجابة الصحيحة:",
    questionDe: "Ich ___ Anna.",
    options: ["bin", "bist", "ist", "sind"],
    correctIndex: 0, explanation: "مع ich: bin. (أساسيات A1)",
    errorType: "conjugation",
  },
  {
    id: "pl-a1-2", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "Ich esse ___ Apfel.",
    options: ["einen", "ein", "eine", "der"],
    correctIndex: 0, explanation: "النصب المذكر بعد essen: einen. (A1)",
    errorType: "case",
  },
  {
    id: "pl-a1-3", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "Das Buch ist ___ Tisch. (على)",
    options: ["auf dem", "auf den", "auf der", "auf das"],
    correctIndex: 0, explanation: "السكون مع المذكر: auf dem. (A1)",
    errorType: "preposition",
  },
  {
    id: "pl-a1-4", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "Wie heißt du? — Ich ___ Karim.",
    options: ["heiße", "heißt", "heiß", "heißen"],
    correctIndex: 0, explanation: "مع ich: heiße. (A1)",
    errorType: "conjugation",
  },
  {
    id: "pl-a1-5", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A1):",
    questionDe: "___ du Hunger? — Ja, ich habe Hunger.",
    options: ["Hast", "Habe", "Hat", "Habt"],
    correctIndex: 0, explanation: "السؤال عن du: Hast du Hunger? (A1)",
    errorType: "conjugation",
  },
  /* ── A2 (مستوى 6-10) ── */
  {
    id: "pl-a2-1", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2) — اختر الإجابة الصحيحة:",
    questionDe: "Ich ___ gestern nach Berlin ___.",
    options: ["bin ... geflogen", "habe ... geflogen", "bin ... gefliegen", "habe ... gefliegen"],
    correctIndex: 0, explanation: "fliegen حركة → sein + geflogen. (A2)",
    errorType: "grammar",
  },
  {
    id: "pl-a2-2", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Ich glaube, dass er heute ___.",
    options: ["kommt", "kommen", "kommst", "komme"],
    correctIndex: 0, explanation: "الفعل في نهاية الجملة الثانوية. (A2)",
    errorType: "grammar",
  },
  {
    id: "pl-a2-3", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Kannst du ___ helfen? (أنا)",
    options: ["mir", "mich", "dich", "dir"],
    correctIndex: 0, explanation: "helfen يأخذ Dativ: mir. (A2)",
    errorType: "case",
  },
  {
    id: "pl-a2-4", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Es gibt ___ Park in der Stadt.",
    options: ["einen", "ein", "eine", "der"],
    correctIndex: 0, explanation: "es gibt + نصب مذكر: einen. (A2)",
    errorType: "case",
  },
  {
    id: "pl-a2-5", type: "multiple-choice",
    instructionAr: "سؤال تحديد (A2):",
    questionDe: "Der Zug ist ___ als der Bus.",
    options: ["schneller", "schnell", "am schnellsten", "schnelle"],
    correctIndex: 0, explanation: "المقارنة: schneller als. (A2)",
    errorType: "grammar",
  },
  /* ── B1 (مستوى 11-15) ── */
  {
    id: "pl-b1-1", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1) — اختر الإجابة الصحيحة:",
    questionDe: "Wenn ich Zeit habe, ___ ich ein Buch.",
    options: ["lese", "ich lese", "lesen", "gelesen"],
    correctIndex: 0, explanation: "الجملة الثانوية أولاً → الفعل الرئيسي بعدها مباشرة. (B1)",
    errorType: "word-order",
  },
  {
    id: "pl-b1-2", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Ich lerne Deutsch, ___ ich in Deutschland studieren will.",
    options: ["weil", "dass", "wenn", "ob"],
    correctIndex: 0, explanation: "سبب → weil. (B1)",
    errorType: "grammar",
  },
  {
    id: "pl-b1-3", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Das Buch, ___ ich lese, ist interessant.",
    options: ["das", "der", "die", "den"],
    correctIndex: 0, explanation: "الجملة النسبية: das Buch → das. (B1)",
    errorType: "grammar",
  },
  {
    id: "pl-b1-4", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Wenn ich reich wäre, ___ ich um die Welt.",
    options: ["reiste", "reisen", "gereist", "reisen würde"],
    correctIndex: 0, explanation: "Konjunktiv II: würde/reiste. (B1)",
    errorType: "grammar",
  },
  {
    id: "pl-b1-5", type: "multiple-choice",
    instructionAr: "سؤال تحديد (B1):",
    questionDe: "Das Haus ___ 1900 gebaut.",
    options: ["wurde", "wird", "worden", "geworden"],
    correctIndex: 0, explanation: "المبني للمجهول في الماضي: wurde gebaut. (B1)",
    errorType: "grammar",
  },
];

const PER_LEVEL = 5;



/**
 * اختبار تحديد المستوى التكيفي — يبدأ بـ A1 ويتقدم عند النجاح (≥3/5)
 * — نواة نظام الاختبارات الكامل (المرحلة 10) —
 */
export function PlacementTest() {
  const [questions, setQuestions] = React.useState<McqExercise[]>([]);
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, { correct: boolean; chosen?: string }>>({});
  const [finished, setFinished] = React.useState(false);
  const [round, setRound] = React.useState(0);
  const [levelIdx, setLevelIdx] = React.useState(0);
  const [levelCorrect, setLevelCorrect] = React.useState(0);
  const [allQuestions, setAllQuestions] = React.useState<McqExercise[]>([]);

  const LEVELS = ["a1", "a2", "b1"] as const;

  React.useEffect(() => {
    const a1 = sample(PLACEMENT_BANK.filter((q) => q.id.startsWith("pl-a1")), PER_LEVEL);
    setQuestions(a1);
    setAllQuestions(a1);
    setIndex(0);
    setScore(0);
    setAnswers({});
    setFinished(false);
    setLevelIdx(0);
    setLevelCorrect(0);
  }, [round]);

  const totalAnswered = Object.keys(answers).length;

  // حفظ مستوى المتعلم تلقائياً بعد إتمام التقييم — تغذّي «لوحة الرحلة»
  React.useEffect(() => {
    if (finished && totalAnswered > 0) {
      const result = getQuickPlacementSuggestion(score, totalAnswered);
      void import("@/lib/storage/learner").then(({saveLearnerProfile}) =>
        saveLearnerProfile({ placementLevel: result.level as "A1" | "A2" | "B1" | "B2" }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const current = questions[index];

  const handleResult = (correct: boolean, id: string, chosen?: string) => {
    if (answers[id] !== undefined) return;
    const next = { ...answers, [id]: { correct, chosen } };
    setAnswers(next);
    if (correct) {
      setScore((s) => s + 1);
      setLevelCorrect((c) => c + 1);
    }
    setTimeout(() => {
      setIndex((i) => {
        if (i + 1 < questions.length) return i + 1;
        // انتهى مستوى — قرر: تقدم أم توقف
        const totalCorrect = correct ? levelCorrect + 1 : levelCorrect;
        if (totalCorrect >= 3 && levelIdx < LEVELS.length - 1) {
          // تقدم للمستوى التالي
          const nextLevel = LEVELS[levelIdx + 1];
          const nextQs = sample(PLACEMENT_BANK.filter((q) => q.id.startsWith(`pl-${nextLevel}`)), PER_LEVEL);
          setQuestions(nextQs);
          setAllQuestions((prev) => [...prev, ...nextQs]);
          setLevelIdx((l) => l + 1);
          setLevelCorrect(0);
          return 0;
        }
        setFinished(true);
        return i;
      });
    }, 800);
  };

  if (questions.length === 0) {
    return <p className="text-sm text-muted-foreground">جارٍ تجهيز الاختبار…</p>;
  }

  if (finished) {
    const result = getQuickPlacementSuggestion(score, totalAnswered);
    return (
      <div className="rounded-2xl border bg-muted/20 p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {result.level === "B1" ? (
            <GraduationCap className="h-8 w-8 text-success" aria-hidden="true" />
          ) : (
            <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />
          )}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold">{result.label}</h3>
        <p className="font-de mt-2 text-4xl font-extrabold text-primary">
          {Math.round((score / totalAnswered) * 100)}%
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          أجبت صحيحاً على {score} من {totalAnswered} — {result.message}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          هذا اقتراح بداية من عينة داخلية قصيرة، وليس قياساً معيارياً أو تصنيفاً رسمياً لمستوى CEFR.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="gold" className="gap-1.5">
            <Link href={`/learning-path#${result.level.toLowerCase()}`}>
              <Award className="h-4 w-4" aria-hidden="true" />
              ابدأ من النطاق المقترح {result.level}
            </Link>
          </Button>
          <StartAtLevelButton level={result.level} />
          <Button variant="outline" onClick={() => setRound((r) => r + 1)} className="gap-1.5">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            إعادة الاختبار
          </Button>
        </div>
        {/* مراجعة الأدلة — كل سؤالٍ بشاهده */}
        <div className="mt-8 text-start" data-testid="exam-review">
          <h4 className="mb-3 text-lg font-bold">مراجعة الأدلة</h4>
          <div className="space-y-3">
            {allQuestions.map((q) => {
              const ans = answers[q.id];
              const ok = ans?.correct ?? false;
              const correctOpt = q.options[q.correctIndex];
              return (
                <div key={q.id} data-testid="exam-review-item" className="rounded-xl border bg-card p-3">
                  <p className="text-sm">
                    <span aria-hidden className={ok ? "text-success" : "text-destructive"}>{ok ? "✓" : "✗"}</span>{" "}
                    <span dir="ltr" lang="de" className="font-de">{q.questionDe}</span>
                  </p>
                  <p className="mt-1 text-xs">
                    جوابك: <span dir="ltr" lang="de" className="font-de">{ans?.chosen ?? "— لم تُجب"}</span> ·
                    الصحيح: <span dir="ltr" lang="de" className="font-de">{correctOpt}</span>
                  </p>
                  {q.explanation && (
                    <p className="mt-1 rounded-md bg-muted/40 p-2 text-xs leading-relaxed">
                      <span className="font-bold">الدليل: </span>
                      <span data-testid="exam-review-evidence">{q.explanation}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
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
      <Link href={`/lesson/${firstLesson.id}`}>
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        انطلق في المسار: {firstLesson.titleAr}
      </Link>
    </Button>
  );
}
