import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  getStoredTheme,
  getSystemTheme,
  getInitialTheme,
  applyTheme,
  setTheme,
  clearStoredTheme,
} from "./theme";

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe("theme module", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("getStoredTheme returns null when nothing is stored", () => {
    expect(getStoredTheme()).toBeNull();
  });

  it("getStoredTheme returns the stored value when valid", () => {
    localStorage.setItem("theme", "dark");
    expect(getStoredTheme()).toBe("dark");
  });

  it("getStoredTheme returns null when stored value is garbage", () => {
    localStorage.setItem("theme", "neon");
    expect(getStoredTheme()).toBeNull();
  });

  it("getSystemTheme returns 'dark' when prefers-color-scheme matches", () => {
    mockMatchMedia(true);
    expect(getSystemTheme()).toBe("dark");
  });

  it("getSystemTheme returns 'light' when prefers-color-scheme does not match", () => {
    mockMatchMedia(false);
    expect(getSystemTheme()).toBe("light");
  });

  it("getInitialTheme prefers stored over system", () => {
    mockMatchMedia(true); // system would say dark
    localStorage.setItem("theme", "light");
    expect(getInitialTheme()).toBe("light");
  });

  it("getInitialTheme falls back to system when nothing stored", () => {
    mockMatchMedia(true);
    expect(getInitialTheme()).toBe("dark");
  });

  it("applyTheme sets data-theme on <html>", () => {
    applyTheme("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("applyTheme dispatches a themechange event", () => {
    const handler = vi.fn();
    window.addEventListener("themechange", handler);
    applyTheme("light");
    expect(handler).toHaveBeenCalledTimes(1);
    window.removeEventListener("themechange", handler);
  });

  it("setTheme persists to localStorage and applies", () => {
    setTheme("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("clearStoredTheme removes the entry and falls back to system", () => {
    mockMatchMedia(false);
    setTheme("dark");
    clearStoredTheme();
    expect(localStorage.getItem("theme")).toBeNull();
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
