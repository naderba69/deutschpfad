import type { Lesson } from "@/types/lesson";

/**
 * b1-10 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-10/)
 */

import {lernziele, einfuehrung, review} from "./b1-10/intro";
import {theory} from "./b1-10/theorie";
import {listening, pronunciation, writing} from "./b1-10/skills";
import {readingB110} from "./b1-10/reading";
import {practiceBank, fehlerUndTipps} from "./b1-10/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-10/cards";

export const lessonB110: Lesson = {
  id: "b1-10",
  unitId: "b1-10",
  level: "B1",
  order: 1,
  titleDe: "Zukunft und Pläne",
  titleAr: "المستقبل والخطط",
  summary: "التحدث عن خطط المستقبل، مراجعة لأهم قواعد B1 (Genitiv، Relativsätze، Konjunktiv II، Passiv، Adjektivdeklination)، وخاتمة المستوى المتوسط.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB110,
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
