"use client";

import { EncatchProvider } from "@/components/encatch-provider";
import { FaviconThemeSync } from "@/components/favicon-theme-sync";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <EncatchProvider>
        <FaviconThemeSync />
        {children}
      </EncatchProvider>
    </ThemeProvider>
  );
}
