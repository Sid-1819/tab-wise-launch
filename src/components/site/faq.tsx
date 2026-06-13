import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FeedbackButton } from "@/components/site/feedback-button";
import {
  GITHUB_CONTRIBUTING_URL,
  GITHUB_GOOD_FIRST_ISSUES_URL,
  GITHUB_ISSUES_URL,
  GITHUB_REPO_URL,
} from "@/lib/constants";
import { useReveal } from "@/hooks/use-reveal";

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Does Tab Wise read the contents of my pages?",
    a: "No. It works with tab metadata only — titles, URLs and group state — never the contents of a page.",
  },
  {
    q: "Where is my data stored?",
    a: "Locally in your browser, via Chrome’s storage API. Nothing is sent to a server. There is no Tab Wise account.",
  },
  {
    q: "Will it work in Edge, Brave, Arc or other Chromium browsers?",
    a: "It’s built for Chrome’s side panel API, which is supported in most modern Chromium browsers. Behavior may vary slightly outside Chrome.",
  },
  {
    q: "Why does it ask for broad host access?",
    a: "Chrome requires host access to read tab URLs and titles across the sites you’ve already opened. That’s what powers search and grouping. Tab Wise does not inject scripts or read page content.",
  },
  {
    q: "Is the system RAM meter tracking my browsing?",
    a: "No. It reports your machine’s overall memory pressure, not anything per-tab or per-site. The permission is optional — Tab Wise works fully without it.",
  },
  {
    q: "Is it free? Open source?",
    a: (
      <>
        Free to install from the Chrome Web Store and{" "}
        <a
          className="text-foreground underline underline-offset-2 hover:no-underline"
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noreferrer"
        >
          open source on GitHub
        </a>
        . File a{" "}
        <a
          className="text-foreground underline underline-offset-2 hover:no-underline"
          href={GITHUB_ISSUES_URL}
          target="_blank"
          rel="noreferrer"
        >
          bug or feature request
        </a>
        , grab a{" "}
        <a
          className="text-foreground underline underline-offset-2 hover:no-underline"
          href={GITHUB_GOOD_FIRST_ISSUES_URL}
          target="_blank"
          rel="noreferrer"
        >
          good first issue
        </a>
        , or read the{" "}
        <a
          className="text-foreground underline underline-offset-2 hover:no-underline"
          href={GITHUB_CONTRIBUTING_URL}
          target="_blank"
          rel="noreferrer"
        >
          contributing guide
        </a>{" "}
        before opening a PR. See also{" "}
        <a
          className="text-foreground underline underline-offset-2 hover:no-underline"
          href="/#contribute"
        >
          how to contribute
        </a>
        .
      </>
    ),
  },
];

export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="faq" className="border-t border-hairline/70 bg-surface-muted/30 py-24">
      <div className="container-prose">
        <div ref={ref} className="reveal mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            FAQ
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Questions, answered.
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10">
            <FeedbackButton />
          </div>
        </div>
      </div>
    </section>
  );
}
