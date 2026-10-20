"use client";

import Link from "next/link";
import {ArrowLeft, BookOpen, Layers} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {SectionHeading} from "@/components/shared/section-heading";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {useProgress} from "@/components/providers/progress-provider";
import {LEVELS} from "@/lib/constants/curriculum";
import {getLevelCompletion} from "@/lib/progress-selectors";
import type { LevelCode } from "@/types/curriculum";

const LEVEL_ARABIC_TITLE: Record<LevelCode, string> = {
  A1: "المبتدئ",
  A2: "ما قبل المتوسط",
  B1: "المتوسط",
  B2: "المتقدم",
};

/**
 * معاينة المستويات الأربعة على الصفحة الرئيسية
 * (تعرض التقدم الحقيقي المخزّن في LocalStorage)
 */
export function LevelsPreview() {
  const { completedUnits, isHydrated } = useProgress();

  return (
    <section id="levels" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="المستويات"
        title="4 مستويات معتمدة دولياً (CERR)"
        description="من أول حرف في الأبجدية حتى الكتابة الأكاديمية — كل مستوى يفتح بعد إتقان سابقه، تماماً مثل الدورات الرسمية."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {LEVELS.map((level) => {
          const completion = getLevelCompletion(completedUnits, level.code);
          return (
            <Card
              key={level.code}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              {/* شريط علوي متدرج بلون المستوى */}
              <div
                className={`h-1.5 w-full bg-gradient-to-l ${level.gradient}`}
                aria-hidden="true"
              />
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl" aria-hidden="true">
                      {level.emoji}
                    </span>
                    <Badge
                      variant="outline"
                      className="font-de font-bold"
                      style={{ color: level.accent, borderColor: `${level.accent}66` }}
                    >
                      {level.code}
                    </Badge>
                  </div>
                  <LangDe className="text-xs font-medium text-muted-foreground">
                    {level.subtitleDe}
                  </LangDe>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    <LangDe className="font-bold">{level.titleDe}</LangDe>
                    <span className="ms-2 text-base font-semibold text-muted-foreground">
                      {LEVEL_ARABIC_TITLE[level.code]}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {level.description}
                  </p>
                </div>

                {/* أهم القواعد */}
                <div className="flex flex-wrap gap-1.5">
                  {level.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="font-de rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      dir="ltr"
                      lang="de"
                    >
                      {topic}
                    </span>
                  ))}
                  {level.topics.length > 3 && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      +{level.topics.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                      {level.units} وحدات
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      {level.words}+ كلمة
                    </span>
                  </div>
                  <Progress
                    value={isHydrated ? completion.pct : 0}
                    aria-label={`تقدم مستوى ${level.code}: ${completion.pct}%`}
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-de text-sm font-semibold text-primary">
                      {isHydrated ? completion.pct : "…"}%
                    </span>
                    <Link
                      href={`/learning-path#${level.code.toLowerCase()}`}
                      className="inline-flex items-center gap-1 rounded-lg py-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      ابدأ المستوى
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
