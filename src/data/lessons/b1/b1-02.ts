import type { Lesson } from "@/types/lesson";

/**
 * b1-02 — رأس الدرس (قُسّم في المرحلة 5 إلى أجزاء في b1-02/)
 */

import {lernziele, einfuehrung, review} from "./b1-02/intro";
import {theory} from "./b1-02/theorie";
import {listening, pronunciation, writing} from "./b1-02/skills";
import {readingB102} from "./b1-02/reading";
import {practiceBank, fehlerUndTipps} from "./b1-02/practice";
import {miniTest, flashcards, mediation, interaction} from "./b1-02/cards";

export const lessonB102: Lesson = {
  id: "b1-02",
  unitId: "b1-02",
  level: "B1",
  order: 1,
  titleDe: "Arbeitswelt",
  titleAr: "عالم العمل",
  summary: "صيغ Präteritum لأفعال منتقاة منتظمة وشاذة، وPlusquamperfekt لبيان حدث سابق لمرجع ماضٍ، ضمن أمثلة عن الخبرة والعمل.",
  lernziele,
  einfuehrung,
  review,
  theory,
  reading: readingB102,
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
