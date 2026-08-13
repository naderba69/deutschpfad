#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════
 *  lessons-inventory.mjs — الجرد التفصيلي لكل درس (45 درساً)
 *  يحمّل ملفات الدروس كمترجم TypeScript، ويطبع لكل درس: مكوناته العشرة،
 *  عدد الكتل النظرية، المشاهد، التمارين (بأنواعها)، البطاقات، إلخ —
 *  مع أعلام الجودة (نقص مكوّن، ثراء نظري ضعيف، حجم منخفض).
 *
 *  التشغيل:  node scripts/lessons-inventory.mjs
 *  — دليل مرجعي دائم: أي نقص مستقبلي في أي درس يظهر فوراً.
 * ═══════════════════════════════════════════════════════════════════════
 */
import { readFileSync, readdirSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const TMP = mkdtempSync(join(tmpdir(), "linv-"));

/* ── تحميل كل الدروس ككائنات حقيقية ── */
function loadLesson(path) {
  const src = readFileSync(path, "utf8");
  const js = ts
    .transpileModule(src, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    })
    .outputText.replace(/^import .*$/gm, "");
  const tmp = join(TMP, path.split("/").pop().replace(".ts", ".cjs"));
  writeFileSync(tmp, js);
  const mod = require(tmp);
  return Object.values(mod).find((v) => v && typeof v === "object" && v.id && v.lernziele);
}

const LESSONS = [];
for (const level of ["a1", "a2", "b1", "b2"]) {
  for (const f of readdirSync(join(ROOT, "src/data/lessons", level))) {
    if (!f.endsWith(".ts")) continue;
    const L = loadLesson(join(ROOT, "src/data/lessons", level, f));
    if (L) LESSONS.push(L);
  }
}
LESSONS.sort((a, b) => a.id.localeCompare(b.id));

const byType = (arr = []) =>
  arr.reduce((m, x) => ((m[x.type] = (m[x.type] || 0) + 1), m), {});

function flags(L) {
  const f = [];
  if (!L.review?.length) f.push("لا مراجعة تراكمية");
  if ((L.theory?.length ?? 0) < 2 && L.level !== "A1") f.push("كتلة نظرية واحدة فقط");
  if ((L.listening?.items?.length ?? 0) < 2) f.push("مشهد استماع واحد فقط");
  if ((L.practiceBank?.length ?? 0) < 8) f.push("بنك تمارين صغير");
  if ((L.flashcards?.length ?? 0) < 6) f.push("بطاقات قليلة");
  return f.length ? f.join("؛ ") : "—";
}

console.log("════════════════════════════════════════════════════════════════");
console.log("  جرد الدروس التفصيلي — DeutschPfad (A1→B2) — 45 درساً");
console.log("════════════════════════════════════════════════════════════════\n");
for (const level of ["a1", "a2", "b1", "b2"]) {
  const list = LESSONS.filter((l) => l.level.toLowerCase() === level);
  console.log(`── مستوى ${level.toUpperCase()} (${list.length} درساً) ──`);
  for (const L of list) {
    const t = byType(L.practiceBank);
    const tS = Object.entries(t).map(([k, v]) => `${k}:${v}`).join(",") || "—";
    console.log(
      `  ${L.id} | ${L.titleDe} (${L.titleAr}) | ⏱${L.duration}د\n` +
        `      نظرية:${L.theory?.length ?? 0} | استماع:${L.listening?.items?.length ?? 0}مشهد/${L.listening?.questions?.length ?? 0}سؤال | نطق:${L.pronunciation?.items?.length ?? 0} | كتابة:${L.writing?.length ?? 0} | تمارين:${L.practiceBank?.length ?? 0} (${tS}) | أخطاء:${L.fehlerUndTipps?.mistakes?.length ?? 0} | بطاقات:${L.flashcards?.length ?? 0} | مراجعة:${L.review?.length ?? 0}\n` +
        `      🚩 ${flags(L)}`
    );
  }
  console.log("");
}
console.log("────────────────────────────────────────────────────────────────");
console.log("  الملخص البنيوي:");
const totals = { a1: 0, a2: 0, b1: 0, b2: 0 };
for (const L of LESSONS) {
  const k = L.level.toLowerCase();
  totals[k]++;
}
console.log(`  A1: ${totals.a1} درساً | A2: ${totals.a2} | B1: ${totals.b1} | B2: ${totals.b2} | الإجمالي: ${LESSONS.length}`);
console.log("  🚩 = ملاحظة جودة بنيوية (لا تعطّل، لكنها دليل للمراجعة)");
console.log("════════════════════════════════════════════════════════════════\n");
