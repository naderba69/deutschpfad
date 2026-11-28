"use client";

import Link from "next/link";
import * as React from "react";

import {getLesson} from "@/data/lessons";
import {getRelatedResources} from "@/data/lessons/related-resources";
import {LESSON_SECTIONS} from "@/components/lesson/lesson-sections";
import {likelyHasInterleavedReview} from "@/lib/lesson/review-generator";
import {loadCompletedSections} from "@/lib/session/section-completion";
import {buildSessionView, type SessionView, type StageItem} from "@/lib/session/view";
import {visibleSectionDefs} from "@/lib/session/visible-sections";

const STATE_LABEL: Record<StageItem["state"], string> = {
  current: "الحالية",
  done: "منجزة",
  locked: "مقفلة",
  skipped: "متخطاة",
};

const SECTION_LABEL: Record<string, string> = Object.fromEntries(
  LESSON_SECTIONS.map((d) => [d.id, d.label]),
);

const PROOF_LABEL = {
  exercise: "تُثبت بنتيجة التمرين",
  acknowledge: "تُثبت بتأكيدك",
} as const;

type Loaded =
  | {status: "loading"}
  | {status: "failed"}
  | {status: "ready"; view: SessionView};

export function SessionClient({lessonId}: {lessonId: string}) {
  const [loaded, setLoaded] = React.useState<Loaded>({status: "loading"});

  React.useEffect(() => {
    let cancelled = false;
    const lesson = getLesson(lessonId);
    if (!lesson) {
      setLoaded({status: "failed"});
      return;
    }
    void loadCompletedSections(lessonId).then((read) => {
      if (cancelled) return;
      if (!read.ok) {
        setLoaded({status: "failed"});
        return;
      }
      const available = visibleSectionDefs(
        lesson,
        likelyHasInterleavedReview(lesson),
        getRelatedResources(lesson.id).length > 0,
      ).map((d) => d.id);
      setLoaded({
        status: "ready",
        view: buildSessionView(lessonId, {
          availableSectionIds: available,
          completedSectionIds: read.ids,
        }),
      });
    });
    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  if (loaded.status === "loading") {
    return <p className="text-sm text-muted-foreground">جارٍ تحميل تقدّم الحصة…</p>;
  }
  if (loaded.status === "failed") {
    return (
      <p role="alert" className="rounded-xl border border-warning/40 bg-warning/10 p-4 text-sm">
        تعذّر قراءة تقدّمك المحفوظ، فلا نعرض حالة الحصة. أعد تحميل الصفحة أو تحقق من إعدادات المتصفح.
      </p>
    );
  }

  const {view} = loaded;
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        مدة الحصة {view.totalMinutes} دقيقة. لا تنتقل إلى مرحلة تالية قبل إنهاء المرحلة الحالية.
      </p>
      {view.complete ? (
        <p className="rounded-xl border border-success/40 bg-success/10 p-4 text-sm font-bold">
          أنهيت كل مراحل الحصة المتوفرة.
        </p>
      ) : null}
      <ol className="space-y-3">
        {view.stages.map((stage, i) => (
          <li
            key={stage.id}
            data-stage={stage.id}
            data-state={stage.state}
            className="rounded-2xl border bg-card p-4 shadow-soft"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-extrabold">
                {i + 1}. {stage.labelAr}{" "}
                <span className="text-xs font-normal text-muted-foreground" dir="ltr">
                  ({stage.labelDe})
                </span>
              </h2>
              <span className="text-xs font-bold text-muted-foreground">
                {stage.minutes} د · {STATE_LABEL[stage.state]}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{stage.purposeAr}</p>
            {stage.sections.length === 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">لا يوجد قسم لهذه المرحلة في هذا الدرس.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {stage.sections.map((s) => (
                  <li key={s.sectionId} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span>
                      {s.completed ? "" : "⬜ "}
                      {SECTION_LABEL[s.sectionId] ?? s.sectionId}{" "}
                      <span className="text-xs text-muted-foreground">— {PROOF_LABEL[s.proof]}</span>
                    </span>
                    {stage.state !== "locked" ? (
                      <Link href={s.href} className="font-bold text-primary underline-offset-4 hover:underline">
                        افتح القسم
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
