/**
 * الدرس A2-12: العلاقات بين الناس — أدوات الربط (Konnektoren) + المشاعر
 */

import type { Lesson } from "@/types/lesson";

import {lernziele, einfuehrung, review} from "./a2-12/intro";
import {theory} from "./a2-12/theorie";
import {reading, listening, pronunciation, writing} from "./a2-12/skills";
import {practiceBank, fehlerUndTipps} from "./a2-12/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-12/cards";

export const lessonA212: Lesson = {
  id: "a2-12",
  unitId: "a2-12",
  level: "A2",
  order: 1,
  titleDe: "Zwischenmenschliches",
  titleAr: "العلاقات بين الناس",
  summary: "المشاعر والآراء والخلافات الصغيرة، وأدوات الربط العادية والمقلوبة (und, aber, oder, denn, deshalb, trotzdem, dann) وقواعدها، مع صيغ مهذبة للاعتذار والتصالح — قبل المراجعة الختامية A2-13.",
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
