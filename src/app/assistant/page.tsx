import type { Metadata } from "next";

import {LazyAssistantClient} from "@/components/tests/lazy/lazy-assistant";
import type { LessonContext } from "@/components/assistant/assistant-client";
import {getLesson} from "@/data/lessons";

export const metadata: Metadata = {
  title: "المعلّم الافتراضي — محادثة ذكية",
  description:
    "محادثة حرة مع معلّم ألمانية ذكي: اسأل، صحّح، ولّد جمل — مدعوم بـ Gemini Flash وGroq وOpenRouter مع تخزين مؤقت وسقف يومي مجاني.",
};

interface AssistantPageProps {
  searchParams: { lesson?: string };
}

/**
 * صفحة المعلّم الافتراضي — تدعم سياق درس عبر ?lesson=<id>
 * (عند القادم من زر «اسأل المعلّم عن هذا الدرس»)
 */
export default async function AssistantPage({ searchParams }: AssistantPageProps) {
  let lessonContext: LessonContext | undefined;

  const lessonId = searchParams?.lesson;
  if (lessonId) {
    const lesson = getLesson(lessonId);
    if (lesson) {
      lessonContext = {
        id: lesson.id,
        titleDe: lesson.titleDe,
        titleAr: lesson.titleAr,
        summary: lesson.summary,
        theoryTitles: lesson.theory.map((t) => t.titleAr),
      };
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          المعلّم الافتراضي
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          محادثة حرة بالعربية — يساعدك في القواعد والنطق والترجمة وتوليد الجمل. عند غياب
          المفاتيح تختفي هذه الصفحة تلقائياً من الاستخدام (بدون أي تأثير على بقية المنصة).
        </p>
      </div>
      <LazyAssistantClient lessonContext={lessonContext} />
    </div>
  );
}
