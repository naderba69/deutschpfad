import type { Lesson } from "@/types/lesson";
import { lessonA100 } from "@/data/lessons/a1/a1-00";
import { lessonA101 } from "@/data/lessons/a1/a1-01";
import { lessonA102 } from "@/data/lessons/a1/a1-02";
import { lessonA103 } from "@/data/lessons/a1/a1-03";
import { lessonA104 } from "@/data/lessons/a1/a1-04";
import { lessonA105 } from "@/data/lessons/a1/a1-05";
import { lessonA106 } from "@/data/lessons/a1/a1-06";
import { lessonA107 } from "@/data/lessons/a1/a1-07";
import { lessonA108 } from "@/data/lessons/a1/a1-08";
import { lessonA109 } from "@/data/lessons/a1/a1-09";
import { lessonA110 } from "@/data/lessons/a1/a1-10";
import { lessonA111 } from "@/data/lessons/a1/a1-11";
import { lessonA112 } from "@/data/lessons/a1/a1-12";
import { lessonA113 } from "@/data/lessons/a1/a1-13";
import { lessonA114 } from "@/data/lessons/a1/a1-14";
import { lessonA201 } from "@/data/lessons/a2/a2-01";
import { lessonA202 } from "@/data/lessons/a2/a2-02";
import { lessonA203 } from "@/data/lessons/a2/a2-03";
import { lessonA204 } from "@/data/lessons/a2/a2-04";
import { lessonA205 } from "@/data/lessons/a2/a2-05";
import { lessonA206 } from "@/data/lessons/a2/a2-06";
import { lessonA207 } from "@/data/lessons/a2/a2-07";
import { lessonA208 } from "@/data/lessons/a2/a2-08";
import { lessonA209 } from "@/data/lessons/a2/a2-09";
import { lessonA210 } from "@/data/lessons/a2/a2-10";
import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { lessonA212 } from "@/data/lessons/a2/a2-12";
import { lessonB101 } from "@/data/lessons/b1/b1-01";
import { lessonB102 } from "@/data/lessons/b1/b1-02";
import { lessonB103 } from "@/data/lessons/b1/b1-03";
import { lessonB104 } from "@/data/lessons/b1/b1-04";
import { lessonB105 } from "@/data/lessons/b1/b1-05";
import { lessonB106 } from "@/data/lessons/b1/b1-06";
import { lessonB107 } from "@/data/lessons/b1/b1-07";
import { lessonB108 } from "@/data/lessons/b1/b1-08";
import { lessonB109 } from "@/data/lessons/b1/b1-09";
import { lessonB110 } from "@/data/lessons/b1/b1-10";
import { lessonB111 } from "@/data/lessons/b1/b1-11";
import { lessonB201 } from "@/data/lessons/b2/b2-01";
import { lessonB202 } from "@/data/lessons/b2/b2-02";
import { lessonB203 } from "@/data/lessons/b2/b2-03";
import { lessonB204 } from "@/data/lessons/b2/b2-04";
import { lessonB205 } from "@/data/lessons/b2/b2-05";
import { lessonB206 } from "@/data/lessons/b2/b2-06";
import { lessonB207 } from "@/data/lessons/b2/b2-07";
import { lessonB208 } from "@/data/lessons/b2/b2-08";
import { lessonB209 } from "@/data/lessons/b2/b2-09";
import { lessonB210 } from "@/data/lessons/b2/b2-10";

/**
 * ═══════════════════════════════════════════════════════════
 *  مكتبة الدروس — السجل المركزي الكامل
 *  A1 (15) + A2 (12) + B1 (11) + B2 (10) = 48 درساً
 *  (A1-13 = المراجعة الشاملة التجميعية)
 *  — اكتمال المحتوى الأكاديمي (المراحل 6-9) —
 * ═══════════════════════════════════════════════════════════
 */

export const LESSONS: Lesson[] = [
  /* A1 — 15 */
  lessonA100, lessonA101, lessonA102, lessonA103, lessonA104, lessonA105,
  lessonA106, lessonA107, lessonA108, lessonA109, lessonA110, lessonA111, lessonA112, lessonA113, lessonA114,
  /* A2 — 12 */
  lessonA201, lessonA202, lessonA203, lessonA204, lessonA205, lessonA206,
  lessonA207, lessonA208, lessonA209, lessonA210, lessonA211, lessonA212,
  /* B1 — 11 */
  lessonB101, lessonB102, lessonB103, lessonB104, lessonB105,
  lessonB106, lessonB107, lessonB108, lessonB109, lessonB110, lessonB111,
  /* B2 — 10 */
  lessonB201, lessonB202, lessonB203, lessonB204, lessonB205,
  lessonB206, lessonB207, lessonB208, lessonB209, lessonB210,
];

/** إيجاد درس بمعرّفه */
export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

/** دروس وحدة معينة */
export function getLessonsByUnit(unitId: string): Lesson[] {
  return LESSONS.filter((l) => l.unitId === unitId).sort((a, b) => a.order - b.order);
}

/** خريطة: معرف الوحدة ← الدرس الأول المتاح فيها (لروابط خارطة الطريق) */
export function getFirstLessonForUnit(unitId: string): Lesson | undefined {
  return getLessonsByUnit(unitId)[0];
}

/** كل دروس مستوى */
export function getLessonsByLevel(level: string): Lesson[] {
  return LESSONS.filter((l) => l.level === level).sort((a, b) => a.order - b.order);
}

export const TOTAL_LESSONS_AVAILABLE = LESSONS.length;
