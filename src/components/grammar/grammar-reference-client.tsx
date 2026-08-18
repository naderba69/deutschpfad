"use client";

import * as React from "react";
import {BookOpen, Brain, Lightbulb, Search} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {GRAMMAR_CATEGORIES, GRAMMAR_REFERENCE, type GrammarCategory, type GrammarTopic} from "@/data/grammar/reference";
import {errorTypeLabel} from "@/lib/lesson/error-types";
import {cn} from "@/lib/utils";

const LEVELS = ["all", "A1", "A2", "B1", "B2"] as const;

/**
 * المرجع النحوي — بحث + فلترة بالمستوى والفئة + بطاقات قابلة للتوسيع
 */
export function GrammarReferenceClient() {
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<(typeof LEVELS)[number]>("all");
  const [category, setCategory] = React.useState<GrammarCategory | "all">("all");
  const [open, setOpen] = React.useState<string | null>(null);

  const filtered = GRAMMAR_REFERENCE.filter((t) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      t.titleAr.includes(query.trim()) ||
      t.titleDe.toLowerCase().includes(q) ||
      t.summary.includes(query.trim());
    const matchesLevel = level === "all" || t.level === level;
    const matchesCategory = category === "all" || t.category === category;
    return matchesQuery && matchesLevel && matchesCategory;
  });

  return (
    <div className="space-y-5">
      {/* أدوات البحث والفلترة */}
      <div className="space-y-3 rounded-xl border bg-muted/20 p-4">
        <div className="relative">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن قاعدة… (sein، النصب، Konjunktiv، Genitiv...)"
            className="ps-9"
            aria-label="البحث في القواعد"
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
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as GrammarCategory | "all")}
          aria-label="الفلترة بالفئة"
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
        >
          <option value="all">كل الفئات</option>
          {(Object.keys(GRAMMAR_CATEGORIES) as GrammarCategory[]).map((c) => (
            <option key={c} value={c}>
              {GRAMMAR_CATEGORIES[c]}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted-foreground">
          {filtered.length} قاعدة من أصل {GRAMMAR_REFERENCE.length} — تغطي A1 → B2 كاملة
        </p>
      </div>

      {/* البطاقات */}
      <div className="space-y-3">
        {filtered.map((topic) => {
          const isOpen = open === topic.id;
          return (
            <Card
              key={topic.id}
              id={topic.id}
              className="scroll-mt-28 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : topic.id)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-start transition-colors hover:bg-muted/30"
                aria-expanded={isOpen}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-de font-bold">
                      {topic.level}
                    </Badge>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {GRAMMAR_CATEGORIES[topic.category]}
                    </span>
                    <h3 className="font-bold">{topic.titleAr}</h3>
                  </div>
                  <p className="font-de mt-1 text-sm text-primary" dir="ltr" lang="de">
                    {topic.titleDe}
                  </p>
                </div>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && <TopicDetail topic={topic} />}
            </Card>
          );
        })}
        {filtered.length === 0 && (
          <p className="rounded-xl border bg-muted/20 p-8 text-center text-muted-foreground">
            لا نتائج مطابقة — جرّب كلمة أخرى أو غيّر الفلاتر.
          </p>
        )}
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** تفاصيل القاعدة — النمط الإلزامي المختصر */
function TopicDetail({ topic }: { topic: GrammarTopic }) {
  return (
    <CardContent className="space-y-4 border-t bg-muted/10 p-5">
      <p className="leading-relaxed">{topic.summary}</p>

      {topic.why && (
        <div className="flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p>
            <span className="font-bold">لماذا؟ </span>
            {topic.why}
          </p>
        </div>
      )}

      <div>
        <p className="mb-2 text-sm font-bold text-muted-foreground">أمثلة:</p>
        <div className="space-y-2">
          {topic.examples.map((ex, i) => (
            <div key={i} className="flex items-start justify-between gap-3 rounded-xl border bg-background p-3">
              <div>
                <p className="font-de font-semibold" dir="ltr" lang="de">
                  {ex.de}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{ex.ar}</p>
              </div>
              <SpeakButton text={ex.de} />
            </div>
          ))}
        </div>
      </div>

      {topic.eselsbruecke && (
        <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
          <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground" aria-hidden="true" />
          <p>
            <span className="font-bold">تريك حفظ: </span>
            {topic.eselsbruecke}
          </p>
        </div>
      )}

      {topic.mistakeLink && (
        <p className="inline-flex items-center gap-1.5 rounded-lg bg-destructive/10 px-2.5 py-1 text-xs font-semibold text-destructive">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          يرتبط بنوع خطأ: {errorTypeLabel(topic.mistakeLink)}
        </p>
      )}
    </CardContent>
  );
}
