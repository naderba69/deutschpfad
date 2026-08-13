"use client";

import * as React from "react";
import {ClipboardPen, Lightbulb, MessageSquareText, Mail} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {SCHREIB_MODELLE} from "@/data/schreibmodelle";
import {cn} from "@/lib/utils";

/**
 * نماذج الكتابة B2 — عرض الموضوع + المهمة + النموذجين (جيد/ممتاز)
 * مع شرح بنية كل فقرة — Schreiben Teil 1 (Forumsbeitrag) وTeil 2 (E-Mail).
 */
export function SchreibmodelleClient() {
  const [active, setActive] = React.useState(0);
  const [tab, setTab] = React.useState<"forum" | "email">("forum");
  const [level, setLevel] = React.useState<"gut" | "sehr-gut">("gut");

  const model = SCHREIB_MODELLE[active];
  const parts = model[tab].find((p) => p.level === level) ?? model[tab][0];

  return (
    <div className="space-y-6">
      {/* اختيار الموضوع */}
      <div className="flex flex-wrap gap-1.5">
        {SCHREIB_MODELLE.map((m, i) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-bold transition-colors",
              active === i
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            )}
          >
            <span className="font-de" dir="ltr" lang="de">{m.topicDe}</span>
          </button>
        ))}
      </div>

      {/* بطاقة الموضوع والمهمة */}
      <Card className="overflow-hidden border-primary/30">
        <CardContent className="space-y-3 p-5">
          <p className="font-de text-xl font-extrabold" dir="ltr" lang="de">
            {model.topicDe}
          </p>
          <p className="text-sm text-muted-foreground">{model.topicAr}</p>
          <div className="rounded-xl bg-muted/30 p-3 text-sm">
            <p className="font-bold text-primary">📝 المهمة في الامتحان:</p>
            <p className="font-de mt-1" dir="ltr" lang="de">{model.aufgabe}</p>
            <p className="mt-1 text-muted-foreground">{model.aufgabeAr}</p>
          </div>
        </CardContent>
      </Card>

      {/* التبويبات */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab("forum")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-bold transition-colors",
            tab === "forum" ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 hover:border-primary/40",
          )}
        >
          <MessageSquareText className="h-4 w-4" aria-hidden="true" />
          Teil 1 — Forumsbeitrag
        </button>
        <button
          type="button"
          onClick={() => setTab("email")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-bold transition-colors",
            tab === "email" ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 hover:border-primary/40",
          )}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Teil 2 — formelle E-Mail
        </button>
      </div>

      {/* مستوى النموذج */}
      <div className="flex items-center gap-2">
        <Badge variant="outline">مستوى النموذج:</Badge>
        {(["gut", "sehr-gut"] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLevel(l)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-bold transition-colors",
              level === l ? "border-gold bg-gold/15 text-gold-strong" : "bg-muted/40 text-muted-foreground",
            )}
          >
            {l === "gut" ? "جيد (Gut)" : "ممتاز (Sehr gut)"}
          </button>
        ))}
        <span className="text-xs text-muted-foreground">
          — قارن: الممتاز يضيف تعقيداً لغوياً وبنية أعمق
        </span>
      </div>

      {/* النموذج */}
      <div className="space-y-4">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground">
          <ClipboardPen className="h-4 w-4" aria-hidden="true" />
          {parts.title} — بنية من {parts.paragraphs.length} فقرات
        </p>
        {parts.paragraphs.map((p, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-extrabold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm font-bold">{p.heading}</p>
              </div>
              <p className="font-de rounded-lg bg-muted/20 p-3 text-[15px] leading-relaxed" dir="ltr" lang="de">
                {p.de}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{p.ar}</p>
              <p className="mt-2 flex items-start gap-1.5 text-xs text-gold-strong">
                <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{p.note}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* استماع للنموذج */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-muted/20 p-4">
        <p className="text-sm text-muted-foreground">🔊 استمع للنموذج كاملاً (نطق طبيعي):</p>
        <SpeakButton text={parts.paragraphs.map((p) => p.de).join(" ")} variant="outline" size="sm" label="استمع للنموذج" />
      </div>
    </div>
  );
}
