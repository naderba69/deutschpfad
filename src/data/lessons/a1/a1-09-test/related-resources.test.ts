import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { PODCASTS } from "@/data/podcasts";
import { podcastAudioPath } from "@/data/podcasts/audio";
import { LESSON_RELATED_RESOURCES } from "@/data/lessons/related-resources";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const publicDir = path.join(process.cwd(), "public");
const lessonResources = LESSON_RELATED_RESOURCES["a1-09"];

describe("A1-09 related resources", () => {
  it("links the invitation that actually practices calendar days and clock times", () => {
    expect(lessonResources.map(({ kind, id }) => `${kind}:${id}`)).toEqual([
      "dialogue:a1-08-einladung",
      "podcast:p-a1-geburstag",
    ]);

    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "a1-08-einladung");
    expect(dialogue).toBeDefined();
    expect(dialogue?.turns.map(({ de }) => de)).toContain("Ich habe am Samstag Geburtstag!");
    expect(dialogue?.turns.map(({ de }) => de)).toContain("Um sieben Uhr abends. Bringst du etwas mit?");
    expect(dialogue?.audioNoteAr).toContain("مصدرها غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لا أجزم بأنها تسجيلات بشرية أو مولّدة آلياً");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");
    for (let index = 1; index <= (dialogue?.turns.length ?? 0); index += 1) {
      const audioFile = path.join(publicDir, "audio", "dialogues-a1", `a1-08-einladung-${index}.mp3`);
      expect(fs.existsSync(audioFile), `invitation dialogue audio ${index}`).toBe(true);
      expect(isPlayableMp3(audioFile), `invitation dialogue audio ${index}`).toBe(true);
    }
    expect(dialogue?.questions.map(({ options }) => options.filter(({ correct }) => correct).map(({ text }) => text))).toEqual([
      ["Am Samstag"],
      ["Einen Kuchen"],
      ["Der Freund"],
    ]);
    expect(lessonResources[0]?.reasonAr).toContain("تحديد يوم وساعة مع am/um");
  });

  it("describes the birthday podcast within its actual scope and checks its linked recording", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-a1-geburstag");
    expect(episode).toBeDefined();
    expect(episode?.title).toBe("Der Geburtstag");
    expect(episode?.script).toContain("Heute hat Emma Geburtstag.");
    expect(episode?.script).toContain("Am Morgen");
    expect(episode?.script).toContain("Am Nachmittag");
    expect(episode?.script).not.toContain("am dritten");
    expect(episode?.scriptAr).toContain("اليوم عيد ميلاد إيما");
    expect(episode?.questions.map(({ options }) => options.filter(({ correct }) => correct).map(({ text }) => text))).toEqual([
      ["Sieben Jahre"],
      ["Sie essen Kuchen und spielen"],
    ]);
    expect(lessonResources[1]?.reasonAr).toContain("أوقات اليوم");
    expect(lessonResources[1]?.reasonAr).toContain("لا تتضمن تاريخاً تقويمياً محدداً");

    const audioSrc = podcastAudioPath("p-a1-geburstag");
    expect(audioSrc).toBe("/audio/podcasts/p-a1-geburstag.mp3");
    const audioFile = path.join(process.cwd(), "public", audioSrc!.slice(1));
    expect(fs.existsSync(audioFile)).toBe(true);
    expect(isPlayableMp3(audioFile)).toBe(true);
  });
});
