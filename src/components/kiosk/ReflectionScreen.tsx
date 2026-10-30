import { Home } from "lucide-react";
import { BurgerMark } from "./BurgerMark";
import { KioskButton } from "./KioskButton";

export function ReflectionScreen({ onHome }: { onHome: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col items-center justify-center px-5 py-[1.8vh] sm:px-8">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-card text-card-foreground">
        <div className="bg-ink px-6 py-[1.2vh] text-ink-foreground">
          <p className="font-heavy text-[clamp(0.6rem,1.35vh,0.8rem)] uppercase tracking-[0.3em] opacity-70">
            Pedido nº 635 · Para viagem
          </p>
          <h1 className="font-display text-[clamp(1.75rem,4.4vh,3.4rem)] uppercase leading-[1.05]">Seu pedido</h1>
        </div>
        <div className="flex flex-col gap-[1.3vh] px-6 py-[1.6vh]">
          <p className="font-display text-[clamp(1.15rem,2.6vh,1.95rem)] uppercase leading-tight text-primary-foreground">
            Existe uma fome que nada neste mundo pode saciar.
          </p>
          <div className="flex flex-col gap-[0.5vh] text-[clamp(0.9rem,1.7vh,1.25rem)] leading-[1.38]">
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
          <div className="border-y-2 border-dashed border-card-foreground/30 py-[1vh]">
            <BurgerMark className="mb-[0.6vh] w-8 text-primary-foreground" />
            <p className="mb-[0.4vh] font-heavy text-[clamp(0.6rem,1.35vh,0.8rem)] uppercase tracking-wide">
              Mas Jesus declarou:
            </p>
            <blockquote className="text-[clamp(0.95rem,1.85vh,1.45rem)] font-semibold leading-snug">
              “Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede.”
            </blockquote>
            <p className="mt-[0.5vh] font-heavy text-[clamp(0.6rem,1.35vh,0.8rem)] uppercase tracking-wide">João 6:35</p>
          </div>
          <div className="flex flex-col gap-[0.5vh] text-[clamp(0.9rem,1.7vh,1.25rem)] leading-[1.38]">
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
            <p className="font-display text-[clamp(1.6rem,4.4vh,3.4rem)] uppercase leading-[1.05] text-primary-foreground">
              Fome de quê?
            </p>
            <p className="mt-[0.6vh] font-heavy text-[clamp(0.6rem,1.35vh,0.8rem)] uppercase tracking-[0.3em]">
              Conferência Move
            </p>
          </div>
        </div>
        <div className="checker h-[1.2vh] min-h-3" />
      </div>
      <KioskButton
        variant="solid"
        onClick={onHome}
        className="mt-[1.6vh] w-full max-w-xl text-[clamp(0.95rem,1.85vh,1.15rem)]"
      >
        <Home className="size-5" /> Voltar ao início
      </KioskButton>
    </div>
  );
}
