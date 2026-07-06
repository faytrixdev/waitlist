import Link from "next/link";

const footerLinks = {
  Produit: [
    { label: "Fonctionnalités", href: "/#features" },
    { label: "Waitlist", href: "/#waitlist" },
  ],
  Légal: [
    { label: "Confidentialité", href: "#" },
    { label: "CGU", href: "#" },
    { label: "RGPD", href: "#" },
  ],
};

export function Footer() {
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
              La mémoire opérationnelle de vos messageries. Flowrio détecte vos engagements, décisions et événements Gmail, Slack et WhatsApp — pour que rien ne se perde.
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
          <p className="text-xs text-muted-foreground/30">&copy; {new Date().getFullYear()} Flowrio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
