import type { Metadata } from "next";

import {GoetheB2Exam} from "@/components/tests/goethe-b2-exam";

export const metadata: Metadata = {
  title: "محاكاة امتحان Goethe B2 الرسمية — 65/40/75/15 دقيقة",
  description:
    "محاكاة كاملة لامتحان Goethe-Zertifikat B2 بالصيغة الرسمية 2019+: قراءة 65 دقيقة (30 سؤالاً)، استماع 40 دقيقة (30 سؤالاً)، كتابة 75 دقيقة (مهمتان)، تحدث 15 دقيقة — بنجاح 60/100 لكل مكوّن.",
};

export default function GoetheB2Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          محاكاة Goethe-Zertifikat B2
        </h1>
        <p className="mt-2 max-w-3xl text-balance text-muted-foreground">
          نسخة طبق الأصل من هيكل الامتحان الرسمي (صيغة 2019+): الأجزاء، المدد، عدد
          الأسئلة، وأنواع المهام (مطابقة، فقرات ناقصة، Richtig/Falsch، مقال، لائحة…).
          النجاح من 60 في كل مكوّن على حدة — تماماً كما في الامتحان الحقيقي.
        </p>
      </div>
      <GoetheB2Exam />
    </div>
  );
}
