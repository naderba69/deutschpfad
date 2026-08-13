#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════
#  scripts/bundle.sh — باكر المشروع
#  يولّد ملفاً واحداً ذاتي الاستخراج «deutschpfad-bundle.sh»
#  يحوي كل ملفات المشروع (مضغوطة tar.gz ثم base64) بحيث يمكن
#  تنفيذه على أي جهاز لإعادة توليد المشروع كاملاً جاهزاً للإنتاج.
#
#  التشغيل:
#     bash scripts/bundle.sh
#  المخرج:
#     deutschpfad-bundle.sh   (في جذر المشروع — حمّله من مساحة العمل)
#
#  على الجهاز المستهدف:
#     bash deutschpfad-bundle.sh [مجلد الإخراج]
# ═══════════════════════════════════════════════════════════════════
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

OUT="$ROOT/deutschpfad-bundle.sh"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

echo "📦 تجهيز المشروع للتعبئة ..."

# ── الاستثناءات (مطابقة لـ .gitignore + المخرجات المولّدة) ──
EXCLUDES=(
  "node_modules"
  ".next"
  ".git"
  "public/sw.js"
  "public/sw.js.map"
  "workbox-*.js"
  "*.tsbuildinfo"
  ".DS_Store"
  "npm-debug.log*"
  ".env"
  ".env.local"
  ".env.*.local"
  "deutschpfad-bundle.sh"
  ".llm-counter.json"
)

# ── بناء الأرشيف المضغوط ──
TAR_ARGS=(-czf "$STAGE/project.tgz")
for pattern in "${EXCLUDES[@]}"; do
  TAR_ARGS+=(--exclude="$pattern")
done

tar "${TAR_ARGS[@]}" -C "$ROOT" .

FILE_COUNT="$(tar -tzf "$STAGE/project.tgz" | grep -v '/$' | wc -l | tr -d ' ')"
SIZE_KB="$(du -k "$STAGE/project.tgz" | cut -f1)"
echo "   الملفات المعبأة: $FILE_COUNT — حجم الأرشيف: ${SIZE_KB} KB"

# ── تحويل الأرشيف إلى base64 (مقسم على أسطر 76 حرفاً) ──
base64 < "$STAGE/project.tgz" | fold -w 76 > "$STAGE/payload.b64"

# ── توليد ملف التثبيت الذاتي ──
cat > "$OUT" <<'INSTALLER_EOF'
#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════
#  DeutschPfad — درب الألمانية (حزمة التثبيت الذاتي)
#  هذا الملف يحوي المشروع كاملاً بشكل مضغوط. عند تنفيذه يولّد
#  مجلد المشروع الجاهز للإنتاج في أي جهاز (Linux / macOS / WSL).
#
#  الاستخدام:
#     bash deutschpfad-bundle.sh [مجلد الإخراج]
#  مثال:
#     bash deutschpfad-bundle.sh ./deutschpfad
#
#  ثم:
#     cd deutschpfad && npm install && npm run build
# ═══════════════════════════════════════════════════════════════════
set -euo pipefail

MARKER="__DEUTSCHPFAD_PAYLOAD__"
DEST="${1:-./deutschpfad}"

# دالة فك base64 (تعمل على Linux و macOS)
if base64 --decode </dev/null >/dev/null 2>&1; then
  DECODE=(base64 --decode)
else
  DECODE=(base64 -D)
fi

echo "📦 استخراج مشروع درب الألمانية إلى: $DEST"
mkdir -p "$DEST"

# قراءة الحمولة (كل الأسطر بعد السطر المميز) → فك ترميز → فك ضغط
awk 'BEGIN{f=0} /^__DEUTSCHPFAD_PAYLOAD__$/{f=1; next} f{print}' "$0" \
  | tr -d '\n' \
  | "${DECODE[@]}" \
  | tar -xzf - -C "$DEST"

COUNT="$(find "$DEST" -type f | wc -l | tr -d ' ')"
echo "✅ تم توليد المشروع بنجاح: $COUNT ملفاً في «$DEST»"
echo
echo "── الخطوات التالية ──"
echo "  1) cd \"$DEST\""
echo "  2) npm install"
echo "  3) npm run build     # بناء الإنتاج (يولّد الـ PWA تلقائياً)"
echo "  4) npm start         # تشغيل محلي، أو انشر على Vercel/Render"
echo
echo "── الرفع إلى GitHub (استبدل USER باسمك) ──"
echo "  git init && git add . && git commit -m \"درب الألمانية — نسخة إنتاجية\""
echo "  git branch -M main"
echo "  git remote add origin https://github.com/USER/deutschpfad.git"
echo "  git push -u origin main"
echo
echo "دليل النشر الكامل موجود داخل المشروع: DEPLOYMENT.md"
exit 0

__DEUTSCHPFAD_PAYLOAD__
INSTALLER_EOF

cat "$STAGE/payload.b64" >> "$OUT"
chmod +x "$OUT"

echo
echo "✅ تم التعبئة بنجاح:"
echo "   الملف: $OUT"
echo "   عدد الملفات المعبأة: $FILE_COUNT"
echo "   الحجم: $(du -h "$OUT" | cut -f1)"
echo
echo "💡 انسخ هذا الملف الواحد إلى أي جهاز ونفّذه:"
echo "   bash deutschpfad-bundle.sh"
