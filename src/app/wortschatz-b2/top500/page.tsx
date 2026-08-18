import type { Metadata } from "next";

import {B2Top500} from "@/components/tests/b2-top500";

export const metadata: Metadata = {
  title: "Top 500 — أهم مفردات Goethe-B2 للامتحان",
  description:
    "أهم 500 كلمة وتركيباً في امتحان Goethe-Zertifikat B2، مرتبة حسب المواضيع الـ18 الرسمية ودرجة التواتر — قابلة للفلترة والبحث.",
};

export default function Top500Page() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Top 500 — مفردات الامتحان
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          أهم {`${"500"} `}كلمة وتركيباً في امتحان Goethe-Zertifikat B2، منتقاة من نصوص
          وأسئلة الامتحان الفعلية. صفِّ حسب الموضوع الرسمي أو درجة التواتر:
          🔥 «لا غنى عنها» (167 كلمة) يجب أن تكون في ذاكرتك النشطة قبل الامتحان.
        </p>
      </div>
      <B2Top500 />
    </div>
  );
}
