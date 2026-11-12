#!/usr/bin/env node
import {execFileSync} from "node:child_process";
import {mkdirSync, readFileSync, statSync, writeFileSync} from "node:fs";
import path from "node:path";

const root = process.cwd();
const gitList = (args) => execFileSync("git", args, {cwd: root, encoding: "utf8"}).split("\0").filter(Boolean);
const tracked = gitList(["ls-files", "-z"]);
const untracked = gitList(["ls-files", "--others", "--exclude-standard", "-z"]);
const modified = new Set(gitList(["diff", "--name-only", "-z"]));
const staged = new Set(gitList(["diff", "--cached", "--name-only", "-z"]));
const files = [...new Set([...tracked, ...untracked])].sort((a, b) => a.localeCompare(b, "en"));

function category(file) {
  const ext = path.extname(file).toLowerCase();
  if (file.startsWith("src/app/")) return "app-route";
  if (file.startsWith("src/components/")) return "ui-component";
  if (file.startsWith("src/data/")) return "learning-content-data";
  if (file.startsWith("src/lib/")) return "shared-library";
  if (file.startsWith("src/types/")) return "type-contract";
  if (file.startsWith("e2e/")) return "browser-e2e";
  if (file.startsWith("public/audio/") || ext === ".mp3") return "audio-asset";
  if (file.startsWith("public/")) return "public-asset";
  if (file.startsWith("scripts/")) return "maintenance-script";
  if (file.startsWith("docs/")) return "project-document";
  if (file.startsWith(".github/")) return "ci-configuration";
  if ([".yml", ".yaml"].includes(ext)) return "workflow-configuration";
  if ([".json", ".mjs", ".ts", ".tsx", ".js"].includes(ext)) return "project-configuration";
  if ([".md", ".mdx", ".txt"].includes(ext)) return "documentation";
  return "other";
}

function auditStatus(file, ext) {
  if (ext === ".mp3") return "inventoried; listening review required";
  if ([".png", ".jpg", ".jpeg", ".svg", ".webp", ".woff2", ".ico"].includes(ext)) {
    return "inventoried; visual/font usage review required";
  }
  if (file.startsWith("e2e/")) return "test source inventoried; execution/result review required";
  if (file.startsWith("docs/")) return "inventoried; factual currency review required";
  return "inventory only; file-level source review pending";
}

const csv = (value) => `"${String(value).replaceAll('"', '""')}"`;
const rows = [["path", "git_state", "category", "extension", "bytes", "lines", "audit_status"]];
for (const file of files) {
  let state = "tracked-clean";
  if (untracked.includes(file)) state = "untracked";
  else if (modified.has(file) && staged.has(file)) state = "staged-and-modified";
  else if (modified.has(file)) state = "modified";
  else if (staged.has(file)) state = "staged";
  const ext = path.extname(file).toLowerCase() || "[none]";
  let bytes = 0;
  let lines = "";
  try {
    const filePath = path.join(root, file);
    bytes = statSync(filePath).size;
    if ([".ts", ".tsx", ".js", ".mjs", ".cjs", ".json", ".md", ".mdx", ".css", ".html", ".yml", ".yaml", ".py", ".sh", ".txt", ".example"].includes(ext)) {
      const text = readFileSync(filePath, "utf8");
      lines = text.length === 0 ? 0 : text.split(/\r\n|\n|\r/).length;
    }
  } catch {
    state = "missing-from-working-tree";
  }
  rows.push([file, state, category(file), ext, bytes, lines, auditStatus(file, ext)]);
}

const destination = path.join(root, "docs/PROJECT-FILE-INVENTORY.csv");
mkdirSync(path.dirname(destination), {recursive: true});
writeFileSync(destination, `${rows.map((row) => row.map(csv).join(",")).join("\n")}\n`);
const counts = files.reduce((all, file) => {
  const key = category(file);
  all[key] = (all[key] ?? 0) + 1;
  return all;
}, {});
console.log(`جرد ${files.length} ملفاً (tracked=${tracked.length}، untracked=${untracked.length})`);
console.log(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)).map(([name, count]) => `${name}: ${count}`).join("\n"));
console.log(`الملف: ${path.relative(root, destination)}`);
console.log("الجرد لا يعني أن المراجعة اليدوية للملفات قد اكتملت.");
