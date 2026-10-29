import { createFileRoute } from "@tanstack/react-router";
import { Kiosk } from "@/components/kiosk/Kiosk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fome de Quê? — Totem da Conferência | Move Conf '26" },
      { name: "description", content: "Confira a programação dos 3 dias da conferência Fome de Quê? e leve uma reflexão sobre Jesus, o Pão da Vida." },
      { property: "og:title", content: "Fome de Quê? — Move Conf '26" },
      { property: "og:description", content: "Cardápio da conferência: programação de 29, 30 e 31 de outubro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kiosk,
});
