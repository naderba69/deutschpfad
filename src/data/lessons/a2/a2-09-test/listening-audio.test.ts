/** A2-09 — سلامة مقاطع TTS لحوار الدعوة وما سيحضره الضيوف */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonA209 } from "@/data/lessons/a2/a2-09";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-09 listening audio", () => {
  it("declares TTS honestly and provides exactly one valid MP3 per turn", () => {
    const item = lessonA209.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);

    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/a2-09/ls-a2-09-3-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "a2-09");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("A2-09 l3 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
