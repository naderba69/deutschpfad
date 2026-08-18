"use client";

import * as React from "react";
import {Check, SlidersHorizontal} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {GOAL_LABELS, PACE_LABELS, getPreferences, savePreferences, type LearningGoal, type StudyPace, type UserPreferences} from "@/lib/storage/preferences";
import {cn} from "@/lib/utils";

/**
 * بطاقة تفضيلات المستخدم — الهدف + الخطة الزمنية
 * (تخصيص الأولويات — من متطلبات المرحلة 12)
 */
export function PreferencesCard() {
  const [prefs, setPrefs] = React.useState<UserPreferences | null>(null);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    void getPreferences().then(setPrefs);
  }, []);

  if (!prefs) return null;

  const update = (next: Partial<UserPreferences>) => {
    setPrefs((p) => (p ? { ...p, ...next } : p));
    setSaved(false);
  };

  const save = async () => {
    await savePreferences(prefs);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const goal = GOAL_LABELS[prefs.goal];
  const pace = PACE_LABELS[prefs.pace];

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <SlidersHorizontal className="h-5 w-5 text-primary" aria-hidden="true" />
          تفضيلات التعلم
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        <div>
          <p className="mb-2 text-sm font-bold">هدفي من تعلم الألمانية</p>
          <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="هدف التعلم">
            {(Object.keys(GOAL_LABELS) as LearningGoal[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => update({ goal: g })}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors",
                  prefs.goal === g ? "border-primary bg-primary/10 font-semibold" : "bg-background hover:border-primary/40",
                )}
              >
                <span>{GOAL_LABELS[g].emoji}</span>
                {GOAL_LABELS[g].label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{goal.note}</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold">الخطة الزمنية</p>
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="الخطة الزمنية">
            {(Object.keys(PACE_LABELS) as StudyPace[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => update({ pace: p })}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm transition-colors",
                  prefs.pace === p ? "border-primary bg-primary text-primary-foreground font-semibold" : "bg-background hover:border-primary/40",
                )}
              >
                {PACE_LABELS[p].label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{pace.daily}</p>
        </div>

        <button
          type="button"
          onClick={() => void save()}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {saved ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
          {saved ? "تم الحفظ ✓" : "حفظ التفضيلات"}
        </button>
      </CardContent>
    </Card>
  );
}
