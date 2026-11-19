import type { Lesson } from "@/types/lesson";

/**
 * b1-09 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-09/)
 */

import {lernziele, einfuehrung, review} from "./b1-09/intro";
import {theory} from "./b1-09/theorie";
import {listening, pronunciation, writing} from "./b1-09/skills";
import {readingB109} from "./b1-09/reading";
import {practiceBank, fehlerUndTipps} from "./b1-09/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-09/cards";

export const lessonB109: Lesson = {
  id: "b1-09",
  unitId: "b1-09",
  level: "B1",
  order: 1,
  titleDe: "Soziales Engagement",
  titleAr: "العمل التطوعي والاجتماعي",
  summary: "العمل التطوعي والمشاريع الاجتماعية، الوصلات الاسمية-الفعلية (Nomen-Verb-Verbindungen): eine Frage stellen, Bescheid sagen — وتصريف n-Deklination.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB109,
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
