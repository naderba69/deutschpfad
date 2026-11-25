import { NextResponse } from "next/server";

import { GEMINI_API_KEY, GEMINI_TTS_MODEL, serverModeEnabled, TRUST_PROXY } from "@/lib/llm/server/config";
import { getServerLimit, reserveSharedServerUsage } from "@/lib/llm/server/counter";
import { clientIp, llmLimiter } from "@/lib/llm/server/rate-limit";
import { isJsonObject, readRequestTextLimited } from "@/lib/llm/server/request-body";
import {
  buildGeminiTtsBody,
  extractPcm,
  geminiTtsUrl,
  pcm16ToWav,
  validateTtsText,
} from "@/lib/llm/server/tts";

export const runtime = "nodejs";
export const maxDuration = 30;
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 4 * 1024;
const PROVIDER_TIMEOUT_MS = 25_000;

/**
 * POST /api/tts — صوت ذكي (Gemini TTS) لجمل قصيرة، اختياري من الواجهة.
 * · مغلق افتراضياً: يتطلب LLM_SERVER_MODE=1 وGEMINI_API_KEY ومخزن العداد المشترك
 * · يشترك في السقف اليومي نفسه لـ /api/llm (حجز ذري، فشل مغلق)
 * · عند أي فشل تُرجع JSON بحالة واضحة، فتعود الواجهة إلى صوت المتصفح
 */
export async function POST(req: Request) {
  const verdict = llmLimiter.hit(clientIp(req.headers, TRUST_PROXY));
  if (!verdict.allowed) {
    return NextResponse.json(
      { ok: false, status: "error", error: "طلبات كثيرة — انتظر دقيقة ثم أعد المحاولة" },
      { status: 429, headers: { "Retry-After": String(Math.ceil(verdict.retryAfterMs / 1000)) } },
    );
  }
  const contentLength = Number(req.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, status: "error", error: "الطلب كبير جداً" }, { status: 413 });
  }
  let rawText: string | null;
  try {
    rawText = await readRequestTextLimited(req.body, MAX_BODY_BYTES);
  } catch {
    return NextResponse.json({ ok: false, status: "error", error: "تعذرت قراءة الطلب" }, { status: 400 });
  }
  if (rawText === null) {
    return NextResponse.json({ ok: false, status: "error", error: "الطلب كبير جداً" }, { status: 413 });
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawText) as unknown;
  } catch {
    return NextResponse.json({ ok: false, status: "error", error: "طلب غير صالح" }, { status: 400 });
  }
  if (!isJsonObject(parsed)) {
    return NextResponse.json({ ok: false, status: "error", error: "طلب غير صالح" }, { status: 400 });
  }

  // الإغلاق الافتراضي: لا يُستدعى مزود بمفتاح المالك دون تفعيل صريح ومخزن عداد مشترك
  if (!serverModeEnabled() || !GEMINI_API_KEY) {
    return NextResponse.json({ ok: false, status: "not-configured" });
  }

  const checked = validateTtsText(parsed.text);
  if (!checked.ok) {
    return NextResponse.json({ ok: false, status: "error", error: checked.error }, { status: 400 });
  }

  const limit = getServerLimit();
  let used: number | null;
  try {
    used = await reserveSharedServerUsage(limit);
  } catch {
    return NextResponse.json(
      { ok: false, status: "counter-unavailable", error: "الخدمة غير متاحة مؤقتاً" },
      { status: 503 },
    );
  }
  if (used === null) {
    return NextResponse.json({ ok: false, status: "limit", remaining: 0, limit }, { status: 429 });
  }

  try {
    const res = await fetch(geminiTtsUrl(GEMINI_TTS_MODEL), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify(buildGeminiTtsBody(checked.text)),
      signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, status: "provider-error", error: "تعذر توليد الصوت" }, { status: 502 });
    }
    const { pcm, sampleRate } = extractPcm(await res.json());
    const wav = pcm16ToWav(pcm, sampleRate);
    return new Response(wav, {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ ok: false, status: "provider-error", error: "تعذر توليد الصوت" }, { status: 502 });
  }
}
