import { NextRequest, NextResponse } from "next/server";
import { createOpenRouterCompletion } from "@/lib/openrouter";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { apiKey, model, messages, temperature, maxTokens, stream, enableTools } = body;

    const keyToUse = apiKey || process.env.OPENROUTER_API_KEY;
    if (!keyToUse) {
      return NextResponse.json(
        { error: "Missing OpenRouter API Key" },
        { status: 400 }
      );
    }

    const response = await createOpenRouterCompletion({
      apiKey: keyToUse,
      model: model || process.env.NEXT_PUBLIC_DEFAULT_MODEL || "anthropic/claude-3.5-sonnet",
      messages,
      temperature,
      maxTokens,
      stream,
      enableTools,
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(err, { status: response.status });
    }

    if (stream) {
      return new Response(response.body, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    } else {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
