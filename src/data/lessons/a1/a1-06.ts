import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-06: أوقات الفراغ والهوايات
 * — الهوايات + gern/mögen + صيغة الأمر (Imperativ) du/ihr/Sie
 */
import {lernziele, einfuehrung, review} from "./a1-06/intro";
import {theory} from "./a1-06/theorie";
import {reading, listening, pronunciation, writing} from "./a1-06/skills";
import {practiceBank, fehlerUndTipps} from "./a1-06/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-06/cards";

export const lessonA106: Lesson = {
  id: "a1-06",
  unitId: "a1-06",
  level: "A1",
  order: 1,
  titleDe: "Freizeit und Hobbys",
  titleAr: "أوقات الفراغ والهوايات",
  summary:
    "الهوايات والتعبير عن تفضيل نشاط بـ gern، وصيغ الأمر الأساسية du/ihr/Sie، وتغيّر الصائت في أفعال شائعة، واستخدام können وmöchte(n)، وتمهيد لفهم war وhatte في جمل عن الماضي.",

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
