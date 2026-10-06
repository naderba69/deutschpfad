"use client";

import * as React from "react";
import {Headphones, Play, Users} from "lucide-react";

import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {DialogueOrdering} from "@/components/lesson/sections/dialogue-ordering";
import {SpeakAndScore} from "@/components/lesson/speech/speak-and-score";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DetailTabs} from "@/components/shared/detail-tabs";
import {recordEvent} from "@/lib/analytics/events";
import {
  getListeningQuestionTaskId,
  isDialogueOrderingUnlocked,
} from "@/lib/lesson/listening-evidence";
import {cn} from "@/lib/utils";
import type { ListeningItem, ListeningQuestion } from "@/types/lesson";

const SPEED_OPTIONS = [
  { value: 0.75, label: "بطيء 0.75×" },
  { value: 1, label: "عادي 1×" },
  { value: 1.25, label: "سريع 1.25×" },
] as const;

/** تشغيل حوار كامل بالتسلسل — سطر بعد سطر عبر onend (لا دفعة واحدة) */
function playDialogue(lines: { de: string }[], rate: number) {
  if (typeof window === "undefined" || !("speechSynthesis" in window) || lines.length === 0) return;
  window.speechSynthesis.cancel();
  // إضافة كل الأسطر دفعة واحدة بعد cancel يجعل المتصفح يبتلع بعضها —
  // بالتسلسل تُنطق كل جملة بعد انتهاء سابقتها.
  const speakNext = (idx: number) => {
    if (idx >= lines.length) return;
    const u = new SpeechSynthesisUtterance(lines[idx].de);
    u.lang = "de-DE";
    u.rate = rate;
    u.onend = () => speakNext(idx + 1);
    u.onerror = () => speakNext(idx + 1);
    window.speechSynthesis.speak(u);
  };
  speakNext(0);
}

/**
 * 4) الاستماع (Hörverstehen) — المرحلة 3 المحسّنة:
 * — تدرج السرعة (0.75/1/1.25) — تشغيل حلقي — إخفاء النص للاستماع النشط —
 */
export function HoerverstehenSection({
  items,
  questions,
  lessonId,
}: {
  items: ListeningItem[];
  questions: ListeningQuestion[];
  lessonId: string;
}) {
  const [rate, setRate] = React.useState<number>(1);
  const [visibleTranscripts, setVisibleTranscripts] = React.useState<Record<string, boolean>>({});
  const [revealedTranscripts, setRevealedTranscripts] = React.useState<Record<string, boolean>>({});

  return (
    <div className="space-y-6">
      {/* عناصر التحكم */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-muted/30 p-3">
        <p className="text-sm font-semibold">سرعة الاستماع:</p>
        <div className="flex gap-2" role="group" aria-label="تدرج سرعة الاستماع">
          {SPEED_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setRate(opt.value)}
              aria-pressed={rate === opt.value}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                rate === opt.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background hover:border-primary/50",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ تبويبات: كل مشهد بتبويب + تبويب أسئلة الفهم (لا سكرول طويل) ═══ */}
      <DetailTabs
        tabs={[
          ...items.map((item) => {
            const fullText = item.lines.map((l) => l.de).join(" ");
            const showText = Boolean(visibleTranscripts[item.id]);
            const transcriptWasRevealed = isDialogueOrderingUnlocked(revealedTranscripts, item.id);
            const orderingUnlocked = transcriptWasRevealed;
            return {
              id: `item-${item.id}`,
              label: item.title,
              icon: <Users className="h-3.5 w-3.5" aria-hidden="true" />,
              content: (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => playDialogue(item.lines, rate)}>
                      <Play className="h-4 w-4" aria-hidden="true" />
                      استمع للكل
                    </Button>
                    <Button
                      variant={showText ? "outline" : "default"}
                      size="sm"
                      onClick={() => {
                        const nextShowText = !showText;
                        setVisibleTranscripts((previous) => ({
                          ...previous,
                          [item.id]: nextShowText,
                        }));
                        if (nextShowText) {
                          setRevealedTranscripts((previous) => ({
                            ...previous,
                            [item.id]: true,
                          }));
                        }
                      }}
                    >
                      {showText ? "أخف النص" : "اكشف نص الحوار"}
                    </Button>
                    <SpeakButton
                      text={fullText}
                      rate={rate}
                      size="sm"
                      label="كل النص"
                      ariaLabel="استمع إلى الحوار كاملاً"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {transcriptWasRevealed
                      ? "كُشف نص هذا الحوار؛ أسئلته الآن للمراجعة ولا تُحتسب دليلاً مستقلاً على الاستماع. تمرين الترتيب نصّي أيضاً."
                      : "استمع قبل كشف النص. كشف هذا الحوار يفتح تمرين ترتيب نصّي، ولا تُحتسب إجاباته اللاحقة دليلاً مستقلاً على الاستماع."}
                  </p>

                  {showText ? (
                    <p className="text-xs text-muted-foreground">
                      تقييم الترديد يقارن تفريغ المتصفح بالنص المستهدف؛ لا يقيس مخارج الحروف أو النبر، ولا يُحتسب دليلاً مستقلاً على هدف الاستماع.
                    </p>
                  ) : null}

                  <div className="space-y-3">
                    {item.lines.map((line, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-start justify-between gap-3 rounded-xl bg-muted/20 p-3 transition-opacity",
                          !showText && "opacity-40 select-none",
                        )}
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-primary">{line.speaker}</p>
                          <p className="font-de mt-0.5 font-semibold" dir="ltr" lang="de">
                            {showText ? line.de : "•••••••••••"}
                          </p>
                          {showText && (
                            <p className="mt-0.5 text-sm text-muted-foreground">{line.ar}</p>
                          )}
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-1.5">
                          <SpeakButton text={line.de} rate={rate} ariaLabel={`استمع إلى السطر ${i + 1}`} />
                          {showText ? <SpeakAndScore target={line.de} compact /> : null}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    {orderingUnlocked ? (
                      <DialogueOrdering item={item} />
                    ) : (
                      <p className="rounded-xl border border-dashed p-3 text-sm text-muted-foreground">
                        اكشف نص الحوار صراحةً أولاً لعرض تمرين الترتيب النصّي. هذا التمرين لا يُحتسب دليلاً مستقلاً على الاستماع.
                      </p>
                    )}
                  </div>
                </div>
              ),
            };
          }),
          {
            id: "questions",
            label: "أسئلة الفهم",
            icon: <Headphones className="h-3.5 w-3.5" aria-hidden="true" />,
            content: (
              <div className="space-y-5">
                {questions.map((q) => (
                  <MultipleChoiceExercise
                    key={q.id}
                    exercise={q}
                    onResult={(result) => {
                      void recordEvent({
                        type: "exercise-result",
                        exerciseId: q.id,
                        exerciseType: q.type,
                        correct: result.isCorrect,
                        points: result.pointsEarned,
                        errorType: result.errorType,
                        skill: "الاستماع",
                        lessonId,
                        taskId: getListeningQuestionTaskId(
                          lessonId,
                          q.itemId,
                          q.id,
                          Boolean(revealedTranscripts[q.itemId]),
                        ),
                      });
                    }}
                  />
                ))}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
