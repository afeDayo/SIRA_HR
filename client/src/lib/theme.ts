export type Theme = "light" | "dark";

const STORAGE_KEY = "sira-theme";

export function getSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

export function getCurrentTheme(): Theme {
  const saved = getSavedTheme();
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function saveTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    return;
  }
}
