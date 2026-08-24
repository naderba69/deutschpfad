#!/usr/bin/env python3
"""يطبّق ترقية العمق الأكاديمي على ملف درس واحد انطلاقاً من حمولة JSON.

الاستعمال:  python3 scripts/apply-depth.py payload.json

بنية الحمولة:
{
  "file": "src/data/lessons/a1/a1-02.ts",
  "theory": {                      # مفتاح = معرّف الكتلة
     "t1": {"explanationAr": "...", "whyAr": "...",
            "comparisonWithArabic": "...", "eselsbruecke": "...",
            "examples": [{"de":"","ar":""}],
            "commonMistakes": [{"wrong":"","right":"","whyAr":""}],
            "relatedRuleComparison": {"title":"","content":""}}
  },
  "reading": {...},                # كائن ReadingText كامل
  "practice": [ ... ],             # تمارين تُضاف إلى نهاية practiceBank
  "flashcards": [ ... ]            # بطاقات تُضاف إلى نهاية flashcards
}
كل المفاتيح اختيارية عدا "file".
"""
import json, re, sys

STR_FIELDS = ("explanationAr", "whyAr", "comparisonWithArabic", "eselsbruecke")
ARR_FIELDS = ("examples", "commonMistakes")


def block_span(s: str, bid: str):
    """مدى كتلة نظرية واحدة داخل مصفوفة theory."""
    i = s.index('id: "%s",' % bid)
    m = re.compile(r"\n    \{\n      id: \"").search(s, i)
    end = m.start() if m else s.index("\n  ],\n", i)
    return i, end


def matching_bracket(seg: str, start: int) -> int:
    """فهرس قوس الإغلاق المطابق للقوس عند start."""
    open_c, close_c = seg[start], {"[": "]", "{": "}"}[seg[start]]
    depth = 0
    j = start
    in_str = False
    while j < len(seg):
        c = seg[j]
        if in_str:
            if c == "\\":
                j += 2
                continue
            if c == '"':
                in_str = False
        elif c == '"':
            in_str = True
        elif c == open_c:
            depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0:
                return j
        j += 1
    raise ValueError("قوس غير مغلق")


def js(value, indent: int) -> str:
    """JSON مُنسَّق بمسافات بادئة، مع undefined بدل null."""
    body = json.dumps(value, ensure_ascii=False, indent=2)
    pad = " " * indent
    out = "\n".join((pad + ln if k else ln) for k, ln in enumerate(body.split("\n")))
    return re.sub(r"(?<![\w\"])null(?![\w\"])", "undefined", out)


def repl_str_field(s: str, bid: str, field: str, value: str) -> str:
    i, end = block_span(s, bid)
    seg = s[i:end]
    pat = re.compile(r"\n      %s:\s*\n?\s*(\"(?:[^\"\\]|\\.)*\")," % field)
    m = pat.search(seg)
    assert m, "الحقل %s غير موجود في %s" % (field, bid)
    newseg = seg[: m.start()] + "\n      %s:\n        %s," % (field, json.dumps(value, ensure_ascii=False)) + seg[m.end():]
    return s[:i] + newseg + s[end:]


def repl_arr_field(s: str, bid: str, field: str, items) -> str:
    i, end = block_span(s, bid)
    seg = s[i:end]
    m = re.search(r"\n      %s: \[" % field, seg)
    assert m, "الحقل %s غير موجود في %s" % (field, bid)
    j = matching_bracket(seg, m.end() - 1)
    body = ",\n".join("        " + json.dumps(x, ensure_ascii=False) for x in items)
    newseg = seg[: m.start()] + "\n      %s: [\n%s,\n      ]" % (field, body) + seg[j + 1:]
    return s[:i] + newseg + s[end:]


def set_related(s: str, bid: str, value) -> str:
    i, end = block_span(s, bid)
    seg = s[i:end]
    m = re.search(r"\n      relatedRuleComparison: \{", seg)
    payload = "\n      relatedRuleComparison: " + js(value, 6) + ","
    if m:
        j = matching_bracket(seg, m.end() - 1)
        k = j + 1
        if k < len(seg) and seg[k] == ",":
            k += 1
        newseg = seg[: m.start()] + payload + seg[k:]
    else:
        # أدرِج قبل قوس إغلاق الكتلة الأخير
        k = seg.rindex("\n    },")
        newseg = seg[:k] + payload + seg[k:]
    return s[:i] + newseg + s[end:]


def insert_reading(s: str, reading) -> str:
    anchor = "\n  listening: {"
    assert s.count(anchor) == 1, "مرساة listening غير فريدة"
    if "\n  reading: {" in s:
        i = s.index("\n  reading: {")
        s = s[:i] + s[s.index(anchor):]
    return s.replace(anchor, "\n  reading: " + js(reading, 2) + ",\n" + anchor)


def append_to_array(s: str, key: str, items) -> str:
    """يُلحق عناصر بنهاية مصفوفة من مصفوفات الدرس العليا."""
    m = re.search(r"\n  %s: \[" % key, s)
    assert m, "المصفوفة %s غير موجودة" % key
    j = matching_bracket(s, m.end() - 1)
    k = s.rindex("\n", 0, j)  # بداية سطر قوس الإغلاق
    body = ",\n".join("    " + json.dumps(x, ensure_ascii=False) for x in items)
    body = re.sub(r"(?<![\w\"])null(?![\w\"])", "undefined", body)
    prefix = s[:k].rstrip()
    if not prefix.endswith(","):
        prefix += ","
    return prefix + "\n" + body + "," + s[k:]


def main() -> None:
    payload = json.load(open(sys.argv[1], encoding="utf-8"))
    path = payload["file"]
    s = open(path, encoding="utf-8").read()

    for bid, fields in (payload.get("theory") or {}).items():
        for f in STR_FIELDS:
            if f in fields:
                s = repl_str_field(s, bid, f, fields[f])
        for f in ARR_FIELDS:
            if f in fields:
                s = repl_arr_field(s, bid, f, fields[f])
        if "relatedRuleComparison" in fields:
            s = set_related(s, bid, fields["relatedRuleComparison"])
        print("  كتلة %s ✔" % bid)

    if payload.get("reading"):
        s = insert_reading(s, payload["reading"])
        n = len(" ".join(payload["reading"]["paragraphs"]).split())
        print("  نصّ قراءة ✔ (%d كلمة)" % n)

    if payload.get("practice"):
        s = append_to_array(s, "practiceBank", payload["practice"])
        print("  +%d تمرين ✔" % len(payload["practice"]))

    if payload.get("flashcards"):
        s = append_to_array(s, "flashcards", payload["flashcards"])
        print("  +%d بطاقة ✔" % len(payload["flashcards"]))

    open(path, "w", encoding="utf-8").write(s)
    print("كُتب %s" % path)


if __name__ == "__main__":
    main()
