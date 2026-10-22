import path from "node:path";
import { describe, expect, it } from "vitest";

import { isPlayableMp3 } from "@/lib/audio/mp3-file";
import { lessonB111 } from "@/data/lessons/b1/b1-11";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["ging", "gehe", "gegangen", "geht"], key: "ging" },
  "ex-b1-11-4": {
    options: [
      "Der Mann, der mir geholfen hat, ist nett.",
      "Der Mann, der hat mir geholfen, ist nett.",
      "Der Mann, der hat geholfen mir, ist nett.",
    ],
    key: "Der Mann, der mir geholfen hat, ist nett.",
  },
  "ex-b1-11-5": { options: ["في رأيي", "في الواقع", "من ناحية أخرى"], key: "في رأيي" },
  "ex-b1-11-6": { options: ["gingen", "gehen", "gegangen"], key: "gingen" },
  "ex-b1-11-7": { options: ["andererseits", "damit", "nachdem"], key: "andererseits" },
  "ex-b1-11-13": { options: ["Werden", "Wird", "Wirst", "Werdet"], key: "Werden" },
  "mt-b1-11-1": {
    options: [
      "Die Frau, die dort steht, ist meine Lehrerin.",
      "Die Frau, der dort steht, ist meine Lehrerin.",
      "Die Frau, das dort steht, ist meine Lehrerin.",
    ],
    key: "Die Frau, die dort steht, ist meine Lehrerin.",
  },
  "mt-b1-11-3": { options: ["التسجيل", "الامتحان", "النجاح"], key: "التسجيل" },
  "mt-b1-11-4": { options: ["hätte", "habe", "hatte"], key: "hätte" },
  "lsq-b1-11-1": {
    options: ["Am Donnerstag, den 15., um 14 Uhr", "Am Freitag schon um 9 Uhr früh", "Am Montag um dieselbe Zeit"],
    key: "Am Donnerstag, den 15., um 14 Uhr",
  },
  "lsq-b1-11-2": {
    options: ["Den Lebenslauf und die Zeugnisse", "Ein kleines Geschenk für den Chef", "Nichts, er braucht gar keine Unterlagen"],
    key: "Den Lebenslauf und die Zeugnisse",
  },
  "lsq-b1-11-3": {
    options: ["Die Busse fahren häufiger", "Die Tickets sind billiger", "Die Busse fahren nur am Wochenende"],
    key: "Die Busse fahren häufiger",
  },
  "lsq-b1-11-4": {
    options: ["Weil er kürzer warten muss", "Weil er keine Fahrkarte braucht", "Weil er am Wochenende arbeitet"],
    key: "Weil er kürzer warten muss",
  },
  "lsq-b1-11-5": {
    options: ["Ein günstigeres Monatsticket", "Einen neuen Zug nach Berlin", "Kostenlose Fahrräder für alle"],
    key: "Ein günstigeres Monatsticket",
  },
  "lsq-b1-11-6": { options: ["An der Haltestelle Rathaus", "Am Bahnhof gegenüber", "Auf dem Platz am Markt"], key: "An der Haltestelle Rathaus" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r2: { correct: ["meines"], options: [["meines", "meins", "meinem", "meiner"]] },
  "ex-b1-11-1": { correct: ["die"], options: [["die", "der", "das"]] },
  "ex-b1-11-2": { correct: ["hätte"], options: [["hätte", "habe", "hatte"]] },
  "ex-b1-11-3": { correct: ["damit"], options: [["damit", "um", "zu"]] },
  "ex-b1-11-14": {
    correct: ["das", "Falls"],
    options: [
      ["das", "der", "die"],
      ["Falls", "Damit", "Nachdem"],
    ],
  },
  "mt-b1-11-2": { correct: ["um"], options: [["um", "damit", "zu"]] },
  "mt-b1-11-5": { correct: ["wird"], options: [["wird", "ist", "hat"]] },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  r3: { wrongWord: "spiele", correctWord: "spielte", options: ["spielte", "spiele", "spielt", "spielen"] },
  "ex-b1-11-8": { wrongWord: "der", correctWord: "die", options: ["die", "der", "das", "den"] },
  "ex-b1-11-15": {
    wrongWord: "hatte gegessen",
    correctWord: "gegessen hatte",
    options: ["gegessen hatte", "hatte gegessen", "gegessen hat", "hatte essen"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  "ex-b1-11-10": [
    { left: "Passiv", right: "المبني للمجهول" },
    { left: "Konjunktiv II", right: "الشرط غير الواقعي" },
    { left: "Relativsatz", right: "الجملة الموصولة" },
    { left: "Genitiv", right: "المضاف إليه" },
  ],
};

const expectedTransformations: string[] = ["ex-b1-11-11", "wr-b1-11-1", "wr-b1-11-2"];

const expectedTransformationAnswers: Record<string, string[]> = {
  "ex-b1-11-11": [
    "Das neue Krankenhaus wird in unserer Stadt gebaut",
    "Das neue Krankenhaus wird in unserer Stadt gebaut.",
  ],
  "wr-b1-11-1": ["Das neue Krankenhaus wird in unserer Stadt gebaut."],
  "wr-b1-11-2": ["Nachdem ich gegessen hatte, bin ich spazieren gegangen."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  "ex-b1-11-9": {
    tokens: ["Der", "Mann", ",", "der", "mir", "geholfen", "hat", ",", "ist", "nett", "."],
    correctSentence: "Der Mann, der mir geholfen hat, ist nett.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB111.review ?? []),
    ...lessonB111.practiceBank,
    ...lessonB111.miniTest,
    ...lessonB111.writing,
    ...lessonB111.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-11 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB111.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-11 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-11 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB111.id,
    taskId,
  };
}

describe("B1-11 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB111).toMatchObject({
      id: "b1-11",
      unitId: "b1-11",
      level: "B1",
      order: 1,
      titleDe: "B1 kompakt — Abschlusswiederholung",
      titleAr: "B1 الشامل — مراجعة ختامية",
    });
    expect("duration" in lessonB111).toBe(false);
    expect(lessonB111.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|الخريطة الكاملة/i);

    const meta = lessonMetaList.find((item) => item.id === "b1-11");
    expect(meta).toMatchObject({ id: "b1-11", unitId: "b1-11", level: "B1", order: 1, summary: lessonB111.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("adds a second disclosed TTS listening scene with six playable MP3 lines", () => {
    expect(lessonB111.listening.items).toHaveLength(3);
    const item = lessonB111.listening.items.find((candidate) => candidate.id === "ls-b1-11-2");
    expect(item?.title).toBe("حوار: خطة الحافلات الجديدة");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.lines).toHaveLength(6);
    for (const line of item?.lines ?? []) {
      expect(line.audioSrc).toContain("/audio/lessons/b1-11/ls-b1-11-2-");
      expect(line.audioSrc?.endsWith(".mp3")).toBe(true);
      expect(isPlayableMp3(path.join(process.cwd(), "public", line.audioSrc!.slice(1))), line.audioSrc).toBe(true);
    }
    expect(lessonB111.listening.questions).toHaveLength(6);
    expect(lessonB111.listening.questions.filter((question) => question.itemId === "ls-b1-11-2")).toHaveLength(3);
    const newItem = lessonB111.listening.items.find((candidate) => candidate.id === "ls-b1-11-3");
    expect(newItem?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(newItem?.lines).toHaveLength(6);
    for (const line of newItem?.lines ?? []) {
      expect(line.audioSrc).toContain("/audio/lessons/b1-11/ls-b1-11-3-");
      expect(line.audioSrc?.endsWith(".mp3")).toBe(true);
      expect(isPlayableMp3(path.join(process.cwd(), "public", line.audioSrc!.slice(1))), line.audioSrc).toBe(true);
    }
    expect(lessonB111.listening.questions.filter((question) => question.itemId === "ls-b1-11-3")).toHaveLength(1);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB111.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual([
      "ex-b1-11-1",
      "ex-b1-11-2",
      "ex-b1-11-3",
      "ex-b1-11-4",
      "ex-b1-11-6",
      "mt-b1-11-1",
      "mt-b1-11-2",
    ]);
    expect(goal("z2").evidence?.exerciseIds).toEqual([
      "lsq-b1-11-1",
      "lsq-b1-11-2",
      "lsq-b1-11-3",
      "lsq-b1-11-4",
      "lsq-b1-11-5",
      "lsq-b1-11-6",
    ]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["wr-b1-11-1", "wr-b1-11-2"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["ex-b1-11-5", "ex-b1-11-7"]);
    for (const item of lessonB111.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB111.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|أتقن|أتحدث/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB111.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    const listeningIds = lessonB111.listening.questions.map(({ id }) => id).sort();
    const evidenceIds = lessonB111.lernziele
      .flatMap((item) => item.evidence?.exerciseIds ?? [])
      .filter((id) => id.startsWith("lsq-"))
      .sort();
    expect(evidenceIds).toEqual(listeningIds);
    expect(
      lessonB111.listening.questions.map(({ id, itemId }) =>
        getListeningQuestionTaskId("b1-11", itemId, id, false),
      ),
    ).toEqual([
      "listening:ls-b1-11-1:lsq-b1-11-1",
      "listening:ls-b1-11-1:lsq-b1-11-2",
      "listening:ls-b1-11-2:lsq-b1-11-3",
      "listening:ls-b1-11-2:lsq-b1-11-4",
      "listening:ls-b1-11-2:lsq-b1-11-5",
      "listening:ls-b1-11-3:lsq-b1-11-6",
    ]);
    expect(getListeningQuestionTaskId("b1-11", "ls-b1-11-1", "lsq-b1-11-1", true)).toBe(
      "listening-transcript:b1-11:ls-b1-11-1:lsq-b1-11-1",
    );
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
    expect(
      byType("error-correction").filter((id) => id in expectedErrorCorrections),
      "تصحيحات مغطّاة",
    ).toEqual(byType("error-correction"));
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(
      byType("matching"),
    );
    const transformations = byType("transformation");
    expect(transformations.filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      transformations,
    );
    const wordOrder = byType("word-ordering");
    expect(wordOrder.filter((id) => id in expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(wordOrder);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, expected] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expected.key);
      for (const [index, option] of exercise.options.entries()) {
        const result = evaluateExercise(exercise, option);
        expect(result.isCorrect, `${id}: ${option}`).toBe(index === exercise.correctIndex);
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
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
  });

  it("offers a correct word among the error-correction options (the no-error option is added by the interface)", () => {
    for (const exercise of allTasks()) {
      if (exercise.type !== "error-correction" || exercise.isAlreadyCorrect) continue;
      expect(exercise.options, `${exercise.id}`).toContain(exercise.correctWord);
    }
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
    }
  });

  it("demands the passiv form in the ex-b1-11-11 transformation", () => {
    const exercise = task("ex-b1-11-11");
    if (exercise.type !== "transformation") throw new Error("ex-b1-11-11 is not transformation");
    expect(exercise.acceptedAnswers?.every((answer) => answer.includes("wird") && answer.includes("gebaut"))).toBe(
      true,
    );
    expect(evaluateExercise(exercise, "Man baut das neue Krankenhaus in unserer Stadt.").isCorrect).toBe(false);
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
        evaluateExercise(exercise, [{ ...first, right: second.right }, { ...second, right: first.right }, ...rest]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB111.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    for (const type of ["multiple-choice", "fill-blank", "error-correction", "matching", "transformation", "word-ordering", "dictation"]) {
      expect(types.has(type as Exercise["type"]), `نوع مفقود: ${type}`).toBe(true);
    }
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    const miniIds = new Set(lessonB111.miniTest.map(({ id }) => id));
    for (const item of bank) {
      if (item.type === "fill-blank") {
        expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      }
    }
  });

  it("keeps the two theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB111.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB111.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB111.theory);
    for (const rule of ["Relativsatz", "Passiv", "Konjunktiv II", "Genitiv"]) {
      expect(theoryText, `بنية مفقودة: ${rule}`).toContain(rule);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB111.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
    }
    const corpus = JSON.stringify([
      lessonB111.reading?.paragraphs,
      lessonB111.reading?.glossary,
      lessonB111.theory,
      lessonB111.practiceBank,
      lessonB111.miniTest,
      lessonB111.writing,
      lessonB111.listening,
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
    const reading = lessonB111.reading;
    expect(reading?.id).toBe("read-b1-11");
    expect(reading?.textType).toBe("brief");
    expect(reading?.titleDe).toBe("Ein Brief vom Bildungszentrum");
    expect(reading?.titleAr).toBe("رسالة من مركز التعليم");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);

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

    for (const anchor of ["die unterlagen, die", "wenn sie den früheren termin", "trotzdem bitten wir"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("removes exam timings, Goethe claims and pass-rate claims", () => {
    const text = JSON.stringify(lessonB111) + JSON.stringify(lessonMetaList.find((m) => m.id === "b1-11"));
    expect(text).not.toMatch(/Goethe|Prüfungsteil „|65 دقيقة|40 دقيقة|60 دقيقة|15 دقيقة|دقيقة|Minuten|زوال|نسبة النجاح|mock|امتحان B1/);
    expect(text).not.toMatch(/zwei Wochen|am längsten|مهم لامتحانات/);
  });

  it("keeps the interaction best reply as one complete sentence", () => {
    const round = lessonB111.interaction?.[0].rounds[1] as unknown as { options: { de: string; best?: boolean }[] };
    const best = round.options.find((o) => o.best);
    expect(best?.de).toBe("Ich denke, die Produktivität ist höher, weil man sich besser konzentrieren kann, obwohl die Trennung zwischen Arbeit und Freizeit schwerfällt.");
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((m) => m.id === "b1-11");
    expect(meta?.titleAr).toBe(lessonB111.titleAr);
    expect(meta?.titleDe).toBe(lessonB111.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB111.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB111.id, [goalEvent("z1", "ex-b1-11-1")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB111.id, [
        goalEvent("z1", "ex-b1-11-1"),
        goalEvent("z1", "ex-b1-11-2"),
        goalEvent("z1", "ex-b1-11-3"),
        goalEvent("z1", "ex-b1-11-4"),
        goalEvent("z1", "ex-b1-11-6"),
        goalEvent("z1", "mt-b1-11-1"),
        goalEvent("z1", "mt-b1-11-2"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonB111.id, [
        goalEvent("z1", "ex-b1-11-1"),
        goalEvent("z1", "ex-b1-11-2", false),
        goalEvent("z1", "ex-b1-11-3"),
        goalEvent("z1", "ex-b1-11-4"),
        goalEvent("z1", "ex-b1-11-6"),
        goalEvent("z1", "mt-b1-11-1"),
        goalEvent("z1", "mt-b1-11-2"),
      ]),
    ).toBe("pending");
  });
});
