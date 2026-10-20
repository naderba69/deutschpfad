import type { Lesson } from "@/types/lesson";

/**
 * b1-04 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-04/)
 */

import {lernziele, einfuehrung, review} from "./b1-04/intro";
import {theory} from "./b1-04/theorie";
import {listening, pronunciation, writing} from "./b1-04/skills";
import {readingB104} from "./b1-04/reading";
import {practiceBank, fehlerUndTipps} from "./b1-04/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-04/cards";

export const lessonB104: Lesson = {
  id: "b1-04",
  unitId: "b1-04",
  level: "B1",
  order: 1,
  titleDe: "Medien und Gesellschaft",
  titleAr: "الإعلام والمجتمع",
  summary: "النظر النقدي للإعلام، صيغة الشرط (Konjunktiv II): würde + Infinitiv والأفعال الشائعة (wäre, hätte, könnte) — للتمني والافتراض والتهذيب.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB104,
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
