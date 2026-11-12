"use client";

import * as React from "react";

import {Faq} from "@/components/home/faq";
import {Features} from "@/components/home/features";
import {FinalCta} from "@/components/home/final-cta";
import {Hero} from "@/components/home/hero";
import {HowItWorks} from "@/components/home/how-it-works";
import {LearnerJourney} from "@/components/home/learner-journey";
import {LevelsPreview} from "@/components/home/levels-preview";
import {StatsBar} from "@/components/home/stats-bar";
import {Skeleton} from "@/components/ui/skeleton";
import {getLearnerProfile} from "@/lib/storage/learner";

/**
 * ═══════════════════════════════════════════════════════════
 *  الرئيسية الذكية:
 *  · مستخدم لديه ملف شخصي → يرى مساره مباشرة (لوحة الرحلة فقط + المسار)
 *  · زائر جديد → يرى الترويج ثم يبدأ
 *  — لا تشتت: التركيز على المسار لمن بدأ.
 * ═══════════════════════════════════════════════════════════
 */
export function HomeContent() {
  const [hasProfile, setHasProfile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    void getLearnerProfile().then((p) => setHasProfile(!!p.onboarded));
  }, []);

  // انتظار التحميل — هيكل عظمي بدل الفراغ (يمنع الوميض/إعادة التخطيط)
  // h1 مخفي في SSR: يضمن وجود عنوان رئيسي في HTML الخادمي قبل اكتمال الفحص
  if (hasProfile === null) {
    return (
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-10 sm:px-6" aria-busy="true" aria-label="جارٍ تحميل صفحتك">
        <h1 className="sr-only">درب الألمانية — تعلّم الألمانية من الصفر حتى B2 بثقة</h1>
        <Skeleton className="h-24 w-full rounded-2xl" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-2xl" />
          ))}
        </div>
        <Skeleton className="h-40 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    );
  }

  // مستخدم مسجّل: المسار مباشرة — نظيف ومُركز
  if (hasProfile) {
    return (
      <div className="space-y-6">
        <h1 className="sr-only">درب الألمانية — تعلّم الألمانية من الصفر حتى B2 بثقة</h1>
        <LearnerJourney />
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            تواصل رحلتك من حيث توقفت — كل شيء في مكانه
          </p>
        </div>
      </div>
    );
  }

  // زائر جديد: ترويج + بداية
  return (
    <>
      <Hero />
      <StatsBar />
      <LearnerJourney />
      <Features />
      <LevelsPreview />
      <HowItWorks />
      <Faq />
      <FinalCta />
    </>
  );
}
