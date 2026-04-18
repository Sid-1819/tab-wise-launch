import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Theme presets registered for the ThemeSwitcher.
 *
 * To add a new preset:
 *   1. Add the CSS class block in src/styles.css (e.g. `.theme-amber { ... }`).
 *   2. Append `{ id: "amber", label: "Amber", className: "theme-amber" }` here.
 *   3. Done — the switcher renders it automatically.
 *
 * The "default" preset has an empty className (no extra class on <html>).
 */
export type ThemePreset = {
  id: string;
  label: string;
  className: string;
};

export const THEME_PRESETS: ThemePreset[] = [
  { id: "default", label: "Default", className: "" },
  { id: "sage", label: "Sage", className: "theme-sage" },
];

const PRESET_STORAGE_KEY = "tabwise-theme-preset";

type PresetContextValue = {
  preset: string;
  setPreset: (id: string) => void;
};

const PresetContext = React.createContext<PresetContextValue | null>(null);

function PresetProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPresetState] = React.useState<string>("default");

  // Hydrate from storage on mount (avoids SSR mismatch).
  React.useEffect(() => {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem(PRESET_STORAGE_KEY) : null;
    if (stored && THEME_PRESETS.some((p) => p.id === stored)) {
      setPresetState(stored);
    }
  }, []);

  // Apply preset class on <html>.
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    THEME_PRESETS.forEach((p) => {
      if (p.className) root.classList.remove(p.className);
    });
    const active = THEME_PRESETS.find((p) => p.id === preset);
    if (active?.className) root.classList.add(active.className);
  }, [preset]);

  const setPreset = React.useCallback((id: string) => {
    setPresetState(id);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(PRESET_STORAGE_KEY, id);
    }
  }, []);

  return (
    <PresetContext.Provider value={{ preset, setPreset }}>{children}</PresetContext.Provider>
  );
}

export function useThemePreset() {
  const ctx = React.useContext(PresetContext);
  if (!ctx) throw new Error("useThemePreset must be used inside ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PresetProvider>{children}</PresetProvider>
    </NextThemesProvider>
  );
}
