/**
 * اختبارات كتابة سجل المراجعات عبر مسار المراجعة الفعلي (IndexedDB وهمية).
 * الوقت يُثبَّت بتواريخ محلية كي لا يتغير الاختبار حسب المنطقة الزمنية.
 */
import "fake-indexeddb/auto";

import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";

import {createCard} from "./sm2";
import {currentStreak, reviewsOn} from "./review-log";

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

/** وقت محلي ثابت في اليوم المعطى */
const at = (day: number, hour = 10) => new Date(2026, 9, day, hour, 0, 0);

let svc: Svc;
let db: Db;

beforeEach(async () => {
  ({svc, db} = await fresh());
  // نثبت Date فقط (بدون المؤقتات) كي لا تتعارض مع IndexedDB الوهمية
  vi.useFakeTimers({toFake: ["Date"]});
});

afterEach(() => {
  vi.useRealTimers();
});

async function seedCard(id: string): Promise<void> {
  await (await db.getDb()).put("cards", createCard({id, de: "der Apfel", ar: "تفاحة", level: "A1", source: "manual"}));
}

describe("كتابة سجل المراجعات عند كل مراجعة", () => {
  it("مراجعة بالتقييم تزيد الإجمالي ومراجعات اليوم", async () => {
    await seedCard("c1");
    vi.setSystemTime(at(13));
    await svc.reviewCard("c1", 4);
    const log = await svc.getReviewLog();
    expect(log.total).toBe(1);
    expect(reviewsOn(log, at(13).getTime())).toBe(1);
  });

  it("المراجعة بالكتابة تُحسب أيضاً", async () => {
    await seedCard("c2");
    vi.setSystemTime(at(13));
    await svc.reviewCardByTyping("c2", "der Apfel");
    expect((await svc.getReviewLog()).total).toBe(1);
  });

  it("بطاقة غير موجودة لا تزيد السجل", async () => {
    vi.setSystemTime(at(13));
    expect(await svc.reviewCard("missing", 4)).toBeNull();
    expect(await svc.reviewCardByTyping("missing", "x")).toBeNull();
    expect((await svc.getReviewLog()).total).toBe(0);
  });

  it("الإجمالي لا ينقص عند حذف البطاقات", async () => {
    await seedCard("c3");
    vi.setSystemTime(at(13));
    await svc.reviewCard("c3", 5);
    await svc.deleteCard("c3");
    expect((await svc.getReviewLog()).total).toBe(1);
  });

  it("السلسلة: ثلاثة أيام متتالية بمراجعة ⇒ 3، ثم يوم فارغ يكسرها", async () => {
    await seedCard("s1");
    for (const day of [11, 12, 13]) {
      vi.setSystemTime(at(day));
      await svc.reviewCard("s1", 4);
    }
    let log = await svc.getReviewLog();
    expect(currentStreak(log, at(13).getTime())).toBe(3);

    // يوم 14 بلا مراجعة، والنظر في يوم 15 ⇒ السلسلة انكسرت
    expect(currentStreak(log, at(15).getTime())).toBe(0);

    // مراجعة يوم 15 تبدأ سلسلة جديدة من 1
    vi.setSystemTime(at(15));
    await svc.reviewCard("s1", 4);
    log = await svc.getReviewLog();
    expect(currentStreak(log, at(15).getTime())).toBe(1);
    expect(log.total).toBe(4);
  });
});
