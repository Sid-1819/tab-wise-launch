import { Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { useReveal } from "@/hooks/use-reveal";

const PERMISSIONS = [
  {
    name: "tabs",
    why: "To list, search, switch and close the tabs you already have open.",
  },
  {
    name: "tabGroups",
    why: "To create and update Chrome’s native tab groups when you organize.",
  },
  {
    name: "storage",
    why: "To save sessions, your settings and theme — locally, in your browser.",
  },
  {
    name: "sidePanel",
    why: "So Tab Wise can live in the side panel alongside your current page.",
  },
  {
    name: "Host access",
    why: "To read tab titles and URLs across sites you’ve opened — required for search and grouping. Tab Wise never reads page content.",
  },
  {
    name: "system.memory (optional)",
    why: "Opt-in only. Powers the system RAM meter — your machine’s overall memory, never per-tab data.",
  },
];

export function Trust() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="trust" className="py-24">
      <div className="container-prose">
        <div ref={ref} className="reveal mx-auto max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <ShieldCheck className="size-4" /> Permissions, in plain English
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Honest about what we touch — and what we don’t.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tab Wise runs entirely in your browser. No accounts. No analytics on your activity.
            No data sent anywhere.
          </p>

          <div className="mt-10 rounded-2xl border border-hairline bg-surface">
            {PERMISSIONS.map((p, i) => (
              <div key={p.name}>
                <div className="grid gap-2 p-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <div className="font-mono text-sm text-foreground">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.why}</div>
                </div>
                {i < PERMISSIONS.length - 1 && <Separator />}
              </div>
            ))}
          </div>

          <Link
            to="/privacy"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
          >
            Read the full privacy policy <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
