# تدقيق كل صفحة — الجولة الثانية (2026-10-13)

**ما هذا الملف:** نتيجة الجولة الثانية من «لكل صفحة لا عينات» على **189 مساراً × 4 مقاسات
= 756 فحصاً**، بصفر ملاحظات، مع سجل الإصلاحات التي أوصلتها إلى ذلك.

**ما ليس:** إثبات جودة كاملة. هذا القياس يرى ما يمكن قياسه آلياً (بنية، تباين، اتجاه،
تخطيط، إتاحة). لا يقيس جمال التصميم ولا صحة المحتوى اللغوي ولا التعلّم — تبقى قياسات
القابلية للاستعمال والاحتفاظ للمتعلمين الحقيقيين
(`docs/USABILITY-RETENTION-PROTOCOL-AR.md`).

**الجولة الأولى:** `docs/AUDIT-EVERY-PAGE-2026-10-13.md` (756 فحصاً، صفر ملاحظات على
أبعادها السبعة). هذه الجولة **توسّع المعيار** بأبعاد جديدة لم تكن مقيسة.

## 1. الأبعاد المقيسة الآن

| البعد | كيف يُقاس | عتبة القبول |
|---|---|---|
| رمز HTTP | استجابة الخادم | 200/304 (و307 إعادة توجيه مقصودة) |
| فيضان أفقي | `scrollWidth − clientWidth` على `<html>` | 0px |
| عناصر خارج الشاشة | مستطيل كل عنصر مرئي خارج حدود العرض (خارج حاويات التمرير) | 0 |
| نص مقصوص | `scrollWidth > clientWidth` مع `overflow:hidden`، **باستثناء** `text-overflow:ellipsis` و`line-clamp` | 0 |
| صور | مكسورة أو بلا `alt` | 0 |
| العناوين | عدد `h1` وتسلسل h1→h6 بلا قفز | `h1=1` وصفر قفزات |
| أزرار بلا اسم | `a`/`button` بلا نص ولا `aria-label` ولا `alt` | 0 |
| معرّفات مكررة | تكرار `id` في الصفحة | 0 |
| أهداف اللمس | عرض ≤640px، هدف <24×24 (WCAG 2.5.8)، **باستثناء** الروابط النصية داخل جملة | 0 |
| الخطوط | نص <11px على الجوال | ≤6 (سقف ضبط) |
| التباين (فاتح + داكن) | WCAG AA: 4.5:1 نص عادي، 3:1 نص كبير — مع تركيب شفافية اللونين و**تركيب التدرّجات اللونية** | 0 |
| `lang` للعربية | كل نص لاتيني/ألماني داخل عنصر بلا `lang` | 0 |
| `<title>` | طول العنوان الكامل بعد لاحقة الموقع | ≤70 حرفاً |

### تصحيحات المنهج في هذه الجولة

1. **التباين على التدرّجات:** النسخة السابقة اعتبرت خلفية الشريط المتدرّج شفافة فقاست
   النص الأبيض على خلفية الصفحة البيضاء (1.05:1) — وهي قراءة خاطئة. الآن يُركَّب كل
   تدرّج فوق ما تحته ويُحسب **أسوأ محطة** لونية.
2. **ترتيب تركيب الشفافية:** كان `blend(الطفل, الأب)` معكوماً؛ صُحّح إلى تركيب الأب ثم
   الطفل، ما أظهر عيوباً حقيقية كانت مخفية (مثل `bg-card` الشفاف فوق تدرّج).
3. **استثناءات WCAG المقصودة:** الرابط داخل جملة (2.5.8)، والقص المتعمَّد بـellipsis
   أو `line-clamp`، و`.sr-only` — تُستثنى ولا تُبلَّغ كعيوب.

## 2. إصلاحات هذه الجولة (ملفات في المستودع)

| العيب | الإصلاح | الملف |
|---|---|---|
| خيارات اختبار المراجعة بلا `lang` (9 تكرارات) | `lang="de"` على أزرار الخيارات + إخفاء سطر الترجمة الفارغ | `components/review/weekly-review-client.tsx`، `lib/review/weekly-review.ts` |
| 217 «نص بلا lang» في الدروس والبطاقات | `lang="de" dir="ltr"` في المصدر حيث أمكن، ثم **مُكمِّل عام** يوسم كل عنصر `font-de` لاتيني بلا عربية بعد الترطيب (`markGermanElements` + `MutationObserver`) | `lib/german-lang.ts`، `components/providers/german-lang.tsx` (مثبَّت في `app/layout.tsx`) |
| جدول Funktionsverbgefüge وبطاقات المفردات | `lang="de"` على الخلايا والخيارات | `components/grammar/funktionsverbgefuege-trainer.tsx` |
| «درسك التالي» في لوحة التحكم | `lang="de"` | `components/dashboard/dashboard-client.tsx` |
| عنوان `/level/*` طويل (جملة الوصف تُقطع) | تقصير الوصف `text-white/90` | `components/learning-path/level-hub.tsx` |
| تباين أشرطة المستويات في الوضع الداكن (2.77:1) | تدرّجات أغمق درجة (700/800) لكل مستوى | `lib/constants/curriculum.ts` |
| تباين البطاقة الختامية في الوضع الداكن (2.4:1) | خلفية داكنة مخصّصة `dark:from-blue-950…` | `components/home/final-cta.tsx` |
| 33 `<title>` أطول من 70 حرفاً | `fitTitle()` يحترم السقف ويقصّر العربي أولاً ثم الألماني | `lib/seo/title.ts`، `app/lesson/[lessonId]/page.tsx`، `app/page.tsx`، `app/tests/strategien/page.tsx` |
| 831 شارة مستوى 9px في القاموس و59 في جدول الأفعال | 11px | `components/glossar/glossar-client.tsx`، `components/verbs/starke-verben-table.tsx` |
| عنوان/وصف خطوات الجلسة مقطوعان | `line-clamp-2` بدل `truncate` | `components/home/teacher-mentor.tsx` |
| وصف بطاقات لوحة التحكم مقطوع عند 320px | سطران على الجوال | `components/dashboard/dashboard-client.tsx` |

## 3. النتيجة: 189 صفحة × 4 مقاسات

```
PAGES 189   CHECKS 756   WITH_ISSUES 0
BY_ISSUE {}
```

| المقاس | العرض | الفحوص | ملاحظات |
|---|---|---|---|
| desktop | 1440×900 | 189 | 0 |
| tablet | 834×1112 | 189 | 0 |
| mobile | 390×844 | 189 | 0 |
| mobile-sm | 320×640 | 189 | 0 |

الروابط: **126 وجهة داخلية فريدة، 0 مكسور**، و0 صفحة خطأ (307 إعادة توجيه مقصودة من
`/review` و`/tests/b2-simulation`). الخط العربي (Tajawal) يُحمَّل على 189/189 صفحة.
أطول `<title>` الآن 70 حرفاً بالضبط بعد اللاحقة.

### جدول لكل صفحة

`الفحوص` = عدد المقاسات المفحوصة (4 لما يظهر في القائمة)، `ملاحظات` = عدد الملاحظات المتبقية.

| # | المسار | الفحوص | ملاحظات | `<title>` |
|---|---|---|---|---|
| 1 | `/` | 4 | — | 44 |
| 2 | `/about` | 4 | — | 39 |
| 3 | `/ai-tools` | 4 | — | 56 |
| 4 | `/alltag` | 4 | — | 38 |
| 5 | `/assistant` | 4 | — | 47 |
| 6 | `/aussprache` | 4 | — | 41 |
| 7 | `/conversations` | 4 | — | 44 |
| 8 | `/dashboard` | 4 | — | 42 |
| 9 | `/dashboard/competencies` | 4 | — | 54 |
| 10 | `/dashboard/five-minutes` | 4 | — | 46 |
| 11 | `/dashboard/report` | 4 | — | 34 |
| 12 | `/dashboard/review` | 4 | — | 32 |
| 13 | `/design-system` | 4 | — | 44 |
| 14 | `/dialogues` | 4 | — | 49 |
| 15 | `/diktate` | 4 | — | 51 |
| 16 | `/error-notebook` | 4 | — | 41 |
| 17 | `/faq` | 4 | — | 58 |
| 18 | `/favorites` | 4 | — | 48 |
| 19 | `/flashcards` | 4 | — | 56 |
| 20 | `/forms` | 4 | — | 40 |
| 21 | `/gamification` | 4 | — | 45 |
| 22 | `/glossar` | 4 | — | 40 |
| 23 | `/grammatik` | 4 | — | 57 |
| 24 | `/grammatik/funktionsverbgefuege` | 4 | — | 55 |
| 25 | `/hoeren` | 4 | — | 55 |
| 26 | `/landeskunde` | 4 | — | 61 |
| 27 | `/learning-path` | 4 | — | 55 |
| 28 | `/lesson/a1-00` | 4 | — | 70 |
| 29 | `/lesson/a1-01` | 4 | — | 53 |
| 30 | `/lesson/a1-01b` | 4 | — | 70 |
| 31 | `/lesson/a1-02` | 4 | — | 49 |
| 32 | `/lesson/a1-03` | 4 | — | 50 |
| 33 | `/lesson/a1-04` | 4 | — | 45 |
| 34 | `/lesson/a1-05` | 4 | — | 50 |
| 35 | `/lesson/a1-06` | 4 | — | 60 |
| 36 | `/lesson/a1-07` | 4 | — | 53 |
| 37 | `/lesson/a1-08` | 4 | — | 54 |
| 38 | `/lesson/a1-09` | 4 | — | 60 |
| 39 | `/lesson/a1-10` | 4 | — | 48 |
| 40 | `/lesson/a1-11` | 4 | — | 48 |
| 41 | `/lesson/a1-12` | 4 | — | 55 |
| 42 | `/lesson/a1-13` | 4 | — | 62 |
| 43 | `/lesson/a1-14` | 4 | — | 70 |
| 44 | `/lesson/a2-01` | 4 | — | 50 |
| 45 | `/lesson/a2-02` | 4 | — | 41 |
| 46 | `/lesson/a2-03` | 4 | — | 46 |
| 47 | `/lesson/a2-04` | 4 | — | 44 |
| 48 | `/lesson/a2-05` | 4 | — | 42 |
| 49 | `/lesson/a2-06` | 4 | — | 57 |
| 50 | `/lesson/a2-07` | 4 | — | 44 |
| 51 | `/lesson/a2-08` | 4 | — | 46 |
| 52 | `/lesson/a2-09` | 4 | — | 56 |
| 53 | `/lesson/a2-10` | 4 | — | 51 |
| 54 | `/lesson/a2-11` | 4 | — | 53 |
| 55 | `/lesson/a2-12` | 4 | — | 57 |
| 56 | `/lesson/a2-13` | 4 | — | 70 |
| 57 | `/lesson/b1-01` | 4 | — | 57 |
| 58 | `/lesson/b1-02` | 4 | — | 40 |
| 59 | `/lesson/b1-03` | 4 | — | 49 |
| 60 | `/lesson/b1-04` | 4 | — | 58 |
| 61 | `/lesson/b1-05` | 4 | — | 58 |
| 62 | `/lesson/b1-06` | 4 | — | 48 |
| 63 | `/lesson/b1-07` | 4 | — | 59 |
| 64 | `/lesson/b1-08` | 4 | — | 56 |
| 65 | `/lesson/b1-09` | 4 | — | 62 |
| 66 | `/lesson/b1-10` | 4 | — | 51 |
| 67 | `/lesson/b1-11` | 4 | — | 70 |
| 68 | `/lesson/b1-12` | 4 | — | 70 |
| 69 | `/lesson/b2-01` | 4 | — | 58 |
| 70 | `/lesson/b2-02` | 4 | — | 59 |
| 71 | `/lesson/b2-03` | 4 | — | 58 |
| 72 | `/lesson/b2-04` | 4 | — | 61 |
| 73 | `/lesson/b2-05` | 4 | — | 66 |
| 74 | `/lesson/b2-06` | 4 | — | 50 |
| 75 | `/lesson/b2-07` | 4 | — | 63 |
| 76 | `/lesson/b2-08` | 4 | — | 63 |
| 77 | `/lesson/b2-09` | 4 | — | 70 |
| 78 | `/lesson/b2-10` | 4 | — | 59 |
| 79 | `/lesson/b2-11` | 4 | — | 70 |
| 80 | `/lesson/b2-12` | 4 | — | 52 |
| 81 | `/lesson/b2-13` | 4 | — | 66 |
| 82 | `/level/a1` | 4 | — | 34 |
| 83 | `/level/a2` | 4 | — | 41 |
| 84 | `/level/b1` | 4 | — | 34 |
| 85 | `/level/b2` | 4 | — | 34 |
| 86 | `/offline` | 4 | — | 38 |
| 87 | `/offline-review` | 4 | — | 53 |
| 88 | `/picture-dictionary` | 4 | — | 44 |
| 89 | `/placement` | 4 | — | 36 |
| 90 | `/podcasts` | 4 | — | 48 |
| 91 | `/privacy` | 4 | — | 48 |
| 92 | `/reading` | 4 | — | 55 |
| 93 | `/redemittel` | 4 | — | 52 |
| 94 | `/redewendungen` | 4 | — | 44 |
| 95 | `/review` | 4 | — | 48 |
| 96 | `/review/monthly` | 4 | — | 46 |
| 97 | `/review/weekly` | 4 | — | 48 |
| 98 | `/satzbau` | 4 | — | 54 |
| 99 | `/schreib-bewertung` | 4 | — | 64 |
| 100 | `/schreibmodelle` | 4 | — | 52 |
| 101 | `/sentence-review` | 4 | — | 48 |
| 102 | `/settings` | 4 | — | 53 |
| 103 | `/shop` | 4 | — | 41 |
| 104 | `/sound-check` | 4 | — | 37 |
| 105 | `/sprechen` | 4 | — | 59 |
| 106 | `/sprechtraining` | 4 | — | 57 |
| 107 | `/stories` | 4 | — | 45 |
| 108 | `/strategien` | 4 | — | 47 |
| 109 | `/sync` | 4 | — | 38 |
| 110 | `/tageskapsel` | 4 | — | 47 |
| 111 | `/tests` | 4 | — | 52 |
| 112 | `/tests/a1-exam` | 4 | — | 45 |
| 113 | `/tests/a2-exam` | 4 | — | 45 |
| 114 | `/tests/b1-exam` | 4 | — | 45 |
| 115 | `/tests/b2` | 4 | — | 66 |
| 116 | `/tests/b2-grammatik` | 4 | — | 58 |
| 117 | `/tests/b2-simulation` | 4 | — | 66 |
| 118 | `/tests/fallstricke` | 4 | — | 58 |
| 119 | `/tests/lesen-b2` | 4 | — | 61 |
| 120 | `/tests/level/a1` | 4 | — | 44 |
| 121 | `/tests/level/a2` | 4 | — | 44 |
| 122 | `/tests/level/b1` | 4 | — | 44 |
| 123 | `/tests/level/b2` | 4 | — | 44 |
| 124 | `/tests/mock` | 4 | — | 49 |
| 125 | `/tests/placement` | 4 | — | 46 |
| 126 | `/tests/plan-b2` | 4 | — | 38 |
| 127 | `/tests/seal/a1` | 4 | — | 59 |
| 128 | `/tests/seal/a2` | 4 | — | 59 |
| 129 | `/tests/seal/b1` | 4 | — | 59 |
| 130 | `/tests/seal/b2` | 4 | — | 59 |
| 131 | `/tests/sprechen` | 4 | — | 45 |
| 132 | `/tests/strategien` | 4 | — | 58 |
| 133 | `/tests/unit/a1-01` | 4 | — | 35 |
| 134 | `/tests/unit/a1-02` | 4 | — | 35 |
| 135 | `/tests/unit/a1-03` | 4 | — | 35 |
| 136 | `/tests/unit/a1-04` | 4 | — | 35 |
| 137 | `/tests/unit/a1-05` | 4 | — | 35 |
| 138 | `/tests/unit/a1-06` | 4 | — | 35 |
| 139 | `/tests/unit/a1-07` | 4 | — | 35 |
| 140 | `/tests/unit/a1-08` | 4 | — | 35 |
| 141 | `/tests/unit/a1-09` | 4 | — | 35 |
| 142 | `/tests/unit/a1-10` | 4 | — | 35 |
| 143 | `/tests/unit/a1-11` | 4 | — | 35 |
| 144 | `/tests/unit/a1-12` | 4 | — | 35 |
| 145 | `/tests/unit/a1-13` | 4 | — | 35 |
| 146 | `/tests/unit/a2-01` | 4 | — | 35 |
| 147 | `/tests/unit/a2-02` | 4 | — | 35 |
| 148 | `/tests/unit/a2-03` | 4 | — | 35 |
| 149 | `/tests/unit/a2-04` | 4 | — | 35 |
| 150 | `/tests/unit/a2-05` | 4 | — | 35 |
| 151 | `/tests/unit/a2-06` | 4 | — | 35 |
| 152 | `/tests/unit/a2-07` | 4 | — | 35 |
| 153 | `/tests/unit/a2-08` | 4 | — | 35 |
| 154 | `/tests/unit/a2-09` | 4 | — | 35 |
| 155 | `/tests/unit/a2-10` | 4 | — | 35 |
| 156 | `/tests/unit/a2-11` | 4 | — | 35 |
| 157 | `/tests/unit/a2-12` | 4 | — | 35 |
| 158 | `/tests/unit/a2-13` | 4 | — | 35 |
| 159 | `/tests/unit/b1-01` | 4 | — | 35 |
| 160 | `/tests/unit/b1-02` | 4 | — | 35 |
| 161 | `/tests/unit/b1-03` | 4 | — | 35 |
| 162 | `/tests/unit/b1-04` | 4 | — | 35 |
| 163 | `/tests/unit/b1-05` | 4 | — | 35 |
| 164 | `/tests/unit/b1-06` | 4 | — | 35 |
| 165 | `/tests/unit/b1-07` | 4 | — | 35 |
| 166 | `/tests/unit/b1-08` | 4 | — | 35 |
| 167 | `/tests/unit/b1-09` | 4 | — | 35 |
| 168 | `/tests/unit/b1-10` | 4 | — | 35 |
| 169 | `/tests/unit/b1-11` | 4 | — | 35 |
| 170 | `/tests/unit/b2-01` | 4 | — | 35 |
| 171 | `/tests/unit/b2-02` | 4 | — | 35 |
| 172 | `/tests/unit/b2-03` | 4 | — | 35 |
| 173 | `/tests/unit/b2-04` | 4 | — | 35 |
| 174 | `/tests/unit/b2-05` | 4 | — | 35 |
| 175 | `/tests/unit/b2-06` | 4 | — | 35 |
| 176 | `/tests/unit/b2-07` | 4 | — | 35 |
| 177 | `/tests/unit/b2-08` | 4 | — | 35 |
| 178 | `/tests/unit/b2-09` | 4 | — | 35 |
| 179 | `/tests/unit/b2-10` | 4 | — | 35 |
| 180 | `/tests/unit/b2-12` | 4 | — | 35 |
| 181 | `/tests/unit/b2-13` | 4 | — | 35 |
| 182 | `/tests/vollpruefung` | 4 | — | 44 |
| 183 | `/tests/weekly` | 4 | — | 42 |
| 184 | `/umformung` | 4 | — | 43 |
| 185 | `/umschreibungen` | 4 | — | 51 |
| 186 | `/verben` | 4 | — | 56 |
| 187 | `/wortschatz-b2` | 4 | — | 53 |
| 188 | `/wortschatz-b2/top500` | 4 | — | 50 |
| 189 | `/writing-path` | 4 | — | 50 |

## 4. كيف تُعاد

```bash
npm ci
npm run build && npm run start            # خادم على 3000
node scripts/audit-links.mjs              # الروابط → /tmp/audit-links.json
node scripts/audit-every-page.mjs         # 756 فحصاً → /tmp/audit-final/report.json + لقطات
```

السكربتان في `scripts/` ويحتاجان `puppeteer-core` و`@sparticuz/chromium` (لا تبعيات
المشروع). في Debian بلا `libnss3`/`libnspr4` تُبنى مكتبات كعب تُصدّر الرموز التي
يطلبها الملف التنفيذي ثم يُشغَّل السكربت بـ`LD_LIBRARY_PATH`:

```bash
mkdir -p /tmp/vb /tmp/stublibs && cd /tmp/vb && npm init -y && npm i puppeteer-core @sparticuz/chromium

# الرموز المطلوبة بإصداراتها — تُستخرج من الملف التنفيذي نفسه (libnss3/libnssutil3)
cd /tmp/stublibs
nm -D --undefined-only /tmp/chromium | awk '{print $2}' | grep -E "@(NSS|NSSUTIL)_" \
  | sed 's/@/ /' | sort -u > syms.txt
awk '{a[$2]=a[$2]"; "$1} END{for(v in a){gsub(/^; /,"",a[v]); print v" { global: "a[v]"; local: *; };"}}' \
  syms.txt > all.map
awk '{print "long "$1"(void){return 0;}"}' syms.txt > stubs.c
gcc -shared -fPIC -o libnss3.so stubs.c -Wl,--version-script=all.map
gcc -shared -fPIC -o libnssutil3.so stubs.c -Wl,--version-script=all.map

# libnspr4: كل رموز PR_* تُعيد 0، ما عدا PR_Now (يجب أن تُعيد وقتاً حقيقياً)
nm -D --undefined-only /tmp/chromium | awk '{print $2}' | grep -E "^PR_" | sed 's/@.*//' \
  | sort -u | grep -v "^PR_Now$" | awk '{print "long "$1"(void){return 0;}"}' > nspr.c
cat >> nspr.c <<'EOF'
#include <time.h>
long PR_Now(void) { struct timespec ts; clock_gettime(CLOCK_REALTIME, &ts);
  return (long)ts.tv_sec * 1000000L + ts.tv_nsec / 1000L; }
EOF
gcc -shared -fPIC -o libnspr4.so nspr.c
```

تحقّق سريع قبل التشغيل الكامل:

```bash
LD_LIBRARY_PATH=/tmp/stublibs node -e 'require("puppeteer-core").launch({args:["--no-sandbox"],
  executablePath:"/tmp/chromium"}).then(async b=>{console.log(await b.version()); await b.close();})'
# HeadlessChrome/153.0.8010.0
```

توضيح: هذه المكتبات **لا تُنفّذ** وظائف TLS/الشهادات فعلياً؛ Chromium يستعمل BoringSSL
داخلياً، وهي كافية للفحص البصري فقط، لا كبديل عن متصفح إنتاجي
(التفصيل في `docs/VISUAL-QA-2026-10-13.md`).

## 5. الحدود

1. القياس آلي: لا يحكم على جمال التصميم ولا على جودة الترجمة العربية/الألمانية.
2. «صفر ملاحظات» تعني صفر ملاحظات **على الأبعاد المذكورة أعلاه**، لا صفر عيوب مطلقة.
3. المتصفح Chromium 153 على Linux؛ لا يُثبت سلوك Safari/iOS أو قارئات الشاشة الحقيقية.
   وسم `lang` صحيح شرطٌ لازم لفظ الكلمة الألمانية صحيحاً، لكنه لا يُغني عن اختبار
   مع قارئ شاشة فعلي.
4. الأرقام من بناء محلي بتاريخ 2026-10-13؛ أي تغيير في التخطيط يحتاج إعادة تشغيل.
