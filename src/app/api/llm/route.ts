import { NextResponse } from "next/server";

import { getServerLimit, getServerUsage, incrementServerUsage } from "@/lib/llm/server/counter";
import { hasAnyKey, serverModeEnabled } from "@/lib/llm/server/config";
import { generateWithFallback } from "@/lib/llm/server/fallback";
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
  // حد حجم الجسم قبل القراءة
  const rawText = await req.text();
  if (rawText.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, status: "error", error: "الطلب كبير جداً" }, { status: 413 });
  }

  let body: RequestBody;
  try {
    body = JSON.parse(rawText) as RequestBody;
  } catch {
    return NextResponse.json({ ok: false, status: "error", error: "طلبات غير صالحة" }, { status: 400 });
  }

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

  // clamp المعلمات
  const maxTokens = Math.min(MAX_TOKENS_CAP, Math.max(1, Math.round(Number(body.maxTokens) || 512)));
  const temperature = Math.min(TEMP_MAX, Math.max(TEMP_MIN, Number(body.temperature) ?? 0.7));

  // ── السقف اليومي (حماية إضافية فوق الإغلاق الافتراضي) ──
  const limit = getServerLimit();
  if (getServerUsage() >= limit) {
    return NextResponse.json(
      { ok: false, status: "limit", remaining: 0, limit },
      { status: 429 },
    );
  }

  // ── الاستدعاء مع Fallback تلقائي + مهلة كلية واحدة ──
  try {
    const { content, provider } = await Promise.race([
      generateWithFallback(typedMessages, { maxTokens, temperature }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("انتهت مهلة الاستجابة — أعد المحاولة")), TOTAL_TIMEOUT_MS),
      ),
    ]);
    const used = incrementServerUsage();
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
      { ok: false, status: "error", error: message, remaining: Math.max(0, limit - getServerUsage()), limit },
      { status: 502 },
    );
  }
}
