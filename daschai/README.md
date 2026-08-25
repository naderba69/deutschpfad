# 🚀 OX-Alpha Workbench Pro

> **المنصة الهندسية الذاتية المتكاملة للذكاء الاصطناعي وتطوير البرمجيات**  
> **Autonomous AI Copilot & GitHub Agent • In-Browser Python Sandbox • Local PDF RAG • Web Speech (Arabic & English) • Vision OCR • Offline PWA**

---

## 🌟 نظرة عامة (Overview)

تم تصميم وتطوير تطبيق **OX-Alpha Workbench Pro** ليكون منصة إنتاجية وهندسية متكاملة وقابلة للرفع المباشر على **GitHub** والنشر الفوري على **Vercel** بنقرة زر واحدة. يجمع التطبيق بين قوة نماذج الذكاء الاصطناعي العالمية (Claude 3.5 Sonnet, GPT-4o, DeepSeek R1, Llama 3.3, Gemini) مع بيئة تنفيذ محلية متطورة داخل المتصفح.

---

## 📦 الملفات ومحتويات المشروع (Deliverables)

```
├── index.html               # النسخة الأساسية الكاملة المستقلة (Single-File App جاهز لـ Vercel / GitHub Pages)
├── .gitignore               # استثناءات Git الشاملة
├── .env.example             # دليل وتوثيق المتغيرات البيئية
├── README.md                # دليل التثبيت، المعمارية، والنشر
└── nextjs-app/              # نسخة Next.js 14 الكاملة مع App Router و TypeScript و Tailwind
    ├── app/
    │   ├── api/chat/route.ts       # Edge API Proxy للذكاء الاصطناعي
    │   ├── api/github/route.ts     # مسار تنفيذ أوامر GitHub
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/                 # مكونات React التفاعلية
    │   ├── ChatInterface.tsx
    │   ├── CodeBlock.tsx           # عارض الأكواد ومُشغل Python Wasm
    │   ├── MessageItem.tsx
    │   ├── Sidebar.tsx
    │   ├── SettingsModal.tsx
    │   ├── GitHubWorkbench.tsx     # مستكشف شجرة ملفات GitHub
    │   └── UsageModal.tsx
    ├── lib/
    │   ├── github.ts               # عميل ومكتبة أدوات GitHub الـ 8
    │   ├── openrouter.ts
    │   └── types.ts
    ├── package.json
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## ⚡ أبرز الميزات والوظائف (Core & Advanced Features)

### 1. 🐍 تشغيل أكواد Python وجافاسكريبت داخل المتصفح (In-Browser Execution Sandbox)
- **Pyodide (WebAssembly)**: زر `▶ تشغيل Python` على كتل الأكواد لتنفيذ كود بايثون مباشرة داخل المتصفح دون الحاجة لأي خادم خلفي، مع التقاط `stdout` و `stderr` وعرض شاشة طرفية (Terminal) تفاعلية.
- **JavaScript Sandbox**: زر `▶ تشغيل JS` لتنفيذ واختبار دوال وشفرات JavaScript ورؤية نتائج الـ `console.log` الفورية.
- **عارض رسومات SVG التفاعلي**: يكتشف رسومات الـ SVG ويقوم بتصييرها كلوحة بصرية حية مع زر لتنزيلها كملف `.svg`.

### 2. 📚 محادثة مستندات PDF محلياً (Local PDF RAG via PDF.js)
- إمكانية سحب وإفلات أو إرفاق ملفات **PDF** وكتب وأبحاث وملفات نصية وأكواد برمجة (`.pdf`, `.txt`, `.md`, `.py`, `.json`, `.csv`).
- استخراج النصوص محلياً صفحة بصفحة داخل المتصفح عبر **PDF.js** دون إرسال ملفاتك لأي طرف ثالث، وتضمينها مع الأسئلة ليقوم الذكاء الاصطناعي بتلخيصها وتحليلها والإجابة عن تفاصيلها.

### 3. 🤖 عميل GitHub الذاتي وحلقة الأدوات (Autonomous GitHub Agent)
- حلقة تفاعلية ذاتية (Agent Loop) تنفذ 8 أدوات تلقائياً عبر مفتاح الـ PAT:
  1. `get_tree`: قراءة شجرة مجلدات وملفات المستودع.
  2. `get_file_content`: جلب وقراءة محتوى أي ملف في المستودع.
  3. `write_file`: كتابة وتحديث الملفات مع عمل Commit تلقائي.
  4. `create_branch`: إنشاء فروع جديدة من الـ HEAD.
  5. `create_pull_request`: فتح طلبات سحب (Pull Requests) مع العنوان والوصف.
  6. `get_diff`: مقارنة الفروع وفحص التغييرات والـ Patches.
  7. `read_multiple_files`: قراءة حزم متعددة من الملفات دفعة واحدة.
  8. `list_branches`: عرض كافة فروع المستودع.
- **لوحة GitHub Workbench**: مستكشف ملفات تفاعلي لتصفح الكود، ومراجعته مع الذكاء الاصطناعي.

### 4. 🎙️ الدعم الصوتي الكامل (Voice STT / TTS)
- **تحويل النص إلى صوت (TTS)**: قراءة رسائل المساعد صوتياً بنطق عربي وإنجليزي مع التحكم بالسرعة والنبرة.
- **الإملاء الصوتي (STT)**: إدخال الأوامر بالصوت مع تبديل سريع بين العربية (`ar-SA`) والإنجليزية (`en-US`).

### 5. 👁️ التعرف الضوئي على الحروف (Tesseract.js OCR)
- استخراج النصوص التلقائي من لقطات الشاشة والصور مع شريط تقدم فوري ودمجها مع المدخلات البصرية.

### 6. 📴 وضع العمل دون اتصال (Offline Mode) وتطبيق الويب التقدمي (PWA)
- كشف حالة الشبكة وتخزين الرسائل في طابور محلي (Queue) ليتم إرسالها تلقائياً فور عودة الإنترنت.
- تثبيت التطبيق كبرنامج مستقل على الحاسوب أو الهاتف عبر Service Worker و Manifest.

---

## 🔑 المتغيرات البيئية (Environment Variables)

```env
# مفتاح OpenRouter API للوصول إلى النماذج
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# النموذج الافتراضي
NEXT_PUBLIC_DEFAULT_MODEL=anthropic/claude-3.5-sonnet

# رمز وصول GitHub الشخصي (Personal Access Token مع صلاحية repo)
GITHUB_PAT=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# إعدادات المستودع المستهدف
GITHUB_OWNER=username-or-org
GITHUB_REPO=repo-name
GITHUB_DEFAULT_BRANCH=main

# الحدود اليومية للاستهلاك للتنبيه
DAILY_REQUEST_LIMIT=100
DAILY_TOKEN_LIMIT=100000

# رابط التطبيق على Vercel
NEXT_PUBLIC_APP_URL=https://ox-alpha-workbench.vercel.app
```

---

## 🚀 دليل الرفع إلى GitHub والنشر على Vercel (Deployment Guide)

### 1️⃣ الرفع إلى مستودع GitHub
قم بإنشاء مستودع جديد على GitHub ثم نفذ الأوامر التالية من المجلد:
```bash
git init
git add .
git commit -m "Initial commit: OX-Alpha Workbench Pro Production Release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

### 2️⃣ النشر على Vercel (Deployment)

#### الطريقة الأولى: نشر النسخة المستقلة `index.html` (أسرع وأبسط خيار)
1. ادخل إلى حسابك في [Vercel Dashboard](https://vercel.com/new).
2. اختر مستودع الـ GitHub الذي رفعته للتو.
3. في خيار **Framework Preset**، اختر **Other** أو **Static**.
4. اضغط **Deploy**. سيقوم Vercel بنشر `index.html` فوراً كرابط إنتاجي عالمي سريع!

#### الطريقة الثانية: نشر نسخة `Next.js 14`
1. عند استيراد المستودع على Vercel، عيّن **Root Directory** إلى مجلد `nextjs-app`.
2. في قسم **Environment Variables**، أضف المفاتيح الموجودة في `.env.example`.
3. اضغط **Deploy**.

---

## 💻 التشغيل والتجربة المحلية (Local Development)

```bash
# لتشغيل النسخة المستقلة محلياً:
python3 -m http.server 3000

# لتشغيل نسخة Next.js:
cd nextjs-app
npm install
npm run dev
```

افتح في متصفحك: `http://localhost:3000`

---

## 📄 الترخيص (License)
MIT License © 2026 OX-Alpha Workbench Pro.
