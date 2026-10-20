import fs from "node:fs";
import path from "node:path";

import {describe, expect, it} from "vitest";

import {siteConfig} from "@/lib/site-config";

/**
 * سلامة روابط الفوتر.
 *
 * كانت مجموعة «منصة» تضم 60 رابطاً بـ40 وجهة فقط: أُلحقت بها ثلاث دفعات
 * متتالية دون فحص التكرار، فتكرر «/faq» أربع مرات و«/diktate» ثلاثاً.
 * ولأن مفتاح React هو `link.href`، كان كل تكرار يُطلق تحذير
 * «two children with the same key» — 20 تحذيراً في كل صفحة من صفحات الموقع.
 */

const links: [string, readonly {readonly title: string; readonly href: string}[]][] =
  Object.entries(siteConfig.footerLinks);

describe("روابط الفوتر", () => {
  it("لا وجهة مكررة داخل أي مجموعة (مفتاح React = href)", () => {
    const dups: string[] = [];
    for (const [group, group_links] of links) {
      const seen = new Map<string, string[]>();
      for (const l of group_links) seen.set(l.href, [...(seen.get(l.href) ?? []), l.title]);
      for (const [href, titles] of seen) {
        if (titles.length > 1) dups.push(`${group}: ${href} ×${titles.length} (${titles.join(" | ")})`);
      }
    }
    expect(dups, `وجهات مكررة: ${dups.join(" ⁄ ")}`).toEqual([]);
  });

  it("لا عنوان مكرر داخل أي مجموعة (لا يربك المتعلم)", () => {
    const dups: string[] = [];
    for (const [group, group_links] of links) {
      const seen = new Set<string>();
      for (const l of group_links) {
        if (seen.has(l.title)) dups.push(`${group}: «${l.title}»`);
        seen.add(l.title);
      }
    }
    expect(dups, `عناوين مكررة: ${dups.join(" ⁄ ")}`).toEqual([]);
  });

  it("كل رابط فوتر يشير إلى صفحة موجودة فعلاً (لا روابط ميتة)", () => {
    const dead: string[] = [];
    for (const [group, group_links] of links) {
      for (const l of group_links) {
        if (l.href === "/") continue;
        const seg = l.href.replace(/^\//, "");
        const exists = ["page.tsx", "page.ts"].some((f) =>
          fs.existsSync(path.join("src/app", seg, f)),
        );
        if (!exists) dead.push(`${group}: ${l.href}`);
      }
    }
    expect(dead, `روابط بلا صفحة: ${dead.join("، ")}`).toEqual([]);
  });
});
