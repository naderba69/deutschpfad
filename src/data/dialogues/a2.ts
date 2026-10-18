/**
 * a2.ts — مجمِّع: يبسط أجزاء المصفوفة في a2/ بترتيبها الأصلي.
 * قُسِّم في الدفعة 113 (سقف الحجم: لا ملف فوق 600 سطراً). القيم في الأجزاء
 * منقولة حرفياً، والترتيب محفوظ لأن الموازنة تُجرى بالقرينة.
 */
import type { DailyDialogue } from "./types";

import { A2_DIALOGUES_1 } from "./a2/part1";
import { A2_DIALOGUES_2 } from "./a2/part2";
import { A2_DIALOGUES_3 } from "./a2/part3";

export const A2_DIALOGUES: DailyDialogue[] = [
  ...A2_DIALOGUES_1,
  ...A2_DIALOGUES_2,
  ...A2_DIALOGUES_3,
];
