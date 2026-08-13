# 🚀 دليل النشر خطوة بخطوة — GitHub → Vercel → Render

> **المشروع**: DeutschPfad — منصة تعليم الألمانية A1→B2 (Next.js 14 + PWA)
> المستودع المحلي **جاهز بالفعل** (389 ملفاً ملتزماً، لا ملفات حساسة).
> كل ما تحتاجه: حساب GitHub + Vercel + Render (كلها مجانية). المدة ~15 دقيقة.

---

## الخطوة 0 — قبل أن نبدأ (مرة واحدة فقط)

تأكد من أن لديك:
- [ ] حساب على **GitHub** (github.com)
- [ ] حساب على **Vercel** (vercel.com — يمكن عبر "Continue with GitHub")
- [ ] حساب على **Render** (render.com — يمكن عبر "Continue with GitHub")

> 💡 التسجيل عبر GitHub يربط المنصات تلقائياً لاحقاً — الأسهل.

---

## الخطوة 1 — إنشاء المستودع على GitHub

1. افتح **github.com** وسجّل الدخول.
2. اضغط الزر الأخضر **New** (أو + في الأعلى ثم **New repository**).
3. املأ:
   - **Repository name**: `deutschpfad`
   - **Description** (اختياري): `منصة تعليم الألمانية A1→B2 — منهاج Goethe/CEFR كامل (Next.js + PWA)`
   - **Public** (موصى به — المجاني كامل) أو **Private**.
   - ⚠️ **لا** تضع علامة على "Add a README" ولا ".gitignore" ولا "License" — لأن المشروع جاهز وسيُدفع كاملاً (اختيار إضافة أي منها يسبب تعارضاً).
4. اضغط **Create repository**.
5. ستظهر لك شاشة برابط مثل: `https://github.com/اسمك/deutschpfad.git` ← **انسخه**.

---

## الخطوة 2 — الدفع (في جهازك/هنا)

### أ) على الحاسوب (Linux/Mac/Windows)
افتح الطرفية داخل مجلد المشروع ونفّذ:

```bash
bash push-github.sh https://github.com/اسمك/deutschpfad.git
```

### ب) على أندرويد (Termux) — الطريقة المضمونة
> ⚠️ **نصيحة أولاً**: إن كنت فككت النسخة القديمة من ZIP، أعد تنزيل النسخة المحدّثة (390 ملفاً — تتضمن `push-github.sh` و`PUSH-GUIDE.md`). للتحقق: `ls push-github.sh` يجب أن يعرض الملف.

1. تأكد من تثبيت git (مرة واحدة فقط):
   ```bash
   pkg install git -y
   ```
2. ادخل مجلد المشروع (كل أمر في سطر مستقل، أو اربطها بـ `&&`):
   ```bash
   cd /sdcard/Download/X/deutschpfad
   ```
   ثم نفّذ السكربت:
   ```bash
   bash push-github.sh https://github.com/اسمك/deutschpfad.git
   ```
   > إن ظهر `No such file or directory` فأنت في مجلد خاطئ أو نسخة قديمة — تحقق بـ `ls` ثم أعد تنزيل الـ ZIP المحدّث.

3. **إن لم يعمل السكربت** (أي سبب)، نفّذ الأوامر يدوياً واحدة واحدة (انسخ والصق):
   ```bash
   cd /sdcard/Download/X/deutschpfad
   pkg install git -y
   git config --global --add safe.directory /sdcard/Download/X/deutschpfad
   git config user.name "اسمك"
   git config user.email "اسمك@users.noreply.github.com"
   git init -b main
   git add .
   git commit -m "DeutschPfad v1.0"
   git branch -M main
   git remote add origin https://github.com/اسمك/deutschpfad.git
   git push -u origin main
   ```

- سيتطلب الدفع تسجيل الدخول إلى GitHub:
  - **Username**: اسم مستخدمك (مثل `naderba69`)
  - **Password**: **Personal Access Token** (وليس كلمة المرور!) — راجع الملاحظة أدناه.

> 🔑 **كيف تصنع Personal Access Token (مرة واحدة):**
> GitHub ← صورك ← **Settings** ← **Developer settings** ← **Personal access tokens** ← **Tokens (classic)** ← **Generate new token (classic)** ← فعّل صلاحية `repo` ← انسخه واستخدمه ككلمة مرور عند الدفع.

بعد نجاح الدفع: افتح `github.com/اسمك/deutschpfad` وستجد كل الملفات.

---

## الخطوة 3 — النشر على Vercel (الأساسي)

1. افتح **vercel.com** وسجّل الدخول (يفضّل عبر GitHub).
2. اضغط **Add New…** ← **Project**.
3. ستجد قائمة مستودعاتك ← اختر **deutschpfad** ← **Import**.
4. الإعدادات (اتركها افتراضية — Vercel يقرأ Next.js تلقائياً):
   - **Framework Preset**: Next.js (تلقائي)
   - **Build Command**: `npm run build` (تلقائي)
   - **Output Directory**: تلقائي
5. **Environment Variables** (كلها اختيارية — الميزات الذكية تعمل بدونها وتُخفى تلقائياً):
   | الاسم | القيمة | الوظيفة |
   |---|---|---|
   | `GEMINI_API_KEY` | مفتاح Google Gemini (اختياري) | المعلم الافتراضي + أدوات الذكاء |
   | `GROQ_API_KEY` | مفتاح Groq (اختياري) | بديل مجاني |
   | `OPENROUTER_API_KEY` | مفتاح OpenRouter (اختياري) | بديل آخر |
   | `NEXT_PUBLIC_APP_URL` | `https://deutschpfad.vercel.app` | الروابط المطلقة (تحسين) |
6. اضغط **Deploy** ← انتظر ~2 دقيقة ← ستحصل على رابط مثل `https://deutschpfad.vercel.app`.
7. ✅ **الموقع يعمل!** افتحه وتصفح المنصة.

> 🔄 بعد أي تعديل لاحق: ادفع تغييراتك إلى GitHub (`git push`) وستنشر Vercel تلقائياً.

---

## الخطوة 4 — النشر على Render (الاحتياطي)

1. افتح **render.com** وسجّل الدخول (يفضّل عبر GitHub).
2. من لوحة التحكم اضغط **New +** ← **Blueprint**.
3. اختر مستودع **deutschpfad**.
4. سيكتشف Render ملف **render.yaml** تلقائياً (إعدادات مسبقة جاهزة: بيئة Node 20، أمر البناء، أمر التشغيل، المنفذ).
5. اضغط **Apply Blueprint** ← يبدأ الإنشاء تلقائياً.
6. عند أول إعداد: أضف **Environment Variables** (اختيارية — نفس جدول Vercel أعلاه، مع `NEXT_PUBLIC_APP_URL=https://deutschpfad.onrender.com`).
7. انتظر البناء (~3-5 دقائق) ← ستحصل على رابط مثل `https://deutschpfad.onrender.com`.

> ℹ️ **الاحتياطي**: Render مجاني مع إيقاف تلقائي عند الخمول — أول زيارة بعد فترة قد تأخذ ~30 ثانية للإقلاع (طبيعي على الخطة المجانية).

---

## الخطوة 5 — الربط بمجال مخصص (اختياري)

- **Vercel**: Project ← Settings ← Domains ← أضف `deutschpfad.com` واتبع تعليمات DNS.
- **Render**: Service ← Settings ← Custom Domain.

---

## ملخص سريع (ورقة غش)

| الخطوة | أين؟ | ماذا تفعل؟ |
|---|---|---|
| 1 | github.com | New repository ← اسم `deutschpfad` ← Create |
| 2 | الطرفية | `bash push-github.sh https://github.com/ك/deutschpfad.git` |
| 3 | vercel.com | Add New → Project → Import deutschpfad → Deploy |
| 4 | render.com | New + → Blueprint → deutschpfad → Apply |

**بعدها منصتك على الإنترنت من رابطين!** 🎉
