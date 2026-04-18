import { Chrome, PanelRight, Sparkles } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";

const STEPS = [
  {
    icon: Chrome,
    label: "01",
    title: "Install from the Chrome Web Store",
    body: "One click. No account, no onboarding wizard, no nag screens.",
  },
  {
    icon: PanelRight,
    label: "02",
    title: "Open the side panel",
    body: "Click the Tab Wise icon — or pin it to your toolbar so it’s always one tap away.",
  },
  {
    icon: Sparkles,
    label: "03",
    title: "Search, group, save, restore",
    body: "Bring order to today. Save the session. Pick it back up tomorrow exactly where you left off.",
  },
];

export function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="how" className="border-y border-hairline/70 bg-surface-muted/30 py-24">
      <div className="container-prose">
        <div className="mb-12 max-w-xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            How it works
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Three steps. That’s the whole product.
          </h2>
        </div>
        <div ref={ref} className="reveal-stagger grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.label} className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-3xl text-muted-foreground/60">{s.label}</span>
                <span className="h-px flex-1 bg-hairline" />
                <s.icon className="size-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
