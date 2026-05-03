import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";
import { applyTheme } from "./theme";

function mockMatchMedia(matches: boolean) {
  const listeners = new Set<(e: { matches: boolean }) => void>();
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: (_: string, l: (e: { matches: boolean }) => void) =>
        listeners.add(l),
      removeEventListener: (_: string, l: (e: { matches: boolean }) => void) =>
        listeners.delete(l),
      dispatchEvent: vi.fn(),
    })),
  });
  return {
    fire: (m: boolean) => listeners.forEach((l) => l({ matches: m })),
  };
}

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    mockMatchMedia(false);
  });

  it("reads the current data-theme from <html>", () => {
    applyTheme("dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("setTheme updates the hook value and the DOM", () => {
    applyTheme("light");
    const { result } = renderHook(() => useTheme());
    act(() => result.current.setTheme("dark"));
    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("toggle flips the theme", () => {
    applyTheme("light");
    const { result } = renderHook(() => useTheme());
    act(() => result.current.toggle());
    expect(result.current.theme).toBe("dark");
    act(() => result.current.toggle());
    expect(result.current.theme).toBe("light");
  });

  it("syncs across multiple hook instances via themechange event", () => {
    applyTheme("light");
    const a = renderHook(() => useTheme());
    const b = renderHook(() => useTheme());
    act(() => a.result.current.setTheme("dark"));
    expect(b.result.current.theme).toBe("dark");
  });

  it("system change updates the theme when no override is stored", () => {
    const mm = mockMatchMedia(false);
    applyTheme("light");
    const { result } = renderHook(() => useTheme());
    act(() => mm.fire(true));
    expect(result.current.theme).toBe("dark");
  });

  it("system change is ignored when the user has stored an override", () => {
    const mm = mockMatchMedia(false);
    applyTheme("light");
    const { result } = renderHook(() => useTheme());
    act(() => result.current.setTheme("light"));
    act(() => mm.fire(true));
    expect(result.current.theme).toBe("light");
  });
});
