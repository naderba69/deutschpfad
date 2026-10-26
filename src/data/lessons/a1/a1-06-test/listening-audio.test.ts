/** A1-06 — سلامة ملفات الصوت لحوار هوايات الأحد */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonA106 } from "@/data/lessons/a1/a1-06";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-06 listening audio", () => {
  it("declares unknown audio provenance honestly and provides exactly one valid MP3 per turn", () => {
    const item = lessonA106.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مصدر ملفات الصوت المرفقة غير موثّق");
    expect(item?.audioNoteAr).toContain("لا أجزم");
    expect(item?.audioNoteAr).toContain("لا أؤكد هوية الصوتين");
    expect(item?.lines).toHaveLength(6);

    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/a1-06/ls-a1-06-3-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "a1-06");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("A1-06 l3 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
