import type { Metadata } from "next";

import {LazyPlacementDiagnostic, LazyQuickPlacement} from "@/components/tests/lazy/lazy-placement-diagnostic";

export const metadata: Metadata = {
  title: "تحديد المستوى — سريع أو تشخيصي",
  description:
    "حدد مستواك في الألمانية: اختبار سريع (15 سؤالاً) أو تشخيصي مفصل لكل مهارة (قواعد، مفردات، قراءة، استماع، كتابة).",
};

interface Props {
  searchParams: { mode?: string };
}

export default function PlacementPage({ searchParams }: Props) {
  const quick = searchParams?.mode === "quick";

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {quick ? "اختبار تحديد المستوى السريع" : "تحديد المستوى التشخيصي"}
        </h1>
        <p className="mt-2 max-w-xl text-balance text-muted-foreground">
          {quick
            ? "15 سؤالاً سريعاً (5 من A1 + 5 من A2 + 5 من B1) تعطيك نقطة البداية الصحيحة — الأسئلة تختار عشوائياً في كل مرة."
            : "خمس مهارات تُختبر منفصلة: قواعد، مفردات، قراءة، استماع، كتابة. الخوارزمية التكيفية تبدأ من A1 وتتقدم تلقائياً — فتحصل على مستوى دقيق لكل مهارة على حدة."}
        </p>
      </div>
      {quick ? <LazyQuickPlacement /> : <LazyPlacementDiagnostic />}
    </div>
  );
}
