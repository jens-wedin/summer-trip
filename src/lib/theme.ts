export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const EVENT = "themechange";

function isTheme(v: unknown): v is Theme {
  return v === "light" || v === "dark";
}

export function getStoredTheme(): Theme | null {
  const v = localStorage.getItem(STORAGE_KEY);
  return isTheme(v) ? v : null;
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new CustomEvent(EVENT, { detail: theme }));
}

export function setTheme(theme: Theme): void {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function clearStoredTheme(): void {
  localStorage.removeItem(STORAGE_KEY);
  applyTheme(getSystemTheme());
}
