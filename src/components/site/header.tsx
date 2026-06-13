import { Link } from "@tanstack/react-router";
import { Github, Chrome } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeedbackButton } from "@/components/site/feedback-button";
import { Logo } from "@/components/site/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CHROME_WEB_STORE_URL, GITHUB_REPO_URL } from "@/lib/constants";

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center">
      <Logo className="h-8 w-auto" />
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-background/70 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Wordmark />
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#trust" className="transition-colors hover:text-foreground">Privacy</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeSwitcher />
          <FeedbackButton variant="ghost" size="icon" showLabel={false} />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button asChild size="sm" className="ml-1">
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
              <Chrome className="size-4" />
              Add to Chrome
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
