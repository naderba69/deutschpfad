#!/usr/bin/env node
/**
 * audio-index.mjs — فهرسة كل ملفات public/audio بلا ffmpeg ولا مكتبات خارجية.
 *
 * ما يفعله (تقني فقط):
 *   · يقرأ كل ملف .mp3 ويتحقق من أنه يحوي إطارات MPEG Layer III صالحة.
 *   · يحسب المدة من الإطارات (تعمل مع CBR وVBR)، ومعدل العينة والقنوات ومعدل البت.
 *   · يحدد الفئة (حوارات، امتحان، تحدّث، دروس، بودكاست) ويعلن هل يغطيها حارس
 *     «المدة مقابل عدد الأحرف» في src/lib/audio/duration-guard.test.ts
 *     (الحوارات والبودكاست وأسطر الاستماع في الدروس).
 *   · يُعلّم الملفات المشبوهة: غير قابلة للقراءة، أقصر من ثانية، أطول من 3 دقائق.
 *
 * ما لا يفعله (معلن في الإخراج):
 *   · لا يقارن النص بتفريغ آلي (لا يوجد نموذج ASR متاح دون الإنترنت في هذه البيئة).
 *   · لا يحكم على طبيعية النطق أو وضوحه أو صحة التنغيم.
 *   · لا يعرف هل الصوت بشري أم مولَّد؛ هذا يحتاج سجل مصدر لكل ملف.
 *
 * الاستعمال: node scripts/audio-index.mjs [--out docs/AUDIO-INDEX.csv]
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO = join(ROOT, "public", "audio");
const outArg = process.argv.indexOf("--out");
const OUT = outArg > -1 ? join(ROOT, process.argv[outArg + 1]) : join(ROOT, "docs", "AUDIO-INDEX.csv");

const SHORT_SECONDS = 1;
const LONG_SECONDS = 180;

/** الفئات التي يغطيها حارس المدة النصّية: الحوارات والبودكاست وأسطر استماع الدروس */
/** ملفات مسحوبة عمداً لا يشير إليها أي سطر (انظر listening-audio.test.ts في b1-09) */
const RETIRED = new Set(["lessons/b1-09/ls-b1-09-3-1.mp3"]);
const TEXT_GUARDED = (rel) =>
  !RETIRED.has(rel) && (rel.startsWith("dialogues-") || rel.startsWith("podcasts/") || rel.startsWith("lessons/"));

const BITRATES_V1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
const BITRATES_V2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
const RATES = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };

function id3Size(buf) {
  if (buf.length < 10 || buf.subarray(0, 3).toString("latin1") !== "ID3") return 0;
  const size = ((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f);
  const footer = (buf[5] & 0x10) !== 0 ? 10 : 0;
  return 10 + size + footer;
}

/** يقرأ ترويسة إطار واحد عند offset؛ يعيد null إن لم تكن ترويسة صالحة. */
function frameAt(buf, offset) {
  if (offset + 4 > buf.length) return null;
  const b1 = buf[offset + 1];
  const b2 = buf[offset + 2];
  const b3 = buf[offset + 3];
  if (buf[offset] !== 0xff || (b1 & 0xe0) !== 0xe0) return null;
  const versionBits = (b1 >> 3) & 0x03; // 3=MPEG1, 2=MPEG2, 0=MPEG2.5
  const layerBits = (b1 >> 1) & 0x03; // 1 = Layer III
  if (versionBits === 1 || layerBits !== 1) return null;
  const bitrateIdx = b2 >> 4;
  const rateIdx = (b2 >> 2) & 0x03;
  if (bitrateIdx === 0 || bitrateIdx === 15 || rateIdx === 3) return null;
  const isMpeg1 = versionBits === 3;
  const bitrateKbps = isMpeg1 ? BITRATES_V1[bitrateIdx] : BITRATES_V2[bitrateIdx];
  const sampleRate = RATES[versionBits][rateIdx];
  const padding = (b2 >> 1) & 0x01;
  const samplesPerFrame = isMpeg1 ? 1152 : 576;
  const frameLength = Math.floor(((isMpeg1 ? 144 : 72) * bitrateKbps * 1000) / sampleRate) + padding;
  const channelMode = b3 >> 6; // 3 = mono
  return { bitrateKbps, sampleRate, samplesPerFrame, frameLength, channels: channelMode === 3 ? 1 : 2 };
}

/** يجمع مدة الإطارات ويعيد { seconds, frames, first } أو null إن لم يوجد إطار صالح. */
function readMp3(buf) {
  let offset = id3Size(buf);
  let seconds = 0;
  let frames = 0;
  let first = null;
  while (offset < buf.length) {
    const h = frameAt(buf, offset);
    if (!h || h.frameLength < 4) {
      // تخطَّ البايتات غير المتوقعة (وسم أو حشو) بخطوة واحدة؛ توقف إن لم نجد إطاراً بعد ذلك
      if (frames > 0 && offset > buf.length - 4) break;
      offset += 1;
      if (frames === 0 && offset > 64 * 1024) return null;
      continue;
    }
    if (!first) first = h;
    seconds += h.samplesPerFrame / h.sampleRate;
    frames += 1;
    offset += h.frameLength;
  }
  return frames > 0 ? { seconds, frames, first } : null;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".mp3")) out.push(full);
  }
  return out;
}

function categoryOf(rel) {
  const top = rel.split("/")[0];
  if (top.startsWith("dialogues-")) return `حوارات ${top.slice("dialogues-".length).toUpperCase()}`;
  if (top.startsWith("exam-")) return `امتحان ${top.slice("exam-".length).toUpperCase()}`;
  if (top.startsWith("speaking-")) return `تحدّث ${top.slice("speaking-".length).toUpperCase()}`;
  if (top === "lessons") return "مقاطع الدروس";
  if (top === "podcasts") return "بودكاست";
  return top;
}

const rows = [];
for (const file of walk(AUDIO).sort()) {
  const rel = relative(AUDIO, file);
  const buf = readFileSync(file);
  const info = readMp3(buf);
  const flags = [];
  if (!info) flags.push("unparseable");
  else {
    if (info.seconds < SHORT_SECONDS) flags.push("short<1s");
    if (info.seconds > LONG_SECONDS) flags.push(`long>${LONG_SECONDS}s`);
  }
  rows.push({
    path: `public/audio/${rel}`,
    category: categoryOf(rel),
    bytes: buf.length,
    seconds: info ? info.seconds.toFixed(2) : "",
    sampleRate: info ? info.first.sampleRate : "",
    channels: info ? info.first.channels : "",
    bitrateKbps: info ? info.first.bitrateKbps : "",
    textDurationGuard: TEXT_GUARDED(rel) ? "yes" : RETIRED.has(rel) ? "no-retired" : "no",
    transcriptCheck: "not-run",
    flags: flags.join(";"),
  });
}

const header = ["path", "category", "bytes", "seconds", "sampleRate", "channels", "bitrateKbps", "textDurationGuard", "transcriptCheck", "flags"];
const esc = (v) => {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
writeFileSync(OUT, [header.join(","), ...rows.map((r) => header.map((h) => esc(r[h])).join(","))].join("\n") + "\n", "utf8");

// ── ملخص ──
const byCat = new Map();
for (const r of rows) {
  const c = byCat.get(r.category) ?? { files: 0, guarded: 0, flagged: 0, seconds: 0 };
  c.files += 1;
  if (r.textDurationGuard === "yes") c.guarded += 1;
  if (r.flags) c.flagged += 1;
  c.seconds += Number(r.seconds || 0);
  byCat.set(r.category, c);
}
console.log(`ملفات: ${rows.length} · مدة إجمالية: ${(rows.reduce((a, r) => a + Number(r.seconds || 0), 0) / 3600).toFixed(2)} ساعة`);
console.log("الفئة".padEnd(22), "الملفات", "محمية بالنص", "مُعلّمة", "المدة(دقيقة)");
for (const [cat, c] of [...byCat.entries()].sort()) {
  console.log(cat.padEnd(22), String(c.files).padStart(7), String(c.guarded).padStart(12), String(c.flagged).padStart(8), (c.seconds / 60).toFixed(1).padStart(12));
}
const flagged = rows.filter((r) => r.flags);
if (flagged.length) {
  console.log("\nملفات مُعلّمة:");
  for (const r of flagged) console.log(`  ${r.path}: ${r.flags}`);
}
console.log(`\nالكتابة إلى: ${relative(ROOT, OUT)}`);
console.log("transcriptCheck = not-run لكل الملفات: لا تفريغ آلي في هذه البيئة.");
