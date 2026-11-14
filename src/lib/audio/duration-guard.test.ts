/**
 * ═══════════════════════════════════════════════════════════
 *  حارس مدة الصوت — يكشف المقطع المقطوع أو الخاطئ
 * ═══════════════════════════════════════════════════════════
 *  الفحص القائم (`isPlayableMp3`) يثبت أن الملف صوتيّ لا فارغ. لكن مقطعاً
 *  نُطق نصفه يبقى صالحاً تماماً بكل المقاييس الشكلية.
 *
 *  هنا نقارن **المدة الفعلية** بـ **المدة المتوقعة من عدد أحرف النص**:
 *    · أقل من 0.5× المتوقع → النصّ لم يُنطق كاملاً (قطع).
 *    · أكثر من 2.0× المتوقع → الملف لنصّ آخر أو فيه صمت طويل.
 *  النطاق واسع عمداً: التقدير من الأحرف ليس قياساً، والحارس يكشف الأخطاء
 *  الفادحة فقط — لا يقرر جودة النطق ولا صحّة النبرة.
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { PODCASTS } from "@/data/podcasts";
import { PRODUCED_PODCAST_AUDIO } from "@/data/podcasts/audio";

import { expectedSeconds, mp3DurationSeconds } from "./mp3-duration";

const MIN_RATIO = 0.5;
const MAX_RATIO = 2.0;

type Sample = { file: string; text: string; label: string };

/**
 * الأدوار التي عُطّل فيها MP3 صراحةً (`audioSrc: null`) لا تُفحص: المشغّل
 * يستخدم TTS المتصفح للنص الحالي فيها، ووجود ملف قديم على القرص ليس عيباً
 * في تجربة المتعلّم. لكن **الإخفاء لا يمرّ صامتاً**: الاختبار الأخير يشترط
 * أن كل حوار فيه دور معطّل يشرح السبب في `audioNoteAr` — وإلا كان التعطيل
 * باباً خلفياً لتجنّب الحارس.
 */
function dialogueSamples(): { samples: Sample[]; disabledByDialogue: Map<string, number> } {
  const samples: Sample[] = [];
  const disabledByDialogue = new Map<string, number>();
  for (const dialogue of DAILY_DIALOGUES) {
    const dir = path.join("public", "audio", `dialogues-${dialogue.level.toLowerCase()}`);
    dialogue.turns.forEach((turn, index) => {
      if (turn.audioSrc === null) {
        disabledByDialogue.set(dialogue.id, (disabledByDialogue.get(dialogue.id) ?? 0) + 1);
        return;
      }
      const file = path.join(dir, `${dialogue.id}-${index + 1}.mp3`);
      if (fs.existsSync(file)) samples.push({ file, text: turn.de, label: `${dialogue.id}#${index + 1}` });
    });
  }
  return { samples, disabledByDialogue };
}

function podcastSamples(): Sample[] {
  return PODCASTS.filter((episode) => PRODUCED_PODCAST_AUDIO.includes(episode.id)).map((episode) => ({
    file: path.join("public", "audio", "podcasts", `${episode.id}.mp3`),
    text: episode.script,
    label: episode.id,
  }));
}

function audit(samples: Sample[]) {
  const problems: string[] = [];
  const unreadable: string[] = [];
  let checked = 0;

  for (const sample of samples) {
    const duration = mp3DurationSeconds(fs.readFileSync(sample.file));
    if (duration === null) {
      unreadable.push(`${sample.label} → ${sample.file}`);
      continue;
    }
    const expected = expectedSeconds(sample.text);
    if (expected < 1) continue; // نصوص قصيرة جداً: التقدير لا معنى له
    checked += 1;
    const ratio = duration / expected;
    if (ratio < MIN_RATIO) {
      problems.push(
        `${sample.label}: مدة ${duration.toFixed(1)}ث مقابل ${expected.toFixed(1)}ث متوقعة (${ratio.toFixed(2)}×) — الصوت أقصر من النص`,
      );
    } else if (ratio > MAX_RATIO) {
      problems.push(
        `${sample.label}: مدة ${duration.toFixed(1)}ث مقابل ${expected.toFixed(1)}ث متوقعة (${ratio.toFixed(2)}×) — الصوت أطول من النص بكثير`,
      );
    }
  }

  return { problems, unreadable, checked };
}

describe("حارس مدة الصوت — تطابق النص المنطوق مع مدة الملف", () => {
  it("المدة تُقرأ من إطارات MPEG فعلاً (لا صفر ولا null)", () => {
    const sample = dialogueSamples().samples[0];
    expect(sample, "لا مقاطع حوارات على القرص").toBeDefined();
    const duration = mp3DurationSeconds(fs.readFileSync(sample.file));
    expect(duration).not.toBeNull();
    expect(duration as number).toBeGreaterThan(0.5);
  });

  it("مقدّر المدة يتعامل مع النص الفارغ والمسافات", () => {
    expect(expectedSeconds("")).toBe(0);
    expect(expectedSeconds("   ")).toBe(0);
    expect(expectedSeconds("Hallo Welt")).toBeGreaterThan(0.5);
  });

  it("كل مقطع حوار منطوق يطابق مدّة نصّه داخل النطاق المسموح", () => {
    const { problems, checked } = audit(dialogueSamples().samples);
    expect(checked, "لم يُفحص أي مقطع — الحارس أعمى").toBeGreaterThan(300);
    expect(problems, `مقاطع مشبوهة:\n${problems.join("\n")}`).toEqual([]);
  });

  it("كل حلقة بودكاست مُعلنة يطابق صوتها نصّها", () => {
    const samples = podcastSamples();
    expect(samples.length).toBe(PRODUCED_PODCAST_AUDIO.length);
    const { problems, checked } = audit(samples);
    expect(checked).toBe(samples.length);
    expect(problems, `حلقات مشبوهة:\n${problems.join("\n")}`).toEqual([]);
  });

  it("كل دور معطّل MP3 مذكور سببه في audioNoteAr (لا تعطيل صامت)", () => {
    const { disabledByDialogue } = dialogueSamples();
    expect(disabledByDialogue.size, "لا أدوار معطّلة — هذا الاختبار يفترض وجودها").toBeGreaterThan(0);
    const undocumented: string[] = [];
    for (const id of disabledByDialogue.keys()) {
      const dialogue = DAILY_DIALOGUES.find((item) => item.id === id);
      const note = dialogue?.audioNoteAr ?? "";
      if (!/عُطّ/.test(note) || !/MP3/.test(note)) undocumented.push(id);
    }
    expect(undocumented, `أدوار معطّلة بلا بيان: ${undocumented.join(", ")}`).toEqual([]);
  });

  it("كل ملف مُقاس قابل للقراءة (لا ملف تالف يمرّ بلا فحص)", () => {
    const { unreadable } = audit([...dialogueSamples().samples, ...podcastSamples()]);
    expect(unreadable, `ملفات لم تُقرأ:\n${unreadable.join("\n")}`).toEqual([]);
  });
});
