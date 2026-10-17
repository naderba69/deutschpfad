"use client";

import * as React from "react";
import {BookOpenCheck, CheckCircle2, Eraser, RotateCcw, Sparkles, Trash2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {
  clearNotebook,
  ERROR_TYPE_LABELS,
  getNotebook,
  getNotebookStats,
  markMastered,
  removeEntry,
  type NotebookEntry,
} from "@/lib/storage/error-notebook";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  دفتر الأخطاء — كل خطأ ترتكبه عبر كل الجلسات يتراكم هنا
 *  مع الشرح والإجابة الصحيحة وعدّاد التكرار:
 *  · الخطأ المتكرر = نقطة ضعف حقيقية → أعد تمرينه حتى يُتقن
 *  · بعد الإتقان تُعلَّم ✓ وتبقى سجلاً لتقدمك
 * ═══════════════════════════════════════════════════════════
 */
export function ErrorNotebook() {
  const [rows, setRows] = React.useState<NotebookEntry[]>([]);
  const [stats, setStats] = React.useState<{ total: number; repeated: number; mastered: number; top: NotebookEntry | null } | null>(null);

  const refresh = React.useCallback(async () => {
    const [r, s] = await Promise.all([getNotebook(), getNotebookStats()]);
    setRows(r);
    setStats(s);
  }, []);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  const master = async (id: string) => {
    await markMastered(id);
    await refresh();
  };

  const del = async (id: string) => {
    await removeEntry(id);
    await refresh();
  };

  const clearAll = async () => {
    await clearNotebook();
    await refresh();
  };

  if (rows.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border bg-card p-10 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-3xl" aria-hidden="true">✨</span>
        <h2 className="mt-4 text-lg font-extrabold">دفترك نظيف!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          لم ترتكب أي خطأ بعد — أو أتقنت كل ما سُجّل. كل خطأ مستقبلي في أي درس سيُسجَّل هنا
          تلقائياً مع الشرح، فيصبح نقطة قوتك القادمة.
        </p>
      </div>
    );
  }

  const active = rows.filter((r) => !r.mastered);

  return (
    <div className="space-y-4">
      {/* الترويسة + الإحصائيات */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            <p className="text-sm font-extrabold">أخطاؤك المتراكمة</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={clearAll}>
            <Eraser className="h-3.5 w-3.5" aria-hidden="true" />
            مسح الدفتر
          </Button>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2">
            <p className="font-de text-xl font-extrabold text-destructive">{stats?.total ?? 0}</p>
            <p className="text-[11px] font-bold text-muted-foreground">خطأ نشط</p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-gold/10 px-3 py-2">
            <p className="font-de text-xl font-extrabold text-gold-strong">{stats?.repeated ?? 0}</p>
            <p className="text-[11px] font-bold text-muted-foreground">خطأ متكرر (نقطة ضعف)</p>
          </div>
          <div className="rounded-xl border border-success/30 bg-success/10 px-3 py-2">
            <p className="font-de text-xl font-extrabold text-success">{stats?.mastered ?? 0}</p>
            <p className="text-[11px] font-bold text-muted-foreground">أُتقن ✓</p>
          </div>
        </div>
        {stats?.top && (
          <p className="mt-3 rounded-lg bg-primary/5 px-3 py-2 text-xs font-bold text-primary">
            🎯 أكبر نقطة ضعف: «{stats.top.id}» — تكررت {stats.top.count} مرة. أعد تدريبها حتى تختفي من دفترك.
          </p>
        )}
      </div>

      {/* القائمة */}
      <div className="space-y-2">
        {rows.map((e) => (
          <div
            key={e.id}
            className={cn(
              "rounded-xl border bg-card p-4 transition-opacity",
              e.mastered && "opacity-60",
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-de text-sm font-extrabold" dir="ltr">{e.id}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-bold",
                      e.count > 1 ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {ERROR_TYPE_LABELS[e.errorType] ?? e.errorType}
                  </span>
                  <span className="text-[11px] font-bold text-muted-foreground">
                    {e.count === 1 ? "مرة واحدة" : `×${e.count} مرة`}
                  </span>
                  {e.mastered && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[11px] font-bold text-success">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                      أتقنته
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{e.explanation}</p>
                {e.correctAnswer && (
                  <p className="mt-1 text-xs font-bold text-success">
                    الإجابة الصحيحة: <span className="font-de" dir="ltr">{e.correctAnswer}</span>
                  </p>
                )}
              </div>
              <div className="flex shrink-0 gap-1.5">
                {!e.mastered ? (
                  <Button size="sm" variant="outline" className="h-7 gap-1 text-[11px]" onClick={() => void master(e.id)}>
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                    أتقنته
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="h-7 gap-1 text-[11px]" onClick={() => void master(e.id)}>
                    <RotateCcw className="h-3 w-3" aria-hidden="true" />
                    إعادة فتح
                  </Button>
                )}
                <Button size="sm" variant="ghost" className="h-7 gap-1 text-[11px] text-destructive" onClick={() => void del(e.id)}>
                  <Trash2 className="h-3 w-3" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* نصيحة منهجية */}
      {active.length > 0 && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            المنهجية: الخطأ المتكرر ليس فشلاً — إنه خريطة طريقك. راجع كل خطأ حتى يُعلَّم ✓.
          </p>
        </div>
      )}
    </div>
  );
}
