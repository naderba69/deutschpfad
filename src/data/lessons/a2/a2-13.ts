/**
 * الدرس A2-13: A2 kompakt — الجسر إلى B1 (خاتمة المستوى)
 *
 * سبب وجود هذا الدرس (تدقيق 2026-08، بطاقة a2-12): كان A1 يُختم بمراجعة
 * شاملة (a1-13)، وB1 بـ(b1-11)، وB2 بـ(b2-10) — بينما ينتقل المتعلّم من
 * a2-12 إلى b1-01 مباشرةً بلا محطة دمج. فتبقى قواعد A2 الكبرى (Perfekt،
 * الأفعال الناقصة، Dativ، المقارنة، Präteritum) مُدرَّسةً كلٌّ في وحدتها
 * ولا تُجمع في جملة واحدة أبداً. هذا الدرس يجمعها ثم يُسلّمها لـ B1.
 */

import type { Lesson } from "@/types/lesson";

import {lernziele, einfuehrung, review} from "./a2-13/intro";
import {theory} from "./a2-13/theorie";
import {reading, listening, pronunciation, writing} from "./a2-13/skills";
import {practiceBank, fehlerUndTipps} from "./a2-13/practice";
import {miniTest, flashcards, mediation, interaction} from "./a2-13/cards";

export const lessonA213: Lesson = {
  id: "a2-13",
  unitId: "a2-13",
  level: "A2",
  order: 1,
  titleDe: "A2 kompakt — die Brücke nach B1",
  titleAr: "A2 الشاملة — الجسر إلى B1",
  summary: "المراجعة الختامية لمستوى A2: الماضي التام (Perfekt)، الأفعال الناقصة، حروف الجر المتغيرة، الماضي البسيط war/hatte، الجمل الثانوية (dass, weil, wenn, ob)، حالة الجر Dativ، المقارنة والتفضيل، والأفعال الانعكاسية — مدموجةً في مواقف حية، مع اختبار تجميعي وتمهيد صريح لما يتغيّر في B1.",
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
