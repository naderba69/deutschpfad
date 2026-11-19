/** A2-11 — سلامة مقاطع TTS لحوار إرسال الطرد */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-11 listening audio", () => {
  it("declares browser TTS for l1-l3 and stored TTS honestly for l4", () => {
    for (const id of ["l1", "l2", "l3"]) {
      const browserTtsItem = lessonA211.listening.items.find((candidate) => candidate.id === id);
      expect(browserTtsItem?.audioNoteAr).toContain("مولّد آلياً في المتصفح (TTS)");
      expect(browserTtsItem?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
      expect(browserTtsItem?.lines.every((line) => !line.audioSrc)).toBe(true);
    }

    const item = lessonA211.listening.items.find((candidate) => candidate.id === "l4");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);

    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/a2-11/ls-a2-11-4-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "a2-11");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("A2-11 l4 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
