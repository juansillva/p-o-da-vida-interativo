import { Home } from "lucide-react";
import poster from "@/assets/poster.jpg.asset.json";
import { conferenceDays } from "@/data/schedule";
import { DayCard } from "./DayCard";
import { KioskButton, TopBar } from "./KioskButton";
import { BurgerMark } from "./BurgerMark";

export function MenuScreen({ onSelectDay, onHome }: { onSelectDay: (id: number) => void; onHome: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col gap-6 px-5 py-6 sm:px-8">
      <TopBar
        left={
          <span className="flex items-center gap-2 font-heavy uppercase">
            <BurgerMark className="w-9 shrink-0 text-primary" /> Cardápio
          </span>
        }
        right={
          <KioskButton variant="ghost" onClick={onHome} label="Voltar ao início">
            <Home className="size-5" /> Início
          </KioskButton>
        }
      />
      <div className="relative h-[28dvh] min-h-48 overflow-hidden rounded-3xl bg-secondary">
        <img src={poster.url} alt="Preletores da conferência Fome de Quê?" className="size-full object-cover object-top" />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-heavy text-xs uppercase text-accent-foreground">Combo 3 dias</span>
      </div>
      <header>
        <h1 className="font-display text-6xl uppercase leading-none sm:text-7xl">Escolha seu dia</h1>
        <p className="mt-2 text-lg font-semibold text-muted-foreground">Confira o que preparamos para você.</p>
      </header>
      <div className="flex flex-col gap-4">
        {conferenceDays.map((d) => (
          <DayCard key={d.id} day={d} onSelect={() => onSelectDay(d.id)} />
        ))}
      </div>
    </div>
  );
}
