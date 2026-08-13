import { NextResponse } from "next/server";

import { getServerLimit, getServerUsage } from "@/lib/llm/server/counter";
import { configuredProviders } from "@/lib/llm/server/config";

export const runtime = "nodejs";

/**
 * GET /api/llm/status — حالة خدمة LLM
 * (تُستخدم لإخفاء الميزات الذكية تلقائياً عند غياب المفاتيح)
 */
export async function GET() {
  return NextResponse.json({
    configured: configuredProviders().length > 0,
    providers: configuredProviders(),
    dailyLimit: getServerLimit(),
    usageToday: getServerUsage(),
  });
}
