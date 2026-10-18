import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-04: السكن والمنزل
 * — الغرف والأثاث + حروف الجر المكانية (in/auf) مع Dativ + الصفات الخبرية
 */
import {lernziele, einfuehrung, review} from "./a1-04/intro";
import {theory} from "./a1-04/theorie";
import {reading, listening, pronunciation, writing} from "./a1-04/skills";
import {practiceBank, fehlerUndTipps} from "./a1-04/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-04/cards";

export const lessonA104: Lesson = {
  id: "a1-04",
  unitId: "a1-04",
  level: "A1",
  order: 1,
  titleDe: "Meine Wohnung",
  titleAr: "السكن والمنزل",
  summary:
    "غرف البيت والأثاث، وصف المنزل بصفات بسيطة، حروف الجر المكانية in/auf مع حالة Dativ (im/in der)، والسؤال: Wo wohnst du?",

  lernziele,
  einfuehrung,
  review,
  theory,
  reading,
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
