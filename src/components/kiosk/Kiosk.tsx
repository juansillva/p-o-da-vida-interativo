import { useCallback, useEffect, useState } from "react";
import { IDLE_TIMEOUT_SECONDS } from "@/data/schedule";
import { WelcomeScreen } from "./WelcomeScreen";
import { MenuScreen } from "./MenuScreen";
import { ScheduleScreen } from "./ScheduleScreen";
import { ReflectionScreen } from "./ReflectionScreen";
import { useIdleReset } from "./useIdleReset";

type Screen = { name: "welcome" } | { name: "menu" } | { name: "day"; id: number } | { name: "reflection" };

export function Kiosk() {
  const [screen, setScreen] = useState<Screen>({ name: "welcome" });
  const go = useCallback((s: Screen) => setScreen(s), []);
  const home = useCallback(() => go({ name: "welcome" }), [go]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [screen]);
  useIdleReset(screen.name !== "welcome", IDLE_TIMEOUT_SECONDS, home);

  return (
    <main className="mx-auto min-h-dvh max-w-3xl">
      {screen.name === "welcome" && (
        <WelcomeScreen onEatHere={() => go({ name: "menu" })} onTakeAway={() => go({ name: "reflection" })} />
      )}
      {screen.name === "menu" && <MenuScreen onHome={home} onSelectDay={(id) => go({ name: "day", id })} />}
      {screen.name === "day" && (
        <ScheduleScreen dayId={screen.id} onBack={() => go({ name: "menu" })} onHome={home} onSelectDay={(id) => go({ name: "day", id })} />
      )}
      {screen.name === "reflection" && <ReflectionScreen onHome={home} />}
    </main>
  );
}
