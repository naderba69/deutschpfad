/** A2-02 — audio disclosures and file integrity for all listening materials. */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { lessonA202 } from "@/data/lessons/a2/a2-02";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("A2-02 listening audio", () => {
  it("discloses browser TTS for the doctor and friend dialogues", () => {
    for (const id of ["l1", "l2"]) {
      const item = lessonA202.listening.items.find((candidate) => candidate.id === id);
      expect(item?.audioNoteAr).toContain("TTS المدمج في المتصفح");
      expect(item?.audioNoteAr).toContain("لا عبر تسجيل بشري");
      expect(item?.audioNoteAr).toContain("تختلف الأصوات المتاحة");
      expect(item?.lines.every((line) => !line.audioSrc)).toBe(true);
    }
  });

  it("provides one valid TTS clip per pharmacy turn and avoids unsupported speaker-identity claims", () => {
    const item = lessonA202.listening.items.find(({ id }) => id === "l3");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليست تسجيلاً بشرياً");
    expect(item?.audioNoteAr).toContain("لا تضمن البيانات المتاحة ثبات هوية الصوت");
    expect(item?.audioNoteAr).not.toContain("ثابتة ومتكررة");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map(({ audioSrc }) => audioSrc);
    expect(paths).toEqual(Array.from({ length: 6 }, (_, i) => `/audio/lessons/a2-02/ls-a2-02-3-${i + 1}.mp3`));
    const directory = path.join(process.cwd(), "public/audio/lessons/a2-02");
    expect(fs.readdirSync(directory).filter((name) => name.endsWith(".mp3")).sort()).toEqual(paths?.map((audio) => path.basename(audio ?? "")).sort());
    for (const audioSrc of paths ?? []) {
      const file = path.join(process.cwd(), "public", audioSrc!.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
