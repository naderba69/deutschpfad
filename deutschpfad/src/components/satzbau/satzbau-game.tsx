"use client";

/**
 * لعبة تركيب الجمل (Satzbau) — انقر الكلمات بالترتيب الصحيح
 * مع تلميح القاعدة والتصحيح الفوري.
 */
import * as React from "react";
import {CheckCircle2, Lightbulb, Shuffle, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {SATZBAU_LEVELS, getPuzzlesByLevel, type SatzbauPuzzle} from "@/data/satzbau";
import {cn} from "@/lib/utils";

export function SatzbauGame() {
  const [level, setLevel] = React.useState<(typeof SATZBAU_LEVELS)[number]>("A1");
  const [idx, setIdx] = React.useState(0);
  const [bank, setBank] = React.useState<string[]>([]);
  const [picked, setPicked] = React.useState<string[]>([]);
  const [feedback, setFeedback] = React.useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = React.useState({ correct: 0, total: 0 });
  const [round, setRound] = React.useState(0);

  const puzzles = getPuzzlesByLevel(level);
  const current: SatzbauPuzzle | undefined = puzzles[idx];

  const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

  const loadLevel = (l: (typeof SATZBAU_LEVELS)[number]) => {
    setLevel(l);
    setIdx(0);
    setScore({ correct: 0, total: 0 });
    setRound((r) => r + 1);
  };

  const loadPuzzle = (p: SatzbauPuzzle, start = true) => {
    setBank(shuffle(p.words));
    setPicked([]);
    setFeedback(null);
    if (start) setScore((s) => ({ ...s, total: s.total + 1 }));
  };

  React.useEffect(() => {
    if (current) loadPuzzle(current, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, level, round]);

  const pick = (w: string, bankIdx: number) => {
    if (feedback) return;
    setPicked((p) => [...p, w]);
    setBank((b) => b.filter((_, i) => i !== bankIdx));
  };

  const unpick = (i: number) => {
    if (feedback) return;
    const w = picked[i];
    setPicked((p) => p.filter((_, j) => j !== i));
    setBank((b) => [...b, w]);
  };

  const check = () => {
    if (!current || feedback) return;
    const norm = (s: string) => s.replace(/[.,!?]/g, "").toLowerCase().trim();
    const correctWords = current.correct.map((w) => norm(w)).filter(Boolean);
    const pickedWords = picked.map((w) => norm(w)).filter(Boolean);
    const ok = correctWords.length === pickedWords.length && correctWords.every((w, i) => w === pickedWords[i]);
    setFeedback(ok ? "correct" : "wrong");
    if (ok) setScore((s) => ({ ...s, correct: s.correct + 1 }));
  };

  const next = () => {
    if (idx + 1 < puzzles.length) {
      setIdx((i) => i + 1);
    } else {
      setIdx(0);
      setRound((r) => r + 1);
    }
  };

  const resetPuzzle = () => {
    if (current) loadPuzzle(current);
  };

  return (
    <div key={round} className="space-y-5">
      {/* المستوى */}
      <div className="flex flex-wrap gap-1.5">
        {SATZBAU_LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => loadLevel(l)}
            className={cn(
              "font-de rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
              level === l ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {current && (
        <Card className="overflow-hidden">
          <CardContent className="space-y-4 p-5">
            {/* الرأس */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-primary">
                اللغز {idx + 1} من {puzzles.length} — {level}
              </p>
              <span className="text-xs text-muted-foreground">صحيح {score.correct}/{score.total}</span>
            </div>
            <Progress value={(idx / puzzles.length) * 100} aria-label="التقدم" />

            {/* الترجمة (تلميح) */}
            <p className="rounded-xl border bg-muted/20 p-3 text-sm text-muted-foreground">
              💬 المعنى: {current.ar}
            </p>

            {/* الجملة المبنية */}
            <div className="flex min-h-14 flex-wrap items-center gap-1.5 rounded-xl border-2 border-dashed p-3">
              {picked.length === 0 && <span className="text-sm text-muted-foreground">انقر الكلمات بالترتيب الصحيح…</span>}
              {picked.map((w, i) => (
                <button
                  key={`${w}-${i}`}
                  type="button"
                  onClick={() => unpick(i)}
                  className="font-de rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-bold text-primary transition-colors hover:bg-destructive/10 hover:text-destructive"
                  title="انقر للإلغاء"
                >
                  {w}
                </button>
              ))}
            </div>

            {/* بنك الكلمات */}
            <div className="flex flex-wrap gap-1.5">
              {bank.map((w, i) => (
                <button
                  key={`${w}-${i}`}
                  type="button"
                  onClick={() => pick(w, i)}
                  className="font-de rounded-lg border bg-background px-3 py-1.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/5"
                  dir="ltr"
                  lang="de"
                >
                  {w}
                </button>
              ))}
            </div>

            {/* الأزرار */}
            <div className="flex flex-wrap items-center gap-2">
              {!feedback ? (
                <>
                  <Button onClick={check} disabled={picked.length === 0 || bank.length > 0}>تحقق من الجملة</Button>
                  <Button variant="outline" onClick={resetPuzzle} className="gap-1.5">
                    <Shuffle className="h-4 w-4" aria-hidden="true" />
                    خلط الكلمات
                  </Button>
                </>
              ) : (
                <Button onClick={next}>التالي ←</Button>
              )}
              <SpeakButton text={picked.join(" ") || current.correct.join(" ")} variant="ghost" size="sm" label="استمع للجملة" />
            </div>

            {/* التصحيح */}
            {feedback && (
              <div
                className={cn(
                  "flex items-start gap-2 rounded-xl border p-3 text-sm",
                  feedback === "correct" ? "border-success/40 bg-success/10" : "border-destructive/40 bg-destructive/10",
                )}
                role="status"
              >
                {feedback === "correct" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                ) : (
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                )}
                <div>
                  {feedback === "correct" ? (
                    <p className="font-bold text-success">تركيب صحيح! 🎉</p>
                  ) : (
                    <>
                      <p className="font-bold text-destructive">الترتيب الصحيح:</p>
                      <p className="font-de mt-1 rounded-lg bg-background p-2" dir="ltr" lang="de">
                        {current.correct.join(" ")}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* تلميح القاعدة */}
            {feedback && (
              <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold-strong" aria-hidden="true" />
                <p className="text-muted-foreground">
                  <span className="font-bold text-gold-foreground">القاعدة: </span>
                  {current.tip}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
