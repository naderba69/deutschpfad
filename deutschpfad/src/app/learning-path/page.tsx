import type { Metadata } from "next";

import {LearningPathClient} from "@/components/learning-path/learning-path-client";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {TOTAL_LESSONS, TOTAL_UNITS, TOTAL_WORDS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "مسار التعلم — خارطة الطريق من A1 إلى B2",
  description:
    "خارطة طريقك التفاعلية لإتقان الألمانية: 45 وحدة دراسية موزعة على المستويات الأربعة A1 وA2 وB1 وB2 وفق منهجية معهد غوته ومعايير CEFR.",
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

      <LearningPathClient />
    </div>
  );
}
