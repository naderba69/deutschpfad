import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-03: في المطعم — صيغ الطلب في السياق، أمثلة Dativ، مفردات المطعم ووصف الطعام
 */
import {lernziele, einfuehrung, review} from "./a2-03/intro";
import {theory} from "./a2-03/theorie";
import {reading, listening, pronunciation, writing} from "./a2-03/skills";
import {practiceBank, fehlerUndTipps} from "./a2-03/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-03/cards";

export const lessonA203: Lesson = {
  id: "a2-03",
  unitId: "a2-03",
  level: "A2",
  order: 1,
  titleDe: "Im Restaurant",
  titleAr: "المطعم والطعام",
  summary: "تعبيرات طلب شائعة تختلف ملاءمتها بحسب السياق، ومنها möchte وhätte gern وnehmen؛ أمثلة على schmecken مع Dativ ومراجعة gefallen/passen؛ مفردات مختارة من زيارة مطعم ووصف الطعام والكميات؛ ونصّ «Ein Abend im Gasthaus Löwen» مع أسئلة قراءة واستماع وكتابة موجّهة. الملاحظات الثقافية أمثلة محدودة لا قواعد عامة لكل المطاعم أو المناطق.",
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


  /* ═══ الوساطة والتفاعل ═══ */
  mediation,
  interaction,
};
