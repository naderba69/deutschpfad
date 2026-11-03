import type { Metadata } from "next";
import {notFound} from "next/navigation";

import {LessonClient} from "@/components/lesson/lesson-client";
import {LESSONS, getLesson} from "@/data/lessons";

interface LessonPageProps {
  params: Promise<{ lessonId: string }>;
}

/** توليد الصفحات الثابتة لجميع الدروس المتاحة */
export function generateStaticParams() {
  return LESSONS.map((lesson) => ({ lessonId: lesson.id }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = getLesson(lessonId);
  if (!lesson) return { title: "درس غير موجود" };
  return {
    title: `${lesson.titleDe} — ${lesson.titleAr}`,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;
  const lesson = getLesson(lessonId);
  if (!lesson) notFound();

  return <LessonClient lesson={lesson} />;
}
