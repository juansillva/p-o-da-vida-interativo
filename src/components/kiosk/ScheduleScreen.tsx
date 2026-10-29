import { ArrowLeft, Home } from "lucide-react";
import { conferenceDays, speakers } from "@/data/schedule";
import { KioskButton, TopBar } from "./KioskButton";
import { BurgerMark } from "./BurgerMark";

export function ScheduleScreen({ dayId, onBack, onHome, onSelectDay }: {
  dayId: number;
  onBack: () => void;
  onHome: () => void;
  onSelectDay: (id: number) => void;
}) {
  const day = conferenceDays.find((d) => d.id === dayId) ?? conferenceDays[0];
  const total = String(conferenceDays.length).padStart(2, "0");
  return (
    <div key={day.id} className="screen-in flex min-h-dvh flex-col gap-6 px-5 py-6 sm:px-8">
      <TopBar
        left={
          <KioskButton variant="ghost" onClick={onBack} label="Voltar ao cardápio">
            <ArrowLeft className="size-5" /> Cardápio
          </KioskButton>
        }
        right={
          <KioskButton variant="ghost" onClick={onHome} label="Voltar ao início">
            <Home className="size-5" />
          </KioskButton>
        }
      />
      <header className="flex items-end justify-between gap-4 border-b-4 border-foreground pb-4">
        <div className="min-w-0">
          <p className="font-heavy text-sm uppercase tracking-[0.25em] text-muted-foreground">{day.session} · {day.date}</p>
          <h1 className="font-display mt-2 text-6xl uppercase leading-tight sm:text-8xl">{day.weekday}</h1>
        </div>
        <span className="shrink-0 font-display text-4xl sm:text-5xl">
          {String(day.id).padStart(2, "0")}<span className="text-muted-foreground">/{total}</span>
        </span>
      </header>
      <ol className="flex flex-col">
        {day.items.map((it, i) => (
          <li key={i} className="flex items-baseline justify-between gap-4 border-b border-foreground/40 py-4">
            <span className="font-display text-3xl uppercase sm:text-4xl">{it.activity}</span>
            <span className="font-heavy text-2xl tabular-nums sm:text-3xl">{it.time}</span>
          </li>
        ))}
      </ol>
      <div className="mt-auto flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {conferenceDays.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => onSelectDay(d.id)}
              aria-current={d.id === day.id}
              className={`press min-h-14 rounded-2xl font-display text-2xl uppercase ${d.id === day.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              Dia {String(d.id).padStart(2, "0")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <BurgerMark className="w-7 shrink-0 text-primary" />
          <p>Com {speakers.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
