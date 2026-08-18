"use client";

import * as React from "react";
import {Download, Share2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {playAchievement, playCorrect} from "@/lib/audio/sfx";

/**
 * ═══════════════════════════════════════════════════════════
 *  احتفال الإنجاز — كونفيتي + بطاقة قابلة للمشاركة
 *  1) كونفيتي ملون (Canvas خفيف — بلا مكتبات)
 *  2) بطاقة إنجاز أنيقة تُرسم كصورة PNG قابلة للتحميل/المشاركة
 * ═══════════════════════════════════════════════════════════
 */
export function Celebration({ title, subtitle, emoji, stats }: {
  title: string;
  subtitle?: string;
  emoji?: string;
  stats?: { label: string; value: string }[];
}) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [fired, setFired] = React.useState(false);

  // إطلاق الكونفيتي + صوت الفوز عند أول ظهور
  React.useEffect(() => {
    if (fired) return;
    setFired(true);
    playAchievement();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const colors = ["#22c55e", "#eab308", "#3b82f6", "#ef4444", "#a855f7", "#f97316", "#14b8a6"];
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; rot: number; vr: number }[] = [];
    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const count = 120;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: W / 2 + (Math.random() - 0.5) * 80,
        y: H * 0.35,
        vx: (Math.random() - 0.5) * 9,
        vy: -Math.random() * 10 - 2,
        size: 5 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
      });
    }
    let frame = 0;
    const gravity = 0.28;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const p of particles) {
        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y < H + 20) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, 1 - frame / 160);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      }
      if (alive && frame < 160) requestAnimationFrame(draw);
    };
    draw();
    // نغمة صغيرة إضافية بعد قليل
    setTimeout(playCorrect, 250);
  }, [fired]);

  /** رسم البطاقة كصورة PNG (canvas) — للتحميل/المشاركة */
  const shareAsImage = () => {
    const el = cardRef.current;
    if (!el) return;
    // نرسم البطاقة يدوياً على canvas بتصميم ثابت (لا يعتمد على DOM)
    const c = document.createElement("canvas");
    c.width = 900;
    c.height = 560;
    const g = c.getContext("2d");
    if (!g) return;
    // خلفية متدرجة
    const grad = g.createLinearGradient(0, 0, 900, 560);
    grad.addColorStop(0, "#0f172a");
    grad.addColorStop(1, "#1e3a8a");
    g.fillStyle = grad;
    g.fillRect(0, 0, 900, 560);
    // إطار
    g.strokeStyle = "rgba(255,255,255,0.25)";
    g.lineWidth = 4;
    g.strokeRect(24, 24, 852, 512);
    // الرمز
    g.font = "140px sans-serif";
    g.textAlign = "center";
    g.fillText(emoji ?? "🎓", 450, 190);
    // العنوان
    g.fillStyle = "#ffffff";
    g.font = "bold 56px sans-serif";
    g.fillText(title, 450, 290);
    // السطر
    g.fillStyle = "rgba(255,255,255,0.5)";
    g.font = "30px sans-serif";
    if (subtitle) g.fillText(subtitle, 450, 350);
    // الإحصاءات
    if (stats && stats.length > 0) {
      const per = 900 / stats.length;
      stats.forEach((s, i) => {
        g.fillStyle = "#eab308";
        g.font = "bold 44px sans-serif";
        g.fillText(s.value, per * i + per / 2, 440);
        g.fillStyle = "rgba(255,255,255,0.75)";
        g.font = "24px sans-serif";
        g.fillText(s.label, per * i + per / 2, 485);
      });
    }
    // الشعار
    g.fillStyle = "rgba(255,255,255,0.6)";
    g.font = "22px sans-serif";
    g.fillText("DeutschPfad — درب الألمانية", 450, 530);
    const url = c.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "deutschpfad-achievement.png";
    a.click();
  };

  const shareNative = async () => {
    const el = cardRef.current;
    if (!el) return;
    const c = document.createElement("canvas");
    c.width = 900;
    c.height = 560;
    const g = c.getContext("2d");
    if (!g) return;
    const grad = g.createLinearGradient(0, 0, 900, 560);
    grad.addColorStop(0, "#0f172a");
    grad.addColorStop(1, "#1e3a8a");
    g.fillStyle = grad;
    g.fillRect(0, 0, 900, 560);
    g.strokeStyle = "rgba(255,255,255,0.25)";
    g.lineWidth = 4;
    g.strokeRect(24, 24, 852, 512);
    g.font = "140px sans-serif";
    g.textAlign = "center";
    g.fillText(emoji ?? "🎓", 450, 190);
    g.fillStyle = "#ffffff";
    g.font = "bold 56px sans-serif";
    g.fillText(title, 450, 290);
    g.fillStyle = "rgba(255,255,255,0.5)";
    g.font = "30px sans-serif";
    if (subtitle) g.fillText(subtitle, 450, 350);
    if (stats && stats.length > 0) {
      const per = 900 / stats.length;
      stats.forEach((s, i) => {
        g.fillStyle = "#eab308";
        g.font = "bold 44px sans-serif";
        g.fillText(s.value, per * i + per / 2, 440);
        g.fillStyle = "rgba(255,255,255,0.75)";
        g.font = "24px sans-serif";
        g.fillText(s.label, per * i + per / 2, 485);
      });
    }
    g.fillStyle = "rgba(255,255,255,0.6)";
    g.font = "22px sans-serif";
    g.fillText("DeutschPfad — درب الألمانية", 450, 530);
    const blob = await new Promise<Blob | null>((res) => c.toBlob(res, "image/png"));
    if (!blob) return;
    const file = new File([blob], "deutschpfad-achievement.png", { type: "image/png" });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "إنجازي في DeutschPfad" });
      } catch {
        /* أُلغيت المشاركة */
      }
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "deutschpfad-achievement.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card">
      {/* الكونفيتي */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* بطاقة الإنجاز المرئية */}
      <div
        ref={cardRef}
        className="relative m-6 rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-center text-white shadow-xl"
        dir="rtl"
      >
        <span className="text-6xl" aria-hidden="true">{emoji ?? "🎓"}</span>
        <h3 className="mt-3 text-2xl font-extrabold">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
        {stats && stats.length > 0 && (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 px-2 py-2">
                <p className="text-xl font-extrabold text-gold">{s.value}</p>
                <p className="text-[11px] font-bold text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs font-bold text-white/50">DeutschPfad — درب الألمانية</p>
      </div>

      {/* أزرار المشاركة */}
      <div className="flex flex-wrap justify-center gap-2 px-6 pb-6">
        <Button size="sm" variant="outline" onClick={shareAsImage} className="gap-1.5">
          <Download className="h-4 w-4" aria-hidden="true" />
          حمّل الإنجاز كصورة
        </Button>
        <Button size="sm" onClick={shareNative} className="gap-1.5">
          <Share2 className="h-4 w-4" aria-hidden="true" />
          شارك الإنجاز
        </Button>
      </div>
    </div>
  );
}
