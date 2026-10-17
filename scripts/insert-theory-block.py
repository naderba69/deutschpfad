#!/usr/bin/env python3
"""إدراج كتلة نظرية + تدريبات + بطاقات في درس قائم.

كُتب لتنفيذ المرحلة ج من خطة توسعة المنهج (رفع العمق والكثافة في الوحدات
دون 70). الإدراج اليدوي المتكرّر بـ sed أو بالاستبدال النصّي خطر على ملفات
بحجم 25-45 كيلوبايت: مرساة واحدة غامضة تكفي لإفساد درس كامل بصمت.

الأداة تفرض ثلاثة شروط قبل الكتابة:
  · نهاية مصفوفة theory تُحدَّد ببنية الملف لا بتخمين رقم سطر
  · معرّفات التدريبات والبطاقات الجديدة لا تصطدم بالموجودة
  · لا يُكتب شيء إن فشل أي تأكيد (كل شيء أو لا شيء)

الاستعمال: python3 scripts/insert-theory-block.py <payload.json>
حيث payload.json يحوي: path, theoryBlock, exercises[], flashcards[]
"""
import json
import re
import sys


def find_array_bounds(lines, name):
    """يعيد (فهرس سطر البداية، فهرس سطر الإغلاق) لمصفوفة على المستوى الأعلى."""
    start = next(i for i, l in enumerate(lines) if l.startswith(f"  {name}: ["))
    end = next(i for i, l in enumerate(lines) if i > start and l.rstrip() == "  ],")
    return start, end


def main(payload_path):
    p = json.load(open(payload_path, encoding="utf-8"))
    path = p["path"]
    src = open(path, encoding="utf-8").read()

    # ── 1) الكتلة النظرية ───────────────────────────────────────────
    lines = src.split("\n")
    _, t_end = find_array_bounds(lines, "theory")
    block = p["theoryBlock"].rstrip("\n")

    # معرّف الكتلة يجب ألا يتكرّر
    new_id = re.search(r'id: "(t\d+)"', block).group(1)
    existing_t = re.findall(r'\n      id: "(t\d+)"', src)
    assert new_id not in existing_t, f"{path}: معرّف الكتلة {new_id} مستعمل ({existing_t})"

    # titleDe فريد عالمياً (حارس curriculum-coverage يفرضه)
    lines.insert(t_end, block)
    src = "\n".join(lines)

    # ── 2) التدريبات ────────────────────────────────────────────────
    #
    # يُدرَج عند سطر إغلاق مصفوفة practiceBank نفسها، لا بالبحث عن آخر
    # معرّف "eN". النسخة القديمة كانت ترسو على آخر eN في بقية الملف، فإن
    # لم يكن ذلك البند آخرَ عنصرٍ في practiceBank انزلق الإدراج إلى
    # المصفوفة التالية (miniTest) بصمت — وقد وقع فعلاً في a1-07.
    if p.get("exercises"):
        lines = src.split("\n")
        pb_start, pb_end = find_array_bounds(lines, "practiceBank")
        existing_e = re.findall(r'id: "(e\d+)"', "\n".join(lines[pb_start:pb_end]))
        for ex in p["exercises"]:
            eid = re.search(r'id: "(e\d+)"', ex).group(1)
            assert eid not in existing_e, f"{path}: معرّف التدريب {eid} مستعمل"
        block = "\n".join(x.rstrip("\n") for x in p["exercises"])
        lines.insert(pb_end, block)
        src = "\n".join(lines)
        # تأكيد: العدد داخل حدود practiceBank ارتفع بالمقدار المطلوب
        lines2 = src.split("\n")
        s2, e2 = find_array_bounds(lines2, "practiceBank")
        after = re.findall(r'id: "(e\d+)"', "\n".join(lines2[s2:e2]))
        assert len(after) == len(existing_e) + len(p["exercises"]), (
            f"{path}: التدريبات لم تدخل practiceBank فعلاً"
        )

    # ── 3) البطاقات ─────────────────────────────────────────────────
    if p.get("flashcards"):
        existing_fc = re.findall(r'id: "(fc\d+)"', src)
        last_fc = existing_fc[-1]
        m = list(re.finditer(r'    \{ id: "%s"[^\n]*\n' % last_fc, src))
        assert len(m) == 1, f"{path}: تعذّر تحديد آخر بطاقة {last_fc}"
        for fc in p["flashcards"]:
            fid = re.search(r'id: "(fc\d+)"', fc).group(1)
            assert fid not in existing_fc, f"{path}: معرّف البطاقة {fid} مستعمل"
        added = "".join(x if x.endswith("\n") else x + "\n" for x in p["flashcards"])
        src = src[: m[0].end()] + added + src[m[0].end():]

    open(path, "w", encoding="utf-8").write(src)
    print(f"✔ {path}: +1 كتلة، +{len(p.get('exercises', []))} تدريب، +{len(p.get('flashcards', []))} بطاقة")


if __name__ == "__main__":
    main(sys.argv[1])
