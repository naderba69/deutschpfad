import type { Metadata } from "next";

import {SessionClient} from "@/components/session/session-client";

export const metadata: Metadata = {
  title: "حصة اليوم — DeutschPfad",
  description: "حصة منظمة في 10 مراحل، مع بوابات تمنع الانتقال قبل إكمال المرحلة الحالية.",
};

/** التجربة الأولى: درس A1-01 فقط. */
const PILOT_LESSON_ID = "a1-01";

export default function SessionPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">حصة اليوم</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          تجربة أولى على الدرس A1-01. تعرض الصفحة المراحل وحالتها، وتفتح كل قسم داخل الدرس.
        </p>
      </div>
      <SessionClient lessonId={PILOT_LESSON_ID} />
    </div>
  );
}
