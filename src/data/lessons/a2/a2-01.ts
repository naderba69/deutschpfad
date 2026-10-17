import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-01: السفر والعطلات — Perfekt المتقدّم
 * أساس Perfekt (haben/sein + Partizip II) صار في a1-14، فهذا الدرس
 * يبني عليه: عائلات Ablaut، وقسمة العمل مع Präteritum، وترتيب
 * المساحة الوسطى في الجملة الطويلة، ومعجم السفر الوظيفيّ.
 */
import {lernziele, einfuehrung, review} from "./a2-01/intro";
import {theory} from "./a2-01/theorie";
import {reading, listening, pronunciation, writing} from "./a2-01/skills";
import {practiceBank, fehlerUndTipps} from "./a2-01/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-01/cards";

export const lessonA201: Lesson = {
  id: "a2-01",
  unitId: "a2-01",
  level: "A2",
  order: 1,
  titleDe: "Reisen und Urlaub",
  titleAr: "السفر والعطلات",
  summary: "Perfekt المتقدّم بعد أساسه في A1: عائلات الأفعال القوية (Ablaut) وصورها الثلاث، وقسمة العمل بين Perfekt وPräteritum (war · hatte · konnte)، وترتيب المساحة الوسطى بين قوسَي الجملة، ثم معجم السفر: الحجز والوصول والشكوى.",
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


  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation,
  interaction,
};
