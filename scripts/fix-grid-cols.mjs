/* إصلاح نظامي: كل `grid ... sm/md/lg:grid-cols` بلا أساس جوال → أضف grid-cols-1
   السبب: `grid` وحدها في Tailwind = display:grid بأعمدة ضمنية auto تتمدد إلى
   max-content فتتجاوز الشاشة على الجوال. */
import fs from "fs";
import path from "path";

const ROOT = "/home/user/deutschpfad/src";

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".venv"].includes(entry.name)) continue;
      walk(p, acc);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      acc.push(p);
    }
  }
  return acc;
}

const files = walk(ROOT);
let totalChanges = 0;
const changed = [];

// إصلاح داخل className="..." و className={`...`} — يشمل متعدد الأسطر
const spanRe = /className="([\s\S]*?)"|className=\{`([\s\S]*?)`\}/g;

const bareGridRe = /(^|\s)grid(?=\s|$)/;          // token `grid` (ليس lg:grid)
const respColsRe = /(sm|md|lg):grid-cols/;
const bareColsRe = /(^|\s)grid-cols/;

function fix(cls) {
  // عيّن إذا كانت سلسلة داخل backtick أو quote
  if (bareGridRe.test(cls) && respColsRe.test(cls) && !bareColsRe.test(cls)) {
    return cls.replace(bareGridRe, "$1grid grid-cols-1");
  }
  return cls;
}

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  let count = 0;
  const out = src.replace(spanRe, (m, q1, q2) => {
    if (q1 !== undefined) {
      const fixed = fix(q1);
      if (fixed !== q1) { count++; return `className="${fixed}"`; }
      return m;
    }
    if (q2 !== undefined) {
      const fixed = fix(q2);
      if (fixed !== q2) { count++; return `className={\`${fixed}\`}`; }
      return m;
    }
    return m;
  });
  if (count > 0) {
    fs.writeFileSync(file, out);
    totalChanges += count;
    changed.push(`${path.relative(ROOT, file)}: ${count}`);
  }
}

console.log(`=== تم إصلاح ${totalChanges} شبكة في ${changed.length} ملف ===`);
for (const c of changed) console.log("  ", c);
