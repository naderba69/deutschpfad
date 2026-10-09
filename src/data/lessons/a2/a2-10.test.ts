import { describe, expect, it } from "vitest";

import { lessonA210 } from "@/data/lessons/a2/a2-10";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "lerne",
  r2: "dass",
  e1: "weil",
  e2: "ob",
  e8: "يجتاز الامتحان",
  m1: "Wenn",
  m2: "meinem",
  rq1: "Montags und mittwochs am Abend.",
  rq2: "Weil sie später an einer Universität studieren möchte.",
  rq3: "Die Öffnungszeiten der Bibliothek.",
  rq4: "Weil sie sich gut vorbereitet hat.",
  q1: "Weil er später in Deutschland studieren möchte.",
  q2: "Wenn er am Morgen Zeit hat.",
  q3: "Ob die Prüfung schwierig wird.",
  q4: "Ein bisschen nervös.",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["lerne", "lernst", "lernt", "lernen"],
  r2: ["dass", "weil", "wenn", "ob"],
  e1: ["weil", "wenn", "ob", "dass"],
  e2: ["ob", "weil", "wenn", "dass"],
  e8: ["يجتاز الامتحان", "يرسب في الامتحان", "يستعد للامتحان", "يؤجل الامتحان"],
  m1: ["Wenn", "Weil", "Ob", "Dass"],
  m2: ["meinem", "meinen", "mein", "meine"],
  rq1: ["Montags und mittwochs am Abend.", "Jeden Morgen.", "Nur am Freitag.", "Am Wochenende."],
  rq2: [
    "Weil sie später an einer Universität studieren möchte.",
    "Weil ihr Freund in Deutschland wohnt.",
    "Weil ihre Prüfung schon vorbei ist.",
    "Weil sie eine Sprachschule eröffnen möchte.",
  ],
  rq3: [
    "Die Öffnungszeiten der Bibliothek.",
    "Den Termin der Prüfung.",
    "Die Kursgebühr.",
    "Den Stundenplan der Sprachschule.",
  ],
  rq4: [
    "Weil sie sich gut vorbereitet hat.",
    "Weil die Prüfung abgesagt wurde.",
    "Weil sie keine Prüfung hat.",
    "Weil Sami die Prüfung für sie geschrieben hat.",
  ],
  q1: [
    "Weil er später in Deutschland studieren möchte.",
    "Weil er morgen eine Prüfung hat.",
    "Weil Anna in Deutschland wohnt.",
    "Weil er neue Wörter unterrichten möchte.",
  ],
  q2: [
    "Wenn er am Morgen Zeit hat.",
    "Jeden Abend nach dem Unterricht.",
    "Wenn Anna ihn anruft.",
    "Nur am Wochenende.",
  ],
  q3: [
    "Ob die Prüfung schwierig wird.",
    "Wann der Unterricht beginnt.",
    "Ob Mona Deutsch lernt.",
    "Wie viele Wörter er lernen muss.",
  ],
  q4: ["Ein bisschen nervös.", "Ganz ruhig und sicher.", "Wütend auf Mona.", "Müde und krank."],
};

const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["mein"],
  e6: ["meinen", "meiner"],
  w2: ["weil", "Wenn", "ob"],
  m5: ["weil", "Wenn", "ob"],
};

const expectedFillBlankOptions: Record<string, string[][]> = {
  r3: [["mein", "meine", "meinen"]],
  e6: [
    ["meinen", "meinem", "meine"],
    ["meiner", "meinen", "meine"],
  ],
  w2: [
    ["weil", "wenn", "ob"],
    ["Wenn", "Weil", "Ob"],
    ["ob", "weil", "wenn"],
  ],
  m5: [
    ["weil", "wenn", "ob"],
    ["Wenn", "Weil", "Ob"],
    ["ob", "weil", "wenn"],
  ],
};

const expectedErrorCorrections: Record<
  string,
  { sentence: string; wrongWord: string; correctWord: string; options: string[] }
> = {
  e5: {
    sentence: "Ich sehe mein Bruder.",
    wrongWord: "mein",
    correctWord: "meinen",
    options: ["meinen", "meinem", "meine", "mein"],
  },
  e9: {
    sentence: "Wenn es regnet, ich bleibe zu Hause.",
    wrongWord: "ich bleibe",
    correctWord: "bleibe ich",
    options: ["bleibe ich", "ich bleibe", "bleiben ich", "bleibst ich"],
  },
  m4: {
    sentence: "Ich sehe meine Vater.",
    wrongWord: "meine",
    correctWord: "meinen",
    options: ["meinen", "meinem", "mein", "meiner"],
  },
};

const expectedEvidence = {
  z1: {
    exerciseIds: ["e1", "e2", "e4", "e7", "e9", "m1", "m3", "m5"],
    taskIds: [
      "practice:a2-10:e1",
      "flow-practice:a2-10:e1",
      "practice:a2-10:e2",
      "flow-practice:a2-10:e2",
      "practice:a2-10:e4",
      "flow-practice:a2-10:e4",
      "practice:a2-10:e7",
      "practice:a2-10:e9",
      "mini-test:a2-10:m1",
      "flow-mini-test:a2-10:m1",
      "mini-test:a2-10:m3",
      "mini-test:a2-10:m5",
    ],
  },
  z2: {
    exerciseIds: ["e5", "e6", "m2", "m4"],
    taskIds: [
      "practice:a2-10:e5",
      "practice:a2-10:e6",
      "mini-test:a2-10:m2",
      "flow-mini-test:a2-10:m2",
      "mini-test:a2-10:m4",
    ],
  },
  "z-reading": {
    exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
    taskIds: [
      "reading:read-a2-10:rq1",
      "reading:read-a2-10:rq2",
      "reading:read-a2-10:rq3",
      "reading:read-a2-10:rq4",
    ],
  },
  "z-listening": {
    exerciseIds: ["q1", "q2", "q3", "q4"],
    taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l2:q4"],
  },
  "z-writing": {
    exerciseIds: ["w1", "w2", "w3"],
    taskIds: ["writing:a2-10:w1", "writing:a2-10:w2", "writing:a2-10:w3"],
  },
} as const;

function allTasks(): Exercise[] {
  const reading = lessonA210.reading;
  if (!reading) throw new Error("A2-10 must keep the reviewed reading text");
  return [
    ...(lessonA210.review ?? []),
    ...lessonA210.practiceBank,
    ...lessonA210.miniTest,
    ...lessonA210.writing,
    ...reading.questions,
    ...lessonA210.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-10 task ${id} is missing`);
  return value;
}

function taskIds(values: { id: string }[]): string[] {
  return values.map((value) => value.id).sort();
}

function goal(id: string) {
  const value = lessonA210.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`A2-10 goal ${id} is missing`);
  return value;
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
  taskIdOverride?: string,
  lessonId = lessonA210.id,
): AnalyticsEvent {
  const acceptedTaskId = goal(goalId).evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-10 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-10 lesson content audit", () => {
  it("preserves lesson identity and the existing order without claiming a duration or full mastery", () => {
    expect(lessonA210.id).toBe("a2-10");
    expect(lessonA210.unitId).toBe("a2-10");
    expect(lessonA210.level).toBe("A2");
    expect(lessonA210.order).toBe(1);
    expect("duration" in lessonA210).toBe(false);
    expect(lessonA210.summary).not.toMatch(/يغطي (?:جميع|كل)|covers all|Goethe|CEFR|اعتماد|إتقان|جاهزية|\b\d+\s*دقيقة/i);
    expect(LESSON_META.find((item) => item.id === "a2-10")).toMatchObject({
      id: "a2-10",
      unitId: "a2-10",
      level: "A2",
      order: 1,
      titleDe: "Lernen und Schule",
      titleAr: "المدرسة والتعلم",
    });
    expect(LESSON_META.find((item) => item.id === "a2-10")?.summary).not.toContain("كل الحالات");
    expect(lessonA210.einfuehrung.activateVocabulary).toEqual([
      { de: "der Kurs", ar: "الدورة أو المساق، بحسب السياق" },
      { de: "lernen", ar: "يتعلم أو يدرس" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "der Unterricht", ar: "التعليم أو الحصة الدراسية" },
      { de: "studieren", ar: "يدرس في الجامعة" },
    ]);

    expect(lessonA210.lernziele.map((item) => item.id)).toEqual([
      "z1",
      "z2",
      "z-reading",
      "z-listening",
      "z-writing",
    ]);
    expect(taskIds(lessonA210.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(taskIds(lessonA210.practiceBank)).toEqual(
      Array.from({ length: 10 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(taskIds(lessonA210.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(taskIds(lessonA210.writing)).toEqual(["w1", "w2", "w3"]);
    expect(taskIds(lessonA210.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(taskIds(lessonA210.listening.questions)).toEqual(["q1", "q2", "q3", "q4"]);
    expect(allTasks()).toHaveLength(29);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(29);
    expect(lessonA210.theory).toHaveLength(2);
    expect(lessonA210.theory.every((block) => block.examples.length >= 5)).toBe(true);
    expect(lessonA210.flashcards.map(({ id, de, ar, example, exampleAr, level }) => ({
      id,
      de,
      ar,
      example,
      exampleAr,
      level,
    }))).toEqual([
      { id: "fc1", de: "der Kurs", ar: "الدورة", example: "Der Kurs beginnt um neun.", exampleAr: "تبدأ الدورة في التاسعة.", level: "A2" },
      { id: "fc2", de: "die Prüfung", ar: "الامتحان", example: "Die Prüfung ist schwer.", exampleAr: "الامتحان صعب.", level: "A2" },
      { id: "fc3", de: "der Unterricht", ar: "التعليم/الحصة الدراسية", example: "Der Unterricht ist interessant.", exampleAr: "الحصة الدراسية ممتعة.", level: "A2" },
      { id: "fc4", de: "studieren", ar: "يدرس في الجامعة", example: "Ich will in Berlin studieren.", exampleAr: "أريد الدراسة الجامعية في برلين.", level: "A2" },
      { id: "fc5", de: "weil", ar: "لأنّ", example: "Ich lerne weiter, weil ich die Prüfung bestehen will.", exampleAr: "أواصل التعلم لأنني أريد اجتياز الامتحان.", level: "A2" },
      { id: "fc6", de: "wenn", ar: "إذا/عندما بحسب السياق", example: "Wenn ich Zeit habe, wiederhole ich Vokabeln.", exampleAr: "إذا توفر لديّ وقت، أراجع المفردات.", level: "A2" },
      { id: "fc7", de: "ob", ar: "ما إذا/هل في سؤال غير مباشر", example: "Ich weiß nicht, ob er kommt.", exampleAr: "لا أعرف ما إذا كان سيأتي.", level: "A2" },
      { id: "fc8", de: "bestehen", ar: "يجتاز", example: "Ich bestehe die Prüfung.", exampleAr: "أجتاز الامتحان.", level: "A2" },
    ]);
    expect(lessonA210.pronunciation.items).toHaveLength(6);
    expect(lessonA210.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA210.reading?.paragraphs).toHaveLength(4);
    expect(lessonA210.listening.items).toHaveLength(2);
    expect(lessonA210.mediation).toHaveLength(1);
    expect(lessonA210.interaction?.[0]?.rounds).toHaveLength(2);
  });

  it("keeps the three review answers and their cross-lesson references defensible", () => {
    const review = lessonA210.review ?? [];
    expect(review[0]).toMatchObject({
      id: "r1",
      instructionAr: "مراجعة من A1 (درس a1-01 — التعارف والتحيات): اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ Deutsch. (أتعلم)",
      options: ["lerne", "lernst", "lernt", "lernen"],
      correctIndex: 0,
      explanation: "مع ich: lerne (درس التعارف).",
    });
    expect(review[1]).toMatchObject({
      id: "r2",
      instructionAr: "مراجعة من A2 (درس a2-06 — الإعلام والأخبار): اختر الرابط الذي يقدّم مضمون الاعتقاد بوصفه خبراً:",
      questionDe: "Ich glaube, ___ das stimmt.",
      options: ["dass", "weil", "wenn", "ob"],
      correctIndex: 0,
      explanation: "في هذا السياق، يقدّم dass مضمون الاعتقاد: «أعتقد أن ذلك صحيح». أما weil فيقدّم سبباً، وwenn شرطاً أو زمناً، وob سؤالاً غير مباشر بنعم/لا.",
    });
    expect(review[2]).toMatchObject({
      id: "r3",
      instructionAr: "مراجعة من A1 (درس a1-02 — العائلة والأصدقاء): أكمل الملكية:",
      template: "Das ist ___ Bruder. (أخي)",
      blanks: [{ correct: "mein", options: ["mein", "meine", "meinen"] }],
      explanation: "Bruder اسم مذكر، ويأتي مسند الخبر بعد sein في حالة Nominativ هنا: mein Bruder. (درس العائلة).",
    });
    expect(review.map((item) => item.instructionAr).join(" ")).toMatch(/a1-01/);
    expect(review.map((item) => item.instructionAr).join(" ")).toMatch(/a1-02/);
    expect(review.map((item) => item.instructionAr).join(" ")).toMatch(/a2-06/);
    for (const id of ["a1-01", "a1-02", "a2-06"]) {
      expect(LESSON_META.some((item) => item.id === id), `review reference ${id}`).toBe(true);
    }
    expect(evaluateExercise(task("r1"), "lerne").isCorrect).toBe(true);
    expect(evaluateExercise(task("r2"), "dass").isCorrect).toBe(true);
    expect(evaluateExercise(task("r3"), ["mein"]).isCorrect).toBe(true);
  });

  it("audits the key and every distractor for every multiple-choice item", () => {
    expect(Object.keys(expectedMultipleChoiceKeys).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "multiple-choice")
        .map((item) => item.id)
        .sort(),
    );

    for (const [id, expectedKey] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      const expectedOptions = expectedMultipleChoiceOptions[id];
      expect(expectedOptions, `${id} expected options`).toBeDefined();
      expect(exercise.options, `${id} option order and distractors`).toEqual(expectedOptions);
      expect(exercise.options[exercise.correctIndex], `${id} answer key`).toBe(expectedKey);
      expect(new Set(exercise.options.map((option) => option.toLowerCase())).size, `${id} unique options`).toBe(
        exercise.options.length,
      );
      expect(exercise.options.filter((option) => option === expectedKey)).toHaveLength(1);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option: ${option}`).toBe(
          option === expectedKey,
        );
      }
      expect(exercise.explanation.trim().length, `${id} Arabic feedback`).toBeGreaterThan(10);
    }
    expect(task("e2").explanation).toContain("يمكن أن تأتي dass بعد wissen في سياق يقرر مضموناً خبرياً بمعنى مختلف");
  });

  it("audits each fill-blank key and each offered alternative", () => {
    expect(Object.keys(expectedFillBlankKeys).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "fill-blank")
        .map((item) => item.id)
        .sort(),
    );

    for (const [id, expectedAnswers] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), `${id} answer key`).toEqual(expectedAnswers);
      expect(
        exercise.blanks.map((blank) => blank.options),
        `${id} options per blank`,
      ).toEqual(expectedFillBlankOptions[id]);
      expect(evaluateExercise(exercise, expectedAnswers).isCorrect, `${id} all correct`).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        expect(new Set(blank.options ?? []).size, `${id} blank ${blankIndex + 1} unique options`).toBe(
          blank.options?.length,
        );
        for (const option of blank.options ?? []) {
          const answer = [...expectedAnswers];
          answer[blankIndex] = option;
          expect(evaluateExercise(exercise, answer).isCorrect, `${id} blank ${blankIndex + 1}: ${option}`).toBe(
            option.toLowerCase() === expectedAnswers[blankIndex]?.toLowerCase(),
          );
        }
      });
    }
    expect(task("m5").explanation).toContain("يمكن أن تكون wenn ممكنة في قراءة أخرى تعني «أبقى كلما أمطرت»");
  });

  it("checks every error-correction sentence, highlighted span, key, and distractor", () => {
    expect(Object.keys(expectedErrorCorrections).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "error-correction")
        .map((item) => item.id)
        .sort(),
    );

    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} source sentence`).toBe(expected.sentence);
      expect(exercise.wrongWord, `${id} highlighted span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.isAlreadyCorrect).not.toBe(true);
      expect(exercise.instructionAr).not.toMatch(/لا خطأ|إن وجدت خطأ/);
      expect(exercise.options.filter((option) => option === expected.correctWord)).toHaveLength(1);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option: ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
  });

  it("checks the matching vocabulary, complete word-order tokens, and guided transformations", () => {
    const matching = task("e3");
    if (matching.type !== "matching") throw new Error("e3 must be matching");
    expect(matching.pairs).toEqual([
      { left: "der Kurs", right: "الدورة أو المساق" },
      { left: "die Prüfung", right: "الامتحان" },
      { left: "der Unterricht", right: "التعليم أو الحصة الدراسية" },
      { left: "studieren", right: "يدرس في الجامعة" },
    ]);
    expect(evaluateExercise(matching, matching.pairs).isCorrect).toBe(true);
    expect(evaluateExercise(matching, matching.pairs.slice(1)).isCorrect).toBe(false);

    const correctTokenOrders: Record<string, string[]> = {
      e4: ["Ich", "lerne", ",", "weil", "ich", "die", "Prüfung", "bestehen", "will", "."],
      m3: ["Ich", "weiß", "nicht", ",", "ob", "er", "kommt", "."],
    };
    expect(Object.keys(correctTokenOrders).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "word-ordering")
        .map((item) => item.id)
        .sort(),
    );
    for (const [id, answerTokens] of Object.entries(correctTokenOrders)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      const normalizedTokens = exercise.tokens.map((token) => token.replace(/[.,]/g, "")).filter(Boolean).sort();
      const normalizedAnswer = answerTokens.map((token) => token.replace(/[.,]/g, "")).filter(Boolean).sort();
      expect(normalizedTokens, `${id} contains each needed word exactly once`).toEqual(normalizedAnswer);
      expect(evaluateExercise(exercise, answerTokens).isCorrect, `${id} correct ordering`).toBe(true);
      expect(exercise.correctSentence.endsWith(".")).toBe(true);
    }
    expect(task("e4").instructionAr).toContain("Ich lerne");
    expect(task("m3").instructionAr).toContain("Ich weiß nicht");

    const transformations: Record<string, { accepted: string[]; sample: string }> = {
      w1: {
        accepted: ["Ich lerne Deutsch, weil es wichtig ist", "Ich lerne Deutsch, weil es wichtig ist."],
        sample: "Ich lerne Deutsch, weil es wichtig ist.",
      },
      e7: {
        accepted: ["Ich weiß nicht, ob er kommt", "Ich weiß nicht, ob er kommt."],
        sample: "Ich weiß nicht, ob er kommt.",
      },
    };
    expect(Object.keys(transformations).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "transformation")
        .map((item) => item.id)
        .sort(),
    );
    for (const [id, expected] of Object.entries(transformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers).toEqual(expected.accepted);
      expect(exercise.sampleAnswer).toBe(expected.sample);
      for (const answer of exercise.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id} accepted: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Ich weiß nicht, ob er ist kommt.").isCorrect).toBe(false);
    }
  });

  it("checks both dictations against their exact heard text", () => {
    const expected: Record<string, string> = {
      w3: "Ich weiß nicht, ob die Prüfung schwer ist.",
      e10: "Wenn ich Zeit habe, lerne ich Vokabeln.",
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "dictation")
        .map((item) => item.id)
        .sort(),
    );
    for (const [id, audioText] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText).toBe(audioText);
      expect(evaluateExercise(exercise, audioText).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, "Ich weiß nicht, die Prüfung ob schwer ist.").isCorrect).toBe(false);
    }
  });

  it("checks both theory blocks, the three-link contrast, and the scoped possessive table", () => {
    const links = lessonA210.theory.find((block) => block.id === "t1");
    const possessives = lessonA210.theory.find((block) => block.id === "t2");
    expect(links).toBeDefined();
    expect(possessives).toBeDefined();
    expect(links?.table?.rows.map((row) => [row.label, ...row.cells])).toEqual([
      ["weil", "لأنّ", "سبب", "Ich lerne, weil ich die Prüfung bestehen will."],
      ["wenn", "إذا/عندما", "شرط أو زمن بحسب السياق", "Wenn ich Zeit habe, lerne ich."],
      ["ob", "هل/ما إذا", "سؤال غير مباشر بنعم/لا", "Ich weiß nicht, ob er kommt."],
    ]);
    expect(links?.explanationAr).toContain("الزمن");
    expect(links?.explanationAr).toContain("الفعل المصرف");
    expect(links?.whyAr).toContain("علامة الترقيم تتبع نوع الجملة الرئيسية");
    expect(links?.relatedRuleComparison?.content).toContain("denn ich habe Zeit");
    expect(links?.relatedRuleComparison?.content).toContain("الكلام العفوي");
    expect(links?.commonMistakes).toEqual([
      {
        wrong: "Ich lerne noch, weil ich will die Prüfung bestehen.",
        right: "Ich lerne noch, weil ich die Prüfung bestehen will.",
        whyAr: "في المثال التابع المندمج الذي نتدرب عليه يأتي الفعل المصرف will في النهاية، بعد المصدر bestehen.",
        classification: "error",
      },
      {
        wrong: "Ich weiß nicht, wenn die Prüfung schwer ist. (إذا كان المقصود: لا أعرف هل الامتحان صعب.)",
        right: "Ich weiß nicht, ob die Prüfung schwer ist.",
        whyAr: "للسؤال غير المباشر بنعم/لا نستخدم ob؛ وتظل wenn مناسبة في سياقات الشرط أو الزمن الأخرى.",
        classification: "contextual-alternative",
      },
      {
        wrong: "Weil es regnet, ich bleibe zu Hause.",
        right: "Weil es regnet, bleibe ich zu Hause.",
        whyAr: "في الجملة الرئيسية القياسية، تشغل الجملة التابعة المتقدمة الموقع الأول؛ لذلك يأتي الفعل المصرف بعدها مباشرةً قبل الفاعل.",
        classification: "error",
      },
    ]);
    expect(links?.examples.map(({ de, ar }) => [de, ar])).toEqual([
      ["Ich lerne Deutsch, weil ich in Deutschland studieren will.", "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا."],
      ["Wenn ich Zeit habe, wiederhole ich Vokabeln.", "إذا توفر لديّ وقت، أراجع المفردات."],
      ["Ich weiß nicht, ob die Prüfung schwer ist.", "لا أعرف ما إذا كان الامتحان صعباً."],
      ["Er lernt, weil er die Prüfung bestehen will.", "يتعلم لأنه يريد اجتياز الامتحان."],
      ["Ob du kommst, ist mir egal.", "لا يهمني إن كنت ستأتي أم لا."],
    ]);

    expect(possessives?.titleAr).not.toContain("كل الحالات");
    expect(possessives?.titleDe).toBe("Possessivbegleiter: Deklination von mein");
    expect(possessives?.table?.rows.map((row) => row.label)).toEqual([
      "Nominativ",
      "Akkusativ",
      "Dativ",
    ]);
    expect(possessives?.table?.rows.map((row) => row.cells)).toEqual([
      ["mein", "meine", "mein", "meine"],
      ["meinen", "meine", "mein", "meine"],
      ["meinem", "meiner", "meinem", "meinen (+n عند انطباقها على الاسم)"],
    ]);
    expect(possessives?.explanationAr).toContain("لا يغطي الجدول Genitiv");
    expect(possessives?.explanationAr).toContain("في Dativ الجمع تكون الأداة meinen");
    expect(possessives?.explanationAr).toContain("mit meinen Freunden وmit meinen Eltern");
    expect(possessives?.comparisonWithArabic).toContain("لا تقابل تسمية Dativ كلمة «الجر» العربية مقابلةً كاملة");
    expect(possessives?.examples.map(({ de, ar }) => [de, ar])).toEqual([
      ["Das ist mein Bruder.", "هذا أخي. (Nominativ بعد sein)"],
      ["Ich sehe meinen Bruder.", "أرى أخي. (Akkusativ؛ sehen يأخذ مفعولاً به هنا)"],
      ["Ich helfe meinem Bruder.", "أساعد أخي. (Dativ؛ الفعل helfen يتطلب Dativ)"],
      ["Meine Schwester lernt Deutsch.", "أختي تتعلم الألمانية. (Nominativ مؤنث)"],
      ["Ich helfe meiner Schwester.", "أساعد أختي. (Dativ مؤنث)"],
      ["Das ist mein Buch. Ich lese mein Buch.", "هذا كتابي. أقرأ كتابي. (محايد: mein في المثالين)"],
    ]);
    expect(possessives?.commonMistakes).toEqual([
      {
        wrong: "Ich sehe mein Bruder.",
        right: "Ich sehe meinen Bruder.",
        whyAr: "Bruder مذكر، وهو مفعول به مباشر لـsehen هنا؛ لذلك Akkusativ: meinen.",
        classification: "error",
      },
      {
        wrong: "Ich helfe meinen Bruder.",
        right: "Ich helfe meinem Bruder.",
        whyAr: "الفعل helfen يأخذ Dativ في هذا المعنى؛ مع الاسم المذكر نقول meinem Bruder.",
        classification: "error",
      },
      {
        wrong: "meine Bruder",
        right: "mein Bruder",
        whyAr: "في Nominativ الاسم Bruder مذكر ومفرد؛ الشكل المناسب قبل الاسم هو mein.",
        classification: "error",
      },
    ]);
    expect(lessonA210.summary).not.toMatch(/كل الحالات|all cases/i);
  });

  it("checks the full bilingual reading, paragraph references, glossary, questions, and answer keys", () => {
    const reading = lessonA210.reading;
    expect(reading).toBeDefined();
    expect(reading?.id).toBe("read-a2-10");
    expect(reading?.textType).toBe("erzaehlung");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphs).toEqual([
      "Seit zwei Monaten besucht Noura einen Deutschkurs an einer Sprachschule in ihrer Stadt. Der Unterricht findet montags und mittwochs am Abend statt. Sie lernt Deutsch, weil sie später an einer Universität studieren möchte.",
      "Vor der Prüfung wiederholt Noura jeden Tag neue Wörter. Wenn sie nach der Arbeit müde ist, macht sie eine kurze Pause. Danach schreibt sie einige Wörter in ihr Heft und liest sie am nächsten Morgen noch einmal.",
      "Am Freitag fragt ihr Freund Sami, ob sie am Wochenende zusammen üben kann. Noura antwortet, dass sie am Samstag Zeit hat. Sie weiß noch nicht, ob die Bibliothek geöffnet ist; deshalb prüft Sami die Öffnungszeiten auf der Webseite.",
      "Am Samstag lernen beide in der Bibliothek. Sie vergleichen ihre Notizen und erklären einander schwierige Wörter. Noura ist vor der Prüfung etwas nervös, aber sie bleibt ruhig, weil sie sich gut vorbereitet hat. Wenn beide Zeit haben, wollen sie vor der nächsten Prüfung wieder zusammen lernen.",
    ]);
    expect(reading?.paragraphsAr).toEqual([
      "منذ شهرين تحضر نورا دورةً للألمانية في مدرسة لغات بمدينتها. تُعقد الحصص مساء يومي الاثنين والأربعاء. تتعلم الألمانية لأنها تريد لاحقاً الدراسة في جامعة.",
      "قبل الامتحان تراجع نورا كلمات جديدة كل يوم. إذا عادت متعبة من العمل تأخذ استراحة قصيرة. بعد ذلك تكتب بعض الكلمات في دفترها وتقرأها مجدداً في صباح اليوم التالي.",
      "يوم الجمعة يسألها صديقها سامي هل يمكنهما التدرّب معاً في نهاية الأسبوع. تجيب نورا بأنها متفرغة يوم السبت. وهي لا تعرف بعد إن كانت المكتبة مفتوحة؛ لذلك يتحقق سامي من مواعيد فتحها على الموقع الإلكتروني.",
      "يوم السبت يتعلم الاثنان معاً في المكتبة. يقارنان ملاحظاتهما ويشرحان لبعضهما الكلمات الصعبة. تشعر نورا ببعض التوتر قبل الامتحان، لكنها تظل هادئة لأنها استعدت جيداً. وإذا كان لدى كليهما وقت، يريدان الدراسة معاً مجدداً قبل الامتحان التالي.",
    ]);
    expect(reading?.paragraphs?.every((paragraph) => paragraph.trim().length > 80)).toBe(true);
    expect(reading?.paragraphsAr?.every((paragraph) => paragraph.trim().length > 60)).toBe(true);
    expect(reading?.paragraphs?.[0]).toContain("montags und mittwochs am Abend");
    expect(reading?.paragraphs?.[0]).toContain("weil sie später an einer Universität studieren möchte");
    expect(reading?.paragraphs?.[1]).toContain("Wenn sie nach der Arbeit müde ist");
    expect(reading?.paragraphs?.[2]).toContain("ob die Bibliothek geöffnet ist");
    expect(reading?.paragraphs?.[3]).toContain("weil sie sich gut vorbereitet hat");
    expect(reading?.questions.map((question) => [question.questionDe, question.questionAr, question.paragraph])).toEqual([
      ["Wann findet der Unterricht statt?", "متى تُعقد الحصص؟", 1],
      ["Warum lernt Noura Deutsch?", "لماذا تتعلم نورا الألمانية؟", 1],
      ["Was prüft Sami am Freitag?", "ما الذي يتحقق منه سامي يوم الجمعة؟", 3],
      ["Warum bleibt Noura ruhig?", "لماذا تظل نورا هادئة؟", 4],
    ]);
    expect(reading?.questions.map((question) => question.explanation)).toEqual([
      "تنص الفقرة الأولى على أن الحصص مساء الاثنين والأربعاء؛ أما لقاء المكتبة يوم السبت فليس موعد الحصة.",
      "تذكر نورا أنها تريد لاحقاً الدراسة في جامعة. بقية الأسباب غير واردة في النص.",
      "يتحقق سامي من مواعيد فتح المكتبة على موقعها؛ ولا يذكر النص أنه يفحص موعد الامتحان أو الرسوم أو الجدول.",
      "تقول الفقرة إنها تظل هادئة لأنها استعدت جيداً؛ ولا يذكر النص إلغاء الامتحان أو غياب الامتحان أو قيام سامي به عنها.",
    ]);
    expect(reading?.glossary).toEqual([
      { de: "die Sprachschule", ar: "مدرسة اللغات" },
      { de: "der Unterricht", ar: "التعليم أو الحصة الدراسية" },
      { de: "wiederholen", ar: "يراجع أو يكرر" },
      { de: "müde", ar: "متعب" },
      { de: "das Heft", ar: "الدفتر" },
      { de: "üben", ar: "يتدرب" },
      { de: "geöffnet", ar: "مفتوح" },
      { de: "die Öffnungszeiten", ar: "مواعيد الفتح" },
      { de: "die Notizen", ar: "الملاحظات" },
      { de: "sich vorbereiten", ar: "يستعد" },
    ]);
    expect(reading?.redemittel).toEqual([
      { de: "Ich wiederhole neue Wörter.", ar: "أراجع كلمات جديدة." },
      { de: "Ich weiß noch nicht, ob die Bibliothek geöffnet ist.", ar: "لا أعرف بعد إن كانت المكتبة مفتوحة." },
      { de: "Ich lerne, weil ich mich gut vorbereiten möchte.", ar: "أدرس لأنني أريد أن أستعد جيداً." },
      { de: "Wenn ich müde bin, mache ich eine Pause.", ar: "إذا كنت متعباً، آخذ استراحة." },
    ]);
    expect(reading?.discussionAr).toMatch(/لا يقيس وحده.*الكتابة الحرة أو التحدث/);
  });

  it("checks both listening dialogues and every transcript-free comprehension question", () => {
    expect(lessonA210.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA210.listening.items.map((item) => item.lines.length)).toEqual([4, 5]);
    expect(lessonA210.listening.items.flatMap((item) => item.lines.map(({ speaker, de, ar }) => ({ speaker, de, ar })))).toEqual([
      { speaker: "Anna", de: "Warum lernst du Deutsch, Sami?", ar: "لماذا تتعلم الألمانية يا سامي؟" },
      { speaker: "Sami", de: "Ich lerne Deutsch, weil ich später in Deutschland studieren möchte.", ar: "أتعلم الألمانية لأنني أريد لاحقاً الدراسة في ألمانيا." },
      { speaker: "Anna", de: "Wann wiederholst du neue Wörter?", ar: "متى تراجع الكلمات الجديدة؟" },
      { speaker: "Sami", de: "Wenn ich am Morgen Zeit habe, wiederhole ich sie.", ar: "إذا توفر لديّ وقت في الصباح، أراجعها." },
      { speaker: "Karim", de: "Ich weiß nicht, ob die Prüfung schwierig wird.", ar: "لا أعرف ما إذا كان الامتحان سيكون صعباً." },
      { speaker: "Mona", de: "Wann ist die Prüfung?", ar: "متى الامتحان؟" },
      { speaker: "Karim", de: "Morgen. Ich lerne heute noch, weil ich gut vorbereitet sein möchte.", ar: "غداً. سأدرس اليوم أيضاً لأنني أريد أن أكون مستعداً جيداً." },
      { speaker: "Mona", de: "Bist du nervös?", ar: "هل أنت متوتر؟" },
      { speaker: "Karim", de: "Ja, ein bisschen. Ich hoffe, dass alles gut geht.", ar: "نعم، قليلاً. آمل أن تسير الأمور على ما يرام." },
    ]);
    expect(
      lessonA210.listening.items.flatMap((item) => item.lines).every((line) => line.de.trim() && line.ar.trim()),
    ).toBe(true);
    expect(lessonA210.listening.items[0]?.lines[1]?.de).toBe(
      "Ich lerne Deutsch, weil ich später in Deutschland studieren möchte.",
    );
    expect(lessonA210.listening.items[0]?.lines[3]?.de).toBe(
      "Wenn ich am Morgen Zeit habe, wiederhole ich sie.",
    );
    expect(lessonA210.listening.items[1]?.lines[0]?.de).toBe(
      "Ich weiß nicht, ob die Prüfung schwierig wird.",
    );
    expect(lessonA210.listening.items[1]?.lines[2]?.de).toBe(
      "Morgen. Ich lerne heute noch, weil ich gut vorbereitet sein möchte.",
    );
    expect(lessonA210.listening.questions.map((question) => question.itemId)).toEqual([
      "l1",
      "l1",
      "l2",
      "l2",
    ]);
    expect(lessonA210.listening.questions.map((question) => question.questionAr)).toEqual([
      "لماذا يتعلم سامي الألمانية؟",
      "متى يراجع سامي الكلمات الجديدة؟",
      "ما الأمر الذي لا يعرفه كريم؟",
      "كيف يشعر كريم؟",
    ]);
    expect(lessonA210.listening.questions.map((question) => question.explanation)).toEqual([
      "يقول Sami إنه يتعلم الألمانية لأنه يريد لاحقاً الدراسة في ألمانيا؛ أما موعد الامتحان فيخص حوار Karim.",
      "يقول Sami: Wenn ich am Morgen Zeit habe, wiederhole ich sie. لا يحدد الحوار وقتاً يومياً ثابتاً.",
      "يقول Karim: Ich weiß nicht, ob die Prüfung schwierig wird. ولا يذكر النص عدم معرفته بالمواعيد أو بعدد الكلمات.",
      "يجيب Karim: Ja, ein bisschen، رداً على سؤال Mona عما إذا كان متوتراً.",
    ]);
    for (const question of lessonA210.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA210.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      expect(getListeningQuestionTaskId(lessonA210.id, question.itemId, question.id, true)).toBe(
        `listening-transcript:${lessonA210.id}:${question.itemId}:${question.id}`,
      );
    }
    expect(lessonA210.lernziele.find((item) => item.id === "z-listening")?.evidence?.taskIds).not.toContain(
      "listening-transcript:a2-10:l1:q1",
    );
    expect(lessonA210.lernziele.find((item) => item.id === "z-listening")?.evidence?.taskIds?.some((id) =>
      id.startsWith("flow-listening:"),
    )).toBe(false);
  });

  it("checks pronunciation notes against the reviewed IPA and removes misleading Arabic sound substitutions", () => {
    const expectedIpa: Record<string, string> = {
      "die Prüfung": "[ˈpʁyːfʊŋ]",
      "der Unterricht": "[ˈʊntɐˌʁɪçt]",
      studieren: "[ʃtuˈdiːʁən]",
      "die Vokabel (Plural: die Vokabeln)": "[voˈkaːbl̩]",
      bestehen: "[bəˈʃteːən]",
      "der Lehrer": "[ˈleːʁɐ]",
    };
    const expectedArabic: Record<string, string> = {
      "die Prüfung": "الامتحان",
      "der Unterricht": "التعليم أو الحصة",
      studieren: "يدرس في الجامعة",
      "die Vokabel (Plural: die Vokabeln)": "المفردة (الجمع: المفردات)",
      bestehen: "يجتاز امتحاناً",
      "der Lehrer": "المعلم",
    };
    const expectedNotes: Record<string, string> = {
      "die Prüfung": "IPA: [ˈpʁyːfʊŋ]. النبر على المقطع الأول؛ ü هي /yː/ طويلة ومدوّرة، وng تمثل /ŋ/. يختلف نطق r إقليمياً.",
      "der Unterricht": "IPA: [ˈʊntɐˌʁɪçt]. في هذا الموضع ch هي /ç/ (الصوت الألماني في ich)، وليست /ʃ/.",
      studieren: "IPA: [ʃtuˈdiːʁən]. النبر على مقطع -die-، وie تمثل /iː/ طويلة.",
      "die Vokabel (Plural: die Vokabeln)": "IPA للمفرد: [voˈkaːbl̩]. v في هذه الكلمة /v/، والنبر على المقطع الثاني؛ لا تُعمّم هذا النطق على كل كلمة فيها v.",
      bestehen: "IPA: [bəˈʃteːən]. النبر على -ste-؛ ويُنطق st في بداية المقطع المنبور /ʃt/.",
      "der Lehrer": "IPA: [ˈleːʁɐ]. النبر على المقطع الأول، وe فيه طويلة؛ يتغير تحقيق r بحسب المتحدث والمنطقة.",
    };
    expect(Object.keys(expectedIpa).sort()).toEqual(lessonA210.pronunciation.items.map((item) => item.de).sort());
    expect(lessonA210.pronunciation.items.map((item) => [item.de, item.ar])).toEqual(
      Object.entries(expectedArabic),
    );
    for (const item of lessonA210.pronunciation.items) {
      expect(item.note).toBe(expectedNotes[item.de]);
      expect(item.note).toContain(expectedIpa[item.de] ?? "");
      expect(item.ar.trim()).not.toBe("");
    }
    expect(lessonA210.pronunciation.tip).toBe(
      "استخدم IPA مرجعاً للصوت لا تهجئة عربية تقريبية: لا تمثل العربية /yː/ أو /ç/ تمثيلاً مطابقاً. استمع إلى النطق المعروض في القاموس، ولا تعتبر تهجئة عربية مثل «پريوفونغ» معياراً صوتياً.",
    );
    expect(lessonA210.pronunciation.items[1]?.note).toContain("/ç/");
    expect(lessonA210.pronunciation.items[3]?.note).toContain("v في هذه الكلمة /v/");
    expect(lessonA210.pronunciation.items.map((item) => item.note).join(" ")).not.toMatch(
      /v\s*=\s*ف|ch.*=\s*ش ناعمة|s بين علة = ز/,
    );
    const shadowing = lessonA210.pronunciation.shadowing;
    expect(shadowing).toBeDefined();
    expect(shadowing?.map(({ de, ar, tip }) => [de, ar, tip])).toEqual([
      ["Ich lerne weiter, weil ich die Prüfung bestehen will.", "أواصل التعلم لأنني أريد اجتياز الامتحان.", "في هذا النمط التابع يأتي الفعل المصرف will في النهاية، بعد bestehen."],
      ["Wenn ich Zeit habe, wiederhole ich Vokabeln.", "إذا توفر لديّ وقت، أراجع المفردات.", "ينتهي الجزء التابع بـhabe؛ وبعده يأتي فعل الجملة الرئيسية wiederhole قبل الفاعل ich."],
      ["Ich weiß nicht, ob er kommt.", "لا أعرف ما إذا كان سيأتي.", "ei في weiß هو /aɪ̯/؛ وw في الألمانية القياسية يُنطق /v/."],
      ["Die Prüfung ist leicht.", "الامتحان سهل.", "ei في leicht هو /aɪ̯/، وch هنا /ç/ لا /x/."],
    ]);
  });

  it("checks writing prompts as bounded tasks rather than evidence of free writing", () => {
    const w1 = task("w1");
    expect(w1.type).toBe("transformation");
    if (w1.type !== "transformation") throw new Error("w1 must be transformation");
    expect(w1).toMatchObject({
      instructionAr: "اكتب جملة موجّهة باستخدام weil:",
      prompt: "اكتب: «أتعلم الألمانية لأنها مهمة» بالألمانية، مستخدماً es في الجملة التابعة.",
      acceptedAnswers: ["Ich lerne Deutsch, weil es wichtig ist", "Ich lerne Deutsch, weil es wichtig ist."],
      sampleAnswer: "Ich lerne Deutsch, weil es wichtig ist.",
      explanation: "Deutsch هنا اسم اللغة؛ يصوغ النموذج المطلوب: Ich lerne Deutsch + weil + es wichtig ist. يأتي الفعل المصرف ist في نهاية الجملة التابعة.",
    });

    const w2 = task("w2");
    expect(w2.type).toBe("fill-blank");
    expect(w2).toMatchObject({
      instructionAr: "أكمل على الترتيب: سبب (weil)، شرط/وقت (wenn)، سؤال غير مباشر بنعم أو لا (ob):",
      template:
        "Ich lerne noch, ___ ich die Prüfung bestehen will. ___ ich morgens Zeit habe, wiederhole ich Vokabeln. Ich weiß nicht, ___ die Prüfung schwer ist.",
      blanks: [
        { correct: "weil", options: ["weil", "wenn", "ob"] },
        { correct: "Wenn", options: ["Wenn", "Weil", "Ob"] },
        { correct: "ob", options: ["ob", "weil", "wenn"] },
      ],
      explanation: "الجملة الأولى تعطي سبب الاستمرار في التعلم: weil. والثانية تقدّم وقتاً/شرطاً: wenn، مع فعل مصروف في آخر الجزء التابع. والثالثة سؤال غير مباشر بنعم/لا: ob.",
    });

    const w3 = task("w3");
    expect(w3.type).toBe("dictation");
    if (w3.type !== "dictation") throw new Error("w3 must be dictation");
    expect(w3).toMatchObject({
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich weiß nicht, ob die Prüfung schwer ist.",
      explanation: "لا أعرف هل الامتحان صعب — ob + الفعل في النهاية.",
    });
    const writingGoal = goal("z-writing");
    expect(writingGoal.ar).toMatch(/مهام كتابة مضبوطة لا كتابة حرة/);
    expect(writingGoal.de).not.toMatch(/frei|sprechen|Sprechen/);
    expect(writingGoal.evidence?.exerciseIds).toEqual(["w1", "w2", "w3"]);
    expect(writingGoal.evidence?.completion).toBe("all-correct");
  });

  it("keeps objective evidence tied to the task IDs that the interface actually records", () => {
    const reading = lessonA210.reading;
    if (!reading) throw new Error("A2-10 reading is required");
    const validTaskIds = new Set<string>([
      ...lessonA210.practiceBank.map((item) => `practice:${lessonA210.id}:${item.id}`),
      ...lessonA210.practiceBank
        .slice(0, Math.min(4, lessonA210.practiceBank.length))
        .map((item) => `flow-practice:${lessonA210.id}:${item.id}`),
      ...lessonA210.miniTest.map((item) => `mini-test:${lessonA210.id}:${item.id}`),
      ...lessonA210.miniTest
        .filter((item) => item.type === "multiple-choice")
        .slice(0, 3)
        .map((item) => `flow-mini-test:${lessonA210.id}:${item.id}`),
      ...lessonA210.writing.map((item) => `writing:${lessonA210.id}:${item.id}`),
      ...reading.questions.map((item) => `reading:${reading.id}:${item.id}`),
      ...lessonA210.listening.questions.map((item) => `listening:${item.itemId}:${item.id}`),
    ]);
    expect(validTaskIds.has("flow-practice:a2-10:e4")).toBe(true);
    expect(validTaskIds.has("flow-practice:a2-10:e5")).toBe(false);
    expect(validTaskIds.has("flow-mini-test:a2-10:m1")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-10:m2")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-10:m3")).toBe(false);
    expect(validTaskIds.has("practice:a2-10:e10")).toBe(true);

    expect(lessonA210.lernziele.map((item) => item.id)).toEqual(Object.keys(expectedEvidence));
    for (const [goalId, expected] of Object.entries(expectedEvidence)) {
      const current = goal(goalId);
      expect(current.evidence?.exerciseIds, `${goalId} exercise IDs`).toEqual(expected.exerciseIds);
      expect(current.evidence?.taskIds, `${goalId} UI task IDs`).toEqual(expected.taskIds);
      expect(current.evidence?.completion, `${goalId} completion rule`).toBe("all-correct");
      expect(current.evidence?.labelAr.trim().length, `${goalId} evidence description`).toBeGreaterThan(15);
      for (const exerciseId of expected.exerciseIds) {
        expect(allTasks().some((item) => item.id === exerciseId), `${goalId} → ${exerciseId}`).toBe(true);
        expect(expected.taskIds.some((id) => id.endsWith(`:${exerciseId}`)), `${goalId} → ${exerciseId} task`).toBe(true);
      }
      for (const id of expected.taskIds) {
        expect(validTaskIds.has(id), `${goalId} → valid UI task ${id}`).toBe(true);
      }
    }

    expect(goal("z1").ar).not.toMatch(/كل دلالات|كل الحالات|أتقن|إتقان/);
    expect(goal("z2").ar).toContain("لا في كل الحالات");
    expect(goal("z-reading").evidence?.taskIds).toEqual([
      "reading:read-a2-10:rq1",
      "reading:read-a2-10:rq2",
      "reading:read-a2-10:rq3",
      "reading:read-a2-10:rq4",
    ]);
    expect(goal("z-listening").evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
    ]);
  });

  it("does not award evidence for opening a task, wrong results, wrong contexts, or revealed listening transcripts", () => {
    for (const current of lessonA210.lernziele) {
      expect(getGoalEvidenceStatus(current, lessonA210.id, []), `${current.id} before an answer`).toBe("pending");
    }

    const allCorrectFor = (goalId: string) =>
      goal(goalId).evidence?.exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId, true)) ?? [];
    for (const current of lessonA210.lernziele) {
      const events = allCorrectFor(current.id);
      expect(getGoalEvidenceStatus(current, lessonA210.id, events), `${current.id} completed`).toBe("evidenced");
      const firstExerciseId = current.evidence?.exerciseIds[0];
      if (!firstExerciseId) throw new Error(`${current.id} has no mapped exercise`);
      const withOneWrong = events.map((event) =>
        event.type === "exercise-result" && event.exerciseId === firstExerciseId
          ? { ...event, correct: false, points: 0 }
          : event,
      );
      expect(getGoalEvidenceStatus(current, lessonA210.id, withOneWrong), `${current.id} with an error`).toBe(
        "pending",
      );
      expect(getGoalEvidenceStatus(current, "a2-09", events), `${current.id} in another lesson`).toBe("pending");
    }

    const listeningGoal = goal("z-listening");
    const listeningEvents = allCorrectFor("z-listening");
    const afterTranscript = listeningEvents.map((event) =>
      event.type === "exercise-result" && event.exerciseId === "q1"
        ? { ...event, taskId: "listening-transcript:a2-10:l1:q1" }
        : event,
    );
    expect(getGoalEvidenceStatus(listeningGoal, lessonA210.id, afterTranscript)).toBe("pending");

    const wrongTaskContext = allCorrectFor("z1").map((event) =>
      event.type === "exercise-result" && event.exerciseId === "e1"
        ? { ...event, taskId: "flow-practice:a2-10:e5" }
        : event,
    );
    expect(getGoalEvidenceStatus(goal("z1"), lessonA210.id, wrongTaskContext)).toBe("pending");
  });

  it("keeps cultural and mediation notes qualified and the dialogue distractor context-sensitive", () => {
    expect(lessonA210.fehlerUndTipps.mistakes.map((mistake) => mistake.classification)).toEqual([
      "error",
      "error",
      "contextual-alternative",
    ]);
    const cultural = lessonA210.fehlerUndTipps.culturalNote.content;
    expect(cultural).toContain("تختلف الرسوم والتكاليف");
    expect(cultural).toContain("مساهمة الفصل");
    expect(cultural).toContain("لا يصح وصف Hauptschule وRealschule");
    expect(cultural).not.toMatch(/كل الجامعات.*مجانية تقريباً/);
    expect(cultural).toContain("بدلاً من تعميم أن جميع الجامعات");

    const mediation = lessonA210.mediation?.[0];
    expect(mediation).toMatchObject({
      id: "med-a2-10-1",
      type: "summarize-de-to-ar",
      titleAr: "انقل معلومات برنامج دورة افتراضية بالعربية",
      sourceDe:
        "Der Deutschkurs B1 beginnt im September. Er dauert acht Wochen und findet dreimal pro Woche statt. Am Ende gibt es eine Prüfung.",
      taskAr: "لخّص معلومات البرنامج الواردة فقط: موعد البداية، المدة، عدد اللقاءات الأسبوعية، والاختبار النهائي. هذا مثال تدريبي افتراضي، لا إعلان عن دورة حقيقية.",
      modelAnswerAr: "«تبدأ دورة الألمانية B1 في سبتمبر. تستمر ثمانية أسابيع، وتُعقد ثلاث مرات في الأسبوع. وفي نهايتها امتحان.»",
      keyPointsAr: [
        "نقلت موعد البداية (سبتمبر)",
        "ذكرت المدة (ثمانية أسابيع)",
        "ذكرت ثلاثة لقاءات في الأسبوع",
        "نقلت وجود امتحان في النهاية",
      ],
    });

    const interaction = lessonA210.interaction?.[0];
    expect(interaction).toMatchObject({
      id: "int-a2-10-1",
      scenarioAr: "تسجل في دورة لغة وتسأل عن التفاصيل؛ الموعد المذكور في الحوار جزء من سيناريو تدريبي.",
      scenarioDe: "Anmeldung für einen Sprachkurs.",
      strategyAr: "الاستراتيجية: الاستفسار عن الدورة ثم الإجابة عن المعرفة السابقة والموعد المقترح. الخيار الذي يقول «Ich starte, wenn ich will» صحيح نحوياً، لكنه لا يجيب عن الموعد الثابت في هذا الحوار.",
    });
    expect(interaction?.rounds.map((round) => ({
      speakerDe: round.speakerDe,
      speakerAr: round.speakerAr,
      options: round.options.map(({ de, ar, best, replyDe, replyAr }) => ({ de, ar, best, replyDe, replyAr })),
    }))).toEqual([
      {
        speakerDe: "Hallo, ich möchte mich für den Deutschkurs anmelden.",
        speakerAr: "مرحباً، أريد التسجيل في دورة الألمانية.",
        options: [
          {
            de: "Gerne. Der nächste B1-Kurs beginnt in zwei Wochen. Haben Sie schon Vorkenntnisse?",
            ar: "بكل سرور. تبدأ دورة B1 القادمة بعد أسبوعين. هل لديك معرفة سابقة؟",
            best: true,
            replyDe: "Ja, ich habe schon einen A2-Kurs besucht.",
            replyAr: "نعم، سبق أن التحقت بدورة A2.",
          },
          {
            de: "Ich möchte zuerst das Abendessen bestellen.",
            ar: "أريد أولاً طلب العشاء.",
            best: false,
            replyDe: "Hier geht es um die Anmeldung zum Sprachkurs. Möchten Sie fortfahren?",
            replyAr: "نحن نتحدث هنا عن التسجيل في دورة اللغة. هل تريد المتابعة؟",
          },
        ],
      },
      {
        speakerDe: "Sie haben schon einen A2-Kurs besucht. Das ist eine gute Vorbereitung für den B1-Kurs. Können Sie in zwei Wochen anfangen?",
        speakerAr: "سبق أن التحقت بدورة A2، وهذا إعداد جيد لدورة B1. هل تستطيع البدء بعد أسبوعين؟",
        options: [
          {
            de: "Ja, ich kann in zwei Wochen anfangen.",
            ar: "نعم، أستطيع البدء بعد أسبوعين.",
            best: true,
            replyDe: "Gut, dann notiere ich den Termin.",
            replyAr: "حسناً، سأدوّن الموعد إذن.",
          },
          {
            de: "Ich starte, wenn ich will.",
            ar: "سأبدأ عندما أريد.",
            best: false,
            replyDe: "Der Kurs hat einen festen Starttermin. Ich kann Ihnen die verfügbaren Termine nennen.",
            replyAr: "للدورة موعد بدء محدد. يمكنني إخبارك بالمواعيد المتاحة.",
          },
        ],
      },
    ]);
  });
});
