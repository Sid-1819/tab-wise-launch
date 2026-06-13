import { Bug, GitPullRequest, Sparkles, Github, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GITHUB_CONTRIBUTING_URL,
  GITHUB_GOOD_FIRST_ISSUES_URL,
  GITHUB_ISSUES_URL,
  GITHUB_REPO_URL,
} from "@/lib/constants";
import { useReveal } from "@/hooks/use-reveal";

const PATHS = [
  {
    icon: Bug,
    title: "Report bugs & request features",
    body: "Found something off, or have an idea? Open an issue — we triage everything and label what’s ready to pick up.",
    href: GITHUB_ISSUES_URL,
    linkLabel: "Browse issues",
  },
  {
    icon: Sparkles,
    title: "Pick a starter issue",
    body: "Look for the good first issue label — scoped tasks to get familiar with the codebase without biting off too much.",
    href: GITHUB_GOOD_FIRST_ISSUES_URL,
    linkLabel: "Good first issues",
  },
  {
    icon: GitPullRequest,
    title: "Open a pull request",
    body: "Read CONTRIBUTING, fork the repo, branch, and send a PR. We review every contribution — code, docs, and fixes welcome.",
    href: GITHUB_CONTRIBUTING_URL,
    linkLabel: "Contributing guide",
  },
];

export function Contribute() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="contribute" className="border-t border-hairline/70 py-24 md:py-32">
      <div className="container-prose">
        <div ref={headRef} className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Open source
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
            Help build Tab Wise.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tab Wise is free, local-first, and open on GitHub. Whether you fix a bug, improve docs,
            or ship a feature — there&apos;s a path in.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3"
        >
          {PATHS.map((path) => (
            <Card
              key={path.title}
              className="group relative flex h-full flex-col border-hairline bg-surface transition-all hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md"
            >
              <CardHeader className="flex flex-1 flex-col space-y-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <path.icon className="size-5" />
                </div>
                <CardTitle className="font-display text-lg font-medium tracking-tight">
                  {path.title}
                </CardTitle>
                <CardDescription className="flex-1 text-sm leading-relaxed">
                  {path.body}
                </CardDescription>
                <a
                  href={path.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                >
                  {path.linkLabel}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href={GITHUB_ISSUES_URL} target="_blank" rel="noreferrer">
              <Bug className="size-4" />
              Browse issues
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
              <Github className="size-4" />
              View repository
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
