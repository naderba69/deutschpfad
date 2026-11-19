import type { Lesson } from "@/types/lesson";

/**
 * b1-07 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-07/)
 */

import {lernziele, einfuehrung, review} from "./b1-07/intro";
import {theory} from "./b1-07/theorie";
import {listening, pronunciation, writing} from "./b1-07/skills";
import {readingB107} from "./b1-07/reading";
import {practiceBank, fehlerUndTipps} from "./b1-07/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-07/cards";

export const lessonB107: Lesson = {
  id: "b1-07",
  unitId: "b1-07",
  level: "B1",
  order: 1,
  titleDe: "Politik und Gesellschaft",
  titleAr: "السياسة والمجتمع",
  summary: "المفاهيم السياسية الأساسية، الجمل الثانوية الزمنية (als, wenn, während, bevor, nachdem, bis) والسببية (weil, da) والتخالفية (obwohl, obgleich).",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB107,
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
