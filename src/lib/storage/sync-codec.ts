const MAX_SYNC_CODE_CHARS = 1_500_000;
export const MAX_SYNC_PAYLOAD_BYTES = 20 * 1024 * 1024;

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array {
  if (base64.length > MAX_SYNC_CODE_CHARS) throw new Error("رابط المزامنة أكبر من الحد المسموح");
  const binary = atob(base64);
  if (binary.length > MAX_SYNC_PAYLOAD_BYTES) throw new Error("بيانات المزامنة أكبر من الحد المسموح");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function readStreamLimited(stream: ReadableStream<Uint8Array>, limit: number): Promise<Uint8Array> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const {done, value} = await reader.read();
      if (done) break;
      if (!value) continue;
      total += value.byteLength;
      if (total > limit) {
        await reader.cancel().catch(() => undefined);
        throw new Error("بيانات المزامنة بعد فك الضغط أكبر من الحد المسموح");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const output = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return output;
}

export async function encodeSyncPayload(value: unknown): Promise<string> {
  const jsonBytes = new TextEncoder().encode(JSON.stringify(value));
  if (jsonBytes.byteLength > MAX_SYNC_PAYLOAD_BYTES) throw new Error("بيانات النسخة أكبر من الحد المسموح للمشاركة");

  if (typeof CompressionStream !== "undefined") {
    try {
      const stream = new Blob([jsonBytes]).stream().pipeThrough(new CompressionStream("gzip"));
      const compressed = await readStreamLimited(stream, MAX_SYNC_PAYLOAD_BYTES);
      const encoded = `v1.${bytesToBase64(compressed)}`;
      if (encoded.length > MAX_SYNC_CODE_CHARS) throw new Error("رابط المزامنة أكبر من الحد المسموح");
      return encoded;
    } catch (error) {
      if (error instanceof Error && error.message.includes("أكبر من الحد المسموح")) throw error;
    }
  }
  const raw = `v1raw.${bytesToBase64(jsonBytes)}`;
  if (raw.length > MAX_SYNC_CODE_CHARS) throw new Error("النسخة أكبر من حد المشاركة؛ استخدم ملف التصدير");
  return raw;
}

export async function decodeSyncPayload(encoded: string): Promise<unknown> {
  if (encoded.length > MAX_SYNC_CODE_CHARS) throw new Error("رابط المزامنة أكبر من الحد المسموح");

  let bytes: Uint8Array;
  if (encoded.startsWith("v1raw.")) {
    bytes = base64ToBytes(encoded.slice(6));
  } else if (encoded.startsWith("v1.")) {
    const compressed = base64ToBytes(encoded.slice(3));
    if (typeof DecompressionStream === "undefined") throw new Error("المتصفح لا يدعم فك الضغط");
    const compressedBuffer = compressed.slice().buffer as ArrayBuffer;
    const stream = new Blob([compressedBuffer]).stream().pipeThrough(new DecompressionStream("gzip"));
    bytes = await readStreamLimited(stream, MAX_SYNC_PAYLOAD_BYTES);
  } else {
    bytes = new TextEncoder().encode(encoded);
    if (bytes.byteLength > MAX_SYNC_PAYLOAD_BYTES) throw new Error("بيانات المزامنة أكبر من الحد المسموح");
  }

  return JSON.parse(new TextDecoder("utf-8", {fatal: true}).decode(bytes)) as unknown;
}
