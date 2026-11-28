import {describe, expect, it} from "vitest";

import {HISTORY_MAX_TURNS, llmFailureMessage, splitVoiceReply, trimHistory, type ChatTurn} from "./conversation";

const turns = (n: number, size = 10): ChatTurn[] =>
  Array.from({length: n}, (_, i) => ({
    role: i % 2 === 0 ? "user" : "assistant",
    content: `${i}`.padEnd(size, "x"),
  }));

describe("trimHistory — تاريخ المحادثة", () => {
  it("يُبقي آخر حد من الرسائل فقط", () => {
    const out = trimHistory(turns(40));
    expect(out.length).toBeLessThanOrEqual(HISTORY_MAX_TURNS);
    expect(out[out.length - 1].content.startsWith("39")).toBe(true);
  });

  it("يبدأ دائماً برسالة للمستخدم", () => {
    const out = trimHistory(turns(3).slice(1).concat({role: "assistant", content: "ok"}));
    expect(out[0].role).toBe("user");
  });

  it("يلتزم بحد الأحرف ويحتفظ بآخر رسالة للمستخدم", () => {
    const big: ChatTurn[] = [
      {role: "user", content: "a".repeat(3000)},
      {role: "assistant", content: "b".repeat(3000)},
      {role: "user", content: "c".repeat(3000)},
    ];
    const out = trimHistory(big, 12, 6000);
    const total = out.reduce((n, m) => n + m.content.length, 0);
    expect(total).toBeLessThanOrEqual(6000);
    expect(out[out.length - 1].content.startsWith("c")).toBe(true);
    expect(out[0].role).toBe("user");
  });

  it("لا يُفرغ المحادثة حتى لو كانت رسالة واحدة تتجاوز الحد", () => {
    const out = trimHistory([{role: "user", content: "x".repeat(9000)}], 12, 6000);
    expect(out).toHaveLength(1);
  });
});

describe("splitVoiceReply — فصل سطر التصحيح عن الرد المنطوق", () => {
  it("يفصل الرد عن سطر ###تصحيح:", () => {
    const r = splitVoiceReply("Das klingt gut! Wohin fährst du?\n###تصحيح: «gestern» يتطلب الماضي.");
    expect(r.reply).toBe("Das klingt gut! Wohin fährst du?");
    expect(r.correction).toBe("«gestern» يتطلب الماضي.");
  });

  it("يقبل مسافة بعد الوسم أو وسماً من مستوى مختلف", () => {
    expect(splitVoiceReply("Hallo!\n### تصحيح: ملاحظة").correction).toBe("ملاحظة");
    expect(splitVoiceReply("Hallo!\n##تصحيح: ملاحظة").correction).toBe("ملاحظة");
  });

  it("«لا أخطاء» تُعامل كغياب تصحيح", () => {
    const r = splitVoiceReply("Wie war dein Tag?\n###تصحيح: لا أخطاء");
    expect(r).toEqual({reply: "Wie war dein Tag?"});
  });

  it("الرد بلا وسم يُعاد كما هو", () => {
    expect(splitVoiceReply("  Schön.  ")).toEqual({reply: "Schön."});
  });
});

describe("llmFailureMessage — رسالة مفهومة للمتعلم", () => {
  it("الحصة المنتهية", () => {
    expect(llmFailureMessage({ok: false, status: "limit"})).toMatch(/حصتك اليومية/);
  });

  it("غياب المفتاح يوجّه إلى الإعدادات", () => {
    expect(llmFailureMessage({ok: false, status: "not-configured"})).toMatch(/الإعدادات/);
  });

  it("الخطأ يعرض التفصيل مقصوصاً", () => {
    const msg = llmFailureMessage({ok: false, status: "error", error: "x".repeat(400)});
    expect(msg).toContain("تعذّر الرد");
    expect(msg.length).toBeLessThan(200);
  });

  it("خطأ بلا تفصيل يعطي رسالة عامة", () => {
    expect(llmFailureMessage({ok: false, status: "error"})).toMatch(/حاول مرة أخرى/);
  });
});
