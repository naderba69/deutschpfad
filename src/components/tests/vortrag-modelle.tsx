"use client";

/**
 * نماذج العرض التقديمي الكاملة (B2 Teil 1) — هياكل جاهزة للحفظ والتدريب
 */
import * as React from "react";
import {Presentation} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {VORTRAG_MODELLE} from "@/data/vortrag-modelle";
import {cn} from "@/lib/utils";

export function VortragModelle() {
  const [active, setActive] = React.useState(0);
  const model = VORTRAG_MODELLE[active];

  return (
    <div className="space-y-5">
      <p className="inline-flex items-center gap-2 font-bold">
        <Presentation className="h-5 w-5 text-primary" aria-hidden="true" />
        قوالب عرض كاملة (Vortrag-Modelle) — احفظ الهيكل ثم عبّئه بموضوعك
      </p>

      {/* اختيار الموضوع */}
      <div className="flex flex-wrap gap-1.5">
        {VORTRAG_MODELLE.map((m, i) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-bold transition-colors",
              active === i ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 hover:border-primary/40",
            )}
          >
            {m.topicAr}
          </button>
        ))}
      </div>

      <Card className="overflow-hidden">
        <CardContent className="space-y-4 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-de text-lg font-extrabold" dir="ltr" lang="de">
              {model.topicDe}
            </p>
            <Badge variant="outline">⏱ {Math.round(model.totalSeconds / 60)} دقائق</Badge>
          </div>

          {/* الأسئلة الإرشادية */}
          <details className="rounded-xl border bg-muted/20 p-3 text-sm">
            <summary className="cursor-pointer font-bold text-primary">📋 الأسئلة الإرشادية (Leitfragen) — كما في بطاقة الامتحان</summary>
            <ul className="mt-2 space-y-1.5">
              {model.leitfragen.map((q, i) => (
                <li key={i} className="font-de" dir="ltr" lang="de">• {q}</li>
              ))}
            </ul>
          </details>

          {/* الخطوات */}
          <ol className="space-y-3">
            {model.steps.map((s, i) => (
              <li key={i} className="rounded-xl border bg-muted/10 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="flex items-center gap-2 text-sm font-bold text-primary">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs">
                      {i + 1}
                    </span>
                    {s.heading}
                  </p>
                  <span className="text-[11px] text-muted-foreground">~{s.seconds} ثانية</span>
                </div>
                <p className="font-de mt-2 rounded-lg bg-background p-2.5 text-sm leading-relaxed" dir="ltr" lang="de">
                  {s.de}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{s.ar}</p>
              </li>
            ))}
          </ol>

          {/* استماع للعرض كاملاً */}
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 p-3">
            <p className="text-sm text-muted-foreground">🔊 استمع للعرض كاملاً بوتيرة طبيعية (تدرب على الإلقاء بعده):</p>
            <SpeakButton text={model.steps.map((s) => s.de).join(" ")} variant="outline" size="sm" label="استمع للعرض" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
