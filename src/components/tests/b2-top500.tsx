"use client";

import * as React from "react";
import {Flame, Search} from "lucide-react";

import {B2_EXAM_TOPICS} from "@/data/vocabulary/b2-topics";
import {B2_TOP500} from "@/data/vocabulary/b2-top500";
import {cn} from "@/lib/utils";

/**
 * Top 500 للامتحان — أهم 500 كلمة Goethe-B2 قابلة للفلترة
 * (حسب المواضيع الـ18 الرسمية + درجة التواتر 1-3)
 */
export function B2Top500() {
  const [topic, setTopic] = React.useState<string>("all");
  const [freq, setFreq] = React.useState<0 | 1 | 2 | 3>(0);
  const [search, setSearch] = React.useState("");

  const filtered = B2_TOP500.filter((e) => {
    if (topic !== "all" && e.topic !== topic) return false;
    if (freq !== 0 && e.freq !== freq) return false;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      if (!e.de.toLowerCase().includes(q) && !e.ar.includes(q)) return false;
    }
    return true;
  });

  // الأكثر تواتراً (3) أولاً
  const sorted = [...filtered].sort((a, b) => b.freq - a.freq);

  const freqLabel = (f: 1 | 2 | 3) =>
    f === 3 ? "لا غنى عنها" : f === 2 ? "عالية" : "مفيدة";

  return (
    <div className="space-y-4">
      {/* الفلاتر */}
      <div className="rounded-xl border bg-card p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold">الموضوع:</span>
          <button
            type="button"
            onClick={() => setTopic("all")}
            className={cn("rounded-full border px-3 py-1 text-xs font-bold", topic === "all" ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background")}
          >
            الكل
          </button>
          {B2_EXAM_TOPICS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTopic(t.id)}
              className={cn("rounded-full border px-3 py-1 text-xs font-semibold", topic === t.id ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background hover:border-primary/40")}
            >
              {t.icon} {t.titleAr}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t pt-3">
          <span className="text-sm font-bold">التواتر:</span>
          <button type="button" onClick={() => setFreq(0)} className={cn("rounded-full border px-3 py-1 text-xs font-bold", freq === 0 ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background")}>الكل</button>
          <button type="button" onClick={() => setFreq(3)} className={cn("rounded-full border px-3 py-1 text-xs font-bold", freq === 3 ? "border-gold bg-gold/20 text-gold-strong" : "border-muted bg-background")}>🔥 لا غنى عنها</button>
          <button type="button" onClick={() => setFreq(2)} className={cn("rounded-full border px-3 py-1 text-xs font-bold", freq === 2 ? "border-primary bg-primary/10 text-primary" : "border-muted bg-background")}>عالية</button>
          <button type="button" onClick={() => setFreq(1)} className={cn("rounded-full border px-3 py-1 text-xs font-bold", freq === 1 ? "border-muted bg-muted text-muted-foreground" : "border-muted bg-background")}>مفيدة</button>
          <div className="relative ms-auto w-full sm:w-56">
            <Search className="absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث بالعربية أو الألمانية…"
              className="h-9 w-full rounded-lg border bg-background pe-9 ps-3 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          🎯 <b>{sorted.length}</b> كلمة من أصل {B2_TOP500.length} — الأولوية للمستوى 3 (لا غنى عنها).
          تعلّم 20 كلمة يومياً = 500 كلمة في 25 يوماً.
        </p>
      </div>

      {/* القائمة */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((e) => {
          const t = B2_EXAM_TOPICS.find((x) => x.id === e.topic);
          return (
            <div key={e.de} className="flex items-start gap-2 rounded-xl border bg-card p-3">
              <div className="min-w-0 flex-1">
                <p className="font-de text-sm font-bold" dir="ltr" lang="de">{e.de}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{e.ar}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                  {t?.icon} {t?.titleAr.slice(0, 12)}
                </span>
                <span className={cn("inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold", e.freq === 3 ? "bg-gold/20 text-gold-strong" : e.freq === 2 ? "bg-sky-500/10 text-sky-600" : "bg-muted text-muted-foreground")}>
                  {e.freq === 3 && <Flame className="h-3 w-3" aria-hidden="true" />}
                  {freqLabel(e.freq)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {sorted.length === 0 && (
        <p className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
          لا كلمات تطابق الفلاتر — جرّب بحثاً آخر.
        </p>
      )}
    </div>
  );
}
