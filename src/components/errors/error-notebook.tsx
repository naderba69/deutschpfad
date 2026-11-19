"use client";

import * as React from "react";
import {BookOpenCheck, CheckCircle2, Eraser, RotateCcw, Sparkles, Trash2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {ConfirmDialog} from "@/components/ui/confirm-dialog";
import {Progress} from "@/components/ui/progress";
import {
  clearNotebook,
  ERROR_TYPE_LABELS,
  getNotebookResult,
  getNotebookStatsForRows,
  markMastered,
  removeEntry,
  type NotebookEntry,
} from "@/lib/storage/error-notebook";
import {cn} from "@/lib/utils";

/**
 * ═══════════════════════════════════════════════════════════
 *  دفتر الملاحظات يسجل أخطاء التمارين المدعومة التي ترسل نتائجها إليه.
 *  لا يشمل كل أنشطة المنصة ولا يقيس مستوى المتعلم:
 *  · التكرار يصف التسجيلات المحفوظة فقط
 *  · وسم الإدخال كمُراجَع اختيار ذاتي، وليس إثباتاً للإتقان
 * ═══════════════════════════════════════════════════════════
 */
export function ErrorNotebook() {
  const [rows, setRows] = React.useState<NotebookEntry[]>([]);
  const [stats, setStats] = React.useState<{ total: number; repeated: number; mastered: number; top: NotebookEntry | null } | null>(null);
  const [loadError, setLoadError] = React.useState(false);

  const refresh = React.useCallback(async () => {
    const result = await getNotebookResult();
    setLoadError(!result.ok);
    setRows(result.rows);
    setStats(result.ok ? getNotebookStatsForRows(result.rows) : null);
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

  const [confirmClearOpen, setConfirmClearOpen] = React.useState(false);

  const clearAll = async () => {
    await clearNotebook();
    await refresh();
  };

  if (loadError) {
    return (
      <div role="alert" className="mx-auto max-w-xl rounded-2xl border border-destructive/30 bg-card p-8 text-center">
        <h2 className="text-lg font-extrabold">تعذر تحميل دفتر الأخطاء</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          لم نتمكن من قراءة السجل المحلي، لذلك لا نعرضه على أنه فارغ. لم يُمسح أي سجل؛ أعد المحاولة.
        </p>
        <Button className="mt-4" variant="outline" onClick={() => void refresh()}>
          إعادة المحاولة
        </Button>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border bg-card p-10 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-3xl" aria-hidden="true">✨</span>
        <h2 className="mt-4 text-lg font-extrabold">دفترك نظيف!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          لا توجد أخطاء مسجلة حالياً؛ قد لا تكون أجبت خطأ في تمرين يدعم التسجيل، أو ربما مُسح السجل.
          خلوّ الدفتر لا يثبت الإتقان. ستظهر هنا الأخطاء التي تسجلها التمارين المدعومة مع الشروح المتاحة.
        </p>
      </div>
    );
  }

  const active = rows.filter((r) => !r.mastered);
  const legacyRows = rows.filter((r) => !r.sourceId);

  return (
    <div className="space-y-4">
      {/* الترويسة + الإحصائيات */}
      <div className="rounded-2xl border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            <p className="text-sm font-extrabold">أخطاؤك المتراكمة</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setConfirmClearOpen(true)}>
            <Eraser className="h-3.5 w-3.5" aria-hidden="true" />
            مسح الدفتر
          </Button>
        </div>
        <ConfirmDialog
          open={confirmClearOpen}
          onOpenChange={setConfirmClearOpen}
          title="مسح دفتر الأخطاء بالكامل؟"
          description="لا يمكن التراجع عن هذا الإجراء."
          confirmLabel="مسح الكل"
          destructive
          onConfirm={clearAll}
        />
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2">
            <p className="font-de text-xl font-extrabold text-destructive">{stats?.total ?? 0}</p>
            <p className="text-[11px] font-bold text-muted-foreground">خطأ نشط</p>
          </div>
          <div className="rounded-xl border border-gold/30 bg-gold/10 px-3 py-2">
            <p className="font-de text-xl font-extrabold text-gold-strong">{stats?.repeated ?? 0}</p>
            <p className="text-[11px] font-bold text-muted-foreground">أخطاء تكررت في التمارين المسجلة</p>
          </div>
          <div className="rounded-xl border border-success/30 bg-success/10 px-3 py-2">
            <p className="font-de text-xl font-extrabold text-success">{stats?.mastered ?? 0}</p>
            <p className="text-[11px] font-bold text-muted-foreground">عُلّم كمُراجَع ذاتياً</p>
          </div>
        </div>
        {stats?.top && (
          <p className="mt-3 rounded-lg bg-primary/5 px-3 py-2 text-xs font-bold text-primary">
            🎯 أكثر بند تكراراً في السجل: «{stats.top.exerciseId ?? stats.top.id}»{stats.top.lessonId ? ` في ${stats.top.lessonId}` : ""} — تكرر تسجيله {stats.top.count} مرة. يمكنك مراجعة شرحه أو إعادة التدريب.
          </p>
        )}
      </div>

      {legacyRows.length > 0 && (
        <p className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          السجلات القديمة بلا مصدر للدرس: {legacyRows.length}؛ وقد تكون جمعت تمارين متشابهة المعرّف من دروس مختلفة.
          لا يمكن استعادة المصدر المفقود، لذا راجع هذه السجلات أو احذفها. التسجيلات الجديدة تفصل الدرس ومجموعة التدريب.
        </p>
      )}

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
                  <span className="font-de text-sm font-extrabold" dir="ltr">{e.exerciseId ?? e.id}</span>
                  {e.lessonId && <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-bold text-muted-foreground">{e.lessonId}</span>}
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
                      مُراجَع ذاتياً
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
                    علّمته كمُراجَع
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="h-7 gap-1 text-[11px]" onClick={() => void master(e.id)}>
                    <RotateCcw className="h-3 w-3" aria-hidden="true" />
                    إعادة فتح
                  </Button>
                )}
                <Button size="sm" variant="ghost" className="h-7 gap-1 text-[11px] text-destructive" aria-label={`حذف سجل التمرين ${e.exerciseId ?? e.id}${e.lessonId ? ` من الدرس ${e.lessonId}` : ""}`} onClick={() => void del(e.id)}>
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
            راجع الإجابة والشرح، ويمكنك تعليم ما راجعته. هذا الوسم ذاتي ولا يثبت الإتقان.
          </p>
        </div>
      )}
    </div>
  );
}
