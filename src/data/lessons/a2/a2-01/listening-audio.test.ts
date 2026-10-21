/** A2-01 — generated TTS assets for the hotel-problem dialogue. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA201 } from "@/data/lessons/a2/a2-01";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-01 listening audio", () => {
  it("provides one valid TTS file per turn with clear generated-audio attribution", () => {
    const item = lessonA201.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a2-01/ls-a2-01-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a2-01");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
