import type { Lesson } from "@/types/lesson";

/**
 * b2-05 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-05/)
 */

import {lernziele, einfuehrung, review} from "./b2-05/intro";
import {theory} from "./b2-05/theorie";
import {readingB205} from "./b2-05/reading";
import {listening, pronunciation, writing} from "./b2-05/skills";
import {practiceBank, fehlerUndTipps} from "./b2-05/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-05/cards";

export const lessonB205: Lesson = {
  id: "b2-05",
  unitId: "b2-05",
  level: "B2",
  order: 1,
  titleDe: "Psychologie und Kommunikation",
  titleAr: "علم النفس والتواصل",
  summary: "نماذج التواصل والجوانب النفسية، أدوات الربط المتقدمة (indem, anstatt...zu, ohne...zu, es sei denn, je nachdem, statt dass, sodass) + روابط النتيجة (folglich, demnach) — روابط المستوى المتقدم الكاملة، مع الجسيمات الحوارية (Modalpartikeln: doch, ja, mal, denn, eigentlich, wohl) في أمثلة سياقية مختارة.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB205,
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
