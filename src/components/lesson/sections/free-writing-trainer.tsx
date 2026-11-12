"use client";

import * as React from "react";
import {PenLine, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import {SelfReviewRatings} from "@/components/lesson/sections/self-review-ratings";
import type {Lesson} from "@/types/lesson";

/**
 * مسودة كتابة حرة للممارسة والمراجعة الذاتية.
 * لا يُصدر هذا المكوّن درجة آلية ولا يسجل أداءً بوصفه دليلاً على هدف.
 */
export function FreeWritingTrainer({lesson}: {lesson: Lesson}) {
  const [text, setText] = React.useState("");

  const writingGuide = React.useMemo(() => {
    if (lesson.id === "a1-14") {
      return {
        task: "اكتب 3–4 جمل قصيرة عن عطلة سابقة: اذكر نشاطاً مع haben وآخر مع sein، ثم راجع اختيار المساعد وترتيب Partizip II.",
        target: "نحو 25–45 كلمة (دليل تقريبي، وليس شرط نجاح)",
        checklist: [
          "هل اخترت haben أو sein بحسب الفعل ومعناه في المثال، لا اعتماداً على Akkusativ وحده؟",
          "هل وضعت الفعل المساعد المصرف في V2 في الجملة الرئيسية الخبرية؟",
          "هل وضعت Partizip II في نهاية المجال الفعلي في الجملة الرئيسية؟",
        ],
      };
    }

    const guides = {
      A1: {
        task: `اكتب رسالة قصيرة أو 3–4 جمل عن «${lesson.titleAr}». اذكر معلومة أساسية عن نفسك أو موقفاً يومياً، واستخدم كلمات مألوفة من الدرس.`,
        target: "نحو 20–40 كلمة أو 3–4 جمل قصيرة",
        checklist: ["هل كتبت جُملاً بسيطة مفهومة؟", "هل ذكرت المعلومة المطلوبة عن الموضوع؟", "هل راجعت الكلمات والأحرف الكبيرة والنقطة؟"],
      },
      A2: {
        task: `اكتب رسالة شخصية قصيرة عن «${lesson.titleAr}»: صف موقفاً مألوفاً، واذكر ما تحتاجه أو تفضّله وسبباً بسيطاً.`,
        target: "نحو 40–60 كلمة",
        checklist: ["هل أوضحت غرض الرسالة أو الموقف؟", "هل أضفت تفصيلاً وسبباً بسيطاً؟", "هل رتبت الجمل واستعملت تحية/خاتمة إذا ناسبت الرسالة؟"],
      },
      B1: {
        task: `اكتب بريداً أو مساهمة قصيرة في منتدى عن «${lesson.titleAr}»: اشرح موقفاً أو تجربة، واذكر رأيك مع سبب أو مثال، ثم قدّم اقتراحاً أو خلاصة.`,
        target: "نحو 80–100 كلمة",
        checklist: ["هل لبّيت كل نقاط المهمة؟", "هل دعمت رأيك بسبب أو مثال؟", "هل رتبت النص إلى بداية ومتن وخاتمة مناسبة؟", "هل راجعت الروابط والتصريف والترقيم؟"],
      },
      B2: {
        task: `اكتب نصاً منظماً عن «${lesson.titleAr}»: وضّح موقفك، وادعمه بحجج وأمثلة، ثم ناقش جانباً مقابلاً واختم باستنتاج.`,
        target: "نحو 120–150 كلمة (تدريب عام، وليس محاكاة امتحان)",
        checklist: ["هل حددت القضية وموقفك بوضوح؟", "هل دعمت الحجج بأمثلة أو تفسير؟", "هل عرضت جانباً مقابلاً أو قيداً؟", "هل كان الترابط والسجل اللغوي مناسبين؟", "هل راجعت البنية والإملاء وعلامات الترقيم؟"],
      },
    } satisfies Record<Lesson["level"], {task: string; target: string; checklist: string[]}>;
    return guides[lesson.level];
  }, [lesson.id, lesson.level, lesson.titleAr]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <PenLine className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-sm font-extrabold">مسودة كتابة للمراجعة الذاتية</h4>
          <p className="mt-1 text-sm text-muted-foreground">{writingGuide.task}</p>
          <p className="mt-1 text-xs font-semibold text-primary">حجم مقترح: {writingGuide.target}</p>
        </div>
      </div>

      <AutoGrowTextarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="اكتب مسودتك بالألمانية…"
        dir="ltr"
        aria-label="مسودة كتابة للمراجعة الذاتية"
        minHeight={112}
        maxHeight={240}
        className="text-sm"
      />

      <div className="flex items-center justify-between text-xs text-muted-foreground" aria-live="polite">
        <span>عدد الكلمات التقريبي:</span>
        <strong>{wordCount}</strong>
      </div>

      <SelfReviewRatings
        id={`writing-review-${lesson.id}`}
        title="قائمة مراجعة ذاتية"
        items={writingGuide.checklist}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
          هذه مسودة تدريبية: لا تُصحَّح آلياً، ولا تنتج حكماً Goethe أو CEFR، ولا تُسجَّل دليلاً على تحقق هدف. استخدم المهام المصححة المحددة إذا أردت مراجعة إجاباتها.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setText("")}
          disabled={text.length === 0}
          className="gap-1.5"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          مسح المسودة
        </Button>
      </div>
    </div>
  );
}
