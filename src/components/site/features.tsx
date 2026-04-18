import {
  Search, Layers, Save, History, Copy, Activity, Cpu, Palette, Pin,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/use-reveal";

const FEATURES = [
  {
    icon: Search,
    title: "Smart search across tabs",
    body: "Find any open tab by title, URL or domain — instantly. No more Cmd+Tabbing through a wall of favicons.",
  },
  {
    icon: Layers,
    title: "Grouping that thinks like you",
    body: "Auto-group by domain, or define your own groups. Collapse what you’re not using; surface what you are.",
  },
  {
    icon: Save,
    title: "Sessions, saved",
    body: "Capture an entire window — every tab, in order. Restore it here, or pop it open in a fresh window later.",
  },
  {
    icon: History,
    title: "Recover what you closed",
    body: "Closed a tab you needed? Recently-closed history is one click away, with full URLs and titles intact.",
  },
  {
    icon: Copy,
    title: "Duplicate cleanup",
    body: "Spot the same page open three times. Close the dupes in a single action, keep the one with your scroll.",
  },
  {
    icon: Activity,
    title: "Awareness, not surveillance",
    body: "Quiet activity insights show where your day is going. Nothing leaves your machine — ever.",
    badge: "Local-only",
  },
  {
    icon: Cpu,
    title: "System RAM meter",
    body: "Optional pulse on your machine’s overall memory pressure. Not per-tab data — and the permission is opt-in.",
    badge: "Optional",
  },
  {
    icon: Pin,
    title: "Important tabs, pinned",
    body: "Mark the tabs that matter. They stay parked at the top of the panel even as the rest churn.",
  },
  {
    icon: Palette,
    title: "Polished, themeable UI",
    body: "Light, dark, system — with multiple presets you can extend. Built to feel like a native part of Chrome.",
  },
];

export function Features() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-prose">
        <div ref={headRef} className="reveal mb-14 max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Features
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
            A quiet command center for the way you actually browse.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every feature earns its place in the panel. Nothing flashing, nothing nagging.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <Card
              key={f.title}
              className="group relative h-full border-hairline bg-surface transition-all hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <f.icon className="size-5" />
                  </div>
                  {f.badge && (
                    <Badge variant="secondary" className="rounded-full text-[10px] font-normal">
                      {f.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-display text-lg font-medium tracking-tight">
                  {f.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {f.body}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
