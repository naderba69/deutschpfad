import { describe, expect, it } from "vitest";

import { lessonA209 } from "@/data/lessons/a2/a2-09";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "meinem",
  r2: "عيد ميلاد شخص",
  e1: "dem",
  e2: "der",
  e8: "الدعوة",
  e12: "mit",
  m1: "dem",
  m2: "dir",
  rq1: "In den Innenhof.",
  rq2: "Ein großes Fotoalbum.",
  rq3: "Sie helfen beim Aufräumen.",
  rq4: "Ihre Nachbarn haben ihr geholfen.",
  q1: "am Samstag",
  q2: "um sieben Uhr",
  q3: "Karims Mutter",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["meinem", "meinen", "mein", "meine"],
  r2: ["عيد ميلاد شخص", "رأس السنة", "عيد زواج", "عطلة رسمية"],
  e1: ["dem", "den", "der", "das"],
  e2: ["der", "dem", "den", "die"],
  e8: ["الدعوة", "الهدية", "المناسبة", "التهنئة"],
  e12: ["mit", "für", "ohne", "gegen"],
  m1: ["dem", "den", "der", "die"],
  m2: ["dir", "dich", "mir", "mich"],
  rq1: ["In den Innenhof.", "In ein Café.", "In ihr Büro.", "In eine Turnhalle."],
  rq2: ["Ein großes Fotoalbum.", "Ein Blumenstrauß.", "Ein Kuchen mit Schokolade.", "Ein neues Kleid."],
  rq3: [
    "Sie helfen beim Aufräumen.",
    "Sie beginnen einen Ausflug.",
    "Sie holen noch einen Kuchen.",
    "Sie gehen früher am Nachmittag nach Hause.",
  ],
  rq4: [
    "Ihre Nachbarn haben ihr geholfen.",
    "Die Feier fand nicht statt.",
    "Ihr Bruder hat die Feier abgesagt.",
    "Sie hat alles allein vorbereitet.",
  ],
  q1: ["am Samstag", "am Sonntag", "am Freitag", "am Montag"],
  q2: ["um sieben Uhr", "um acht Uhr", "um sechs Uhr", "um neun Uhr"],
  q3: ["Karims Mutter", "Anna", "Karim", "Monas Mutter"],
};

const expectedPronunciationIpa: Record<string, string> = {
  "das Geschenk": "[ɡəˈʃɛŋk]",
  feiern: "[ˈfaɪ̯ɐn]",
  "die Torte": "[ˈtɔʁtə]",
  gratulieren: "[ɡʁatuˈliːʁən]",
  "die Einladung": "[ˈaɪ̯nˌlaːdʊŋ]",
  "der Glückwunsch": "[ˈɡlʏkˌvʊnʃ]",
};

const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["dich"],
  e6: ["dem", "der", "dem"],
  e11: ["gefällt", "gefallen"],
  e13: ["meiner", "zum"],
  e14: ["in den", "im"],
  w2: ["ihr", "mir", "dir"],
  m5: ["mir", "ihr"],
};

const expectedFillBlankOptions: Record<string, string[][]> = {
  r3: [["dich", "dir", "mich"]],
  e6: [
    ["dem", "der", "den"],
    ["dem", "der", "den"],
    ["dem", "der", "den"],
  ],
  e11: [
    ["gefällt", "gefallen", "gefällst"],
    ["gefallen", "gefällt", "gefällst"],
  ],
  e13: [
    ["meiner", "meine", "meinen"],
    ["zum", "zur", "von"],
  ],
  e14: [
    ["in den", "im", "in der"],
    ["im", "in den", "in der"],
  ],
  w2: [
    ["ihr", "sie", "ihm"],
    ["mir", "mich", "dir"],
    ["dir", "dich", "mir"],
  ],
  m5: [
    ["mir", "mich", "dir"],
    ["ihr", "sie", "ihm"],
  ],
};

const expectedEvidence = {
  z1: {
    exerciseIds: ["w1", "w4"],
    taskIds: ["writing:a2-09:w1", "writing:a2-09:w4"],
  },
  "z-reading": {
    exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
    taskIds: [
      "reading:read-a2-09:rq1",
      "reading:read-a2-09:rq2",
      "reading:read-a2-09:rq3",
      "reading:read-a2-09:rq4",
    ],
  },
  z2: {
    exerciseIds: ["e1", "e2", "e6", "w2", "m1", "m5"],
    taskIds: [
      "practice:a2-09:e1",
      "flow-practice:a2-09:e1",
      "practice:a2-09:e2",
      "flow-practice:a2-09:e2",
      "practice:a2-09:e6",
      "writing:a2-09:w2",
      "mini-test:a2-09:m1",
      "flow-mini-test:a2-09:m1",
      "mini-test:a2-09:m5",
    ],
  },
  z3: {
    exerciseIds: ["e2", "e5", "e7", "e11", "e13", "m2", "m4"],
    taskIds: [
      "practice:a2-09:e2",
      "flow-practice:a2-09:e2",
      "practice:a2-09:e5",
      "practice:a2-09:e7",
      "practice:a2-09:e11",
      "practice:a2-09:e13",
      "mini-test:a2-09:m2",
      "flow-mini-test:a2-09:m2",
      "mini-test:a2-09:m4",
    ],
  },
  z4: {
    exerciseIds: ["e12", "e14"],
    taskIds: ["practice:a2-09:e12", "practice:a2-09:e14"],
  },
  "z-listening": {
    exerciseIds: ["q1", "q2", "q3"],
    taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
  },
  "z-writing": {
    exerciseIds: ["w1", "w2", "w3", "w4"],
    taskIds: [
      "writing:a2-09:w1",
      "writing:a2-09:w2",
      "writing:a2-09:w3",
      "writing:a2-09:w4",
    ],
  },
} as const;

function allTasks(): Exercise[] {
  const reading = lessonA209.reading;
  if (!reading) throw new Error("A2-09 must keep its reviewed reading");
  return [
    ...(lessonA209.review ?? []),
    ...lessonA209.practiceBank,
    ...lessonA209.miniTest,
    ...lessonA209.writing,
    ...reading.questions,
    ...lessonA209.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-09 task ${id} is missing`);
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
  lessonId = lessonA209.id,
): AnalyticsEvent {
  const goal = lessonA209.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-09 ${goalId} has no taskId for ${exerciseId}`);
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

describe("A2-09 lesson audit", () => {
  it("keeps the lesson identity and reviewed task inventory without a duration claim", () => {
    expect(lessonA209.id).toBe("a2-09");
    expect(lessonA209.unitId).toBe("a2-09");
    expect(lessonA209.level).toBe("A2");
    expect(lessonA209.order).toBe(1);
    expect("duration" in lessonA209).toBe(false);
    expect(lessonA209.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|إتقان|\b\d+\s*دقيقة/i);
    expect(lessonA209.einfuehrung.contextAr).toContain("خيالي");
    expect(lessonA209.einfuehrung.connectionToPreviousAr).toContain("لا أول لقاء");

    expect(LESSON_META.find((item) => item.id === "a2-09")).toMatchObject({
      id: "a2-09",
      unitId: "a2-09",
      level: "A2",
      order: 1,
      titleDe: "Feste und Feiern",
    });
    expect(lessonA209.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z-reading",
      "z2",
      "z3",
      "z4",
      "z-listening",
      "z-writing",
    ]);
    expect(ids(lessonA209.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA209.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA209.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA209.writing)).toEqual(["w1", "w2", "w3", "w4"]);
    expect(ids(lessonA209.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA209.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect(allTasks()).toHaveLength(33);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(33);
    expect(lessonA209.flashcards).toHaveLength(15);
    expect(lessonA209.pronunciation.items).toHaveLength(6);
    expect(lessonA209.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA209.mediation).toHaveLength(1);
    expect(lessonA209.interaction?.[0]?.rounds).toHaveLength(2);
  });

  it("keeps the active A2-09 reading in the lesson file, not in the multi-lesson archive", () => {
    const reading = lessonA209.reading;
    if (!reading) throw new Error("A2-09 reading is required");
    expect(reading).toMatchObject({
      id: "read-a2-09",
      titleDe: "Ein Geburtstag im Innenhof",
      textType: "erzaehlung",
    });
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(4);
    expect(reading.paragraphs).toEqual([
      "Am Samstag feiert Frau Yilmaz ihren sechzigsten Geburtstag. Sie lädt die Nachbarn in den Innenhof ein. Auf der Einladung stehen die Uhrzeit und der Treffpunkt. Ihr Bruder hilft ihr beim Dekorieren, und die Kinder stellen die Stühle an die Wand. Um fünf Uhr kommen die ersten Gäste.",
      "Das selbst gemachte Geschenk von den Kindern gefällt Frau Yilmaz besonders gut: ein großes Fotoalbum. Sie gratuliert ihrer Nachbarin zum neuen Job und bedankt sich bei allen für die Blumen. Ein Gast bringt einen Kuchen, der nach Schokolade riecht.",
      "Später läuft Musik, und alle tanzen. Der Abend ist warm, und die Stimmung ist fröhlich. Bevor die Gäste nach Hause gehen, helfen sie beim Aufräumen. Frau Yilmaz sagt, dass sie sich über diese Feier sehr freut.",
      "Am Sonntag treffen sich einige Gäste noch einmal zum Kaffee. Sie zeigen einander die Fotos vom Vorabend und erzählen kleine Geschichten. Frau Yilmaz erzählt, dass sie früher große Feiern anstrengend fand. Diesmal musste sie nicht alles allein vorbereiten, weil ihre Nachbarn geholfen haben. Sie möchte sich bei den Kindern besonders bedanken und plant schon einen gemeinsamen Ausflug.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "تحتفل السيدة يلماز يوم السبت بعيد ميلادها الستين. تدعو الجيران إلى الساحة الداخلية للمبنى. وتظهر ساعة اللقاء ومكانه في الدعوة. يساعدها أخوها في التزيين، ويضع الأطفال الكراسي بمحاذاة الجدار. ويصل الضيوف الأوائل في الخامسة.",
      "أعجب السيدة يلماز خصوصاً ألبوم الصور الكبير الذي صنعه الأطفال وأهدوه لها. وتهنئ جارتها بوظيفتها الجديدة، وتشكر الجميع على الزهور. ويحضر أحد الضيوف كعكة تفوح منها رائحة الشوكولاتة.",
      "تُعزف الموسيقى لاحقاً ويرقص الجميع. الأمسية دافئة والأجواء مبهجة. وقبل أن يعود الضيوف إلى بيوتهم، يساعدون في ترتيب المكان. وتقول السيدة يلماز إنها سعيدة جداً بهذه المناسبة.",
      "يلتقي بعض الضيوف مجدداً لشرب القهوة يوم الأحد. ويتبادلون صور الأمسية السابقة ويروون قصصاً صغيرة. وتقول السيدة يلماز إنها كانت ترى الاحتفالات الكبيرة متعبة في السابق. لكنها لم تضطر هذه المرة إلى إعداد كل شيء وحدها، لأن جيرانها ساعدوها. وتريد أن تشكر الأطفال خصوصاً، وتخطط بالفعل لنزهة مشتركة.",
    ]);
    expect(reading.glossary.map((item) => [item.de, item.ar])).toEqual([
      ["der Innenhof", "الساحة الداخلية للمبنى"],
      ["die Einladung", "الدعوة"],
      ["der Treffpunkt", "مكان اللقاء"],
      ["die Nachbarn", "الجيران"],
      ["das Fotoalbum", "ألبوم الصور"],
      ["gratulieren + Dativ", "يهنئ شخصاً"],
      ["sich bei jemandem bedanken", "يشكر شخصاً"],
      ["das Aufräumen", "ترتيب المكان بعد المناسبة"],
      ["der Vorabend", "المساء السابق"],
      ["die Nachbarin", "الجارة"],
    ]);
    expect(reading.redemittel).toEqual([
      { de: "Ich lade dich herzlich ein.", ar: "أدعوك بكل سرور." },
      { de: "Herzlichen Glückwunsch zum Geburtstag!", ar: "أطيب التهاني بعيد ميلادك!" },
      { de: "Das Geschenk gefällt mir sehr.", ar: "تعجبني الهدية كثيراً." },
      { de: "Ich bedanke mich bei euch für die Blumen.", ar: "أشكركم على الزهور." },
    ]);
    expect(reading.discussionAr?.length).toBeGreaterThan(40);
    expect(reading.discussionAr).toContain("لا يُسجَّل دليلاً على إتقان التحدث");
    const wordCount = reading.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
    expect(wordCount).toBeGreaterThanOrEqual(150);

    for (const question of reading.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(4);
      expect(question.errorType).toBe("comprehension");
      if (!question.questionAr) throw new Error(`${question.id} must include an Arabic question`);
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.questionAr.trim().length).toBeGreaterThan(8);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      const key = question.options[question.correctIndex];
      expect(key.length <= 45 || !reading.paragraphs.join(" ").includes(key)).toBe(true);
    }
  });

  it("documents the contrast in the reading choices and keeps the reading questions formative", () => {
    const reading = lessonA209.reading;
    if (!reading) throw new Error("A2-09 reading is required");
    expect(reading.questions.map((question) => question.options[question.correctIndex])).toEqual([
      "In den Innenhof.",
      "Ein großes Fotoalbum.",
      "Sie helfen beim Aufräumen.",
      "Ihre Nachbarn haben ihr geholfen.",
    ]);
    for (const question of reading.questions) {
      for (const [index, option] of question.options.entries()) {
        expect(
          evaluateExercise(question, option).isCorrect,
          `${question.id} option ${index + 1}: ${option}`,
        ).toBe(index === question.correctIndex);
      }
    }
    expect(lessonA209.lernziele.find((goal) => goal.id === "z-reading")?.evidence?.taskIds).toEqual([
      "reading:read-a2-09:rq1",
      "reading:read-a2-09:rq2",
      "reading:read-a2-09:rq3",
      "reading:read-a2-09:rq4",
    ]);
  });

  it("maps all stated goals to answerable tasks in the UI's actual task contexts", () => {
    const validTaskIds = new Set<string>();
    for (const exercise of lessonA209.practiceBank) {
      validTaskIds.add(`practice:${lessonA209.id}:${exercise.id}`);
    }
    // The practice flow reveals only the first min(4, practiceBank.length) tasks.
    for (const exercise of lessonA209.practiceBank.slice(0, Math.min(4, lessonA209.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA209.id}:${exercise.id}`);
    }
    for (const exercise of lessonA209.miniTest) {
      validTaskIds.add(`mini-test:${lessonA209.id}:${exercise.id}`);
    }
    // The lesson-flow mini-test shows at most the first three multiple-choice tasks.
    for (const exercise of lessonA209.miniTest
      .filter((item) => item.type === "multiple-choice")
      .slice(0, 3)) {
      validTaskIds.add(`flow-mini-test:${lessonA209.id}:${exercise.id}`);
    }
    for (const exercise of lessonA209.writing) {
      validTaskIds.add(`writing:${lessonA209.id}:${exercise.id}`);
    }
    for (const question of lessonA209.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA209.reading?.id}:${question.id}`);
    }
    for (const question of lessonA209.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA209.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA209.lernziele) {
      const evidence = goal.evidence;
      const expected = expectedEvidence[goal.id as keyof typeof expectedEvidence];
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      if (!evidence) throw new Error(`${goal.id} must have performance evidence`);
      if (!expected) throw new Error(`Unexpected A2-09 goal ${goal.id}`);
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence.exerciseIds).toEqual(expected.exerciseIds);
      expect(evidence.taskIds).toEqual(expected.taskIds);
      if (goal.id === "z3") {
        for (const exerciseId of ["e2", "e5", "e7", "e11", "e13", "m2", "m4"]) {
          expect(evidence.labelAr).toContain(exerciseId);
        }
      }
      const taskIds = evidence.taskIds ?? [];
      expect(new Set(evidence.exerciseIds).size).toBe(evidence.exerciseIds.length);
      expect(new Set(taskIds).size).toBe(taskIds.length);
      for (const taskId of taskIds) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence.exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(
            lessonA209.practiceBank
              .slice(0, Math.min(4, lessonA209.practiceBank.length))
              .some((exercise) => exercise.id === exerciseId),
          ).toBe(true);
        }
      }
      for (const exerciseId of evidence.exerciseIds) {
        expect(taskIds.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      expect(taskIds.join(" ")).not.toMatch(/flow-listening|listening-transcript/);

      const allCorrectEvents = evidence.exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      expect(getGoalEvidenceStatus(goal, lessonA209.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA209.id, allCorrectEvents)).toBe("evidenced");
      expect(
        getGoalEvidenceStatus(goal, lessonA209.id, [
          ...allCorrectEvents.slice(1),
          goalEvent(goal.id, evidence.exerciseIds[0], false),
        ]),
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal, lessonA209.id, [
          ...allCorrectEvents,
          goalEvent(goal.id, evidence.exerciseIds[0], true, undefined, "a2-08"),
        ]),
      ).toBe("evidenced");
    }

    expect(validTaskIds.has("flow-practice:a2-09:e1")).toBe(true);
    expect(validTaskIds.has("flow-practice:a2-09:e4")).toBe(true);
    expect(validTaskIds.has("flow-practice:a2-09:e5")).toBe(false);
    expect(validTaskIds.has("flow-mini-test:a2-09:m1")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-09:m2")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-09:m4")).toBe(false);

    for (const question of lessonA209.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA209.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA209.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA209.id}:${question.itemId}:${question.id}`);
    }
    const listeningGoal = lessonA209.lernziele.find((goal) => goal.id === "z-listening");
    if (!listeningGoal) throw new Error("A2-09 z-listening is required");
    const listeningEvents = ["q1", "q2", "q3"].map((exerciseId) =>
      goalEvent("z-listening", exerciseId, true),
    );
    expect(
      getGoalEvidenceStatus(listeningGoal, lessonA209.id, [
        listeningEvents[1],
        listeningEvents[2],
        goalEvent("z-listening", "q1", true, "listening-transcript:a2-09:l1:q1"),
      ]),
    ).toBe("pending");
  });

  it("checks every multiple-choice key and every offered distractor", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options/distractors`).toEqual(expectedMultipleChoiceOptions[id]);
      expect(exercise.options[exercise.correctIndex], `${id} answer key`).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, `${id} unique options`).toBe(
        exercise.options.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} correct key`).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} option ${index + 1}: ${option}`,
        ).toBe(index === exercise.correctIndex);
      }
      if (id === "e5") expect(exercise.instructionAr).toContain("المخاطَب (أنتَ)");
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
  });

  it("checks each fill-blank key and rejects every distractor in its own blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedFillBlankKeys).sort(),
    );

    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), `${id} keys`).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} options`).toEqual(
        expectedFillBlankOptions[id],
      );
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank count`).toBe(
        exercise.blanks.length,
      );
      if (id === "e14") {
        expect(exercise.template).toBe(
          "Die Gäste kommen von draußen und gehen ___ Innenhof. Danach feiern sie ___ Innenhof.",
        );
      }
      expect(evaluateExercise(exercise, expected).isCorrect, `${id} complete key`).toBe(true);

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

  it("checks all matching pairs, word-order tokens, and correction alternatives", () => {
    const matching = task("e3");
    if (matching.type !== "matching") throw new Error("e3 must be matching");
    expect(matching.pairs).toEqual([
      { left: "helfen", right: "يساعد" },
      { left: "gefallen", right: "يعجب" },
      { left: "gehören", right: "يخصّ / يكون ملكاً لـ" },
      { left: "gratulieren", right: "يهنئ" },
      { left: "danken", right: "يشكر" },
    ]);
    expect(evaluateExercise(matching, matching.pairs).isCorrect).toBe(true);
    expect(
      evaluateExercise(matching, [
        ...matching.pairs.slice(0, -1),
        { left: "danken", right: "يهنئ" },
      ]).isCorrect,
    ).toBe(false);

    const expectedOrders: Record<string, string> = {
      e4: "Ich helfe dem Vater im Garten.",
      m3: "Das Fotoalbum gefällt der Nachbarin.",
    };
    const ordering = allTasks().filter((item) => item.type === "word-ordering");
    expect(ordering.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrders).sort());
    for (const [id, sentence] of Object.entries(expectedOrders)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} must be word-ordering`);
      expect(exercise.correctSentence).toBe(sentence);
      expect(new Set(exercise.tokens).size).toBe(exercise.tokens.length);
      expect(evaluateExercise(exercise, sentence.split(" ")).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, [...sentence.split(" ")].reverse()).isCorrect).toBe(false);
    }

    const expectedCorrections: Record<string, { correct: string; options: string[] }> = {
      e5: { correct: "dir", options: ["dir", "dich", "mir", "ihn"] },
      e9: {
        correct: "den Kindern",
        options: ["den Kindern", "dem Kindern", "den Kinder", "der Kindern"],
      },
      m4: { correct: "der", options: ["der", "dem", "den", "das"] },
    };
    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} must be error-correction`);
      expect(exercise.correctWord).toBe(expected.correct);
      expect(exercise.options).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect).toBe(true);
      for (const option of expected.options.filter((candidate) => candidate !== expected.correct)) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(false);
      }
      expect(exercise.instructionAr).not.toContain("لا خطأ");
    }
  });

  it("checks every transformation and dictation answer, including rejection paths", () => {
    const accepted: Record<string, string[]> = {
      e7: ["Ich helfe dem Vater.", "Ich helfe dem Vater"],
      w1: [
        "Ich lade dich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich herzlich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich am Samstag um 18 Uhr zu meiner Geburtstagsfeier bei mir zu Hause ein.",
        "Am Samstag um 18 Uhr lade ich dich zu meiner Geburtstagsfeier bei mir zu Hause ein.",
      ],
      w4: [
        "Danke für die Einladung. Ich komme gern.",
        "Vielen Dank für die Einladung. Ich komme gern.",
        "Danke für die Einladung. Ich komme gerne.",
        "Vielen Dank für die Einladung. Ich komme gerne.",
      ],
    };
    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(Object.keys(accepted).sort());
    for (const [id, answers] of Object.entries(accepted)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} must be transformation`);
      expect(exercise.acceptedAnswers).toEqual(answers);
      if (id === "e7") expect(exercise.instructionAr).toContain("انتبه لتغير الحالة");
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "__not_an_accepted_answer__").isCorrect).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Wir gratulieren der Nachbarin zum neuen Job.",
      w3: "Das Geschenk gefällt mir sehr.",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, audioText] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} must be dictation`);
      expect(exercise.audioText).toBe(audioText);
      expect(evaluateExercise(exercise, audioText).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, "__not_the_audio_text__").isCorrect).toBe(false);
    }
  });

  it("keeps every reading and listening question grounded, keyed, and distinctly classified", () => {
    const reading = lessonA209.reading;
    if (!reading) throw new Error("A2-09 reading is required");
    expect(reading.questions.map((question) => question.id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(lessonA209.listening.questions.map((question) => question.id)).toEqual(["q1", "q2", "q3"]);
    expect(lessonA209.listening.questions.every((question) => question.errorType === "comprehension")).toBe(
      true,
    );
    expect(reading.questions.every((question) => question.errorType === "comprehension")).toBe(true);
    expect(lessonA209.listening.items).toEqual([
      {
        id: "l1",
        title: "دعوة عيد ميلاد",
        lines: [
          { speaker: "Mona", de: "Sami, ich habe am Samstag Geburtstag!", ar: "سامي، عيد ميلادي يوم السبت!" },
          { speaker: "Sami", de: "Herzlichen Glückwunsch! Was hast du geplant?", ar: "أطيب التهاني! ماذا خططتِ؟" },
          { speaker: "Mona", de: "Ich mache eine Party. Ich lade dich ein!", ar: "سأقيم حفلة. أدعوك!" },
          { speaker: "Sami", de: "Gern! Wann beginnt die Feier?", ar: "بكل سرور! متى تبدأ المناسبة؟" },
          { speaker: "Mona", de: "Die Feier beginnt um sieben Uhr bei mir zu Hause.", ar: "تبدأ المناسبة في السابعة في منزلي." },
          { speaker: "Sami", de: "Super! Ich bringe ein Geschenk mit.", ar: "رائع! سأحضر هدية." },
          { speaker: "Mona", de: "Danke dir! Du bist ein guter Freund.", ar: "شكراً لك! أنت صديق جيد." },
        ],
      },
      {
        id: "l2",
        title: "حديث قصير في المناسبة",
        lines: [
          { speaker: "Anna", de: "Das Geschenk gefällt mir sehr! Danke.", ar: "تعجبني الهدية كثيراً! شكراً." },
          { speaker: "Karim", de: "Gern geschehen! Und die Torte?", ar: "على الرحب والسعة! وماذا عن التورتة؟" },
          { speaker: "Anna", de: "Die Torte ist lecker! Wer hat sie gebacken?", ar: "التورتة لذيذة! من خبزها؟" },
          { speaker: "Karim", de: "Meine Mutter hat sie gebacken. Ich helfe ihr in der Küche.", ar: "خبزتها أمي. أساعدها في المطبخ." },
        ],
      },
    ]);
    expect(lessonA209.listening.items.map((item) => item.lines.length)).toEqual([7, 4]);
    expect(lessonA209.listening.questions.map((question) => [question.questionDe, question.questionAr])).toEqual([
      ["An welchem Tag hat Mona Geburtstag?", "في أي يوم عيد ميلاد منى؟"],
      ["Um wie viel Uhr beginnt die Feier?", "في أي ساعة تبدأ المناسبة؟"],
      ["Wer hat die Torte gebacken?", "من خبز التورتة؟"],
    ]);

    for (const question of [...reading.questions, ...lessonA209.listening.questions]) {
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(4);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(evaluateExercise(question, answer).isCorrect).toBe(true);
      for (const [index, option] of question.options.entries()) {
        expect(
          evaluateExercise(question, option).isCorrect,
          `${question.id} option ${index + 1}: ${option}`,
        ).toBe(index === question.correctIndex);
      }
    }
  });

  it("checks that theory depth, examples, comparison, and warnings match the limited scope", () => {
    expect(lessonA209.theory.map((block) => block.id)).toEqual(["t1", "t2"]);
    const expectedExamples = {
      t1: [
        "Ich helfe dem Vater beim Aufräumen.",
        "Das Fotoalbum gefällt Frau Yilmaz.",
        "Die Blumen gefallen der Nachbarin.",
        "Das Fahrrad gehört meinem Bruder.",
        "Wir gratulieren unserer Nachbarin zum Geburtstag.",
        "Ich danke den Kindern für die Hilfe.",
        "Kannst du mir helfen?",
        "Das Geschenk gefällt ihr.",
      ],
      t2: [
        "Wir feiern im Innenhof.",
        "Sie lädt die Nachbarn in den Innenhof ein.",
        "Ich komme mit meiner Schwester.",
        "Frau Yilmaz hilft beim Dekorieren.",
        "Die Blumen sind von den Gästen.",
        "Wir gratulieren ihr zum Geburtstag.",
        "Nach dem Essen räumen wir zusammen auf.",
        "Die Kinder stellen die Stühle an die Wand.",
        "Die Stühle stehen an der Wand.",
        "Sie bedankt sich bei den Kindern für die Hilfe.",
      ],
    } as const;
    const expectedArabicExamples = {
      t1: [
        "أساعد الأب في ترتيب المكان.",
        "ألبوم الصور يعجب السيدة يلماز.",
        "الزهور تعجب الجارة.",
        "الدراجة ملك لأخي.",
        "نهنئ جارتنا بعيد ميلادها.",
        "أشكر الأطفال على المساعدة.",
        "هل يمكنك مساعدتي؟",
        "تعجبها الهدية.",
      ],
      t2: [
        "نحتفل في الساحة الداخلية للمبنى.",
        "تدعو الجيران إلى الساحة الداخلية للمبنى.",
        "آتي مع أختي.",
        "تساعد السيدة يلماز في التزيين.",
        "الزهور مقدّمة من الضيوف.",
        "نهنئها بعيد ميلادها.",
        "بعد الطعام نرتب المكان معاً.",
        "يضع الأطفال الكراسي ملاصقةً للجدار.",
        "توجد الكراسي بمحاذاة الجدار.",
        "تشكر الأطفال على المساعدة.",
      ],
    } as const;

    for (const block of lessonA209.theory) {
      const paragraphs = block.explanationAr.split("\n").filter((paragraph) => paragraph.trim());
      expect(block.explanationAr.length, `${block.id} explanation length`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation max`).toBeLessThanOrEqual(2800);
      expect(paragraphs.length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      expect(block.whyAr.length, `${block.id} why`).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length, `${block.id} Arabic comparison`).toBeGreaterThanOrEqual(250);
      expect(block.examples.map((example) => example.de), `${block.id} examples`).toEqual(
        expectedExamples[block.id as keyof typeof expectedExamples],
      );
      expect(block.examples.map((example) => example.ar), `${block.id} Arabic examples`).toEqual(
        expectedArabicExamples[block.id as keyof typeof expectedArabicExamples],
      );
      expect(block.examples.every((example) => example.ar.trim().length > 4)).toBe(true);
      expect(block.commonMistakes.length).toBeGreaterThanOrEqual(3);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.length, `${block.id}: ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThanOrEqual(100);
      expect(block.eselsbruecke.length).toBeGreaterThan(30);
    }
    expect(lessonA209.theory[0]?.table?.rows.map(({ label, cells }) => [label, cells])).toEqual([
      ["مذكر", ["der Vater", "dem Vater", "Ich helfe dem Vater."]],
      ["مؤنث", ["die Mutter", "der Mutter", "Das gehört der Mutter."]],
      ["محايد", ["das Kind", "dem Kind", "Ich danke dem Kind."]],
      ["جمع", ["die Kinder", "den Kindern", "Ich helfe den Kindern."]],
      ["ضمائر المفرد", ["ich / du / er / sie / es", "mir / dir / ihm / ihr / ihm", "Das gefällt mir."]],
      ["ضمائر الجمع والصيغة الرسمية", ["wir / ihr / sie / Sie", "uns / euch / ihnen / Ihnen", "Ich danke Ihnen."]],
    ]);
    expect(lessonA209.theory[1]?.table?.rows.map(({ label, cells }) => [label, cells])).toEqual([
      ["رفقة", ["mit + Dativ", "mit meiner Schwester", "مع أختي"]],
      ["مكان/عند", ["bei + Dativ", "bei den Nachbarn", "عند الجيران"]],
      ["مصدر", ["von + Dativ", "von den Gästen", "من الضيوف"]],
      ["اتجاه بـ zu", ["zu + Dativ", "zur Feier", "إلى المناسبة"]],
      ["مكان مع in", ["in + Dativ", "im Innenhof", "في الساحة الداخلية"]],
      ["وجهة مع in", ["in + Akkusativ", "in den Innenhof", "إلى الساحة الداخلية"]],
      ["شيء نشكر عليه", ["für + Akkusativ", "für die Blumen", "على الزهور"]],
    ]);
    expect(lessonA209.summary).not.toContain("Dativ الكاملة");
    expect(lessonA209.theory[0]?.explanationAr).toContain("لا يعني ذلك أن كل كلمة تعبّر عن شخص تأتي في Dativ");
    expect(lessonA209.theory[1]?.explanationAr).toContain("لا تجعل «وجود حركة جسدية» وحده قاعدة");
  });

  it("documents automated pronunciation feedback without claiming a speaking outcome", () => {
    expect(lessonA209.pronunciation.items).toHaveLength(6);
    expect(lessonA209.pronunciation.items.map((item) => [item.de, item.ar])).toEqual([
      ["das Geschenk", "الهدية"],
      ["feiern", "يحتفل"],
      ["die Torte", "التورتة"],
      ["gratulieren", "يهنئ"],
      ["die Einladung", "الدعوة"],
      ["der Glückwunsch", "التهنئة"],
    ]);
    expect(
      Object.fromEntries(
        lessonA209.pronunciation.items.map((item) => [
          item.de,
          item.note.match(/\[[^\]]+\]/)?.[0],
        ]),
      ),
    ).toEqual(expectedPronunciationIpa);
    expect(lessonA209.pronunciation.items.every((item) => item.note.length > 20)).toBe(true);
    expect(lessonA209.pronunciation.shadowing?.map((item) => [item.de, item.ar])).toEqual([
      ["Herzlichen Glückwunsch zum Geburtstag!", "أطيب التهاني بعيد ميلادك!"],
      ["Ich lade dich herzlich ein.", "أدعوك بكل سرور."],
      ["Das Geschenk gefällt mir.", "تعجبني الهدية."],
      ["Ich helfe dir gern.", "أساعدك بسرور."],
    ]);
    const helfeShadowing = lessonA209.pronunciation.shadowing?.find((item) => item.de === "Ich helfe dir gern.");
    expect(helfeShadowing?.tip).toContain("المقطع الأول من helfe /ɛ/");
    expect(helfeShadowing?.tip).toContain("النهاية -e إلى /ə/");
    expect(lessonA209.pronunciation.tip).toContain("تقييم النطق هنا آلي");
    expect(lessonA209.pronunciation.tip).toContain("لا يعد حكماً بشرياً");
    expect(lessonA209.pronunciation.tip).toContain("لا يثبت وحده الإتقان");
    expect(lessonA209.lernziele.some((goal) => /Sprechen|التحدث|كلاماً مقوّماً/i.test(`${goal.de} ${goal.ar}`))).toBe(
      false,
    );

    for (const round of lessonA209.interaction?.[0]?.rounds ?? []) {
      expect(round.options.length).toBeGreaterThanOrEqual(2);
      for (const option of round.options) {
        expect(option.de.trim().length).toBeGreaterThan(15);
        expect(option.ar.trim().length).toBeGreaterThan(10);
        expect(option.replyDe.trim().length).toBeGreaterThan(10);
        expect(option.replyAr.trim().length).toBeGreaterThan(10);
      }
    }
    expect(lessonA209.interaction?.[0]?.rounds[0]?.options.every((option) => option.best)).toBe(true);
    expect(lessonA209.interaction?.[0]?.rounds[1]?.options.every((option) => option.best)).toBe(true);
  });

  it("checks the full mediation model and every interaction branch and translation", () => {
    expect(
      lessonA209.mediation?.map(({ id, titleAr, sourceDe, taskAr, modelAnswerAr, keyPointsAr }) => [
        id,
        titleAr,
        sourceDe,
        taskAr,
        modelAnswerAr,
        keyPointsAr,
      ]),
    ).toEqual([
      [
        "med-a2-09-1",
        "انقل تفاصيل دعوة عيد ميلاد إلى العربية",
        "Liebe Freunde, am Samstag feiere ich meinen Geburtstag um 18 Uhr bei mir zu Hause. Kommt alle! Bringt gute Laune mit.",
        "انقل الدعوة بالعربية، مع ذكر اليوم والساعة والمكان وما يطلبه صاحب الدعوة.",
        "«أصدقائي الأعزاء، سأحتفل بعيد ميلادي يوم السبت في السادسة مساءً في منزلي. تعالوا جميعاً، وأحضروا معكم روحاً مرحة!»",
        [
          "ذكر يوم السبت والساعة السادسة مساءً",
          "ذكر أن المكان هو منزل صاحب الدعوة",
          "نقل طلب الحضور بروح مرحة دون تغيير المعنى",
        ],
      ],
    ]);

    expect(
      lessonA209.interaction?.[0]?.rounds.map((round) => [
        round.speakerDe,
        round.speakerAr,
        round.options.map(({ de, ar, best, replyDe, replyAr }) => [de, ar, best, replyDe, replyAr]),
      ]),
    ).toEqual([
      [
        "Ich feiere am Samstag meinen Geburtstag. Kommst du?",
        "سأحتفل السبت بعيد ميلادي. هل ستأتي؟",
        [
          [
            "Ja, gern! Um wie viel Uhr und wo?",
            "نعم، بكل سرور! في أي ساعة وأين؟",
            true,
            "Um 18 Uhr bei mir zu Hause.",
            "الساعة السادسة مساءً في منزلي.",
          ],
          [
            "Danke für die Einladung! Am Samstag kann ich leider nicht. Können wir uns ein anderes Mal treffen?",
            "شكراً على الدعوة! للأسف لا أستطيع يوم السبت. هل يمكن أن نلتقي في وقت آخر؟",
            true,
            "Schade, aber gern. Wir finden einen anderen Termin.",
            "هذا مؤسف، لكن يسعدني ذلك. سنجد موعداً آخر.",
          ],
        ],
      ],
      [
        "Um 18 Uhr bei mir. Bringst du etwas mit?",
        "في السادسة مساءً عندي. هل ستحضر شيئاً؟",
        [
          [
            "Ja, ich bringe einen Kuchen mit!",
            "نعم، سأحضر كعكة!",
            true,
            "Toll, danke! Bis Samstag!",
            "رائع، شكراً! إلى السبت!",
          ],
          [
            "Gern, ich bringe eine Kleinigkeit mit. Passt das?",
            "بكل سرور، سأحضر شيئاً بسيطاً. هل يناسبك ذلك؟",
            true,
            "Ja, das passt sehr gut. Danke!",
            "نعم، هذا مناسب جداً. شكراً!",
          ],
        ],
      ],
    ]);
  });

  it("checks each vocabulary card for a unique id, nonduplicate face, and lesson anchor", () => {
    const cards = lessonA209.flashcards;
    expect(cards.map(({ de, ar, example, exampleAr, level }) => [de, ar, example, exampleAr, level])).toEqual([
      ["das Fest", "المناسبة / الاحتفال", "Das Fest war schön.", "كانت المناسبة جميلة.", "A2"],
      ["die Einladung", "الدعوة", "Danke für die Einladung!", "شكراً على الدعوة!", "A2"],
      ["feiern", "يحتفل", "Wir feiern am Samstag.", "نحتفل يوم السبت.", "A2"],
      ["das Geschenk", "الهدية", "Das Geschenk ist schön.", "الهدية جميلة.", "A2"],
      ["helfen + Dativ", "يساعد شخصاً", "Ich helfe dir.", "أساعدك.", "A2"],
      ["gefallen + Dativ", "يعجب شخصاً", "Das Geschenk gefällt mir.", "تعجبني الهدية.", "A2"],
      ["gehören + Dativ", "يخصّ / يكون ملكاً لـ", "Das Buch gehört meinem Bruder.", "الكتاب ملك لأخي.", "A2"],
      ["gratulieren + Dativ", "يهنئ شخصاً", "Ich gratuliere dir zum Geburtstag.", "أهنئك بعيد ميلادك.", "A2"],
      ["der Geburtstag", "عيد ميلاد شخص", "Sie hat am Samstag Geburtstag.", "عيد ميلادها يوم السبت.", "A2"],
      ["der Gast, die Gäste", "الضيف / الضيوف", "Die Gäste kommen um fünf Uhr.", "يصل الضيوف في الخامسة.", "A2"],
      ["der Innenhof", "الساحة الداخلية للمبنى", "Wir feiern im Innenhof.", "نحتفل في الساحة الداخلية للمبنى.", "A2"],
      ["sich bei jemandem für etwas bedanken", "يشكر شخصاً على شيء", "Ich bedanke mich bei dir für die Blumen.", "أشكرك على الزهور.", "A2"],
      ["die Nachbarin", "الجارة", "Die Nachbarin kommt zur Feier.", "تأتي الجارة إلى المناسبة.", "A2"],
      ["das Fotoalbum", "ألبوم الصور", "Das Fotoalbum gefällt Frau Yilmaz.", "ألبوم الصور يعجب السيدة يلماز.", "A2"],
      ["die Torte", "تورتة: كعكة بطبقات غالباً، ومحشوة أو مزيّنة", "Die Torte ist lecker.", "التورتة لذيذة.", "A2"],
    ]);
    expect(new Set(cards.map((card) => card.id)).size).toBe(cards.length);
    expect(new Set(cards.map((card) => card.de.trim().toLocaleLowerCase("de"))).size).toBe(cards.length);
    const source = JSON.stringify([
      lessonA209.theory,
      lessonA209.reading,
      lessonA209.practiceBank,
      lessonA209.miniTest,
      lessonA209.listening,
      lessonA209.pronunciation,
      lessonA209.einfuehrung,
      lessonA209.fehlerUndTipps,
    ]).toLocaleLowerCase("de");
    for (const card of cards) {
      expect(card.example?.trim().length, card.id).toBeGreaterThan(5);
      expect(card.exampleAr?.trim().length, card.id).toBeGreaterThan(5);
      const terms = card.de
        .replace(/^(der|die|das)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLocaleLowerCase("de"));
      const anchored = terms.some((word) =>
        source.includes(word.slice(0, Math.max(4, word.length - 3))),
      );
      expect(anchored, `${card.id}: ${card.de}`).toBe(true);
    }
  });
});
