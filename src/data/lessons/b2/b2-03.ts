import type { Lesson } from "@/types/lesson";

/**
 * b2-03 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-03/)
 */

import {lernziele, einfuehrung, review} from "./b2-03/intro";
import {theory} from "./b2-03/theorie";
import {readingB203} from "./b2-03/reading";
import {listening, pronunciation, writing} from "./b2-03/skills";
import {practiceBank, fehlerUndTipps} from "./b2-03/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-03/cards";

export const lessonB203: Lesson = {
  id: "b2-03",
  unitId: "b2-03",
  level: "B2",
  order: 1,
  titleDe: "Recht und Alltag",
  titleAr: "القانون والحياة اليومية",
  summary: "المفاهيم القانونية الأساسية وفهم العقود، الجمل النسبية المتقدمة (مع حروف الجر: auf den, mit dem, wofür) والضمائر النسبية was/wo.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB203,
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
