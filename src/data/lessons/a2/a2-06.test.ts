import { describe, expect, it } from "vitest";

import { lessonA206 } from "@/data/lessons/a2/a2-06";
import { evaluateExercise, normalizeText } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "finde",
  r2: "أحب مشاهدة التلفاز.",
  e1: "kommt",
  e2: "dass",
  e8: "الدعاية / الإعلان",
  e11: "فريق إعداد مواد الصحيفة ومراجعتها",
  m1: "ist",
  m2: "dass",
  rq1: "Jeden Freitag.",
  rq2: "Sie finden, dass der Weg sicher ist.",
  rq3: "Man kann sie kostenlos herunterladen.",
  rq4: "Sie prüft jede Nachricht.",
  q1: "Im Fernsehen läuft zu viel Werbung.",
  q2: "im Internet",
  q3: "interessant",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["finde", "findest", "findet", "finden"],
  r2: [
    "أحب مشاهدة التلفاز.",
    "أحب قراءة الصحيفة.",
    "أحب الاستماع إلى الراديو.",
    "أحب كتابة رسالة إلكترونية.",
  ],
  e1: ["kommt", "kommen", "kommst", "komme"],
  e2: ["dass", "das", "weil", "wenn"],
  e8: ["الدعاية / الإعلان", "الأخبار", "الصحيفة", "الرأي"],
  e11: [
    "فريق إعداد مواد الصحيفة ومراجعتها",
    "جمهور القراء في المقهى",
    "المبنى الذي تجتمع فيه البلدية",
    "مسار مخصص للدراجات",
  ],
  m1: ["ist", "bin", "bist", "sind"],
  m2: ["dass", "das", "ob", "denn"],
  rq1: ["Jeden Montag.", "Jeden Freitag.", "Einmal im Monat.", "Nur im Sommer."],
  rq2: [
    "Sie finden, dass der Weg sicher ist.",
    "Sie finden, dass er zu teuer ist.",
    "Sie wollen, dass der Weg geschlossen wird.",
    "Sie möchten dort eine Zeitung verkaufen.",
  ],
  rq3: [
    "Man muss sie teuer kaufen.",
    "Man kann sie kostenlos herunterladen.",
    "Man muss Leyla anrufen.",
    "Sie ist nur im Café erhältlich.",
  ],
  rq4: [
    "Sie prüft jede Nachricht.",
    "Sie löscht jede Nachricht sofort.",
    "Sie schickt jede Nachricht an die Stadt.",
    "Sie liest jede Nachricht im Radio vor.",
  ],
  q1: [
    "Im Fernsehen läuft zu viel Werbung.",
    "Die Serien sind immer langweilig.",
    "Die Zeitung ist zu teuer.",
    "Das Internet ist zu langsam.",
  ],
  q2: ["im Internet", "in der Zeitung", "im Fernsehen", "im Radio"],
  q3: ["interessant", "langweilig", "kurz", "teuer"],
};

function allTasks(): Exercise[] {
  const reading = lessonA206.reading;
  if (!reading) throw new Error("A2-06 must keep its reviewed reading text");
  return [
    ...(lessonA206.review ?? []),
    ...lessonA206.practiceBank,
    ...lessonA206.miniTest,
    ...lessonA206.writing,
    ...reading.questions,
    ...lessonA206.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-06 task ${id} is missing`);
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
  const goal = lessonA206.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) =>
    candidate.endsWith(`:${exerciseId}`),
  );
  if (!acceptedTaskId) throw new Error(`A2-06 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA206.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-06 audited lesson", () => {
  it("keeps lesson order, a complete task inventory, and exact assessable goal evidence", () => {
    expect(lessonA206.id).toBe("a2-06");
    expect(lessonA206.unitId).toBe("a2-06");
    expect(lessonA206.order).toBe(1);
    expect(lessonA206.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z2",
      "z3",
      "z4",
      "z-reading",
    ]);
    expect(ids(lessonA206.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA206.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA206.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA206.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(lessonA206.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA206.listening.questions)).toEqual(["q1", "q2", "q3"]);
    expect(allTasks()).toHaveLength(32);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(32);
    expect("duration" in lessonA206).toBe(false);
    expect(lessonA206.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|\b\d+\s*دقيقة/i);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA206.practiceBank) {
      validTaskIds.add(`practice:${lessonA206.id}:${exercise.id}`);
    }
    // ordinary practice samples five random items; lesson-flow reveals only its first min(4, bank size).
    for (const exercise of lessonA206.practiceBank.slice(
      0,
      Math.min(4, lessonA206.practiceBank.length),
    )) {
      validTaskIds.add(`flow-practice:${lessonA206.id}:${exercise.id}`);
    }
    for (const exercise of lessonA206.miniTest) {
      validTaskIds.add(`mini-test:${lessonA206.id}:${exercise.id}`);
    }
    for (const exercise of lessonA206.writing) {
      validTaskIds.add(`writing:${lessonA206.id}:${exercise.id}`);
    }
    for (const question of lessonA206.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA206.reading?.id}:${question.id}`);
    }
    for (const question of lessonA206.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA206.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA206.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      expect(evidence?.completion).toBe("all-correct");
      expect(evidence?.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(
            lessonA206.practiceBank
              .slice(0, Math.min(4, lessonA206.practiceBank.length))
              .some((exercise) => exercise.id === exerciseId),
          ).toBe(true);
        }
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(
          true,
        );
      }
    }

    expect(lessonA206.lernziele.find((goal) => goal.id === "z1")?.evidence?.taskIds).toEqual([
      "practice:a2-06:e3",
      "flow-practice:a2-06:e3",
    ]);
    expect(lessonA206.lernziele.find((goal) => goal.id === "z3")?.evidence?.taskIds).toEqual([
      "mini-test:a2-06:m1",
      "mini-test:a2-06:m2",
      "mini-test:a2-06:m3",
      "mini-test:a2-06:m4",
      "mini-test:a2-06:m5",
    ]);
    expect(lessonA206.lernziele.find((goal) => goal.id === "z4")?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
    ]);
    expect(
      lessonA206.lernziele.find((goal) => goal.id === "z-reading")?.evidence?.taskIds,
    ).toEqual([
      "reading:read-a2-06:rq1",
      "reading:read-a2-06:rq2",
      "reading:read-a2-06:rq3",
      "reading:read-a2-06:rq4",
    ]);

    for (const question of lessonA206.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA206.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA206.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA206.id}:${question.itemId}:${question.id}`);
    }
    expect(
      lessonA206.lernziele.every(
        (goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")),
      ),
    ).toBe(true);
    expect(
      lessonA206.lernziele
        .flatMap((goal) => goal.evidence?.taskIds ?? [])
        .join(" "),
    ).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(
      lessonA206.lernziele.every((goal) => goal.evidence?.exerciseIds.length),
    ).toBe(true);
  });

  it("checks every multiple-choice key and every distractor in review, practice, reading, and listening", () => {
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
    expect(task("e2").instructionAr).toContain("لا سبباً أو شرطاً");
    expect(task("m2").instructionAr).toContain("لا سؤالاً غير مباشر أو سبباً");
  });

  it("checks every fill-blank key and rejects each offered alternative in its own blank", () => {
    const expectedKeys: Record<string, string[]> = {
      r3: ["Musik"],
      e6: ["glaube", "hoffe", "weiß"],
      e12: ["kannst"],
      w2: ["ist", "kommst"],
      m5: ["sind", "kommt"],
    };
    const expectedOptions: Record<string, string[][]> = {
      r3: [["Musik", "Zeitung", "Nachricht"]],
      e6: [
        ["glaube", "hoffe", "weiß"],
        ["glaube", "hoffe", "weiß"],
        ["glaube", "hoffe", "weiß"],
      ],
      e12: [["kannst", "kann", "können"]],
      w2: [
        ["ist", "sein", "sind"],
        ["kommst", "kommt", "kommen"],
      ],
      m5: [["sind", "ist", "sein"], ["kommt", "kommen", "kommst"]],
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
    const stanceExercise = task("e6");
    if (stanceExercise.type !== "fill-blank") throw new Error("e6 must be fill-blank");
    expect(stanceExercise.template).toContain("Ich möchte keinen Regen");
    expect(stanceExercise.template).toContain("Das ist mein Wunsch");
    expect(stanceExercise.template).toContain("in der Zeitung gelesen");
  });

  it("checks every match, ordering token set, correction option, transformation, and dictation", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id)).toEqual(["e3"]);
    const match = task("e3");
    if (match.type !== "matching") throw new Error("e3 must be matching");
    expect(match.pairs).toEqual([
      { left: "das Fernsehen", right: "التلفاز / وسيلة التلفزيون" },
      { left: "die Zeitung", right: "الصحيفة" },
      { left: "das Internet", right: "الإنترنت" },
      { left: "das Radio", right: "الراديو / الإذاعة" },
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
      e4: "Er glaubt, dass sie kommt.",
      e13: "Ich glaube, dass die Zeitung jeden Freitag erscheint.",
      m3: "Ich hoffe, dass du kommst.",
    };
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderings).sort());
    for (const [id, expected] of Object.entries(expectedOrderings)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word ordering`);
      expect(exercise.correctSentence, id).toBe(expected);
      expect(exercise.correctSentence).toContain(", dass");
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

    const expectedCorrections: Record<string, { wrong: string; correct: string; answer: string; options: string[] }> = {
      e5: {
        wrong: "Ich glaube, dass er kommt heute.",
        correct: "heute kommt",
        answer: "Ich glaube, dass er heute kommt.",
        options: ["heute kommt", "kommt heute", "heute kommt heute", "kommst heute"],
      },
      e9: {
        wrong: "Ich finde, dass der Artikel ist interessant.",
        correct: "interessant ist",
        answer: "Ich finde, dass der Artikel interessant ist.",
        options: ["interessant ist", "ist interessant", "interessant sein", "interessant bist"],
      },
      e14: {
        wrong: "Ich denke, dass du kannst den Artikel lesen.",
        correct: "den Artikel lesen kannst",
        answer: "Ich denke, dass du den Artikel lesen kannst.",
        options: [
          "den Artikel lesen kannst",
          "kannst den Artikel lesen",
          "den Artikel kannst lesen",
          "den Artikel lesen kann",
        ],
      },
      m4: {
        wrong: "Ich weiß dass die Zeitung heute erscheint.",
        correct: "weiß, dass",
        answer: "Ich weiß, dass die Zeitung heute erscheint.",
        options: ["weiß, dass", "weiß dass", "weiß dass,", "weiß, dass,"],
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
      e7: ["Ich denke, dass der Film gut ist"],
      w1: [
        "Ich glaube, dass die Nachrichten wichtig sind",
        "Ich denke, dass die Nachrichten wichtig sind",
        "Ich finde, dass die Nachrichten wichtig sind",
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
      expect(answers).toContain(exercise.sampleAnswer.replace(/[.]$/, ""));
      for (const answer of answers) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Falsche Antwort").isCorrect, id).toBe(false);
    }

    const expectedDictations: Record<string, string> = {
      e10: "Die Zeitung erscheint heute.",
      w3: "Die Nachrichten sind interessant.",
    };
    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, "Das ist eine andere Antwort.").isCorrect, id).toBe(false);
    }
  });

  it("checks the full reading text, aligned Arabic, glossary, four keys, and learner-facing details", () => {
    const reading = lessonA206.reading;
    if (!reading) throw new Error("A2-06 must keep its reading");
    expect(reading.id).toBe("read-a2-06");
    expect(reading.titleDe).toBe("Nachrichten aus dem Viertel");
    expect(reading.titleAr).toContain("نص تعليمي متخيّل");
    expect(reading.textType).toBe("artikel");
    expect(reading.paragraphs).toEqual([
      "Die kleine Zeitung „Unser Viertel“ erscheint jeden Freitag. Sie berichtet über neue Geschäfte, Veranstaltungen und Menschen aus der Stadt. Die Redakteurin Leyla sagt, dass viele Bewohner gern kurze Nachrichten über ihre Nachbarn lesen.",
      "In dieser Woche gibt es einen Bericht über einen neuen Fahrradweg. Einige Anwohner finden, dass der Weg sicher ist. Andere glauben, dass noch mehr Lampen nötig sind. Die Stadt möchte die Meinungen sammeln und später eine Entscheidung treffen.",
      "Leyla schreibt auch über ein Sommerfest am Samstag. Es beginnt um vier Uhr im Park; alle Familien sind willkommen. Die Zeitung kann man im Café lesen oder kostenlos auf der Internetseite herunterladen.",
      "Viele Menschen aus dem Viertel besuchen Veranstaltungen. Sie schreiben der Redaktion darüber und schicken einige Fotos. Dazu schreiben sie kurze Sätze über ihre Eindrücke. Leyla prüft jede Nachricht. Danach erscheint die Nachricht in der Zeitung. So finden auch Menschen ohne soziale Medien wichtige Informationen aus dem Viertel. Für die Zukunft plant die Zeitung außerdem eine Seite mit Tipps für Familien und Jugendliche.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "تصدر الصحيفة الصغيرة «حيّنا» كل يوم جمعة. وتنشر أخباراً عن المتاجر الجديدة والفعاليات والأشخاص في المدينة. تقول المحررة ليلى إن كثيراً من السكان يحبون قراءة أخبار قصيرة عن جيرانهم.",
      "يوجد هذا الأسبوع تقرير عن مسار جديد للدراجات. يرى بعض سكان المنطقة أن المسار آمن. ويعتقد آخرون أن هناك حاجة إلى مزيد من المصابيح. تريد المدينة جمع الآراء ثم اتخاذ قرار لاحقاً.",
      "وتكتب ليلى أيضاً عن مهرجان صيفي يوم السبت. يبدأ في الساعة الرابعة في الحديقة، وكل العائلات مرحب بها. ويمكن قراءة الصحيفة في المقهى أو تنزيلها مجاناً من الموقع الإلكتروني.",
      "يزور كثير من سكان الحي فعاليات. ويكتبون إلى هيئة التحرير عنها ويرسلون بعض الصور. ويضيفون جملاً قصيرة عن انطباعاتهم. تراجع ليلى كل خبر، ثم يظهر الخبر في الصحيفة. وهكذا يجد أشخاص لا يستخدمون وسائل التواصل معلومات مهمة عن الحي. وتخطط الصحيفة أيضاً لصفحة فيها نصائح للعائلات والشباب في المستقبل.",
    ]);
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    expect(reading.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(reading.glossary.map((entry) => entry.de)).toEqual([
      "erscheinen",
      "die Redakteurin",
      "der Bewohner",
      "der Anwohner",
      "der Fahrradweg",
      "nötig",
      "die Veranstaltung",
      "die Redaktion",
      "herunterladen",
      "der Eindruck",
    ]);
    const article = reading.paragraphs.join(" ").toLocaleLowerCase("de");
    for (const entry of reading.glossary) {
      expect(entry.ar.trim(), entry.de).not.toBe("");
      expect(entry.noteAr?.trim().length, entry.de).toBeGreaterThan(15);
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLocaleLowerCase("de");
      expect(article, entry.de).toContain(stem);
    }
    expect(reading.questions.map((question) => [question.id, question.paragraph])).toEqual([
      ["rq1", 1],
      ["rq2", 2],
      ["rq3", 3],
      ["rq4", 4],
    ]);
    expect(reading.questions.find((question) => question.id === "rq2")).toMatchObject({
      paragraph: 2,
      questionDe: "Wie finden einige Anwohner den neuen Fahrradweg?",
      correctIndex: 0,
    });
    expect(reading.questions.find((question) => question.id === "rq3")?.questionDe).toBe(
      "Wie kann man die Zeitung online bekommen?",
    );
    expect(reading.questions.find((question) => question.id === "rq4")?.questionDe).toBe(
      "Was macht Leyla zuerst mit jeder Nachricht?",
    );
    for (const question of reading.questions) {
      expect(question.options).toHaveLength(4);
      expect(question.questionAr?.trim().length).toBeGreaterThan(0);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(reading.paragraphs.length);
      const answer = question.options[question.correctIndex];
      if (answer.length > 45) expect(reading.paragraphs.join(" ")).not.toContain(answer);
    }
    expect(reading.redemittel).toEqual([
      { de: "Die Zeitung berichtet über …", ar: "تنشر الصحيفة أخباراً عن …" },
      { de: "Einige Anwohner finden, dass …", ar: "يرى بعض سكان المنطقة أن …" },
      { de: "Die Stadt möchte die Meinungen sammeln.", ar: "تريد المدينة جمع الآراء." },
      {
        de: "Man kann die Zeitung kostenlos herunterladen.",
        ar: "يمكن تنزيل الصحيفة مجاناً.",
      },
    ]);
    expect(reading.discussionAr?.length).toBeGreaterThanOrEqual(40);
    expect(reading.discussionAr).toContain("لا يُصحح آلياً");
    expect(reading.discussionAr).toContain("خبراً محلياً متخيلاً");
  });

  it("checks every listening line and translation, question key, and pre-transcript task identifier", () => {
    expect(lessonA206.listening.items.map((item) => [item.id, item.title, item.lines.length])).toEqual([
      ["l1", "آراء عن وسائل الإعلام", 7],
      ["l2", "اختيارات للقراءة", 4],
    ]);
    const expectedLines = [
      [
        "l1",
        [
          ["Mona", "Ich sehe jeden Tag fern. Ich finde, dass die Serien gut sind.", "أشاهد التلفاز كل يوم. أرى أن المسلسلات جيدة."],
          ["Karim", "Ich denke, dass im Fernsehen zu viel Werbung läuft.", "أظن أن في التلفاز إعلانات كثيرة جداً."],
          ["Mona", "Ja, aber ich lese auch die Zeitung.", "نعم، لكنني أقرأ الصحيفة أيضاً."],
          ["Karim", "Ich lese lieber Nachrichten im Internet. Ich finde, dass das Internet praktisch ist.", "أفضل قراءة الأخبار على الإنترنت. وأرى أن الإنترنت عملي."],
          ["Mona", "Das kann ich verstehen. Im Internet finde ich oft schnell Informationen.", "أتفهم ذلك. وغالباً ما أجد معلومات بسرعة على الإنترنت."],
          ["Karim", "Und soziale Medien? Ich glaube, dass sie viel Zeit kosten.", "وماذا عن وسائل التواصل؟ أعتقد أنها تستهلك وقتاً كثيراً."],
          ["Mona", "Ja, aber dort findet man auch nützliche Informationen.", "نعم، لكن المرء يجد فيها أيضاً معلومات مفيدة."],
        ],
      ],
      [
        "l2",
        [
          ["Lehrer", "Was liest du gern, Anna?", "ماذا تحبين أن تقرئي يا آنا؟"],
          ["Anna", "Ich lese gern die Zeitung. Ich finde, dass die Artikel interessant sind.", "أحب قراءة الصحيفة. وأرى أن المقالات ممتعة."],
          ["Lehrer", "Und du, Sami?", "وأنت يا سامي؟"],
          ["Sami", "Ich lese Nachrichten im Internet. Ich finde, dass das praktisch ist.", "أقرأ الأخبار على الإنترنت. وأجد ذلك عملياً."],
        ],
      ],
    ] as const;
    expect(
      lessonA206.listening.items.map((item) => [
        item.id,
        item.lines.map((line) => [line.speaker, line.de, line.ar]),
      ]),
    ).toEqual(expectedLines);
    expect(
      lessonA206.listening.items.every((item) =>
        item.lines.every((line) => line.speaker.trim() && line.de.trim() && line.ar.trim()),
      ),
    ).toBe(true);
    expect(lessonA206.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"],
      ["q2", "l1"],
      ["q3", "l2"],
    ]);
    expect(lessonA206.listening.questions.find((question) => question.id === "q2")?.questionDe).toBe(
      "Wo liest Karim lieber Nachrichten?",
    );
    expect(
      lessonA206.lernziele.find((goal) => goal.id === "z4")?.evidence?.taskIds,
    ).not.toContain("listening-transcript:a2-06:l1:q1");
    expect(lessonA206.lernziele.find((goal) => goal.id === "z4")?.ar).toContain(
      "قبل كشف التفريغ",
    );
  });

  it("checks theory claims, classifications, examples, pronunciation IPA, and all flashcards", () => {
    expect(ids(lessonA206.theory)).toEqual(["t1", "t2"]);
    expect(lessonA206.theory.map((block) => block.examples.length)).toEqual([6, 6]);
    expect(lessonA206.theory.map((block) => block.commonMistakes.length)).toEqual([3, 3]);
    for (const block of lessonA206.theory) {
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
            typeof mistake.classification === "string" &&
            ["error", "contextual-alternative", "pedagogical-simplification"].includes(
              mistake.classification,
            ),
        ),
      ).toBe(true);
    }
    expect(lessonA206.theory[0].commonMistakes.map((mistake) => mistake.classification)).toEqual([
      "error",
      "error",
      "contextual-alternative",
    ]);
    expect(lessonA206.theory[0].commonMistakes[2].whyAr).toContain("ليست خطأً عاماً");
    expect(lessonA206.theory[0].explanationAr).toContain("من دون dass");
    expect(lessonA206.theory[0].explanationAr).toContain("ولا تؤكد أن المجيء وقع فعلاً");
    expect(lessonA206.theory[0].relatedRuleComparison?.content).toContain("ob");
    expect(lessonA206.theory[1].relatedRuleComparison?.content).toContain("denn");
    expect(lessonA206.theory[1].explanationAr).toContain("Nachfeld");
    expect(lessonA206.theory[0].table?.rows).toHaveLength(6);
    expect(lessonA206.theory[1].table?.rows).toHaveLength(7);

    expect(lessonA206.pronunciation.items.map((item) => item.de)).toEqual([
      "die Zeitung",
      "das Fernsehen",
      "die Nachricht",
      "die Werbung",
      "das Radio",
      "die Meinung",
    ]);
    expect(
      lessonA206.pronunciation.items.map((item) => item.note.match(/IPA(?: للاسم| شائع)?: \[([^\]]+)\]/)?.[1]),
    ).toEqual([
      "ˈt͡saɪ̯tʊŋ",
      "ˈfɛʁnˌzeːən",
      "ˈnaːxˌʁɪçt",
      "ˈvɛʁbʊŋ",
      "ˈʁaːdi̯o",
      "ˈmaɪ̯nʊŋ",
    ]);
    expect(lessonA206.pronunciation.items[2].note).toContain("[x]");
    expect(lessonA206.pronunciation.items[2].note).toContain("[ç]");
    expect(lessonA206.pronunciation.items[4].note).toContain("إقليمياً");
    expect(lessonA206.pronunciation.tip).toContain("IPA");
    expect(lessonA206.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA206.pronunciation.shadowing?.[0].ar).toBe("أحب مشاهدة التلفاز.");
    expect(lessonA206.pronunciation.shadowing?.map((line) => line.de)).toEqual([
      "Ich sehe gern fern.",
      "Ich lese die Zeitung.",
      "Ich glaube, dass das stimmt.",
      "Die Nachrichten sind wichtig.",
    ]);

    expect(ids(lessonA206.flashcards)).toEqual(
      Array.from({ length: 12 }, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(lessonA206.flashcards).toEqual([
      { id: "fc1", de: "das Fernsehen", ar: "التلفاز / وسيلة التلفزيون", example: "Ich finde, dass das Fernsehen manchmal zu viel Werbung zeigt.", exampleAr: "أرى أن التلفاز يعرض أحياناً إعلانات كثيرة.", level: "A2" },
      { id: "fc2", de: "die Zeitung", ar: "الصحيفة", example: "Ich lese die Zeitung gern.", exampleAr: "أحب قراءة الصحيفة.", level: "A2" },
      { id: "fc3", de: "das Internet", ar: "الإنترنت", example: "Ich finde, dass das Internet praktisch ist.", exampleAr: "أرى أن الإنترنت عملي.", level: "A2" },
      { id: "fc4", de: "die Nachrichten", ar: "الأخبار", example: "Ich glaube, dass die Nachrichten wichtig sind.", exampleAr: "أعتقد أن الأخبار مهمة.", level: "A2" },
      { id: "fc5", de: "die Werbung", ar: "الدعاية / الإعلان", example: "Im Fernsehen läuft Werbung.", exampleAr: "تُعرض إعلانات في التلفاز.", level: "A2" },
      { id: "fc6", de: "dass", ar: "أنّ / أداة ربط", example: "Ich glaube, dass es stimmt.", exampleAr: "أعتقد أن ذلك صحيح.", level: "A2" },
      { id: "fc7", de: "Ich finde / glaube / denke", ar: "أرى / أعتقد / أظن", example: "Ich finde, dass der Artikel interessant ist.", exampleAr: "أرى أن المقال مثير للاهتمام.", level: "A2" },
      { id: "fc8", de: "die Meinung", ar: "الرأي", example: "Einige Anwohner haben verschiedene Meinungen.", exampleAr: "لدى بعض السكان آراء مختلفة.", level: "A2" },
      { id: "fc9", de: "der Artikel", ar: "المقال", example: "Ich finde, dass der Artikel interessant ist.", exampleAr: "أرى أن المقال مثير للاهتمام.", level: "A2" },
      { id: "fc10", de: "die Redaktion", ar: "هيئة التحرير", example: "Die Redaktion prüft jede Nachricht.", exampleAr: "تراجع هيئة التحرير كل خبر.", level: "A2" },
      { id: "fc11", de: "der Fahrradweg", ar: "مسار الدراجات", example: "Einige Anwohner finden, dass der Fahrradweg sicher ist.", exampleAr: "يرى بعض السكان أن مسار الدراجات آمن.", level: "A2" },
      { id: "fc12", de: "herunterladen", ar: "ينزّل من الإنترنت", example: "Man kann die Zeitung kostenlos herunterladen.", exampleAr: "يمكن تنزيل الصحيفة مجاناً.", level: "A2" },
    ]);
  });

  it("checks the cultural note, mediation, and each optional interaction response without claiming speaking evidence", () => {
    expect(lessonA206.fehlerUndTipps?.mistakes.map((item) => item.classification)).toContain(
      "pedagogical-simplification",
    );
    expect(lessonA206.fehlerUndTipps?.culturalNote).toEqual({
      title: "الإعلام وتمويله — معلومة محدودة",
      content:
        "يذكر موقع ARD أن البرنامج المشترك لـARD يعتمد أساساً على مساهمة البث، وأن إيرادات الإعلان جزء صغير من ميزانيته؛ كما أن الإعلانات التلفزيونية على Das Erste وZDF مقيّدة زمنياً وتنظيمياً. لذلك لا نقول إن كل الإعلام العام بلا إعلانات، ولا نعمم عادات القراءة أو تفضيلات صحيفة بعينها على جميع الناس. تتغير التفاصيل التنظيمية، وهذا مثال سياقي لا وصف ثابت لكل وسيلة إعلام.",
    });
    expect(lessonA206.mediation).toEqual([
      {
        id: "med-a2-06-1",
        type: "summarize-de-to-ar",
        titleAr: "لخّص خبراً افتراضياً بالعربية لصديق",
        sourceDe:
          "Die Stadt baut einen neuen Park. Die Bauarbeiten beginnen im Mai und dauern ein Jahr. Im Park gibt es später viele Bäume und einen Spielplatz.",
        taskAr:
          "انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا ستبني المدينة؟ متى تبدأ الأعمال وكم تستغرق؟ وماذا يوجد في الحديقة؟",
        modelAnswerAr:
          "«تبني المدينة حديقة جديدة. تبدأ أعمال البناء في مايو وتستغرق سنة. وستكون في الحديقة أشجار كثيرة وملعب.»",
        keyPointsAr: [
          "نقل فكرة بناء حديقة جديدة",
          "ذكر موعد بدء الأعمال (مايو) ومدتها (سنة)",
          "ذكر الأشجار والملعب",
        ],
      },
    ]);
    expect(lessonA206.interaction).toHaveLength(1);
    const task = lessonA206.interaction?.[0];
    expect(task?.rounds).toHaveLength(3);
    for (const round of task?.rounds ?? []) {
      expect(round.options).toHaveLength(2);
      expect(round.options.every((option) => option.best)).toBe(true);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(task?.scenarioDe).toBe("Ein Freund fragt nach deiner Meinung zu sozialen Medien.");
    expect(task?.strategyAr).toContain("لا تمثل قياساً لأداء كلامي أو نطق فعلي");
    expect(lessonA206.lernziele.some((goal) => /sprechen|aussprechen|telefonieren/i.test(goal.de))).toBe(false);
  });

  it("counts only correct events from the exact assessed task interface as evidence", () => {
    const openingEvent: AnalyticsEvent = {
      type: "lesson-view",
      ts: 1,
      lessonId: lessonA206.id,
    };
    for (const goal of lessonA206.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA206.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA206.id, [openingEvent])).toBe("pending");
      const exerciseIds = goal.evidence?.exerciseIds ?? [];
      const correctEvents = exerciseIds.map((exerciseId) =>
        goalEvent(goal.id, exerciseId, true),
      );
      const wrongEvents = correctEvents.map((event) =>
        event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA206.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA206.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) =>
        index === 0 && event.type === "exercise-result" ? { ...event, correct: false } : event,
      );
      expect(getGoalEvidenceStatus(goal, lessonA206.id, partlyWrong)).toBe("pending");
    }

    const vocabularyGoal = lessonA206.lernziele.find((goal) => goal.id === "z1");
    if (!vocabularyGoal) throw new Error("z1 must exist");
    expect(
      getGoalEvidenceStatus(
        vocabularyGoal,
        lessonA206.id,
        [goalEvent("z1", "e3", true, "flow-practice:a2-06:e3")],
      ),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(
        vocabularyGoal,
        lessonA206.id,
        [goalEvent("z1", "e3", true, "mini-test:a2-06:e3")],
      ),
    ).toBe("pending");

    const listeningGoal = lessonA206.lernziele.find((goal) => goal.id === "z4");
    if (!listeningGoal) throw new Error("z4 must exist");
    expect(
      getGoalEvidenceStatus(
        listeningGoal,
        lessonA206.id,
        [
          goalEvent(
            "z4",
            "q1",
            true,
            getListeningQuestionTaskId(lessonA206.id, "l1", "q1", true),
          ),
        ],
      ),
    ).toBe("pending");
  });
});
