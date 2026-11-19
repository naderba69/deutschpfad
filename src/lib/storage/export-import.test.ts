import {afterEach, describe, expect, it, vi} from "vitest";

import {validateBackupData, isOwnedLsKey, isRestorableLsKey, deduplicateAnalyticsEvents, withoutAnalyticsEventId, BACKUP_VERSION, clearRestorableLocalStorage, restoreLocalStorage, collectOwnedLsKeys} from "@/lib/storage/export-import";
import type { BackupData } from "@/types/storage";

/**
 * اختبارات عقد النسخ الاحتياطي (P0-01 من تدقيق 2026-08-15):
 * · التحقق الصارم: settings إلزامية، بطاقات مدققة، حدود حجم
 * · قبول v1 للترحيل · رفض الملفات الناقصة/المشوهة
 * · قائمة أمان LocalStorage: بادئات dp:/deutschpfad: فقط
 */

function validV2(): BackupData {
  return {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    progress: { completedUnits: ["u1"], sealedLevels: [], completedLessons: [] },
    cards: [{ id: "c1", de: "Haus", ar: "منزل", level: "A1", source: "lesson", createdAt: 0, due: 0, interval: 0, repetitions: 0, ease: 2.5, qualitySum: 0, qualityCount: 0, lapses: 0 }],
    events: [{ type: "lesson-completed", lessonId: "a1-01", unitId: "u1", ts: Date.now() }],
    settings: { "dp:gems": { gems: 5 }, _localStorage: { "dp:gems": "5" } },
  } as unknown as BackupData;
}

describe("عقد النسخ الاحتياطي v2 (P0-01)", () => {
  it("نسخة v2 صالحة تُقبل", () => {
    expect(validateBackupData(validV2())).toBe(true);
  });

  it("نسخة بلا settings تُرفض (كانت تسبب استعادة جزئية بعد المسح)", () => {
    const b = validV2();
    delete (b as { settings?: unknown }).settings;
    expect(validateBackupData(b)).toBe(false);
  });

  it("بطاقة مشوهة (بلا id) تُرفض", () => {
    const b = validV2();
    b.cards = [{ de: "x" } as never];
    expect(validateBackupData(b)).toBe(false);
  });

  it("التقدم بلا completedUnits يُرفض", () => {
    const b = validV2();
    b.progress = { sealedLevels: [] } as never;
    expect(validateBackupData(b)).toBe(false);
  });

  it("نسخة v1 تُقبل للترحيل", () => {
    const b = validV2();
    b.version = 1;
    delete (b as { events?: unknown }).events;
    expect(validateBackupData(b)).toBe(true);
  });

  it("نسخة ضخمة (>20MB) تُرفض", () => {
    const b = validV2();
    b.settings = { big: "x".repeat(21 * 1024 * 1024) };
    expect(validateBackupData(b)).toBe(false);
  });

  it("نسخة بلا version تُرفض", () => {
    const b = validV2();
    delete (b as { version?: unknown }).version;
    expect(validateBackupData(b)).toBe(false);
  });

  it("يرفض الحدث ذي الطابع الزمني أو الحمولة غير الصالحة", () => {
    const b = validV2();
    b.events = [{type: "lesson-view", lessonId: "a1-01", ts: Number.NaN} as never];
    expect(validateBackupData(b)).toBe(false);
    b.events = [{type: "lesson-completed", lessonId: 3, unitId: "u1", ts: 1} as never];
    expect(validateBackupData(b)).toBe(false);
  });

  it("يرفض بطاقة ذات مستوى أو حقول SM-2 غير صالحة", () => {
    const b = validV2();
    b.cards = [{...b.cards[0], level: "C2"} as never];
    expect(validateBackupData(b)).toBe(false);
    b.cards = [{...validV2().cards[0], ease: Number.POSITIVE_INFINITY} as never];
    expect(validateBackupData(b)).toBe(false);
  });

  it("deduplicates events both against storage and within the imported file", () => {
    const event = {type: "lesson-view", lessonId: "a1-01", ts: 123} as const;
    const other = {type: "lesson-view", lessonId: "a1-02", ts: 124} as const;
    expect(deduplicateAnalyticsEvents([event], [event, other, other])).toEqual([other]);
    const reviewOne = {type: "review", cardId: "card-1", quality: 4, ts: 200} as const;
    const reviewTwo = {type: "review", cardId: "card-2", quality: 4, ts: 200} as const;
    expect(deduplicateAnalyticsEvents([], [reviewOne, reviewTwo])).toHaveLength(2);
    expect(withoutAnalyticsEventId({...event, id: 42})).toEqual(event);
  });
});

describe("قائمة أمان LocalStorage (P0-01)", () => {
  it("مفاتيح dp: و deutschpfad: مملوكة", () => {
    expect(isOwnedLsKey("dp:gems")).toBe(true);
    expect(isOwnedLsKey("deutschpfad:progress:v1")).toBe(true);
    expect(isOwnedLsKey("dp:cando:A1:1")).toBe(true);
  });

  it("مفاتيح تقدم الدروس بصيغ dp-flow / dp-steps / lesson-step مملوكة", () => {
    expect(isOwnedLsKey("lesson-step:a1-01")).toBe(true);
    expect(isOwnedLsKey("dp-flow:a1-01")).toBe(true);
    expect(isOwnedLsKey("dp-steps:a1-01")).toBe(true);
  });

  it("قائمة الملكية تشمل جميع الصيغ التي يجب أن يمسحها reset", () => {
    for (const key of ["dp:gems", "deutschpfad:progress:v1", "lesson-step:a1-01", "dp-flow:a1-01", "dp-steps:a1-01"]) {
      expect(isOwnedLsKey(key)).toBe(true);
    }
  });

  it("مفاتيح غريبة ليست مملوكة (لا تُكتب عند الاستعادة)", () => {
    expect(isOwnedLsKey("auth_token")).toBe(false);
    expect(isOwnedLsKey("user:session")).toBe(false);
    expect(isOwnedLsKey("")).toBe(false);
  });

  it("مفتاح BYOK لا يُستعاد حتى لو أُدرج يدوياً في ملف النسخة", () => {
    expect(isOwnedLsKey("dp:llm:user-key")).toBe(true);
    expect(isRestorableLsKey("dp:llm:user-key")).toBe(false);
    expect(isRestorableLsKey("dp:gems")).toBe(true);
  });
});
