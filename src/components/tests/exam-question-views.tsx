"use client";

/**
 * ═══════════════════════════════════════════════════════════
 *  عارضات أسئلة الامتحانات — مصدر واحد لكل المحرّكات
 *
 *  قبل هذا الملف كان كل محرّك يعرّف عارضاته داخل ملفه:
 *  محرّك A1/A2/B1 (عارضات «مدمجة») ومحرّك B2 (عارضات «رسمية» مرقّمة).
 *  الآن تُعرَّف **هنا فقط**، ويستدعيها المحرّكان — فلا يتفرّع سلوك العرض
 *  بين المستويات (وهو أصل فجوة صوت B2 التي ظهرت سابقاً).
 *
 *  المجموعتان:
 *   · الرسمية (ExamMcqList · ExamStatementsList · ExamZuordnungList · ExamGapList)
 *     — المستخدمة في B2: ترقيم الأسئلة وحروف الاختيارات.
 *   · المدمجة (ExamMcqListCompact · ExamStatementsListCompact)
 *     — المستخدمة في A1/A2/B1 بنمطها الحالي (بلا ترقيم).
 *  توحيد الشكل البصري بينهما مهمة المرحلة 5 (docs/REFACTOR-PLAN.md) وليست هنا:
 *  هذه المرحلة تحفظ سلوك المتعلّم كما هو.
 * ═══════════════════════════════════════════════════════════
 */

import * as React from "react";

import type { ExamMcq, ExamStatement } from "@/types/exam";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════
 *  العارضات الرسمية (B2) — نُقلت حرفياً من goethe-b2-exam.tsx
 * ═══════════════════════════════════════════════════════════ */

/* ════════════ عارض MCQ ════════════ */
export function ExamMcqList({
  questions,
  answers,
  onAnswer,
}: {
  questions: ExamMcq[];
  answers: Record<string, number>;
  onAnswer: (id: string, idx: number) => void;
}) {
  return (
    <div className="space-y-4">
      {questions.map((q, qi) => (
        <div key={q.id} className="rounded-xl border bg-card p-4">
          <p className="text-sm font-bold">
            <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-extrabold text-primary">{qi + 1}</span>
            <span dir="ltr" lang="de">{q.q}</span>
          </p>
          {q.qAr && <p className="mt-0.5 text-xs text-muted-foreground">{q.qAr}</p>}
          <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                type="button"
                onClick={() => onAnswer(q.id, oi)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                  answers[q.id] === oi ? "border-primary bg-primary/10 text-primary" : "border-muted bg-background hover:border-primary/40",
                )}
              >
                <span className="font-de ms-1 inline-block w-4 text-xs font-bold opacity-60">{String.fromCharCode(65 + oi)}</span>
                <span dir="ltr" lang="de">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


/* ════════════ عارض Zuordnung ════════════ */
export function ExamZuordnungList({
  categories,
  items,
  allowRepeat,
  answers,
  onAnswer,
}: {
  categories: { id: string; de: string; ar?: string }[];
  items: { id: string; de: string; ar?: string }[];
  allowRepeat: boolean;
  answers: Record<string, string>;
  onAnswer: (itemId: string, catId: string) => void;
}) {
  const used = new Set(Object.values(answers));
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {categories.map((c) => (
          <span key={c.id} className="rounded-lg border bg-muted/30 px-2.5 py-1 text-xs font-bold">
            <span dir="ltr" lang="de">{c.de}</span>
          </span>
        ))}
      </div>
      {items.map((it, i) => (
        <div key={it.id} className="rounded-xl border bg-card p-3">
          <p className="text-sm">
            <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[11px] font-bold">{i + 1}</span>
            <span dir="ltr" lang="de">{it.de}</span>
          </p>
          {it.ar && <p className="mt-0.5 text-xs text-muted-foreground">{it.ar}</p>}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {categories.map((c) => {
              const isSel = answers[it.id] === c.id;
              const blocked = !allowRepeat && used.has(c.id) && !isSel;
              return (
                <button
                  key={c.id}
                  type="button"
                  disabled={blocked}
                  onClick={() => onAnswer(it.id, c.id)}
                  className={cn(
                    "rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
                    isSel ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background hover:border-primary/50",
                    blocked && "opacity-30",
                  )}
                >
                  <span dir="ltr" lang="de">{c.de}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}


/* ════════════ عارض Richtig/Falsch ════════════ */
export function ExamStatementsList({
  statements,
  answers,
  onAnswer,
}: {
  statements: { id: string; de: string; ar?: string }[];
  answers: Record<string, boolean>;
  onAnswer: (id: string, val: boolean) => void;
}) {
  return (
    <div className="space-y-2">
      {statements.map((s, i) => (
        <div key={s.id} className="rounded-xl border bg-card p-3">
          <p className="text-sm">
            <span className="ms-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[11px] font-bold">{i + 1}</span>
            <span dir="ltr" lang="de">{s.de}</span>
          </p>
          {s.ar && <p className="mt-0.5 text-xs text-muted-foreground">{s.ar}</p>}
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => onAnswer(s.id, true)}
              className={cn("rounded-md border px-3 py-1 text-xs font-bold", answers[s.id] === true ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background")}
            >
              Richtig
            </button>
            <button
              type="button"
              onClick={() => onAnswer(s.id, false)}
              className={cn("rounded-md border px-3 py-1 text-xs font-bold", answers[s.id] === false ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background")}
            >
              Falsch
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


/* ════════════ عارض Lückentext ════════════ */
export function ExamGapList({
  gap,
  answers,
  onAnswer,
}: {
  gap: { textWithGaps: string; sentenceBank: { id: string; de: string }[]; gapOrder: string[] };
  answers: Record<number, string>;
  onAnswer: (gapIdx: number, sentenceId: string) => void;
}) {
  const [bank] = React.useState(() => [...gap.sentenceBank].sort(() => Math.random() - 0.5));
  const parts = gap.textWithGaps.split(/(\{(\d+)\})/g);
  const gapCount = gap.gapOrder.length;

  const renderGap = (idx: number) => {
    const chosen = bank.find((b) => b.id === answers[idx]);
    return (
      <button
        key={idx}
        type="button"
        onClick={() => {
          const next = { ...answers };
          delete next[idx];
          // إعادة توزيع: سنستخدم setState خارجاً — نستدعي onAnswer فقط بالاختيار
          // للإزالة نستدعي onAnswer مع دالة خاصة — نبسط: زر منفصل
        }}
        className={cn(
          "mx-0.5 inline-block min-w-24 rounded-md border-2 px-2 py-0.5 text-sm align-baseline",
          chosen ? "border-primary bg-primary/10" : "border-dashed border-muted-foreground/50 bg-muted/30",
        )}
      >
        {chosen ? chosen.de : `…[${idx + 1}]`}
      </button>
    );
  };

  return (
    <div className="space-y-3">
      <div className="rounded-xl border bg-muted/30 p-4 leading-loose">
        <p className="text-[15px] leading-loose" dir="ltr" lang="de">
          {parts.map((part, i) => {
            if (part.startsWith("{") && part.endsWith("}")) {
              const idx = Number(part.slice(1, -1));
              return <React.Fragment key={i}>{renderGap(idx)}</React.Fragment>;
            }
            return <React.Fragment key={i}>{part}</React.Fragment>;
          })}
        </p>
      </div>
      <div>
        <p className="mb-2 text-xs font-bold text-muted-foreground">اختر جملة لكل فراغ (جملتان زائدتان لا تناسبان):</p>
        <div className="flex flex-wrap gap-2">
          {bank.map((s) => {
            const used = Object.values(answers).includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  const firstEmpty = [...Array(gapCount).keys()].find((i) => !answers[i]);
                  if (firstEmpty === undefined) return;
                  onAnswer(firstEmpty, s.id);
                }}
                className={cn("rounded-lg border px-3 py-1.5 text-sm", used ? "border-success/50 bg-success/10" : "border-muted bg-background hover:border-primary/50")}
              >
                <span dir="ltr" lang="de">{s.de}</span>
              </button>
            );
          })}
        </div>
      </div>
      {/* إزالة اختيار */}
      {Object.keys(answers).length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {[...Array(gapCount).keys()].filter((i) => answers[i]).map((i) => (
            <button key={i} type="button" onClick={() => onAnswer(i, "")} className="rounded-full border border-destructive/40 px-2.5 py-0.5 text-[11px] font-bold text-destructive">
              ✕ أزل الفراغ {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════
 *  العارضات المدمجة (A1/A2/B1) — نُقلت حرفياً من goethe-a1-exam.tsx
 * ═══════════════════════════════════════════════════════════ */

export function ExamStatementsListCompact({
  statements,
  answers,
  onPick,
  disabled,
}: {
  statements: ExamStatement[];
  answers: Record<string, boolean>;
  onPick: (id: string, v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      {statements.map((s) => (
        <div key={s.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3">
          <span className="font-de text-sm" dir="ltr" lang="de">{s.de}</span>
          <div className="flex gap-2">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                type="button"
                disabled={disabled}
                onClick={() => onPick(s.id, v)}
                className={`rounded-md border px-3 py-1 text-sm font-semibold ${
                  answers[s.id] === v ? "border-primary bg-primary text-primary-foreground" : "bg-background"
                }`}
              >
                {v ? "Richtig / صحيح" : "Falsch / خطأ"}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export function ExamMcqListCompact({
  questions,
  answers,
  onPick,
  disabled,
}: {
  questions: ExamMcq[];
  answers: Record<string, number>;
  onPick: (id: string, idx: number) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-3">
      {questions.map((q) => (
        <div key={q.id} className="rounded-lg border p-3">
          <p className="font-de text-sm font-semibold" dir="ltr" lang="de">{q.q}</p>
          {q.qAr && <p className="mt-0.5 text-xs text-muted-foreground">{q.qAr}</p>}
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                disabled={disabled}
                onClick={() => onPick(q.id, idx)}
                className={`rounded-md border px-3 py-2 text-start font-de text-sm ${
                  answers[q.id] === idx ? "border-primary bg-primary/10 font-bold" : "bg-background"
                }`}
                dir="ltr"
                lang="de"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

