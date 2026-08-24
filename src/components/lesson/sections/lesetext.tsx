"use client";

import * as React from "react";
import {BookMarked, Eye, EyeOff, Languages, MessageCircleQuestion, Quote} from "lucide-react";

import {MultipleChoiceExercise} from "@/components/lesson/exercises/multiple-choice";
import {SpeakButton} from "@/components/shared/speak-button";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import type {ReadingText} from "@/types/lesson";

const TEXT_TYPE_LABEL: Record<ReadingText["textType"], string> = {
  dialog: "حوار",
  email: "بريد إلكتروني",
  blog: "تدوينة",
  artikel: "مقال",
  erzaehlung: "سرد",
  anzeige: "إعلان",
  brief: "رسالة",
  bericht: "تقرير",
};

/**
 * 3.5) نصّ القراءة الممتدّ (Lesetext).
 *
 * القراءة هنا مرحلتان لا مرحلة واحدة، وهذا مقصود:
 * أولاً يُقرأ النصّ الألماني وحده (الترجمة مخفيّة) ليُجبَر المتعلّم على
 * استنتاج المعنى من السياق، وهي المهارة الفعلية المطلوبة في الامتحان
 * وفي الحياة. ثم تُكشف الترجمة للتحقّق. عرض النصّين جنباً إلى جنب منذ
 * البداية يجعل العين تقفز إلى العربية فلا تُقرأ الألمانية أصلاً.
 */
export function LesetextSection({reading}: {reading: ReadingText}) {
  const [showTranslation, setShowTranslation] = React.useState(false);
  const [openGloss, setOpenGloss] = React.useState(false);
  const fullText = reading.paragraphs.join(" ");

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BookMarked className="h-5 w-5 shrink-0 text-primary" />
                <CardTitle className="text-lg">{reading.titleAr}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground" dir="ltr" lang="de">
                {reading.titleDe}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {TEXT_TYPE_LABEL[reading.textType]}
              </span>
              <SpeakButton text={fullText} />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-3">
            {reading.paragraphs.map((para, i) => (
              <div key={i} className="space-y-1.5">
                <p
                  dir="ltr"
                  lang="de"
                  className="text-start text-[15px] leading-8 text-foreground"
                >
                  {para}
                </p>
                {showTranslation && reading.paragraphsAr[i] ? (
                  <p className="border-e-2 border-primary/30 pe-3 text-sm leading-7 text-muted-foreground">
                    {reading.paragraphsAr[i]}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTranslation((v) => !v)}
            className="gap-2"
          >
            {showTranslation ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showTranslation ? "إخفاء الترجمة" : "أظهر الترجمة"}
          </Button>
          {!showTranslation ? (
            <p className="text-xs text-muted-foreground">
              اقرأ النصّ الألماني أوّلاً كاملاً وخمّن المعنى من السياق، ثم تحقّق بالترجمة.
            </p>
          ) : null}
        </CardContent>
      </Card>

      {reading.glossary.length > 0 ? (
        <Card>
          <CardHeader className="pb-2">
            <button
              type="button"
              onClick={() => setOpenGloss((v) => !v)}
              className="flex w-full items-center justify-between gap-2 text-start"
            >
              <span className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">
                  المفردات الجديدة ({reading.glossary.length})
                </CardTitle>
              </span>
              <span className="text-xs text-muted-foreground">
                {openGloss ? "إخفاء" : "عرض"}
              </span>
            </button>
          </CardHeader>
          {openGloss ? (
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {reading.glossary.map((g) => (
                  <li
                    key={g.de}
                    className="rounded-lg border bg-muted/30 p-3 text-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span dir="ltr" lang="de" className="font-medium">
                        {g.de}
                      </span>
                      <SpeakButton text={g.de} />
                    </div>
                    <p className="mt-1 text-muted-foreground">{g.ar}</p>
                    {g.noteAr ? (
                      <p className="mt-1 text-xs text-primary/80">{g.noteAr}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </CardContent>
          ) : null}
        </Card>
      ) : null}

      {reading.questions.length > 0 ? (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <MessageCircleQuestion className="h-5 w-5 text-primary" />
              أسئلة الفهم
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reading.questions.map((q) => (
              <MultipleChoiceExercise key={q.id} exercise={q} />
            ))}
          </CardContent>
        </Card>
      ) : null}

      {reading.redemittel && reading.redemittel.length > 0 ? (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Quote className="h-5 w-5 text-primary" />
              عبارات جاهزة من النصّ (Redemittel)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {reading.redemittel.map((r) => (
                <li
                  key={r.de}
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-2",
                    "rounded-lg border bg-muted/30 p-3 text-sm",
                  )}
                >
                  <span dir="ltr" lang="de" className="font-medium">
                    {r.de}
                  </span>
                  <span className="text-muted-foreground">{r.ar}</span>
                  <SpeakButton text={r.de} />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {reading.discussionAr ? (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <p className="text-sm font-medium">للنقاش</p>
            <p className="mt-1 text-sm text-muted-foreground">{reading.discussionAr}</p>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
