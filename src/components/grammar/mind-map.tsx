"use client";

import * as React from "react";
import {ChevronDown, GitBranch} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {GRAMMAR_CATEGORIES, GRAMMAR_REFERENCE, type GrammarCategory} from "@/data/grammar/reference";
import {cn} from "@/lib/utils";

/** ألوان الفئات */
const CATEGORY_COLORS: Record<GrammarCategory, string> = {
  verbs: "border-sky-400/60 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  nouns: "border-emerald-400/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  articles: "border-teal-400/60 bg-teal-500/10 text-teal-700 dark:text-teal-300",
  pronouns: "border-indigo-400/60 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  adjectives: "border-fuchsia-400/60 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
  cases: "border-amber-400/60 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  prepositions: "border-orange-400/60 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  sentences: "border-rose-400/60 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  tenses: "border-violet-400/60 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  passive: "border-red-400/60 bg-red-500/10 text-red-700 dark:text-red-300",
  modal: "border-blue-400/60 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  connectives: "border-cyan-400/60 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  negation: "border-lime-400/60 bg-lime-500/10 text-lime-700 dark:text-lime-300",
  "word-order": "border-pink-400/60 bg-pink-500/10 text-pink-700 dark:text-pink-300",
  particles: "border-slate-400/60 bg-slate-500/10 text-slate-700 dark:text-slate-300",
};

/**
 * الخريطة الذهنية للقواعد — ترابط الفئات والمستويات
 * (توسيع تفاعلي: اضغط فئة لترى قواعدها)
 */
export function GrammarMindMap() {
  const [open, setOpen] = React.useState<GrammarCategory | null>(null);

  const categories = Object.keys(GRAMMAR_CATEGORIES) as GrammarCategory[];
  const topicsByCat = (cat: GrammarCategory) => GRAMMAR_REFERENCE.filter((t) => t.category === cat);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <GitBranch className="h-5 w-5 text-primary" aria-hidden="true" />
          الخريطة الذهنية للقواعد
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <p className="mb-4 text-sm text-muted-foreground">
          اضغط أي فئة لترى القواعد المرتبطة بها — كل قاعدة تقودك لشرحها الكامل في الجدول
          المرجعي أدناه.
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = topicsByCat(cat).length;
            return (
              <div key={cat} className="flex flex-col items-center gap-1">
                <button
                  type="button"
                  onClick={() => setOpen((o) => (o === cat ? null : cat))}
                  className={cn(
                    "rounded-xl border px-3 py-2 text-xs font-bold transition-all hover:scale-105",
                    CATEGORY_COLORS[cat],
                    open === cat && "ring-2 ring-ring",
                  )}
                >
                  {GRAMMAR_CATEGORIES[cat]}
                  <span className="font-de ms-1 opacity-70">({count})</span>
                </button>
                {open === cat && (
                  <div className="mt-1 flex max-w-64 flex-col gap-1 rounded-lg border bg-background p-2 text-[11px]">
                    {topicsByCat(cat).map((t) => (
                      <a
                        key={t.id}
                        href={`/grammatik#${t.id}`}
                        className="rounded px-2 py-1 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <span className="font-de" dir="ltr">{t.titleDe}</span>
                        <span className="block text-muted-foreground">{t.titleAr}</span>
                      </a>
                    ))}
                    <ChevronDown className="mx-auto h-3 w-3 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
