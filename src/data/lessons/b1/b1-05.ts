import type { Lesson } from "@/types/lesson";

/**
 * b1-05 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-05/)
 */

import {lernziele, einfuehrung, review} from "./b1-05/intro";
import {theory} from "./b1-05/theorie";
import {listening, pronunciation, writing} from "./b1-05/skills";
import {readingB105} from "./b1-05/reading";
import {practiceBank, fehlerUndTipps} from "./b1-05/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-05/cards";

export const lessonB105: Lesson = {
  id: "b1-05",
  unitId: "b1-05",
  level: "B1",
  order: 1,
  titleDe: "Gesundheit und Prävention",
  titleAr: "الصحة والوقاية",
  summary: "الحياة الصحية والوقاية في أمثلة تدريبية، والشرطية الماضية (hätte/wäre + Partizip II) والكلام المنقول (Konjunktiv I).",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB105,
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
