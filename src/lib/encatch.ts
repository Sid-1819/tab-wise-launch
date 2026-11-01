import { _encatch, type Theme } from "@encatch/web-sdk";

let initialized = false;

export function isEncatchConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_ENCATCH_API_KEY && process.env.NEXT_PUBLIC_ENCATCH_FORM_ID,
  );
}

export function toEncatchTheme(theme: string | undefined): Theme {
  if (theme === "light" || theme === "dark" || theme === "system") {
    return theme;
  }
  return "system";
}

export function initEncatch(theme: Theme): void {
  if (initialized || !process.env.NEXT_PUBLIC_ENCATCH_API_KEY) return;

  _encatch.init(process.env.NEXT_PUBLIC_ENCATCH_API_KEY, { theme });
  initialized = true;
}

export function syncEncatchTheme(theme: Theme): void {
  if (!initialized) return;
  _encatch.setTheme(theme);
}

export function showFeedbackForm(): void {
  const formId = process.env.NEXT_PUBLIC_ENCATCH_FORM_ID;
  if (!formId) {
    console.warn("NEXT_PUBLIC_ENCATCH_FORM_ID is not configured");
    return;
  }
  _encatch.showForm(formId);
}
