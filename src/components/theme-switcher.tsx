import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME_PRESETS, useThemePreset } from "@/components/theme-provider";
import {
  centerOfElement,
  resolveAppearance,
  runAppearanceThemeTransition,
} from "@/lib/theme-appearance-transition";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { preset, setPreset } = useThemePreset();
  const [mounted, setMounted] = React.useState(false);
  const lastPointer = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      lastPointer.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => window.removeEventListener("pointerdown", onPointerDown, true);
  }, []);

  const transitionSetTheme = React.useCallback(
    (next: string, origin: { x: number; y: number }) => {
      const target = resolveAppearance(next);
      runAppearanceThemeTransition(target, origin, () => {
        flushSync(() => {
          setTheme(next);
        });
      });
    },
    [setTheme],
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle dark mode"
        onClick={(e) => {
          const next = isDark ? "light" : "dark";
          transitionSetTheme(next, centerOfElement(e.currentTarget));
        }}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Theme preset">
            <Palette className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuLabel>Preset</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={preset} onValueChange={setPreset}>
            {THEME_PRESETS.map((p) => (
              <DropdownMenuRadioItem key={p.id} value={p.id}>
                {p.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled className="text-xs text-muted-foreground">
            Add more in styles.css
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
