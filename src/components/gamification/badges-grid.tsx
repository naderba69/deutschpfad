"use client";

import * as React from "react";
import {Award, Sparkles} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BADGES, getUnlockedBadges, refreshBadges} from "@/lib/gamification/badges";
import {computeStreak, getActivityMap} from "@/lib/analytics/heatmap";
import {getRecord} from "@/lib/storage/db";
import {cn} from "@/lib/utils";

/**
 * شبكة الشارات — كل الشارات مع حالة الفتح
 * (يتحقق تلقائياً عند التحميل ويعلن الجديدة)
 */
export function BadgesGrid() {
  const [unlocked, setUnlocked] = React.useState<string[]>([]);
  const [newly, setNewly] = React.useState<string[]>([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    void (async () => {
      const activity = await getActivityMap();
      const streak = computeStreak(activity);
      const goals = await getRecord<unknown[]>("settings", "smart-goals:v1");
      const goalDone =
        Array.isArray(goals) && goals.some((g) => typeof g === "object" && g !== null && (g as { done?: boolean }).done);

      const fresh = await refreshBadges({
        streak7: streak >= 7,
        goalEarned: goalDone,
      });
      const unlockedNow = await getUnlockedBadges();
      setUnlocked(unlockedNow);
      if (fresh.length > 0) setNewly(fresh);
      setLoaded(true);
    })();
  }, []);

  const total = BADGES.length + 3; // + شارات المستوى

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Award className="h-5 w-5 text-gold-strong" aria-hidden="true" />
          شارات الإنجاز
          <span className="font-de ms-auto rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
            {unlocked.length}/{total}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        {newly.length > 0 && (
          <div className="mb-4 rounded-xl border border-gold/50 bg-gold/10 p-3">
            <p className="inline-flex items-center gap-2 font-bold text-gold-strong-foreground">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              شارات جديدة! 🎉
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {newly.map((id) => BADGES.find((b) => b.id === id)?.name).filter(Boolean).join("، ")}
            </p>
          </div>
        )}

        {!loaded ? (
          <p className="text-sm text-muted-foreground">جارٍ فحص الإنجازات…</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {BADGES.map((badge) => {
              const isUnlocked = unlocked.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition-all",
                    isUnlocked
                      ? "border-gold/40 bg-gold/5"
                      : "border-muted bg-muted/20 opacity-60 grayscale",
                  )}
                  title={badge.description}
                >
                  <span className="text-3xl" aria-hidden="true">
                    {badge.emoji}
                  </span>
                  <span className="text-xs font-bold leading-tight">{badge.name}</span>
                  <span className="text-[11px] leading-tight text-muted-foreground">
                    {isUnlocked ? "مفتوحة ✓" : "مقفلة"}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-3 text-center text-xs text-muted-foreground">
          شارات إضافية تفتح مع مستوياتك (متوسط 🥉 / متقدم 🥈 / خبير 🥇) — أكمل أهدافك SMART
          لتفتح «صانع الأهداف» تلقائياً!
        </p>
      </CardContent>
    </Card>
  );
}
