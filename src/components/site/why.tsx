import { useReveal } from "@/hooks/use-reveal";

export function WhyItExists() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-y border-hairline/70 bg-surface-muted/30 py-20 md:py-24">
      <div className="container-prose grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div ref={ref} className="reveal">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Why it exists
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Tabs are work. Treat them that way.
          </h2>
        </div>
        <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            By mid-afternoon, the tab strip is a horizon of favicons. You know the link is in
            there somewhere. You know you saved that thread. You start over.
          </p>
          <p>
            Tab Wise puts <span className="text-foreground">search, structure, and recovery</span>{" "}
            into a single side panel that lives next to your work — so you stay oriented without
            leaving the page you’re on.
          </p>
        </div>
      </div>
    </section>
  );
}
