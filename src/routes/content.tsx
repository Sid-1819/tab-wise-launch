import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/content")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tab Wise" },
      {
        name: "description",
        content:
          "How Tab Wise handles your data: local-only storage, no analytics, no servers.",
      },
      { property: "og:title", content: "Privacy Policy — Tab Wise" },
      {
        property: "og:description",
        content: "Tab Wise stores everything locally in your browser. No accounts, no tracking.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container-prose py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Privacy
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: <em>placeholder</em>
          </p>

          <div className="prose-tw mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Tab Wise</strong> is a Chrome extension that
              helps you organize, search, save and recover tabs from the side panel. This page
              explains exactly what data the extension touches and where it lives.
            </p>

            <Section title="What we collect">
              <p>Nothing is sent off your device. Tab Wise has no servers and no accounts.</p>
              <p>
                The extension reads <strong className="text-foreground">tab metadata</strong>{" "}
                (titles, URLs, group state, favicons) from the browser to power search, grouping,
                sessions and recovery. It does not read the contents of pages.
              </p>
            </Section>

            <Section title="Where data is stored">
              <p>
                Sessions, settings and preferences are stored locally using Chrome’s{" "}
                <code className="rounded bg-surface-muted px-1.5 py-0.5 text-foreground">
                  storage
                </code>{" "}
                API. They never leave your browser unless you explicitly export them.
              </p>
            </Section>

            <Section title="Permissions, in plain English">
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-foreground">tabs / tabGroups</strong> — list and organize your open tabs.</li>
                <li><strong className="text-foreground">storage</strong> — save sessions and preferences locally.</li>
                <li><strong className="text-foreground">sidePanel</strong> — render Tab Wise in Chrome’s side panel.</li>
                <li><strong className="text-foreground">Host access</strong> — read tab titles and URLs across opened sites; never page contents.</li>
                <li><strong className="text-foreground">system.memory</strong> (optional) — power the system RAM meter; opt-in.</li>
              </ul>
            </Section>

            <Section title="Analytics">
              <p>None. There is no telemetry, no usage tracking and no third-party SDKs.</p>
            </Section>

            <Section title="Contact">
              <p>
                Questions or concerns? Email{" "}
                <a className="text-foreground underline" href="mailto:hello@tabwise.app">
                  hello@tabwise.app
                </a>
                .
              </p>
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
      <h2 className="mb-2 font-display text-xl text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
