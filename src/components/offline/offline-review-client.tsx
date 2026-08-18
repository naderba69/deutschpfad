"use client";

/**
 * المراجعة دون إنترنت (Offline Review)
 * — المفردات من الحزم المعبّأة مسبقاً + النطق المحلي (TTS) —
 * كل شيء يعمل دون شبكة: فلترة المستوى + بحث + استماع.
 */
import * as React from "react";
import {Search, WifiOff} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
;
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {A1_VOCAB} from "@/data/vocabulary/a1";
import {A2_VOCAB} from "@/data/vocabulary/a2";
import {B1_VOCAB} from "@/data/vocabulary/b1";
import {B2_VOCAB} from "@/data/vocabulary/b2";
import type { VocabEntry } from "@/data/vocabulary/a1";
import {cn} from "@/lib/utils";

const ALL: { level: string; words: VocabEntry[] }[] = [
  { level: "A1", words: Object.values(A1_VOCAB).flat() },
  { level: "A2", words: Object.values(A2_VOCAB).flat() },
  { level: "B1", words: Object.values(B1_VOCAB).flat() },
  { level: "B2", words: Object.values(B2_VOCAB).flat() },
];

const LEVELS = ["all", "A1", "A2", "B1", "B2"] as const;

export function OfflineReviewClient() {
  const [level, setLevel] = React.useState<(typeof LEVELS)[number]>("all");
  const [query, setQuery] = React.useState("");

  const filtered = ALL.flatMap(({ level: lv, words }) =>
    level === "all" || level === lv ? words : [],
  ).filter(
    (w) =>
      !query.trim() ||
      w.de.toLowerCase().includes(query.toLowerCase()) ||
      w.ar.includes(query.trim()),
  );

  return (
    <div className="space-y-5">
      {/* شارة دون اتصال */}
      <div className="flex items-center gap-2 rounded-xl border border-success/40 bg-success/10 p-3 text-sm">
        <WifiOff className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
        <p className="text-muted-foreground">
          <span className="font-bold text-success">يعمل دون إنترنت:</span> المفردات محفوظة في
          جهازك والنطق محلي (TTS) — جرّب وضع الطيران!
        </p>
      </div>

      {/* الفلترة */}
      <div className="flex flex-wrap items-center gap-2">
        {LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLevel(l)}
            className={cn(
              "font-de rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
              level === l ? "border-primary bg-primary text-primary-foreground" : "bg-muted/40 text-muted-foreground hover:border-primary/40",
            )}
          >
            {l === "all" ? "الكل" : l}
          </button>
        ))}
        <div className="relative ms-auto min-w-40 flex-1 sm:max-w-xs">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث…"
            className="ps-9"
            aria-label="ابحث في المفردات"
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground" role="status">
        {filtered.length} كلمة متاحة دون اتصال
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {filtered.map((w) => (
          <Card key={`${w.de}-${w.ar}`} className="overflow-hidden">
            <CardContent className="flex items-center justify-between gap-2 p-3">
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-1.5">
                  <span className="font-de text-sm font-bold" dir="ltr" lang="de">{w.de}</span>
                  {w.g && (w.g === "der" || w.g === "die" || w.g === "das") && (
                    <span className={cn(
                      "rounded px-1 py-0.5 text-[11px] font-bold",
                      w.g === "der" ? "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300" : w.g === "die" ? "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
                    )} dir="ltr">{w.g}</span>
                  )}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-primary">{w.ar}</p>
              </div>
              <SpeakButton text={w.de} variant="ghost" size="sm" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
