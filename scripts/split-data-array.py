# -*- coding: utf-8 -*-
"""مقسِّم مصفوفات البيانات المتضخّمة — يردّ دين الراتشيت بنقلٍ حرفيّ.

الاستعمال:
  python3 scripts/split-data-array.py <data-file> <out-dir> --batch=NN \
      --groups="part1.ts:وصف عربي:0-4;part2.ts:وصف:5-9;part3.ts:وصف:10-14" [--dry]
  (الفهارس قائمةٌ أو نطاق «أ-ب»، والوصفُ قد يحوي نقطتين: الاسم أول مقطعٍ والفهارس آخرها)

لماذا أداةٌ ثالثة؟ لأن `scripts/split-lesson.py` يشتقّ حدوده من **مفاتيح كائن الدرس**
و`scripts/split-test-file.py` من **`describe/it`**، بينما الديون الباقية بعد الدفعة 111
كلّها **مصفوفة عناصر** في المستوى الأعلى (`A1_DIALOGUES: DailyDialogue[]` — 15 حواراً
في 621 سطراً). فالوحدة الطبيعية هنا هي **العنصر** `{ … }` على عمقٍ واحد.

الضمانات (منهجُ الأداتين السابقتين نفسه: اشتقاقٌ لا تخمين، ورفضٌ قبل الكتابة):

 1) **اشتقاقُ الحدود من التنسيق لا من عدّاد أقواس:** عناصرُ المستوى الأعلى هي الأسطر
    `^  \{$` حتى أول `^  \},?$`. تتبّعُ العمق بعدّ الأقواس عُرضةٌ للخطأ داخل نصوص
    ألمانية تحوي أقواساً («„Freut mich auch“» أو `{` في سلسلة)، والتنسيقُ الموحَّد
    (بادئة سطرين) أدقّ — وهو المنهج نفسه الذي نجح في مقسِّم الاختبارات.
 2) **لا سطر شارد:** كل سطرٍ غير فارغ بين الإعلان والإغلاق يجب أن يكون داخل عنصر،
    وإلا رُفض التقسيم (يعني بنيةً لم تُشتقّ).
 3) **الاستدارة الحرفية:** عناصرُ الأجزاء مجتمعةً = جسمُ المصفوفة الأصلي سطراً بسطر
    (بعد حذف الفراغات). فلا يُزاد ولا يُحذف ولا يُعاد تنسيق.
 4) **حفظُ الترتيب:** الفهارسُ يجب أن تغطّي `0…n-1` مرةً واحدة **وبترتيبٍ تصاعديّ
    عبر الأجزاء**، لأن الترتيب دلاليّ: `dialogues/index.ts` يوازن الشجرة بالقرينة
    (`balanceChoiceTree(dialogue, index + 1)`) ومواضعُ الأجوبة تُقاس على الترتيب.
 5) **التعليق السابق للعنصر جزءٌ منه** (نظير الضمان 6 في مقسِّم الاختبارات).
 6) **الواردات النسبية تُعاد كتابتها بالعمق** (`./types` ⇒ `../types`) — وهي العلّة
    الأولى التي عولجت في `split-test-file.py` (الدفعه 106) ولا تُعاد هنا.
 7) **المجمِّع يبقى في مكانه:** يُعاد كتابة الملف الأصلي ملفاً رقيقاً يستورد الأجزاء
    ويبسطها (`...A1_DIALOGUES_1`)، فلا يتغيّر أيُّ مسار استيرادٍ في المستهلكين
    (`dialogues/index.ts` · `lib/tests/answer-position.test.ts`) — وهو نمط مجمِّعات
    الدروس القائم (`a1/a1-01.ts` + `a1/a1-01/`).
 8) **حذفُ سطر الدين:** الملف الأصلي يصير دون السقف ⇒ الراتشيت يعدّه «سطراً يجب
    حذفه» (`stale`)، فيُحذف سطره في الالتزام نفسه.
 9) **سقف الأجزاء:** أي جزءٍ أو المجمِّع فوق 600 سطر ⇒ رفض.

العيب الذي كشفه أول تشغيلٍ حقيقي (موثّق كعيوب `split-test-file.py` الستة):
 1) **تقليمُ الواردات كان يُسقط وارد النوع**: `prune(body)` يقيس الاستخدام على نصّ
    **العناصر** وحدها، وعناصرُ `A1_DIALOGUES` كائناتٌ حرفية لا تذكر `DailyDialogue`
    إطلاقاً — بينما توقيعُ الجزء `export const A1_DIALOGUES_1: DailyDialogue[] = [`
    يحتاجه. فسقط tsc بثلاث «Cannot find name 'DailyDialogue'». والعلاج: القياسُ على
    `body + TYPE` معاً. والفرق عن علّة الواردات النسبية في مقسِّم الاختبارات: تلك في
    **المسار**، وهذه في **معيار الاستخدام** — وكلتاهما تظهر فقط عند أول ملفٍ حقيقي.

`--dry` يطبع الخطة (عدد العناصر · أحجامها · أحجام الأجزاء) بلا كتابة.
"""
import io
import os
import re
import sys

RATCHET = "src/lib/file-size-ratchet.test.ts"
CAP = 600

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
SRC_DIR = os.path.dirname(SRC) or "."
COMMENT = re.compile(r"^\s*(/\*\*?|\*|//)")

# ── الإعلان والإغلاق ──────────────────────────────────────────────────────
DECL_RE = re.compile(r"^export const (\w+): (.+) = \[$")
D = next((i for i, l in enumerate(lines) if DECL_RE.match(l)), None)
if D is None:
    print("؟ لا «export const X: T[] = [» على المستوى الأعلى — الملف خارج نطاق الأداة")
    raise SystemExit(1)
NAME, TYPE = DECL_RE.match(lines[D]).groups()
TYPE = TYPE.strip()
CLOSE = next((i for i in range(D + 1, len(lines)) if lines[i] == "];"), None)
if CLOSE is None:
    print("؟ لا سطر إغلاق «];» بعد الإعلان")
    raise SystemExit(1)

# ── العناصر (ضمان 1) ──────────────────────────────────────────────────────
starts = [i for i in range(D + 1, CLOSE) if re.match(r"^  \{$", lines[i])]
if not starts:
    print("؟ لا عنصر على عمقٍ واحد («  {») بين الإعلان والإغلاق")
    raise SystemExit(1)
elems = []
for s in starts:
    e = s
    while e < CLOSE and not re.match(r"^  \},?$", lines[e]):
        e += 1
    if e >= CLOSE:
        print("؟ عنصر بلا نهاية عند السطر %d" % (s + 1))
        raise SystemExit(1)
    # ضمان 5: التعليق السابق للعنصر جزءٌ منه
    lead = s
    while lead - 1 > D and COMMENT.match(lines[lead - 1]):
        lead -= 1
    elems.append((lead, e))                      # 0-based شامل الطرفين
bodies = ["\n".join(lines[a:b + 1]) for a, b in elems]

# ضمان 2: لا سطر شارد
cov = set()
for a, b in elems:
    cov.update(range(a, b + 1))
stray = [i + 1 for i in range(D + 1, CLOSE) if i not in cov and lines[i].strip()]
if stray:
    print("؟ أسطر غير فارغة خارج العناصر (لن تُنقل):", stray[:8])
    raise SystemExit(1)

# ضمان 3: الاستدارة الحرفية
orig_body = [l for l in lines[D + 1:CLOSE] if l.strip()]
rebuilt = [l for l in "\n".join(bodies).split("\n") if l.strip()]
if orig_body != rebuilt:
    diff = next(i for i, (x, y) in enumerate(zip(orig_body, rebuilt)) if x != y)
    print("؟ الاستدارة الحرفية فشلت عند السطر %d:\n  الأصل: %r\n  المبنى: %r"
          % (diff, orig_body[diff][:70], rebuilt[diff][:70]))
    raise SystemExit(1)

# ── الواردات ──────────────────────────────────────────────────────────────
imports = [l for l in lines[:D] if l.startswith("import ")]


def fix_mod(mod):
    """الواردة النسبية تُعاد كتابتها بحسب عمق مجلد الأجزاء (ضمان 6)."""
    if not mod.startswith("."):
        return mod
    rel = os.path.relpath(os.path.normpath(os.path.join(SRC_DIR, mod)), OUT)
    if not rel.startswith("."):
        rel = "./" + rel
    return rel.replace(os.sep, "/")


RE_IMP = re.compile(r'^import\s+(type\s+)?(\{[^}]*\}|\w+)\s+from\s+"([^"]+)";\s*$')


def prune(text, mod_map=None):
    """وارداتُ الأصل التي يُستخدم اسمٌ منها في `text`، مع تصحيح المسار النسبي."""
    keep = []
    for line in imports:
        m = RE_IMP.match(line)
        if not m:
            continue
        is_type, raw, mod = m.groups()
        ids = ([x.strip() for x in raw.strip("{}").split(",") if x.strip()]
               if raw.startswith("{") else [raw])
        if any(re.search(r"\b%s\b" % re.escape(i.split(" as ")[-1].strip()), text) for i in ids):
            keep.append('import %s%s from "%s";'
                        % ("type " if is_type else "", raw,
                           (mod_map or {}).get(mod, mod) if mod_map else fix_mod(mod)))
    return keep


# ── المجموعات (ضمان 4) ────────────────────────────────────────────────────
def parse_idx(spec):
    out = []
    for part in spec.split(","):
        part = part.strip()
        if "-" in part:
            a, b = part.split("-", 1)
            out.extend(range(int(a), int(b) + 1))
        elif part:
            out.append(int(part))
    return out


groups = []
for g in opts["groups"].split(";"):
    fname, rest = g.split(":", 1)
    desc, idxs = rest.rsplit(":", 1)
    ids = parse_idx(idxs)
    assert all(0 <= i < len(elems) for i in ids), ids
    groups.append((fname.strip(), desc.strip(), ids))
flat = [i for _, _, ids in groups for i in ids]
if flat != list(range(len(elems))):
    print("؟ المجموعات لا تغطّي العناصر مرة واحدة بترتيبٍ تصاعدي:", flat, "من", len(elems))
    raise SystemExit(1)

stem = os.path.basename(SRC).replace(".ts", "")
print("الملف: %s (%d سطراً) · export const %s: %s · %d عنصراً · الإغلاق عند %d"
      % (SRC, len(lines), NAME, TYPE, len(elems), CLOSE + 1))
print("أحجام العناصر:", [b - a + 1 for a, b in elems])
if DRY:
    for k, (fname, desc, ids) in enumerate(groups, 1):
        body = "\n".join(bodies[i] for i in ids)
        print("  [خطة] %-14s %4d سطراً تقريباً · %2d عنصراً (%s): %s"
              % (fname, len(body.split("\n")) + 12, len(ids),
                 "%d-%d" % (ids[0], ids[-1]) if len(ids) > 1 else str(ids[0]), desc))
    raise SystemExit(0)

os.makedirs(OUT, exist_ok=True)

# ── الأجزاء ───────────────────────────────────────────────────────────────
part_exports = []
for k, (fname, desc, ids) in enumerate(groups, 1):
    body = "\n".join(bodies[i] for i in ids)
    exp = "%s_%d" % (NAME, k)
    part_exports.append((exp, os.path.join(os.path.basename(OUT), fname.replace(".ts", ""))))
    # العبرة الموثّقة أدناه (عيب 1): التقليم يُقاس على الجسم **والتوقيع معاً**،
    # لأن العناصر كائناتٌ حرفية لا تذكر اسم النوع، وتوقيعُ الجزء يحتاجه.
    ph = prune(body + "\n" + TYPE)
    t = ("/**\n * %s — %s\n"
         " * فُصل من %s في الدفعة %s (سقف الحجم: لا ملف فوق %d سطراً).\n"
         " * العناصر منقولة حرفياً بترتيبها؛ والمجمِّع في ../%s.ts يبسطها.\n */\n"
         "%s\n"
         "export const %s: %s = [\n%s\n];\n"
         % (stem, desc, os.path.basename(SRC), BATCH, CAP,
            stem, ("\n" + "\n".join(ph) + "\n") if ph else "", exp, TYPE, body))
    io.open(os.path.join(OUT, fname), "w", encoding="utf-8").write(t)
    n = len(t.split("\n"))
    print("%-14s %4d سطراً · %2d عنصراً · export %s%s"
          % (fname, n, len(ids), exp, "  ؟ فوق السقف!" if n > CAP else ""))
    if n > CAP:
        raise SystemExit("؟ جزء تجاوز السقف — أعد توزيع المجموعات")

# ── المجمِّع (ضمان 7) ─────────────────────────────────────────────────────
imp_parts = ["import { %s } from \"./%s\";" % (e, p) for e, p in part_exports]
# النوع يبقى مطلوباً في توقيع المجمِّع، فواردته تُترك كما هي (نسبُها إلى مجلد الأصل)
type_imports = [l for l in imports if re.search(r"\b%s\b" % re.escape(TYPE.replace("[]", "")), l)]
asm = ("/**\n * %s — مجمِّع: يبسط أجزاء المصفوفة في %s/ بترتيبها الأصلي.\n"
       " * قُسِّم في الدفعة %s (سقف الحجم: لا ملف فوق %d سطراً). القيم في الأجزاء\n"
       " * منقولة حرفياً، والترتيب محفوظ لأن الموازنة تُجرى بالقرينة.\n */\n"
       "%s%s\n\n"
       "export const %s: %s = [\n%s\n];\n"
       % (os.path.basename(SRC), os.path.basename(OUT), BATCH, CAP,
          ("\n".join(type_imports) + "\n\n") if type_imports else "",
          "\n".join(imp_parts),
          NAME, TYPE, "\n".join("  ...%s," % e for e, _ in part_exports)))
io.open(SRC, "w", encoding="utf-8").write(asm)
n = len(asm.split("\n"))
print("المجمِّع %s: %d سطراً · %d جزءاً%s" % (SRC, n, len(groups),
                                             "  ؟ فوق السقف!" if n > CAP else ""))
if n > CAP:
    raise SystemExit("؟ المجمِّع تجاوز السقف")

# ── حذف سطر الدين (ضمان 8) ────────────────────────────────────────────────
rl = io.open(RATCHET, encoding="utf-8").read().split("\n")
before = len(rl)
rl = [l for l in rl if '"%s"' % SRC not in l]
assert before - len(rl) == 1, (before, len(rl))
io.open(RATCHET, "w", encoding="utf-8").write("\n".join(rl))
print("حُذف سطر الدين من الراتشيت · الضمانات التسعة مُثبتة")
