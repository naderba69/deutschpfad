import { describe, expect, it, vi } from "vitest";

import { isJsonObject, readRequestTextLimited } from "./request-body";

function streamOf(...chunks: Uint8Array[]) {
  let index = 0;
  const cancel = vi.fn();
  const stream = new ReadableStream<Uint8Array>({
    pull(controller) {
      if (index < chunks.length) controller.enqueue(chunks[index++]);
      else controller.close();
    },
    cancel,
  });
  return { stream, cancel };
}

describe("isJsonObject", () => {
  it("accepts JSON objects and rejects null, arrays, and primitive values", () => {
    expect(isJsonObject({messages: []})).toBe(true);
    expect(isJsonObject(null)).toBe(false);
    expect(isJsonObject([])).toBe(false);
    expect(isJsonObject("text")).toBe(false);
    expect(isJsonObject(42)).toBe(false);
    expect(isJsonObject(false)).toBe(false);
  });
});

describe("readRequestTextLimited", () => {
  it("decodes UTF-8 across chunks and allows a body exactly at the byte limit", async () => {
    const bytes = new TextEncoder().encode('{"text":"مرحبا"}');
    const { stream } = streamOf(bytes.slice(0, 8), bytes.slice(8));

    await expect(readRequestTextLimited(stream, bytes.byteLength)).resolves.toBe('{"text":"مرحبا"}');
  });

  it("cancels and rejects as soon as the streamed byte limit is crossed", async () => {
    const { stream, cancel } = streamOf(new Uint8Array(4), new Uint8Array(3));

    await expect(readRequestTextLimited(stream, 6)).resolves.toBeNull();
    expect(cancel).toHaveBeenCalledOnce();
  });

  it("handles an absent body and rejects invalid limits", async () => {
    await expect(readRequestTextLimited(null, 1)).resolves.toBe("");
    await expect(readRequestTextLimited(null, -1)).rejects.toThrow(RangeError);
  });
});
