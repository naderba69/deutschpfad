/**
 * دروس المستوى A2 — مجمِّع خفيف لتحميل مستوى واحد فقط عند الطلب.
 * ترتيبه هو نفسه ترتيب RAW_LESSONS في ../index.ts (يحرسه level-loaders.test.ts).
 */

import type { Lesson } from "@/types/lesson";

import {lessonA201} from "@/data/lessons/a2/a2-01";
import {lessonA202} from "@/data/lessons/a2/a2-02";
import {lessonA203} from "@/data/lessons/a2/a2-03";
import {lessonA204} from "@/data/lessons/a2/a2-04";
import {lessonA205} from "@/data/lessons/a2/a2-05";
import {lessonA206} from "@/data/lessons/a2/a2-06";
import {lessonA207} from "@/data/lessons/a2/a2-07";
import {lessonA208} from "@/data/lessons/a2/a2-08";
import {lessonA209} from "@/data/lessons/a2/a2-09";
import {lessonA210} from "@/data/lessons/a2/a2-10";
import {lessonA211} from "@/data/lessons/a2/a2-11";
import {lessonA212} from "@/data/lessons/a2/a2-12";
import {lessonA213} from "@/data/lessons/a2/a2-13";

export const A2_RAW_LESSONS: Lesson[] = [
  lessonA201, lessonA202, lessonA203, lessonA204, lessonA205, lessonA206, lessonA207,
  lessonA208, lessonA209, lessonA210, lessonA211, lessonA212, lessonA213,
];
