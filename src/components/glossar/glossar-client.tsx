"use client";

import * as React from "react";
import {BookMarked, CheckCircle2, Search, Sparkles} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {getAllCards} from "@/lib/srs/flashcard-service";
import {A1_VOCAB} from "@/data/vocabulary/a1";
import {A2_VOCAB} from "@/data/vocabulary/a2";
import {B1_VOCAB} from "@/data/vocabulary/b1";
import {B2_VOCAB} from "@/data/vocabulary/b2";
import type { VocabEntry } from "@/data/vocabulary/a1";
import {cn} from "@/lib/utils";

const LEVEL_MAP: Record<string, Record<string, VocabEntry[]>> = {
  A1: A1_VOCAB,
  A2: A2_VOCAB,
  B1: B1_VOCAB,
  B2: B2_VOCAB,
};

const LEVELS = ["all", "A1", "A2", "B1", "B2"] as const;

/**
 * القاموس الشامل القابل للبحث — كل المفردات (~950 كلمة)
 * فلترة بالمستوى + بحث + نطق
 */
export function GlossarClient() {
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<(typeof LEVELS)[number]>("all");
  // ═══ مؤشر الإتقان: خريطة (كلمة → درجة إتقان) من بطاقات SM-2 ═══
  const [mastery, setMastery] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    void (async () => {
      try {
        const cards = await getAllCards();
        const map: Record<string, number> = {};
        for (const c of cards) {
          // درجة 0-100 تقريبية من عدد التكرارات
          const m = Math.min(100, Math.round((c.repetitions / 3) * 100));
          map[c.de.toLowerCase()] = Math.max(map[c.de.toLowerCase()] ?? 0, m);
        }
        setMastery(map);
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  const all: { level: string; entry: VocabEntry }[] = (Object.keys(LEVEL_MAP) as (keyof typeof LEVEL_MAP)[]).flatMap(
    (lv) =>
      Object.values(LEVEL_MAP[lv]).flatMap((list) =>
        list.map((entry) => ({ level: lv, entry })),
      ),
  );

  const filtered = all.filter(({ level: lv, entry }) => {
    const matchesLevel = level === "all" || lv === level;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      entry.de.toLowerCase().includes(q) ||
      entry.ar.includes(query.trim()) ||
      (entry.ex ?? "").toLowerCase().includes(q);
    return matchesLevel && matchesQuery;
  });

  return (
    <div className="space-y-4">
      {/* البحث والفلترة */}
      <div className="space-y-3 rounded-xl border bg-muted/20 p-4">
        <div className="relative">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ps-9 font-de"
            dir="auto"
            aria-label="البحث في القاموس"
          />
        </div>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="الفلترة بالمستوى">
          {LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={cn(
                "font-de rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
                level === l ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50",
              )}
            >
              {l === "all" ? "الكل" : l}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {filtered.length} كلمة من {all.length} — منظمة حسب الوحدات
        </p>
      </div>

      {/* القائمة */}
      <Card>
        <CardContent className="p-2">
          {filtered.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">لا نتائج مطابقة.</p>
          ) : (
            <ul className="divide-y">
              {filtered.map(({ level: lv, entry }, i) => (
                <li key={`${lv}-${entry.de}-${i}`} className="flex items-center justify-between gap-3 p-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <SpeakButton text={entry.de} size="sm" className="h-8 w-8 shrink-0" />
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-center gap-2">
                        {entry.g === "der" || entry.g === "die" || entry.g === "das" ? (
                          <span className={cn("font-de text-xs font-bold", entry.g === "der" ? "text-sky-600 dark:text-sky-400" : entry.g === "die" ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-emerald-400")}>
                            {entry.g}
                          </span>
                        ) : null}
                        <span className="font-de font-bold" dir="ltr" lang="de">
                          {entry.de}
                        </span>
                        <Badge variant="outline" className="font-de text-[9px] px-1.5">
                          {lv}
                        </Badge>
                        {/* مؤشر الإتقان من بطاقات SM-2 */}
                        {mastery[entry.de.toLowerCase()] !== undefined && (
                          <span
                            title={`إتقان ${mastery[entry.de.toLowerCase()]}% — راجعه في البطاقات`}
                            className={cn(
                              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-extrabold",
                              mastery[entry.de.toLowerCase()] >= 80
                                ? "bg-success/15 text-success"
                                : mastery[entry.de.toLowerCase()] >= 40
                                  ? "bg-gold/15 text-gold-strong"
                                  : "bg-muted text-muted-foreground",
                            )}
                          >
                            {mastery[entry.de.toLowerCase()] >= 80 ? (
                              <CheckCircle2 className="h-2.5 w-2.5" aria-hidden="true" />
                            ) : (
                              <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                            )}
                            {mastery[entry.de.toLowerCase()]}%
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{entry.ar}</p>
                      {entry.ex && (
                        <p className="font-de truncate text-xs text-muted-foreground/70" dir="ltr" lang="de">
                          {entry.ex}
                        </p>
                      )}
                    </div>
                  </div>
                  <BookMarked className="h-4 w-4 shrink-0 text-muted-foreground/40" aria-hidden="true" />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
