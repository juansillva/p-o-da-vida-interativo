import { BurgerMark } from "./BurgerMark";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";

export function WelcomeScreen({ onEatHere, onTakeAway }: { onEatHere: () => void; onTakeAway: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col">
      <div className="checker h-6 w-full shrink-0 opacity-90" />
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-10 text-center">
        <p className="font-heavy text-sm uppercase tracking-[0.3em] text-muted-foreground">Move Conf '26 · 29, 30 e 31 out</p>
        <BurgerMark className="bob w-36 text-primary sm:w-48" />
        <h1 className="font-display text-[clamp(4.5rem,18vw,10rem)] uppercase leading-[0.85]">
          Fome
          <br />
          de quê?
        </h1>
        <p className="max-w-md text-xl font-semibold sm:text-2xl">
          Todo mundo tem fome. A pergunta é: <span className="font-heavy">fome de quê?</span>
        </p>

        <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={onEatHere}
            className="press flex min-h-48 flex-col items-center justify-center gap-3 rounded-3xl bg-primary p-6 text-primary-foreground"
          >
            <UtensilsCrossed className="size-12" strokeWidth={2.5} />
            <span className="font-display text-4xl uppercase">Comer aqui</span>
            <span className="text-sm font-semibold text-card-foreground/70">Confira o cardápio da conferência.</span>
          </button>
          <button
            type="button"
            onClick={onTakeAway}
            className="press flex min-h-48 flex-col items-center justify-center gap-3 rounded-3xl bg-ink p-6 text-ink-foreground"
          >
            <ShoppingBag className="size-12" strokeWidth={2.5} />
            <span className="font-display text-4xl uppercase">Levar para viagem</span>
            <span className="text-sm font-semibold opacity-75">Leve essa reflexão com você.</span>
          </button>
        </div>
        <p className="font-heavy text-xs uppercase tracking-[0.3em] text-muted-foreground">Toque para começar</p>
      </div>
      <div className="checker h-6 w-full shrink-0 opacity-90" />
    </div>
  );
}
