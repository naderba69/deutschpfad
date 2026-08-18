import {describe, expect, it} from "vitest";

import {validateBackupData, isOwnedLsKey, BACKUP_VERSION} from "@/lib/storage/export-import";
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
});

describe("قائمة أمان LocalStorage (P0-01)", () => {
  it("مفاتيح dp: و deutschpfad: مملوكة", () => {
    expect(isOwnedLsKey("dp:gems")).toBe(true);
    expect(isOwnedLsKey("deutschpfad:progress:v1")).toBe(true);
    expect(isOwnedLsKey("dp:cando:A1:1")).toBe(true);
  });

  it("مفاتيح غريبة ليست مملوكة (لا تُكتب عند الاستعادة)", () => {
    expect(isOwnedLsKey("auth_token")).toBe(false);
    expect(isOwnedLsKey("user:session")).toBe(false);
    expect(isOwnedLsKey("")).toBe(false);
  });
});
