import re, os, sys

# جمع كل الروابط الداخلية من src (app router = صفحات فعلية)
roots = ["src/app", "src/components"]
hrefs = set()
for root in roots:
    for dirpath, _, files in os.walk(root):
        for f in files:
            if not f.endswith((".tsx", ".ts")): continue
            p = os.path.join(dirpath, f)
            s = open(p, encoding="utf-8").read()
            # hrefs: /path
            for m in re.findall(r'href=\{?["\'`]([^"\'`{}]+)["\'`]?\}?', s):
                hrefs.add(m)
            # Link href={...} بثوابت
            for m in re.findall(r'href:\s*"([^"]+)"', s):
                hrefs.add(m)
            # a href
            for m in re.findall(r'\bhref="([^"]+)"', s):
                hrefs.add(m)

# الصفحات الفعلية في app router
pages = set()
for dirpath, _, files in os.walk("src/app"):
    if "api" in dirpath: continue
    for f in files:
        if f in ("page.tsx", "page.ts"):
            rel = os.path.relpath(dirpath, "src/app").replace(os.sep, "/")
            route = "/" if rel == "." else "/" + rel
            # ديناميكية: [lessonId] → نستبدلها بـ a1-01، [level] بـ a1، [unitId] بـ a1-01
            if "[lessonId]" in route: route = route.replace("[lessonId]", "a1-01")
            if "[level]" in route: route = route.replace("[level]", "a1")
            if "[unitId]" in route: route = route.replace("[unitId]", "a1-01")
            pages.add(route)

# فحص الروابط الداخلية
internal = sorted(h for h in hrefs if h.startswith("/") and not h.startswith("//"))
missing = []
for h in internal:
    # تجاهل الروابط مع anchors و query
    base = h.split("#")[0].split("?")[0]
    if base in ("", "/"): continue
    # dynamic base match
    if base in pages: continue
    # match dynamic patterns
    import fnmatch
    ok = False
    for p in pages:
        if "[lessonId]" in p or "[level]" in p or "[unitId]" in p:
            pass
    if not ok:
        missing.append(h)

# طباعة روابط داخلية فريدة قد تكون ميتة
print("إجمالي روابط داخلية:", len(internal))
print("روابط فريدة قد تكون ميتة (يدوي بعد استبعاد الديناميكية):")
for h in sorted(set(internal)):
    base = h.split("#")[0].split("?")[0]
    if base in pages or base == "": continue
    print("  ", h)
