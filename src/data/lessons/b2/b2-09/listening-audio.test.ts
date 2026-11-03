/** B2-09 — التحقق من مقاطع TTS لحوار مقابلة العمل */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonB209 } from "@/data/lessons/b2/b2-09";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("B2-09 listening audio", () => {
  it("discloses browser TTS for the scenes without packaged recordings", () => {
    for (const id of ["l1", "l2"]) {
      const item = lessonB209.listening.items.find((candidate) => candidate.id === id);
      expect(item?.audioNoteAr).toContain("الذي يوفره المتصفح");
      expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً ولا ملف MP3 مستقلاً");
      expect(item?.lines.every((line) => !line.audioSrc)).toBe(true);
    }
  });

  it("uses regenerated TTS files aligned with current text and discloses remaining audio limits", () => {
    const item = lessonB209.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("TTS مولّدة من النصوص الحالية");
    expect(item?.audioNoteAr).toContain("طابق تفريغ ASR محلي أولي النص في المقاطع الستة");
    expect(item?.audioNoteAr).toContain("لم يُجر استماع بشري");
    expect(item?.lines).toHaveLength(6);
    expect(item?.lines.map((line) => line.speaker)).toEqual([
      "Interviewerin", "Sami", "Interviewerin", "Sami", "Interviewerin", "Sami",
    ]);
    expect(item?.lines.every((line) => Boolean(line.audioSrc))).toBe(true);
    expect(item?.lines.some((line) => /(?:Interviewerin|Sami):/.test(line.de))).toBe(false);
    expect(item?.lines[4]?.de).toBe("Wo sehen Sie sich in drei Jahren?");
    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/b2-09/ls-b2-09-3-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "b2-09");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("B2-09 l3 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
