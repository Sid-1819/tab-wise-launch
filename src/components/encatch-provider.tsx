import * as React from "react";
import { useTheme } from "next-themes";

import {
  initEncatch,
  isEncatchConfigured,
  syncEncatchTheme,
  toEncatchTheme,
} from "@/lib/encatch";

export function EncatchProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const encatchTheme = toEncatchTheme(theme);

  React.useEffect(() => {
    if (!isEncatchConfigured()) return;
    initEncatch(encatchTheme);
  }, []);

  React.useEffect(() => {
    if (!isEncatchConfigured()) return;
    syncEncatchTheme(encatchTheme);
  }, [encatchTheme]);

  return children;
}
