import { Chrome, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeaturedStoreBadge } from "@/components/site/featured-badge";
import { CHROME_WEB_STORE_URL, GITHUB_ISSUES_URL, GITHUB_REPO_URL } from "@/lib/constants";
import { useReveal } from "@/hooks/use-reveal";

export function CtaBanner() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24">
      <div className="container-prose">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl border border-hairline bg-foreground px-8 py-16 text-background md:px-16 md:py-20"
        >
          <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
            <div className="bg-grid h-full w-full" />
          </div>
          <div className="relative max-w-2xl">
            <FeaturedStoreBadge inverted className="mb-5" />
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Stop hunting tabs. Start finishing them.
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Free, local-first, side-panel-native. Install Tab Wise and reclaim the right edge
              of your browser — or{" "}
              <a
                href="/#contribute"
                className="text-background underline underline-offset-2 hover:no-underline"
              >
                help build it
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
                  <Chrome className="size-4" />
                  Add to Chrome
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <a href={GITHUB_ISSUES_URL} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  Browse issues
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
