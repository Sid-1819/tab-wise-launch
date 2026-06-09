import { useReveal } from "@/hooks/use-reveal";

/**
 * Stylized Chrome window with the Tab Wise side panel.
 * REPLACE-ME: drop a real screenshot into the right-hand panel area
 * (search the JSX for `data-replace="side-panel-screenshot"`).
 */
export function SidePanelMockup() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-prose">
        <div ref={ref} className="reveal mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-hairline bg-surface-muted/70 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-foreground/15" />
                <span className="size-3 rounded-full bg-foreground/15" />
                <span className="size-3 rounded-full bg-foreground/15" />
              </div>
              <div className="ml-3 flex h-7 max-w-md flex-1 items-center rounded-md border border-hairline bg-background px-3 text-xs text-muted-foreground">
                tabwise.app
              </div>
            </div>

            {/* Body: page + side panel */}
            <div className="grid grid-cols-[1fr_300px] min-h-[420px]">
              {/* Page area (placeholder) */}
              <div className="relative bg-background p-8">
                <div className="space-y-3">
                  <div className="h-3 w-1/3 rounded bg-foreground/10" />
                  <div className="h-3 w-2/3 rounded bg-foreground/10" />
                  <div className="h-3 w-1/2 rounded bg-foreground/10" />
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] rounded-lg bg-surface-muted" />
                  <div className="aspect-[4/3] rounded-lg bg-surface-muted" />
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  Your current page — uninterrupted
                </div>
              </div>

              {/* Side panel */}
              <aside
                data-replace="side-panel-screenshot"
                className="relative flex flex-col gap-4 border-l border-hairline bg-surface-muted/40 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Tab Wise
                  </div>
                  <div className="text-[10px] text-muted-foreground">42 tabs</div>
                </div>
                <div className="flex h-8 items-center rounded-md border border-hairline bg-background px-2.5 text-xs text-muted-foreground">
                  Search tabs…
                </div>

                {/* Group: Work */}
                <div>
                  <div className="mb-1.5 flex items-center gap-2 text-[11px] font-medium text-foreground/80">
                    <span className="size-2 rounded-full bg-ring" /> Work · 6
                  </div>
                  <div className="space-y-1">
                    {["Design review — Figma", "Dashboard / Analytics", "PR #482 · GitHub"].map(
                      (t, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs hover:bg-background"
                        >
                          <span className="size-3 rounded-sm bg-foreground/20" />
                          <span className="truncate">{t}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Group: Reading */}
                <div>
                  <div className="mb-1.5 flex items-center gap-2 text-[11px] font-medium text-foreground/80">
                    <span className="size-2 rounded-full bg-foreground/40" /> Reading · 4
                  </div>
                  <div className="space-y-1">
                    {["Why side panels won", "Notes on calm software", "Long-form: focus debt"].map(
                      (t, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs hover:bg-background"
                        >
                          <span className="size-3 rounded-sm bg-foreground/20" />
                          <span className="truncate">{t}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>Session: Tuesday morning</span>
                  <span>Save</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
