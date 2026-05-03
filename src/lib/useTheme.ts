import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  getInitialTheme,
  getStoredTheme,
  setTheme as persistTheme,
  type Theme,
} from "./theme";

export function useTheme(): {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
} {
  const [theme, setLocal] = useState<Theme>(() => {
    const attr = document.documentElement.dataset.theme;
    return attr === "light" || attr === "dark" ? attr : getInitialTheme();
  });

  useEffect(() => {
    const onChange = (e: Event) => {
      const next = (e as CustomEvent<Theme>).detail;
      if (next === "light" || next === "dark") setLocal(next);
    };
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = (e: MediaQueryListEvent) => {
      if (getStoredTheme() === null) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", onSystem);
    return () => mq.removeEventListener("change", onSystem);
  }, []);

  const setTheme = useCallback((t: Theme) => persistTheme(t), []);
  const toggle = useCallback(() => {
    persistTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme, setTheme, toggle };
}
