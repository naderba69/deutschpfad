"use client";

/**
 * تدريب الإملاء (Diktate) — استمع واكتب ثم صحح فورياً
 * مع تلميحات الكلمات الصعبة وملاحظات تربوية لكل مستوى.
 */
import * as React from "react";
import {CheckCircle2, Ear, Eye, RotateCcw, XCircle} from "lucide-react";

import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {speakGerman, stopSpeaking} from "@/lib/speech/voices";
import {DIKTAT_LEVELS, getDiktateByLevel, type Diktat} from "@/data/diktate";
import {cn} from "@/lib/utils";

/** تسوية للمقارنة: تجاهل علامات ونهايات */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:""„“]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** مطابقة تقريبية: عدد الكلمات المشتركة */
function similar(a: string, b: string): boolean {
  const aw = norm(a).split(" ").filter(Boolean);
  const bw = norm(b).split(" ").filter(Boolean);
  if (aw.length === 0 || bw.length === 0) return false;
  const hits = aw.filter((w) => bw.includes(w)).length;
  return hits / Math.max(aw.length, bw.length) >= 0.85;
}

export function DiktatTrainer() {
  const [level, setLevel] = React.useState<(typeof DIKTAT_LEVELS)[number]>("A1");
  const [idx, setIdx] = React.useState(0);
  const [answer, setAnswer] = React.useState("");
  const [feedback, setFeedback] = React.useState<"correct" | "wrong" | null>(null);
  const [revealed, setRevealed] = React.useState(false);
  const [score, setScore] = React.useState({ correct: 0, total: 0 });
  const [round, setRound] = React.useState(0);

  const diktate = getDiktateByLevel(level);
  const current: Diktat | undefined = diktate[idx];

  const selectLevel = (l: (typeof DIKTAT_LEVELS)[number]) => {
    stopSpeaking();
    setLevel(l);
    setIdx(0);
    setAnswer("");
    setFeedback(null);
    setRevealed(false);
    setScore({ correct: 0, total: 0 });
    setRound((r) => r + 1);
  };

  const play = (rate = 0.85) => {
    if (!current) return;
    speakGerman(current.text, { rate, onEnd: () => {}, onError: () => {} });
  };

  const check = () => {
    if (!current || feedback) return;
    const ok = norm(answer) === norm(current.text) || similar(answer, current.text);
    setFeedback(ok ? "correct" : "wrong");
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => {
    if (idx + 1 < diktate.length) {
      setIdx((i) => i + 1);
      setAnswer("");
      setFeedback(null);
      setRevealed(false);
    } else {
      // انتهت الجولة
      setIdx(0);
      setRound((r) => r + 1);
    }
  };

  return (
    <div key={round} className="space-y-5">
      {/* اختيار المستوى */}
      <div className="flex flex-wrap gap-1.5">
        {DIKTAT_LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => selectLevel(l)}
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
                إملاء {level} — الجملة {idx + 1} من {diktate.length}
              </p>
              <span className="text-xs text-muted-foreground">
                صحيح {score.correct}/{score.total}
              </span>
            </div>
            <Progress value={(idx / diktate.length) * 100} aria-label="التقدم" />

            {/* التشغيل */}
            <div className="rounded-xl border bg-muted/20 p-4 text-center">
              <p className="text-sm text-muted-foreground">🎧 استمع ثم اكتب ما سمعت:</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <Button onClick={() => play(0.8)} className="gap-1.5">
                  <Ear className="h-4 w-4" aria-hidden="true" />
                  استمع (بطيء)
                </Button>
                <Button variant="outline" onClick={() => play(1)}>استمع (عادي)</Button>
                <Button variant="ghost" size="sm" onClick={stopSpeaking}>⏹ إيقاف</Button>
              </div>
              {!feedback && (
                <button
                  type="button"
                  onClick={() => setRevealed((v) => !v)}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-primary"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  {revealed ? "إخفاء النص" : "عرض النص (استسلام)"}
                </button>
              )}
              {revealed && !feedback && (
                <p className="font-de mt-2 rounded-lg border border-gold/40 bg-gold/10 p-3 text-sm" dir="ltr" lang="de">
                  {current.text}
                </p>
              )}
            </div>

            {/* الكتابة */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
              <AutoGrowTextarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onEnter={() => {
                  if (!feedback) check();
                  else next();
                }}
                placeholder="اكتب الجملة هنا…"
                dir="ltr"
                lang="de"
                disabled={!!feedback}
                className="font-de flex-1"
              />
              {!feedback ? (
                <Button onClick={check} disabled={!answer.trim()}>تحقق</Button>
              ) : (
                <Button onClick={next} variant="outline">التالي ←</Button>
              )}
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
                    <p className="font-bold text-success">إملاء صحيح! 🎉</p>
                  ) : (
                    <>
                      <p className="font-bold text-destructive">ليس مطابقاً تماماً — النص الصحيح:</p>
                      <p className="font-de mt-1 rounded-lg bg-background p-2" dir="ltr" lang="de">{current.text}</p>
                    </>
                  )}
                  <p className="mt-1 text-muted-foreground">{current.ar}</p>
                </div>
              </div>
            )}

            {/* التلميحات */}
            {feedback && (
              <div className="rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
                <p className="font-bold text-gold-foreground">🔤 كلمات التركيز: {current.focusWords.join("، ")}</p>
                <p className="mt-1 text-muted-foreground">{current.note}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* النتيجة عند نهاية المستوى */}
      {current && score.total >= diktate.length && (
        <Card className="overflow-hidden border-success/40 bg-success/5">
          <CardContent className="p-6 text-center">
            <p className="font-de text-4xl font-extrabold text-success">
              {score.correct}/{score.total}
            </p>
            <p className="mt-1 font-bold">
              {score.correct / score.total >= 0.8
                ? "ممتاز في الإملاء! 🏆"
                : "جيد — أعد الجولة لتحسين الدقة"}
            </p>
            <Button className="mt-4" onClick={next} variant="outline">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              إعادة الجولة
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
