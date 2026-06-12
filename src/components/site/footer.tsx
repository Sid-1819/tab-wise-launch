import { Link } from "@tanstack/react-router";
import { Github, Chrome } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { CHROME_WEB_STORE_URL, GITHUB_REPO_URL, PRODUCT_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-hairline/70 bg-surface-muted/40">
      <div className="container-prose flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link to="/">
            <Logo className="h-9 w-auto" />
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            A calm, side-panel tab manager for Chrome. Search, group, save and restore — without
            leaving the page.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Product
            </div>
            <ul className="space-y-2">
              <li><a className="hover:text-foreground" href="#features">Features</a></li>
              <li><a className="hover:text-foreground" href="#how">How it works</a></li>
              <li><a className="hover:text-foreground" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
                  <Chrome className="size-3.5" /> Web Store
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
                  <Github className="size-3.5" /> GitHub
                </a>
              </li>
              <li><Link to="/content" className="hover:text-foreground">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@tabwise.app</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-prose flex flex-col items-start justify-between gap-2 border-t border-hairline/70 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <div>© {new Date().getFullYear()} {PRODUCT_NAME}. Made for focused work.</div>
        <div>Not affiliated with Google LLC. Chrome is a trademark of Google.</div>
      </div>
    </footer>
  );
}
