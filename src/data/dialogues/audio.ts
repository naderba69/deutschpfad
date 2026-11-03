import type { DailyDialogue } from "./types";

const AUDIO_LEVELS = new Set(["A1", "A2", "B1", "B2"]);

/**
 * Return the conventional MP3 path for a dialogue turn unless explicitly disabled.
 * An explicit null suppresses a known text/audio mismatch so SpeakButton
 * falls back to the current German text using the browser's SpeechSynthesis.
 * This does not assert that other MP3 assets have been human-verified.
 * @param turnNumber one-based dialogue turn number
 */
export function dialogueTurnAudioSrc(dialogue: DailyDialogue, turnNumber: number): string | undefined {
  const turn = dialogue.turns[turnNumber - 1];
  if (!turn || !AUDIO_LEVELS.has(dialogue.level)) return undefined;
  if (turn.audioSrc === null) return undefined;
  if (typeof turn.audioSrc === "string") return turn.audioSrc;
  return `/audio/dialogues-${dialogue.level.toLowerCase()}/${dialogue.id}-${turnNumber}.mp3`;
}
