/**
 * دروس المستوى B1 — مجمِّع خفيف لتحميل مستوى واحد فقط عند الطلب.
 * ترتيبه هو نفسه ترتيب RAW_LESSONS في ../index.ts (يحرسه level-loaders.test.ts).
 */

import type { Lesson } from "@/types/lesson";

import {lessonB101} from "@/data/lessons/b1/b1-01";
import {lessonB102} from "@/data/lessons/b1/b1-02";
import {lessonB103} from "@/data/lessons/b1/b1-03";
import {lessonB104} from "@/data/lessons/b1/b1-04";
import {lessonB105} from "@/data/lessons/b1/b1-05";
import {lessonB106} from "@/data/lessons/b1/b1-06";
import {lessonB107} from "@/data/lessons/b1/b1-07";
import {lessonB108} from "@/data/lessons/b1/b1-08";
import {lessonB109} from "@/data/lessons/b1/b1-09";
import {lessonB110} from "@/data/lessons/b1/b1-10";
import {lessonB112} from "@/data/lessons/b1/b1-12";
import {lessonB111} from "@/data/lessons/b1/b1-11";

export const B1_RAW_LESSONS: Lesson[] = [
  lessonB101, lessonB102, lessonB103, lessonB104, lessonB105, lessonB106, lessonB107,
  lessonB108, lessonB109, lessonB110, lessonB112, lessonB111,
];
