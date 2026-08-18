import { NextResponse } from "next/server";

import { getServerLimit } from "@/lib/llm/server/counter";
import { configuredProviders, serverModeEnabled } from "@/lib/llm/server/config";

export const runtime = "nodejs";
// ═══ P0-02: حالة ديناميكية — كانت تُجمَّد وقت البناء (configured:false دائماً) ═══
export const dynamic = "force-dynamic";

/**
 * GET /api/llm/status — حالة خدمة LLM
 * ═══ P0-02 ═══: «مُفعّل» فقط إذا وُضِع LLM_SERVER_MODE=1 صراحةً
 * (وإلا تُخفى الميزات الذكية — لا استنزاف لمفاتيح المالك)
 */
export async function GET() {
  if (!serverModeEnabled()) {
    return NextResponse.json({
      configured: false,
      providers: [],
      dailyLimit: getServerLimit(),
      usageToday: 0,
    });
  }
  return NextResponse.json({
    configured: true,
    providers: configuredProviders(),
    dailyLimit: getServerLimit(),
    usageToday: 0,
  });
}
