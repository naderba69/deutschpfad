import type { Metadata } from "next";

import {UmschreibungenClient} from "@/components/umschreiben/umschreibungen-client";
import {TOTAL_UMSCHREIB, UMSCHREIB_TYPEN} from "@/data/umschreibungen";

export const metadata: Metadata = {
  title: "تدريب تحويل الجمل الألمانية — B1/B2",
  description:
    "تمارين منصة على تحويل الجمل والتراكيب الألمانية بمستويي B1 وB2 مع تصحيح فوري. ليست قسماً نحوياً في امتحان Goethe B2 ولا تحاكي أسئلته الرسمية."
};

export default function UmschreibungenPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب تحويل الجمل (Umschreibungen)
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          {TOTAL_UMSCHREIB} تمريناً على {UMSCHREIB_TYPEN.length} نوعاً من تحويل الجمل والتراكيب، من إعداد المنصة للتدرب على الألمانية في نطاق B1–B2. هذه ليست قسماً من امتحان Goethe B2 ولا ندّعي أن الأنواع تظهر فيه حرفياً. لكل نوع شرح ومثال ثم تمرين مع تصحيح وإجابة مقترحة.
        </p>
      </div>
      <UmschreibungenClient />
    </div>
  );
}
