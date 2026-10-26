/** B2-04 — التحقق من مقاطع TTS لحوار نادي القراءة */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonB204 } from "@/data/lessons/b2/b2-04";
import { B2_DIALOGUES_3 } from "@/data/dialogues/b2/part3";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("B2-04 listening audio", () => {
  it("declares TTS honestly and provides exactly one valid MP3 per turn", () => {
    const item = lessonB204.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّد آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/b2-04/ls-b2-04-3-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "b2-04");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("B2-04 l3 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
  it("indexes the six B2-04-related media-dialogue MP3s without claiming speech quality", () => {
    const item = B2_DIALOGUES_3.find((candidate) => candidate.id === "b2-14-medien");
    expect(item?.audioNoteAr).toContain("مصدر ملفات MP3 لهذا الحوار غير موثّق");
    const dir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    for (let index = 1; index <= 6; index += 1) {
      const file = path.join(dir, `b2-14-medien-${index}.mp3`);
      expect(fs.existsSync(file), path.basename(file)).toBe(true);
      expect(isPlayableMp3(file), path.basename(file)).toBe(true);
    }
    expect(fs.readdirSync(dir).filter((file) => /^b2-14-medien-\d+\.mp3$/.test(file))).toHaveLength(6);
  });
});
