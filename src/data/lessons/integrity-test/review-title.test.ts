/**
 * integrity — عنوانُ المراجعة التراكمية — تستخرج الدالةُ كل المستويات المذكورة وترتّبها، ومكوّناتُ الدرس تشتقّ العنوان ولا تستعمل الوسم الثابت، ولا يتعارض العنوانُ المعروض مع وسوم بنوده
 * فُصل من integrity.test.ts في الدفعة 111 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `describe` منقولة حرفياً بإعدادها الداخلي؛ والمشتركات في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { reviewLevelLabel } from "@/lib/lesson/review-generator";
import { LESSONS } from "@/data/lessons";
import type { Exercise } from "@/types/lesson";

describe("عنوان المراجعة التراكمية", () => {
  /**
   * العطب: العنوان المعروض كان يُشتقّ من مستوى الدرس وحده
   * (`PREVIOUS_LEVEL_LABEL`)، فيقول «مراجعة تراكمية من A2» فوق بندٍ نصُّه
   * «مراجعة من A1» — أكثر من أربعين تناقضاً ظاهراً للمتعلّم. الإصلاح جعل
   * العنوان يُشتقّ من وسوم البنود نفسها.
   *
   * ملاحظة منهجية: فحصُ «هل يطابق العنوانُ البنودَ؟» تحصيلُ حاصل بعد الإصلاح،
   * لأن العنوان صار مشتقاً منها. لذا نثبّت هنا شيئين *قابلين* للانكسار:
   * (أ) سلوك الدالة نفسه على حالات معلومة، (ب) أن المكوّنات تستدعيها فعلاً
   * ولا تعود إلى الوسم الثابت.
   */
  it("تستخرج الدالة كل المستويات المذكورة وترتّبها", () => {
    const mk = (instructionAr: string) =>
      ({ id: "x", type: "multiple-choice", instructionAr, explanation: "", errorType: "grammar" }) as unknown as Exercise;

    // مستوى واحد ⇒ يُعرض وحده
    expect(reviewLevelLabel([mk("مراجعة من B1: أكمل")], "B2")).toBe("B1");
    // مستويان مختلطان ⇒ يُذكران معاً بترتيب تصاعدي مهما ورد ترتيبهما
    expect(reviewLevelLabel([mk("مراجعة من B1"), mk("مراجعة من A1")], "B1")).toBe("A1 وB1");
    // معرّف الدرس (a1-03) ليس وسم مستوى ⇒ لا يُلتقط وحده
    expect(reviewLevelLabel([mk("مراجعة (درس a1-03)")], "B2")).toBe("B1");
    // بلا وسم إطلاقاً ⇒ نعود إلى المستوى السابق كقيمة احتياطية
    expect(reviewLevelLabel([mk("مراجعة سريعة")], "A2")).toBe("A1");
  });

  it("مكوّنات الدرس تشتقّ العنوان ولا تستعمل الوسم الثابت", () => {
    for (const file of [
      "src/components/lesson/lesson-client.tsx",
    ]) {
      const src = readFileSync(resolve(process.cwd(), file), "utf8");
      expect(src, `${file} لا يستدعي reviewLevelLabel`).toMatch(/levelLabel=\{reviewLevelLabel\(/);
      expect(src, `${file} ما زال يستعمل PREVIOUS_LEVEL_LABEL للعنوان`).not.toMatch(
        /levelLabel=\{PREVIOUS_LEVEL_LABEL/,
      );
    }
  });

  it("لا يتعارض العنوان المعروض مع وسوم بنوده", () => {
    const bad: string[] = [];
    for (const lesson of LESSONS) {
      const review = (lesson.review ?? []) as Exercise[];
      if (review.length === 0) continue;
      const label = reviewLevelLabel(review, lesson.level);
      for (const ex of review) {
        const ins = ex.instructionAr ?? "";
        for (const m of ins.matchAll(/(?<![a-zA-Z-])(A1|A2|B1|B2)(?![-\d])/g)) {
          if (!label.includes(m[1]))
            bad.push(`${lesson.id}:${ex.id} البند يذكر ${m[1]} والعنوان «${label}»`);
        }
      }
    }
    expect(bad, `تعارض بين عنوان المراجعة وبنوده:\n${bad.join("\n")}`).toEqual([]);
  });
});
