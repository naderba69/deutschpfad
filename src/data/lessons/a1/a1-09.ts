import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-09: المواعيد والتقويم
 * — التقويم والتواريخ والتعبير عن المواعيد.
 */
import {lernziele, einfuehrung, review} from "./a1-09/intro";
import {theory} from "./a1-09/theorie";
import {reading, listening, pronunciation, writing} from "./a1-09/skills";
import {practiceBank, fehlerUndTipps} from "./a1-09/practice";
import {miniTest, flashcards, mediation, interaction} from "./a1-09/cards";

export const lessonA109: Lesson = {
  id: "a1-09",
  unitId: "a1-09",
  level: "A1",
  order: 1,
  titleDe: "Termine und der Kalender",
  titleAr: "المواعيد والتقويم",
  summary:
    "أسماء أيام الأسبوع والشهور والفصول، صيغ مختارة من الأعداد الترتيبية وكتابة التاريخ، والتعبير عن الوقت والمدى وحجز موعد بسيط.",

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
