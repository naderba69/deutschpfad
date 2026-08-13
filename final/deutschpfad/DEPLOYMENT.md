# 🚀 دليل النشر الكامل — درب الألمانية (DeutschPfad)

> ✅ **الحالة: المشروع مكتمل (المراحل الـ16 كلها) — النشر جاهز للتنفيذ الآن.**
> **المنصات:** GitHub (المستودع) → Vercel (الأساسي) → Render (الاحتياطي).
> كل الخطوات أدناه جاهزة — تحتاج فقط ~10 دقائق من التفرغ لتنفيذها مرة واحدة.

---

## ⚡ الطريقة السريعة (موصى بها): ملف واحد يولّد المشروع كاملاً

بدل نسخ ولصق عشرات الملفات يدوياً، تحتاج **ملفاً واحداً فقط**:

| الخطوة | التفصيل |
|---|---|
| 1 | من مساحة العمل، حمّل **`deutschpfad-bundle.sh`** (حزمة ذاتية الاستخراج) |
| 2 | على جهازك (Linux / macOS / WSL / Git Bash): `bash deutschpfad-bundle.sh` |
| 3 | سيولّد مجلد `deutschpfad/` **جاهزاً للإنتاج** (كل الملفات) |
| 4 | `cd deutschpfad && npm install && npm run build` — بناء كامل (يشمل الـ PWA) |
| 5 | تابع الخطوات أدناه للرفع إلى GitHub والنشر |

> 💡 **مهم:** تُعاد توليد الحزمة تلقائياً بعد كل مرحلة من مراحل المشروع — الحزمة في مساحة العمل **محدّثة دائماً** بأحدث إصدار، والحزمة النهائية بعد المرحلة 16 هي نسخة الإنتاج المعتمدة.

---

## 📋 المتطلبات المسبقة

1. حساب **GitHub** (مجاني): https://github.com/signup
2. حساب **Vercel** (مجاني، يُسجَّل بحساب GitHub مباشرة): https://vercel.com/signup
3. حساب **Render** (مجاني): https://render.com

---

## 1️⃣ الخطوة الأولى: رفع الكود إلى GitHub

### أ) إنشاء مستودع جديد
1. ادخل إلى https://github.com/new
2. اسم المستودع: `deutschpfad`
3. الوصف: "منصة تعليمية عربية متكاملة لتعليم اللغة الألمانية من A1 إلى B2"
4. **مهم:** لا تختار "Add README" ولا ".gitignore" (الملفات موجودة في المشروع)
5. اضغط **Create repository**

### ب) رفع الكود من جهازك (المجلد الذي يحوي المشروع)
افتح الطرفية داخل مجلد `deutschpfad` ونفّذ (استبدل `USER` باسمك):

```bash
git init
git add .
git commit -m "DeutschPfad v1.0 — منصة تعليم الألمانية A1→B2 كاملة (المراحل الـ16)"
git branch -M main
git remote add origin https://github.com/USER/deutschpfad.git
git push -u origin main
```

> 💡 **بديل أسهل بدون أوامر:** ارفع مجلد المشروع كاملاً (بدون `node_modules` و`.next`) عبر صفحة GitHub → تبويب **Add file → Upload files**.

### ج) تأكيد الرفع
- افتح `https://github.com/USER/deutschpfad` — يجب أن ترى الملفات.
- سيتفعّل فحص الـ CI تلقائياً (GitHub Actions) ويعرض ✅ عند نجاح `typecheck` + `build`.

---

## 2️⃣ الخطوة الثانية: النشر على Vercel (الأساسي ⭐)

### أ) الاستيراد
1. ادخل إلى https://vercel.com/new
2. اختر "Import Git Repository" → اختر مستودع `deutschpfad`
3. سيسمح Vercel بقراءة مستودعاتك العامة/الخاصة تلقائياً (نوّب عن التفويض عند الطلب)

### ب) الإعدادات (Framework Preset يُكتشف تلقائياً: Next.js)
| الحقل | القيمة |
|---|---|
| Framework Preset | **Next.js** (تلقائي) |
| Build Command | `npm run build` (تلقائي) |
| Output Directory | `.next` (تلقائي) |
| Node Version | **20.x** |
| Install Command | `npm install` (تلقائي) |

### ج) متغيرات البيئة (Environment Variables)
في شاشة الإعدادات قبل النشر (أو من **Settings → Environment Variables** لاحقاً):

| المفتاح | القيمة |
|---|---|
| `NEXT_PUBLIC_APP_URL` | `https://deutschpfad.vercel.app` (الرابط النهائي) |
| `NEXT_PUBLIC_LLM_DAILY_LIMIT` | `50` |
| `GEMINI_API_KEY` | *(اختياري — المرحلة 5)* |
| `GROQ_API_KEY` | *(اختياري)* |
| `OPENROUTER_API_KEY` | *(اختياري)* |

### د) النشر
اضغط **Deploy** → انتظر ~دقيقتين → استلم الرابط `https://deutschpfad.vercel.app` 🎉

### هـ) التحديثات المستقبلية
كل مرة ندفع تغييرات جديدة إلى `main`، **ينشر Vercel تلقائياً** — لا حاجة لأي تدخل يدوي.

---

## 3️⃣ الخطوة الثالثة: النشر على Render (الاحتياطي)

### أ) الاستيراد عبر Blueprint (الأسهل — الملف جاهز)
1. ادخل إلى https://render.com → **New → Blueprint**
2. اربط حساب GitHub واختر مستودع `deutschpfad`
3. سيكتشف Render ملف `render.yaml` تلقائياً ويكون كل شيء جاهزاً → **Apply**

### ب) أو يدوياً (New Web Service)
| الحقل | القيمة |
|---|---|
| Name | `deutschpfad` |
| Environment | **Node** |
| Build Command | `npm ci && npm run build` |
| Start Command | `npm start` |
| Plan | **Free** |
| Health Check Path | `/` |

ثم أضف نفس متغيرات البيئة من **Environment** (كما في Vercel).

### ج) ملاحظة مهمة عن الخطة المجانية
- بعد فترة خمول (~15 دقيقة) يدخل الخادم في **وضع النوم**، وأول زيارة بعده تأخذ **30-60 ثانية** للإحماء.
- الحل الاحتياطي: هذا بالضبط لماذا Vercel هو الأساسي! 😉

---

## 4️⃣ التحقق بعد النشر (Checklist) — 86 مساراً

### الفحص الآلي السريع (من الطرفية — استبدل الرابط)
```bash
BASE=https://deutschpfad.vercel.app
for p in "" learning-path design-system offline grammatik glossar reading verben \
         tageskapsel alltag redewendungen dialogues forms strategien \
         tests tests/placement tests/weekly tests/sprechen tests/level/a1 tests/level/b2 \
         assistant ai-tools dashboard dashboard/review dashboard/five-minutes \
         flashcards settings gamification placement lesson/a1-01 lesson/b2-10;
do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/$p")
  echo "$code  /$p"
done
```

### الفحص اليدوي
- [ ] الصفحة الرئيسية تعمل على الرابط الجديد (HTTP 200)
- [ ] `/learning-path` — 44 وحدة تعرض بتسلسل صحيح
- [ ] درس عشوائي `/lesson/a1-01` — المكونات العشرة + النطق + التمارين تعمل
- [ ] اختبار مستوى `/tests/level/b2` — التوقيت والسلّم التلقائي يعملان
- [ ] لوحة التحكم `/dashboard` — الخريطة الحرارية والخط المتواصل
- [ ] `/manifest.webmanifest` يُرجع JSON صحيح
- [ ] `/sw.js` موجود ولا يخضع للتخزين المؤقت للـ CDN (راجع `vercel.json`)
- [ ] تثبيت التطبيق على الهاتف (زر "تثبيت التطبيق" في المتصفح) يعمل
- [ ] وضع **Offline** في DevTools → إعادة تحميل → الموقع ما زال يعرض الصفحات المفتوحة + صفحة `offline/`
- [ ] فاتح/داكن يعملان على الرابط النهائي
- [ ] RTL/LTR سليمان (العنوان عربي من اليمين، الجمل الألمانية من اليسار)
- [ ] `sitemap.xml` يستخدم الرابط النهائي (وليس localhost)

> ⚠️ إن لاحظت أن `sitemap.xml` أو الـ OG tags يعرضون `localhost`، فالمتغير `NEXT_PUBLIC_APP_URL` غير مضبوط في المنصة — أضفه وأعد النشر.

---

## 5️⃣ نصائح إضافية

| الموضوع | النصيحة |
|---|---|
| **اسم النطاق** | بعد الاستقرار يمكنك ربط نطاق مخصص (مثل `deutschpfad.app`) من Vercel → Settings → Domains |
| **الـ LLM API** | مفاتيح Gemini/Groq/OpenRouter تُضاف في إعدادات المنصة فقط، ولا تُرفع أبداً إلى GitHub (محمية بـ `.gitignore`) |
| **نشر داخلي (Preview)** | Vercel ينشئ تلقائياً رابط معاينة لكل Pull Request — مثالي لتجربة التحديثات قبل الدمج |
| **النسخ الاحتياطي** | GitHub نفسه هو نسخة احتياطية كاملة للكود. وأي تقدم للمستخدمين يُحفظ محلياً على أجهزتهم (IndexedDB — المرحلة 4) |

---

## 🗺️ الخريطة الزمنية للنشر

```
اكتمال المراحل الـ16 (المشروع كامل)
        │
        ▼
  1. git push إلى GitHub      (دقائق — أوامر جاهزة أعلاه)
  2. استيراد في Vercel        (دقيقتان)
  3. Blueprint في Render      (دقائق)
        │
        ▼
  ✅ الموقع حي على الإنترنت — link: https://deutschpfad.vercel.app
```

> 💡 **تذكير أخير:** لا ترفع ملفات `.env.local` أو مفاتيح API إلى GitHub — كلها محمية بـ `.gitignore`.
> والموقع يعمل **بالكامل بدون مفاتيح**؛ أضفها لاحقاً من إعدادات المنصة لتفعيل الميزات الذكية (9 أدوات + معلم افتراضي).
