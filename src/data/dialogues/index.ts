import type { LevelCode } from "@/types/curriculum";

import {A1_DIALOGUES} from "./a1";
import {A2_DIALOGUES} from "./a2";
import {B1_DIALOGUES} from "./b1";
import {B2_DIALOGUES} from "./b2";
import type { DailyDialogue, DialogueQuestion, DialogueTurn } from "./types";

export type { DailyDialogue, DialogueQuestion, DialogueTurn };

/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة حوارات الحياة اليومية — 60 حواراً (15 × 4 مستويات)
 *  تفوق كتاب Menschen: محادثة + نطق + ترجمة + أسئلة + «دورك»
 * ═══════════════════════════════════════════════════════════
 */

export const DAILY_DIALOGUES: DailyDialogue[] = [
  ...A1_DIALOGUES,
  ...A2_DIALOGUES,
  ...B1_DIALOGUES,
  ...B2_DIALOGUES,
];

/** حوارات مستوى معيّن */
export function getDialoguesByLevel(level: LevelCode): DailyDialogue[] {
  return DAILY_DIALOGUES.filter((d) => d.level === level);
}

export const DIALOGUE_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];

/** عدد الحوارات لكل مستوى */
export const DIALOGUE_LEVEL_COUNTS: Record<LevelCode, number> = {
  A1: A1_DIALOGUES.length,
  A2: A2_DIALOGUES.length,
  B1: B1_DIALOGUES.length,
  B2: B2_DIALOGUES.length,
};
