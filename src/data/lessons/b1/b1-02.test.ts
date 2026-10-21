import { describe, expect, it } from "vitest";

import { lessonB102 } from "@/data/lessons/b1/b1-02";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["war", "hatte", "bin", "habe"], key: "war" },
  r2: { options: ["habe ... gelesen", "bin ... gelesen", "habe ... gelest", "bin ... gelest"], key: "habe ... gelesen" },
  e1: { options: ["ging", "geht", "gegangen", "gehe"], key: "ging" },
  e2: { options: ["arbeitete", "arbeitet", "gearbeitet", "arbeitte"], key: "arbeitete" },
  e8: { options: ["طلب الوظيفة", "السيرة الذاتية", "مقابلة العمل", "الراتب"], key: "طلب الوظيفة" },
  m1: { options: ["kam", "kommt", "gekommen", "komme"], key: "kam" },
  m2: { options: ["hatte ... gegessen", "hat ... gegessen", "hatte ... geessen", "war ... gegessen"], key: "hatte ... gegessen" },
  q1: { options: ["Programmierer", "Lehrer", "Verkäufer im Supermarkt", "Ingenieur für Maschinen"], key: "Programmierer" },
  q2: {
    options: ["viel recherchiert", "Deutsch gelernt", "ein Buch geschrieben", "ein Praktikum gemacht"],
    key: "viel recherchiert",
  },
  q3: { options: ["Sie wurde sicherer", "Sie hörte auf", "Sie wechselte die Firma", "Sie ging in Rente"], key: "Sie wurde sicherer" },
  q4: { options: ["Zunächst nervös, aber das Team war freundlich", "Von Anfang an gelangweilt, weil die Aufgaben einfach waren", "Sehr ärgerlich, denn niemand half ihm bei der Arbeit", "Unsicher, weil er das Hotel nicht finden konnte"], key: "Zunächst nervös, aber das Team war freundlich" },
  q5: { options: ["Einen Deutschkurs besucht und ein Praktikum gemacht", "Ein Studium abgeschlossen und im Büro gearbeitet", "Eine Prüfung bestanden und Urlaub genommen", "Ein Hotel gesucht und eine Bewerbung geschrieben"], key: "Einen Deutschkurs besucht und ein Praktikum gemacht" },
  q6: { options: ["Mit Gästen sprechen und Probleme ruhig lösen", "Briefe schreiben und neue Zimmer reservieren", "Deutsch lernen und Prüfungen vorbereiten", "Das Hotel leiten und das Team organisieren"], key: "Mit Gästen sprechen und Probleme ruhig lösen" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  e11: {
    correct: ["arbeitete", "wohnte", "kam"],
    options: [
      ["arbeitete", "arbeitet", "gearbeitet", "arbeitete ich"],
      ["wohnte", "wohnt", "gewohnt", "wohnet"],
      ["kam", "kommt", "gekommen", "kame"],
    ],
  },
  r3: { correct: ["Lehrer"], options: [["Lehrer", "Schüler", "Tisch"]] },
  e6: {
    correct: ["hatte", "gegessen", "gearbeitet hatte"],
    options: [
      ["hatte", "war", "hat"],
      ["gegessen", "geessen", "gegesst"],
      ["gearbeitet hatte", "gearbeitet hat", "arbeitete hatte"],
    ],
  },
  w2: {
    correct: ["arbeitete", "ging", "kam"],
    options: [
      ["arbeitete", "arbeitet", "gearbeitet"],
      ["ging", "geht", "gegangen"],
      ["kam", "kommt", "gekommen"],
    ],
  },
  m5: {
    correct: ["arbeitete", "ging", "hatten"],
    options: [
      ["arbeitete", "arbeitet", "gearbeitet"],
      ["ging", "geht", "gegangen"],
      ["hatten", "haben", "hatte"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e13: { wrongWord: "beendet hat", correctWord: "beendet hatte", options: ["beendet hatte", "beendet hat", "beenden hatte", "beendet gehabt"] },
  e5: { wrongWord: "bin", correctWord: "habe", options: ["habe", "bin", "war", "hatte"] },
};

const expectedTransformations: string[] = ["e7", "e9", "e12", "m4", "w1", "w3"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e12: ["Bevor ich nach Berlin kam, hatte ich in Tunis gearbeitet", "Bevor ich nach Berlin kam, hatte ich in Tunis gearbeitet."],
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e14: [
    { left: "Ich arbeitete fünf Jahre in Tunis.", right: "Präteritum (سرد مكتوب)" },
    { left: "Ich habe gestern gearbeitet.", right: "Perfekt (كلام يومي)" },
    { left: "Bevor ich kam, hatte ich gearbeitet.", right: "Plusquamperfekt (الأسبق)" },
    { left: "Ich war müde und hatte Fieber.", right: "Präteritum يبقى في الكلام" },
  ],
  e3: [
    { left: "gehen", right: "ging" },
    { left: "kommen", right: "kam" },
    { left: "sehen", right: "sah" },
    { left: "essen", right: "aß" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB102.review ?? []),
    ...lessonB102.practiceBank,
    ...lessonB102.miniTest,
    ...lessonB102.writing,
    ...lessonB102.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-02 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB102.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-02 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-02 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB102.id,
    taskId,
  };
}

describe("B1-02 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB102).toMatchObject({
      id: "b1-02",
      unitId: "b1-02",
      level: "B1",
      order: 1,
      titleDe: "Arbeitswelt",
      titleAr: "عالم العمل",
    });
    expect("duration" in lessonB102).toBe(false);
    expect(lessonB102.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = LESSON_META.find((item) => item.id === "b1-02");
    expect(meta).toMatchObject({ id: "b1-02", unitId: "b1-02", level: "B1", order: 1, summary: lessonB102.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("limits goals to evidenced performances and separates reading-speaking claims from writing/listening", () => {
    expect(lessonB102.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["e1", "m1", "w2"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e4", "e6", "m2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4", "q5", "q6"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["w1", "w3"]);
    expect(JSON.stringify(lessonB102.lernziele)).not.toMatch(/Goethe|CEFR|erzählen|berichten/);

    const mapped = lessonB102.lernziele.flatMap(({ evidence }) => evidence?.exerciseIds ?? []);
    for (const forbidden of ["int-b1-02-1", "med-b1-02-1", "p1"]) {
      expect(mapped).not.toContain(forbidden);
    }
    expect(lessonB102.practiceBank.findIndex(({ id }) => id === "e6")).toBeGreaterThanOrEqual(4);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB102.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").at(-1) ?? "";
        expect(evidence.exerciseIds, `${taskId} maps to a goal exercise`).toContain(exerciseId);
      }
    }
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
    expect(byType("fill-blank").filter((id) => id in expectedFillBlanks), "فراغات مغطّاة").toEqual(byType("fill-blank"));
    expect(
      byType("error-correction").filter((id) => id in expectedErrorCorrections),
      "تصحيحات مغطّاة",
    ).toEqual(byType("error-correction"));
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(byType("matching"));
    const transformations = byType("transformation");
    expect(transformations.filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(transformations);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, value] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(value.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(value.key);
      expect(new Set(exercise.options).size, `${id} unique`).toBe(exercise.options.length);
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect, `${id} all keys`).toBe(true);
      exercise.blanks.forEach((blank, index) => {
        for (const option of blank.options ?? []) {
          const answers = [...expected.correct];
          answers[index] = option;
          expect(evaluateExercise(exercise, answers).isCorrect, `${id} blank ${index + 1}: ${option}`).toBe(
            option === expected.correct[index],
          );
        }
      });
    }
  });

  it("checks error-correction: one wrong word, a correct option, and rejected distractors", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence.includes(exercise.wrongWord), `${id} span`).toBe(true);
      expect(exercise.wrongWord, `${id} span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correctWord).isCorrect, `${id} correct`).toBe(true);
      for (const option of expected.options.filter((item) => item !== expected.correctWord)) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} distractor ${option}`).toBe(false);
      }
    }
  });

  it("treats the Perfekt in nachdem-clauses as acceptable speech, so e9 is a transformation not an error", () => {
    const e9 = task("e9");
    if (e9.type !== "transformation") throw new Error("e9 is not transformation");
    expect(evaluateExercise(e9, "Nachdem er gegessen hatte, ging er.").isCorrect).toBe(true);
    expect(evaluateExercise(e9, "Nachdem er gegessen hat, ging er.").isCorrect).toBe(false);
  });

  it("requires Präteritum where the prompt asks for it, and rejects the Perfekt", () => {
    const w3 = task("w3");
    if (w3.type !== "transformation") throw new Error("w3 is not transformation");
    expect(evaluateExercise(w3, "Gestern arbeitete ich im Büro.").isCorrect).toBe(true);
    expect(evaluateExercise(w3, "Gestern habe ich im Büro gearbeitet.").isCorrect).toBe(false);

    const m4 = task("m4");
    if (m4.type !== "transformation") throw new Error("m4 is not transformation");
    expect(evaluateExercise(m4, "Sie sah den Film.").isCorrect).toBe(true);
    expect(evaluateExercise(m4, "Sie hat den Film gesehen.").isCorrect).toBe(false);
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} pairs`).toEqual(pairs);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} correct pairs`).toBe(true);
      const swapped = [{ ...pairs[0], right: pairs[1].right }, { ...pairs[1], right: pairs[0].right }, ...pairs.slice(2)];
      expect(evaluateExercise(exercise, swapped).isCorrect, `${id} swapped`).toBe(false);
    }
  });

  it("checks word-order answers against the sentence in order", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(evaluateExercise(e4, ["Bevor", "ich", "studierte", ",", "hatte", "ich", "gearbeitet"]).isCorrect).toBe(true);
    expect(evaluateExercise(e4, [...e4.tokens]).isCorrect).toBe(false);

    const m3 = task("m3");
    if (m3.type !== "word-ordering") throw new Error("m3 is not word-ordering");
    expect(evaluateExercise(m3, ["Ich", "arbeitete", "fünf", "Jahre", "in", "einer", "Firma", "."]).isCorrect).toBe(true);
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB102.reading;
    expect(reading?.id).toBe("read-b1-02");
    expect(reading?.textType).toBe("erzaehlung");
    expect(reading?.titleDe).toBe("Der erste Arbeitstag");
    expect(reading?.titleAr).toBe("أول يوم عمل");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const head = item.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(text.includes(stem), `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
    }

    expect(reading?.questions.map(({ id }) => id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    for (const question of reading!.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(text.includes(answer.toLowerCase()) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(false);
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);

    for (const anchor of ["zeugnis", "schicht", "vorstellungsgespräch"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b1-02", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b1-02", "l2", "q3", true)).toBe("listening-transcript:b1-02:l2:q3");
    expect(lessonB102.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`)).toEqual([
      "l1:q1", "l1:q2", "l2:q3", "l3:q4", "l3:q5", "l3:q6",
    ]);
    const scene = lessonB102.listening.items.find(({ id }) => id === "l3")!;
    expect(scene.lines.map(({ de }) => de)).toEqual([
      "Wie war dein erster Arbeitstag im Hotel?",
      "Am Anfang war ich nervös, aber mein Team war freundlich.",
      "Was hattest du gemacht, bevor du dort anfingst?",
      "Ich hatte einen Deutschkurs besucht und ein Praktikum gemacht.",
      "Und was lernst du jetzt bei der Arbeit?",
      "Ich lerne, mit Gästen zu sprechen und Probleme ruhig zu lösen.",
    ]);
    expect(scene.audioNoteAr).toMatch(/مولّدة آلياً \(TTS\)، وليست تسجيلاً بشرياً/);
    expect(scene.lines.map(({ audioSrc }) => audioSrc)).toEqual(
      [1, 2, 3, 4, 5, 6].map((line) => `/audio/lessons/b1-02/ls-b1-02-3-${line}.mp3`),
    );
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB102.id, [])).toBe("pending");
    const z1Events = [goalEvent("z1", "e1"), goalEvent("z1", "m1"), goalEvent("z1", "w2")];
    expect(getGoalEvidenceStatus(goal("z1"), lessonB102.id, z1Events)).toBe("evidenced");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB102.id, z1Events.slice(0, 2))).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z3"), lessonB102.id, [goalEvent("z3", "q3", false)])).toBe("pending");
    const z3Events = [goalEvent("z3", "q1"), goalEvent("z3", "q2"), goalEvent("z3", "q3"), goalEvent("z3", "q4"), goalEvent("z3", "q5"), goalEvent("z3", "q6")];
    expect(getGoalEvidenceStatus(goal("z3"), lessonB102.id, z3Events)).toBe("evidenced");
  });
});
