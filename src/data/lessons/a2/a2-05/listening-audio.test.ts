/** A2-05 — generated audio integrity for the meeting follow-up call. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA205 } from "@/data/lessons/a2/a2-05";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-05 listening audio", () => {
  it("discloses browser-generated speech for dialogues without recorded clips", () => {
    for (const id of ["l1", "l2"]) {
      const item = lessonA205.listening.items.find(({ id: itemId }) => itemId === id);
      expect(item?.audioNoteAr).toContain("النطق الآلي في المتصفح (TTS)");
      expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
      expect(item?.lines.every(({ audioSrc }) => !audioSrc)).toBe(true);
    }
  });

  it("provides one valid TTS clip per meeting-call turn and labels it honestly", () => {
    const item = lessonA205.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a2-05/ls-a2-05-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a2-05");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
