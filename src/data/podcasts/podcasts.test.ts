import {describe, expect, it} from "vitest";

import {PODCASTS, getPodcastsByLevel} from "@/data/podcasts";

describe("مكتبة البودكاست التعليمي", () => {
  it("تحتوي 12+ حلقة لكل مستوى مع نص وأسئلة سليمة (توسعة 2026-08)", () => {
    expect(PODCASTS.length).toBeGreaterThanOrEqual(12);
    for (const p of PODCASTS) {
      expect(p.script.length).toBeGreaterThan(30);
      expect(p.scriptAr.length).toBeGreaterThan(10);
      expect(p.questions.length).toBeGreaterThanOrEqual(2);
      for (const q of p.questions) {
        const correct = q.options.filter((o) => o.correct).length;
        expect(correct).toBe(1);
        // شرح لكل خيار
        for (const opt of q.options) {
          expect(opt.explanation?.trim(), `حلقة ${p.id}: خيار بلا شرح`).toBeTruthy();
        }
      }
    }
  });

  it("يوافق وصف ميمي بالعربية صيغة الصداقة المؤنثة في نص الحلقة الألماني", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-a1-haustier");
    expect(episode?.script).toContain("Mimi ist meine beste Freundin.");
    expect(episode?.script).not.toContain("Mimi ist mein bester Freund.");
    expect(episode?.scriptAr).toContain("ميمي أفضل صديقة لي.");
  });

  it("attributes the B1 health recommendation to the WHO and uses the weekly adult guideline", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-b1-gesundheit");
    expect(episode).toBeDefined();
    expect(episode?.script).toContain("Die Weltgesundheitsorganisation empfiehlt Erwachsenen");
    expect(episode?.script).toContain("150 bis 300 Minuten Bewegung mit mittlerer Intensität");
    expect(episode?.script).toContain("75 bis 150 Minuten mit hoher Intensität");
    expect(episode?.script).not.toMatch(/30 Minuten pro Tag|Ärzte empfehlen/);
    expect(episode?.scriptAr).toContain("ليست بديلاً عن المشورة الطبية الشخصية");
    expect(episode?.questions[0]?.options.some((option) => option.correct && option.text.includes("150 bis 300 Minuten"))).toBe(true);
  });

  it("كل مستوى لديه على الأقل حلقة واحدة", () => {
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      expect(getPodcastsByLevel(lv).length).toBeGreaterThanOrEqual(1);
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   شروح الخيارات — مقاييس دفعة 52 (2026-10-16)
   قبل الإصلاح: **50 شرحاً دائرياً** كان نصّها «لا — الصواب هو ما ذُكر في
   الحلقة» (لا يقول شيئاً للمتعلم)، و**12 خياراً صحيحاً** بشرح عربي بلا دليل
   ألماني. أُصلحت الـ37 سؤالاً كلها بمقتبس حرفي من الحلقة، ويقفل هذا القسم:
     · كل خيار له شرح غير فارغ.
     · كل خيار **صحيح** يحمل دليلاً ألمانياً (كلمة ≥3 أحرف).
     · لا شرح دائري (الصيغة القديمة ممنوعة نصّاً).
     · **كل اقتباس بين «» موجود حرفياً في نصّ الحلقة** — مانع الاقتباس المُفبرك.
   ═══════════════════════════════════════════════════════════ */
describe("شروح البودكاست — دليل ألماني واقتباس أمين", () => {
  const GERMAN_EVIDENCE = /[A-Za-zÄÖÜäöüß]{3,}/;
  const SPAN = /«([^»]+)»/g;
  const normalize = (s: string) =>
    s
      .replace(/[„“”]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/\s+/g, " ")
      .replace(/[.\s]+$/, "")
      .trim();

  it("كل خيار له شرح، وكل خيار صحيح بشرح يحمل دليلاً ألمانياً", () => {
    const problems: string[] = [];
    for (const p of PODCASTS) {
      p.questions.forEach((q, i) => {
        q.options.forEach((o, j) => {
          const at = `${p.id} سؤال ${i + 1} خيار ${j + 1}`;
          if (!o.explanation?.trim()) problems.push(`${at}: شرح مفقود`);
          else if (o.correct && !GERMAN_EVIDENCE.test(o.explanation)) {
            problems.push(`${at}: خيار صحيح بشرح بلا دليل ألماني «${o.explanation}»`);
          }
        });
      });
    }
    expect(problems).toEqual([]);
  });

  it("لا شرح دائري («الصواب هو ما ذُكر في الحلقة»)", () => {
    const circular: string[] = [];
    for (const p of PODCASTS) {
      p.questions.forEach((q, i) => {
        q.options.forEach((o, j) => {
          if (/الصواب هو ما ذُكر/.test(o.explanation ?? "")) circular.push(`${p.id} سؤال ${i + 1} خيار ${j + 1}`);
        });
      });
    }
    expect(circular).toEqual([]);
  });

  it("كل اقتباس بين «» موجود حرفياً في نصّ الحلقة", () => {
    const problems: string[] = [];
    let spansChecked = 0;
    for (const p of PODCASTS) {
      const script = normalize(p.script);
      for (const q of p.questions) {
        for (const o of q.options) {
          for (const span of [...(o.explanation ?? "").matchAll(SPAN)].map((m) => normalize(m[1])).filter((s) => GERMAN_EVIDENCE.test(s))) {
            spansChecked += 1;
            if (!script.includes(span)) problems.push(`${p.id}: «${span}» ليس في الحلقة`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
    expect(spansChecked).toBeGreaterThan(40); // حارس غير فارغ
  });
});
