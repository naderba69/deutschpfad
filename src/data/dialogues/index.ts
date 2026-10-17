import type { LevelCode } from "@/types/curriculum";

import {A1_DIALOGUES} from "./a1";
import {A2_DIALOGUES} from "./a2";
import {B1_DIALOGUES} from "./b1";
import {B2_DIALOGUES} from "./b2";
import type { DailyDialogue, DialogueQuestion, DialogueTurn } from "./types";
import { balanceChoiceTree } from "@/lib/tests/balance-options";

export type { DailyDialogue, DialogueQuestion, DialogueTurn };

/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة حوارات الحياة اليومية — 60 حواراً (15 × 4 مستويات)
 *  تفوق كتاب Menschen: محادثة + نطق + ترجمة + أسئلة + «دورك»
 * ═══════════════════════════════════════════════════════════
 */

/**
 * الحوارات كما تُعرض: **مواضع الإجابات الصحيحة موزّعة** (الدفعة 70).
 *
 * القياس قبلها: 153/182 إجابة في الخيار الأول (84%)، وحوارات B1 وB2 كلها
 * 100% في الموضع نفسه — فيُجتاز «دورك» باختيار الأول دائماً. الموازنة تجري
 * هنا عند حدّ التصدير لا داخل ملفات المحتوى الأربعة، لسببين:
 *   · ملفات الحوارات مسجّلة في حارس سقف الحجم (621/611 سطراً) فالدين لا يُزاد،
 *   · المحتوى يبقى بترتيبه التحريري، وما يُعرض هو النسخة الموزّعة.
 * `balanceChoiceTree` إعادة ترتيب محضة: لا نصّ خيار ولا شرح يتغيّر (يحرسه
 * `src/lib/tests/answer-position.test.ts` بمقارنة النسخة الخام بالموزّعة).
 */
const BALANCED_A1 = A1_DIALOGUES.map((dialogue, index) => balanceChoiceTree(dialogue, index + 1));
const BALANCED_A2 = A2_DIALOGUES.map((dialogue, index) => balanceChoiceTree(dialogue, index + 2));
const BALANCED_B1 = B1_DIALOGUES.map((dialogue, index) => balanceChoiceTree(dialogue, index + 3));
const BALANCED_B2 = B2_DIALOGUES.map((dialogue, index) => balanceChoiceTree(dialogue, index + 4));

export const DAILY_DIALOGUES: DailyDialogue[] = [
  ...BALANCED_A1,
  ...BALANCED_A2,
  ...BALANCED_B1,
  ...BALANCED_B2,
];

/** حوارات مستوى معيّن */
export function getDialoguesByLevel(level: LevelCode): DailyDialogue[] {
  return DAILY_DIALOGUES.filter((d) => d.level === level);
}

export const DIALOGUE_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];

/** عدد الحوارات لكل مستوى */
export const DIALOGUE_LEVEL_COUNTS: Record<LevelCode, number> = {
  A1: BALANCED_A1.length,
  A2: BALANCED_A2.length,
  B1: BALANCED_B1.length,
  B2: BALANCED_B2.length,
};
