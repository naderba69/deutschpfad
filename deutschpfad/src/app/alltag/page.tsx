import type { Metadata } from "next";

import {EverydayPhrases} from "@/components/alltag/everyday-phrases";
import {EVERYDAY_PHRASES} from "@/data/supplemental/content";

export const metadata: Metadata = {
  title: "ألمانية الحياة اليومية",
  description:
    "عبارات عملية غير أكاديمية للألمان في المواقف اليومية: المتجر، الشارع، العمل، والردود المهذبة.",
};

export default function AlltagPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          ألمانية الحياة اليومية
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {EVERYDAY_PHRASES.length} عبارة عملية يقولها الألمان فعلاً — ليست من الكتاب، بل
          من الشارع والمتجر والعمل.
        </p>
      </div>
      <EverydayPhrases />
    </div>
  );
}
