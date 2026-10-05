import {describe, expect, it} from "vitest";

import {lessonA104} from "@/data/lessons/a1/a1-04";
import {lessonA106} from "@/data/lessons/a1/a1-06";
import {lessonA108} from "@/data/lessons/a1/a1-08";
import {evaluateExercise} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const practiceAnswers: Record<string, unknown> = {
  e1: "rot",
  e2: "trägst",
  e3: [
    {left: "weiß", right: "أبيض"},
    {left: "schwarz", right: "أسود"},
    {left: "gelb", right: "أصفر"},
    {left: "braun", right: "بني"},
  ],
  e4: ["Die", "Jacke", "ist", "blau", "."],
  e5: "sind",
  e6: ["trage", "trägst", "trägt"],
  e7: "Wie findest du meine Jacke?",
  e8: "أرتدي نظارة",
  e9: "schön",
  e10: "Meine Mütze ist rot.",
  e11: ["Dieses", "Diese", "Dieser"],
  e12: "Diese",
  e13: "Welchen",
  e14: ["Welche", "Größe", "haben", "Sie", "?"],
  e15: [
    {left: "der Rock", right: "dieser Rock"},
    {left: "die Jacke", right: "diese Jacke"},
    {left: "das Kleid", right: "dieses Kleid"},
    {left: "die Socken (ج)", right: "diese Socken"},
  ],
  e16: "gefallen",
  e17: "passt",
  e18: "Das Hemd gefällt mir",
  e19: "mir",
  e20: ["gefällt", "gefallen"],
  e21: ["Wie", "gefällt", "Ihnen", "dieser", "Mantel", "?"],
  e22: "Die Jacke gefällt mir.",
  e23: "Ihnen",
  e24: [
    {left: "gefallen", right: "الذوق: شكله جميل"},
    {left: "passen", right: "المقاس: يناسبني"},
    {left: "stehen", right: "اللياقة: يليق بك"},
    {left: "anziehen", right: "الارتداء: ألبسه الآن"},
  ],
  e25: "Sie gefällt mir, aber sie passt mir nicht.",
  e26: [
    {left: "das Hemd", right: "القميص"},
    {left: "die Hose", right: "البنطال"},
    {left: "die Jacke", right: "السترة"},
    {left: "der Mantel", right: "المعطف"},
    {left: "das Kleid", right: "الفستان"},
    {left: "der Pullover", right: "الكنزة"},
    {left: "der Schuh", right: "حذاء واحد"},
    {left: "die Schuhe", right: "الأحذية (جمع)"},
  ],
  e27: "Doch",
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "blau",
  m2: "trägst",
  m3: ["Wie", "findest", "du", "meine", "Jacke", "?"],
  m4: "rot",
  m5: ["schwarz", "weiß", "gelb"],
};

const readingAnswers: Record<string, string> = {
  rq1: "Sie ist zu teuer.",
  rq2: "Sie ist zu klein.",
  rq3: "Weil die Frage negativ war und die Jacke ihr gefällt.",
  rq4: "Fünf Euro",
  rq5: "passen",
};

const listeningAnswers: Record<string, string> = {
  q1: "eine Jacke in Blau",
  q2: "39 Euro",
  q3: "ein Kleid",
};

const writingAnswers: Record<string, unknown> = {
  w1: "Ich trage eine Jacke. Die Jacke ist blau.",
  w2: ["blau", "grün", "rot"],
  w3: "Ich finde das Kleid sehr schön.",
};

function allTasks(): Exercise[] {
  return [
    ...lessonA108.practiceBank,
    ...lessonA108.miniTest,
    ...lessonA108.writing,
    ...(lessonA108.reading?.questions ?? []),
    ...lessonA108.listening.questions,
  ];
}

function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-08 task ${id} is missing`);
  return task;
}

function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${index}`).toBe(false);
      }
    });
  } else if (task.type === "error-correction") {
    for (const option of task.options) {
      if (option !== task.correctWord) {
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${option}`).toBe(false);
      }
    }
  } else if (task.type === "fill-blank") {
    const answers = task.blanks.map((blank) => blank.correct);
    task.blanks.forEach((blank, index) => {
      for (const option of blank.options ?? []) {
        if (option !== blank.correct) {
          const nearMiss = [...answers];
          nearMiss[index] = option;
          expect(evaluateExercise(task, nearMiss).isCorrect, `${task.id} blank ${index} option ${option}`).toBe(false);
        }
      }
    });
  } else if (task.type === "word-ordering") {
    expect(evaluateExercise(task, [...task.tokens].reverse()).isCorrect, `${task.id} reversed order`).toBe(false);
  } else if (task.type === "matching" && task.pairs.length > 1) {
    const wrongPairs = task.pairs.map((pair, index) => ({
      left: pair.left,
      right: task.pairs[(index + 1) % task.pairs.length].right,
    }));
    expect(evaluateExercise(task, wrongPairs).isCorrect, `${task.id} mismatched pairs`).toBe(false);
  } else if (task.type === "dictation") {
    expect(evaluateExercise(task, "__not_the_audio_text__").isCorrect, `${task.id} wrong dictation`).toBe(false);
  } else if (task.type === "transformation") {
    expect(evaluateExercise(task, "__not_an_accepted_answer__").isCorrect, `${task.id} rejected answer`).toBe(false);
  }
}

function validTaskIds() {
  return new Set([
    ...lessonA108.practiceBank.flatMap((task) => [
      `practice:${lessonA108.id}:${task.id}`,
      `flow-practice:${lessonA108.id}:${task.id}`,
    ]),
    ...lessonA108.miniTest.map((task) => `mini-test:${lessonA108.id}:${task.id}`),
    ...lessonA108.writing.map((task) => `writing:${lessonA108.id}:${task.id}`),
    ...(lessonA108.reading?.questions.map((task) => `reading:${lessonA108.reading?.id}:${task.id}`) ?? []),
    ...lessonA108.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
  ]);
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA108.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-08 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-08 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA108.id,
    taskId,
  };
}

describe("A1-08 audited lesson content", () => {
  it("has a unique answer key for every practice-bank task and rejects listed distractors", () => {
    const actualIds = lessonA108.practiceBank.map((task) => task.id).sort();
    const keyedIds = Object.keys(practiceAnswers).sort();
    expect(actualIds).toEqual(keyedIds);
    expect(new Set(actualIds).size).toBe(actualIds.length);

    for (const [id, answer] of Object.entries(practiceAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("checks all mini-test, reading, listening, and writing keys against their published prompts", () => {
    expect(lessonA108.miniTest.map((task) => task.id).sort()).toEqual(Object.keys(miniTestAnswers).sort());
    for (const [id, answer] of Object.entries(miniTestAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    const reading = lessonA108.reading;
    if (!reading) throw new Error("A1-08 reading passage is required");
    expect(reading.paragraphs).toHaveLength(reading.paragraphsAr.length);
    expect(reading.questions.map((task) => task.id).sort()).toEqual(Object.keys(readingAnswers).sort());
    for (const [id, answer] of Object.entries(readingAnswers)) {
      const task = reading.questions.find((candidate) => candidate.id === id);
      if (!task) throw new Error(`A1-08 reading ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(answer);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA108.listening.questions.map((task) => task.id).sort()).toEqual(Object.keys(listeningAnswers).sort());
    for (const [id, answer] of Object.entries(listeningAnswers)) {
      const task = lessonA108.listening.questions.find((candidate) => candidate.id === id);
      if (!task) throw new Error(`A1-08 listening ${id} is missing`);
      expect(task.options[task.correctIndex], `${id} keyed option`).toBe(answer);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }

    expect(lessonA108.writing.map((task) => task.id).sort()).toEqual(Object.keys(writingAnswers).sort());
    for (const [id, answer] of Object.entries(writingAnswers)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("accepts every listed transformation variant and rejects a near miss", () => {
    for (const task of allTasks()) {
      if (task.type !== "transformation") continue;
      expect(task.acceptedAnswers.length, `${task.id} accepted variants`).toBeGreaterThan(0);
      for (const answer of task.acceptedAnswers) {
        expect(evaluateExercise(task, answer).isCorrect, `${task.id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(task, "__not_an_accepted_answer__").isCorrect).toBe(false);
    }
  });

  it("maps each learning goal to real assessed tasks and never treats viewing as performance", () => {
    const taskIds = validTaskIds();
    expect(lessonA108.lernziele.length).toBeGreaterThan(0);
    for (const goal of lessonA108.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} evidence`).toBeDefined();
      if (!evidence) continue;
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence.taskIds?.length).toBeGreaterThan(0);
      expect(evidence.labelAr.trim().length).toBeGreaterThan(0);
      for (const exerciseId of evidence.exerciseIds) {
        expect(findTask(exerciseId)).toBeDefined();
        expect(evidence.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      for (const taskId of evidence.taskIds ?? []) {
        expect(taskIds.has(taskId), `${goal.id} -> ${taskId}`).toBe(true);
        expect(evidence.exerciseIds.some((id) => taskId.endsWith(`:${id}`))).toBe(true);
      }

      expect(getGoalEvidenceStatus(goal, lessonA108.id, [])).toBe("pending");
      const correctResults = evidence.exerciseIds.map((id) => goalEvent(goal.id, id, true));
      expect(getGoalEvidenceStatus(goal, lessonA108.id, correctResults.slice(0, -1))).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA108.id, correctResults)).toBe("evidenced");
      const incorrectResults = [
        ...correctResults.slice(0, -1),
        goalEvent(goal.id, evidence.exerciseIds[evidence.exerciseIds.length - 1], false),
      ];
      expect(getGoalEvidenceStatus(goal, lessonA108.id, incorrectResults)).toBe("pending");
      const wrongLesson = correctResults.map((event) => ({...event, lessonId: "a1-07"}));
      expect(getGoalEvidenceStatus(goal, lessonA108.id, wrongLesson)).toBe("pending");
      const wrongContext = correctResults.map((event) => ({
        ...event,
        taskId: `unmapped:${lessonA108.id}:${event.type === "exercise-result" ? event.exerciseId : "unknown"}`,
      }));
      expect(getGoalEvidenceStatus(goal, lessonA108.id, wrongContext)).toBe("pending");
      const nonPerformanceEvents: AnalyticsEvent[] = [
        {type: "lesson-view", ts: 1, lessonId: lessonA108.id},
        {type: "pronunciation-score", ts: 2, target: "Die Schuhe sind schwarz.", score: 100, lessonId: lessonA108.id},
        {type: "self-pronunciation-rating", ts: 3, target: "Die Schuhe sind schwarz.", rating: 1, lessonId: lessonA108.id},
      ];
      expect(getGoalEvidenceStatus(goal, lessonA108.id, nonPerformanceEvents)).toBe("pending");
    }

    const z4 = lessonA108.lernziele.find((goal) => goal.id === "z4");
    expect(z4?.de).toContain("schriftlich");
    expect(z4?.evidence?.taskIds).toEqual(["practice:a1-08:e7", "flow-practice:a1-08:e7"]);
  });

  it("keeps Dativ corrections distinct from context-dependent wording and avoids a false first-exposure claim", () => {
    const t4 = lessonA108.theory.find((section) => section.id === "t4");
    if (!t4) throw new Error("A1-08 t4 is required");
    const mistakes = t4.commonMistakes ?? [];
    expect(mistakes.find((mistake) => mistake.wrong === "Das Hemd gefällt mich.")?.classification).toBe("error");
    expect(mistakes.find((mistake) => mistake.wrong === "Wie gefällt Sie das?")?.classification).toBe("error");
    expect(mistakes.find((mistake) => mistake.wrong === "Das Hemd gefällt mir, Größe 44 bitte.")?.classification).toBe("contextual-alternative");
    expect(t4.whyAr).toContain("لا نزعم أن هذا أول لقاء له بالحالة");
    expect(`${t4.explanationAr} ${t4.whyAr}`).not.toMatch(/أول لقاءٍ لك بحالة الدّاتيف|جرّ العربي/);

    const t2 = lessonA108.theory.find((section) => section.id === "t2");
    expect(t2?.commonMistakes?.find((mistake) => mistake.wrong.includes("Ja, es gefällt mir."))?.classification).toBe("contextual-alternative");
  });

  it("keeps plural translations and the target grammar scope consistent across full texts and cards", () => {
    const text = JSON.stringify({
      theory: lessonA108.theory,
      reading: lessonA108.reading,
      listening: lessonA108.listening,
      writing: lessonA108.writing,
      practice: lessonA108.practiceBank,
      miniTest: lessonA108.miniTest,
      flashcards: lessonA108.flashcards,
    });
    expect(text).not.toContain("جمعٌ دائم");
    expect(text).not.toContain("zu allem");
    expect(text).not.toContain("لا يجوز ja مكانها");
    expect(text).not.toContain("أول لقاءٍ لك بحالة الدّاتيف");
    expect(lessonA108.flashcards.find((card) => card.id === "fc5")?.ar).toContain("الأحذية (جمع");
    expect(lessonA108.flashcards.find((card) => card.id === "fc5")?.exampleAr).toContain("الأحذية");
    expect(lessonA108.flashcards.find((card) => card.id === "fc12")?.exampleAr).toContain("الأحذية");
    expect(lessonA108.reading?.paragraphs[1]).not.toMatch(/eine blaue Jacke/);
    expect(lessonA108.listening.items[1].lines[3].de).toBe("Und ich trage heute ein Kleid. Das Kleid ist blau.");
  });

  it("checks every lesson text, dialogue, instruction, card, and non-test task field", () => {
    const tasks = allTasks();
    expect(tasks).toHaveLength(43);
    for (const task of tasks) {
      expect(task.instructionAr.trim(), `${task.id} instruction`).toBeTruthy();
      expect(task.explanation.trim(), `${task.id} explanation`).toBeTruthy();
      if (task.type === "multiple-choice") {
        expect(task.options.length, `${task.id} options`).toBeGreaterThan(1);
        expect(new Set(task.options).size, `${task.id} unique options`).toBe(task.options.length);
        expect(task.correctIndex).toBeGreaterThanOrEqual(0);
        expect(task.correctIndex).toBeLessThan(task.options.length);
      } else if (task.type === "error-correction") {
        expect(task.options.filter((option) => option === task.correctWord), `${task.id} keyed correction`).toHaveLength(1);
      } else if (task.type === "fill-blank") {
        expect(task.blanks.length, `${task.id} blanks`).toBeGreaterThan(0);
        for (const blank of task.blanks) {
          expect(blank.options).toContain(blank.correct);
        }
      } else if (task.type === "matching") {
        expect(task.pairs.length, `${task.id} pairs`).toBeGreaterThan(1);
        expect(new Set(task.pairs.map((pair) => pair.left)).size).toBe(task.pairs.length);
        expect(new Set(task.pairs.map((pair) => pair.right)).size).toBe(task.pairs.length);
      } else if (task.type === "word-ordering") {
        expect(task.tokens.length, `${task.id} tokens`).toBeGreaterThan(1);
        expect(task.correctSentence.trim()).toBeTruthy();
      } else if (task.type === "dictation") {
        expect(task.audioText.trim(), `${task.id} audio text`).toBeTruthy();
      } else if (task.type === "transformation") {
        expect(task.prompt.trim(), `${task.id} prompt`).toBeTruthy();
        expect(task.acceptedAnswers).toContain(task.sampleAnswer);
      }
    }

    const theoryIds = lessonA108.theory.map((section) => section.id);
    expect(theoryIds).toEqual(["t1", "t2", "t3", "t4"]);
    for (const section of lessonA108.theory) {
      expect(section.explanationAr.trim(), `${section.id} explanation`).toBeTruthy();
      expect(section.whyAr.trim(), `${section.id} rationale`).toBeTruthy();
      expect(section.comparisonWithArabic.trim(), `${section.id} Arabic comparison`).toBeTruthy();
      expect(section.eselsbruecke.trim(), `${section.id} memory aid`).toBeTruthy();
      expect(section.table?.rows.length, `${section.id} table rows`).toBeGreaterThan(0);
      expect(section.examples.length, `${section.id} examples`).toBeGreaterThanOrEqual(6);
      for (const example of section.examples) {
        expect(example.de.trim(), `${section.id} German example`).toBeTruthy();
        expect(example.ar.trim(), `${section.id} Arabic example`).toBeTruthy();
      }
      expect(section.commonMistakes.length, `${section.id} classified mistakes`).toBeGreaterThanOrEqual(3);
      for (const mistake of section.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim().length).toBeGreaterThanOrEqual(60);
        expect(["error", "contextual-alternative"]).toContain(mistake.classification);
      }
      expect(section.relatedRuleComparison?.content.trim()).toBeTruthy();
    }

    const reading = lessonA108.reading;
    if (!reading) throw new Error("A1-08 reading passage is required");
    expect(reading.paragraphs).toHaveLength(6);
    expect(reading.paragraphsAr).toHaveLength(6);
    expect(reading.paragraphs.join(" ").split(/\s+/).filter(Boolean).length).toBeGreaterThan(160);
    expect(reading.glossary.length).toBeGreaterThanOrEqual(10);
    for (const item of reading.glossary) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.noteAr?.trim()).toBeTruthy();
    }
    expect(reading.paragraphs[2]).toContain("zu klein");
    expect(reading.paragraphs[3]).toContain("Doch, sie gefällt mir");
    expect(reading.paragraphs[3]).toContain("89 Euro sind zu viel für mich");
    expect(reading.paragraphs[5]).toContain("fünf Euro zurück");
    expect(reading.redemittel?.length).toBeGreaterThanOrEqual(6);
    expect(reading.discussionAr?.trim()).toBeTruthy();
    for (const question of reading.questions) {
      const paragraph = question.paragraph;
      if (paragraph === undefined) throw new Error(`${question.id} has no source paragraph`);
      expect(paragraph, `${question.id} source paragraph`).toBeGreaterThan(0);
      expect(reading.paragraphs[paragraph - 1], `${question.id} source text`).toBeTruthy();
    }

    expect(lessonA108.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA108.listening.items.map((item) => item.lines.length)).toEqual([7, 5]);
    const listeningText = lessonA108.listening.items.flatMap((item) => item.lines);
    for (const line of listeningText) {
      expect(line.speaker.trim()).toBeTruthy();
      expect(line.de.trim()).toBeTruthy();
      expect(line.ar.trim()).toBeTruthy();
    }
    expect(listeningText.map((line) => line.de).join(" ")).toContain("Neununddreißig Euro");
    expect(listeningText.map((line) => line.de).join(" ")).toContain("trage heute ein Kleid");
    for (const question of lessonA108.listening.questions) {
      expect(lessonA108.listening.items.some((item) => item.id === question.itemId), `${question.id} source audio`).toBe(true);
    }

    const pronunciation = lessonA108.pronunciation;
    expect(pronunciation.items.map((item) => item.de)).toEqual(["weiß", "blau", "grün", "gelb", "schwarz", "die Schuhe"]);
    for (const item of pronunciation.items) {
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note?.trim(), `${item.de} pronunciation note`).toBeTruthy();
    }
    const shadowingLines = pronunciation.shadowing ?? [];
    expect(shadowingLines).toHaveLength(4);
    for (const line of shadowingLines) {
      expect(line.de.trim()).toBeTruthy();
      expect(line.ar.trim()).toBeTruthy();
      expect(line.tip?.trim()).toBeTruthy();
    }

    const cardIds = lessonA108.flashcards.map((card) => card.id);
    expect(cardIds).toEqual(Array.from({length: 22}, (_, index) => `fc${index + 1}`));
    for (const card of lessonA108.flashcards) {
      expect(card.de.trim(), `${card.id} German headword`).toBeTruthy();
      expect(card.ar.trim(), `${card.id} Arabic headword`).toBeTruthy();
      expect(card.example?.trim(), `${card.id} German example`).toBeTruthy();
      expect(card.exampleAr?.trim(), `${card.id} Arabic example`).toBeTruthy();
      expect(card.level).toBe("A1");
    }
    expect(lessonA108.flashcards.find((card) => card.id === "fc9")?.ar).toBe("ما مقاسك؟");

    const mediation = lessonA108.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe).toContain("Im Winter trage ich eine Jacke");
    expect(mediation[0].sourceDe).toContain("Meine Lieblingsfarbe ist Blau");
    expect(mediation[0].taskAr.trim()).toBeTruthy();
    expect(mediation[0].modelAnswerAr).toContain("سترة");
    expect(mediation[0].modelAnswerAr).toContain("وشاحاً وقفازات");
    expect(mediation[0].modelAnswerAr).toContain("أزرق");
    expect(mediation[0].keyPointsAr).toHaveLength(2);

    const interactions = lessonA108.interaction ?? [];
    expect(interactions).toHaveLength(1);
    const interaction = interactions[0];
    expect(interaction.rounds).toHaveLength(2);
    expect(interaction.rounds.map((round) => round.options.map((option) => option.best))).toEqual([
      [true, false],
      [true, false],
    ]);
    expect(interaction.strategyAr).toContain("ليست قياساً لأداء شفهي أو نطق");
    for (const round of interaction.rounds) {
      expect(round.speakerDe.trim()).toBeTruthy();
      expect(round.speakerAr.trim()).toBeTruthy();
      for (const option of round.options) {
        expect(option.de.trim()).toBeTruthy();
        expect(option.ar.trim()).toBeTruthy();
        expect(option.replyDe.trim()).toBeTruthy();
        expect(option.replyAr.trim()).toBeTruthy();
        expect(option.de).not.toContain("hässlich");
        expect(option.ar).not.toContain("قبيحة");
      }
    }

    expect(JSON.stringify(lessonA104)).toContain("gefallen");
    expect(JSON.stringify(lessonA104)).toContain("passen");
    expect(JSON.stringify(lessonA106)).toContain("helfen");
    expect("duration" in lessonA108).toBe(false);
    expect(lessonA108.lernziele.every((goal) => !(goal.evidence?.exerciseIds ?? []).some((id) => /pronunciation|shadowing/i.test(id)))).toBe(true);
  });
});
