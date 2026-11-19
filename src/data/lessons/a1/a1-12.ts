import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-12: الطقس والفصول
 * — مفردات الطقس وتراكيبه الشائعة، werden للتغيّر، وتعبيرات الزمن والروابط
 */
import {lernziele, einfuehrung, review} from "./a1-12/intro";
import {theory} from "./a1-12/theorie";
import {reading, listening, pronunciation, writing} from "./a1-12/skills";
import {practiceBank, fehlerUndTipps} from "./a1-12/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-12/cards";

export const lessonA112: Lesson = {
  id: "a1-12",
  unitId: "a1-12",
  level: "A1",
  order: 1,
  titleDe: "Wetter und Jahreszeiten",
  titleAr: "الطقس والفصول",
  summary: "مفردات الطقس وتراكيب شائعة لوصفه، والتمييز بين es ist والحالة التي تتغير بـwerden، وتعبيرات زمنية متداولة، وروابط und/aber/oder/denn في أمثلة الطقس.",
  lernziele,
  einfuehrung,


  /* مراجعة تراكمية مختارة (Interleaving): من الدروس a1-07 وa1-10 وa1-11 */
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


  /* ═══ أنشطة الوساطة والتفاعل: خيارات تدريبية لا أدلة على الإتقان أو الاعتماد ═══ */
  mediation,
  interaction,
};
