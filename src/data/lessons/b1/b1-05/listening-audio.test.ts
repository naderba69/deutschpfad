/** B1-05 — سلامة مقاطع TTS لحوار الوقاية الصحية */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonB105 } from "@/data/lessons/b1/b1-05";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("B1-05 listening audio", () => {
  it("labels all health role-plays as examples and avoids deterministic medical claims", () => {
    const items = lessonB105.listening.items;
    for (const id of ["l1", "l2", "l3"]) {
      const item = items.find((candidate) => candidate.id === id);
      expect(item?.audioNoteAr, `${id} fictional-scenario notice`).toContain("خيالي");
      expect(item?.audioNoteAr).toContain("TTS");
    }
    const l1 = items.find((candidate) => candidate.id === "l1");
    expect(l1?.lines[3]?.ar).toContain("وكان ينبغي لي أنا أيضاً أن أتناول حلويات أقل");
    const l2 = items.find((candidate) => candidate.id === "l2");
    expect(l2?.lines[2]?.de).not.toContain("bestimmt");
    expect(l2?.lines[2]?.de).toContain("nicht sicher sagen");
  });

  it("declares TTS honestly and provides exactly one valid MP3 per turn", () => {
    const item = lessonB105.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّد آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/b1-05/ls-b1-05-3-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "b1-05");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("B1-05 l3 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
