/**
 * b2.ts — مجمِّع: يبسط أجزاء المصفوفة في b2/ بترتيبها الأصلي.
 * قُسِّم في الدفعة 115 (سقف الحجم: لا ملف فوق 600 سطراً). القيم في الأجزاء
 * منقولة حرفياً، والترتيب محفوظ لأن الموازنة تُجرى بالقرينة.
 */
import type { DailyDialogue } from "./types";

import { B2_DIALOGUES_1 } from "./b2/part1";
import { B2_DIALOGUES_2 } from "./b2/part2";
import { B2_DIALOGUES_3 } from "./b2/part3";

export const B2_DIALOGUES: DailyDialogue[] = [
  ...B2_DIALOGUES_1,
  ...B2_DIALOGUES_2,
  ...B2_DIALOGUES_3,
];
