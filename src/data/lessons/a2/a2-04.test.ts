import {describe, expect, it} from "vitest";

import {lessonA204} from "@/data/lessons/a2/a2-04";
import {NO_ERROR_OPTION} from "@/lib/lesson/error-correction-highlight";
import {evaluateExercise, normalizeText} from "@/lib/lesson/exercise-engine";
import {getGoalEvidenceStatus} from "@/lib/lesson/goal-evidence";
import {getListeningQuestionTaskId} from "@/lib/lesson/listening-evidence";
import type {AnalyticsEvent} from "@/types/analytics";
import type {Exercise} from "@/types/lesson";

const expectedMultipleChoiceKeys: Record<string, string> = {
  r1: "auf dem",
  r2: "in",
  e1: "dem",
  e2: "den",
  e8: "أنتقل إلى شقة جديدة",
  e14: "stelle",
  e18: "besichtigen",
  m1: "den",
  m2: "dem",
  rq1: "Sein Zimmer im Wohnheim ist zu klein",
  rq2: "Kaltmiete plus Nebenkosten",
  rq3: "Zwei Kaltmieten",
  rq4: "Im Bad über dem Waschbecken",
  rq5: "Neben das Sofa",
  rq6: "Sie halten den Zustand der Wohnung fest",
  rq7: "3 Zimmer, Küche und Bad",
  q1: "neben dem Schlafzimmer",
  q2: "600 Euro warm",
  q3: "neben das Sofa",
  q4: "von 13 bis 15 Uhr und nach 22 Uhr",
};

const expectedFillBlankKeys: Record<string, string[]> = {
  r3: ["der"],
  e6: ["unter", "an", "auf"],
  e12: ["die", "Wohnzimmer"],
  e13: ["der", "die"],
  e19: ["steckt"],
  w2: ["dem", "den", "der"],
  m5: ["dem", "das"],
};

const expectedMatchingIds = ["e11", "e16", "e3"];
const expectedOrderingKeys: Record<string, string> = {
  e4: "Ich stelle die Tasse auf den Tisch.",
  e20: "Sind die Nebenkosten in der Warmmiete enthalten?",
  m3: "Ich hänge das Bild an die Wand.",
};
const expectedErrorCorrections: Record<string, string> = {
  e5: "auf den",
  e9: NO_ERROR_OPTION,
  e15: "ins",
  m4: "unter dem",
};
const expectedTransformations: Record<string, string[]> = {
  e7: ["Ich stelle die Tasse auf den Tisch", "Ich stelle die Tasse auf den Tisch."],
  e17: ["Ich lege den Teppich auf den Boden.", "Ich lege den Teppich auf den Boden"],
  w1: ["Ich lege das Buch auf den Tisch", "Ich lege das Buch auf den Tisch."],
};
const expectedDictations: Record<string, string> = {
  e10: "Ich stelle die Kiste in die Ecke.",
  w3: "Ich hänge das Bild an die Wand.",
};

function reading() {
  const value = lessonA204.reading;
  if (!value) throw new Error("A2-04 must keep its reviewed reading text");
  return value;
}

function allTasks(): Exercise[] {
  return [
    ...(lessonA204.review ?? []),
    ...lessonA204.practiceBank,
    ...lessonA204.miniTest,
    ...lessonA204.writing,
    ...reading().questions,
    ...lessonA204.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`A2-04 task ${id} is missing`);
  return value;
}

function ids(values: {id: string}[]): string[] {
  return values.map((value) => value.id).sort();
}

function goalEvent(goalId: string, exerciseId: string, correct: boolean, taskIdOverride?: string): AnalyticsEvent {
  const goal = lessonA204.lernziele.find((candidate) => candidate.id === goalId);
  const acceptedTaskId = goal?.evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!acceptedTaskId) throw new Error(`A2-04 ${goalId} has no taskId for ${exerciseId}`);
  const exercise = task(exerciseId);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: exercise.type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonA204.id,
    taskId: taskIdOverride ?? acceptedTaskId,
  };
}

describe("A2-04 audited lesson", () => {
  it("keeps the lesson order, full task inventory, and assessable evidence mappings", () => {
    expect(lessonA204.order).toBe(1);
    expect(lessonA204.lernziele.map((goal) => goal.id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    expect(lessonA204.lernziele.find((goal) => goal.id === "z1")?.de).toContain("Text zur Wohnungssuche");
    expect(ids(lessonA204.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA204.practiceBank)).toEqual(Array.from({length: 20}, (_, i) => `e${i + 1}`).sort());
    expect(ids(lessonA204.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA204.writing)).toEqual(["w1", "w2", "w3"]);
    expect(ids(reading().questions)).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5", "rq6", "rq7"]);
    expect(ids(lessonA204.listening.questions)).toEqual(["q1", "q2", "q3", "q4"]);
    const reviewInstructions = new Map((lessonA204.review ?? []).map((exercise) => [exercise.id, exercise.instructionAr]));
    expect(reviewInstructions.get("r1")).toContain("مستوى A1");
    expect(reviewInstructions.get("r1")).toContain("a1-04");
    expect(reviewInstructions.get("r2")).toContain("a1-11");
    expect(reviewInstructions.get("r3")).toContain("a1-04");
    expect(allTasks()).toHaveLength(42);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(42);
    expect("duration" in lessonA204).toBe(false);

    const validTaskIds = new Set<string>();
    for (const exercise of lessonA204.practiceBank) {
      validTaskIds.add(`practice:${lessonA204.id}:${exercise.id}`);
    }
    // lesson-flow progressively reveals only the first min(4, bank size); its IDs are not used as the objective evidence here.
    for (const exercise of lessonA204.practiceBank.slice(0, Math.min(4, lessonA204.practiceBank.length))) {
      validTaskIds.add(`flow-practice:${lessonA204.id}:${exercise.id}`);
    }
    for (const exercise of lessonA204.miniTest) validTaskIds.add(`mini-test:${lessonA204.id}:${exercise.id}`);
    for (const exercise of lessonA204.writing) validTaskIds.add(`writing:${lessonA204.id}:${exercise.id}`);
    for (const question of reading().questions) validTaskIds.add(`reading:${reading().id}:${question.id}`);
    for (const question of lessonA204.listening.questions) {
      validTaskIds.add(getListeningQuestionTaskId(lessonA204.id, question.itemId, question.id, false));
    }

    for (const goal of lessonA204.lernziele) {
      const evidence = goal.evidence;
      expect(evidence, `${goal.id} must have evidence`).toBeDefined();
      expect(evidence?.completion).toBe("all-correct");
      expect(evidence?.exerciseIds.length).toBeGreaterThan(0);
      expect(evidence?.taskIds?.length).toBeGreaterThan(0);
      for (const taskId of evidence?.taskIds ?? []) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const exerciseId = taskId.split(":").at(-1);
        expect(evidence?.exerciseIds).toContain(exerciseId);
        if (taskId.startsWith("flow-practice:")) {
          expect(lessonA204.practiceBank.slice(0, Math.min(4, lessonA204.practiceBank.length)).some((exercise) => exercise.id === exerciseId)).toBe(true);
        }
      }
      for (const exerciseId of evidence?.exerciseIds ?? []) {
        expect(evidence?.taskIds?.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
    }

    expect(lessonA204.lernziele.find((goal) => goal.id === "z1")?.evidence?.taskIds).toEqual([
      "reading:read-a2-04:rq2", "reading:read-a2-04:rq3", "reading:read-a2-04:rq7",
    ]);
    expect(lessonA204.lernziele.find((goal) => goal.id === "z2")?.evidence?.taskIds).toEqual([
      "practice:a2-04:e3", "flow-practice:a2-04:e3",
    ]);
    expect(lessonA204.lernziele.find((goal) => goal.id === "z4")?.evidence?.taskIds).toEqual(["listening:l3:q4"]);
    expect(getListeningQuestionTaskId(lessonA204.id, "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId(lessonA204.id, "l3", "q4", true)).toBe(
      "listening-transcript:a2-04:l3:q4",
    );
    expect(lessonA204.lernziele.every((goal) => !goal.evidence?.taskIds?.some((id) => id.startsWith("listening-transcript:")))).toBe(true);
    expect(lessonA204.lernziele.flatMap((goal) => goal.evidence?.taskIds ?? []).join(" ")).not.toMatch(/mediation|interaction|pronunciation|speaking/);
    expect(lessonA204.summary).not.toMatch(/Goethe-Zertifikat|Akkreditierung|vollständig|garantiert|\b\d+\s*Minuten/i);
  });

  it("checks every multiple-choice answer and each distractor individually", () => {
    const multipleChoice = allTasks().filter((item) => item.type === "multiple-choice");
    expect(multipleChoice.map((item) => item.id).sort()).toEqual(Object.keys(expectedMultipleChoiceKeys).sort());
    for (const [id, expected] of Object.entries(expectedMultipleChoiceKeys)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple choice`);
      expect(exercise.options[exercise.correctIndex], id).toBe(expected);
      expect(new Set(exercise.options.map(normalizeText)).size, id).toBe(exercise.options.length);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} option ${index + 1}`).toBe(index === exercise.correctIndex);
      }
    }

    const correctButContextual = lessonA204.theory.flatMap((block) => block.commonMistakes).find((item) => item.wrong.includes("Ich will die Wohnung sehen"));
    expect(correctButContextual?.classification).toBe("contextual-alternative");
    expect(correctButContextual?.whyAr).toContain("صحيحة نحوياً");
    const visitQuestion = task("e18");
    if (visitQuestion.type !== "multiple-choice") throw new Error("e18 must remain multiple choice");
    expect(visitQuestion.instructionAr).toContain("بنفسه");
    expect(visitQuestion.explanation).toContain("anschauen lassen");
    expect(visitQuestion.explanation).not.toContain("خطأ نحوي");
  });

  it("checks every fill-blank key and rejects every offered alternative in its own blank", () => {
    const fillBlanks = allTasks().filter((item) => item.type === "fill-blank");
    expect(fillBlanks.map((item) => item.id).sort()).toEqual(Object.keys(expectedFillBlankKeys).sort());
    for (const [id, expected] of Object.entries(expectedFillBlankKeys)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map((blank) => blank.correct), id).toEqual(expected);
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
    }
    const writingTask = task("w2");
    if (writingTask.type !== "fill-blank") throw new Error("w2 must remain fill-blank");
    expect(writingTask.template.match(/___/g)).toHaveLength(writingTask.blanks.length);
    expect(writingTask.blanks[2].options).toContain("der");
    const miniTask = task("m5");
    if (miniTask.type !== "fill-blank") throw new Error("m5 must remain fill-blank");
    expect(miniTask.blanks.map((blank) => blank.correct)).toEqual(["dem", "das"]);
    expect(miniTask.instructionAr).not.toContain("dem أو den");
  });

  it("checks every matching pair and rejects each pair when altered", () => {
    const matching = allTasks().filter((item) => item.type === "matching");
    expect(matching.map((item) => item.id).sort()).toEqual(expectedMatchingIds);
    for (const exercise of matching) {
      if (exercise.type !== "matching") throw new Error(`${exercise.id} is not matching`);
      expect(evaluateExercise(exercise, exercise.pairs).isCorrect, exercise.id).toBe(true);
      expect(new Set(exercise.pairs.map((pair) => normalizeText(pair.left))).size).toBe(exercise.pairs.length);
      expect(new Set(exercise.pairs.map((pair) => normalizeText(pair.right))).size).toBe(exercise.pairs.length);
      for (let index = 0; index < exercise.pairs.length; index += 1) {
        const altered = exercise.pairs.map((pair, pairIndex) => ({
          left: pair.left,
          right: pairIndex === index ? `incorrect-${index}` : pair.right,
        }));
        expect(evaluateExercise(exercise, altered).isCorrect, `${exercise.id} pair ${index + 1}`).toBe(false);
      }
    }
    const prepositionMatch = task("e3");
    if (prepositionMatch.type !== "matching") throw new Error("e3 must remain matching");
    expect(prepositionMatch.pairs).toHaveLength(9);
  });

  it("checks every ordering, correction, transformation, and dictation key", () => {
    const orderings = allTasks().filter((item) => item.type === "word-ordering");
    expect(orderings.map((item) => item.id).sort()).toEqual(Object.keys(expectedOrderingKeys).sort());
    for (const [id, expected] of Object.entries(expectedOrderingKeys)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
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
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence, id).toContain(exercise.wrongWord);
      expect(evaluateExercise(exercise, expected).isCorrect, id).toBe(true);
      for (const option of exercise.options) {
        if (exercise.isAlreadyCorrect) {
          expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(false);
        } else {
          expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(option === expected);
        }
      }
    }
    const alreadyCorrect = task("e9");
    if (alreadyCorrect.type !== "error-correction") throw new Error("e9 must remain error-correction");
    expect(alreadyCorrect.isAlreadyCorrect).toBe(true);
    expect(alreadyCorrect.correctWord).toBe("warm");

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

  it("checks reading paragraphs, translation alignment, every question, and the new housing vocabulary", () => {
    const text = reading();
    expect(text.id).toBe("read-a2-04");
    expect(text.paragraphs).toHaveLength(4);
    expect(text.paragraphsAr).toHaveLength(text.paragraphs.length);
    expect(text.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(text.paragraphs.join(" ").split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(text.paragraphs[0]).toContain("sucht Amir eine neue Wohnung");
    expect(text.paragraphs[0]).toContain("Im Internet findet er eine Anzeige");
    expect(text.paragraphs[0]).not.toContain("öffnet er das Internet");
    expect(text.paragraphs[1]).toContain("im 2. Obergeschoss");
    expect(text.paragraphs[1]).toContain("begrüßt ihn Frau Krüger und zeigt ihm die Wohnung");
    expect(text.paragraphs[2]).toContain("Die Kaution beträgt zwei Kaltmieten");
    expect(text.paragraphs[2]).toContain("Für dieses Haus");
    expect(text.paragraphs[3].indexOf("unterschreibt er den Mietvertrag")).toBeLessThan(text.paragraphs[3].indexOf("Bei der Schlüsselübergabe"));
    expect(text.paragraphs[3]).toContain("durch das Treppenhaus nach oben");
    expect(text.paragraphs[3]).toContain("Dann bringt er sie in die Wohnung");
    expect(text.paragraphsAr[3]).toContain("ثم يدخلها إلى الشقة");
    expect(text.glossary.length).toBeGreaterThanOrEqual(8);
    const story = text.paragraphs.join(" ").toLowerCase();
    for (const entry of text.glossary) {
      expect(entry.de.trim(), entry.de).not.toBe("");
      expect(entry.ar.trim(), entry.de).not.toBe("");
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(story, `${entry.de} should occur in the reading`).toContain(stem);
    }
    expect(text.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(text.discussionAr?.length).toBeGreaterThan(40);
    for (const question of text.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(text.paragraphs.length);
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.explanation.length).toBeGreaterThan(20);
    }
    expect(text.questions.find((question) => question.id === "rq5")?.questionDe).toContain("Wohin");
    expect(text.questions.find((question) => question.id === "rq5")?.explanation).toContain("neben das Sofa");
    expect(text.questions.find((question) => question.id === "rq6")?.explanation).toContain("لا إنه يضمن نتيجة قانونية");
    expect(text.questions.find((question) => question.id === "rq7")?.options[0]).toBe("3 Zimmer, Küche und Bad");
    expect(text.paragraphsAr[1]).toContain("الطابق الثاني فوق الأرضي");
    expect(text.paragraphsAr[1]).toContain("تستقبله السيدة كروغر وتريه الشقة");
    expect(text.paragraphsAr[1]).not.toContain("ثمانية مهتمين");
    expect(text.paragraphsAr[1]).not.toContain("سيشاهد الشقة اليوم");
    expect(text.paragraphsAr[2]).toContain("بعد انتقالك من الشقة نفحصها ونسوّي التكاليف التي لم تُسوَّ بعد");
    expect(text.glossary.some((entry) => entry.de === "der Interessent")).toBe(false);
  });

  it("checks every listening dialogue line, translation, question mapping, and transcript gate", () => {
    expect(lessonA204.listening.items.map((item) => item.id)).toEqual(["l1", "l2", "l3"]);
    expect(lessonA204.listening.items.map((item) => item.lines.length)).toEqual([7, 5, 7]);
    expect(lessonA204.listening.items.every((item) => item.lines.every((line) => line.de.trim() && line.ar.trim() && line.speaker.trim()))).toBe(true);
    const expectedDialogues = [
      ["l1", [
        ["Vermieter", "Das ist die Wohnung. Sie hat drei Zimmer und eine Küche.", "هذه هي الشقة. فيها ثلاث غرف ومطبخ."],
        ["Mona", "Schön! Wo ist das Bad?", "جميلة! أين الحمّام؟"],
        ["Vermieter", "Das Bad ist neben dem Schlafzimmer.", "الحمّام بجانب غرفة النوم."],
        ["Mona", "Und wie hoch ist die Miete?", "وكم الإيجار؟"],
        ["Vermieter", "Sechshundert Euro warm.", "ستمائة يورو كإيجار شامل بحسب هذا العرض."],
        ["Mona", "Okay. Ich stelle die Lampe später in die Ecke.", "حسناً. سأضع المصباح لاحقاً في الزاوية."],
        ["Vermieter", "Kein Problem!", "لا مشكلة."],
      ]],
      ["l2", [
        ["Karim", "Ich hänge das Bild an die Wand.", "أعلّق الصورة على الجدار."],
        ["Anna", "Gut! Und die Lampe?", "جيد! وماذا عن المصباح؟"],
        ["Karim", "Ich stelle die Lampe auf den Tisch.", "سأضع المصباح على الطاولة."],
        ["Anna", "Der Teppich liegt unter dem Sofa, richtig?", "السجادة تحت الأريكة، أليس كذلك؟"],
        ["Karim", "Nein, ich lege ihn neben das Sofa.", "لا، سأضع السجادة بجانب الأريكة."],
      ]],
      ["l3", [
        ["Nachbarin", "Willkommen in der neuen Wohnung! Ich bin Frau Weber aus Wohnung 3.", "مرحباً في الشقة الجديدة! أنا السيدة فيبر من الشقة 3."],
        ["Mona", "Danke! Ich bin Mona. Wie sind die Regeln hier?", "شكراً! أنا منى. ما القواعد هنا؟"],
        ["Nachbarin", "In unserer Hausordnung stehen Ruhezeiten: von 13 bis 15 Uhr und nach 22 Uhr.", "يتضمن نظام مبنانا أوقات هدوء: من 13 إلى 15، وبعد الساعة 22."],
        ["Mona", "Kein Problem. Und der Müll?", "لا مشكلة. وماذا عن النفايات؟"],
        ["Nachbarin", "Wir trennen Papier, Plastik und Bioabfall. Die Tonnen stehen draußen.", "نفرز الورق والبلاستيك والنفايات العضوية. الحاويات في الخارج."],
        ["Mona", "Verstanden. Kann ich meine Schuhe in den Hausflur stellen?", "فهمت. هل أستطيع وضع حذائي في مدخل المبنى؟"],
        ["Nachbarin", "Bitte nicht. Bei uns soll der Hausflur frei bleiben. Im Sommer treffen wir uns manchmal im Hof.", "من فضلك لا؛ ينبغي في مبنانا أن يبقى المدخل خالياً. نجتمع أحياناً في الصيف في الفناء."],
      ]],
    ] as const;
    expect(lessonA204.listening.items.map((item) => [item.id, item.lines.map((line) => [line.speaker, line.de, line.ar])])).toEqual(expectedDialogues);
    expect(lessonA204.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"], ["q2", "l1"], ["q3", "l2"], ["q4", "l3"],
    ]);
    const allLines = lessonA204.listening.items.flatMap((item) => item.lines);
    expect(allLines.find((line) => line.de.includes("aus Wohnung 3"))?.ar).toContain("من الشقة 3");
    expect(allLines.find((line) => line.de.includes("Bioabfall"))?.de).toBe("Wir trennen Papier, Plastik und Bioabfall. Die Tonnen stehen draußen.");
    expect(allLines.find((line) => line.de.includes("Ruhezeiten"))?.de).toContain("In unserer Hausordnung");
    expect(lessonA204.listening.questions.find((question) => question.id === "q4")?.explanation).toContain("لا يُعمّم");
    expect(lessonA204.lernziele.find((goal) => goal.id === "z4")?.evidence?.taskIds).toEqual(["listening:l3:q4"]);
    expect(getListeningQuestionTaskId(lessonA204.id, "l3", "q4", true)).not.toBe("listening:l3:q4");
  });

  it("checks the theory classifications, pronunciation references, cards, mediation, and text interaction", () => {
    expect(ids(lessonA204.theory)).toEqual(["t1", "t2", "t3", "t4"]);
    expect(lessonA204.theory.map((block) => block.examples.length)).toEqual([7, 8, 7, 7]);
    expect(lessonA204.theory.map((block) => block.commonMistakes.length)).toEqual([3, 4, 4, 3]);
    for (const block of lessonA204.theory) {
      expect(block.explanationAr.length).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n").filter((paragraph) => paragraph.trim()).length).toBeGreaterThanOrEqual(2);
      expect(block.whyAr.length).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length).toBeGreaterThanOrEqual(250);
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThan(100);
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(block.commonMistakes.every((mistake) => mistake.wrong && mistake.right && mistake.whyAr.length > 60 && mistake.classification)).toBe(true);
      if (block.table) for (const row of block.table.rows) expect(row.cells).toHaveLength(block.table.columns.length - 1);
    }
    expect(lessonA204.theory[0].table?.rows.map((row) => row.label)).toEqual(["in", "an", "auf", "über", "unter", "vor", "hinter", "neben", "zwischen"]);
    expect(lessonA204.theory[0].explanationAr).toContain("مكان الحركة");
    expect(lessonA204.theory[0].explanationAr).not.toContain("عبور الحدّ = Akkusativ");
    expect(lessonA204.theory[1].explanationAr).toContain("hängt – hing – hat gehangen");
    expect(lessonA204.theory[2].explanationAr).toContain("am Wochenende");
    expect(lessonA204.theory[3].commonMistakes.find((item) => item.wrong.includes("Ich will die Wohnung sehen"))?.classification).toBe("contextual-alternative");
    expect(lessonA204.theory[3].commonMistakes.filter((item) => item.classification === "unverified-claim")).toHaveLength(0);
    expect(lessonA204.theory[3].commonMistakes.find((item) => item.wrong.includes("Ich freue mich"))?.classification).toBe("error");
    expect(lessonA204.theory[3].explanationAr).toContain("قد يدفع المستأجر الكهرباء أو الإنترنت منفصلين");

    expect(lessonA204.pronunciation.items.map((item) => item.de)).toEqual(["umziehen", "die Miete", "der Vermieter", "die Anzeige", "zwischen", "die Ecke"]);
    for (const item of lessonA204.pronunciation.items) expect(item.note).toMatch(/IPA: \/.*\//);
    expect(lessonA204.pronunciation.items.find((item) => item.de === "der Vermieter")?.note).toContain("/fɛɐ̯ˈmiːtɐ/");
    expect(lessonA204.pronunciation.items.find((item) => item.de === "die Anzeige")?.note).toContain("/ˈanˌt͡saɪ̯ɡə/");
    expect(lessonA204.pronunciation.items.find((item) => item.de === "zwischen")?.note).toContain("/ˈtsvɪʃn̩/");
    expect(lessonA204.pronunciation.items.find((item) => item.de === "die Ecke")?.note).toContain("/ˈɛkə/");
    expect(lessonA204.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA204.pronunciation.shadowing?.[0].tip).toContain("h لا يُنطق");
    expect(lessonA204.pronunciation.shadowing?.[0].tip).toContain("/ˈvoːnʊŋ/");
    expect(lessonA204.pronunciation.tip).toContain("تقريب تعليمي لا نقل صوتي معياري");

    expect(ids(lessonA204.flashcards)).toEqual([
      "f13", "f14", "f15", "f16", "f17", "f18", "f19", "f20",
      "fc1", "fc10", "fc11", "fc12", "fc2", "fc3", "fc4", "fc5", "fc6", "fc7", "fc8", "fc9",
    ]);
    expect(lessonA204.flashcards.every((card) => card.de && card.ar && card.example && card.exampleAr)).toBe(true);
    expect(new Set(lessonA204.flashcards.map((card) => card.de.toLowerCase())).size).toBe(lessonA204.flashcards.length);
    expect(lessonA204.flashcards.find((card) => card.id === "fc5")?.ar).toContain("مكان الحركة");
    expect(lessonA204.flashcards.find((card) => card.id === "fc7")?.example).toBe("Ich lege das Buch auf den Tisch.");
    expect(lessonA204.flashcards.find((card) => card.id === "fc7")?.exampleAr).toBe("أضع الكتاب على الطاولة.");
    expect(lessonA204.flashcards.find((card) => card.id === "fc10")?.example).toBe("Bitte lesen Sie die Hausordnung dieses Hauses.");
    expect(lessonA204.flashcards.find((card) => card.id === "fc11")?.example).toBe("In dieser Hausordnung stehen Ruhezeiten von 13 bis 15 Uhr.");
    expect(lessonA204.flashcards.find((card) => card.id === "f13")?.example).toBe("Die Kaltmiete beträgt 640 Euro. Die Warmmiete beträgt 830 Euro.");
    expect(lessonA204.flashcards.find((card) => card.id === "f15")?.ar).not.toContain("يُردّ عند الخروج");
    expect(lessonA204.flashcards.find((card) => card.id === "f20")?.example).toContain("vorhandene Schäden");

    expect(lessonA204.mediation).toHaveLength(1);
    expect(lessonA204.mediation?.[0].sourceDe).toContain("2. Obergeschoss");
    expect(lessonA204.mediation?.[0].sourceDe).toContain("750 Euro warm");
    expect(lessonA204.mediation?.[0].modelAnswerAr).toContain("اسأل عمّا يشمله");
    expect(lessonA204.interaction).toHaveLength(1);
    expect(lessonA204.interaction?.[0].rounds).toHaveLength(2);
    for (const round of lessonA204.interaction?.[0].rounds ?? []) {
      expect(round.options.filter((option) => option.best).length).toBeGreaterThan(0);
      expect(round.options.length).toBeGreaterThanOrEqual(2);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(lessonA204.interaction?.[0].strategyAr).toContain("ليس تقويماً للكلام");
    expect(lessonA204.interaction?.[0].rounds[1].options[1].de).toContain("Ihnen");
  });

  it("counts only correct exercise-result events in the exact mapped context as goal evidence", () => {
    const openingEvent: AnalyticsEvent = {type: "lesson-view", ts: 1, lessonId: lessonA204.id};
    for (const goal of lessonA204.lernziele) {
      expect(getGoalEvidenceStatus(goal, lessonA204.id, [])).toBe("pending");
      expect(getGoalEvidenceStatus(goal, lessonA204.id, [openingEvent])).toBe("pending");
      const correctEvents = goal.evidence?.exerciseIds.map((id) => goalEvent(goal.id, id, true)) ?? [];
      const wrongEvents = goal.evidence?.exerciseIds.map((id) => goalEvent(goal.id, id, false)) ?? [];
      expect(getGoalEvidenceStatus(goal, lessonA204.id, correctEvents)).toBe("evidenced");
      expect(getGoalEvidenceStatus(goal, lessonA204.id, wrongEvents)).toBe("pending");
      const partlyWrong = correctEvents.map((event, index) => index === 0 && event.type === "exercise-result" ? {...event, correct: false} : event);
      expect(getGoalEvidenceStatus(goal, lessonA204.id, partlyWrong)).toBe("pending");
    }
    const practiceGoal = lessonA204.lernziele.find((goal) => goal.id === "z2");
    if (!practiceGoal) throw new Error("z2 must be present");
    const flowPracticeEvent = goalEvent("z2", "e3", true, "flow-practice:a2-04:e3");
    expect(getGoalEvidenceStatus(practiceGoal, lessonA204.id, [flowPracticeEvent])).toBe("evidenced");

    const readingGoal = lessonA204.lernziele.find((goal) => goal.id === "z1");
    if (!readingGoal?.evidence) throw new Error("z1 must have evidence");
    const mismatched = readingGoal.evidence.exerciseIds.map((id) => goalEvent("z1", id, true, `practice:${lessonA204.id}:${id}`));
    expect(getGoalEvidenceStatus(readingGoal, lessonA204.id, mismatched)).toBe("pending");
    const listeningGoal = lessonA204.lernziele.find((goal) => goal.id === "z4");
    if (!listeningGoal?.evidence) throw new Error("z4 must have evidence");
    const transcriptEvent = goalEvent("z4", "q4", true, getListeningQuestionTaskId(lessonA204.id, "l3", "q4", true));
    expect(getGoalEvidenceStatus(listeningGoal, lessonA204.id, [transcriptEvent])).toBe("pending");
  });
});
