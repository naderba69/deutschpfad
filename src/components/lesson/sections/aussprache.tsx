"use client";

import dynamic from "next/dynamic";
import {BookOpenCheck, Mic, PenLine, Repeat2, Sparkles, Volume2} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {MINIMAL_PAIR_GROUPS} from "@/lib/speech/minimal-pairs-data";
import type { PronunciationFocus } from "@/types/lesson";

/**
 * التحميل الكسول (Lazy Loading) لأدوات النطق الثقيلة:
 * محركات الكلام والألعاب الصوتية تُحمَّل في حزم منفصلة عند الحاجة فقط،
 * مما يقلل حجم الحزمة الأولية لصفحة الدرس.
 */
const PronunciationPractice = dynamic(
  () =>
    import("@/components/lesson/speech/pronunciation-practice").then(
      (m) => m.PronunciationPractice,
    ),
  { loading: () => <Skeleton className="h-40 w-full" /> },
);

const SpeakAndScore = dynamic(
  () =>
    import("@/components/lesson/speech/speak-and-score").then(
      (m) => m.SpeakAndScore,
    ),
  { loading: () => <Skeleton className="h-8 w-24" /> },
);

const ShadowingTrainer = dynamic(
  () =>
    import("@/components/lesson/speech/shadowing-trainer").then(
      (m) => m.ShadowingTrainer,
    ),
  { loading: () => <Skeleton className="h-36 w-full" /> },
);

const FreeDictation = dynamic(
  () =>
    import("@/components/lesson/speech/free-dictation").then(
      (m) => m.FreeDictation,
    ),
  { loading: () => <Skeleton className="h-32 w-full" /> },
);

const MinimalPairsGame = dynamic(
  () =>
    import("@/components/lesson/speech/minimal-pairs-game").then(
      (m) => m.MinimalPairsGame,
    ),
  { loading: () => <Skeleton className="h-44 w-full" /> },
);

/**
 * 5) النطق (Aussprache) — النسخة الكاملة للمرحلة 3:
 * 1) الكلمات الأساسية مع الاستماع بسرعتين
 * 2) ممارسة النطق الفعلية (تسجيل + تقييم فوري)
 * 3) مدرب الظل (Shadowing) خطوة بخطوة
 * 4) لعبة الأزواج الصوتية (Minimal Pairs)
 */
export function AusspracheSection({ focus }: { focus: PronunciationFocus }) {
  const groups = focus.minimalPairs ?? MINIMAL_PAIR_GROUPS;
  const shadowingLines = focus.shadowing ?? [];

  return (
    <div className="space-y-5">
      {/* 1) الكلمات الأساسية */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Volume2 className="h-5 w-5 text-primary" aria-hidden="true" />
            {focus.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2">
            {focus.items.map((item) => (
              <li
                key={item.de}
                className="overflow-hidden rounded-xl border bg-muted/20"
              >
                {/* ── البلوك 1: الألمانية (كبيرة وواضحة) ── */}
                <div className="border-b bg-background/70 px-4 py-3">
                  <span className="font-de block text-2xl font-extrabold leading-tight" dir="ltr" lang="de">
                    {item.de}
                  </span>
                </div>

                {/* ── البلوك 2: العربية + الشرح ── */}
                <div className="space-y-1 px-4 py-3">
                  <p className="text-sm font-bold text-foreground">
                    <span className="text-muted-foreground">= </span>
                    {item.ar}
                  </p>
                  {item.note && (
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  )}
                </div>

                {/* ── البلوك 3: الأزرار (بطيء + استمع + انطقها) ── */}
                <div className="flex flex-wrap items-center gap-2 border-t bg-background/40 px-4 py-2.5">
                  <SpeakButton text={item.de} rate={0.75} variant="outline" size="sm" label="بطيء" />
                  <SpeakAndScore target={item.de} compact />
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">
            <Repeat2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              <span className="font-bold">تمرين التكرار (Shadowing): </span>
              استمع ثم كرّر فوراً مقلداً النبرة والإيقاع — 3 مرات لكل كلمة.
            </p>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground" aria-hidden="true" />
            <p>
              <span className="font-bold">نصيحة الخبراء: </span>
              {focus.tip}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 2) ممارسة النطق الفعلية */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mic className="h-5 w-5 text-primary" aria-hidden="true" />
            تدرّب على نطقك — سجّل واستمع لتقييمك
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <PronunciationPractice
            target={focus.items[0]?.de ?? "Guten Tag"}
            targetAr={focus.items[0]?.ar ?? "نهارك سعيد"}
          />
          <p className="text-xs text-muted-foreground">
            اختر أي كلمة من القائمة أعلاه لتدريبها، أو استخدم المثال: انقر «سجّل نطقك» وتحدث
            بالكلمة — سيحلل المتصفح نطقك فوراً (المتصفح الموصى به: Chrome/Edge).
          </p>
        </CardContent>
      </Card>

      {/* 3) مدرب الظل */}
      {shadowingLines.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Repeat2 className="h-5 w-5 text-primary" aria-hidden="true" />
              مدرب الظل (Shadowing) — سطر بسطر
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ShadowingTrainer lines={shadowingLines} />
          </CardContent>
        </Card>
      )}

      {/* 4) الإملاء الحر */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <PenLine className="h-5 w-5 text-primary" aria-hidden="true" />
            الإملاء الحر (Freies Diktat) — استمع واكتب بجمل عشوائية أو بجملتك
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FreeDictation />
        </CardContent>
      </Card>

      {/* 5) لعبة الأزواج الصوتية */}
      {groups.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpenCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              الأزواج الصوتية (Minimal Pairs) — استمع وميّز
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MinimalPairsGame groups={groups} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
