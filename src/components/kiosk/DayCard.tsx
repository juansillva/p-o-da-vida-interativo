import { ChevronRight } from "lucide-react";
import type { ConferenceDay } from "@/data/schedule";

export function DayCard({ day, onSelect }: { day: ConferenceDay; onSelect: () => void }) {
  const first = day.items[0]?.time;
  return (
    <button
      type="button"
      onClick={onSelect}
      className="press grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-3xl bg-primary p-5 text-left text-primary-foreground"
    >
      <span className="font-display text-7xl leading-none sm:text-8xl">{String(day.id).padStart(2, "0")}</span>
      <span className="min-w-0">
        <span className="block font-display text-3xl uppercase leading-none sm:text-4xl">Dia {String(day.id).padStart(2, "0")}</span>
        <span className="mt-1 block truncate font-heavy text-sm uppercase text-card-foreground">{day.weekday} · {day.date}</span>
        <span className="mt-2 inline-block rounded-full bg-accent px-3 py-1 font-heavy text-xs uppercase text-accent-foreground">
          {day.items.length} itens · a partir das {first}
        </span>
      </span>
      <span className="grid size-14 shrink-0 place-items-center rounded-full bg-background text-foreground">
        <ChevronRight className="size-8" strokeWidth={3} />
      </span>
    </button>
  );
}
