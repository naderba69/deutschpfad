import type { Lesson } from "@/types/lesson";

/**
 * b1-01 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-01/)
 */

import {lernziele, einfuehrung, review} from "./b1-01/intro";
import {theory} from "./b1-01/theorie";
import {listening, pronunciation, writing} from "./b1-01/skills";
import {readingB101} from "./b1-01/reading";
import {practiceBank, fehlerUndTipps} from "./b1-01/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-01/cards";

export const lessonB101: Lesson = {
  id: "b1-01",
  unitId: "b1-01",
  level: "B1",
  order: 1,
  titleDe: "Ausbildung und Studium",
  titleAr: "التعليم والدراسة",
  summary: "مقارنة الأنظمة التعليمية، حالة المضاف إليه (Genitiv) واستخداماتها، والجمل النسبية (Relativsätze) مع der/die/das.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB101,
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
