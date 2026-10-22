# -*- coding: utf-8 -*-
"""مُدرِج عامّ لـ`optionExplanations` في أجزاء درس مقسَّم.

الاستعمال:  python3 scripts/add-option-explanations.py <parts-dir> <spec.json>

المواصفة قائمة عناصر: [{"file": "intro.ts", "qde": "…", "expl": [null, "…", …]}, …]
حيث `null` يقف عند الإجابة الصحيحة **بالترتيب الخام** (ترتيب الملف، لا ترتيب
`LESSONS` بعد تدوير الموازنة)، و`occ` اختيارياً لرقم التكرار إن ورد نصّ السؤال
أكثر من مرّة في الملف نفسه.

التحقّقات قبل الإدراج (يرفض ولا يخمّن):
 · وجود النصّ مرّة واحدة (أو `occ` صريح عند التكرار)،
 · عدد الشروح = عدد الخيارات (والعدّ يبدأ **بعد** قوس فتح `options` حتى لا يُحسب
   المفتاح المُقتبس `"options"` خياراً)،
 · موضع `null` = `correctIndex` الخام،
 · كل شرح غير الصحيحة يحوي شاهداً ألمانياً (≥3 أحرف لاتينية).
 · الكتلة المُدرجة مسبقاً **تُتخطّى** لا تُرفض، فالأداة قابلة لإعادة التشغيل.

العيوب التي عُولجت (موثّقة في docs/REFACTOR-PLAN.md):
 1) الخيارات متعدّدة الأسطر كانت تُعدّ صفراً ⇒ «4 شرحاً ≠ 0 خياراً».
 2) `questionDe` المكرَّر داخل الملف نفسه (قراءة واستماع) كان يُدرج على أول
    تطابق ⇒ دليلٌ صحيح النصّ خاطئ المرجع.
 3) المفاتيح المُقتبسة على نمط JSON (`"questionDe":`) لم يكن النمط يجدها، والإدراج
    الآن **بنمط الملف نفسه**.
 4) المفتاح المُقتبس `"options"` كان يُحسب خياراً خامساً.
"""
import io
import json
import os
import re
import sys

DIR = sys.argv[1]
SPEC = sys.argv[2]
GER = re.compile(r"[A-Za-zÄÖÜäöüß]{3,}")

RE_CI = re.compile(r'^\s*"?(correctIndex)"?\s*:\s*(\d+)\s*,')
RE_OPT = re.compile(r'^\s*"?(options)"?\s*:\s*\[')
RE_OE = re.compile(r'^\s*"?optionExplanations"?\s*:')
RE_IND = re.compile(r"^(\s*)")


def qde_regex(qde):
    return re.compile(r'^\s*"?(questionDe|question)"?\s*:\s*"' + re.escape(qde) + r'"')


items = json.load(io.open(SPEC, encoding="utf-8"))
applied = 0
problems = []
skipped = []
for it in items:
    p = os.path.join(DIR, it["file"])
    lines = io.open(p, encoding="utf-8").read().split("\n")
    rx = qde_regex(it["qde"])
    hits = [i for i, l in enumerate(lines) if rx.match(l)]
    occ = it.get("occ", 1)
    if not hits or occ > len(hits):
        problems.append(f'{it["file"]}: «{it["qde"]}» موجود {len(hits)} مرّة والمطلوب التكرار {occ}')
        continue
    if len(hits) > 1 and "occ" not in it:
        problems.append(f'{it["file"]}: «{it["qde"]}» موجود {len(hits)} مرّة (يلزم "occ" في المواصفة)')
        continue
    hit = hits[occ - 1]
    ci = next((j for j in range(hit, min(hit + 30, len(lines))) if RE_CI.match(lines[j])), None)
    if ci is None:
        problems.append(f'{it["file"]}: لم يُوجد correctIndex بعد «{it["qde"]}»')
        continue
    corr = int(RE_CI.match(lines[ci]).group(2))
    oi = next((k for k in range(hit, ci) if RE_OPT.match(lines[k])), None)
    nopt = None
    if oi is not None:
        blob = lines[oi][RE_OPT.match(lines[oi]).end():]
        if "]" not in blob:
            j = oi + 1
            while j < len(lines) and not re.match(r"^\s*\],?\s*$", lines[j]):
                blob += "\n" + lines[j]
                j += 1
            if j < len(lines):
                blob += "\n" + lines[j]
        nopt = len(re.findall(r'"(?:[^"\\]|\\.)*"', blob))
    expl = it["expl"]
    if nopt is not None and nopt != len(expl):
        problems.append(f'{it["file"]}: {len(expl)} شرحاً ≠ {nopt} خياراً في «{it["qde"]}»')
        continue
    nulls = [i for i, e in enumerate(expl) if e is None]
    if nulls != [corr]:
        problems.append(f'{it["file"]}: موضع null {nulls} ≠ correctIndex {corr} في «{it["qde"]}»')
        continue
    bad = [e for i, e in enumerate(expl)
           if i != corr and (not isinstance(e, str) or not e.strip() or not GER.search(e))]
    if bad:
        problems.append(f'{it["file"]}: شرح بلا شاهد في «{it["qde"]}»: {bad[:2]}')
        continue
    if any(RE_OE.match(lines[k]) for k in range(ci, min(ci + 4, len(lines)))):
        skipped.append(f'{it["file"]}: «{it["qde"]}» مُدرَج مسبقاً')
        continue
    indent = RE_IND.match(lines[ci]).group(1)
    key = '"optionExplanations":' if lines[ci].lstrip().startswith('"') else "optionExplanations:"
    arr = "[" + ", ".join("undefined" if e is None else json.dumps(e, ensure_ascii=False)
                          for e in expl) + "],"
    lines.insert(ci + 1, indent + key + " " + arr)
    io.open(p, "w", encoding="utf-8").write("\n".join(lines))
    applied += 1

print(f"أُدرج {applied} من {len(items)} كتلة شرح · تخطّى {len(skipped)} (مُدرَج مسبقاً)")
if problems:
    print("مشاكل:")
    for x in problems:
        print("  ؟ " + x)
    raise SystemExit(1)
print("مشاكل: لا شيء")
