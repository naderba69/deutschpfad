import type { Metadata } from "next";
import {notFound} from "next/navigation";

import {LevelHub} from "@/components/learning-path/level-hub";
import {LEVELS} from "@/lib/constants/curriculum";
import {getLessonMetaByLevel} from "@/data/lessons/meta";

interface Props {
  params: { level: string };
}

export function generateStaticParams() {
  return ["a1", "a2", "b1", "b2"].map((level) => ({ level }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const code = params.level.toUpperCase();
  const meta = LEVELS.find((l) => l.code === code);
  if (!meta) return { title: "المستوى غير موجود" };
  return {
    title: `مستوى ${code} — ${meta.titleAr}`,
    description: `مركز تعلم مستوى ${code}: دروس مرتبة، مفردات، اختبارات، ومسار كامل نحو ${meta.titleDe}.`,
  };
}

export default function LevelPage({ params }: Props) {
  const code = params.level.toUpperCase() as "A1" | "A2" | "B1" | "B2";
  const meta = LEVELS.find((l) => l.code === code);
  if (!meta) notFound();

  const lessons = getLessonMetaByLevel(code);
  if (lessons.length === 0) notFound();

  return <LevelHub level={meta} lessons={lessons} />;
}
