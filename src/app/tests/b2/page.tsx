import type { Metadata } from "next";

import {GoetheB2Exam} from "@/components/tests/goethe-b2-exam";

export const metadata: Metadata = {
  title: "تدريب مستوحى من بنية Goethe B2 — 65/40/75/15 دقيقة",
  description:
    "تدريب تفاعلي مستوحى من بنية Goethe-Zertifikat B2: أقسام القراءة والاستماع والكتابة والتحدث. النتائج تقديرية للتدريب وليست نتيجة رسمية أو حكماً على الجاهزية.",
};

export default function GoetheB2Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          تدريب مستوحى من بنية Goethe-Zertifikat B2
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          تعرض هذه الصفحة أقساماً وأنواع مهام مستوحاة من صيغة الامتحان. هي تدريب غير رسمي؛
          النسب لا تتحول إلى نقاط Goethe ولا تثبت النجاح أو الجاهزية.
        </p>
      </div>
      <GoetheB2Exam />
    </div>
  );
}
