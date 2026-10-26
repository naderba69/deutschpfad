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
});
