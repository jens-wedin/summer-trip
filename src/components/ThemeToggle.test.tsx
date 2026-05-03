import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";
import { applyTheme } from "../lib/theme";

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    mockMatchMedia(false);
  });

  it("shows the moon icon and 'Switch to dark mode' label when light", () => {
    applyTheme("light");
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /switch to dark mode/i });
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("shows the sun icon and 'Switch to light mode' label when dark", () => {
    applyTheme("dark");
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /switch to light mode/i });
    expect(button).toHaveAttribute("aria-pressed", "true");
  });

  it("clicking flips the theme", async () => {
    applyTheme("light");
    const user = userEvent.setup();
    render(<ThemeToggle />);
    await user.click(screen.getByRole("button"));
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("Enter key activates the toggle", async () => {
    applyTheme("light");
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    button.focus();
    await user.keyboard("{Enter}");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
