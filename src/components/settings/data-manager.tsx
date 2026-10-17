"use client";

import * as React from "react";
import {AlertTriangle, DatabaseBackup, Download, History, Upload, Wand2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SyncLink} from "@/components/settings/sync-link";
import {backupFilename, buildBackupData, createManualSnapshot, deleteSnapshot, downloadJson, getSnapshots, maybeAutoSnapshot, restoreSnapshot, validateBackupData, writeBackupData} from "@/lib/storage/export-import";
import {getDb} from "@/lib/storage/db";
import {computeForgettingCoefficient} from "@/lib/srs/flashcard-service";
import {forgettingCoefficientLabel} from "@/lib/srs/sm2";
import type { Snapshot } from "@/types/storage";

/**
 * إدارة البيانات — تصدير / استيراد / نسخ احتياطي تلقائي / إعادة تعيين
 */
export function DataManager() {
  const [snapshots, setSnapshots] = React.useState<Snapshot[]>([]);
  const [status, setStatus] = React.useState("");
  const [coefficient, setCoefficient] = React.useState(1);
  const [fileInput, setFileInput] = React.useState<HTMLInputElement | null>(null);

  const reload = React.useCallback(async () => {
    const [snaps, fc] = await Promise.all([getSnapshots(), computeForgettingCoefficient()]);
    setSnapshots(snaps);
    setCoefficient(fc);
  }, []);

  React.useEffect(() => {
    void reload();
  }, [reload]);

  const showStatus = (msg: string) => {
    setStatus(msg);
    setTimeout(() => setStatus(""), 4000);
  };

  /* ── التصدير ── */
  const handleExport = async () => {
    const data = await buildBackupData();
    downloadJson(data, backupFilename());
    showStatus("تم تنزيل ملف النسخة الاحتياطية ✓");
  };

  /* ── الاستيراد ── */
  const handleImport = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!validateBackupData(parsed)) {
        showStatus("⚠️ الملف غير صالح — تأكد أنه ملف نسخة DeutschPfad");
        return;
      }
      const mode = window.confirm(
        "اختر طريقة الاستيراد:\n\n«موافق» = دمج مع بياناتك الحالية (إضافة البطاقات الجديدة فقط)\n«إلغاء» = استبدال كامل ببيانات الملف",
      )
        ? "merge"
        : "replace";
      await writeBackupData(parsed, mode);
      showStatus(`تم الاستيراد (وضع: ${mode === "merge" ? "دمج" : "استبدال"}) ✓`);
      await reload();
    } catch {
      showStatus("⚠️ تعذّر قراءة الملف — تأكد أنه JSON صالح");
    }
  };

  /* ── نسخة احتياطية ── */
  const handleManualSnapshot = async () => {
    const id = await createManualSnapshot();
    showStatus("تم إنشاء لقطة يدوية ✓");
    await reload();
    void id;
  };

  const handleDownloadSnapshot = (snap: Snapshot) => {
    downloadJson(snap.data, `deutschpfad-snapshot-${snap.id}.json`);
  };

  const handleRestoreSnapshot = async (snap: Snapshot) => {
    if (window.confirm("استعادة هذه اللقطة ستستبدل كل بياناتك الحالية. متابعة؟")) {
      await restoreSnapshot(snap.id);
      showStatus("تمت الاستعادة — أعد تحميل الصفحة");
      await reload();
    }
  };

  const handleDeleteSnapshot = async (snap: Snapshot) => {
    if (window.confirm("حذف هذه اللقطة؟")) {
      await deleteSnapshot(snap.id);
      await reload();
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
    const db = await getDb();
    await Promise.all([
      db.clear("progress"),
      db.clear("cards"),
      db.clear("events"),
      db.clear("settings"),
      db.clear("snapshots"),
      db.clear("llm-cache"),
      db.clear("llm-usage"),
    ]);
    // مسح كل مفاتيح localStorage المملوكة (dp: / deutschpfad:)
    try {
      const remove: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && (k.startsWith("dp:") || k.startsWith("deutschpfad:"))) remove.push(k);
      }
      for (const k of remove) window.localStorage.removeItem(k);
    } catch {
      /* تجاهل */
    }
    window.location.reload();
  };

  const handleAutoSnapshotNow = async () => {
    const created = await maybeAutoSnapshot();
    showStatus(created ? "تم إنشاء لقطة اليوم ✓" : "لقطة اليوم موجودة مسبقاً");
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
          <p className="font-de text-3xl font-extrabold text-primary">{coefficient.toFixed(2)}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {forgettingCoefficientLabel(coefficient)}. يُحسب من متوسط تقييماتك في المراجعات،
            ويُطبَّق تلقائياً على فترات SM-2.
          </p>
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

          {snapshots.length === 0 ? (
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
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm font-semibold" role="status">
          {status}
        </div>
      )}
    </div>
  );
}
