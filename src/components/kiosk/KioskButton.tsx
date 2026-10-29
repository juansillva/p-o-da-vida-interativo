import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ink" | "ghost";

const styles: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground",
  ink: "bg-ink text-ink-foreground",
  ghost: "border-2 border-foreground/60 text-foreground",
};

export function KioskButton({
  children,
  onClick,
  variant = "solid",
  className,
  label,
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "press inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-6 font-heavy text-base uppercase tracking-wide focus-visible:outline-4 focus-visible:outline-ring",
        styles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}

export function TopBar({ left, right }: { left?: ReactNode; right?: ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
      <div className="flex min-w-0 gap-3">{left}</div>
      <div className="shrink-0">{right}</div>
    </div>
  );
}
