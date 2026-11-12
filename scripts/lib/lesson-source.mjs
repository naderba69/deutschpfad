/**
 * ═══════════════════════════════════════════════════════════
 *  مصدر الدرس — مساعد لأدوات scripts/
 *
 *  بعد المرحلة 4 (سقف الحجم) لم يعد كل درس ملفاً واحداً: الملف الرئيسي
 *  يحمل البيانات الوصفية والتجميع، والأجزاء في مجلد بنفس الاسم
 *  (intro · theorie · skills · practice · cards).
 *  أدوات التدقيق تقرأ **الاجتماع** فلا تصبح «نظيفة» كذباً على ملف رقيق.
 * ═══════════════════════════════════════════════════════════
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

/** ملفات دروس المستوى فقط (بلا مجلدات الأجزاء وبلا ملفات الاختبار) */
export function listLessonFiles(dir) {
  return readdirSync(dir).filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts"));
}

/** مجلد أجزاء الدرس (إن وُجد) */
export function partsDirOf(lessonFile) {
  const dir = lessonFile.replace(/\.ts$/, "");
  return existsSync(dir) ? dir : null;
}

/** نصّ الدرس كاملاً: الرئيسي + كل الأجزاء بالترتيب */
export function readLessonSource(lessonFile) {
  let out = readFileSync(lessonFile, "utf8");
  const dir = partsDirOf(lessonFile);
  if (dir) {
    for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts")).sort()) {
      out += "\n" + readFileSync(join(dir, f), "utf8");
    }
  }
  return out;
}

/**
 * مصدر قابل للتحويل إلى JS ثم `require`:
 * يضمّ الأجزاء قبل الملف الرئيسي ويحذف أسطر الاستيراد (النوعية فقط في الدروس).
 */
export function bundleLessonSource(lessonFile) {
  const strip = (s) => s.replace(/^\s*import .*$/gm, "");
  const main = readFileSync(lessonFile, "utf8");
  const imports = [...main.matchAll(/^\s*import\s+[^;]*from\s+"(\.[^"]+)";?\s*$/gm)].map((m) => m[1]);
  const parts = imports
    .map((spec) => join(lessonFile, "..", spec.replace(/^\.\//, "")))
    .map((p) => (p.endsWith(".ts") ? p : p + ".ts"))
    .filter((p) => existsSync(p))
    .map((p) => strip(readFileSync(p, "utf8")).replace(/^export\s+/gm, ""));
  return [...parts, strip(main)].join("\n");
}
