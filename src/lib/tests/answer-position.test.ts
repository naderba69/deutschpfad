/**
 * ═══════════════════════════════════════════════════════════
 *  حارس «موضع الإجابة الصحيحة» — الدروس · الحوارات · البودكاست
 * ═══════════════════════════════════════════════════════════
 *
 * الثغرة (قياس 2026-10-17): الامتحانات وبنك الاختبارات موزونان منذ 2026-10-16
 * (`balanceTeile` · `balanceTestBank`، 25% لكل موضع)، لكن **أكبر كوربوس على
 * المنصة لم يكن موزوناً**:
 *   · الدروس 762/864 = 88% من الإجابات الصحيحة في الخيار الأول (B2 **99%**، A2 95%)
 *   · الحوارات 153/182 = 84% (B1 وB2 **100%** لكل سؤال)
 *   · البودكاست 40/40 = **100%**
 * أي أن 1086 سؤالاً كانت تُجتاز باختيار الخيار الأول دائماً، بلا فهم وبلا سماع —
 * وهي الثغرة نفسها التي أُصلحت في الامتحانات، لكن في المحتوى الذي يقضي فيه
 * المتعلم معظم وقته.
 *
 * الإصلاح: `balanceChoiceTree` عند حدود التصدير (الدروس · الحوارات · البودكاست)
 * — الملفات تحفظ ترتيبها التحريري، وما يُعرض موزّع.
 *
 * هذا الحارس يقيس ثلاثة أشياء، والثالث هو الأهم:
 *   1) **النتيجة**: حصة كل موضع ضمن سقف، ولا حاوية كل أسئلتها في موضع واحد.
 *   2) **الشمول**: عدّادات غير هامشية تمنع «الصفر الصامت» (مسبار يمشي على شكل
 *      بيانات واحد فيمرّ صامتاً على الباقي — وهو خطأ وقع فعلاً في دفعة سابقة).
 *   3) **الثبات**: الموازنة **إعادة ترتيب فقط** — مجموعة الخيارات، ونصّ الإجابة
 *      الصحيحة، وشرح كل خيار مقروناً بخياره، كلها مطابقة للنسخة الخام حرفياً.
 *      بلا هذا الفحص يمكن «موازنة» بكسر المحتوى وتمرّ كل الفحوص الأخرى.
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { LESSONS, RAW_LESSONS } from "@/data/lessons";
import { getDialoguesByLevel } from "@/data/dialogues";
import { A1_DIALOGUES } from "@/data/dialogues/a1";
import { A2_DIALOGUES } from "@/data/dialogues/a2";
import { B1_DIALOGUES } from "@/data/dialogues/b1";
import { B2_DIALOGUES } from "@/data/dialogues/b2";
import { PODCASTS, RAW_PODCASTS } from "@/data/podcasts";
import { collectChoiceQuestions } from "@/lib/tests/option-length-signal";

/** عنصر اختيار مُلتقط من الشجرة — بالشكلين الموجودين في البيانات */
interface Captured {
  /** نصّ الخيارات بالترتيب المعروض */
  options: string[];
  /** نصّ الإجابة الصحيحة */
  correctText: string;
  /** شرح كل خيار مقروناً بنصّه (لتحقيق أن الشرح سافر مع خياره) */
  explanationByOption: Record<string, string>;
}

/**
 * يجمع كل عناصر الاختيار من شجرة، بالترتيب نفسه في النسختين الخام والموزّعة
 * (التحويل يحافظ على بنية الشجرة تماماً، فالمقارنة بالموضع آمنة).
 */
function captureChoices(node: unknown, out: Captured[] = [], depth = 0): Captured[] {
  if (!node || depth > 12) return out;
  if (Array.isArray(node)) {
    for (const item of node) captureChoices(item, out, depth + 1);
    return out;
  }
  if (typeof node !== "object") return out;
  const o = node as Record<string, unknown>;
  const opts = o.options;
  if (Array.isArray(opts) && opts.length >= 2) {
    /* الشكل 1: نصوص + فهرس رقمي (دروس) */
    const index = typeof o.correctIndex === "number" ? o.correctIndex : typeof o.correct === "number" ? o.correct : null;
    if (index !== null && opts.every((x) => typeof x === "string")) {
      const explanations = Array.isArray(o.optionExplanations) ? (o.optionExplanations as (string | undefined)[]) : [];
      const byOption: Record<string, string> = {};
      (opts as string[]).forEach((text, i) => {
        if (typeof explanations[i] === "string") byOption[text] = explanations[i] as string;
      });
      out.push({ options: [...(opts as string[])], correctText: (opts as string[])[index] ?? "", explanationByOption: byOption });
    } else if (opts.every((x) => !!x && typeof x === "object" && typeof (x as Record<string, unknown>).correct === "boolean")) {
      /* الشكل 2: كائنات فيها `correct` منطقي (حوارات · بودكاست) */
      const items = opts as { text?: string; correct?: boolean; explanation?: string }[];
      const byOption: Record<string, string> = {};
      for (const item of items) if (typeof item.explanation === "string") byOption[String(item.text ?? "")] = item.explanation;
      out.push({
        options: items.map((x) => String(x.text ?? "")),
        correctText: String(items.find((x) => x.correct === true)?.text ?? ""),
        explanationByOption: byOption,
      });
    }
  }
  for (const value of Object.values(o)) captureChoices(value, out, depth + 1);
  return out;
}

/** حصص المواضع كنسب مئوية */
function positionShares(positions: number[]): Map<number, number> {
  const counts = new Map<number, number>();
  for (const p of positions) counts.set(p, (counts.get(p) ?? 0) + 1);
  const total = positions.length || 1;
  return new Map([...counts.entries()].map(([pos, n]) => [pos, (100 * n) / total]));
}

const CORPORA = [
  { name: "الدروس", balanced: LESSONS as unknown, raw: RAW_LESSONS as unknown, minQuestions: 800, maxShare: 30 },
  /* الموزّنة من البرميل (ما يُعرض)، والخام من ملفات المستوى (ما كُتب) */
  { name: "حوارات A1", balanced: getDialoguesByLevel("A1") as unknown, raw: A1_DIALOGUES as unknown, minQuestions: 40, maxShare: 45 },
  { name: "حوارات A2", balanced: getDialoguesByLevel("A2") as unknown, raw: A2_DIALOGUES as unknown, minQuestions: 40, maxShare: 45 },
  { name: "حوارات B1", balanced: getDialoguesByLevel("B1") as unknown, raw: B1_DIALOGUES as unknown, minQuestions: 40, maxShare: 45 },
  { name: "حوارات B2", balanced: getDialoguesByLevel("B2") as unknown, raw: B2_DIALOGUES as unknown, minQuestions: 40, maxShare: 45 },
  { name: "البودكاست", balanced: PODCASTS as unknown, raw: RAW_PODCASTS as unknown, minQuestions: 40, maxShare: 45 },
] as const;

describe("موضع الإجابة الصحيحة — التوزيع", () => {
  it("بوابة حراسة الحارس: كل كوربوس يُقاس فعلاً (عدّادات غير هامشية)", () => {
    for (const corpus of CORPORA) {
      const count = collectChoiceQuestions(corpus.balanced).length;
      expect(count, `${corpus.name}: عدد أسئلة الاختيار`).toBeGreaterThanOrEqual(corpus.minQuestions);
    }
    expect(collectChoiceQuestions(LESSONS).length).toBeGreaterThanOrEqual(864);
  });

  it("لا موضع مهيمن: حصة كل موضع ≤ سقفها (كان الأول 88% في الدروس و100% في الحوارات B1/B2 والبودكاست)", () => {
    for (const corpus of CORPORA) {
      const positions = collectChoiceQuestions(corpus.balanced).map((q) => q.correct);
      const shares = positionShares(positions);
      for (const [pos, share] of shares) {
        expect(share, `${corpus.name}: حصة الموضع ${pos} = ${share.toFixed(1)}%`).toBeLessThanOrEqual(corpus.maxShare);
      }
      expect(shares.size, `${corpus.name}: عدد المواضع المستعملة`).toBeGreaterThanOrEqual(2);
    }
  });

  it("لا حاوية (درس/حوار/حلقة) كل أسئلتها في الموضع نفسه", () => {
    const problems: string[] = [];
    const check = (label: string, containers: unknown[]) => {
      containers.forEach((container, i) => {
        const positions = collectChoiceQuestions([container]).map((q) => q.correct);
        if (positions.length < 4) return;
        if (new Set(positions).size < 2) {
          problems.push(`${label}[${i}]: ${positions.length} سؤالاً كلها في الموضع ${positions[0]}`);
        }
      });
    };
    check("درس", LESSONS as unknown[]);
    for (const level of ["A1", "A2", "B1", "B2"] as const) check(`حوار ${level}`, getDialoguesByLevel(level) as unknown[]);
    check("حلقة", PODCASTS as unknown[]);
    expect(problems).toEqual([]);
  });
});

describe("موضع الإجابة الصحيحة — الموازنة إعادة ترتيب فقط", () => {
  it("مجموعة الخيارات ونصّ الصحيحة وقران الشرح بخياره مطابقة للنسخة الخام", () => {
    for (const corpus of CORPORA) {
      const before = captureChoices(corpus.raw);
      const after = captureChoices(corpus.balanced);
      expect(after.length, `${corpus.name}: عدد عناصر الاختيار`).toBe(before.length);
      const problems: string[] = [];
      before.forEach((rawItem, i) => {
        const balanced = after[i];
        if (!balanced) return;
        const sameSet =
          [...rawItem.options].sort().join("\u0000") === [...balanced.options].sort().join("\u0000");
        if (!sameSet) problems.push(`${corpus.name}[${i}]: تغيّرت مجموعة الخيارات`);
        if (rawItem.correctText !== balanced.correctText) {
          problems.push(`${corpus.name}[${i}]: تغيّرت الصحيحة «${rawItem.correctText}» ← «${balanced.correctText}»`);
        }
        for (const [option, explanation] of Object.entries(rawItem.correctText ? rawItem.explanationByOption : rawItem.explanationByOption)) {
          if (balanced.explanationByOption[option] !== explanation) {
            problems.push(`${corpus.name}[${i}]: انفصل شرح الخيار «${option}»`);
          }
        }
      });
      expect(problems, `${corpus.name}: ${problems.length} انحرافاً`).toEqual([]);
    }
  });

  it("الموازنة غيّرت المواضع فعلاً (لا تحويل بلا أثر)", () => {
    const before = collectChoiceQuestions(RAW_LESSONS).map((q) => q.correct);
    const after = collectChoiceQuestions(LESSONS).map((q) => q.correct);
    const moved = after.filter((pos, i) => pos !== before[i]).length;
    expect(moved, "عدد الأسئلة التي تغيّر موضعها").toBeGreaterThan(600);
  });
});

describe("موضع الإجابة الصحيحة — النسخ الخام للتدقيق وحده", () => {
  /**
   * على منوال حارس البنك: النسخة الخام مُصدَّرة للحرّاس (لأن أي قياس سطحي على
   * النسخة الموزّعة يقيس إعادة الترتيب لا ما كُتب)، لكن **لا مكوّن إنتاجي
   * يستهلكها** — وإلا عاد المتعلم إلى الخيار الأول دائماً.
   */
  /** أسماء النسخ الخام المُصدَّرة للتدقيق وحده */
  const RAW_NAMES = ["RAW_LESSONS", "RAW_PODCASTS"];
  /** الملفات التي تُعرّف الخام أو تُوازن — يُسمح لها وحدها بلمس المصادر غير الموزّنة */
  const BALANCING_FILES = ["src/data/lessons/index.ts", "src/data/podcasts/index.ts", "src/data/dialogues/index.ts"];
  /**
   * حوارات: الخام هو التصدير الأصلي لكل ملف مستوى (`A1_DIALOGUES` من
   * `@/data/dialogues/a1`)، والموازنة في البرميل — فالممنوع على الإنتاج هو
   * استيراد ملف المستوى مباشرةً (البرميل وحده يفعل).
   */
  const RAW_DIALOGUE_IMPORTS = ["@/data/dialogues/a1", "@/data/dialogues/a2", "@/data/dialogues/b1", "@/data/dialogues/b2"];

  const productionFiles = (): string[] => {
    const found: string[] = [];
    const stack = ["src"];
    while (stack.length) {
      const dir = stack.pop() as string;
      for (const entry of fs.readdirSync(path.join(process.cwd(), dir), { withFileTypes: true })) {
        const rel = path.join(dir, entry.name).replace(/\\/g, "/");
        if (entry.isDirectory()) stack.push(rel);
        else if (/\.tsx?$/.test(entry.name) && !/\.test\.tsx?$/.test(entry.name)) found.push(rel);
      }
    }
    return found;
  };

  it("لا ملف إنتاجي يستورد نسخة غير موزّعة", () => {
    const offenders: string[] = [];
    for (const rel of productionFiles()) {
      if (BALANCING_FILES.includes(rel)) continue;
      const body = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
      for (const name of RAW_NAMES) if (body.includes(name)) offenders.push(`${rel} ← ${name}`);
      for (const spec of RAW_DIALOGUE_IMPORTS) {
        if (body.includes(`from "${spec}"`)) offenders.push(`${rel} ← ${spec} (خام غير موزّن)`);
      }
    }
    expect(offenders, `ملفات إنتاجية تستهلك النسخ الخام: ${offenders.join(" · ")}`).toEqual([]);
  });

  it("الموازنة مطبَّقة فعلاً عند حدود التصدير الثلاثة (لا التفاف على التحويل)", () => {
    for (const rel of BALANCING_FILES) {
      const body = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
      expect(body, `${rel}: لا يستدعي balanceChoiceTree`).toContain("balanceChoiceTree(");
    }
  });
});
