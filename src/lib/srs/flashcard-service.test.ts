/**
 * اختبارات خدمة البطاقات على IndexedDB وهمية (fake-indexeddb).
 * كل اختبار يبدأ بقاعدة فارغة ووحدة جديدة (لأن الخدمة تحفظ حالة الترحيل).
 */
import "fake-indexeddb/auto";

import {beforeEach, describe, expect, it, vi} from "vitest";

import type {Sm2CardData} from "@/types/srs";

import {createCard} from "./sm2";
import {DAY_MS, MODEL_ID} from "./ebbinghaus";

type Svc = typeof import("./flashcard-service");
type Db = typeof import("@/lib/storage/db");

async function fresh(): Promise<{svc: Svc; db: Db}> {
  vi.resetModules();
  const db = await import("@/lib/storage/db");
  await db.closeDb();
  await new Promise<void>((resolve, reject) => {
    const req = indexedDB.deleteDatabase("deutschpfad");
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
    req.onblocked = () => resolve();
  });
  const svc = await import("./flashcard-service");
  return {svc, db};
}

let svc: Svc;
let db: Db;

beforeEach(async () => {
  ({svc, db} = await fresh());
});

describe("بطاقات الأخطاء (recordErrorCard)", () => {
  it("خطأ بإجابة صحيحة ينشئ بطاقة مستحقة بعد يوم بالنموذج الحالي", async () => {
    const before = Date.now();
    await svc.recordErrorCard({id: "lesson-a1-03:e1", lessonId: "a1-03", explanation: "المادة خاطئة", correctAnswer: "der Apfel"});
    const card = await (await db.getDb()).get("cards", "err-lesson-a1-03:e1");
    expect(card).toBeDefined();
    expect(card!.source).toBe("error");
    expect(card!.level).toBe("A1");
    expect(card!.srsModel).toBe(MODEL_ID);
    expect(card!.due).toBeGreaterThanOrEqual(before + DAY_MS - 1000);
    expect(card!.due).toBeLessThanOrEqual(Date.now() + DAY_MS + 1000);
  });

  it("تكرار الخطأ يعيد جدولة البطاقة نفسها خلال 10 دقائق (لا بطاقة ثانية)", async () => {
    const entry = {id: "x:e2", lessonId: "b1-01", explanation: "ترتيب", correctAnswer: "Ich weiß es."};
    await svc.recordErrorCard(entry);
    await svc.recordErrorCard(entry);
    const all = (await db.getDb()).getAll("cards");
    const errs = (await all).filter((c) => c.source === "error");
    expect(errs).toHaveLength(1);
    expect(errs[0].lapses).toBe(1);
    expect(errs[0].due).toBeLessThanOrEqual(Date.now() + 10 * 60 * 1000 + 1000);
  });

  it("خطأ بلا إجابة صحيحة لا ينشئ بطاقة", async () => {
    await svc.recordErrorCard({id: "w:1", explanation: "طول النص", correctAnswer: undefined});
    expect(await (await db.getDb()).getAll("cards")).toHaveLength(0);
  });
});

describe("استيراد وتصدير المفردات", () => {
  const items = [
    {level: "A1" as const, de: "der Apfel", ar: "التفاحة"},
    {level: "A2" as const, de: "das Brot", ar: "الخبز", example: "Ich esse Brot."},
  ];

  it("يضيف البطاقات ثم لا يكررها عند الاستيراد الثاني", async () => {
    expect(await svc.importVocabItems(items, "vocab")).toEqual({added: 2, existing: 0});
    expect(await svc.importVocabItems(items, "vocab")).toEqual({added: 0, existing: 2});
    expect(await (await db.getDb()).getAll("cards")).toHaveLength(2);
  });

  it("لا يمسّ بطاقة موجودة (تُحفظ حالة المراجعة)", async () => {
    await svc.importVocabItems([items[0]], "vocab");
    const d = await db.getDb();
    const card = (await d.get("cards", "vocab-A1|der apfel"))!;
    await d.put("cards", {...card, repetitions: 4, ar: "عُدّلت"});
    await svc.importVocabItems([items[0]], "vocab");
    const after = (await d.get("cards", "vocab-A1|der apfel"))!;
    expect(after.repetitions).toBe(4);
    expect(after.ar).toBe("عُدّلت");
  });

  it("التصدير يشمل البطاقات اليدوية والمستوردة فقط", async () => {
    await svc.importVocabItems(items, "vocab");
    const d = await db.getDb();
    await d.put("cards", createCard({id: "lesson-1", de: "die Milch", ar: "الحليب", level: "A1", source: "lesson"}));
    const file = await svc.exportCustomVocab(new Date("2026-10-13T00:00:00Z"));
    expect(file.items.map((i) => i.de).sort()).toEqual(["das Brot", "der Apfel"]);
    expect(file.items.find((i) => i.de === "das Brot")?.example).toBe("Ich esse Brot.");
  });
});

describe("ترحيل النموذج (ensureEbbinghausMigration)", () => {
  it("يحوّل البطاقات القديمة مرة واحدة ويأخذ لقطة قبلها", async () => {
    const d = await db.getDb();
    await d.put("cards", createCard({id: "old-1", de: "der Mann", ar: "الرجل", level: "A1", source: "lesson"}));
    await d.put("cards", createCard({id: "old-2", de: "die Frau", ar: "المرأة", level: "A1", source: "manual"}));

    await svc.ensureEbbinghausMigration();
    const cards = await d.getAll("cards");
    expect(cards.every((c) => c.srsModel === MODEL_ID)).toBe(true);

    const state = (await d.get("settings", "srs-model-state"))!.data as {migratedCount: number; backupSnapshotId: string | null};
    expect(state.migratedCount).toBe(2);
    expect(state.backupSnapshotId).toMatch(/^snap-/);
  });

  it("إعادة التشغيل لا تغيّر شيئاً", async () => {
    const d = await db.getDb();
    await d.put("cards", createCard({id: "old-3", de: "das Kind", ar: "الطفل", level: "A1", source: "lesson"}));
    await svc.ensureEbbinghausMigration();
    const first = (await d.get("settings", "srs-model-state"))!.data;
    await svc.ensureEbbinghausMigration();
    expect((await d.get("settings", "srs-model-state"))!.data).toEqual(first);
  });
});
