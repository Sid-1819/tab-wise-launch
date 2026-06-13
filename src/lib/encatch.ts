import { _encatch, type Theme } from "@encatch/web-sdk";

let initialized = false;

export function isEncatchConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_ENCATCH_API_KEY && import.meta.env.VITE_ENCATCH_FORM_ID,
  );
}

export function toEncatchTheme(theme: string | undefined): Theme {
  if (theme === "light" || theme === "dark" || theme === "system") {
    return theme;
  }
  return "system";
}

export function initEncatch(theme: Theme): void {
  if (initialized || !import.meta.env.VITE_ENCATCH_API_KEY) return;

  _encatch.init(import.meta.env.VITE_ENCATCH_API_KEY, { theme });
  initialized = true;
}

export function syncEncatchTheme(theme: Theme): void {
  if (!initialized) return;
  _encatch.setTheme(theme);
}

export function showFeedbackForm(): void {
  const formId = import.meta.env.VITE_ENCATCH_FORM_ID;
  if (!formId) {
    console.warn("VITE_ENCATCH_FORM_ID is not configured");
    return;
  }
  _encatch.showForm(formId);
}
