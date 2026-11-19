import { describe, expect, it } from "vitest";

import { lessonB210 } from "@/data/lessons/b2/b2-10";
import { B2_DIALOGUES_1 } from "@/data/dialogues/b2/part1";
import { B2_DIALOGUES_3 } from "@/data/dialogues/b2/part3";
import { getRelatedResources } from "@/data/lessons/related-resources";
import { RAW_PODCASTS } from "@/data/podcasts";
import { B2_STORIES } from "@/data/stories/b2";
import { B2_EXTRA_STORIES } from "@/data/stories/b2-extra";

describe("B2-10 linked learning resources", () => {
  it("audits every linked B2-10 resource and its content boundaries", () => {
    expect(getRelatedResources("b2-10").map(({ id }) => id)).toEqual([
      "b2-konferenz", "b2-nachhaltigkeit", "b2-04-notfall", "b2-12-arzt-spezialist", "p-b2-gesunde-ernaehrung",
    ]);
    const conference = B2_STORIES.find(({ id }) => id === "b2-konferenz");
    expect(conference?.description).toContain("خيالية");
    const sustainability = B2_EXTRA_STORIES.find(({ id }) => id === "b2-nachhaltigkeit");
    expect(sustainability?.description).toContain("خيالي");
    expect(sustainability?.segments[1].de).toContain("ausgewählte öffentliche Gebäude");
    expect(sustainability?.segments.at(-1)?.de).not.toContain("Experten sind überzeugt");
    const emergency = B2_DIALOGUES_1.find(({ id }) => id === "b2-04-notfall");
    expect(emergency).toBeDefined();
    expect(emergency?.audioNoteAr).toContain("ASR");
    const doctor = B2_DIALOGUES_3.find(({ id }) => id === "b2-12-arzt-spezialist");
    expect(doctor?.situation).toContain("ليست تشخيصاً أو نصيحة طبية");
    expect(doctor?.audioNoteAr).toContain("تفريغ ASR محلي");
    expect(doctor?.audioNoteAr).toContain("في تمريرين");
    expect(doctor?.audioNoteAr).toContain("التدقيق برمجي وبالسكريبتات فقط");
    expect(doctor?.turns[4].de).not.toContain("Fehlhaltung");
    expect(doctor?.keyVocab.map(({ de }) => de)).not.toContain("die Fehlhaltung");
    const food = RAW_PODCASTS.find(({ id }) => id === "p-b2-gesunde-ernaehrung");
    expect(food?.script).toContain("fiktiven Diskussionsrunde");
    expect(food?.contentNoteAr).toContain("نقاش تدريبي خيالي");
    expect(food?.contentNoteAr).toContain("لم يُجر تقييم سمعي");
    expect(food?.script).not.toContain("Ernährungswissenschaftler betonen");
    expect(food?.questions).toHaveLength(2);
    for (const question of food?.questions ?? []) {
      expect(question.options.filter(({ correct }) => correct)).toHaveLength(1);
    }
  });

  it("labels the mediation input as a paraphrased exercise rather than a quotation", () => {
    const mediation = lessonB210.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-10-1");
    expect(mediation?.type).toBe("merge-info");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ التدريب").toBeGreaterThan(100);
    expect(mediation?.sourceDe).toContain("keine wörtlichen Zitate");
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

});
