"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  أقسام لوحة الرحلة — مُستخرَجة من learner-journey.tsx (المرحلة 4)
 *  مكوّنات مستقلّة بذاتها: عنصر عنوان القسم + بطاقة النسخ الاحتياطي.
 *  النقل حرفيّ — لا تغيير في أي DOM أو نص.
 * ═══════════════════════════════════════════════════════════
 */
import {StatusNotice, type Notice} from "@/components/shared/status-notice";
import * as React from "react";

import {DatabaseBackup, Upload} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {ChoiceDialog} from "@/components/ui/choice-dialog";
import type { BackupData } from "@/types/storage";
import {cn} from "@/lib/utils";

/** عنوان قسم رقمي: يوجّه المتعلم في التسلسل */
export function JourneySection({
  step,
  title,
  subtitle,
  children,
  className,
}: {
  step: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-3", className)} aria-label={title}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-de text-sm font-extrabold text-primary">
          {step}
        </span>
        <div className="min-w-0">
          <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>
          {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-muted to-transparent" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}

/**
 * ═══════════════════════════════════════════════════════════
 *  حفظ واستعادة مستواك — عند تغيير المتصفح أو الهاتف
 *  يصدّر ملف نسخة (يشمل: اسمك + مستواك + الدروس المكتملة +
 *  البطاقات + الإعدادات) ويستعيده في الجهاز الجديد.
 * ═══════════════════════════════════════════════════════════
 */
export function BackupCard() {
  const fileRef = React.useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = React.useState<Notice | null>(null);
  const [pendingImport, setPendingImport] = React.useState<BackupData | null>(null);

  const exportBackup = async () => {
    try {
      const {buildBackupData, backupFilename, downloadJson} = await import("@/lib/storage/export-import");
      const data = await buildBackupData();
      downloadJson(data, backupFilename());
      setStatus({text: "نُزّل ملف نسختك — احتفظ به (يتضمن اسمك ومستواك وتقدمك)", kind: "success"});
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus({text: "تعذّر إنشاء النسخة — جرّب من الإعدادات", kind: "warning"});
    }
  };

  const importBackup = async (file: File) => {
    try {
      const {validateBackupData, writeBackupData} = await import("@/lib/storage/export-import");
      const parsed = JSON.parse(await file.text());
      if (!validateBackupData(parsed)) {
        setStatus({text: "الملف غير صالح — تأكد أنه ملف نسخة DeutschPfad", kind: "warning"});
        setTimeout(() => setStatus(null), 5000);
        return;
      }
      setPendingImport(parsed as BackupData);
    } catch {
      setStatus({text: "فشلت الاستعادة — تأكد من الملف", kind: "warning"});
    }
  };

  const doImport = async (mode: "merge" | "replace") => {
    if (!pendingImport) return;
    try {
      const {writeBackupData} = await import("@/lib/storage/export-import");
      await writeBackupData(pendingImport, mode);
      setPendingImport(null);
      setStatus({text: "تمت الاستعادة — أعد تحميل الصفحة لترى مستواك", kind: "success"});
      setTimeout(() => window.location.reload(), 1200);
    } catch {
      setStatus({text: "فشلت الاستعادة — تأكد من الملف", kind: "warning"});
    }
  };

  return (
    <Card className="overflow-hidden border-muted">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-success/15 text-success">
            <DatabaseBackup className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-extrabold">احفظ مستواك — وانتقل لأي جهاز</h3>
            <p className="text-xs text-muted-foreground">
              غيّرت المتصفح أو الهاتف؟ صدّر نسخة، واسترجعها في الجهاز الجديد بضغطة.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="outline" size="sm" onClick={exportBackup} className="justify-start text-primary">
            <DatabaseBackup className="h-4 w-4" aria-hidden="true" />
            صدّر نسخة (اسمك + مستواك + تقدمك)
          </Button>
          <Button variant="ghost" size="sm" onClick={() => fileRef.current?.click()} className="justify-start text-muted-foreground">
            <Upload className="h-4 w-4" aria-hidden="true" />
            استرجع نسخة محفوظة…
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void importBackup(f);
              e.target.value = "";
            }}
            aria-label="اختر ملف النسخة الاحتياطية"
          />
        </div>

        {status && <StatusNotice kind={status.kind} className="text-xs">{status.text}</StatusNotice>}

        <ChoiceDialog
          open={pendingImport !== null}
          onOpenChange={(open) => !open && setPendingImport(null)}
          title="استعادة النسخة؟"
          description="اختر طريقة الاستعادة: الدمج يضيف البطاقات الجديدة إلى بياناتك الحالية، والاستبدال يستبدل كل بياناتك ببيانات الملف."
          primaryLabel="دمج"
          secondaryLabel="استبدال كامل"
          onPrimary={() => void doImport("merge")}
          onSecondary={() => void doImport("replace")}
        />
      </CardContent>
    </Card>
  );
}
