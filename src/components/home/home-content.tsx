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

  // انتظار التحميل
  if (hasProfile === null) return <div className="min-h-[40vh]" />;

  // مستخدم مسجّل: المسار مباشرة — نظيف ومُركز
  if (hasProfile) {
    return (
      <div className="space-y-6">
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
