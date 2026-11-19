import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-10: العمل والمهن
 * — مفردات المهن، أنماط التعريف والعمل، النفي، ومفردات المكتب
 */
import {lernziele, einfuehrung, review} from "./a1-10/intro";
import {theory} from "./a1-10/theorie";
import {reading, listening, pronunciation, writing} from "./a1-10/skills";
import {practiceBank, fehlerUndTipps} from "./a1-10/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-10/cards";

export const lessonA110: Lesson = {
  id: "a1-10",
  unitId: "a1-10",
  level: "A1",
  order: 1,
  titleDe: "Arbeit und Berufe",
  titleAr: "العمل والمهن",
  summary: "مفردات مهن مختارة وصيغ مؤنثة شائعة، أنماط Ich bin / arbeiten als، النفي بـnicht وkein بحسب ما يُنفى، ووصف جهة العمل أو مكانها وأدوات الملكية في سياق مهني.",
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


  /* ═══ أنشطة الوساطة والتفاعل؛ لا تمثل اعتماداً أو تقييماً معيارياً ═══ */
  mediation,
  interaction,
};
