"use client";

import * as React from "react";
import {CheckCircle2, Eye, MessageSquareText, RotateCcw, Volume2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {playCorrect, playWrong} from "@/lib/audio/sfx";
import {getDueSentences, reviewCard, countSentences} from "@/lib/srs/sentence-service";
import {speakGerman, stopSpeaking} from "@/lib/speech/voices";
import {cn} from "@/lib/utils";
import type { Sm2CardData } from "@/types/srs";

/**
 * ═══════════════════════════════════════════════════════════
 *  مراجعة الجمل (SRS) — الجمل الكاملة تُراجع بتكرار متباعد
 *  · اعرض الجملة → حاول فهمها → اكشف الترجمة → قيّم (نسيت/صعب/حسن/سهل)
 *  · SM-2 يجدد موعد المراجعة حسب تقييمك
 *  — الجمل لا الكلمات المنعزلة: هذا ما يبني الطلاقة —
 * ═══════════════════════════════════════════════════════════
 */
export function SentenceReview() {
  const [sentences, setSentences] = React.useState<Sm2CardData[]>([]);
  const [index, setIndex] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [done, setDone] = React.useState(false);
  const [sessionKey, setSessionKey] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const [due, count] = await Promise.all([getDueSentences(), countSentences()]);
      if (cancelled) return;
      setSentences(due);
      setTotal(count);
      setIndex(0);
      setDone(false);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionKey]);

  const rate = async (q: 0 | 1 | 3 | 4) => {
    const s = sentences[index];
    if (!s) return;
    await reviewCard(s.id, q as never);
    if (q < 3) playWrong();
    else playCorrect();
    setRevealed(false);
    stopSpeaking();
    if (index + 1 >= sentences.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
    }
  };

  const speak = () => {
    const s = sentences[index];
    if (s) speakGerman(s.de, { rate: 0.75 });
  };

  if (loading) return <div className="h-48 animate-pulse rounded-2xl border bg-muted/30" />;

  // شاشة «لا جمل اليوم»
  if (sentences.length === 0) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl" aria-hidden="true">🗣️</span>
        <h2 className="mt-3 text-base font-extrabold">لا جمل مستحقة اليوم</h2>
        <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
          {total > 0
            ? `لديك ${total} جملة في نظام المراجعة — استرح اليوم، وتُذكرك بها تلقائياً غداً.`
            : "أكمل أي درس وستُضاف جمل دروسك تلقائياً هنا لتراجعها بتكرار متباعد — الجمل لا الكلمات المنعزلة تبني الطلاقة."}
        </p>
      </div>
    );
  }

  if (done) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-success/15 text-2xl" aria-hidden="true">🏆</span>
        <h2 className="mt-3 text-base font-extrabold">أتممت مراجعة اليوم!</h2>
        <p className="mt-1 text-sm text-muted-foreground">راجعت {sentences.length} جملة — عقلك يعيد بناء الطلاقة الآن.</p>
        <Button className="mt-4 gap-1.5" onClick={() => setSessionKey((k) => k + 1)}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          جلسة جديدة
        </Button>
      </div>
    );
  }

  const s = sentences[index];
  const progress = (index / sentences.length) * 100;

  return (
    <div className="space-y-4">
      {/* شريط التقدم */}
      <div className="flex items-center gap-3">
        <Progress value={progress} className="h-2.5" aria-label="التقدم في مراجعة الجمل" />
        <span className="font-de shrink-0 text-sm font-bold text-primary">{index + 1}/{sentences.length}</span>
      </div>

      {/* الجملة */}
      <div className="rounded-2xl border bg-card p-6 text-center">
        <p className="font-de text-xl font-bold leading-relaxed" dir="ltr" lang="de">
          {s.de}
        </p>
        {revealed && <p className="mt-3 text-sm text-muted-foreground">{s.ar}</p>}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5" onClick={speak}>
            <Volume2 className="h-4 w-4" aria-hidden="true" />
            استمع
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setRevealed((r) => !r)}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            {revealed ? "إخفاء الترجمة" : "أظهر الترجمة"}
          </Button>
        </div>
      </div>

      {/* التقييم — يظهر بعد كشف الترجمة */}
      {revealed ? (
        <div className="rounded-2xl border bg-card p-4">
          <p className="mb-3 text-center text-xs font-bold text-muted-foreground">كيف كانت جملتك؟</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button
              type="button"
              onClick={() => void rate(0)}
              className="rounded-xl border border-destructive/40 bg-destructive/5 px-2 py-2.5 text-xs font-extrabold text-destructive transition-colors hover:bg-destructive/10"
            >
              نسيت 🙈
            </button>
            <button
              type="button"
              onClick={() => void rate(1)}
              className="rounded-xl border border-gold/40 bg-gold/5 px-2 py-2.5 text-xs font-extrabold text-gold-strong transition-colors hover:bg-gold/10"
            >
              صعبة 😅
            </button>
            <button
              type="button"
              onClick={() => void rate(3)}
              className="rounded-xl border border-success/40 bg-success/5 px-2 py-2.5 text-xs font-extrabold text-success transition-colors hover:bg-success/10"
            >
              حسنة 🙂
            </button>
            <button
              type="button"
              onClick={() => void rate(4)}
              className="rounded-xl border border-primary/40 bg-primary/5 px-2 py-2.5 text-xs font-extrabold text-primary transition-colors hover:bg-primary/10"
            >
              سهلة 😎
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="w-full rounded-2xl border border-dashed border-primary/40 bg-primary/5 py-3 text-xs font-bold text-primary transition-colors hover:bg-primary/10"
        >
          <CheckCircle2 className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
          فهمت المعنى — أظهر الترجمة ثم قيّم
        </button>
      )}

      <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
        <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
        {total} جملة في نظامك — التكرار المتباعد (SM-2) يذكّرك بكل جملة في الوقت المثالي لنسيانها.
      </p>
    </div>
  );
}
