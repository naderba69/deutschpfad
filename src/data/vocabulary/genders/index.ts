/**
 * قاموس أجناس الأسماء الألمانية — مصدر واحد يجمع الأجزاء بالترتيب
 * (GENDERS_1 ← GENDERS_2 ← GENDERS_3 ← GENDERS_4):
 * عند تكرار مفتاح يفوز الأخير — كما كان في الملف الأصلي الواحد.
 */
import {GENDERS_1} from "./dict-1";
import {GENDERS_2} from "./dict-2";
import {GENDERS_3} from "./dict-3";
import {GENDERS_4} from "./dict-4";

export const GENDERS: Record<string, string> = {...GENDERS_1, ...GENDERS_2, ...GENDERS_3, ...GENDERS_4};
