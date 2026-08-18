import type { Metadata } from "next";

import {LearningPathClient} from "@/components/learning-path/learning-path-client";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {TOTAL_LESSONS, TOTAL_UNITS, TOTAL_WORDS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "مسار التعلم — خارطة الطريق من A1 إلى B2",
  description:
    "خارطة طريقك التفاعلية لإتقان الألمانية: 46 وحدة دراسية و48 درساً موزعة على المستويات الأربعة A1 وA2 وB1 وB2 وفق منهجية معهد غوته ومعايير CEFR.",
};

/**
 * صفحة خارطة الطريق التفاعلية
 */
export default function LearningPathPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      {/* ترويسة الصفحة */}
      <div className="mb-10 flex flex-col items-start gap-4">
        <Badge variant="gold" className="gap-2 px-3 py-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-current" />
          خارطة الطريق التفاعلية
        </Badge>
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          رحلتك كاملة: من <LangDe className="font-extrabold">A1</LangDe> حتى{" "}
          <LangDe className="font-extrabold">B2</LangDe>
        </h1>
        <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          أربعة مستويات معتمدة دولياً، {TOTAL_UNITS} وحدة دراسية، {TOTAL_LESSONS}+ درساً
          تفاعلياً، وحصيلة مفرداتية تزيد عن {TOTAL_WORDS.toLocaleString("ar-EG")} كلمة.
          الوحدات تُفتح تباعاً: أتقن وحدة لفتح التي تليها، وأكمل 80% من المستوى للانتقال للتالي.
        </p>
      </div>

      {/* ═══ المرحلة 4: بوابة الخطة الزمنية — توضح الساعات الإرشادية وتربط بخطة 12 شهراً ═══ */}
      <div className="mb-8 rounded-xl border border-gold/40 bg-gold/10 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-gold-strong">📅 الخطة الزمنية الواقعية</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              الدروس والتمارين والمراجعة معاً ≈ <b>550 ساعة فعلية</b> (ضمن نطاق Goethe الموصى به
              للدراسة الذاتية) — بوتيرة 90 دقيقة يومياً تصل إلى B2 في ~12 شهراً.
            </p>
          </div>
          <a
            href="/tests/plan-b2"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-extrabold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            افتح خطة 12 شهراً ←
          </a>
        </div>
      </div>

      <LearningPathClient />
    </div>
  );
}
