"use client";

import * as React from "react";
import Link from "next/link";
import {BookOpenCheck, ClipboardCheck, GraduationCap, Mic, Repeat, Sparkles} from "lucide-react";

import {useProgress} from "@/components/providers/progress-provider";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {LESSON_META} from "@/data/lessons/meta";
import {getPersonality, PERSONALITY_META} from "@/lib/storage/teacher-personality";
import {getMistakeStats} from "@/lib/storage/mistake-dictionary";
import type { LearnerProfile } from "@/lib/storage/learner";

/**
 * ═══════════════════════════════════════════════════════════
 *  أستاذك الخبير — قلب المنصة: يقودك جلسةً جلسة
 *  بالدورة الأكاديمية الكاملة كما يفعل الأستاذ الحقيقي:
 *  1) يُحيّي ويُخطّط  2) يراجع ما سبق  3) يعلّم درساً جديداً
 *  4) يدرّبك  5) يقيّمك  6) يصحّح أخطاءك  7) يوجّهك للخطوة التالية
 *  — بصوت شخصية المعلّم الذي اخترته، وبمنهجية مرتبة.
 * ═══════════════════════════════════════════════════════════
 */
export function TeacherMentor({ profile }: { profile: LearnerProfile }) {
  const { completedLessonsSet } = useProgress();
  const [personality, setPersonality] = React.useState<"formal" | "friendly" | "strict">("friendly");
  const [weakest, setWeakest] = React.useState<string | null>(null);

  React.useEffect(() => {
    void getPersonality().then(setPersonality);
    void getMistakeStats().then((stats) => {
      if (stats.length > 0) setWeakest(stats[0].label);
    });
  }, []);

  const firstName = (profile.name ?? "").trim().split(/\s+/)[0] ?? "صديقي";
  const doneCount = completedLessesSetSize(completedLessonsSet);

  // الدرس التالي (أول درس غير مكتمل في المسار)
  const next = LESSON_META.find((l) => !completedLessonsSet.has(l.id)) ?? LESSON_META[LESSON_META.length - 1];
  const nextIndex = LESSON_META.findIndex((l) => l.id === next.id);
  const level = (profile.placementLevel ?? "A1") as "A1" | "A2" | "B1" | "B2";

  const pMeta = PERSONALITY_META[personality];

  const greeting =
    new Date().getHours() < 12 ? "صباح الخير" : new Date().getHours() < 18 ? "مساء النور" : "مساء الخير";

  // عبارة المعلم حسب الشخصية (افتتاحية الجلسة)
  const opening: Record<string, string> = {
    formal: `أهلاً ${firstName}. إليك خطة جلسة اليوم — نلتزم بها بدقة.`,
    friendly: `${greeting} ${firstName}! أنا أستاذك اليوم — لنبدأ خطوة بخطوة، كلها ممتعة! 🌟`,
    strict: `${firstName}، الوقت ثمين. هذه خطة اليوم — ابدأ ولا تؤجل.`,
  };

  // ملاحظة المعلم عن مستوى المتعلم
  const note =
    weakest !== null
      ? `لاحظت أن نقطة ضعفك الحالية «${weakest}» — سنعمل عليها في التدريب.`
      : `وضعك ممتاز — نواصل بنفس التركيز، وكل جلسة تقرّبك من B2.`;

  return (
    <Card className="relative overflow-hidden border-primary/25">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-primary via-gold to-success" aria-hidden="true" />
      <CardContent className="space-y-5 p-5 sm:p-6">
        {/* رأس المعلم */}
        <div className="flex items-start gap-4">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl" aria-hidden="true">
            {pMeta.emoji}
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wide text-primary">أستاذك الخبير</p>
            <h2 className="text-lg font-extrabold leading-tight">{opening[personality]}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        </div>

        {/* خطة الجلسة — الدورة الأكاديمية */}
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            خطة جلسة اليوم — بنفس منهجية الأستاذ في الصف
          </p>
          <ol className="space-y-2">
            <SessionStep
              n={1}
              icon={<Repeat className="h-4 w-4" aria-hidden="true" />}
              title="مراجعة ما سبق"
              desc="استرجاع سريع يثبّت ما تعلمته (3-5 دقائق)"
              href="/dashboard/review"
              accent="bg-primary/10 text-primary"
            />
            <SessionStep
              n={2}
              icon={<BookOpenCheck className="h-4 w-4" aria-hidden="true" />}
              title={`الدرس الجديد — ${next.titleAr}`}
              desc={`الدرس ${String(nextIndex + 1).padStart(2, "0")} من ${LESSON_META.length}: قواعد + تريكات + حوارات`}
              href={`/lesson/${next.id}`}
              accent="bg-gold/15 text-gold-strong"
            />
            <SessionStep
              n={3}
              icon={<Mic className="h-4 w-4" aria-hidden="true" />}
              title="التدريب الصوتي"
              desc="نطق + تحدث — الميكروفون جاهز (افحصه أولاً)"
              href="/sprechtraining"
              accent="bg-success/15 text-success"
            />
            <SessionStep
              n={4}
              icon={<ClipboardCheck className="h-4 w-4" aria-hidden="true" />}
              title="التقييم — اختبر ما تعلمته"
              desc={`اختبار مستوى ${level} — وأقيس تقدمك بالأرقام`}
              href={`/tests/level/${level.toLowerCase()}`}
              accent="bg-[#dc2626]/10 text-[#dc2626]"
            />
          </ol>
        </div>

        {/* زر البدء + تقدم المتعلم */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <p className="text-xs text-muted-foreground">
            أتممت <span className="font-de font-extrabold text-primary">{doneCount}</span> من{" "}
            <span className="font-de font-extrabold">{LESSON_META.length}</span> درساً — هدفك: مستوى {level}
          </p>
          <Button asChild size="sm" className="gap-1.5">
            <Link href={`/lesson/${next.id}`}>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              ابدأ جلسة اليوم — الدرس {String(nextIndex + 1).padStart(2, "0")}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/** خطوة واحدة في خطة الجلسة */
function SessionStep({
  n,
  icon,
  title,
  desc,
  href,
  accent,
}: {
  n: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  accent: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-3 rounded-xl border border-muted bg-card px-3.5 py-2.5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
      >
        <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-de text-xs font-extrabold ${accent}`}>
          {n}
        </span>
        <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent}`}>{icon}</span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold">{title}</span>
          <span className="block truncate text-xs text-muted-foreground">{desc}</span>
        </span>
        <span className="text-muted-foreground transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
      </Link>
    </li>
  );
}

/** مساعد: حجم مجموعة الدروس المكتملة (واجهة قديمة) */
function completedLessesSetSize(set: Set<string>): number {
  return set.size;
}
