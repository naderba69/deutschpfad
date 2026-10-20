/**
 * ═══════════════════════════════════════════════════════════
 *  مفردات B1 الإضافية — الجولة 2 (سد معيار A1+A2+B1 = 2000-2500)
 *  ~800 كلمة — تُدمج في getB1VocabAll()
 * ═══════════════════════════════════════════════════════════
 */

/**
 * b1-extra2.ts — مجمِّع: يبسط أجزاء المصفوفة في b1-extra2/ بترتيبها الأصلي.
 * قُسِّم في الدفعة 116 (سقف الحجم: لا ملف فوق 600 سطراً). القيم في الأجزاء
 * منقولة حرفياً، والترتيب محفوظ لأن الموازنة تُجرى بالقرينة.
 */
import type { VocabEntry } from "@/data/vocabulary/a1";

import { B1_EXTRA2_VOCAB_1 } from "./b1-extra2/part1";
import { B1_EXTRA2_VOCAB_2 } from "./b1-extra2/part2";
import { B1_EXTRA2_VOCAB_3 } from "./b1-extra2/part3";

export const B1_EXTRA2_VOCAB: VocabEntry[] = [
  ...B1_EXTRA2_VOCAB_1,
  ...B1_EXTRA2_VOCAB_2,
  ...B1_EXTRA2_VOCAB_3,
];
