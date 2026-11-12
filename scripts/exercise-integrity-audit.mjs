#!/usr/bin/env node
/**
 * Structural audit of lesson exercises using the TypeScript AST.
 * Checks required fields and answer-index bounds without pretending to judge
 * whether the German, translation, distractors, or pedagogical level are good.
 * Usage: node scripts/exercise-integrity-audit.mjs
 */
import {readdirSync, readFileSync} from "node:fs";
import {join, relative} from "node:path";
import ts from "typescript";

const rootArg = process.argv.indexOf("--root");
const ROOT = rootArg >= 0 && process.argv[rootArg + 1]
  ? process.argv[rootArg + 1]
  : join(process.cwd(), "src/data/lessons");
const problems = [];
const counts = {files: 0, exercises: 0, mcq: 0};

function collectFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(path));
    else if (entry.isFile() && entry.name.endsWith(".ts") && !entry.name.endsWith(".test.ts")) files.push(path);
  }
  return files;
}

function propertyName(node) {
  return ts.isIdentifier(node.name) || ts.isStringLiteral(node.name) ? node.name.text : null;
}

function getProperty(object, name) {
  return object.properties.find((property) => ts.isPropertyAssignment(property) && propertyName(property) === name);
}

function stringValue(node) {
  return node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) ? node.text : null;
}

function arrayValues(node) {
  return node && ts.isArrayLiteralExpression(node) ? node.elements : null;
}

function objectString(object, name) {
  return stringValue(getProperty(object, name)?.initializer);
}

function objectPropertiesFromExpression(node) {
  return node && ts.isObjectLiteralExpression(node)
    ? node.properties.filter(ts.isPropertyAssignment)
    : [];
}

function visit(node, filename) {
  if (ts.isObjectLiteralExpression(node)) {
    const type = stringValue(getProperty(node, "type")?.initializer);
    if (type && ["multiple-choice", "word-ordering", "fill-blank", "matching", "error-correction", "transformation", "dictation", "true-false", "sentence-gap", "zuordnung"].includes(type)) {
      counts.exercises++;
      const at = `${relative(process.cwd(), filename)}:${node.getStart()}`;
      const required = {
        "multiple-choice": ["options", "correctIndex"],
        "word-ordering": ["tokens", "correctSentence"],
        "fill-blank": ["template", "blanks"],
        matching: ["pairs"],
        "error-correction": ["wrongSentence", "options"],
        transformation: ["prompt", "acceptedAnswers"],
        dictation: ["audioText"],
        "true-false": ["textDe", "statements"],
        "sentence-gap": ["textWithGaps", "sentenceBank", "gapOrder"],
        zuordnung: ["categories", "items", "correctMap"],
      }[type] ?? [];
      for (const field of required) {
        if (!getProperty(node, field)) problems.push(`${at}: ${type} missing required field '${field}'`);
      }

      if (type === "multiple-choice") {
        counts.mcq++;
        const options = arrayValues(getProperty(node, "options")?.initializer);
        const indexNode = getProperty(node, "correctIndex")?.initializer;
        const index = indexNode && ts.isNumericLiteral(indexNode) ? Number(indexNode.text) : NaN;
        if (!options || options.length < 2) problems.push(`${at}: MCQ must have at least two literal options`);
        if (!Number.isInteger(index) || !options || index < 0 || index >= options.length) {
          problems.push(`${at}: correctIndex '${indexNode?.getText() ?? "missing"}' is outside the options array`);
        }
        if (options) {
          const texts = options.map(stringValue);
          const duplicate = texts.find((text, i) => text !== null && texts.indexOf(text) !== i);
          if (duplicate !== undefined) problems.push(`${at}: duplicate MCQ option '${duplicate}'`);
          const explanations = arrayValues(getProperty(node, "optionExplanations")?.initializer);
          if (explanations && explanations.length !== options.length) {
            problems.push(`${at}: optionExplanations length (${explanations.length}) does not match options (${options.length})`);
          }
        }
      }

      if (type === "fill-blank") {
        const blanks = arrayValues(getProperty(node, "blanks")?.initializer) ?? [];
        blanks.forEach((blank, index) => {
          const correct = objectString(blank, "correct");
          const choices = arrayValues(getProperty(blank, "options")?.initializer);
          if (correct === null) problems.push(`${at}: blank ${index + 1} has no literal correct answer`);
          if (choices && !choices.some((choice) => stringValue(choice) === correct)) {
            problems.push(`${at}: blank ${index + 1} correct answer is absent from its options`);
          }
        });
      }

      if (type === "error-correction") {
        const correctWord = objectString(node, "correctWord");
        const wrongWord = objectString(node, "wrongWord");
        const options = arrayValues(getProperty(node, "options")?.initializer) ?? [];
        if (getProperty(node, "isAlreadyCorrect")?.initializer?.kind !== ts.SyntaxKind.TrueKeyword
          && correctWord && !options.some((option) => stringValue(option) === correctWord)) {
          problems.push(`${at}: correctWord is absent from error-correction options`);
        }
        if (getProperty(node, "isAlreadyCorrect")?.initializer?.kind !== ts.SyntaxKind.TrueKeyword
          && wrongWord && objectString(node, "wrongSentence") && !objectString(node, "wrongSentence").includes(wrongWord)) {
          problems.push(`${at}: wrongWord does not occur in wrongSentence`);
        }
      }

      if (type === "true-false") {
        const statements = arrayValues(getProperty(node, "statements")?.initializer) ?? [];
        if (!statements.length) problems.push(`${at}: true-false requires at least one statement`);
        const statementIds = statements.map((statement) => objectString(statement, "id"));
        if (statementIds.some((id) => !id) || new Set(statementIds).size !== statementIds.length) {
          problems.push(`${at}: true-false statement ids must be present and unique`);
        }
        statements.forEach((statement, index) => {
          const isTrue = getProperty(statement, "isTrue")?.initializer;
          if (isTrue?.kind !== ts.SyntaxKind.TrueKeyword && isTrue?.kind !== ts.SyntaxKind.FalseKeyword) {
            problems.push(`${at}: statement ${index + 1} has no literal boolean answer`);
          }
          if (!objectString(statement, "de")) problems.push(`${at}: statement ${index + 1} has no German text`);
        });
      }

      if (type === "sentence-gap") {
        const bank = arrayValues(getProperty(node, "sentenceBank")?.initializer) ?? [];
        const order = arrayValues(getProperty(node, "gapOrder")?.initializer) ?? [];
        const ids = bank.map((item) => objectString(item, "id"));
        if (ids.some((id) => !id) || new Set(ids).size !== ids.length) {
          problems.push(`${at}: sentenceBank ids must be present and unique`);
        }
        for (const itemId of order.map(stringValue)) {
          if (!itemId || !ids.includes(itemId)) problems.push(`${at}: gapOrder references missing sentence id '${itemId ?? ""}'`);
        }
      }

      if (type === "zuordnung") {
        const categories = arrayValues(getProperty(node, "categories")?.initializer) ?? [];
        const items = arrayValues(getProperty(node, "items")?.initializer) ?? [];
        const categoryIds = categories.map((item) => objectString(item, "id"));
        const itemIds = items.map((item) => objectString(item, "id"));
        if (categoryIds.some((id) => !id) || new Set(categoryIds).size !== categoryIds.length) {
          problems.push(`${at}: zuordnung category ids must be present and unique`);
        }
        if (itemIds.some((id) => !id) || new Set(itemIds).size !== itemIds.length) {
          problems.push(`${at}: zuordnung item ids must be present and unique`);
        }
        const map = getProperty(node, "correctMap")?.initializer;
        const mapping = new Map(objectPropertiesFromExpression(map).map((property) => [propertyName(property), stringValue(property.initializer)]));
        for (const itemId of itemIds) {
          if (itemId && !mapping.has(itemId)) problems.push(`${at}: correctMap has no answer for item '${itemId}'`);
        }
        for (const [itemId, categoryId] of mapping) {
          if (!itemIds.includes(itemId)) problems.push(`${at}: correctMap references unknown item '${itemId}'`);
          if (!categoryId || !categoryIds.includes(categoryId)) problems.push(`${at}: correctMap for '${itemId}' references unknown category '${categoryId ?? ""}'`);
        }
      }

      if (["fill-blank", "transformation"].includes(type)) {
        const field = type === "fill-blank" ? "blanks" : "acceptedAnswers";
        const values = arrayValues(getProperty(node, field)?.initializer);
        if (!values || values.length === 0) problems.push(`${at}: ${type} requires a non-empty '${field}' array`);
      }
      if (type === "matching") {
        const values = arrayValues(getProperty(node, "pairs")?.initializer);
        if (!values || values.length === 0) problems.push(`${at}: matching requires a non-empty pairs array`);
      }
    }
  }
  ts.forEachChild(node, (child) => visit(child, filename));
}

for (const filename of collectFiles(ROOT)) {
  counts.files++;
  const source = ts.createSourceFile(filename, readFileSync(filename, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  visit(source, filename);
}

console.log(`Scanned ${counts.files} lesson data files; found ${counts.exercises} exercise objects (${counts.mcq} multiple-choice).`);
if (problems.length) {
  console.error(`\n${problems.length} structural problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log("No structural exercise-integrity problems found.");
  console.log("This does not assess linguistic correctness, distractor quality, or CEFR alignment.");
}
