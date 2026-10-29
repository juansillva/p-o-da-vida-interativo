import { useEffect, useRef } from "react";

/** Chama onIdle após `seconds` sem interação; qualquer toque/rolagem/tecla reinicia. */
export function useIdleReset(enabled: boolean, seconds: number, onIdle: () => void) {
  const cb = useRef(onIdle);
  cb.current = onIdle;
  useEffect(() => {
    if (!enabled) return;
    let t: ReturnType<typeof setTimeout>;
    const reset = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        // Não interromper toque em andamento: adia se ainda houver ponteiro pressionado.
        if (pressing) reset();
        else cb.current();
      }, seconds * 1000);
    };
    let pressing = false;
    const down = () => { pressing = true; reset(); };
    const up = () => { pressing = false; reset(); };
    const events = ["scroll", "keydown", "wheel", "touchmove"] as const;
    events.forEach((e) => window.addEventListener(e, reset, { passive: true, capture: true }));
    window.addEventListener("pointerdown", down, { capture: true });
    window.addEventListener("pointerup", up, { capture: true });
    reset();
    return () => {
      clearTimeout(t);
      events.forEach((e) => window.removeEventListener(e, reset, { capture: true }));
      window.removeEventListener("pointerdown", down, { capture: true });
      window.removeEventListener("pointerup", up, { capture: true });
    };
  }, [enabled, seconds]);
}
