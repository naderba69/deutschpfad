/**
 * الدرس A2-11: الخدمات والمعاملات — الأفعال الانعكاسية (Reflexive Verben)
 */

import type { Lesson } from "@/types/lesson";

import {lernziele, einfuehrung, review} from "./a2-11/intro";
import {theory} from "./a2-11/theorie";
import {reading, listening, pronunciation, writing} from "./a2-11/skills";
import {practiceBank, fehlerUndTipps} from "./a2-11/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-11/cards";

export const lessonA211: Lesson = {
  id: "a2-11",
  unitId: "a2-11",
  level: "A2",
  order: 1,
  titleDe: "Dienstleistungen",
  titleAr: "الخدمات والمعاملات",
  summary:
    "مفردات البريد، وحوار عند الحلاق وشكوى لإصلاح هاتف، وصيغ انعكاسية منتقاة مع Akkusativ وDativ، وعبارة مكتوبة مهذبة للشكوى، وتدريب موجّه على بيانات استمارة افتراضية.",
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
