import {describe, expect, it} from "vitest";

import {getLessonMeta, LESSON_META} from "@/data/lessons/meta";
import {NO_ERROR_OPTION} from "@/lib/lesson/error-correction-highlight";
import {evaluateExercise} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {getListeningQuestionTaskId} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";
import {lessonA113} from "./a1-13";

const reviewAnswers: Record<string, unknown> = {
  r1: "Woher",
  r2: ["der", "die", "das"],
  r3: "um sieben Uhr",
};

const practiceAnswers: Record<string, unknown> = {
  e1: "der",
  e2: ["Ich", "komme", "aus", "Tunesien", "."],
  e3: ["bin", "habe"],
  e4: "einen Apfel",
  e5: [
    {left: "3", right: "drei"},
    {left: "7", right: "sieben"},
    {left: "12", right: "zwölf"},
    {left: "20", right: "zwanzig"},
    {left: "100", right: "hundert"},
  ],
  e6: "Komm!",
  e7: "stehe ... auf",
  e8: ["kann", "möchte", "muss"],
  e9: "kein Auto",
  e10: "Am Wochenende war ich im Park.",
  e11: ["habe", "gesehen"],
  e12: ["Am", "Morgen", "stehe", "ich", "um", "sieben", "auf"],
  e13: "Ich hätte gern einen Kaffee, bitte.",
  e14: "war ich",
  e15: [
    {left: "النصب Akkusativ", right: "Ich esse einen Apfel."},
    {left: "فعلٌ منفصل", right: "Ich stehe um sieben auf."},
    {left: "الماضي المحكيّ", right: "Ich habe Deutsch gelernt."},
    {left: "Präteritum (war)", right: "Ich war im Park."},
    {left: "النفي بـkein", right: "Ich bin kein Lehrer."},
    {left: "أداة ربط", right: "Es ist kalt, aber sonnig."},
  ],
  e16: ["kann", "will", "darf"],
  e17: ["bin", "aufgestanden", "bin", "gefahren", "war", "habe", "angerufen"],
  e18: {s1: false, s2: true, s3: false, s4: true},
};

const miniTestAnswers: Record<string, unknown> = {
  m1: "das",
  m2: ["komme", "lernst", "spielt"],
  m3: "Wo",
  m4: ["war", "hatte"],
  m5: "einen",
  m6: [
    {left: "Hören", right: "3 أجزاء؛ الجزآن 1 و3 مرتان، والجزء 2 مرة"},
    {left: "Lesen", right: "3 أجزاء؛ منها صواب/خطأ وتحديد مصدر المعلومات"},
    {left: "Schreiben", right: "نموذج بيانات + نص قصير يقارب 30 كلمة"},
    {left: "Sprechen", right: "تعريف بالنفس + تبادل معلومات + طلب واستجابة"},
  ],
};

const writingAnswers: Record<string, unknown> = {
  w1: "Er kommt aus Tunesien.",
  w2: ["heiße", "komme", "war", "hatte"],
  w3: "Ich möchte in Deutschland arbeiten.",
};

const readingAnswers: Record<string, string> = {
  rq1: "Seit einem Jahr",
  rq2: "Die Artikel der, die und das",
  rq3: "Mit dem Artikel",
  rq4: "Ich hätte gern einen Kaffee, bitte.",
  rq5: "Einfache Fragen stellen und kurze Antworten geben",
  rq6: "Mit A2 anfangen",
};

const listeningAnswers: Record<string, string> = {
  q1: "um sieben Uhr",
  q2: "ein Brot mit Käse",
  q3: "ins Kino gehen",
  q4: "zu Hause",
};

function reading() {
  const value = lessonA113.reading;
  if (!value) throw new Error("A1-13 reading passage is required");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA113.review ?? []),
    ...lessonA113.practiceBank,
    ...lessonA113.miniTest,
    ...lessonA113.writing,
    ...reading().questions,
    ...lessonA113.listening.questions,
  ];
}

function findTask(id: string): Exercise {
  const task = allTasks().find((candidate) => candidate.id === id);
  if (!task) throw new Error(`A1-13 task ${id} is missing`);
  return task;
}

function expectListedAlternativesRejected(task: Exercise) {
  if (task.type === "multiple-choice") {
    expect(new Set(task.options.map((option) => option.trim().toLowerCase())).size).toBe(
      task.options.length,
    );
    expect(task.correctIndex).toBeGreaterThanOrEqual(0);
    expect(task.correctIndex).toBeLessThan(task.options.length);
    task.options.forEach((option, index) => {
      if (index !== task.correctIndex)
        expect(evaluateExercise(task, option).isCorrect, `${task.id} option ${index}: ${option}`).toBe(false);
    });
  } else if (task.type === "error-correction") {
    expect(task.isAlreadyCorrect).not.toBe(true);
    expect(task.wrongSentence).toContain(task.wrongWord);
    expect(task.options.filter((option) => option === task.correctWord)).toHaveLength(1);
    for (const option of task.options) {
      if (option !== task.correctWord)
        expect(evaluateExercise(task, option).isCorrect, `${task.id} correction ${option}`).toBe(false);
    }
    expect(evaluateExercise(task, NO_ERROR_OPTION).isCorrect, `${task.id} no-error option`).toBe(false);
  } else if (task.type === "fill-blank") {
    expect((task.template.match(/___/g) ?? []).length, `${task.id} blank count`).toBe(task.blanks.length);
    for (const [index, blank] of task.blanks.entries()) {
      expect(blank.options).toContain(blank.correct);
      expect(new Set(blank.options).size).toBe(blank.options?.length);
      const wrongOption = blank.options?.find((option) => option !== blank.correct);
      if (wrongOption) {
        const nearMiss = task.blanks.map((candidate) => candidate.correct);
        nearMiss[index] = wrongOption;
        expect(evaluateExercise(task, nearMiss).isCorrect, `${task.id} blank ${index}: ${wrongOption}`).toBe(false);
      }
    }
  } else if (task.type === "word-ordering") {
    const canonicalTokens = task.correctSentence.replace(/[.!?]+$/, "").split(/\s+/);
    canonicalTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
    expect(evaluateExercise(task, canonicalTokens).isCorrect, `${task.id} canonical order`).toBe(true);

    for (const sentence of task.acceptedSentences ?? []) {
      const acceptedTokens = sentence.replace(/[.!?]+$/, "").split(/\s+/);
      acceptedTokens.push(...task.tokens.filter((token) => /^[.!?]$/.test(token)));
      expect(evaluateExercise(task, acceptedTokens).isCorrect, `${task.id} accepted order: ${sentence}`).toBe(true);
    }

    const wrongOrder = [...canonicalTokens];
    [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1] ?? "", wrongOrder[0] ?? ""];
    expect(evaluateExercise(task, wrongOrder).isCorrect, `${task.id} swapped first two tokens`).toBe(false);
  } else if (task.type === "matching" && task.pairs.length > 1) {
    const wrongPairs = task.pairs.map((pair, index) => ({
      left: pair.left,
      right: task.pairs[(index + 1) % task.pairs.length]?.right ?? "",
    }));
    expect(evaluateExercise(task, wrongPairs).isCorrect, `${task.id} mismatched pairs`).toBe(false);
  } else if (task.type === "dictation") {
    expect(evaluateExercise(task, "__not_the_audio_text__").isCorrect, `${task.id} wrong dictation`).toBe(false);
    if (task.caseSensitive)
      expect(evaluateExercise(task, task.audioText.toLowerCase()).isCorrect, `${task.id} capitalization`).toBe(false);
  } else if (task.type === "transformation") {
    expect(task.acceptedAnswers).toContain(task.sampleAnswer);
    for (const answer of task.acceptedAnswers)
      expect(evaluateExercise(task, answer).isCorrect, `${task.id} accepted answer: ${answer}`).toBe(true);
    expect(evaluateExercise(task, "__not_an_accepted_answer__").isCorrect).toBe(false);
    if (task.caseSensitive)
      expect(evaluateExercise(task, task.sampleAnswer.toLowerCase()).isCorrect, `${task.id} capitalization`).toBe(false);
  } else if (task.type === "true-false") {
    const inverted = Object.fromEntries(task.statements.map((statement) => [statement.id, !statement.isTrue]));
    expect(evaluateExercise(task, inverted).isCorrect, `${task.id} inverted true/false key`).toBe(false);
  }
}

function validTaskIds(): Set<string> {
  // The standard practice UI samples five unique tasks from the entire bank (with a reshuffle action);
  // lesson-flow is separate and reveals only the first four bank entries progressively.
  const practiceTaskIds = lessonA113.practiceBank.flatMap((task, index) => [
    `practice:${lessonA113.id}:${task.id}`,
    ...(index < 4 ? [`flow-practice:${lessonA113.id}:${task.id}`] : []),
  ]);
  return new Set([
    ...practiceTaskIds,
    ...lessonA113.miniTest.map((task) => `mini-test:${lessonA113.id}:${task.id}`),
    ...lessonA113.writing.map((task) => `writing:${lessonA113.id}:${task.id}`),
    ...reading().questions.map((task) => `reading:${reading().id}:${task.id}`),
    ...lessonA113.listening.questions.map((task) => `listening:${task.itemId}:${task.id}`),
  ]);
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean): AnalyticsEvent {
  const goal = lessonA113.lernziele.find((candidate) => candidate.id === goalId);
  const evidence = goal?.evidence;
  if (!evidence) throw new Error(`A1-13 ${goalId} has no evidence mapping`);
  const taskId = evidence.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`A1-13 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: findTask(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA113.id,
    taskId,
  };
}

function allCorrectGoalEvents(goalId: string): AnalyticsEvent[] {
  const goal = lessonA113.lernziele.find((candidate) => candidate.id === goalId);
  if (!goal?.evidence) throw new Error(`A1-13 ${goalId} has no evidence mapping`);
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

describe("A1-13 audited lesson content", () => {
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
    expect(taskIds).toHaveLength(40);
    expect(new Set(taskIds).size).toBe(taskIds.length);
    expect(lessonA113.review).toHaveLength(3);
    expect(lessonA113.practiceBank).toHaveLength(18);
    expect(lessonA113.miniTest).toHaveLength(6);
    expect(lessonA113.writing).toHaveLength(3);
    expect(reading().questions).toHaveLength(6);
    expect(lessonA113.listening.questions).toHaveLength(4);

    for (const [id, answer] of Object.entries(answerKey)) {
      const task = findTask(id);
      expect(evaluateExercise(task, answer).isCorrect, `${id} accepted answer`).toBe(true);
      expectListedAlternativesRejected(task);
    }
  });

  it("keeps the three theory blocks scoped and classifies errors versus contextual alternatives", () => {
    expect(lessonA113.theory.map((block) => block.id)).toEqual(["t1", "t2", "t3"]);
    for (const block of lessonA113.theory) {
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
      expect(block.commonMistakes.every((mistake) => mistake.classification)).toBe(true);
    }

    expect(lessonA113.theory[0]?.table?.rows).toHaveLength(12);
    expect(lessonA113.theory[0]?.table?.rows.find((row) => row.label.includes("Dativ"))?.label).toBe(
      "بعض استعمالات Dativ الألمانية",
    );
    expect(lessonA113.theory[0]?.table?.rows.find((row) => row.label.includes("Dativ"))?.cells[1]).toContain(
      "a1-04 · a1-06 · a1-11",
    );
    expect(lessonA113.theory[0]?.commonMistakes[4]?.classification).toBe("contextual-alternative");
    expect(lessonA113.theory[1]?.commonMistakes[3]?.classification).toBe("contextual-alternative");
    expect(lessonA113.theory[1]?.commonMistakes[4]?.classification).toBe("contextual-alternative");
    expect(lessonA113.theory[2]?.commonMistakes[0]?.classification).toBe("unverified-claim");
    expect(lessonA113.theory[2]?.commonMistakes[3]?.classification).toBe("pedagogical-simplification");
    expect(lessonA113.theory[2]?.commonMistakes[4]?.classification).toBe("unverified-claim");

    const allTheory = JSON.stringify(lessonA113.theory);
    expect(allTheory).not.toContain("الثلاثة قوانين");
    expect(allTheory).not.toContain("الجرّ Dativ");
    expect(allTheory).toContain("Sprechen Teil 2");
    expect(lessonA113.theory[2]?.explanationAr).toContain("هذه مدد أقسام الامتحان، وليست مدة لهذا الدرس");
  });

  it("checks each reading paragraph, translation, glossary item, and keyed detail", () => {
    const text = reading();
    expect(text.paragraphs).toHaveLength(6);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    for (const [index, paragraph] of text.paragraphs.entries()) {
      expect(paragraph.trim(), `reading paragraph ${index}`).toBeTruthy();
      expect(text.paragraphsAr[index]?.trim(), `Arabic paragraph ${index}`).toBeTruthy();
    }

    const sourceMarkers: Record<string, string> = {
      rq1: "Seit einem Jahr lerne ich Deutsch",
      rq2: "die Artikel „der“, „die“ und „das“",
      rq3: "jedes neue Wort mit dem Artikel",
      rq4: "Ich hätte gern einen Kaffee, bitte",
      rq5: "einfache Fragen stellen und kurze Antworten geben",
      rq6: "mit A2 anfangen",
    };
    expect(text.questions).toHaveLength(6);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(text.paragraphs.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(new Set(question.options.map((option) => option.toLowerCase())).size).toBe(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const marker = sourceMarkers[question.id];
      expect(marker, `${question.id} has a source marker`).toBeTruthy();
      expect(text.paragraphs[question.paragraph ?? -1]?.toLowerCase()).toContain(marker?.toLowerCase());
    }
    expect(text.glossary).toHaveLength(14);
    for (const entry of text.glossary) {
      expect(entry.de.trim()).toBeTruthy();
      expect(entry.ar.trim()).toBeTruthy();
      expect(entry.noteAr?.trim()).toBeTruthy();
    }
    expect(text.redemittel).toHaveLength(6);
    expect(text.discussionAr).toContain("لا يُصحح آلياً");
    expect(text.paragraphs.join(" ")).toContain("grammatisch richtig und verständlich");
    expect(text.paragraphs.join(" ")).not.toContain("Der Kellner hat gelacht");
  });

  it("checks every line and answer in both listening dialogues and separates pre-transcript evidence", () => {
    expect(lessonA113.listening.items).toHaveLength(2);
    expect(lessonA113.listening.items.map((item) => item.lines.length)).toEqual([6, 5]);
    const itemsById = new Map(lessonA113.listening.items.map((item) => [item.id, item]));
    for (const item of lessonA113.listening.items) {
      expect(item.title.trim()).toBeTruthy();
      for (const line of item.lines) {
        expect(line.speaker.trim()).toBeTruthy();
        expect(line.de.trim()).toBeTruthy();
        expect(line.ar.trim()).toBeTruthy();
      }
    }

    const sourceMarkers: Record<string, string> = {
      q1: "um sieben Uhr",
      q2: "Brot mit Käse",
      q3: "ins Kino gehen",
      q4: "zu Hause",
    };
    for (const question of lessonA113.listening.questions) {
      const item = itemsById.get(question.itemId);
      expect(item, `${question.id} refers to a transcript`).toBeDefined();
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(new Set(question.options.map((option) => option.toLowerCase())).size).toBe(question.options.length);
      expect(item?.lines.map((line) => line.de).join(" ").toLowerCase()).toContain(
        sourceMarkers[question.id]?.toLowerCase(),
      );
      expect(getListeningQuestionTaskId(lessonA113.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      expect(getListeningQuestionTaskId(lessonA113.id, question.itemId, question.id, true)).toBe(
        `listening-transcript:${lessonA113.id}:${question.itemId}:${question.id}`,
      );
    }

    const listeningGoal = lessonA113.lernziele.find((goal) => goal.id === "z7");
    expect(listeningGoal?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
    ]);
    expect(listeningGoal?.evidence?.labelAr).toContain("قبل كشف النص");
  });

  it("reviews every pronunciation item, writing prompt, flashcard, mediation task, and interaction round", () => {
    expect(lessonA113.pronunciation.items).toHaveLength(6);
    for (const item of lessonA113.pronunciation.items) {
      expect(item.de.trim()).toBeTruthy();
      expect(item.ar.trim()).toBeTruthy();
      expect(item.note.trim()).toBeTruthy();
    }
    expect(lessonA113.pronunciation.items.find((item) => item.de === "Buch")?.note).toContain("/x/");
    expect(lessonA113.pronunciation.items.find((item) => item.de === "Woche")?.note).toContain("/x/");
    expect(lessonA113.pronunciation.items.find((item) => item.de === "Schule")?.note).toContain("/ʃ/");
    expect(lessonA113.pronunciation.tip).toContain("لا يضمن صوتاً موحداً");

    expect(lessonA113.writing).toHaveLength(3);
    const imperative = findTask("e6");
    expect(imperative.type).toBe("transformation");
    if (imperative.type === "transformation") {
      expect(imperative.acceptedAnswers).toContain("Komm!");
      expect(imperative.acceptedAnswers).toContain("Komme!");
    }
    expect(lessonA113.writing[0]?.type).toBe("transformation");
    if (lessonA113.writing[0]?.type === "transformation") {
      expect(lessonA113.writing[0].acceptedAnswers).toEqual(["Er kommt aus Tunesien."]);
      expect(lessonA113.writing[0].caseSensitive).toBe(true);
    }
    for (const id of ["e10", "w3"]) {
      const dictation = findTask(id);
      expect(dictation.type).toBe("dictation");
      if (dictation.type === "dictation") expect(dictation.caseSensitive).toBe(true);
    }

    expect(lessonA113.flashcards).toHaveLength(24);
    expect(new Set(lessonA113.flashcards.map((card) => card.id)).size).toBe(24);
    expect(new Set(lessonA113.flashcards.map((card) => card.de.trim().toLowerCase())).size).toBe(24);
    for (const card of lessonA113.flashcards) {
      expect(card.de.trim()).toBeTruthy();
      expect(card.ar.trim()).toBeTruthy();
      expect(card.example?.trim()).toBeTruthy();
      expect(card.exampleAr?.trim()).toBeTruthy();
    }
    expect(lessonA113.flashcards.find((card) => card.id === "fc6")?.de).toBe("die Antwort");
    expect(lessonA113.flashcards.find((card) => card.id === "fc10")?.example).not.toContain("hat gelacht");
    expect(lessonA113.flashcards.find((card) => card.id === "fc23")?.de).toBe("nach dem Preis fragen");

    expect(lessonA113.mediation).toHaveLength(1);
    expect(lessonA113.mediation?.[0]?.titleAr).not.toContain("صوتية");
    expect(lessonA113.mediation?.[0]?.taskAr).toContain("غير مسجل كدليل");
    expect(lessonA113.interaction).toHaveLength(1);
    expect(lessonA113.interaction?.[0]?.rounds).toHaveLength(2);
    expect(lessonA113.interaction?.[0]?.strategyAr).toContain("لا إنتاج شفهي");
    for (const round of lessonA113.interaction?.[0]?.rounds ?? []) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options.length).toBeGreaterThanOrEqual(2);
      for (const option of round.options) {
        expect(option.de.trim()).toBeTruthy();
        expect(option.ar.trim()).toBeTruthy();
        expect(option.replyDe.trim()).toBeTruthy();
        expect(option.replyAr.trim()).toBeTruthy();
      }
    }
  });

  it("maps every learning goal to real, exact task contexts; opening or revealing a transcript is not evidence", () => {
    const actualTaskIds = validTaskIds();
    expect(lessonA113.lernziele).toHaveLength(9);
    for (const goal of lessonA113.lernziele) {
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

      expect(goal.evidence?.taskIds?.some((taskId) => /^(review|mediation|interaction|speaking|flow-listening):/.test(taskId))).toBe(false);
      expect(getGoalEvidenceStatus(goal, lessonA113.id, [])).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA113.id, [
          {type: "lesson-view", ts: 1, lessonId: lessonA113.id},
        ]),
      ).toBe("pending");

      const events = allCorrectGoalEvents(goal.id);
      expect(getGoalEvidenceStatus(goal, lessonA113.id, events)).toBe("evidenced");
      if ((goal.evidence?.exerciseIds.length ?? 0) > 1)
        expect(getGoalEvidenceStatus(goal, lessonA113.id, events.slice(0, 1))).toBe("pending");

      const first = events[0];
      if (first?.type !== "exercise-result") throw new Error("Expected exercise-result evidence");
      expect(
        getGoalEvidenceStatus(goal, lessonA113.id, [
          {...first, correct: false},
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA113.id, [
          {...first, lessonId: "a1-12"},
          ...events.slice(1),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA113.id, [
          {...first, taskId: `wrong-context:${first.exerciseId}`},
          ...events.slice(1),
        ]),
      ).toBe("pending");

      if (goal.id === "z7") {
        const revealed = events.map((event) => {
          if (event.type !== "exercise-result") return event;
          const question = lessonA113.listening.questions.find((candidate) => candidate.id === event.exerciseId);
          if (!question) throw new Error(`Missing A1-13 listening question ${event.exerciseId}`);
          return {
            ...event,
            taskId: getListeningQuestionTaskId(lessonA113.id, question.itemId, question.id, true),
          };
        });
        expect(getGoalEvidenceStatus(goal, lessonA113.id, revealed)).toBe("pending");
      }
    }
  });

  it("has no lesson-duration field or unsupported mastery/endorsement claim", () => {
    const metadata = getLessonMeta(lessonA113.id);
    expect(metadata).toBeDefined();
    expect(LESSON_META.some((item) => item.id === lessonA113.id)).toBe(true);
    expect(hasDurationField(lessonA113)).toBe(false);
    expect(hasDurationField(metadata)).toBe(false);
    expect(lessonA113.summary).toContain("لا يثبت الدرس إتقان المستوى");
    expect(lessonA113.fehlerUndTipps.culturalNote.content).toContain("لا يمثل هذا الدرس مادة معتمدة من Goethe");
    expect(lessonA113.fehlerUndTipps.culturalNote.content).toContain("لا يشهد بإتقان A1");
    expect(lessonA113.lernziele.some((goal) => /جاهز|مستوى كامل|alle A1|bereit für A2/i.test(`${goal.de} ${goal.ar}`))).toBe(false);
    expect(metadata?.summary).toContain("موضوعات مختارة");
  });
});
