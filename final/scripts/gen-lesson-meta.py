#!/usr/bin/env python3
"""
توليد src/data/lessons/meta.ts — فهرس خفيف (البيانات الوصفية فقط) للدروس
يُستخدم في صفحات القوائم (مسار التعلم، لوحة التحكم، كبسولة 5 دقائق)
بدلاً من استيراد المحتوى الكامل (850KB) لمجرد معرفة العنوان والمعرّف.
"""
import glob
import os
import re

FIELDS = ["id", "unitId", "level", "order", "titleDe", "titleAr", "duration", "summary"]


def parse_string_literal(text, pos):
    """يقرأ قيمة نصية تبدأ عند pos (الاقتباس الافتتاحي) حتى الاقتباس المغلق.
    يدعم الأسطر المتعددة و \\" و \\\\ و \\n."""
    assert text[pos] == '"'
    i = pos + 1
    out = []
    while i < len(text):
        ch = text[i]
        if ch == "\\":
            nxt = text[i + 1] if i + 1 < len(text) else ""
            out.append("\\" + nxt)
            i += 2
            continue
        if ch == '"':
            return "".join(out), i + 1
        out.append(ch)
        i += 1
    raise ValueError("اقتباس غير مغلق")


def extract_lesson_meta(filepath):
    src = open(filepath, encoding="utf-8").read()
    m = re.search(r"export const \w+: Lesson = \{", src)
    if not m:
        raise ValueError(f"لا يوجد تعريف Lesson في {filepath}")
    start = m.end()
    # نهاية منطقة البيانات الوصفية = أول تعليق قسم أو مفتاح lernziele
    end_match = re.search(r"\n\s*(?:/\*|lernziele:|einfuehrung:)", src[start:])
    if not end_match:
        raise ValueError(f"لا يمكن إيجاد نهاية البيانات الوصفية في {filepath}")
    region = src[start : start + end_match.start()]
    meta = {}
    for field in FIELDS:
        fm = re.search(rf"\b{field}:\s*", region)
        if not fm:
            raise ValueError(f"الحقل {field} غير موجود في {filepath}")
        vstart = fm.end()
        if region[vstart] == '"':
            val, _ = parse_string_literal(region, vstart)
            meta[field] = val
        else:
            # أرقام فقط (order, duration)
            nm = re.match(r"(\d+)", region[vstart:])
            if not nm:
                raise ValueError(f"قيمة غير مفهومة للحقل {field} في {filepath}")
            meta[field] = int(nm.group(1))
    return meta


def js_quote(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def main():
    files = sorted(glob.glob("src/data/lessons/a1/a1-*.ts")) + \
            sorted(glob.glob("src/data/lessons/a2/a2-*.ts")) + \
            sorted(glob.glob("src/data/lessons/b1/b1-*.ts")) + \
            sorted(glob.glob("src/data/lessons/b2/b2-*.ts"))
    metas = [extract_lesson_meta(f) for f in files]
    # نُبقي ترتيب الملفات كما هو (يطابق ترتيب LESSONS في index.ts) —
    # لأن حقل order يمثل الترتيب داخل الوحدة وليس تسلسلاً عاماً.

    lines = []
    lines.append('import type { LessonMeta } from "./meta-types";')
    lines.append("")
    lines.append("/**")
    lines.append(" * ═══════════════════════════════════════════════════════════")
    lines.append(" *  فهرس الدروس الخفيف (بيانات وصفية فقط) — 46 درساً")
    lines.append(" *  يُولَّد آلياً عبر scripts/gen-lesson-meta.py")
    lines.append(" *  الغرض: صفحات القوائم تحتاج فقط العنوان والمعرّف والوقت،")
    lines.append(" *  دون تحميل محتوى الدروس الكامل (أداء أفضل للحزم).")
    lines.append(" * ═══════════════════════════════════════════════════════════")
    lines.append(" */")
    lines.append("")
    lines.append("export const LESSON_META: LessonMeta[] = [")
    for meta in metas:
        lines.append(
            "  { "
            + f'id: {js_quote(meta["id"])}, unitId: {js_quote(meta["unitId"])}, '
            + f'level: {js_quote(meta["level"])}, order: {meta["order"]}, '
            + f'titleDe: {js_quote(meta["titleDe"])}, titleAr: {js_quote(meta["titleAr"])}, '
            + f'duration: {meta["duration"]}, summary: {js_quote(meta["summary"])}'
            + " },"
        )
    lines.append("];")
    lines.append("")
    lines.append("/** إيجاد درس بمعرّفه (من الفهرس الخفيف) */")
    lines.append("export function getLessonMeta(id: string): LessonMeta | undefined {")
    lines.append("  return LESSON_META.find((l) => l.id === id);")
    lines.append("}")
    lines.append("")
    lines.append("/** أول درس في وحدة (لروابط خارطة الطريق) */")
    lines.append("export function getFirstLessonMetaForUnit(unitId: string): LessonMeta | undefined {")
    lines.append("  return LESSON_META.find((l) => l.unitId === unitId);")
    lines.append("}")
    lines.append("")
    lines.append("/** عدد دروس وحدة (لفحص الوجود في صفحات الاختبار) */")
    lines.append("export function getLessonCountForUnit(unitId: string): number {")
    lines.append("  return LESSON_META.filter((l) => l.unitId === unitId).length;")
    lines.append("}")
    lines.append("")
    lines.append("/** كل دروس مستوى (بيانات وصفية) */")
    lines.append("export function getLessonMetaByLevel(level: string): LessonMeta[] {")
    lines.append("  return LESSON_META.filter((l) => l.level === level).sort((a, b) => a.order - b.order);")
    lines.append("}")
    lines.append("")
    lines.append(f"export const TOTAL_LESSONS_META = LESSON_META.length;")

    out = "\n".join(lines) + "\n"
    with open("src/data/lessons/meta.ts", "w", encoding="utf-8") as f:
        f.write(out)
    print(f"✅ توليد meta.ts — {len(metas)} درساً ({os.path.getsize('src/data/lessons/meta.ts')} بايت)")


if __name__ == "__main__":
    main()
