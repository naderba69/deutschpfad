/**
 * حارس «الأرقام المعلنة» — يمنع تكرار عيب متكرر في هذا المستودع.
 *
 * شوهد هذا العيب ثلاث مرات على الأقل قبل كتابة الحارس:
 *   · وصف صفحة `/dialogues` يقول «60 حواراً يومياً» والحقيقة 62.
 *   · تعليق `related-resources.ts` يقول «20 حلقة بودكاست» والحقيقة 22.
 *   · التعليق نفسه يقول «154 مورداً» بعد أن صارت 156.
 *
 * السبب بنيوي: الرقم مكتوب بيد في نصّ يراه المتعلّم أو يقرأه المطوّر،
 * والبيانات تنمو في ملف آخر. لا اختبار وحدة كان يقرأ **الادعاء** نفسه.
 *
 * القاعدة هنا:
 *   ١) أي ادعاء بعدد الحوارات يجب أن يساوي الإجمالي أو عدد مستوى قائم
 *      (كي تبقى عبارات مثل «16 حواراً في B1» صحيحة).
 *   ٢) أي ادعاء بعدد حلقات البودكاست أو قصص تفاعلية أو موارد مرتبطة
 *      يجب أن يساوي الإجمالي الفعلي.
 *   ٣) الادعاء التاريخي المشروع (وصف قياس قديم) يُوسم بسطر `counts-guard:ignore`
 *      مع سبب؛ الوسم **لكل سطر** لا للملف كي لا يتحول إلى باب خلفي.
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSONS } from "@/data/lessons";
import { PODCASTS } from "@/data/podcasts";
import { INTERACTIVE_STORIES } from "@/data/stories";

const IGNORE_MARK = "counts-guard:ignore";
const ROOTS = ["src", "e2e"];

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx?|md)$/.test(entry.name) && !entry.name.endsWith(".d.ts")) out.push(full);
  }
  return out;
}

/** أرقام مقبولة لكل ادعاء — الإجمالي أو توزيع المستويات */
const dialoguesCounts = new Set<number>([
  DAILY_DIALOGUES.length,
  ...Object.values(
    DAILY_DIALOGUES.reduce<Record<string, number>>((acc, dialogue) => {
      acc[dialogue.level] = (acc[dialogue.level] ?? 0) + 1;
      return acc;
    }, {}),
  ),
]);

const podcastsCounts = new Set<number>([
  PODCASTS.length,
  ...Object.values(
    PODCASTS.reduce<Record<string, number>>((acc, episode) => {
      acc[episode.level] = (acc[episode.level] ?? 0) + 1;
      return acc;
    }, {}),
  ),
]);

const lessonsCounts = new Set<number>([
  LESSONS.length,
  ...Object.values(
    LESSONS.reduce<Record<string, number>>((acc, lesson) => {
      acc[lesson.level] = (acc[lesson.level] ?? 0) + 1;
      return acc;
    }, {}),
  ),
]);

const totals = {
  dialogues: DAILY_DIALOGUES.length,
  podcasts: PODCASTS.length,
  stories: INTERACTIVE_STORIES.length,
  resources: DAILY_DIALOGUES.length + PODCASTS.length + INTERACTIVE_STORIES.length,
};

type Rule = { name: string; pattern: RegExp; allowed: (n: number) => boolean; truth: string };

const RULES: Rule[] = [
  {
    name: "حوارات",
    pattern: /(\d+)\s*حواراً/g,
    allowed: (n) => dialoguesCounts.has(n),
    truth: `الإجمالي ${totals.dialogues}`,
  },
  {
    name: "بودكاست",
    pattern: /(\d+)\s*حلقات?\s*بودكاست/g,
    allowed: (n) => podcastsCounts.has(n),
    truth: `الإجمالي ${totals.podcasts}`,
  },
  {
    name: "قصص",
    pattern: /(\d+)\s*قصص?\s*تفاعلية/g,
    allowed: (n) => n === totals.stories,
    truth: `الإجمالي ${totals.stories}`,
  },
  {
    name: "موارد",
    pattern: /(\d+)\s*مورداً/g,
    allowed: (n) => n === totals.resources,
    truth: `الإجمالي ${totals.resources}`,
  },
  {
    name: "دروس",
    pattern: /(\d+)\s*درساً/g,
    allowed: (n) => lessonsCounts.has(n),
    truth: `الإجمالي ${LESSONS.length}`,
  },
];

describe("حارس الأرقام المعلنة — لا رقم مكتوب بيد يخالف البيانات", () => {
  it("القواعد نفسها ليست فارغة (حارس لا يمرّ لأنه لا يقرأ شيئاً)", () => {
    expect(RULES).toHaveLength(5);
    expect(totals.resources).toBeGreaterThan(100);
  });

  it("كل ادعاء بعدد في src/ وe2e/ يطابق البيانات الفعلية", () => {
    const violations: string[] = [];
    let claims = 0;

    for (const root of ROOTS) {
      for (const file of walk(root)) {
        if (file === __filename || file.endsWith("stale-count-claims.test.ts")) continue;
        const lines = fs.readFileSync(file, "utf8").split("\n");
        lines.forEach((line, index) => {
          if (line.includes(IGNORE_MARK)) return;
          for (const rule of RULES) {
            for (const match of line.matchAll(rule.pattern)) {
              const value = Number(match[1]);
              claims += 1;
              if (!rule.allowed(value)) {
                violations.push(
                  `${file}:${index + 1} — «${match[0]}» (${rule.name}) والصحيح: ${rule.truth}`,
                );
              }
            }
          }
        });
      }
    }

    expect(claims, "لم يُقرأ أي ادعاء — الحارس معطّل").toBeGreaterThan(8);
    expect(violations, `أرقام متقادمة:\n${violations.join("\n")}`).toEqual([]);
  });

  it("الأرقام المشتقّة في البيانات نفسها متسقة", () => {
    // تجميع المستويات يجب أن يساوي الإجمالي — أي حلقة/حوار بلا مستوى صحيح يسقط هنا
    const sum = (items: { level: string }[]) =>
      items.reduce((n, item) => n + (item.level ? 1 : 0), 0);
    expect(sum(DAILY_DIALOGUES)).toBe(totals.dialogues);
    expect(sum(PODCASTS)).toBe(totals.podcasts);
    expect(sum(INTERACTIVE_STORIES)).toBe(totals.stories);
  });
});
