"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FeedbackButton } from "@/components/site/feedback-button";
import { FAQS, FAQ_LINKS } from "@/lib/faq-data";
import { useReveal } from "@/hooks/use-reveal";

function faqAnswer(index: number, answer: string): ReactNode {
  if (index !== FAQS.length - 1) return answer;

  return (
    <>
      Free to install from the Chrome Web Store and{" "}
      <a
        className="text-foreground underline underline-offset-2 hover:no-underline"
        href={FAQ_LINKS.repo}
        target="_blank"
        rel="noreferrer"
      >
        open source on GitHub
      </a>
      . File a{" "}
      <a
        className="text-foreground underline underline-offset-2 hover:no-underline"
        href={FAQ_LINKS.issues}
        target="_blank"
        rel="noreferrer"
      >
        bug or feature request
      </a>
      , grab a{" "}
      <a
        className="text-foreground underline underline-offset-2 hover:no-underline"
        href={FAQ_LINKS.goodFirstIssues}
        target="_blank"
        rel="noreferrer"
      >
        good first issue
      </a>
      , or read the{" "}
      <a
        className="text-foreground underline underline-offset-2 hover:no-underline"
        href={FAQ_LINKS.contributing}
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
  );
}

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
                  {faqAnswer(i, f.a)}
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
