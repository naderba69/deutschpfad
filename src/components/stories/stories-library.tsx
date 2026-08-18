"use client";

import * as React from "react";
import {BookOpen, CheckCircle2, GraduationCap, Sparkles} from "lucide-react";

import {InteractiveStoryPlayer} from "@/components/stories/interactive-story";
import {Badge} from "@/components/ui/badge";
import {getLearnerProfile} from "@/lib/storage/learner";
import {getCompletedStories, getStoryProgress} from "@/lib/storage/story-progress";
import {
  STORY_LEVEL_COUNTS,
  STORY_LEVEL_ORDER,
  getStoriesByLevel,
  INTERACTIVE_STORIES,
  type InteractiveStory,
} from "@/data/stories";
import type { LevelCode } from "@/types/curriculum";
import {cn} from "@/lib/utils";

/**
 * مكتبة القصص المتدرجة:
 * تعرض القصص حسب المستوى (A1→B2) مع شريط تقدم لكل مستوى
 * وتقترح المستوى المناسب لمستوى المتعلم — ترتيب وتسلسل أكاديمي واضح.
 */
export function StoriesLibrary() {
  const [current, setCurrent] = React.useState<InteractiveStory | null>(null);
  const [suggested, setSuggested] = React.useState<LevelCode | null>(null);
  const [completed, setCompleted] = React.useState<string[]>([]);
  const [progress, setProgress] = React.useState<Record<string, { done: number; total: number }>>({});

  const refreshProgress = React.useCallback(() => {
    setCompleted(getCompletedStories());
    setProgress(getStoryProgress(STORY_LEVEL_COUNTS));
  }, []);

  React.useEffect(() => {
    refreshProgress();
    void getLearnerProfile().then((p) => {
      if (p?.onboarded && p.placementLevel) setSuggested(p.placementLevel as LevelCode);
    });
  }, [refreshProgress]);

  if (current) {
    return (
      <InteractiveStoryPlayer
        story={current}
        onExit={() => {
          setCurrent(null);
          refreshProgress();
        }}
      />
    );
  }

  return (
    <div className="space-y-8">
      {suggested && (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="flex items-center gap-1.5 text-sm font-extrabold text-primary">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            مستواك المحدد: {suggested}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            ابدأ بقصص {suggested} — صُممت بمفردات وقواعد مستواك تماماً. ثم تدرّج للأعلى
            بعد إتمامها. القصص المكتملة تحمل ✓.
          </p>
        </div>
      )}

      {STORY_LEVEL_ORDER.map((level) => {
        const stories = getStoriesByLevel(level);
        if (stories.length === 0) return null;
        const p = progress[level];
        const levelDone = p?.done ?? 0;
        const levelTotal = p?.total ?? stories.length;
        const levelComplete = levelDone === levelTotal && levelTotal > 0;
        return (
          <section key={level}>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant={level === suggested ? "gold" : levelComplete ? "success" : "default"} className="font-de">{level}</Badge>
              <h2 className="text-sm font-extrabold text-muted-foreground">
                {level === "A1" && "مبتدئ — جمل قصيرة ومفردات أساسية"}
                {level === "A2" && "أساسي — ماضٍ بسيط ومحادثات يومية"}
                {level === "B1" && "متوسط — جمل مركّبة وأسباب ونتائج"}
                {level === "B2" && "متقدم — لغة الأعمال والتعبير المهذّب"}
              </h2>
              <span className="ms-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground">
                {levelDone}/{levelTotal}
                {levelComplete && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-success">
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                    أتممت المستوى!
                  </span>
                )}
              </span>
            </div>
            {/* شريط تقدم المستوى */}
            <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn("h-full rounded-full", levelComplete ? "bg-success" : "bg-gradient-to-l from-primary to-success")}
                style={{ width: `${(levelDone / Math.max(1, levelTotal)) * 100}%` }}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {stories.map((s) => {
                const isDone = completed.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrent(s)}
                    className={cn(
                      "group relative rounded-2xl border bg-card p-4 text-start transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft",
                      isDone && "border-success/40",
                    )}
                  >
                    {isDone && (
                      <span className="absolute end-2 top-2 inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-bold text-success">
                        <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                        أتممتها
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl" aria-hidden="true">{s.emoji}</span>
                      <span className="font-de rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-extrabold text-primary">{s.level}</span>
                    </div>
                    <h3 className="mt-2 text-sm font-extrabold group-hover:text-primary">{s.titleAr}</h3>
                    <p className="font-de mt-0.5 text-xs font-bold" dir="ltr">{s.title}</p>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{s.description}</p>
                    <p className="mt-2 flex items-center gap-1 text-[11px] font-bold text-primary">
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      {s.grammar}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      <div className="rounded-2xl border border-muted bg-card p-4 text-center">
        <p className="flex items-center justify-center gap-1.5 text-xs font-bold text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          {INTERACTIVE_STORIES.length} قصص متاحة — أتمّم قصص كل مستوى لتتقن قواعده قبل الانتقال للتالي.
        </p>
      </div>
    </div>
  );
}
