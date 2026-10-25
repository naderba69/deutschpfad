/** B1-03 — سلامة مقاطع TTS لحوار توفير الطاقة في المدرسة */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonB103 } from "@/data/lessons/b1/b1-03";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("B1-03 listening audio", () => {
  it("labels browser speech separately and provides exactly one MP3 per TTS turn", () => {
    for (const id of ["l1", "l2", "l3"]) {
      const item = lessonB103.listening.items.find((candidate) => candidate.id === id);
      expect(item?.audioNoteAr).toContain("speechSynthesis");
      expect(item?.audioNoteAr).toContain("ليست تسجيلات بشرية");
      expect(item?.lines.every(({ audioSrc }) => !audioSrc)).toBe(true);
    }
    const item = lessonB103.listening.items.find((candidate) => candidate.id === "l4");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/b1-03/ls-b1-03-4-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "b1-03");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("B1-03 l4 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
