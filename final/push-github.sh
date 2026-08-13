#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
#  push-github.sh — ادفع المشروع إلى GitHub (يعمل على Termux/أندرويد)
#
#  الاستعمال:
#     bash push-github.sh https://github.com/اسمك/deutschpfad.git
#
#  إن لم تعطه الرابط، سيطلب منك إدخاله.
#  أول تشغيل: سيسألك GitHub عن اسم المستخدم ثم TOKEN (وليس كلمة المرور).
# ═══════════════════════════════════════════════════════════════
set -e

# ── 1) التأكد من وجود git ──
if ! command -v git >/dev/null 2>&1; then
  echo "✗ git غير مثبت."
  echo "  على Termux ثبّته أولاً:  pkg install git"
  echo "  ثم أعد تشغيل هذا السكربت."
  exit 1
fi

# ── 2) الرابط ──
URL="${1:-}"
if [ -z "$URL" ]; then
  read -r -p "الصق رابط المستودع (HTTPS): " URL
fi
if [ -z "$URL" ]; then
  echo "✗ لم تدخل رابطاً. مثال: https://github.com/username/deutschpfad.git"
  exit 1
fi

# ── 3) حماية من خطأ ملكية المجلد (شائع على /sdcard في Termux) ──
git config --global --add safe.directory "$PWD" 2>/dev/null || true

# ── 4) الهوية المحلية (إن لم تكن مضبوطة) ──
git config user.name "naderba69" 2>/dev/null || true
git config user.email "naderba69@users.noreply.github.com" 2>/dev/null || true

# ── 5) تهيئة المستودع إن لم يكن مهيأ (نسخة ZIP فُكّت حديثاً) ──
if [ ! -d .git ]; then
  echo "→ لا يوجد مستودع بعد — أهيّئه الآن..."
  git init -b main
  git add .
  git commit -m "DeutschPfad v1.0 — منصة تعليم الألمانية A1→B2" || true
fi

# ── 6) المستودع البعيد والدفع ──
echo "→ إضافة المستودع البعيد..."
git remote remove origin 2>/dev/null || true
git remote add origin "$URL"

echo "→ الدفع إلى main..."
git push -u origin main

echo ""
echo "✅ تم الدفع بنجاح إلى: $URL"
echo "الآن: Vercel (Add New → Project → deutschpfad → Deploy) ثم Render (New + → Blueprint)"
