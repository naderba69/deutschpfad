"use client";

import * as React from "react";
import Link from "next/link";
import {ArrowLeft, ArrowRight, CheckCircle2, Clock, Printer, Sparkles, TableProperties} from "lucide-react";

import {LESSON_SECTIONS} from "@/components/lesson/lesson-sections";
import {InterleavingReview} from "@/components/lesson/sections/interleaving-review";
import {AusspracheSection} from "@/components/lesson/sections/aussprache";
import {EinfuehrungSection} from "@/components/lesson/sections/einfuehrung";
import {FehlerUndTippsSection} from "@/components/lesson/sections/fehler-und-tipps";
import {HoerverstehenSection} from "@/components/lesson/sections/hoerverstehen";
import {InteraktiveUebungenSection} from "@/components/lesson/sections/interaktive-uebungen";
import {LernkartenSection} from "@/components/lesson/sections/lernkarten";
import {LernzieleSection} from "@/components/lesson/sections/lernziele";
import {MiniTestSection} from "@/components/lesson/sections/mini-test";
import {SchreibenSection} from "@/components/lesson/sections/schreiben";
import {TheorieSection} from "@/components/lesson/sections/theorie";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {StarkeVerbenTable} from "@/components/verbs/starke-verben-table";
import {cn} from "@/lib/utils";
import type { Lesson } from "@/types/lesson";

const LEVEL_LABEL: Record<string, string> = {
  A1: "المبتدئ",
  A2: "ما قبل المتوسط",
  B1: "المتوسط",
  B2: "المتقدم",
};

/**
 * هيكل الدرس الموحد — يقدّم المكونات العشرة بالتسلسل البيداغوجي
 * مع متصفح أقسام علوي وشريط تقدم
 */
export function LessonClient({ lesson }: { lesson: Lesson }) {
  const [visited, setVisited] = React.useState<Set<string>>(new Set(["lernziele"]));
  const [currentSection, setCurrentSection] = React.useState(0);

  const sectionDefs = LESSON_SECTIONS.filter(
    (def) =>
      (def.id !== "review" || (lesson.review && lesson.review.length > 0)) &&
      (def.id !== "verben" || lesson.level === "B1" || lesson.level === "B2"),
  );
  const total = sectionDefs.length;
  const progressPct = Math.round((visited.size / total) * 100);

  const markVisited = (id: string) => {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    const def = sectionDefs[clamped];
    setCurrentSection(clamped);
    markVisited(def.id);
    document.getElementById(`lesson-section-${def.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderSection = (id: string) => {
    switch (id) {
      case "lernziele":
        return <LernzieleSection lernziele={lesson.lernziele} />;
      case "einfuehrung":
        return <EinfuehrungSection einfuehrung={lesson.einfuehrung} />;
      case "review":
        return (
          <InterleavingReview
            review={lesson.review ?? []}
            levelLabel={lesson.level === "A2" ? "A1" : lesson.level === "B1" ? "A2" : "B1"}
          />
        );
      case "theorie":
        return <TheorieSection blocks={lesson.theory} lessonId={lesson.id} />;
      case "verben":
        return (
          <Card className="overflow-hidden">
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TableProperties className="h-5 w-5 text-primary" aria-hidden="true" />
                جدول الأفعال الشاذة (مرجع سريع)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <StarkeVerbenTable compact />
            </CardContent>
          </Card>
        );
      case "hoerverstehen":
        return (
          <HoerverstehenSection
            items={lesson.listening.items}
            questions={lesson.listening.questions}
          />
        );
      case "aussprache":
        return <AusspracheSection focus={lesson.pronunciation} />;
      case "schreiben":
        return <SchreibenSection exercises={lesson.writing} />;
      case "uebungen":
        return <InteraktiveUebungenSection bank={lesson.practiceBank} />;
      case "fehler":
        return <FehlerUndTippsSection data={lesson.fehlerUndTipps} />;
      case "minitest":
        return (
          <MiniTestSection
            questions={lesson.miniTest}
            unitId={lesson.unitId}
            lessonId={lesson.id}
            flashcards={lesson.flashcards}
          />
        );
      case "lernkarten":
        return <LernkartenSection flashcards={lesson.flashcards} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      {/* ترويسة الدرس */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/learning-path" className="text-sm text-muted-foreground hover:text-primary">
            ← مسار التعلم
          </Link>
          <span className="text-muted-foreground">/</span>
          <Badge variant="outline" className="font-de font-bold">
            {lesson.level}
          </Badge>
          <Badge variant="secondary">
            {LEVEL_LABEL[lesson.level] ?? lesson.level}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            ~{lesson.duration} دقيقة
          </span>
        </div>

        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          <LangDe className="font-extrabold">{lesson.titleDe}</LangDe>
        </h1>
        <p className="text-base text-muted-foreground">{lesson.titleAr}</p>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{lesson.summary}</p>

        {/* ربط المعلّم الافتراضي بسياق الدرس */}
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="outline" size="sm" className="gap-1.5 text-primary">
            <Link href={`/assistant?lesson=${lesson.id}`}>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              اسأل المعلّم عن هذا الدرس
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 print:hidden"
            onClick={() => window.print()}
            title={'احفظ الدرس كملف PDF (اختر "حفظ كـ PDF" من نافذة الطباعة)'}
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            طباعة / PDF
          </Button>
        </div>

        {/* شريط التقدم */}
        <div className="flex items-center gap-3">
          <Progress value={progressPct} className="h-2" aria-label={`تقدم الدرس ${progressPct}%`} />
          <span className="font-de shrink-0 text-sm font-bold text-primary">{progressPct}%</span>
        </div>
      </div>

      {/* متصفح الأقسام العشرة — شريط علوي لاصق */}
      <div className="sticky top-16 z-30 -mx-4 mb-6 border-y bg-background/90 px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap">
          {sectionDefs.map((def, i) => {
            const isVisited = visited.has(def.id);
            const isCurrent = i === currentSection;
            return (
              <button
                key={def.id}
                type="button"
                onClick={() => goTo(i)}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors",
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground"
                    : isVisited
                      ? "border-success/40 bg-success/10 text-success hover:border-success/60"
                      : "bg-muted/40 text-muted-foreground hover:border-primary/40",
                )}
              >
                <def.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {def.short}
                {isVisited && !isCurrent && <CheckCircle2 className="h-3 w-3" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* الأقسام */}
      <div className="space-y-8">
        {sectionDefs.map((def) => (
          <section
            key={def.id}
            id={`lesson-section-${def.id}`}
            className="scroll-mt-36"
            aria-label={def.label}
          >
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <def.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              {def.label}
            </h2>
            {renderSection(def.id)}
          </section>
        ))}
      </div>

      {/* أزرار التنقل السفلية */}
      <div className="mt-10 flex items-center justify-between gap-3 border-t pt-6">
        <Button
          variant="outline"
          onClick={() => goTo(currentSection - 1)}
          disabled={currentSection === 0}
          className="gap-1.5"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          السابق
        </Button>
        {currentSection < total - 1 ? (
          <Button onClick={() => goTo(currentSection + 1)} className="gap-1.5">
            {sectionDefs[currentSection + 1].short}
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button asChild variant="gold">
            <Link href="/learning-path">
              العودة لمسار التعلم
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
