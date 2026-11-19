/** A1-09 — integrity and honest attribution for generated TTS clips. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA109 } from "@/data/lessons/a1/a1-09";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A1-09 listening audio", () => {
  it("provides one valid generated MP3 for each new dialogue turn", () => {
    const item = lessonA109.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("بحسب بيانات المشروع");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("وليست تسجيلاً بشرياً");
    expect(item?.audioNoteAr).toContain("لا توجد بيانات موثقة هنا عن هوية الأصوات");
    expect(item?.audioNoteAr).toContain("لم تُتحقق مطابقة المقاطع للنص أو جودة النطق");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, index) => `/audio/lessons/a1-09/ls-a1-09-3-${index + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a1-09");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
