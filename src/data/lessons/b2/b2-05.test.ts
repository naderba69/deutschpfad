import { describe, expect, it } from "vitest";

import { lessonB205 } from "@/data/lessons/b2/b2-05";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["weil", "dass", "wenn", "ob"], key: "weil" },
  r2: { options: ["deshalb", "aber", "und", "oder"], key: "deshalb" },
  e1: { options: ["indem", "anstatt", "ohne", "damit"], key: "indem" },
  e2: { options: ["Anstatt", "Indem", "Ohne", "Damit"], key: "Anstatt" },
  e8: { options: ["سوء الفهم", "التواصل", "السلوك", "الإنصات"], key: "سوء الفهم" },
  e12: { options: ["mal", "ja", "denn", "wohl"], key: "mal" },
  e16: { options: ["brachte ... zum Ausdruck", "machte ... sofort aus", "stellte ... kurz vor", "gab ... schließlich auf"], key: "brachte ... zum Ausdruck" },
  e17: { options: ["الشركة توفّر أجهزة جديدة", "الشركة تبيع أجهزة جديدة", "الشركة تصلح أجهزة جديدة", "الشركة ترفض الأجهزة"], key: "الشركة توفّر أجهزة جديدة" },
  e18: { options: ["tritt ... in Kraft", "kommt ... zu Ende", "steht ... zur Rede", "nimmt ... Teil"], key: "tritt ... in Kraft" },
  e20: { options: ["يشككون في النتائج", "يؤكدون النتائج", "ينشرون النتائج", "يعدلون النتائج"], key: "يشككون في النتائج" },
  m1: { options: ["Anstatt", "Indem", "Ohne", "Damit"], key: "Anstatt" },
  m2: { options: ["es sei denn", "indem", "ohne", "damit"], key: "es sei denn" },
  m6: { options: ["Doch", "Ja", "Mal", "Wohl"], key: "Doch" },
  q1: { options: ["indem man aktiv zuhört", "indem man spricht", "indem man schweigt", "indem man schreibt"], key: "indem man aktiv zuhört" },
  q2: { options: ["morgen, es sei denn, es regnet stark", "heute Abend, gleich nach der Arbeit", "übermorgen, wenn alle Zeit haben", "nie, das Treffen wurde abgesagt"], key: "morgen, es sei denn, es regnet stark" },
  q3: { options: ["je nachdem, wie das Wetter wird", "sofort, noch in dieser Stunde", "morgen früh, noch vor der Arbeit", "gar nicht, sie entscheiden später"], key: "je nachdem, wie das Wetter wird" },
  q4: { options: ["indem sie alles klar und respektvoll besprechen", "indem sie sofort neue Aufgaben verteilen", "indem sie das Gespräch beenden", "indem sie ohne Rückfragen entscheiden"], key: "indem sie alles klar und respektvoll besprechen" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["während"], options: [["während", "als", "bevor"]] },
  e6: {
    correct: ["es sei denn", "Statt dass"],
    options: [["es sei denn", "indem", "anstatt"], ["Statt dass", "Anstatt zu", "Ohne zu"]],
  },
  e13: {
    correct: ["Doch", "denn", "ja"],
    options: [["Doch", "Ja", "Mal", "Wohl"], ["denn", "mal", "ja", "doch"], ["ja", "denn", "mal", "doch"]],
  },
  e14: {
    correct: ["folglich", "Demnach"],
    options: [["folglich", "indem", "obwohl", "während"], ["Demnach", "Indem", "Ohne", "Statt"]],
  },
  m7: {
    correct: ["ja", "denn"],
    options: [["ja", "doch", "mal", "denn"], ["ja", "doch", "mal", "denn"]],
  },
  m5: {
    correct: ["indem", "ohne"],
    options: [["indem", "anstatt", "ohne"], ["indem", "anstatt", "ohne"]],
  },
  w2: {
    correct: ["Anstatt", "ohne"],
    options: [["Anstatt", "Ohne"], ["Anstatt", "ohne"]],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "sagen", correctWord: "zu sagen", options: ["zu sagen", "sagen", "gesagt", "sagt"] },
  e9: {
    wrongWord: "entscheiden wir",
    correctWord: "entscheiden wir",
    options: ["entscheiden wir", "wir entscheiden", "entscheiden wir entscheiden", "wir entscheiden wir"],
  },
  e21: {
    wrongWord: "folglich er bestand",
    correctWord: "folglich bestand er",
    options: ["folglich bestand er", "folglich er bestand", "folglich bestand er bestand", "folglich er bestand er"],
  },
  e22: {
    wrongWord: "in Ausdruck",
    correctWord: "zum Ausdruck",
    options: ["zum Ausdruck", "in Ausdruck", "auf Ausdruck", "bei Ausdruck"],
  },
  m4: {
    wrongWord: "er schläft",
    correctWord: "zu schlafen",
    options: ["zu schlafen", "er schläft", "schlafen", "geschlafen"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "indem", right: "بأن/بواسطة" },
    { left: "anstatt...zu", right: "بدلاً من أن" },
    { left: "ohne...zu", right: "دون أن" },
    { left: "es sei denn", right: "إلا إذا" },
  ],
  e11: [
    { left: "doch", right: "بلى! (رد على نفي)" },
    { left: "ja", right: "تأكيد لحقيقة معلومة" },
    { left: "mal", right: "تخفيف الطلب" },
    { left: "denn", right: "فضول في السؤال" },
    { left: "eigentlich", right: "سؤال لطيف بالمناسبة" },
    { left: "wohl", right: "على الأرجح" },
  ],
};

const modalParticles = ["doch", "ja", "mal", "denn", "eigentlich", "wohl"];

const expectedTransformations: string[] = ["e7", "e19", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Anstatt zu kritisieren, sollte man loben", "Anstatt zu kritisieren, sollte ich loben"],
  e19: ["zum Ausdruck", "zum Ausdruck.", "Er brachte seine Meinung zum Ausdruck.", "er brachte seine meinung zum ausdruck."],
  w1: ["Man lernt, indem man übt", "Man lernt, indem man übt."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Man", "lernt", ",", "indem", "man", "übt", "."],
    correctSentence: "Man lernt, indem man übt.",
  },
  e15: {
    tokens: ["Er", "übte", "viel", ",", "folglich", "bestand", "er", "."],
    correctSentence: "Er übte viel, folglich bestand er.",
  },
  m3: {
    tokens: ["Er", "ging", ",", "ohne", "ein", "Wort", "zu", "sagen", "."],
    correctSentence: "Er ging, ohne ein Wort zu sagen.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB205.review ?? []),
    ...lessonB205.practiceBank,
    ...lessonB205.miniTest,
    ...lessonB205.writing,
    ...(lessonB205.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-05 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB205.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-05 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-05 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB205.id,
    taskId,
  };
}

describe("B2-05 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB205).toMatchObject({
      id: "b2-05",
      unitId: "b2-05",
      level: "B2",
      order: 1,
      titleDe: "Psychologie und Kommunikation",
      titleAr: "علم النفس والتواصل",
    });
    expect("duration" in lessonB205).toBe(false);
    expect(lessonB205.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-05");
    expect(meta).toMatchObject({ id: "b2-05", unitId: "b2-05", level: "B2", order: 1, estimatedMinutes: 75 });
    expect(meta?.summary).toBe(lessonB205.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB205.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e4", "e7", "m1", "m3", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e6", "m2", "q2", "q3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e11", "e12", "e13", "m6", "m7"]);
    expect(goal("z5").evidence?.exerciseIds).toEqual(["e14", "e15"]);
    for (const item of lessonB205.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB205.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB205.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      expect(evidence.taskIds?.length, `${item.id} taskIds`).toBe(evidence.exerciseIds?.length);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b2-05", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-05", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-05", "l2", "q3", false)).toBe("listening:l2:q3");
    expect(getListeningQuestionTaskId("b2-05", "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId("b2-05", "l1", "q1", true)).toBe("listening-transcript:b2-05:l1:q1");
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l3:q4"]);
    expect(goal("z3").evidence?.taskIds?.slice(2)).toEqual(["listening:l2:q2", "listening:l2:q3"]);
    const transcriptIds = lessonB205.lernziele.flatMap(
      (item) => item.evidence?.taskIds?.filter((taskId) => taskId.startsWith("listening-transcript:")) ?? [],
    );
    expect(transcriptIds, "كشف النصّ لا يُحتسب أداءً").toEqual([]);
  });

  it("enumerates every auditable task type so no new task escapes the guard", () => {
    const byType = (type: Exercise["type"]) =>
      allTasks()
        .filter((item) => item.type === type)
        .map(({ id }) => id)
        .sort();
    expect(byType("multiple-choice").filter((id) => id in expectedMultipleChoice), "MCQ مغطّاة").toEqual(
      byType("multiple-choice"),
    );
    expect(byType("fill-blank").filter((id) => id in expectedFillBlanks), "فراغات مغطّاة").toEqual(
      byType("fill-blank"),
    );
    expect(byType("error-correction").filter((id) => id in expectedErrorCorrections), "تصحيحات مغطّاة").toEqual(
      byType("error-correction"),
    );
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(byType("matching"));
    expect(byType("transformation").filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      byType("transformation"),
    );
    expect(byType("word-ordering").filter((id) => id in expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(
      byType("word-ordering"),
    );
    expect(byType("dictation"), "إملاء").toEqual(["e10", "w3"]);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, expected] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expected.key);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(
          index === exercise.correctIndex,
        );
      }
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank markers`).toBe(expected.correct.length);
      expect(exercise.template, `${id} markers`).not.toMatch(/_{4,}/);
      for (const [index, options] of expected.options.entries()) {
        for (const option of options) {
          const selected = expected.correct.map((value, position) => (position === index ? option : value));
          expect(evaluateExercise(exercise, selected).isCorrect, `${id} ${index} ${option}`).toBe(
            option === expected.correct[index],
          );
        }
      }
    }
  });

  it("checks error-correction: one wrong span, a correct option, and rejected distractors", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} wrong`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correct`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options, `${id} contains key`).toContain(expected.correctWord);
      expect(exercise.wrongSentence, `${id} contains wrongWord`).toContain(expected.wrongWord);
      if (!exercise.isAlreadyCorrect) {
        for (const option of exercise.options) {
          expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
            option === expected.correctWord,
          );
        }
      }
    }
  });

  it("keeps the already-correct trap from paying out as a correction", () => {
    const e9 = task("e9");
    if (e9.type !== "error-correction") throw new Error("e9 is not error-correction");
    expect(e9.isAlreadyCorrect, "e9 مصيدة جملة صحيحة").toBe(true);
    expect(e9.wrongWord, "لا تصحيح في جملة صحيحة").toBe(e9.correctWord);
    expect(e9.wrongSentence, "جملة صحيحة أصلًا").toMatch(/Je nachdem, wie du reagierst, entscheiden wir\./);
    expect(evaluateExercise(e9, e9.wrongWord).isCorrect, "المصيدة لا تُدفع").toBe(false);
  });

  it("keeps the result connectors in verb-second position, never verb-final", () => {
    const e21 = task("e21");
    if (e21.type !== "error-correction") throw new Error("e21 is not error-correction");
    const fixed = e21.wrongSentence.replace(e21.wrongWord, e21.correctWord);
    expect(fixed, "الترتيب المصحّح").toBe("Er hat viel geübt, folglich bestand er die Prüfung.");
    expect(e21.wrongWord, "الخطأ يشمل الرابط والفعل").toContain(" ");
    expect(e21.correctWord).toMatch(/^folglich\s/);
    expect(e21.correctWord).not.toMatch(/^folglich\s(er|sie|wir|man)\s/);
    expect(e21.errorType).toBe("word-order");

    const e15 = task("e15");
    if (e15.type !== "word-ordering") throw new Error("e15 is not word-ordering");
    expect(e15.tokens[e15.tokens.indexOf("folglich") + 1], "الفعل بعد الرابط مباشرة").toBe("bestand");
  });

  it("keeps every Funktionsverbgefüge on its fixed preposition", () => {
    const theoryText = JSON.stringify(lessonB205.theory);
    for (const fvg of [
      "zum Ausdruck bringen",
      "zur Verfügung stellen",
      "in Kraft treten",
      "in Frage stellen",
      "unter Beweis stellen",
      "in Betracht ziehen",
    ]) {
      expect(theoryText, `تركيب مفقود: ${fvg}`).toContain(fvg);
    }
    const e22 = task("e22");
    if (e22.type !== "error-correction") throw new Error("e22 is not error-correction");
    expect(e22.correctWord.split(" ")[0], "حرف الجر الثابت").toBe("zum");
    expect(e22.options.filter((option) => option.includes("Ausdruck"))).toHaveLength(4);
    expect(e22.options.filter((option) => option.startsWith("zum ")), "مفتاح واحد فقط").toHaveLength(1);
    expect(e22.wrongSentence.replace(e22.wrongWord, e22.correctWord)).toContain("zum Ausdruck.");
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "הכל נכון אבל לא בעברית").isCorrect, `${id} مفتوح`).toBe(false);
    }
  });

  it("keeps every word-ordering item solvable with exactly the tokens of its sentence", () => {
    for (const [id, expected] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(expected.tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(expected.correctSentence);
      const fromSentence = expected.correctSentence.match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...exercise.tokens].sort(), `${id} مجمّع التوكنات`).toEqual([...fromSentence].sort());
      expect(evaluateExercise(exercise, fromSentence).isCorrect, `${id} بالترتيب`).toBe(true);
      expect(evaluateExercise(exercise, [...fromSentence].reverse()).isCorrect, `${id} معكوس`).toBe(false);
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
        evaluateExercise(exercise, [
          { ...first, right: second.right },
          { ...second, right: first.right },
          ...rest,
        ]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("keeps the modal-particle inventory closed to the six particles the lesson teaches", () => {
    const e11 = task("e11");
    if (e11.type !== "matching") throw new Error("e11 is not matching");
    expect(e11.pairs.map(({ left }) => left).sort(), "جسيمات المطابقة").toEqual([...modalParticles].sort());
    for (const id of ["e13", "m7"]) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      for (const blank of exercise.blanks) {
        expect(modalParticles, `${id} جسيم خارج القائمة`).toContain(blank.correct.toLowerCase());
      }
    }
    const placement = task("e13");
    if (placement.type !== "fill-blank") throw new Error("e13 is not fill-blank");
    expect(placement.template, "جسيم في الوسط بعد الفعل").toContain("Du kommst nicht? ___ , ich komme!");
    expect(placement.template.trim().endsWith("___"), "جسيم في نهاية الجملة").toBe(false);
  });

  it("keeps dictation in the advanced-connector register the lesson teaches", () => {
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText).toBe("Er verließ den Raum, ohne ein Wort zu sagen.");
    expect(e10.audioText, "بنية ohne ... zu").toMatch(/ohne .+ zu sagen/);
    expect(e10.errorType).toBe("spelling");

    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText).toBe("Man vermeidet Missverständnisse, indem man aktiv zuhört.");
    expect(w3.audioText, "بنية indem").toMatch(/,\sindem\s/);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB205.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB205.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB205.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB205.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps the three theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB205.theory.map(({ id }) => id)).toEqual(["t1", "t2", "t6"]);
    for (const block of lessonB205.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB205.theory);
    for (const marker of ["indem", "es sei denn", "je nachdem", "sodass", "folglich", "demnach", "doch", "mal"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB205.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
      expect(card.level, `${card.id} level`).toBe("B2");
    }
    const corpus = JSON.stringify([
      lessonB205.reading?.paragraphs,
      lessonB205.reading?.glossary,
      lessonB205.theory,
      lessonB205.practiceBank,
      lessonB205.miniTest,
      lessonB205.writing,
      lessonB205.listening,
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
    const reading = lessonB205.reading;
    expect(reading?.id).toBe("read-b2-05");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Ein Streit, der eine Abteilung verändert hat");
    expect(reading?.titleAr).toBe("خِلافٌ غيّر قسمًا كاملًا");
    expect(reading?.paragraphs).toHaveLength(6);
    expect(reading?.paragraphsAr).toHaveLength(6);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length, "كلمات القراءة").toBeGreaterThanOrEqual(320);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
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

    for (const anchor of [
      "ein streit zwischen zwei gruppen einer abteilung",
      "sodass am ende kaum noch jemand etwas sagte",
      "anstatt die beiden gruppen räumlich zu trennen",
      "ohne unterbrechung, ohne bewertung und ohne zwischenrufe",
      "wie ihre eigene arbeit von der anderen seite wahrgenommen wurde",
      "indem er selbst nur mitschrieb",
      "es sei denn, eine seite bestand",
      "je nachdem, wie schnell eine einigung gelang",
      "in kraft traten",
      "brachte seine überraschung darüber zum ausdruck",
      "stellt den erfolg teilweise in frage",
      "die tieferen gründe nicht in betracht zieht",
      "für ihre darstellung stützt sie sich",
      "die veröffentlichte fassung der regeln",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["indem", "es sei denn", "je nachdem", "sodass", "folglich", "demnach", "in kraft", "zum ausdruck", "in frage", "in betracht"]) {
      expect(readingText, `رابط متقدّم مفقود: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB205.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Einerseits werden einfache Tätigkeiten automatisiert. Andererseits entstehen neue Berufe, die Kreativität erfordern.",
      "Zum Beispiel im Bereich Datenanalyse und KI-Ethik. Je mehr Technologie, desto wichtiger wird menschliche Kontrolle.",
      "Meiner Ansicht nach sollten beide zusammenarbeiten. Während der Staat Grundbildung sichert, sollten Firmen spezifische Schulungen anbieten.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-05");
    expect(meta?.titleAr).toBe(lessonB205.titleAr);
    expect(meta?.titleDe).toBe(lessonB205.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z5"), lessonB205.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z5"), lessonB205.id, [goalEvent("z5", "e14")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z5"), lessonB205.id, [goalEvent("z5", "e14"), goalEvent("z5", "e15")]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z5"), lessonB205.id, [goalEvent("z5", "e14"), goalEvent("z5", "e15", false)]),
    ).toBe("pending");
  });
});
