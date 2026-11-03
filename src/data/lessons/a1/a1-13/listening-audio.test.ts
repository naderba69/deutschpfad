/** A1-13 — generated listening audio integrity and attribution. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA113 } from "@/data/lessons/a1/a1-13";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-13 listening audio", () => {
  it("provides one playable generated MP3 for each turn of the added scene", () => {
    const item = lessonA113.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("تسجيلاً بشرياً");
    expect(item?.audioNoteAr).toContain("لم نتحقق من مطابقتها للنص");
    expect(item?.audioNoteAr).not.toContain("أصوات نسائية ورجالية ثابتة");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a1-13/ls-a1-13-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a1-13");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
