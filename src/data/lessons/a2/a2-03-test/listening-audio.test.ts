/** A2-03 — generated audio integrity for the vegetarian soup dialogue. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA203 } from "@/data/lessons/a2/a2-03";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-03 listening audio", () => {
  it("provides one valid TTS clip per soup-dialogue turn and labels it honestly", () => {
    const item = lessonA203.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a2-03/ls-a2-03-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a2-03");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
