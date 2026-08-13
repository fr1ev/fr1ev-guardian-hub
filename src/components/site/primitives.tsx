import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("reveal mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-md border border-border bg-panel/60 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-2 disabled:opacity-50";

export const btn = {
  primary: cn(
    base,
    "h-11 px-5 text-primary-foreground [background-image:var(--gradient-electric)] shadow-[0_10px_35px_-12px_oklch(0.62_0.21_262/70%)] hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-12px_oklch(0.68_0.2_254/80%)]",
  ),
  outline: cn(
    base,
    "h-11 px-5 border border-border bg-panel/50 text-foreground backdrop-blur hover:border-electric/60 hover:bg-panel-2/70 hover:-translate-y-0.5",
  ),
  ghost: cn(
    base,
    "h-9 px-3 text-muted-foreground hover:text-foreground hover:bg-panel/60",
  ),
  small: cn(
    base,
    "h-9 px-3.5 border border-border bg-panel/40 text-xs text-muted-foreground hover:text-foreground hover:border-electric/50",
  ),
};
