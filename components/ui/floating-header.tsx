"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Fonctionnalités", href: "/#features" },
  { label: "Comment ça marche", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

function scrollToHash(href: string) {
  const hash = href.split("#")[1];
  if (hash) {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
  }
}

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl transition-all duration-500",
        scrolled ? "top-3" : "top-6"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-14 w-full items-center justify-between rounded-2xl border px-4 transition-all duration-500",
          "bg-background/70 backdrop-blur-xl",
          scrolled
            ? "border-border/60 shadow-lg shadow-black/5"
            : "border-border/30 shadow-sm shadow-black/5"
        )}
      >
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition-colors duration-200 hover:bg-muted/50 group"
        >
          <img
            src="/logos/logo-flowrio.png"
            alt="Flowrio"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-sans font-semibold text-base tracking-tight text-foreground">
            Flowrio
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToHash(link.href); }}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg cursor-pointer",
                "text-muted-foreground/80 hover:text-foreground hover:bg-muted/50"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="shadow-sm" asChild>
            <a href="/#waitlist" onClick={(e) => { e.preventDefault(); scrollToHash("/#waitlist"); }}>Rejoindre la waitlist</a>
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-border/30 transition-colors hover:bg-muted/50"
            aria-label="Menu"
          >
            {open ? (
              <X className="h-4 w-4 text-foreground" />
            ) : (
              <Menu className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={cn(
            "mt-2 rounded-2xl border border-border/40 bg-background/95 backdrop-blur-xl p-4 shadow-lg md:hidden",
            "animate-fade-in"
          )}
        >
          <div className="grid gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToHash(link.href); setOpen(false); }}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className: "justify-start text-muted-foreground hover:text-foreground",
                  })
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 border-t border-border/30 pt-3">
            <Button size="sm" className="w-full" asChild>
              <a href="/#waitlist" onClick={(e) => { e.preventDefault(); scrollToHash("/#waitlist"); setOpen(false); }}>
                Rejoindre la waitlist
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
