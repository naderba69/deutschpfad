"use client";

/**
 * مكتبة الاستماع بأسلوب Goethe B2 — Hörverstehen-Training
 * المنهجية: استمع (النص مخفي!) → أجب عن الأسئلة → كشف النص والتصحيح.
 * مثل الامتحان تماماً: لا تقرأ النص قبل الاستماع.
 */
import * as React from "react";
import {CheckCircle2, Ear, PlayCircle, XCircle} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {HOEREN_FORMATS, HOEREN_LIBRARY, type HoerenText} from "@/data/hoeren/library";
import {cn} from "@/lib/utils";

export function HoerenClient() {
  const [level, setLevel] = React.useState<"A1" | "A2" | "B1" | "B2">("A1");
  const [format, setFormat] = React.useState<HoerenText["format"]>("ansage");
  const [activeId, setActiveId] = React.useState<string>(HOEREN_LIBRARY[0].id);
  const [phase, setPhase] = React.useState<"listen" | "questions" | "result">("listen");
  const [answers, setAnswers] = React.useState<number[]>([]);
  const [rate, setRate] = React.useState(1);

  const texts = HOEREN_LIBRARY.filter((h) => h.format === format && h.level === level);
  const levelTexts = HOEREN_LIBRARY.filter((h) => h.level === level);
  const active = HOEREN_LIBRARY.find((h) => h.id === activeId) ?? HOEREN_LIBRARY[0];
  const qIndex = Math.min(answers.length, active.questions.length - 1);
  const finished = answers.length === active.questions.length;

  const selectLevel = (l: "A1" | "A2" | "B1" | "B2") => {
    setLevel(l);
    const first = HOEREN_LIBRARY.find((h) => h.level === l && h.format === format) ?? HOEREN_LIBRARY.find((h) => h.level === l);
    if (first) setActiveId(first.id);
    reset();
  };

  const selectFormat = (f: HoerenText["format"]) => {
    setFormat(f);
    const first = HOEREN_LIBRARY.find((h) => h.format === f && h.level === level);
    if (first) setActiveId(first.id);
    reset();
  };

  const selectText = (id: string) => {
    setActiveId(id);
    reset();
  };

  const reset = () => {
    setPhase("listen");
    setAnswers([]);
    setRate(1);
  };

  const answer = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    if (next.length === active.questions.length) setPhase("result");
  };

  const score = active.questions.reduce(
    (s, q, i) => s + (answers[i] === q.correct ? 1 : 0),
    0,
  );

  return (
    <div className="space-y-5">
      {/* فلترة المستوى */}
      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="المستوى">
        {(["A1", "A2", "B1", "B2"] as const).map((l) => (
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

      {/* تصفية الصيغ */}
      <div className="flex flex-wrap gap-1.5">
        {HOEREN_FORMATS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => selectFormat(f.id)}
            title={f.desc}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-bold transition-colors",
              format === f.id
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            )}
          >
            <span className="font-de" dir="ltr" lang="de">{f.de}</span> — {f.label}
          </button>
        ))}
      </div>

      {/* اختيار النص */}
      <div className="flex flex-wrap gap-1.5">
        {texts.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => selectText(t.id)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-sm font-bold transition-colors",
              activeId === t.id
                ? "border-primary bg-primary/10 text-primary"
                : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            )}
          >
            {t.titleAr}
          </button>
        ))}
      </div>

      {/* بطاقة النص */}
      <Card className="overflow-hidden">
        <CardContent className="space-y-4 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-de text-lg font-extrabold" dir="ltr" lang="de">
              {active.titleDe}
            </p>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">
              {HOEREN_FORMATS.find((f) => f.id === active.format)?.label}
            </span>
          </div>

          {/* مرحلة الاستماع */}
          {phase === "listen" && (
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground">
                🎧 استمع كما في الامتحان — <span className="font-bold">النص مخفي!</span> يمكنك
                الاستماع مرتين (مثل غوته الحقيقي).
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <SpeakButton text={active.text} rate={rate} label="استمع للنص" />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRate((r) => (r === 0.75 ? 1 : 0.75))}
                >
                  السرعة: {rate === 1 ? "عادية ×1" : "بطيئة ×0.75"}
                </Button>
              </div>
              <Button
                onClick={() => setPhase("questions")}
                className="gap-1.5"
                disabled={answers.length > 0}
              >
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                أجب عن الأسئلة الآن
              </Button>
            </div>
          )}

          {/* مرحلة الأسئلة */}
          {phase === "questions" && !finished && (
            <div className="space-y-4">
              <p className="text-sm font-bold text-muted-foreground">
                سؤال {qIndex + 1} من {active.questions.length}
              </p>
              <p className="font-de text-lg font-bold" dir="ltr" lang="de">
                {active.questions[qIndex].q}
              </p>
              <p className="text-sm text-muted-foreground">{active.questions[qIndex].qAr}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {active.questions[qIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => answer(i)}
                    className="font-de rounded-xl border p-3 text-start text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-primary/5"
                    dir="ltr"
                    lang="de"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* النتيجة */}
          {phase === "result" && (
            <div className="space-y-4">
              <p className="text-center text-3xl font-extrabold text-primary">
                {score}/{active.questions.length}
              </p>
              <p className="text-center text-sm text-muted-foreground">
                {/* ═══ A-06: عتبة نسبية (60%) — كانت ثابتة >=3 فيفشل نص بسؤالين 2/2 ═══ */}
                {active.questions.length > 0 && score / active.questions.length >= 0.6
                  ? "أحسنت! فهم استماع جيد — ارفع المستوى 🎉"
                  : "راجع النص واستمع مجدداً ثم أعد المحاولة"}
              </p>
              <div className="space-y-2">
                {active.questions.map((q, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-start gap-2 rounded-xl border p-3 text-sm",
                      answers[i] === q.correct ? "border-success/40 bg-success/10" : "border-destructive/40 bg-destructive/10",
                    )}
                  >
                    {answers[i] === q.correct ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    ) : (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                    )}
                    <div>
                      <p className="font-de font-bold" dir="ltr" lang="de">{q.q}</p>
                      <p className="mt-0.5 text-muted-foreground">
                        {answers[i] === q.correct ? "إجابة صحيحة" : <>الصحيح: <span className="font-de" dir="ltr" lang="de">{q.options[q.correct]}</span></>}
                        {" — "}{q.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <details className="rounded-xl border bg-muted/20 p-3">
                <summary className="cursor-pointer text-sm font-bold text-primary">
                  📜 كشف النص الكامل + الترجمة
                </summary>
                <div className="mt-3 space-y-2">
                  <p className="font-de text-sm leading-relaxed" dir="ltr" lang="de">{active.text}</p>
                  <p className="text-sm text-muted-foreground">{active.textAr}</p>
                </div>
              </details>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={reset} className="gap-1.5">
                  <Ear className="h-4 w-4" aria-hidden="true" />
                  استمع مجدداً
                </Button>
                {levelTexts.length > 1 && (
                  <Button
                    onClick={() => {
                      const next = levelTexts[(levelTexts.findIndex((t) => t.id === active.id) + 1) % levelTexts.length];
                      selectText(next.id);
                    }}
                  >
                    النص التالي
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
