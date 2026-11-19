/**
 * دروس المستوى B2 — مجمِّع خفيف لتحميل مستوى واحد فقط عند الطلب.
 * ترتيبه هو نفسه ترتيب RAW_LESSONS في ../index.ts (يحرسه level-loaders.test.ts).
 */

import type { Lesson } from "@/types/lesson";

import {lessonB201} from "@/data/lessons/b2/b2-01";
import {lessonB202} from "@/data/lessons/b2/b2-02";
import {lessonB203} from "@/data/lessons/b2/b2-03";
import {lessonB204} from "@/data/lessons/b2/b2-04";
import {lessonB211} from "@/data/lessons/b2/b2-11";
import {lessonB205} from "@/data/lessons/b2/b2-05";
import {lessonB206} from "@/data/lessons/b2/b2-06";
import {lessonB207} from "@/data/lessons/b2/b2-07";
import {lessonB208} from "@/data/lessons/b2/b2-08";
import {lessonB209} from "@/data/lessons/b2/b2-09";
import {lessonB210} from "@/data/lessons/b2/b2-10";
import {lessonB212} from "@/data/lessons/b2/b2-12";
import {lessonB213} from "@/data/lessons/b2/b2-13";

export const B2_RAW_LESSONS: Lesson[] = [
  lessonB201, lessonB202, lessonB203, lessonB204, lessonB211, lessonB205, lessonB206,
  lessonB207, lessonB208, lessonB209, lessonB210, lessonB212, lessonB213,
];
