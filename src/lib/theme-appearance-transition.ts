function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function resolveAppearance(theme: string): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme === "dark" ? "dark" : "light";
}

function currentAppearanceFromDom(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function centerOfElement(el: Element | null): { x: number; y: number } {
  if (!el || !(el instanceof HTMLElement)) {
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

/**
 * Same-document theme transition using the View Transitions API (see styles.css
 * `::view-transition-new(root)` circular reveal). Matches the feel of sites like tweakcn.
 * Falls back to an immediate `apply()` when unsupported or reduced motion is on.
 */
export function runAppearanceThemeTransition(
  targetAppearance: "light" | "dark",
  origin: { x: number; y: number },
  apply: () => void,
): void {
  if (prefersReducedMotion()) {
    apply();
    return;
  }

  const current = currentAppearanceFromDom();
  if (current === targetAppearance) {
    apply();
    return;
  }

  const html = document.documentElement;
  html.style.setProperty("--vt-ox", `${origin.x}px`);
  html.style.setProperty("--vt-oy", `${origin.y}px`);

  if (typeof document.startViewTransition === "function") {
    try {
      document.startViewTransition(() => {
        apply();
      });
      return;
    } catch {
      /* fall through */
    }
  }

  apply();
}
