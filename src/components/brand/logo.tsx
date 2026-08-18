import {cn} from "@/lib/utils";

/**
 * شعار المنصة — SVG داخلي (بدون ملفات خارجية)
 * مربع متدرج (أزرق هادئ ← نيلي) + "De" + ألوان العلم الألماني
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="url(#logo-gradient)" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="800"
          fontSize="30"
          fill="#ffffff"
        >
          De
        </text>
        <g>
          <rect x="14" y="47" width="36" height="3.4" rx="1.7" fill="#0a0a0a" />
          <rect x="14" y="50.4" width="36" height="3.4" rx="1.7" fill="#dd0000" />
          <rect x="14" y="53.8" width="36" height="3.4" rx="1.7" fill="#ffcc00" />
        </g>
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-bold text-foreground">درب الألمانية</span>
        <span
          className="font-de text-[11px] font-medium tracking-wide text-muted-foreground"
          dir="ltr"
          lang="de"
        >
          DeutschPfad
        </span>
      </span>
    </span>
  );
}
