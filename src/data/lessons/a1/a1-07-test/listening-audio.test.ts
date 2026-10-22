/** A1-07 — سلامة مقاطع TTS لحوار الكشك */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonA107 } from "@/data/lessons/a1/a1-07";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-07 listening audio", () => {
  it("declares TTS honestly and provides exactly one valid MP3 per turn", () => {
    const item = lessonA107.listening.items.find((candidate) => candidate.id === "listen-a1-07-kiosk");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
    expect(item?.audioNoteAr).toContain("أصوات نسائية ورجالية ثابتة ومتكررة بين الدروس");
    expect(item?.lines).toHaveLength(6);

    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/a1-07/ls-a1-07-kiosk-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "a1-07");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("A1-07 kiosk dialogue has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
