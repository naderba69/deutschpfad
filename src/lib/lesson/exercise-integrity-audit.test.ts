import {mkdtempSync, rmSync, writeFileSync} from "node:fs";
import {tmpdir} from "node:os";
import {join, resolve} from "node:path";
import {spawnSync} from "node:child_process";
import {describe, expect, it} from "vitest";

const script = resolve(process.cwd(), "scripts/exercise-integrity-audit.mjs");

function runAudit(source: string) {
  const root = mkdtempSync(join(tmpdir(), "deutschpfad-exercise-audit-"));
  try {
    writeFileSync(join(root, "lesson.ts"), source, "utf8");
    return spawnSync(process.execPath, [script, "--root", root], {encoding: "utf8"});
  } finally {
    rmSync(root, {recursive: true, force: true});
  }
}

describe("exercise integrity audit script", () => {
  it("accepts a valid MCQ and an intentional empty-string answer", () => {
    const result = runAudit(`
      const items = [
        { type: "multiple-choice", options: ["ja", "nein"], correctIndex: 0, optionExplanations: [undefined, "Nein."] },
        { type: "fill-blank", template: "Ich kann ___ schwimmen.", blanks: [{correct: "", options: ["", "zu"]}] }
      ];
    `);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("No structural exercise-integrity problems found.");
  });

  it("rejects an MCQ answer index outside the option array", () => {
    const result = runAudit(`const q = {type: "multiple-choice", options: ["a", "b"], correctIndex: 2};`);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("outside the options array");
  });

  it("rejects duplicate choices and mismatched option explanations", () => {
    const result = runAudit(`const q = {type: "multiple-choice", options: ["same", "same"], correctIndex: 0, optionExplanations: ["one"]};`);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("duplicate MCQ option");
    expect(result.stderr).toContain("optionExplanations length");
  });

  it("checks sentence-gap references and zuordnung answer mappings", () => {
    const valid = runAudit(`
      const exercises = [
        { type: "sentence-gap", textWithGaps: "{0}", sentenceBank: [{id: "s1", de: "Satz."}], gapOrder: ["s1"] },
        { type: "zuordnung", categories: [{id: "c1", de: "A"}], items: [{id: "i1", de: "B"}], correctMap: {i1: "c1"} }
      ];
    `);
    expect(valid.status).toBe(0);

    const invalid = runAudit(`
      const exercise = { type: "zuordnung", categories: [{id: "c1", de: "A"}], items: [{id: "i1", de: "B"}], correctMap: {i1: "missing"} };
    `);
    expect(invalid.status).toBe(1);
    expect(invalid.stderr).toContain("unknown category");
  });

  it("rejects a fill-blank whose ___ markers do not match its blanks", () => {
    const result = runAudit(`
      const q = {type: "fill-blank", template: "Ich ___ und ___ gern.", blanks: [{correct: "esse", options: ["esse"]}]};
    `);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("2 '___' marker(s) but 1 blank(s)");
  });

  it("rejects MCQ options that are not literal strings (cannot be checked for duplicates)", () => {
    const result = runAudit(`
      const q = {type: "multiple-choice", options: ["a", \`b\`, prefix + "c"], correctIndex: 0};
    `);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("not literal strings");
  });

  it("audits mediation tasks: needs taskAr, keyPointsAr and a source text", () => {
    const valid = runAudit(`
      const t = {type: "summarize-de-to-ar", titleAr: "عنوان", sourceDe: "Lena kommt aus Berlin.", taskAr: "انقل المعلومات.", keyPointsAr: ["برلين"]};
    `);
    expect(valid.status).toBe(0);

    const broken = runAudit(`
      const t = {type: "merge-info", titleAr: "عنوان", taskAr: "لخّص.", keyPointsAr: []};
    `);
    expect(broken.status).toBe(1);
    expect(broken.stderr).toContain("keyPointsAr must not be empty");
    expect(broken.stderr).toContain("has no source text");
  });

  it("reports an unknown type value instead of silently skipping it", () => {
    const result = runAudit(`const x = {type: "mystery-task", prompt: "?"};`);
    expect(result.status).toBe(0);
    expect(result.stderr).toContain("UNCLASSIFIED");
    expect(result.stderr).toContain("mystery-task: 1");
  });

  it("does not report known non-exercise event and form types", () => {
    const result = runAudit(`const e = {type: "exercise-result", ts: 1}; const f = {type: "select", options: ["a"]};`);
    expect(result.status).toBe(0);
    expect(result.stderr).not.toContain("UNCLASSIFIED");
  });

  it("the real repository data passes with the default root", () => {
    const result = spawnSync(process.execPath, [script], {encoding: "utf8", cwd: process.cwd()});
    expect(result.stderr).not.toContain("structural problem");
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("No structural exercise-integrity problems found.");
  });
});
