#!/usr/bin/env node
/**
 * audit-links.mjs — سلامة الروابط الداخلية.
 *
 * يجمع كل `href` من كل مسار في sitemap، ثم يتحقق من كل وجهة داخلية فريدة
 * (موجودة أو مولَّدة) ويتجاهل الأصول الثابتة. يطبع المسارات المعطوبة ومصدرها.
 *
 * الاستخدام: node scripts/audit-links.mjs   (خادم يعمل على 3000)
 * المخرجات: ملخّص على الشاشة + /tmp/audit-links.json
 */
import fs from "node:fs";

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const ASSET = /\.(png|jpe?g|svg|webp|ico|mp3|wav|ogg|json|txt|xml|webmanifest)$/i;

/** يحوّل href إلى مسار داخلي، أو null إن كان خارجياً أو أصلاً ثابتاً */
function norm(href) {
  try {
    const u = new URL(href, BASE);
    if (u.origin !== BASE) return null;
    if (ASSET.test(u.pathname)) return null;
    return u.pathname + (u.search || "");
  } catch {
    return null;
  }
}

const xml = await (await fetch(BASE + "/sitemap.xml")).text();
const ROUTES = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname || "/"))].sort();

const pages = new Map();
const targets = new Map();
let fetched = 0;

for (const route of ROUTES) {
  try {
    const res = await fetch(BASE + route, { redirect: "manual" });
    if (res.status !== 200) {
      pages.set(route, { status: res.status, links: [] });
      continue;
    }
    const html = await res.text();
    const links = [...html.matchAll(/href="([^"]+)"/g)].map((m) => norm(m[1])).filter(Boolean);
    pages.set(route, { status: res.status, links: [...new Set(links)] });
    for (const l of links) {
      const path = l.split("?")[0];
      if (!targets.has(path)) targets.set(path, new Set());
      targets.get(path).add(route);
    }
    fetched++;
    if (fetched % 40 === 0) console.log("pages", fetched);
  } catch (e) {
    pages.set(route, { status: "ERR " + e.message.slice(0, 60), links: [] });
  }
}

const broken = [];
for (const [path, from] of targets) {
  try {
    const res = await fetch(BASE + path, { redirect: "manual" });
    const ok = res.status === 200 || res.status === 204 || res.status === 304;
    if (!ok) broken.push({ path, status: res.status, from: [...from].slice(0, 3) });
  } catch (e) {
    broken.push({ path, status: "ERR " + e.message.slice(0, 40), from: [...from].slice(0, 3) });
  }
}

// 307/308 إعادة توجيه مقصودة (/review → /review/weekly) لا تُعدّ خطأ
const pageErrors = [...pages].filter(([, v]) => v.status !== 200 && v.status !== 307 && v.status !== 308);
console.log(`ROUTES ${pages.size} UNIQUE_LINKS ${targets.size}`);
console.log(`PAGE_ERRORS ${pageErrors.length}`, JSON.stringify(pageErrors.slice(0, 10)));
console.log(`BROKEN ${broken.length}`);
for (const b of broken) console.log(" -", b.status, b.path, "من", b.from.join(", "));
fs.writeFileSync("/tmp/audit-links.json", JSON.stringify({ broken, pageErrors, targets: [...targets.keys()] }, null, 1));
