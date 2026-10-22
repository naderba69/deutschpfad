/**
 * a1-12 — كتلُ النظرية الأربع وجداولُها المفصّلة وتصنيفاتُ الأخطاء (جزء من تدقيق الدرس)
 * فُصل من a1-12.test.ts في الدفعة 106 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA112 } from "../a1-12";
import { findTask } from "./fixtures";

describe("A1-12 audited lesson content", () => {
  it("checks all four theory blocks, detailed tables, and mistake classifications", () => {
    expect(lessonA112.lernziele).toHaveLength(9);
    expect(lessonA112.theory.map((block) => block.id)).toEqual(["t1", "t2", "t3", "t4"]);

    for (const block of lessonA112.theory) {
      expect(block.titleAr.trim()).toBeTruthy();
      expect(block.titleDe.trim()).toBeTruthy();
      expect(block.explanationAr.trim()).toBeTruthy();
      expect(block.whyAr.trim()).toBeTruthy();
      expect(block.comparisonWithArabic.trim()).toBeTruthy();
      expect(block.eselsbruecke.trim()).toBeTruthy();
      expect(block.relatedRuleComparison?.title.trim()).toBeTruthy();
      expect(block.relatedRuleComparison?.content.trim()).toBeTruthy();
      expect(block.table?.columns.length).toBeGreaterThan(0);
      expect(block.table?.rows.length).toBeGreaterThan(0);
      for (const row of block.table?.rows ?? []) {
        expect(row.label.trim()).toBeTruthy();
        expect(row.cells).toHaveLength((block.table?.columns.length ?? 1) - 1);
        for (const cell of row.cells) expect(cell.trim()).toBeTruthy();
      }
      expect(block.examples.length).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(3);
      for (const example of block.examples) {
        expect(example.de.trim()).toBeTruthy();
        expect(example.ar.trim()).toBeTruthy();
      }
      for (const mistake of block.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim().length).toBeGreaterThanOrEqual(60);
        expect([
          "error",
          "contextual-alternative",
          "pedagogical-simplification",
          "unverified-claim",
        ]).toContain(mistake.classification);
      }
    }

    const hearingGoal = lessonA112.lernziele.find((goal) => goal.id === "z8");
    expect(hearingGoal?.de).toContain("Wetter-Hörtexte");
    expect(hearingGoal?.ar).toContain("ثلاثة نصوص استماع");
    const readingGoal = lessonA112.lernziele.find((goal) => goal.id === "z7");
    expect(readingGoal?.de).not.toContain("kurzen");
    expect(findTask("rq3").errorType).toBe("vocabulary");
    const weather = lessonA112.theory.find((block) => block.id === "t1");
    expect(weather?.explanationAr).toContain("لا قائمةً حصرية");
    expect(weather?.explanationAr).toContain("Mir ist kalt");
    expect(weather?.whyAr).toContain("كل es");
    expect(
      weather?.commonMistakes.find((mistake) => mistake.wrong.startsWith("Ich bin kalt"))
        ?.classification,
    ).toBe("contextual-alternative");
    expect(
      weather?.commonMistakes.some((mistake) => mistake.wrong.includes("Grade")),
    ).toBe(true);

    const werden = lessonA112.theory.find((block) => block.id === "t2");
    expect(werden?.explanationAr).toContain("werde · du wirst");
    expect(werden?.explanationAr).toContain("لا يقرر أنها كل الأفعال المساعدة");
    expect(werden?.explanationAr).toContain("Futur I");
    expect(werden?.explanationAr).toContain("sie (الجمع) / Sie (صيغة الاحترام)");
    expect(werden?.commonMistakes[0]?.whyAr).toContain("Konjunktiv I");
    expect(
      werden?.commonMistakes.find((mistake) => mistake.classification === "contextual-alternative"),
    ).toBeDefined();

    const stateChange = findTask("e6");
    expect(stateChange.type).toBe("fill-blank");
    expect(stateChange.errorType).toBe("grammar");
    if (stateChange.type === "fill-blank") {
      expect(stateChange.template).toContain("Am Nachmittag ist es warm");
      expect(stateChange.template).toContain("am Abend wieder kalt");
      expect(stateChange.instructionAr).toContain("بدء تحوّل متوقّع");
    }
    const changeTransformation = findTask("e24");
    expect(changeTransformation.errorType).toBe("grammar");

    const time = lessonA112.theory.find((block) => block.id === "t3");
    expect(time?.explanationAr).toContain("لا تشتقّ حروفها");
    expect(time?.explanationAr).toContain("in der Nacht");
    expect(time?.explanationAr).toContain("نقطة مرجعية مستقبلية في هذا السياق");
    expect(
      time?.commonMistakes.some((mistake) => mistake.classification === "unverified-claim"),
    ).toBe(true);

    const reviewNegation = findTask("r2");
    expect(reviewNegation.type).toBe("fill-blank");
    if (reviewNegation.type === "fill-blank") {
      expect(reviewNegation.hint).toContain("لا تعمم أن nicht لا يرد مع الأسماء");
      expect(reviewNegation.explanation).toContain("لا يعني ذلك أن nicht يمتنع مطلقاً");
    }

    const connectors = lessonA112.theory.find((block) => block.id === "t4");
    expect(connectors?.explanationAr).toContain("جمل خبرية مستقلة");
    expect(connectors?.explanationAr).toContain("لا توضع عادةً فاصلة");
    expect(connectors?.explanationAr).toContain("denn وweil");
    expect(connectors?.commonMistakes.slice(0, 3).every((mistake) => mistake.classification === "error")).toBe(
      true,
    );
    expect(connectors?.commonMistakes[3]?.classification).toBe("contextual-alternative");
    const connectorExercise = findTask("e19");
    expect(connectorExercise.type).toBe("fill-blank");
    if (connectorExercise.type === "fill-blank") {
      expect(connectorExercise.blanks.map((blank) => blank.correct)).toEqual([
        "aber", "denn", "oder", "und",
      ]);
      expect(connectorExercise.explanation).toContain("سياق بمعنى مختلف");
      expect(connectorExercise.instructionAr).toContain("العلاقة العربية");
      expect(connectorExercise.template).toContain("(تضاد)");
      expect(connectorExercise.template).toContain("(إضافة)");
    }

    expect(
      lessonA112.fehlerUndTipps.mistakes.map((mistake) => mistake.classification),
    ).toEqual(["contextual-alternative", "error", "error"]);
    expect(lessonA112.fehlerUndTipps.culturalNote.content).toContain(
      "لا تثبت هذه الأمثلة تفضيلاً ثقافياً عاماً",
    );
  });
});
