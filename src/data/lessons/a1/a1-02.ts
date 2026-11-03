import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-02: العائلة والأصدقاء — نموذج كامل ثانٍ لنظام الدرس الموحد
 * (التركيز: مفردات العائلة + أدوات الملكية mein/meine)
 */

import {lernziele, einfuehrung, review} from "./a1-02/intro";
import {theory} from "./a1-02/theorie";
import {reading, listening, pronunciation, writing} from "./a1-02/skills";
import {practiceBank, fehlerUndTipps} from "./a1-02/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-02/cards";

export const lessonA102: Lesson = {
  id: "a1-02",
  unitId: "a1-02",
  level: "A1",
  order: 2,
  titleDe: "Meine Familie",
  titleAr: "العائلة والأصدقاء",
  summary:
    "أفراد العائلة، وأدوات الملكية: الجذر بحسب المالك والنهاية بحسب الاسم المملوك؛ مع وصف العائلة بجمل بسيطة.",

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
