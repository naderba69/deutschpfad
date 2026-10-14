"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  قسم التحدث (Sprechen) لمحرّك B2 — مُستخرَج من goethe-b2-exam.tsx (المرحلة 4)
 *  Teil 1 (Vortrag) + Teil 2 (Diskussion) مع مؤقّت داخلي وبطاقات النقاش.
 *  النقل حرفيّ — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import * as React from "react";
import {Mic, Volume2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {GOETHE_B2_EXAM} from "@/data/exams";
import {cn} from "@/lib/utils";

import {speakText} from "./goethe-b2-views";

export function SprechenSection({
  lowTime,
  expiredNotice,
  remaining,
  vortragIdx,
  setVortragIdx,
  diskIdx,
  runKey,
  onFinish,
}: {
  lowTime: boolean;
  expiredNotice: string | null;
  remaining: number;
  vortragIdx: number;
  setVortragIdx: React.Dispatch<React.SetStateAction<number>>;
  diskIdx: number;
  runKey: number;
  onFinish: () => void;
}) {
  const sprechen = GOETHE_B2_EXAM.sprechen;
  const v = sprechen.vortrag[vortragIdx % sprechen.vortrag.length];
  const d = sprechen.diskussion[diskIdx % sprechen.diskussion.length];
  return (
    <div key={`sprechen-${runKey}`} className="space-y-5">
      {lowTime && (
        <div className="rounded-xl border border-amber-500/50 bg-amber-50 p-3 text-center text-sm font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200" role="alert">
          ⚠️ تبقّى أقل من 5 دقائق — اختم عرضك ونقاشك.
        </div>
      )}
      {expiredNotice && (
        <div className="rounded-xl border border-destructive/50 bg-destructive/10 p-3 text-center text-sm font-bold text-destructive" role="alert">
          {expiredNotice}
        </div>
      )}
      <div className="sticky top-16 z-30 flex items-center gap-3 rounded-xl border bg-background/95 px-4 py-2.5 shadow-sm backdrop-blur-md">
        <span className="inline-flex items-center gap-1.5 text-sm font-bold">
          <Mic className="h-4 w-4 text-primary" aria-hidden="true" />
          Sprechen — Vortrag + Diskussion
        </span>
        <span className="font-de ms-auto text-sm font-extrabold text-primary tabular-nums">
          ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
        </span>
      </div>

      {/* Teil 1: Vortrag */}
      <Card className="border-primary/30">
        <CardContent className="space-y-3 p-5">
          <h3 className="text-base font-extrabold">🎤 Teil 1 — Vortrag (~4 دقائق)</h3>
          <p className="text-sm text-muted-foreground">
            اختر موضوعاً، استعد في <b>{sprechen.vorbereitungMinutes} دقيقة</b> (التحضير المخصص يُدار خارج المؤقت)،
            ثم تحدث عن الموضوع باتباع الأسئلة الإرشادية. استخدم بنية: مقدمة ← وضع حالي ← مشاكل/أسباب ← حلول ← خاتمة.
          </p>
          <div className="flex flex-wrap gap-2">
            {sprechen.vortrag.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setVortragIdx(i)}
                className={cn("tap-target rounded-lg border px-3 py-1.5 text-xs font-bold", i === vortragIdx % sprechen.vortrag.length ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background")}
              >
                <span dir="ltr" lang="de">{t.topicDe}</span>
              </button>
            ))}
          </div>
          <div className="rounded-xl border bg-muted/20 p-3">
            <p className="font-bold"><span dir="ltr" lang="de">{v.topicDe}</span></p>
            <p className="text-sm text-muted-foreground">{v.topicAr}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {v.leitfragen.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span dir="ltr" lang="de">{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => speakText(v.topicDe)}>
            <Volume2 className="h-4 w-4" aria-hidden="true" /> اسمع الموضوع
          </Button>
        </CardContent>
      </Card>

      {/* Teil 2: Diskussion */}
      <Card className="border-gold/40">
        <CardContent className="space-y-3 p-5">
          <h3 className="text-base font-extrabold">🗣️ Teil 2 — Diskussion (~5 دقائق)</h3>
          <p className="text-sm text-muted-foreground">{d.positionAr}</p>
          <div className="rounded-xl border bg-muted/20 p-3">
            <p className="font-bold"><span dir="ltr" lang="de">{d.themaDe}</span></p>
            <p className="text-sm text-muted-foreground">{d.themaAr}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-success/30 bg-success/5 p-3">
              <p className="mb-1.5 text-xs font-extrabold text-success">PRO — حجج مؤيدة</p>
              <ul className="space-y-1 text-sm">
                {d.pro.map((p, i) => <li key={i}>✓ <span dir="ltr" lang="de">{p}</span></li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3">
              <p className="mb-1.5 text-xs font-extrabold text-destructive">KONTRA — حجج معارضة</p>
              <ul className="space-y-1 text-sm">
                {d.kontra.map((p, i) => <li key={i}>✗ <span dir="ltr" lang="de">{p}</span></li>)}
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            💡 استخدم عبارات النقاش: <span dir="ltr" lang="de">Meiner Meinung nach… / Da stimme ich Ihnen zu, aber… / Ich sehe das anders, denn… / Ein wichtiger Aspekt ist…</span>
          </p>
        </CardContent>
      </Card>

      <Button variant="gold" size="lg" className="w-full" onClick={onFinish}>
        إنهاء التحدث ← عرض النتيجة
      </Button>
    </div>
  );
}
