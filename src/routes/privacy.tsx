import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FeedbackButton } from "@/components/site/feedback-button";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PRODUCT_NAME } from "@/lib/constants";

const LAST_UPDATED = "June 13, 2026";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  usePageMeta({
    title: `Privacy Policy — ${PRODUCT_NAME}`,
    description:
      "How Tab Wise handles your data: local-only extension storage, no accounts, and transparent permissions.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Privacy
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

          <div className="prose-tw mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">{PRODUCT_NAME}</strong> is a Chrome extension that
              helps you organize, search, save and recover tabs from the side panel. This policy
              covers both the extension and this website ({PRODUCT_NAME} launch site).
            </p>

            <Section title="Summary">
              <ul className="list-disc space-y-2 pl-5">
                <li>No Tab Wise account. No sign-in required.</li>
                <li>
                  Extension data stays on your device in Chrome&apos;s local storage unless you
                  export it yourself.
                </li>
                <li>
                  The extension reads tab metadata only — titles, URLs, group state and favicons. It
                  never reads page contents.
                </li>
                <li>No analytics or telemetry in the extension.</li>
              </ul>
            </Section>

            <Section title="The extension">
              <p>
                <strong className="text-foreground">What we access.</strong> To power search,
                grouping, sessions and recovery, Tab Wise reads tab metadata from Chrome. That
                includes page titles, URLs, which tabs belong to which groups, and favicons. It does
                not scrape, inject into, or transmit the contents of any webpage.
              </p>
              <p>
                <strong className="text-foreground">Where it is stored.</strong> Saved sessions,
                settings and preferences are stored locally using Chrome&apos;s{" "}
                <code className="rounded bg-surface-muted px-1.5 py-0.5 text-foreground">
                  storage
                </code>{" "}
                API. Nothing is uploaded to Tab Wise servers — we do not operate backend storage for
                your browsing data.
              </p>
              <p>
                <strong className="text-foreground">What we do not do.</strong> No usage analytics,
                no crash reporting SDKs, no third-party trackers, and no selling or sharing of your
                browsing data.
              </p>
            </Section>

            <Section title="Chrome permissions">
              <p>Tab Wise requests only what it needs. In plain English:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">tabs / tabGroups</strong> — list, search,
                  switch, close and organize your open tabs.
                </li>
                <li>
                  <strong className="text-foreground">storage</strong> — save sessions and
                  preferences locally in your browser.
                </li>
                <li>
                  <strong className="text-foreground">sidePanel</strong> — render Tab Wise in
                  Chrome&apos;s side panel.
                </li>
                <li>
                  <strong className="text-foreground">Host access</strong> — read tab titles and
                  URLs across sites you have opened. Required for search and grouping; never used to
                  read page content.
                </li>
                <li>
                  <strong className="text-foreground">system.memory</strong> (optional) — powers the
                  system RAM meter if you enable it. Reports overall machine memory pressure, not
                  per-tab or per-site usage.
                </li>
              </ul>
            </Section>

            <Section title="This website">
              <p>
                This launch site is static marketing content. It does not collect accounts or track
                your browsing inside the extension.
              </p>
              <p>
                <strong className="text-foreground">Feedback form.</strong> If you open
                &ldquo;Feedback &amp; Support&rdquo; on this site, your responses are submitted
                through Encatch, our feedback provider, only when you choose to send them. We do not
                run separate analytics on this site.
              </p>
              <p>
                <strong className="text-foreground">Theme preference.</strong> Light/dark mode and
                color preset choices may be stored in your browser&apos;s local storage so the site
                remembers your appearance settings.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                We may update this policy as the product evolves. The &ldquo;Last updated&rdquo;
                date at the top will change when we do. Continued use of Tab Wise after an update
                means you accept the revised policy.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about privacy or permissions? Send feedback through the form below or open
                an issue on{" "}
                <a
                  className="text-foreground underline"
                  href="https://github.com/Sid-1819/tab-wise"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
              <FeedbackButton className="mt-4" />
            </Section>
          </div>

          <div className="mt-12">
            <Link to="/" className="text-sm font-medium hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 font-display text-xl text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
