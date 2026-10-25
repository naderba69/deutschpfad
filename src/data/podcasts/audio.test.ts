/**
 * حارس صوت البودكاست (2026-10-16):
 *  · البيان مشتقّ من `PODCASTS`: نصّ كل مقطع هو `episode.script` حرفياً — لا نصّ
 *    موازٍ يُكتب مرتين ويتباعد مع الزمن.
 *  · كل حلقة قابلة للإنتاج بمقطع واحد (نصّها ≤ السقف) — تُثبت قبل الإنتاج لا بعده.
 *  · القرص والبيان متطابقان في الاتجاهين: كل مُعلَن موجود وصالح، ولا ملف يتيم.
 *  · `podcastAudioPath` مصدر واحد للمسار: المشغّل يستورده ولا يكتب مساراً بيد.
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { PODCASTS } from "@/data/podcasts";
import {
  MAX_PODCAST_CLIP_CHARS,
  PENDING_PODCAST_AUDIO,
  PODCAST_AUDIO_BASE,
  PRODUCED_PODCAST_AUDIO,
  hasProducedAudio,
  podcastAudioClips,
  podcastAudioPath,
} from "@/data/podcasts/audio";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const PUBLIC = path.join(process.cwd(), "public");
const AUDIO_DIR = path.join(PUBLIC, PODCAST_AUDIO_BASE.replace(/^\//, ""));
const clips = podcastAudioClips();

describe("حلقة الشقة المرتبطة بـA2-04", () => {
  it("توضح ترجمتها ترتيب الطابق الألماني وتتكلم عن محطة المترو لا نظام النقل", () => {
    const episode = PODCASTS.find((item) => item.id === "p-a2-wohnung");
    expect(episode?.script).toContain("im dritten Stock");
    expect(episode?.scriptAr).toContain("الطابق الثالث فوق الأرضي");
    expect(episode?.scriptAr).toContain("محطة المترو");
  });
});

describe("صوت البودكاست — البيان مشتقّ من بيانات الحلقات", () => {
  it("نصّ كل مقطع هو `script` الحلقة نفسها حرفياً (لا نصّ موازٍ)", () => {
    expect(clips.length).toBeGreaterThan(0);
    for (const clip of clips) {
      const ep = PODCASTS.find((e) => e.id === clip.id);
      expect(ep, `حلقة غير موجودة في البيانات: ${clip.id}`).toBeTruthy();
      expect(clip.text, `${clip.id}: النص لا يطابق script`).toBe(ep?.script);
      expect(clip.level).toBe(String(ep?.level));
    }
  });

  it("does not serve the old health recording after its script changed", () => {
    expect(PENDING_PODCAST_AUDIO).toContain("p-b1-gesundheit");
    expect(PRODUCED_PODCAST_AUDIO).not.toContain("p-b1-gesundheit");
    expect(podcastAudioPath("p-b1-gesundheit")).toBeUndefined();
    expect(clips.some(({ id }) => id === "p-b1-gesundheit")).toBe(false);
  });

  it("كل معرّف مُعلَن موجود في `PODCASTS` ولا تكرار في البيان", () => {
    const ids = clips.map((c) => c.id);
    expect(new Set(ids).size, "مسارات مكرّرة في البيان").toBe(ids.length);
    expect(PRODUCED_PODCAST_AUDIO.length).toBe(ids.length);
    const unknown = [...PRODUCED_PODCAST_AUDIO].filter((id) => !PODCASTS.some((e) => e.id === id));
    expect(unknown, `معرّفات بلا حلقة: ${unknown.join(" · ")}`).toEqual([]);
  });

  it(`كل الحلقات قابلة للإنتاج بمقطع واحد (نصّها ≤ ${MAX_PODCAST_CLIP_CHARS} حرفاً)`, () => {
    const tooLong = PODCASTS.filter((ep) => ep.script.length > MAX_PODCAST_CLIP_CHARS).map(
      (ep) => `${ep.id}: ${ep.script.length}`,
    );
    expect(tooLong, `حلقات تستحيل بمقطع واحد: ${tooLong.join(" · ")}`).toEqual([]);
    // عدّاد غير هامشي: 20 حلقة فعلاً لها نصّ
    expect(PODCASTS.length).toBeGreaterThanOrEqual(20);
    expect(PODCASTS.every((ep) => ep.script.trim().length > 0)).toBe(true);
  });
});

describe("صوت البودكاست — القرص يطابق البيان", () => {
  it("كل مقطع مُعلَن موجود على القرص وصالح للتشغيل", () => {
    const missing: string[] = [];
    const broken: string[] = [];
    for (const clip of clips) {
      const file = path.join(AUDIO_DIR, `${clip.id}.mp3`);
      if (!fs.existsSync(file)) {
        missing.push(clip.id);
        continue;
      }
      if (!isPlayableMp3(file)) broken.push(`${clip.id} (${fs.statSync(file).size} بايت)`);
    }
    expect(broken, `ملفات تالفة: ${broken.join(" · ")}`).toEqual([]);
    expect(missing, `مُعلَن في البيان ولا ملف له: ${missing.join(" · ")}`).toEqual([]);
  });

  it("لا ملف يتيم على القرص خارج البيان أو قائمة الحلقات المعلّقة", () => {
    if (!fs.existsSync(AUDIO_DIR)) return; // لم يُنتَج شيء بعد — حالة صادقة
    const declared = new Set(clips.map((c) => `${c.id}.mp3`));
    const pending = new Set(PENDING_PODCAST_AUDIO.map((id) => `${id}.mp3`));
    const onDisk = fs.readdirSync(AUDIO_DIR).filter((f) => f.endsWith(".mp3"));
    const unservedPending = onDisk.filter((f) => pending.has(f));
    const orphans = onDisk.filter((f) => !declared.has(f) && !pending.has(f));
    expect(orphans, `ملفات بلا بيان: ${orphans.join(" · ")}`).toEqual([]);
    // تسجيل p-b1-gesundheit موجود لكنه غير مُقدَّم بعد تغيير نص الحلقة؛ لا يُربط بالمشغّل.
    expect(unservedPending).toEqual(["p-b1-gesundheit.mp3"]);
    expect(onDisk.length, "الملفات المُعلنة مع أصول الحلقات المعلّقة").toBe(clips.length + unservedPending.length);
  });

  it("عدّاد الإنتاج غير هامشي: ≥ 2 مقطعين، والمتبقّي مُسمّى بلا فجوة", () => {
    expect(clips.length).toBeGreaterThanOrEqual(2);
    const perLevel: Record<string, number> = {};
    clips.forEach((c) => (perLevel[c.level] = (perLevel[c.level] ?? 0) + 1));
    expect(perLevel.A1, "حلقات A1 المُنتَجة").toBeGreaterThanOrEqual(2);

    // المُنتَج + المتبقّي = كل الحلقات، بلا تكرار ولا حلقة منسيّة في القائمتين
    const all = [...PRODUCED_PODCAST_AUDIO, ...PENDING_PODCAST_AUDIO];
    expect(new Set(all).size, "تكرار بين المُنتَج والمتبقّي").toBe(all.length);
    expect(all.length, "عدد الحلقات المُغطّاتين").toBe(PODCASTS.length);
    const missing = PODCASTS.filter((ep) => !all.includes(ep.id)).map((ep) => ep.id);
    expect(missing, `حلقات لا في المُنتَج ولا في المتبقّي: ${missing.join(" · ")}`).toEqual([]);
  });
});

describe("صوت البودكاست — مصدر واحد للمسار وحالة صادقة", () => {
  it("`podcastAudioPath` يعيد مسار البيان حرفياً للمُنتَج و`undefined` لغيره", () => {
    for (const clip of clips) {
      expect(podcastAudioPath(clip.id)).toBe(`${PODCAST_AUDIO_BASE}/${clip.id}.mp3`);
      expect(hasProducedAudio(clip.id)).toBe(true);
    }
    const unproduced = PODCASTS.filter((ep) => !PRODUCED_PODCAST_AUDIO.includes(ep.id));
    expect(unproduced.length).toBe(PENDING_PODCAST_AUDIO.length); // الإنتاج على دفعات — والمسار يعلن ذلك
    for (const ep of unproduced) {
      expect(podcastAudioPath(ep.id), `${ep.id}: مسار لحلقة غير مُنتَجة`).toBeUndefined();
      expect(hasProducedAudio(ep.id)).toBe(false);
    }
    expect(podcastAudioPath("p-غير-موجود")).toBeUndefined();
  });

  it("المشغّل يستورد المسار من الوحدة ولا يكتبه بيده", () => {
    const rel = "src/components/podcasts/podcast-player.tsx";
    const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
    expect(src, `${rel}: لا يستورد podcastAudioPath`).toContain("podcastAudioPath");
    // لا مسار مكتوباً باليد في أي مكوّن — وإلا تباعد عن البيان
    const hardcoded = src.match(/["'`]\/audio\/podcasts\//g) ?? [];
    expect(hardcoded, `${rel}: مسار مكتوب باليد`).toEqual([]);
  });
});
