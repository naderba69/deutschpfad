import type { Lesson } from "@/types/lesson";

/**
 * A1-07 — Einkaufen. Text, Aufgaben und Lösungsschlüssel wurden einzeln geprüft.
 * Die Lernziele zählen nur korrekte Ergebnisse der jeweils aufgeführten Aufgaben.
 */
import {lernziele, einfuehrung, review} from "./a1-07/intro";
import {theory} from "./a1-07/theorie";
import {reading, listening, pronunciation, writing} from "./a1-07/skills";
import {practiceBank, fehlerUndTipps} from "./a1-07/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-07/cards";

export const lessonA107: Lesson = {
  id: "a1-07",
  unitId: "a1-07",
  level: "A1",
  order: 1,
  titleDe: "Einkaufen",
  titleAr: "التسوّق والأعداد والأسعار",
  summary:
    "الأعداد من 0 إلى 1000، أسعار ومقادير التسوّق، أنماط جمع الأسماء، وقراءة بيانات اتصال وعنوان بسيطة.",

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
