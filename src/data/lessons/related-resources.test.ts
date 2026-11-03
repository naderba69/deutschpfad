import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSON_META } from "@/data/lessons/meta";
import { lessonB103 } from "@/data/lessons/b1/b1-03";
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

  it("يُغطّى ما لا يقلّ عن 85٪ من الموارد الـ141", () => {
    const total = INTERACTIVE_STORIES.length + DAILY_DIALOGUES.length + PODCASTS.length;
    const linked = entries.reduce((n, [, refs]) => n + refs.length, 0);
    expect(total).toBe(141);
    expect(linked / total).toBeGreaterThanOrEqual(0.85);
  });

  it("كل مستوى فيه دروس مربوطة (لا مستوى محروم)", () => {
    for (const level of ["A1", "A2", "B1", "B2"]) {
      const ids = LESSON_META.filter((l) => l.level === level).map((l) => l.id);
      const linked = ids.filter((id) => (LESSON_RELATED_RESOURCES[id] ?? []).length > 0);
      expect(linked.length, `المستوى ${level} بلا موارد مربوطة`).toBeGreaterThan(0);
    }
  });

  it("keeps B1-05's health resources explicitly fictional and scope-limited", () => {
    const refs = LESSON_RELATED_RESOURCES["b1-05"];
    expect(refs.find(({ id }) => id === "b1-04-terminal")?.reasonAr).toContain("ليست قاعدة عامة");
    expect(refs.find(({ id }) => id === "b1-13-sport")?.reasonAr).toContain("ليست عرضاً حقيقياً");
    expect(refs.find(({ id }) => id === "p-b1-gesundheit")?.reasonAr).toContain("منظمة الصحة العالمية");
    expect(DAILY_DIALOGUES.find(({ id }) => id === "b1-04-terminal")?.audioNoteAr).toContain("خيالي");
    expect(DAILY_DIALOGUES.find(({ id }) => id === "b1-13-sport")?.audioNoteAr).toContain("السعر والشروط أرقام خيالية");
  });

  it("describes B1-07's optional resources as fictional, scoped supplements rather than political evidence", () => {
    const refs = LESSON_RELATED_RESOURCES["b1-07"];
    expect(refs.map(({ id }) => id)).toEqual(["b1-03-beschwerde", "b1-verein"]);
    expect(refs.every(({ reasonAr }) => reasonAr.includes("خيالي") || reasonAr.includes("خيالية"))).toBe(true);
    expect(refs[0]?.reasonAr).toContain("ليس مادة عن السياسة أو الانتخابات");
    expect(refs[1]?.reasonAr).toContain("لا مصدر لمعلومات سياسية");

    const complaint = DAILY_DIALOGUES.find(({ id }) => id === "b1-03-beschwerde");
    expect(complaint?.situation).toContain("خيالية");
    expect(complaint?.audioNoteAr).toContain("لا يقدّم الحوار حكماً على استحقاق تعويض قانوني");

    const clubStory = INTERACTIVE_STORIES.find(({ id }) => id === "b1-verein");
    expect(clubStory?.description).toContain("خيالية");
    expect(clubStory?.description).not.toContain("العمل التطوعي");
    expect(clubStory?.grammar).toContain("seit");
  });

  it("keeps B1-06's culture resources explicitly fictional or personal rather than national generalizations", () => {
    const refs = LESSON_RELATED_RESOURCES["b1-06"];
    expect(refs.map(({ id }) => id)).toEqual(["b1-09-ticket-kaufen", "b1-familienfest", "b1-14-kochen"]);
    expect(refs.every(({ reasonAr }) => reasonAr.includes("خيال") || reasonAr.includes("تمثيلي"))).toBe(true);

    const tickets = DAILY_DIALOGUES.find(({ id }) => id === "b1-09-ticket-kaufen");
    expect(tickets?.audioNoteAr).toContain("أرقام خيالية");
    expect(tickets?.situation).toContain("افتراضيان");

    const recipe = DAILY_DIALOGUES.find(({ id }) => id === "b1-14-kochen");
    expect(recipe?.audioNoteAr).toContain("تفضيل شخصي");
    expect(recipe?.turns.some(({ de }) => /traditionell|typisch für Tunesien/i.test(de))).toBe(false);

    const familyStory = INTERACTIVE_STORIES.find(({ id }) => id === "b1-familienfest");
    expect(familyStory?.description).toContain("خيالية");
    expect(familyStory?.description).toContain("غير منسوب إلى ثقافة بعينها");
  });

  it("describes A2-05's informal late-arrival dialogue without presenting it as workplace speech", () => {
    const lateDialogue = LESSON_RELATED_RESOURCES["a2-05"].find(({ id }) => id === "a2-12-verspaetet");
    expect(lateDialogue?.reasonAr).toContain("لصديق");
    expect(lateDialogue?.reasonAr).toContain("غير رسمي");
    expect(lateDialogue?.reasonAr).toContain("لا نموذج لمكالمة عمل");
  });

  it("constrains the scope of A2-06's optional phone-service dialogue and checks the speaker role", () => {
    const handyRef = LESSON_RELATED_RESOURCES["a2-06"].find(({ id }) => id === "a2-08-handy");
    expect(handyRef?.reasonAr).toContain("مفردة الإنترنت");
    expect(handyRef?.reasonAr).toContain("لا يتناول مباشرةً قراءة الأخبار");
    const handyDialogue = DAILY_DIALOGUES.find(({ id }) => id === "a2-08-handy");
    expect(handyDialogue?.turns.at(-1)).toMatchObject({ speaker: "الموظف", role: "a" });
  });

  it("describes A2-07's bank dialogue and bicycle story as scoped optional resources", () => {
    const a207 = LESSON_RELATED_RESOURCES["a2-07"];
    expect(a207).toHaveLength(2);
    expect(a207.find(({ id }) => id === "a2-07-bank")?.reasonAr).toContain("محاكاة افتراضية");
    expect(a207.find(({ id }) => id === "a2-07-bank")?.reasonAr).toContain("لا لعرض متطلبات مصرفية عامة");
    expect(a207.find(({ id }) => id === "a2-fahrrad")?.reasonAr).toContain("امتداد اختياري");
  });

  it("scopes B1-03's environment resources as practice scenarios rather than empirical claims", () => {
    const refs = LESSON_RELATED_RESOURCES["b1-03"];
    expect(refs).toHaveLength(4);
    expect(refs.find(({ id }) => id === "b1-umweltgruppe")?.reasonAr).toContain("خيالية");
    expect(refs.find(({ id }) => id === "b1-energiesparen")?.reasonAr).toContain("ليست دليلاً");
    expect(refs.find(({ id }) => id === "p-b1-umwelt")?.reasonAr).toContain("ليس مسحاً");
    const group = INTERACTIVE_STORIES.find(({ id }) => id === "b1-umweltgruppe");
    expect(group?.description).toContain("خيالية");
    expect(group?.grammar).toContain("wurde");
    expect(group?.grammar).not.toContain("wurden");
    expect(group?.segments[2]?.ar).toContain("يُعتنى بالأشجار");
    expect(group?.segments[4]?.ar).toContain("كافأت إدارة المدينة");
    const energy = INTERACTIVE_STORIES.find(({ id }) => id === "b1-energiesparen");
    expect(energy?.description).toContain("خيالية");
    const mediation = lessonB103.mediation?.[0];
    expect(mediation?.sourceDe).toContain("Übungstext");
    expect(mediation?.sourceDe).not.toContain("Experten fordern");
  });

  it("scopes B1-04's linked digital-detox story as fictional and non-diagnostic", () => {
    const ref = LESSON_RELATED_RESOURCES["b1-04"].find(({ id }) => id === "b1-digital-detox");
    expect(ref?.reasonAr).toContain("خيالية");
    expect(ref?.reasonAr).toContain("لا تشخّص إدماناً");
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b1-digital-detox");
    expect(story?.titleAr).toBe("أسبوع للابتعاد عن الهاتف");
    expect(story?.description).toContain("خيالية");
    expect(story?.description).toContain("لا تشخّص إدماناً");
  });

  it("checks B1-04's linked opinion dialogue translation for Freizeit", () => {
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "b1-01-meinung");
    expect(dialogue?.turns[3]?.de).toContain("Freizeit");
    expect(dialogue?.turns[3]?.ar).toContain("وقت الفراغ");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 لهذا الحوار غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");
  });

  it("B2-02 يوسم موارد الأعمال الافتراضية ويبيّن حدود صوت الحوار", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "b2-startup");
    expect(story?.description).toContain("خيالية");
    expect(story?.description).toContain("افتراضية للتدريب");

    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "b2-11-verhandlung-kunde");
    expect(dialogue?.situation).toContain("خيالي");
    expect(dialogue?.situation).toContain("ليست عرضاً تجارياً");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3");
    expect(dialogue?.audioNoteAr).toContain("لا أجزم بأنها تسجيلات بشرية أو مولّدة آلياً");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");

    const podcastRef = LESSON_RELATED_RESOURCES["b2-02"].find(({ id }) => id === "p-b2-globalisierung");
    expect(podcastRef?.reasonAr).toContain("نقاش عام");
    expect(podcastRef?.reasonAr).toContain("ليس تقريراً اقتصادياً");
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


  it("scopes B1-02's optional interview and illness resources and avoids dated salary or certificate advice", () => {
    const refs = LESSON_RELATED_RESOURCES["b1-02"];
    expect(refs.find(({ id }) => id === "b1-07-interview")?.reasonAr).toContain("محاكاة تدريبية");
    expect(refs.find(({ id }) => id === "b1-nebenjob")?.reasonAr).toContain("ليست مرجعاً للأجور");

    const interview = DAILY_DIALOGUES.find(({ id }) => id === "b1-07-interview");
    expect(interview?.titleDe).toBe("Vorstellungsgespräch (detailliert)");
    expect(interview?.situation).toContain("مثال خيالي");
    expect(interview?.turns.some(({ de }) => de.includes("3000 Euro brutto"))).toBe(true);

    const illness = DAILY_DIALOGUES.find(({ id }) => id === "b1-08-krankmeldung");
    expect(illness?.turns.some(({ de }) => de.includes("falls Sie dann noch krank sind"))).toBe(true);
    expect(illness?.turns.some(({ de }) => de.includes("Bringen Sie morgen die Krankmeldung mit"))).toBe(false);
    expect(illness?.keyVocab.find(({ de }) => de === "die Krankmeldung")?.ar).toBe("الإبلاغ عن المرض");
  });

  it("keeps B1-02's linked work stories evidence-based and avoids treating fictional wages as current benchmarks", () => {
    const job = INTERACTIVE_STORIES.find(({ id }) => id === "b1-neuer-job");
    expect(job?.segments.find(({ id }) => id === 3)?.de).toContain("war alles neu und schwierig");
    expect(job?.segments.find(({ id }) => id === 4)?.question?.options[0].text).toBe("Viel lernen");

    const sideJob = INTERACTIVE_STORIES.find(({ id }) => id === "b1-nebenjob");
    const sideJobText = sideJob?.segments.map(({ de }) => de).join(" ") ?? "";
    expect(sideJobText).not.toContain("12 Euro pro Stunde");
    expect(sideJob?.segments.find(({ id }) => id === 4)?.question?.options[0].text).toBe("Mehr Arbeitsstunden");
  });

  it("resolveRelatedResources يعيد فارغاً لدرس غير مربوط", () => {
    expect(resolveRelatedResources("لا-يوجد-درس-بهذا-المعرّف")).toEqual([]);
  });
});
