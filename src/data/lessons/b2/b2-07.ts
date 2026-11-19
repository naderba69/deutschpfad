import type { Lesson } from "@/types/lesson";

/**
 * b2-07 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-07/)
 */

import {lernziele, einfuehrung, review} from "./b2-07/intro";
import {theory} from "./b2-07/theorie";
import {readingB207} from "./b2-07/reading";
import {listening, pronunciation, writing} from "./b2-07/skills";
import {practiceBank, fehlerUndTipps} from "./b2-07/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-07/cards";

export const lessonB207: Lesson = {
  id: "b2-07",
  unitId: "b2-07",
  level: "B2",
  order: 1,
  titleDe: "Philosophie und Gesellschaft",
  titleAr: "الفلسفة والمجتمع",
  summary: "مناقشة الموضوعات المجردة وبناء الحجج، المستقبل التام (Futur II): werde + Partizip II + haben/sein — والكتابة الجدلية (Erörterung) بأسلوب أكاديمي.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB207,
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
