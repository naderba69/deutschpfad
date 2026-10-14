/**
 * ═══════════════════════════════════════════════════════════
 *  مفردات B2 الإضافية — الجولة 2 (سد معيار الإجمالي ~4000)
 *  ~1850 كلمة/تركيباً أكاديمياً ومتخصصاً — تُدمج في getB2VocabAll()
 * ═══════════════════════════════════════════════════════════
 */

import type { VocabEntry } from "@/data/vocabulary/a1";
import {B2_EXTRA2_PART1} from "./b2-extra2/part1";
import {B2_EXTRA2_PART2} from "./b2-extra2/part2";
import {B2_EXTRA2_PART3} from "./b2-extra2/part3";
import {B2_EXTRA2_PART4} from "./b2-extra2/part4";

export const B2_EXTRA2_VOCAB: VocabEntry[] = [...B2_EXTRA2_PART1, ...B2_EXTRA2_PART2, ...B2_EXTRA2_PART3, ...B2_EXTRA2_PART4];
;

export const TOTAL_B2_EXTRA2 = B2_EXTRA2_VOCAB.length;
