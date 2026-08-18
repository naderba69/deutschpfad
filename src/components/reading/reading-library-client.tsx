"use client";

import * as React from "react";
import {BookOpen, ChevronLeft, ChevronRight, Headphones, Languages} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {READING_LIBRARY, type ReadingText} from "@/data/reading/library";
import {speakSequence} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";

const LEVELS = ["all", "A1", "A2", "B1", "B2"] as const;

/**
 * مكتبة القراءة المتدرجة — نصوص A1→B2 مع أسئلة فهم
 */
export function ReadingLibraryClient() {
  const [level, setLevel] = React.useState<(typeof LEVELS)[number]>("all");
  const [active, setActive] = React.useState<ReadingText | null>(null);
  const [showAr, setShowAr] = React.useState(false);
  const [answers, setAnswers] = React.useState<Record<string, number>>({});

  const filtered = READING_LIBRARY.filter((r) => level === "all" || r.level === level);
  const current = active ?? filtered[0];

  const selectText = (r: ReadingText) => {
    setActive(r);
    setShowAr(false);
    setAnswers({});
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr]">
      {/* قائمة النصوص */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="الفلترة بالمستوى">
          {LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLevel(l);
                setActive(null);
                setAnswers({});
              }}
              className={cn(
                "font-de rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
                level === l ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50",
              )}
            >
              {l === "all" ? "الكل" : l}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {filtered.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => selectText(r)}
              className={cn(
                "w-full rounded-xl border p-3 text-start transition-colors",
                current?.id === r.id ? "border-primary bg-primary/5" : "bg-card hover:border-primary/40",
              )}
            >
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-de font-bold">
                  {r.level}
                </Badge>
                <span className="text-xs text-muted-foreground">{r.category}</span>
                {r.examType && (
                  <Badge variant="secondary" className="text-[9px]">
                    {r.examType}
                  </Badge>
                )}
              </div>
              <p className="font-de mt-1 font-bold" dir="ltr" lang="de">
                {r.titleDe}
              </p>
              <p className="text-xs text-muted-foreground">{r.title}</p>
            </button>
          ))}
        </div>
      </div>

      {/* النص النشط */}
      {current && (
        <div className="space-y-4">
          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex flex-wrap items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="font-de" dir="ltr" lang="de">
                  {current.titleDe}
                </span>
                <Badge variant="outline" className="font-de font-bold">{current.level}</Badge>
                {current.examType && (
                  <Badge variant="gold" className="text-[11px]">
                    {current.examType}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => speakSequence([{ de: current.text }, { de: current.text }], { rate: 0.9 })}
                  className="gap-1.5"
                >
                  <Headphones className="h-4 w-4" aria-hidden="true" />
                  استمع للنص مرتين
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowAr((v) => !v)} className="gap-1.5">
                  <Languages className="h-4 w-4" aria-hidden="true" />
                  {showAr ? "إخفاء الترجمة" : "الترجمة العربية"}
                </Button>
                <SpeakButton text={current.text} variant="ghost" size="sm" />
              </div>

              <p className="font-de text-base leading-relaxed" dir="ltr" lang="de">
                {current.text}
              </p>
              {showAr && (
                <p className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-muted-foreground">
                  {current.textAr}
                </p>
              )}
            </CardContent>
          </Card>

          {/* أسئلة الفهم */}
          <Card>
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="text-lg">أسئلة الفهم 🎯</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5">
              {(current.questions ?? []).map((q, qi) => {
                const selected = answers[q.q];
                return (
                  <div key={qi} className="rounded-xl border bg-card p-3">
                    <p className="font-de font-semibold" dir="ltr" lang="de">
                      {q.q}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{q.qAr}</p>
                    <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {q.options.map((opt, oi) => {
                        const isSel = selected === oi;
                        const isCorrect = selected !== undefined && oi === q.correct;
                        return (
                          <button
                            key={oi}
                            type="button"
                            onClick={() =>
                              setAnswers((prev) => ({ ...prev, [q.q]: oi }))
                            }
                            className={cn(
                              "rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                              isSel && isCorrect && "border-success bg-success/10 text-success",
                              isSel && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                              !isSel && "bg-background hover:border-primary/40",
                            )}
                          >
                            <span className="font-de" dir="ltr" lang="de">
                              {opt}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {selected !== undefined && q.explanation && (
                      <p className="mt-2 rounded-lg bg-muted/40 p-2 text-xs text-muted-foreground">
                        💡 {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* التنقل بين النصوص */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              disabled={filtered.findIndex((r) => r.id === current.id) === 0}
              onClick={() => {
                const idx = filtered.findIndex((r) => r.id === current.id);
                if (idx > 0) selectText(filtered[idx - 1]);
              }}
              className="gap-1"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              النص السابق
            </Button>
            <Button
              variant="ghost"
              size="sm"
              disabled={filtered.findIndex((r) => r.id === current.id) === filtered.length - 1}
              onClick={() => {
                const idx = filtered.findIndex((r) => r.id === current.id);
                if (idx < filtered.length - 1) selectText(filtered[idx + 1]);
              }}
              className="gap-1"
            >
              النص التالي
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
