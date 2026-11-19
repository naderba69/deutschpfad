/** A1-12 — verify honest attribution for browser and file-based TTS. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA112 } from "@/data/lessons/a1/a1-12";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-12 listening audio", () => {
  it("discloses that browser-synthesized l1 and l2 are generated, not human recordings", () => {
    for (const id of ["l1", "l2"]) {
      const item = lessonA112.listening.items.find(({ id: itemId }) => itemId === id);
      expect(item?.lines.every(({ audioSrc }) => !audioSrc), `${id} uses browser speech`).toBe(true);
      expect(item?.audioNoteAr).toContain("TTS");
      expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
      expect(item?.audioNoteAr).toContain("متصفحك");
    }
  });

  it("provides one playable, honestly attributed TTS clip per l3 line without unverified voice claims", () => {
    const item = lessonA112.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
    expect(item?.audioNoteAr).toContain("لم يُتحقق");
    expect(item?.audioNoteAr).not.toContain("أصوات نسائية ورجالية ثابتة");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a1-12/ls-a1-12-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a1-12");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
