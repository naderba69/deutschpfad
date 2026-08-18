import type { Metadata } from "next";

import {LazyOralExam} from "@/components/tests/lazy/lazy-oral-exam";
import {VortragModelle} from "@/components/tests/vortrag-modelle";

export const metadata: Metadata = {
  title: "الامتحان الشفهي — Mündliche Prüfung (Goethe)",
  description:
    "محاكاة الامتحان الشفهي بصيغتيه: B1 (تقديم النفس + حديث + حل مشكلة) وB2 (عرض تقديمي Vortrag + مناقشة Diskussion) — بمؤقت حقيقي وتسجيل صوتي وتقييم ذاتي بمعايير الممتحن.",
};

export default function OralTestPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الامتحان الشفهي (Mündliche Prüfung)
        </h1>
        <p className="mt-2 max-w-xl text-balance text-muted-foreground">
          صيغتان كاملتان بنمط Goethe: B2 = عرض تقديمي (3د) + مناقشة (4د)، وB1 = تقديم النفس +
          حديث عن موضوع + حل مشكلة. سجّل إجاباتك ثم قيّم نفسك بالمعايير الأربعة (النطق، السلاسة، القواعد، المفردات).
        </p>
      </div>
      <LazyOralExam />

      {/* قوالب العرض التقديمي الكاملة (اقتراح المرحلة النهائية) */}
      <div className="mt-10">
        <VortragModelle />
      </div>
    </div>
  );
}
