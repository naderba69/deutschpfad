"use client";

import * as React from "react";
import {GraduationCap, MessageSquareText} from "lucide-react";

import {DailyDialoguePlayer} from "@/components/dialogues/daily-dialogue-player";
import {Badge} from "@/components/ui/badge";
import {getLearnerProfile} from "@/lib/storage/learner";
import {DAILY_DIALOGUES, DIALOGUE_LEVEL_COUNTS, DIALOGUE_LEVEL_ORDER, getDialoguesByLevel, type DailyDialogue} from "@/data/dialogues";
import type { LevelCode } from "@/types/curriculum";

/** مكتبة الحوارات اليومية المتدرجة — 60 حواراً */
export function DailyLibrary() {
  const [current, setCurrent] = React.useState<DailyDialogue | null>(null);
  const [suggested, setSuggested] = React.useState<LevelCode | null>(null);

  React.useEffect(() => {
    void getLearnerProfile().then((p) => {
      if (p?.onboarded && p.placementLevel) setSuggested(p.placementLevel as LevelCode);
    });
  }, []);

  if (current) return <DailyDialoguePlayer dialogue={current} onBack={() => setCurrent(null)} />;

  return (
    <div className="space-y-8">
      {suggested && (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="flex items-center gap-1.5 text-sm font-extrabold text-primary">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            مستواك: {suggested} — ابدأ بحوارات {suggested}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            كل حوار: محادثة كاملة + نطق + ترجمة + أسئلة فهم + وضع «دورك» 🎭
          </p>
        </div>
      )}

      {DIALOGUE_LEVEL_ORDER.map((level) => {
        const dialogues = getDialoguesByLevel(level);
        if (dialogues.length === 0) return null;
        return (
          <section key={level}>
            <div className="mb-3 flex items-center gap-2">
              <Badge variant={level === suggested ? "gold" : "default"} className="font-de">{level}</Badge>
              <h2 className="text-sm font-extrabold text-muted-foreground">
                {DIALOGUE_LEVEL_COUNTS[level]} حواراً — {level === "A1" && "مواقف أساسية يومية"}
                {level === "A2" && "مواقف أوسع: طبيب، بنك، سفر، خدمات"}
                {level === "B1" && "رأي وتخطيط وشكوى وعمل"}
                {level === "B2" && "تفاوض وصراع وأكاديمي وطوارئ"}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {dialogues.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setCurrent(d)}
                  className="group rounded-2xl border bg-card p-4 text-start transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" aria-hidden="true">{d.emoji}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">
                      <MessageSquareText className="h-3 w-3" aria-hidden="true" />
                      {d.turns.length} جولات
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-extrabold group-hover:text-primary">{d.title}</h3>
                  <p className="font-de mt-0.5 text-xs font-bold text-muted-foreground" dir="ltr">{d.titleDe}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{d.situation}</p>
                </button>
              ))}
            </div>
          </section>
        );
      })}

      <p className="text-center text-xs font-bold text-muted-foreground">
        {DAILY_DIALOGUES.length} حواراً يومياً — تغطية تتجاوز كتاب Menschen (24 وحدة × 3 مستويات).
      </p>
    </div>
  );
}
