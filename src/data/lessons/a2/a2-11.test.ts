import { describe, expect, it } from "vitest";

import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { LESSON_META } from "@/data/lessons/meta";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "dich",
  r2: "إلى مكتب البريد",
  e1: "mich",
  e2: "sich",
  e8: "يقدم شكوى",
  m1: "uns",
  m2: "euch",
  q1: "die Haare schneiden lassen",
  q2: "Das Handy funktioniert nicht",
  q3: "Wir reparieren es oder geben Ihnen ein neues",
  q4: "tunesisch",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["dich", "dir", "mich", "mir"],
  r2: ["إلى مكتب البريد", "إلى البنك", "إلى المحطة", "إلى الصيدلية"],
  e1: ["mich", "dich", "sich", "mir"],
  e2: ["sich", "mich", "dich", "uns"],
  e8: ["يقدم شكوى", "يستعجل", "يسجل", "يغضب"],
  m1: ["uns", "euch", "sich", "mich"],
  m2: ["euch", "uns", "sich", "dich"],
  q1: ["die Haare schneiden lassen", "einen Termin absagen", "sich beschweren", "ein Handy kaufen"],
  q2: ["Das Handy funktioniert nicht", "Die Haare sind zu kurz", "Der Termin ist zu spät", "Die Post ist zu teuer"],
  q3: ["Wir reparieren es oder geben Ihnen ein neues", "Wir können nicht helfen", "Das ist nicht unser Problem", "Kommen Sie morgen"],
  q4: ["tunesisch", "deutsch", "französisch", "nichts"],
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["einen"], options: [["einen", "ein", "eine"]] },
  e6: {
    correct: ["mich", "sich", "uns"],
    options: [
      ["mich", "dich", "sich"],
      ["mich", "dich", "sich"],
      ["uns", "euch", "sich"],
    ],
  },
  e12: {
    correct: ["aus", "mich"],
    options: [
      ["aus", "an", "auf", "mit"],
      ["mich", "mir", "dich", "sich"],
    ],
  },
  w2: {
    correct: ["mich", "dich", "sich", "uns", "euch", "sich"],
    options: [
      ["mich", "dich", "sich"],
      ["mich", "dich", "sich"],
      ["mich", "dich", "sich"],
      ["uns", "euch", "sich"],
      ["uns", "euch", "sich"],
      ["sich", "mich", "euch"],
    ],
  },
  m5: {
    correct: ["sich", "uns", "mich"],
    options: [
      ["sich", "mich", "uns"],
      ["sich", "mich", "uns"],
      ["sich", "mich", "uns"],
    ],
  },
};

const expectedErrorCorrections: Record<
  string,
  {
    sentence: string;
    wrongWord: string;
    correctWord: string;
    options: string[];
    alreadyCorrect?: boolean;
  }
> = {
  e5: {
    sentence: "Ich freue mir auf den Urlaub.",
    wrongWord: "mir",
    correctWord: "mich",
    options: ["mich", "dich", "sich", "mir"],
  },
  e9: {
    sentence: "Er freut mich auf das Wochenende.",
    wrongWord: "mich",
    correctWord: "sich",
    options: ["sich", "mich", "dich", "euch"],
  },
  m4: {
    sentence: "Das freut mich.",
    wrongWord: "freut mich",
    correctWord: "freut mich",
    options: ["freut mich", "freuen mich", "freut mir", "freue mich"],
    alreadyCorrect: true,
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonA211.review ?? []),
    ...lessonA211.practiceBank,
    ...lessonA211.miniTest,
    ...lessonA211.writing,
    ...lessonA211.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-11 task ${id} is missing`);
  return value;
}

function taskOfType<T extends Exercise["type"]>(id: string, type: T): Extract<Exercise, { type: T }> {
  const value = task(id);
  if (value.type !== type) throw new Error(`A2-11 task ${id} is not ${type}`);
  return value as Extract<Exercise, { type: T }>;
}

function goal(id: string) {
  const value = lessonA211.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`A2-11 goal ${id} is missing`);
  return value;
}

function goalEvent(
  goalId: string,
  exerciseId: string,
  correct = true,
  taskIdOverride?: string,
  lessonId = lessonA211.id,
): AnalyticsEvent {
  const acceptedTaskId = goal(goalId).evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-11 ${goalId} has no taskId for ${exerciseId}`);
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

describe("A2-11 lesson content audit", () => {
  it("preserves lesson identity/order and limits goals to evidenced performances", () => {
    expect(lessonA211).toMatchObject({
      id: "a2-11",
      unitId: "a2-11",
      level: "A2",
      order: 1,
      titleDe: "Dienstleistungen",
      titleAr: "الخدمات والمعاملات",
    });
    expect("duration" in lessonA211).toBe(false);
    expect(lessonA211.summary).not.toMatch(/\b\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|يغطي جميع/i);
    expect(lessonA211.reading).toBeUndefined();
    const lessonMeta = LESSON_META.find((item) => item.id === "a2-11");
    expect(lessonMeta).toMatchObject({
      id: "a2-11",
      unitId: "a2-11",
      level: "A2",
      order: 1,
      titleDe: "Dienstleistungen",
      titleAr: "الخدمات والمعاملات",
      summary: lessonA211.summary,
      keyWords: ["die Post", "der Friseur", "reparieren", "sich freuen", "sich ärgern", "sich anmelden", "sich beeilen", "sich beschweren"],
    });
    expect(lessonMeta && "duration" in lessonMeta).toBe(false);
    expect(lessonMeta?.summary).not.toMatch(/الاستمارات الرسمية|كل النماذج/);

    expect(lessonA211.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1")).toMatchObject({
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"],
        completion: "all-correct",
      },
    });
    expect(goal("z1").ar).toContain("يسجل النظام صحة الإجابة لا تشغيل الصوت");
    expect(goal("z1").evidence?.labelAr).toMatch(/تفريغ.*مخفياً|كشف التفريغ/);
    expect(goal("z1").evidence?.labelAr).toMatch(/فتح المقطع وحده ليس دليلاً/);

    expect(goal("z2").evidence).toEqual({
      exerciseIds: ["e1", "e6", "w2"],
      taskIds: ["practice:a2-11:e1", "flow-practice:a2-11:e1", "practice:a2-11:e6", "writing:a2-11:w2"],
      labelAr: "أجب صحيحاً عن e1 وe6 في التدريب (ويظهر e1 أيضاً ضمن أول أربعة تمارين في مسار التدفق)، ثم اختر الضمائر المناسبة لفراغات w2؛ هذه مهام اختيار موجّه لا كتابة حرة.",
      completion: "all-correct",
    });
    expect(lessonA211.practiceBank.slice(0, 4).map(({ id }) => id)).toEqual(["e1", "e2", "e3", "e4"]);
    expect(lessonA211.practiceBank[5]?.id).toBe("e6");

    expect(goal("z3").evidence).toEqual({
      exerciseIds: ["w4"],
      taskIds: ["writing:a2-11:w4"],
      labelAr: "اكتب العبارة المحددة في w4؛ لا يُحتسب اختيار ردّ مكتوب في محاكاة التفاعل أداءً شفهياً.",
      completion: "all-correct",
    });
    expect(goal("z3").de).toMatch(/schriftlich/);
    expect(goal("z3").ar).toMatch(/لا يقيس محادثة حرة/);

    expect(goal("z4").evidence).toEqual({
      exerciseIds: ["e11", "w5"],
      taskIds: ["practice:a2-11:e11", "writing:a2-11:w5"],
      labelAr: "أنجز مطابقة الحقول في e11 عند ظهوره في إحدى جلسات التدريب العشوائية، ثم اكتب البيانات التدريبية المعطاة في حقول w5؛ عرض النموذج وحده لا يثبت الأداء.",
      completion: "all-correct",
    });
    expect(lessonA211.practiceBank.findIndex(({ id }) => id === "e11")).toBeGreaterThanOrEqual(4);
    expect(lessonA211.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat()).not.toContain("med-a2-11-1");
    expect(lessonA211.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat()).not.toContain("int-a2-11-1");
    expect(lessonA211.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat()).not.toContain("p1");
  });

  it("has a unique, complete inventory of every assessed task", () => {
    expect((lessonA211.review ?? []).map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    expect(lessonA211.practiceBank.map(({ id }) => id)).toEqual(Array.from({ length: 12 }, (_, i) => `e${i + 1}`));
    expect(lessonA211.miniTest.map(({ id }) => id)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(lessonA211.writing.map(({ id }) => id)).toEqual(["w1", "w2", "w3", "w4", "w5"]);
    expect(lessonA211.listening.questions.map(({ id }) => id)).toEqual(["q1", "q2", "q3", "q4"]);
    expect(allTasks()).toHaveLength(29);
    expect(new Set(allTasks().map(({ id }) => id)).size).toBe(29);
    expect(lessonA211.theory).toHaveLength(2);
    expect(lessonA211.pronunciation.items).toHaveLength(6);
    expect(lessonA211.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA211.flashcards).toHaveLength(12);
    expect(lessonA211.mediation).toHaveLength(1);
    expect(lessonA211.interaction?.[0]?.rounds).toHaveLength(2);
  });

  it("reviews each cross-lesson item in context and validates its key", () => {
    expect(lessonA211.review).toEqual([
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "مراجعة من A2 (درس a2-07 — البنك والمال): اختر الضمير الصحيح:",
        questionDe: "Ich sehe ___. (أنتَ)",
        options: ["dich", "dir", "mich", "mir"],
        correctIndex: 0,
        explanation: "في معنى الرؤية هنا، يأخذ sehen مكمّلاً في Akkusativ: dich. لا تطابق تسمية الحالة الألمانية الإعراب العربي حرفياً.",
        errorType: "case",
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر المعنى الأنسب في هذا السياق:",
        questionDe: "Ich gehe zur Post. Was bedeutet „zur Post“ hier?",
        questionAr: "إلى أين أذهب؟",
        options: ["إلى مكتب البريد", "إلى البنك", "إلى المحطة", "إلى الصيدلية"],
        correctIndex: 0,
        explanation: "zur Post هنا = إلى مكتب البريد؛ وقد تعني die Post خدمة البريد أيضاً بحسب السياق.",
        errorType: "vocabulary",
      },
      {
        id: "r3",
        type: "fill-blank",
        instructionAr: "مراجعة من A1 (درس a1-03 — الطعام والشراب): أكمل طلب كوب واحد:",
        template: "Ich möchte ___ Tee. (كوب واحد)",
        blanks: [{ correct: "einen", options: ["einen", "ein", "eine"] }],
        explanation: "في هذا السياق المقصود حصة واحدة: `einen Tee`؛ الاسم مذكر ومفعول `möchten` هنا في Akkusativ. ويمكن استعمال `Tee` بلا أداة في سياق آخر عند الحديث عن الشاي كمادة عامة (مراجعة A1-03).",
        errorType: "case",
      },
    ]);
    for (const id of ["a2-07", "a1-11", "a1-03"]) {
      expect(LESSON_META.some((item) => item.id === id), `review references ${id}`).toBe(true);
    }
    expect(evaluateExercise(task("r1"), "dich").isCorrect).toBe(true);
    expect(evaluateExercise(task("r2"), "إلى مكتب البريد").isCorrect).toBe(true);
    expect(evaluateExercise(task("r3"), ["einen"]).isCorrect).toBe(true);
    expect(evaluateExercise(task("r3"), ["Tee"]).isCorrect).toBe(false);
  });

  it("audits every multiple-choice key and each individual distractor", () => {
    const allMcqIds = allTasks().filter((item) => item.type === "multiple-choice").map(({ id }) => id).sort();
    expect(Object.keys(expectedMultipleChoiceKeys).sort()).toEqual(allMcqIds);

    for (const [id, key] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      const options = expectedMultipleChoiceOptions[id];
      expect(exercise.options, `${id} options and distractors`).toEqual(options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(key);
      expect(new Set(exercise.options.map((option) => option.toLocaleLowerCase())).size, `${id} unique options`).toBe(
        exercise.options.length,
      );
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(option === key);
      }
      expect(exercise.explanation.trim().length, `${id} feedback`).toBeGreaterThan(10);
    }
  });

  it("checks every fill-blank key and tests every alternative against the engine", () => {
    expect(Object.keys(expectedFillBlanks).sort()).toEqual(
      allTasks().filter((item) => item.type === "fill-blank").map(({ id }) => id).sort(),
    );

    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options per blank`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect, `${id} all keys`).toBe(true);
      exercise.blanks.forEach((blank, index) => {
        expect(new Set(blank.options ?? []).size, `${id} blank ${index + 1} unique distractors`).toBe(
          blank.options?.length,
        );
        for (const option of blank.options ?? []) {
          const answers = [...expected.correct];
          answers[index] = option;
          expect(evaluateExercise(exercise, answers).isCorrect, `${id} blank ${index + 1}: ${option}`).toBe(
            option.toLowerCase() === expected.correct[index]?.toLowerCase(),
          );
        }
      });
    }
    expect(task("e12").hint).toContain("التسجيل/الالتحاق بحسب السياق");
    expect(taskOfType("m5", "fill-blank").template).toContain("Sie (هي)");
  });

  it("checks every error-correction span, intended context, and distractor", () => {
    expect(Object.keys(expectedErrorCorrections).sort()).toEqual(
      allTasks().filter((item) => item.type === "error-correction").map(({ id }) => id).sort(),
    );

    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, `${id} displayed sentence`).toBe(expected.sentence);
      expect(exercise.wrongWord, `${id} highlighted span`).toBe(expected.wrongWord);
      expect(exercise.wrongSentence.includes(expected.wrongWord), `${id} highlight exists in text`).toBe(true);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} distractors`).toEqual(expected.options);
      expect(exercise.isAlreadyCorrect).toBe(expected.alreadyCorrect);

      const correctAnswer = expected.alreadyCorrect ? NO_ERROR_OPTION : expected.correctWord;
      expect(evaluateExercise(exercise, correctAnswer).isCorrect, `${id} accepted answer`).toBe(true);
      for (const option of exercise.options) {
        const optionIsCorrection = !expected.alreadyCorrect && option === expected.correctWord;
        expect(evaluateExercise(exercise, option).isCorrect, `${id} offered option: ${option}`).toBe(optionIsCorrection);
      }
      if (!expected.alreadyCorrect) {
        expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect, `${id} must not allow no-error`).toBe(false);
      }
      if (expected.alreadyCorrect) {
        const visibleOptions = [
          ...exercise.options.filter((option) => option !== NO_ERROR_OPTION && option !== exercise.correctWord),
          NO_ERROR_OPTION,
        ];
        expect(visibleOptions).not.toContain(expected.correctWord);
        expect(visibleOptions).toContain(NO_ERROR_OPTION);
        expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect).toBe(true);
      }
    }
    expect(task("e9").instructionAr).toContain("إذا كان هو نفسه يتطلع");
    expect(task("m4").explanation).toContain("freuen` هنا متعدٍّ");
  });

  it("reviews both matching exercises, including every field label and translation", () => {
    const expectedPairs: Record<string, { left: string; right: string }[]> = {
      e3: [
        { left: "sich freuen", right: "يكون مسروراً/يتطلع بحسب السياق" },
        { left: "sich ärgern", right: "ينزعج/يغضب بحسب السياق" },
        { left: "sich anmelden", right: "يسجّل/يلتحق بحسب السياق" },
        { left: "sich beeilen", right: "يسرع/يستعجل" },
      ],
      e11: [
        { left: "der Nachname", right: "اسم العائلة/اللقب" },
        { left: "der Vorname", right: "الاسم الأول" },
        { left: "das Geburtsdatum", right: "تاريخ الميلاد" },
        { left: "die Staatsangehörigkeit", right: "الجنسية" },
        { left: "die Anschrift", right: "العنوان" },
      ],
    };
    expect(Object.keys(expectedPairs).sort()).toEqual(
      allTasks().filter((item) => item.type === "matching").map(({ id }) => id).sort(),
    );

    for (const [id, pairs] of Object.entries(expectedPairs)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} every pair`).toEqual(pairs);
      expect(new Set(pairs.map(({ left }) => left)).size, `${id} unique German labels`).toBe(pairs.length);
      expect(new Set(pairs.map(({ right }) => right)).size, `${id} unique Arabic matches`).toBe(pairs.length);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} all pairs`).toBe(true);
      const oneWrong = pairs.map((pair, index) => index === 0 ? { ...pair, right: pairs[1]?.right ?? "" } : pair);
      expect(evaluateExercise(exercise, oneWrong).isCorrect, `${id} one mismatched pair`).toBe(false);
    }
  });

  it("checks the two word-order tasks token-for-token and against their unique target sentences", () => {
    const expected: Record<string, { tokens: string[]; sentence: string }> = {
      e4: {
        tokens: ["mich", "Ich", "auf", "Urlaub", "den", "freue", "."],
        sentence: "Ich freue mich auf den Urlaub.",
      },
      m3: {
        tokens: ["mich", "Ich", "ärgere", "nicht", "."],
        sentence: "Ich ärgere mich nicht.",
      },
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks().filter((item) => item.type === "word-ordering").map(({ id }) => id).sort(),
    );
    for (const [id, value] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens).toEqual(value.tokens);
      expect(exercise.correctSentence).toBe(value.sentence);
      expect([...exercise.tokens].sort()).toEqual([...value.tokens].sort());
      expect(evaluateExercise(exercise, value.sentence.split(" ")).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, [...value.sentence.split(" ")].reverse()).isCorrect).toBe(false);
    }
    expect(task("e4").instructionAr).toContain("جملة خبرية محايدة");
    expect(task("e4").instructionAr).toContain("يبدأ ترتيبها بالفاعل");
    expect(task("m3").instructionAr).toContain("أنا لا أغضب");
  });

  it("validates the exact accepted answers for both transformations and the imperative", () => {
    const expected: Record<string, { acceptedAnswers: string[]; sampleAnswer: string }> = {
      w1: {
        acceptedAnswers: ["Ich freue mich auf den Urlaub.", "Ich freue mich auf die Ferien."],
        sampleAnswer: "Ich freue mich auf den Urlaub.",
      },
      w4: {
        acceptedAnswers: ["Entschuldigung, ich möchte mich beschweren."],
        sampleAnswer: "Entschuldigung, ich möchte mich beschweren.",
      },
      w5: {
        acceptedAnswers: ["Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch"],
        sampleAnswer: "Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch",
      },
      e7: {
        acceptedAnswers: ["Beeil dich bitte!", "Beeil dich!", "Beeile dich bitte!", "Beeile dich!"],
        sampleAnswer: "Beeil dich bitte!",
      },
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks()
        .filter((item) => item.type === "transformation")
        .map(({ id }) => id)
        .sort(),
    );
    for (const [id, value] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted answers`).toEqual(value.acceptedAnswers);
      expect(
        new Set(exercise.acceptedAnswers.map(normalizeText)).size,
        `${id} answers remain distinct after engine normalization`,
      ).toBe(exercise.acceptedAnswers.length);
      expect(exercise.sampleAnswer, `${id} sample`).toBe(value.sampleAnswer);
      for (const answer of value.acceptedAnswers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(exercise.acceptedAnswers.length).toBeGreaterThan(0);
      expect(exercise.prompt.trim().length).toBeGreaterThan(10);
    }
    expect(taskOfType("w1", "transformation").prompt).toContain("auf den Urlaub");
    expect(taskOfType("w1", "transformation").prompt).toContain("auf die Ferien");
    expect(taskOfType("w4", "transformation").prompt).toContain("استخدم Entschuldigung");
    expect(taskOfType("w4", "transformation").explanation).toContain("ليست افتتاحاً وحيداً");
    expect(taskOfType("w5", "transformation").explanation).toContain("بيانات افتراضية");
    expect(evaluateExercise(task("w5"), "Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: deutsch").isCorrect).toBe(false);
  });

  it("checks the two dictation keys without treating dictation as speech assessment", () => {
    const expected: Record<string, string> = {
      e10: "Ich muss mich erholen.",
      w3: "Ich möchte mich beschweren.",
    };
    expect(Object.keys(expected).sort()).toEqual(
      allTasks().filter((item) => item.type === "dictation").map(({ id }) => id).sort(),
    );
    for (const [id, text] of Object.entries(expected)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText).toBe(text);
      expect(evaluateExercise(exercise, text).isCorrect).toBe(true);
      expect(evaluateExercise(exercise, `${text} falsch`).isCorrect).toBe(false);
    }
    expect(task("e10").explanation).toContain("يجب أن أستريح");
    expect(task("w3").explanation).toContain("ليس تقويماً للنطق");
  });

  it("audits all three listening dialogues, line translations, questions, and transcript evidence IDs", () => {
    expect(lessonA211.listening.items.map(({ id, title }) => [id, title])).toEqual([
      ["l1", "عند الحلاق"],
      ["l2", "شكوى مهذبة"],
      ["l3", "ملء استمارة تدريبية افتراضية"],
    ]);
    expect(lessonA211.listening.items.map(({ lines }) => lines.length)).toEqual([5, 5, 7]);
    expect(lessonA211.listening.items.flatMap(({ lines }) => lines.map(({ speaker, de, ar }) => ({ speaker, de, ar })))).toEqual([
      { speaker: "Friseurin", de: "Guten Tag! Was möchten Sie?", ar: "نهارك سعيد! ماذا تريد؟" },
      { speaker: "Sami", de: "Ich möchte mir die Haare schneiden lassen.", ar: "أريد قصّ شعري لدى الحلاق." },
      { speaker: "Friseurin", de: "Kurz oder mittellang?", ar: "هل تريده قصيراً أم بطول متوسط؟" },
      { speaker: "Sami", de: "Mittellang, bitte. Ich muss mich beeilen; ich habe um zwölf einen Termin.", ar: "بطول متوسط، من فضلك. عليّ أن أسرع؛ لديّ موعد في الثانية عشرة." },
      { speaker: "Friseurin", de: "Kein Problem, wir sind schnell.", ar: "لا مشكلة، سننتهي بسرعة." },
      { speaker: "Mona", de: "Entschuldigung, ich möchte mich beschweren.", ar: "عذراً، أريد أن أقدم شكوى." },
      { speaker: "Mitarbeiter", de: "Ja, bitte? Was ist das Problem?", ar: "نعم، تفضّلي. ما المشكلة؟" },
      { speaker: "Mona", de: "Ich habe gestern ein Handy gekauft, aber es funktioniert nicht.", ar: "اشتريت أمس هاتفاً لكنه لا يعمل." },
      { speaker: "Mitarbeiter", de: "Das tut mir leid. Bringen Sie es mit, wir reparieren es oder geben Ihnen ein neues.", ar: "آسف. أحضريه، وسنصلحه أو نعطيك هاتفاً جديداً." },
      { speaker: "Mona", de: "Danke! Ich freue mich, dass Sie helfen.", ar: "شكراً! يسعدني أنكم تساعدونني." },
      { speaker: "Mitarbeiterin", de: "Guten Tag! Sie möchten sich anmelden. Hier ist ein Übungsformular.", ar: "نهارك سعيد! تودّين التسجيل؛ تفضّلي هذه استمارة تدريبية." },
      { speaker: "Mona", de: "Danke. Ich fülle es gleich aus. Nachname, Vorname, Geburtsdatum, Anschrift...", ar: "شكراً. سأملؤها فوراً: اسم العائلة، الاسم الأول، تاريخ الميلاد، العنوان..." },
      { speaker: "Mitarbeiterin", de: "Tragen Sie bitte auch das Land Ihrer Anschrift und Ihre Telefonnummer ein.", ar: "اكتبي من فضلك أيضاً بلد عنوانك ورقم هاتفك." },
      { speaker: "Mona", de: "Hier steht „Staatsangehörigkeit“. Was bedeutet das?", ar: "مكتوب هنا «الجنسية». ما معنى ذلك؟" },
      { speaker: "Mitarbeiterin", de: "Hier schreiben Sie, welche Staatsangehörigkeit Sie haben. Zum Beispiel: „tunesisch“.", ar: "اكتبي هنا جنسيتك. مثلاً: «tunesisch»." },
      { speaker: "Mona", de: "Fertig! Ich unterschreibe hier unten. So?", ar: "انتهيت! أوقّع في الأسفل. هكذا؟" },
      { speaker: "Mitarbeiterin", de: "Perfekt! Das Übungsformular ist jetzt vollständig ausgefüllt.", ar: "ممتاز! اكتمل ملء الاستمارة التدريبية الآن." },
    ]);

    expect(lessonA211.listening.questions.map(({ id, itemId, questionDe, questionAr, explanation, errorType }) => ({
      id,
      itemId,
      questionDe,
      questionAr,
      explanation,
      errorType,
    }))).toEqual([
      {
        id: "q1",
        itemId: "l1",
        questionDe: "Was möchte Sami?",
        questionAr: "ماذا يريد سامي؟",
        explanation: "قال سامي: Ich möchte mir die Haare schneiden lassen.",
        errorType: "comprehension",
      },
      {
        id: "q2",
        itemId: "l2",
        questionDe: "Was ist das Problem von Mona?",
        questionAr: "ما مشكلة منى؟",
        explanation: "قالت منى: Ich habe ein Handy gekauft, aber es funktioniert nicht.",
        errorType: "comprehension",
      },
      {
        id: "q3",
        itemId: "l2",
        questionDe: "Was bietet der Mitarbeiter als Lösung an?",
        questionAr: "ما الحل الذي يقترحه الموظف؟",
        explanation: "قال الموظف: Wir reparieren es oder geben Ihnen ein neues.",
        errorType: "comprehension",
      },
      {
        id: "q4",
        itemId: "l3",
        questionDe: "Welches Beispiel nennt die Mitarbeiterin für die Staatsangehörigkeit?",
        questionAr: "ما المثال الذي تذكره الموظفة لخانة الجنسية؟",
        explanation: "ذكرت الموظفة مثالاً: Schreiben Sie zum Beispiel „tunesisch“.",
        errorType: "comprehension",
      },
    ]);
    for (const question of lessonA211.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA211.id, question.itemId, question.id, false)).toBe(
        `listening:${question.itemId}:${question.id}`,
      );
      const transcriptTaskId = getListeningQuestionTaskId(lessonA211.id, question.itemId, question.id, true);
      expect(transcriptTaskId).toBe(`listening-transcript:${lessonA211.id}:${question.itemId}:${question.id}`);
      expect(goal("z1").evidence?.taskIds).not.toContain(transcriptTaskId);
    }
    expect(goal("z1").evidence?.taskIds?.some((id) => id.startsWith("flow-listening:"))).toBe(false);
  });

  it("checks every pronunciation notation, meaning, and shadowing note", () => {
    expect(lessonA211.pronunciation.items.map(({ de, ar, note }) => [de, ar, note])).toEqual([
      ["sich beschweren", "يشتكي/يقدّم شكوى", "IPA للفعل: [bəˈʃveːʁən]؛ sch يقابل [ʃ] وw يقابل [v]. يختلف تحقيق r إقليمياً."],
      ["der Friseur", "مصفّف الشعر/الحلّاق", "IPA: [fʁiˈzøːɐ̯]. في هذه الكلمة يقارب eu الصوت الطويل [øː]، ويتبعه r في ختام الكلمة؛ لا يُنطق هنا مثل eu الشائع [ɔʏ̯]."],
      ["reparieren", "يصلح", "IPA: [ʁepaˈʁiːʁən]؛ ie في هذا المقطع تمثل الصوت الطويل [iː]."],
      ["sich ärgern", "ينزعج/يغضب بحسب السياق", "IPA للكلمة: [ˈɛʁɡɐn]؛ ä قصيرة هنا [ɛ]، ويتغير تحقيق r إقليمياً."],
      ["sich anmelden", "يسجّل/يلتحق بحسب السياق", "IPA واسعة: [ˈʔanmɛldn̩]؛ النبر الأساسي على an وe في melden [ɛ]. وتُكتب النهاية أيضاً [ən] في نمط نقل آخر."],
      ["die Beschwerde", "شكوى/تظلّم بحسب السياق", "IPA: [bəˈʃveːɐ̯də]؛ sch يقابل [ʃ] وw يقابل [v]، ويتغير تحقيق r إقليمياً."],
    ]);
    expect(lessonA211.pronunciation.shadowing).toEqual([
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع إلى العطلة.", tip: "freue: eu صوت واحد تقريباً [ɔʏ̯]؛ وr يتغير نطقه باختلاف اللهجات." },
      { de: "Beeil dich bitte!", ar: "أسرع من فضلك!", tip: "beeil- تقريباً [bəˈʔaɪ̯l]؛ المقطع be- غير مشدد، ثم يأتي صوت [aɪ̯]." },
      { de: "Ich möchte mich beschweren.", ar: "أود أن أشتكي.", tip: "في beschweren: sch ≈ [ʃ]، وw = [v]، مع صوت طويل [eː]." },
      { de: "Wir müssen uns anmelden.", ar: "علينا أن نسجل.", tip: "في anmelden يقع النبر الأساسي على an؛ e في melden هنا [ɛ]." },
    ]);
    expect(lessonA211.pronunciation.tip).toContain("رموز IPA");
    expect(lessonA211.pronunciation.tip).toContain("يولّد الصوت آلياً في المتصفح");
    expect(lessonA211.pronunciation.tip).toContain("لا تعدّه تسجيلاً معيارياً");
  });

  it("audits both theory tables, all examples, and contextual classifications", () => {
    expect(lessonA211.theory.map(({ titleDe }) => titleDe)).toEqual([
      "Reflexive Verben: sich freuen, sich ärgern",
      "Reflexive Verben: mich oder mir",
    ]);
    expect(lessonA211.theory[0]?.table?.rows).toEqual([
      { label: "ich", cells: ["mich", "Ich freue mich."] },
      { label: "du", cells: ["dich", "Du freust dich."] },
      { label: "er/sie/es", cells: ["sich", "Er freut sich."] },
      { label: "wir", cells: ["uns", "Wir freuen uns."] },
      { label: "ihr", cells: ["euch", "Ihr freut euch."] },
      { label: "sie (هم) / Sie (مخاطبة رسمية)", cells: ["sich", "Die Gäste freuen sich. / Freuen Sie sich auf den Termin?"] },
    ]);
    expect(lessonA211.theory[1]?.table?.rows).toEqual([
      { label: "Akkusativ: الضمير هو المفعول", cells: ["mich", "Ich freue mich.", "أنا مسرور/أتطلع بحسب السياق."] },
      { label: "Akkusativ: انعكاسي مع waschen", cells: ["dich", "Du wäschst dich.", "تغتسل."] },
      { label: "Dativ + مفعول Akkusativ في هذا النمط", cells: ["mir", "Ich wasche mir die Hände.", "أغسل يديّ."] },
      { label: "Dativ مع etwas vorstellen بمعنى يتخيّل", cells: ["dir", "Stell dir das vor!", "تخيّل ذلك! "] },
      { label: "Akkusativ مع المخاطبة الرسمية Sie", cells: ["sich", "Ich hoffe, Sie freuen sich auf den Termin.", "آمل أن تتطلع حضرتك إلى الموعد."] },
    ]);
    expect(lessonA211.theory.map(({ examples }) => examples.map(({ de, ar }) => [de, ar]))).toEqual([
      [
        ["Ich freue mich auf den Urlaub.", "أتطلع إلى العطلة."],
        ["Er ärgert sich über den Lärm.", "ينزعج من الضجيج."],
        ["Wir müssen uns anmelden.", "علينا التسجيل."],
        ["Beeil dich bitte!", "أسرع من فضلك!"],
        ["Ich muss mich erholen.", "عليّ أن أستريح."],
        ["Ich hoffe, Sie freuen sich auf den Termin.", "آمل أن تتطلع حضرتك إلى الموعد."],
      ],
      [
        ["Ich freue mich auf den Urlaub.", "أتطلع إلى العطلة."],
        ["Ich wasche mir die Hände.", "أغسل يديّ (mir Dativ، وdie Hände Akkusativ في هذا الإطار)."],
        ["Ich sehe mir das Formular an.", "أتفحّص الاستمارة."],
        ["Wir treffen uns um sieben.", "نلتقي في السابعة (قد يكون المعنى متبادلاً بحسب السياق)."],
        ["Setz dich bitte!", "اجلس من فضلك!"],
      ],
    ]);
    expect(lessonA211.theory[0]?.commonMistakes).toEqual([
      {
        wrong: "Ich freue (إذا كان المقصود: أنا مسرور)",
        right: "Ich freue mich.",
        whyAr: "في معنى `sich freuen` المقصود هنا يلزم الضمير؛ أما `Das freut mich` فتركيب آخر بمعنى «هذا يسعدني».",
        classification: "error",
      },
      {
        wrong: "Er freut mich sich.",
        right: "Er freut sich.",
        whyAr: "في الجملة المقصودة يُستعمل ضمير واحد يعود على er: sich.",
        classification: "error",
      },
      {
        wrong: "Ich freue mir auf den Urlaub.",
        right: "Ich freue mich auf den Urlaub.",
        whyAr: "في هذا الإطار المحدد `sich freuen auf` تأتي الصيغة `mich`؛ لا تستنتج صيغة الضمير من ترجمة عربية عامة.",
        classification: "error",
      },
    ]);
    expect(lessonA211.theory[1]?.commonMistakes).toEqual([
      {
        wrong: "Ich freue. (إذا كان المقصود: أنا مسرور)",
        right: "Ich freue mich.",
        whyAr: "في معنى `sich freuen` المقصود يلزم الضمير؛ أما `Das freut mich` فهو استعمال متعدٍّ مختلف بمعنى «هذا يسعدني».",
        classification: "error",
      },
      {
        wrong: "Ich wasche mich die Hände.",
        right: "Ich wasche mir die Hände.",
        whyAr: "في هذا المثال يكون الضمير Dativ (`mir`) واسم العضو مفعولاً Akkusativ (`die Hände`)؛ ليست قاعدة عامة لكل فعل.",
        classification: "error",
      },
      {
        wrong: "Er interessiert ihn für Musik. (إذا كان المقصود أنه هو نفسه مهتم)",
        right: "Er interessiert sich für Musik.",
        whyAr: "الجملة الأولى يمكن أن تعني أنه يجعل شخصاً آخر يهتم بالموسيقى؛ إذا كان هو نفسه المهتم فنستخدم `sich interessieren für`. يوضح Duden المعنيين المتعدي والانعكاسي.",
        classification: "contextual-alternative",
      },
    ]);
    expect(lessonA211.theory[0]?.whyAr).toContain("Das freut mich");
    expect(lessonA211.theory[0]?.whyAr).not.toContain("Du freust mich");
    expect(lessonA211.theory[1]?.explanationAr).toContain("وجود مفعول آخر يعني Dativ");
    expect(lessonA211.theory[0]?.relatedRuleComparison?.content).toContain("مفعول Akkusativ هو");
    expect(lessonA211.theory[1]?.relatedRuleComparison?.content).toContain("قد يُفهم ضمير الجمع المتبادل من السياق");
    expect(lessonA211.fehlerUndTipps.mistakes).toEqual([
      {
        wrong: "Ich freue auf den Urlaub. (إذا كان المقصود: أتطلع إلى العطلة)",
        right: "Ich freue mich auf den Urlaub.",
        whyAr: "في الإطار `sich freuen auf` يلزم الضمير الانعكاسي؛ لكن `freuen` له أيضاً استعمال متعدٍّ مختلف مثل `Das freut mich`.",
      },
      {
        wrong: "Er freut mich sich.",
        right: "Er freut sich.",
        whyAr: "في معنى أن er نفسه يتطلع إلى شيء، لا يجتمع الضميران؛ أما `Das freut mich` فتركيب متعدٍّ آخر.",
      },
      {
        wrong: "Ich freue mir auf den Urlaub. (في معنى التطلّع)",
        right: "Ich freue mich auf den Urlaub.",
        whyAr: "في هذا الإطار نستخدم `mich`؛ لا يعني ذلك أن mir خطأ في كل الأفعال الانعكاسية.",
      },
    ]);
  });

  it("reviews every writing prompt and accepted field, including the new assessed tasks", () => {
    expect(lessonA211.writing.map(({ id }) => id)).toEqual(["w1", "w2", "w3", "w4", "w5"]);
    expect(task("w1")).toMatchObject({
      instructionAr: "اكتب جملة انعكاسية:",
      prompt: "اكتب بالألمانية «أتطلع إلى العطلة»، مستخدماً إحدى الصيغتين المحددتين: auf den Urlaub أو auf die Ferien (sich freuen auf).",
      acceptedAnswers: ["Ich freue mich auf den Urlaub.", "Ich freue mich auf die Ferien."],
      sampleAnswer: "Ich freue mich auf den Urlaub.",
    });
    expect(task("w2")).toMatchObject({
      instructionAr: "اختر الضمير المناسب لكل فاعل، بما في ذلك صيغة المخاطبة الرسمية:",
      template: "Ich freue ___. Du freust ___. Er freut ___. Wir freuen ___. Ihr freut ___. Sie freuen ___.",
      errorType: "grammar",
    });
    expect(task("w3")).toMatchObject({
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte mich beschweren.",
      explanation: "أود أن أشتكي — هذا إملاء للجملة المسموعة، وليس تقويماً للنطق.",
      errorType: "spelling",
    });
    expect(task("w4")).toMatchObject({
      instructionAr: "اكتب الصيغة المحددة لشكوى مهذبة:",
      prompt: "اكتب بالألمانية: «عذراً، أود أن أقدّم شكوى». استخدم Entschuldigung وIch möchte mich beschweren.",
      acceptedAnswers: ["Entschuldigung, ich möchte mich beschweren."],
      sampleAnswer: "Entschuldigung, ich möchte mich beschweren.",
      explanation: "هذه صيغة مكتوبة مهذبة ممكنة في هذا التدريب؛ ليست افتتاحاً وحيداً أو إلزامياً لكل شكوى.",
    });
    expect(task("w5")).toMatchObject({
      instructionAr: "اكتب الأسطر الثلاثة في نموذج تدريب افتراضي مستخدماً البيانات الخيالية المعطاة:",
      prompt: "لشخصية خيالية اسمها Mona: Vorname Mona؛ Geburtsdatum 14.03.1995؛ Staatsangehörigkeit tunesisch. اكتب الحقول مع بياناتها.",
      acceptedAnswers: ["Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch"],
      sampleAnswer: "Vorname: Mona\nGeburtsdatum: 14.03.1995\nStaatsangehörigkeit: tunesisch",
      explanation: "تدريب على كتابة القيم المعطاة في الحقول المحددة؛ هذه بيانات افتراضية ولا تمثل قائمة عامة بما تطلبه كل استمارة.",
      errorType: "spelling",
    });
    for (const id of ["w1", "w4", "w5"]) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} must be a typed transformation`);
      expect(exercise.acceptedAnswers.every((answer) => evaluateExercise(exercise, answer).isCorrect), `${id} engine support`).toBe(true);
    }
  });

  it("keeps mediation self-check and interaction choices separate from objective evidence", () => {
    expect(lessonA211.mediation).toEqual([
      {
        id: "med-a2-11-1",
        type: "relay-instructions",
        titleAr: "اشرح تعليمات نموذج تسجيل افتراضي بالعربية",
        sourceDe: "Anmeldung: Bitte tragen Sie hier Ihren Namen, Ihre Adresse und Ihre Telefonnummer ein. Unterschreiben Sie unten.",
        taskAr: "اشرح في هذا المثال المحدد البيانات التي يطلبها النموذج وموضع التوقيع؛ لا تعمم هذه الحقول على كل استمارة.",
        modelAnswerAr: "«في هذا النموذج، اكتب اسمك وعنوانك ورقم هاتفك، ثم وقّع في الأسفل.»",
        keyPointsAr: ["في هذا المثال: الاسم والعنوان ورقم الهاتف", "ذكر أن التوقيع في الأسفل"],
      },
    ]);
    const interaction = lessonA211.interaction?.[0];
    expect(interaction).toMatchObject({
      id: "int-a2-11-1",
      scenarioAr: "في محاكاة نصية لمكتب خدمة العملاء — اختر رداً على شكوى.",
      scenarioDe: "Im Kundenservice — eine höfliche Beschwerde.",
      strategyAr: "لاحظ كيف تُصاغ الشكوى بوضوح وتهذيب؛ يقتصر هذا النشاط على اختيار رد مكتوب، ولا يقيّم كلاماً حراً.",
    });
    expect(interaction?.rounds).toEqual([
      {
        speakerDe: "Guten Tag, wie kann ich Ihnen helfen?",
        speakerAr: "نهارك سعيد، كيف يمكنني مساعدتكم؟",
        options: [
          {
            de: "Ich habe vor einer Woche etwas bestellt, aber es ist noch nicht angekommen.",
            ar: "طلبت شيئاً قبل أسبوع ولم يصل بعد.",
            best: true,
            replyDe: "Das tut mir leid. Können Sie mir bitte die Bestellnummer nennen?",
            replyAr: "آسف. هل يمكنكم ذكر رقم الطلب لي من فضلكم؟",
          },
          {
            de: "Ihr Laden ist schrecklich und alles ist kaputt!",
            ar: "متجركم فظيع وكل شيء معطل!",
            best: false,
            replyDe: "Bitte schildern Sie das Problem sachlich, damit wir Ihnen helfen können.",
            replyAr: "من فضلك اشرح المشكلة بهدوء ووضوح كي نتمكن من مساعدتكم.",
          },
        ],
      },
      {
        speakerDe: "Können Sie mir bitte die Bestellnummer nennen?",
        speakerAr: "هل يمكنكم ذكر رقم الطلب لي من فضلكم؟",
        options: [
          {
            de: "Ja, die Nummer ist 12345. Können Sie bitte den Lieferstatus prüfen?",
            ar: "نعم، الرقم 12345. هل يمكنكم التحقق من حالة التوصيل؟",
            best: true,
            replyDe: "Ich prüfe das sofort. Laut aktuellem Status kommt die Lieferung voraussichtlich morgen.",
            replyAr: "سأتحقق الآن. بحسب الحالة الحالية، من المتوقع أن تصل الشحنة غداً.",
          },
          {
            de: "Die Nummer? Das geht Sie nichts an!",
            ar: "رقم الطلب؟ هذا لا يعنيكم!",
            best: false,
            replyDe: "Ohne die Bestellnummer kann ich den Status hier gerade nicht prüfen.",
            replyAr: "من دون رقم الطلب لا أستطيع التحقق من الحالة هنا في الوقت الحالي.",
          },
        ],
      },
    ]);
    for (const round of interaction?.rounds ?? []) {
      expect(round.options.filter(({ best }) => best)).toHaveLength(1);
      expect(round.options.every(({ de, ar, replyDe, replyAr }) => de && ar && replyDe && replyAr)).toBe(true);
    }
    expect(goal("z3").evidence?.exerciseIds).not.toContain("int-a2-11-1");
    expect(goal("z4").evidence?.exerciseIds).not.toContain("med-a2-11-1");
  });

  it("checks all flashcards, their examples, translations, and grammatical forms", () => {
    expect(lessonA211.flashcards.map(({ id, de, ar, example, exampleAr, level }) => ({ id, de, ar, example, exampleAr, level }))).toEqual([
      { id: "fc1", de: "die Post", ar: "خدمة البريد/مكتب البريد بحسب السياق", example: "Die Post ist in der Stadt.", exampleAr: "مكتب البريد في المدينة.", level: "A2" },
      { id: "fc2", de: "der Friseur", ar: "الحلاق", example: "Ich gehe zum Friseur.", exampleAr: "أذهب إلى الحلاق.", level: "A2" },
      { id: "fc3", de: "reparieren", ar: "يصلح", example: "Er repariert das Handy.", exampleAr: "يصلح الهاتف.", level: "A2" },
      { id: "fc4", de: "sich freuen", ar: "يكون مسروراً/يتطلع بحسب السياق", example: "Ich freue mich!", exampleAr: "أنا مسرور!", level: "A2" },
      { id: "fc5", de: "sich ärgern", ar: "ينزعج/يغضب", example: "Er ärgert sich.", exampleAr: "هو منزعج.", level: "A2" },
      { id: "fc6", de: "sich anmelden", ar: "يسجّل/يلتحق بحسب السياق", example: "Ich muss mich anmelden.", exampleAr: "يجب أن أسجل.", level: "A2" },
      { id: "fc7", de: "sich beeilen", ar: "يستعجل", example: "Beeil dich!", exampleAr: "استعجل!", level: "A2" },
      { id: "fc8", de: "sich beschweren", ar: "يشتكي/يقدّم شكوى", example: "Ich möchte mich beschweren.", exampleAr: "أود أن أشتكي.", level: "A2" },
      { id: "fc9", de: "das Formular", ar: "الاستمارة", example: "Das Formular ist lang.", exampleAr: "الاستمارة طويلة.", level: "A2" },
      { id: "fc10", de: "ausfüllen", ar: "يملأ (استمارة)", example: "Ich fülle das Formular aus.", exampleAr: "أملأ الاستمارة.", level: "A2" },
      { id: "fc11", de: "die Anmeldung", ar: "التسجيل/الانتساب بحسب السياق", example: "Die Anmeldung ist jetzt abgeschlossen.", exampleAr: "اكتمل التسجيل الآن.", level: "A2" },
      { id: "fc12", de: "unterschreiben", ar: "يوقّع", example: "Unterschreiben Sie hier.", exampleAr: "تفضّلوا بالتوقيع هنا (صيغة رسمية).", level: "A2" },
    ]);
  });

  it("keeps the cultural/legal note narrow and linked to the direct statute", () => {
    const note = lessonA211.fehlerUndTipps.culturalNote;
    expect(note.title).toBe("تنبيه: أمثلة سياقية ونموذج تدريبي افتراضي");
    expect(note.content).toContain("سؤال البريد في المراجعة");
    expect(note.content).toContain("أمثلة تدريبية");
    expect(note.content).toContain("Anmeldung` هنا تعني تسجيلاً عاماً ولا تعني بذاتها تسجيل عنوان السكن");
    expect(note.content).toContain("مهلة الأسبوعين بالانتقال إلى مسكن والتسجيل لدى سلطة التسجيل");
    expect(note.content).toContain("https://www.gesetze-im-internet.de/bmg/__17.html");
    expect(note.content).not.toMatch(/تفرض كل استمارة|يجب في كل خدمة|كل التسجيلات/);
  });

  it("derives all-correct goal states only from the exact lesson/task performances", () => {
    const idsByGoal: Record<string, string[]> = {
      z1: ["q1", "q2", "q3", "q4"],
      z2: ["e1", "e6", "w2"],
      z3: ["w4"],
      z4: ["e11", "w5"],
    };
    for (const [goalId, exerciseIds] of Object.entries(idsByGoal)) {
      const allCorrect = exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId));
      expect(getGoalEvidenceStatus(goal(goalId), lessonA211.id, allCorrect), `${goalId} all correct`).toBe("evidenced");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA211.id, allCorrect.slice(0, -1)),
        `${goalId} missing an item`,
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA211.id, [...allCorrect.slice(0, -1), goalEvent(goalId, exerciseIds[exerciseIds.length - 1]!, false)]),
        `${goalId} last item wrong`,
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA211.id, allCorrect.map((event) => ({ ...event, lessonId: "a2-10" } as AnalyticsEvent))),
        `${goalId} wrong lesson`,
      ).toBe("pending");
    }

    const transcriptTaskId = getListeningQuestionTaskId("a2-11", "l1", "q1", true);
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonA211.id, [goalEvent("z1", "q1", true, transcriptTaskId)]),
    ).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonA211.id, [goalEvent("z2", "e1", true, "practice:a2-11:e11")])).toBe(
      "pending",
    );
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonA211.id, [goalEvent("z3", "w4", true, "interaction-round:int-a2-11-1")]),
    ).toBe("pending");

    const z2WithFlowPractice = [
      goalEvent("z2", "e1", true, "flow-practice:a2-11:e1"),
      goalEvent("z2", "e6"),
      goalEvent("z2", "w2"),
    ];
    expect(getGoalEvidenceStatus(goal("z2"), lessonA211.id, z2WithFlowPractice)).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonA211.id, [
        ...z2WithFlowPractice.slice(0, 1),
        goalEvent("z2", "e6", true, "flow-practice:a2-11:e6"),
        z2WithFlowPractice[2]!,
      ]),
    ).toBe("pending");
  });
});
