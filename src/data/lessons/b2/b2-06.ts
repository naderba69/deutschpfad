import type { Lesson } from "@/types/lesson";

/**
 * b2-06 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-06/)
 */

import {lernziele, einfuehrung, review} from "./b2-06/intro";
import {theory} from "./b2-06/theorie";
import {readingB206} from "./b2-06/reading";
import {listening, pronunciation, writing} from "./b2-06/skills";
import {practiceBank, fehlerUndTipps} from "./b2-06/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-06/cards";

export const lessonB206: Lesson = {
  id: "b2-06",
  unitId: "b2-06",
  level: "B2",
  order: 1,
  titleDe: "Beruf und Karriere",
  titleAr: "المسار المهني",
  summary: "المسارات المهنية والتفاوض، الاشتقاق الاسمي (Nominalisierung): beim Lesen, das Schreiben, zum Nachdenken — تحويل الأفعال والجمل إلى أسماء بأسلوب رسمي، والعمل المرن وعن بعد (Homeoffice, Gleitzeit) ومفرداته.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB206,
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
