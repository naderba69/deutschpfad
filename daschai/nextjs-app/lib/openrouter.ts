/**
 * OpenRouter Client Service
 */
import { GITHUB_TOOLS_DEFINITIONS } from "./github";

export interface OpenRouterChatOptions {
  apiKey: string;
  model: string;
  messages: any[];
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
  enableTools?: boolean;
}

export async function createOpenRouterCompletion(options: OpenRouterChatOptions) {
  const { apiKey, model, messages, temperature = 0.7, maxTokens = 4096, stream = true, enableTools = true } = options;

  const body: Record<string, any> = {
    model,
    messages,
    temperature,
    max_tokens: maxTokens,
    stream,
  };

  if (enableTools) {
    body.tools = GITHUB_TOOLS_DEFINITIONS;
    body.tool_choice = "auto";
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "X-Title": "OX-Alpha Workbench Pro",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response;
}
