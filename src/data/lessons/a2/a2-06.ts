import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-06: الإعلام والأخبار — مفردات مختارة وجمل dass للرأي والمعلومة.
 */
import {lernziele, einfuehrung, review} from "./a2-06/intro";
import {theory} from "./a2-06/theorie";
import {reading, listening, pronunciation, writing} from "./a2-06/skills";
import {practiceBank, fehlerUndTipps} from "./a2-06/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-06/cards";

export const lessonA206: Lesson = {
  id: "a2-06",
  unitId: "a2-06",
  level: "A2",
  order: 1,
  titleDe: "Medien und Nachrichten",
  titleAr: "الإعلام والأخبار",
  summary:
    "مفردات مختارة عن وسائل الإعلام، وفهم محادثات وخبر محلي قصير، واستعمال أفعال رأي مع جمل dass وتمييزها من das. مهام الرأي والكتابة موجّهة؛ التفاعل والنطق غير مقوّمين شفهياً.",
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
