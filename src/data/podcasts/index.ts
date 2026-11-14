import { balanceChoiceTree } from "@/lib/tests/balance-options";
import type { LevelCode } from "@/types/curriculum";

import { PODCASTS_PART_1 } from "./episodes-1";
import { PODCASTS_PART_2 } from "./episodes-2";
import type { PodcastEpisode, PodcastQuestion } from "./types";

export type { PodcastEpisode, PodcastQuestion };

/**
 * ═══════════════════════════════════════════════════════════
 *  بودكاست تعليمي مبسّط 🎧 — لكل مستوى
 *  نصوص مسموعة قصيرة (تُقرأ بـ TTS ألماني) + أسئلة فهم:
 *  · A1: مواقف يومية بسيطة جداً
 *  · A2: قصص قصيرة بسيطة عن الحياة
 *  · B1: حوارات وآراء
 *  · B2: مواضيع مجردة ونقل آراء (مؤيد/معارض)
 *
 *  الحلقات في episodes-1/episodes-2 (سقف الحجم)، والأنواع في types.ts.
 *  الترتيب هنا هو ترتيب الكتابة الأصلي — لا يُعاد ترتيبه.
 * ═══════════════════════════════════════════════════════════
 */
export const RAW_PODCASTS: PodcastEpisode[] = [
  ...PODCASTS_PART_1,
  ...PODCASTS_PART_2,
];

/**
 * الحلقات كما تُعرض: مواضع الإجابات موزّعة (كانت 40/40 = 100% في الأول).
 * النصّ المسموع `script` لا يُمسّ — التحويل على أسئلة الفهم فقط.
 * `RAW_PODCASTS` نسخة التدقيق للحرّاس فقط — بلا مستهلك إنتاجي.
 */
export const PODCASTS: PodcastEpisode[] = RAW_PODCASTS.map((item, index) =>
  balanceChoiceTree(item, index + 1),
);

/** بودكاستات مستوى معيّن */
export function getPodcastsByLevel(level: LevelCode): PodcastEpisode[] {
  return PODCASTS.filter((p) => p.level === level);
}

export const PODCAST_LEVEL_ORDER: LevelCode[] = ["A1", "A2", "B1", "B2"];
