import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-11: في المدينة
 * — أماكن المدينة وأسئلة الطريق + علاقات الموقع والوجهة + وسائل النقل + ضمائر المفعول
 */
import {lernziele, einfuehrung, review} from "./a1-11/intro";
import {theory} from "./a1-11/theorie";
import {reading, listening, pronunciation, writing} from "./a1-11/skills";
import {practiceBank, fehlerUndTipps} from "./a1-11/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-11/cards";

export const lessonA111: Lesson = {
  id: "a1-11",
  unitId: "a1-11",
  level: "A1",
  order: 1,
  titleDe: "In der Stadt",
  titleAr: "التنقل في المدينة",
  summary: "أماكن المدينة والسؤال عن الطريق؛ وجهات مختلفة، مع المقارنة المحددة بين Wo? وWohin? عند in؛ وسائل النقل مع mit + Dativ؛ وضمائر المفعول في أمثلة الاتجاهات.",
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

  /* الوساطة والتفاعل — أنشطة مقترحة لا أدلة إتقان تلقائية */
  mediation,
  interaction,
};
