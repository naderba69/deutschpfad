/**
 * a2-03 — دقةُ ملاحظات النطق ونطاقُ الكتابة والوساطة والتفاعل والبطاقات · واكتمالُ جداول النظرية والتصحيحات المُصنّفة دون ادّعاء زائد (جزء من تدقيق الدرس)
 * فُصل من a2-03.test.ts في الدفعة 109 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA203 } from "@/data/lessons/a2/a2-03";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { ids } from "./fixtures";

describe("A2-03 audited lesson", () => {
  it("keeps pronunciation notes accurate and writing, mediation, interaction, and cards scoped", () => {
    expect(lessonA203.pronunciation.items).toHaveLength(6);
    expect(lessonA203.pronunciation.items.every((item) => item.de && item.ar && item.note)).toBe(true);
    expect(lessonA203.pronunciation.items.find((item) => item.de === "die Rechnung")?.note).toContain(
      "[ç]",
    );
    expect(lessonA203.pronunciation.items.find((item) => item.de === "die Küche")?.note).toContain(
      "[ʏ]",
    );
    expect(lessonA203.pronunciation.tip).toContain("[x]");
    expect(lessonA203.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA203.pronunciation.shadowing?.every((item) => item.de && item.ar && item.tip)).toBe(true);
    expect(
      lessonA203.pronunciation.shadowing?.some((item) =>
        /مُوخشـتِه|ريش-نونغ|خ حلقية/.test(item.tip ?? ""),
      ),
    ).toBe(false);

    expect(lessonA203.writing).toHaveLength(3);
    const writingRequest = lessonA203.writing.find((exercise) => exercise.id === "w1");
    if (writingRequest?.type !== "transformation") throw new Error("w1 must remain transformation");
    expect(writingRequest.acceptedAnswers).toContain(writingRequest.sampleAnswer);
    expect(evaluateExercise(writingRequest, writingRequest.sampleAnswer).isCorrect).toBe(true);
    expect(lessonA203.writing.find((exercise) => exercise.id === "w2")?.type).toBe("fill-blank");
    expect(lessonA203.writing.find((exercise) => exercise.id === "w3")?.type).toBe("dictation");

    const mediation = lessonA203.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe).toContain("Vorspeise");
    expect(mediation[0].sourceDe).toContain("Hauptgericht");
    expect(mediation[0].sourceDe).toContain("Dessert");
    expect(mediation[0].modelAnswerAr?.trim()).toBeTruthy();

    const interactions = lessonA203.interaction ?? [];
    expect(interactions).toHaveLength(1);
    expect(interactions[0].rounds).toHaveLength(2);
    for (const round of interactions[0].rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options).toHaveLength(2);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(
        true,
      );
    }
    expect(interactions[0].rounds[0].options.find((option) => !option.best)?.de).toContain(
      "die Rechnung",
    );
    expect(interactions[0].rounds[1].options.find((option) => !option.best)?.de).toContain(
      "Sie sind schrecklich",
    );
    expect(interactions[0].strategyAr).toContain("اربط الردّ بالسؤال");

    expect(ids(lessonA203.flashcards)).toEqual(
      Array.from({length: 26}, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(lessonA203.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(
      true,
    );
    expect(lessonA203.flashcards.find((card) => card.id === "fc11")?.ar).not.toContain("أرقى");
    expect(lessonA203.flashcards.find((card) => card.id === "fc26")?.ar).toContain("بحسب الموقف");
  });

  it("keeps the theory tables and classified corrections complete without overclaiming", () => {
    expect(ids(lessonA203.theory)).toEqual(["t1", "t2", "t3", "t4"]);
    expect(lessonA203.theory.map((theory) => theory.examples.length)).toEqual([8, 8, 8, 8]);
    expect(lessonA203.theory.map((theory) => theory.commonMistakes.length)).toEqual([5, 5, 5, 5]);
    for (const theory of lessonA203.theory) {
      expect(theory.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(
        theory.commonMistakes.every(
          (mistake) => mistake.wrong && mistake.right && mistake.whyAr && mistake.classification,
        ),
      ).toBe(true);
      if (theory.table) {
        expect(theory.table.rows.length).toBeGreaterThan(0);
        for (const row of theory.table.rows) {
          expect(row.cells).toHaveLength(theory.table.columns.length - 1);
        }
      }
    }

    expect(lessonA203.theory.find((theory) => theory.id === "t1")?.explanationAr).toContain(
      "لا على ترتيبها من الأكثر إلى الأقل",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.explanationAr).toContain(
      "Ich schmecke die Suppe",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison?.content).toContain(
      "A1-04",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison?.content).toContain(
      "A1-08",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t2")?.relatedRuleComparison?.content).toContain(
      "A2-09",
    );
    expect(lessonA203.theory.find((theory) => theory.id === "t3")?.commonMistakes.every((mistake) =>
      mistake.classification === "unverified-claim",
    )).toBe(true);
    expect(lessonA203.theory.find((theory) => theory.id === "t4")?.explanationAr).toContain(
      "لا شرح كامل لتصريف الصفات",
    );
    expect(lessonA203.fehlerUndTipps?.culturalNote?.content).toContain("اختيارية");
    expect(lessonA203.fehlerUndTipps?.culturalNote?.content).toContain("برلين");
  });
});
