import { describe, expect, it } from "vitest";

import {
  createConversationState,
  respondToUser,
  type ConversationLevel,
} from "./offline-conversation";

function replyFor(input: string, level: ConversationLevel = "A1") {
  const state = createConversationState(level, "Alltag");
  return respondToUser(state, input);
}

describe("محرك المحادثة الحرة المحلي", () => {
  it("يرد على التحية بسؤال متابعة", () => {
    const { reply } = replyFor("Hallo!");
    expect(reply.intent).toBe("greeting");
    expect(reply.reply).toContain("Hallo");
    expect(reply.reply).toContain("?");
    expect(reply.replyAr.length).toBeGreaterThan(0);
  });

  it("يستخرج الاسم ويستخدمه في الرد", () => {
    const { reply, state } = replyFor("Ich heiße Sami.");
    expect(reply.intent).toBe("name");
    expect(reply.reply).toContain("Sami");
    expect(state.userName).toBe("Sami");
  });

  it("يستخرج البلد من «ich komme aus»", () => {
    const { reply } = replyFor("Ich komme aus Tunesien.");
    expect(reply.intent).toBe("origin");
    expect(reply.reply).toContain("Tunesien");
  });

  it("يستخرج العمر", () => {
    const { reply } = replyFor("Ich bin 25 Jahre alt.");
    expect(reply.intent).toBe("age");
    expect(reply.reply).toContain("25");
  });

  it("يرصد نسيان «alt» ويصححه بلطف", () => {
    const { reply } = replyFor("Ich bin 25 Jahre.");
    expect(reply.correction).toContain("alt");
  });

  it("يرصد خطأ ترتيب الكلمات", () => {
    const { reply } = replyFor("Ich morgen gehe.");
    expect(reply.correction).toContain("Ich gehe morgen");
  });

  it("يرد على الشكر والوداع", () => {
    expect(replyFor("Danke!").reply.intent).toBe("thanks");
    expect(replyFor("Tschüss!").reply.intent).toBe("goodbye");
  });

  it("يرد على «نعم» و«لا»", () => {
    expect(replyFor("Ja.").reply.intent).toBe("yes");
    expect(replyFor("Nein.").reply.intent).toBe("no");
  });

  it("يرد على المشاعر الإيجابية والسلبية", () => {
    expect(replyFor("Mir geht es gut.").reply.intent).toBe("feeling-good");
    expect(replyFor("Mir geht es nicht gut.").reply.intent).toBe("feeling-bad");
  });

  it("يرد على العمل والهوايات والطعام والسفر", () => {
    expect(replyFor("Ich arbeite als Lehrer.").reply.intent).toBe("work");
    expect(replyFor("Ich spiele gern Fußball.").reply.intent).toBe("hobby");
    expect(replyFor("Ich esse gern Couscous.").reply.intent).toBe("food");
    expect(replyFor("Ich möchte nach Berlin reisen.").reply.intent).toBe("travel");
  });

  it("يرد على الأسئلة الموجهة للشريك", () => {
    const { reply } = replyFor("Was machst du?");
    expect(reply.intent).toBe("partner-question");
    expect(reply.reply).toContain("?");
  });

  it("يرد على الأسئلة العامة", () => {
    const { reply } = replyFor("Warum lernst du Deutsch?");
    expect(reply.intent).toBe("question");
  });

  it("يرد على الجمل الخبرية", () => {
    const { reply } = replyFor("Ich wohne in Tunis.");
    expect(reply.intent).toBe("statement");
  });

  it("يرد بلباقة عند عدم الفهم", () => {
    const { reply } = replyFor("Xyz blorp.");
    expect(reply.intent).toBe("fallback");
    expect(reply.reply).toContain("verstanden");
  });

  it("يُكيّف الردود حسب المستوى", () => {
    const a1 = replyFor("Hallo!", "A1").reply.reply;
    const b2 = replyFor("Hallo!", "B2").reply.reply;
    expect(a1).not.toBe(b2);
    expect(b2.length).toBeGreaterThan(a1.length);
  });

  it("يُدوّر الردود لتجنب التكرار", () => {
    let state = createConversationState("A1", "Alltag");
    const first = respondToUser(state, "Hallo!").reply.reply;
    state = respondToUser(state, "Hallo!").state;
    const second = respondToUser(state, "Hallo!").reply.reply;
    expect(first).not.toBe(second);
  });

  it("يتذكر اسم المستخدم عبر الأدوار", () => {
    let state = createConversationState("A1", "Alltag");
    state = respondToUser(state, "Ich heiße Sami.").state;
    expect(state.userName).toBe("Sami");
    expect(state.turnCount).toBe(1);
  });

  it("كل الردود تحتوي سؤال متابعة (إبقاء الحوار حياً)", () => {
    const inputs = [
      "Hallo!",
      "Ich heiße Sami.",
      "Ich komme aus Tunesien.",
      "Ich bin 25 Jahre alt.",
      "Ich arbeite als Lehrer.",
      "Ich spiele gern Fußball.",
      "Ich esse gern Couscous.",
      "Ich möchte nach Berlin reisen.",
      "Mir geht es gut.",
      "Ja.",
      "Nein.",
      "Danke!",
      "Was machst du?",
    ];
    for (const input of inputs) {
      const { reply } = replyFor(input);
      expect(reply.reply, `رد «${input}» بلا سؤال متابعة`).toContain("?");
    }
  });
});
