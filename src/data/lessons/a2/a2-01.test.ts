import {describe, expect, it} from "vitest";

import {lessonA201} from "@/data/lessons/a2/a2-01";
import {evaluateExercise} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {
  getListeningQuestionTaskId,
  isDialogueOrderingUnlocked,
} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "bin",
  r2: "nach",
  e1: "habe ... gekauft",
  e2: "sind ... geflogen",
  e8: "نهضتُ في السابعة",
  e9: "الصيغة ممكنة لنشاط السباحة؛ أما السباحة إلى وجهة فتأخذ sein، مثل Ich bin zur Insel geschwommen.",
  e14: "Ich war gestern sehr müde.",
  e17: "es ihm",
  e18: "einen Apfel",
  e19: "النفي يقع على «الفيلم» وحده لا على المشاهدة",
  e21: "ذهاباً فقط",
  e22: "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes Zimmer geben?",
  e25: "Ich möchte ein Doppelzimmer vom 10. bis zum 12. Juli reservieren, bitte.",
  rq1: "Sie haben Tickets und Hotel im Voraus gebucht",
  rq2: "Der Zug hatte zwei Stunden Verspätung",
  rq3: "Die Schwester hat ihren Rucksack im Zug vergessen",
  rq4: "wollten steht im Präteritum, haben … gebucht im Perfekt; der Text verwendet beide Formen.",
  rq5: "sein — im intransitiven Sinn «der Zug fährt ab»",
  rq6: "Sie fanden ein anderes Hotel, das billiger und schöner war.",
  q1: "Museen besucht",
  q2: "nach Sousse",
  q3: "super",
  q4: "typisches Essen",
  m1: "habe ... gesehen",
  m2: "ist ... gegangen",
};

const expectedFillBlankKeys: Record<string, string[]> = {
  e6: ["ist", "habe", "sind"],
  e11: ["gesungen"],
  e12: ["geschrieben"],
  e15: ["konnte", "musste", "gab"],
  e20: ["ist", "sind"],
  m5: ["ist gewesen", "habe gehabt"],
  w2: ["bin", "geflogen", "haben", "gegessen", "hat", "gekauft"],
};

const expectedOrderingKeys: Record<string, string> = {
  r3: "Ich habe Hunger.",
  e4: "Ich habe gestern Pizza gegessen.",
  e16: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
  m3: "Hast du ein Souvenir gekauft?",
};

const expectedErrorCorrections: Record<string, {wrong: string; correct: string}> = {
  e5: {wrong: "Ich habe nach Berlin geflogen.", correct: "bin"},
  m4: {wrong: "Wir haben nach Tunis gefahren.", correct: "sind"},
};

const expectedDialogueContent = [
  {
    id: "l1",
    lines: [
      ["Sami", "Ich habe letzte Woche Urlaub gemacht.", "أخذت إجازة الأسبوع الماضي."],
      ["Anna", "Schön! Was hast du gemacht?", "جميل! ماذا فعلت؟"],
      ["Sami", "Ich bin nach Berlin geflogen und habe viele Museen besucht.", "طرت إلى برلين وزرت متاحف كثيرة."],
      ["Anna", "Hast du die Berliner Mauer gesehen?", "هل رأيت سور برلين؟"],
      ["Sami", "Ja, natürlich! Und ich habe typisches Essen probiert.", "نعم طبعاً! وجربت طعاماً تقليدياً."],
    ],
  },
  {
    id: "l2",
    lines: [
      ["Mona", "Wir sind nach Sousse gefahren.", "ذهبنا إلى سوسة."],
      ["Karim", "Wie war das Hotel?", "كيف كان الفندق؟"],
      ["Mona", "Das Hotel war super! Wir haben im Meer geschwommen und am Strand in der Sonne gelegen.", "كان الفندق رائعاً! سبحنا في البحر واستلقينا على الشاطئ في الشمس."],
      ["Karim", "Habt ihr Fotos gemacht?", "هل التقطتم صوراً؟"],
      ["Mona", "Ja, viele! Ich zeige sie dir später.", "نعم، كثيراً! سأريكها لاحقاً."],
    ],
  },
];

const expectedMatchingPairs: Record<string, {left: string; right: string}[]> = {
  e3: [
    {left: "kaufen", right: "gekauft"},
    {left: "sehen", right: "gesehen"},
    {left: "essen", right: "gegessen"},
    {left: "fahren", right: "gefahren"},
  ],
  e13: [
    {left: "trinken – trank – getrunken", right: "i – a – u"},
    {left: "bleiben – blieb – geblieben", right: "ei – ie – ie"},
    {left: "fliegen – flog – geflogen", right: "ie – o – o"},
    {left: "sprechen – sprach – gesprochen", right: "e – a – o"},
    {left: "denken – dachte – gedacht", right: "مختلط (تغيّر جذر + نهاية -t)"},
  ],
};

function reading() {
  const value = lessonA201.reading;
  if (!value) throw new Error("A2-01 must keep its reading text");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA201.review ?? []),
    ...lessonA201.practiceBank,
    ...lessonA201.miniTest,
    ...lessonA201.writing,
    ...reading().questions,
    ...lessonA201.listening.questions,
  ];
}

function tasksById(): Map<string, Exercise> {
  return new Map(allTasks().map((task) => [task.id, task]));
}

function task(id: string): Exercise {
  const result = tasksById().get(id);
  if (!result) throw new Error(`A2-01 task ${id} is missing`);
  return result;
}

function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA201.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A2-01 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  const exercise = task(exerciseId);
  if (!taskId) throw new Error(`A2-01 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA201.id,
    taskId,
  };
}

describe("A2-01 audited lesson", () => {
  it("keeps the complete reviewed activity inventory and all content sections", () => {
    expect(lessonA201.lernziele.map((goal) => goal.id)).toEqual([
      "z1", "z2", "z3", "z4", "z5", "z6", "z7",
    ]);
    expect(ids(lessonA201.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA201.practiceBank)).toEqual(
      Array.from({length: 25}, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA201.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA201.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5", "rq6"]);
    expect(ids(lessonA201.listening.questions)).toEqual(["q1", "q2", "q3", "q4"]);
    expect(new Set(allTasks().map((exercise) => exercise.id)).size).toBe(allTasks().length);

    expect(lessonA201.theory.map((section) => section.id)).toEqual(["t1", "t2", "t3", "t4"]);
    expect(lessonA201.pronunciation.items).toHaveLength(6);
    expect(lessonA201.pronunciation.shadowing).toHaveLength(4);
    expect(ids(lessonA201.flashcards)).toEqual(Array.from({length: 20}, (_, index) => `fc${index + 1}`).sort());
    expect(lessonA201.mediation).toHaveLength(1);
    expect(lessonA201.interaction?.[0].rounds).toHaveLength(3);

    const text = reading();
    expect("duration" in lessonA201).toBe(false);
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.glossary.length).toBeGreaterThanOrEqual(10);
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(5);
    for (const question of text.questions) {
      expect(question.paragraph, `${question.id} source paragraph`).toBeGreaterThan(0);
      expect(question.paragraph, `${question.id} source paragraph`).toBeLessThanOrEqual(text.paragraphs.length);
      expect(text.paragraphs[question.paragraph! - 1].trim()).toBeTruthy();
    }
    expect(text.paragraphs[1]).toContain("Nach zwei Stunden sind wir endlich abgefahren.");
    expect(text.paragraphs[2]).toContain("Informationsschalter am Bahnhof");
    expect(text.paragraphs[3]).toContain("weitere Verspätungen");
    expect(text.paragraphs[3]).toContain("Das gebuchte Hotel war schon geschlossen.");
    expect(text.paragraphs[4]).toContain("Zum Glück gab es eine schöne Überraschung");
    expect(text.paragraphs[4]).toContain("Das Hotel war sogar billiger und schöner.");
    expect(text.paragraphsAr[3]).toContain("الفندق الذي حجزناه مغلقاً");
    expect(text.paragraphsAr[4]).toContain("مكتب استقبال فندق آخر");
    expect(text.questions.find((question) => question.id === "rq6")?.explanation).toContain(
      "Das Hotel war sogar billiger und schöner",
    );
    expect(task("e20").instructionAr).toContain("Perfekt");

    const dialogueIds = new Set(lessonA201.listening.items.map((item) => item.id));
    expect(dialogueIds).toEqual(new Set(["l1", "l2"]));
    expect(
      lessonA201.listening.items.map((item) => ({
        id: item.id,
        lines: item.lines.map((line) => [line.speaker, line.de, line.ar]),
      })),
    ).toEqual(expectedDialogueContent);
    for (const item of lessonA201.listening.items) {
      expect(item.lines.length, `${item.id} lines`).toBeGreaterThanOrEqual(4);
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }
    for (const question of lessonA201.listening.questions) {
      expect(dialogueIds.has(question.itemId), `${question.id} itemId`).toBe(true);
    }
  });

  it("preserves every multiple-choice key and rejects every listed distractor", () => {
    const multipleChoiceTasks = allTasks().filter((candidate) => candidate.type === "multiple-choice");
    expect(ids(multipleChoiceTasks)).toEqual(Object.keys(expectedMultipleChoiceKeys).sort());

    for (const [id, expectedAnswer] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} must be multiple-choice`);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expectedAnswer);
      expect(new Set(exercise.options).size, `${id} distinct options`).toBe(exercise.options.length);
      expect(evaluateExercise(exercise, expectedAnswer).isCorrect, `${id} key scores correct`).toBe(true);
      exercise.options.forEach((option, index) => {
        if (index === exercise.correctIndex) return;
        expect(evaluateExercise(exercise, option).isCorrect, `${id} distractor ${index}`).toBe(false);
      });
    }
  });

  it("checks every blank, ordering, matching, correction, transformation, and dictation key", () => {
    const fillTasks = allTasks().filter((candidate) => candidate.type === "fill-blank");
    expect(ids(fillTasks)).toEqual(Object.keys(expectedFillBlankKeys).sort());
    for (const [id, expectedAnswers] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} must be fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), `${id} key`).toEqual(expectedAnswers);
      expect(evaluateExercise(exercise, expectedAnswers).isCorrect, `${id} key scores correct`).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        expect(blank.options).toContain(blank.correct);
        for (const option of blank.options ?? []) {
          if (option === blank.correct) continue;
          const nearMiss = [...expectedAnswers];
          nearMiss[blankIndex] = option;
          expect(evaluateExercise(exercise, nearMiss).isCorrect, `${id} blank ${blankIndex} distractor ${option}`).toBe(false);
        }
      });
    }

    const orderingTasks = allTasks().filter((candidate) => candidate.type === "word-ordering");
    expect(ids(orderingTasks)).toEqual(Object.keys(expectedOrderingKeys).sort());
    for (const [id, expectedSentence] of Object.entries(expectedOrderingKeys)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} must be word-ordering`);
      expect(exercise.correctSentence, `${id} key`).toBe(expectedSentence);
      const sentenceTokens = expectedSentence.replace(/([.!?])/g, " $1").trim().split(/\s+/);
      expect([...exercise.tokens].sort(), `${id} token inventory`).toEqual(sentenceTokens.sort());
      expect(evaluateExercise(exercise, expectedSentence.split(/\s+/)).isCorrect, `${id} key scores correct`).toBe(true);
      expect(evaluateExercise(exercise, [...exercise.tokens].reverse()).isCorrect, `${id} reversed`).toBe(false);
    }

    const matchingTasks = allTasks().filter((candidate) => candidate.type === "matching");
    expect(ids(matchingTasks)).toEqual(Object.keys(expectedMatchingPairs).sort());
    for (const [id, expectedPairs] of Object.entries(expectedMatchingPairs)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} must be matching`);
      expect(exercise.pairs).toEqual(expectedPairs);
      expect(evaluateExercise(exercise, expectedPairs).isCorrect, `${id} keyed matches`).toBe(true);
      const mismatched = expectedPairs.map((pair, index) => ({
        left: pair.left,
        right: expectedPairs[(index + 1) % expectedPairs.length].right,
      }));
      expect(evaluateExercise(exercise, mismatched).isCorrect, `${id} mismatched pairs`).toBe(false);
    }

    const correctionTasks = allTasks().filter((candidate) => candidate.type === "error-correction");
    expect(ids(correctionTasks)).toEqual(Object.keys(expectedErrorCorrections).sort());
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} must be error-correction`);
      expect(exercise.wrongSentence).toBe(expected.wrong);
      expect(exercise.correctWord).toBe(expected.correct);
      expect(exercise.options.filter((option) => option === expected.correct)).toHaveLength(1);
      expect(exercise.instructionAr).not.toContain("لا خطأ");
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} correction option ${option}`).toBe(option === expected.correct);
      }
    }

    const transformations = allTasks().filter((candidate) => candidate.type === "transformation");
    expect(ids(transformations)).toEqual(["e23", "e7", "w1"].sort());
    for (const exercise of transformations) {
      if (exercise.type !== "transformation") continue;
      expect(exercise.acceptedAnswers).toContain(exercise.sampleAnswer);
      for (const answer of exercise.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${exercise.id} accepted answer`).toBe(true);
      }
      expect(evaluateExercise(exercise, "__not_an_accepted_answer__").isCorrect).toBe(false);
    }

    const dictations = allTasks().filter((candidate) => candidate.type === "dictation");
    expect(ids(dictations)).toEqual(["e10", "w3"]);
    for (const exercise of dictations) {
      if (exercise.type !== "dictation") continue;
      expect(evaluateExercise(exercise, exercise.audioText).isCorrect, `${exercise.id} audio key`).toBe(true);
      expect(evaluateExercise(exercise, "__not_the_audio_text__").isCorrect).toBe(false);
    }
  });

  it("checks each true/false key and each single-statement near miss", () => {
    const exercise = task("e24");
    if (exercise.type !== "true-false") throw new Error("e24 must be true-false");
    const expected = {s1: false, s2: true, s3: true, s4: false};
    expect(Object.fromEntries(exercise.statements.map((statement) => [statement.id, statement.isTrue]))).toEqual(expected);
    expect(evaluateExercise(exercise, expected).isCorrect).toBe(true);
    for (const statement of exercise.statements) {
      const nearMiss = {...expected, [statement.id]: !expected[statement.id as keyof typeof expected]};
      expect(evaluateExercise(exercise, nearMiss).isCorrect, `${statement.id} flipped`).toBe(false);
      expect(statement.whyAr.trim().length).toBeGreaterThan(10);
    }
  });

  it("links all seven goals to performed tasks with the correct interface prefixes", () => {
    const read = reading();
    const validTaskIds = new Set([
      ...lessonA201.practiceBank.map((exercise) => `practice:${lessonA201.id}:${exercise.id}`),
      ...lessonA201.practiceBank.slice(0, 4).map((exercise) => `flow-practice:${lessonA201.id}:${exercise.id}`),
      ...lessonA201.writing.map((exercise) => `writing:${lessonA201.id}:${exercise.id}`),
      ...read.questions.map((exercise) => `reading:${read.id}:${exercise.id}`),
      ...lessonA201.listening.questions.map((question) => `listening:${question.itemId}:${question.id}`),
    ]);
    const allIds = new Set(allTasks().map((exercise) => exercise.id));
    expect(lessonA201.lernziele).toHaveLength(7);
    for (const goal of lessonA201.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} evidence`).toBeDefined();
      if (!evidence) continue;
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence.taskIds?.length).toBeGreaterThan(0);
      expect(evidence.labelAr.trim()).toBeTruthy();
      for (const exerciseId of evidence.exerciseIds) {
        expect(allIds.has(exerciseId), `${goal.id} exercise ${exerciseId}`).toBe(true);
        expect(evidence.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      for (const taskId of evidence.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id} task ${taskId}`).toBe(true);
        expect(evidence.exerciseIds.some((exerciseId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      expect(getGoalEvidenceStatus(goal, lessonA201.id, [])).toBe("pending");
      const correctResults = evidence.exerciseIds.map((exerciseId) => goalEvent(goal.id, exerciseId, true));
      expect(getGoalEvidenceStatus(goal, lessonA201.id, correctResults)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA201.id, [
        {type: "lesson-view", ts: 1, lessonId: lessonA201.id},
      ])).toBe("pending");
    }

    const listeningGoal = lessonA201.lernziele.find((goal) => goal.id === "z7");
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l2:q2",
      "listening:l2:q3",
      "listening:l1:q4",
    ]);
    for (const question of lessonA201.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA201.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      const afterReveal = getListeningQuestionTaskId(lessonA201.id, question.itemId, question.id, true);
      expect(afterReveal).toBe(`listening-transcript:${lessonA201.id}:${question.itemId}:${question.id}`);
      expect(listeningGoal?.evidence?.taskIds).not.toContain(afterReveal);
    }
    expect(isDialogueOrderingUnlocked({}, "l1")).toBe(false);
    expect(isDialogueOrderingUnlocked({l1: true}, "l1")).toBe(true);
    expect(isDialogueOrderingUnlocked({l1: true}, "l2")).toBe(false);
  });

  it("keeps theory classifications and vocabulary/audio materials individually populated", () => {
    for (const section of lessonA201.theory) {
      expect(section.explanationAr.trim().length, `${section.id} explanation`).toBeGreaterThan(500);
      expect(section.whyAr.trim().length, `${section.id} rationale`).toBeGreaterThan(100);
      expect(section.comparisonWithArabic.trim().length, `${section.id} comparison`).toBeGreaterThan(100);
      expect(section.examples.length, `${section.id} examples`).toBeGreaterThanOrEqual(6);
      expect(section.table?.rows.length, `${section.id} rows`).toBeGreaterThan(0);
      expect(section.commonMistakes.length, `${section.id} mistakes`).toBeGreaterThanOrEqual(5);
      for (const example of section.examples) {
        expect(example.de.trim()).toBeTruthy();
        expect(example.ar.trim()).toBeTruthy();
      }
      for (const mistake of section.commonMistakes) {
        expect(mistake.wrong.trim()).toBeTruthy();
        expect(mistake.right.trim()).toBeTruthy();
        expect(mistake.whyAr.trim().length).toBeGreaterThan(40);
        expect([
          "error",
          "contextual-alternative",
          "pedagogical-simplification",
          "unverified-claim",
        ]).toContain(mistake.classification);
      }
    }

    for (const card of lessonA201.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }
    for (const item of lessonA201.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    for (const line of lessonA201.pronunciation.shadowing ?? []) {
      expect(line.de.trim()).toBeTruthy();
      expect(line.ar.trim()).toBeTruthy();
    }
    for (const task of lessonA201.mediation ?? []) {
      expect(task.sourceDe?.trim()).toBeTruthy();
      expect(task.taskAr.trim()).toBeTruthy();
      expect(task.modelAnswerAr?.trim()).toBeTruthy();
      expect(task.keyPointsAr.length).toBeGreaterThan(0);
    }
    for (const interaction of lessonA201.interaction ?? []) {
      for (const round of interaction.rounds) {
        expect(round.options.filter((option) => option.best)).toHaveLength(1);
        for (const option of round.options) {
          expect(option.de.trim()).toBeTruthy();
          expect(option.ar.trim()).toBeTruthy();
          expect(option.replyDe.trim()).toBeTruthy();
          expect(option.replyAr.trim()).toBeTruthy();
        }
      }
    }
  });
});
