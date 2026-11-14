/**
 * دروس المستوى A1 — مجمِّع خفيف لتحميل مستوى واحد فقط عند الطلب.
 * ترتيبه هو نفسه ترتيب RAW_LESSONS في ../index.ts (يحرسه level-loaders.test.ts).
 */

import type { Lesson } from "@/types/lesson";

import {lessonA100} from "@/data/lessons/a1/a1-00";
import {lessonA101, lessonA101b} from "@/data/lessons/a1/a1-01";
import {lessonA102} from "@/data/lessons/a1/a1-02";
import {lessonA103} from "@/data/lessons/a1/a1-03";
import {lessonA104} from "@/data/lessons/a1/a1-04";
import {lessonA105} from "@/data/lessons/a1/a1-05";
import {lessonA106} from "@/data/lessons/a1/a1-06";
import {lessonA107} from "@/data/lessons/a1/a1-07";
import {lessonA108} from "@/data/lessons/a1/a1-08";
import {lessonA109} from "@/data/lessons/a1/a1-09";
import {lessonA110} from "@/data/lessons/a1/a1-10";
import {lessonA111} from "@/data/lessons/a1/a1-11";
import {lessonA112} from "@/data/lessons/a1/a1-12";
import {lessonA114} from "@/data/lessons/a1/a1-14";
import {lessonA113} from "@/data/lessons/a1/a1-13";

export const A1_RAW_LESSONS: Lesson[] = [
  lessonA100, lessonA101, lessonA101b, lessonA102, lessonA103, lessonA104, lessonA105,
  lessonA106, lessonA107, lessonA108, lessonA109, lessonA110, lessonA111, lessonA112,
  lessonA114, lessonA113,
];
