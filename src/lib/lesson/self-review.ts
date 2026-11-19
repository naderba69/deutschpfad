export type SelfReviewRating = "yes" | "partly" | "not-yet";

export interface SelfReviewSummary {
  answered: number;
  yes: number;
  partly: number;
  notYet: number;
  unanswered: number;
}

/** Counts learner-selected reflections only; this is not a score or proficiency estimate. */
export function summarizeSelfReview(
  ratings: readonly (SelfReviewRating | undefined)[],
): SelfReviewSummary {
  const yes = ratings.filter((rating) => rating === "yes").length;
  const partly = ratings.filter((rating) => rating === "partly").length;
  const notYet = ratings.filter((rating) => rating === "not-yet").length;
  const answered = yes + partly + notYet;

  return {
    answered,
    yes,
    partly,
    notYet,
    unanswered: ratings.length - answered,
  };
}
