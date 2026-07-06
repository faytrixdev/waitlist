import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowrio — Réveillez la mémoire de vos messageries",
  description:
    "Flowrio lit Gmail, Slack et WhatsApp et détecte automatiquement vos engagements, décisions et événements. Plus rien ne se perd dans le flux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
