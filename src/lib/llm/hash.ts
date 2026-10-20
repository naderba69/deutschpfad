/**
 * توليد مفتاح التخزين المؤقت — SHA-256 عبر Web Crypto
 */

/** تجزئة نص إلى hex (SHA-256) */
export async function sha256Hex(str: string): Promise<string> {
  const data = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** مفتاح تخزين مؤقت لطلب LLM (من الرسائل + الغرض) */
export async function hashLLMRequest(
  messages: { role: string; content: string }[],
  purpose: string,
): Promise<string> {
  return sha256Hex(`${purpose}::${JSON.stringify(messages)}`);
}
