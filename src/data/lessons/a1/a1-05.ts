import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-05: الروتين اليومي والوقت
 * — الأفعال المنفصلة (trennbare Verben) + الساعة وأوقات اليوم
 */
import {lernziele, einfuehrung, review} from "./a1-05/intro";
import {theory} from "./a1-05/theorie";
import {reading, listening, pronunciation, writing} from "./a1-05/skills";
import {practiceBank, fehlerUndTipps} from "./a1-05/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-05/cards";

export const lessonA105: Lesson = {
  id: "a1-05",
  unitId: "a1-05",
  level: "A1",
  order: 1,
  titleDe: "Mein Tag",
  titleAr: "الحياة اليومية والروتين",
  summary: "الروتين اليومي، الأفعال المنفصلة (aufstehen, fernsehen...)، قراءة الساعة، وأوقات اليوم (am Morgen, am Abend)، والمدى الزمني von … bis (من … إلى).",
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


  /* ═══ الوساطة والتفاعل اللغوي ═══ */
  mediation,
  interaction,
};
