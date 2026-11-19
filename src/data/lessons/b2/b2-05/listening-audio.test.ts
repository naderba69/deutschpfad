/** B2-05 — فحص ملفات الصوت المرتبطة بالدرس وحدود ما تثبته الاختبارات */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { B2_DIALOGUES_1 } from "@/data/dialogues/b2/part1";
import { lessonB205 } from "@/data/lessons/b2/b2-05";
import { PODCASTS } from "@/data/podcasts";
import { podcastAudioPath } from "@/data/podcasts/audio";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const publicPath = (url: string) => path.join(process.cwd(), "public", url.replace(/^\//, ""));

function expectPlayable(url: string) {
  const file = publicPath(url);
  expect(fs.existsSync(file), url).toBe(true);
  expect(isPlayableMp3(file), url).toBe(true);
}

describe("B2-05 related audio", () => {
  it("declares the six lesson turns as TTS and provides one valid MP3 per turn", () => {
    const item = lessonB205.listening.items.find((candidate) => candidate.id === "l3");
    expect(item).toBeDefined();
    expect(item?.audioNoteAr).toContain("مولّد آلياً (TTS)");
    expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    expect(item?.lines).toHaveLength(6);
    const paths = item?.lines.map((line) => line.audioSrc);
    expect(paths).toEqual(
      Array.from({ length: 6 }, (_, index) => `/audio/lessons/b2-05/ls-b2-05-3-${index + 1}.mp3`),
    );
    const audioDir = path.join(process.cwd(), "public", "audio", "lessons", "b2-05");
    expect(fs.readdirSync(audioDir).filter((file) => file.endsWith(".mp3")).sort()).toEqual(
      paths?.map((audioSrc) => path.basename(audioSrc ?? "")).sort(),
    );
    for (const audioSrc of paths ?? []) {
      if (!audioSrc) throw new Error("B2-05 l3 has an audio-less turn");
      expectPlayable(audioSrc);
    }
  });

  it("documents the linked dialogue audio and includes all six decodable files", () => {
    const dialogue = B2_DIALOGUES_1.find((candidate) => candidate.id === "b2-03-konflikt");
    expect(dialogue).toBeDefined();
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثق");
    const paths = Array.from({ length: 6 }, (_, index) => `/audio/dialogues-b2/b2-03-konflikt-${index + 1}.mp3`);
    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    expect(fs.readdirSync(audioDir).filter((file) => file.startsWith("b2-03-konflikt-") && file.endsWith(".mp3")).sort())
      .toEqual(paths.map((url) => path.basename(url)).sort());
    paths.forEach(expectPlayable);
  });

  it("shows the podcast's evidence limitation and validates its linked MP3", () => {
    const episode = PODCASTS.find((candidate) => candidate.id === "p-b2-work-life-balance");
    expect(episode?.contentNoteAr).toContain("لا تقرير إحصائي");
    expect(episode?.contentNoteAr).toContain("تعميمان غير منسوبين");
    const audioSrc = podcastAudioPath("p-b2-work-life-balance");
    expect(audioSrc).toBe("/audio/podcasts/p-b2-work-life-balance.mp3");
    expectPlayable(audioSrc!);
  });
});
