"use client";

import * as React from "react";
import {AlertTriangle, DatabaseBackup, Download, History, Upload, Wand2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SyncLink} from "@/components/settings/sync-link";
import {MAX_BACKUP_BYTES, backupFilename, buildBackupData, createManualSnapshot, deleteSnapshot, downloadJson, isOwnedLsKey, maybeAutoSnapshot, restoreSnapshot, getSnapshotsResult, validateBackupData, writeBackupData} from "@/lib/storage/export-import";
import {getDb} from "@/lib/storage/db";
import {computeForgettingCoefficient} from "@/lib/srs/flashcard-service";
import {forgettingCoefficientLabel} from "@/lib/srs/sm2";
import type { Snapshot } from "@/types/storage";

/**
 * إدارة البيانات — تصدير / استيراد / نسخ احتياطي تلقائي / إعادة تعيين
 */
export function DataManager() {
  const [snapshots, setSnapshots] = React.useState<Snapshot[]>([]);
  const [snapshotsLoadError, setSnapshotsLoadError] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const statusTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [coefficient, setCoefficient] = React.useState(1);
  const [coefficientLoadError, setCoefficientLoadError] = React.useState(false);
  const [fileInput, setFileInput] = React.useState<HTMLInputElement | null>(null);

  const reload = React.useCallback(async () => {
    const result = await getSnapshotsResult();
    setSnapshots(result.rows);
    setSnapshotsLoadError(!result.ok);
    try {
      setCoefficient(await computeForgettingCoefficient());
      setCoefficientLoadError(false);
    } catch {
      setCoefficientLoadError(true);
    }
  }, []);

  React.useEffect(() => {
    void reload();
  }, [reload]);

  const showStatus = (msg: string, durationMs = 4000) => {
    if (statusTimer.current) clearTimeout(statusTimer.current);
    setStatus(msg);
    statusTimer.current = durationMs > 0 ? setTimeout(() => setStatus(""), durationMs) : null;
  };

  /* ── التصدير ── */
  const handleExport = async () => {
    try {
      const data = await buildBackupData();
      downloadJson(data, backupFilename());
      showStatus("تم تجهيز ملف النسخة الاحتياطية للتنزيل ✓");
    } catch {
      showStatus("تعذر إنشاء النسخة الاحتياطية. لم نتمكن من قراءة كل بيانات التخزين؛ أعد المحاولة.");
    }
  };

  /* ── الاستيراد ── */
  const handleImport = async (file: File) => {
    if (file.size > MAX_BACKUP_BYTES) {
      showStatus("⚠️ حجم النسخة يتجاوز الحد الأقصى (20 MiB)");
      return;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(await file.text());
    } catch {
      showStatus("⚠️ تعذرت قراءة الملف؛ تحقق من أنه JSON صالح.");
      return;
    }
    if (!validateBackupData(parsed)) {
      showStatus("⚠️ الملف غير صالح — تأكد أنه ملف نسخة DeutschPfad");
      return;
    }

    const mode = window.confirm(
      "اختر طريقة الاستيراد:\n\n«موافق» = دمج مع بياناتك الحالية (إضافة البطاقات الجديدة فقط)\n«إلغاء» = استبدال كامل ببيانات الملف",
    )
      ? "merge"
      : "replace";
    try {
      await writeBackupData(parsed, mode);
      await reload();
      showStatus(`تم الاستيراد (وضع: ${mode === "merge" ? "دمج" : "استبدال"}) ✓`);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "تعذر تأكيد اكتمال الاستيراد";
      showStatus(`⚠️ ${detail} راجع بياناتك قبل إعادة المحاولة.`, 0);
    }
  };

  /* ── نسخة احتياطية ── */
  const handleManualSnapshot = async () => {
    try {
      await createManualSnapshot();
      await reload();
      showStatus("تم إنشاء لقطة يدوية ✓");
    } catch {
      showStatus("تعذر إنشاء اللقطة الاحتياطية؛ تحقق من مساحة التخزين وأعد المحاولة.");
    }
  };

  const handleDownloadSnapshot = (snap: Snapshot) => {
    downloadJson(snap.data, `deutschpfad-snapshot-${snap.id}.json`);
  };

  const handleRestoreSnapshot = async (snap: Snapshot) => {
    if (!window.confirm("استعادة هذه اللقطة ستستبدل كل بياناتك الحالية. متابعة؟")) return;
    try {
      await restoreSnapshot(snap.id);
      await reload();
      showStatus("تمت الاستعادة — أعد تحميل الصفحة");
    } catch (error) {
      const detail = error instanceof Error ? error.message : "تعذر تأكيد اكتمال الاستعادة";
      showStatus(`⚠️ ${detail} تحقق من بياناتك قبل إعادة المحاولة.`, 0);
    }
  };

  const handleDeleteSnapshot = async (snap: Snapshot) => {
    if (!window.confirm("حذف هذه اللقطة؟")) return;
    try {
      await deleteSnapshot(snap.id);
      await reload();
      showStatus("تم حذف اللقطة الاحتياطية.");
    } catch {
      showStatus("تعذر حذف اللقطة؛ أعد المحاولة.");
    }
  };

  /* ── إعادة تعيين كل شيء ── */
  const handleReset = async () => {
    const sure = window.confirm(
      "⚠️ سيتم مسح: تقدمك + بطاقاتك + إحصائياتك + اللقطات + ذاكرة الذكاء الاصطناعي + كل مفاتيح التطبيق المحلية. لا يمكن التراجع. متابعة؟",
    );
    if (!sure) return;
    // ═══ P0-01: مسح كل المخازن السبعة + كل LocalStorage المملوك +
    // منع إعادة الترحيل من المرآة القديمة (كانت تعيد البيانات بعد reload) ═══
    const stores = ["progress", "cards", "events", "settings", "snapshots", "llm-cache", "llm-usage"] as const;
    try {
      const db = await getDb();
      const tx = db.transaction([...stores], "readwrite");
      await Promise.all(stores.map((store) => tx.objectStore(store).clear()));
      await tx.done;
    } catch {
      showStatus("تعذرت إعادة التعيين؛ لم نتمكن من تأكيد مسح قاعدة البيانات. أعد المحاولة.");
      return;
    }
    // مسح كل مفاتيح localStorage المملوكة (dp: / deutschpfad:)
    let localStorageResetFailed = false;
    try {
      const remove: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && isOwnedLsKey(k)) remove.push(k);
      }
      for (const k of remove) window.localStorage.removeItem(k);
    } catch {
      localStorageResetFailed = true;
    }
    if (localStorageResetFailed) {
      showStatus("⚠️ مُسحت قاعدة البيانات لكن تعذر مسح بعض البيانات المحلية. لا تُعد تحميل الصفحة قبل تصدير ما يلزم أو التواصل مع الدعم.", 0);
      return;
    }
    window.location.reload();
  };

  const handleAutoSnapshotNow = async () => {
    try {
      const result = await maybeAutoSnapshot();
      if (result === "created") showStatus("تم إنشاء لقطة اليوم ✓");
      else if (result === "already-exists") showStatus("لقطة اليوم موجودة مسبقاً");
      else showStatus("تعذر التحقق من اللقطات أو إنشاؤها؛ أعد المحاولة.");
    } catch {
      showStatus("تعذر إنشاء لقطة اليوم بسبب خطأ في التخزين؛ أعد المحاولة.");
    }
    await reload();
  };

  return (
    <div className="space-y-6">
      {/* معامل النسيان */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Wand2 className="h-5 w-5 text-primary" aria-hidden="true" />
            معامل النسيان الشخصي
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          {coefficientLoadError ? (
            <p className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive" role="status">
              تعذر قراءة بيانات المراجعة؛ لا يمكن عرض معامل النسيان الآن. أعد المحاولة.
            </p>
          ) : (
            <>
              <p className="font-de text-3xl font-extrabold text-primary">{coefficient.toFixed(2)}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {forgettingCoefficientLabel(coefficient)}. يُحسب من متوسط تقييماتك في المراجعات،
                ويُطبَّق تلقائياً على فترات SM-2.
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* تصدير واستيراد */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <DatabaseBackup className="h-5 w-5 text-primary" aria-hidden="true" />
            التصدير والاستيراد (JSON)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-5">
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => void handleExport()} className="gap-1.5">
              <Download className="h-4 w-4" aria-hidden="true" />
              تصدير كل بياناتي (ملف JSON)
            </Button>
            <Button
              variant="outline"
              className="gap-1.5"
              onClick={() => fileInput?.click()}
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              استيراد من ملف
            </Button>
            <input
              ref={setFileInput}
              type="file"
              accept="application/json,.json"
              className="hidden"
              aria-label="اختر ملف النسخة الاحتياطية"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleImport(f);
                e.target.value = "";
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            ملف واحد يحتوي: التقدم + كل البطاقات + الإعدادات. انقله بين الأجهزة أو احتفظ به
            كنسخة آمنة.
          </p>
        </CardContent>
      </Card>

      {/* النسخ الاحتياطي التلقائي */}
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <History className="h-5 w-5 text-primary" aria-hidden="true" />
            النسخ الاحتياطي التلقائي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 p-5">
          <p className="text-sm text-muted-foreground">
            تُنشأ <span className="font-bold">لقطة تلقائية يومياً</span> عند فتح الموقع،
            وتُحتفظ بآخر 14 لقطة على جهازك.
          </p>
          <Button variant="outline" size="sm" onClick={() => void handleAutoSnapshotNow()}>
            أنشئ لقطة اليوم الآن
          </Button>

          {snapshotsLoadError ? (
            <div role="alert" className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm">
              تعذر قراءة قائمة النسخ الاحتياطية؛ لم نعرضها على أنها فارغة.
              <Button variant="link" size="sm" className="px-2" onClick={() => void reload()}>
                إعادة المحاولة
              </Button>
            </div>
          ) : snapshots.length === 0 ? (
            <p className="text-sm text-muted-foreground">لا توجد لقطات بعد.</p>
          ) : (
            <ul className="divide-y rounded-xl border bg-card">
              {snapshots.map((snap) => (
                <li key={snap.id} className="flex items-center justify-between gap-3 p-3 text-sm">
                  <div className="min-w-0">
                    <p className="font-semibold">
                      {snap.kind === "auto" ? "تلقائية" : "يدوية"}{" "}
                      <span className="font-de text-xs text-muted-foreground">({snap.id})</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(snap.createdAt).toLocaleString("ar-TN")} — {snap.data.cards.length}{" "}
                      بطاقة · {snap.data.progress.completedUnits.length} وحدة مكتملة
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button variant="ghost" size="sm" onClick={() => handleDownloadSnapshot(snap)}>
                      <Download className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="hidden sm:inline">تنزيل</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary"
                      onClick={() => void handleRestoreSnapshot(snap)}
                    >
                      استعادة
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => void handleDeleteSnapshot(snap)}
                      aria-label="حذف اللقطة"
                    >
                      ×
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* المزامنة عبر الرابط + تحدي الصديق */}
      <SyncLink />

      {/* إعادة التعيين */}
      <Card className="border-destructive/40">
        <CardHeader className="border-b bg-destructive/5">
          <CardTitle className="flex items-center gap-2 text-lg text-destructive">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            منطقة الخطر
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground">
            مسح كل شيء (التقدم + البطاقات + الإحصائيات + اللقطات) من هذا الجهاز نهائياً.
          </p>
          <Button variant="destructive" className="mt-3" onClick={() => void handleReset()}>
            إعادة تعيين كامل
          </Button>
        </CardContent>
      </Card>

      {status && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm font-semibold" role={status.startsWith("⚠️") ? "alert" : "status"}>
          {status}
        </div>
      )}
    </div>
  );
}
