import { Home } from "lucide-react";
import { BurgerMark } from "./BurgerMark";
import { KioskButton } from "./KioskButton";

export function ReflectionScreen({ onHome }: { onHome: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col items-center justify-center px-5 py-[2.5vh] sm:px-8">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-card text-card-foreground">
        <div className="bg-ink px-6 py-[1.6vh] text-ink-foreground">
          <p className="font-heavy text-[clamp(0.6rem,1.5vh,0.8rem)] uppercase tracking-[0.3em] opacity-70">
            Pedido nº 635 · Para viagem
          </p>
          <h1 className="font-display text-[clamp(2rem,5.5vh,3.5rem)] uppercase leading-[1.05]">Seu pedido</h1>
        </div>
        <div className="flex flex-col gap-[1.8vh] px-6 py-[2.2vh]">
          <p className="font-display text-[clamp(1.35rem,3.2vh,2rem)] uppercase leading-tight text-primary-foreground">
            Existe uma fome que nada neste mundo pode saciar.
          </p>
          <div className="flex flex-col gap-[0.8vh] text-[clamp(0.95rem,2.05vh,1.15rem)] leading-[1.45]">
            <p>Uma geração cercada de tudo, mas vazia daquilo que realmente importa.</p>
            <p className="font-semibold">
              Trocamos a presença pelo prazer.
              <br />
              A intimidade pela aparência.
              <br />
              O eterno pelo passageiro.
            </p>
            <p>Tentamos preencher com coisas aquilo que só pode ser preenchido por alguém.</p>
          </div>
          <div className="border-y-2 border-dashed border-card-foreground/30 py-[1.4vh]">
            <BurgerMark className="mb-[0.8vh] w-9 text-primary-foreground" />
            <p className="mb-[0.6vh] font-heavy text-[clamp(0.65rem,1.6vh,0.85rem)] uppercase tracking-wide">
              Mas Jesus declarou:
            </p>
            <blockquote className="text-[clamp(1.05rem,2.3vh,1.4rem)] font-semibold leading-snug">
              “Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede.”
            </blockquote>
            <p className="mt-[0.8vh] font-heavy text-[clamp(0.65rem,1.6vh,0.85rem)] uppercase tracking-wide">João 6:35</p>
          </div>
          <div className="flex flex-col gap-[0.8vh] text-[clamp(0.95rem,2.05vh,1.15rem)] leading-[1.45]">
            <p className="font-semibold">
              Ele não ofereceu apenas o pão.
              <br />
              Ele se revelou como o próprio pão.
            </p>
            <p>Porque a nossa alma não foi criada para sobreviver de migalhas, mas para viver da presença de Deus.</p>
            <p>
              E talvez o maior problema da nossa geração não seja a falta de fome, mas aquilo com que temos escolhido
              nos alimentar.
            </p>
            <p>Porque aquilo de que temos fome revela o que governa o nosso coração.</p>
            <p>E hoje, uma pergunta precisa ecoar dentro de nós:</p>
          </div>
          <div className="text-center">
            <p className="font-display text-[clamp(1.9rem,5.6vh,3.25rem)] uppercase leading-[1.05] text-primary-foreground">
              Fome de quê?
            </p>
            <p className="mt-[0.7vh] font-heavy text-[clamp(0.65rem,1.6vh,0.85rem)] uppercase tracking-[0.3em]">
              Conferência Move
            </p>
          </div>
        </div>
        <div className="checker h-[1.4vh] min-h-4" />
      </div>
      <KioskButton
        variant="solid"
        onClick={onHome}
        className="mt-[2vh] w-full max-w-xl text-[clamp(1rem,2.2vh,1.15rem)]"
      >
        <Home className="size-5" /> Voltar ao início
      </KioskButton>
    </div>
  );
}
