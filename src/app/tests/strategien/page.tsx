import type { Metadata } from "next";

import {EXAM_STRATEGIEN, GOLDEN_TRAPS, LESEN_TIME_PLAN} from "@/data/exams/strategien";
import {Badge} from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "استراتيجيات امتحان Goethe-B2 — دليل كل Teil",
  description:
    "كيف تحل كل جزء من امتحان Goethe-Zertifikat B2: خطوات عملية لكل Teil، الفخاخ الشائعة، وجدول إدارة الوقت الرسمي (65 دقيقة للقراءة).",
};

const MODULE_META: Record<string, { label: string; emoji: string; color: string }> = {
  lesen: { label: "القراءة (Lesen)", emoji: "📖", color: "bg-sky-500" },
  hören: { label: "الاستماع (Hören)", emoji: "🎧", color: "bg-violet-500" },
  schreiben: { label: "الكتابة (Schreiben)", emoji: "✍️", color: "bg-amber-500" },
  sprechen: { label: "التحدث (Sprechen)", emoji: "🎤", color: "bg-rose-500" },
};

export default function StrategienPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          استراتيجيات امتحان Goethe-B2
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          ما يفرّق «عارف اللغة» عن «ناجح في الامتحان» هو إدارة الوقت ومعرفة الفخاخ.
          هذا الدليل يعطيك خطة عمل لكل Teil — طبّقه في محرك الامتحان.
        </p>
      </div>

      {/* جدول إدارة وقت القراءة */}
      <div className="mb-8 rounded-xl border border-primary/30 bg-primary/5 p-4">
        <p className="mb-3 text-sm font-extrabold text-primary">⏱️ جدول إدارة الوقت — القراءة (65 دقيقة رسمياً)</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {LESEN_TIME_PLAN.map((p) => (
            <div key={p.teil} className="rounded-lg border bg-background p-2.5 text-center">
              <p className="font-de text-sm font-extrabold text-primary">{p.teil}</p>
              <p className="font-de text-xs font-bold">{p.minutes} د</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{p.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* استراتيجيات كل Teil */}
      <div className="space-y-6">
        {["lesen", "hören", "schreiben", "sprechen"].map((modul) => {
          const meta = MODULE_META[modul];
          const items = EXAM_STRATEGIEN.filter((s) => s.modul === modul);
          return (
            <div key={modul}>
              <h2 className="mb-3 flex items-center gap-2 text-lg font-extrabold">
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white ${meta.color}`}>
                  {meta.emoji}
                </span>
                {meta.label}
              </h2>
              <div className="space-y-4">
                {items.map((s) => (
                  <div key={s.id} className="rounded-xl border bg-card p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-extrabold">
                        {s.teil} — {s.titleAr}
                      </h3>
                      <div className="flex gap-1.5">
                        <Badge variant="secondary">{s.minutes}</Badge>
                        <Badge variant="outline">{s.questions}</Badge>
                      </div>
                    </div>
                    <ol className="mt-3 space-y-1.5">
                      {s.steps.map((st, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary">{i + 1}</span>
                          {st}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/5 p-2.5">
                      <p className="mb-1 text-xs font-extrabold text-destructive">⚠️ فخاخ هذا الجزء:</p>
                      <ul className="space-y-1">
                        {s.traps.map((t, i) => (
                          <li key={i} className="text-xs text-muted-foreground">
                            <b className="text-destructive">{t.name}:</b> {t.how}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">💡 {s.zeit}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* الفخاخ العشرة الذهبية */}
      <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-4">
        <p className="mb-3 text-sm font-extrabold text-gold-strong">🏆 الفخاخ العشرة الذهبية في القراءة والاستماع</p>
        <ol className="space-y-1.5">
          {GOLDEN_TRAPS.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[11px] font-extrabold text-gold-foreground">{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
