import type { Metadata } from "next";

import {LazyLevelTest} from "@/components/tests/lazy/lazy-level-test";

export const metadata: Metadata = {
  title: "محاكاة امتحان Goethe — اختر مستواك",
  description:
    "تدريب تجريبي مستوحى من بنية Goethe-Zertifikat بأي مستوى (A1/A2/B1/B2) — ليس امتحاناً رسمياً ولا يصدر شهادة معتمدة.",
};

const LEVELS = [
  { code: "A1", label: "Start Deutsch 1", ar: "المبتدئ", minutes: 60, color: "#0284c7" },
  { code: "A2", label: "Start Deutsch 2", ar: "ما قبل المتوسط", minutes: 80, color: "#059669" },
  { code: "B1", label: "Zertifikat B1", ar: "المتوسط", minutes: 100, color: "#d97706" },
  { code: "B2", label: "Zertifikat B2", ar: "المتقدم", minutes: 120, color: "#dc2626" },
] as const;

export default function MockExamPage({ searchParams }: { searchParams: { level?: string; adaptive?: string } }) {
  const selected = (searchParams.level ?? "B2").toUpperCase();
  const meta = LEVELS.find((l) => l.code === selected) ?? LEVELS[3];
  const adaptive = searchParams.adaptive === "1";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          محاكاة امتحان Goethe — {meta.code}
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          اختر مستواك وابدأ محاكاة كاملة بتوقيت حقيقي. الأجزاء: قواعد، مفردات، قراءة،
          استماع، كتابة — ثم نتيجة بمعايير غوته (نجاح 60%).
        </p>
      </div>

      {/* اختيار المستوى */}
      <div className="mb-4 flex flex-wrap gap-2">
        {LEVELS.map((l) => (
          <a
            key={l.code}
            href={`/tests/mock?level=${l.code}${adaptive ? "&adaptive=1" : ""}`}
            className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${
              l.code === meta.code ? "text-white" : "bg-background hover:border-primary/50"
            }`}
            style={l.code === meta.code ? { backgroundColor: l.color, borderColor: l.color } : undefined}
          >
            {l.code} · {l.ar}
          </a>
        ))}
      </div>

      {/* الوضع التكيفي */}
      <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
        <p className="flex-1 text-sm">
          <span className="font-bold">الوضع التكيفي:</span> يبدأ بأسهل الأسئلة ويصعد تدريجياً
          حسب أدائك — يقيس مستواك الحقيقي بدقة.
        </p>
        <a
          href={`/tests/mock?level=${meta.code}${adaptive ? "" : "&adaptive=1"}`}
          className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
            adaptive ? "bg-primary text-primary-foreground" : "bg-background border border-primary/40 hover:bg-primary/10"
          }`}
        >
          {adaptive ? "✓ التكيفي مفعّل" : "فعّل الوضع التكيفي"}
        </a>
      </div>

      <LazyLevelTest key={`${meta.code}-${adaptive}`} level={meta.code as "A1" | "A2" | "B1" | "B2"} />
    </div>
  );
}
