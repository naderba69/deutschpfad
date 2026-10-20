import type { Lesson } from "@/types/lesson";

/**
 * A1-08 — Kleidung und Farben.
 * Lernzielstatus beruht auf korrekten Ergebnissen der verknüpften Aufgaben, nicht auf dem Öffnen eines Abschnitts.
 */
import {lernziele, einfuehrung, review} from "./a1-08/intro";
import {theory} from "./a1-08/theorie";
import {reading, listening, pronunciation, writing} from "./a1-08/skills";
import {practiceBank, fehlerUndTipps} from "./a1-08/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-08/cards";

export const lessonA108: Lesson = {
  id: "a1-08",
  unitId: "a1-08",
  level: "A1",
  order: 1,
  titleDe: "Kleidung und Farben",
  titleAr: "الملابس والألوان",
  summary: "ملابس وألوان؛ وصف خبرِيّ بسيط بعد sein، وتصريف tragen، والسؤال عن الرأي، وصيغ مختارة من welcher-/dieser- وأفعال gefallen/passen/stehen.",
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


  /* ═══ أنشطة الوساطة والتفاعل ═══ */
  mediation,
  interaction,
};
