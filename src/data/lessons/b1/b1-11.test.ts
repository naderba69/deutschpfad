import { describe, expect, it } from "vitest";
import { lessonB111 } from "./b1-11";
import { LESSON_META as lessonMetaList } from "@/data/lessons/meta";

const allItems = () => [
  ...lessonB111.practiceBank,
  ...lessonB111.miniTest,
  ...lessonB111.writing,
  ...lessonB111.listening.questions,
];

describe("B1-11 audit", () => {
  it("keeps goals that map only to existing items, and drops unevidenced z2/z5", () => {
    const ids = new Set(allItems().map((x) => x.id));
    expect(lessonB111.lernziele.map((g) => g.id)).toEqual(["z1", "z2", "z3", "z4"]);
    for (const goal of lessonB111.lernziele) {
      for (const id of (goal.evidence as { exerciseIds: string[] }).exerciseIds) {
        expect(ids.has(id), `${goal.id}:${id}`).toBe(true);
      }
    }
  });

  it("adds the connector item that backs the discussion goal", () => {
    const ex7 = lessonB111.practiceBank.find((x) => x.id === "ex-b1-11-7") as unknown as { options: string[]; correctIndex: number; questionDe: string };
    expect(ex7.questionDe).toContain("Einerseits");
    expect(ex7.options[ex7.correctIndex]).toBe("andererseits");
  });

  it("accepts only the answers that match the writing hints", () => {
    const wr1 = lessonB111.writing.find((x) => x.id === "wr-b1-11-1") as unknown as { acceptedAnswers: string[] };
    expect(wr1.acceptedAnswers).toEqual(["Das neue Krankenhaus wird in unserer Stadt gebaut."]);
    const wr2 = lessonB111.writing.find((x) => x.id === "wr-b1-11-2") as unknown as { acceptedAnswers: string[]; mistakes: { right: string }[] };
    expect(wr2.acceptedAnswers.every((a) => a.includes("hatte"))).toBe(true);
    expect(JSON.stringify(lessonB111.fehlerUndTipps)).toContain("gegessen hatte, bin ich gegangen");
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
});
