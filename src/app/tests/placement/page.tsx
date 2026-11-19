import type { Metadata } from "next";

import {LazyPlacementDiagnostic, LazyQuickPlacement} from "@/components/tests/lazy/lazy-placement-diagnostic";

export const metadata: Metadata = {
  title: "تحديد المستوى — سريع أو تشخيصي",
  description:
    "حدد مستواك في الألمانية: اختبار سريع (15 سؤالاً) أو تشخيصي مفصل لكل مهارة (قواعد، مفردات، قراءة، استماع، كتابة).",
};

interface Props {
  searchParams: Promise<{ mode?: string }>;
}

export default async function PlacementPage({ searchParams }: Props) {
  const { mode } = await searchParams;
  const quick = mode === "quick";

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {quick ? "اختبار تحديد المستوى السريع" : "تحديد المستوى التشخيصي"}
        </h1>
        <p className="mt-2 max-w-xl text-balance text-muted-foreground">
          {quick
            ? "15 سؤالاً قصيراً (5 من A1 + 5 من A2 + 5 من B1) تساعدك على اختيار نقطة بداية مبدئية. العينة محدودة وتتغير الأسئلة بين المحاولات؛ النتيجة ليست تحديداً معيارياً للمستوى."
            : "تدريب تشخيصي قصير يغطي القواعد والمفردات والقراءة والاستماع والكتابة، ويتدرج بين مستويات داخلية. تقدير كل مهارة تقريبي ومبني على عينة محدودة؛ الكتابة لا تُقيّم من حيث الدقة والجودة، والنتيجة ليست اختبار CEFR رسمياً."}
        </p>
      </div>
      {quick ? <LazyQuickPlacement /> : <LazyPlacementDiagnostic />}
    </div>
  );
}
