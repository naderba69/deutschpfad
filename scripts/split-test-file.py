# -*- coding: utf-8 -*-
"""مقسِّم ملفات الاختبار المتضخّمة — يردّ دين الراتشيت بنقلٍ حرفيّ.

الاستعمال:
  python3 scripts/split-test-file.py <test-file> <out-dir> --batch=NN \
      --groups="identity.test.ts:وصف عربي:0,1,2;exercises.test.ts:وصف:3,4" [--dry]
  (الوصف قد يحوي نقطتين: يُؤخذ الاسم من أول مقطعٍ والفهارس من آخرها)

لماذا أداةٌ لا يد؟ لأن ثلاثة ملفات (a2-07 وa2-10 وa2-09) قُسِّمت بأسلوبٍ واحد في
الدفعات 101–103، وكان كل تقسيمٍ يُعيد كتابة المنطق نفسه ويخاطر بنسيان ضمانٍ منه.
فالأداة تجمع الضمانات في موضع واحد:

 1) **اشتقاقٌ لا تخمين:** نطاقاتُ كتل `it` تُشتقّ من الملف (كل `^  it(` حتى أول
    `^  });`)، ومنطقةُ المستوى الأعلى تمتدّ من أول إعلانٍ بعد الواردات إلى ما قبل
    `describe(`. فلا رقمَ سطرٍ مكتوباً يدوياً يُمكن أن يتقادم.
 2) **الاستدارة الحرفية:** الإعلانُ + كلُّ الكتل = محتوى الأصل عدا الواردات ورأس
    `describe` والقوسين؛ وأيُّ سطرٍ متبقٍّ ⇒ رفضٌ قبل الكتابة.
 3) **لا إعدادٌ مشترك داخل `describe`:** أيّ سطرٍ غير فارغ خارج كتل `it` ⇒ رفض،
    لأنه لن يُنقل وسيكسر الأجزاء بصمت.
 4) **تقليمُ الواردات عامّ:** تُقرأ سطورُ `import` من الأصل، وتُستخرج أسماؤها، فلا
    يُستورد في الجزء إلا ما يذكره نصّه (بما فيها `import type`).
 5) **الثوابت والدوال مشتركة:** تُنقل إلى `fixtures.ts` مُصدَّرةً، وتستوردها
    الأجزاء بحسب استخدامها — فلا نسخَ ولا انكسارَ مرجع.
 6) **التعليق السابق للكتلة جزءٌ منها:** أيّ `/** … */` أو `//` فوق `it(` يُنقل
    معها، فلا يبقى في فجوةٍ بين الأجزاء فيُفقد الشرح (عيبُ التعليقات الذي عولج في
    مقسِّم الدروس بالدفعة 95).
 7) **حذفُ سطر الدين:** يُحذف سطر الملف من `src/lib/file-size-ratchet.test.ts` مع
    حذف الملف، لأن الراتشيت يعدّ الملف المحذوف «سطراً يجب حذفه».

العيوب التي عُولجت (موثّقة كسابقتها في `scripts/add-option-explanations.py`):
 1) **الواردة النسبية** (`import { lessonA112 } from "./a1-12";`) كانت تُنقل كما هي
    إلى مجلدٍ أعمق فتسقط: «Cannot find module './a1-12'»، ويتتابع بعدها
    «implicitly has an 'any' type» لأن الدرس يعود بلا نوع. والعلاج `fix_mod()` الذي
    يعيد حساب المسار بالنسبة إلى مجلد الأجزاء (`../a1-12`).
 2) **`expect` داخل دالةٍ مساعدة في المستوى الأعلى** (`expectListedAlternativesRejected`)
    كانت تُنقل إلى `fixtures.ts` بلا استيراد vitest (لأن الأداة كانت تستثني سطره
    دائماً) ⇒ «Cannot find name 'expect'» عشرون مرة. والعلاج استيرادُ ما تستخدمه
    `fixtures` فعلاً من `describe/expect/it`.
 وكلا العيبين لم يظهر في a2-07/a2-10/a2-09 لأن وارداتها كلها `@/…` ولا دوالها
 تستخدم `expect` — فالتعميمُ يُختبر على أوسع ملفٍّ لا على أيسره.
 3) وعلاجُ العيب الأول تولّد عنه ثالث: `fix_mod()` كان يُطبَّق على `./fixtures`
    أيضاً فيصير `../fixtures` (لأنه يحسب بالنسبة إلى مجلد الأصل)، فسقط tsc
    بـ«Cannot find module '../fixtures'». والقاعدة: `fix_mod` للواردات المنقولة من
    الأصل فقط، وأما `extra_names` فنسبُها إلى مجلد الأجزاء أصلاً.

`--dry` يطبع الخطة (النطاقات · الأسماء المشتركة · أحجام الأجزاء) بلا كتابة.
"""
import io
import os
import re
import sys

RATCHET = "src/lib/file-size-ratchet.test.ts"

args = [a for a in sys.argv[1:] if not a.startswith("--")]
opts = {a.split("=")[0].lstrip("-"): a.split("=", 1)[1]
        for a in sys.argv[1:] if a.startswith("--") and "=" in a}
DRY = "--dry" in sys.argv[1:]
if len(args) != 2 or "batch" not in opts or "groups" not in opts:
    print(__doc__)
    raise SystemExit(2)
SRC, OUT = args
BATCH = opts["batch"]
lines = io.open(SRC, encoding="utf-8").read().split("\n")
orig = "\n".join(lines)

# ── الواردات ──────────────────────────────────────────────────────────────
imports = [l for l in lines if l.startswith("import ")]
RE_NAMED = re.compile(r'^import\s+(type\s+)?\{([^}]*)\}\s+from\s+"([^"]+)";\s*$')


def named_ids(line):
    m = RE_NAMED.match(line)
    if not m:
        return None
    return m.group(2), m.group(3), bool(m.group(1))


def used(text, name):
    return re.search(r"\b" + re.escape(name) + r"\b", text) is not None


SRC_DIR = os.path.dirname(SRC) or "."


def fix_mod(mod):
    """الواردة النسبية تُعاد كتابتها بحسب عمق مجلد الأجزاء.

    الأصل `src/…/a1/a1-12.test.ts` يستورد `./a1-12`؛ فإذا انتقل الجزء إلى
    `src/…/a1/a1-12-test/` صار المسار `../a1-12`. وإهمالُ هذا كان يُسقط tsc
    بـ«Cannot find module './a1-12'» ثم يتتابع `implicitly has an 'any' type`
    لأن الدرس يعود بلا نوع.
    """
    if not mod.startswith("."):
        return mod
    target = os.path.normpath(os.path.join(SRC_DIR, mod))
    rel = os.path.relpath(target, OUT)
    if not rel.startswith("."):
        rel = "./" + rel
    return rel.replace(os.sep, "/")


def prune_imports(text, extra_names=()):
    """يعيد سطور الواردات التي يُستخدم اسمٌ منها في `text`."""
    keep = ['import { describe, expect, it } from "vitest";']
    for line in imports:
        if '"vitest"' in line:
            continue
        parsed = named_ids(line)
        if parsed is None:                                   # import X from …
            m = re.match(r'^import\s+(\w+)\s+from\s+"([^"]+)"', line)
            if m and used(text, m.group(1)):
                keep.append('import %s from "%s";' % (m.group(1), fix_mod(m.group(2))))
            continue
        raw, mod, is_type = parsed
        ids = [x.strip() for x in raw.split(",") if x.strip()]
        hit = [x for x in ids if used(text, x.split(" as ")[-1].strip())]
        if hit:
            keep.append('import %s{ %s } from "%s";'
                        % ("type " if is_type else "", ", ".join(hit), fix_mod(mod)))
    for name, mod in extra_names:
        if used(text, name):
            # `mod` هنا (`./fixtures`) نسبٌ إلى مجلد الأجزاء أصلاً فلا يُعاد حسابه
            keep.append('import { %s } from "%s";' % (name, mod))
    return keep


# ── المستوى الأعلى و describe ──────────────────────────────────────────────
DESC = next((i for i, l in enumerate(lines) if l.startswith("describe(")), None)
if DESC is None:
    print("؟ لا `describe(` على المستوى الأعلى — الملف خارج نطاق الأداة")
    raise SystemExit(1)
DESC_TITLE = re.match(r'^describe\("((?:[^"\\]|\\.)*)"', lines[DESC]).group(1)
first_decl = next(i for i, l in enumerate(lines) if re.match(r"^(const|function|let|type)\b", l))
DECL_LINES = lines[first_decl:DESC - 1]
DECL = "\n".join(DECL_LINES)
if not DECL.strip():
    print("؟ لا إعلان على المستوى الأعلى بين السطرين %d و%d" % (first_decl + 1, DESC))
    raise SystemExit(1)
NAMES = re.findall(r"^(?:const|function|let|type)\s+(\w+)", DECL, re.M)

# ── كتل it ────────────────────────────────────────────────────────────────
COMMENT = re.compile(r"^\s*(/\*\*|/\*|\*|\*/|//)")
starts = [i for i in range(DESC, len(lines)) if re.match(r"^  it\(", lines[i])]
blocks = []
for s in starts:
    # ضمان 3ب: التعليق السابق للكتلة جزءٌ منها (لا يُترك في فجوةٍ تُفقد)
    lead = s
    while lead - 1 > DESC and COMMENT.match(lines[lead - 1]) and lines[lead - 2].strip() != "":
        lead -= 1
    while lead - 1 > DESC and COMMENT.match(lines[lead - 1]):
        lead -= 1
    e = s
    while e < len(lines) and not re.match(r"^  \}\);", lines[e]):
        e += 1
    if e >= len(lines):
        print("؟ كتلة بلا نهاية عند السطر %d" % (s + 1))
        raise SystemExit(1)
    blocks.append((lead + 1, e + 1))
bodies = ["\n".join(lines[a - 1:b]) for a, b in blocks]
for b in bodies:
    first_code = next(l for l in b.split("\n") if not COMMENT.match(l) and l.strip())
    assert first_code.startswith("  it(") and b.endswith("  });"), b[:60]

# ضمان 3: لا إعداد مشترك داخل describe
cov = set()
for a, b in blocks:
    cov.update(range(a, b + 1))
extra = [i + 1 for i in range(DESC + 1, len(lines))
         if (i + 1) not in cov and lines[i].strip() and lines[i] != "});"]
if extra:
    print("؟ أسطر داخل describe خارج كتل it (لن تُنقل):", extra[:8])
    raise SystemExit(1)

# ضمان 2: الاستدارة الحرفية
rest = orig
for chunk in [DECL] + bodies:
    if chunk not in rest:
        print("؟ مقطع غير موجود في الأصل:", chunk[:60])
        raise SystemExit(1)
    rest = rest.replace(chunk, "", 1)
leftover = [l.strip() for l in rest.split("\n")
            if l.strip() and not l.strip().startswith(("import ", "/**", " *", " */", "describe(", "});"))]
if leftover:
    print("؟ الاستدارة الحرفية فشلت — بقايا:", leftover[:6])
    raise SystemExit(1)

# ── المجموعات ─────────────────────────────────────────────────────────────
groups = []
for g in opts["groups"].split(";"):
    # الصيغة «اسم:وصف:فهارس» — والوصفُ قد يحوي نقطتين، فالاسم أولٌ والفهارس آخر
    fname, rest = g.split(":", 1)
    desc, idxs = rest.rsplit(":", 1)
    ids = [int(x) for x in idxs.split(",")]
    assert all(0 <= i < len(bodies) for i in ids), ids
    groups.append((fname.strip(), desc.strip(), ids))
seen = sorted(i for _, _, ids in groups for i in ids)
if seen != list(range(len(bodies))):
    print("؟ المجموعات لا تغطّي الكتل كلها مرة واحدة:", seen, "من", len(bodies))
    raise SystemExit(1)

print("الملف: %s (%d سطراً) · describe «%s» · %d كتلة · %d مشتركاً على المستوى الأعلى"
      % (SRC, len(lines), DESC_TITLE, len(bodies), len(NAMES)))
print("نطاقات الكتل:", blocks)
print("المشتركات:", NAMES)
if DRY:
    for fname, desc, ids in groups:
        body = "\n\n".join(bodies[i] for i in ids)
        fxs = [n for n in NAMES if used(body, n)]
        print("  [خطة] %-30s %4d سطراً تقريباً · %d كتلة · %d مشتركاً: %s"
              % (fname, len(body.split("\n")) + 14, len(ids), len(fxs), desc))
    raise SystemExit(0)

os.makedirs(OUT, exist_ok=True)
stem = os.path.basename(SRC).replace(".test.ts", "")

# fixtures.ts
fx = DECL
for name in NAMES:
    pat = re.compile(r"^(const %s\b|function %s\b|let %s\b|type %s\b)" % ((name,) * 4), re.M)
    assert len(pat.findall(fx)) == 1, name
    fx = pat.sub(lambda m: "export " + m.group(0), fx, count=1)
vitest_names = [n for n in ("describe", "expect", "it") if used(fx, n)]
head = ([('import { %s } from "vitest";' % ", ".join(vitest_names))] if vitest_names else [])
head += [h for h in prune_imports(fx) if '"vitest"' not in h]
text = ("/**\n * %s — ثوابت التدقيق المتوقَّعة ودواله المساعدة\n"
        " * فُصلت من %s في الدفعة %s (سقف الحجم: لا ملف فوق 600 سطر).\n"
        " * القيم والأجسام منقولة حرفياً.\n */\n\n%s\n\n%s\n"
        % (stem, os.path.basename(SRC), BATCH, "\n".join(head), fx))
io.open(os.path.join(OUT, "fixtures.ts"), "w", encoding="utf-8").write(text)
print("fixtures.ts: %d سطراً · %d مشتركاً" % (len(text.split("\n")), len(NAMES)))

for fname, desc, ids in groups:
    body = "\n\n".join(bodies[i] for i in ids)
    fxs = [n for n in NAMES if used(body, n)]
    ph = prune_imports(body, extra_names=[(n, "./fixtures") for n in fxs])
    t = ("/**\n * %s — %s (جزء من تدقيق الدرس)\n"
         " * فُصل من %s في الدفعة %s (سقف الحجم: لا ملف فوق 600 سطر).\n"
         " * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.\n */\n\n%s\n\n"
         'describe("%s", () => {\n%s\n});\n'
         % (stem, desc, os.path.basename(SRC), BATCH, "\n".join(ph), DESC_TITLE, body))
    io.open(os.path.join(OUT, fname), "w", encoding="utf-8").write(t)
    n = len(t.split("\n"))
    print("%-30s %4d سطراً · %2d كتلة · %2d مشتركاً من fixtures%s"
          % (fname, n, len(ids), len(fxs), "  ؟ فوق السقف!" if n > 600 else ""))
    if n > 600:
        raise SystemExit("؟ جزء تجاوز السقف — أعد توزيع المجموعات")

# حذف الأصل وسطر دينه
os.remove(SRC)
rl = io.open(RATCHET, encoding="utf-8").read().split("\n")
before = len(rl)
rl = [l for l in rl if '"%s"' % SRC not in l]
assert before - len(rl) == 1, (before, len(rl))
io.open(RATCHET, "w", encoding="utf-8").write("\n".join(rl))
print("حُذف الأصل وسطرُ دينه في الراتشيت · الضمانات الأربعة مُثبتة")
