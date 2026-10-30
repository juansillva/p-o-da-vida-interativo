import { Home } from "lucide-react";
import { BurgerMark } from "./BurgerMark";
import { KioskButton } from "./KioskButton";

export function ReflectionScreen({ onHome }: { onHome: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col items-center px-5 py-8 sm:px-8">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-card text-card-foreground">
        <div className="bg-ink px-6 py-4 text-ink-foreground">
          <p className="font-heavy text-xs uppercase tracking-[0.3em] opacity-70">Pedido nº 635 · Para viagem</p>
          <h1 className="font-display text-5xl uppercase leading-[1.05] sm:text-6xl">Seu pedido</h1>
        </div>
        <div className="flex flex-col gap-6 px-6 py-6">
          <p className="font-display text-3xl uppercase leading-tight text-primary-foreground sm:text-4xl">
            Existe uma fome que nada neste mundo pode saciar.
          </p>
          <div className="flex flex-col gap-3 text-lg leading-relaxed">
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
          <div className="border-y-2 border-dashed border-card-foreground/30 py-5">
            <BurgerMark className="mb-3 w-10 text-primary-foreground" />
            <p className="mb-2 font-heavy text-sm uppercase tracking-wide">Mas Jesus declarou:</p>
            <blockquote className="text-xl font-semibold leading-snug sm:text-2xl">
              “Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede.”
            </blockquote>
            <p className="mt-3 font-heavy text-sm uppercase tracking-wide">João 6:35</p>
          </div>
          <div className="flex flex-col gap-3 text-lg leading-relaxed">
            <p className="font-semibold">
              Ele não ofereceu apenas o pão.
              <br />
              Ele se revelou como o próprio pão.
            </p>
            <p>
              Porque a nossa alma não foi criada para sobreviver de migalhas, mas para viver da presença de Deus.
            </p>
            <p>
              E talvez o maior problema da nossa geração não seja a falta de fome, mas aquilo com que temos escolhido
              nos alimentar.
            </p>
            <p>Porque aquilo de que temos fome revela o que governa o nosso coração.</p>
            <p>E hoje, uma pergunta precisa ecoar dentro de nós:</p>
          </div>
          <div className="text-center">
            <p className="font-display text-5xl uppercase leading-[1.05] text-primary-foreground sm:text-6xl">
              Fome de quê?
            </p>
            <p className="mt-3 font-heavy text-sm uppercase tracking-[0.3em]">Conferência Move</p>
          </div>
        </div>
        <div className="checker h-5" />
      </div>
      <KioskButton variant="solid" onClick={onHome} className="mt-8 w-full max-w-xl text-lg">
        <Home className="size-5" /> Voltar ao início
      </KioskButton>
    </div>
  );
}
