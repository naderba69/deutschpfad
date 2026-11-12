# -*- coding: utf-8 -*-
"""مقسِّم عامّ لملفات الدروس الضخمة — النسخة المصحَّحة (v2).

الاستعمال:  python3 scripts/split-lesson.py <lesson-id> [<lesson-id> …] [--batch=NN]

يقسّم `src/data/lessons/<lvl>/<id>.ts` إلى خمسة أجزاء في مجلّد `<id>/` + مُجمِّع
رفيع، وينقل القيم **حرفياً** (بلا إعادة تنسيق) فيبقى الفرق في git مقروءاً:

  intro    = lernziele + einfuehrung + review
  theorie  = theory
  skills   = reading + listening + pronunciation + writing
  practice = practiceBank + fehlerUndTipps
  cards    = miniTest + flashcards + mediation + interaction

لماذا لا يكفي البحث بمسافة بادئة: النسخة الأولى كانت تكتشف المفاتيح العلوية بنمط
`^  key: [` فسقط قسم `interaction` في a1-04 **صامتاً** لأنه مكتوب بمسافة بادئة
مقدارها ستة أحرف، وكشفه حارس المنهج (curriculum-coverage) لا التقسيم. لذا المسح
هنا **واعٍ بالنصوص والتعليقات** ويعُدّ عمق الأقواس، فيلتقط كل مفتاح على عمق 1
مهما كانت مسافته البادئة، ويميّز المفتاح الكتليّ (قيمته `[` أو `{`) من السلَّمي.

الضمانات الخمس (يفشل التشغيل ولا يكتب شيئاً إن اختلّت إحداها):
 1) الاسترجاع النصّي: كل كتلة تُستخرج من الجزء المكتوب وتُقارن **حرفاً بحرف**
    بما في الأصل.
 2) المفاتيح: قائمة مفاتيح الدرس قبل التقسيم = قائمة مفاتيح المُجمِّع بعده
    (المفاتيح السلَّمية تُعاد كتابتها والكتلية تُستورد باختصار) — فلا سقوط صامت.
 3) الفجوات: النص بين الكتل الملتقطة يجب ألا يحوي **أي رمز شفري** (مسافات
    وتعليقات فقط)، وإلا طُبع ولم يُحذف.
 4) السقف: عدد أسطر كل جزء ≤ 600.
 5) الراتشيت: يُحذف قيد `file-size-ratchet.test.ts` الخاص بالدرس (يُطابَق حرفياً
    ويُشترط وجوده مرّة واحدة) لأن الدين سُدد.
"""
import io
import os
import re
import sys

BATCH = 95
for _a in sys.argv[1:]:
    if _a.startswith("--batch="):
        BATCH = int(_a.split("=", 1)[1])
IDS = [a for a in sys.argv[1:] if not a.startswith("--")]
DRY = any(a == "--dry" for a in sys.argv[1:])

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LESSONS = os.path.join(ROOT, "src", "data", "lessons")
RATCHET = os.path.join(ROOT, "src", "lib", "file-size-ratchet.test.ts")
CEILING = 600

GROUPS = [
    ("intro", "المقدمة وأهداف التعلم", ["lernziele", "einfuehrung", "review"]),
    ("theorie", "الشرح النظري", ["theory"]),
    ("skills", "المهارات: قراءة و استماع و نطق و كتابة",
     ["reading", "listening", "pronunciation", "writing"]),
    ("practice", "بنك التمارين ونصائح الأخطاء", ["practiceBank", "fehlerUndTipps"]),
    ("cards", "الاختبار الصغير و البطاقات و الوساطة و التفاعل",
     ["miniTest", "flashcards", "mediation", "interaction"]),
]
GROUP_OF = {k: g for g, _t, ks in GROUPS for k in ks}


def code_mask(text):
    """قناع بطول النص: True حيث الرمز شفريّ (خارج نصّ أو تعليق)."""
    mask = [False] * len(text)
    i, n = 0, len(text)
    while i < n:
        c = text[i]
        if c == "/" and i + 1 < n and text[i + 1] == "/":
            while i < n and text[i] != "\n":
                i += 1
            continue
        if c == "/" and i + 1 < n and text[i + 1] == "*":
            i += 2
            while i + 1 < n and not (text[i] == "*" and text[i + 1] == "/"):
                i += 1
            i = min(n, i + 2)
            continue
        if c in "\"'`":
            q = c
            i += 1
            while i < n:
                if text[i] == "\\":
                    i += 2
                    continue
                if text[i] == q:
                    i += 1
                    break
                i += 1
            continue
        mask[i] = True
        i += 1
    return mask


def find_lesson_object(text):
    """يعيد (موضع فتح كائن الدرس، موضع قوسه الفاتح)."""
    m = re.search(r"^export const (lesson\w+): Lesson = \{", text, re.M)
    if not m:
        raise SystemExit("⛔ لم يُعثر على «export const lessonX: Lesson = {»")
    return m.group(1), m.end() - 1


def top_level_keys(text, mask, obj_open):
    """مسحٌ واعٍ بالنصوص يعُدّ عمق الأقواس ويلتقط كل مفتاح على عمق 1.

    يعيد قائمة قواميس: {key, kind: block|scalar, start, end} حيث [start, end)
    يغطّي سطر المفتاح كاملاً (بما فيه الفاصلة اللاحقة).
    """
    depth = 0
    i = obj_open
    n = len(text)
    keys = []
    expect_key = True  # بعد «{» أو «,» على عمق 1 يأتي مفتاح
    while i < n:
        if not mask[i]:
            i += 1
            continue
        c = text[i]
        if c in "{[(":
            depth += 1
            i += 1
            continue
        if c in "}])":
            depth -= 1
            i += 1
            if depth == 0:
                break
            continue
        if depth == 1 and expect_key and (c.isalpha() or c == "_" or c == "$"):
            m = re.match(r"[A-Za-z_$][\w$]*", text[i:])
            name = m.group(0)
            j = i + len(name)
            while j < n and text[j] in " \t\r\n":
                j += 1
            if j < n and text[j] == ":":
                start = text.rfind("\n", 0, i) + 1
                kind, end = scan_value(text, mask, j + 1, depth)
                keys.append({"key": name, "kind": kind, "start": start, "end": end})
                i = end
                # القطعة تبتلع فاصلتها، فالكلمة المفتاحية التالية لا تسبقها فاصلة
                # ظاهرة: نُبقي التوقّع مفتوحاً (وإلا التُقطت المفاتيح بالتناوب).
                expect_key = True
                continue
            i = j
            continue
        if depth == 1 and c == ",":
            expect_key = True
        i += 1
    return keys


def scan_value(text, mask, vpos, base_depth):
    """يمسح قيمة مفتاح: كتلة (أقواس متوازنة) أو سلَّماً (حتى فاصلة على العمق نفسه)."""
    n = len(text)
    j = vpos
    while j < n and text[j] in " \t\r\n":
        j += 1
    if j < n and text[j] in "[{":
        depth = 0
        k = j
        while k < n:
            if mask[k]:
                if text[k] in "{[(":
                    depth += 1
                elif text[k] in "}])":
                    depth -= 1
                    if depth == 0:
                        k += 1
                        break
            k += 1
        # الفاصلة اللاحقة — بلا عبور نهاية السطر (وإلا التُهم سطر المفتاح التالي)
        while k < n and text[k] in " \t\r":
            k += 1
        if k < n and text[k] == ",":
            k += 1
        while k < n and text[k] in " \t\r":
            k += 1
        line_end = text.find("\n", k)
        return "block", (n if line_end < 0 else line_end + 1)
    # سلَّمي: حتى فاصلة على عمق base_depth
    depth = base_depth
    k = j
    while k < n:
        if mask[k]:
            if text[k] in "{[(":
                depth += 1
            elif text[k] in "}])":
                if depth == base_depth:
                    break
                depth -= 1
            elif text[k] == "," and depth == base_depth:
                k += 1
                break
        k += 1
    while k < n and text[k] in " \t\r":
        k += 1
    line_end = text.find("\n", k)
    return "scalar", (n if line_end < 0 else line_end + 1)


def dedent2(lead):
    """يزيل إزاحة السطرين (موضع المفتاح في الأصل) فالتعليق يُصدر على عمود الجزء."""
    return "\n".join(l[2:] if l.startswith("  ") else l for l in lead.split("\n"))


def no_code_line(text, mask, a, b):
    """هل السطر [a,b) خالٍ من أي رمز شفريّ (أي تعليقٌ أو فراغ)؟"""
    return all((not mask[i]) or text[i].isspace() for i in range(a, b))


def line_spans(text):
    spans, start = [], 0
    for i, ch in enumerate(text):
        if ch == "\n":
            spans.append((start, i + 1))
            start = i + 1
    spans.append((start, len(text)))
    return spans


def attach_leads(text, mask, segs):
    """يُسنِد لكل قطعة التعليق/التعليقات المتّصلة التي تسبقها مباشرةً.

    comments الأقسام (مثل «/* 1) الأهداف */») جزءٌ من تأليف الدرس، فإسقاطها
    فقدانٌ صامت للمعنى؛ لذا تُنقل مع مفتاحها (إلى الجزء إن كان كتلياً وإلى
    المُجمِّع إن كان سلَّمياً).
    """
    spans = line_spans(text)
    line_of = {}
    for li, (a, b) in enumerate(spans):
        for pos in range(a, b):
            line_of[pos] = li
    for si, sg in enumerate(segs):
        limit = segs[si - 1]["end"] if si else 0
        L = line_of[sg["start"]] - 1
        first = L + 1
        while L >= 0:
            a, b = spans[L]
            if a < limit or not no_code_line(text, mask, a, b):
                break
            first = L
            L -= 1
        # حذف الأسطر الفارغة في أول التعليق الملتقط
        while first <= L + 1 and first < len(spans) and text[spans[first][0]:spans[first][1]].strip() == "":
            first += 1
        sg["lead_start"] = spans[first][0] if first <= line_of[sg["start"]] - 1 else sg["start"]
        sg["lead"] = text[sg["lead_start"]:sg["start"]]


def value_text(text, seg):
    """نصّ القيمة حرفياً: من أول «[» أو «{» حتى قوس الإغلاق (بلا الفاصلة)."""
    body = text[seg["start"]:seg["end"]]
    m = re.search(r"^(\s*)([A-Za-z_$][\w$]*)\s*:\s*", body)
    rest = body[m.end():]
    rest = rest.rstrip()
    if rest.endswith(","):
        rest = rest[:-1]
    return rest


def split_one(lid):
    path = None
    for lvl in ("a1", "a2", "b1", "b2"):
        cand = os.path.join(LESSONS, lvl, lid + ".ts")
        if os.path.exists(cand):
            path = cand
            break
    if path is None:
        raise SystemExit(f"⛔ لم يُعثر على {lid}.ts")
    text = io.open(path, encoding="utf-8").read()
    mask = code_mask(text)
    sym, obj_open = find_lesson_object(text)
    segs = top_level_keys(text, mask, obj_open)
    if not segs:
        raise SystemExit("⛔ لم يُلتقط أي مفتاح")

    if DRY:
        for sg in segs:
            print(f'  {text[:sg["start"]].count(chr(10)) + 1:5d}  {sg["kind"]:6s}  {sg["key"]}')
        print(f"المجموع: {len(segs)} مفتاحاً")
        return

    attach_leads(text, mask, segs)
    names = [s["key"] for s in segs]
    unknown = [k for k in names if k not in GROUP_OF]
    if unknown:
        print(f"⚠ {lid}: مفاتيح بلا مجموعة (تبقى في المُجمِّع): {unknown}")

    # 3) الفجوات: لا رمز شفريّاً بين الكتل الملتقطة (مسافات وتعليقات فقط)
    positions = []
    cursor = obj_open + 1
    for s in segs:
        positions.append((cursor, s["lead_start"]))
        cursor = s["end"]
    positions.append((cursor, len(text)))
    for a, b in positions:
        code_chars = [text[i] for i in range(a, b) if mask[i] and not text[i].isspace()]
        if code_chars and "".join(code_chars).strip() not in ("};", "}"):
            raise SystemExit(f"⛔ فجوة فيها رمز شفريّ لم يُلتقط: {''.join(code_chars)[:80]!r}")

    blocks = {s["key"]: s for s in segs if s["kind"] == "block"}
    scalars = [s for s in segs if s["kind"] == "scalar"]

    # ترويسة الأصل (ما قبل «export const») تُنقل كما هي
    head_end = text.rfind("\nexport const", 0, obj_open) + 1
    head = text[:head_end]

    out_dir = os.path.join(os.path.dirname(path), lid)
    os.makedirs(out_dir, exist_ok=True)
    written = {}
    for gname, gtitle, gkeys in GROUPS:
        present = [k for k in gkeys if k in blocks]
        if not present:
            continue
        chunks = [
            "/**",
            f" * {lid} — {gtitle} (الجزء «{gname}»)",
            f" * فُصل من {lid}.ts في الدفعة {BATCH} (سقف الحجم). القيم منقولة حرفياً.",
            " */",
            'import type { Lesson } from "@/types/lesson";',
            "",
        ]
        for k in present:
            lead = blocks[k].get("lead", "")
            if lead.strip():
                chunks.append(dedent2(lead).rstrip("\n"))
            chunks.append(
                f'export const {k}: NonNullable<Lesson["{k}"]> = '
                + value_text(text, blocks[k]) + ";"
            )
            chunks.append("")
        body = "\n".join(chunks).rstrip("\n") + "\n"
        p = os.path.join(out_dir, gname + ".ts")
        io.open(p, "w", encoding="utf-8").write(body)
        written[gname] = (p, body, present)

    # المُجمِّع
    asm = [head.rstrip("\n"), ""]
    for gname, _t, gkeys in GROUPS:
        if gname in written:
            asm.append(
                "import {" + ", ".join(written[gname][2]) + f'}} from "./{lid}/{gname}";'
            )
    asm.append("")
    asm.append(f"export const {sym}: Lesson = {{")
    for s in scalars:
        lead = s.get("lead", "")
        if lead.strip():
            asm.append(lead.rstrip("\n"))
        asm.append(text[s["start"]:s["end"]].rstrip("\n"))
    asm.append("")
    for gname, _t, gkeys in GROUPS:
        for k in gkeys:
            if k in blocks:
                asm.append(f"  {k},")
    asm.append("};")
    asm_text = "\n".join(asm).rstrip("\n") + "\n"
    io.open(path, "w", encoding="utf-8").write(asm_text)

    # 1) الاسترجاع النصّي
    for gname, (p, _body, present) in written.items():
        got = io.open(p, encoding="utf-8").read()
        for k in present:
            m = re.search(
                r'^export const ' + k + r': NonNullable<Lesson\["' + k + r'"\]> = (.*?);\n(?=\n|\Z)',
                got, re.S | re.M)
            if not m:
                raise SystemExit(f"⛔ {lid}: لم يُسترجع {k} من {gname}.ts")
            if m.group(1) != value_text(text, blocks[k]):
                raise SystemExit(f"⛔ {lid}: نقل {k} ليس حرفياً")

    # 2) قائمة المفاتيح
    asm_keys = re.findall(r"^  (\w+),$", asm_text, re.M) + \
        re.findall(r"^  (\w+):", asm_text, re.M)
    if sorted(asm_keys) != sorted(names):
        raise SystemExit(f"⛔ {lid}: مفاتيح المُجمِّع {sorted(asm_keys)} ≠ الأصل {sorted(names)}")

    # 4) السقف
    sizes = {g: len(io.open(p, encoding="utf-8").read().split("\n")) for g, (p, _b, _k) in written.items()}
    over = {g: n for g, n in sizes.items() if n > CEILING}
    if over or len(asm_text.split("\n")) > CEILING:
        raise SystemExit(f"⛔ {lid}: تجاوز السقف {over}")

    # 5) الراتشيت
    rel = os.path.relpath(path, ROOT)
    rtext = io.open(RATCHET, encoding="utf-8").read()
    entry = re.search(r"^.*" + re.escape(rel) + r".*$", rtext, re.M)
    removed = False
    if entry:
        cnt = len(re.findall(r"^.*" + re.escape(rel) + r".*$", rtext, re.M))
        if cnt != 1:
            raise SystemExit(f"⛔ {lid}: {cnt} قيداً في الراتشيت")
        rtext = rtext.replace(entry.group(0) + "\n", "")
        io.open(RATCHET, "w", encoding="utf-8").write(rtext)
        removed = True

    parts = " · ".join(f"{g}={n}" for g, n in sizes.items())
    print(f"✅ {lid}: {len(names)} مفتاحاً ({', '.join(names)}) ⇒ {len(sizes)} أجزاء "
          f"({parts}) + مُجمِّع {len(asm_text.split(chr(10))) - 1} سطراً · النقل الحرفي مطابق · "
          f"المفاتيح محفوظة · " + ("حُذف قيده من الراتشيت" if removed else "لا قيد له في الراتشيت"))


for lid in IDS:
    split_one(lid)
