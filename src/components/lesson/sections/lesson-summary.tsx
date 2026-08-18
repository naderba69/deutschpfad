"use client";

import {BookOpen, FileText, Lightbulb, ListChecks, Printer, Sparkles} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {Button} from "@/components/ui/button";
import type { Lesson } from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════════
 *  ملخص الدرس — «كل ما تعلمته في صفحة واحدة»
 *  يُعرض في نهاية الدرس ويمكن حفظه PDF (زر الطباعة).
 *  يشمل: القواعد + التريكات + الأخطاء الشائعة + مفردات البطاقات.
 * ═══════════════════════════════════════════════════════════
 */
export function LessonSummary({ lesson }: { lesson: Lesson }) {
  const tips = lesson.fehlerUndTipps?.eselsbruecken ?? [];
  const mistakes = lesson.fehlerUndTipps?.mistakes ?? [];
  const culture = lesson.fehlerUndTipps?.culturalNote;

  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-bl from-primary/5 via-card to-gold/5 p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-lg font-extrabold">
          <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
          ملخص الدرس — كل ما تعلمته
        </h3>
        <Button variant="outline" size="sm" className="gap-1.5 print:hidden" onClick={() => window.print()}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          احفظ الملخص PDF
        </Button>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        <LangDe className="font-bold">{lesson.titleDe}</LangDe> — {lesson.titleAr}
        <span className="ms-2 text-xs opacity-70">({lesson.duration} دقيقة)</span>
      </p>

      {/* 1) القواعد */}
      <div className="mb-4">
        <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-primary">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          القواعد الأساسية
        </h4>
        <ul className="space-y-1.5">
          {lesson.theory.map((t) => (
            <li key={t.id} className="rounded-lg border border-muted bg-card/60 px-3 py-2 text-sm">
              <span className="font-bold">{t.titleAr}</span>
              <span className="ms-2 text-xs text-muted-foreground">
                <LangDe>{t.titleDe}</LangDe>
              </span>
              {t.examples && t.examples[0] && (
                <p className="font-de mt-1 text-xs text-muted-foreground">
                  مثال: {t.examples[0].de}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 2) التريكات */}
      {tips.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-gold-strong">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            التريكات والحيل للحفظ
          </h4>
          <ul className="space-y-1.5">
            {tips.map((tip, i) => (
              <li key={i} className="rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-sm">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3) الأخطاء الشائعة */}
      {mistakes.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-destructive">
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            الأخطاء الشائعة — تجنّبها
          </h4>
          <ul className="space-y-1.5">
            {mistakes.map((m, i) => (
              <li key={i} className="rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm">
                <span className="font-de line-through opacity-60">{m.wrong}</span>
                {" ← "}
                <span className="font-de font-bold text-success">{m.right}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{m.whyAr}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 4) المفردات الأساسية (البطاقات) */}
      {lesson.flashcards.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-success">
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            مفردات الدرس ({lesson.flashcards.length})
          </h4>
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {lesson.flashcards.map((c) => (
              <div key={c.id} className="rounded-lg border border-muted bg-card/60 px-3 py-1.5 text-sm">
                <span className="font-de font-bold">{c.de}</span>
                <span className="ms-2 text-xs text-muted-foreground">{c.ar}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5) لقطة ثقافية */}
      {culture && (
        <div className="rounded-lg bg-muted/40 px-3 py-2">
          <p className="text-[11px] font-bold text-muted-foreground">{culture.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{culture.content}</p>
        </div>
      )}
    </div>
  );
}
