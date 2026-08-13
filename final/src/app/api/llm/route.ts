import { NextResponse } from "next/server";

import { getServerLimit, getServerUsage, incrementServerUsage } from "@/lib/llm/server/counter";
import { hasAnyKey } from "@/lib/llm/server/config";
import { generateWithFallback } from "@/lib/llm/server/fallback";
import type { LLMMessage } from "@/types/llm";

export const runtime = "nodejs";
export const maxDuration = 60;

interface RequestBody {
  messages?: unknown;
  purpose?: string;
  maxTokens?: number;
  temperature?: number;
}

/**
 * POST /api/llm — نقطة الاتصال الوحيدة للذكاء الاصطناعي
 * — حماية المفاتيح (لا تُرسل أبداً للمتصفح) —
 * — سقف يومي + Fallback تلقائي + معالجة 429 —
 */
export async function POST(req: Request) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ ok: false, status: "error", error: "طلبات غير صالحة" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ ok: false, status: "error", error: "لا توجد رسائل" }, { status: 400 });
  }
  const typedMessages = messages.filter(
    (m): m is LLMMessage =>
      !!m && typeof m === "object" && typeof (m as LLMMessage).content === "string",
  );
  if (typedMessages.length === 0) {
    return NextResponse.json({ ok: false, status: "error", error: "رسائل غير صالحة" }, { status: 400 });
  }

  // ── السقف اليومي ──
  const limit = getServerLimit();
  if (getServerUsage() >= limit) {
    return NextResponse.json(
      { ok: false, status: "limit", remaining: 0, limit },
      { status: 429 },
    );
  }

  // ── لا مفاتيح → الميزات الذكية تُخفى تلقائياً ──
  if (!hasAnyKey()) {
    return NextResponse.json({ ok: false, status: "not-configured" });
  }

  // ── الاستدعاء مع Fallback تلقائي ──
  try {
    const { content, provider } = await generateWithFallback(typedMessages, {
      maxTokens: body.maxTokens,
      temperature: body.temperature,
    });
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
