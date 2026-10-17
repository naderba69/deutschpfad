/**
 * حارس صوت التحدث B2 (2026-10-16): يفصل «البيان» عن «القرص»:
 *  · النص المنطوق مشتقّ من `modelAr` نفسه: كل مقطع يجب أن يساوي
 *    الجمل الألمانية بين «...» موصولة — فلا نصّ موازٍ يتباعد مع الزمن.
 *  · المقاطع المستحيلة (نصّ > سقف مقطع واحد) تفشل قبل الإنتاج لا بعده.
 *  · لكل طقم على القرص: إمّا مكتمل (كل مقاطعه صالحة) أو غير مُنتَج بعد،
 *    ولا ملف يتيم خارج البيان — نفس قاعدة مقاطع الاستماع.
 *  · عدّادات غير هامشية: 16 موضوعاً بمقاطع (8 لكل طقم).
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { B2_SPRECHEN_SETS } from "@/data/exams";
import {
  B2_SPRECHEN_AUDIO_BASE,
  MAX_SPRECHEN_CLIP_CHARS,
  b2SprechenAudioClips,
  b2SprechenAudioPath,
  modelSpeechParts,
  modelSpeechText,
} from "@/data/exams/b2-sprechen-audio";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const PUBLIC = path.join(process.cwd(), "public");
const clips = b2SprechenAudioClips();

describe("صوت التحدث B2 — البيان مشتقّ من البيانات", () => {
  it("مقطع لكل موضوع يحمل إجابة نموذجية (16 = 8 لكل طقم)", () => {
    expect(clips.length).toBeGreaterThanOrEqual(16);
    const perSet: Record<string, number> = {};
    clips.forEach((c) => (perSet[c.setKey] = (perSet[c.setKey] ?? 0) + 1));
    expect(perSet.a).toBeGreaterThanOrEqual(8);
    expect(perSet.b).toBeGreaterThanOrEqual(8);

    const ids = clips.map((c) => c.path);
    expect(new Set(ids).size, "مسارات مكرّرة").toBe(ids.length);
  });

  it("لا موضوع بلا مقطع في أي طقم — ولا مقطع بلا نصّ", () => {
    const topics = B2_SPRECHEN_SETS.flatMap((set, si) => [
      ...set.vortrag.map((v) => ({ set: si + 1, id: v.id, modelAr: v.modelAr })),
      ...set.diskussion.map((d) => ({ set: si + 1, id: d.id, modelAr: d.modelAr })),
    ]);
    expect(topics.length).toBeGreaterThanOrEqual(16);
    const silent = topics.filter((t) => modelSpeechText(t.modelAr).length === 0).map((t) => `طقم ${t.set}/${t.id}`);
    expect(silent, `مواضيع بلا نصّ منطوق: ${silent.join(" · ")}`).toEqual([]);
  });

  it("نصّ كل مقطع = الجمل المقتبسة في modelAr حرفياً، وبطول يضمنه مقطع واحد", () => {
    const topics = B2_SPRECHEN_SETS.flatMap((set) => [
      ...set.vortrag.map((v) => ({ id: v.id, modelAr: v.modelAr })),
      ...set.diskussion.map((d) => ({ id: d.id, modelAr: d.modelAr })),
    ]);
    const bad: string[] = [];
    for (const c of clips) {
      const topic = topics.find((t) => t.id === c.topicId);
      expect(topic, `${c.topicId}: موضوع غير موجود`).toBeTruthy();
      const parts = modelSpeechParts(topic?.modelAr);
      if (parts.join(" ") !== c.text) bad.push(`${c.topicId}: النص ليس وصل الجمل المقتبسة`);
      if (parts.length < 5) bad.push(`${c.topicId}: جمل منطوقة أقل من 5 (${parts.length})`);
      // لا عربية داخل النصّ المنطوق: الاقتباس للجملة الألمانية وحدها،
      // والتوجيه العربي يبقى خارج «...» (وإلا نطق المحرك عربيةً بصوت ألماني)
      const arabicInSpeech = parts.filter((p) => /[\u0600-\u06FF]/.test(p));
      if (arabicInSpeech.length > 0) {
        bad.push(`${c.topicId}: اقتباس منطوق فيه عربية (${arabicInSpeech.length}) — ${arabicInSpeech[0].slice(0, 24)}…`);
      }
      if (/[\u0600-\u06FF]/.test(c.text)) bad.push(`${c.topicId}: النصّ المنطوق كاملاً فيه عربية`);
      if (c.text.length > MAX_SPRECHEN_CLIP_CHARS) bad.push(`${c.topicId}: ${c.text.length} > ${MAX_SPRECHEN_CLIP_CHARS}`);
      // الجمل المقتبسة يجب أن تكون داخل modelAr نفسه (قاعدة «الاقتباس الأمين»)
      for (const p of parts) {
        if (!(topic?.modelAr ?? "").includes(`«${p}»`)) bad.push(`${c.topicId}: اقتباس غير حرفي: ${p.slice(0, 30)}…`);
      }
    }
    expect(bad, bad.join(" · ")).toEqual([]);
  });
});

describe("صوت التحدث B2 — القرص (مكتمل أو غير مُنتَج بعد)", () => {
  const presentFiles = (setKey: string): string[] => {
    const dir = path.join(PUBLIC, B2_SPRECHEN_AUDIO_BASE.replace(/^\//, ""), setKey);
    return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")) : [];
  };

  for (const setKey of ["a", "b"] as const) {
    it("مصدر واحد للمسار: لكل موضوع مسار مشتقّ من البيان (وما لا نصّ له بلا مسار)", () => {
    const topics = B2_SPRECHEN_SETS.flatMap((set) => [
      ...set.vortrag.map((v) => v.id),
      ...set.diskussion.map((d) => d.id),
    ]);
    const missing = topics.filter((id) => !b2SprechenAudioPath(id));
    expect(missing, `مواضيع بلا مسار صوت (الواجهة ستقرؤها بصوت الجهاز): ${missing.join(", ")}`).toEqual([]);
    expect(b2SprechenAudioPath("لا-يوجد")).toBeUndefined();
    for (const c of clips) expect(b2SprechenAudioPath(c.topicId)).toBe(`${c.path}.mp3`);
  });

  it(`الطقم ${setKey}: إمّا كل مقاطعه صالحة أو مجلد غير مُنتَج — لا أنصاف ولا يتيم`, () => {
      const present = presentFiles(setKey);
      if (present.length === 0) return; // مقبول: يُقرأ بصوت الجهاز ويعلن ذلك
      const expected = clips.filter((c) => c.setKey === setKey);
      const broken = expected.filter((c) => !isPlayableMp3(path.join(PUBLIC, `${c.path.replace(/^\//, "")}.mp3`)));
      expect(
        broken.map((c) => `${c.topicId}.mp3`),
        `الطقم ${setKey}: مقاطع ناقصة/تالفة (${broken.length})`,
      ).toEqual([]);
      const orphans = present.filter((f) => !expected.some((c) => f === `${c.topicId}.mp3`));
      expect(orphans, `الطقم ${setKey}: ملفات لا موضع لها في البيان`).toEqual([]);
    });
  }
});
