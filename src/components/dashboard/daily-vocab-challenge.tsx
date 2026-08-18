"use client";

/**
 * تحدّي المفردات اليومي — 5 كلمات من مواضيع B2 الـ18 (تتغير يومياً)
 * بطاقات قلب + نطق + إضافة لبطاقات SM-2 + اختبار ذاتي سريع.
 */
import * as React from "react";
import { Check, Flame, RotateCcw, Volume2 } from "lucide-react";

import { SpeakButton } from "@/components/shared/speak-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { B2_EXAM_TOPICS, B2_TOPIC_VOCAB, type B2ExamTopic } from "@/data/vocabulary/b2-topics";
import type { VocabEntry } from "@/data/vocabulary/a1";
import { addManualCard } from "@/lib/srs/flashcard-service";
import { cn } from "@/lib/utils";

/** مولد أرقام عشوائية ببذرة ثابتة (يتغير يومياً) */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function daySeed(): number {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

/** اختيار 5 كلمات موزعة على 5 مواضيع مختلفة عشوائياً لكن ثابتة اليوم */
function pickDailyWords(): { word: VocabEntry; topic: B2ExamTopic }[] {
  const rand = seeded(daySeed());
  const topics = [...B2_EXAM_TOPICS].sort(() => rand() - 0.5).slice(0, 5);
  const out: { word: VocabEntry; topic: B2ExamTopic }[] = [];
  for (const topic of topics) {
    const words = B2_TOPIC_VOCAB[topic.id] ?? [];
    if (words.length > 0) {
      out.push({ word: words[Math.floor(rand() * words.length)], topic });
    }
  }
  return out;
}

export function DailyVocabChallenge() {
  const [daily] = React.useState(pickDailyWords);
  const [flipped, setFlipped] = React.useState<Set<number>>(new Set());
  const [added, setAdded] = React.useState<Set<string>>(new Set());
  const [quiz, setQuiz] = React.useState<"off" | "on">("off");
  const [qIdx, setQIdx] = React.useState(0);
  const [qAnswer, setQAnswer] = React.useState<number | null>(null);
  const [qScore, setQScore] = React.useState(0);

  const toggleFlip = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const addAll = async () => {
    for (const { word } of daily) {
      await addManualCard({ de: word.de, ar: word.ar, level: "B2" });
      setAdded((prev) => new Set(prev).add(word.de));
    }
  };

  const q = daily[qIdx % Math.max(1, daily.length)];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Flame className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          تحدّي المفردات اليومي — 5 كلمات من مواضيع B2
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <p className="text-xs text-muted-foreground">
          🔥 5 كلمات جديدة كل يوم (تتغير تلقائياً) — اقلب البطاقة لترى المعنى، استمع، ثم
          اختبر نفسك. حافظ على السلسلة اليومية!
        </p>

        {/* البطاقات */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {daily.map(({ word, topic }, i) => (
            <div key={`${word.de}-${i}`} className="perspective">
              <button
                type="button"
                onClick={() => toggleFlip(i)}
                className={cn(
                  "block w-full rounded-xl border p-3 text-start transition-all",
                  flipped.has(i) ? "border-primary/50 bg-primary/5" : "bg-card hover:border-primary/30",
                )}
                aria-label={flipped.has(i) ? "إظهار الألمانية" : "إظهار المعنى"}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-lg">{topic.icon}</span>
                  <span className="text-[11px] font-bold text-muted-foreground">{topic.titleAr}</span>
                </span>
                {!flipped.has(i) ? (
                  <span className="font-de mt-1 block text-lg font-bold" dir="ltr" lang="de">
                    {word.de}
                  </span>
                ) : (
                  <span className="mt-1 block text-lg font-semibold text-primary">{word.ar}</span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* أزرار */}
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={() => void addAll()} disabled={added.size === daily.length} className="gap-1.5">
            <Check className="h-4 w-4" aria-hidden="true" />
            {added.size === daily.length ? "أُضيفت للبطاقات ✓" : "أضف الكلمات الخمس لبطاقاتي (SM-2)"}
          </Button>
          <Button size="sm" variant="outline" onClick={() => setQuiz((v) => (v === "off" ? "on" : "off"))}>
            {quiz === "off" ? "🎯 ابدأ اختبار اليوم" : "إغلاق الاختبار"}
          </Button>
        </div>

        {/* الاختبار الذاتي */}
        {quiz === "on" && daily.length > 0 && (
          <div className="space-y-3 rounded-xl border bg-muted/20 p-4">
            <p className="text-sm font-bold">
              سؤال {qIdx + 1} من {Math.min(5, daily.length)} — ما معنى:
            </p>
            <p className="font-de text-xl font-extrabold" dir="ltr" lang="de">
              {q.word.de}
            </p>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {daily.map(({ word }, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setQAnswer(i);
                    if (i === qIdx % daily.length) setQScore((s) => s + 1);
                  }}
                  disabled={qAnswer !== null}
                  className={cn(
                    "rounded-lg border p-2.5 text-sm font-semibold transition-colors",
                    qAnswer === i && i === qIdx % daily.length && "border-success bg-success/10 text-success",
                    qAnswer === i && i !== qIdx % daily.length && "border-destructive bg-destructive/10 text-destructive",
                    qAnswer === null && "bg-background hover:border-primary/40",
                  )}
                >
                  {word.ar}
                </button>
              ))}
            </div>
            {qAnswer !== null && (
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  نتيجتك: <span className="font-de font-bold">{qScore}/{Math.min(5, qIdx + 1)}</span>
                </p>
                <Button
                  size="sm"
                  onClick={() => {
                    if (qIdx + 1 >= Math.min(5, daily.length)) {
                      setQuiz("off");
                      setQIdx(0);
                      setQAnswer(null);
                      setQScore(0);
                    } else {
                      setQIdx((i) => i + 1);
                      setQAnswer(null);
                    }
                  }}
                >
                  {qIdx + 1 >= Math.min(5, daily.length) ? "إنهاء — عرض النتيجة" : "التالي"}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* الاستماع */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Volume2 className="h-4 w-4" aria-hidden="true" />
          استمع لكل كلمة:
          {daily.map(({ word }, i) => (
            <SpeakButton key={i} text={word.de} variant="outline" size="sm" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
