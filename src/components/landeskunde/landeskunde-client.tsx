"use client";

import * as React from "react";
import {ChevronDown} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {SpeakButton} from "@/components/shared/speak-button";
import {getLearnerProfile} from "@/lib/storage/learner";
import {CULTURE_CARDS, CULTURE_LEVEL_ORDER, getCardsByLevel} from "@/data/landeskunde";
import type { LevelCode } from "@/types/curriculum";
import {cn} from "@/lib/utils";

const LEVEL_TOPIC: Record<LevelCode, string> = {
  A1: "عادات يومية بسيطة",
  A2: "أعياد وتقاليد",
  B1: "مجتمع وقيم",
  B2: "تاريخ واقتصاد",
};

/**
 * مكتبة البطاقات الثقافية — مستوى واحد في كل مرة (4 بطاقات) بدل 16 بطاقة متتالية.
 * الافتراضي: مستوى المتعلم المحدَّد، وإلا A1. اختيار المستخدم يتغلب على الاقتراح.
 */
export function LandeskundeClient() {
  const [suggested, setSuggested] = React.useState<LevelCode | null>(null);
  const [picked, setPicked] = React.useState<LevelCode | null>(null);
  const [open, setOpen] = React.useState<string | null>(null);

  React.useEffect(() => {
    void getLearnerProfile().then((p) => {
      if (p?.onboarded && p.placementLevel) setSuggested(p.placementLevel as LevelCode);
    });
  }, []);

  const active: LevelCode = picked ?? suggested ?? "A1";
  const cards = getCardsByLevel(active);

  return (
    <div className="space-y-6">
      <div role="group" aria-label="اختر المستوى" className="flex flex-wrap gap-2">
        {CULTURE_LEVEL_ORDER.map((level) => {
          const isActive = level === active;
          return (
            <button
              key={level}
              type="button"
              aria-pressed={isActive}
              aria-label={`المستوى ${level}${level === suggested ? " (مقترح لك)" : ""}`}
              onClick={() => {
                setPicked(level);
                setOpen(null);
              }}
              className={cn(
                "font-de flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-extrabold transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-muted",
              )}
            >
              {level}
              {level === suggested && (
                <Badge variant="gold" className="font-de text-[11px]" aria-hidden="true">مقترح</Badge>
              )}
            </button>
          );
        })}
      </div>

      <section aria-labelledby={`lk-${active}`}>
        <h2 id={`lk-${active}`} className="mb-3 text-sm font-extrabold text-muted-foreground">
          {active} · {LEVEL_TOPIC[active]}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.id} className="rounded-2xl border bg-card p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl" aria-hidden="true">{card.emoji}</span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">{card.category}</span>
              </div>
              <h3 className="mt-2 text-sm font-extrabold">{card.titleAr}</h3>
              <p className="font-de mt-0.5 text-xs font-bold" dir="ltr" lang="de">{card.title}</p>

              <div className="mt-3 space-y-2">
                <p className="font-de rounded-lg bg-muted/30 px-3 py-2 text-xs leading-relaxed" dir="ltr">
                  <span lang="de" dir="ltr">{card.de}</span>
                </p>
                <p className="rounded-lg bg-primary/5 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                  {card.ar}
                </p>
              </div>

              {/* الحقائق — قابلة للفتح */}
              <button
                type="button"
                aria-expanded={open === card.id}
                onClick={() => setOpen(open === card.id ? null : card.id)}
                className="mt-3 flex w-full items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-extrabold text-primary transition-colors hover:bg-primary/10"
              >
                <span>حقائق مهمة ({card.facts.length})</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open === card.id && "rotate-180")} aria-hidden="true" />
              </button>
              {open === card.id && (
                <ul className="mt-2 space-y-1.5">
                  {card.facts.map((f, i) => (
                    <li key={i} className="rounded-lg border border-muted bg-muted/10 px-2.5 py-1.5 text-xs">
                      <span className="font-de block font-bold" dir="ltr" lang="de">{f.de}</span>
                      <span className="text-[11px] text-muted-foreground">{f.ar}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-3">
                <SpeakButton text={card.de} rate={0.8} size="sm" label="استمع للنص" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-xs font-bold text-muted-foreground">
        {CULTURE_CARDS.length} بطاقة ثقافية — تُضاف بطاقات جديدة مع كل تحديث.
      </p>
    </div>
  );
}
