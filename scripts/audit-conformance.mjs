/**
 * audit-conformance.mjs — الجولة السابعة عشرة: سجل المطابقة (WCAG 2.2 AA)
 *
 * الجولات 2–16 قاست 189 مساراً في كل مرة. ما لم يُقَس قط هو **البنود التي
 * لا تُرى في المحتوى المُصيَّر**: هل يوجد فيديو يحتاج ترجمة؟ هل تُنشَّط الأزرار
 * عند ضغط الزر بدل إفلاته؟ هل توجد إيماءات لمس؟ هل للصوت بديل نصي؟
 * هذه بنود تُثبت بالفحص المصدري + القياس السلوكي، لا بلقطة شاشة.
 *
 * يُخرج هذا السكربت سجلاً لكل بند من بنود المستوى A وAA (55 بنداً) بحالته:
 *   PASS   — مقيس آلياً ويطابق (مع مرجع الأداة/الاختبار)
 *   PART   — مقيس جزئياً، وما لا يغطيه مذكور
 *   NA     — غير منطبق على هذه المنصة، مع سبب قابل للفحص
 *   TODO   — لا دليل بعد (يُسجَّل، ولا يُقدَّم كأنه مطابق)
 *
 * الاستخدام: node scripts/audit-conformance.mjs [--json]
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const SRC = path.join(ROOT, "src");
const JSON_OUT = process.argv.includes("--json");

const files = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(tsx?|jsx?|css)$/.test(e.name)) files.push(full);
  }
};
walk(SRC);
const read = (f) => fs.readFileSync(f, "utf8");
const rel = (f) => path.relative(ROOT, f);

/** بحث في كل الملفات وإرجاع المواضع */
function find(pattern, opts = {}) {
  const hits = [];
  const re = pattern instanceof RegExp ? pattern : new RegExp(pattern, "g");
  for (const f of files) {
    if (opts.only && !opts.only.test(f)) continue;
    const text = read(f);
    let m;
    while ((m = re.exec(text))) {
      hits.push({file: rel(f), line: text.slice(0, m.index).split("\n").length, text: m[0].slice(0, 80)});
      if (hits.length > 200) return hits;
    }
  }
  return hits;
}

const facts = {
  video: find(/<video\b|youtube\.com\/embed|player\.vimeo/),
  iframe: find(/<iframe\b/),
  img: find(/<img\b/),
  svgText: find(/<text[\s>]/),
  downEvents: find(/onMouseDown|onPointerDown|onTouchStart/),
  gestures: find(/onTouchMove|onTouchEnd|pinch|swipe|gesturechange/i),
  drag: find(/draggable|onDragStart|useDrag|DndContext/),
  autocomplete: find(/autoComplete=|autocomplete=/),
  langAttr: find(/lang="ar"/),
  skipLink: find(/#main-content/),
  mainId: find(/id="main-content"/),
  sitemap: fs.existsSync(path.join(ROOT, "public/sitemap.xml")) || fs.existsSync(path.join(ROOT, "src/app/sitemap.ts")),
  search: find(/role="search"|<Search\b|type="search"/),
  breadcrumbs: find(/breadcrumb|Breadcrumb/i),
  audio: find(/<audio\b/),
  transcript: find(/transcript|اكشف نص الحوار|showScript|script\b/),
  confirm: find(/confirm\(|تأكيد|AlertDialog/),
  liveRegion: find(/role="status"|role="alert"|aria-live/),
  reducedMotion: find(/prefers-reduced-motion/),
  ariaCurrent: find(/aria-current=/),
  ariaPressed: find(/aria-pressed=/),
  errorSuggestion: find(/aria-invalid|role="alert"|role="status"/),
};

/* ملفات الأدوات والاختبارات التي تُثبت ما لا يُقاس هنا */
const tools = {
  contrast: "scripts/audit-pages.mjs",
  keyboard: "scripts/audit-keyboard.mjs",
  focus: "scripts/audit-keyboard.mjs · e2e/wcag22.spec.ts",
  robustness: "scripts/audit-robustness.mjs",
  zoom: "scripts/audit-zoom.mjs",
  interactive: "scripts/audit-interactive.mjs",
  forms: "scripts/audit-forms.mjs",
  tables: "scripts/audit-tables.mjs",
  media: "scripts/audit-media.mjs",
  lang: "scripts/audit-lang.mjs",
  time: "scripts/audit-time.mjs",
  wcag22: "scripts/audit-wcag22.mjs · e2e/wcag22.spec.ts",
  structure: "scripts/audit-structure.mjs · e2e/structure.spec.ts",
  nontext: "scripts/audit-nontext.mjs · e2e/nontext.spec.ts",
  residual: "scripts/audit-residual.mjs · e2e/residual.spec.ts",
  semantics: "scripts/audit-semantics.mjs · e2e/semantics.spec.ts",
};

/**
 * سجل البنود: A + AA = 55 بنداً في WCAG 2.2.
 * evidence: ما يقيسه فعلاً — لا ادعاء أوسع من الأداة.
 */
const LEDGER = [
  ["1.1.1", "A", "محتوى غير نصي", "PART", "كل <img> غائب (0 وسوم) والأيقونات SVG بـaria-hidden أو اسم زر؛ النصوص البديلة للصور غير منطبقة لعدم وجود صور نقطية. المراجعة: الجولة 13 (الأسماء) والجولة 14 (الأيقونات).", tools.structure],
  ["1.2.1", "A", "البديل للصوت المسجّل", "PART", "ملف <audio> واحد فقط (تسجيل المتعلم الذاتي، لا يحتاج بديلاً). الاستماع في الدروس يقدّم «اكشف نص الحوار»، والبودكاست يعرض النص الألماني مع ترجمة، والحوارات نصها ظاهر. لا يوجد محتوى صوتي بلا نصّ مصاحب في المكوّنات المفحوصة.", "src/components/lesson/sections/hoerverstehen.tsx · src/components/podcasts/podcast-player.tsx"],
  ["1.2.2", "A", "الترجمة للفيديو المسجّل", "NA", "لا يوجد <video> ولا تضمين فيديو في المصدر (0 نتيجة).", tools.media],
  ["1.2.3", "A", "الوصف الصوتي أو البديل للفيديو", "NA", "لا فيديو.", tools.media],
  ["1.2.4", "AA", "الترجمة للبثّ المباشر", "NA", "لا بثّ مباشر.", tools.media],
  ["1.2.5", "AA", "الوصف الصوتي المسجّل", "NA", "لا فيديو.", tools.media],
  ["1.3.1", "A", "المعلومات والعلاقات", "PASS", "189 مساراً: تسمية الحقول، المعالم، العناوين، الجداول (HTML صحيح)، وعلامات الإلزام ↔ required.", tools.structure + " · " + tools.semantics],
  ["1.3.2", "A", "التسلسل ذو المعنى", "PASS", "لا order/flex-reverse/grid-dense ولا tabindex موجب؛ وتسلسل العناوين يطابق موضعها المرئي على 189 مساراً.", tools.semantics],
  ["1.3.3", "A", "الخصائص الحسّية", "PASS", "4,763 كتلة نصية لكل إعداد: لا تعليمات «اضغط الزر الأخضر/على اليمين».", tools.semantics],
  ["1.3.4", "AA", "الاتجاه", "PASS", "لا قفل اتجاه في CSS، والصفحة تعمل أفقياً 800×360 و360×800.", tools.nontext],
  ["1.3.5", "AA", "تحديد غرض الإدخال", "PART", "الجولة 7 فحصت autocomplete في النماذج؛ لا توجد حقول بيانات شخصية (المنصة بلا حسابات)، والحقل السري الوحيد (مفتاح API) اختياري.", tools.forms],
  ["1.4.1", "A", "استخدام اللون", "PASS", "13,076 رابطاً: الروابط داخل النص لها خطّ سفلي أو تباين ≥3:1؛ حالات aria-current/selected/pressed تُفرَّق بغير اللون؛ لا تعليمات لونية.", tools.semantics],
  ["1.4.2", "A", "التحكّم في الصوت", "PASS", "كل مشغّل يبدأ بفعل المستخدم، وملف واحد يُشغَّل في اللحظة (لا تراكب)، ولا تشغيل تلقائي.", tools.media],
  ["1.4.3", "AA", "تباين النص", "PASS", "الجولة 2: تباين النص في كل صفحة وفي المظهرين؛ والقياس مُعاد في كل جولة لاحقة عبر البكسلات.", tools.contrast],
  ["1.4.4", "AA", "تغيير حجم النص", "PASS", "تكبير النص 200% بلا فقدان محتوى (189 مساراً).", tools.zoom],
  ["1.4.5", "AA", "صور النص", "NA", "لا <img> ولا صورة نقطية تحمل نصاً؛ الشعار والأيقونات SVG متجهة تتغيّر مع حجم النص.", tools.media],
  ["1.4.10", "AA", "إعادة التدفّق", "PASS", "189 مساراً عند 320px (تكبير 400%) بلا فيضان أفقي.", tools.zoom],
  ["1.4.11", "AA", "التباين غير النصي", "PASS", "حدود الحقول وأيقونات الأزرار ومؤشرات التقدّم ≥3:1 في المظهرين — 59 حقلاً و3,702 أيقونة و147 مؤشراً لكل إعداد.", tools.nontext],
  ["1.4.12", "AA", "تباعد النص", "PASS", "زيادة letter-spacing/word-spacing/line-height على 189 مساراً بلا قصّ.", tools.robustness],
  ["1.4.13", "AA", "المحتوى عند التحويم/التركيز", "PASS", "التلميحات تظهر، تبقى تحت المؤشر، وتُغلق بـEscape (88 تلميحاً).", tools.nontext],
  ["2.1.1", "A", "لوحة المفاتيح", "PASS", "كل عنصر تفاعلي يُشغَّل بلوحة المفاتيح؛ الجولة 3 و7 و12 قاست Tab/Enter/الأسهم.", tools.keyboard],
  ["2.1.2", "A", "لا مصيدة لوحة مفاتيح", "PART", "الحوارات تُغلق بـEscape وتُعيد التركيز (الجولة 6)، ولا فخّ في 40 محطة Tab متتالية (اختبار الجولة 17).", "e2e/conformance.spec.ts"],
  ["2.1.4", "A", "اختصارات الحرف الواحد", "PASS", "لا accesskey بحرف واحد، ولا معالج حرف منفرد بلا مفتاح تعديل (فحص المصدر + DOM).", tools.residual],
  ["2.2.1", "A", "ضبط التوقيت", "PASS", "المؤقّتات تُبدأ بفعل المستخدم ولها إيقاف/تمديد حيث يلزم (الجولة 11).", tools.time],
  ["2.2.2", "A", "إيقاف/إخفاء المحتوى المتحرّك", "PASS", "لا حركة لانهائية أسرع من ثانية، وprefers-reduced-motion يُعطّل الحركة.", tools.residual + " · " + tools.time],
  ["2.3.1", "A", "ثلاث ومضات", "PASS", "لا حركة لانهائية أقصر من ثانية ولا دورة <333ms؛ وقياس البكسل لكشف الوميض يعمل (تحكّم سلبي).", tools.residual],
  ["2.4.1", "A", "تجاوز الكتل", "PASS", "أول عنصر قابل للتركيز هو رابط «تخطَّ إلى المحتوى الرئيسي» يستهدف main#main-content — مُختبر في الجولة 17.", "e2e/conformance.spec.ts"],
  ["2.4.2", "A", "عنوان الصفحة", "PASS", "189 عنواناً غير فارغ وفريد (التحويلات 307 مستثناة).", tools.residual],
  ["2.4.3", "A", "ترتيب التركيز", "PASS", "ترتيب DOM = ترتيب التركيز: لا tabindex موجب، ولا إعادة ترتيب بصرية.", tools.semantics],
  ["2.4.4", "A", "غرض الرابط في السياق", "PASS", "لا أسماء عامة («انقر هنا/المزيد»)؛ وكل رابط له اسم دالّ ونص مرئي مطابق.", tools.structure + " · " + tools.residual],
  ["2.4.5", "AA", "طرق متعددة", "PASS", "تنقّل رئيسي + خريطة موقع (sitemap.xml) + تنقّل سفلي للجوال + صفحة مسار تعلّم.", "e2e/conformance.spec.ts"],
  ["2.4.6", "AA", "العناوين والتسميات", "PASS", "خريطة عناوين سليمة (h1 واحد، بلا قفزات)، والمعالم المتكرّرة مسمّاة.", tools.structure],
  ["2.4.7", "AA", "التركيز المرئي", "PASS", "3,780 محطة Tab لكل إعداد؛ الحلقة تُقاس من البكسلات المرسومة بعد ضغط Tab حقيقي.", tools.nontext],
  ["2.4.11", "AA", "التركيز غير المحجوب", "PASS", "لا يختفي التركيز تحت الهيدر اللاصق أو شريط التنقل السفلي (scroll-padding).", tools.wcag22],
  ["2.5.1", "A", "إيماءات المؤشر", "PASS", "لا إيماءات لمس/تحديد متعدّد في المصدر (0 معالج touch/gesture)، وكل وظيفة لها بديل بالمفاتيح.", tools.wcag22],
  ["2.5.2", "A", "إلغاء المؤشر", "PASS", "لا تنفيذ على حدث الضغط (0 معالج down-event)؛ واختبار الإفلات خارج الزر لا يُنفّذ الفعل.", "e2e/conformance.spec.ts"],
  ["2.5.3", "A", "التسمية في الاسم", "PASS", "20,557 زراً/رابطاً: الاسم الميسور يحتوي النص المرئي في كل الصفحات.", tools.residual],
  ["2.5.4", "A", "تفعيل الحركة", "PASS", "لا devicemotion/deviceorientation في المصدر (فحص مع عيّنة سلبية).", tools.residual],
  ["2.5.7", "AA", "حركات السحب", "PASS", "ترتيب الكلمات بالسحب له مكافئ بلوحة المفاتيح (أزرار + Enter).", tools.wcag22],
  ["2.5.8", "AA", "حجم الهدف", "PASS", "لا هدف مرئي أصغر من 24×24 (الجولة 12 و16).", tools.wcag22],
  ["3.1.1", "A", "لغة الصفحة", "PASS", "html lang=ar dir=rtl في كل المسارات.", tools.lang],
  ["3.1.2", "AA", "لغة الأجزاء", "PASS", "كل نص ألماني موسوم lang=de، والنص العربي لا يُوسم de (LangDe يفحص محتواه).", tools.lang],
  ["3.2.1", "A", "عند التركيز", "PASS", "15 محطة Tab لكل صفحة لا تنقل الصفحة.", tools.residual],
  ["3.2.2", "A", "عند الإدخال", "PASS", "تغيير قيمة كل قائمة في الصفحات لا ينقل المستخدم بلا طلب.", tools.residual],
  ["3.2.3", "AA", "التنقّل المتّسق", "PASS", "ترتيب روابط التنقل الرئيسي مطابق للمرجع في 189 مساراً.", tools.residual],
  ["3.2.4", "AA", "التحديد المتّسق", "PASS", "12,663 مقارنة اسم رابط بين الصفحات: الوظيفة نفسها بالاسم نفسه.", tools.semantics],
  ["3.2.6", "A", "المساعدة المتّسقة", "PART", "لا أداة مساعدة عائمة متكرّرة في الموقع؛ صفحات FAQ والدعم موجودة في التذييل في كل الصفحات. لا يحتاج البند آلية إضافية، لكنه لا يملك اختباراً مستقلاً.", tools.wcag22],
  ["3.3.1", "A", "تحديد الأخطاء", "PASS", "رسائل خطأ نصية مرتبطة بالحقل بـaria-describedby وaria-invalid (الجولة 7).", tools.forms],
  ["3.3.2", "A", "التسميات أو التعليمات", "PASS", "كل حقل له تسمية مرئية، وكل حقل إلزامي له علامة مرئية، والعكس متحقَّق.", tools.semantics + " · " + tools.forms],
  ["3.3.3", "AA", "اقتراح تصحيح الخطأ", "PART", "نموذج /forms يعدّد الحقول الناقصة في role=alert، ويكتب «هذا الحقل مطلوب» عند كل حقل مربوط بـaria-describedby مع aria-invalid، وينقل التركيز إلى أول حقل ناقص (اختبار 3.3.1/3.3.3). لا يغطّي الاختبار بقية النماذج آلياً، وتقييم جودة النص الحر (تغذية AI الراجعة) مراجعة محتوى لا أداة.", "e2e/conformance.spec.ts"],
  ["3.3.4", "AA", "منع الأخطاء (قانوني/مالي/بيانات)", "PASS", "لا معاملات مالية؛ الإجراءات المدمّرة (تصفير، مسح التخزين، استيراد) خلف تأكيد صريح، والتصدير قبل الحذف.", tools.time + " · " + tools.forms],
  ["3.3.7", "A", "الإدخال المكرّر", "PASS", "لا حقلان يطلبان المعلومة نفسها في النموذج نفسه.", tools.wcag22],
  ["3.3.8", "AA", "المصادقة الميسورة", "NA", "لا حسابات ولا تسجيل دخول؛ الحقل السري الوحيد اختياري ويقبل اللصق والملء التلقائي بلا اختبار إدراكي.", tools.nontext],
  ["4.1.2", "A", "الاسم والدور والقيمة", "PASS", "كل عنصر تفاعلي له دور واسم وقيمة؛ لا aria-label على دور غير موجود؛ الحالات معلنة.", tools.structure + " · " + tools.wcag22],
  ["4.1.3", "AA", "رسائل الحالة", "PASS", "العدّادات والتحديثات في مناطق حيّة معلَنة، والمؤقّت لا يعلن كل ثانية.", tools.time],
];

/* فحوص المصدر التي تُغيّر الحالة: أي نتيجة هنا تناقض السجل */
const guardList = (facts) => [
  ["لا فيديو مضمَّن (1.2.2–1.2.5 NA)", facts.video.length === 0, facts.video],
  ["لا iframe مضمَّن (1.2.x)", facts.iframe.length === 0, facts.iframe],
  ["لا صور نقطية (1.4.5 NA)", facts.img.length === 0, facts.img],
  ["لا تنفيذ على ضغط الزر (2.5.2)", facts.downEvents.length === 0, facts.downEvents],
  ["لا إيماءات لمس (2.5.1)", facts.gestures.length === 0, facts.gestures],
  ["رابط التخطي موجود (2.4.1)", facts.skipLink.length > 0 && facts.mainId.length > 0, []],
  ["خريطة الموقع موجودة (2.4.5)", facts.sitemap, []],
  ["lang=ar معلَنة (3.1.1)", facts.langAttr.length > 0, []],
  ["مناطق حيّة معلَنة (4.1.3)", facts.liveRegion.length > 0, []],
  ["تقليل الحركة محترم (2.2.2)", facts.reducedMotion.length > 0, []],
  ["تنقّل بحالة معلنة (1.4.1)", facts.ariaCurrent.length > 0 && facts.ariaPressed.length > 0, []],
  ["تأكيد الإجراءات المدمّرة (3.3.4)", facts.confirm.length > 0, []],
];
const guards = guardList(facts);

const counts = LEDGER.reduce((acc, row) => {
  acc[row[3]] = (acc[row[3]] || 0) + 1;
  return acc;
}, {});

/* كل مرجع في السجل يجب أن يكون ملفاً موجوداً — وإلا فالبند بلا دليل قابل للفحص */
const refOk = (tool) => String(tool).split(" · ").every((t) => fs.existsSync(path.join(ROOT, t.trim())));
const brokenRefs = LEDGER.filter((row) => !refOk(row[5])).map((row) => [row[0], row[5]]);

/* تحكّم سلبي: نُفسد كل حقيقة ونثبت أن الحرّاس ترفض — وإلا فـ«GUARDS 0» لا يعني شيئاً */
if (process.argv.includes("--selftest")) {
  const mk = (empty) => Object.fromEntries(
    Object.entries(facts).map(([k, v]) => [
      k,
      typeof v === "boolean" ? !empty : empty ? [] : [{file: "selftest", line: 0, text: "<injected>"}],
    ]),
  );
  /* كل حرّاس «يجب ألا يوجد» تُختبر بحقن وجود، وكل حرّاس «يجب أن يوجد» بحقن غياب */
  const failA = guardList(mk(true)).filter(([, ok]) => !ok).length;
  const failB = guardList(mk(false)).filter(([, ok]) => !ok).length;
  const caught = failA + failB;
  const expected = guards.length;
  const refCaught = (() => {
    const sample = LEDGER.map((row) => [...row]);
    sample[0][5] = "scripts/does-not-exist.mjs";
    return sample.filter((row) => !String(row[5]).split(" · ").every((t) => fs.existsSync(path.join(ROOT, t.trim())))).length;
  })();
  console.log(`SELFTEST ${caught + refCaught}/${expected + 1} — حرّاس مرفوضة بالحقن`);
  process.exitCode = caught === expected && refCaught === 1 ? 0 : 1;
  process.exit();
}

if (JSON_OUT) {
  console.log(JSON.stringify({criteria: LEDGER, guards, counts, brokenRefs, facts: Object.fromEntries(Object.entries(facts).map(([k, v]) => [k, Array.isArray(v) ? v.length : v]))}, null, 1));
} else {
  console.log(`WCAG 2.2 — بنود المستوى A وAA: ${LEDGER.length}`);
  console.log(`  PASS ${counts.PASS || 0} · PART ${counts.PART || 0} · NA ${counts.NA || 0} · TODO ${counts.TODO || 0}`);
  console.log("");
  for (const [id, level, name, status, note, tool] of LEDGER) {
    console.log(`${status.padEnd(4)} ${id.padEnd(7)} ${level}  ${name}  ${refOk(tool) ? "" : "⚠ مرجع غير موجود"}`);
    if (status !== "PASS") console.log(`       ${note.slice(0, 150)}`);
  }
  console.log("");
  let failed = 0;
  for (const [label, ok, hits] of guards) {
    console.log(`${ok ? "✓" : "✗"} ${label}`);
    if (!ok) {
      failed += 1;
      for (const h of (Array.isArray(hits) ? hits : []).slice(0, 5)) console.log(`    ${h.file}:${h.line} ${h.text}`);
    }
  }
  for (const [id, tool] of brokenRefs) {
    console.log(`✗ مرجع غير موجود للبند ${id}: ${tool}`);
  }
  const total = failed + brokenRefs.length;
  console.log(total === 0 ? "GUARDS 0" : `GUARDS ${total} مناقضة`);
  process.exitCode = total === 0 ? 0 : 1;
}
