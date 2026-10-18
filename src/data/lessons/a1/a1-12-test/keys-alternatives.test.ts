/**
 * a1-12 — مفاتيحُ كل مهمة في المراجعة والتدريب والاختبار المصغّر والكتابة والقراءة والاستماع · وقبولُ كل بديلٍ مذكورٍ صراحةً بما فيه كل sampleAnswer (جزء من تدقيق الدرس)
 * فُصل من a1-12.test.ts في الدفعة 106 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { lessonA112 } from "../a1-12";
import { reviewAnswers } from "./fixtures";
import { practiceAnswers } from "./fixtures";
import { miniTestAnswers } from "./fixtures";
import { writingAnswers } from "./fixtures";
import { readingAnswers } from "./fixtures";
import { listeningAnswers } from "./fixtures";
import { reading } from "./fixtures";
import { allTasks } from "./fixtures";
import { findTask } from "./fixtures";
import { expectListedAlternativesRejected } from "./fixtures";

describe("A1-12 audited lesson content", () => {
  it("keys every review, practice, mini-test, writing, reading, and listening task", () => {
    const answerKey = {
      ...reviewAnswers,
      ...practiceAnswers,
      ...miniTestAnswers,
      ...writingAnswers,
      ...readingAnswers,
      ...listeningAnswers,
    };
    const taskIds = allTasks().map((task) => task.id).sort();
    expect(taskIds).toEqual(Object.keys(answerKey).sort());
    expect(taskIds).toHaveLength(45);
    expect(new Set(taskIds).size).toBe(taskIds.length);
    expect(lessonA112.review).toHaveLength(3);
    expect(lessonA112.practiceBank).toHaveLength(26);
    expect(lessonA112.miniTest).toHaveLength(5);
    expect(lessonA112.writing).toHaveLength(3);
    expect(reading().questions).toHaveLength(5);
    expect(lessonA112.listening.questions).toHaveLength(3);

    for (const [id, answer] of Object.entries(answerKey)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts all explicitly listed alternatives, including every sampleAnswer", () => {
    for (const task of allTasks()) {
      if (task.type !== "transformation") continue;
      expect(task.caseSensitive, `${task.id} preserves German capitalization`).toBe(true);
      expect(task.acceptedAnswers).toContain(task.sampleAnswer);
      for (const answer of task.acceptedAnswers) {
        expect(
          evaluateExercise(task, answer).isCorrect,
          `${task.id}: ${answer}`,
        ).toBe(true);
      }
    }

    const rainOrder = findTask("e13");
    expect(rainOrder.type).toBe("transformation");
    expect(rainOrder.errorType).toBe("word-order");
    if (rainOrder.type === "transformation") {
      expect(rainOrder.acceptedAnswers).toContain("Morgen regnet es.");
      expect(rainOrder.acceptedAnswers).toContain("Es regnet morgen.");
      expect(evaluateExercise(rainOrder, "morgen regnet es.").isCorrect).toBe(false);
    }

    const todayRain = findTask("e4");
    expect(todayRain.type).toBe("word-ordering");
    if (todayRain.type === "word-ordering")
      expect(todayRain.acceptedSentences).toContain("Heute regnet es.");

    const summerHeat = findTask("e14");
    expect(summerHeat.type).toBe("word-ordering");
    if (summerHeat.type === "word-ordering") {
      expect(summerHeat.acceptedSentences).toContain("Es ist im Sommer sehr heiß.");
      expect(summerHeat.acceptedSentences).toContain("Es ist sehr heiß im Sommer.");
    }

    const weatherMeaning = findTask("m4");
    expect(weatherMeaning.type).toBe("transformation");
    if (weatherMeaning.type === "transformation") {
      expect(weatherMeaning.prompt).toContain("Ich werde kalt");
      expect(weatherMeaning.acceptedAnswers).toContain("Es wird kalt.");
    }

    const winterCold = findTask("m3");
    expect(winterCold.type).toBe("word-ordering");
    if (winterCold.type === "word-ordering") {
      expect(winterCold.acceptedSentences).toContain("Es wird im Winter kalt.");
      expect(winterCold.acceptedSentences).toContain("Es wird kalt im Winter.");
    }

    const umbrellaReason = findTask("e23");
    expect(umbrellaReason.type).toBe("word-ordering");
    if (umbrellaReason.type === "word-ordering") {
      expect(umbrellaReason.acceptedSentences).toContain(
        "Den Schirm nehme ich mit, denn es regnet.",
      );
      expect(
        evaluateExercise(umbrellaReason, [
          "Den", "Schirm", "nehme", "ich", "mit", ",", "denn", "es", "regnet", ".",
        ]).isCorrect,
      ).toBe(true);
    }

    const winterAnswer = findTask("e15");
    expect(winterAnswer.type).toBe("transformation");
    if (winterAnswer.type === "transformation") {
      expect(winterAnswer.acceptedAnswers).toContain("In Deutschland ist es im Winter kalt.");
      expect(winterAnswer.acceptedAnswers).toContain("Im Winter ist es kalt in Deutschland.");
    }

    const timeWindow = findTask("e26");
    expect(timeWindow.type).toBe("fill-blank");
    if (timeWindow.type === "fill-blank") {
      expect(timeWindow.instructionAr).toContain("لحظة الكلام");
      expect(timeWindow.blanks[1]?.options).not.toContain("nach");
      expect(timeWindow.explanation).toContain("قد تستعمل nach einer Stunde");
    }

    const weatherWriting = findTask("w1");
    expect(weatherWriting.type).toBe("transformation");
    if (weatherWriting.type === "transformation") {
      expect(weatherWriting.acceptedAnswers).toContain("Heute ist es warm und sonnig.");
      expect(weatherWriting.acceptedAnswers).toContain("Das Wetter ist heute warm und sonnig.");
      expect(evaluateExercise(weatherWriting, "heute ist es sonnig und warm.").isCorrect).toBe(false);
    }
  });
});
