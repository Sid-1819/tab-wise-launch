"use client";

import * as React from "react";
import Link from "next/link";
import { Chrome, Github, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeedbackButton } from "@/components/site/feedback-button";
import { Logo } from "@/components/site/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CHROME_WEB_STORE_URL, GITHUB_REPO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
  { label: "Compare", href: "/compare" },
  { label: "Privacy", href: "/privacy" },
] as const;

function Wordmark() {
  return (
    <Link href="/" className="group flex shrink-0 items-center">
      <Logo className="h-7 w-auto sm:h-8" />
    </Link>
  );
}

function NavLinks({
  className,
  linkClassName,
  onNavigate,
}: {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className={className}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn("transition-colors hover:text-foreground", linkClassName)}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const close = React.useCallback(() => setOpen(false), []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
        <SheetHeader className="text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <NavLinks
          className="mt-8 flex flex-col gap-1"
          linkClassName="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
          onNavigate={close}
        />
        <div className="mt-8 flex flex-col gap-2 border-t border-hairline/70 pt-6">
          <FeedbackButton className="w-full justify-start" onClick={close} />
          <Button asChild variant="outline" className="w-full justify-start">
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button asChild className="w-full justify-start">
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
              <Chrome className="size-4" />
              Add to Chrome
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-background/70 backdrop-blur-md">
      <div className="container-prose grid h-14 grid-cols-[auto_1fr_auto] items-center gap-2 sm:h-16 sm:gap-4">
        <Wordmark />

        <NavLinks
          className="hidden items-center justify-center gap-5 text-sm text-muted-foreground lg:flex xl:gap-7"
          linkClassName="whitespace-nowrap"
        />

        <div className="flex min-w-0 items-center justify-end gap-0.5 sm:gap-1.5">
          <ThemeSwitcher />
          <FeedbackButton
            variant="ghost"
            size="icon"
            showLabel={false}
            className="hidden sm:inline-flex"
          />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex lg:hidden"
            aria-label="GitHub repository"
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
              <Github className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden lg:inline-flex">
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button asChild size="sm" className="hidden shrink-0 sm:inline-flex">
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
              <Chrome className="size-4" />
              Add to Chrome
            </a>
          </Button>
          <Button asChild size="icon" className="shrink-0 sm:hidden" aria-label="Add to Chrome">
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
              <Chrome className="size-4" />
            </a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
