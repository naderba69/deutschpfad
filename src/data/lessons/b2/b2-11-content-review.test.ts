import { describe, expect, it } from "vitest";
import { lessonB211 } from "@/data/lessons/b2/b2-11";
import { LESSON_RELATED_RESOURCES } from "@/data/lessons/related-resources";
import { INTERACTIVE_STORIES } from "@/data/stories";
import { DAILY_DIALOGUES } from "@/data/dialogues";

describe("B2-11 content review guardrails", () => {
  it("keeps grammar claims scoped and translations aligned with the German content", () => {
    expect(lessonB211.titleAr).toBe("الانتماء والملكية والمصدر المزدوج");
    const genitive = lessonB211.theory?.find(({ id }) => id === "t1");
    expect(genitive?.explanationAr).toContain("ولا يفرض dessen/deren حالةً خاصة عليه");
    expect(genitive?.explanationAr).not.toContain("حرّة تماماً");
    expect(genitive?.explanationAr).not.toContain("أثقل وأقرب إلى الكلام");

    const modalPerfect = lessonB211.theory?.find(({ id }) => id === "t2");
    expect(modalPerfect?.relatedRuleComparison?.content).toContain("في الجملة الرئيسية والتابعة");
    expect(modalPerfect?.relatedRuleComparison?.content).not.toContain("حين تكون الجملة تابعة");
    expect(modalPerfect?.whyAr).toContain("فيأتي الفاعل بعد الأداة ثم يسبق المساعد المصرَّف");

    const perception = lessonB211.theory?.find(({ id }) => id === "t3");
    expect(perception?.explanationAr).toContain("لا يحوّل المعنى وحده إلى");
    expect(perception?.relatedRuleComparison?.content).toContain("يصرّح بأنه رتّب");
    expect(lessonB211.reading?.titleAr).toContain("خيالي");
    expect(lessonB211.reading?.paragraphsAr).toHaveLength(lessonB211.reading?.paragraphs.length ?? 0);
    expect(lessonB211.reading?.paragraphsAr[4]).toContain("أصوات الأدوات");

    const listeningItems = lessonB211.listening.items;
    expect(listeningItems.slice(0, 2).every(({ audioNoteAr }) => audioNoteAr?.includes("في المتصفح (TTS)"))).toBe(true);
    expect(listeningItems[2]?.audioNoteAr).toContain("ليست تسجيلات بشرية");
    expect(lessonB211.writing?.find(({ id }) => id === "w3")?.instructionAr).toContain("يولّده المتصفح");

    const resources = LESSON_RELATED_RESOURCES["b2-11"];
    expect(resources[0]?.reasonAr).toContain("لا تدرّب مباشرةً");
    expect(resources[1]?.reasonAr).toContain("لا يتضمن تدريباً مباشراً");
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b2-erste-arbeitstag");
    expect(story?.description).toContain("خيالية");
    expect(story?.description).toContain("TTS");
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "b2-02-teambesprechung");
    expect(dialogue?.situation).toContain("خيالية");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثق");
    expect(dialogue?.audioNoteAr).toContain("ASR محلي بتمريرين");
    expect(dialogue?.audioNoteAr).toContain("لم تُجرَ مراجعة سمعية بشرية");
    expect(lessonB211.mediation?.[0]?.sourceDe).toContain("fiktiver Fall");
  });
});
