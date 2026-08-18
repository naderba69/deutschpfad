"use client";

import Link from "next/link";
import {ArrowLeft, BookOpen, CheckCircle2, Clock, Map, PlayCircle, Route} from "lucide-react";

import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {useProgress} from "@/components/providers/progress-provider";
import {LESSON_META} from "@/data/lessons/meta";
import {LEVELS} from "@/lib/constants/curriculum";
import {cn} from "@/lib/utils";

/**
 * المسار المتسلسل الكامل — كل الدروس (46) بالترتيب من a1-00 حتى b2-10
 * يعرض الرحلة كاملة درساً بدرس: رقم عالمي + مستوى + عنوان + مدة + زر فتح.
 * هذا هو «المسار والمنهجية» الذي يتبعه المتعلم من أول درس A1 حتى آخر B2.
 */
export function SequentialPath() {
  // LESSON_META مُرتَّب مسبقاً (a1-00 → b2-10) — نستخدم ترتيبه كخريطة
  const lessons = LESSON_META;
  const { completedLessonsSet, isHydrated } = useProgress();
  const doneCount = isHydrated
    ? lessons.filter((l) => completedLessonsSet.has(l.id)).length
    : 0;

  return (
    <Card className="overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
      <CardContent className="p-0">
        {/* رأس القسم */}
        <div className="flex items-center gap-3 border-b px-6 py-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Route className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 className="text-lg font-extrabold">المسار الكامل — درساً بدرس</h2>
            <p className="text-xs text-muted-foreground">
              رحلتك مرتبة بالترتيب الصحيح: {lessons.length} درساً من الأبجدية (A1) حتى
              الاحتراف الأكاديمي (B2). افتح درساً وأكمل، ثم تابع «الدرس التالي» في نهايته.
            </p>
          </div>
          <div className="shrink-0 rounded-xl bg-muted px-3 py-1.5 text-center">
            <p className="font-de text-base font-extrabold text-primary">{doneCount}<span className="text-xs text-muted-foreground">/{lessons.length}</span></p>
            <p className="text-[11px] font-bold text-muted-foreground">درس مكتمل</p>
          </div>
        </div>

        {/* المستويات الأربعة بالترتيب */}
        <div className="divide-y">
          {LEVELS.map((level) => {
            const levelLessons = lessons.filter((l) => l.level === level.code);
            if (levelLessons.length === 0) return null;
            // الرقم العالمي لأول درس في هذا المستوى
            const firstIndex = lessons.findIndex((l) => l.id === levelLessons[0].id);
            return (
              <div key={level.code} id={`path-${level.code.toLowerCase()}`} className="scroll-mt-24">
                {/* رأس المستوى */}
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 bg-muted/30 px-4 py-3 sm:px-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{level.emoji}</span>
                    <div className="min-w-0">
                      <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <Badge variant="outline" className="font-de font-bold" style={{ color: level.accent, borderColor: `${level.accent}66` }}>
                          {level.code}
                        </Badge>
                        <LangDe className="truncate text-sm font-bold">{level.titleDe}</LangDe>
                        <span className="text-xs text-muted-foreground">— {level.titleAr}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      href={`/level/${level.code.toLowerCase()}`}
                      className="rounded-lg border border-primary/30 bg-card px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/10"
                    >
                      مركز المستوى ←
                    </Link>
                    <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-muted-foreground">
                      {levelLessons.length} دروس
                    </span>
                  </div>
                </div>

                {/* الدروس */}
                <div className="grid grid-cols-1 gap-1.5 px-4 py-4 sm:grid-cols-2 sm:px-6">
                  {levelLessons.map((lesson) => {
                    const globalNumber = firstIndex + levelLessons.indexOf(lesson) + 1;
                    const isDone = completedLessonsSet.has(lesson.id);
                    return (
                      <Link
                        key={lesson.id}
                        href={`/lesson/${lesson.id}`}
                        className={cn(
                          "group flex min-w-0 items-center gap-3 rounded-xl border bg-card px-3.5 py-3 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]",
                          isDone ? "border-success/30 bg-success/[0.04]" : "border-muted",
                        )}
                      >
                        {/* الرقم العالمي */}
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-de text-xs font-extrabold",
                            lesson.level === "A1" && "bg-primary/10 text-primary",
                            lesson.level === "A2" && "bg-gold/15 text-gold-strong",
                            lesson.level === "B1" && "bg-[#16a34a]/10 text-[#16a34a]",
                            lesson.level === "B2" && "bg-[#dc2626]/10 text-[#dc2626]",
                          )}
                        >
                          {String(globalNumber).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold">
                            <LangDe className="font-bold">{lesson.titleDe}</LangDe>
                            {isDone && (
                              <CheckCircle2 className="ms-1.5 inline h-3.5 w-3.5 text-success" aria-hidden="true" />
                            )}
                          </p>
                          <p className="flex items-center gap-2 truncate text-xs text-muted-foreground">
                            <span className="truncate">{lesson.titleAr}</span>
                            <span className="inline-flex shrink-0 items-center gap-0.5">
                              <Clock className="h-3 w-3" aria-hidden="true" />
                              {lesson.duration}د
                            </span>
                          </p>
                        </div>

                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                        ) : (
                          <PlayCircle className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ختام الرحلة */}
        <div className="flex items-center justify-between gap-3 border-t bg-muted/20 px-6 py-4">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Map className="h-4 w-4 text-primary" aria-hidden="true" />
            بعد إتمام {lessons.length} درساً واجتياز امتحانات الختم — تكون أتممت المنهاج A1→B2 كاملاً.
          </p>
          <Link
            href="/tests/placement"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            حدّد مستواك الآن
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
