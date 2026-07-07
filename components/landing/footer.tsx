"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/use-translations";

export function Footer() {
  const t = useTranslations();

  const footerLinks: Record<string, { label: string; href: string }[]> = {};
  footerLinks[t.footer.product] = [
    { label: t.footer.features, href: "/#features" },
    { label: t.footer.waitlist, href: "/#waitlist" },
  ];
  footerLinks[t.footer.legal] = [
    { label: t.footer.privacy, href: "#" },
    { label: t.footer.tos, href: "#" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/logos/logo-flowrio.png" alt="Flowrio" className="h-10 w-10 object-contain" />
              <span className="font-sans font-semibold text-sm text-foreground">Flowrio</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground/60">
              {t.footer.description}
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground/60">{category}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground/50 transition-colors duration-300 hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/30 pt-8 text-center">
          <p className="text-xs text-muted-foreground/30">&copy; {new Date().getFullYear()} Flowrio. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
