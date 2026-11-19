import type { Lesson } from "@/types/lesson";

/**
 * b1-08 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-08/)
 */

import {lernziele, einfuehrung, review} from "./b1-08/intro";
import {theory} from "./b1-08/theorie";
import {listening, pronunciation, writing} from "./b1-08/skills";
import {readingB108} from "./b1-08/reading";
import {practiceBank, fehlerUndTipps} from "./b1-08/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-08/cards";

export const lessonB108: Lesson = {
  id: "b1-08",
  unitId: "b1-08",
  level: "B1",
  order: 1,
  titleDe: "Technik und Digitales",
  titleAr: "التقنية والرقمنة",
  summary: "التقنية في الحياة اليومية، الروابط المزدوجة (nicht nur... sondern auch, sowohl... als auch, weder... noch, entweder... oder, je... desto)، والمستقبل (Futur I) مع werden.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB108,
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
