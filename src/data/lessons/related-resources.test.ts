import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSON_META } from "@/data/lessons/meta";
import {
  LESSON_RELATED_RESOURCES,
  resolveRelatedResources,
  type RelatedResourceKind,
} from "@/data/lessons/related-resources";
import { PODCASTS } from "@/data/podcasts";
import { INTERACTIVE_STORIES } from "@/data/stories";

/**
 * حرّاس ربط المحتوى الرديف بالدروس.
 *
 * الخريطة في related-resources.ts مكتوبة يدوياً، ويدُ الإنسان تخطئ:
 * حرف ناقص في معرّف يصنع رابطاً ميتاً لا يظهر إلا للمتعلّم. وربط قصة
 * B2 بدرس A1 يُغرِق المبتدئ بمفردات لم يرها. هذه الاختبارات تمنع
 * الحالتين قبل الدمج.
 */

const LEVEL_RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

const RESOURCE_IDS: Record<RelatedResourceKind, Set<string>> = {
  story: new Set(INTERACTIVE_STORIES.map((s) => s.id)),
  dialogue: new Set(DAILY_DIALOGUES.map((d) => d.id)),
  podcast: new Set(PODCASTS.map((p) => p.id)),
};

const RESOURCE_LEVEL: Record<RelatedResourceKind, Map<string, string>> = {
  story: new Map(INTERACTIVE_STORIES.map((s) => [s.id, s.level as string])),
  dialogue: new Map(DAILY_DIALOGUES.map((d) => [d.id, d.level as string])),
  podcast: new Map(PODCASTS.map((p) => [p.id, p.level as string])),
};

const entries = Object.entries(LESSON_RELATED_RESOURCES);

describe("ربط المحتوى الرديف بالدروس", () => {
  it("كل مفتاح في الخريطة هو معرّف درس موجود فعلاً", () => {
    const lessonIds = new Set(LESSON_META.map((l) => l.id));
    const unknown = entries.map(([id]) => id).filter((id) => !lessonIds.has(id));
    expect(unknown, `دروس غير موجودة في LESSON_META: ${unknown.join(", ")}`).toEqual([]);
  });

  it("كل مورد مربوط موجود في مكتبته (لا روابط ميتة)", () => {
    const dead: string[] = [];
    for (const [lessonId, refs] of entries) {
      for (const ref of refs) {
        if (!RESOURCE_IDS[ref.kind].has(ref.id)) dead.push(`${lessonId} → ${ref.kind}:${ref.id}`);
      }
    }
    expect(dead, `موارد غير موجودة: ${dead.join(" | ")}`).toEqual([]);
  });

  it("لا يُربط مورد بمستوى أعلى من مستوى درسه", () => {
    const metaById = new Map(LESSON_META.map((l) => [l.id, l]));
    const tooHard: string[] = [];
    for (const [lessonId, refs] of entries) {
      const lesson = metaById.get(lessonId);
      if (!lesson) continue;
      for (const ref of refs) {
        const level = RESOURCE_LEVEL[ref.kind].get(ref.id);
        if (level === undefined) continue;
        if (LEVEL_RANK[level] > LEVEL_RANK[lesson.level]) {
          tooHard.push(`${lessonId} (${lesson.level}) → ${ref.id} (${level})`);
        }
      }
    }
    expect(tooHard, `موارد أصعب من درسها: ${tooHard.join(" | ")}`).toEqual([]);
  });

  it("لا يتكرّر المورد نفسه في درسين (كل مورد يخدم درساً واحداً)", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const [lessonId, refs] of entries) {
      for (const ref of refs) {
        const key = `${ref.kind}:${ref.id}`;
        const prev = seen.get(key);
        if (prev) dupes.push(`${key} في ${prev} و${lessonId}`);
        else seen.set(key, lessonId);
      }
    }
    expect(dupes, `موارد مكرّرة: ${dupes.join(" | ")}`).toEqual([]);
  });

  it("لكل ربط سببٌ مكتوب بالعربية (لا نص فارغ ولا حشو)", () => {
    const bad: string[] = [];
    for (const [lessonId, refs] of entries) {
      for (const ref of refs) {
        if (ref.reasonAr.trim().length < 25) bad.push(`${lessonId} → ${ref.id}`);
        if (!/[\u0600-\u06FF]/.test(ref.reasonAr)) bad.push(`${lessonId} → ${ref.id} (لا عربية)`);
      }
    }
    expect(bad, `أسباب ناقصة: ${bad.join(" | ")}`).toEqual([]);
  });

  it("لا درس يحمل أكثر من خمسة موارد (حتى لا يُشتَّت المتعلّم)", () => {
    const overloaded = entries.filter(([, refs]) => refs.length > 5).map(([id, refs]) => `${id}=${refs.length}`);
    expect(overloaded, `دروس محمّلة أكثر من اللازم: ${overloaded.join(", ")}`).toEqual([]);
  });

  it("يُغطّى ما لا يقلّ عن 85٪ من الموارد الـ140", () => {
    const total = INTERACTIVE_STORIES.length + DAILY_DIALOGUES.length + PODCASTS.length;
    const linked = entries.reduce((n, [, refs]) => n + refs.length, 0);
    expect(total).toBe(140);
    expect(linked / total).toBeGreaterThanOrEqual(0.85);
  });

  it("كل مستوى فيه دروس مربوطة (لا مستوى محروم)", () => {
    for (const level of ["A1", "A2", "B1", "B2"]) {
      const ids = LESSON_META.filter((l) => l.level === level).map((l) => l.id);
      const linked = ids.filter((id) => (LESSON_RELATED_RESOURCES[id] ?? []).length > 0);
      expect(linked.length, `المستوى ${level} بلا موارد مربوطة`).toBeGreaterThan(0);
    }
  });

  it("resolveRelatedResources يعيد عنواناً وشارة لكل مرجع", () => {
    for (const [lessonId, refs] of entries) {
      const resolved = resolveRelatedResources(lessonId);
      expect(resolved.length, `فقدان مورد عند الحلّ في ${lessonId}`).toBe(refs.length);
      for (const r of resolved) {
        expect(r.titleDe.length, `${lessonId}/${r.id} بلا عنوان ألماني`).toBeGreaterThan(0);
        expect(r.titleAr.length, `${lessonId}/${r.id} بلا عنوان عربي`).toBeGreaterThan(0);
        // الرابط يفتح المورد نفسه لا المكتبة: /stories?open=<id>
        expect(r.href).toBe(`${{ story: "/stories", dialogue: "/dialogues", podcast: "/podcasts" }[r.kind]}?open=${r.id}`);
      }
    }
  });

  it("resolveRelatedResources يعيد فارغاً لدرس غير مربوط", () => {
    expect(resolveRelatedResources("لا-يوجد-درس-بهذا-المعرّف")).toEqual([]);
  });
});
