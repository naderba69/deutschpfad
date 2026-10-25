/** B1-09 — التحقق من مقاطع TTS لحوار التطوع في بنك الطعام */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { lessonB109 } from "@/data/lessons/b1/b1-09";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

describe("B1-09 listening audio", () => {
  it("discloses the mixed TTS sources and checks every attached MP3", () => {
    const item = lessonB109.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("TTS المتصفح");
    expect(item?.audioNoteAr).toContain("وزر «استمع للكل»");
    expect(item?.audioNoteAr).toContain("قد يختلف الصوت حسب الجهاز");
    expect(item?.audioNoteAr).toContain("ملفات TTS");
    expect(item?.audioNoteAr).toContain("ليست تسجيلات بشرية");
    expect(item?.audioNoteAr).toContain("فحص الإشارة لا يثبت المطابقة الصوتية");
    expect(item?.audioNoteAr).toContain("حوار تدريبي خيالي");
    expect(item?.audioNoteAr).toContain("لا تمثل شروطاً عامة");
    expect(item?.lines).toHaveLength(6);
    expect(item?.lines[0].audioSrc).toBeUndefined();
    const paths = item?.lines.slice(1).map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 5 }, (_, index) => `/audio/lessons/b1-09/ls-b1-09-3-${index + 2}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "b1-09");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("B1-09 l3 has an audio-less turn");
      const file = path.join(process.cwd(), "public", audioSrc.slice(1));
      expect(fs.existsSync(file), audioSrc).toBe(true);
      expect(isPlayableMp3(file), audioSrc).toBe(true);
    }
  });
});
