# 🚀 النشر والتطوير المستمر — بتكلفة 0 دولار (Vercel مجاني)

> **الخلاصة:** المشروع كامل يعمل على **Vercel Free Tier** (0$) — كل الميزات
> (حتى الجديدة: المزامنة، دوري الأصدقاء، السوق، المعجم المصوّر، المحادثة)
> تعمل في المتصفح دون أي خادم أو قاعدة بيانات خارجية.

---

## ✅ ما يجعل التكلفة 0$ ممكناً

| الميزة | كيف تعمل مجاناً |
|---|---|
| كل التقدم | LocalStorage + IndexedDB على جهاز المستخدم |
| النطق والتقييم | Web Speech API في المتصفح (لا خادم) |
| الذكاء التعليمي | محركات محلية (Levenshtein، SM-2، Goethe-local) |
| المزامنة عبر الأجهزة | رابط مضغوط يحمل البيانات (Vercel يخدم صفحة ثابتة فقط) |
| دوري الأصدقاء | روابط تحدٍّ تحمل لقطة النتيجة |
| الصور (المعجم المصوّر) | إيموجي مدمج (لا استضافة ملفات) |
| سوق الجواهر | LocalStorage |
| النشر نفسه | Vercel Free: 100GB نطاق/شهراً، بناءات غير محدودة للمشاريع الشخصية |

## 🔁 سير العمل الحالي (CI/CD مجاني)

1. **الرفع**: `git push` إلى GitHub (راجع TERMUX-UPLOAD.md).
2. **Vercel يتكامل مع GitHub تلقائياً** — كل push إلى `main` يبني وينشر فوراً.
3. **Preview Deployments**: كل فرع/PR يحصل رابط معاينة مجاني — اختبر قبل الدمج.
4. **Rollback**: زر واحد في Vercel Dashboard لأي نسخة سابقة.

### اختبارات ما قبل النشر (تُشغَّل محلياً — لا تحتاج خادم CI)
```bash
npm run typecheck   # أنواع TypeScript
npm run lint        # ESLint
npx vitest run      # 149 اختبار وحدة
npx playwright test # 151 اختبار E2E (يحتاج بناء + خادم محلي)
npm run build       # البناء الإنتاجي
```

## ⚙️ تفعيل GitHub Actions (اختياري — يتطلب Token بصلاحية workflow)

> ⚠️ **Token الحالي (repo فقط) لا يسمح بدفع ملفات `.github/workflows`** —
> GitHub يرفض الدفع نفسه. عند الحصول على Token بصلاحية `workflow`:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npx vitest run
      - run: npm run build
```

ثم أنشئ `.github/workflows/ci.yml` في المجلد وارفعه — GitHub سيشغّله تلقائياً
على كل push. (الملف جاهز في `scripts/ci-workflow.yml` داخل المشروع.)

## 📱 تثبيت التطبيق على Android (TWA — بلا متجر)

المنصة PWA جاهزة (manifest + Service Worker). على Android:

1. افتح `https://deutschpfad.vercel.app` في **Chrome**.
2. اضغط قائمة ⋮ ← «إضافة إلى الشاشة الرئيسية».
3. ستظهر أيقونة التطبيق — يُفتح كتطبيق مستقل (بلا شريط عنوان).

**لتجربة TWA كاملة (اختياري، تقني):** مشروع Bubblewrap يغلف الموقع في APK
(يتطلب Node محلياً) — الوثيقة الرسمية: github.com/GoogleChromeLabs/bubblewrap.

## 🗺️ خارطة ترقية (عندما تحتاج لاحقاً)

| متى | الحل المجاني | التكلفة |
|---|---|---|
| إحصائيات الزوار | Vercel Analytics (مجاني للشخصي) | 0$ |
| أشكال/رسائل | Formspree / Vercel Forms | 0$ |
| حسابات حقيقية | Supabase Free Tier (500MB) | 0$ |
| ملفات صوت بشرية | استضافة في Vercel static (حتى ~500MB) | 0$ |
| نطاق مخصص | Vercel domain أو فرعي مجاني | 0$ حتى الدومين |

---
**الموثق:** 2026-08-15 · DeutschPfad v5.7
