"use client";

/**
 * تدريب تحويل الجمل (Umschreibungen) — بأساليب Goethe B2
 * اختر نوع التحويل → حوّل الجملة → تصحيح فوري مع الإجابة النموذجية.
 */
import * as React from "react";
import {ArrowLeftRight, CheckCircle2, ChevronRight, Eye, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {UMSCHREIB_TYPEN, getUmschreibByTyp, type UmschreibExercise, type UmschreibTyp} from "@/data/umschreibungen";
import {cn} from "@/lib/utils";

/** تسوية النص للمقارنة (تجاهل علامات ومسافات وحالة) */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:"«»„“]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function UmschreibungenClient() {
  const [typ, setTyp] = React.useState<UmschreibTyp | null>(null);
  const [idx, setIdx] = React.useState(0);
  const [answer, setAnswer] = React.useState("");
  const [feedback, setFeedback] = React.useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = React.useState({ correct: 0, total: 0 });
  const [revealed, setRevealed] = React.useState(false);
  const [round, setRound] = React.useState(0);

  const exercises = typ ? getUmschreibByTyp(typ.id) : [];
  const current: UmschreibExercise | undefined = exercises[idx];

  const selectTyp = (t: UmschreibTyp | null) => {
    setTyp(t);
    setIdx(0);
    setAnswer("");
    setFeedback(null);
    setRevealed(false);
    setScore({ correct: 0, total: 0 });
    setRound((r) => r + 1);
  };

  const check = () => {
    if (!current || feedback) return;
    const ok = normalize(answer) === normalize(current.sampleAnswer) ||
      current.acceptedAnswers.some((a) => normalize(a) === normalize(answer));
    setFeedback(ok ? "correct" : "wrong");
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => {
    if (idx + 1 < exercises.length) {
      setIdx((i) => i + 1);
      setAnswer("");
      setFeedback(null);
      setRevealed(false);
    } else {
      // انتهت الجولة
      selectTyp(null);
    }
  };

  const resetTyp = () => {
    setIdx(0);
    setAnswer("");
    setFeedback(null);
    setRevealed(false);
    setScore({ correct: 0, total: 0 });
    setRound((r) => r + 1);
  };

  return (
    <div key={round} className="space-y-5">
      {/* شبكة الأنواع العشرة */}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">
        {UMSCHREIB_TYPEN.map((t) => {
          const count = getUmschreibByTyp(t.id).length;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => selectTyp(typ?.id === t.id ? null : t)}
              className={cn(
                "rounded-xl border p-2.5 text-start transition-colors",
                typ?.id === t.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card hover:border-primary/40",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-de text-sm font-extrabold" dir="ltr" lang="de">
                  {t.num}. {t.titleDe}
                </span>
                <Badge
                  variant={typ?.id === t.id ? "secondary" : "outline"}
                  className="text-[9px]"
                >
                  {count}
                </Badge>
              </div>
              <p className="mt-0.5 text-[11px] leading-tight opacity-80">{t.titleAr}</p>
            </button>
          );
        })}
      </div>

      {/* لم يُختر نوع بعد */}
      {!typ && (
        <div className="rounded-2xl border border-dashed bg-muted/20 p-8 text-center">
          <ArrowLeftRight className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
          <h3 className="mt-3 text-lg font-extrabold">اختر نوع التحويل من الأعلى</h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            هذه الأنواع العشرة هي التي تظهر فعلياً في امتحان Goethe B2 (Grammatik). لكل نوع
            شرح ومثال أولاً، ثم تمارين تصحيح فوري.
          </p>
        </div>
      )}

      {/* بطاقة التمرين */}
      {typ && current && (
        <Card className="overflow-hidden">
          <CardContent className="space-y-4 p-5">
            {/* رأس النوع */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="inline-flex items-center gap-2 font-bold text-primary">
                <ArrowLeftRight className="h-5 w-5" aria-hidden="true" />
                <span className="font-de" dir="ltr" lang="de">{typ.titleDe}</span>
              </p>
              <span className="text-xs text-muted-foreground">
                {idx + 1}/{exercises.length} · صحيح {score.correct}/{score.total}
              </span>
            </div>
            <Progress value={(idx / exercises.length) * 100} aria-label="التقدم في النوع" />

            {/* شرح النوع + مثال */}
            <div className="rounded-xl border bg-muted/20 p-3 text-sm">
              <p className="text-muted-foreground">{typ.desc}</p>
              <p className="font-de mt-2 rounded-lg bg-background p-2.5" dir="ltr" lang="de">
                {typ.beispielDe}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{typ.beispielAr}</p>
            </div>

            {/* الجملة المطلوب تحويلها */}
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-4">
              <p className="text-xs font-bold text-primary">حوّل الجملة التالية:</p>
              <p className="font-de mt-1.5 text-lg font-bold" dir="ltr" lang="de">
                {current.prompt}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{current.promptAr}</p>
            </div>

            {/* الإدخال */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (!feedback) check();
                    else next();
                  }
                }}
                placeholder="اكتب التحويل هنا..."
                dir="ltr"
                lang="de"
                disabled={!!feedback}
                className="font-de flex-1 rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring disabled:opacity-60"
              />
              {!feedback ? (
                <Button onClick={check} disabled={!answer.trim()}>تحقق</Button>
              ) : (
                <Button onClick={next} variant="outline" className="gap-1">
                  {idx + 1 >= exercises.length ? "إنهاء هذا النوع" : "التالي"}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
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
                    <p className="font-bold text-success">تحويل صحيح! 🎉</p>
                  ) : (
                    <p className="font-bold text-destructive">ليس تماماً — قارن بالنموذج:</p>
                  )}
                  {feedback === "wrong" && (
                    <p className="font-de mt-1 rounded-lg bg-background p-2" dir="ltr" lang="de">
                      {current.sampleAnswer}
                    </p>
                  )}
                  <p className="mt-1 text-muted-foreground">{current.explanation}</p>
                </div>
              </div>
            )}

            {/* كشف الإجابة */}
            {!feedback && (
              <button
                type="button"
                onClick={() => setRevealed((v) => !v)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary"
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                {revealed ? "إخفاء الإجابة" : "كشف الإجابة النموذجية"}
              </button>
            )}
            {revealed && !feedback && (
              <p className="font-de rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm" dir="ltr" lang="de">
                {current.sampleAnswer}
              </p>
            )}

            {/* استماع */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>استمع للجملة الأصلية:</span>
              <SpeakButton text={current.prompt} variant="outline" size="sm" />
              <span className="ms-2">وللنموذج:</span>
              <SpeakButton text={current.sampleAnswer} variant="ghost" size="sm" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* نتيجة النوع عند الانتهاء */}
      {typ && !current && (
        <Card className="overflow-hidden">
          <CardContent className="p-8 text-center">
            <p className="font-de text-5xl font-extrabold text-primary">
              {score.correct}/{score.total}
            </p>
            <p className="mt-2 font-bold">
              {score.total > 0 && score.correct / score.total >= 0.8
                ? "ممتاز! أتقنت هذا النوع 🏆"
                : score.total > 0 && score.correct / score.total >= 0.5
                  ? "جيد — راجع الشرح وعد"
                  : "تدرب أكثر — هذا النوع من أصعب أسئلة B2"}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button onClick={resetTyp} variant="outline">إعادة نفس النوع</Button>
              <Button onClick={() => selectTyp(null)}>اختيار نوع آخر</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
