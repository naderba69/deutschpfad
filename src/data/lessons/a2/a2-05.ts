import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-05: في المكتب — Präteritum من sein/haben، وعبارات الهاتف والبريد المهني.
 */
import {lernziele, einfuehrung, review} from "./a2-05/intro";
import {theory} from "./a2-05/theorie";
import {reading, listening, pronunciation, writing} from "./a2-05/skills";
import {practiceBank, fehlerUndTipps} from "./a2-05/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-05/cards";

export const lessonA205: Lesson = {
  id: "a2-05",
  unitId: "a2-05",
  level: "A2",
  order: 1,
  titleDe: "Im Büro",
  titleAr: "في المكتب والعمل",
  summary:
    "مراجعة Präteritum من sein وhaben في سياقات المكتب، مع تمييزه من Perfekt وPlusquamperfekt؛ وعبارات هاتفية وبريد إلكتروني مختارة، ونص قراءة وحوارات قصيرة ومهام كتابة موجّهة. لا تقيس المادة النطق أو أداءً شفهياً.",
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
  /* ═══ الوساطة والتفاعل الاختياريان ═══ */
  mediation,
  interaction,
};
