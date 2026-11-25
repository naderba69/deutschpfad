import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * حارس الوضع الداكن: نص ملوّن بدرجة داكنة (600–900، أو 500 لـ indigo/violet)
 * يقل تباينه عن 4.5:1 على خلفية الوضع الداكن، فيجب أن يأتي معه متغيّر dark: فاتح.
 * الاستثناء الوحيد: شارة مستوى على خلفية فاتحة ثابتة تبقى فاتحة في الوضع الداكن.
 */
const HUES = "sky|blue|indigo|amber|red|violet|orange|emerald|rose";
const TOKEN = new RegExp(
  `(?<![\\w:\\-])((?:(?:hover|focus|group-hover|focus-visible|active):)?)text-(${HUES})-(600|700|800|900|500)\\b`,
  "g",
);
const APPROVED_LIGHT_PILL = "src/components/placement/placement-test.tsx";

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(tsx|ts)$/.test(name) && !/\.test\./.test(name)) out.push(full);
  }
  return out;
}

describe("الوضع الداكن — تباين النص الملوّن", () => {
  it("كل نص ملوّن داكن له نظير dark: فاتح", () => {
    const offenders: string[] = [];
    for (const file of walk("src")) {
      if (file === APPROVED_LIGHT_PILL) continue;
      readFileSync(file, "utf-8")
        .split("\n")
        .forEach((line, i) => {
          for (const m of line.matchAll(TOKEN)) {
            const [, prefix, hue, num] = m;
            if (num === "500" && hue !== "indigo" && hue !== "violet") continue;
            if (new RegExp(`dark:${prefix.replace(/[:-]/g, (c) => `\\${c}`)}text-${hue}-`).test(line)) continue;
            offenders.push(`${file}:${i + 1}: ${m[0]}`);
          }
        });
    }
    expect(offenders).toEqual([]);
  });
});
