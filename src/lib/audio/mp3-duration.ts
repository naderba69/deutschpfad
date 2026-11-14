/**
 * حساب مدة ملف MP3 بلا مكتبات خارجية — لحراسة الصوت المولَّد آلياً.
 *
 * لماذا هذا الملف: `isPlayableMp3` يثبت أن الملف ليس فارغاً ولا عنصراً نائباً،
 * لكنه لا يثبت أن **كل النص نُطق**. مقطع TTS مقطوع في منتصفه يبقى «قابلاً
 * للتشغيل» ويبدو سليماً في كل فحص وجود. المدة وحدها لا تكفي أيضاً، لكنها مع
 * عدد أحرف النص تكشف القطع (نصف المدة المتوقعة) والخلط (ضعفها).
 *
 * الطريقة: تخطّي وسم ID3v2 إن وُجد، ثم قراءة ترويسات إطارات MPEG Layer III
 * وجمع أطوالها. تعمل على CBR وVBR معاً لأن المدة من كل إطار لا من معدل ثابت.
 * الملفات غير الصالحة تُعيد null — الحارس الخارجي يقرر كيف يعامل الغياب.
 */

/** معاملات معدل العيّنة بحسب نسخة MPEG */
const SAMPLE_RATES: Record<number, number[]> = {
  // MPEG 1
  1: [44100, 48000, 32000],
  // MPEG 2
  2: [22050, 24000, 16000],
  // MPEG 2.5
  25: [11025, 12000, 8000],
};

/** kbps بحسب نسخة MPEG وطبقة III (الفهرس 1..14) */
const BITRATES_V1_L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
const BITRATES_V2_L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];

/** حجم وسم ID3v2 من أول بايتات الملف (0 إن لم يوجد) */
export function id3v2Size(buf: Buffer): number {
  if (buf.length < 10 || buf.subarray(0, 3).toString("latin1") !== "ID3") return 0;
  const size =
    ((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f);
  const footer = (buf[5] & 0x10) !== 0 ? 10 : 0;
  return 10 + size + footer;
}

type FrameHeader = {
  version: 1 | 2 | 25;
  bitrateKbps: number;
  sampleRate: number;
  samplesPerFrame: number;
  length: number;
};

function readFrameHeader(buf: Buffer, offset: number): FrameHeader | null {
  if (offset + 4 > buf.length) return null;
  if (buf[offset] !== 0xff || (buf[offset + 1] & 0xe0) !== 0xe0) return null;

  const versionBits = (buf[offset + 1] >> 3) & 0x03;
  const layerBits = (buf[offset + 1] >> 1) & 0x03;
  const bitrateIndex = (buf[offset + 2] >> 4) & 0x0f;
  const sampleRateIndex = (buf[offset + 2] >> 2) & 0x03;
  const padding = (buf[offset + 2] >> 1) & 0x01;

  // القيم المحجوزة: نسخة 01 وطبقة 00 و0x0f/0x03 غير صالحة
  if (versionBits === 1 || layerBits !== 1 || bitrateIndex === 0 || bitrateIndex === 15) return null;
  if (sampleRateIndex === 3) return null;

  const version = versionBits === 3 ? 1 : versionBits === 2 ? 2 : 25;
  const table = version === 1 ? BITRATES_V1_L3 : BITRATES_V2_L3;
  const bitrateKbps = table[bitrateIndex];
  const sampleRate = SAMPLE_RATES[version][sampleRateIndex];
  if (!bitrateKbps || !sampleRate) return null;

  const samplesPerFrame = version === 1 ? 1152 : 576;
  const length = Math.floor((samplesPerFrame / 8) * (bitrateKbps * 1000) / sampleRate) + padding;
  if (length < 4) return null;

  return { version, bitrateKbps, sampleRate, samplesPerFrame, length };
}

/**
 * مدة الملف بالثواني، أو null إن لم يُقرأ إطار واحد.
 * تتوقف عند أول تلف بعد الأقل 32 إطاراً مقروءة كي لا يفسد بايت واحد المدة.
 */
export function mp3DurationSeconds(buf: Buffer): number | null {
  let offset = id3v2Size(buf);
  let seconds = 0;
  let frames = 0;

  while (offset + 4 <= buf.length) {
    const header = readFrameHeader(buf, offset);
    if (!header) {
      // بايت غير متوقع: ابحث عن التزامن التالي بدل إسقاط الملف كله
      const next = buf.indexOf(0xff, offset + 1);
      if (next === -1 || frames >= 32) break;
      offset = next;
      continue;
    }
    seconds += header.samplesPerFrame / header.sampleRate;
    frames += 1;
    offset += header.length;
  }

  return frames > 0 ? seconds : null;
}

/** معدل النطق التقريبي بالألمانية: ~13.5 حرفاً في الثانية (بطيء نسبياً، TTS تعليمي) */
export const GERMAN_CHARS_PER_SECOND = 13.5;

/** المدة المتوقعة لنصّ ألماني (ثوانٍ) — تقدير لا قياس */
export function expectedSeconds(text: string): number {
  const chars = text.replace(/\s+/g, " ").trim().length;
  return chars / GERMAN_CHARS_PER_SECOND;
}
