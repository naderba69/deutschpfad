/**
 * Keep evidence from transcript-free listening questions separate from answers
 * submitted after the learner has revealed a dialogue transcript.
 */
export function getListeningQuestionTaskId(
  lessonId: string,
  itemId: string,
  questionId: string,
  transcriptWasRevealed: boolean,
): string {
  return transcriptWasRevealed
    ? `listening-transcript:${lessonId}:${itemId}:${questionId}`
    : `listening:${itemId}:${questionId}`;
}

/** Textual dialogue-ordering exposes transcript lines; each dialogue has its own reveal gate. */
export function isDialogueOrderingUnlocked(
  revealedTranscripts: Readonly<Record<string, boolean>>,
  itemId: string,
): boolean {
  return revealedTranscripts[itemId] === true;
}
