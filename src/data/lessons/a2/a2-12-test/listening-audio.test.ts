/** A2-12 — سلامة مقاطع TTS لحواري تأجيل اللقاء والاعتذار */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonA212 } from "@/data/lessons/a2/a2-12";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-12 listening audio", () => {
  it("declares TTS honestly and provides exactly one valid MP3 per turn", () => {
    const items = lessonA212.listening.items.filter((candidate) => candidate.id === "l3" || candidate.id === "l4");
    expect(items.map(({ id }) => id)).toEqual(["l3", "l4"]);
    const paths = items.flatMap((item, itemIndex) => {
      expect(item.audioNoteAr).toContain("مولّدة آلياً (TTS)");
      expect(item.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
      expect(item.lines).toHaveLength(6);
      return item.lines.map((line, index) => {
        const expected = `/audio/lessons/a2-12/ls-a2-12-${itemIndex + 3}-${index + 1}.mp3`;
        expect(line.audioSrc).toBe(expected);
        return expected;
      });
    });
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "a2-12");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths.map((audioSrc) => path.basename(audioSrc)).sort(),
    );
    for (const audioSrc of paths) {
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
