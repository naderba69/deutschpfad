"use client";

import * as React from "react";
import {Award, GraduationCap, Printer} from "lucide-react";

import {Button} from "@/components/ui/button";
import {LEVELS} from "@/lib/constants/curriculum";
import {getLevelCompletion} from "@/lib/progress-selectors";
import {cn} from "@/lib/utils";

/**
 * شهادة إتمام مستوى — قابلة للحفظ كـ PDF عبر الطباعة
 * (تفتح تلقائياً لكل مستوى اكتمل بنسبة 80%+)
 */
export function LevelCertificates({ completedUnits }: { completedUnits: string[] }) {
  const [active, setActive] = React.useState<string | null>(null);

  const earnedLevels = LEVELS.filter((l) => getLevelCompletion(completedUnits, l.code).pct >= 80);

  if (earnedLevels.length === 0) {
    return (
      <div className="rounded-xl border bg-muted/20 p-6 text-center">
        <Award className="mx-auto h-10 w-10 text-muted-foreground/60" aria-hidden="true" />
        <p className="mt-2 text-sm font-bold">شهادات الإتمام</p>
        <p className="mt-1 text-sm text-muted-foreground">
          أكمل 80% من أي مستوى لتحصل على شهادة رقمية قابلة للحفظ كـ PDF.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold">شهاداتك المستحقة ({earnedLevels.length}):</p>
      <div className="flex flex-wrap gap-2">
        {earnedLevels.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setActive(l.code)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors",
              active === l.code ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/40",
            )}
          >
            {l.emoji} {l.code} — {l.titleAr}
          </button>
        ))}
      </div>

      {active && <CertificateView level={active} onClose={() => setActive(null)} />}
    </div>
  );
}

/** محتوى الشهادة — يطبع كـ PDF نظيف عبر نافذة الطباعة */
function CertificateView({ level, onClose }: { level: string; onClose: () => void }) {
  const meta = LEVELS.find((l) => l.code === level);
  if (!meta) return null;
  const date = new Date().toLocaleDateString("ar-TN", { year: "numeric", month: "long", day: "numeric" });

  const print = () => {
    window.print();
  };

  return (
    <div className="space-y-3">
      {/* الشهادة المعروضة */}
      <div id="certificate-print" className="rounded-2xl border-4 border-double border-gold/70 bg-gradient-to-br from-amber-50 to-orange-50 p-8 text-center dark:from-amber-950/30 dark:to-orange-950/30">
        <GraduationCap className="mx-auto h-12 w-12 text-gold-strong" aria-hidden="true" />
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          درب الألمانية · DeutschPfad
        </p>
        <h3 className="mt-2 text-3xl font-extrabold">شهادة إتمام</h3>
        <p className="mt-1 text-sm text-muted-foreground">تشهد المنصة بأن المتعلم أتم بنجاح متطلبات المستوى</p>
        <p className="font-de mt-4 text-5xl font-extrabold text-primary">{meta.code}</p>
        <p className="mt-1 text-lg font-bold">{meta.titleDe} — {meta.titleAr}</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          وفق معايير الإطار الأوروبي المرجعي للغات (CEFR) ومنهجية معهد غوته — ويشمل:
          القواعد، المفردات، القراءة، الاستماع، الكتابة، والنطق.
        </p>
        <div className="mt-6 flex items-center justify-center gap-8 text-xs text-muted-foreground">
          <div>
            <p className="font-bold text-foreground">التاريخ</p>
            <p>{date}</p>
          </div>
          <div>
            <p className="font-bold text-foreground">المنصة</p>
            <p className="font-de" dir="ltr">DeutschPfad</p>
          </div>
          <div>
            <p className="font-bold text-foreground">الإطار</p>
            <p className="font-de" dir="ltr">CEFR {meta.code}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Button onClick={print} className="gap-1.5">
          <Printer className="h-4 w-4" aria-hidden="true" />
          حفظ كـ PDF (طباعة)
        </Button>
        <Button variant="outline" onClick={onClose}>
          إغلاق
        </Button>
      </div>

      {/* أنماط الطباعة — شهادة فقط */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #certificate-print, #certificate-print * { visibility: visible; }
          #certificate-print { position: fixed; inset: 0; margin: auto; border: 3mm double #d97706; background: white !important; }
          #certificate-print h3 { font-size: 28px; }
        }
      `}</style>
    </div>
  );
}
