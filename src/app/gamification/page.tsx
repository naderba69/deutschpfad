import type { Metadata } from "next";

import {GamificationClient} from "@/components/gamification/gamification-client";

export const metadata: Metadata = {
  title: "التحفيز — نقاط وشارات وتحديات",
  description:
    "نقاط XP ومستويات، شارات إنجاز، شجرة لغة تنمو، تحديات زمنية وتحدي ذاكرة، شهادات PDF، وشخصية معلّمك المفضلة.",
};

export default function GamificationPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مركز التحفيز 🏆
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اجمع النقاط، افتح الشارات، انمِ شجرتك، وتحدَّ نفسك — كل نشاطك يتحول إلى تقدم
          مرئي وتحفيز مستمر.
        </p>
      </div>
      <GamificationClient />
    </div>
  );
}
