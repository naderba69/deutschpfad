import { NextResponse } from "next/server";

import { getServerLimit, reserveSharedServerUsage } from "@/lib/llm/server/counter";
import { hasAnyKey, serverModeEnabled } from "@/lib/llm/server/config";
import { generateWithFallback } from "@/lib/llm/server/fallback";
import { isJsonObject, readRequestTextLimited } from "@/lib/llm/server/request-body";
import type { LLMMessage } from "@/types/llm";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface RequestBody {
  messages?: unknown;
  purpose?: string;
  maxTokens?: number;
  temperature?: number;
}

/** ═══ P0-02: حدود صارمة للطلبات ═══ */
const MAX_MESSAGES = 20;
const MAX_TOTAL_CHARS = 16000;
const MAX_BODY_BYTES = 64 * 1024;
const ALLOWED_ROLES = new Set(["user", "assistant"]); // لا نقبل system من الإنترنت
const MAX_TOKENS_CAP = 2048;
const TEMP_MIN = 0;
const TEMP_MAX = 2;
/** مهلة كلية واحدة عبر السلسلة (أقل من maxDuration=60s) */
const TOTAL_TIMEOUT_MS = 50_000;

/**
 * POST /api/llm — نقطة الاتصال الوحيدة للذكاء الاصطناعي
 * ═══ P0-02 (تدقيق 2026-08-15) ═══
 * · وضع الخادم مغلق افتراضياً (LLM_SERVER_MODE=1) — لا استنزاف لمفاتيح المالك
 * · تحقق صارم: عدد/طول الرسائل، أدوار مسموحة، clamp للمعلمات، حد حجم
 * · مهلة كلية واحدة عبر كل المحاولات
 */
export async function POST(req: Request) {
  // ارفض الحجم المعلن مبكراً، ثم طبّق حداً فعلياً أثناء قراءة التدفق كي لا
  // يُحمّل جسم غير موثوق بالكامل في الذاكرة قبل التحقق منه.
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

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawText) as unknown;
  } catch {
    return NextResponse.json({ ok: false, status: "error", error: "طلبات غير صالحة" }, { status: 400 });
  }
  if (!isJsonObject(parsedBody)) {
    return NextResponse.json({ ok: false, status: "error", error: "يجب أن يكون الطلب كائناً صالحاً" }, { status: 400 });
  }
  const body = parsedBody as RequestBody;

  // ── وضع الخادم مغلق افتراضياً — الحماية المالية الأساسية ──
  if (!serverModeEnabled()) {
    return NextResponse.json({ ok: false, status: "not-configured" });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return NextResponse.json({ ok: false, status: "error", error: "عدد الرسائل غير صالح" }, { status: 400 });
  }

  // تحقق صارم: كل رسالة role مسموح + content نص بحد طول
  const typedMessages: LLMMessage[] = [];
  let totalChars = 0;
  for (const m of messages) {
    if (!m || typeof m !== "object") {
      return NextResponse.json({ ok: false, status: "error", error: "رسائل غير صالحة" }, { status: 400 });
    }
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (typeof role !== "string" || !ALLOWED_ROLES.has(role)) {
      return NextResponse.json({ ok: false, status: "error", error: "دور غير مسموح" }, { status: 400 });
    }
    if (typeof content !== "string") {
      return NextResponse.json({ ok: false, status: "error", error: "محتوى غير صالح" }, { status: 400 });
    }
    totalChars += content.length;
    if (totalChars > MAX_TOTAL_CHARS) {
      return NextResponse.json({ ok: false, status: "error", error: "الرسائل طويلة جداً" }, { status: 413 });
    }
    typedMessages.push({ role, content } as LLMMessage);
  }
  if (typedMessages.length === 0) {
    return NextResponse.json({ ok: false, status: "error", error: "رسائل غير صالحة" }, { status: 400 });
  }

  // clamp المعلمات مع رفض NaN/Infinity ضمنياً إلى قيم افتراضية آمنة
  const requestedMaxTokens = typeof body.maxTokens === "number" && Number.isFinite(body.maxTokens)
    ? body.maxTokens
    : 512;
  const requestedTemperature = typeof body.temperature === "number" && Number.isFinite(body.temperature)
    ? body.temperature
    : 0.7;
  const maxTokens = Math.min(MAX_TOKENS_CAP, Math.max(1, Math.round(requestedMaxTokens)));
  const temperature = Math.min(TEMP_MAX, Math.max(TEMP_MIN, requestedTemperature));

  // ── السقف اليومي (حماية إضافية فوق الإغلاق الافتراضي) ──
  const limit = getServerLimit();
  let used: number | null;
  try {
    // حجز ذري مركزي يمنع تجاوز الحد بين workers/instances أيضاً.
    used = await reserveSharedServerUsage(limit);
  } catch {
    // Fail closed: لا نصل إلى مزود مدفوع إذا تعذر التأكد من الحصة.
    return NextResponse.json(
      { ok: false, status: "counter-unavailable", error: "الخدمة غير متاحة مؤقتاً" },
      { status: 503 },
    );
  }
  if (used === null) {
    return NextResponse.json(
      { ok: false, status: "limit", remaining: 0, limit },
      { status: 429 },
    );
  }

  // ── الاستدعاء مع Fallback تلقائي + مهلة كلية واحدة ──
  const controller = new AbortController();
  const abortFromClient = () => controller.abort(
    req.signal.reason ?? new DOMException("أغلق العميل الاتصال", "AbortError"),
  );
  if (req.signal.aborted) abortFromClient();
  else req.signal.addEventListener("abort", abortFromClient, {once: true});
  const timeoutId = setTimeout(
    () => controller.abort(new Error("انتهت مهلة الاستجابة — أعد المحاولة")),
    TOTAL_TIMEOUT_MS,
  );
  try {
    const { content, provider } = await generateWithFallback(
      typedMessages,
      {maxTokens, temperature},
      controller.signal,
    );
    return NextResponse.json({
      ok: true,
      content,
      provider,
      remaining: Math.max(0, limit - used),
      limit,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "خطأ غير معروف";
    return NextResponse.json(
      { ok: false, status: "error", error: message, remaining: Math.max(0, limit - used), limit },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeoutId);
    req.signal.removeEventListener("abort", abortFromClient);
  }
}
