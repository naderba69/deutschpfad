import {describe, expect, it} from "vitest";
import {A1_RAW_LESSONS} from "./a1-level";
import {A2_RAW_LESSONS} from "./a2-level";
import {B1_RAW_LESSONS} from "./b1-level";
import {B2_RAW_LESSONS} from "./b2-level";

/**
 * منع التوقف الدائم للبوابة.
 * القسم من نوع «تمرين» لا يكتمل إلا بإجابة صحيحة على كل مفتاح مطلوب، والقسم بلا مفاتيح
 * لا يكتمل أبداً (solved.ts). إن ظهر القسم في درس بلا مفاتيح حُجبت المرحلة كلها إلى الأبد.
 * هذا الاختبار يضمن أن كل قسم تمرين ظاهر دائماً له مفتاح واحد على الأقل.
 */
const all = [...A1_RAW_LESSONS, ...A2_RAW_LESSONS, ...B1_RAW_LESSONS, ...B2_RAW_LESSONS];

const requiredKeysFor = (lesson: (typeof all)[number]) => ({
  lesetext: (lesson.reading?.questions ?? []).map((q: {id: string}) => q.id),
  hoerverstehen: (lesson.listening?.questions ?? []).map((q: {id: string}) => q.id),
  schreiben: (lesson.writing ?? []).map((e: {id: string}) => e.id),
});

describe("لا يتوقف تقدّم البوابة بسبب قسم تمرين بلا مفاتيح", () => {
  it.each(all.map((l) => [l.id, l] as const))("%s: كل قسم تمرين ظاهر له مفتاح واحد على الأقل", (_id, lesson) => {
    for (const [section, keys] of Object.entries(requiredKeysFor(lesson))) {
      expect(keys.length, `${lesson.id}/${section}`).toBeGreaterThan(0);
    }
  });
});
