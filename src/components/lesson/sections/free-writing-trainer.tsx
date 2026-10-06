"use client";

import * as React from "react";
import {PenLine, RotateCcw} from "lucide-react";

import {Button} from "@/components/ui/button";
import {AutoGrowTextarea} from "@/components/shared/auto-grow-textarea";
import type {Lesson} from "@/types/lesson";

/**
 * مسودة كتابة حرة للممارسة والمراجعة الذاتية.
 * لا يُصدر هذا المكوّن درجة آلية ولا يسجل أداءً بوصفه دليلاً على هدف.
 */
export function FreeWritingTrainer({lesson}: {lesson: Lesson}) {
  const [text, setText] = React.useState("");

  const task = React.useMemo(() => {
    if (lesson.id === "a1-14") {
      return "اكتب مسودة قصيرة عن عطلة سابقة: اذكر نشاطاً مع haben وآخر مع sein، ثم راجع اختيارك للمساعد وترتيب Partizip II.";
    }

    const prompts: Record<string, string> = {
      A1: "اكتب 2–3 جمل قصيرة عن موضوع الدرس مستخدماً كلمة أو قاعدة منه.",
      A2: "اكتب 3–4 جمل مترابطة عن موضوع الدرس مستخدماً مفرداته وتراكيبه.",
      B1: "اكتب فقرة قصيرة عن موضوع الدرس، ثم راجع تسلسل الأفكار والتراكيب.",
      B2: "اكتب نصاً موجزاً عن موضوع الدرس، ثم راجع وضوح الحجة والترابط والسجل اللغوي.",
    };
    return prompts[lesson.level] ?? `اكتب مسودة قصيرة عن موضوع الدرس: «${lesson.titleAr}».`;
  }, [lesson.id, lesson.level, lesson.titleAr]);

  const checklist = lesson.id === "a1-14"
    ? [
        "هل اخترت haben أو sein بحسب الفعل ومعناه في المثال، لا اعتماداً على Akkusativ وحده؟",
        "هل وضعت الفعل المساعد المصرف في V2 في الجملة الرئيسية الخبرية؟",
        "هل وضعت Partizip II في نهاية المجال الفعلي في الجملة الرئيسية؟",
      ]
    : [
        "هل أجبت عن كل أجزاء المهمة؟",
        "هل استعملت مفردة أو تركيباً من الدرس في سياق مفهوم؟",
        "هل راجعت ترتيب الكلمات والنهايات وعلامات الترقيم؟",
      ];

  return (
    <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <PenLine className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-sm font-extrabold">مسودة كتابة للمراجعة الذاتية</h4>
          <p className="mt-1 text-sm text-muted-foreground">{task}</p>
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

      <div className="rounded-xl border bg-background/70 p-3">
        <h5 className="text-xs font-bold">قائمة مراجعة ذاتية</h5>
        <ul className="mt-2 list-disc space-y-1 ps-5 text-xs text-muted-foreground">
          {checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

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
