"use client";

import * as React from "react";
import {CheckCircle2, CircleDashed, CircleHelp} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getAllEvents} from "@/lib/analytics/events";
import {
  getLessonGoalEvidenceStatuses,
  GOAL_EVIDENCE_UPDATED_EVENT,
  type GoalEvidenceStatus,
} from "@/lib/lesson/goal-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Lernziel} from "@/types/lesson";

/** Learning goals are shown with evidence derived from correct task results. */
export function LernzieleSection({
  lernziele,
  lessonId,
}: {
  lernziele: Lernziel[];
  lessonId: string;
}) {
  const [events, setEvents] = React.useState<AnalyticsEvent[] | null>(null);

  React.useEffect(() => {
    let active = true;
    const refresh = async () => {
      const savedEvents = await getAllEvents();
      if (active) setEvents(savedEvents);
    };
    const handleEvidenceUpdate = (event: Event) => {
      const detail = (event as CustomEvent<{lessonId?: string}>).detail;
      if (detail?.lessonId === lessonId) void refresh();
    };

    void refresh();
    window.addEventListener(GOAL_EVIDENCE_UPDATED_EVENT, handleEvidenceUpdate);
    return () => {
      active = false;
      window.removeEventListener(GOAL_EVIDENCE_UPDATED_EVENT, handleEvidenceUpdate);
    };
  }, [lessonId]);

  const statuses =
    events === null ? null : getLessonGoalEvidenceStatuses(lernziele, lessonId, events);
  const hasUnmappedGoal = lernziele.some((goal) => !goal.evidence?.exerciseIds.length);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
          أهداف هذا الدرس ودليل الأداء
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {lernziele.map((ziel, i) => {
            const status = statuses?.[ziel.id] ?? null;
            return (
              <li key={ziel.id} className="flex items-start gap-3 rounded-xl border bg-muted/20 p-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-de text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground">{ziel.ar}</p>
                  <p className="font-de mt-0.5 text-sm text-muted-foreground" dir="ltr" lang="de">
                    {ziel.de}
                  </p>
                  {ziel.evidence?.labelAr ? (
                    <p className="mt-2 text-xs text-muted-foreground">مهمة الدليل: {ziel.evidence.labelAr}</p>
                  ) : null}
                  <GoalEvidenceLabel status={status} />
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
          لا يُسجَّل دليل الهدف بمجرد فتح النشاط أو مشاهدة المحتوى؛ يلزم أداء صحيح في المهمة
          المرتبطة به.
          {hasUnmappedGoal ? " بعض الأهداف لم تُربط بمهمة تقييمية بعد." : ""}
        </p>
      </CardContent>
    </Card>
  );
}

function GoalEvidenceLabel({status}: {status: GoalEvidenceStatus | null}) {
  const iconClass = "h-4 w-4 shrink-0";
  return (
    <div className="mt-2 flex items-center gap-1.5 text-xs" aria-live="polite">
      {status === "evidenced" ? (
        <>
          <CheckCircle2 className={`${iconClass} text-success`} aria-hidden="true" />
          <span className="font-semibold text-success">سُجّل دليل أداء صحيح.</span>
        </>
      ) : status === "pending" ? (
        <>
          <CircleDashed className={`${iconClass} text-muted-foreground`} aria-hidden="true" />
          <span className="text-muted-foreground">لم يُسجّل بعد أداء صحيح في مهمة الدليل.</span>
        </>
      ) : status === "unmapped" ? (
        <>
          <CircleHelp className={`${iconClass} text-amber-600 dark:text-amber-400`} aria-hidden="true" />
          <span className="text-amber-700 dark:text-amber-300">لم تُربط بهذا الهدف مهمة تقييمية بعد.</span>
        </>
      ) : (
        <>
          <CircleDashed className={`${iconClass} text-muted-foreground`} aria-hidden="true" />
          <span className="text-muted-foreground">جارٍ تحميل سجلّ الأداء…</span>
        </>
      )}
    </div>
  );
}
