import { describe, expect, it } from "vitest";

import { lessonB210 } from "@/data/lessons/b2/b2-10";
import { LESSON_META } from "@/data/lessons/meta";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

/** [الخيارات, المفتاح] — كل MCQ في المصغّر والمراجعة والبنك والقراءة */
const expectedMultipleChoice: Record<string, [string[], string]> = {
  e1: [["Es ist erwiesen, dass", "Es könnte sein, dass", "In einem gewissen Maße", "Unter bestimmten Umständen"], "Es ist erwiesen, dass"],
  e2: [["In gewissem Maße", "Zweifellos", "Eindeutig", "Es ist erwiesen"], "In gewissem Maße"],
  e8: [["ربما", "بلا شك", "إلى حد ما", "بوضوح"], "ربما"],
  "e13-nominal": [["Wegen der Einsparung", "Wegen die Einsparung", "Weil der Einsparung", "Wegen sparen"], "Wegen der Einsparung"],
  "e17-b2": [["indem", "obwohl", "damit", "trotzdem"], "indem"],
  m1: [["Es ist erwiesen, dass", "Es könnte sein, dass", "Unter bestimmten Umständen", "In einem gewissen Maße"], "Es ist erwiesen, dass"],
  m2: [["Möglicherweise", "Zweifellos", "Eindeutig", "Es ist erwiesen"], "Möglicherweise"],
  m6: [["beginne", "beginnt", "begänne", "begann"], "beginne"],
  m7: [["lassen", "können", "werden", "sind"], "lassen"],
  r1: [["werde", "wird", "würde", "wurde"], "werde"],
  r2: [["ist", "wird", "kann", "hat"], "ist"],
  q1: [["mit der Linguistik", "mit der Geschichte", "mit der Kunst", "mit der Wirtschaft"], "mit der Linguistik"],
  q2: [["die mündliche Prüfung", "die schriftliche Prüfung", "die Hausarbeit", "das Seminar"], "die mündliche Prüfung"],
  q3: [["indem sie sprechen", "indem sie schreiben", "indem sie lesen", "indem sie schlafen"], "indem sie sprechen"],
};

/** [المفاتيح, بدائل كل فراغ] — كل تمارين الفراغات */
const expectedFillBlanks: Record<string, [string[], string[][]]> = {
  e6: [["Es", "Meiner", "Maße"], [["Es", "Das", "Man"], ["Meiner", "Meine", "Mein"], ["Maße", "Maß", "Masse"]]],
  "e12-punct": [[".", ".", "!"], [[".", ",", "?", "!"], [".", "?", "!", ":"], [".", ",", "?", "!"]]],
  "e14-nominal": [["Bei", "Trotz", "Zur"], [["Bei", "Wenn", "Mit"], ["Trotz", "Obwohl", "Wegen"], ["Zur", "Damit", "Für"]]],
  m5: [["erwiesen", "Ansicht", "sagen"], [["erwiesen", "bewiesen", "gesehen"], ["Ansicht", "Meinung", "Sicht"], ["sagen", "sprechen", "reden"]]],
  m8: [["Wegen", "um", "Bei"], [["Wegen", "Weil", "Denn"], ["um", "für", "auf"], ["Bei", "Wenn", "Als"]]],
  r3: [["lässt", "haben", "für"], [["lässt", "kann", "wird"], ["haben", "sein", "werden"], ["für", "auf", "an"]]],
  w2: [["Meiner", "Zusammenfassend"], [["Meiner", "Meine", "Mein"], ["Zusammenfassend", "Erstens", "Außerdem"]]],
};

/** [wrongWord, correctWord, البدائل, سليمة أصلاً؟] */
const expectedErrorCorrections: Record<string, [string, string, string[], boolean?]> = {
  e5: ["Zusammenfassend kann man sagen", "Zusammenfassend kann man sagen", ["Zusammenfassend kann man sagen", "Zusammenfassend man kann sagen", "Kann man zusammenfassend sagen", "Man zusammenfassend kann sagen"], true],
  e9: ["dass das wichtig ist", "ist das wichtig", ["ist das wichtig", "dass das wichtig ist", "das wichtig ist", "dass ist das wichtig"]],
  "e10-punct": [",", ",", [",", ";", ".", ":"], true],
  "e11-punct": ["nach", "nach", ["nach", "nach,", "nach.", "nach:"], true],
  "e15-nominal": ["die", "der", ["der", "die", "des", "dem"]],
  m4: ["werde ... gemacht haben", "werde ... gemacht haben", ["werde ... gemacht haben", "habe ... gemacht werden", "werde ... gemacht haben gehabt", "mache ... gemacht haben"], true],
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Hausarbeit", right: "البحث الجامعي" }, { left: "das Seminar", right: "الندوة" },
    { left: "die Fachsprache", right: "لغة التخصص" }, { left: "die Linguistik", right: "علم اللغة" },
  ],
};

const expectedTransformations: Record<string, string[]> = {
  e7: ["Meiner Ansicht nach ist das wichtig", "Meiner Ansicht nach ist das wichtig."],
  w1: ["Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt", "Es ist erwiesen, dass Sprachen das Gehirn stärken"],
};

const expectedWordOrder: Record<string, [string[], string]> = {
  e4: [["erwiesen", "Es", "ist", "dass", "Sprachen", "Denken", "unser", "beeinflussen", ",", "."], "Es ist erwiesen, dass Sprachen unser Denken beeinflussen."],
  "e16-b2": [["Der", "eingereichte", "Antrag", "muss", "noch", "geprüft", "werden", "."], "Der eingereichte Antrag muss noch geprüft werden."],
  m3: [["Meiner", "nach", "ist", "Ansicht", "das", "wichtig", "."], "Meiner Ansicht nach ist das wichtig."],
};

const expectedDictations: Record<string, string> = {
  e10: "Zusammenfassend lässt sich sagen, dass B2 ein Meilenstein ist.", w3: "Es ist erwiesen, dass Sprachen unser Denken beeinflussen.",
};

/** مراسي النصّ — تُفحص حرفياً بعد التصغير */
const readingAnchors = [
  "als leila im september ihre zulassung erhielt", "die einschreibung dauerte dann zwei stunden",
  "der beitrag von 340 euro sei keine studiengebühr", "ein sprachnachweis auf dem erforderlichen niveau",
  "jede behauptung brauche einen beleg, jede quelle eine genaue angabe", "ist kein zeichen von unsicherheit, sondern eine genauigkeitspflicht",
  "aus «weil man spart» wird «wegen der einsparung»", "plötzlich klang der text kürzer und ruhiger",
  "die gliederung sollte sichtbar sein", "zunächst nannte sie das problem, anschließend zeigte sie beispiele",
  "drei werkzeuge: behaupten, belegen, einschränken", "das «ich» verschwinde, die sache bleibe",
];

function allTasks(): Exercise[] {
  return [
    ...(lessonB210.review ?? []),
    ...lessonB210.practiceBank,
    ...lessonB210.miniTest,
    ...lessonB210.writing,
    ...(lessonB210.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-10 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB210.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-10 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-10 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB210.id,
    taskId,
  };
}

describe("B2-10 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB210).toMatchObject({
      id: "b2-10",
      unitId: "b2-10",
      level: "B2",
      order: 1,
      titleDe: "Studium in Deutschland",
      titleAr: "الدراسة في ألمانيا",
    });
    expect("duration" in lessonB210).toBe(false);
    expect(lessonB210.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-10");
    expect(meta).toMatchObject({ id: "b2-10", unitId: "b2-10", level: "B2", order: 1, estimatedMinutes: 75 });
    expect(meta?.summary).toBe(lessonB210.summary);
    expect(meta?.titleAr).toBe(lessonB210.titleAr);
    expect(meta?.titleDe).toBe(lessonB210.titleDe);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB210.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["w1", "e4", "e7"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e6", "e8", "m1", "m2", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e15-nominal", "e16-b2", "e17-b2", "m6", "m7", "m8"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e3", "w3"]);
    for (const item of lessonB210.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB210.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB210.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      expect(evidence.taskIds?.length, `${item.id} taskIds`).toBe(evidence.exerciseIds?.length);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
    expect((lessonB210.review ?? []).map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    expect(lessonB210.writing.map(({ id }) => id)).toEqual(["w1", "w2", "w3"]);
    expect(lessonB210.miniTest.map(({ id }) => id)).toEqual(["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"]);
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b2-10", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-10", "l2", "q2", true)).toBe("listening-transcript:b2-10:l2:q2");
    const transcriptIds = lessonB210.lernziele.flatMap(
      (item) => item.evidence?.taskIds?.filter((taskId) => taskId.startsWith("listening-transcript:")) ?? [],
    );
    expect(transcriptIds, "كشف النصّ لا يُحتسب أداءً").toEqual([]);
    expect(lessonB210.listening.questions.map(({ id }) => id)).toEqual(["q1", "q2", "q3"]);
    expect(lessonB210.listening.questions.map(({ itemId }) => itemId)).toEqual(["l1", "l2", "l2"]);
  });

  it("enumerates every auditable task type so no new task escapes the guard", () => {
    const byType = (type: Exercise["type"]) =>
      allTasks()
        .filter((item) => item.type === type)
        .map(({ id }) => id)
        .sort();
    const covered = (type: Exercise["type"], known: Record<string, unknown>) =>
      byType(type).filter((id) => id in known);
    expect(covered("multiple-choice", expectedMultipleChoice), "MCQ مغطّاة").toEqual(byType("multiple-choice"));
    expect(covered("fill-blank", expectedFillBlanks), "فراغات مغطّاة").toEqual(byType("fill-blank"));
    expect(covered("error-correction", expectedErrorCorrections), "تصحيحات مغطّاة").toEqual(byType("error-correction"));
    expect(covered("matching", expectedMatching), "مطابقات مغطّاة").toEqual(byType("matching"));
    expect(covered("transformation", expectedTransformations), "تحويلات مغطّاة").toEqual(byType("transformation"));
    expect(covered("word-ordering", expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(byType("word-ordering"));
    expect(byType("dictation"), "إملاء").toEqual(["e10", "w3"]);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, [options, key]] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(key);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(index === exercise.correctIndex);
      }
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, [correct, options]] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct: value }) => value), `${id} keys`).toEqual(correct);
      expect(exercise.blanks.map(({ options: list }) => list), `${id} options`).toEqual(options);
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank markers`).toBe(correct.length);
      expect(exercise.template, `${id} markers`).not.toMatch(/_{4,}/);
      for (const [index, alternatives] of options.entries()) {
        for (const option of alternatives) {
          const selected = correct.map((value, position) => (position === index ? option : value));
          expect(evaluateExercise(exercise, selected).isCorrect, `${id} ${index} ${option}`).toBe(
            option === correct[index],
          );
        }
      }
    }
  });

  it("checks error-correction: the span, the key, the distractors, and the no-error trick", () => {
    for (const [id, [wrongWord, correctWord, options, already]] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} wrong`).toBe(wrongWord);
      expect(exercise.correctWord, `${id} correct`).toBe(correctWord);
      expect(exercise.options, `${id} options`).toEqual(options);
      if (!wrongWord.includes("...")) {
        expect(exercise.wrongSentence, `${id} contains wrongWord`).toContain(wrongWord);
      }
      if (already) {
        expect(exercise.isAlreadyCorrect, `${id} سليمة`).toBe(true);
        expect(wrongWord, `${id} لا تصحيح`).toBe(correctWord);
        expect(evaluateExercise(exercise, NO_ERROR_OPTION).isCorrect, `${id} «لا خطأ»`).toBe(true);
        for (const option of options) {
          if (option === NO_ERROR_OPTION || option === correctWord) continue;
          expect(evaluateExercise(exercise, option).isCorrect, `${id} بديل ${option}`).toBe(false);
        }
        continue;
      }
      expect(exercise.isAlreadyCorrect, `${id} خطأ حقيقي`).toBeFalsy();
      expect(options, `${id} contains key`).toContain(correctWord);
      for (const option of options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(option === correctWord);
      }
      expect(exercise.wrongSentence.replace(wrongWord, correctWord), `${id} التصحيح داخل الجملة`).not.toBe(
        exercise.wrongSentence,
      );
    }
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs.map(({ left, right }) => ({ left, right })), `${id} pairs`).toEqual(pairs);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} صحيح`).toBe(true);
      const [first, second, ...rest] = pairs;
      expect(
        evaluateExercise(exercise, [{ ...first, right: second.right }, { ...second, right: first.right }, ...rest])
          .isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformations)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "٠٠٠ غير صحيح").isCorrect, `${id} مفتوح`).toBe(false);
    }
  });

  it("keeps every word-ordering item solvable with exactly the tokens of its sentence", () => {
    for (const [id, [tokens, sentence]] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(sentence);
      const fromSentence = sentence.match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...exercise.tokens].sort(), `${id} مجمّع التوكنات`).toEqual([...fromSentence].sort());
      expect(evaluateExercise(exercise, fromSentence).isCorrect, `${id} بالترتيب`).toBe(true);
      expect(evaluateExercise(exercise, [...fromSentence].reverse()).isCorrect, `${id} معكوس`).toBe(false);
    }
  });

  it("keeps both dictation items inside the academic register the lesson teaches", () => {
    for (const [id, audioText] of Object.entries(expectedDictations)) {
      const exercise = task(id);
      if (exercise.type !== "dictation") throw new Error(`${id} is not dictation`);
      expect(exercise.audioText, `${id} audio`).toBe(audioText);
      expect(exercise.errorType, `${id} errorType`).toBe("spelling");
    }
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText, "الخاتمة الذهبية").toContain("Zusammenfassend lässt sich sagen");
  });

  it("keeps the nominal-style transformation on its prepositions and cases", () => {
    const e13 = task("e13-nominal");
    if (e13.type !== "multiple-choice") throw new Error("e13-nominal is not multiple-choice");
    expect(e13.options[e13.correctIndex], "wegen + Genitiv").toBe("Wegen der Einsparung");
    expect(e13.errorType, "خطأ الحالة").toBe("case");
    const e14 = task("e14-nominal");
    if (e14.type !== "fill-blank") throw new Error("e14-nominal is not fill-blank");
    expect(e14.blanks.map(({ correct }) => correct), "bei/trotz/zur").toEqual(["Bei", "Trotz", "Zur"]);
    expect(e14.blanks.flatMap(({ options }) => options), "بدائل الأدوات").toEqual(
      expect.arrayContaining(["Wenn", "Obwohl", "Damit"]),
    );
    const e15 = task("e15-nominal");
    if (e15.type !== "error-correction") throw new Error("e15-nominal is not error-correction");
    expect(e15.wrongSentence, "nach + Dativ").toBe("Nach die Prüfung fahren die Studenten nach Hause.");
    expect(e15.correctWord, "Dativ المؤنث").toBe("der");
    expect(e15.errorType).toBe("case");
    expect((e15.explanation ?? "").length, "شرح الحالة").toBeGreaterThan(60);
  });

  it("keeps the punctuation awareness items marked as already correct", () => {
    for (const id of ["e10-punct", "e11-punct"]) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.isAlreadyCorrect, `${id} سليمة`).toBe(true);
      expect(exercise.correctWord, `${id} بلا تغيير`).toBe(exercise.wrongWord);
      expect((exercise.explanation ?? "").length, `${id} شرح`).toBeGreaterThan(40);
    }
    const e12 = task("e12-punct");
    if (e12.type !== "fill-blank") throw new Error("e12-punct is not fill-blank");
    expect(e12.blanks.map(({ correct }) => correct), "نقطة/نقطة/تعجب").toEqual([".", ".", "!"]);
    expect(e12.errorType, "تصنيف الترقيم").toBe("punctuation");
  });

  it("keeps the B2 review items pointing back at earlier units", () => {
    const explanations: Record<string, [string, string]> = {
      m6: ["Konjunktiv I", "النقل غير المباشر"],
      m7: ["lassen + sich", "بديل المجهول"],
      "e17-b2": ["الوسيلة", "indem"],
      "e16-b2": ["Partizip II", "الصفة المشتقة"],
    };
    for (const [id, [marker, label]] of Object.entries(explanations)) {
      const exercise = task(id);
      expect(exercise.explanation ?? "", `${id} ${label}`).toContain(marker);
    }
    const r3 = task("r3");
    if (r3.type !== "fill-blank") throw new Error("r3 is not fill-blank");
    const r3Text = `${r3.template} ${r3.explanation ?? ""}`;
    for (const marker of ["b2-03", "b2-07", "b2-08"]) {
      expect(r3Text, `مرجع مفقود: ${marker}`).toContain(marker);
    }
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB210.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    expect(new Set(bank.map(({ type }) => type)).size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    const miniIds = new Set(lessonB210.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB210.review ?? []).map(({ id }) => id));
    const writingIds = lessonB210.writing.map(({ id }) => id);
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps all four theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB210.theory.map(({ id }) => id)).toEqual(["t1", "t-praesentation", "t2", "t3"]);
    for (const block of lessonB210.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(
        block.explanationAr.split("\n\n").filter((part) => part.trim()).length,
        `${block.id} paragraphs`,
      ).toBeGreaterThanOrEqual(2);
      expect(block.whyAr?.trim().length ?? 0, `${block.id} whyAr`).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic?.trim().length ?? 0, `${block.id} مقارنة`).toBeGreaterThanOrEqual(250);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB210.theory);
    const markers = [
      "Es ist erwiesen, dass", "meiner Ansicht nach", "in gewissem Maße", "Es lässt sich kaum leugnen",
      "Zusammenfassend lässt sich sagen", "wegen der Einsparung", "nach der Ankunft",
      "Konjunktiv I لنقل الكلام", "Futur II للفعل المنجَز مستقبلاً", "Zustandspassiv",
    ];
    for (const marker of markers) expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
  });

  it("keeps every theory table carrying its teaching columns and rows", () => {
    const [t1, praesentation, t2, t3] = lessonB210.theory;
    expect(t1.table, "جدول t1").toBeDefined();
    expect(t1.table?.columns).toEqual(["الوظيفة", "العبارات", "مثال"]);
    expect(t1.table?.rows.map(({ label }) => label)).toEqual(["تأكيد", "تلطيف", "تحفظ"]);
    expect(t1.relatedRuleComparison?.title).toBe("Erörterung أم Hausarbeit؟");

    expect(praesentation.table?.columns).toEqual(["الجزء", "عبارة مفيدة", "وظيفتها"]);
    expect(praesentation.commonMistakes.map(({ wrong }) => wrong)).toEqual([
      "Ich sage jetzt über Müll. (بدون مقدمة ولا خطة)",
      "Danach ich zeige Lösungen.",
      "Danke. Ende. (في نهاية العرض)",
    ]);
    expect(praesentation.commonMistakes.map(({ classification }) => classification)).toEqual([
      "contextual-alternative",
      "error",
      "pedagogical-simplification",
    ]);
    expect(praesentation.examples.map(({ de }) => de)).toContain("Die Gliederung meines Vortrags besteht aus drei Teilen.");

    expect(t2.table?.columns).toEqual(["الأسلوب الفعلي", "الأسلوب الاسمي", "بالعربية"]);
    expect(t2.table?.rows).toHaveLength(5);
    expect(t2.commonMistakes.map(({ wrong }) => wrong)).toEqual([
      "wegen dem Regen",
      "nach die Prüfung",
      "Trotz es regnet, gehe ich.",
    ]);
    expect(t2.relatedRuleComparison?.title).toBe("أسلوب اسمي أم فعلي؟");
    expect(t2.examples.map(({ de }) => de)).toContain("Bei der Anmeldung müssen Sie Ihren Ausweis vorlegen.");

    expect(t3.table?.columns).toEqual(["الوحدة", "القاعدة", "مثال"]);
    expect(t3.table?.rows).toHaveLength(10);
    expect(t3.table?.rows.map(({ label }) => label)).toContain("9 — سوق العمل");
    expect(t3.relatedRuleComparison?.title).toBe("متى أستعمل أي طبقة؟");
    expect(t3.examples.map(({ de }) => de)).toContain("Das Seminar, an dem ich teilnehme, beginnt im Oktober.");
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB210.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const expectedCardIds = ["fc1", "fc2", "fc3", "fc4", "fc5", "fc6", "fc7", "fc8", "fc9", "fc10", "fc11", "fc12"];
    expect(cards.map(({ id }) => id)).toEqual(expectedCardIds);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
      expect(card.level, `${card.id} level`).toBe("B2");
    }
    for (const head of ["die Zulassung", "der Semesterbeitrag", "die Gliederung", "die Einschränkung"])
      expect(cards.map(({ de }) => de), `بطاقة مفقودة ${head}`).toContain(head);
    const corpus = JSON.stringify([
      lessonB210.reading?.paragraphs,
      lessonB210.reading?.glossary,
      lessonB210.theory,
      lessonB210.practiceBank,
      lessonB210.miniTest,
      lessonB210.writing,
      lessonB210.listening,
    ]).toLowerCase();
    for (const card of cards) {
      const words = card.de
        .replace(/^(der|die|das|sich)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLowerCase());
      const anchored = words.length
        ? words.some((word) => corpus.includes(word.slice(0, Math.max(4, word.length - 3))))
        : true;
      expect(anchored, `بطاقة بلا مرساة ${card.de}`).toBe(true);
    }
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB210.reading;
    expect(reading?.id).toBe("read-b2-10");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Der erste Monat an einer deutschen Universität");
    expect(reading?.titleAr).toBe("الشهر الأول في جامعة ألمانية");
    expect(reading?.paragraphs).toHaveLength(6);
    expect(reading?.paragraphsAr).toHaveLength(6);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length, "كلمات القراءة").toBeGreaterThanOrEqual(320);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    expect(reading?.glossary.map(({ de }) => de)).toEqual([
      "die Zulassung", "die Einschreibung", "der Semesterbeitrag", "der Sprachnachweis", "die Hausarbeit",
      "der Beleg", "die Quelle", "die Einschränkung", "die Gliederung", "das Referat",
    ]);
    for (const item of reading!.glossary) {
      const words = item.de
        .replace(/^(der|die|das|sich)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLowerCase());
      const found = words.some((word) => text.includes(word.slice(0, Math.max(4, word.length - 3))));
      expect(found, `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
      expect(item.noteAr?.trim().length ?? 0, `${item.de} ملاحظة`).toBeGreaterThan(5);
    }

    expect(reading?.questions.map(({ id }) => id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(reading?.questions.map(({ paragraph }) => paragraph)).toEqual([1, 2, 4, 5]);
    for (const question of reading!.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(reading!.paragraphs.join(" ").includes(answer) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(
        false,
      );
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);
    for (const anchor of readingAnchors) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["zulassung", "semesterbeitrag", "sprachnachweis", "einschränkung", "gliederung", "referat"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as the formal register the lesson teaches", () => {
    const rounds = (lessonB210.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Obwohl ein Auslandsstudium mit Sprachbarrieren und Heimweh verbunden ist, überwiegen meiner Meinung nach die Vorteile.",
      "Ich würde regelmäßigen Kontakt mit der Familie halten und neue soziale Kreise aufbauen.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
    expect(JSON.stringify(rounds), "سجل أكاديمي في التفاعل").toContain("meiner Meinung nach");
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB210.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-10-1");
    expect(mediation?.type).toBe("merge-info");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
    expect(mediation?.keyPointsAr?.length, "نقاط المفتاح").toBeGreaterThanOrEqual(3);
  });

  it("removes unsourced figures, context-dependent false errors, and misleading translations", () => {
    const text = JSON.stringify(lessonB210);
    expect(text).not.toMatch(/\d+\s*%|~\d+/);
    expect(text).not.toContain("Sprich von Tag eins an");
    expect(text).not.toContain("الحروف العربية (بـ، عن، في) تطابق");
    expect(text).not.toContain("والقائمة الشهيرة");
    expect(text).not.toContain("Ich freue mich über den Urlaub. (مستقبل)");
    expect(text).not.toMatch(/على الأكثر/);
    expect(text).not.toContain("~300");
    expect(text).not.toContain("75 دقيقة");
    expect(text).not.toContain("ستُّ قواعد");
    expect(text).not.toContain("can itself");
    expect(text).not.toContain("سقف علامة");
    expect(text).not.toContain("جاهزاً للامتحانات");
    expect(text).not.toContain("تطابق عباراتنا");
    expect(text).not.toContain("gv");
    expect(text).not.toContain("عامية");
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB210.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB210.id, [goalEvent("z1", "w1")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB210.id, [
        goalEvent("z1", "w1"),
        goalEvent("z1", "e4"),
        goalEvent("z1", "e7"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB210.id, [
        goalEvent("z1", "w1"),
        goalEvent("z1", "e4"),
        goalEvent("z1", "e7", false),
      ]),
    ).toBe("pending");
  });
});
