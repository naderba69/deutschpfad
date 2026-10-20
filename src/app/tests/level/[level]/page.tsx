import type { Metadata } from "next";
import {notFound} from "next/navigation";

import {LazyLevelTest} from "@/components/tests/lazy/lazy-level-test";
import {LEVELS} from "@/lib/constants/curriculum";
import type { TestLevel } from "@/types/test";

export const metadata: Metadata = {
  title: "اختبار نهاية المستوى — Goethe-Zertifikat",
  description: "اختبار نهاية مستوى بصيغة Goethe-Zertifikat: قراءة + استماع + قواعد + كتابة بتوقيت حقيقي.",
};

interface Props {
  params: { level: string };
}

export function generateStaticParams() {
  return LEVELS.map((l) => ({ level: l.code.toLowerCase() }));
}

const VALID: TestLevel[] = ["A1", "A2", "B1", "B2"];

export default function LevelTestPage({ params }: Props) {
  const level = params.level.toUpperCase() as TestLevel;
  if (!VALID.includes(level)) notFound();
  const meta = LEVELS.find((l) => l.code === level);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          اختبار نهاية مستوى {level}
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          {meta?.description} — أربعة أقسام بتوقيت حقيقي (Lesen، Hören، Grammatik & Wortschatz،
          Schreiben). يُسلَّم كل قسم تلقائياً عند انتهاء وقته.
        </p>
      </div>
      <LazyLevelTest level={level} />
    </div>
  );
}
