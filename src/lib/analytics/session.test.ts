/**
 * اختبارات وحدة — دوال إحصائيات الدراسة (منطق خالص)
 */
import { describe, expect, it } from "vitest";

import {formatMinutes} from "@/lib/analytics/session-format";
import {elapsedWholeMinutes} from "@/lib/analytics/session";

describe("elapsedWholeMinutes — مدة نبضة جلسة الدراسة", () => {
  it("يحسب كل الدقائق المكتملة بعد تأخر التبويب", () => {
    expect(elapsedWholeMinutes(0, 3 * 60_000 + 20_000)).toBe(3);
  });

  it("لا يسجل جزء الدقيقة أو الزمن السالب", () => {
    expect(elapsedWholeMinutes(0, 59_999)).toBe(0);
    expect(elapsedWholeMinutes(60_000, 0)).toBe(0);
  });
});

describe("formatMinutes — تنسيق الوقت", () => {
  it("أقل من ساعة → دقائق فقط", () => {
    expect(formatMinutes(45)).toBe("45 دقيقة");
  });

  it("ساعة فأكثر → ساعات ودقائق", () => {
    expect(formatMinutes(75)).toBe("1س 15د");
  });

  it("صفر → 0 دقيقة", () => {
    expect(formatMinutes(0)).toBe("0 دقيقة");
  });
});

import {beforeEach, vi} from "vitest";
import {getStudyStatsResult} from "@/lib/analytics/session";
import {getDb} from "@/lib/storage/db";

vi.mock("@/lib/storage/db", () => ({getDb: vi.fn()}));

beforeEach(() => vi.mocked(getDb).mockReset());

describe("getStudyStatsResult — ملخص الزمن", () => {
  it("يجمع دقائق الجلسة لا عدد أحداثها، ويحافظ على يوم نشاط واحد", async () => {
    const now = Date.now();
    vi.mocked(getDb).mockResolvedValue({
      getAll: vi.fn().mockResolvedValue([
        {type: "session-minute", minutes: 3, ts: now - 1_000},
        {type: "session-minute", minutes: 2, ts: now - 2_000},
      ]),
    } as never);

    const result = await getStudyStatsResult();
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.stats.totalMinutes).toBe(5);
      expect(result.stats.dailyAvg).toBe(0.4);
      expect(result.stats.activeDays).toBe(1);
    }
  });

  it("لا يقتصر الإجمالي على أحدث 2000 حدث", async () => {
    const now = Date.now();
    vi.mocked(getDb).mockResolvedValue({
      getAll: vi.fn().mockResolvedValue(
        Array.from({length: 2001}, () => ({type: "session-minute", minutes: 1, ts: now - 1_000})),
      ),
    } as never);

    const result = await getStudyStatsResult();
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.stats.totalMinutes).toBe(2001);
  });

  it("يتجاهل أحداث الجلسات المستقبلية أو ذات المدة غير الصالحة", async () => {
    const now = Date.now();
    vi.mocked(getDb).mockResolvedValue({
      getAll: vi.fn().mockResolvedValue([
        {type: "session-minute", minutes: 4, ts: now - 1_000},
        {type: "session-minute", minutes: 90, ts: now + 86_400_000},
        {type: "session-minute", minutes: -5, ts: now - 2_000},
        {type: "session-minute", minutes: Number.NaN, ts: now - 3_000},
        {type: "session-minute", minutes: 0.5, ts: now - 4_000},
      ]),
    } as never);

    const result = await getStudyStatsResult();
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.stats.totalMinutes).toBe(4);
      expect(result.stats.dailyAvg).toBe(0.3);
      expect(result.stats.activeDays).toBe(1);
    }
  });

  it("يفصل فشل قراءة التخزين عن ملخص فارغ", async () => {
    vi.mocked(getDb).mockResolvedValue({getAll: vi.fn().mockRejectedValue(new Error("unavailable"))} as never);
    expect(await getStudyStatsResult()).toEqual({ok: false});
  });
});
