"use client";

import * as React from "react";
import {ChevronLeft, GraduationCap, Headphones} from "lucide-react";

import {ResultsPanel} from "@/components/tests/results-panel";
import {Button} from "@/components/ui/button";
import {TEST_BANK} from "@/data/tests/question-banks";
import {speakSequence} from "@/lib/speech/voices";
import {buildTestResult} from "@/lib/tests/test-engine";
import {cn} from "@/lib/utils";
import type { TestLevel, TestQuestion, TestResult, TestSkill } from "@/types/test";

const SKILLS: { skill: TestSkill; label: string; icon: string }[] = [
  { skill: "grammatik", label: "القواعد", icon: "📘" },
  { skill: "wortschatz", label: "المفردات", icon: "📚" },
  { skill: "lesen", label: "القراءة", icon: "📖" },
  { skill: "hören", label: "الاستماع", icon: "🎧" },
  { skill: "schreiben", label: "الكتابة", icon: "✍️" },
];

const LEVELS: TestLevel[] = ["A1", "A2", "B1", "B2"];
const QUESTIONS_PER_LEVEL = 3;
const PASS_THRESHOLD = 2;

/**
 * اختبار تحديد المستوى التشخيصي — تكيفي لكل مهارة:
 * يبدأ من A1 ويتقدم عند النجاح (≥2/3) ويتوقف عند الرسوب.
 */
export function PlacementDiagnostic() {
  const [skillIdx, setSkillIdx] = React.useState(0);
  const [levelIdx, setLevelIdx] = React.useState(0);
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<Map<string, string | number | null>>(new Map());
  const answersRef = React.useRef(answers);
  const [skillLevels, setSkillLevels] = React.useState<Record<string, TestLevel>>({});
  const [finished, setFinished] = React.useState(false);
  const [result, setResult] = React.useState<TestResult | null>(null);
  const [round, setRound] = React.useState(0);

  const skill = SKILLS[skillIdx].skill;
  const level = LEVELS[levelIdx];
  const questions = React.useMemo(
    () => TEST_BANK.filter((q) => q.skill === skill && q.level === level).slice(0, QUESTIONS_PER_LEVEL),
    [skill, level],
  );
  const current = questions[questionIdx];

  const updateAnswer = (id: string, value: string | number | null) => {
    const next = new Map(answersRef.current);
    next.set(id, value);
    answersRef.current = next;
    setAnswers(next);
  };

  /** حساب صحة أسئلة مستوى المهارة الحالي */
  const correctInCurrentLevel = () => {
    let correct = 0;
    for (const q of questions) {
      const a = answersRef.current.get(q.id);
      if (q.kind === "mcq" && q.correctIndex !== undefined && a === q.correctIndex) correct++;
      if (q.kind === "writing") {
        const ans = typeof a === "string" ? a : "";
        if (ans.trim().length > 3) correct++;
      }
    }
    return correct;
  };

  const computeFinal = async () => {
    const allQuestions = TEST_BANK;
    const res = await buildTestResult({
      kind: "diagnostic",
      level: "A1",
      startedAt: Date.now() - 1000,
      finishedAt: Date.now(),
      questions: allQuestions,
      answers: answersRef.current,
    });
    const adjusted = {
      ...res,
      skillResults: res.skillResults.map((sr) => ({
        ...sr,
        level: skillLevels[sr.skill] ?? "A1",
        pct: sr.skill === "grammatik" || sr.skill === "wortschatz" || sr.skill === "lesen" || sr.skill === "hören"
          ? (skillLevels[sr.skill] === "B2" ? 85 : skillLevels[sr.skill] === "B1" ? 70 : skillLevels[sr.skill] === "A2" ? 55 : 40)
          : sr.pct,
      })),
    };
    const pts: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4 };
    const lvls = Object.values(skillLevels);
    const avg = lvls.length ? lvls.reduce((s, l) => s + pts[l], 0) / lvls.length : 1;
    adjusted.estimatedLevel = avg >= 3.5 ? "B2" : avg >= 2.5 ? "B1" : avg >= 1.5 ? "A2" : "A1";
    adjusted.overallPct = Math.round((avg / 4) * 100);
    setResult(adjusted);
    setFinished(true);
  };

  const advanceSkill = (lastLevel: TestLevel) => {
    setSkillLevels((prev) => ({ ...prev, [skill]: lastLevel }));
    if (skillIdx + 1 < SKILLS.length) {
      setSkillIdx((i) => i + 1);
      setLevelIdx(0);
      setQuestionIdx(0);
    } else {
      computeFinal();
    }
  };

  const handleMcq = (value: number) => {
    if (!current) return;
    updateAnswer(current.id, value);
    setTimeout(() => {
      if (questionIdx + 1 < questions.length) {
        setQuestionIdx((i) => i + 1);
      } else {
        const correct = correctInCurrentLevel();
        if (correct >= PASS_THRESHOLD && levelIdx < LEVELS.length - 1) {
          setLevelIdx((i) => i + 1);
          setQuestionIdx(0);
        } else {
          advanceSkill(correct >= PASS_THRESHOLD ? level : levelIdx === 0 ? "A1" : LEVELS[Math.max(0, levelIdx - 1)]);
        }
      }
    }, 350);
  };

  const handleWritingNext = () => {
    setTimeout(() => {
      if (questionIdx + 1 < questions.length) {
        setQuestionIdx((i) => i + 1);
      } else {
        advanceSkill(levelIdx === 0 ? "A1" : LEVELS[Math.max(0, levelIdx - 1)]);
      }
    }, 150);
  };

  const restart = () => {
    setRound((r) => r + 1);
    setSkillIdx(0);
    setLevelIdx(0);
    setQuestionIdx(0);
    setAnswers(new Map());
    answersRef.current = new Map();
    setSkillLevels({});
    setFinished(false);
    setResult(null);
  };

  if (finished && result) {
    return (
      <ResultsPanel
        result={result}
        onRetry={restart}
        nextLabel="ابدأ من مستواك"
        onNext={() => {
          window.location.href = `/learning-path#${result.estimatedLevel.toLowerCase()}`;
        }}
      />
    );
  }

  if (!current) {
    return <p className="text-sm text-muted-foreground">جارٍ تجهيز الأسئلة…</p>;
  }

  return (
    <div key={round} className="space-y-4">
      {/* شريط المهارات */}
      <div className="flex flex-wrap gap-1.5">
        {SKILLS.map((s, i) => (
          <span
            key={s.skill}
            className={cn(
              "inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-semibold",
              i === skillIdx
                ? "border-primary bg-primary text-primary-foreground"
                : skillLevels[s.skill]
                  ? "border-success/40 bg-success/10 text-success"
                  : "bg-muted/40 text-muted-foreground",
            )}
          >
            {s.icon} {s.label}
            {skillLevels[s.skill] && <span className="font-de ms-1">({skillLevels[s.skill]})</span>}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-3">
        <p className="text-sm font-bold">
          {SKILLS[skillIdx].icon} {SKILLS[skillIdx].label} — المستوى{" "}
          <span className="font-de">{level}</span>
        </p>
        <span className="text-xs text-muted-foreground">
          سؤال {questionIdx + 1}/{questions.length} · أجب 2 من 3 للتقدم
        </span>
      </div>

      <div className="rounded-xl border bg-card p-4">
        {current.kind === "reading" && current.text && (
          <div className="mb-3 rounded-lg bg-muted/30 p-3">
            <p className="font-de text-sm leading-relaxed" dir="ltr" lang="de">
              {current.text}
            </p>
          </div>
        )}
        {current.kind === "listening" && current.text && (
          <div className="mb-3 rounded-lg bg-muted/30 p-3">
            <Button variant="outline" size="sm" onClick={() => speakSequence([{ de: current.text ?? "" }, { de: current.text ?? "" }], { rate: 0.9 })} className="gap-1.5">
              <Headphones className="h-4 w-4" aria-hidden="true" />
              استمع مرتين
            </Button>
          </div>
        )}

        {current.kind === "writing" ? (
          <div className="space-y-3">
            <p className="font-de text-lg font-bold" dir="ltr" lang="de">
              {current.prompt}
            </p>
            <p className="text-sm text-muted-foreground">{current.promptAr}</p>
            <textarea
              value={(answers.get(current.id) as string) ?? ""}
              onChange={(e) => updateAnswer(current.id, e.target.value)}
              placeholder="اكتب إجابتك..."
              dir="ltr"
              lang="de"
              rows={3}
              className="font-de w-full rounded-xl border border-input bg-background p-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
            />
            <Button size="sm" onClick={handleWritingNext} className="gap-1.5">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              التالي
            </Button>
          </div>
        ) : (
          <>
            <p className="font-de text-lg font-bold" dir="ltr" lang="de">
              {current.questionDe}
            </p>
            {current.questionAr && <p className="mt-1 text-sm text-muted-foreground">{current.questionAr}</p>}
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {current.options?.map((opt, i) => {
                const selected = answers.get(current.id) === i;
                return (
                  <button
                    key={`${opt}-${i}`}
                    type="button"
                    onClick={() => handleMcq(i)}
                    className={cn(
                      "rounded-xl border bg-background px-4 py-3 text-start transition-all hover:border-primary/50 active:scale-[0.99]",
                      selected && "border-primary bg-primary/10 ring-2 ring-ring",
                    )}
                  >
                    <span className="font-de font-medium" dir="ltr" lang="de">
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        <GraduationCap className="inline h-3.5 w-3.5" aria-hidden="true" />
        الخوارزمية التكيفية: نجحت في مستوى؟ ننتقل للأعلى. رسوب؟ نتوقف ونقدر مستواك.
      </p>
    </div>
  );
}
