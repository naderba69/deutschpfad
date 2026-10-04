import type {AnalyticsEvent} from "@/types/analytics";
import type {Lernziel} from "@/types/lesson";

/** Browser event used to refresh goal evidence after an assessed exercise result. */
export const GOAL_EVIDENCE_UPDATED_EVENT = "deutschpfad:goal-evidence-updated";

export type GoalEvidenceStatus = "unmapped" | "pending" | "evidenced";

/**
 * Derive a goal's evidence state from persisted, correct exercise-result events.
 * Viewing/opening an exercise is deliberately not considered evidence.
 */
export function getGoalEvidenceStatus(
  goal: Lernziel,
  lessonId: string,
  events: readonly AnalyticsEvent[],
): GoalEvidenceStatus {
  const evidence = goal.evidence;
  if (!evidence || evidence.exerciseIds.length === 0) return "unmapped";

  const correctlyCompleted = new Set(
    events
      .filter(
        (event) =>
          event.type === "exercise-result" &&
          event.lessonId === lessonId &&
          event.correct,
      )
      .map((event) => (event.type === "exercise-result" ? event.exerciseId : "")),
  );

  const hasEvidence =
    evidence.completion === "all-correct"
      ? evidence.exerciseIds.every((id) => correctlyCompleted.has(id))
      : evidence.exerciseIds.some((id) => correctlyCompleted.has(id));

  return hasEvidence ? "evidenced" : "pending";
}

export function getLessonGoalEvidenceStatuses(
  goals: readonly Lernziel[],
  lessonId: string,
  events: readonly AnalyticsEvent[],
): Record<string, GoalEvidenceStatus> {
  return Object.fromEntries(
    goals.map((goal) => [goal.id, getGoalEvidenceStatus(goal, lessonId, events)]),
  );
}
