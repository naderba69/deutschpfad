import { describe, expect, it } from "vitest";

import { lessonA208 } from "@/data/lessons/a2/a2-08";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "fünf",
  r2: "nach",
  e1: "schneller",
  e2: "am schnellsten",
  e8: "ذهاب وعودة",
  e11: "Um 11:00 Uhr.",
  e13: "wie",
  e14: "Die Busfahrt ist fünf Euro billiger als die Zugfahrt.",
  m1: "schwerer",
  m2: "am besten",
  rq1: "Der Zug ist schneller, und sie möchten früh am Strand sein.",
  rq2: "Fünf Euro.",
  rq3: "In Bremen.",
  rq4: "Mit dem letzten Bus.",
  rq5: "Sie wollen Fahrpläne vergleichen und dann gemeinsam entscheiden.",
  q1: "Eine Fahrkarte hin und zurück nach München.",
  q2: "Um 10:25 Uhr.",
  q3: "Das Motorrad.",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["fünf", "vier", "sechs", "drei"],
  r2: ["nach", "zu", "in", "aus"],
  e1: ["schneller", "schnell", "am schnellsten", "schnellen"],
  e2: ["am schnellsten", "schneller", "schnell", "schnellste"],
  e8: ["ذهاب وعودة", "ذهاب فقط", "المسار الثالث", "موعد الوصول"],
  e11: ["Um 11:00 Uhr.", "Um 08:15 Uhr.", "Um 10:30 Uhr.", "Um 11:20 Uhr."],
  e13: ["wie", "als", "denn", "dann"],
  e14: [
    "Die Busfahrt ist fünf Euro billiger als die Zugfahrt.",
    "Die Busfahrt ist fünf Euro teurer als die Zugfahrt.",
    "Beide Fahrten kosten gleich viel.",
    "Die Zugfahrt ist zwölf Euro billiger als die Busfahrt.",
  ],
  m1: ["schwerer", "schwer", "am schwersten", "schwerste"],
  m2: ["am besten", "besser", "gut", "beste"],
  rq1: [
    "Der Zug ist schneller, und sie möchten früh am Strand sein.",
    "Die Zugfahrkarte ist kostenlos.",
    "Der Bus fährt am Samstag nicht.",
    "Sie möchten in Bremen bleiben.",
  ],
  rq2: ["Fünf Euro.", "Zwei Euro.", "Zehn Euro.", "Zwanzig Euro."],
  rq3: ["In Bremen.", "In Berlin.", "In Hamburg.", "In München."],
  rq4: ["Mit dem letzten Bus.", "Mit dem ersten Zug.", "Mit einem Taxi.", "Sie bleiben am Meer."],
  rq5: [
    "Sie wollen Fahrpläne vergleichen und dann gemeinsam entscheiden.",
    "Sie wollen sofort nur den Zug buchen.",
    "Sie wollen buchen, ohne Fahrpläne anzusehen.",
    "Sie wollen mit dem Flugzeug reisen.",
  ],
  q1: [
    "Eine Fahrkarte hin und zurück nach München.",
    "Eine einfache Fahrkarte nach München.",
    "Eine einfache Fahrkarte nach Berlin.",
    "Eine Fahrkarte hin und zurück nach Hamburg.",
  ],
  q2: ["Um 10:25 Uhr.", "Um 10:05 Uhr.", "Um 11:25 Uhr.", "Um 9:25 Uhr."],
  q3: ["Das Motorrad.", "Die U-Bahn.", "Das Fahrrad.", "Der Bus."],
};

function allTasks(): Exercise[] {
  const reading = lessonA208.reading;
  if (!reading) throw new Error("A2-08 must keep its reviewed reading text");
  return [
    ...(lessonA208.review ?? []),
    ...lessonA208.practiceBank,
    ...lessonA208.miniTest,
    ...lessonA208.writing,
    ...reading.questions,
    ...lessonA208.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-08 task ${id} is missing`);
  return value;
}

function ids(values: { id: string }[]): string[] {
  return values.map((value) => value.id).sort();
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct: boolean,
  taskIdOverride?: string,
  lessonId = lessonA208.id,
): AnalyticsEvent {
  const goal = lessonA208.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-08 ${goalId} has no taskId for ${exerciseId}`);
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

const expectedEvidence = {
  z1: {
    exerciseIds: ["e11", "e14", "q1", "q2"],
    taskIds: [
      "practice:a2-08:e11",
      "practice:a2-08:e14",
      "listening:l1:q1",
      "listening:l1:q2",
    ],
  },
  "z-reading": {
    exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
    taskIds: [
      "reading:read-a2-08:rq1",
      "reading:read-a2-08:rq2",
      "reading:read-a2-08:rq3",
      "reading:read-a2-08:rq4",
      "reading:read-a2-08:rq5",
    ],
  },
  z2: {
    exerciseIds: ["e1", "e4", "e5", "e12", "e13", "m1", "m3", "w1", "w2"],
    taskIds: [
      "practice:a2-08:e1",
      "flow-practice:a2-08:e1",
      "practice:a2-08:e4",
      "flow-practice:a2-08:e4",
      "practice:a2-08:e5",
      "practice:a2-08:e12",
      "practice:a2-08:e13",
      "mini-test:a2-08:m1",
      "flow-mini-test:a2-08:m1",
      "mini-test:a2-08:m3",
      "writing:a2-08:w1",
      "writing:a2-08:w2",
    ],
  },
  z3: {
    exerciseIds: ["e2", "e7", "m2", "q3"],
    taskIds: [
      "practice:a2-08:e2",
      "flow-practice:a2-08:e2",
      "practice:a2-08:e7",
      "mini-test:a2-08:m2",
      "flow-mini-test:a2-08:m2",
      "listening:l2:q3",
    ],
  },
  z4: {
    exerciseIds: ["e6", "m2", "m5"],
    taskIds: [
      "practice:a2-08:e6",
      "mini-test:a2-08:m2",
      "flow-mini-test:a2-08:m2",
      "mini-test:a2-08:m5",
    ],
  },
  "z-travel": {
    exerciseIds: ["e3", "e8", "e10", "w4"],
    taskIds: [
      "practice:a2-08:e3",
      "practice:a2-08:e8",
      "practice:a2-08:e10",
      "writing:a2-08:w4",
    ],
  },
  "z-writing": {
    exerciseIds: ["w1", "w2", "w3", "w4"],
    taskIds: [
      "writing:a2-08:w1",
      "writing:a2-08:w2",
      "writing:a2-08:w3",
      "writing:a2-08:w4",
    ],
  },
} as const;

describe("A2-08 reviewed lesson", () => {
  it("keeps the lesson position, inventory, reviewed reading, and stated scope", () => {
    expect(lessonA208.id).toBe("a2-08");
    expect(lessonA208.unitId).toBe("a2-08");
    expect(lessonA208.level).toBe("A2");
    expect(lessonA208.order).toBe(1);
    expect(LESSON_META.find((item) => item.id === "a2-08")).toMatchObject({
      id: "a2-08",
      unitId: "a2-08",
      order: 1,
      titleDe: "Mobil sein",
    });
    expect(lessonA208.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z-reading",
      "z2",
      "z3",
      "z4",
      "z-travel",
      "z-writing",
    ]);
    expect(ids(lessonA208.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA208.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA208.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA208.writing)).toEqual(["w1", "w2", "w3", "w4"]);
    expect(ids(lessonA208.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5"]);
    expect(ids(lessonA208.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect(allTasks()).toHaveLength(34);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(34);
    expect("duration" in lessonA208).toBe(false);
    expect(lessonA208.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|إتقان|\b\d+\s*دقيقة/i);
    expect(lessonA208.einfuehrung.contextAr).toContain("خيالية");

    const reading = lessonA208.reading;
    if (!reading) throw new Error("A2-08 reading is required");
    expect(reading.id).toBe("read-a2-08");
    expect(reading.textType).toBe("erzaehlung");
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(4);
    expect(reading.questions.every((question) => question.paragraph !== undefined)).toBe(true);
    expect(reading.paragraphs).toEqual([
      "Jana und Karim fahren am Samstag ans Meer. Sie möchten früh am Strand sein. Im Internet vergleichen sie zwei Fahrpläne. Der Zug fährt um acht Uhr ab und ist schneller als der Bus. Die Fahrkarte für den Zug kostet in diesem Beispiel fünf Euro mehr als die Fahrkarte für den Bus. Alle Fahrzeiten und Preise in der Geschichte sind erfunden.",
      "Sie kaufen ihre Fahrkarten am Automaten. Ihre Reise beginnt am Hauptbahnhof und dauert zweieinhalb Stunden. In Bremen müssen sie einmal umsteigen. Jana prüft die Gleisnummer, und Karim kauft einen Snack. Dann fährt der Zug weiter.",
      "Der Zug kommt pünktlich an. Das Wetter ist besser als in der Stadt, und das Wasser ist warm. Am Abend möchten sie zurückfahren. Aber die Zugfahrkarten für die Rückfahrt sind ausverkauft. Deshalb nehmen sie den letzten Bus zurück.",
      "Karim fotografiert die Wellen am Strand. Jana schwimmt im Wasser. Sie sprechen über die Reise. Jana findet die Zugfahrt bequemer, weil sie unterwegs lesen konnte. Karim sagt: „Der Bus ist günstiger, aber langsamer.“ Bei ihrer nächsten Reise wollen sie die Fahrpläne wieder vergleichen. Dann entscheiden sie gemeinsam.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "يذهب يانا وكريم يوم السبت إلى البحر. يريدان الوصول مبكراً إلى الشاطئ. يقارنان جدولَي رحلات على الإنترنت. ينطلق القطار في الثامنة وهو أسرع من الحافلة. في هذا المثال، تزيد كلفة تذكرة القطار خمسة يورو على تذكرة الحافلة. جميع مواعيد الرحلات والأسعار في القصة خيالية.",
      "يشتريان تذكرتَي السفر من آلة البيع. تبدأ رحلتهما في المحطة الرئيسية وتستغرق ساعتين ونصفاً. عليهما تبديل القطار مرة واحدة في بريمن. تتحقق يانا من رقم المسار/الرصيف، ويشتري كريم وجبة خفيفة. ثم يواصل القطار طريقه.",
      "يصل القطار في موعده. الطقس أفضل مما هو في المدينة، والماء دافئ. يريدان العودة مساءً، لكن تذاكر القطار لرحلة العودة نفدت. لذلك يستقلان آخر حافلة للعودة.",
      "يصوّر كريم الأمواج على الشاطئ، وتسبح يانا في الماء. يتحدثان عن الرحلة. ترى يانا أن رحلة القطار كانت أكثر راحة لأنها استطاعت القراءة في الطريق. يقول كريم إن الحافلة أقل كلفة، لكنها أبطأ. في رحلتهما القادمة يريدان مقارنة جدولي الرحلات من جديد، ثم يقرران معاً.",
    ]);
    expect(reading.glossary.map((item) => item.de)).toEqual([
      "der Fahrplan",
      "die Fahrkarte",
      "umsteigen",
      "der Hauptbahnhof",
      "die Gleisnummer",
      "pünktlich",
      "ausverkauft",
      "zurückfahren",
    ]);
    expect(reading.redemittel).toHaveLength(4);
    expect(reading.discussionAr).toContain("خيالي");
  });

  it("maps every goal to a correct, assessable task in the actual UI context", () => {
    const validTaskIds = new Set<string>();
    for (const exercise of lessonA208.practiceBank) {
      validTaskIds.add(`practice:${lessonA208.id}:${exercise.id}`);
    }
    // The practice flow reveals only the first min(4, practiceBank.length) tasks.
    for (const exercise of lessonA208.practiceBank.slice(0, Math.min(4, lessonA208.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA208.id}:${exercise.id}`);
    }
    for (const exercise of lessonA208.miniTest) {
      validTaskIds.add(`mini-test:${lessonA208.id}:${exercise.id}`);
    }
    // lesson-flow mini-test filters for multiple-choice and reveals at most the first three.
    for (const exercise of lessonA208.miniTest
      .filter((item) => item.type === "multiple-choice")
      .slice(0, 3)) {
      validTaskIds.add(`flow-mini-test:${lessonA208.id}:${exercise.id}`);
    }
    for (const exercise of lessonA208.writing) {
      validTaskIds.add(`writing:${lessonA208.id}:${exercise.id}`);
    }
    for (const question of lessonA208.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA208.reading?.id}:${question.id}`);
    }
    for (const question of lessonA208.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA208.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA208.lernziele) {
      const evidence = goal.evidence;
      const expected = expectedEvidence[goal.id as keyof typeof expectedEvidence];
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      if (!evidence) throw new Error(`${goal.id} must have performance evidence`);
      const exerciseIds = evidence.exerciseIds ?? [];
      const taskIds = evidence.taskIds ?? [];
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.labelAr.trim().length).toBeGreaterThan(30);
      expect(exerciseIds).toEqual(expected.exerciseIds);
      expect(taskIds).toEqual(expected.taskIds);
      expect(new Set(exerciseIds).size).toBe(exerciseIds.length);
      expect(new Set(taskIds).size).toBe(taskIds.length);
      for (const taskId of taskIds) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const parts = taskId.split(":");
        const exerciseId = parts[parts.length - 1];
        expect(exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(
            lessonA208.practiceBank
              .slice(0, Math.min(4, lessonA208.practiceBank.length))
              .some((exercise) => exercise.id === exerciseId),
          ).toBe(true);
        }
      }
      for (const exerciseId of exerciseIds) {
        expect(taskIds.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      expect(taskIds.join(" ")).not.toMatch(/flow-listening|listening-transcript/);
    }

    for (const question of lessonA208.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA208.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA208.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA208.id}:${question.itemId}:${question.id}`);
    }
    expect(validTaskIds.has("flow-practice:a2-08:e4")).toBe(true);
    expect(validTaskIds.has("flow-practice:a2-08:e5")).toBe(false);
    expect(validTaskIds.has("flow-mini-test:a2-08:m1")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-08:m2")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-08:m3")).toBe(false);

    for (const goal of lessonA208.lernziele) {
      const exerciseIds = goal.evidence?.exerciseIds ?? [];
      expect(getGoalEvidenceStatus(goal, lessonA208.id, [])).toBe("pending");
      expect(
        getGoalEvidenceStatus(
          goal,
          lessonA208.id,
          exerciseIds.map((exerciseId) => goalEvent(goal.id, exerciseId, true)),
        ),
      ).toBe("evidenced");
    }
    const transitGoal = lessonA208.lernziele.find((goal) => goal.id === "z1");
    if (!transitGoal) throw new Error("A2-08 z1 is required");
    const transitEvidenceWithoutQ1 = ["e11", "e14", "q2"].map((exerciseId) =>
      goalEvent("z1", exerciseId, true),
    );
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", true, "listening-transcript:a2-08:l1:q1"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", true),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", true, undefined, "a2-07"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", false),
      ]),
    ).toBe("pending");
  });

  it("checks every multiple-choice answer key and each offered distractor", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options/distractors`).toEqual(expectedMultipleChoiceOptions[id]);
      expect(exercise.options[exercise.correctIndex], `${id} answer key`).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, `${id} unique choices`).toBe(
        exercise.options.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} correct key`).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} choice ${index + 1}: ${option}`,
        ).toBe(index === exercise.correctIndex);
      }
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
  });

  it("checks every fill-blank answer and rejects each alternative in its own blank", () => {
    const expectedKeys: Record<string, string[]> = {
      r3: ["war"],
      e6: ["besser", "besten", "mehr", "meisten", "lieber", "liebsten"],
      e12: ["größer"],
      w2: ["schneller", "billiger"],
      m5: ["lieber", "liebsten"],
    };
    const expectedOptions: Record<string, string[][]> = {
      r3: [["war", "bin", "hatte"]],
      e6: [
        ["besser", "guter", "beste"],
        ["besten", "gutesten", "bessersten"],
        ["mehr", "vieler", "meisten"],
        ["meisten", "mehrsten", "vielsten"],
        ["lieber", "gern", "gerne"],
        ["liebsten", "liebersten", "meisten"],
      ],
      e12: [["größer", "großer", "größten"]],
      w2: [
        ["schneller", "schnell", "am schnellsten"],
        ["billiger", "billig", "am billigsten"],
      ],
      m5: [
        ["lieber", "besser", "mehr"],
        ["liebsten", "besten", "meisten"],
      ],
    };
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedKeys).sort());

    for (const [id, expected] of Object.entries(expectedKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} choices`).toEqual(
        expectedOptions[id],
      );
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank count`).toBe(
        exercise.blanks.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} answer key`).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        const options = blank.options ?? [];
        expect(new Set(options.map(normalizeText)).size, `${id} blank ${blankIndex + 1} unique`).toBe(
          options.length,
        );
        for (const distractor of options.filter((option) => option !== blank.correct)) {
          const attempt = [...expected];
          attempt[blankIndex] = distractor;
          expect(
            evaluateExercise(exercise, attempt).isCorrect,
            `${id} blank ${blankIndex + 1}: ${distractor}`,
          ).toBe(false);
        }
      });
    }
  });

  it("checks each matching pair, word-order token, correction distractor, transformation, and dictation", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id)).toEqual(["e3"]);
    const match = task("e3");
    if (match.type !== "matching") throw new Error("e3 must be matching");
    expect(match.pairs).toEqual([
      { left: "der Zug", right: "القطار" },
      { left: "die U-Bahn", right: "المترو" },
      { left: "das Fahrrad", right: "الدراجة الهوائية" },
      { left: "die Straßenbahn", right: "الترام" },
    ]);
    expect(evaluateExercise(match, match.pairs).isCorrect).toBe(true);
    for (let index = 0; index < match.pairs.length; index += 1) {
      const changed = match.pairs.map((pair, pairIndex) => ({
        left: pair.left,
        right: pairIndex === index ? `wrong-${index}` : pair.right,
      }));
      expect(evaluateExercise(match, changed).isCorrect, `e3 pair ${index + 1}`).toBe(false);
    }

    const expectedOrderings: Record<string, string> = {
      e4: "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.",
      m3: "Die Taxifahrt ist im Beispiel teurer als die Autofahrt.",
    };
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderings).sort());
    for (const [id, expected] of Object.entries(expectedOrderings)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      const tokenUnits = exercise.tokens
        .flatMap((token) => normalizeText(token).split(" "))
        .filter(Boolean)
        .sort();
      const sentenceUnits = normalizeText(expected).split(" ").filter(Boolean).sort();
      expect(tokenUnits, `${id} token inventory`).toEqual(sentenceUnits);
      expect(evaluateExercise(exercise, expected.split(/\s+/)).isCorrect, `${id} answer key`).toBe(true);
      const wrongOrder = expected.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} changed order`).toBe(false);
    }

    const expectedCorrections: Record<
      string,
      { wrong: string; wrongWord: string; correct: string; answer: string; options: string[] }
    > = {
      e5: {
        wrong: "Auf dieser Strecke ist der Zug schneller wie der Bus.",
        wrongWord: "wie",
        correct: "als",
        answer: "Auf dieser Strecke ist der Zug schneller als der Bus.",
        options: ["als", "wie", "dann", "denn"],
      },
      e9: {
        wrong: "Der Zug abfährt um zehn Uhr.",
        wrongWord: "abfährt um zehn Uhr",
        correct: "fährt um zehn Uhr ab",
        answer: "Der Zug fährt um zehn Uhr ab.",
        options: ["fährt um zehn Uhr ab", "abfährt um zehn Uhr", "fährt ab um zehn Uhr", "fährt um ab zehn Uhr"],
      },
      m4: {
        wrong: "Ich fahre lieber mit dem Zug als mit der Bus.",
        wrongWord: "der Bus",
        correct: "dem Bus",
        answer: "Ich fahre lieber mit dem Zug als mit dem Bus.",
        options: ["dem Bus", "den Bus", "das Bus", "der Bus"],
      },
    };
    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} source`).toBe(expected.wrong);
      expect(exercise.wrongWord, `${id} target`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} key`).toBe(expected.correct);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord)).toBe(
        expected.answer,
      );
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(
          option === expected.correct,
        );
      }
    }

    const expectedTransformations: Record<string, string[]> = {
      e7: [
        "Von diesen drei Verkehrsmitteln ist das Taxi am teuersten.",
        "Von diesen drei Verkehrsmitteln ist das Taxi am teuersten",
      ],
      w1: [
        "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.",
        "Der Zug ist auf dieser Beispielstrecke schneller als der Bus.",
      ],
      w4: [
        "Eine einfache Fahrkarte nach München, bitte.",
        "Eine einfache Fahrkarte nach München, bitte",
      ],
    };
    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedTransformations).sort(),
    );
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      expect(answers).toContain(exercise.sampleAnswer);
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Wo muss ich umsteigen?",
      w3: "Muss ich in Bremen umsteigen?",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} exact transcription`).toBe(true);
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }
  });

  it("preserves the individual dialogue, pronunciation, table, interaction, and card details", () => {
    expect(lessonA208.listening.items.map((item) => item.id)).toEqual(["l1", "l2"]);
    expect(lessonA208.listening.items[0].lines).toEqual([
      { speaker: "Sami", de: "Guten Tag! Ich hätte gern eine Fahrkarte nach München.", ar: "مرحباً! أودّ تذكرة إلى ميونخ." },
      { speaker: "Mitarbeiterin", de: "Einfach oder hin und zurück?", ar: "ذهاب فقط أم ذهاب وعودة؟" },
      { speaker: "Sami", de: "Hin und zurück, bitte. Wie viel kostet die Fahrkarte?", ar: "ذهاب وعودة من فضلك. بكم التذكرة؟" },
      { speaker: "Mitarbeiterin", de: "Achtundvierzig Euro.", ar: "ثمانية وأربعون يورو." },
      { speaker: "Sami", de: "Wann fährt der nächste Zug ab?", ar: "متى ينطلق القطار التالي؟" },
      { speaker: "Mitarbeiterin", de: "Um zehn Uhr fünfundzwanzig, von Gleis drei.", ar: "في العاشرة وخمس وعشرين دقيقة، من المسار/الرصيف الثالث." },
    ]);
    expect(lessonA208.listening.items[1].lines).toEqual([
      { speaker: "Anna", de: "Wie kommst du zur Arbeit?", ar: "كيف تذهب إلى العمل؟" },
      { speaker: "Karim", de: "Mit der U-Bahn. Auf meiner Strecke ist sie schneller als der Bus.", ar: "بالمترو. في طريقي، هو أسرع من الحافلة." },
      { speaker: "Anna", de: "Und ich fahre mit dem Fahrrad. Ich finde Radfahren gesünder.", ar: "وأنا أذهب بالدراجة. أرى أن ركوبها أفضل للصحة." },
      { speaker: "Karim", de: "In diesem Vergleich ist das Motorrad am schnellsten.", ar: "في هذه المقارنة، الدراجة النارية هي الأسرع." },
    ]);
    expect(lessonA208.listening.questions.map((question) => question.itemId)).toEqual([
      "l1",
      "l1",
      "l2",
    ]);

    expect(lessonA208.pronunciation.items.map((item) => item.de)).toEqual([
      "der Zug",
      "die Fahrkarte",
      "umsteigen",
      "die Straßenbahn",
      "das Fahrrad",
      "der Schalter",
    ]);
    expect(lessonA208.pronunciation.items[0].note).toContain("[ˈʦuːk]");
    expect(lessonA208.pronunciation.items[1].note).toContain("[ˈfaːɐ̯kaʁtə]");
    expect(lessonA208.pronunciation.items[2].note).toContain("Duden");
    expect(lessonA208.pronunciation.items[3].note).toContain("[ˈʃtʀaːsn̩ˌbaːn]");
    expect(lessonA208.pronunciation.items[5].note).toContain("[ˈʃaltɐ]");
    const shadowing = lessonA208.pronunciation.shadowing ?? [];
    expect(shadowing).toHaveLength(5);
    expect(shadowing.every((item) => item.de && item.ar && item.tip)).toBe(true);

    const theoryById = Object.fromEntries(lessonA208.theory.map((block) => [block.id, block]));
    expect(theoryById.t1.examples.length).toBeGreaterThanOrEqual(8);
    expect(theoryById.t1.examples).toContainEqual({
      de: "Zug C ist im Übungsfahrplan am schnellsten (2 Std. 20 Min.).",
      ar: "في جدول التدريب، القطار C هو الأسرع (الرحلة ساعتان و20 دقيقة).",
    });
    expect(theoryById.t2.examples.length).toBeGreaterThanOrEqual(8);
    expect(theoryById.t2.table?.rows).toEqual([
      { label: "Zug A", cells: ["08:00 Uhr", "10:30 Uhr; Umstieg in Bremen (تبديل في بريمن)"] },
      { label: "Bus B", cells: ["08:15 Uhr", "11:00 Uhr; direkt (مباشرةً)"] },
      { label: "Zug C", cells: ["09:00 Uhr", "11:20 Uhr; Umstieg in Bremen (تبديل في بريمن)"] },
    ]);
    expect(theoryById.t2.table?.title).toContain("خيالي");
    for (const block of lessonA208.theory) {
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(5);
      for (const mistake of block.commonMistakes) {
        expect(mistake.classification).toMatch(
          /^(error|contextual-alternative|pedagogical-simplification|unverified-claim)$/,
        );
        expect(mistake.whyAr.length).toBeGreaterThan(80);
      }
    }
    expect(theoryById.t1.commonMistakes[0].classification).toBe("contextual-alternative");
    expect(theoryById.t2.commonMistakes[0].classification).toBe("contextual-alternative");

    const mediation = lessonA208.mediation ?? [];
    expect(mediation).toHaveLength(1);
    expect(mediation[0].sourceDe).toContain("Fiktiver Übungsfahrplan");
    expect(mediation[0].keyPointsAr).toHaveLength(4);
    const interaction = lessonA208.interaction ?? [];
    expect(interaction).toHaveLength(1);
    expect(interaction[0].rounds).toHaveLength(2);
    expect(interaction[0].rounds[1].options[1].replyDe).toBe(
      "Im fiktiven Beispiel fährt der Übungszug von Gleis 3 ab. Folgen Sie den Schildern zu Gleis 3.",
    );
    for (const round of interaction[0].rounds) {
      expect(round.speakerDe).toBeTruthy();
      expect(round.speakerAr).toBeTruthy();
      expect(round.options.length).toBeGreaterThanOrEqual(2);
      expect(round.options.every((option) => option.best && option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(lessonA208.fehlerUndTipps.culturalNote.content).toContain("خيالية");
    expect(lessonA208.fehlerUndTipps.culturalNote.content).not.toMatch(/دقيق جداً|دائماً أرخص/i);

    expect(ids(lessonA208.flashcards)).toEqual([
      "fc1", "fc2", "fc3", "fc4", "fc5", "fc6", "fc7", "fc8", "fc9", "fc10", "fc11", "fc12",
    ].sort());
    expect(lessonA208.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(true);
    expect(lessonA208.flashcards.find((card) => card.id === "fc4")).toMatchObject({
      de: "der Hauptbahnhof",
      ar: "المحطة الرئيسية",
      example: "Die Reise beginnt am Hauptbahnhof.",
    });
  });
});
