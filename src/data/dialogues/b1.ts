/**
 * b1.ts — مجمِّع: يبسط أجزاء المصفوفة في b1/ بترتيبها الأصلي.
 * قُسِّم في الدفعة 114 (سقف الحجم: لا ملف فوق 600 سطراً). القيم في الأجزاء
 * منقولة حرفياً، والترتيب محفوظ لأن الموازنة تُجرى بالقرينة.
 */
import type { DailyDialogue } from "./types";

import { B1_DIALOGUES_1 } from "./b1/part1";
import { B1_DIALOGUES_2 } from "./b1/part2";
import { B1_DIALOGUES_3 } from "./b1/part3";

export const B1_DIALOGUES: DailyDialogue[] = [
  ...B1_DIALOGUES_1,
  ...B1_DIALOGUES_2,
  ...B1_DIALOGUES_3,
];
