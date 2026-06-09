import { useEffect } from "react";
import { useTheme } from "next-themes";

import { LOGO_DARK_SRC, LOGO_LIGHT_SRC } from "@/lib/constants";

const FAVICON_ID = "tabwise-favicon";

function setFavicon(href: string) {
  let link = document.getElementById(FAVICON_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = FAVICON_ID;
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);
  }
  link.href = href;
}

export function FaviconThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    setFavicon(resolvedTheme === "dark" ? LOGO_DARK_SRC : LOGO_LIGHT_SRC);
  }, [resolvedTheme]);

  return null;
}
