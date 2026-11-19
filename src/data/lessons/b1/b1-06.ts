import type { Lesson } from "@/types/lesson";

/**
 * b1-06 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-06/)
 */

import {lernziele, einfuehrung, review} from "./b1-06/intro";
import {theory} from "./b1-06/theorie";
import {listening, pronunciation, writing} from "./b1-06/skills";
import {readingB106} from "./b1-06/reading";
import {practiceBank, fehlerUndTipps} from "./b1-06/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-06/cards";

export const lessonB106: Lesson = {
  id: "b1-06",
  unitId: "b1-06",
  level: "B1",
  order: 1,
  titleDe: "Kultur und Kunst",
  titleAr: "الثقافة والفن",
  summary: "وصف الأعمال الفنية، تصريف الصفات الكامل (Adjektivdeklination) مع الأدوات المعرفة وغير المعرفة وبدون أداة، ومشاركة تجارب شخصية عن الثقافة، ومفهوم الوطن والهجرة وصدمات الثقافة (Heimat, Migration und Kulturschock).",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB106,
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
