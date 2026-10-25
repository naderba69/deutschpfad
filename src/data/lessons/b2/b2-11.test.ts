import { describe, expect, it } from "vitest";
import { lessonB211 } from "@/data/lessons/b2/b2-11";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

/** [الخيارات, المفتاح] — كل MCQ في البنك والمصغّر والمراجعة والاستماع */
const expectedMultipleChoice: Record<string, [string[], string]> = {
  e1: [["dessen", "deren", "den", "der"], "dessen"],
  e2: [["deren", "dessen", "die", "der"], "deren"],
  e3: [["deren", "dessen", "die", "denen"], "deren"],
  e6: [
    ["Ich kenne die Nachbarin, deren Hund immer bellt.", "Ich kenne die Nachbarin, deren der Hund immer bellt.", "Ich kenne die Nachbarin, dessen Hund immer bellt.", "Ich kenne die Nachbarin, deren ihr Hund immer bellt."],
    "Ich kenne die Nachbarin, deren Hund immer bellt.",
  ],
  e8: [["habe … müssen", "bin … müssen", "habe … gemusst", "habe … zu müssen"], "habe … müssen"],
  e12: [
    ["Ich habe das Auto reparieren lassen.", "Ich habe das Auto repariert.", "Ich habe das Auto reparieren wollen.", "Ich habe das Auto gelassen."],
    "Ich habe das Auto reparieren lassen.",
  ],
  m1: [["deren", "dessen", "die", "der"], "deren"],
  m2: [["hat … müssen", "ist … müssen", "hat … gemusst", "hat … zu müssen"], "hat … müssen"],
  r1: [["den", "der", "dem", "das"], "den"],
  r2: [["auf den", "den auf", "auf der", "für den"], "auf den"],
  q1: [
    ["Der Schriftsteller, dessen Bücher in Tunesien beliebt sind", "Der Schriftsteller, deren Bücher beliebt sind", "Der Schriftsteller, den die Bücher beliebt sind", "Der Schriftsteller, dessen die Bücher beliebt sind"],
    "Der Schriftsteller, dessen Bücher in Tunesien beliebt sind",
  ],
  q2: [["Sie hat absagen müssen", "Sie hat abgesagt gemusst", "Sie ist absagen müssen", "Sie hat absagen gemusst"], "Sie hat absagen müssen"],
  q3: [["Der Mechaniker", "Nora selbst", "Jonas", "Niemand"], "Der Mechaniker"],
  q4: [["die Bücher des Autors", "die Romane der Übersetzerin", "die Texte der Redakteurin", "die Werke des Mechanikers"], "die Bücher des Autors"],
};

/** [المفاتيح, بدائل كل فراغ] */
const expectedFillBlanks: Record<string, [string[], string[][]]> = {
  e4: [["dessen"], [["dessen", "deren", "das"]]],
  e11: [["hat", "lassen"], [["hat", "ist", "war"], ["lassen", "gelassen", "lässt"]]],
  m3: [["deren"], [["deren", "dessen", "die"]]],
  r3: [["habe"], [["habe", "bin", "war"]]],
  w2: [["reparieren", "lassen"], [["reparieren", "repariert", "zu reparieren"], ["lassen", "gelassen", "lässt"]]],
};

/** [wrongWord, correctWord, البدائل, سليمة أصلاً؟] */
const expectedErrorCorrections: Record<string, [string, string, string[], boolean?]> = {
  e5: ["deren", "dessen", ["dessen", "deren", "den", "dem"]],
  e9: ["gemusst", "müssen", ["müssen", "gemusst", "gemüsst", "musste"]],
  e10: ["ist", "hat", ["hat", "ist", "war", "wurde"]],
  m4: ["gelassen", "lassen", ["lassen", "gelassen", "lässt", "ließ"]],
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e15: [
    { left: "dessen", right: "مالك مذكّر أو محايد" }, { left: "deren", right: "مالكة مؤنّثة أو جمع" },
    { left: "reparieren lassen", right: "يكلّف غيره بالإصلاح" }, { left: "arbeiten müssen", right: "يضطرّ إلى العمل" }],
};

const expectedTransformations: Record<string, string[]> = {
  e14: ["Ich habe gestern lange warten müssen", "Ich habe gestern lange warten müssen."],
  w1: ["Ich kenne einen Autor, dessen Romane berühmt sind", "Ich kenne einen Autor, dessen Romane berühmt sind."],
};

const expectedWordOrder: Record<string, [string[], string]> = {
  e7: [["Der", "Kollege", ",", "dessen", "Büro", "neben", "meinem", "ist", ",", "kommt", "aus", "Wien", "."], "Der Kollege, dessen Büro neben meinem ist, kommt aus Wien."],
  e13: [["Ich", "habe", "die", "Kinder", "im", "Garten", "spielen", "hören", "."], "Ich habe die Kinder im Garten spielen hören."],
  m5: [["Ich", "kenne", "den", "Arzt", ",", "mit", "dessen", "Hilfe", "du", "einen", "Termin", "bekommst", "."], "Ich kenne den Arzt, mit dessen Hilfe du einen Termin bekommst."],
};

const expectedDictations: Record<string, string> = {
  w3: "Die Kollegin, deren Vortrag wir gehört haben, arbeitet hier.",
};

/** مراسي النصّ — تُفحص حرفياً بعد التصغير */
const readingAnchors = [
  "die werkstatt in der lindenstraße gehört seit vierzig jahren zwei familien",
  "der betrieb, dessen gründer aus sizilien kam, war früher eine kleine schneiderei",
  "die kundschaft, deren räder hier stehen", "ich habe drei jahre lang jeden abend sitzen bleiben müssen",
  "wer neu anfängt, dessen arbeit wird zwei wochen lang kontrolliert", "kann es reparieren lassen",
  "die beiden familien haben lange überlegen müssen", "einen architekten haben sie die pläne zeichnen lassen",
  "ein regal, dessen bretter die kunden selbst gestrichen haben",
  "die halle gehört beiden familien, deren kinder zusammen aufgewachsen sind",
  "wir haben gesehen, wie er kleiner wird", "wer eine woche nichts gefragt hat, dessen protokoll bleibt leer",
];

function allTasks(): Exercise[] {
  return [
    ...(lessonB211.review ?? []),
    ...lessonB211.practiceBank,
    ...lessonB211.miniTest,
    ...lessonB211.writing,
    ...(lessonB211.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-11 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB211.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-11 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-11 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB211.id,
    taskId,
  };
}

describe("B2-11 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB211).toMatchObject({
      id: "b2-11",
      unitId: "b2-04",
      level: "B2",
      order: 2,
      titleDe: "Zugehörigkeit und doppelter Infinitiv",
      titleAr: "الإسناد والمِلكية في الجملة المركّبة",
    });
    expect("duration" in lessonB211).toBe(false);
    expect(lessonB211.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-11");
    expect(meta).toMatchObject({ id: "b2-11", unitId: "b2-04", level: "B2", order: 2, estimatedMinutes: 65 });
    expect(meta?.summary).toBe(lessonB211.summary);
    expect(meta?.titleAr).toBe(lessonB211.titleAr);
    expect(meta?.titleDe).toBe(lessonB211.titleDe);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB211.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["e1", "e2", "e3", "e4", "e5", "e6", "e7", "m1", "m3", "m5", "w1", "w3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e8", "e9", "e10", "e14", "m2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e11", "e12", "e13", "m4", "w2", "q3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["q1", "q2"]);
    for (const item of lessonB211.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB211.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB211.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      expect(evidence.taskIds?.length, `${item.id} taskIds`).toBe(evidence.exerciseIds?.length);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
    expect(lessonB211.miniTest.map(({ id }) => id)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect((lessonB211.review ?? []).map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    expect(lessonB211.writing.map(({ id }) => id)).toEqual(["w1", "w2", "w3"]);
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b2-11", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-11", "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId("b2-11", "l2", "q3", true)).toBe("listening-transcript:b2-11:l2:q3");
    expect(goal("z3").evidence?.taskIds).toContain("listening:l2:q3");
    expect(goal("z4").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l1:q2"]);
    const transcriptIds = lessonB211.lernziele.flatMap(
      (item) => item.evidence?.taskIds?.filter((taskId) => taskId.startsWith("listening-transcript:")) ?? [],
    );
    expect(transcriptIds, "كشف النصّ لا يُحتسب أداءً").toEqual([]);
    expect(lessonB211.listening.questions.map(({ id, itemId }) => `${id}@${itemId}`)).toEqual(["q1@l1", "q2@l1", "q3@l2", "q4@l3"]);
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
    expect(byType("dictation"), "إملاء").toEqual(["w3"]);
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

  it("checks error-correction: one wrong span, the key, and rejected distractors", () => {
    for (const [id, [wrongWord, correctWord, options]] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} wrong`).toBe(wrongWord);
      expect(exercise.correctWord, `${id} correct`).toBe(correctWord);
      expect(exercise.options, `${id} options`).toEqual(options);
      expect(exercise.isAlreadyCorrect, `${id} خطأ حقيقي`).toBeFalsy();
      expect(exercise.wrongSentence, `${id} contains wrongWord`).toContain(wrongWord);
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
    const e14 = task("e14");
    if (e14.type !== "transformation") throw new Error("e14 is not transformation");
    expect(e14.prompt, "المصدر المزدوج من الماضي البسيط").toBe("Ich musste gestern lange warten.");
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
    const m5 = task("m5");
    if (m5.type !== "word-ordering") throw new Error("m5 is not word-ordering");
    expect(m5.correctSentence, "mit dessen Hilfe").toContain("mit dessen Hilfe");
  });

  it("keeps the two-infinitive rule: no Partizip II beside a main verb", () => {
    for (const id of ["e8", "e9", "e10", "e14", "m2", "w1"]) {
      expect(() => task(id), `مفقود ${id}`).not.toThrow();
    }
    const e9 = task("e9");
    if (e9.type !== "error-correction") throw new Error("e9 is not error-correction");
    expect(e9.wrongWord, "الخطأ هو اسم المفعول").toBe("gemusst");
    expect(e9.correctWord, "الصواب مصدر").toBe("müssen");
    const e10 = task("e10");
    if (e10.type !== "error-correction") throw new Error("e10 is not error-correction");
    expect(e10.correctWord, "المساعد haben مع الحركة").toBe("hat");
    expect(e10.wrongSentence.replace(e10.wrongWord, e10.correctWord)).toContain("hat gestern früh gehen müssen");
    const e8 = task("e8");
    if (e8.type !== "multiple-choice") throw new Error("e8 is not multiple-choice");
    expect(e8.options[e8.correctIndex], "بنية الكتلة").toBe("habe … müssen");
    expect(e8.options, "اسم المفعول مرفوض").toContain("habe … gemusst");
    expect(e8.errorType, "تصنيف التصريف").toBe("conjugation");
  });

  it("keeps lassen, sehen and hören treated as frame verbs in the Perfekt", () => {
    const e11 = task("e11");
    if (e11.type !== "fill-blank") throw new Error("e11 is not fill-blank");
    expect(e11.blanks.map(({ correct }) => correct), "hat + lassen").toEqual(["hat", "lassen"]);
    expect(e11.blanks[1]?.options ?? [], "gelassen مرفوض مع فعل تالٍ").toContain("gelassen");
    const e12 = task("e12");
    if (e12.type !== "multiple-choice") throw new Error("e12 is not multiple-choice");
    expect(e12.options[e12.correctIndex], "التكليف لا الفعل الذاتي").toBe("Ich habe das Auto reparieren lassen.");
    expect(e12.options, "الفعل الذاتي بديل خاطئ").toContain("Ich habe das Auto repariert.");
    expect(e12.errorType).toBe("vocabulary");
    const m4 = task("m4");
    if (m4.type !== "error-correction") throw new Error("m4 is not error-correction");
    expect(m4.wrongWord, "gelassen خطأ").toBe("gelassen");
    expect(m4.correctWord, "lassen صواب").toBe("lassen");
    const e13 = task("e13");
    if (e13.type !== "word-ordering") throw new Error("e13 is not word-ordering");
    expect(e13.correctSentence, "hören مصدراً").toBe("Ich habe die Kinder im Garten spielen hören.");
  });

  it("keeps dessen and deren bound to the antecedent, not to the following noun", () => {
    const e1 = task("e1");
    const e2 = task("e2");
    const e3 = task("e3");
    for (const exercise of [e1, e2, e3]) {
      if (exercise.type !== "multiple-choice") throw new Error(`${exercise.id} is not multiple-choice`);
      expect(exercise.errorType, `${exercise.id} خطأ حالة`).toBe("case");
      expect(exercise.options, `${exercise.id} يفرّق بين الشكلين`).toEqual(
        expect.arrayContaining(["dessen", "deren"]),
      );
    }
    const mcKey = (id: string) => {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      return exercise.options[exercise.correctIndex];
    };
    expect(mcKey("e1"), "مذكّر ⇒ dessen").toBe("dessen");
    expect(mcKey("e2"), "مؤنّث ⇒ deren").toBe("deren");
    expect(mcKey("e3"), "جمع ⇒ deren").toBe("deren");
    const e5 = task("e5");
    if (e5.type !== "error-correction") throw new Error("e5 is not error-correction");
    expect(e5.wrongSentence, "المالك رجل").toBe("Der Mann, deren Sohn studiert, ist Arzt.");
    expect(e5.correctWord).toBe("dessen");
    const e6 = task("e6");
    if (e6.type !== "multiple-choice") throw new Error("e6 is not multiple-choice");
    expect(e6.options[e6.correctIndex], "بلا أداة تعريف بعد deren").toBe(
      "Ich kenne die Nachbarin, deren Hund immer bellt.",
    );
    expect(e6.options.join(" "), "بديل الأداة الزائدة").toContain("deren der Hund");
    expect(e6.errorType, "تصنيف الأداة").toBe("article");
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB211.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    expect(new Set(bank.map(({ type }) => type)).size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    const miniIds = new Set(lessonB211.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB211.review ?? []).map(({ id }) => id));
    const writingIds = lessonB211.writing.map(({ id }) => id);
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps all three theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB211.theory.map(({ id }) => id)).toEqual(["t1", "t2", "t3"]);
    for (const block of lessonB211.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n\n").filter((part) => part.trim()).length, `${block.id} paragraphs`)
        .toBeGreaterThanOrEqual(2);
      expect(block.whyAr?.trim().length ?? 0, `${block.id} whyAr`).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic?.trim().length ?? 0, `${block.id} مقارنة`).toBeGreaterThanOrEqual(250);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB211.theory);
    for (const marker of [
      "dessen", "deren", "Ersatzinfinitiv", "habe arbeiten müssen", "haben", "gelassen",
      "reparieren lassen", "mit dessen Bruder", "أفعال إطار", "المصدر المزدوج",
    ]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("keeps every theory table carrying its teaching columns, rows, and mistakes", () => {
    const [t1, t2, t3] = lessonB211.theory;
    expect(t1.table?.columns).toEqual(["المرجع (المالك)", "الشكل", "مثال"]);
    expect(t1.table?.rows).toHaveLength(6);
    expect(t1.table?.rows.map(({ label }) => label)).toEqual(["مذكّر مفرد", "محايد مفرد", "مؤنّث مفرد", "جمع", "بعد حرف جر", "الاسم التالي"]);
    expect(t1.commonMistakes.map(({ wrong }) => wrong)).toEqual([
      "Der Autor, deren Romane bekannt sind.",
      "Die Frau, dessen Auto kaputt ist.",
      "Der Mann, dessen der Sohn studiert.",
    ]);
    expect(t1.relatedRuleComparison?.title).toBe("dessen أم von dem؟");

    expect(t2.table?.columns).toEqual(["الحالة", "الصيغة", "مثال"]);
    expect(t2.table?.rows).toHaveLength(5);
    expect(t2.commonMistakes.map(({ wrong }) => wrong)).toEqual([
      "Ich habe arbeiten gemusst.",
      "Ich bin gehen müssen.",
      "…, weil ich arbeiten müssen habe.",
    ]);
    expect(t2.relatedRuleComparison?.title).toBe("Perfekt أم Präteritum مع المودالي؟");
    expect(t2.examples.map(({ de }) => de)).toContain("Ich habe ihn gestern nicht anrufen können.");

    expect(t3.table?.columns).toEqual(["الفعل", "المعنى", "مثال"]);
    expect(t3.table?.rows).toHaveLength(5);
    expect(t3.commonMistakes.map(({ wrong }) => wrong)).toEqual([
      "Ich habe das Auto reparieren gelassen.",
      "Ich habe ihn kommen gesehen sehen.",
      "Ich habe das Auto repariert lassen.",
    ]);
    expect(t3.relatedRuleComparison?.title).toBe("reparieren أم reparieren lassen؟");
    expect(t3.examples.map(({ de }) => de)).toContain("Sie hat ihn den ganzen Abend Klavier spielen hören.");
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB211.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    expect(cards.map(({ id }) => id)).toEqual([
      "fc1", "fc2", "fc3", "fc4", "fc5", "fc6", "fc7", "fc8", "fc9", "fc10", "fc11", "fc12",
    ]);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
      expect(card.level, `${card.id} level`).toBe("B2");
    }
    for (const head of ["dessen", "deren", "arbeiten müssen", "reparieren lassen", "die Zugehörigkeit"]) {
      expect(cards.map(({ de }) => de), `بطاقة مفقودة ${head}`).toContain(head);
    }
    const corpus = JSON.stringify([
      lessonB211.reading?.paragraphs,
      lessonB211.reading?.glossary,
      lessonB211.theory,
      lessonB211.practiceBank,
      lessonB211.miniTest,
      lessonB211.writing,
      lessonB211.listening,
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
    expect(corpus, "مرساة «die Zugehörigkeit»").toContain("zugehörigkeit");
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB211.reading;
    expect(reading?.id).toBe("read-b2-11");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Die Werkstatt, deren Türen zwei Familien verbinden");
    expect(reading?.titleAr).toBe("الورشة التي تربط أبوابُها عائلتين");
    expect(reading?.paragraphs).toHaveLength(6);
    expect(reading?.paragraphsAr).toHaveLength(6);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length, "كلمات القراءة").toBeGreaterThanOrEqual(320);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    expect(reading?.glossary.map(({ de }) => de)).toEqual([
      "die Zugehörigkeit", "die Werkstatt", "der Betrieb", "der Gründer", "die Kundschaft", "die Zusage",
      "der Bauantrag", "die Halle", "das Protokoll", "der Praktikant", "dessen", "deren",
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
    for (const marker of ["zugehörigkeit", "werkstatt", "dessen", "deren", "protokoll", "praktikant"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies separating own work from commissioned work", () => {
    const rounds = (lessonB211.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Die Bremsen machen Geräusche. Ich habe sie letztes Jahr bei einem Kollegen prüfen lassen, dessen Werkstatt jetzt geschlossen ist.",
      "Ich habe die ganze Woche arbeiten müssen. Erst heute habe ich einen Termin bekommen.",
    ]);
    for (const round of rounds) expect(round.options.filter((option) => option.best)).toHaveLength(1);
    const json = JSON.stringify(rounds);
    expect(json, "تركيب الإطار في الردّ الأفضل").toContain("prüfen lassen");
    expect(json, "المصدر المزدوج في الردّ الأفضل").toContain("arbeiten müssen");
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB211.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-11-1");
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
    expect(mediation?.sourceDe, "dessen في المصدر").toContain("dessen");
    expect(mediation?.sourceDe, "deren في المصدر").toContain("deren");
    expect((mediation?.keyPointsAr ?? []).length, "نقاط المفتاح").toBeGreaterThanOrEqual(3);
  });

  it("removes unsourced figures, context-dependent false errors, and misleading translations", () => {
    const text = JSON.stringify(lessonB211);
    expect(text).not.toMatch(/\d+\s*%|~\d+/);
    expect(text).not.toContain("Sprich von Tag eins an");
    expect(text).not.toContain("الحروف العربية (بـ، عن، في) تطابق");
    expect(text).not.toContain("والقائمة الشهيرة");
    expect(text).not.toContain("Ich freue mich über den Urlaub. (مستقبل)");
    expect(text).not.toMatch(/على الأكثر/);
    expect(text).not.toContain("B2 يطلب");
    expect(text).not.toContain("أشيع خطأ");
    expect(text).not.toContain("لا مقابل صرفي");
    expect(text).not.toContain("أكثر ما يُنسى");
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z2"), lessonB211.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB211.id, [goalEvent("z2", "e8")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB211.id, [
        goalEvent("z2", "e8"),
        goalEvent("z2", "e9"),
        goalEvent("z2", "e10"),
        goalEvent("z2", "e14"),
        goalEvent("z2", "m2"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB211.id, [
        goalEvent("z2", "e8"),
        goalEvent("z2", "e9"),
        goalEvent("z2", "e10"),
        goalEvent("z2", "e14"),
        goalEvent("z2", "m2", false),
      ]),
    ).toBe("pending");
  });
});
