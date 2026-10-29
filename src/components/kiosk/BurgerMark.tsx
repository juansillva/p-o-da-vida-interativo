import { cn } from "@/lib/utils";

/** Selo de hambúrguer com "m" — símbolo da conferência. */
export function BurgerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={cn("fill-current", className)} aria-hidden>
      <path d="M8 38C8 16 28 4 50 4s42 12 42 34z" />
      <circle cx="35" cy="20" r="3" className="fill-background" />
      <circle cx="52" cy="14" r="3" className="fill-background" />
      <circle cx="66" cy="24" r="3" className="fill-background" />
      <rect x="4" y="44" width="92" height="10" rx="5" />
      <path d="M8 60h84v8c0 10-8 18-18 18H26C16 86 8 78 8 68z" />
      <path
        d="M30 74v-8a6 6 0 0 1 12 0v8m0-8a6 6 0 0 1 12 0v8m0-8a6 6 0 0 1 12 0v8"
        className="fill-none stroke-background"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
