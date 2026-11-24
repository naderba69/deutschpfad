/**
 * حارس إعداد النشر: Node 22.6+، المنفذ PORT، الإخراج المستقل خلف DOCKER_BUILD،
 * واستبعاد ملفات التطوير والأسرار من صورة Docker.
 */
import fs from "node:fs";
import path from "node:path";

import {describe, expect, it} from "vitest";

const root = process.cwd();
const read = (p: string) => fs.readFileSync(path.join(root, p), "utf8");

describe("إعداد Node", () => {
  it("engines يطلب Node 22.6 أو أحدث", () => {
    const pkg = JSON.parse(read("package.json"));
    expect(pkg.engines.node).toBe(">=22.6.0");
  });
  it(".nvmrc على 22", () => {
    expect(read(".nvmrc").trim()).toMatch(/^22/);
  });
});

describe("المنفذ", () => {
  it("start يحترم PORT مع 3000 افتراضياً", () => {
    const pkg = JSON.parse(read("package.json"));
    expect(pkg.scripts.start).toContain("${PORT:-3000}");
    expect(pkg.scripts.start).not.toMatch(/-p 3000\b/);
  });
});

describe("الإخراج المستقل", () => {
  it("مفعّل فقط عند DOCKER_BUILD=1 — بناء Vercel لا يتغير", () => {
    const cfg = read("next.config.mjs");
    expect(cfg).toContain('process.env.DOCKER_BUILD === "1"');
    expect(cfg).toContain('output: "standalone"');
  });
});

describe("صورة Docker", () => {
  const docker = read("Dockerfile");
  it("تستعمل Node 22 في كل المراحل", () => {
    const froms = docker.match(/^FROM node:(\S+)/gm) ?? [];
    expect(froms.length).toBe(3);
    for (const f of froms) expect(f).toMatch(/node:22/);
  });
  it("تعمل بمستخدم غير جذر", () => {
    expect(docker).toMatch(/^USER app$/m);
    expect(docker).not.toMatch(/^USER root$/m);
  });
  it("تستعمل server.js المستقل والمنفذ PORT", () => {
    expect(docker).toContain('CMD ["node", "server.js"]');
    expect(docker).toMatch(/PORT=3000/);
  });
  it("لا تنسخ الأسرار أو ملفات التطوير", () => {
    const ignore = read(".dockerignore").split("\n").map((l) => l.trim());
    for (const must of [".env", ".env.*", ".git", "node_modules", "e2e", "docs"]) {
      expect(ignore).toContain(must);
    }
    // .env.example مستثنى صراحة لأنه قالب بلا أسرار
    expect(ignore).toContain("!.env.example");
  });
});
