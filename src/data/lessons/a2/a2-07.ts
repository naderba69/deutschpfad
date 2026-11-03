import type { Lesson } from "@/types/lesson";

/**
 * A2-07: Bank und Geld — „es gibt“ + Akkusativ, Personalpronomen und Bankwortschatz.
 * The banking examples are fictional language-learning scenarios, not financial guidance.
 */
import {lernziele, einfuehrung, review} from "./a2-07/intro";
import {theory} from "./a2-07/theorie";
import {reading, listening, pronunciation, writing} from "./a2-07/skills";
import {practiceBank, fehlerUndTipps} from "./a2-07/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-07/cards";

export const lessonA207: Lesson = {
  id: "a2-07",
  unitId: "a2-07",
  level: "A2",
  order: 1,
  titleDe: "Bank und Geld",
  titleAr: "البنك والمال",
  summary:
    "مفردات الحساب والبطاقة والدفع، استعمال es gibt مع Akkusativ، واختيار الضمير الألماني المناسب بعد أفعال شائعة.",
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
