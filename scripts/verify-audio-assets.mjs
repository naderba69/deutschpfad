#!/usr/bin/env node
/**
 * verify-audio-assets.mjs — التحقق من سلامة أصول الصوت في public/audio
 * 1) كل سطر حوار له ملف mp3 مطابق للنمط /audio/dialogues-{level}/{id}-{step}.mp3
 * 2) كل ملف صوت امتحان A1 المذكور في goethe-a1-exam.tsx موجود
 * 3) ملفات mp3 يتيمة (لا يقابلها حوار أو قائمة امتحان) تُبلَّغ
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO = join(ROOT, "public", "audio");
const missing = [];
const orphans = [];
const referenced = new Set();

// ── 1) الحوارات ──
const LEVELS = ["a1", "a2", "b1", "b2"];
for (const level of LEVELS) {
  const text = readFileSync(join(ROOT, "src/data/dialogues", `${level}.ts`), "utf8");
  // تقسيم إلى كتل حوار عند كل id:
  const blocks = text.split(/\n  \{\n    id: "/).slice(1);
  for (const block of blocks) {
    const id = block.split('"')[0];
    const turnsMatch = block.match(/turns: \[([\s\S]*?)\n    \],/);
    if (!turnsMatch) continue;
    const turns = (turnsMatch[1].match(/\{ speaker:/g) || []).length;
    for (let step = 1; step <= turns; step++) {
      const rel = `dialogues-${level}/${id}-${step}.mp3`;
      referenced.add(rel);
      if (!existsSync(join(AUDIO, rel))) missing.push(rel);
    }
  }
}

// ── 2) امتحانات A1/A2/B1 (قائمة AUDIO_FILES مشتركة، قاعدة مختلفة لكل مستوى) ──
const examText = readFileSync(join(ROOT, "src/components/tests/goethe-a1-exam.tsx"), "utf8");
const audioFilesMatch = examText.match(/const AUDIO_FILES[\s\S]*?};/);
if (audioFilesMatch) {
  const names = [...audioFilesMatch[0].matchAll(/"([a-z0-9-]+\.mp3)"/g)].map((m) => m[1]);
  for (const level of ["a1", "a2", "b1"]) {
    for (const name of names) {
      const rel = `exam-${level}/${name}`;
      referenced.add(rel);
      if (!existsSync(join(AUDIO, rel))) missing.push(rel);
    }
  }
}

// ── 2ب) تحدث الامتحانات: t{teil}-{n}.mp3 وm{teil}-{n}.mp3 ──
for (const level of ["a1", "a2", "b1"]) {
  const text = readFileSync(join(ROOT, "src/data/exams", `${level}-sprechen.ts`), "utf8");
  const parts = text.split(/\n  \{\n    teil: /).slice(1);
  for (const part of parts) {
    const teil = part.split(",")[0];
    const turnsMatch = part.match(/turns: \[([\s\S]*?)\n    \],/);
    if (!turnsMatch) continue;
    const turns = (turnsMatch[1].match(/partnerDe:/g) || []).length;
    for (let n = 1; n <= turns; n++) {
      for (const prefix of ["t", "m"]) {
        const rel = `speaking-${level}/${prefix}${teil}-${n}.mp3`;
        referenced.add(rel);
        if (!existsSync(join(AUDIO, rel))) missing.push(rel);
      }
    }
  }
}

// ── 3) اليتيمة ──
function walk(dir, prefix = "") {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walk(join(dir, entry.name), rel);
    else if (entry.name.endsWith(".mp3") && !referenced.has(rel)) orphans.push(rel);
  }
}
walk(AUDIO);

console.log(`مرجعية: ${referenced.size} ملفاً`);
console.log(`مفقودة: ${missing.length}`);
for (const m of missing) console.log(`  ✗ ${m}`);
console.log(`يتيمة: ${orphans.length}`);
for (const o of orphans) console.log(`  ? ${o}`);
if (missing.length > 0) process.exit(1);
