import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ReflectionScreen } from "@/components/kiosk/ReflectionScreen";

describe("Reflection screen copy", () => {
  it("is titled just 'Seu pedido', with no 'para a alma'", () => {
    render(<ReflectionScreen onHome={vi.fn()} />);
    expect(screen.getByRole("heading", { name: "Seu pedido" })).toBeInTheDocument();
    expect(screen.queryByText(/para a alma/i)).not.toBeInTheDocument();
  });

  it("cites the verse as João 6:35 only, with no translation named", () => {
    render(<ReflectionScreen onHome={vi.fn()} />);
    expect(screen.getByText("João 6:35")).toBeInTheDocument();
    expect(screen.queryByText(/almeida|ara\b/i)).not.toBeInTheDocument();
  });

  it("ends with the closing question and the conference name", () => {
    render(<ReflectionScreen onHome={vi.fn()} />);
    const body = document.body.textContent ?? "";
    expect(body).toContain("Fome de quê?");
    expect(body).toContain("Conferência Move");
    expect(body).toContain("Existe uma fome que nada neste mundo pode saciar.");
  });
});
