import {beforeEach, describe, expect, it, vi} from "vitest";
import type {AnalyticsEvent} from "@/types/analytics";

// مخزن أحداث في الذاكرة يحاكي سجل الأحداث التحليلي
const store = vi.hoisted(() => ({
  events: [] as unknown[],
  readOk: true,
  writeOk: true,
}));

vi.mock("@/lib/analytics/events", () => ({
  getAllEventsResult: vi.fn(async () =>
    store.readOk ? {ok: true, events: store.events} : {ok: false, events: []},
  ),
  recordEvent: vi.fn(async (ev: unknown) => {
    if (!store.writeOk) return false;
    store.events.push(ev);
    return true;
  }),
}));

import {recordEvent} from "@/lib/analytics/events";
import {acknowledgeOnAdvance, loadCompletedSections, markSectionCompleted} from "./section-completion";

beforeEach(() => {
  store.events = [];
  store.readOk = true;
  store.writeOk = true;
  vi.mocked(recordEvent).mockClear();
});

describe("كتابة إنجاز القسم وقراءته", () => {
  it("يسجّل الإنجاز مرة واحدة، والتكرار يُرفض دون كتابة ثانية", async () => {
    expect(await markSectionCompleted("a1-01", "uebungen")).toEqual({status: "recorded"});
    expect(await markSectionCompleted("a1-01", "uebungen")).toEqual({status: "already-completed"});
    expect(recordEvent).toHaveBeenCalledTimes(1);
    expect(store.events).toHaveLength(1);
  });

  it("الحدث المكتوب يحمل النوع والدرس والقسم الصحيحين", async () => {
    await markSectionCompleted("a1-01", "minitest");
    const ev = store.events[0] as AnalyticsEvent;
    expect(ev).toMatchObject({type: "section-completed", lessonId: "a1-01", sectionId: "minitest"});
  });

  it("قسم مجهول لا يُكتب أبداً", async () => {
    expect(await markSectionCompleted("a1-01", "nicht-da")).toEqual({status: "unknown-section"});
    expect(recordEvent).not.toHaveBeenCalled();
  });

  it("إن تعذّرت القراءة لا تُكتب الأحداث (لا تكرار غير قابل للتحقق)", async () => {
    store.readOk = false;
    expect(await markSectionCompleted("a1-01", "uebungen")).toEqual({status: "failed"});
    expect(recordEvent).not.toHaveBeenCalled();
  });

  it("فشل الكتابة يُعلن فشلاً صريحاً", async () => {
    store.writeOk = false;
    expect(await markSectionCompleted("a1-01", "uebungen")).toEqual({status: "failed"});
  });

  it("قراءة الأقسام المكتملة تعيد المجموعة الصحيحة للدرس", async () => {
    await markSectionCompleted("a1-01", "uebungen");
    await markSectionCompleted("a1-01", "minitest");
    await markSectionCompleted("a1-02", "theorie");
    const res = await loadCompletedSections("a1-01");
    expect(res.ok).toBe(true);
    expect([...res.ids].sort()).toEqual(["minitest", "uebungen"]);
  });

  it("فشل القراءة يظهر في نتيجة loadCompletedSections", async () => {
    store.readOk = false;
    const res = await loadCompletedSections("a1-01");
    expect(res.ok).toBe(false);
    expect(res.ids.size).toBe(0);
  });
});

describe("إقرار المتعلم بإنهاء قسم (التالي أو إنهاء الدرس)", () => {
  it("قسم إقرار (vertiefung، آخر أقسام الدرس) يُسجَّل ويعيد true", async () => {
    expect(acknowledgeOnAdvance("a1-01", "vertiefung")).toBe(true);
    await vi.waitFor(() => expect(store.events).toHaveLength(1));
    expect(store.events[0]).toMatchObject({type: "section-completed", lessonId: "a1-01", sectionId: "vertiefung"});
  });

  it("قسم تمارين (uebungen) لا يُسجَّل من هنا، لأن إنجازه بنتيجة فعلية", async () => {
    expect(acknowledgeOnAdvance("a1-01", "uebungen")).toBe(false);
    await new Promise((r) => setTimeout(r, 0));
    expect(recordEvent).not.toHaveBeenCalled();
  });

  it("معرّف مجهول لا يُسجَّل", async () => {
    expect(acknowledgeOnAdvance("a1-01", "nicht-da")).toBe(false);
    await new Promise((r) => setTimeout(r, 0));
    expect(recordEvent).not.toHaveBeenCalled();
  });
});
