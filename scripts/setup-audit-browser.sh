#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════
#  setup-audit-browser.sh — يجهّز متصفحاً للتدقيق البصري خارج تبعيات المشروع.
#
#  لماذا السكربت؟ أدوات الجولات (audit-every-page · audit-keyboard ·
#  audit-robustness · audit-zoom) تحتاج puppeteer-core و@sparticuz/chromium،
#  ولا تُضاف إلى dependencies كي لا تُثقل بناء التطبيق. وكانت الوصفة مكتوبة
#  نثراً في الوثائق، فتُعاد يدوياً وبأخطاء (نسيتُ خطوة المكتبات الوهمية مرة
#  ففشل التشغيل). هذا الملف يجعلها أمراً واحداً قابلاً للتكرار.
#
#  الاستخدام:  bash scripts/setup-audit-browser.sh
#  ثم:        npm run audit:robustness   (أو audit:zoom / audit:keyboard)
#
#  ملاحظة: المكتبات الوهمية (libnss3/libnspr4/libnssutil3) تُبنى لأن Debian
#  في هذه البيئة يفتقدها؛ وهي تكفي للفحص البصري فقط (Chromium يستعمل BoringSSL
#  داخلياً)، ولا تُغني عن متصفح إنتاجي.
# ═══════════════════════════════════════════════════════════════════════════
set -euo pipefail

WORK="${AUDIT_BROWSER_DIR:-/tmp/vb}"
STUBS="${AUDIT_STUB_DIR:-/tmp/stublibs}"
CHROME="${AUDIT_CHROMIUM_PATH:-/tmp/chromium}"

echo "▸ تجهيز الحزم في $WORK"
mkdir -p "$WORK"
cd "$WORK"
[ -f package.json ] || npm init -y >/dev/null
npm i puppeteer-core @sparticuz/chromium --no-audit --no-fund >/dev/null

echo "▸ تنزيل Chromium (إن لم يكن موجوداً)"
node -e 'require("@sparticuz/chromium").default.executablePath().then((p) => console.log(p))' >/dev/null
if [ ! -x "$CHROME" ]; then
  # executablePath يستخرج الملف إلى /tmp/chromium افتراضياً
  node -e 'require("@sparticuz/chromium").default.executablePath().then((p) => console.log(p))'
fi

echo "▸ بناء مكتبات كعب NSS/NSPR في $STUBS"
mkdir -p "$STUBS"
cd "$STUBS"
if command -v nm >/dev/null && command -v gcc >/dev/null; then
  nm -D --undefined-only "$CHROME" | awk '{print $2}' | grep -E "@(NSS|NSSUTIL)_" | sed 's/@/ /' | sort -u > syms.txt || true
  if [ -s syms.txt ]; then
    awk '{a[$2]=a[$2]"; "$1} END{for(v in a){gsub(/^; /,"",a[v]); print v" { global: "a[v]"; local: *; };"}}' syms.txt > all.map
    awk '{print "long "$1"(void){return 0;}"}' syms.txt > stubs.c
    gcc -shared -fPIC -o libnss3.so stubs.c -Wl,--version-script=all.map
    gcc -shared -fPIC -o libnssutil3.so stubs.c -Wl,--version-script=all.map
  fi
  nm -D --undefined-only "$CHROME" | awk '{print $2}' | grep -E "^PR_" | sed 's/@.*//' | sort -u | grep -v "^PR_Now$" | awk '{print "long "$1"(void){return 0;}"}' > nspr.c || true
  cat >> nspr.c <<'EOF'
#include <time.h>
long PR_Now(void) { struct timespec ts; clock_gettime(CLOCK_REALTIME, &ts);
  return (long)ts.tv_sec * 1000000L + ts.tv_nsec / 1000L; }
EOF
  gcc -shared -fPIC -o libnspr4.so nspr.c
else
  echo "  ⚠ لا nm/gcc — تخطّي المكتبات الوهمية (تحتاجها بعض أنظمة Debian فقط)"
fi

echo "▸ تحقّق"
cd "$WORK"
LD_LIBRARY_PATH="$STUBS" node -e '
const p = require("puppeteer-core");
p.launch({args:["--no-sandbox"], executablePath: process.env.AUDIT_CHROMIUM_PATH || "/tmp/chromium"})
 .then(async (b) => { console.log("  ✓", await b.version()); await b.close(); })
 .catch((e) => { console.error("  ✗", e.message); process.exit(1); });
'
echo
echo "جاهز. شغّل الأدوات بـ:"
echo "  NODE_PATH=$WORK/node_modules LD_LIBRARY_PATH=$STUBS npm run audit:robustness"
