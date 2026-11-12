import type { Lesson } from "@/types/lesson";

/**
 * b2-09 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-09/)
 */

import {lernziele, einfuehrung, review} from "./b2-09/intro";
import {theory} from "./b2-09/theorie";
import {readingB209} from "./b2-09/reading";
import {listening, pronunciation, writing} from "./b2-09/skills";
import {practiceBank, fehlerUndTipps} from "./b2-09/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-09/cards";

export const lessonB209: Lesson = {
  id: "b2-09",
  unitId: "b2-09",
  level: "B2",
  order: 1,
  titleDe: "Arbeitsmarkt und Bewerbung",
  titleAr: "سوق العمل والتقديم الوظيفي",
  summary: "مفردات سوق العمل والتقديم الوظيفي، وصلات اسمية-فعلية مختارة، وتدريب على عبارات افتتاح وختام قصيرة وإجابات مقابلة العمل.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB209,
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
