"use client";

import * as React from "react";
import {BookOpenCheck} from "lucide-react";

import {B2_READING_EXAM, B2_READING_SOURCES} from "@/data/reading/b2-exam-library";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

/**
 * مكتبة القراءة B2 — نصوص صحفية أصيلة بأسئلة بصيغة الامتحان
 * (الجزء 2 من المرحلة 2: ثراء الامتحان)
 */
export function B2ReadingExamLibrary() {
  const [openId, setOpenId] = React.useState<string | null>(B2_READING_EXAM[0].id);
  const [answers, setAnswers] = React.useState<Record<string, Record<string, number>>>({});
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  const pick = (textId: string, qIdx: number, optIdx: number) => {
    setAnswers((a) => ({
      ...a,
      [textId]: { ...(a[textId] ?? {}), [qIdx]: optIdx },
    }));
  };

  const checkText = (text: (typeof B2_READING_EXAM)[number]) => {
    setChecked((c) => ({ ...c, [text.id]: true }));
  };

  const sourceLabel = (id: string) => B2_READING_SOURCES.find((s) => s.id === id)?.label ?? id;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 rounded-xl border bg-muted/20 p-3 text-xs text-muted-foreground">
        <BookOpenCheck className="h-4 w-4 text-primary" aria-hidden="true" />
        <p>
          <b>{B2_READING_EXAM.length} نصاً جديداً</b> بأسلوب القراءة الصحفية B2 (مقالات، تعليقات،
          تقارير، أدلة) — أجب عن الأسئلة ثم تحقق من إجاباتك مع الشرح.
        </p>
      </div>

      {B2_READING_EXAM.map((text) => {
        const isOpen = openId === text.id;
        const textAnswers = answers[text.id] ?? {};
        const isChecked = checked[text.id];
        const correctCount = isChecked
          ? text.questions.filter((q, qi) => textAnswers[qi] === q.correct).length
          : 0;
        const allAnswered = Object.keys(textAnswers).length === text.questions.length;
        return (
          <div key={text.id} className={cn("overflow-hidden rounded-xl border bg-card", isOpen && "border-primary/40")}>
            {/* رأس النص */}
            <button
              type="button"
              onClick={() => toggle(text.id)}
              className="flex w-full items-center justify-between gap-3 p-4 text-start hover:bg-muted/30"
            >
              <div className="min-w-0">
                <p className="text-sm font-bold">
                  <span dir="ltr" lang="de">{text.titleDe}</span>
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {text.title} · {sourceLabel(text.source)} · {text.questions.length} أسئلة
                  {isChecked && (
                    <span className={cn("ms-2 font-bold", correctCount === text.questions.length ? "text-success" : "text-destructive")}>
                      {correctCount}/{text.questions.length} ✓
                    </span>
                  )}
                </p>
              </div>
              <span className="shrink-0 text-lg text-muted-foreground" aria-hidden="true">
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* المحتوى */}
            {isOpen && (
              <div className="space-y-4 border-t p-4">
                {/* النص */}
                <div className="rounded-xl border bg-muted/20 p-4">
                  <p className="text-sm leading-relaxed" dir="ltr" lang="de">{text.text}</p>
                  <p className="mt-3 border-t pt-3 text-xs leading-relaxed text-muted-foreground" dir="rtl">
                    {text.textAr}
                  </p>
                </div>

                {/* الأسئلة */}
                <div className="space-y-3">
                  {text.questions.map((q, qi) => (
                    <div key={qi} className="rounded-xl border bg-card p-3">
                      <p className="text-sm font-bold">
                        <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary">{qi + 1}</span>
                        <span dir="ltr" lang="de">{q.q}</span>
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{q.qAr}</p>
                      <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {q.options.map((opt, oi) => (
                          <button
                            key={oi}
                            type="button"
                            onClick={() => !isChecked && pick(text.id, qi, oi)}
                            className={cn(
                              "rounded-lg border px-3 py-1.5 text-start text-sm transition-colors",
                              textAnswers[qi] === oi ? "border-primary bg-primary/10 text-primary" : "border-muted bg-background hover:border-primary/40",
                              isChecked && oi === q.correct && "border-success bg-success/10 text-success",
                              isChecked && textAnswers[qi] === oi && oi !== q.correct && "border-destructive bg-destructive/10 text-destructive",
                            )}
                          >
                            <span className="font-de ms-1 inline-block w-4 text-xs font-bold opacity-60">{String.fromCharCode(65 + oi)}</span>
                            <span dir="ltr" lang="de">{opt}</span>
                          </button>
                        ))}
                      </div>
                      {isChecked && (
                        <p className={cn("mt-2 text-xs leading-relaxed", textAnswers[qi] === q.correct ? "text-success" : "text-destructive")}>
                          {textAnswers[qi] === q.correct ? "✓ صحيح" : `✗ الصحيح: ${q.options[q.correct]}`} — {q.whyAr}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* الأزرار */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-muted-foreground">
                    أجبت على {Object.keys(textAnswers).length} من {text.questions.length}
                  </span>
                  {!isChecked ? (
                    <Button onClick={() => checkText(text)} disabled={!allAnswered}>
                      تحقق من إجاباتي
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setChecked((c) => ({ ...c, [text.id]: false }));
                        setAnswers((a) => ({ ...a, [text.id]: {} }));
                      }}
                    >
                      إعادة المحاولة
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
