"use client";

import * as React from "react";
import {BookmarkPlus, Check, Layers, RotateCcw, Volume2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {SpeakAndScore} from "@/components/lesson/speech/speak-and-score";
import {getAllCards, addLessonFlashcards} from "@/lib/srs/flashcard-service";
import {addLessonSentences, extractSentencesFromCards} from "@/lib/srs/sentence-service";
import {cn} from "@/lib/utils";
import type { Flashcard } from "@/types/lesson";

/**
 * 10) بطاقات المراجعة (Flashcards)
 * — قلب البطاقة بالضغط — «أضف للبطاقات» يخزنها في حقيبة SM-2
 * (جدولة المراجعة عبر خوارزمية SM-2 في صفحة /flashcards)
 */
export function LernkartenSection({ flashcards }: { flashcards: Flashcard[] }) {
  const [flipped, setFlipped] = React.useState<Set<string>>(new Set());
  const [added, setAdded] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [addedCount, setAddedCount] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const existing = await getAllCards();
      const existingIds = new Set(existing.map((c) => c.id));
      if (!cancelled) {
        setAdded(flashcards.every((c) => existingIds.has(c.id)));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [flashcards]);

  const toggle = (id: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const flipAll = (toFlipped: boolean) => {
    setFlipped(new Set(toFlipped ? flashcards.map((f) => f.id) : []));
  };

  const addToReview = async () => {
    setAdding(true);
    const count = await addLessonFlashcards(flashcards);
    // إضافة جمل الدرس إلى مراجعة الجمل بالتكرار المتباعد (SRS)
    const sentences = extractSentencesFromCards(flashcards);
    if (sentences.length > 0) await addLessonSentences("lesson-cards", sentences);
    setAdding(false);
    setAdded(true);
    setAddedCount(count);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <Layers className="h-4 w-4 text-primary" aria-hidden="true" />
          اضغط البطاقة لقلبها — اقرأ الألمانية ثم تذكّر المعنى قبل القلب
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => flipAll(true)}>
            اقلب الكل
          </Button>
          <Button variant="ghost" size="sm" onClick={() => flipAll(false)}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            إعادة
          </Button>
          <Button
            size="sm"
            variant={added ? "secondary" : "gold"}
            onClick={() => void addToReview()}
            disabled={added || adding}
            className="gap-1.5"
          >
            {adding ? (
              "جارٍ الإضافة…"
            ) : added ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                في حقيبة SM-2 ✓
              </>
            ) : (
              <>
                <BookmarkPlus className="h-4 w-4" aria-hidden="true" />
                أضف للحقيبة الذكية
              </>
            )}
          </Button>
        </div>
      </div>

      {added && addedCount > 0 && (
        <p className="rounded-xl border border-success/30 bg-success/10 p-3 text-sm font-semibold text-success">
          أُضيفت {addedCount} بطاقة إلى حقيبة المراجعة ✓ — ستُدار بخوارزمية SM-2 وتظهر عند
          استحقاقها في صفحة البطاقات.
        </p>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {flashcards.map((card) => {
          const isFlipped = flipped.has(card.id);
          return (
            <Card
              key={card.id}
              className={cn(
                "relative min-h-40 cursor-pointer select-none overflow-hidden transition-all duration-300",
                isFlipped ? "border-primary/50" : "hover:-translate-y-0.5 hover:shadow-soft",
              )}
            >
              <button
                type="button"
                onClick={() => toggle(card.id)}
                className="absolute inset-0 z-10"
                aria-label={isFlipped ? `إظهار الوجه الأول: ${card.de}` : `قلب البطاقة: ${card.de}`}
              />
              {/* أزرار: استمع + انطقها (فوق طبقة القلبة) */}
              <div className="absolute end-2 top-2 z-20 flex items-center gap-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (typeof window !== "undefined" && "speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                      const u = new SpeechSynthesisUtterance(card.de);
                      u.lang = "de-DE";
                      u.rate = 0.85;
                      const voices = window.speechSynthesis.getVoices();
                      const gv = voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.startsWith("de"));
                      if (gv) u.voice = gv;
                      window.speechSynthesis.speak(u);
                    }
                  }}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-muted bg-background/90 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label={`استمع: ${card.de}`}
                  title="استمع للنطق"
                >
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <SpeakAndScore target={card.de} compact />
              </div>
              <CardContent className="flex h-full min-h-40 flex-col items-center justify-center gap-3 p-5 text-center">
                {!isFlipped ? (
                  <>
                    <span className="font-de text-xl font-bold" dir="ltr" lang="de">
                      {card.de}
                    </span>
                    <span className="text-xs text-muted-foreground">اضغط لرؤية المعنى</span>
                  </>
                ) : (
                  <>
                    <span className="font-de text-xl font-bold text-primary" dir="ltr" lang="de">
                      {card.de}
                    </span>
                    <span className="text-lg font-bold">{card.ar}</span>
                    {card.example && (
                      <div className="rounded-lg bg-muted/40 p-2 text-xs">
                        <p className="font-de" dir="ltr" lang="de">
                          {card.example}
                        </p>
                        {card.exampleAr && <p className="mt-0.5 text-muted-foreground">{card.exampleAr}</p>}
                      </div>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Volume2 className="h-3 w-3" aria-hidden="true" />
                      النطق متاح في كل الكلمات بالموقع
                    </span>
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        🔁 بعد الإضافة، تُدار البطاقات بخوارزمية SM-2: تقيّم نفسك (نسيت/صعب/حسن/سهل) فتضبط
        مواعيد المراجعة تلقائياً — راجعها في صفحة «بطاقاتي».
      </p>
    </div>
  );
}
