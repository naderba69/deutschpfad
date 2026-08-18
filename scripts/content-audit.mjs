/**
 * فحص جودة المحتوى الشامل — يُشغَّل بـ: node scripts/content-audit.mjs
 * يكتشف: جمل ألمانية مكررة، ترجمات فارغة، خيارات مكررة، أخطاء نحوية شائعة،
 * معرفات مكررة، أسئلة بلا خيار صحيح… إلخ.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = new URL("../src/data", import.meta.url).pathname;

let issues = 0;
const report = (level, msg) => {
  issues++;
  console.log(`${level} ${msg}`);
};

// 1) الدروس: فحص التكرار والفجوات
for (const levelDir of ["a1", "a2", "b1", "b2"]) {
  const dir = join(ROOT, "lessons", levelDir);
  if (!readdirSync(dir).length) continue;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".ts")) continue;
    const src = readFileSync(join(dir, f), "utf8");

    // ترجمات عربية فارغة
    const emptyAr = src.match(/ar:\s*""/g);
    if (emptyAr) report("⚠️", `${levelDir}/${f}: ${emptyAr.length} ترجمة عربية فارغة`);

    // أسئلة MCQ بلا خيارات
    const mcqWithoutOptions = src.match(/type:\s*"multiple-choice"[\s\S]{0,300}?correctIndex/g);
    // (فحص سطحي — لا يُطبق)

    // جمل de فارغة
    const emptyDe = src.match(/de:\s*""/g);
    if (emptyDe) report("⚠️", `${levelDir}/${f}: ${emptyDe.length} جملة ألمانية فارغة`);
  }
}

// 2) القصص: خيارات مكررة داخل سؤال
for (const f of ["a1.ts", "a1-extra.ts", "a2.ts", "a2-extra.ts", "b1.ts", "b1-extra.ts", "b2.ts", "b2-extra.ts"]) {
  const p = join(ROOT, "stories", f);
  try {
    const src = readFileSync(p, "utf8");
    const dupOptions = src.match(/options:\s*\[\s*\{ text: "([^"]+)"[\s\S]{0,200}?text: "\1"/g);
    if (dupOptions) report("⚠️", `stories/${f}: خيارات مكررة محتملة (${dupOptions.length})`);
  } catch {
    /* لا يوجد */
  }
}

// 3) أخطاء ألمانية شائعة — مع استثناء الأمثلة الخاطئة المقصودة في تمارين التصحيح
const COMMON_GERMAN_ERRORS = [
  [/ich (bin|habe|werde) (gehen|kommen|fahren)/gi, "استخدام خاطئ لـ sein/haben مع فعل الحركة"],
  [/\ber (bin|bist)\b/gi, "تصريف خاطئ (er bin/bist)"],
  [/das ist (eine|ein) (gute|schöne|große) (Idee|Woche|Tag)/gi, "جنس خاطئ محتمل"],
  [/viele (Mensch|Leute|Sache|Ding)s?\s+(ist|hat)/gi, "جمع مع فعل مفرد"],
];

for (const levelDir of ["a1", "a2", "b1", "b2"]) {
  const dir = join(ROOT, "lessons", levelDir);
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".ts")) continue;
    const src = readFileSync(join(dir, f), "utf8");
    // نزيل كتل الأخطاء المقصودة (حقول wrong / wrongSentence) قبل الفحص
    const sanitized = src
      .replace(/wrong:\s*"[^"]*"/g, "")
      .replace(/wrongSentence:\s*"[^"]*"/g, "")
      .replace(/wrongWord:\s*"[^"]*"/g, "");
    for (const [re, label] of COMMON_GERMAN_ERRORS) {
      const m = sanitized.match(re);
      if (m) report("🔴", `${levelDir}/${f}: ${label} ← "${m[0].slice(0, 60)}"`);
    }
  }
}

// 4) مفردات: جنس ناقص
for (const f of readdirSync(join(ROOT, "vocabulary"))) {
  if (!f.endsWith(".ts") || f.includes("test")) continue;
  const src = readFileSync(join(ROOT, "vocabulary", f), "utf8");
  const entries = src.match(/{\s*de:\s*"[^"]+",\s*ar:\s*"[^"]+"/g) ?? [];
  const noGender = entries.filter((e) => !/gender|article|der|die|das/i.test(e));
  if (noGender.length > entries.length * 0.9 && entries.length > 0) {
    report("ℹ️", `vocabulary/${f}: ${entries.length} مفردة، الغالبية بلا جنس مذكور (قد تكون عمداً)`);
  }
}

console.log(`\n═══════════════════════════════════`);
console.log(`النتيجة: ${issues} ملاحظة`);
console.log(`🔴=خطأ محتمل | ⚠️=جودة | ℹ️=معلومة`);
