import {cn} from "@/lib/utils";

interface SectionHeadingProps {
  /** نص صغير يسبق العنوان (مثل "لماذا درب الألمانية؟") */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}

/**
 * ترويسة موحّدة لأقسام الصفحات
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-bold tracking-wide text-primary">{eyebrow}</span>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
