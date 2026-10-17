import { describe, expect, it } from "vitest";

import { getLessonMeta, LESSON_META } from "@/data/lessons/meta";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";
import { lessonA112 } from "./a1-12";

const reviewAnswers: Record<string, unknown> = {
  r1: "Zwei Euro fünfzig.",
  r2: ["bin kein", "kein"],
  r3: "zum Bahnhof",
};

const practiceAnswers: Record<string, unknown> = {
  e1: "Es",
  e2: "wird",
  e3: [
    { left: "die Sonne", right: "الشمس" },
    { left: "der Regen", right: "المطر" },
    { left: "der Schnee", right: "الثلج" },
    { left: "der Wind", right: "الريح" },
  ],
  e4: ["Es", "regnet", "heute", "."],
  e5: "Mir ist",
  e6: ["ist", "wird"],
  e7: "Im Sommer wird es warm.",
  e8: "تثلج",
  e9: "Das",
  e10: "Die Sonne scheint und der Wind weht.",
  e11: ["Im", "Am", "Um"],
  e12: "Am",
  e13: "Morgen regnet es.",
  e14: ["Im", "Sommer", "ist", "es", "sehr", "heiß", "."],
  e15: "Im Winter ist es in Deutschland kalt.",
  e16: "Mir ist",
  e17: "regnet",
  e18: "wirst",
  e19: ["aber", "denn", "oder", "und"],
  e20: "die Sonne scheint",
  e21: "Im … am",
  e22: "In",
  e23: [
    "Ich",
    "nehme",
    "den",
    "Schirm",
    "mit",
    ",",
    "denn",
    "es",
    "regnet",
    ".",
  ],
  e24: "Es wird kalt.",
  e25: [
    { left: "es ist + صفة", right: "Es ist neblig." },
    { left: "فعل طقس مع es صوريّ", right: "Es schneit." },
    { left: "اسم + فعل", right: "Der Wind weht." },
    { left: "إحساس شخصيّ", right: "Mir ist kalt." },
    { left: "تحوّل", right: "Es wird kälter." },
  ],
  e26: ["seit", "in"],
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "Es",
  m2: "werden",
  m3: ["Im", "Winter", "wird", "es", "kalt", "."],
  m4: "Es wird kalt.",
  m5: ["werde", "wird", "werdet"],
};

const writingAnswers: Record<string, unknown> = {
  w1: "Heute ist es sonnig und warm.",
  w2: ["werde", "wirst", "wird", "werden"],
  w3: "Im Winter wird es kalt.",
};

const readingAnswers: Record<string, string> = {
  rq1: "Seit einem Jahr",
  rq2: "Er ist schön, aber kurz.",
  rq3: "Denn das Wetter ändert sich schnell.",
  rq4: "Minus fünf Grad",
  rq5: "Den Frühling",
};

const listeningAnswers: Record<string, string> = {
  q1: "kalt und windig",
  q2: "Es regnet.",
  q3: "oft sehr heiß und sonnig",
};

function reading() {
  const value = lessonA112.reading;
  if (!value) throw new Error("A1-12 reading passage is required");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA112.review ?? []),
    ...lessonA112.practiceBank,
    ...lessonA112.miniTest,
    ...lessonA112.writing,
    ...reading().questions,
    ...lessonA112.listening.questions,
  ];
}

function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-12 task ${id} is missing`);
  return task;
}

function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    expect(new Set(task.options.map((option) => option.trim().toLowerCase())).size).toBe(
      task.options.length,
    );
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(
          evaluateExercise(task, option).isCorrect,
          `${task.id} option ${index}: ${option}`,
        ).toBe(false);
      }
    });
  } else if (task.type === "error-correction") {
    expect(task.isAlreadyCorrect).not.toBe(true);
    expect(task.wrongSentence).toContain(task.wrongWord);
    expect(task.options.filter((option) => option === task.correctWord)).toHaveLength(1);
    for (const option of task.options) {
      if (option !== task.correctWord) {
        expect(
          evaluateExercise(task, option).isCorrect,
          `${task.id} correction option: ${option}`,
        ).toBe(false);
      }
    }
    expect(
      evaluateExercise(task, NO_ERROR_OPTION).isCorrect,
      `${task.id} no-error option`,
    ).toBe(false);
  } else if (task.type === "fill-blank") {
    const answers = task.blanks.map((blank) => blank.correct);
    task.blanks.forEach((blank, index) => {
      expect(blank.options).toContain(blank.correct);
      expect(new Set(blank.options).size).toBe(blank.options?.length);
      for (const option of blank.options ?? []) {
        if (option !== blank.correct) {
          const nearMiss = [...answers];
          nearMiss[index] = option;
          expect(
            evaluateExercise(task, nearMiss).isCorrect,
            `${task.id} blank ${index} option: ${option}`,
          ).toBe(false);
        }
      }
    });
  } else if (task.type === "word-ordering") {
    const canonicalTokens = task.correctSentence
      .replace(/[.!?]+$/, "")
      .split(/\s+/);
    canonicalTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
    expect(
      evaluateExercise(task, canonicalTokens).isCorrect,
      `${task.id} canonical ordering`,
    ).toBe(true);

    for (const sentence of task.acceptedSentences ?? []) {
      const orderedTokens = sentence.replace(/[.!?]+$/, "").split(/\s+/);
      orderedTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
      expect(
        evaluateExercise(task, orderedTokens).isCorrect,
        `${task.id} accepted order: ${sentence}`,
      ).toBe(true);
    }

    const wrongOrder = [...canonicalTokens];
    [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
    expect(
      evaluateExercise(task, wrongOrder).isCorrect,
      `${task.id} swapped first two words`,
    ).toBe(false);
  } else if (task.type === "matching" && task.pairs.length > 1) {
    const wrongPairs = task.pairs.map((pair, index) => ({
      left: pair.left,
      right: task.pairs[(index + 1) % task.pairs.length].right,
    }));
    expect(
      evaluateExercise(task, wrongPairs).isCorrect,
      `${task.id} mismatched pairs`,
    ).toBe(false);
  } else if (task.type === "dictation") {
    expect(
      evaluateExercise(task, "__not_the_audio_text__").isCorrect,
      `${task.id} wrong dictation`,
    ).toBe(false);
  } else if (task.type === "transformation") {
    expect(task.acceptedAnswers).toContain(task.sampleAnswer);
    for (const answer of task.acceptedAnswers) {
      expect(
        evaluateExercise(task, answer).isCorrect,
        `${task.id} accepted transformation: ${answer}`,
      ).toBe(true);
    }
    expect(
      evaluateExercise(task, "__not_an_accepted_answer__").isCorrect,
      `${task.id} rejected transformation`,
    ).toBe(false);
  }
}

function validTaskIds(): Set<string> {
  const practiceTaskIds = lessonA112.practiceBank.flatMap((task, index) => [
    `practice:${lessonA112.id}:${task.id}`,
    ...(index < 4 ? [`flow-practice:${lessonA112.id}:${task.id}`] : []),
  ]);
  return new Set([
    ...practiceTaskIds,
    ...lessonA112.miniTest.map((task) => `mini-test:${lessonA112.id}:${task.id}`),
    ...lessonA112.writing.map((task) => `writing:${lessonA112.id}:${task.id}`),
    ...reading().questions.map((task) => `reading:${reading().id}:${task.id}`),
    ...lessonA112.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
  ]);
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA112.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-12 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-12 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA112.id,
    taskId,
  };
}

function allCorrectGoalEvents(goalId: string): AnalyticsEvent[] {
  const goal = lessonA112.lernziele.find((candidate) => candidate.id === goalId);
  if (!goal?.evidence) throw new Error(`A1-12 ${goalId} has no evidence mapping`);
  return goal.evidence.exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId, true));
}

function hasDurationField(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasDurationField);
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(
    ([key, nested]) =>
      /^(duration|durationMinutes|lessonMinutes|minutes)$/i.test(key) ||
      hasDurationField(nested),
  );
}

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
    expect(hearingGoal?.ar).toContain("نصّي استماع");
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

  it("audits the whole reading passage, Arabic paragraphs, glossary, and referenced details", () => {
    const text = reading();
    expect(text.titleDe).toBe("Wetter in den vier Jahreszeiten");
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    for (const [index, paragraph] of text.paragraphs.entries()) {
      expect(paragraph.trim(), `reading paragraph ${index + 1}`).toBeTruthy();
      expect(text.paragraphsAr[index]?.trim(), `Arabic paragraph ${index + 1}`).toBeTruthy();
    }
    const joined = text.paragraphs.join(" ").toLowerCase();
    expect(joined).not.toContain(" soll ");
    expect(joined).not.toContain("habe ich nie eine dicke jacke gebraucht");
    expect(text.paragraphs[1]).toContain("Für mich ist der Sommer hier kurz");
    expect(text.paragraphs[3]).toContain("mir ist immer kalt");
    expect(text.paragraphs[5]).toContain("Morgen regnet es hier");

    expect(text.glossary).toHaveLength(12);
    for (const entry of text.glossary) {
      expect(entry.de.trim()).toBeTruthy();
      expect(entry.ar.trim()).toBeTruthy();
      expect(entry.noteAr?.trim()).toBeTruthy();
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(3, head.length - 2)).toLowerCase();
      if (stem.length >= 3) expect(joined, `${entry.de} appears in passage`).toContain(stem);
    }
    expect(text.glossary.find((entry) => entry.de === "in der Nacht")?.noteAr).toContain(
      "يُحفظ كما هو",
    );
    expect(text.glossary.find((entry) => entry.de === "mir ist kalt")?.noteAr).toContain(
      "لا يعني أن Ich bin kalt خطأ مطلق",
    );
    expect(text.glossary.find((entry) => entry.de === "die Lieblingsjahreszeit")?.noteAr).toContain(
      "مكوّن أول في مركّب",
    );

    expect(text.questions).toHaveLength(5);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(text.paragraphs.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
    }
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(6);
    expect(text.discussionAr).toContain("غير مسجّل كدليل");
  });

  it("checks every line and question in both listening texts without treating transcript reveal as performance", () => {
    expect(lessonA112.listening.items).toHaveLength(2);
    expect(lessonA112.listening.items.map((item) => item.lines.length)).toEqual([4, 4]);
    const itemsById = new Map(lessonA112.listening.items.map((item) => [item.id, item]));
    for (const item of lessonA112.listening.items) {
      expect(item.title.trim()).toBeTruthy();
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }
    expect(itemsById.get("l1")?.lines[0]?.de).toContain("heute in Berlin");
    expect(itemsById.get("l2")?.lines[1]?.de).toContain("Bei uns in Tunesien");
    expect(itemsById.get("l2")?.lines[1]?.de).toContain("oft sehr heiß");
    expect(lessonA112.listening.questions.find((question) => question.id === "q3")?.questionDe).toBe(
      "Wie ist das Wetter im Sommer in Tunesien?",
    );

    for (const question of lessonA112.listening.questions) {
      expect(itemsById.has(question.itemId)).toBe(true);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(getListeningQuestionTaskId(lessonA112.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      expect(getListeningQuestionTaskId(lessonA112.id, question.itemId, question.id, true)).toBe(
        `listening-transcript:${lessonA112.id}:${question.itemId}:${question.id}`,
      );
    }

    const listeningGoal = lessonA112.lernziele.find((goal) => goal.id === "z8");
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
    ]);
    expect(listeningGoal?.evidence?.labelAr).toContain("قبل كشف");
    expect(
      lessonA112.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((taskId) => taskId.startsWith("flow-listening:")),
      ),
    ).toBe(false);
  });

  it("checks pronunciation practice, writing tasks, self-check activities, and all 25 flashcards", () => {
    expect(lessonA112.pronunciation.items).toHaveLength(6);
    expect(lessonA112.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA112.pronunciation.tip.trim()).toBeTruthy();
    for (const item of lessonA112.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const item of lessonA112.pronunciation.shadowing ?? []) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.tip?.trim()).toBeTruthy();
    }
    expect(
      lessonA112.pronunciation.items.find((item) => item.de === "die Sonne")?.note,
    ).toContain("[ˈzɔnə]");
    expect(
      lessonA112.pronunciation.items.find((item) => item.de === "der Regen")?.note,
    ).toContain("لا صوت غ /ɣ/");
    expect(
      lessonA112.pronunciation.items.find((item) => item.de === "der Wind")?.note,
    ).toContain("/v/");
    expect(lessonA112.pronunciation.shadowing?.[2]?.tip).toContain("/g/");
    expect(lessonA112.pronunciation.shadowing?.[0]?.tip).toContain("/kalt/");

    for (const id of ["e10", "w3"]) {
      const dictation = findTask(id);
      expect(dictation.type).toBe("dictation");
      if (dictation.type === "dictation") {
        expect(dictation.caseSensitive, `${id} preserves German capitalization`).toBe(true);
        expect(evaluateExercise(dictation, dictation.audioText.toLowerCase()).isCorrect).toBe(false);
      }
    }

    expect(lessonA112.writing).toHaveLength(3);
    expect(lessonA112.mediation).toHaveLength(1);
    expect(lessonA112.mediation?.[0].keyPointsAr).toHaveLength(3);
    expect(lessonA112.mediation?.[0].taskAr).toContain("ليست دليلاً مسجلاً");
    expect(lessonA112.mediation?.[0].sourceDe).toContain("Es sind 15 Grad.");
    const personalWarmth = findTask("e16");
    expect(personalWarmth.type).toBe("multiple-choice");
    if (personalWarmth.type === "multiple-choice") {
      expect(personalWarmth.questionDe).toContain("Ich bin gerade gelaufen");
      expect(personalWarmth.explanation).toContain("Mir ist warm");
    }
    expect(lessonA112.interaction).toHaveLength(1);
    expect(lessonA112.interaction?.[0].rounds).toHaveLength(2);
    expect(lessonA112.interaction?.[0].rounds[0]?.options[1]?.de).toBe(
      "Heute ist es kalt und regnerisch.",
    );
    expect(lessonA112.interaction?.[0].strategyAr).toContain("لا يقيس إنتاج كلام شفهي");
    for (const round of lessonA112.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options.length).toBeGreaterThanOrEqual(2);
    }
    expect(reading().discussionAr).toContain("غير مسجّل كدليل");

    expect(lessonA112.flashcards).toHaveLength(25);
    expect(new Set(lessonA112.flashcards.map((card) => card.id)).size).toBe(25);
    expect(new Set(lessonA112.flashcards.map((card) => card.de.trim().toLowerCase())).size).toBe(25);
    for (const card of lessonA112.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }
    expect(lessonA112.flashcards.find((card) => card.id === "fc3")?.example).toBe(
      "Der Regen beginnt.",
    );
    expect(lessonA112.flashcards.find((card) => card.id === "fc18")?.ar).toContain(
      "في هذا السياق",
    );
  });

  it("maps every goal to real tasks and requires correct results, never opening or revealed transcripts", () => {
    const actualTaskIds = validTaskIds();
    expect(lessonA112.lernziele).toHaveLength(9);
    for (const goal of lessonA112.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      expect(goal.evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(goal.evidence?.taskIds?.length).toBeGreaterThan(0);
      expect(goal.evidence?.completion).toBe("all-correct");
      expect(goal.evidence?.labelAr.trim()).toBeTruthy();
      expect(new Set(goal.evidence?.exerciseIds).size).toBe(goal.evidence?.exerciseIds.length);
      expect(new Set(goal.evidence?.taskIds).size).toBe(goal.evidence?.taskIds?.length);

      for (const exerciseId of goal.evidence?.exerciseIds ?? []) {
        expect(
          goal.evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`)),
          `${goal.id} maps ${exerciseId}`,
        ).toBe(true);
        expect(findTask(exerciseId), `${goal.id} task exists: ${exerciseId}`).toBeDefined();
      }
      for (const taskId of goal.evidence?.taskIds ?? [])
        expect(actualTaskIds.has(taskId), `${goal.id} real taskId ${taskId}`).toBe(true);

      expect(getGoalEvidenceStatus(goal, lessonA112.id, [])).toBe("pending");
      const openedOnly: AnalyticsEvent = {
        type: "lesson-view",
        ts: 1,
        lessonId: lessonA112.id,
      };
      expect(getGoalEvidenceStatus(goal, lessonA112.id, [openedOnly])).toBe("pending");

      const events = allCorrectGoalEvents(goal.id);
      expect(getGoalEvidenceStatus(goal, lessonA112.id, events)).toBe("evidenced");
      if ((goal.evidence?.exerciseIds.length ?? 0) > 1)
        expect(getGoalEvidenceStatus(goal, lessonA112.id, events.slice(0, 1))).toBe("pending");

      const first = events[0];
      if (first?.type !== "exercise-result") throw new Error("Expected exercise-result evidence");
      expect(
        getGoalEvidenceStatus(goal, lessonA112.id, [
          { ...first, correct: false },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA112.id, [
          { ...first, lessonId: "a1-11" },
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA112.id, [
          { ...first, taskId: `flow-listening:${lessonA112.id}:unrelated:${first.exerciseId}` },
          ...events.slice(1),
        ]),
      ).toBe("pending");

      if (goal.id === "z8") {
        const revealed = events.map((event) => {
          if (event.type !== "exercise-result") return event;
          const question = lessonA112.listening.questions.find(
            (candidate) => candidate.id === event.exerciseId,
          );
          if (!question) throw new Error(`Missing A1-12 listening question ${event.exerciseId}`);
          return {
            ...event,
            taskId: getListeningQuestionTaskId(
              lessonA112.id,
              question.itemId,
              question.id,
              true,
            ),
          };
        });
        expect(getGoalEvidenceStatus(goal, lessonA112.id, revealed)).toBe("pending");
      }
    }

    expect(
      lessonA112.lernziele.some((goal) =>
        goal.evidence?.taskIds?.some((taskId) => /^(?:mediation|interaction|speaking|flow-listening):/.test(taskId)),
      ),
    ).toBe(false);
    expect(lessonA112.lernziele.find((goal) => goal.id === "z9")?.evidence?.taskIds).toEqual([
      "writing:a1-12:w1",
    ]);
  });

  it("has no lesson-duration field or Goethe/CEFR endorsement claim", () => {
    const metadata = getLessonMeta(lessonA112.id);
    expect(metadata).toBeDefined();
    expect(LESSON_META.some((item) => item.id === lessonA112.id)).toBe(true);
    expect(hasDurationField(lessonA112)).toBe(false);
    expect(hasDurationField(metadata)).toBe(false);
    expect(JSON.stringify(lessonA112)).not.toMatch(/Goethe|CEFR/i);
    expect(JSON.stringify(metadata)).not.toMatch(/Goethe|CEFR/i);
  });
});
