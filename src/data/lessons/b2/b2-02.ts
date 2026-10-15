import type { Lesson } from "@/types/lesson";

/**
 * b2-02 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-02/)
 */

import {lernziele, einfuehrung, review} from "./b2-02/intro";
import {theory} from "./b2-02/theorie";
import {listening, pronunciation, writing} from "./b2-02/skills";
import {readingB202} from "./b2-02/reading";
import {practiceBank, fehlerUndTipps} from "./b2-02/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-02/cards";

export const lessonB202: Lesson = {
  id: "b2-02",
  unitId: "b2-02",
  level: "B2",
  order: 1,
  titleDe: "Wirtschaft und Finanzen",
  titleAr: "الاقتصاد والمالية",
  summary: "تحليل الأخبار الاقتصادية، المبني للمجهول المتقدم: Zustandspassiv (sein + Partizip II)، Passiv مع الأفعال الشرطية، وبدائله (sich lassen, -bar, man).",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB202,
  listening,
  pronunciation,
  writing,
  practiceBank,
  fehlerUndTipps,
  miniTest,
  flashcards,
  mediation,
  interaction,
};
