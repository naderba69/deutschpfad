/** A1-10 — integrity and generated-TTS attribution for the new listening scene. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA110 } from "@/data/lessons/a1/a1-10";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-10 listening audio", () => {
  it("discloses browser TTS for dialogues without prerecorded audio", () => {
    for (const id of ["l1", "l2"]) {
      const item = lessonA110.listening.items.find(({ id: itemId }) => itemId === id);
      expect(item?.audioNoteAr).toContain("TTS");
      expect(item?.lines.every(({ audioSrc }) => !audioSrc)).toBe(true);
    }
  });

  it("provides one valid generated MP3 for every new dialogue turn", () => {
    const item = lessonA110.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("وليست تسجيلاً بشرياً");
    expect(item?.audioNoteAr).toContain("لم يُتحقق هنا من مطابقتها للنص");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a1-10/ls-a1-10-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a1-10");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
