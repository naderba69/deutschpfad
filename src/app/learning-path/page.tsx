import type { Metadata } from "next";

import {LearningPathClient} from "@/components/learning-path/learning-path-client";
import {LangDe} from "@/components/shared/lang-de";
import {Badge} from "@/components/ui/badge";
import {TOTAL_LESSONS, TOTAL_UNITS, TOTAL_WORDS} from "@/lib/constants/curriculum";

export const metadata: Metadata = {
  title: "مسار التعلم — خارطة الطريق من A1 إلى B2",
  description: `مسار تدريبي تفاعلي يضم ${TOTAL_UNITS} وحدة و${TOTAL_LESSONS} درساً ضمن أربع مراحل A1–B2. المحتوى مستلهم من أوصاف CEFR ولا يمثل اعتماداً أو تقييماً معيارياً.`,
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
          أربع مراحل تدريبية A1–B2، {TOTAL_UNITS} وحدة، {TOTAL_LESSONS} درساً، وبنك مفردات يضم نحو {TOTAL_WORDS.toLocaleString("ar-EG")} مدخل. إكمال اختبار الوحدة يفتح الخطوة التالية داخل المسار وفق سياسة التطبيق؛ لا يثبت الإتقان أو اعتماد CEFR.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-gold/40 bg-gold/10 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-gold-strong">📅 تنظيم التدريب اختياري وقابل للتعديل</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              يمكنك الاستفادة من نموذج جدول تدريبي بحسب وقتك وخبرتك؛ لا يحدد مدة ثابتة للدروس ولا يضمن بلوغ مستوى أو اجتياز اختبار.
            </p>
          </div>
          <a
            href="/tests/plan-b2"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-sm font-extrabold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            اعرض مثالاً لجدول التدريب ←
          </a>
        </div>
      </div>

      <LearningPathClient />
    </div>
  );
}
