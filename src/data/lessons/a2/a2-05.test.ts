import {describe, expect, it} from "vitest";

import {lessonA205} from "@/data/lessons/a2/a2-05";
import {evaluateExercise, normalizeText} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {getListeningQuestionTaskId} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "arbeite",
  r2: "nicht",
  e1: "war",
  e2: "hatten",
  e8: "السيد فيبر المحترم،",
  e11: "Die Kollegen waren gestern im Büro.",
  e12: "Mit freundlichen Grüßen",
  m1: "war",
  m2: "hattet",
  rq1: "Er war krank.",
  rq2: "Gestern um 10 Uhr im Raum 3.",
  rq3: "Die Notizen und die aktuelle Datei.",
  rq4: "Morgen um 11 Uhr.",
  q1: "Herr Schulz",
  q2: "Er ruft heute Nachmittag zurück.",
  q3: "Er war krank.",
  q4: "Eine E-Mail mit den Details.",
};

const expectedMultipleChoiceOptions: Record<string, string[]> = {
  r1: ["arbeite", "arbeitest", "arbeitet", "arbeiten"],
  r2: ["nicht", "kein", "keine", "keinen"],
  e1: ["war", "warst", "waren", "wart"],
  e2: ["hatten", "hatte", "hattest", "hattet"],
  e8: ["السيد فيبر المحترم،", "مرحباً يا فيبر!", "إلى اللقاء، سيد فيبر.", "نهارك سعيد يا زميل."],
  e11: [
    "Die Kollegen waren gestern im Büro.",
    "Die Kollegen war gestern im Büro.",
    "Frau Weber hatten einen Termin.",
    "Ich waren gestern krank.",
  ],
  e12: ["Mit freundlichen Grüßen", "Tschüss", "Bis dann, dein Sami", "Mach's gut"],
  m1: ["war", "warst", "waren", "wart"],
  m2: ["hattet", "hatte", "hatten", "hattest"],
  rq1: ["Er war krank.", "Er hatte Urlaub.", "Er hatte einen Termin.", "Er war im Ausland."],
  rq2: [
    "Gestern um 10 Uhr im Raum 3.",
    "Heute um 16 Uhr im Büro.",
    "Morgen um 11 Uhr in Raum 1.",
    "Am Montag um 9 Uhr im Raum 2.",
  ],
  rq3: [
    "Die Notizen und die aktuelle Datei.",
    "Nur eine Telefonnummer des Teams.",
    "Die Präsentation für nächste Woche.",
    "Die Rechnung für das Projekt.",
  ],
  rq4: ["Morgen um 11 Uhr.", "Heute um 10 Uhr.", "Morgen um 16 Uhr.", "Am Freitag um 9 Uhr."],
  q1: ["Herr Schulz", "Frau Weber", "Sami", "Karim"],
  q2: ["Er ruft heute Nachmittag zurück.", "Er schickt sofort einen Bericht.", "Er kommt morgen ins Büro.", "Er spricht mit Karim."],
  q3: ["Er war krank.", "Er hatte Urlaub.", "Er hatte einen anderen Termin.", "Er musste länger arbeiten."],
  q4: [
    "Eine E-Mail mit den Details.",
    "Eine Liste mit den Teilnehmern.",
    "Ein Protokoll vom letzten Monat.",
    "Seinen Bericht für das Projekt.",
  ],
};

const expectedFillBlankOptions: Record<string, string[][]> = {
  r3: [["am", "um", "im"], ["um", "am", "im"]],
  e6: [["war", "hatte"], ["war", "hatte"], ["waren", "hatten"]],
  e14: [["war", "waren", "hatte"], ["hatte", "hatten", "war"]],
  w2: [["war", "waren", "hatte"], ["war", "hatten", "hatte"], ["war", "warst", "wart"], ["hatte", "hatten", "hattest"]],
  m5: [["Einen Moment", "Guten Tag", "Auf Wiedersehen"], ["verbinde", "verbinden", "verbindest"], ["spreche", "verbinde", "hatte"]],
};

const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["am", "um"],
  e6: ["war", "hatte", "waren"],
  e14: ["war", "hatte"],
  w2: ["war", "hatten", "warst", "hatte"],
  m5: ["Einen Moment", "verbinde", "spreche"],
};

const expectedOrderingKeys: Record<string, string> = {
  e4: "Ich war gestern krank.",
  m3: "Anna hatte einen Termin.",
};

const expectedOrderingTokens: Record<string, string[]> = {
  e4: ["war", "Ich", "gestern", "krank", "."],
  m3: ["hatte", "einen", "Anna", "Termin", "."],
};

const expectedErrorCorrections: Record<string, string> = {
  e5: "waren",
  e9: "freundlichen",
  m4: "einen",
};

const expectedWrongSentences: Record<string, string> = {
  e5: "Wir war gestern im Büro.",
  e9: "Mit freundliche Grüßen",
  m4: "Ich hatte ein Termin.",
};

const expectedCorrectionOptions: Record<string, string[]> = {
  e5: ["waren", "warst", "wart", "war"],
  e9: ["freundlichen", "freundlich", "freundliches", "freundlicher"],
  m4: ["einen", "einem", "einer", "ein"],
};

const expectedTransformations: Record<string, string[]> = {
  e7: ["Ich war krank", "Ich war krank."],
  e13: ["Wir waren gestern im Büro.", "Wir waren gestern im Büro"],
  w1: ["Sehr geehrter Herr Ben Ali,"],
  w4: ["Mit freundlichen Grüßen"],
};

const expectedDictations: Record<string, string> = {
  e10: "Wir hatten gestern eine wichtige Besprechung.",
  w3: "Einen Moment bitte. Ich verbinde Sie.",
};

function reading() {
  const value = lessonA205.reading;
  if (!value) throw new Error("A2-05 must keep its reviewed reading text");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA205.review ?? []),
    ...lessonA205.practiceBank,
    ...lessonA205.miniTest,
    ...lessonA205.writing,
    ...reading().questions,
    ...lessonA205.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-05 task ${id} is missing`);
  return value;
}

function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean, taskIdOverride?: string): AnalyticsEvent {
  const goal = lessonA205.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!acceptedTaskId) throw new Error(`A2-05 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA205.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-05 audited lesson", () => {
  it("keeps the lesson inventory, A1 review references, and precise assessable goal evidence", () => {
    expect(lessonA205.id).toBe("a2-05");
    expect(lessonA205.order).toBe(1);
    expect(lessonA205.lernziele.map((goal) => goal.id)).toEqual(["z1", "z2", "z3", "z-reading", "z5"]);
    expect(ids(lessonA205.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA205.practiceBank)).toEqual(Array.from({length: 14}, (_, i) => `e${i + 1}`).sort());
    expect(ids(lessonA205.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA205.writing)).toEqual(["w1", "w2", "w3", "w4"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(ids(lessonA205.listening.questions)).toEqual(["q1", "q2", "q3", "q4"]);
    expect(allTasks()).toHaveLength(34);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(34);
    expect("duration" in lessonA205).toBe(false);

    const reviewInstructions = new Map((lessonA205.review ?? []).map((exercise) => [exercise.id, exercise.instructionAr]));
    expect(reviewInstructions.get("r1")).toContain("A1");
    expect(reviewInstructions.get("r1")).toContain("a1-10");
    expect(reviewInstructions.get("r2")).toContain("a1-10");
    expect(reviewInstructions.get("r3")).toContain("a1-09");
    expect(lessonA205.summary).not.toMatch(/Goethe-Zertifikat|Akkreditierung|vollständig|garantiert|\b\d+\s*Minuten/i);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA205.practiceBank) {
      validTaskIds.add(`practice:${lessonA205.id}:${exercise.id}`);
    }
    // ordinary practice takes a five-item random sample; lesson-flow reveals only its first min(4, bank size).
    for (const exercise of lessonA205.practiceBank.slice(0, Math.min(4, lessonA205.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA205.id}:${exercise.id}`);
    }
    for (const exercise of lessonA205.miniTest) validTaskIds.add(`mini-test:${lessonA205.id}:${exercise.id}`);
    for (const exercise of lessonA205.writing) validTaskIds.add(`writing:${lessonA205.id}:${exercise.id}`);
    for (const question of reading().questions) validTaskIds.add(`reading:${reading().id}:${question.id}`);
    for (const question of lessonA205.listening.questions) {
      validTaskIds.add(getListeningQuestionTaskId(lessonA205.id, question.itemId, question.id, false));
    }

    for (const goal of lessonA205.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have evidence`).toBeDefined();
      expect(evidence?.completion).toBe("all-correct");
      expect(evidence?.labelAr.trim().length).toBeGreaterThan(30);
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(lessonA205.practiceBank.slice(0, Math.min(4, lessonA205.practiceBank.length)).some((exercise) => exercise.id === exerciseId)).toBe(true);
        }
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    expect(lessonA205.lernziele.find((goal) => goal.id === "z1")?.evidence?.taskIds).toEqual([
      "practice:a2-05:e3",
      "flow-practice:a2-05:e3",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z2")?.evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l1:q2",
      "listening:l2:q3",
      "listening:l2:q4",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z3")?.evidence?.taskIds).toEqual([
      "mini-test:a2-05:m1",
      "mini-test:a2-05:m2",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z-reading")?.evidence?.taskIds).toEqual([
      "reading:read-a2-05:rq1",
      "reading:read-a2-05:rq2",
      "reading:read-a2-05:rq3",
      "reading:read-a2-05:rq4",
    ]);
    expect(lessonA205.lernziele.find((goal) => goal.id === "z5")?.evidence?.taskIds).toEqual([
      "writing:a2-05:w1",
      "writing:a2-05:w4",
    ]);

    for (const question of lessonA205.listening.questions) {
      expect(getListeningQuestionTaskId(lessonA205.id, question.itemId, question.id, false)).toBe(`listening:${question.itemId}:${question.id}`);
      expect(getListeningQuestionTaskId(lessonA205.id, question.itemId, question.id, true)).toBe(`listening-transcript:${lessonA205.id}:${question.itemId}:${question.id}`);
    }
    expect(lessonA205.lernziele.every((goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")))).toBe(true);
    expect(lessonA205.lernziele.flatMap((goal) => goal.evidence?.taskIds ?? []).join(" ")).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(lessonA205.lernziele.every((goal) => goal.evidence?.exerciseIds.length)).toBe(true);
  });

  it("checks every multiple-choice key and each distractor individually", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(Object.keys(expectedMultipleChoiceKeys).sort());
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      expect(exercise.options, `${id} options and individual distractors`).toEqual(expectedMultipleChoiceOptions[id]);
      expect(exercise.options[exercise.correctIndex], id).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, id).toBe(exercise.options.length);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option ${index + 1}`).toBe(index === exercise.correctIndex);
      }
      expect(exercise.explanation.trim().length, `${id} explanation`).toBeGreaterThan(20);
    }
    const readingQuestion = task("rq2");
    if (readingQuestion.type !== "multiple-choice") throw new Error("rq2 must remain multiple choice");
    expect(readingQuestion.instructionAr).toContain("أين ومتى");
    const listeningQuestion = task("q1");
    if (listeningQuestion.type !== "multiple-choice") throw new Error("q1 must remain multiple choice");
    expect(listeningQuestion.questionDe).toBe("Wer ist gerade in einer Besprechung?");
  });

  it("checks every fill-blank key and rejects each offered alternative in its own blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedFillBlankKeys).sort());
    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
      expect(exercise.blanks.map((blank) => blank.options ?? []), `${id} options per blank`).toEqual(expectedFillBlankOptions[id]);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      exercise.blanks.forEach((blank, blankIndex) => {
        const options = blank.options ?? [];
        expect(options, `${id} blank ${blankIndex + 1}`).toContain(blank.correct);
        expect(new Set(options).size, `${id} blank ${blankIndex + 1}`).toBe(options.length);
        for (const distractor of options.filter((option) => option !== blank.correct)) {
          const attempt = [...expected];
          attempt[blankIndex] = distractor;
          expect(evaluateExercise(exercise, attempt).isCorrect, `${id} blank ${blankIndex + 1}: ${distractor}`).toBe(false);
        }
      });
      if (id === "m5") {
        expect(exercise.template).toBe("___ bitte! · Ich ___ Sie. · Mit wem ___ ich, bitte?");
        expect((exercise.template.match(/___/g) ?? [])).toHaveLength(3);
      } else expect((exercise.template.match(/___/g) ?? [])).toHaveLength(exercise.blanks.length);
    }
    const pronounContext = task("w2");
    if (pronounContext.type !== "fill-blank") throw new Error("w2 must remain fill-blank");
    expect(pronounContext.template).toContain("Frau Weber");
    expect(pronounContext.template).not.toContain("Sie ___");
  });

  it("checks every matching pair and rejects each pair when altered", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id).sort()).toEqual(["e3"]);
    const exercise = task("e3");
    if (exercise.type !== "matching") throw new Error("e3 must remain matching");
    expect(exercise.pairs).toEqual([
      {left: "Mit wem spreche ich, bitte?", right: "مع من أتحدث، من فضلك؟"},
      {left: "Einen Moment bitte.", right: "لحظة، من فضلك."},
      {left: "Ich verbinde Sie.", right: "سأحوّلك إلى الجهة المطلوبة."},
      {left: "Sie sind falsch verbunden.", right: "يبدو أن الاتصال وصل إلى جهة غير مقصودة."},
    ]);
    expect(evaluateExercise(exercise, exercise.pairs).isCorrect).toBe(true);
    expect(new Set(exercise.pairs.map((pair) => normalizeText(pair.left))).size).toBe(exercise.pairs.length);
    expect(new Set(exercise.pairs.map((pair) => normalizeText(pair.right))).size).toBe(exercise.pairs.length);
    for (let index = 0; index < exercise.pairs.length; index += 1) {
      const altered = exercise.pairs.map((pair, pairIndex) => ({
        left: pair.left,
        right: pairIndex === index ? `incorrect-${index}` : pair.right,
      }));
      expect(evaluateExercise(exercise, altered).isCorrect, `e3 pair ${index + 1}`).toBe(false);
    }
  });

  it("checks every ordering, correction, transformation, and dictation key", () => {
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderingKeys).sort());
    for (const [id, expected] of Object.entries(expectedOrderingKeys)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} shuffled tokens`).toEqual(expectedOrderingTokens[id]);
      expect(exercise.correctSentence, id).toBe(expected);
      const tokens = exercise.tokens.flatMap((token) => normalizeText(token).split(" ")).filter(Boolean).sort();
      const sentenceTokens = normalizeText(expected).split(" ").filter(Boolean).sort();
      expect(tokens, `${id} token inventory`).toEqual(sentenceTokens);
      expect(evaluateExercise(exercise, expected.split(/\s+/)).isCorrect, id).toBe(true);
      const wrongOrder = expected.split(/\s+/);
      [wrongOrder[0], wrongOrder[1]] = [wrongOrder[1], wrongOrder[0]];
      expect(evaluateExercise(exercise, wrongOrder).isCorrect, `${id} wrong order`).toBe(false);
    }

    const corrections = allTasks().filter((item) => item.type === "error-correction");
    expect(corrections.map((item) => item.id).sort()).toEqual(Object.keys(expectedErrorCorrections).sort());
    const correctedSentences: Record<string, string> = {
      e5: "Wir waren gestern im Büro.",
      e9: "Mit freundlichen Grüßen",
      m4: "Ich hatte einen Termin.",
    };
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, id).toBe(expectedWrongSentences[id]);
      expect(exercise.options, `${id} correction options`).toEqual(expectedCorrectionOptions[id]);
      expect(exercise.wrongSentence).toContain(exercise.wrongWord);
      expect(exercise.wrongSentence.split(exercise.wrongWord)).toHaveLength(2);
      expect(exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord), id).toBe(correctedSentences[id]);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(option === expected);
      }
    }

    const transformations = allTasks().filter((item) => item.type === "transformation");
    expect(transformations.map((item) => item.id).sort()).toEqual(Object.keys(expectedTransformations).sort());
    for (const [id, answers] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, id).toEqual(answers);
      expect(answers).toContain(exercise.sampleAnswer);
      for (const answer of answers) expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      expect(evaluateExercise(exercise, "Das ist eine falsche Antwort.").isCorrect, id).toBe(false);
    }

    const dictations = allTasks().filter((item) => item.type === "dictation");
    expect(dictations.map((item) => item.id).sort()).toEqual(Object.keys(expectedDictations).sort());
    for (const [id, expected] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, id).toBe(expected);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      expect(evaluateExercise(exercise, "Eine falsche Antwort.").isCorrect, id).toBe(false);
    }
  });

  it("checks the full reading text, aligned translation, glossary, Redemittel, and all comprehension keys", () => {
    const text = reading();
    expect(text.id).toBe("read-a2-05");
    expect(text.textType).toBe("email");
    expect(text.titleDe).toBe("Informationen zur Besprechung");
    expect(text.paragraphs).toEqual([
      "Betreff: Informationen zur Besprechung\nSehr geehrte Frau Weber,\nich war gestern nicht im Büro. Ich war krank und hatte Fieber. Deshalb konnte ich nicht zur Besprechung kommen. Am Abend habe ich Herrn Schulz eine Nachricht geschickt. Heute bin ich wieder im Büro.",
      "Herr Schulz hat mir geantwortet: Die Besprechung war gestern um 10 Uhr im Raum 3. Anna hatte die Zahlen für den Bericht vorbereitet. Karim hatte erste Folien für die Präsentation gemacht. Das Team hatte eine gute Idee für das neue Projekt. Die aktuelle Datei lag aber noch auf dem Computer von Herrn Schulz.",
      "Ich möchte den Bericht heute fertig schreiben. Bitte schicken Sie mir die Notizen und die aktuelle Datei per E-Mail. Ich habe den ersten Teil schon geschrieben. Für den zweiten Teil brauche ich die Zahlen aus der Besprechung. Wenn etwas fehlt, rufe ich Sie an.",
      "Haben Sie morgen um 11 Uhr Zeit für ein kurzes Gespräch? Wenn der Termin nicht passt, nennen Sie mir bitte einen anderen Zeitpunkt. Ich bin heute bis 16 Uhr im Büro und kann danach auch telefonieren.\nVielen Dank für Ihre Hilfe.\nMit freundlichen Grüßen\nSami Ben Ali",
    ]);
    expect(text.paragraphsAr).toEqual([
      "الموضوع: معلومات عن الاجتماع\nالسيدة فيبر المحترمة،\nلم أكن أمس في المكتب. كنت مريضاً وكانت لدي حمى، لذلك لم أستطع الحضور إلى الاجتماع. أرسلت إلى السيد شولتس رسالة مساءً. أنا اليوم في المكتب مجدداً.",
      "أجابني السيد شولتس: كان الاجتماع أمس الساعة العاشرة في الغرفة 3. كانت آنا قد أعدّت الأرقام الخاصة بالتقرير، وكان كريم قد أعدّ الشرائح الأولى للعرض. كانت لدى الفريق فكرة جيدة للمشروع الجديد، لكن النسخة الحالية من الملف بقيت على حاسوب السيد شولتس.",
      "أودّ إنهاء التقرير اليوم. من فضلك أرسل إليّ الملاحظات والملف الحالي بالبريد الإلكتروني. كتبت الجزء الأول بالفعل، وأحتاج إلى أرقام الاجتماع للجزء الثاني. إذا كان هناك شيء ناقص فسأتصل بك.",
      "هل لديك وقت غداً الساعة الحادية عشرة لاجتماع قصير؟ إذا لم يناسبك الموعد، فاذكري لي وقتاً آخر من فضلك. سأكون في المكتب اليوم حتى الرابعة، ويمكنني التحدث هاتفياً بعد ذلك أيضاً.\nشكراً جزيلاً على مساعدتك.\nمع خالص التحيات\nسامي بن علي",
    ]);
    expect(text.paragraphs.length).toBe(4);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphs.join(" ").split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(text.glossary.map((entry) => entry.de)).toEqual([
      "die Besprechung", "das Fieber", "die Nachricht", "die Zahl", "der Bericht",
      "die Folie", "die Präsentation", "die Datei", "die Notiz", "der Zeitpunkt",
    ]);
    const story = text.paragraphs.join(" ").toLowerCase();
    for (const entry of text.glossary) {
      expect(entry.de.trim(), entry.de).not.toBe("");
      expect(entry.ar.trim(), entry.de).not.toBe("");
      expect(entry.noteAr?.trim().length, entry.de).toBeGreaterThan(20);
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(story, `${entry.de} should occur in the reading`).toContain(stem);
    }
    expect(text.redemittel).toEqual([
      {de: "Sehr geehrte Frau Weber,", ar: "السيدة فيبر المحترمة،"},
      {de: "Bitte schicken Sie mir die Notizen per E-Mail.", ar: "من فضلك أرسل إليّ الملاحظات بالبريد الإلكتروني."},
      {de: "Haben Sie morgen um 11 Uhr Zeit?", ar: "هل لديك وقت غداً الساعة الحادية عشرة؟"},
      {de: "Mit freundlichen Grüßen", ar: "مع خالص التحيات."},
    ]);
    expect(text.discussionAr?.length).toBeGreaterThan(40);
    expect(text.discussionAr).toContain("لا يُعد دليلاً");
    expect(text.questions.map((question) => [question.id, question.paragraph])).toEqual([
      ["rq1", 1], ["rq2", 2], ["rq3", 3], ["rq4", 4],
    ]);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(text.paragraphs.length);
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.questionAr?.trim().length).toBeGreaterThan(0);
      expect(question.explanation.length).toBeGreaterThanOrEqual(20);
    }
    expect(text.paragraphs[0]).toContain("Sehr geehrte Frau Weber,\nich war");
    expect(text.paragraphs[3]).toContain("Mit freundlichen Grüßen\nSami Ben Ali");
    expect(text.paragraphs[3]).not.toContain("Mit freundlichen Grüßen,");
    for (const question of text.questions) {
      const answer = question.options[question.correctIndex];
      if (answer.length > 45) expect(text.paragraphs.join(" ")).not.toContain(answer);
    }
  });

  it("checks each listening dialogue line, translation, question target, and transcript gate", () => {
    expect(lessonA205.listening.items.map((item) => [item.id, item.title, item.lines.length])).toEqual([
      ["l1", "ترك رسالة هاتفية", 5],
      ["l2", "Besprechung und E-Mail", 5],
    ]);
    const expectedDialogues = [
      ["l1", [
        ["Frau Weber", "Firma Weber, Anna Weber, guten Tag!", "شركة فيبر، آنا فيبر، نهارك سعيد!"],
        ["Sami", "Guten Tag, hier ist Sami Ben Ali. Kann ich mit Herrn Schulz sprechen?", "نهارك سعيد، معك سامي بن علي. هل يمكنني التحدث مع السيد شولتس؟"],
        ["Frau Weber", "Herr Schulz ist gerade in einer Besprechung. Möchten Sie eine Nachricht hinterlassen?", "السيد شولتس في اجتماع الآن. هل ترغب في ترك رسالة؟"],
        ["Sami", "Ja, bitte sagen Sie ihm, dass ich heute Nachmittag zurückrufe.", "نعم، من فضلك أخبريه أنني سأتصل مجدداً بعد ظهر اليوم."],
        ["Frau Weber", "Gern. Ich richte es aus.", "بكل سرور. سأبلغه ذلك."],
      ]],
      ["l2", [
        ["Anna", "Hallo Karim! Wir hatten gestern eine wichtige Besprechung.", "مرحباً كريم! كان لدينا أمس اجتماع مهم."],
        ["Karim", "Ach ja? Ich war krank und konnte nicht kommen.", "آه حقاً؟ كنت مريضاً ولم أستطع الحضور."],
        ["Anna", "Kein Problem. Wir hatten eine gute Idee für das Projekt.", "لا مشكلة. كانت لدينا فكرة جيدة للمشروع."],
        ["Karim", "Super! Schick mir bitte eine E-Mail mit den Details.", "رائع! أرسلي لي بريداً إلكترونياً بالتفاصيل من فضلك."],
        ["Anna", "Mache ich sofort.", "سأفعل ذلك فوراً."],
      ]],
    ] as const;
    expect(lessonA205.listening.items.map((item) => [item.id, item.lines.map((line) => [line.speaker, line.de, line.ar])])).toEqual(expectedDialogues);
    expect(lessonA205.listening.items.every((item) => item.lines.every((line) => line.de.trim() && line.ar.trim() && line.speaker.trim()))).toBe(true);
    expect(lessonA205.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"], ["q4", "l2"],
    ]);
    expect(lessonA205.listening.questions.find((question) => question.id === "q1")?.questionDe).toBe("Wer ist gerade in einer Besprechung?");
    expect(lessonA205.listening.questions.find((question) => question.id === "q2")?.explanation).toContain("بعد ظهر اليوم");
    expect(lessonA205.listening.questions.find((question) => question.id === "q3")?.questionDe).toBe("Warum konnte Karim nicht kommen?");
    expect(lessonA205.listening.questions.find((question) => question.id === "q4")?.questionDe).toBe("Was soll Anna Karim schicken?");
    expect(getListeningQuestionTaskId(lessonA205.id, "l1", "q1", true)).not.toBe("listening:l1:q1");
    expect(lessonA205.lernziele.find((goal) => goal.id === "z2")?.evidence?.taskIds).not.toContain("listening-transcript:a2-05:l1:q1");
  });

  it("checks both theory blocks, contextual/error labels, pronunciation notes, cards, and optional tasks", () => {
    expect(ids(lessonA205.theory)).toEqual(["t1", "t2"]);
    expect(lessonA205.theory.map((block) => block.examples.length)).toEqual([8, 8]);
    expect(lessonA205.theory.map((block) => block.commonMistakes.length)).toEqual([3, 4]);
    for (const block of lessonA205.theory) {
      expect(block.explanationAr.length).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).length).toBeGreaterThanOrEqual(2);
      expect(block.whyAr.length).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length).toBeGreaterThanOrEqual(250);
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThan(100);
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(block.commonMistakes.every((mistake) => mistake.wrong && mistake.right && mistake.whyAr.length > 60 && mistake.classification)).toBe(true);
      if (block.table) {
        expect(block.table.rows.length).toBe(block.id === "t1" ? 6 : 8);
        for (const row of block.table.rows) expect(row.cells).toHaveLength(block.table.columns.length - 1);
      }
    }
    expect(lessonA205.theory[0].table?.rows.map((row) => [row.label, ...row.cells])).toEqual([
      ["ich", "war", "hatte", "Ich war gestern im Büro."],
      ["du", "warst", "hattest", "Du warst krank und hattest Fieber."],
      ["er/sie/es", "war", "hatte", "Anna war krank und hatte Fieber."],
      ["wir", "waren", "hatten", "Wir waren in einer Besprechung."],
      ["ihr", "wart", "hattet", "Ihr wart spät und hattet wenig Zeit."],
      ["sie/Sie", "waren", "hatten", "Die Kollegen waren im Büro."],
    ]);
    expect(lessonA205.theory.map((block) => block.examples.map((example) => [example.de, example.ar]))).toEqual([
      [
        ["Ich war gestern im Büro.", "كنت أمس في المكتب."],
        ["Du hattest am Montag einen Termin.", "كان لديك موعد يوم الاثنين."],
        ["Anna war krank und hatte Fieber.", "كانت آنا مريضة وكان لديها حمى."],
        ["Wir waren in einer Besprechung.", "كنا في اجتماع."],
        ["Ihr hattet viel Arbeit.", "كان لديكم عمل كثير."],
        ["Die Kollegen hatten keine Zeit.", "لم يكن لدى الزملاء وقت."],
        ["Herr Schulz war heute Morgen im Büro.", "كان السيد شولتس في المكتب هذا الصباح."],
        ["Ich bin gestern krank gewesen.", "كنت مريضاً أمس؛ هذه صيغة Perfekt صحيحة أيضاً."],
      ],
      [
        ["Firma Weber, Anna Weber, guten Tag!", "شركة فيبر، آنا فيبر، نهارك سعيد!"],
        ["Guten Tag, hier ist Sami Ben Ali.", "نهارك سعيد، معك سامي بن علي."],
        ["Mit wem spreche ich, bitte?", "مع من أتحدث، من فضلك؟"],
        ["Einen Moment bitte. Ich verbinde Sie.", "لحظة، من فضلك. سأحوّلك إلى الجهة المطلوبة."],
        ["Kann ich eine Nachricht hinterlassen?", "هل يمكنني ترك رسالة؟"],
        ["Sehr geehrte Frau Weber,\nvielen Dank für Ihre Nachricht.", "السيدة فيبر المحترمة،\nشكراً جزيلاً على رسالتك."],
        ["Mit freundlichen Grüßen\nAnna Weber", "مع خالص التحيات\nآنا فيبر"],
        ["Hallo Anna,\nhast du heute Zeit?", "مرحباً آنا،\nهل لديك وقت اليوم؟ (مثال غير رسمي لزميلة معروفة)"],
      ],
    ]);
    expect(lessonA205.theory.map((block) => block.commonMistakes.map((item) => [item.wrong, item.right, item.classification]))).toEqual([
      [
        ["Ich war gestern im Büro gewesen. (أصف أمس فقط، بلا نقطة ماضية أسبق)", "Ich war gestern im Büro.", "contextual-alternative"],
        ["Wir war gestern im Büro.", "Wir waren gestern im Büro.", "error"],
        ["Ich hatte ein Termin.", "Ich hatte einen Termin.", "error"],
      ],
      [
        ["Hallo Herr Weber, (في أول رسالة إلى شخص غير معروف)", "Sehr geehrter Herr Weber,", "contextual-alternative"],
        ["Mit freundliche Grüßen", "Mit freundlichen Grüßen", "error"],
        ["Mit freundlichen Grüßen,\nAnna Weber", "Mit freundlichen Grüßen\nAnna Weber", "error"],
        ["Ich verbinden Sie.", "Ich verbinde Sie.", "error"],
      ],
    ]);
    expect(lessonA205.theory[0].commonMistakes[0].classification).toBe("contextual-alternative");
    expect(lessonA205.theory[0].commonMistakes[0].whyAr).toContain("ليست صيغة مستحيلة");
    expect(lessonA205.theory[0].commonMistakes.slice(1).every((item) => item.classification === "error")).toBe(true);
    expect(lessonA205.theory[1].commonMistakes[0].classification).toBe("contextual-alternative");
    expect(lessonA205.theory[1].commonMistakes.slice(1).every((item) => item.classification === "error")).toBe(true);
    expect(lessonA205.theory[0].examples.find((example) => example.de === "Ich bin gestern krank gewesen.")).toBeDefined();
    expect(lessonA205.theory[0].relatedRuleComparison?.content).toContain("Plusquamperfekt");
    expect(lessonA205.theory[0].comparisonWithArabic).toContain("لا تعني أن sein يقابل دائماً");
    expect(lessonA205.theory[1].explanationAr).toContain("Hallo قد تناسب زميلاً تعرفه");
    expect(lessonA205.theory[1].examples.find((example) => example.de === "Mit freundlichen Grüßen\nAnna Weber")).toBeDefined();

    expect(lessonA205.pronunciation.items.map((item) => item.de)).toEqual([
      "das Büro", "anrufen", "der Kollege", "die Besprechung", "die Nachricht", "verbinden",
    ]);
    expect(lessonA205.pronunciation.items.map((item) => item.note.match(/\[[^\]]+\]/)?.[0])).toEqual([
      "[byˈʀoː]", "[ˈanʀuːfn̩]", "[kɔˈleːɡə]", "[bəˈʃpʀɛçʊŋ]", "[ˈnaːxʁɪçt]", "[fɛɐ̯ˈbɪndn̩]",
    ]);
    expect(lessonA205.pronunciation.items.find((item) => item.de === "die Nachricht")?.note).toContain("ch بعد a هو [x]");
    expect(lessonA205.pronunciation.items.find((item) => item.de === "die Nachricht")?.note).toContain("بعد i هو [ç]");
    expect(lessonA205.pronunciation.items.find((item) => item.de === "die Besprechung")?.note).toContain("لا يطابق تماماً شيناً أو خاءً عربية");
    expect(lessonA205.pronunciation.tip).toContain("IPA");
    expect(lessonA205.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA205.pronunciation.shadowing?.[1].tip).toContain("/ç/");

    expect(ids(lessonA205.flashcards)).toEqual(Array.from({length: 12}, (_, i) => `fc${i + 1}`).sort());
    expect(lessonA205.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(true);
    expect(new Set(lessonA205.flashcards.map((card) => card.de.toLowerCase())).size).toBe(lessonA205.flashcards.length);
    expect(lessonA205.mediation).toHaveLength(1);
    expect(lessonA205.mediation?.[0].sourceDe).toBe("Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.");
    expect(lessonA205.mediation?.[0].keyPointsAr).toHaveLength(3);
    expect(lessonA205.interaction).toHaveLength(1);
    expect(lessonA205.interaction?.[0].rounds).toHaveLength(2);
    for (const round of lessonA205.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best).length).toBe(1);
      expect(round.options.length).toBe(2);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(lessonA205.interaction?.[0].strategyAr).toContain("ليس تقويماً للكلام");
    expect(lessonA205.lernziele.some((goal) => /sprechen|aussprechen|telefonieren/i.test(goal.de))).toBe(false);
  });

  it("checks every supplementary note, pronunciation item, card, mediation point, and optional interaction", () => {
    const tips = lessonA205.fehlerUndTipps;
    if (!tips?.culturalNote) throw new Error("A2-05 must keep its reviewed error tips and cultural note");
    expect(tips.mistakes.map((item) => [item.wrong, item.right, item.whyAr, item.classification])).toEqual([
      ["Wir war gestern im Büro.", "Wir waren gestern im Büro.", "wir فاعل جمع، لذلك نستخدم waren لا war.", "error"],
      ["Ich hatte ein Termin.", "Ich hatte einen Termin.", "Termin مذكر ومفعول به؛ أداة النكرة في Akkusativ هي einen.", "error"],
      ["Mit freundliche Grüßen", "Mit freundlichen Grüßen", "mit يطلب Dativ؛ لذلك تأتي الصفة freundlichen قبل Grüßen.", "error"],
      ["Mit freundlichen Grüßen,", "Mit freundlichen Grüßen", "الخاتمة المستقلة في هذا النمط الألماني لا تتبعها فاصلة أو نقطة؛ الاسم يأتي في سطر مستقل.", "error"],
    ]);
    expect(tips.eselsbruecken).toEqual([
      "راجع الضمير قبل النهاية: ich war / du warst / wir waren؛ ich hatte / du hattest / wir hatten.",
      "في الهاتف، حدّد دورك: تعريف الجهة أو الاسم عند الرد، والتعريف بالنفس عند الاتصال؛ الصيغة الدقيقة تتبع السياق.",
      "في البريد الرسمي النموذجي: فاصلة بعد Anrede، ولا علامة ترقيم بعد Mit freundlichen Grüßen المستقلة.",
    ]);
    expect(tips.culturalNote).toEqual({
      title: "اختلاف السياق في الهاتف والمراسلات",
      content: "عبارات الدرس نماذج لغوية لمواقف عمل مختلفة، وليست وصفاً ملزماً لطريقة جميع المؤسسات أو المتحدثين. قد يعرّف الموظف الجهة واسمه عند الرد، وقد يبدأ المتصل بتعريف نفسه؛ اتبع ما يلائم الدور والعلاقة. أما الموعد فيُنسق مع الطرف الآخر: ثبّت الوقت المتفق عليه وأبلغ الشخص إذا تعذر الحضور، ولا توجد هنا قاعدة عامة عن عدد دقائق التبكير.",
    });

    expect(lessonA205.pronunciation.items.map((item) => [item.de, item.ar, item.note])).toEqual([
      ["das Büro", "المكتب", "IPA: [byˈʀoː]؛ ü في المقطع الأول صوت أمامي مدوّر [y]، وليس صوت u العربي؛ o في المقطع المنبور طويل."],
      ["anrufen", "يتصل هاتفياً", "IPA: [ˈanʀuːfn̩]؛ الجزء المنفصل an يحمل النبر الرئيس، وrufen يبقى في المصدر من حيث بناء الكلمة."],
      ["der Kollege", "الزميل", "IPA: [kɔˈleːɡə]؛ النبر على المقطع الثاني، وفيه e طويلة [eː]."],
      ["die Besprechung", "الاجتماع", "IPA: [bəˈʃpʀɛçʊŋ]؛ sp في بداية المقطع المنبور = [ʃp]، وch بعد e = [ç]، ولا يطابق تماماً شيناً أو خاءً عربية."],
      ["die Nachricht", "الرسالة", "IPA: [ˈnaːxʁɪçt]؛ ch بعد a هو [x]، وبعد i هو [ç]؛ يختلف الصوتان بحسب الحركة السابقة."],
      ["verbinden", "يحوّل/يصل المكالمة", "IPA: [fɛɐ̯ˈbɪndn̩]؛ v في ver هنا [f]، والنبر على bin؛ النطق قد يحقق نهاية -en بمقطع أنفي مخفّف."],
    ]);
    expect(lessonA205.pronunciation.tip).toBe("استخدم رموز IPA أو تسجيلاً موثوقاً عند التدرب. لا يقابل ü في Büro صوت عربي مطابق؛ فلا تختزله إلى /u/ أو /i/. وch في Besprechung [ç] ليس شيناً أو خاءً مطابقة؛ أما Nachricht ففيها [x] بعد a و[ç] بعد i. قد يختلف تحقيق r الألماني بحسب المتحدث والمنطقة؛ وهذه الرموز أوصاف قاموسية وليست طريقة نطق وحيدة.");
    expect(lessonA205.pronunciation.shadowing?.map((line) => [line.de, line.ar, line.tip])).toEqual([
      ["Firma Weber, guten Tag!", "شركة فيبر، نهارك سعيد!", "ابدأ بتحية قصيرة واضحة، ثم انطق اسم الشركة؛ هذا تدريب نطق لا تقييم لمكالمة حقيقية."],
      ["Ich verbinde Sie.", "سأحوّلك إلى الجهة المطلوبة.", "ich ينتهي بـ /ç/ بعد حركة أمامية؛ verbinde: /fɛɐ̯ˈbɪndə/."],
      ["Ich war gestern im Büro.", "كنت أمس في المكتب.", "war /vaːɐ̯/؛ Büro /byˈʁoː/، والنبر الرئيس على المقطع الأخير."],
      ["Wir hatten viel Arbeit.", "كان لدينا عمل كثير.", "hatten: /ˈhatn̩/؛ الكتابة tt بعد الحركة القصيرة لا تعني نطق t طويلة مستقلة."],
    ]);

    expect(lessonA205.flashcards.map((card) => [card.de, card.ar, card.example, card.exampleAr, card.level])).toEqual([
      ["das Büro", "المكتب", "Ich arbeite im Büro.", "أعمل في المكتب.", "A2"],
      ["anrufen", "يتصل هاتفياً", "Ich rufe dich morgen an.", "سأتصل بك غداً.", "A2"],
      ["der Kollege / die Kollegin", "الزميل / الزميلة", "Meine Kollegin ist freundlich.", "زميلتي ودودة.", "A2"],
      ["die Besprechung", "الاجتماع", "Wir hatten eine Besprechung.", "كان لدينا اجتماع.", "A2"],
      ["die E-Mail", "البريد الإلكتروني", "Schick mir bitte eine E-Mail.", "أرسل لي بريداً إلكترونياً من فضلك.", "A2"],
      ["das Präteritum", "الماضي البسيط", "war, hatte, konnte", "كان، كان لديه، استطاع.", "A2"],
      ["formelle Anrede", "تحية افتتاحية رسمية", "Sehr geehrter Herr Weber,", "السيد فيبر المحترم،", "A2"],
      ["Mit freundlichen Grüßen", "مع خالص التحيات", "Mit freundlichen Grüßen\nAnna Weber", "مع خالص التحيات\nآنا فيبر", "A2"],
      ["zurückrufen", "يعاود الاتصال", "Ich rufe heute Nachmittag zurück.", "سأتصل مجدداً بعد ظهر اليوم.", "A2"],
      ["die Nachricht", "الرسالة", "Kann ich eine Nachricht hinterlassen?", "هل يمكنني ترك رسالة؟", "A2"],
      ["die Notiz", "الملاحظة المكتوبة", "Schick mir bitte die Notizen.", "أرسل إليّ الملاحظات من فضلك.", "A2"],
      ["der Bericht", "التقرير", "Ich möchte den Bericht heute fertig schreiben.", "أودّ إنهاء التقرير اليوم.", "A2"],
    ]);

    expect(lessonA205.mediation).toEqual([{
      id: "med-a2-05-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بريد عمل بالعربية إلى زميل",
      sourceDe: "Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.",
      taskAr: "انقل المعلومات إلى العربية: موعد الاجتماع ومكانه وما ينبغي إحضاره.",
      modelAnswerAr: "«أعزائي الزملاء، الاجتماع غداً الساعة العاشرة في الغرفة 3. يرجى إحضار تقاريركم.»",
      keyPointsAr: ["نقل أن الاجتماع غداً الساعة 10", "ذكر الغرفة 3", "نقل طلب إحضار التقارير"],
    }]);
    expect(lessonA205.interaction).toEqual([{
      id: "int-a2-05-1",
      scenarioAr: "مكالمة عمل للاعتذار عن موعد الساعة الثانية واقتراح موعد بديل.",
      scenarioDe: "Beruflicher Anruf: einen Termin verschieben und eine Alternative vorschlagen.",
      strategyAr: "اعتذر بوضوح واقترح وقتاً محدداً، وانتبه إلى Sie/Ihnen. هذا تفاعل نصي اختياري وليس تقويماً للكلام أو النطق.",
      rounds: [
        {
          speakerDe: "Guten Morgen, Herr Ali. Sie haben heute um 14 Uhr einen Termin.",
          speakerAr: "صباح الخير، سيد علي. لديك موعد اليوم الساعة الثانية.",
          options: [
            {de: "Es tut mir leid. Ich kann heute um 14 Uhr nicht kommen. Können wir den Termin verschieben?", ar: "آسف. لا أستطيع الحضور اليوم الساعة الثانية. هل يمكننا تأجيل الموعد؟", best: true, replyDe: "Natürlich. Wann passt es Ihnen besser?", replyAr: "بالطبع. ما الوقت الأنسب لك؟"},
            {de: "Ich komme heute nicht und das ist Ihr Problem.", ar: "لن آتي اليوم وهذه مشكلتك.", best: false, replyDe: "Ein höflicher Vorschlag wäre hier passender.", replyAr: "يكون اقتراح بديل مهذب أنسب هنا."},
          ],
        },
        {
          speakerDe: "Wann passt es Ihnen besser?",
          speakerAr: "ما الوقت الأنسب لك؟",
          options: [
            {de: "Wäre übermorgen um 10 Uhr möglich?", ar: "هل يمكن بعد غد الساعة العاشرة؟", best: true, replyDe: "Ja, das passt mir. Ich notiere den Termin.", replyAr: "نعم، يناسبني ذلك. سأدوّن الموعد."},
            {de: "Ich weiß nicht, vielleicht nie.", ar: "لا أعرف، ربما أبداً.", best: false, replyDe: "Wir brauchen einen konkreten Vorschlag.", replyAr: "نحتاج إلى اقتراح محدد."},
          ],
        },
      ],
    }]);
  });

  it("counts only correct events from the exact assessed tasks as goal evidence", () => {
    const openingEvent: AnalyticsEvent = {type: "lesson-view", ts: 1, lessonId: lessonA205.id};
    for (const goal of lessonA205.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA205.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA205.id, [openingEvent])).toBe("pending");
      const correctEvents = goal.evidence?.exerciseIds.map((id) => goalEvent(goal.id, id, true)) ?? [];
      const wrongEvents = goal.evidence?.exerciseIds.map((id) => goalEvent(goal.id, id, false)) ?? [];
      expect(getGoalEvidenceStatus(goal, lessonA205.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA205.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) => index === 0 && event.type === "exercise-result" ? {...event, correct: false} : event);
      expect(getGoalEvidenceStatus(goal, lessonA205.id, partlyWrong)).toBe("pending");
    }

    const phoneGoal = lessonA205.lernziele.find((goal) => goal.id === "z1");
    if (!phoneGoal) throw new Error("z1 must be present");
    const flowEvent = goalEvent("z1", "e3", true, "flow-practice:a2-05:e3");
    expect(getGoalEvidenceStatus(phoneGoal, lessonA205.id, [flowEvent])).toBe("evidenced");
    const wrongInterfaceEvent = goalEvent("z1", "e3", true, "mini-test:a2-05:e3");
    expect(getGoalEvidenceStatus(phoneGoal, lessonA205.id, [wrongInterfaceEvent])).toBe("pending");

    const listeningGoal = lessonA205.lernziele.find((goal) => goal.id === "z2");
    if (!listeningGoal) throw new Error("z2 must be present");
    const transcriptEvent = goalEvent("z2", "q1", true, getListeningQuestionTaskId(lessonA205.id, "l1", "q1", true));
    expect(getGoalEvidenceStatus(listeningGoal, lessonA205.id, [transcriptEvent])).toBe("pending");
  });
});