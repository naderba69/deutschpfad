import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-03: الطعام والشراب
 * — أدوات التعريف والتنكير + حالة النصب (Akkusativ) + فعل haben
 */
import {lernziele, einfuehrung, review} from "./a1-03/intro";
import {theory} from "./a1-03/theorie";
import {reading, listening, pronunciation, writing} from "./a1-03/skills";
import {practiceBank, fehlerUndTipps} from "./a1-03/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-03/cards";

export const lessonA103: Lesson = {
  id: "a1-03",
  unitId: "a1-03",
  level: "A1",
  order: 1,
  titleDe: "Essen und Trinken",
  titleAr: "الطعام والشراب",
  summary:
    "المأكولات والمشروبات، أدوات التعريف والتنكير (der/die/das + ein/eine)، حالة النصب (Akkusativ): Ich esse einen Apfel، وفعل haben مع الجوع والعطش.",

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
