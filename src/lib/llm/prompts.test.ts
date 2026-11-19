/**
 * اختبارات وحدة — مولّدات البرومبتات (يجب أن تنتج دائماً بنية صحيحة)
 */
import {describe, expect, it} from "vitest";

import {goetheWritingPrompt, voiceTeacherSystemPrompt, writingCorrectorPrompt} from "@/lib/llm/prompts";

describe("writingCorrectorPrompt", () => {
  it("يحتوي على نص المستخدم ومستواه", () => {
    const p = writingCorrectorPrompt("Ich bin gestern nach Berlin gefahren.", "A2");
    expect(p.user).toContain("A2");
    expect(p.user).toContain("Ich bin gestern nach Berlin gefahren.");
    expect(p.system).toContain("النص المصحح");
  });
});

describe("goetheWritingPrompt — مقيّم غوته", () => {
  const p = goetheWritingPrompt({
    text: "Meiner Meinung nach ist das Thema sehr wichtig. Einerseits hilft es, andererseits gibt es Probleme.",
    level: "B2",
    taskType: "Forumsbeitrag",
    taskDescription: "Äußern Sie Ihre Meinung zum Thema Digitalisierung.",
  });

  it("يحوي نص المتعلم والمستوى ووصف المهمة", () => {
    expect(p.user).toContain("B2");
    expect(p.user).toContain("Forumsbeitrag");
    expect(p.user).toContain("Äußern Sie Ihre Meinung");
    expect(p.user).toContain("Meiner Meinung nach");
  });

  it("يطلب محاور تعليمية عامة دون ادعاء أنها معايير رسمية", () => {
    expect(p.system).toContain("Erfüllung");
    expect(p.system).toContain("Kohärenz");
    expect(p.system).toContain("Wortschatz");
    expect(p.system).toContain("Struktur");
    expect(p.system).toMatch(/لا يمثل تصحيح Goethe الرسمي/);
  });

  it("يطلب وسوم ملاحظات قابلة للتحليل دون نسبة أو حكم نجاح", () => {
    expect(p.system).toContain("###معيار1:");
    expect(p.system).toContain("###أخطاء:");
    expect(p.system).toContain("###توصية:");
    expect(p.system).not.toContain("###النسبة:");
    expect(p.system).not.toContain("###الحكم:");
  });
});

describe("voiceTeacherSystemPrompt — المعلم الصوتي", () => {
  const p = voiceTeacherSystemPrompt("B1", "deinen Alltag");

  it("يعيد كائناً system + user", () => {
    expect(typeof p.system).toBe("string");
    expect(typeof p.user).toBe("string");
  });

  it("يحدد المستوى والموضوع في النظام", () => {
    expect(p.system).toContain("B1");
    expect(p.system).toContain("deinen Alltag");
  });

  it("يأمر بالرد بالألمانية فقط وبجمل قصيرة بمستوى المتعلم", () => {
    expect(p.system).toContain("بالألمانية فقط");
    expect(p.system).toContain("3-4 جمل");
  });

  it("يطلب سؤالاً لمتابعة المحادثة ووسم التصحيح", () => {
    expect(p.system).toContain("اسأل سؤالاً واحداً");
    expect(p.system).toContain("###تصحيح:");
  });
});
