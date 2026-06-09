import { Chrome, Github, Command, Pin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeaturedStoreBadge } from "@/components/site/featured-badge";
import { CHROME_WEB_STORE_URL, GITHUB_REPO_URL } from "@/lib/constants";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Abstract motion: small "tab" cards drift in and snap into a grouped grid.
 * Pure SVG + CSS so it's lightweight, themeable, and respects reduced motion.
 */
function TabsMotif() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <svg
        viewBox="0 0 500 400"
        className="relative h-full w-full"
        role="img"
        aria-label="Scattered tabs organizing into neat groups"
      >
        <defs>
          <linearGradient id="card" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-surface)" />
            <stop offset="100%" stopColor="var(--color-surface-muted)" />
          </linearGradient>
        </defs>

        {/* Group frame */}
        <g className="tw-drift" style={{ animationDelay: "0.4s" }}>
          <rect
            x="40" y="40" width="420" height="320" rx="18"
            fill="none" stroke="var(--color-hairline)" strokeDasharray="4 6"
          />
        </g>

        {/* Group A */}
        {[
          { x: 70,  y: 80,  delay: 0.05, w: 150 },
          { x: 70,  y: 130, delay: 0.12, w: 150 },
          { x: 70,  y: 180, delay: 0.20, w: 150 },
        ].map((c, i) => (
          <g key={`a${i}`} style={{ animation: `tw-snap-in 0.8s ${c.delay}s cubic-bezier(.22,1,.36,1) both` }}>
            <rect x={c.x} y={c.y} width={c.w} height="36" rx="8" fill="url(#card)" stroke="var(--color-hairline)" />
            <circle cx={c.x + 14} cy={c.y + 18} r="4" fill="var(--color-ring)" />
            <rect x={c.x + 26} y={c.y + 13} width="100" height="4" rx="2" fill="var(--color-foreground)" opacity="0.55" />
            <rect x={c.x + 26} y={c.y + 22} width="70" height="3" rx="1.5" fill="var(--color-muted-foreground)" opacity="0.5" />
          </g>
        ))}

        {/* Group B */}
        {[
          { x: 280, y: 80,  delay: 0.30, w: 150 },
          { x: 280, y: 130, delay: 0.38, w: 150 },
          { x: 280, y: 180, delay: 0.46, w: 150 },
          { x: 280, y: 230, delay: 0.54, w: 150 },
        ].map((c, i) => (
          <g key={`b${i}`} style={{ animation: `tw-snap-in 0.8s ${c.delay}s cubic-bezier(.22,1,.36,1) both` }}>
            <rect x={c.x} y={c.y} width={c.w} height="36" rx="8" fill="url(#card)" stroke="var(--color-hairline)" />
            <circle cx={c.x + 14} cy={c.y + 18} r="4" fill="var(--color-foreground)" opacity="0.5" />
            <rect x={c.x + 26} y={c.y + 13} width="90" height="4" rx="2" fill="var(--color-foreground)" opacity="0.55" />
            <rect x={c.x + 26} y={c.y + 22} width="60" height="3" rx="1.5" fill="var(--color-muted-foreground)" opacity="0.5" />
          </g>
        ))}

        {/* Footer hint */}
        <g style={{ animation: `tw-fade-in 0.8s 0.7s both` }}>
          <rect x="70" y="300" width="360" height="32" rx="8" fill="var(--color-surface)" stroke="var(--color-hairline)" />
          <rect x="84" y="313" width="120" height="6" rx="3" fill="var(--color-foreground)" opacity="0.6" />
          <rect x="380" y="311" width="36" height="10" rx="5" fill="var(--color-ring)" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden">
      <div className="container-prose grid items-center gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28 lg:py-32">
        <div ref={ref} className="reveal-stagger">
          <div className="flex flex-wrap items-center gap-2">
            <FeaturedStoreBadge />
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-normal">
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-ring" />
              Chrome side-panel extension
            </Badge>
          </div>

          <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            The wise way to wrangle your web.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tab Wise lives in the Chrome side panel — search, group, save and recover tabs
            without ever leaving the page you’re on. Clarity under load.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
                <Chrome className="size-4" />
                Add to Chrome
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Pin className="size-3.5" />
            <span>
              Pin Tab Wise for one-click access.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-transparent blur-2xl" aria-hidden />
          <TabsMotif />
        </div>
      </div>
    </section>
  );
}
