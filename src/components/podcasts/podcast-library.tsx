"use client";

import * as React from "react";
import {GraduationCap, Headphones} from "lucide-react";

import {PodcastPlayer} from "@/components/podcasts/podcast-player";
import {Badge} from "@/components/ui/badge";
import {getLearnerProfile} from "@/lib/storage/learner";
import {PODCASTS, PODCAST_LEVEL_ORDER, getPodcastsByLevel, type PodcastEpisode} from "@/data/podcasts";
import type { LevelCode } from "@/types/curriculum";

/** مكتبة البودكاست المتدرجة حسب المستوى */
export function PodcastLibrary() {
  const [current, setCurrent] = React.useState<PodcastEpisode | null>(null);
  const [suggested, setSuggested] = React.useState<LevelCode | null>(null);

  React.useEffect(() => {
    void getLearnerProfile().then((p) => {
      if (p?.onboarded && p.placementLevel) setSuggested(p.placementLevel as LevelCode);
    });
  }, []);

  if (current) return <PodcastPlayer episode={current} onBack={() => setCurrent(null)} />;

  return (
    <div className="space-y-8">
      {suggested && (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="flex items-center gap-1.5 text-sm font-extrabold text-primary">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            مستواك: {suggested} — ابدأ بحلقات {suggested}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            استمع أولاً دون نص (فهم طبيعي)، ثم اقرأ النص، ثم أجب عن الأسئلة.
          </p>
        </div>
      )}

      {PODCAST_LEVEL_ORDER.map((level) => {
        const eps = getPodcastsByLevel(level);
        if (eps.length === 0) return null;
        return (
          <section key={level}>
            <div className="mb-3 flex items-center gap-2">
              <Badge className="font-de">{level}</Badge>
              <h2 className="text-sm font-extrabold text-muted-foreground">
                {level === "A1" && "مواقف يومية بسيطة جداً"}
                {level === "A2" && "قصص قصيرة عن الحياة"}
                {level === "B1" && "حوارات وآراء"}
                {level === "B2" && "مواضيع مجردة ونقل آراء"}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {eps.map((ep) => (
                <button
                  key={ep.id}
                  type="button"
                  onClick={() => setCurrent(ep)}
                  className="group rounded-2xl border bg-card p-4 text-start transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" aria-hidden="true">{ep.emoji}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">
                      <Headphones className="h-3 w-3" aria-hidden="true" />
                      استماع
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-extrabold group-hover:text-primary">{ep.titleAr}</h3>
                  <p className="font-de mt-0.5 text-xs font-bold" dir="ltr">{ep.title}</p>
                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground" dir="ltr">
                    {ep.script}
                  </p>
                  <p className="mt-2 text-[11px] font-bold text-primary">{ep.questions.length} أسئلة فهم</p>
                </button>
              ))}
            </div>
          </section>
        );
      })}

      <p className="text-center text-xs font-bold text-muted-foreground">
        {PODCASTS.length} حلقات بودكاست — استماع ممتد يبني الفهم الطبيعي للغة.
      </p>
    </div>
  );
}
