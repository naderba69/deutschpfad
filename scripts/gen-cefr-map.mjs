/* توليد خريطة المنهج (cefr-map) من الدروس الفعلية — المرحلة 4 (توحيد الحقيقة)
   التشغيل: node scripts/gen-cefr-map.mjs
   الناتج: src/data/curriculum/cefr-map.ts (48 وحدة — وحدة لكل درس فعلي)
   كل وحدة = درس فعلي: نفس id/level/titleDe + بيانات إثرائية حقيقية
   (أهداف من lernziele، نقاط نحوية من theory، وساطة/تفاعل من ملف الدرس). */
import fs from "fs";

/* ── 1) قراءة LESSON_META ── */
function readMeta() {
  const src = fs.readFileSync("src/data/lessons/meta.ts", "utf8");
  const re = /  \{ id: "([^"]+)", unitId: "([^"]+)", level: "([^"]+)", order: (\d+), titleDe: "([^"]+)", titleAr: "([^"]+)", duration: (\d+), summary: "([^"]*)" \}/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) {
    out.push({
      id: m[1], unitId: m[2], level: m[3], order: +m[4],
      titleDe: m[5], titleAr: m[6], duration: +m[7], summary: m[8],
    });
  }
  return out;
}

/* ── 2) بنوك المفردات: unitId → كلمات de ── */
function loadVocabBanks() {
  const banks = {};
  for (const lvl of ["a1", "a2", "b1", "b2"]) {
    try {
      const src = fs.readFileSync(`src/data/vocabulary/${lvl}.ts`, "utf8");
      const blockRe = /"([a-z]\d-\d\d)":\s*\[([\s\S]*?)\n  \],/g;
      let m;
      while ((m = blockRe.exec(src))) {
        banks[m[1]] = [...m[2].matchAll(/de: "([^"]+)"/g)].map((x) => x[1]);
      }
    } catch { /* لا بنك */ }
  }
  return banks;
}

/* ── 3) بيانات درس: أهداف + نظرية + وساطة + تفاعل ── */
function readLesson(id, lvl) {
  try {
    const src = fs.readFileSync(`src/data/lessons/${lvl.toLowerCase()}/${id}.ts`, "utf8");
    const lernziele = [...src.matchAll(/\{ id: "[^"]+", de: "([^"]+)", ar: "([^"]+)" \}/g)]
      .map((m) => ({ de: m[1], ar: m[2] }));
    const theory = [...src.matchAll(/titleDe: "([^"]+)",\s*\n\s*titleAr: "([^"]+)"/g)]
      .map((m) => ({ de: m[1], ar: m[2] }));
    const mediation = src.match(/taskAr: "([^"]+)"/)?.[1] ?? "";
    const interaction = src.match(/scenarioAr: "([^"]+)"/)?.[1] ?? "";
    return { lernziele, theory, mediation, interaction };
  } catch {
    return { lernziele: [], theory: [], mediation: "", interaction: "" };
  }
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

const GENERIC_FUNCTION = {
  A1: "التواصل في مواقف الحياة اليومية",
  A2: "إدارة مواقف روتينية أوسع",
  B1: "إبداء الرأي المبرر وسرد الأحداث",
  B2: "الحجاج المنظم والنقاش المعقد",
};
const GENERIC_VOCAB = {
  A1: "مفردات الحياة اليومية",
  A2: "مفردات المواقف الروتينية",
  B1: "مفردات النقاش والتقارير",
  B2: "مفردات الموضوعات المجردة والأكاديمية",
};

function hoursFor(level) {
  return { A1: 6, A2: 7, B1: 9, B2: 11 }[level] ?? 7;
}

/* ── 4) بناء كتلة وحدة واحدة ── */
function unitBlock(lesson, level, seq, vocabBanks) {
  const data = readLesson(lesson.id, lesson.level);
  const canDo = (data.lernziele.length >= 4 ? data.lernziele : data.lernziele.slice(0, 3)).slice(0, 4);
  const grammar = data.theory.slice(0, 4);
  const vocab = (vocabBanks[lesson.unitId] ?? []).slice(0, 4);
  const lines = [];
  lines.push(`  {
    id: "${lesson.id}",
    level: "${level}",
    order: ${seq},
    titleDe: "${esc(lesson.titleDe)}",
    titleAr: "${esc(lesson.titleAr)}",
    canDo: [`);
  for (const c of canDo) lines.push(`      { de: "${esc(c.de)}", ar: "${esc(c.ar)}" },`);
  if (canDo.length === 0) lines.push(`      { de: "Ich kann ${esc(lesson.titleDe)}.", ar: "أستطيع أن أتقن ${esc(lesson.titleAr)}." },`);
  lines.push(`    ],
    grammar: [`);
  for (const g of grammar) lines.push(`      { de: "${esc(g.de)}", ar: "${esc(g.ar)}", lessonId: "${lesson.id}" },`);
  if (grammar.length === 0) lines.push(`      { de: "${esc(lesson.titleDe)}", ar: "${esc(lesson.titleAr)}", lessonId: "${lesson.id}" },`);
  lines.push(`    ],
    vocabDomains: [`);
  for (const v of vocab) lines.push(`      "${esc(v)}",`);
  if (vocab.length < 2) {
    lines.push(`      "${esc(lesson.titleAr)}",`);
    lines.push(`      "${GENERIC_VOCAB[level]}",`);
  }
  lines.push(`    ],
    functions: ["${GENERIC_FUNCTION[level]}"${data.mediation ? `,"الوساطة: ${esc(data.mediation)}"` : ""}${data.interaction ? `,"التفاعل: ${esc(data.interaction)}"` : ""}],
    mediationTask: "${esc(data.mediation || `لخّص بالعربية محتوى درس «${lesson.titleAr}» لشخص لا يفهم الألمانية.`)}",
    interactionTask: "${esc(data.interaction || `حوار قصير حول موضوع «${lesson.titleAr}» مع شريك.`)}",
    hours: ${hoursFor(level)},
  },`);
  return lines.join("\n");
}

/* ── 5) التوليد النهائي ── */
const LESSON_META = readMeta();
const VOCAB_BANKS = loadVocabBanks();

const levels = [
  { code: "A1", titleAr: "المبتدئ", subtitleDe: "Grundstufe 1", desc: "التعامل مع مواقف الحياة اليومية الأساسية: التعارف، الطعام، السكن، التسوق، الوقت." },
  { code: "A2", titleAr: "ما قبل المتوسط", subtitleDe: "Grundstufe 2", desc: "مواقف روتينية أوسع: السفر، الصحة، العمل، الخدمات، سرد التجارب." },
  { code: "B1", titleAr: "المتوسط", subtitleDe: "Mittelstufe 1", desc: "التواصل في مواقف العمل والدراسة والسفر، إبداء الرأي المبرر، سرد الأحداث." },
  { code: "B2", titleAr: "المتقدم", subtitleDe: "Mittelstufe 2", desc: "النقاش المعقد، النصوص الأكاديمية، الحجاج المنظم، التواصل بين الثقافات." },
];

let out = `/**
 * ═══════════════════════════════════════════════════════════
 *  خريطة المنهج العلمية — DeutschPfad A1→B2
 *  (المصدر الأكاديمي الوحيد للحقيقة — مبني على CEFR Companion 2020)
 *
 *  ═══ المرحلة 4 (توحيد الحقيقة): أُعيد توليد هذا الملف آلياً من
 *  الدروس الفعلية (LESSON_META + ملفات الدروس) — كل وحدة = درس فعلي.
 *  لا يمكن أن تختلف هذه الخريطة عن الواقع بعد الآن.
 *  أعد التوليد: node scripts/gen-cefr-map.mjs
 * ═══════════════════════════════════════════════════════════
 */

export interface CanDoDescriptor {
  de: string;
  ar: string;
}

export interface GrammarPoint {
  de: string;
  ar: string;
  /** معرّف درس المطابقة */
  lessonId?: string;
}

export interface CurriculumUnit {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  order: number;
  titleDe: string;
  titleAr: string;
  canDo: CanDoDescriptor[];
  grammar: GrammarPoint[];
  vocabDomains: string[];
  functions: string[];
  mediationTask: string;
  interactionTask: string;
  hours: number;
}

export interface CurriculumLevel {
  code: "A1" | "A2" | "B1" | "B2";
  titleAr: string;
  subtitleDe: string;
  description: string;
  estimatedHours: string;
  units: CurriculumUnit[];
}
`;

for (const lvl of levels) {
  const items = LESSON_META.filter((l) => l.level === lvl.code);
  const blocks = items.map((lesson, i) => unitBlock(lesson, lvl.code, i + 1, VOCAB_BANKS)).join("\n");
  out += `/* ═══════════ ${lvl.code} ═══════════ */\nconst ${lvl.code}_UNITS: CurriculumUnit[] = [\n${blocks}\n];\n\n`;
}

out += `/* ═══════════════════════════════════════════════════════════
   المستويات الأربعة — المدد الإرشادية وفق Goethe
   ═══════════════════════════════════════════════════════════ */
export const CURRICULUM: CurriculumLevel[] = [`;
for (const lvl of levels) {
  const hours = lvl.code === "A1" ? "80–200" : lvl.code === "A2" ? "200–350" : lvl.code === "B1" ? "350–650" : "600–800";
  out += `
  {
    code: "${lvl.code}",
    titleAr: "${lvl.titleAr}",
    subtitleDe: "${lvl.subtitleDe}",
    description: "${lvl.desc}",
    estimatedHours: "${hours} ساعة (إرشادي)",
    units: ${lvl.code}_UNITS,
  },`;
}
out += `
];

/** كل الوحدات مفصولة */
export function getAllCurriculumUnits(): CurriculumUnit[] {
  return CURRICULUM.flatMap((l) => l.units);
}

/** إجمالي الساعات الإرشادية المخططة */
export function totalPlannedHours(): number {
  return getAllCurriculumUnits().reduce((s, u) => s + u.hours, 0);
}
`;

fs.writeFileSync("src/data/curriculum/cefr-map.ts", out);
const counts = levels.map((l) => ({ code: l.code, n: LESSON_META.filter((x) => x.level === l.code).length }));
console.log("تم توليد cefr-map.ts:", counts.map((c) => `${c.code}=${c.n}`).join(" · "), `| الإجمالي=${LESSON_META.length}`);
