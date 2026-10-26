/**
 * a1.ts — مجمِّع: يبسط أجزاء المصفوفة في a1/ بترتيبها الأصلي.
 * قُسِّم في الدفعة 112 (سقف الحجم: لا ملف فوق 600 سطراً). القيم في الأجزاء
 * منقولة حرفياً، والترتيب محفوظ لأن الموازنة تُجرى بالقرينة.
 */
import type { DailyDialogue } from "./types";

import { A1_DIALOGUES_1 } from "./a1/part1";
import { A1_DIALOGUES_2 } from "./a1/part2";
import { A1_DIALOGUES_3 } from "./a1/part3";

export const A1_DIALOGUES: DailyDialogue[] = [
  ...A1_DIALOGUES_1,
  ...A1_DIALOGUES_2,
  ...A1_DIALOGUES_3,
];
