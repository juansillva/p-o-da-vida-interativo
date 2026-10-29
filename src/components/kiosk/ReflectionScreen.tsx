import { Home } from "lucide-react";
import { BurgerMark } from "./BurgerMark";
import { KioskButton } from "./KioskButton";

export function ReflectionScreen({ onHome }: { onHome: () => void }) {
  return (
    <div className="screen-in flex min-h-dvh flex-col items-center px-5 py-8 sm:px-8">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-card text-card-foreground">
        <div className="bg-ink px-6 py-4 text-ink-foreground">
          <p className="font-heavy text-xs uppercase tracking-[0.3em] opacity-70">Pedido nº 635 · Para viagem</p>
          <h1 className="font-display text-5xl uppercase leading-none sm:text-6xl">Seu pedido para a alma</h1>
        </div>
        <div className="flex flex-col gap-6 px-6 py-6">
          <p className="font-display text-3xl uppercase leading-tight text-primary-foreground sm:text-4xl">
            O que tem alimentado a sua vida?
          </p>
          <div className="border-y-2 border-dashed border-card-foreground/30 py-5">
            <BurgerMark className="mb-3 w-10 text-primary-foreground" />
            <blockquote className="text-xl font-semibold leading-snug sm:text-2xl">
              “Declarou-lhes, pois, Jesus: <strong className="font-heavy">Eu sou o pão da vida</strong>; o que vem a mim jamais terá fome; e o que crê em mim jamais terá sede.”
            </blockquote>
            <p className="mt-3 font-heavy text-sm uppercase tracking-wide">João 6:35 · Almeida Revista e Atualizada (ARA)</p>
          </div>
          <p className="text-lg leading-relaxed">
            Tem fome que passa rápido: um like, uma conquista, uma nova experiência. É bom por um instante, e logo
            vem a vontade de mais. Jesus não oferece um lanche para enganar o estômago — Ele se apresenta como o pão
            que sustenta de verdade, todos os dias. Não é sobre ter menos desejos, é sobre encontrar o que realmente sacia.
          </p>
          <p className="text-center font-display text-4xl uppercase text-primary-foreground">E você, tem fome de quê?</p>
        </div>
        <div className="checker h-5" />
      </div>
      <KioskButton variant="solid" onClick={onHome} className="mt-8 w-full max-w-xl text-lg">
        <Home className="size-5" /> Voltar ao início
      </KioskButton>
    </div>
  );
}
