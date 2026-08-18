import type { LevelCode } from "@/types/curriculum";

import {A1_STORIES} from "./a1";
import {A1_EXTRA_STORIES} from "./a1-extra";
import {A2_STORIES} from "./a2";
import {A2_EXTRA_STORIES} from "./a2-extra";
import {B1_STORIES} from "./b1";
import {B1_EXTRA_STORIES} from "./b1-extra";
import {B2_STORIES} from "./b2";
import {B2_EXTRA_STORIES} from "./b2-extra";
import {STORIES_WAVE2} from "./wave2";
import type { InteractiveStory, StoryChoice, StoryQuestion, StorySegment } from "./types";

export type { InteractiveStory, StoryChoice, StoryQuestion, StorySegment };

/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة القصص التفاعلية الكاملة 📖 (أسلوب Duolingo Stories)
 *  — 48 قصة موزعة أكاديمياً على المستويات الأربعة —
 *  · A1: 13 قصة — مفردات يومية، مضارع، sein/haben
 *  · A2: 13 قصة — Perfekt، الصحة، السفر، المطعم
 *  · B1: 11 قصة — جمل ثانوية، Konjunktiv II، Passiv
 *  · B2: 11 قصة — Konjunktiv I، لغة رسمية/أكاديمية
 *  كل قصة: نص متدرج + ترجمة + نطق + أسئلة فهم + اختيارات مسار
 * ═══════════════════════════════════════════════════════════
 */

const A1_ALL = [...A1_STORIES, ...A1_EXTRA_STORIES, ...STORIES_WAVE2.filter((s) => s.level === "A1")];
const A2_ALL = [...A2_STORIES, ...A2_EXTRA_STORIES, ...STORIES_WAVE2.filter((s) => s.level === "A2")];
const B1_ALL = [...B1_STORIES, ...B1_EXTRA_STORIES, ...STORIES_WAVE2.filter((s) => s.level === "B1")];
const B2_ALL = [...B2_STORIES, ...B2_EXTRA_STORIES, ...STORIES_WAVE2.filter((s) => s.level === "B2")];

export const INTERACTIVE_STORIES: InteractiveStory[] = [...A1_ALL, ...A2_ALL, ...B1_ALL, ...B2_ALL];

/** قصص مستوى معيّن (مرتبة بالترتيب الأكاديمي) */
export function getStoriesByLevel(level: LevelCode): InteractiveStory[] {
  return INTERACTIVE_STORIES.filter((s) => s.level === level);
}

/** ترتيب المستويات (للمكتبة المتدرجة) */
export const STORY_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];

/** عدد القصص لكل مستوى (للواجهة) */
export const STORY_LEVEL_COUNTS: Record<LevelCode, number> = {
  A1: A1_ALL.length,
  A2: A2_ALL.length,
  B1: B1_ALL.length,
  B2: B2_ALL.length,
};
