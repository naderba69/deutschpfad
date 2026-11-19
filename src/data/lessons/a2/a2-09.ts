import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-09: الدعوات والاحتفال — تطبيقات منتقاة على أفعال وحروف جر تحكم Dativ.
 * لا يزعم استكمال جميع استعمالات الحالة أو تقويم أداء شفهي.
 */
import {lernziele, einfuehrung, review} from "./a2-09/intro";
import {theory} from "./a2-09/theorie";
import {reading, listening, pronunciation, writing} from "./a2-09/skills";
import {practiceBank, fehlerUndTipps} from "./a2-09/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-09/cards";

export const lessonA209: Lesson = {
  id: "a2-09",
  unitId: "a2-09",
  level: "A2",
  order: 1,
  titleDe: "Feste und Feiern",
  titleAr: "المناسبات والاحتفالات",
  summary:
    "صياغة دعوة قصيرة وفهم قراءة وحوار عن عيد ميلاد؛ تطبيقات منتقاة على أفعال تتطلب Dativ وحروف جر ثابتة، مع التمييز بين المكان والوجهة. لا يمثّل ذلك تغطية كل استعمالات Dativ.",
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
