import type { Lesson } from "@/types/lesson";

/**
 * b2-11 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b2-11/)
 */

import {lernziele, einfuehrung, review} from "./b2-11/intro";
import {theory} from "./b2-11/theorie";
import {readingB211} from "./b2-11/reading";
import {listening, pronunciation, writing} from "./b2-11/skills";
import {practiceBank, fehlerUndTipps} from "./b2-11/practice";
import {miniTest, flashcards, mediation, interaction} from "./b2-11/cards";

export const lessonB211: Lesson = {
  id: "b2-11",
  unitId: "b2-04",
  level: "B2",
  order: 2,
  titleDe: "Zugehörigkeit und doppelter Infinitiv",
  titleAr: "الانتماء والملكية والمصدر المزدوج",
  summary: "الضميران النسبيان dessen/deren للتعبير عن الملكية في الجملة النسبية، والمصدر المزدوج في Perfekt مع الأفعال المودالية، ومع lassen وsehen وhören حين تتبعها صيغة مصدرية.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB211,
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
