/** A2-04 — generated audio integrity for the apartment-rules dialogue. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA204 } from "@/data/lessons/a2/a2-04";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-04 listening audio", () => {
  it("provides one valid TTS clip per apartment-rules turn and labels it honestly", () => {
    const item = lessonA204.listening.items.find(({ id }) => id === "l4");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a2-04/ls-a2-04-4-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a2-04");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
