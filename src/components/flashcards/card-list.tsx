"use client";

import * as React from "react";
import {CalendarClock, Search, Trash2} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {deleteCard, getAllCards} from "@/lib/srs/flashcard-service";
import {cn} from "@/lib/utils";
import type { LevelCode } from "@/types/curriculum";
import type { Sm2CardData } from "@/types/srs";

const LEVELS: (LevelCode | "all")[] = ["all", "A1", "A2", "B1", "B2"];

/** تنسيق تاريخ الاستحقاق */
function dueLabel(card: Sm2CardData): string {
  const days = Math.ceil((card.due - Date.now()) / 86400000);
  if (card.repetitions === 0) return "جديدة (لم تُراجع)";
  if (days <= 0) return "مستحقة الآن";
  if (days === 1) return "غداً";
  return `بعد ${days} يوم`;
}

/**
 * قائمة كل البطاقات — بحث + فلترة بالمستوى + حذف
 */
export function CardList({ refreshKey }: { refreshKey?: number }) {
  const [cards, setCards] = React.useState<Sm2CardData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState("");
  const [level, setLevel] = React.useState<LevelCode | "all">("all");

  const load = React.useCallback(async () => {
    const all = await getAllCards();
    setCards(all);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    void load();
  }, [load, refreshKey]);

  const filtered = cards.filter((c) => {
    const matchesLevel = level === "all" || c.level === level;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      c.de.toLowerCase().includes(q) ||
      c.ar.includes(query.trim()) ||
      (c.example ?? "").toLowerCase().includes(q);
    return matchesLevel && matchesQuery;
  });

  const handleDelete = async (id: string, de: string) => {
    if (window.confirm(`حذف البطاقة «${de}»؟ لا يمكن التراجع.`)) {
      await deleteCard(id);
      await load();
    }
  };

  return (
    <div className="space-y-4">
      {/* البحث والفلترة */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ps-9"
            aria-label="البحث في البطاقات"
          />
        </div>
        <div className="flex gap-1" role="group" aria-label="الفلترة بالمستوى">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevel(lvl)}
              aria-pressed={level === lvl}
              className={cn(
                "rounded-lg border px-3 py-1.5 font-de text-xs font-bold transition-colors",
                level === lvl
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background hover:border-primary/50",
              )}
            >
              {lvl === "all" ? "الكل" : lvl}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground">جارٍ التحميل…</p>
      ) : filtered.length === 0 ? (
        <p className="rounded-xl border bg-muted/20 p-6 text-center text-sm text-muted-foreground">
          {cards.length === 0
            ? "لا توجد بطاقات بعد — أكمل درساً لتصبح بطاقاته هنا، أو أضف بطاقة يدوياً."
            : "لا نتائج مطابقة لبحثك."}
        </p>
      ) : (
        <ul className="divide-y rounded-xl border bg-card">
          {filtered.map((card) => {
            const due = card.due <= Date.now();
            return (
              <li key={card.id} className="flex items-center justify-between gap-3 p-3">
                <div className="flex min-w-0 items-center gap-3">
                  <SpeakButton text={card.de} size="sm" className="h-8 w-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-2">
                      <span className="font-de font-bold" dir="ltr" lang="de">
                        {card.de}
                      </span>
                      <Badge variant="outline" className="font-de text-[11px]">
                        {card.level}
                      </Badge>
                      {card.source === "manual" && (
                        <Badge variant="secondary" className="text-[11px]">
                          يدوية
                        </Badge>
                      )}
                    </p>
                    <p className="truncate text-sm text-muted-foreground">{card.ar}</p>
                    {card.example && (
                      <p className="font-de truncate text-xs text-muted-foreground/80" dir="ltr" lang="de">
                        {card.example}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 text-[11px] font-semibold",
                      due ? "text-destructive" : "text-muted-foreground",
                    )}
                    title={`الفاصل الحالي: ${card.interval} يوم`}
                  >
                    <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                    {dueLabel(card)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => void handleDelete(card.id, card.de)}
                    aria-label={`حذف بطاقة ${card.de}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p className="text-xs text-muted-foreground">
        إجمالي البطاقات: <span className="font-de font-bold">{cards.length}</span> — تُحفظ في
        IndexedDB على جهازك وتعمل دون إنترنت.
      </p>
    </div>
  );
}
