#!/usr/bin/env node
/**
 * audit-pages.mjs — فحص هيكلي آلي لكل صفحات src/app
 * يستخرج لكل صفحة: الأسطر، وجود metadata، المكونات المستوردة،
 * مؤشرات إتاحة (aria/alt)، نصوص عربية/ألمانية، واستخدام dir/lang.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(ROOT, "src/app");

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name === "page.tsx") out.push(p);
  }
  return out;
}

const pages = walk(APP).sort();
console.log(`عدد الصفحات: ${pages.length}\n`);

for (const p of pages) {
  const text = readFileSync(p, "utf8");
  const rel = relative(ROOT, p);
  const lines = text.split("\n").length;
  const hasMeta = /export const metadata|generateMetadata/.test(text);
  const imports = [...text.matchAll(/from "(@\/[^"]+)"/g)].map((m) => m[1]);
  const clientComp = /"use client"/.test(text);
  const aria = (text.match(/aria-/g) || []).length;
  const alt = (text.match(/alt=/g) || []).length;
  const dirAttr = /dir=|dir:/.test(text);
  const langAttr = /lang=|lang:/.test(text);
  const h1 = (text.match(/<h1/g) || []).length;
  const buttons = (text.match(/<Button|<button/g) || []).length;
  const links = (text.match(/<Link|href=/g) || []).length;
  console.log(`── ${rel} (${lines} سطراً)`);
  console.log(`   metadata: ${hasMeta ? "✓" : "✗ غائب"} | client: ${clientComp ? "نعم" : "لا"} | h1: ${h1} | أزرار: ${buttons} | روابط: ${links}`);
  console.log(`   aria: ${aria} | alt: ${alt} | dir: ${dirAttr ? "✓" : "—"} | lang: ${langAttr ? "✓" : "—"}`);
  console.log(`   imports: ${imports.slice(0, 8).join(", ")}${imports.length > 8 ? ` …(+${imports.length - 8})` : ""}`);
}
