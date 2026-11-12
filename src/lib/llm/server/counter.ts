import {
  LLM_COUNTER_REST_TOKEN,
  LLM_COUNTER_REST_URL,
  LLM_DAILY_LIMIT,
} from "@/lib/llm/server/config";

/** عدّاد LLM ذري مشترك على Redis REST؛ الفشل يمنع استدعاء المزود. */

/** مفتاح اليوم (YYYY-MM-DD بالتوقيت العالمي) */
export function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

/** عدد الطلبات اليومي المخزن مركزياً (Upstash Redis REST). */
export async function getSharedServerUsage(date: string = todayKey()): Promise<number> {
  const response = await fetch(LLM_COUNTER_REST_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LLM_COUNTER_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["GET", `deutschpfad:llm:daily:${date}`]),
    signal: AbortSignal.timeout(3_000),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("تعذر التحقق من عداد الاستخدام المشترك");
  const payload = (await response.json()) as {result?: unknown};
  const result = payload.result;
  if (result === null) return 0;
  const usage = typeof result === "number" ? result : Number(result);
  if (!Number.isSafeInteger(usage) || usage < 0) throw new Error("استجابة عداد الاستخدام غير صالحة");
  return usage;
}

/** حجز ذري للحصة: null يعني بلوغ الحد. أي فشل للمخزن يُرفض مغلقاً. */
export async function reserveSharedServerUsage(
  limit: number,
  date: string = todayKey(),
  endpoint: string = LLM_COUNTER_REST_URL,
  token: string = LLM_COUNTER_REST_TOKEN,
): Promise<number | null> {
  const key = `deutschpfad:llm:daily:${date}`;
  const ttlSeconds = Math.max(1, Math.ceil((Date.parse(`${date}T23:59:59.999Z`) - Date.now()) / 1000));
  const script = `local current=tonumber(redis.call('GET',KEYS[1]) or '0')\nif current >= tonumber(ARGV[1]) then return {current,0} end\nlocal used=redis.call('INCR',KEYS[1])\nif used == 1 then redis.call('EXPIRE',KEYS[1],ARGV[2]) end\nreturn {used,1}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", script, "1", key, String(limit), String(ttlSeconds)]),
    signal: AbortSignal.timeout(3_000),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("تعذر حجز حصة LLM في المخزن المشترك");
  const payload = (await response.json()) as {result?: unknown; error?: unknown};
  if (payload.error || !Array.isArray(payload.result) || payload.result.length !== 2) {
    throw new Error("استجابة حجز حصة LLM غير صالحة");
  }
  const [usedValue, reservedValue] = payload.result;
  const used = Number(usedValue);
  if (!Number.isSafeInteger(used) || used < 0 || Number(reservedValue) !== 0 && Number(reservedValue) !== 1) {
    throw new Error("قيم حجز حصة LLM غير صالحة");
  }
  return Number(reservedValue) === 1 ? used : null;
}

/** الحد الأقصى اليومي (من البيئة) */
export function getServerLimit(): number {
  return LLM_DAILY_LIMIT;
}
