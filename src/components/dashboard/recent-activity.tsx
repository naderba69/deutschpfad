"use client";

import * as React from "react";
import Link from "next/link";
import {CheckCircle2, FileQuestion, Headphones, History, Mic, Repeat, Trophy} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {getRecentEvents} from "@/lib/analytics/events";
import {LESSON_META} from "@/data/lessons/meta";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  آخر ما فعلته — شريط يعرض آخر 5 أنشطة بتوقيتها
 *  (من الأحداث المخزنة محلياً)
 * ═══════════════════════════════════════════════════════════
 */

const ACTIVITY_META: Record<string, { label: string; icon: React.ElementType; cls: string }> = {
  "exercise-result": { label: "تمرين", icon: FileQuestion, cls: "text-blue-600" },
  "lesson-completed": { label: "درس", icon: CheckCircle2, cls: "text-success" },
  review: { label: "مراجعة", icon: Repeat, cls: "text-gold-strong" },
  "pronunciation-score": { label: "نطق", icon: Mic, cls: "text-red-500" },
  "skill-result": { label: "قصة/استماع", icon: Headphones, cls: "text-indigo-500" },
  "test-result": { label: "اختبار", icon: Trophy, cls: "text-primary" },
};

export function RecentActivity() {
  const [items, setItems] = React.useState<{ ts: number; label: string; icon: React.ElementType; cls: string; href?: string }[]>([]);

  React.useEffect(() => {
    void (async () => {
      try {
        const events = await getRecentEvents(200);
        const mapped = events
          .filter((e) => e.type in ACTIVITY_META)
          .slice(0, 5)
          .map((e) => {
            const meta = ACTIVITY_META[e.type] ?? ACTIVITY_META["exercise-result"];
            let href: string | undefined;
            if (e.type === "lesson-completed") href = `/lesson/${e.lessonId}`;
            if (e.type === "review") href = "/flashcards";
            if (e.type === "skill-result") href = "/stories";
            if (e.type === "test-result") href = "/tests";
            return { ts: e.ts, label: meta.label, icon: meta.icon, cls: meta.cls, href };
          });
        setItems(mapped);
      } catch {
        /* تجاهل */
      }
    })();
  }, []);

  if (items.length === 0) return null;

  const timeAgo = (ts: number) => {
    const mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 1) return "الآن";
    if (mins < 60) return `منذ ${mins} د`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `منذ ${hrs} س`;
    return `منذ ${Math.floor(hrs / 24)} يوم`;
  };

  return (
    <Card className="overflow-hidden border-muted">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <History className="h-4 w-4 text-primary" aria-hidden="true" />
          <h3 className="text-sm font-extrabold">آخر ما فعلته</h3>
        </div>
        <ul className="mt-3 space-y-1.5">
          {items.map((it, i) => {
            const Icon = it.icon;
            const content = (
              <span className="flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-1.5 transition-colors hover:bg-muted/30">
                <span className={cn("inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/40", it.cls)}>
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 truncate text-xs font-bold">{it.label}</span>
                <span className="shrink-0 text-[11px] text-muted-foreground">{timeAgo(it.ts)}</span>
              </span>
            );
            return <li key={i}>{it.href ? <Link href={it.href}>{content}</Link> : content}</li>;
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
