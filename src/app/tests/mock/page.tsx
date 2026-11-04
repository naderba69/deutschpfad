import type { Metadata } from "next";

import {LazyLevelTest} from "@/components/tests/lazy/lazy-level-test";

export const metadata: Metadata = {
  title: "اختبار مستوى تدريبي — DeutschPfad",
  description:
    "مجموعة أسئلة قصيرة للممارسة الذاتية في مستويات A1 إلى B2. النتيجة والمستوى تقديريان ولا يعادلان امتحاناً رسمياً أو شهادة.",
};

const LEVELS = [
  { code: "A1", label: "Start Deutsch 1", ar: "المبتدئ", minutes: 60, color: "#0284c7" },
  { code: "A2", label: "Start Deutsch 2", ar: "ما قبل المتوسط", minutes: 80, color: "#059669" },
  { code: "B1", label: "Zertifikat B1", ar: "المتوسط", minutes: 100, color: "#d97706" },
  { code: "B2", label: "Zertifikat B2", ar: "المتقدم", minutes: 120, color: "#dc2626" },
] as const;

export default function MockExamPage({ searchParams }: { searchParams: { level?: string } }) {
  const selected = (searchParams.level ?? "B2").toUpperCase();
  const meta = LEVELS.find((l) => l.code === selected) ?? LEVELS[3];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          اختبار تدريبي للمستوى {meta.code}
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اختر المستوى للتدرّب على عينة من أسئلة القواعد والمفردات والقراءة والاستماع والكتابة.
          هذه ليست محاكاة كاملة؛ النتيجة مؤشر تقريبي لهذه العينة وليست درجة Goethe أو حكماً دقيقاً على مستواك.
        </p>
      </div>

      {/* اختيار المستوى */}
      <div className="mb-4 flex flex-wrap gap-2">
        {LEVELS.map((l) => (
          <a
            key={l.code}
            href={`/tests/mock?level=${l.code}`}
            className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${
              l.code === meta.code ? "text-white" : "bg-background hover:border-primary/50"
            }`}
            style={l.code === meta.code ? { backgroundColor: l.color, borderColor: l.color } : undefined}
          >
            {l.code} · {l.ar}
          </a>
        ))}
      </div>

      <LazyLevelTest key={meta.code} level={meta.code as "A1" | "A2" | "B1" | "B2"} />
    </div>
  );
}
