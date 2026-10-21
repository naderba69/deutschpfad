/** A1-11 — validate audio assets and honest generated-voice attribution. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA111 } from "@/data/lessons/a1/a1-11";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-11 listening audio", () => {
  it("provides a playable generated MP3 for each turn in the added scene", () => {
    const item = lessonA111.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("وليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a1-11/ls-a1-11-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a1-11");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
