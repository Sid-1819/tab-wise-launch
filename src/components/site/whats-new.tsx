"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRightLeft,
  Check,
  ChevronDown,
  Chrome,
  Moon,
  PanelRight,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { CHROME_WEB_STORE_URL, PRODUCT_VERSION } from "@/lib/constants";
import { WHATS_NEW_NOTES } from "@/lib/whats-new";
import { cn } from "@/lib/utils";

const COLORS = [
  { name: "Blue", value: "#3B82F6", light: false },
  { name: "Green", value: "#22C55E", light: false },
  { name: "Amber", value: "#F59E0B", light: true },
  { name: "Violet", value: "#8B5CF6", light: false },
  { name: "Pink", value: "#EC4899", light: false },
  { name: "Teal", value: "#14B8A6", light: false },
] as const;

type WindowId = "this" | "other";
type Nest = "Docs" | "Code";

type DemoTab = {
  id: string;
  title: string;
  window: WindowId;
  group: "GitHub" | "Reading" | null;
  nest: Nest | null;
  staleDays: number;
  sleeping: boolean;
  duplicate: boolean;
  lightIcon?: boolean;
};

function createTabs(): DemoTab[] {
  return [
    {
      id: "figma",
      title: "Design review — Figma",
      window: "this",
      group: null,
      nest: null,
      staleDays: 0,
      sleeping: false,
      duplicate: false,
    },
    {
      id: "pr",
      title: "PR #482 · GitHub",
      window: "this",
      group: "GitHub",
      nest: "Code",
      staleDays: 0,
      sleeping: false,
      duplicate: false,
    },
    {
      id: "pr-copy",
      title: "PR #482 · GitHub",
      window: "this",
      group: "GitHub",
      nest: "Code",
      staleDays: 0,
      sleeping: false,
      duplicate: true,
    },
    {
      id: "docs",
      title: "Actions · docs.github.com",
      window: "this",
      group: "GitHub",
      nest: "Docs",
      staleDays: 0,
      sleeping: false,
      duplicate: false,
      lightIcon: true,
    },
    {
      id: "article",
      title: "Long article — unread",
      window: "this",
      group: "Reading",
      nest: null,
      staleDays: 4,
      sleeping: false,
      duplicate: false,
    },
    {
      id: "spec",
      title: "Old spec draft",
      window: "other",
      group: null,
      nest: null,
      staleDays: 6,
      sleeping: false,
      duplicate: false,
    },
    {
      id: "notes",
      title: "Research notes",
      window: "other",
      group: "Reading",
      nest: null,
      staleDays: 2,
      sleeping: false,
      duplicate: false,
    },
  ];
}

function VersionPreview({ onClose }: { onClose: () => void }) {
  const [tabs, setTabs] = useState<DemoTab[]>(createTabs);
  const [scope, setScope] = useState<"this" | "all">("this");
  const [threshold, setThreshold] = useState<1 | 3>(1);
  const [activeId, setActiveId] = useState("figma");
  const [color, setColor] = useState<(typeof COLORS)[number]>(COLORS[0]);
  const [nested, setNested] = useState(true);
  const [collapsed, setCollapsed] = useState<WindowId[]>([]);
  const [note, setNote] = useState("Click around. This is the 2.5 panel, running in the page.");

  const visible = tabs.filter((tab) => scope === "all" || tab.window === "this");
  const unused = visible.filter((tab) => tab.staleDays >= threshold && !tab.sleeping);
  const duplicateCount = visible.filter((tab) => tab.duplicate).length;
  const active = tabs.find((tab) => tab.id === activeId) ?? visible[0];
  const windows: WindowId[] = scope === "all" ? ["this", "other"] : ["this"];

  const grouped = windows.map((windowId) => {
    const windowTabs = visible.filter((tab) => tab.window === windowId);
    const groups = ["GitHub", "Reading", null] as const;
    return {
      windowId,
      label: windowId === "this" ? "This window · focused" : "Research window",
      groups: groups
        .map((name) => ({
          name,
          tabs: windowTabs.filter((tab) => tab.group === name),
        }))
        .filter((group) => group.tabs.length > 0),
    };
  });

  function sleepUnused() {
    const ids = new Set(unused.map((tab) => tab.id));
    if (ids.size === 0) return;
    setTabs((current) =>
      current.map((tab) => (ids.has(tab.id) ? { ...tab, sleeping: true } : tab)),
    );
    setNote(
      `Slept ${ids.size} unused tab${ids.size === 1 ? "" : "s"}. They stay in the list, dimmed.`,
    );
  }

  function closeUnused() {
    const ids = new Set(unused.map((tab) => tab.id));
    if (ids.size === 0) return;
    setTabs((current) => current.filter((tab) => !ids.has(tab.id)));
    setNote(`Closed ${ids.size} unused tab${ids.size === 1 ? "" : "s"}.`);
  }

  function closeDuplicates() {
    const removeIds = new Set(visible.filter((tab) => tab.duplicate).map((tab) => tab.id));
    if (removeIds.size === 0) {
      setNote("No duplicates in this view.");
      return;
    }
    setTabs((current) => current.filter((tab) => !removeIds.has(tab.id)));
    setNote("Closed the extra copy. Tracking parameters no longer hide the same page.");
  }

  function moveTab(tab: DemoTab) {
    const next = tab.window === "this" ? "other" : "this";
    setTabs((current) => current.map((item) => (item.id === tab.id ? { ...item, window: next } : item)));
    setScope("all");
    setNote(`Moved “${tab.title}” to the ${next === "this" ? "focused" : "other"} window.`);
  }

  function reset() {
    setTabs(createTabs());
    setScope("this");
    setThreshold(1);
    setActiveId("figma");
    setColor(COLORS[0]);
    setNested(true);
    setCollapsed([]);
    setNote("Preview reset. Try sleep, windows, nesting, and colors again.");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2 border-b border-hairline bg-surface-muted/70 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
        </div>
        <div className="ml-3 flex h-7 min-w-0 flex-1 items-center truncate rounded-md border border-hairline bg-background px-3 text-xs text-muted-foreground">
          {active?.title ?? "No tab selected"}
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="grid md:h-[34rem] md:grid-cols-[1fr_320px]">
        <div className="relative hidden bg-background p-8 md:block">
          <div className="space-y-3">
            <div className="h-3 w-1/3 rounded bg-foreground/10" />
            <div className="h-3 w-2/3 rounded bg-foreground/10" />
            <div className="h-3 w-1/2 rounded bg-foreground/10" />
          </div>
          <p className="mt-8 max-w-sm font-display text-2xl leading-tight">
            {active?.sleeping ? "This tab is sleeping." : active?.title}
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground" aria-live="polite">
            {note}
          </p>
          <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider text-muted-foreground/60">
            Your current page — uninterrupted
          </div>
        </div>

        <aside className="flex h-full min-h-0 max-h-[34rem] flex-col border-t border-hairline bg-surface-muted/40 p-3 md:max-h-none md:border-l md:border-t-0">
          <div className="mb-2 flex items-center justify-between gap-2 px-1">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Tab Wise
            </div>
            <div className="text-[10px] tabular-nums text-muted-foreground">
              {visible.length} tabs · v{PRODUCT_VERSION}
            </div>
          </div>

          <div className="mb-2 grid h-7 grid-cols-2 gap-0.5 rounded-md bg-muted/70 p-0.5" role="group" aria-label="Window scope">
            {(
              [
                ["this", "This window"],
                ["all", "All windows"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={scope === value}
                className={cn(
                  "rounded-[5px] text-[11px]",
                  scope === value
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => {
                  setScope(value);
                  setNote(value === "all" ? "Showing every window." : "Showing this window only.");
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {duplicateCount > 0 && (
            <div className="mb-2 flex items-center justify-between gap-2 rounded-md border border-hairline bg-background px-2 py-1.5 text-[11px]">
              <span>{duplicateCount} duplicate{duplicateCount === 1 ? "" : "s"} of the same page</span>
              <button type="button" className="font-medium underline underline-offset-2" onClick={closeDuplicates}>
                Close extras
              </button>
            </div>
          )}

          {unused.length > 0 && (
            <div className="mb-2 rounded-md border border-hairline bg-background px-2 py-1.5 text-[11px]">
              <div className="flex items-center justify-between gap-2">
                <span>{unused.length} unused</span>
                <div className="flex items-center gap-1">
                  <label className="sr-only" htmlFor="preview-threshold">
                    Unused for
                  </label>
                  <select
                    id="preview-threshold"
                    className="h-6 rounded border border-input bg-background px-1 text-[11px]"
                    value={threshold}
                    onChange={(event) => setThreshold(Number(event.target.value) as 1 | 3)}
                  >
                    <option value={1}>1 day</option>
                    <option value={3}>3 days</option>
                  </select>
                  <button
                    type="button"
                    className="inline-flex h-6 items-center gap-1 rounded bg-secondary px-1.5 font-medium"
                    onClick={sleepUnused}
                  >
                    <Moon className="size-3" />
                    Sleep
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-6 items-center gap-1 rounded bg-secondary px-1.5 font-medium"
                    onClick={closeUnused}
                  >
                    <X className="size-3" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-0.5">
            {grouped.map((section) => {
              const isCollapsed = collapsed.includes(section.windowId);
              return (
                <div key={section.windowId}>
                  {scope === "all" && (
                    <button
                      type="button"
                      className="mb-1 flex w-full items-center gap-1 px-1 text-left text-[11px] font-medium"
                      aria-expanded={!isCollapsed}
                      onClick={() =>
                        setCollapsed((current) =>
                          current.includes(section.windowId)
                            ? current.filter((id) => id !== section.windowId)
                            : [...current, section.windowId],
                        )
                      }
                    >
                      <ChevronDown className={cn("size-3 transition-transform", isCollapsed && "-rotate-90")} />
                      {section.label}
                    </button>
                  )}
                  {!isCollapsed &&
                    section.groups.map((group) => (
                      <div key={group.name ?? "loose"} className="mb-2">
                        {group.name && (
                          <div className="mb-1 flex items-center gap-2 px-1">
                            <span
                              className="size-2 rounded-full"
                              style={{ backgroundColor: group.name === "GitHub" ? color.value : "var(--color-foreground)" }}
                            />
                            <span className="text-[11px] font-medium">
                              {group.name}
                              {group.name === "GitHub" ? ` · ${color.name}` : ""}
                            </span>
                            {group.name === "GitHub" && (
                              <button
                                type="button"
                                className="ml-auto text-[10px] text-muted-foreground underline underline-offset-2"
                                onClick={() => {
                                  setNested((value) => !value);
                                  setNote(nested ? "Nesting off. GitHub is one flat list." : "Nesting on. Docs sits inside GitHub.");
                                }}
                              >
                                {nested ? "Nesting on" : "Nesting off"}
                              </button>
                            )}
                          </div>
                        )}
                        {group.name === "GitHub" && (
                          <div className="mb-1.5 flex items-center gap-1 px-1" role="listbox" aria-label="Group color">
                            {COLORS.map((swatch) => {
                              const selected = swatch.value === color.value;
                              return (
                                <button
                                  key={swatch.value}
                                  type="button"
                                  role="option"
                                  aria-selected={selected}
                                  aria-label={swatch.name}
                                  title={swatch.name}
                                  className="flex size-4 items-center justify-center rounded-full"
                                  style={{ backgroundColor: swatch.value }}
                                  onClick={() => {
                                    setColor(swatch);
                                    setNote(`Group color set to ${swatch.name}.`);
                                  }}
                                >
                                  {selected && (
                                    <Check className={cn("size-2.5", swatch.light ? "text-neutral-950" : "text-white")} />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                        <TabRows
                          tabs={group.tabs}
                          nested={nested && group.name === "GitHub"}
                          activeId={active?.id}
                          onOpen={(tab) => {
                            setActiveId(tab.id);
                            if (tab.sleeping) {
                              setTabs((current) =>
                                current.map((item) =>
                                  item.id === tab.id ? { ...item, sleeping: false, staleDays: 0 } : item,
                                ),
                              );
                              setNote(`Woke “${tab.title}”.`);
                              return;
                            }
                            setNote(`Switched to “${tab.title}”.`);
                          }}
                          onMove={moveTab}
                        />
                      </div>
                    ))}
                </div>
              );
            })}
          </div>

          <p className="mt-2 px-1 text-[11px] text-muted-foreground md:hidden" aria-live="polite">
            {note}
          </p>

          <div className="mt-3 flex items-center justify-between gap-2 border-t border-hairline pt-3">
            <button type="button" className="text-[11px] text-muted-foreground underline underline-offset-2" onClick={reset}>
              Reset preview
            </button>
            <Button asChild size="sm">
              <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
                <Chrome className="size-3.5" />
                Add to Chrome
              </a>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function TabRows({
  tabs,
  nested,
  activeId,
  onOpen,
  onMove,
}: {
  tabs: DemoTab[];
  nested: boolean;
  activeId?: string;
  onOpen: (tab: DemoTab) => void;
  onMove: (tab: DemoTab) => void;
}) {
  const nests: Array<{ label: string | null; tabs: DemoTab[] }> = nested
    ? (["Docs", "Code"] as const)
        .map((label) => ({ label, tabs: tabs.filter((tab) => tab.nest === label) }))
        .filter((group) => group.tabs.length > 0)
    : [{ label: null, tabs }];

  return (
    <div className="space-y-1">
      {nests.map((group) => (
        <div key={group.label ?? "flat"}>
          {group.label && (
            <div className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              {group.label}
            </div>
          )}
          {group.tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs",
                tab.sleeping && "opacity-50",
                activeId === tab.id ? "bg-background" : "hover:bg-background/70",
              )}
            >
              <button type="button" className="flex min-w-0 flex-1 items-center gap-2 text-left" onClick={() => onOpen(tab)}>
                <span
                  className={cn(
                    "size-3 shrink-0 rounded-sm",
                    tab.lightIcon ? "bg-white ring-1 ring-foreground/30" : "bg-foreground/20",
                  )}
                />
                <span className="truncate">{tab.title}</span>
                {tab.duplicate && <span className="shrink-0 text-[10px] text-muted-foreground">copy</span>}
                {tab.sleeping && <span className="shrink-0 text-[10px] text-muted-foreground">Sleeping</span>}
              </button>
              <button
                type="button"
                className="shrink-0 text-muted-foreground hover:text-foreground"
                aria-label={`Move ${tab.title} to the other window`}
                title="Move to the other window"
                onClick={() => onMove(tab)}
              >
                <ArrowRightLeft className="size-3" />
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function WhatsNew() {
  const headRef = useReveal<HTMLDivElement>();
  const previewRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && !wasOpen.current) {
      previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    wasOpen.current = open;
  }, [open]);

  return (
    <section id="whats-new" className="scroll-mt-20 border-y border-hairline/70 bg-surface-muted/30 py-24 md:py-32">
      <div className="container-prose">
        <div ref={headRef} className="reveal max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            What’s new · Version {PRODUCT_VERSION}
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
            The panel keeps up when the browser doesn’t.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Version {PRODUCT_VERSION} is for the mess that builds up: windows you forgot you
            opened, tabs you haven’t touched, and the same page hiding behind a slightly different
            URL.
          </p>
        </div>

        <ol className="mt-12 border-t border-hairline">
          {WHATS_NEW_NOTES.map((note) => (
            <li
              key={note.n}
              className="grid gap-1 border-b border-hairline py-5 sm:grid-cols-[3.5rem_16.5rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-2xl text-muted-foreground/50">{note.n}</span>
              <h3 className="font-display text-xl">{note.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{note.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            type="button"
            size="lg"
            aria-expanded={open}
            aria-controls="version-preview"
            onClick={() => setOpen((value) => !value)}
          >
            <PanelRight className="size-4" />
            {open ? "Hide preview" : `Try version ${PRODUCT_VERSION}`}
          </Button>
          <p className="text-sm text-muted-foreground">
            Opens a live side panel in this page. Nothing to install.
          </p>
        </div>

        {open && (
          <div id="version-preview" ref={previewRef} className="scroll-mt-24 mt-10">
            <VersionPreview onClose={() => setOpen(false)} />
          </div>
        )}
      </div>
    </section>
  );
}
