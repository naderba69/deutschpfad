import {describe, expect, it} from "vitest";

import {decodeSyncPayload, encodeSyncPayload, MAX_SYNC_PAYLOAD_BYTES} from "./sync-codec";

describe("sync payload codec", () => {
  it("round-trips Unicode JSON in compressed and raw formats", async () => {
    const value = {name: "مريم", text: "Grüße aus Köln", lessons: ["a1-01"]};
    const encoded = await encodeSyncPayload(value);
    await expect(decodeSyncPayload(encoded)).resolves.toEqual(value);
    const raw = `v1raw.${btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(value))))}`;
    await expect(decodeSyncPayload(raw)).resolves.toEqual(value);
  });

  it("rejects oversized encoded input before decoding", async () => {
    await expect(decodeSyncPayload("x".repeat(1_500_001))).rejects.toThrow("أكبر من الحد المسموح");
  });

  it("rejects decompressed payloads above the configured cap", async () => {
    const huge = {text: "x".repeat(MAX_SYNC_PAYLOAD_BYTES + 1)};
    await expect(encodeSyncPayload(huge)).rejects.toThrow("أكبر من الحد المسموح");
  });

  it("rejects malformed and invalid UTF-8 payloads", async () => {
    await expect(decodeSyncPayload("v1raw.!" )).rejects.toThrow();
    await expect(decodeSyncPayload(`v1raw.${btoa("\xff")}`)).rejects.toThrow();
  });
});
