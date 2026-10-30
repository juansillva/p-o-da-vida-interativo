import { Home } from "lucide-react";
import poster from "@/assets/poster.png";
import { conferenceDays } from "@/data/schedule";
import { DayCard } from "./DayCard";
import { KioskButton, TopBar } from "./KioskButton";
import { BurgerMark } from "./BurgerMark";
import burgerImage from "@/assets/logo_move3d.png";

export function MenuScreen({ onSelectDay, onHome }: { onSelectDay: (id: number) => void; onHome: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col gap-6 px-5 py-6 sm:px-8">
      <TopBar
        left={
          <span className="flex items-center gap-2 font-heavy uppercase">
               <img
  src={burgerImage}
  alt="Logo MOVE 2026"
  className="bob w-36 object-contain sm:w-48"
/> Cardápio
          </span>
        }
        right={
          <KioskButton variant="ghost" onClick={onHome} label="Voltar ao início">
            <Home className="size-5" /> Início
          </KioskButton>
        }
      />
      <div className="relative w-full overflow-hidden rounded-3xl bg-secondary">
  <img
    src={poster}
    alt="Preletores da conferência Fome de Quê?"
    className="h-auto w-full object-contain"
  />
  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-heavy text-xs uppercase text-accent-foreground">
    Combo 3 dias
  </span>
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
