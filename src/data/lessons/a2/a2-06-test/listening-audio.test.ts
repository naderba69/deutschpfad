/** A2-06 — يفحص إفصاح TTS ومسارات المقاطع المسجلة تقنياً */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA206 } from "@/data/lessons/a2/a2-06";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-06 listening audio", () => {
  it("يفصح عن مصدر TTS في الحوارات الأربعة، ويميز نطق الجهاز عن MP3 المسجل", () => {
    expect(lessonA206.listening.items.map(({ id }) => id)).toEqual(["l1", "l2", "l3", "l4"]);
    const deviceSpeech = lessonA206.listening.items.filter(({ id }) => id === "l1" || id === "l2");
    for (const item of deviceSpeech) {
      expect(item.audioNoteAr).toContain("آلياً");
      expect(item.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
      expect(item.lines.every(({ audioSrc }) => audioSrc === undefined)).toBe(true);
    }

    const recordedTts = lessonA206.listening.items.filter(({ id }) => id === "l3" || id === "l4");
    const expectedPaths = recordedTts.flatMap((item, itemIndex) => {
      expect(item.audioNoteAr).toContain("مولّدة آلياً (TTS)");
      expect(item.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
      expect(item.lines).toHaveLength(6);
      return item.lines.map((line, index) => {
        const expected = `/audio/lessons/a2-06/ls-a2-06-${itemIndex + 3}-${index + 1}.mp3`;
        expect(line.audioSrc).toBe(expected);
        return expected;
      });
    });
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "a2-06");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      expectedPaths.map((audioSrc) => path.basename(audioSrc)).sort(),
    );
    for (const audioSrc of expectedPaths) {
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
