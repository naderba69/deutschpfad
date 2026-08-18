/**
 * تدقيق عميق لكل الدروس — node scripts/deep-lesson-audit.mjs
 * يفحص بنية كل درس: أسئلة MCQ، خيارات، حقول مطلوبة، أخطاء ألمانية شائعة.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../src/data/lessons", import.meta.url).pathname;
let issues = 0;
const warn = (msg) => { issues++; console.log("⚠️", msg); };

// أنماط أخطاء ألمانية شائعة (جمل حقيقية في النصوص التعليمية)
const GERMAN_PATTERNS = [
  [/die Leute ist|die Menschen ist/g, "جمع + فعل مفرد (die Leute ist)"],
  [/ein gute Idee|ein schöne Stadt|ein große Familie/g, "ein + صفة مؤنثة (يجب eine)"],
  [/viele Jahren/g, "viele Jahren (يجب viele Jahre)"],
  [/ich bin gehen|du bist gehen/g, "bin + gehen (يجب ich bin gegangen)"],
  [/er hat gefahren/g, "hat gefahren (يجب ist gefahren)"],
  [/das ist gut Idee/g, "gut Idee (يجب eine gute Idee)"],
  [/ich heiße bin/g, "heiße bin (تكرار فعلين)"],
];

for (const levelDir of ["a1", "a2", "b1", "b2"]) {
  const dir = join(ROOT, levelDir);
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts"))) {
    const src = readFileSync(join(dir, f), "utf8");
    const label = `${levelDir}/${f}`;

    // 1) حقول مطلوبة
    for (const field of ["titleDe", "titleAr", "summary", "lernziele", "einfuehrung", "theory", "practiceBank", "miniTest", "listening", "pronunciation", "writing", "flashcards"]) {
      if (!src.includes(`${field}:`)) warn(`${label}: حقل مفقود «${field}»`);
    }

    // 2) أسئلة MCQ بخيارات قليلة
    const mcqBlocks = src.match(/type: "multiple-choice"[\s\S]{0,400}?correctIndex: \d+/g) ?? [];
    for (const b of mcqBlocks) {
      const opts = (b.match(/options: \[[^\]]*\]/)?.[0].match(/"/g) ?? []).length / 2;
      if (opts && opts < 3) warn(`${label}: MCQ ب ${opts} خيارات فقط`);
    }

    // 3) أخطاء ألمانية
    for (const [re, desc] of GERMAN_PATTERNS) {
      const m = src.match(re);
      if (m) warn(`${label}: ${desc} ← "${m[0].slice(0, 50)}"`);
    }

    // 4) صفر نظرية أو صفر تمارين
    const theoryCount = (src.match(/id: "t\d+"/g) ?? []).length;
    if (theoryCount === 0) warn(`${label}: لا كتل نظرية`);
    if (!src.includes("practiceBank: [")) warn(`${label}: لا بنك تدريبات`);
  }
}

// فحص المراجعة المولّدة: هل كل درس يملك مصدراً سابقاً كافياً؟
const levels = ["a1", "a2", "b1", "b2"];
const orderMap = {};
for (const l of levels) {
  for (const f of readdirSync(join(ROOT, l)).filter((x) => x.endsWith(".ts"))) {
    const src = readFileSync(join(ROOT, l, f), "utf8");
    const id = src.match(/id: "([a-z0-9-]+)"/)?.[1];
    if (id) orderMap[id] = { level: l.toUpperCase(), order: parseInt(src.match(/order: (\d+)/)?.[1] ?? "0") };
  }
}
console.log(`\n── فحص المصادر السابقة للمراجعة ──`);
for (const l of levels) {
  for (const f of readdirSync(join(ROOT, l)).filter((x) => x.endsWith(".ts"))) {
    const src = readFileSync(join(ROOT, l, f), "utf8");
    const id = src.match(/id: "([a-z0-9-]+)"/)?.[1];
    if (!id) continue;
    const levelIdx = levels.indexOf(l);
    const order = parseInt(src.match(/order: (\d+)/)?.[1] ?? "0");
    const hasPrev = Object.values(orderMap).some((v) =>
      v.level === l.toUpperCase() ? v.order < order : levels.indexOf(v.level.toLowerCase()) < levelIdx,
    );
    if (!hasPrev && !src.includes("review: [")) {
      warn(`${l}/${f}: لا دروس سابقة للمراجعة المولّدة (قد تكون أول درس) — مقبول`);
    }
  }
}

console.log(`\n═══════════════════════════════════`);
console.log(`النتيجة: ${issues} ملاحظة`);
