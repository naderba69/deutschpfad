import { describe, expect, it } from "vitest";

import { lessonA207 } from "@/data/lessons/a2/a2-07";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "einen",
  r2: "المال",
  e1: "eine",
  e2: "keinen",
  e8: "يدفع نقداً",
  e11: "Einen Geldbetrag von einem Konto auf ein anderes Konto übertragen.",
  e12: "hebe",
  e13: "gab",
  m1: "einen",
  m2: "mir",
  rq1: "Sie möchte ihre Miete regelmäßig per Überweisung bezahlen.",
  rq2: "Es hat eine Bankkarte und kostet im Beispiel drei Euro pro Monat.",
  rq3: "Der genaue Betrag ist auf dem Blatt nicht angegeben.",
  rq4: "Sie vergleicht die Angaben und wählt erst später ein Modell.",
  q1: "ein Konto eröffnen",
  q2: "in der Übersicht",
  q3: "neben dem Eingang",
  q4: "Er versteht die Anzeige am Automaten nicht.",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["einen", "ein", "eine", "der"],
  r2: ["المال", "الذهب", "البطاقة", "الحساب"],
  e1: ["eine", "ein", "einen", "der"],
  e2: ["keinen", "kein", "keine", "nicht"],
  e8: ["يدفع نقداً", "يدفع بالبطاقة", "يحوّل مالاً", "يسحب نقوداً"],
  e11: [
    "Einen Geldbetrag von einem Konto auf ein anderes Konto übertragen.",
    "Am Automaten Bargeld aus dem eigenen Konto holen.",
    "Eine Karte an der Kasse zum Bezahlen benutzen.",
    "Münzen in einen Briefumschlag legen.",
  ],
  e12: ["hebe", "abhebe", "hebst", "heben"],
  e13: ["gab", "gibt", "geben", "gebe"],
  m1: ["einen", "ein", "eine", "der"],
  m2: ["mir", "mich", "dich", "dir"],
  rq1: [
    "Sie möchte ihre Miete regelmäßig per Überweisung bezahlen.",
    "Sie möchte bei der Bank als Mitarbeiterin arbeiten.",
    "Sie möchte jeden Tag Geld am Automaten wechseln.",
    "Sie möchte Bankkarten an andere Personen verkaufen.",
  ],
  rq2: [
    "Es hat eine Bankkarte und kostet im Beispiel drei Euro pro Monat.",
    "Es ist ohne Karte und kostet im Beispiel drei Euro pro Jahr.",
    "Es hat eine Kreditkarte und ist in jeder Bank kostenlos.",
    "Es enthält zwei Karten, aber der Preis steht nicht im Text.",
  ],
  rq3: [
    "Der genaue Betrag ist auf dem Blatt nicht angegeben.",
    "Die Mitarbeiterin hat ihr die Übersicht weggenommen.",
    "Das Konto ist schon geschlossen und nicht mehr verfügbar.",
    "Sie hat die Bankkarte im Geldautomaten vergessen.",
  ],
  rq4: [
    "Sie vergleicht die Angaben und wählt erst später ein Modell.",
    "Sie eröffnet sofort beide Konten zusammen.",
    "Sie wählt Modell B, weil es überall kostenlos ist.",
    "Sie bittet ihren Bruder, das Konto für sie zu schließen.",
  ],
  q1: [
    "ein Konto eröffnen",
    "ein Haus kaufen",
    "eine Rechnung bar bezahlen",
    "Geld am Automaten abheben",
  ],
  q2: ["in der Übersicht", "auf seiner Bankkarte", "auf seinem Pass", "am Geldautomaten"],
  q3: ["neben dem Eingang", "im Bahnhof", "hinter dem Café", "im Büro von Karim"],
  q4: [
    "Er versteht die Anzeige am Automaten nicht.",
    "Er hat seine Bankkarte verloren.",
    "Er möchte sein Konto schließen.",
    "Er findet den Eingang nicht.",
  ],
};

function allTasks(): Exercise[] {
  const reading = lessonA207.reading;
  if (!reading) throw new Error("A2-07 must keep its reviewed reading text");
  return [
    ...(lessonA207.review ?? []),
    ...lessonA207.practiceBank,
    ...lessonA207.miniTest,
    ...lessonA207.writing,
    ...reading.questions,
    ...lessonA207.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-07 task ${id} is missing`);
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
): AnalyticsEvent {
  const goal = lessonA207.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-07 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA207.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-07 audited lesson", () => {
  it("keeps the lesson position, complete inventory, and exact assessable objective evidence", () => {
    expect(lessonA207.id).toBe("a2-07");
    expect(lessonA207.unitId).toBe("a2-07");
    expect(lessonA207.level).toBe("A2");
    expect(lessonA207.order).toBe(1);
    expect(LESSON_META.find((item) => item.id === "a2-07")).toMatchObject({
      id: "a2-07",
      unitId: "a2-07",
      order: 1,
    });
    expect(lessonA207.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z2",
      "z-bank",
      "z3",
      "z-reading",
      "z-writing",
    ]);
    expect(ids(lessonA207.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(lessonA207.review?.map((exercise) => exercise.instructionAr)).toEqual([
      "مراجعة مستوى A1 من الدرس a1-07: اختر أداة الاسم المناسبة بعد الفعل kaufen:",
      "مراجعة مفردات مستوى A1 من الدرس a1-07: اختر المعنى الصحيح:",
      "مراجعة مستوى A1 من الدرس a1-07: أكمل جمع الاسم مع أداة التعريف، لا عبارة مبلغ مالي:",
    ]);
    expect(ids(lessonA207.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA207.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA207.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(lessonA207.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA207.listening.questions)).toEqual(["q1", "q2", "q3", "q4"]);
    expect(allTasks()).toHaveLength(33);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(33);
    expect("duration" in lessonA207).toBe(false);
    expect(lessonA207.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|\b\d+\s*دقيقة/i);

    const expectedEvidence = {
      z1: {
        exerciseIds: ["e1", "e2", "e7", "e13", "e14", "m1", "m3", "w1"],
        taskIds: [
          "practice:a2-07:e1",
          "flow-practice:a2-07:e1",
          "practice:a2-07:e2",
          "flow-practice:a2-07:e2",
          "practice:a2-07:e7",
          "practice:a2-07:e13",
          "practice:a2-07:e14",
          "mini-test:a2-07:m1",
          "mini-test:a2-07:m3",
          "writing:a2-07:w1",
        ],
      },
      z2: {
        exerciseIds: ["e3", "e5", "e6", "e9", "m2", "m4", "m5", "w2", "w3"],
        taskIds: [
          "practice:a2-07:e3",
          "flow-practice:a2-07:e3",
          "practice:a2-07:e5",
          "practice:a2-07:e6",
          "practice:a2-07:e9",
          "mini-test:a2-07:m2",
          "mini-test:a2-07:m4",
          "mini-test:a2-07:m5",
          "writing:a2-07:w2",
          "writing:a2-07:w3",
        ],
      },
      "z-bank": {
        exerciseIds: ["e8", "e10", "e11", "e12"],
        taskIds: [
          "practice:a2-07:e8",
          "practice:a2-07:e10",
          "practice:a2-07:e11",
          "practice:a2-07:e12",
        ],
      },
      z3: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l2:q4"],
      },
      "z-reading": {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-07:rq1",
          "reading:read-a2-07:rq2",
          "reading:read-a2-07:rq3",
          "reading:read-a2-07:rq4",
        ],
      },
      "z-writing": {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: ["writing:a2-07:w1", "writing:a2-07:w2", "writing:a2-07:w3"],
      },
    };

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA207.practiceBank) {
      validTaskIds.add(`practice:${lessonA207.id}:${exercise.id}`);
    }
    // ordinary practice samples five random items; lesson-flow reveals only its first min(4, bank size).
    for (const exercise of lessonA207.practiceBank.slice(
      0,
      Math.min(4, lessonA207.practiceBank.length),
    )) {
      validTaskIds.add(`flow-practice:${lessonA207.id}:${exercise.id}`);
    }
    for (const exercise of lessonA207.miniTest) {
      validTaskIds.add(`mini-test:${lessonA207.id}:${exercise.id}`);
    }
    for (const exercise of lessonA207.writing) {
      validTaskIds.add(`writing:${lessonA207.id}:${exercise.id}`);
    }
    for (const question of lessonA207.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA207.reading?.id}:${question.id}`);
    }
    for (const question of lessonA207.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA207.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      expect(evidence?.completion).toBe("all-correct");
      expect(evidence?.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence?.exerciseIds).toEqual(expectedEvidence[goal.id as keyof typeof expectedEvidence].exerciseIds);
      expect(evidence?.taskIds).toEqual(expectedEvidence[goal.id as keyof typeof expectedEvidence].taskIds);
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(
            lessonA207.practiceBank
              .slice(0, Math.min(4, lessonA207.practiceBank.length))
              .some((exercise) => exercise.id === exerciseId),
          ).toBe(true);
        }
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    for (const question of lessonA207.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA207.id}:${question.itemId}:${question.id}`);
    }
    expect(
      lessonA207.lernziele.every(
        (goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")),
      ),
    ).toBe(true);
    expect(
      lessonA207.lernziele
        .flatMap((goal) => goal.evidence?.taskIds ?? [])
        .join(" "),
    ).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(lessonA207.lernziele.some((goal) => /sprechen|aussprechen|telefonieren/i.test(goal.de))).toBe(
      false,
    );
  });

  it("checks every multiple-choice key and every offered distractor individually", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedMultipleChoiceKeys).sort(),
    );
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      expect(exercise.options, `${id} options and distractors`).toEqual(
        expectedMultipleChoiceOptions[id],
      );
      expect(exercise.options[exercise.correctIndex], id).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, id).toBe(exercise.options.length);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(
          evaluateExercise(exercise, option).isCorrect,
          `${id} option ${index + 1}: ${option}`,
        ).toBe(index === exercise.correctIndex);
      }
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
  });

  it("checks every fill-blank key and rejects every other offered answer in its own blank", () => {
    const expectedKeys: Record<string, string[]> = {
      r3: ["Euros"],
      e6: ["sie", "dir", "mich"],
      e14: ["einen"],
      w2: ["dich", "mir", "ihm"],
      m5: ["dich", "dir"],
    };
    const expectedOptions: Record<string, string[][]> = {
      r3: [["Euros", "Euro", "Euroen"]],
      e6: [
        ["sie", "ihr", "ihn"],
        ["dir", "dich", "mir"],
        ["mich", "mir", "dich"],
      ],
      e14: [["einen", "einem", "ein", "der"]],
      w2: [
        ["dich", "dir", "mich"],
        ["mir", "mich", "dir"],
        ["ihm", "ihn", "ihr"],
      ],
      m5: [
        ["dich", "dir", "mich"],
        ["dich", "dir", "mich"],
      ],
    };
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedKeys).sort());

    for (const [id, expected] of Object.entries(expectedKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} options`).toEqual(
        expectedOptions[id],
      );
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank count`).toBe(
        exercise.blanks.length,
      );
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        const options = blank.options ?? [];
        expect(new Set(options).size, `${id} blank ${blankIndex + 1}`).toBe(options.length);
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
    const pronounBlank = task("e6");
    if (pronounBlank.type !== "fill-blank") throw new Error("e6 must be fill-blank");
    expect(pronounBlank.caseSensitive).toBe(true);
    expect(evaluateExercise(pronounBlank, ["Sie", "dir", "mich"]).isCorrect).toBe(false);
    const euroReview = task("r3");
    if (euroReview.type !== "fill-blank") throw new Error("r3 must be fill-blank");
    expect(euroReview.template).toBe("der Euro → die ___");
  });

  it("checks every match, ordering token, correction option, transformation, and dictation", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id)).toEqual(["e3"]);
    const match = task("e3");
    if (match.type !== "matching") throw new Error("e3 must be matching");
    expect(match.pairs).toEqual([
      { left: "mich", right: "Er sieht mich. = هو يراني." },
      { left: "dich", right: "Ich sehe dich. = أراك." },
      { left: "mir", right: "Kannst du mir helfen? = هل تساعدني؟" },
      { left: "dir", right: "Ich helfe dir. = أساعدك." },
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
      e4: "Kannst du mir helfen?",
      m3: "Gibt es hier einen Geldautomaten?",
    };
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderings).sort());
    for (const [id, expected] of Object.entries(expectedOrderings)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      const tokenUnits = exercise.tokens
        .flatMap((token) => normalizeText(token).split(" "))
        .filter(Boolean)
        .sort();
      const sentenceUnits = normalizeText(expected).split(" ").filter(Boolean).sort();
      expect(tokenUnits, `${id} token inventory`).toEqual(sentenceUnits);
      expect(evaluateExercise(exercise, expected.split(/\s+/)).isCorrect, id).toBe(true);
      const wrongOrder = expected.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} wrong order`).toBe(false);
    }

    const expectedCorrections: Record<
      string,
      { wrong: string; wrongWord: string; correct: string; answer: string; options: string[] }
    > = {
      e5: {
        wrong: "Kannst du mich helfen?",
        wrongWord: "mich",
        correct: "mir",
        answer: "Kannst du mir helfen?",
        options: ["mir", "mich", "dich", "ihn"],
      },
      e9: {
        wrong: "Das Buch gehört ihn.",
        wrongWord: "ihn",
        correct: "ihm",
        answer: "Das Buch gehört ihm.",
        options: ["ihm", "ihn", "ihr", "es"],
      },
      m4: {
        wrong: "Ich danke dich für alles.",
        wrongWord: "dich",
        correct: "dir",
        answer: "Ich danke dir für alles.",
        options: ["dir", "dich", "mich", "ihn"],
      },
    };
    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedCorrections).sort(),
    );
    for (const [id, expected] of Object.entries(expectedCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error correction`);
      expect(exercise.wrongSentence, id).toBe(expected.wrong);
      expect(exercise.wrongWord, id).toBe(expected.wrongWord);
      expect(exercise.correctWord, id).toBe(expected.correct);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options).toContain(expected.correct);
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
      e7: ["Gibt es einen Geldautomaten?"],
      w1: [
        "Es gibt eine Bank in der Nähe.",
        "In der Nähe gibt es eine Bank.",
      ],
    };
    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(
      Object.keys(expectedTransformations).sort(),
    );
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not a transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      expect(answers).toContain(exercise.sampleAnswer);
      expect(exercise.caseSensitive).toBe(true);
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, answers[0].toLowerCase()).isCorrect, `${id} capitalization`).toBe(
        false,
      );
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Ich überweise das Geld auf dein Konto.",
      w3: "Kannst du mir bitte helfen?",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(exercise.caseSensitive, id).toBe(true);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, expected.toLowerCase()).isCorrect, `${id} capitalization`).toBe(
        false,
      );
      for (const acceptedVariant of exercise.acceptedVariants ?? []) {
        expect(evaluateExercise(exercise, acceptedVariant).isCorrect, `${id} variant`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Das ist eine andere Antwort.").isCorrect, id).toBe(false);
    }
  });

  it("checks all reading paragraphs, aligned translation, glossary entries, keys, and paragraph references", () => {
    const reading = lessonA207.reading;
    if (!reading) throw new Error("A2-07 must keep its reviewed reading");
    expect(reading.id).toBe("read-a2-07");
    expect(reading.titleDe).toBe("Lina informiert sich über ein Konto");
    expect(reading.titleAr).toBe("لينا تستفسر عن حساب");
    expect(reading.textType).toBe("erzaehlung");
    expect(reading.paragraphs).toEqual([
      "Lina wohnt seit Kurzem in einer neuen Stadt. Sie möchte ein Konto eröffnen, damit sie ihre Miete jeden Monat per Überweisung bezahlen kann. Auf der Internetseite einer Bank findet sie zwei Angebote. Die Bank, die Kontomodelle und alle Preise in dieser Geschichte sind erfunden. Lina schreibt drei Fragen auf: Gibt es eine Karte? Welche Gebühren gibt es? Wo ist ein Geldautomat?",
      "Am nächsten Tag vergleicht sie die Angebote auf einem Übungsblatt. Modell A ist ohne Karte. Modell B hat eine Bankkarte und kostet in diesem Beispiel drei Euro pro Monat. Bei einer weiteren Leistung nennt das Blatt eine mögliche Gebühr, aber keinen Betrag. Lina markiert die Zeile, damit sie später nach dem Betrag fragen kann. Sie weiß: Diese erfundenen Angebote sind keine aktuellen Informationen für ein echtes Konto.",
      "In der Filiale fragt Lina: „Gibt es hier einen Geldautomaten? Kann ich dort Geld abheben?“ Die Mitarbeiterin antwortet: „Ja, neben dem Eingang.“ Lina fragt auch, ob sie Geld überweisen kann. Die Mitarbeiterin bittet sie, die Übersicht zum Beispielkonto zu lesen. Dort stehen weitere Bedingungen. Lina notiert die Wörter Gebühr, Karte und Überweisung.",
      "Zu Hause liest Lina die Notizen. Sie möchte die Kontomodelle vergleichen und die Bedingungen verstehen. Dann sagt sie zu ihrem Bruder: „Es gibt zwei Angebote in dieser Geschichte. Modell A ist ohne Karte; Modell B kostet drei Euro im Monat. Ich entscheide mich später.“ Die genannten Preise gelten nur in dieser erfundenen Übung.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "تعيش لينا منذ مدة قصيرة في مدينة جديدة. تريد فتح حساب كي تدفع إيجارها كل شهر عن طريق تحويل بنكي. تجد على موقع أحد البنوك عرضين. البنك ونماذج الحساب والأسعار في هذه القصة خيالية. تكتب ثلاثة أسئلة: هل توجد بطاقة؟ ما الرسوم؟ وأين يوجد صراف آلي؟",
      "في اليوم التالي تقارن العرضين في ورقة تدريب. النموذج A بلا بطاقة. النموذج B يتضمن في هذا المثال بطاقة مصرفية، ويكلف ثلاثة يورو شهرياً. وتذكر الورقة رسماً محتملاً لخدمة أخرى، من دون تحديد المبلغ. تضع لينا خطاً تحت السطر كي تسأل لاحقاً عن المبلغ. وهي تعرف أن هذه العروض الخيالية لا تمثل معلومات حالية عن حساب حقيقي.",
      "في الفرع تسأل لينا: «هل يوجد صراف آلي هنا؟ هل أستطيع سحب المال منه؟» تجيب الموظفة: «نعم، بجانب المدخل». وتسأل لينا أيضاً إن كان بإمكانها تحويل المال. تطلب الموظفة منها قراءة ملخص المعلومات الخاص بحساب المثال. هناك شروط أخرى. تدوّن لينا كلمات: الرسوم، والبطاقة، والتحويل.",
      "في البيت تعيد لينا قراءة ملاحظاتها. تريد مقارنة نماذج الحساب وفهم الشروط. ثم تقول لأخيها: «يوجد عرضان في هذه القصة. النموذج A بلا بطاقة، والنموذج B يكلف ثلاثة يورو شهرياً. سأقرر لاحقاً». الأسعار المذكورة جزء من التمرين الخيالي فقط.",
    ]);
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    expect(reading.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(reading.paragraphs.join(" ")).toContain("sind erfunden");
    expect(reading.paragraphs.join(" ")).toContain("keine aktuellen Informationen für ein echtes Konto");
    expect(reading.paragraphs.join(" ")).toContain("damit sie später nach dem Betrag fragen kann");
    expect(reading.glossary.map((entry) => entry.de)).toEqual([
      "das Konto",
      "die Miete",
      "die Überweisung",
      "das Kontomodell",
      "die Gebühr",
      "vergleichen",
      "die Bankkarte",
      "die Filiale",
      "der Geldautomat",
      "Geld abheben",
      "die Übersicht",
      "die Bedingungen",
    ]);
    const article = reading.paragraphs.join(" ").toLocaleLowerCase("de");
    for (const entry of reading.glossary) {
      expect(entry.ar.trim(), entry.de).not.toBe("");
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLocaleLowerCase("de");
      expect(article, entry.de).toContain(stem);
    }
    expect(reading.questions.map((question) => [question.id, question.paragraph])).toEqual([
      ["rq1", 1],
      ["rq2", 2],
      ["rq3", 2],
      ["rq4", 4],
    ]);
    expect(reading.questions.map((question) => question.questionDe)).toEqual([
      "Warum möchte Lina ein Konto eröffnen?",
      "Was gilt für Modell B in dieser erfundenen Geschichte?",
      "Warum markiert Lina die Zeile mit der Gebühr?",
      "Was entscheidet Lina am Ende?",
    ]);
    expect(reading.questions.map((question) => question.questionAr)).toEqual([
      "لماذا تريد لينا فتح حساب؟",
      "ما الذي ينطبق على النموذج B في هذه القصة الخيالية؟",
      "لماذا تضع لينا علامة على السطر الذي يذكر الرسوم؟",
      "ماذا تقرر لينا في النهاية؟",
    ]);
    for (const question of reading.questions) {
      expect(question.errorType).toBe("comprehension");
      expect(question.options).toHaveLength(4);
      expect(question.questionAr?.trim().length).toBeGreaterThan(0);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
      if (typeof question.paragraph !== "number") {
        throw new Error(`${question.id} needs a paragraph reference`);
      }
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(reading.paragraphs.length);
      const paragraph = reading.paragraphs[question.paragraph - 1];
      expect(paragraph).toBeDefined();
      expect(paragraph?.trim().length).toBeGreaterThan(0);
    }
    expect(reading.redemittel).toEqual([
      { de: "Ich möchte ein Konto eröffnen.", ar: "أريد فتح حساب." },
      { de: "Welche Gebühren gibt es?", ar: "ما الرسوم؟" },
      { de: "Wo ist der Geldautomat?", ar: "أين يوجد الصراف الآلي؟" },
      { de: "Ich möchte die Angebote vergleichen.", ar: "أريد مقارنة العروض." },
    ]);
    expect(reading.discussionAr).toContain("لا تُدخل أرقام حسابات أو بيانات شخصية حقيقية");
    expect(reading.discussionAr).toContain("لا تتعامل مع أسعار القصة على أنها عروض فعلية");
  });

  it("checks every listening line and translation, each answer key, and transcript-free evidence IDs", () => {
    expect(lessonA207.listening.items.map((item) => [item.id, item.title, item.lines.length])).toEqual([
      ["l1", "حوار تدريبي متخيّل عن نموذج حساب", 6],
      ["l2", "طلب مساعدة عند الصراف الآلي", 5],
    ]);
    const expectedLines = [
      [
        "l1",
        [
          ["Bankangestellte", "Guten Tag! Wie kann ich Ihnen helfen?", "مرحباً! كيف أستطيع مساعدتك؟"],
          ["Sami", "Ich möchte ein Konto eröffnen.", "أريد فتح حساب."],
          ["Bankangestellte", "In diesem Übungsbeispiel gibt es zwei Kontomodelle: eines mit Bankkarte und eines ohne Karte.", "في مثال التدريب هذا نموذجان للحساب: أحدهما ببطاقة مصرفية والآخر بلا بطاقة."],
          ["Sami", "Wo finde ich die Gebühren?", "أين أجد الرسوم؟"],
          ["Bankangestellte", "Die Gebühren stehen in der Übersicht.", "الرسوم واردة في ملخص المعلومات."],
          ["Sami", "Danke. Ich lese die Informationen erst in Ruhe.", "شكراً. سأقرأ المعلومات أولاً على مهل."],
        ],
      ],
      [
        "l2",
        [
          ["Mona", "Ich brauche Bargeld. Gibt es hier einen Geldautomaten?", "أحتاج إلى نقود نقدية. هل يوجد صراف آلي هنا؟"],
          ["Karim", "Ja, es gibt einen Automaten neben dem Eingang.", "نعم، يوجد صراف بجانب المدخل."],
          ["Mona", "Kann ich dort mit meiner Karte Geld abheben?", "هل أستطيع سحب المال من هناك ببطاقتي؟"],
          ["Karim", "Ich verstehe die Anzeige nicht. Kannst du mir kurz helfen?", "لا أفهم ما يظهر على الشاشة. هل يمكنك مساعدتي قليلاً؟"],
          ["Mona", "Klar. Ich helfe dir.", "طبعاً. سأساعدك."],
        ],
      ],
    ] as const;
    expect(
      lessonA207.listening.items.map((item) => [
        item.id,
        item.lines.map((line) => [line.speaker, line.de, line.ar]),
      ]),
    ).toEqual(expectedLines);
    expect(
      lessonA207.listening.items.every((item) =>
        item.lines.every((line) => line.speaker.trim() && line.de.trim() && line.ar.trim()),
      ),
    ).toBe(true);
    expect(lessonA207.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"],
      ["q2", "l1"],
      ["q3", "l2"],
      ["q4", "l2"],
    ]);
    expect(lessonA207.lernziele.find((goal) => goal.id === "z3")?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
    ]);
    for (const question of lessonA207.listening.questions) {
      expect(question.errorType).toBe("comprehension");
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA207.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA207.id}:${question.itemId}:${question.id}`);
    }
    expect(lessonA207.lernziele.find((goal) => goal.id === "z3")?.ar).toContain(
      "قبل إظهار نصيهما",
    );
  });

  it("checks theory claims, contrast tables, all examples, error classifications, and pronunciation notes", () => {
    expect(ids(lessonA207.theory)).toEqual(["t1", "t2"]);
    expect(lessonA207.theory.map((block) => block.examples.length)).toEqual([8, 8]);
    expect(lessonA207.theory.map((block) => block.commonMistakes.length)).toEqual([4, 4]);
    for (const block of lessonA207.theory) {
      expect(block.explanationAr.length).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split(/\n\s*\n/).filter((paragraph) => paragraph.trim())).toHaveLength(3);
      expect(block.whyAr.length).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length).toBeGreaterThanOrEqual(250);
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThan(100);
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(
        block.commonMistakes.every(
          (mistake) =>
            mistake.wrong &&
            mistake.right &&
            mistake.whyAr.length > 60 &&
            new Set<string>(["error", "contextual-alternative", "pedagogical-simplification"]).has(
              mistake.classification ?? "",
            ),
        ),
      ).toBe(true);
    }
    expect(lessonA207.theory[0].examples).toEqual([
      { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
      { de: "Es gibt einen Park im Zentrum.", ar: "يوجد منتزه في وسط المدينة." },
      { de: "Es gibt ein Konto für den Alltag.", ar: "يوجد حساب للاستخدام اليومي." },
      { de: "Gibt es hier einen Geldautomaten?", ar: "هل يوجد صراف آلي هنا؟" },
      { de: "Es gibt keine Filiale am Bahnhof.", ar: "لا يوجد فرع مصرفي في المحطة." },
      { de: "In der Nähe gibt es mehrere Banken.", ar: "يوجد في الجوار عدة بنوك." },
      { de: "Früher gab es hier eine kleine Bank.", ar: "كان يوجد هنا مصرف صغير سابقاً." },
      { de: "Es hat früher hier einen Geldautomaten gegeben.", ar: "كان يوجد هنا صراف آلي سابقاً." },
    ]);
    expect(lessonA207.theory[0].table?.columns).toEqual([
      "الاستعمال",
      "المثال الألماني",
      "ملاحظة",
    ]);
    expect(lessonA207.theory[0].table?.rows.map((row) => row.cells[0])).toEqual([
      "Es gibt eine Bank.",
      "Es gibt einen Park.",
      "Es gibt ein Konto.",
      "Es gibt viele Banken.",
      "Gibt es hier eine Filiale?",
      "Es gibt keinen Geldautomaten.",
      "Früher gab es hier eine Bank.",
    ]);
    expect(lessonA207.theory[0].explanationAr).toContain("Akkusativ");
    expect(lessonA207.theory[0].explanationAr).toContain("Es gibt einen Park");
    expect(lessonA207.theory[0].explanationAr).toContain("Es gab einen Park");
    expect(lessonA207.theory[0].explanationAr).toContain("Es hat einen Park gegeben");
    expect(lessonA207.theory[0].explanationAr).toContain("جمعُ الشيء المذكور");
    expect(lessonA207.theory[0].explanationAr).toContain("Geldautomaten");
    expect(lessonA207.theory[0].whyAr).toContain("Duden");
    expect(lessonA207.theory[0].whyAr).toContain("Grammis");
    expect(lessonA207.theory[0].comparisonWithArabic).toContain("لا تنقل اسم الحالة أو علامة الإعراب من لغة إلى الأخرى آلياً");
    expect(lessonA207.theory[0].relatedRuleComparison?.content).toContain("Nominativ");
    expect(lessonA207.theory[0].commonMistakes.map((mistake) => [mistake.wrong, mistake.right, mistake.classification])).toEqual([
      ["Es gibt ein Bank.", "Es gibt eine Bank.", "error"],
      ["Es geben viele Banken.", "Es gibt viele Banken.", "error"],
      ["Es gibt der Park.", "Es gibt einen Park.", "error"],
      ["Es gibt keinen Automat.", "Es gibt keinen Automaten.", "error"],
    ]);

    expect(lessonA207.theory[1].examples).toEqual([
      { de: "Ich sehe dich jeden Tag.", ar: "أراك كل يوم." },
      { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟" },
      { de: "Das Buch gehört ihm.", ar: "هذا الكتاب يخصه." },
      { de: "Ich danke dir für alles.", ar: "أشكرك على كل شيء." },
      { de: "Sie liebt mich.", ar: "هي تحبني." },
      { de: "Können Sie mir bitte helfen?", ar: "هل يمكنكم مساعدتي من فضلكم؟" },
      { de: "Ich fahre mit ihr zur Bank.", ar: "أذهب معها إلى البنك." },
      { de: "Wir sehen sie am Bahnhof.", ar: "نراهم/نراهن في المحطة." },
    ]);
    expect(lessonA207.theory[1].table?.columns).toEqual([
      "الشخص",
      "Nominativ",
      "Akkusativ",
      "Dativ",
    ]);
    expect(lessonA207.theory[1].table?.rows.map((row) => row.cells)).toEqual([
      ["ich", "mich", "mir"],
      ["du", "dich", "dir"],
      ["er", "ihn", "ihm"],
      ["sie", "sie", "ihr"],
      ["es", "es", "ihm"],
      ["wir", "uns", "uns"],
      ["ihr", "euch", "euch"],
      ["sie", "sie", "ihnen"],
      ["Sie", "Sie", "Ihnen"],
    ]);
    expect(lessonA207.einfuehrung.connectionToPreviousAr).toContain("هذه ليست أول مرة ترى فيها Dativ");
    expect(lessonA207.einfuehrung.connectionToPreviousAr).toContain("A1-04 وA1-08");
    expect(lessonA207.einfuehrung.connectionToPreviousAr).toContain("A1-06");
    expect(lessonA207.theory[1].comparisonWithArabic).toContain(
      "لا يعني تلقائياً أن نظيرها العربي مجرور",
    );
    expect(lessonA207.theory[1].whyAr).toContain("ليسا بديلين حرّين");
    expect(lessonA207.theory[1].relatedRuleComparison?.content).toContain("mit dir");
    expect(lessonA207.theory[1].commonMistakes.map((mistake) => [mistake.wrong, mistake.right])).toEqual([
      ["Kannst du mich helfen?", "Kannst du mir helfen?"],
      ["Das Buch gehört ihn.", "Das Buch gehört ihm."],
      ["Ich sehe dir jeden Tag.", "Ich sehe dich jeden Tag."],
      ["Ich danke dich.", "Ich danke dir."],
    ]);
    expect(
      [...lessonA207.theory[0].commonMistakes, ...lessonA207.theory[1].commonMistakes].every(
        (mistake) => mistake.classification === "error",
      ),
    ).toBe(true);

    expect(lessonA207.pronunciation.items.map((item) => [item.de, item.ar])).toEqual([
      ["das Konto", "الحساب المصرفي"],
      ["das Geld", "المال"],
      ["überweisen", "يحوّل مالاً"],
      ["der Geldautomat", "الصراف الآلي"],
      ["die Kreditkarte", "بطاقة الائتمان"],
      ["abheben", "يسحب نقوداً من الحساب"],
    ]);
    expect(lessonA207.pronunciation.items.map((item) => item.note)).toEqual([
      "DWDS يورد [ˈkɔnto]: النبر على المقطع الأول، وo الأولى قصيرة مفتوحة [ɔ]. استمع إلى المثال ولا تحوّل النطق إلى كتابة عربية حرفية.",
      "Duden يورد [ɡɛlt]: g صوت وقفي [g] وليس غ، وe قصيرة [ɛ]، أما d في آخر الكلمة فيُنطق [t] في هذا المثال.",
      "قسّمها حسب Duden: über|wei|sen، والنبر على wei. في ü دوّر الشفتين مع إبقاء اللسان قريباً من [i]؛ وei هو [aɪ̯]، وw الألمانية قريب من [v].",
      "ابدأ بـ Geld [ɡɛlt] ثم Automat [aʊ̯toˈmaːt]. انتبه إلى g المجهورة وإلى au [aʊ̯]؛ لا تستخدم غِلت-آوتومات كنقل صوتي عربي.",
      "Duden يورد [kreˈdiːtkartə]: الحرف d المكتوب في Kredit يوافق [t] في هذا الموضع، وie تمثل [iː]. استمع إلى الكلمة كاملة.",
      "قسمة Duden: ab|he|ben؛ لا تُسقط h في heben. والفعل ينفصل في الجملة الرئيسة: Ich hebe Geld ab. استمع إلى التسجيل الصوتي بدلاً من التقريب بحروف عربية.",
    ]);
    expect(lessonA207.pronunciation.tip).toContain("IPA والملاحظات الصوتية أدق من تهجئة عربية تقريبية");
    expect(lessonA207.pronunciation.tip).toContain("لا يسجل صوت المتعلم ولا يقيس جودة النطق");
    expect(lessonA207.pronunciation.shadowing).toEqual([
      {
        de: "Ich möchte ein Konto eröffnen.",
        ar: "أريد فتح حساب.",
        tip: "استمع إلى الفرق بين o في Konto وö في eröffnen، ثم كرر الجملة كاملة.",
      },
      {
        de: "Es gibt einen Geldautomaten.",
        ar: "يوجد صراف آلي.",
        tip: "لاحظ g المجهورة في Geld وصيغة Geldautomaten في الجملة.",
      },
      {
        de: "Ich helfe dir.",
        ar: "أساعدك.",
        tip: "حافظ على h في helfe، ثم قارن dir بـ dich في مثال آخر.",
      },
      {
        de: "Das gehört mir.",
        ar: "هذا يخصني.",
        tip: "انتبه إلى ö في gehört، ثم استمع إلى الصوت قبل التكرار.",
      },
    ]);
  });

  it("checks each review note, every flashcard, cultural claim, mediation point, and interaction response", () => {
    expect(lessonA207.fehlerUndTipps?.mistakes).toEqual([
      {
        wrong: "Kannst du mich helfen?",
        right: "Kannst du mir helfen?",
        classification: "error",
        whyAr: "helfen يطلب هنا مكمّلاً في Dativ. لا تستبدل mir بـmich اعتماداً على ترجمة «تساعدني» وحدها.",
      },
      {
        wrong: "Es gibt der Park.",
        right: "Es gibt einen Park.",
        classification: "error",
        whyAr: "في هذا الإطار نستخدم الاسم في Akkusativ؛ مع ein واسم مذكر مفرد تكون الصيغة einen Park.",
      },
      {
        wrong: "Es gibt keinen Automat.",
        right: "Es gibt keinen Automaten.",
        classification: "error",
        whyAr: "Automat اسم مذكر ضعيف: den Automaten في Akkusativ. يُحفظ هذا الاسم بصيغته الخاصة، ولا تُعمّم النهاية على سائر الأسماء.",
      },
      {
        wrong: "القول إن صيغة Euro واحدة في كل سياق جمع.",
        right: "die Euros في جمع الاسم، لكن عشرة يورو: 10 Euro.",
        classification: "contextual-alternative",
        whyAr: "Duden يورد الجمع Euros مع أداة التعريف، ويورد أيضاً كتابة المبالغ مثل 30 Euro بلا s. التمرين r3 يقيس جمع الاسم، لا كتابة المبلغ.",
      },
      {
        wrong: "bar تعني «حانة» دائماً.",
        right: "bar zahlen = يدفع نقداً؛ die Bar = الحانة.",
        classification: "error",
        whyAr: "الحرف الكبير والجنس النحوي والسياق تميّز الاسم die Bar عن الصفة bar في سياق الدفع. ليست الكلمتان استعمالاً واحداً.",
      },
    ]);
    expect(lessonA207.fehlerUndTipps?.eselsbruecken).toEqual([
      "es gibt + Akkusativ؛ في السؤال ابدأ بالفعل: Gibt es …?",
      "احفظ الفعل مع المتمم: sehen + dich، helfen + dir، gehören + ihm.",
      "abheben ينفصل في الجملة الرئيسية: Ich hebe Geld ab؛ überweisen لا ينفصل: Ich überweise Geld.",
    ]);
    expect(lessonA207.fehlerUndTipps?.culturalNote).toEqual({
      title: "النقد والبطاقات: معلومة محددة لا تعميم ثقافي",
      content:
        "في دراسة Bundesbank لسلوك الدفع في ألمانيا عام 2023، سُدّد نقداً 51% من المعاملات المسجلة في نقاط البيع، واستخدمت بطاقة الخصم في 27% منها بحسب العدد؛ ظل النقد الأكثر استخداماً في هذه العينة، مع استمرار اتجاه تناقصه. هذه لقطة زمنية لبيانات ألمانيا ولا تثبت أن الألمان يفضّلون النقد أكثر من كل الأوروبيين. قد تختلف وسائل الدفع المقبولة بين المتاجر، فاقرأ اللافتة أو اسأل. إذا قصدت نظام البطاقة الألماني المحدد فـgirocard أدق؛ أما Bankkarte فلفظ أعم، ولا تخلطها تلقائياً مع Kreditkarte.",
    });

    expect(ids(lessonA207.flashcards)).toEqual(
      Array.from({ length: 12 }, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(
      lessonA207.flashcards.map((card) => [card.id, card.de, card.ar, card.example, card.exampleAr, card.level]),
    ).toEqual([
      ["fc1", "das Konto", "الحساب المصرفي", "Ich eröffne ein Konto.", "أفتح حساباً.", "A2"],
      ["fc2", "das Geld", "المال", "Ich brauche Geld.", "أحتاج إلى مال.", "A2"],
      ["fc3", "überweisen", "يحوّل مالاً إلى حساب", "Ich überweise das Geld auf dein Konto.", "أحوّل المال إلى حسابك.", "A2"],
      ["fc4", "bar bezahlen", "يدفع نقداً", "Ich bezahle bar.", "أدفع نقداً.", "A2"],
      ["fc5", "der Geldautomat", "الصراف الآلي", "Wo ist der Geldautomat?", "أين يوجد الصراف الآلي؟", "A2"],
      ["fc6", "es gibt", "يوجد/هناك؛ يتبعه الاسم في Akkusativ", "Es gibt eine Bank in der Nähe.", "يوجد بنك قريب.", "A2"],
      ["fc7", "mich / dich / mir / dir", "صيغ ضمير ألمانية تُختار بحسب الفعل والحالة", "Ich sehe dich. Ich helfe dir.", "أراك. أساعدك.", "A2"],
      ["fc8", "die Bankkarte", "البطاقة المصرفية", "Ich bezahle mit meiner Bankkarte.", "أدفع ببطاقتي المصرفية.", "A2"],
      ["fc9", "abheben", "يسحب نقوداً من الحساب", "Ich hebe am Automaten Geld ab.", "أسحب المال من الصراف الآلي.", "A2"],
      ["fc10", "die Gebühr", "الرسم / رسوم الخدمة", "Wo finde ich die Gebühren?", "أين أجد معلومات الرسوم؟", "A2"],
      ["fc11", "die Übersicht", "ملخص المعلومات / جدول المعلومات", "Die Gebühren stehen in der Übersicht.", "الرسوم واردة في ملخص المعلومات.", "A2"],
      ["fc12", "das Kontomodell", "نموذج الحساب", "Es gibt zwei Kontomodelle.", "يوجد نموذجان للحساب.", "A2"],
    ],
    );

    expect(lessonA207.mediation).toEqual([
      {
        id: "med-a2-07-1",
        type: "simplify-announcement",
        titleAr: "لخّص تعليمات نموذج بنك افتراضي بالعربية",
        sourceDe:
          "Auszug aus einem fiktiven Bankformular: „Bitte füllen Sie den Antrag aus. Für die Identifizierung brauchen wir ein gültiges Ausweisdokument. Welche weiteren Unterlagen Sie vorlegen müssen, hängt vom Konto und Ihrer Situation ab. Fragen Sie bitte vorab bei der Bank nach.“",
        taskAr:
          "اشرح بالعربية ما تطلبه الاستمارة. ميّز بين وثيقة الهوية المذكورة وبين الوثائق الأخرى التي تختلف بحسب الحساب والحالة؛ لا تضف شروطاً غير مكتوبة ولا تستخدم بيانات شخصية حقيقية.",
        modelAnswerAr:
          "«يرجى تعبئة الطلب. يلزم تقديم وثيقة هوية صالحة لإثبات الهوية. أما الوثائق الأخرى فقد تختلف بحسب الحساب والحالة، لذا اسأل البنك مسبقاً.» هذه صياغة لتمرين، وليست قائمة شاملة أو نصيحة مالية.",
        keyPointsAr: [
          "ذكرت ضرورة تعبئة الطلب وتقديم وثيقة هوية صالحة في هذا المثال",
          "أوضحت أن الوثائق الأخرى تختلف بحسب الحساب والحالة",
          "أشرت إلى سؤال البنك مسبقاً بدلاً من تعميم متطلبات واحدة",
        ],
      },
    ]);

    expect(lessonA207.interaction).toHaveLength(1);
    const interaction = lessonA207.interaction?.[0];
    expect(interaction).toMatchObject({
      id: "int-a2-07-1",
      scenarioAr: "محاكاة حوار نصي عن عروض حساب خيالية؛ لا تُدخل أرقام حسابات أو بيانات شخصية حقيقية.",
      scenarioDe: "Ein Gespräch über ein erfundenes Kontoangebot.",
      strategyAr:
        "اطلب معلومات محددة أو توضيحاً. اختر رداً مناسباً؛ ويمكنك قراءته بصوت عالٍ للتدريب، لكن الاختيار النصي لا يقيس الكلام أو النطق ولا يصف شروط بنك حقيقي.",
    });
    expect(interaction?.rounds).toEqual([
      {
        speakerDe: "Guten Tag! Wie kann ich Ihnen helfen?",
        speakerAr: "مرحباً! كيف أستطيع مساعدتك؟",
        options: [
          {
            de: "Ich möchte ein Konto eröffnen. Welche Modelle gibt es?",
            ar: "أريد فتح حساب. ما النماذج المتاحة؟",
            best: true,
            replyDe: "In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
            replyAr: "في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
          },
          {
            de: "Ich möchte ein Konto eröffnen. Können Sie mir die Unterschiede erklären?",
            ar: "أريد فتح حساب. هل يمكنك شرح الفروق لي؟",
            best: true,
            replyDe: "Gern. In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
            replyAr: "بكل سرور. في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
          },
        ],
      },
      {
        speakerDe: "Welche Information möchten Sie zuerst?",
        speakerAr: "ما المعلومة التي تريد معرفتها أولاً؟",
        options: [
          {
            de: "Wie hoch ist die Gebühr für das Modell mit Karte?",
            ar: "كم يبلغ رسم النموذج ذي البطاقة؟",
            best: true,
            replyDe: "Das Modell mit Karte kostet in diesem Beispiel drei Euro pro Monat.",
            replyAr: "يكلف النموذج ذو البطاقة ثلاثة يورو شهرياً في هذا المثال.",
          },
          {
            de: "Wo finde ich die Öffnungszeiten der Filiale?",
            ar: "أين أجد ساعات عمل الفرع؟",
            best: true,
            replyDe: "Die Öffnungszeiten kann ich Ihnen gleich nennen.",
            replyAr: "يمكنني ذكر ساعات العمل لكم حالاً.",
          },
        ],
      },
    ]);
    expect(interaction?.rounds.every((round) => round.options.every((option) => option.best))).toBe(true);
    expect(lessonA207.lernziele.some((goal) => /Sprechen|Aussprache|sprechen|aussprechen/i.test(goal.de))).toBe(
      false,
    );
  });

  it("counts only correct exercise-result events from the assessed task interface as evidence", () => {
    const openingEvent: AnalyticsEvent = {
      type: "lesson-view",
      ts: 1,
      lessonId: lessonA207.id,
    };
    for (const goal of lessonA207.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA207.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA207.id, [openingEvent])).toBe("pending");
      const exerciseIds = goal.evidence?.exerciseIds ?? [];
      const correctEvents = exerciseIds.map((exerciseId) => goalEvent(goal.id, exerciseId, true));
      const wrongEvents = correctEvents.map((event) =>
        event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA207.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA207.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) =>
        index === 0 && event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA207.id, partlyWrong)).toBe("pending");
    }

    const esGibtGoal = lessonA207.lernziele.find((goal) => goal.id === "z1");
    if (!esGibtGoal) throw new Error("z1 must exist");
    const allEsGibtEvents = (esGibtGoal.evidence?.exerciseIds ?? []).map((exerciseId) =>
      goalEvent("z1", exerciseId, true),
    );
    const flowEvent = goalEvent("z1", "e1", true, "flow-practice:a2-07:e1");
    expect(
      getGoalEvidenceStatus(
        esGibtGoal,
        lessonA207.id,
        allEsGibtEvents.map((event) =>
          event.type === "exercise-result" && event.exerciseId === "e1" ? flowEvent : event,
        ),
      ),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(
        esGibtGoal,
        lessonA207.id,
        allEsGibtEvents.map((event) =>
          event.type === "exercise-result" && event.exerciseId === "e1"
            ? { ...event, taskId: "mini-test:a2-07:e1" }
            : event,
        ),
      ),
    ).toBe("pending");

    const listeningGoal = lessonA207.lernziele.find((goal) => goal.id === "z3");
    if (!listeningGoal) throw new Error("z3 must exist");
    const allListeningEvents = (listeningGoal.evidence?.exerciseIds ?? []).map((exerciseId) =>
      goalEvent("z3", exerciseId, true),
    );
    expect(getGoalEvidenceStatus(listeningGoal, lessonA207.id, allListeningEvents)).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(
        listeningGoal,
        lessonA207.id,
        allListeningEvents.map((event) =>
          event.type === "exercise-result" && event.exerciseId === "q1"
            ? {
                ...event,
                taskId: getListeningQuestionTaskId(lessonA207.id, "l1", "q1", true),
              }
            : event,
        ),
      ),
    ).toBe("pending");
  });
});
