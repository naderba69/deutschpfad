import type { Lesson } from "@/types/lesson";

/**
 * b1-03 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-03/)
 */

import {lernziele, einfuehrung, review} from "./b1-03/intro";
import {theory} from "./b1-03/theorie";
import {listening, pronunciation, writing} from "./b1-03/skills";
import {readingB103} from "./b1-03/reading";
import {practiceBank, fehlerUndTipps} from "./b1-03/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-03/cards";

export const lessonB103: Lesson = {
  id: "b1-03",
  unitId: "b1-03",
  level: "B1",
  order: 1,
  titleDe: "Umwelt und Klima",
  titleAr: "البيئة والمناخ",
  summary: "مشاكل البيئة والحلول، المبني للمجهول (Passiv): werden + Partizip II في المضارع والماضي، وبدائله (man)، والتركيب المصدري (Infinitiv mit zu): Es ist wichtig, die Umwelt zu schützen.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB103,
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
