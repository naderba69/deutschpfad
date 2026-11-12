import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-08: المواصلات والتنقل — Komparativ/Superlativ + التذاكر
 */
import {lernziele, einfuehrung, review} from "./a2-08/intro";
import {theory} from "./a2-08/theorie";
import {reading, listening, pronunciation, writing} from "./a2-08/skills";
import {practiceBank, fehlerUndTipps} from "./a2-08/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-08/cards";

export const lessonA208: Lesson = {
  id: "a2-08",
  unitId: "a2-08",
  level: "A2",
  order: 1,
  titleDe: "Mobil sein",
  titleAr: "المواصلات والتنقل",
  summary:
    "فهم معلومات سفر قصيرة وعبارات التذاكر، والمقارنة والتفضيل (Komparativ/Superlativ) في أمثلة محددة؛ لا تقيس المادة شراء التذكرة شفهياً أو أسعاراً ومواعيد حقيقية.",
  lernziele,
  einfuehrung,
  reading,
  review,
  theory,
  listening,
  pronunciation,
  writing,
  practiceBank,
  fehlerUndTipps,
  miniTest,
  flashcards,
  /* وساطة وتفاعل لغويان في أمثلة تدريبية غير مقوّمة شفهياً */
  mediation,
  interaction,
};
